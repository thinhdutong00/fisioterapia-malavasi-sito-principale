"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ChevronRight, 
  ArrowRight, 
  Users, 
  Star, 
  ShieldCheck, 
  Target, 
  Activity, 
  Zap 
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function InformazioniPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS - Allineato allo stile Hub */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 md:pt-40 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb - Font Black Uppercase */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-black uppercase tracking-[0.3em] text-[10px]">Informazioni</span>
          </nav>

          {/* --- SEZIONE 1: IL TEAM --- */}
          <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <div className="space-y-8">
              {/* Label Tecnica */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">(R)enjoy your mo(ve)ments)</span>
              </div>

              {/* Titolo Hero - Font Bold e Tracking Tighter */}
              <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] tracking-tighter">
                Il nostro team <br />
                di <span className="text-[#55B4FF]">specialisti.</span>
              </h1>

              {/* Corpo Testo - Font Light e Dimensioni Maggiori */}
              <div className="space-y-6 text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                <p>
                  Siamo un gruppo di fisioterapisti laureati che condivide un’idea essenziale: 
                  <span className="text-[#022166] font-semibold"> la fisioterapia deve aiutare la persona</span>, non solo curare un sintomo.
                </p>
                <p>
                  Nel nostro studio mettiamo al centro l’ascolto e la continuità del percorso. Ogni trattamento nasce da una valutazione approfondita.
                </p>
                <p className="bg-white/50 p-6 rounded-2xl border-l-4 border-[#55B4FF] italic text-slate-500 font-medium">
                  "Il nostro compito non è solo rimetterti in piedi, ma restituirti equilibrio, sicurezza e libertà di movimento."
                </p>
              </div>
            </div>

            {/* Destra: Carosello (Layout invariato, stile font badge aggiornato) */}
            <div className="relative">
              <div className="relative bg-white p-3 rounded-[40px] shadow-2xl border border-white">
                <Swiper
                  modules={[Autoplay, Pagination, EffectFade]}
                  effect="fade"
                  loop={true}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="rounded-[32px] overflow-hidden aspect-[4/5] lg:aspect-square"
                >
                  {[
                    "https://raw.githubusercontent.com/thinhdutong00/image-fisioterapia-malavasi/main/staff-1.webp",
                    "https://raw.githubusercontent.com/thinhdutong00/image-fisioterapia-malavasi/main/staff-2.webp",
                    "https://raw.githubusercontent.com/thinhdutong00/image-fisioterapia-malavasi/main/staff-3.webp"
                  ].map((img, index) => (
                    <SwiperSlide key={index}>
                      <Image src={img} alt={`Staff ${index + 1}`} fill className="object-cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-[#022166] text-white p-6 rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#55B4FF]/20 rounded-xl flex items-center justify-center text-[#55B4FF]">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-xl font-bold tracking-tight italic">100% Laureati</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-black">Staff Qualificato</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SEZIONE 2: COSA FACCIAMO --- */}
          <section className="mt-40 py-10 relative">
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Risultati Misurabili</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-tight">
                L'approccio clinico <br />
                <span className="text-[#55B4FF]">al tuo benessere.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Fisioterapia Generale", icon: <Activity size={28} />, desc: "Trattamento specialistico per discopatie e dolori articolari." },
                { title: "Riabilitazione Post-Op", icon: <ShieldCheck size={28} />, desc: "Protocolli di recupero personalizzati per il ripristino della mobilità." },
                { title: "Fisioterapia Sportiva", icon: <Zap size={28} />, desc: "Ottimizziamo il gesto atletico e preveniamo le ricadute." },
              ].map((item, i) => (
                <div key={i} className="group bg-white p-10 rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all duration-500">
                  <div className="w-14 h-14 bg-[#F8FAFC] text-[#022166] group-hover:bg-[#55B4FF] group-hover:text-white rounded-2xl flex items-center justify-center mb-8 transition-colors">
                    {item.icon}
                  </div>
                  {/* Titolo Card - Bold Tracking Tight */}
                  <h3 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{item.title}</h3>
                  {/* Desc Card - Font Medium (Opacità ridotta come in Hub) */}
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium opacity-80">{item.desc}</p>
                  <Link href="/trattamenti" className="text-[10px] font-black text-[#022166] flex items-center gap-2 uppercase tracking-[0.3em] border-t border-slate-50 pt-6 group-hover:text-[#55B4FF] transition-colors">
                    Scopri di più <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Banner CTA - Font Black Uppercase sui bottoni */}
            <div className="mt-20 bg-[#022166] rounded-[3.5rem] p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Recupera la tua libertà di movimento.</h3>
                <Link href="/contatti" className="inline-flex items-center gap-3 bg-[#55B4FF] text-[#022166] px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all shadow-lg">
                  Prenota una valutazione <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>

          {/* Footer Back Link - Font Black Uppercase */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna alla Home
            </Link>
            <span className="text-[10px] uppercase tracking-[0.3em] font-black opacity-40">Fisioterapia Malavasi — Hub Clinico</span>
          </div>
        </div>
      </div>    
    </main>
  );
}