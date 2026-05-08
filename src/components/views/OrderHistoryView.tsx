import { motion, AnimatePresence } from 'framer-motion';
import { useOrderStore } from '../../store/order.store';
import { useMenuStore } from '../../store/menu.store';
import { useCartStore } from '../../store/cart.store';
import { History, Clock, CheckCircle2, ArrowRight, Table, Coffee, Globe, Compass, ShoppingBag } from 'lucide-react';

interface Props {
  onBackToMenu: () => void;
  onTrackOrder: () => void;
}

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export default function OrderHistoryView({ onBackToMenu, onTrackOrder }: Props) {
  const { currentOrder, orderHistory } = useOrderStore();
  const { items: menuItems } = useMenuStore();
  const { addItem } = useCartStore();

  const handleReorder = (order: any) => {
    order.items.forEach((item: any) => {
      const product = menuItems.find((m) => m.id === item.menuItemId);
      if (product) {
        addItem(product, item.selectedAddOns || [], item.quantity, item.options, item.sku_code);
      }
    });
    onBackToMenu();
  };

  // Real derived stats
  const totalSpent = orderHistory.reduce((s, o) => s + o.totalPrice, 0);
  const totalItems = orderHistory.reduce((s, o) => s + o.items.length, 0);

  return (
    <div className="py-8 px-6">
      {/* Editorial Header */}
      <header className="mb-20">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="flex items-center gap-4 mb-4"
        >
           <div className="w-12 h-[1px] bg-[var(--color-primary)]" />
           <span className="font-label text-xs uppercase tracking-[0.3em] text-[var(--color-primary)]">The Discovery Ledger</span>
        </motion.div>
        <h1 className="text-6xl font-display tracking-tighter leading-none mb-12">Experience Archive.</h1>
        
        {/* Live Stats from real order data */}
        <div className="grid grid-cols-2 gap-4">
           {[
             { label: 'Orders Made', value: orderHistory.length.toString().padStart(2, '0'), icon: History },
             { label: 'Items Ordered', value: totalItems.toString().padStart(2, '0'), icon: Globe },
             { label: 'Currently Active', value: currentOrder ? '01' : '00', icon: Clock },
             { label: 'Total Spent (k)', value: `${(totalSpent / 1000).toFixed(0)}`, icon: Compass },
           ].map((stat) => (
             <div key={stat.label} className="glass p-6 rounded-3xl border border-stone-100 flex flex-col gap-4">
                <div className="w-10 h-10 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                   <stat.icon className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div>
                  <p className="text-[9px] font-label uppercase tracking-widest opacity-40 mb-1">{stat.label}</p>
                  <p className="text-2xl font-display leading-none">{stat.value}</p>
                </div>
             </div>
           ))}
        </div>
      </header>

      <div className="space-y-20">
        {/* Active Session Section */}
        {currentOrder && (
          <section>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-stone-100">
               <h3 className="text-[10px] font-label uppercase tracking-widest opacity-40">The Active Fragment</h3>
               <span className="text-[10px] font-label uppercase tracking-widest text-green-600 animate-pulse flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                 Live Stream
               </span>
            </div>
            
            <motion.div 
              whileHover={{ y: -4 }}
              className="glass p-8 rounded-[3rem] flex flex-col items-start gap-8 border border-[var(--color-primary)]/10 shadow-xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] rotate-12">
                  <Coffee className="w-full h-full" />
               </div>

               <div className="flex items-center gap-8">
                  <div className="w-24 h-24 bg-[var(--color-primary)] text-white rounded-3xl flex items-center justify-center shadow-2xl relative">
                     <Clock className="w-10 h-10" />
                     <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                        <Table className="w-4 h-4 text-[var(--color-primary)]" />
                     </div>
                  </div>
                  <div>
                     <p className="text-xs font-label uppercase tracking-widest opacity-40 mb-2">IDENTIFIER: {currentOrder.id}</p>
                     <h2 className="text-4xl font-display leading-tight">In Preparation.</h2>
                     <p className="text-sm opacity-60 font-body">Refining your {currentOrder.items.length} artisanal selections at Table {currentOrder.tableId}.</p>
                  </div>
               </div>
               
               <button 
                 onClick={onTrackOrder}
                 className="w-full btn-primary flex items-center justify-between gap-4 px-8 py-5"
               >
                  <span className="font-label text-xs uppercase tracking-widest">Observe Progress</span>
                  <ArrowRight className="w-4 h-4" />
               </button>
            </motion.div>
          </section>
        )}

        {/* The Archive Section */}
        <section>
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-stone-100">
             <h3 className="text-[10px] font-label uppercase tracking-widest opacity-40">Historical Archive</h3>
             <span className="text-[10px] font-label uppercase tracking-widest opacity-40">Sorted by Chronos</span>
          </div>

          {orderHistory.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-20 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mb-8 border border-stone-100">
                <ShoppingBag className="w-8 h-8 opacity-10" />
              </div>
              <h3 className="text-3xl font-display mb-4">No Archive Found.</h3>
              <p className="text-sm font-body opacity-60 max-w-[260px]">Your past orders will appear here once you complete your first settlement.</p>
              <button onClick={onBackToMenu} className="mt-10 px-10 py-4 bg-[var(--color-primary)] text-white rounded-full font-label text-xs uppercase tracking-widest active:scale-95 transition-all">
                Begin Your First Order
              </button>
            </motion.div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {orderHistory.map((order, index) => (
                  <motion.div 
                    key={order.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="group relative"
                  >
                    <div className="flex flex-col justify-between items-start gap-6 p-8 bg-[var(--color-surface-container-low)] rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-stone-100">
                      <div className="flex items-center gap-6 w-full mb-2">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-stone-200 group-hover:border-[var(--color-primary)]/20 shadow-sm">
                          <History className="w-6 h-6 opacity-20 group-hover:opacity-100 group-hover:text-[var(--color-primary)] transition-all" />
                        </div>
                        <div>
                          <p className="text-[10px] font-label opacity-40 uppercase tracking-widest mb-1">{formatDate(order.createdAt)}</p>
                          <h4 className="font-display text-2xl group-hover:tracking-tight transition-all">{order.id}</h4>
                        </div>
                      </div>

                      <div className="flex flex-col w-full gap-4 border-t border-stone-100 pt-6">
                         <div className="text-left w-full mb-2">
                            <p className="text-[10px] font-label opacity-40 uppercase tracking-widest mb-3">Detailed Protocol</p>
                            <div className="flex flex-col gap-2 bg-stone-50/50 p-4 rounded-2xl border border-stone-100/50">
                              {order.items.map((item, idx) => {
                                const product = menuItems.find(m => m.id === item.menuItemId);
                                if (!product) return null;
                                return (
                                  <div key={idx} className="flex justify-between items-center text-sm font-body">
                                    <span className="font-medium opacity-80">{item.quantity}x {product.name}</span>
                                    {item.options && <span className="text-[10px] uppercase font-label opacity-40">{item.options.size}</span>}
                                  </div>
                                );
                              })}
                            </div>
                         </div>
                         <div className="flex justify-between items-end w-full">
                           <div className="text-left">
                              <p className="text-[10px] font-label opacity-40 uppercase tracking-widest mb-1">LEDGER</p>
                              <p className="font-display text-2xl text-[var(--color-primary)]">${(order.totalPrice / 1000).toFixed(0)}</p>
                           </div>
                           <div className="flex items-center gap-3">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleReorder(order);
                                }}
                                className="h-12 px-6 rounded-full flex items-center justify-center bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-all font-label text-[10px] uppercase tracking-widest font-bold"
                              >
                                Pesan Lagi
                              </button>
                              <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-green-500/10 group-hover:bg-green-500 group-hover:text-white transition-all">
                                 <CheckCircle2 className="w-5 h-5 text-green-500 group-hover:text-white" />
                              </div>
                           </div>
                         </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>
      </div>

      <div className="mt-32 pt-12 border-t border-stone-100 text-center">
         <button 
           onClick={onBackToMenu}
           className="px-10 py-4 glass border border-stone-200 rounded-full font-label text-xs uppercase tracking-[0.2em] hover:bg-[var(--color-on-surface)] hover:text-white transition-all"
         >
           Close Ledger & Return
         </button>
      </div>
    </div>
  );
}
