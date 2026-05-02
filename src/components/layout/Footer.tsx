import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-10 bg-[var(--color-surface-container-low)] pt-6 pb-12 relative">
      <div className="px-6">
        <div className="flex flex-col gap-12">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="text-4xl font-serif italic text-[var(--color-primary)] leading-none tracking-tight">Bersejuk.</span>
              <span className="text-[10px] font-label text-[var(--color-on-surface-variant)] opacity-60 mt-3 tracking-[0.2em]">Digital Sommelier</span>
            </div>
            <p className="text-sm font-body font-light italic opacity-60 leading-relaxed max-w-[280px]">
              Founded on the principles of sensory exploration, we curate flavors that bridge the gap between tradition and modern curiosity. 
            </p>
            <div className="flex gap-6 pt-2">
              <Instagram className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
              <Facebook className="w-5 h-5 opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Timing Column */}
          <div className="space-y-10">
            <h4 className="text-[10px] font-label font-bold uppercase tracking-[0.3em] opacity-30 text-[var(--color-primary)]">The Atelier Hours</h4>
            <div className="space-y-5">
              {[
                { day: 'Monday — Friday', hours: '08:00 AM — 10:00 PM' },
                { day: 'Saturday — Sunday', hours: '08:00 AM — 11:00 PM' },
              ].map(item => (
                <div key={item.day} className="flex justify-between items-center text-sm pb-3">
                   <span className="font-body opacity-50">{item.day}</span>
                   <span className="font-bold tracking-tight">{item.hours}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-[var(--color-primary)] bg-[var(--color-primary)]/5 p-4 rounded-xl w-fit">
               <Phone className="w-4 h-4" />
               <span className="font-bold tracking-tight">+62 21 555 0123</span>
            </div>
          </div>

          {/* Foundation Column */}
          <div className="space-y-10">
             <h4 className="text-[10px] font-label font-bold uppercase tracking-[0.3em] opacity-30 text-[var(--color-primary)]">Our Foundation</h4>
             <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] opacity-40 flex-shrink-0 mt-1" />
                <p className="text-sm font-body font-light opacity-60 leading-relaxed">
                  Jalan Senopati Raya No. 42,<br />
                  Kebayoran Baru, Jakarta Selatan<br />
                  Indonesia, 12190
                </p>
             </div>
             <div className="bg-[var(--color-surface-container-high)] p-8 rounded-2xl ambient-shadow">
                <div className="flex items-center gap-3 mb-3">
                   <Clock className="w-4 h-4 text-[var(--color-tertiary)]" />
                   <span className="text-[10px] font-label font-bold text-[var(--color-tertiary)] uppercase tracking-[0.2em]">Live Availability</span>
                </div>
                <p className="text-xs font-body opacity-70 leading-relaxed">
                  Estimated wait time for table service is currently <span className="font-bold text-[var(--color-on-surface)]">12 minutes.</span>
                </p>
             </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 flex flex-col items-start gap-4 opacity-40">
           <p className="text-[9px] font-label font-bold uppercase tracking-[0.4em]">© 2026 Bersejuk Ledger Atelier</p>
           <p className="text-[9px] font-label font-bold uppercase tracking-[0.4em]">Crafted by Antigravity Design</p>
        </div>
      </div>
    </footer>
  );
}
