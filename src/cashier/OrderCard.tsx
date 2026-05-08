import { useState } from 'react';
import { Order, AddOnGroup, AddOnChoice } from '../types/menu';
import { useMenuStore } from '../store/menu.store';
import { formatPrice } from '../utils/formatters';
import { CheckCircle2, Loader2, ChevronDown, ChevronUp, Printer, Banknote } from 'lucide-react';

interface Props {
  order: Order;
  onUpdateStatus: (id: string, status: Order['status'], paymentStatus?: Order['paymentStatus']) => void;
  role?: 'cashier' | 'owner' | null;
}

export default function OrderCard({ order, onUpdateStatus, role = 'cashier' }: Props) {
  const { items: menuItems } = useMenuStore();
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'confirmed': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'preparing': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'ready': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'completed': return 'bg-stone-100 text-stone-500 border-stone-200';
      default: return 'bg-stone-100 text-stone-700 border-stone-200';
    }
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.stopPropagation();
    const printWindow = window.open('', '_blank', 'width=300,height=500');
    if (!printWindow) return;
    
    const itemsHtml = order.items.map(item => {
       const p = menuItems.find(m => m.id === item.menuItemId);
       return '<div class="flex"><span>' + (item.quantity || 1) + 'x ' + (p?.name || 'Item') + '</span></div>';
    }).join('');

    const html = `
      <html>
        <head>
          <style>
            body { font-family: monospace; font-size: 12px; margin: 0; padding: 16px; color: #000; }
            .center { text-align: center; }
            .bold { font-weight: bold; }
            .border-b { border-bottom: 1px dashed #000; margin-bottom: 8px; padding-bottom: 8px; }
            .flex { display: flex; justify-content: space-between; margin-bottom: 4px; }
          </style>
        </head>
        <body>
          <div class="center bold border-b">
            <h2 style="margin:0 0 4px 0">BERSEJUK QR</h2>
            <p style="margin:0; font-size: 10px; font-weight: normal;">NPWP: 01.234.567.8-901.000</p>
            <p style="margin:8px 0 0 0; font-size: 14px;">${order.orderType === 'takeaway' ? 'TAKE AWAY' : `Table: ${order.tableId}`}</p>
            <p style="margin:4px 0 0 0">Order: #${order.id}</p>
            ${order.customerName ? `<p style="margin:4px 0 0 0; font-weight: normal;">Customer: ${order.customerName}</p>` : ''}
            <p style="margin:4px 0 0 0; font-weight: normal; font-size: 10px;">${order.paymentMethod?.toUpperCase()} - ${order.paymentStatus?.toUpperCase()}</p>
          </div>
          <div class="border-b">
            ${itemsHtml}
          </div>
          <div class="border-b" style="margin-top: 8px;">
            <div class="flex"><span style="font-weight: normal;">Subtotal</span><span style="font-weight: normal;">Rp ${order.subtotal?.toLocaleString('id-ID')}</span></div>
            ${order.discount ? `<div class="flex"><span style="font-weight: normal;">Discount</span><span style="font-weight: normal;">-Rp ${order.discount?.toLocaleString('id-ID')}</span></div>` : ''}
            <div class="flex"><span style="font-weight: normal;">Service (5%)</span><span style="font-weight: normal;">Rp ${order.serviceCharge?.toLocaleString('id-ID')}</span></div>
            <div class="flex"><span style="font-weight: normal;">PB1 (10%)</span><span style="font-weight: normal;">Rp ${order.tax?.toLocaleString('id-ID')}</span></div>
          </div>
          <div class="flex bold">
            <span>TOTAL</span>
            <span>Rp ${order.totalPrice.toLocaleString('id-ID')}</span>
          </div>
          <p class="center" style="margin-top: 24px;">Thank You!</p>
          <script>
            window.onload = () => { window.print(); window.close(); }
          </script>
        </body>
      </html>
    `;
    printWindow.document.write(html);
    printWindow.document.close();
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-stone-100 shadow-sm flex flex-col gap-4">
      <div 
        className="flex justify-between items-center border-b border-stone-50 pb-4 cursor-pointer hover:bg-stone-50/50 -mx-5 px-5 -mt-5 pt-5 transition-colors rounded-t-2xl"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="text-[10px] font-label uppercase tracking-[0.2em] text-stone-400 flex items-center gap-1.5">
              Order #{order.id} • {order.orderType === 'takeaway' ? <span className="text-amber-600 font-bold bg-amber-50 px-1.5 py-0.5 rounded">TAKE AWAY</span> : `Table ${order.tableId}`}
            </p>
            <span className="text-[10px] bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded font-bold">
              {order.items.length} Items
            </span>
          </div>
          <p className="text-sm font-sans text-stone-800 font-bold mt-1">
            {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            {order.customerName && <span className="ml-2 font-normal text-stone-500">• {order.customerName}</span>}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${getStatusColor(order.status)}`}>
            {order.status}
          </div>
          <div className="text-stone-400">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-3 pt-2">
        {order.items.map((cartItem, idx) => {
          const product = menuItems.find(m => m.id === cartItem.menuItemId);
          if (!product) return null;
          const productName = product.name;

          const addons: string[] = [];
          if (cartItem.options) {
            if (cartItem.options.size) addons.push(`Size: ${cartItem.options.size}`);
            if (cartItem.options.milk && cartItem.options.milk !== 'Standard Whole Milk') addons.push(`Milk: ${cartItem.options.milk}`);
            if (cartItem.options.shots && cartItem.options.shots > 1) addons.push(`${cartItem.options.shots} Shots`);
            if (cartItem.options.temperature) addons.push(cartItem.options.temperature);
            if (cartItem.options.sweetness && cartItem.options.sweetness !== 'Normal Sweet') addons.push(`Sweetness: ${cartItem.options.sweetness}`);
            if (cartItem.options.syrup && cartItem.options.syrup.length > 0) {
              cartItem.options.syrup.forEach((s: { id: string; pumps: number }) => addons.push(`Syrup: ${s.id.replace(/-/g, ' ')} (${s.pumps} pumps)`));
            }
          } else if (cartItem.selectedAddOns) {
            cartItem.selectedAddOns.forEach((sel: { groupId: string; choiceIds: string[] }) => {
              const group = product?.addOnGroups?.find((g: AddOnGroup) => g.id === sel.groupId);
              sel.choiceIds?.forEach((cid: string) => {
                const choice = group?.choices?.find((c: AddOnChoice) => c.id === cid);
                addons.push(choice ? choice.name : `Custom: ${cid}`);
              });
            });
          }

          return (
            <div key={idx} className="flex justify-between items-start text-sm font-sans pb-4">
              <div className="flex gap-3 w-full">
                <span className="font-bold text-stone-800 shrink-0">{cartItem.quantity || 1}x</span>
                <img src={product.image} alt={productName} className="w-12 h-12 rounded-lg object-cover bg-stone-100 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-stone-800 truncate">{productName}</p>
                  {addons.length > 0 && (
                    <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{addons.join(' • ')}</p>
                  )}
                  {cartItem.notes && (
                    <p className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded mt-1.5 italic inline-block">
                      Note: {cartItem.notes}
                    </p>
                  )}
                  {/* Fallback for completely unknown legacy options */}
                  {!cartItem.options && !cartItem.selectedAddOns && Object.keys(cartItem).length > 3 && (
                     <p className="text-[10px] text-stone-400 mt-1">Raw data: {JSON.stringify(cartItem)}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        </div>
      )}

      <div className="flex justify-between items-center pt-4 border-t border-stone-50">
        <span className="font-display text-lg font-bold text-[var(--color-primary)]">
          {formatPrice(order.totalPrice)}
        </span>
        
        {/* Action Buttons based on status */}
        <div className="flex gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3 py-2 bg-stone-100 text-stone-600 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-stone-200 transition-colors"
            title="Print Receipt"
          >
            <Printer className="w-4 h-4" />
          </button>
          
          {role === 'owner' ? (
            <div className="flex items-center px-3 py-2 bg-stone-50 text-stone-400 rounded-xl text-xs font-bold uppercase tracking-wider border border-stone-100">
              View Only
            </div>
          ) : (
            <>
              {order.status === 'pending' && (
                <>
                  {order.paymentMethod === 'cash' && order.paymentStatus === 'pending' ? (
                    <button
                      onClick={() => onUpdateStatus(order.id, 'confirmed', 'paid')}
                      className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-amber-700 transition-colors"
                    >
                      <Banknote className="w-4 h-4" /> Terima Cash
                    </button>
                  ) : (
                    <button
                      onClick={() => onUpdateStatus(order.id, 'confirmed')}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4" /> Confirm
                    </button>
                  )}
                </>
              )}
              {order.status === 'confirmed' && (
                <button
                  onClick={() => onUpdateStatus(order.id, 'preparing')}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-purple-700 transition-colors"
                >
                  <Loader2 className="w-4 h-4" /> Prepare
                </button>
              )}
              {order.status === 'preparing' && (
                <button
                  onClick={() => onUpdateStatus(order.id, 'ready')}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4" /> Ready
                </button>
              )}
              {order.status === 'ready' && (
                <button
                  onClick={() => onUpdateStatus(order.id, 'completed')}
                  className="flex items-center gap-2 px-4 py-2 bg-stone-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-stone-900 transition-colors"
                >
                  Finish
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
