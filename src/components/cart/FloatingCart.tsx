import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/cart.store';
import { useMenuStore } from '../../store/menu.store';

interface FloatingCartProps {
  onOpenCart: () => void;
  onCheckout: () => void;
}

import { formatPrice } from '../../utils/formatters';

export default function FloatingCart({ onOpenCart, onCheckout }: FloatingCartProps) {
  const { getTotalItems, calculateTotal } = useCartStore();
  const { items: menuItems } = useMenuStore();

  const totalItems = getTotalItems();
  const cartTotal = calculateTotal(menuItems);

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="absolute bottom-[80px] left-0 right-0 z-50 px-4 pb-2 pointer-events-none"
        >
          <div
            className="max-w-[420px] mx-auto bg-white rounded-2xl shadow-[0_4px_24px_rgba(78,52,46,0.14)] border pointer-events-auto flex items-center gap-3 p-3"
            style={{ borderColor: 'var(--color-outline-variant)' }}
          >
            {/* Icon with badge — uses app primary (warm brown) */}
            <button
              onClick={onOpenCart}
              className="relative flex-shrink-0 active:scale-95 transition-transform"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span
                className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center bg-[var(--color-primary)] text-white"
              >
                {totalItems}
              </span>
            </button>

            {/* Info — tappable to open cart sheet */}
            <button
              onClick={onOpenCart}
              className="flex-1 text-center min-w-0 flex flex-col justify-center items-center gap-1"
            >
              <p
                className="text-[9px] font-label uppercase tracking-[0.15em] leading-none"
                style={{ color: 'var(--color-on-surface-variant)' }}
              >
                {totalItems === 1 ? '1 item' : `${totalItems} items`} selected
              </p>
              <p
                className="text-[16px] leading-none font-semibold truncate"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-on-surface)' }}
              >
                {formatPrice(cartTotal)}
              </p>
            </button>

            {/* Checkout button */}
            <button
              onClick={onCheckout}
              className="rounded-xl px-4 py-2.5 text-[11px] font-label tracking-widest uppercase whitespace-nowrap active:scale-[0.97] transition-transform flex-shrink-0"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-on-primary)' }}
            >
              Order →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
