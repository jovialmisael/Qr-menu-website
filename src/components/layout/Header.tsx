import { Radio } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  tableId: string | null;
}

export default function Header({ tableId }: HeaderProps) {
  return (
    <header className="sticky top-0 z-[60] bg-[var(--color-surface)] border-b border-stone-200">
      <div className="px-6 py-4 flex justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex flex-col min-w-0">
          <span className="text-[8px] font-label uppercase tracking-[0.4em] opacity-30 mb-1">The Original</span>
          <h2 className="text-2xl font-display text-[var(--color-on-surface)] leading-none tracking-tighter">
            Editorial <span className="opacity-20 italic">Bistro.</span>
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="/cashier"
            className="flex items-center justify-center py-2 px-4 bg-stone-50 hover:bg-[var(--color-primary)] hover:text-white text-stone-600 rounded-full border border-stone-200 transition-all group"
            title="Ke Halaman Kasir"
          >
            <span className="text-[10px] font-label uppercase tracking-widest font-bold group-hover:text-white transition-colors">
              Kasir
            </span>
          </a>

          {/* Station Badge */}
          {tableId && (
            <div className="flex items-center gap-2.5 py-2 px-4 bg-stone-50 rounded-full border border-stone-200 group">
              <div className="relative">
                <Radio className="w-3 h-3 text-[var(--color-primary)] opacity-40 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-[var(--color-primary)] rounded-full"
                />
              </div>
              <span className="text-[10px] font-label uppercase tracking-widest opacity-60">
                Station {tableId.replace('T-', '')}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
