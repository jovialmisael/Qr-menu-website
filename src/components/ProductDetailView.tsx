import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MinusCircle, PlusCircle, Coffee, Settings2, AlertTriangle } from 'lucide-react';
import { MenuItem, AddOnGroup, AddOnChoice, POSOptions } from '../types/menu';
import { useStockStore } from '../store/stock.store';
import { useMenuStore } from '../store/menu.store';
import { formatPrice } from '../utils/formatters';

interface Props {
  item: MenuItem;
  onClose: () => void;
  onAddToCart: (item: MenuItem, selections: any, quantity: number, options?: POSOptions, sku_code?: string) => void;
}

export default function ProductDetailView({ item, onClose, onAddToCart }: Props) {
  const { getStock, resetIfNewDay } = useStockStore();
  resetIfNewDay();
  const stockLeft = item.isAvailable ? getStock(item.id) : 0;
  const isLowStock = stockLeft > 0 && stockLeft <= 15;
  const isStockDepleted = item.isAvailable && stockLeft === 0;

  const [quantity, setQuantity] = useState(1);
  const [isBaristaMode, setIsBaristaMode] = useState(false);
  
  // Legacy State Support
  const [legacySelections, setLegacySelections] = useState<Record<string, string[]>>({});
  
  const { items: allMenuItems } = useMenuStore();
  
  const crossSellItem = (() => {
    if (item.categoryId === 'artisanal-pastries' || item.categoryId === 'brunch-plates') {
      return allMenuItems.find(m => m.categoryId === 'signature-coffees' && m.isAvailable);
    }
    return allMenuItems.find(m => m.categoryId === 'artisanal-pastries' && m.isAvailable);
  })();

  const [totalPrice, setTotalPrice] = useState(item.basePrice);

  // Add-On Initialization
  useEffect(() => {
    const init: Record<string, string[]> = {};
    item.addOnGroups?.forEach(group => {
      if (group.minSelection > 0 && group.choices?.[0]) {
        init[group.id] = [group.choices[0].id];
      } else {
        init[group.id] = [];
      }
    });
    setLegacySelections(init);
  }, [item]);

  // Price Calculation Engine
  useEffect(() => {
    let base = item.basePrice;
    let extra = 0;

    Object.entries(legacySelections).forEach(([groupId, choiceIds]) => {
      const group = item.addOnGroups?.find(g => g.id === groupId);
      choiceIds.forEach(cid => {
        const choice = group?.choices.find(c => c.id === cid);
        if (choice) extra += choice.priceDelta;
      });
    });

    setTotalPrice((base + extra) * quantity);
  }, [legacySelections, item, quantity]);

  // Legacy Selection Toggler
  const toggleLegacyChoice = (group: AddOnGroup, choice: AddOnChoice) => {
    const current = legacySelections[group.id] || [];
    const isSelected = current.includes(choice.id);

    if (isSelected) {
      if (current.length > group.minSelection) {
        setLegacySelections({ ...legacySelections, [group.id]: current.filter(id => id !== choice.id) });
      }
    } else {
      if (group.maxSelection === 1) {
        setLegacySelections({ ...legacySelections, [group.id]: [choice.id] });
      } else if (current.length < group.maxSelection) {
        setLegacySelections({ ...legacySelections, [group.id]: [...current, choice.id] });
      }
    }
  };

  const isSelectionValid = true; // Assuming defaults are met via strict binding

  const formatIDR = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price).replace(/\s/g, '');
  };

  const handleAddToCart = () => {
    onAddToCart(item, legacySelections, quantity, undefined, item.meta?.sku_code);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-[100] flex flex-col bg-white overflow-hidden font-sans"
    >
      <motion.div layoutId={`product-${item.id}`} className="w-full h-full flex flex-col relative z-10">
        
        {/* Full Header Image Area */}
        <div className="w-full h-[220px] sm:h-[280px] relative bg-stone-100 flex-shrink-0 z-0">
           <motion.img 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.3 }}
             src={item.image} 
             alt={item.name} 
             className="w-full h-full object-cover"
           />
           <button 
             onClick={onClose}
             className="absolute top-4 right-4 z-50 w-9 h-9 bg-white/90 backdrop-blur-sm text-stone-900 rounded-full flex items-center justify-center shadow-sm active:scale-95"
           >
             <X className="w-5 h-5" />
           </button>
           
           {/* Technical Spec Toggle */}
           {(item.meta?.barista_recipe || item.meta?.chef_recipe) && (
             <button 
               onClick={() => setIsBaristaMode(!isBaristaMode)}
               className={`absolute bottom-6 right-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full shadow-lg border backdrop-blur-md transition-colors ${
                 isBaristaMode ? 'bg-[#0E5C37] text-white border-[#0E5C37]' : 'bg-white/90 text-stone-700 border-white/20'
               }`}
             >
               <Settings2 className="w-4 h-4" />
               <span className="text-[10px] uppercase tracking-wider font-bold">
                 {item.meta?.barista_recipe ? 'Barista Spec' : 'Kitchen Spec'}
               </span>
             </button>
           )}
        </div>

        {/* Scrollable Content Container */}
        <div className="flex-1 flex flex-col min-h-0 bg-white relative z-10 -mt-4 rounded-t-2xl shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
          <div className="flex-1 overflow-y-auto custom-scrollbar pb-6 relative">
            
            <header className="px-5 py-6 border-b border-stone-100">
              <div className="flex justify-between items-start gap-4 mb-1">
                <h1 className="text-xl font-bold text-stone-900 leading-tight">{item.name}</h1>
                {item.meta && (
                  <span className="font-mono text-[10px] px-2 py-1 bg-stone-100 text-stone-500 rounded uppercase tracking-widest whitespace-nowrap">
                    {item.meta.sku_code}
                  </span>
                )}
              </div>
              <span className="font-semibold text-lg text-[#0E5C37] block mb-2">{formatIDR(item.basePrice)}</span>
              <p className="text-sm font-sans text-stone-600 leading-relaxed">
                {item.meta?.short_description || item.description}
              </p>
            </header>

            {/* --- SPEC MODE OVERLAY --- */}
            <AnimatePresence>
              {isBaristaMode && item.meta && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-stone-900 text-stone-50 overflow-hidden"
                >
                  <div className="p-5 border-l-4 border-emerald-500">
                    {item.meta.barista_recipe ? (
                      <>
                        <div className="flex items-center gap-2 mb-4 text-emerald-400">
                          <Coffee className="w-5 h-5" />
                          <h3 className="text-sm font-bold uppercase tracking-widest">Extraction Targets</h3>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs font-mono">
                          <div><span className="text-stone-500 block">Origin/Blend</span>{item.meta.barista_recipe.coffee_origin_or_blend}</div>
                          <div><span className="text-stone-500 block">Roast Level</span>{item.meta.barista_recipe.roast_level}</div>
                          <div><span className="text-stone-500 block">Dose (IN)</span>{item.meta.barista_recipe.dose_grams}g</div>
                          <div><span className="text-stone-500 block">Yield (OUT)</span>{item.meta.barista_recipe.yield_ml}ml</div>
                          <div><span className="text-stone-500 block">Time</span>{item.meta.barista_recipe.extraction_time_seconds}s</div>
                          <div><span className="text-stone-500 block">Steam Temp</span>{item.meta.barista_recipe.steam_temperature_celsius}°C</div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-stone-800 text-xs">
                          <span className="text-emerald-500 font-bold block mb-1">Presentation Notes</span>
                          <p className="text-stone-400">{item.meta.barista_recipe.presentation_notes}</p>
                        </div>
                      </>
                    ) : item.meta.chef_recipe ? (
                      <>
                        <div className="flex items-center gap-2 mb-4 text-emerald-400">
                          <Settings2 className="w-5 h-5" />
                          <h3 className="text-sm font-bold uppercase tracking-widest">Kitchen Standards</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-y-4 text-xs font-mono">
                          <div><span className="text-stone-500 block">Prep Method</span>{item.meta.chef_recipe.prep_method}</div>
                          <div><span className="text-stone-500 block">Key Ingredients</span>{item.meta.chef_recipe.key_ingredients.join(', ')}</div>
                          <div><span className="text-stone-500 block">Plating Style</span>{item.meta.chef_recipe.plating_style}</div>
                          <div><span className="text-stone-500 block">Dietary Flags</span>{item.meta.chef_recipe.dietary_flags.join(' • ')}</div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-stone-800 text-xs">
                          <span className="text-emerald-500 font-bold block mb-1">Chef Notes</span>
                          <p className="text-stone-400">{item.meta.chef_recipe.chef_notes}</p>
                        </div>
                      </>
                    ) : null}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* --- CUSTOMIZATION FLOW --- */}
            {/* Dynamic Add-On Groups */}
              <div className="space-y-0">
                {item.addOnGroups?.map((group) => (
                  <section key={group.id} className="border-b border-stone-100 py-6 px-5">
                    <div className="mb-4">
                       <h3 className="text-base font-bold text-stone-900">{group.name}</h3>
                       <p className="text-sm text-stone-500">
                         {group.minSelection > 0 ? `Required • Select at least ${group.minSelection}` : `Optional`}
                       </p>
                    </div>
                    <div className="flex flex-col gap-0">
                      {group.choices.map(choice => {
                        const isSelected = (legacySelections[group.id] || []).includes(choice.id);
                        return (
                          <label key={choice.id} className="flex justify-between items-center py-3 cursor-pointer group">
                            <div className="flex items-center gap-3">
                              <input 
                                type={group.maxSelection === 1 ? 'radio' : 'checkbox'}
                                checked={isSelected}
                                onChange={() => toggleLegacyChoice(group, choice)}
                                className="w-5 h-5 accent-[#0E5C37] rounded-sm group-hover:bg-stone-50 cursor-pointer"
                              />
                              <span className="text-sm text-stone-800">{choice.name}</span>
                            </div>
                            {choice.priceDelta > 0 && (
                              <span className="text-sm text-stone-900 font-medium whitespace-nowrap">
                                +{formatPrice(choice.priceDelta)}
                              </span>
                            )}
                          </label>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
              
              {/* --- CROSS-SELLING ALGORITHM --- */}
              {crossSellItem && (
                <section className="border-b border-stone-100 py-6 px-5 bg-stone-50">
                   <div className="mb-4">
                      <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                         Cocok dinikmati bersama...
                      </h3>
                   </div>
                   <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-stone-100 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                      <img src={crossSellItem.image} alt={crossSellItem.name} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1 min-w-0">
                         <h4 className="text-sm font-bold text-stone-900 truncate">{crossSellItem.name}</h4>
                         <p className="text-xs text-stone-500 mt-1 truncate">{crossSellItem.meta?.short_description || crossSellItem.description}</p>
                         <p className="text-sm font-bold text-[#0E5C37] mt-1">+{formatIDR(crossSellItem.basePrice)}</p>
                      </div>
                      <button 
                         onClick={(e) => { 
                           e.stopPropagation(); 
                           onAddToCart(crossSellItem, {}, 1, undefined, crossSellItem.meta?.sku_code); 
                         }}
                         className="w-8 h-8 flex-shrink-0 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-[#0E5C37] hover:text-white transition-colors"
                      >
                         <PlusCircle className="w-5 h-5" />
                      </button>
                   </div>
                </section>
              )}
          </div>

          {/* Sticky Bottom Settlement Bar */}
          <div className="p-4 pl-5 bg-white border-t border-stone-100 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
            {/* Low stock warning */}
            {isLowStock && (
              <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 mb-3">
                <AlertTriangle className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                <p className="text-xs font-sans text-orange-700 font-medium">
                  Only <span className="font-bold">{stockLeft}</span> left today — order soon!
                </p>
              </div>
            )}
            {(!item.isAvailable || isStockDepleted) ? (
              <div className="w-full bg-stone-100 border border-stone-200 rounded-xl h-[52px] font-sans font-semibold text-sm flex items-center justify-center gap-2 text-stone-400">
                <span className="w-2 h-2 rounded-full bg-red-400 inline-block"></span>
                {isStockDepleted ? 'Sold Out Today' : 'Currently Unavailable'}
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-stone-500 text-sm font-bold uppercase tracking-wide">Quantity</span>
                  <div className="flex items-center gap-4">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-stone-400 hover:text-stone-800 active:scale-95 transition-all"><MinusCircle className="w-8 h-8" strokeWidth={1} /></button>
                    <span className="font-sans font-bold w-6 text-center text-lg text-stone-900">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="text-[var(--color-primary)] hover:opacity-80 active:scale-95 transition-all"><PlusCircle className="w-8 h-8" strokeWidth={1.5} /></button>
                  </div>
                </div>
                <button 
                  disabled={!isSelectionValid}
                  onClick={handleAddToCart}
                  className="w-full bg-[var(--color-primary)] disabled:bg-[var(--color-primary)]/50 disabled:cursor-not-allowed text-white rounded-xl h-[52px] font-sans font-semibold text-sm transition-all shadow-md shadow-[var(--color-primary)]/20 flex items-center justify-between px-6 active:scale-[0.98]"
                >
                  <span>Add to Order</span>
                  <AnimatePresence mode="wait"><motion.span key={totalPrice} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="font-bold text-base bg-white/10 px-3 py-1 rounded-lg">{formatPrice(totalPrice)}</motion.span></AnimatePresence>
                </button>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
