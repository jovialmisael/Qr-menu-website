import { useState } from 'react';
import { useCartStore } from '../store/cart.store';
import { useMenuStore } from '../store/menu.store';
import { useOrderStore } from '../store/order.store';
import { useStockStore } from '../store/stock.store';
import { ArrowLeft, ArrowRight, Minus, Plus, Trash2, ChevronRight, User, Phone, Mail, QrCode, Receipt, CreditCard, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { formatPrice } from '../utils/formatters';
import { api } from '../services/api';
import { CartItem, MenuItem } from '../types/menu';

interface Props {
  onBack: () => void;
  onSuccess: () => void;
}


// ─── Helpers ────────────────────────────────────────────────────────────────
function getItemPrice(cartItem: CartItem, product: MenuItem) {
  let price = product.basePrice;
  if (cartItem.options && product.meta) {
    const sizeDef = product.meta.sizes?.find((s: any) => s.label === cartItem.options?.size);
    if (sizeDef) price = sizeDef.price;
    if ((cartItem.options.shots ?? 0) > 1) price += (cartItem.options.shots! - 1) * 8000;
    if ((cartItem.options.syrup?.length ?? 0) > 0) price += cartItem.options.syrup!.length * 6000;
    if (cartItem.options.milk && cartItem.options.milk !== 'Standard Whole Milk') price += 12000;
  } else {
    cartItem.selectedAddOns?.forEach((sel: any) => {
      const group = product.addOnGroups?.find((g: any) => g.id === sel.groupId);
      sel.choiceIds?.forEach((cid: string) => {
        const choice = group?.choices?.find((c: any) => c.id === cid);
        if (choice) price += choice.priceDelta;
      });
    });
  }
  return price;
}

function getAddOnLabels(cartItem: CartItem, product: MenuItem): string[] {
  const labels: string[] = [];
  if (cartItem.options && product.meta) {
    if (cartItem.options.size) labels.push(cartItem.options.size);
    if (cartItem.options.milk && cartItem.options.milk !== 'Standard Whole Milk') labels.push(cartItem.options.milk.split(' (')[0]);
    if ((cartItem.options.shots ?? 0) > 1) labels.push(`${cartItem.options.shots} Shots`);
    if (cartItem.options.temperature) labels.push(cartItem.options.temperature.replace('Serve ', ''));
    if (cartItem.options.sweetness && cartItem.options.sweetness !== 'Normal Sweet') labels.push(cartItem.options.sweetness);
  } else {
    cartItem.selectedAddOns?.forEach((sel: any) => {
      const group = product.addOnGroups?.find((g: any) => g.id === sel.groupId);
      sel.choiceIds?.forEach((cid: string) => {
        const choice = group?.choices?.find((c: any) => c.id === cid);
        if (choice) labels.push(choice.name);
      });
    });
  }
  return labels;
}

// ─── Step 1: Order Review (The Ledger) ──────────────────────────────────────────
interface OrderReviewProps {
  onBack: () => void;
  onNext: () => void;
  cartItems: CartItem[];
  menuItems: MenuItem[];
  subtotal: number;
  tax: number;
  service: number;
  discount: number;
  total: number;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  promoCode: string;
  setPromoCode: (code: string) => void;
  handleApplyPromo: () => void;
  appliedPromo: string;
}

function OrderReview({ onBack, onNext, cartItems, menuItems, subtotal, tax, service, discount, total, removeItem, updateQuantity, promoCode, setPromoCode, handleApplyPromo, appliedPromo }: OrderReviewProps) {
  return (
    <div className="flex flex-col h-full bg-[var(--color-surface)]">
      {/* Editorial Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-stone-100 px-6 pt-8 pb-4 sticky top-0 z-30">
        <div className="flex justify-between items-center mb-6">
          <button onClick={onBack} className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-50 border border-stone-100 hover:bg-stone-100 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4 text-stone-500" />
          </button>
          <div className="text-right flex flex-col justify-center">
            <span className="text-[8px] font-label uppercase tracking-[0.3em] opacity-40">Session Confirmed</span>
            <p className="text-xs font-sans font-bold text-stone-900 mt-0.5">
              Station {new URLSearchParams(window.location.search).get('tableId')?.replace(/^T-/i, '') ?? '42'}
            </p>
          </div>
        </div>
        <h1 className="text-4xl font-display leading-[0.85] tracking-tighter">Your <span className="text-[var(--color-primary)]">Ledger.</span></h1>
      </header>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-40">
        {/* Ordered Items Ledger */}
        <div className="px-6 py-10 space-y-8">
           <div className="flex items-center justify-between border-b border-stone-100 pb-4">
              <span className="text-[10px] font-label uppercase tracking-[0.2em] text-stone-400">Registry ({cartItems.length} items)</span>
              <button 
                onClick={onBack}
                className="text-[10px] font-label uppercase tracking-widest text-[var(--color-primary)] font-bold decoration-[var(--color-primary)] underline underline-offset-4"
              >
                + Append Items
              </button>
           </div>

           <div className="space-y-6">
             {cartItems.map((cartItem: CartItem) => {
               const product = menuItems.find((m: MenuItem) => m.id === cartItem.menuItemId);
               if (!product) return null;
               const itemPrice = getItemPrice(cartItem, product);
               const addOns = getAddOnLabels(cartItem, product);

               return (
                 <motion.div 
                   key={cartItem.id} 
                   layout 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="flex gap-6 items-start group"
                 >
                   <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-sm border border-stone-100 flex-shrink-0 relative group-hover:shadow-md transition-shadow">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>

                   <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                         <div>
                            <h4 className="text-lg font-display leading-tight">{product.name}</h4>
                            {addOns.length > 0 && (
                              <p className="text-xs text-stone-400 font-sans mt-0.5 line-clamp-1">{addOns.join(' · ')}</p>
                            )}
                         </div>
                         <button 
                           onClick={() => removeItem(cartItem.id)}
                           className="text-stone-300 hover:text-red-500 transition-colors p-1"
                         >
                            <Trash2 className="w-4 h-4" />
                         </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                         <span className="text-base font-display text-[var(--color-primary)] font-semibold">{formatPrice(itemPrice * cartItem.quantity)}</span>
                         <div className="flex items-center gap-4 bg-stone-50 border border-stone-100 rounded-full px-4 py-1.5">
                            <button onClick={() => updateQuantity(cartItem.id, -1)} className="text-stone-400 hover:text-[var(--color-primary)] transition-colors active:scale-90">
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold font-sans w-4 text-center">{cartItem.quantity}</span>
                            <button onClick={() => updateQuantity(cartItem.id, 1)} className="text-stone-400 hover:text-[var(--color-primary)] transition-colors active:scale-90">
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                         </div>
                      </div>
                   </div>
                 </motion.div>
               );
             })}
           </div>
        </div>

        {/* Settlement Breakdown */}
        <div className="bg-white/50 backdrop-blur-lg border-y border-stone-100 mx-0 px-6 py-10 space-y-4">
           <div className="flex justify-between items-center mb-6">
             <p className="text-[10px] font-label uppercase tracking-[0.3em] text-stone-400">Settlement Breakdown</p>
           </div>
           
           {/* Promo Code Section */}
           <div className="flex gap-2 mb-6">
             <input
               type="text"
               placeholder="Promo Code (BERSEJUK20)"
               value={promoCode}
               onChange={(e) => setPromoCode(e.target.value)}
               className="flex-1 bg-white border border-stone-200 rounded-xl px-4 py-2 text-sm font-sans focus:outline-none focus:border-stone-400 uppercase"
               disabled={appliedPromo !== ''}
             />
             <button
               onClick={handleApplyPromo}
               disabled={appliedPromo !== '' || promoCode.trim() === ''}
               className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold uppercase disabled:opacity-30 transition-all"
             >
               {appliedPromo !== '' ? 'Applied' : 'Apply'}
             </button>
           </div>

           <div className="flex justify-between items-end">
              <span className="text-sm font-sans text-stone-500 italic">Core Offerings</span>
              <span className="text-sm font-sans font-bold text-stone-800">{formatPrice(subtotal)}</span>
           </div>
           
           {discount > 0 && (
             <div className="flex justify-between items-end">
                <span className="text-sm font-sans text-emerald-600 italic">Discount (Promo)</span>
                <span className="text-sm font-sans font-bold text-emerald-600">-{formatPrice(discount)}</span>
             </div>
           )}
           
           <div className="flex justify-between items-end">
              <div className="flex items-center gap-2">
                 <span className="text-sm font-sans text-stone-500 italic">Artisanal Service</span>
                 <Receipt className="w-3 h-3 opacity-20" />
              </div>
              <span className="text-sm font-sans font-bold text-stone-800">{formatPrice(service)}</span>
           </div>

           <div className="flex justify-between items-end">
              <span className="text-sm font-sans text-stone-500 italic">PB1 / Pajak Restoran (10%)</span>
              <span className="text-sm font-sans font-bold text-stone-800">{formatPrice(tax)}</span>
           </div>

           <div className="pt-8 mt-4 border-t border-stone-50 flex justify-between items-baseline">
              <h3 className="text-4xl font-display italic">Total.</h3>
              <span className="text-4xl font-display text-[var(--color-primary)] font-bold">{formatPrice(total)}</span>
           </div>
        </div>
      </div>

      {/* Initiation Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white/95 backdrop-blur-2xl border-t border-stone-100 p-6 z-40">
        <button
          onClick={onNext}
          disabled={cartItems.length === 0}
          className="w-full btn-primary py-6 rounded-full flex items-center justify-center gap-3 group text-sm font-label uppercase tracking-widest font-bold disabled:opacity-30 disabled:grayscale transition-all"
        >
          <span>Initiate Settlement</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

// ─── Step 2: Payment (Final Confirmation) ─────────────────────────────────────────
const PAYMENT_METHODS = [
  { id: 'qris', label: 'QRIS', desc: 'Scan & Pay instantly', icon: QrCode, color: 'bg-emerald-600' },
  { id: 'credit', label: 'Credit / Debit Card', desc: 'Visa, Mastercard, etc.', icon: CreditCard, color: 'bg-stone-900' },
  { id: 'cash', label: 'Pay at Cashier', desc: 'Cash or e-wallet at counter', icon: Receipt, color: 'bg-stone-500' },
];

interface PaymentStepProps {
  onBack: () => void;
  onPay: (orderType: 'dine-in' | 'takeaway', customer: { name: string; phone: string; email: string }, paymentMethod: string) => void;
  total: number;
  isProcessing: boolean;
}

function PaymentStep({ onBack, onPay, total, isProcessing }: PaymentStepProps) {
  const [method, setMethod] = useState('qris');
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [consent, setConsent] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const sanitizeInput = (str: string) => str.replace(/[<>]/g, '').trim();

  const isNameValid  = form.name.trim().length > 2;
  const isPhoneValid = /^(08|\+62|62)[0-9]{7,12}$/.test(form.phone.replace(/[\s-]/g, ''));
  const canPay       = isNameValid && isPhoneValid && consent;

  const handlePayClick = () => {
    if (!canPay) { setAttempted(true); return; }
    onPay(orderType, {
      name: sanitizeInput(form.name),
      phone: sanitizeInput(form.phone),
      email: sanitizeInput(form.email)
    }, method);
  };

  const fieldClass = (valid: boolean) =>
    `w-full bg-white border rounded-2xl py-3.5 pl-11 pr-4 text-sm font-sans focus:outline-none focus:ring-2 transition-all placeholder:text-stone-300 ${
      attempted && !valid
        ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
        : 'border-stone-100 focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/10'
    }`;

  return (
    <div className="flex flex-col h-full bg-[var(--color-surface)]">
      {/* Header */}
      <header className="bg-white border-b border-stone-100 px-6 pt-10 pb-6 sticky top-0 z-30">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-50 border border-stone-100 hover:bg-stone-100 active:scale-95 transition-all flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-stone-500" />
          </button>
          <div>
            <p className="text-[9px] font-label uppercase tracking-[0.4em] text-[var(--color-primary)] opacity-70">Step 2 of 2</p>
            <h1 className="text-2xl font-display leading-tight tracking-tighter">
              Payment <span className="text-[var(--color-primary)]">Details</span>
            </h1>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-44">
        <div className="px-6 pt-8 pb-4 space-y-8">

          {/* ── Order Type Selection ── */}
          <div>
            <p className="text-[10px] font-label uppercase tracking-[0.35em] text-stone-400 mb-4">
              Dining Preference
            </p>
            <div className="flex bg-stone-100/80 rounded-2xl p-1 relative mb-8">
              <div 
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-xl shadow-sm border border-stone-200/50 transition-all duration-300 ease-in-out ${orderType === 'takeaway' ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'}`}
              />
              <button 
                onClick={() => setOrderType('dine-in')}
                className={`flex-1 relative z-10 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${orderType === 'dine-in' ? 'text-[var(--color-primary)]' : 'text-stone-400 hover:text-stone-600'}`}
              >
                Dine In
              </button>
              <button 
                onClick={() => setOrderType('takeaway')}
                className={`flex-1 relative z-10 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${orderType === 'takeaway' ? 'text-[var(--color-primary)]' : 'text-stone-400 hover:text-stone-600'}`}
              >
                Take Away
              </button>
            </div>
          </div>

          {/* ── Customer Info ── */}
          <div>
            <p className="text-[10px] font-label uppercase tracking-[0.35em] text-stone-400 mb-4">
              Your Details <span className="text-red-400 ml-1">* required</span>
            </p>
            <div className="space-y-3">
              {/* Name */}
              <div className="relative group">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-[var(--color-primary)] transition-colors">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className={fieldClass(isNameValid)}
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
                {attempted && !isNameValid && (
                  <p className="text-[10px] text-red-400 mt-1 ml-1 font-sans">Full name is required.</p>
                )}
              </div>

              {/* Phone */}
              <div className="relative group">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-[var(--color-primary)] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  className={fieldClass(isPhoneValid)}
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
                {attempted && !isPhoneValid && (
                  <p className="text-[10px] text-red-400 mt-1 ml-1 font-sans">A valid phone number is required.</p>
                )}
              </div>

              {/* Email (optional) */}
              <div className="relative group">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-[var(--color-primary)] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  placeholder="Email (optional — for receipt)"
                  className={fieldClass(true)}
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* UU PDP Consent */}
              <label className="flex items-start gap-3 mt-4 group cursor-pointer">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input
                    type="checkbox"
                    className="w-5 h-5 appearance-none border-2 border-stone-200 rounded-md checked:bg-[var(--color-primary)] checked:border-[var(--color-primary)] transition-all cursor-pointer"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  {consent && <Check className="w-3.5 h-3.5 text-white absolute pointer-events-none" />}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-sans text-stone-600 leading-relaxed">
                    Saya menyetujui pengumpulan dan pemrosesan data pribadi saya untuk keperluan pesanan sesuai dengan UU Perlindungan Data Pribadi (UU PDP).
                  </p>
                  {attempted && !consent && (
                    <p className="text-[10px] text-red-500 mt-1 font-sans">Persetujuan wajib dicentang untuk melanjutkan.</p>
                  )}
                </div>
              </label>
            </div>
          </div>

          {/* ── Payment Method ── */}
          <div>
            <p className="text-[10px] font-label uppercase tracking-[0.35em] text-stone-400 mb-4">Payment Method</p>
            <div className="space-y-3">
              {PAYMENT_METHODS.map(pm => (
                <button
                  key={pm.id}
                  onClick={() => setMethod(pm.id)}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all active:scale-[0.98] ${
                    method === pm.id
                      ? 'bg-white border-[var(--color-primary)] shadow-md shadow-[var(--color-primary)]/8'
                      : 'bg-stone-50/60 border-stone-100 hover:border-stone-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl ${pm.color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                    <pm.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <p className={`text-sm font-bold font-sans ${method === pm.id ? 'text-[var(--color-primary)]' : 'text-stone-800'}`}>
                      {pm.label}
                    </p>
                    <p className="text-[10px] font-sans text-stone-400 mt-0.5">{pm.desc}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    method === pm.id ? 'border-[var(--color-primary)]' : 'border-stone-200'
                  }`}>
                    {method === pm.id && <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Confirmation Bar */}
      <div className="bg-white border-t border-stone-100 px-6 py-5 z-40">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-label uppercase tracking-[0.3em] text-stone-400">Total Payment</span>
          <span className="text-2xl font-display text-[var(--color-primary)] font-bold">{formatPrice(total)}</span>
        </div>

        {attempted && !canPay && (
          <p className="text-[11px] text-red-400 font-sans text-center mb-3">
            Please fill in your name and phone number to continue.
          </p>
        )}

        <button
          onClick={handlePayClick}
          disabled={isProcessing}
          className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-label text-xs uppercase tracking-widest font-bold transition-all active:scale-[0.98] ${
            canPay || !attempted
              ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90'
              : 'bg-stone-100 text-stone-400 cursor-not-allowed'
          } disabled:opacity-50`}
        >
          {isProcessing ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Confirm & Pay
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Main CheckoutView ───────────────────────────────────────────────────────

export default function CheckoutView({ onBack, onSuccess }: Props) {
  const { items: cartItems, removeItem, updateQuantity, clearCart, calculateTotal } = useCartStore();
  const { items: menuItems } = useMenuStore();
  const { createOrder, settings } = useOrderStore();
  const { deductStock } = useStockStore();
  const [step, setStep] = useState<'review' | 'payment'>('review');
  const [isProcessing, setIsProcessing] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState('');

  const subtotal = calculateTotal(menuItems);
  const discount = appliedPromo === 'BERSEJUK20' ? subtotal * 0.20 : 0;
  const service = (subtotal - discount) * settings.serviceChargeRate;
  const tax = (subtotal - discount + service) * settings.taxRate;
  const total = subtotal - discount + service + tax;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'BERSEJUK20') {
      setAppliedPromo('BERSEJUK20');
    } else {
      alert('Invalid promo code');
      setAppliedPromo('');
    }
  };

  const [lastCheckoutTime, setLastCheckoutTime] = useState(0);

  const handlePay = async (orderType: 'dine-in' | 'takeaway', customer: { name: string; phone: string }, paymentMethod: string) => {
    const now = Date.now();
    if (now - lastCheckoutTime < 5000) {
      alert("Mohon tunggu sebentar sebelum membuat pesanan baru (Rate Limit).");
      return;
    }
    setLastCheckoutTime(now);

    setIsProcessing(true);
    try {
      // API call to the dummy secure backend
      const newOrder = await api.checkout(cartItems, '42', appliedPromo, orderType, customer, paymentMethod as any);
      
      // Update stores
      cartItems.forEach(cartItem => {
        const item = menuItems.find(m => m.id === cartItem.menuItemId);
        deductStock(cartItem.menuItemId, cartItem.quantity, item?.name || 'Unknown Item', customer.name || 'customer');
      });
      createOrder(newOrder);
      clearCart();
      
      // Notify cashier
      const channel = new BroadcastChannel('bersejuk-order-sync');
      channel.postMessage({ type: 'NEW_ORDER', __secureToken: 'bsjk-secure-v1' });
      setTimeout(() => channel.close(), 100);

      onSuccess();
    } catch (e) {
      console.error(e);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="h-full">
      <AnimatePresence mode="wait">
        {step === 'review' ? (
          <motion.div 
            key="review"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="h-full"
          >
            <OrderReview
              onBack={onBack}
              onNext={() => setStep('payment')}
              cartItems={cartItems}
              menuItems={menuItems}
              subtotal={subtotal}
              tax={tax}
              service={service}
              discount={discount}
              total={total}
              removeItem={removeItem}
              updateQuantity={updateQuantity}
              promoCode={promoCode}
              setPromoCode={setPromoCode}
              handleApplyPromo={handleApplyPromo}
              appliedPromo={appliedPromo}
            />
          </motion.div>
        ) : (
          <motion.div 
            key="payment"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="h-full"
          >
            <PaymentStep 
              onBack={() => setStep('review')} 
              onPay={handlePay} 
              total={total} 
              isProcessing={isProcessing} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
