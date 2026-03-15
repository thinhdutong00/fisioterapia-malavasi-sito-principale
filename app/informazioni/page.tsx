"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ChevronRight, 
  Users, 
  Star, 
  ShieldCheck, 
  Target, 
  Activity, 
  Zap, 
  ArrowUpRight
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
      
      {/* BACKGROUND - Precisione e Pulizia */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 md:pt-40 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Informazioni</span>
          </nav>

          {/* --- SEZIONE 1: IL TEAM --- */}
          <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            
            {/* Sinistra: Testo */}
            <div className="space-y-10">
              <header>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Eccellenza Professionale</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
                  Il nostro team <br />di <span className="text-[#55B4FF]">specialisti.</span>
                </h1>
                <div className="space-y-6 text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                  <p>
                    Siamo un gruppo di fisioterapisti laureati che condivide un’idea essenziale: 
                    <span className="text-[#022166] font-semibold"> la fisioterapia deve aiutare la persona</span>, non solo curare un sintomo.
                  </p>
                  <p>
                    Mettiamo al centro l’ascolto e la continuità del percorso. Ogni trattamento nasce da una valutazione approfondita e da un dialogo aperto.
                  </p>
                </div>
              </header>

              <div className="bg-white p-8 rounded-[2.5rem] border-l-[6px] border-[#55B4FF] shadow-sm italic text-slate-500 font-medium leading-relaxed">
                "Il nostro compito non è solo rimetterti in piedi, ma restituirti equilibrio, sicurezza e libertà di movimento."
              </div>
            </div>

            {/* Destra: Carosello Immagini */}
            <div className="relative">
              <div className="relative bg-white p-4 rounded-[4rem] shadow-2xl border border-slate-100">
                <Swiper
                  modules={[Autoplay, Pagination, EffectFade]}
                  effect="fade"
                  loop={true}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="rounded-[3rem] overflow-hidden aspect-[4/5] lg:aspect-square"
                >
                  {[
                    "https://raw.githubusercontent.com/thinhdutong00/image-fisioterapia-malavasi/main/staff-1.webp",
                    "https://raw.githubusercontent.com/thinhdutong00/image-fisioterapia-malavasi/main/staff-2.webp",
                    "https://raw.githubusercontent.com/thinhdutong00/image-fisioterapia-malavasi/main/staff-3.webp"
                  ].map((img, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={img}
                        alt={`Membro del team ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              {/* Badge tecnico */}
              <div className="absolute -bottom-8 -right-8 bg-[#022166] text-white p-8 rounded-[2.5rem] shadow-xl hidden md:block border-4 border-white">
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-white/10 rounded-2xl text-[#55B4FF]">
                    <Star size={28} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold tracking-tight">100% Laureati</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-black">Staff Qualificato</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SEZIONE 2: APPROCCIO CLINICO --- */}
          <section className="mt-48 mb-32">
            <header className="mb-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Risultati Misurabili</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter">
                L'approccio clinico <br /><span className="text-[#55B4FF]">al tuo benessere.</span>
              </h2>
            </header>

            {/* Grid Servizi - Card Strutturate */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Fisioterapia Generale", icon: <Activity size={24} />, desc: "Trattamento specialistico per discopatie e dolori articolari basato su evidenze." },
                { title: "Riabilitazione Post-Op", icon: <ShieldCheck size={24} />, desc: "Protocolli di recupero personalizzati per il ripristino precoce della mobilità." },
                { title: "Fisioterapia Sportiva", icon: <Zap size={24} />, desc: "Ottimizziamo il gesto atletico e preveniamo le ricadute attraverso l'esercizio." },
              ].map((item, i) => (
                <div key={i} className="group relative bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-3 bg-[#F8FAFC] rounded-2xl group-hover:bg-[#55B4FF] group-hover:text-white transition-colors">
                        {React.cloneElement(item.icon, { className: "opacity-40 group-hover:opacity-100" })}
                      </div>
                      <ArrowUpRight size={20} className="text-slate-300 group-hover:text-[#55B4FF] transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#022166] mb-4 leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium opacity-80">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#022166] font-black text-[10px] uppercase tracking-[0.3em] border-t border-slate-50 pt-6">
                    Dettagli Tecnici <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              ))}

              {/* CARD CTA - Unificata allo stile Hub */}
              <div className="lg:col-span-1 bg-[#022166] p-12 rounded-[3.5rem] shadow-xl flex flex-col justify-center text-white relative overflow-hidden group">
                <div className="absolute top-[-10%] right-[-10%] p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <Target size={280} />
                </div>
                <h3 className="text-3xl font-black mb-6 relative z-10 leading-tight">Prenota <br />Valutazione</h3>
                <p className="text-white/60 mb-10 relative z-10 text-sm leading-relaxed">
                  Inizia il tuo percorso con una diagnosi funzionale accurata eseguita dai nostri specialisti.
                </p>
                <Link 
                  href="/contatti" 
                  className="bg-[#55B4FF] text-[#022166] px-8 py-5 rounded-2xl font-black text-center uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all relative z-10"
                >
                  Contatta lo Studio
                </Link>
              </div>
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna alla Home
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Focus Informativo</span>
          </div>

        </div>
      </div>
    </main>
  );
}