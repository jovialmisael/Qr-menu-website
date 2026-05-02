import { useEffect, useState } from 'react';
import { useOrderStore } from '../store/order.store';
import { useCartStore } from '../store/cart.store';
import { useMenuStore } from '../store/menu.store';
import { 
  Clock, 
  Coffee, 
  Package, 
  CheckCircle2, 
  ArrowLeft,
  Bean,
  Plus,
  MessageSquare,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  onBackToMenu: () => void;
}

const STEPS = [
  { id: 'pending', label: 'Protocol Confirmed', icon: Clock, description: 'Entering the artisan journal', time: '0m' },
  { id: 'preparing', label: 'The Extraction', icon: Coffee, description: 'Precision brewing at 94°C', time: '2m' },
  { id: 'ready', label: 'Final Refining', icon: Bean, description: 'Surface tension adjustment', time: '7m' },
  { id: 'completed', label: 'Ritual Served', icon: Package, description: 'Experience live at Desk 42', time: '10m' },
];

export default function OrderTrackingView({ onBackToMenu }: Props) {
  const { currentOrder, updateStatus, clearCurrentOrder } = useOrderStore();
  const { addItem } = useCartStore();
  const { items: menuItems } = useMenuStore();
  const [activeStep, setActiveStep] = useState(0);

  const handleReorder = () => {
    if (!currentOrder) return;
    currentOrder.items.forEach(item => {
      const product = menuItems.find(m => m.id === item.menuItemId);
      if (product) {
        addItem(product, item.selectedAddOns, item.quantity, item.options, item.sku_code);
      }
    });
    clearCurrentOrder(); // Clear tracking
    onBackToMenu(); // Navigate back to menu
  };

  // Status Polling Simulation
  useEffect(() => {
    if (!currentOrder) return;
    
    const statusMap: Record<string, number> = {
      'pending': 0,
      'confirmed': 0,
      'preparing': 1,
      'ready': 2,
      'completed': 4 // 4 ensures the last step (index 3) is marked as 'past' with a checkmark
    };
    
    setActiveStep(statusMap[currentOrder.status] || 0);

    // Integration: Status is now controlled in real-time by the Cashier dashboard.
    // The App component listens for storage events and rehydrates the store automatically.
  }, [currentOrder?.status, updateStatus]);

  if (!currentOrder) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-[var(--color-surface)]">
        <div className="w-32 h-32 bg-stone-50 rounded-full flex items-center justify-center mb-8 border border-stone-100">
           <Package className="w-12 h-12 opacity-10" />
        </div>
        <h2 className="text-4xl font-display mb-4 tracking-tighter">No Active Records.</h2>
        <button 
          onClick={onBackToMenu} 
          className="px-10 py-4 border border-stone-200 rounded-full text-[10px] font-label uppercase tracking-widest hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-sm"
        >
          Retrieve The Menu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface)] relative overflow-hidden selection:bg-[var(--color-primary)]/10">
      {/* Cinematic Background Layer */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[var(--color-primary)] opacity-[0.03] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
         <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-stone-200 opacity-[0.1] blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <main className="px-6 py-12 relative z-10 max-w-[480px] mx-auto pb-40">
        <header className="flex flex-col items-start mb-16 gap-8">
           <div className="space-y-6 w-full">
              <motion.button 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={onBackToMenu}
                className="flex items-center gap-3 text-stone-400 hover:text-[var(--color-primary)] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-[10px] font-label uppercase tracking-[0.4em]">The Gallery</span>
              </motion.button>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <div 
                      className="px-3 py-1 flex items-center gap-2 rounded-full text-[8px] font-label uppercase tracking-widest border"
                      style={{ 
                        backgroundColor: 'var(--color-primary-container)', 
                        color: 'white',
                        borderColor: 'transparent'
                      }}
                    >
                       <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                       Artisans Engaged
                    </div>
                    <span className="text-[8px] font-label opacity-30 uppercase tracking-[0.3em]">Session {currentOrder.id}</span>
                 </div>
                 <h1 className="text-6xl font-display tracking-tighter leading-[0.85]">
                    Your Ritual <br /> 
                    <span className="opacity-20 italic">is Unfolding.</span>
                 </h1>
              </div>
           </div>

           <div className="flex justify-between items-end w-full">
             <div className="flex flex-col items-start gap-1">
                <p className="text-[10px] font-label opacity-40 uppercase tracking-widest">Assigned Station</p>
                <p className="text-5xl font-display text-[var(--color-primary)]">T-{currentOrder.tableId}</p>
             </div>
             {activeStep < 2 && (
               <div className="flex flex-col items-end gap-1">
                  <p className="text-[10px] font-label opacity-40 uppercase tracking-widest">Live Queue</p>
                  <p className="text-4xl font-display text-stone-800 flex items-baseline gap-2">
                    0{Math.max(1, parseInt(currentOrder.id.replace(/\\D/g, '') || '0') % 5 + 1)}
                    <span className="text-xs font-sans text-stone-400 font-normal">ahead</span>
                  </p>
               </div>
             )}
           </div>
        </header>

        <div className="flex flex-col gap-16">
           {/* Vertical Timeline Ritual */}
           <div className="w-full">
              <div className="relative pl-12 border-l-2 border-stone-100 space-y-16">
                 {STEPS.map((step, index) => {
                   const Icon = step.icon;
                   const isPast = index < activeStep;
                   const isCurrent = index === activeStep;
                   const isFuture = index > activeStep;

                   return (
                     <motion.div 
                       key={step.id}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: index * 0.1 }}
                       className={`relative group ${isFuture ? 'opacity-20' : ''}`}
                     >
                       {/* Connection Line Progress Indicator */}
                       {isCurrent && (
                         <div 
                           className="absolute -left-[14px] top-0 bottom-0 w-1 opacity-20 blur-sm -translate-y-20 h-40" 
                           style={{ backgroundColor: 'var(--color-primary)' }}
                         />
                       )}

                       {/* Status Dot */}
                       <div className={`absolute -left-[56px] w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-700 z-20 ${
                         isPast 
                           ? 'text-white border-transparent' 
                           : isCurrent
                             ? 'bg-white border-2 text-[var(--color-primary)] shadow-2xl scale-110'
                             : 'bg-stone-50 border border-stone-100 text-stone-300'
                       }`}
                       style={isPast ? { backgroundColor: 'var(--color-primary)' } : isCurrent ? { borderColor: 'var(--color-primary)' } : {}}
                       >
                         {isPast ? <CheckCircle2 className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                         
                         {isCurrent && (
                           <motion.div 
                             layoutId="glow"
                             className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
                             style={{ backgroundColor: 'var(--color-primary)' }}
                             animate={{ scale: [1, 1.4, 1] }}
                             transition={{ repeat: Infinity, duration: 3 }}
                           />
                         )}
                       </div>

                       <div className="flex flex-col items-start gap-2">
                          <div className="space-y-0.5">
                             <div className="flex items-center gap-4">
                                <h3 className={`text-2xl font-display tracking-tight transition-colors duration-500 ${isCurrent ? 'text-[var(--color-primary)] font-bold' : isPast ? 'text-stone-900' : 'text-stone-300'}`}>
                                  {step.label}
                                </h3>
                                {isCurrent && (
                                   <div className="flex items-center gap-2">
                                      <span className="w-8 h-px opacity-40" style={{ backgroundColor: 'var(--color-primary)' }} />
                                      <Zap className="w-3.5 h-3.5 animate-pulse" style={{ color: 'var(--color-primary)' }} />
                                   </div>
                                )}
                             </div>
                             <p className="text-xs font-body text-stone-400 italic font-light">{step.description}</p>
                          </div>
                          <span className="text-[9px] font-label opacity-40 uppercase tracking-[0.4em] mb-1">{step.time} T-MINUS</span>
                       </div>
                     </motion.div>
                   );
                 })}
              </div>
           </div>

           {/* Sidebar Experience */}
           <div className="w-full space-y-8">
              {/* Barista Dispatch Note */}
              <div className="bg-white rounded-[2.5rem] p-10 border border-stone-100 shadow-xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-700">
                    <MessageSquare className="w-32 h-32" />
                 </div>
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                       <span className="text-[8px] font-label uppercase tracking-[0.4em] opacity-40">Barista Dispatch</span>
                       <div className="h-[0.5px] flex-1 bg-stone-100" />
                    </div>
                    <h4 className="text-xl font-display italic mb-10 leading-relaxed text-stone-800">
                      "Each extraction is a signature. Your selection is currently reaching its peak profile."
                    </h4>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-2xl bg-stone-100 border border-stone-200 shadow-inner flex items-center justify-center">
                          <Coffee className="w-5 h-5 opacity-20 text-[var(--color-primary)]" />
                       </div>
                       <div>
                          <p className="text-xs font-bold font-sans">Artisan Curator</p>
                          <p className="text-[9px] font-label opacity-40 uppercase tracking-widest">Master of Brewery</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Corporate Action Block */}
              <div className="flex flex-col gap-3">
                 <button 
                   onClick={handleReorder} 
                   className="w-full bg-[var(--color-primary)] text-white rounded-[2rem] p-6 flex items-center justify-between group hover:bg-[var(--color-primary)]/90 transition-all shadow-lg active:scale-[0.98]"
                 >
                    <div className="flex items-center gap-5">
                       <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                          <Plus className="w-6 h-6 text-white" />
                       </div>
                       <div className="text-left">
                          <p className="text-[9px] font-label opacity-80 uppercase tracking-widest mb-1">REORDER</p>
                          <p className="text-xl font-display leading-tight text-white">Pesan Lagi</p>
                       </div>
                    </div>
                 </button>
                 
                 <button 
                   onClick={() => {
                     clearCurrentOrder();
                     onBackToMenu();
                   }} 
                   className="w-full bg-white border border-stone-200 rounded-[2rem] p-6 flex items-center justify-between group hover:bg-stone-50 transition-all shadow-sm active:scale-[0.98]"
                 >
                    <div className="flex items-center gap-5">
                       <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-600">
                          <ArrowLeft className="w-6 h-6" />
                       </div>
                       <div className="text-left">
                          <p className="text-[9px] font-label opacity-40 uppercase tracking-widest mb-1">NAVIGATION</p>
                          <p className="text-xl font-display leading-tight text-stone-900">Kembali ke Menu</p>
                       </div>
                    </div>
                 </button>
              </div>

              {/* Est. Arrival */}
              <div className="px-10 py-6 border border-stone-100 rounded-[2rem] flex items-center justify-between bg-white shadow-sm">
                 <div className="flex items-center gap-4">
                    <Clock className="w-4 h-4 text-stone-300" />
                    <span className="text-xs font-sans text-stone-400 font-medium">Estimated Ritual</span>
                 </div>
                 <span className="text-xl font-display text-[var(--color-primary)] font-bold">~10 Mins</span>
              </div>
           </div>
        </div>

        <footer className="mt-20 pt-16 border-t border-stone-100 flex flex-col items-center gap-8">
           <p className="text-[10px] font-label opacity-20 uppercase tracking-[0.6em] text-center">
              ARTISAN BREWED RITUALS • EDITORIAL BISTRO
           </p>
           <div className="flex items-center gap-12">
              <span className="text-[9px] font-label opacity-40 uppercase tracking-widest hover:opacity-100 cursor-pointer transition-opacity">Help Protocol</span>
              <span className="text-[9px] font-label opacity-40 uppercase tracking-widest hover:opacity-100 cursor-pointer transition-opacity">Ledger Support</span>
           </div>
        </footer>
      </main>
    </div>
  );
}
