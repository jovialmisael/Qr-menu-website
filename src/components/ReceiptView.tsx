import { useEffect } from 'react';
import { Order } from '../types/menu';
import { formatPrice } from '../utils/formatters';
import { Download, ArrowLeft, Coffee, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMenuStore } from '../store/menu.store';

interface ReceiptViewProps {
  order: Order;
  onClose: () => void;
}

export default function ReceiptView({ order, onClose }: ReceiptViewProps) {
  const { items: menuItems } = useMenuStore();

  useEffect(() => {
    // Scroll to top when receipt mounts
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = new Date(order.createdAt).toLocaleString('id-ID', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  return (
    <div className="min-h-[100dvh] bg-stone-100 flex justify-center font-sans print:bg-white print:m-0 print:p-0">
      <div className="w-full max-w-[480px] bg-stone-100 relative flex flex-col print:bg-white print:w-full print:max-w-none">
        
        {/* Header - Hidden in print */}
        <header className="shrink-0 px-6 py-5 bg-white border-b border-stone-200 flex items-center justify-between sticky top-0 z-20 print:hidden">
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-50 border border-stone-200 hover:bg-stone-100 hover:text-stone-800 transition-all text-stone-500 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-display font-semibold text-lg text-stone-900">E-Receipt</h1>
          <button 
            onClick={handlePrint}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-all active:scale-95 shadow-md shadow-[var(--color-primary)]/20"
          >
            <Download className="w-5 h-5" />
          </button>
        </header>

        <main className="flex-1 p-6 print:p-0 flex flex-col gap-6">
          
          {/* Success Banner - Hidden in print */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 text-green-700 p-4 rounded-2xl flex items-center gap-3 border border-green-100 print:hidden"
          >
            <CheckCircle2 className="w-6 h-6 text-green-600" />
            <div>
              <p className="font-bold text-sm">Pesanan Selesai</p>
              <p className="text-xs opacity-80 mt-0.5">Terima kasih atas kunjungan Anda!</p>
            </div>
          </motion.div>

          {/* Receipt Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 print:border-none print:shadow-none print:p-4 print:rounded-none"
          >
            {/* Cafe Logo & Info */}
            <div className="flex flex-col items-center border-b border-dashed border-stone-300 pb-6 mb-6">
              <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center border border-stone-100 mb-4 print:border-stone-300">
                <Coffee className="w-7 h-7 text-[var(--color-primary)] print:text-black" />
              </div>
              <h2 className="font-display font-bold text-2xl text-stone-900 tracking-tight">Bersejuk</h2>
              <p className="text-xs text-stone-500 uppercase tracking-widest mt-1 font-label">QR Café Menu</p>
              <p className="text-xs text-stone-400 mt-2 text-center max-w-[250px]">
                Jl. Kopikuy No. 42, Senopati<br />Jakarta Selatan
              </p>
            </div>

            {/* Transaction Info */}
            <div className="space-y-3 border-b border-dashed border-stone-300 pb-6 mb-6 text-sm text-stone-600">
              <div className="flex justify-between">
                <span className="text-stone-400">No. Order</span>
                <span className="font-mono font-bold text-stone-900">#{order.id.slice(0, 8).toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Tanggal</span>
                <span className="font-medium text-stone-900">{formattedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Pelanggan</span>
                <span className="font-medium text-stone-900 capitalize">{order.customerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Tipe Pesanan</span>
                <span className="font-medium text-stone-900">{order.orderType === 'dine-in' ? 'Dine In' : 'Take Away'}</span>
              </div>
            </div>

            {/* Items */}
            <div className="space-y-4 border-b border-dashed border-stone-300 pb-6 mb-6">
              <div className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-2">Items</div>
              {order.items.map((item, index) => {
                const product = menuItems.find(m => m.id === item.menuItemId);
                const name = product ? product.name : 'Unknown Item';
                // Estimate price if not using full calculation logic here
                const price = product ? product.basePrice * item.quantity : 0;
                
                return (
                  <div key={index} className="flex justify-between items-start gap-4 text-sm">
                    <div className="flex-1">
                      <p className="font-bold text-stone-900">{item.quantity}x {name}</p>
                      {item.notes && (
                        <p className="text-xs text-stone-400 mt-0.5 italic">"{item.notes}"</p>
                      )}
                    </div>
                    <p className="font-medium text-stone-900 whitespace-nowrap">
                      {formatPrice(price)}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Totals */}
            <div className="space-y-3 border-b border-dashed border-stone-300 pb-6 mb-6 text-sm">
              <div className="flex justify-between text-stone-500">
                <span>Subtotal</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>
              {order.discount && order.discount > 0 ? (
                <div className="flex justify-between text-rose-500">
                  <span>Diskon</span>
                  <span>-{formatPrice(order.discount)}</span>
                </div>
              ) : null}
              {order.serviceCharge && order.serviceCharge > 0 ? (
                <div className="flex justify-between text-stone-500">
                  <span>Service Charge</span>
                  <span>{formatPrice(order.serviceCharge)}</span>
                </div>
              ) : null}
              {order.tax && order.tax > 0 ? (
                <div className="flex justify-between text-stone-500">
                  <span>Pajak (PB1)</span>
                  <span>{formatPrice(order.tax)}</span>
                </div>
              ) : null}
              
              <div className="flex justify-between items-end pt-3 text-lg font-bold text-stone-900">
                <span>Total</span>
                <span>{formatPrice(order.totalPrice)}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center space-y-2">
              <div className="inline-block px-3 py-1 bg-stone-100 rounded-lg text-xs font-bold text-stone-500 uppercase tracking-widest print:border print:border-stone-300 print:bg-white">
                {order.paymentMethod === 'cash' ? 'CASH' : 'QRIS'} - {order.paymentStatus === 'paid' ? 'LUNAS' : 'PENDING'}
              </div>
              <p className="text-xs text-stone-400 italic pt-4">Simpan struk ini sebagai bukti pembayaran yang sah.</p>
            </div>
          </motion.div>

        </main>
      </div>
    </div>
  );
}
