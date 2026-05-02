import { MenuItem } from '../../types/menu';
import { ChevronRight } from 'lucide-react';
import { formatPrice } from '../../utils/formatters';

interface Props {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

function PortfolioCard({ item, onClick, aspect = 'aspect-[4/3]' }: { item: MenuItem, onClick: () => void, aspect?: string }) {
  return (
    <div 
      onClick={onClick}
      className="group relative w-full overflow-hidden bg-stone-900 cursor-pointer mb-6 rounded-none"
    >
      <div className={`w-full ${aspect} relative overflow-hidden`}>
        <img 
          src={item.image} 
          alt={item.name} 
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end pointer-events-none">
        <div className="flex justify-between items-end mb-2">
          <h3 className="text-white text-xl font-bold font-sans uppercase tracking-wide max-w-[80%] leading-tight">
            {item.name}
          </h3>
          <span className="text-white/90 text-sm font-sans font-bold whitespace-nowrap">
            {formatPrice(item.basePrice)}
          </span>
        </div>
        
        <p className="text-stone-300 text-xs leading-relaxed font-sans line-clamp-2 mb-4">
          {item.description}
        </p>

        <div className="flex items-center gap-2 text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
          <span className="text-[10px] uppercase font-bold tracking-widest">Discover</span>
          <ChevronRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}

export default function RoastGalleryView({ items, onSelectItem }: Props) {
  const masterRoasts = items.filter(item => item.categoryId === 'cat-1').slice(0, 2);
  const coldBrew = items.filter(item => item.categoryId === 'cat-1b').slice(0, 1);
  const culinary = items.filter(item => item.categoryId === 'cat-4').slice(0, 2);
  const pastry = items.filter(item => item.categoryId === 'cat-3').slice(0, 2);

  return (
    <div className="bg-stone-50 min-h-full font-sans">
      
      {/* Editorial Header */}
      <div className="px-6 py-12 bg-white text-center border-b border-stone-200">
        <p className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-[0.3em] mb-3">
          Our Portfolio
        </p>
        <h1 className="text-3xl font-black text-stone-900 uppercase tracking-tight leading-none mb-4">
          The Art of <br/> Craft
        </h1>
        <p className="text-sm text-stone-500 max-w-[280px] mx-auto leading-relaxed">
          A curated exhibition of our finest roasts, precision-brewed beverages, and culinary masterpieces.
        </p>
      </div>

      {/* Chapter 1: Master Roasts */}
      <section className="pt-10 pb-4">
        <div className="px-6 mb-6">
          <h2 className="text-sm font-bold text-stone-900 uppercase tracking-widest border-l-2 border-[var(--color-primary)] pl-3">
            Chapter I: Master Roasts
          </h2>
          <p className="text-xs text-stone-500 mt-2 pl-3">Showcasing the pinnacle of espresso extraction.</p>
        </div>
        <div className="px-4">
          {masterRoasts.map(item => (
            <PortfolioCard key={item.id} item={item} onClick={() => onSelectItem(item)} aspect="aspect-square" />
          ))}
          {coldBrew.map(item => (
            <PortfolioCard key={item.id} item={item} onClick={() => onSelectItem(item)} aspect="aspect-[16/9]" />
          ))}
        </div>
      </section>

      {/* Chapter 2: Culinary Arts */}
      <section className="pt-8 pb-4 bg-stone-100/50">
        <div className="px-6 mb-6">
          <h2 className="text-sm font-bold text-stone-900 uppercase tracking-widest border-l-2 border-[var(--color-primary)] pl-3">
            Chapter II: Culinary Arts
          </h2>
          <p className="text-xs text-stone-500 mt-2 pl-3">A fusion of Nusantara spices and modern plating.</p>
        </div>
        <div className="px-4">
          {culinary.map(item => (
            <PortfolioCard key={item.id} item={item} onClick={() => onSelectItem(item)} aspect="aspect-[4/5]" />
          ))}
        </div>
      </section>

      {/* Chapter 3: The Patisserie */}
      <section className="pt-8 pb-10">
        <div className="px-6 mb-6">
          <h2 className="text-sm font-bold text-stone-900 uppercase tracking-widest border-l-2 border-[var(--color-primary)] pl-3">
            Chapter III: The Patisserie
          </h2>
          <p className="text-xs text-stone-500 mt-2 pl-3">Laminated doughs and delicate confections.</p>
        </div>
        <div className="px-4">
          {pastry.map(item => (
            <PortfolioCard key={item.id} item={item} onClick={() => onSelectItem(item)} aspect="aspect-video" />
          ))}
        </div>
      </section>

    </div>
  );
}
