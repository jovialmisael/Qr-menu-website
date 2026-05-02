import { useCartStore } from '../store/cart.store';
import { useMenuStore } from '../store/menu.store';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, Sparkles, Receipt, ArrowRight } from 'lucide-react';
import { CartItem, MenuItem, AddOnGroup, AddOnChoice } from '../types/menu';
import { formatPrice } from '../utils/formatters';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export default function CartSheet({ isOpen, onClose, onCheckout }: Props) {
  const { items: cartItems, updateQuantity, removeItem, calculateTotal } = useCartStore();
  const { items: menuItems } = useMenuStore();

  const getCartTotals = () => {
    const subtotal = calculateTotal(menuItems);
    const tax = subtotal * 0.1;
    const service = subtotal * 0.05;
    const total = subtotal + tax + service;
    return { subtotal, tax, service, total };
  };

  const { subtotal, tax, service, total } = getCartTotals();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[var(--color-on-surface)]/30 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.8 }}
            className="absolute top-0 right-0 w-full h-full bg-[var(--color-surface)] z-[70] shadow-[0_0_100px_rgba(0,0,0,0.4)] flex flex-col"
          >
            {/* Editorial Header */}
            <header className="px-10 pt-16 pb-12">
               <div className="flex justify-between items-start mb-12">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-2xl bg-[var(--color-on-surface)] text-white flex items-center justify-center shadow-xl">
                        <ShoppingBag className="w-5 h-5" />
                     </div>
                     <span className="text-[10px] font-label uppercase tracking-[0.4em] opacity-40">Your Selection Gallery</span>
                  </div>
                  <button 
                    onClick={onClose}
                    className="w-10 h-10 glass border border-stone-100 rounded-full flex items-center justify-center hover:bg-[var(--color-on-surface)] hover:text-white transition-all group"
                  >
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                  </button>
               </div>
               
               <h2 className="text-5xl font-display leading-[0.85] tracking-tighter">Current <br /> <span className="text-[var(--color-primary)]">Selections.</span></h2>
            </header>

            {/* Selection Gallery */}
            <div className="flex-1 overflow-y-auto px-10 pb-40 no-scrollbar">
              {cartItems.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-24 text-center"
                >
                  <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-8 h-8 opacity-10" />
                  </div>
                  <h3 className="text-3xl font-display mb-4">No Fragments Found.</h3>
                  <p className="text-sm text-[var(--color-on-surface-variant)] font-body font-light opacity-60 leading-relaxed mb-12 italic max-w-[280px] mx-auto">
                    "Your digital journal is waiting for its first artisanal entry."
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-10 py-4 border border-stone-100 rounded-full font-label text-[10px] uppercase tracking-widest hover:bg-[var(--color-on-surface)] hover:text-white transition-all"
                  >
                    Explore The Menu
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
                     <span className="text-[9px] font-label uppercase tracking-widest opacity-40">{cartItems.length} Registered Items</span>
                     <span className="text-[9px] font-label uppercase tracking-widest opacity-40">Table Settlement Model</span>
                  </div>

                  <AnimatePresence initial={false}>
                    {cartItems.map((item: CartItem) => {
                      const product = menuItems.find((i: MenuItem) => i.id === item.menuItemId);
                      if (!product) return null;

                      // Derive individual display price
                      let displayPrice = product.basePrice;
                      if (item.options && product.meta) {
                        const sizeDef = product.meta.sizes?.find((s: any) => s.label === item.options!.size);
                        if (sizeDef) displayPrice = sizeDef.price;
                        if (item.options.shots && item.options.shots > 1) displayPrice += (item.options.shots - 1) * 8000;
                        if (item.options.syrup && (item.options.syrup as any).length > 0) displayPrice += (item.options.syrup as any).length * 6000;
                        if (item.options.milk && item.options.milk !== 'Standard Whole Milk') displayPrice += 12000;
                      } else {
                        item.selectedAddOns.forEach((sel: { groupId: string; choiceIds: string[] }) => {
                          const group = product.addOnGroups?.find((g: AddOnGroup) => g.id === sel.groupId);
                          sel.choiceIds.forEach((cid: string) => {
                            const choice = group?.choices.find((c: AddOnChoice) => c.id === cid);
                            if (choice) displayPrice += choice.priceDelta;
                          });
                        });
                      }

                      return (
                        <motion.div 
                          key={item.id}
                          layout
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20, scale: 0.95 }}
                          className="group relative bg-white border border-stone-50 rounded-[2.5rem] p-6 hover:shadow-2xl transition-all duration-500"
                        >
                          <div className="flex gap-8 items-start">
                             <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-lg border border-stone-100 group-hover:scale-105 transition-transform duration-500 flex-shrink-0">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                             </div>
                             
                             <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start mb-2">
                                   <div>
                                      <h4 className="font-display text-xl leading-tight group-hover:text-[var(--color-primary)] transition-colors">{product.name}</h4>
                                      
                                      <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2 opacity-50 transition-opacity">
                                        {/* POS Options Render */}
                                        {item.options && (
                                           <>
                                             <span className="text-[9px] font-label uppercase tracking-widest">• {item.options.size}</span>
                                             {item.options.milk && item.options.milk !== 'Standard Whole Milk' && <span className="text-[9px] font-label uppercase tracking-widest">• {item.options.milk}</span>}
                                             {item.options.shots && item.options.shots > 1 && <span className="text-[9px] font-label uppercase tracking-widest">• {item.options.shots} Shots</span>}
                                             {item.options.temperature && <span className="text-[9px] font-label uppercase tracking-widest">• {item.options.temperature.replace('Serve ', '')}</span>}
                                             {item.options.sweetness && item.options.sweetness !== 'Normal Sweet' && <span className="text-[9px] font-label uppercase tracking-widest">• {item.options.sweetness}</span>}
                                           </>
                                        )}
                                        
                                        {/* Legacy Options Render */}
                                        {!item.options && item.selectedAddOns.map((sel: { groupId: string; choiceIds: string[] }) => {
                                          const group = product.addOnGroups?.find((g: AddOnGroup) => g.id === sel.groupId);
                                          return sel.choiceIds.map((cid: string) => {
                                            const choice = group?.choices.find((c: AddOnChoice) => c.id === cid);
                                            return <span key={cid} className="text-[9px] font-label uppercase tracking-widest">• {choice?.name}</span>;
                                          });
                                        })}
                                      </div>
                                   </div>
                                   
                                   <button 
                                      onClick={() => removeItem(item.id)}
                                      className="w-9 h-9 rounded-full flex items-center justify-center bg-stone-50 text-stone-400 hover:bg-red-50 hover:text-red-500 transition-all active:scale-95 flex-shrink-0 ml-2"
                                   >
                                      <Trash2 className="w-4 h-4" />
                                   </button>
                                </div>

                                <div className="flex justify-between items-end mt-4">
                                   <p className="text-lg font-display text-[var(--color-primary)]">{formatPrice(displayPrice)}</p>
                                   
                                   <div className="flex items-center gap-4 bg-stone-50 rounded-full px-4 py-2">
                                      <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-[var(--color-primary)] transition-colors active:scale-90">
                                        <Minus className="w-3 h-3" />
                                      </button>
                                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                      <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-[var(--color-primary)] transition-colors active:scale-90">
                                        <Plus className="w-3 h-3" />
                                      </button>
                                   </div>
                                </div>
                             </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Table Settlement Ledger */}
            <div className="mt-auto bg-white/80 backdrop-blur-3xl border-t border-stone-100 p-10 pt-12 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-stone-100 overflow-hidden">
                   <motion.div 
                     initial={{ x: '-100%' }}
                     animate={{ x: '100%' }}
                     transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                     className="w-1/2 h-full bg-[var(--color-primary)] opacity-10"
                   />
               </div>
               
               <div className="space-y-4 mb-12">
                  <div className="flex justify-between items-end">
                     <span className="text-[9px] font-label uppercase tracking-widest opacity-40">Subtotal Summary</span>
                     <span className="text-sm font-body font-bold border-b border-stone-100">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between items-end">
                     <div className="flex items-center gap-2">
                        <span className="text-[9px] font-label uppercase tracking-widest opacity-40">Concierge & Tax</span>
                        <Receipt className="w-3 h-3 opacity-20" />
                     </div>
                     <span className="text-sm font-body font-bold border-b border-stone-100">{formatPrice(tax + service)}</span>
                  </div>
                  
                  <div className="pt-8 flex justify-between items-baseline">
                     <h3 className="text-4xl font-display">Settlement.</h3>
                     <div className="text-right">
                        <p className="text-[10px] font-label uppercase tracking-[0.2em] opacity-40 mb-1">TOTAL LEDGER</p>
                        <p className="text-5xl font-display text-[var(--color-primary)] shadow-sm animate-pulse-slow">{formatPrice(total)}</p>
                     </div>
                  </div>
               </div>

               <button
                  disabled={cartItems.length === 0}
                  onClick={onCheckout}
                  className="w-full btn-primary py-7 rounded-full flex items-center justify-between px-10 group overflow-hidden relative"
               >
                 <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="relative z-10 text-xs font-label text-white uppercase tracking-widest font-bold">Initiate Preparation</span>
                 <div className="flex items-center gap-3 relative z-10">
                    <span className="w-8 h-[1px] bg-white/40 group-hover:w-12 transition-all duration-500" />
                    <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                 </div>
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
