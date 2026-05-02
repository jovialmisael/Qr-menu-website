import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Category, MenuItem } from '../../types/menu';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  allItems: MenuItem[];
  onSelectCategory: (categoryId: string) => void;
}

function CategoryCard({
  category,
  items,
  onClick,
  index,
}: {
  category: Category;
  items: MenuItem[];
  onClick: () => void;
  index: number;
}) {
  // Get up to 3 available items as representative imagery
  const previewImages = items
    .filter(i => i.isAvailable)
    .slice(0, 3)
    .map(i => i.image);

  // Split name into two parts for the two-line bold display
  const words = category.name.split(' ');
  const half = Math.ceil(words.length / 2);
  const line1 = words.slice(0, half).join(' ');
  const line2 = words.slice(half).join(' ');

  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.22 }}
      onClick={onClick}
      className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 active:scale-[0.98] transition-transform text-left"
    >
      {/* Banner */}
      <div className="relative h-[140px] overflow-hidden bg-stone-50">
        {/* Ghost watermark */}
        <span
          className="absolute right-2 bottom-[-8px] text-[90px] font-black leading-none select-none pointer-events-none uppercase"
          style={{ color: 'rgba(0,0,0,0.04)', letterSpacing: '-0.04em' }}
        >
          {words[0]}
        </span>

        {/* + icon */}
        <span
          className="absolute top-4 left-4 text-2xl font-black leading-none"
          style={{ color: 'var(--color-primary)' }}
        >
          +
        </span>

        {/* Category name — 2-line bold editorial style */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
          <p className="text-xl font-black leading-tight uppercase tracking-tight text-stone-900">
            {line1}
          </p>
          {line2 && (
            <p
              className="text-xl font-black leading-tight uppercase tracking-tight"
              style={{ color: 'var(--color-primary)' }}
            >
              {line2}
            </p>
          )}
        </div>

        {/* Food images — stacked circles on the right */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4 gap-[-8px]">
          {previewImages.slice(0, 2).map((src, i) => (
            <div
              key={i}
              className="w-[100px] h-[100px] rounded-2xl overflow-hidden border-2 border-white shadow-md flex-shrink-0"
              style={{ marginLeft: i > 0 ? '-20px' : '0', zIndex: previewImages.length - i }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                onError={e => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&q=60';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Caption row */}
      <div className="px-4 py-3 border-t border-stone-100 flex items-center justify-between">
        <span className="text-xs font-sans font-semibold text-stone-500 uppercase tracking-wider">
          {category.name}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-sans text-stone-400">
            {items.length} items
          </span>
          <ArrowRight className="w-3 h-3 text-stone-300" />
        </div>
      </div>
    </motion.button>
  );
}

export default function CategoryListOverlay({
  isOpen,
  onClose,
  categories,
  allItems,
  onSelectCategory,
}: Props) {
  const handleSelect = (categoryId: string) => {
    onSelectCategory(categoryId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          {/* Header */}
          <div
            className="bg-white border-b px-4 pt-10 pb-4 flex items-center justify-between flex-shrink-0"
            style={{ borderColor: 'var(--color-outline-variant)' }}
          >
            <div>
              <p
                className="text-[9px] font-label uppercase tracking-[0.3em] mb-0.5"
                style={{ color: 'var(--color-primary)' }}
              >
                Editorial Bistro
              </p>
              <h1 className="text-lg font-black font-sans text-stone-900 uppercase tracking-tight">
                Category List
              </h1>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-stone-100 transition-colors active:scale-95"
              style={{ border: '1px solid var(--color-outline-variant)' }}
            >
              <X className="w-4 h-4 text-stone-500" />
            </button>
          </div>

          {/* Category list */}
          <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 pb-20 space-y-3">
            {categories.map((category, i) => {
              const catItems = allItems.filter(item => item.categoryId === category.id);
              if (catItems.length === 0) return null;
              return (
                <CategoryCard
                  key={category.id}
                  category={category}
                  items={catItems}
                  onClick={() => handleSelect(category.id)}
                  index={i}
                />
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
