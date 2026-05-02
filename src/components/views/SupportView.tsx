import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, CreditCard, Wifi, MapPin, CheckCircle2, Clock, Phone, Wind, ShieldAlert } from 'lucide-react';

export default function SupportView() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handlePulseWaiter = () => showToast('Waiter Notified! Segera menuju meja Anda.');
  const handleRequestBill = () => showToast('Bill Notified! Menyiapkan tagihan Anda.');
  const handleWifi = () => showToast('WiFi Pass: BISTRO2024');

  const faqs = [
    { 
      q: "Jam Operasional", 
      a: "Buka setiap hari mulai pukul 08:00 hingga 23:00 WIB. Last order untuk makanan utama pukul 22:00 WIB." 
    },
    { 
      q: "Metode Pembayaran", 
      a: "Kami menerima pembayaran via QRIS, Kartu Kredit/Debit (BCA, Mandiri, BNI), dan Cash. Pembayaran dilakukan di meja (Minta Bill)." 
    },
    { 
      q: "Reservasi & Event", 
      a: "Untuk pemesanan grup di atas 10 orang atau penyewaan VIP Room / Private Event, silakan hubungi WhatsApp manajemen kami." 
    }
  ];

  return (
    <div className="py-8 px-6 bg-stone-50 min-h-full">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] bg-stone-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-sans font-bold whitespace-nowrap"
          >
            <motion.span
              animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
              transition={{ duration: 0.6 }}
              className="text-xl"
            >
              👋
            </motion.span>
            <span>{toastMessage}</span>
            <CheckCircle2 className="w-5 h-5 ml-2 text-[var(--color-primary)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="mb-12">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="flex items-center gap-4 mb-4"
        >
           <div className="w-8 h-[2px] bg-[var(--color-primary)]" />
           <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500">Layanan Pelanggan</span>
        </motion.div>
        <h1 className="text-4xl font-black font-sans text-stone-900 uppercase tracking-tight leading-none mb-4">
          Bantuan &<br /> Layanan
        </h1>
        <p className="text-sm font-sans text-stone-500 leading-relaxed max-w-[280px]">
          Nikmati kemudahan layanan dari meja Anda. Kami siap membantu untuk pengalaman bersantap yang maksimal.
        </p>
      </header>

      {/* The Concierge Action Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
         {[
           { 
             title: "Panggil Waiter", 
             desc: "Butuh bantuan atau tambahan pesanan?",
             cta: "Panggil",
             icon: MessageCircle,
             onClick: handlePulseWaiter,
           },
           { 
             title: "Minta Bill", 
             desc: "Selesai bersantap? Kami bawakan tagihan.",
             cta: "Minta Bill",
             icon: CreditCard,
             onClick: handleRequestBill,
           },
           { 
             title: "Akses WiFi", 
             desc: "Tetap terhubung dengan internet cepat.",
             cta: "Lihat Password",
             icon: Wifi,
             onClick: handleWifi,
           }
         ].map((card) => (
           <motion.div 
             key={card.title}
             whileHover={{ y: -4 }}
             className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center transition-all"
           >
              <div className="w-14 h-14 bg-stone-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                 <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-sans text-stone-900 mb-2">{card.title}</h3>
              <p className="text-xs text-stone-500 mb-6 font-sans leading-relaxed">{card.desc}</p>
              <button
                onClick={card.onClick}
                className="w-full py-3 bg-stone-100 text-stone-900 rounded-full font-sans text-xs font-bold uppercase hover:bg-[var(--color-primary)] hover:text-white transition-all active:scale-95"
              >
                {card.cta}
              </button>
           </motion.div>
         ))}
      </div>

      {/* Fasilitas Section */}
      <section className="mb-16">
         <div className="bg-stone-900 text-white p-8 rounded-[2rem] relative overflow-hidden">
            <h2 className="text-2xl font-black font-sans uppercase tracking-tight mb-8 relative z-10">Fasilitas <br/> Cafe</h2>
            
            <div className="grid grid-cols-2 gap-6 relative z-10">
               <div className="flex flex-col gap-2">
                 <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                 <p className="font-bold text-sm">Mushola</p>
                 <p className="text-[10px] text-stone-400">Lantai 2, sebelah kiri tangga.</p>
               </div>
               <div className="flex flex-col gap-2">
                 <Wind className="w-5 h-5 text-[var(--color-primary)]" />
                 <p className="font-bold text-sm">Smoking Area</p>
                 <p className="text-[10px] text-stone-400">Area semi-outdoor di lantai 1 & 2.</p>
               </div>
               <div className="flex flex-col gap-2">
                 <ShieldAlert className="w-5 h-5 text-[var(--color-primary)]" />
                 <p className="font-bold text-sm">Toilet</p>
                 <p className="text-[10px] text-stone-400">Tersedia di setiap lantai.</p>
               </div>
               <div className="flex flex-col gap-2">
                 <Phone className="w-5 h-5 text-[var(--color-primary)]" />
                 <p className="font-bold text-sm">Stopkontak</p>
                 <p className="text-[10px] text-stone-400">Tersedia di bawah hampir semua meja.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Informasi Umum / FAQ Section */}
      <section>
         <div className="mb-8">
            <h3 className="text-[10px] font-bold font-sans uppercase tracking-[0.3em] text-stone-400 mb-2">Informasi Umum</h3>
            <h2 className="text-2xl font-black font-sans uppercase text-stone-900">Pertanyaan<br/>Sering Diajukan</h2>
         </div>
         
         <div className="space-y-6">
           {faqs.map((faq) => (
             <div key={faq.q} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
               <div className="flex items-center gap-3 mb-3">
                 <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                 <h4 className="text-sm font-bold font-sans text-stone-900 uppercase">{faq.q}</h4>
               </div>
               <p className="text-xs text-stone-500 font-sans leading-relaxed">{faq.a}</p>
             </div>
           ))}
         </div>
      </section>
    </div>
  );
}
