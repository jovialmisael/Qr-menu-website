import { MenuItem } from '../../types/menu';
import { useStockStore } from '../../store/stock.store';
import { formatPrice } from '../../utils/formatters';
import { Plus } from 'lucide-react';

interface Props {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

export default function ProductCard({ item, onClick }: Props) {
  const { getStock, resetIfNewDay } = useStockStore();
  resetIfNewDay();

  const stockLeft = item.isAvailable ? getStock(item.id) : 0;
  const isSoldOut = !item.isAvailable || stockLeft === 0;
  const isLowStock = item.isAvailable && stockLeft > 0 && stockLeft <= 15;

  return (
    <div
      onClick={() => !isSoldOut && onClick(item)}
      className={`w-full flex flex-col bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-stone-100 overflow-hidden transition-all duration-300 ${
        isSoldOut ? 'opacity-50 grayscale cursor-not-allowed' : 'cursor-pointer active:scale-[0.98]'
      }`}
    >
      {/* Product Image */}
      <div className="w-full pt-[75%] flex-shrink-0 bg-stone-50 relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80';
          }}
        />
        {isSoldOut && (
           <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] flex items-center justify-center">
             <span className="bg-stone-800 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
               Sold Out
             </span>
           </div>
        )}
        {isLowStock && !isSoldOut && (
          <div className="absolute top-2 right-2">
            <span className="bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
              {stockLeft} left
            </span>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="p-3 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-[13px] font-bold text-stone-900 leading-snug line-clamp-2 h-[38px] mb-1 font-sans">
            {item.name}
          </h3>
          
          <p className="text-[13px] font-bold text-stone-900 font-sans">
            {formatPrice(item.basePrice)}
          </p>
        </div>

        <button 
          disabled={isSoldOut}
          className={`mt-3 w-full py-2 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5 font-sans ${
            isSoldOut 
              ? 'bg-stone-100 text-stone-400' 
              : 'bg-[var(--color-primary)] text-white shadow-sm active:scale-95 hover:opacity-90'
          }`}
        >
          {!isSoldOut && <Plus className="w-3.5 h-3.5" strokeWidth={3} />}
          {isSoldOut ? 'Sold Out' : 'Add'}
        </button>
      </div>
    </div>
  );
}
