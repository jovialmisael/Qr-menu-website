import { useRef, useCallback, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import SkeletonLoader from '../SkeletonLoader';
import EmptyState from './EmptyState';
import { SearchX, ChevronLeft, ChevronRight } from 'lucide-react';
import { MenuItem, Category } from '../../types/menu';

interface MenuGridProps {
  items: MenuItem[];
  categories: Category[];
  selectedCategoryId: string | null;
  isLoading: boolean;
  onSelectItem: (item: MenuItem) => void;
  onBack?: () => void;
}

function CategoryCarousel({ category, items, onSelectItem }: { category: Category, items: MenuItem[], onSelectItem: (item: MenuItem) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragDistance = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    dragDistance.current = 0;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.userSelect = 'none';
    scrollRef.current.style.scrollBehavior = 'auto';
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const delta = x - startX.current;
    dragDistance.current = Math.abs(delta);
    scrollRef.current.scrollLeft = scrollLeft.current - delta;
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
      scrollRef.current.style.userSelect = '';
      scrollRef.current.style.scrollBehavior = '';
    }
  }, []);

  // Item click — only fires if it was a real tap (not a drag) and item is available
  const handleItemClick = useCallback((item: MenuItem, e: React.MouseEvent) => {
    if (dragDistance.current > 8) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (!item.isAvailable) return; // Sold out — block detail view
    onSelectItem(item);
  }, [onSelectItem]);

  return (
    <section className="flex flex-col bg-white pt-6 pb-2">
      <header className="px-6 flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold font-sans text-stone-900 uppercase tracking-wide flex items-center gap-2">
          {category.id === 'highlights' && <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />}
          {category.name}
        </h2>
        <button className="flex items-center gap-1 text-sm font-sans text-stone-600 hover:text-[var(--color-primary)]">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </header>

      {/* Horizontally scrollable carousel — works on both mouse and touch */}
      <div
        ref={scrollRef}
        className="overflow-x-auto pb-8 pt-2 cursor-grab select-none no-scrollbar"
        // Suppress the default overflow scroll indicator
        style={{ WebkitOverflowScrolling: 'touch' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onDragStart={(e) => e.preventDefault()}
      >
        <div className="flex w-max">
          {/* Left Padding Spacer */}
          <div className="w-6 flex-shrink-0" />
          
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={(e) => handleItemClick(item, e)}
              className={`w-[calc(50vw-28px)] sm:w-[180px] md:w-[200px] flex-shrink-0 ${
                index === items.length - 1 ? 'mr-0' : 'mr-4'
              }`}
            >
              <ProductCard item={item} onClick={() => {}} />
            </div>
          ))}

          {/* Right Padding Spacer */}
          <div className="w-6 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}

export default function MenuGrid({ items, categories, selectedCategoryId, isLoading, onSelectItem, onBack }: MenuGridProps) {
  
  // Curate 3 random highlights (one from Coffee, Non-Coffee, Main Food)
  const highlightedItems = useMemo(() => {
    if (items.length === 0) return [];
    
    const coffees = items.filter(i => i.categoryId === 'cat-1' || i.categoryId === 'cat-1b');
    const nonCoffees = items.filter(i => i.categoryId === 'cat-2');
    const mainFoods = items.filter(i => i.categoryId === 'cat-4');
    
    // Pick 1 from each if available, deterministic based on today's date or just random
    // We'll use a simple Math.random() but since it's useMemo without dependency on time, 
    // it will stay consistent per session mount.
    const pick = (arr: MenuItem[]) => arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : null;
    
    const picks = [pick(coffees), pick(nonCoffees), pick(mainFoods)].filter(Boolean) as MenuItem[];
    return picks;
  }, [items]);

  if (isLoading) return <section className="px-6 mt-10"><SkeletonLoader /></section>;

  if (items.length === 0) {
    return (
      <section className="px-6 mt-10">
        <EmptyState
          icon={SearchX}
          title="No Fragments Found"
          message="Adjust your filters to explore our other artisanal offerings."
        />
      </section>
    );
  }

  // Active category grid
  if (selectedCategoryId) {
    const activeCategory = categories.find(c => c.id === selectedCategoryId);
    return (
      <div className="bg-[#F4F4F5] min-h-full">
        {/* Sticky page header */}
        <header className="sticky top-0 z-10 bg-white border-b border-stone-100 px-4 py-3 flex items-center gap-3 shadow-sm">
          {onBack && (
            <button
              onClick={onBack}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-stone-50 border border-stone-100 hover:bg-stone-100 active:scale-95 transition-all flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5 text-stone-600" />
            </button>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-[9px] font-label uppercase tracking-[0.3em] text-[var(--color-primary)] opacity-70">Category</p>
            <h1 className="text-base font-bold font-sans text-stone-900 uppercase leading-tight truncate">
              {activeCategory?.name || 'Category'}
            </h1>
          </div>
          <span className="text-[10px] font-label text-stone-400 font-semibold flex-shrink-0">{items.length} items</span>
        </header>

        {/* Grid */}
        <div className="px-4 pt-4 pb-8 grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.id} className="w-full">
              <ProductCard item={item} onClick={onSelectItem} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default mode: group all items into categorical horizontal sliders
  return (
    <main className="pb-32 flex flex-col gap-2 bg-[#F4F4F5] min-h-screen">
      
      {/* Editor's Highlights */}
      {highlightedItems.length > 0 && (
        <CategoryCarousel 
          key="highlights" 
          category={{ id: 'highlights', name: 'Curated Recommendations', slug: 'highlights', sortOrder: 0 }} 
          items={highlightedItems} 
          onSelectItem={onSelectItem} 
        />
      )}

      {categories.map(category => {
        const categoryItems = items.filter(item => item.categoryId === category.id);
        if (categoryItems.length === 0) return null;
        return <CategoryCarousel key={category.id} category={category} items={categoryItems} onSelectItem={onSelectItem} />;
      })}
    </main>
  );
}
