import { useRef, useEffect } from 'react';
import { Search, X, ArrowRight, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '../types/menu';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  results: MenuItem[];
  onSelectResult: (item: MenuItem) => void;
}

const formatIDR = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })
    .format(n).replace(/\s/g, '');

const QUICK_SEARCHES = ['Espresso', 'Latte', 'Croissant', 'Matcha', 'Pasta', 'Cold Brew'];

export default function SearchOverlay({ isOpen, onClose, searchQuery, setSearchQuery, results, onSelectResult }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 150);
  }, [isOpen]);

  const handleSelect = (item: MenuItem) => {
    onSelectResult(item);
    setSearchQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          {/* ── Header ── */}
          <div className="bg-white border-b border-stone-100 px-4 pt-10 pb-4 shadow-sm">
            {/* Brand label */}
            <p className="text-[9px] font-label uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--color-primary)' }}>
              Editorial Bistro · Menu Search
            </p>

            {/* Search input row */}
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: 'var(--color-primary)' }}
                />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="What are you craving?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl py-3.5 pl-11 pr-10 text-sm font-sans text-stone-900 focus:outline-none transition-all placeholder:text-stone-400"
                  style={{ backgroundColor: 'var(--color-surface-container-low)', border: '1px solid var(--color-outline-variant)' }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center hover:bg-stone-300 transition-colors"
                  >
                    <X className="w-3 h-3 text-stone-500" />
                  </button>
                )}
              </div>
              <button
                onClick={() => { onClose(); setSearchQuery(''); }}
                className="text-sm font-sans font-semibold flex-shrink-0 px-1"
                style={{ color: 'var(--color-primary)' }}
              >
                Cancel
              </button>
            </div>
          </div>

          {/* ── Body ── */}
          <div className="flex-1 overflow-y-auto no-scrollbar">

            {/* Empty state — show quick searches */}
            {searchQuery === '' && (
              <div className="px-4 pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-stone-400" />
                  <p className="text-[10px] font-label uppercase tracking-widest text-stone-400">Popular Searches</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {QUICK_SEARCHES.map(q => (
                    <button
                      key={q}
                      onClick={() => setSearchQuery(q)}
                      className="px-3.5 py-2 rounded-full text-xs font-sans font-semibold border transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                      style={{ borderColor: 'var(--color-outline-variant)', color: 'var(--color-on-surface-variant)', backgroundColor: 'white' }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {searchQuery !== '' && results.length > 0 && (
              <div className="pt-2 pb-32">
                <p className="px-4 py-3 text-[10px] font-label uppercase tracking-widest text-stone-400">
                  {results.length} result{results.length > 1 ? 's' : ''} found
                </p>
                <div className="bg-white border-y border-stone-100">
                  {results.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => item.isAvailable && handleSelect(item)}
                      disabled={!item.isAvailable}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors ${
                        i < results.length - 1 ? 'border-b border-stone-50' : ''
                      } ${item.isAvailable ? 'hover:bg-stone-50 active:bg-stone-100' : 'opacity-50 cursor-not-allowed'}`}
                    >
                      {/* Thumbnail */}
                      <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-stone-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&q=60'; }}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold font-sans text-stone-900 truncate">{item.name}</p>
                        <p className="text-xs text-stone-400 font-sans mt-0.5 line-clamp-1">{item.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm font-bold font-sans" style={{ color: 'var(--color-primary)' }}>
                            {formatIDR(item.basePrice)}
                          </span>
                          {!item.isAvailable && (
                            <span className="text-[9px] font-label bg-stone-100 text-stone-400 px-2 py-0.5 rounded-full">
                              Sold Out
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Arrow */}
                      {item.isAvailable && (
                        <ArrowRight className="w-4 h-4 flex-shrink-0 text-stone-300" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* No results */}
            {searchQuery !== '' && results.length === 0 && (
              <div className="flex flex-col items-center justify-center px-8 pt-20 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--color-surface-container)' }}
                >
                  <Search className="w-7 h-7 text-stone-400" />
                </div>
                <h3 className="text-base font-bold font-sans text-stone-900 mb-1">No items found</h3>
                <p className="text-sm text-stone-400 font-sans">
                  No results for <span className="font-semibold text-stone-600">"{searchQuery}"</span>. Try another keyword.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-5 px-5 py-2.5 rounded-xl text-sm font-bold font-sans text-white transition-colors"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
