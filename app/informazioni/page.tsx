"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Activity, 
  Zap,
  Award
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
      
      {/* BACKGROUND DECORATIONS - Stile Hub */}
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
          <section className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-40">
            
            <div className="space-y-8">
              {/* Label Tecnica */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">(R)enjoy your mo(ve)ments</span>
              </div>

              {/* Titolo Hero */}
              <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] tracking-tighter">
                Il nostro team <br />
                di <span className="text-[#55B4FF]">specialisti.</span>
              </h1>

              {/* Corpo Testo */}
              <div className="space-y-8 text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                <p>
                  Siamo un gruppo di fisioterapisti che condivide un’idea essenziale: 
                  <span className="text-[#022166] font-semibold"> la fisioterapia deve aiutare la persona</span>, non solo curare un sintomo.
                </p>
                <p className="text-lg md:text-xl text-slate-500">
                  Nel nostro studio mettiamo al centro l’ascolto e la continuità del percorso. Ogni trattamento nasce da una valutazione approfondita basata sulle più recenti evidenze scientifiche.
                </p>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm italic text-slate-500 font-medium relative">
                  <span className="absolute -top-4 left-8 bg-[#55B4FF] text-white p-2 rounded-lg">
                    <Award size={20} />
                  </span>
                  "Il nostro compito non è solo rimetterti in piedi, ma restituirti equilibrio, sicurezza e libertà di movimento."
                </div>
              </div>
            </div>

            {/* Destra: Carosello */}
            <div className="relative group">
              <div className="relative bg-white p-3 rounded-[40px] shadow-2xl border border-white z-10">
                <Swiper
                  modules={[Autoplay, EffectFade]} // Rimosso Pagination
                  effect="fade"
                  loop={true}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  className="rounded-[32px] overflow-hidden aspect-square" // Forzato Quadrato
                >
                  {[
                    "mirco.webp",
                    "luca.webp",
                    "alice.webp"
                  ].map((img, index) => (
                    <SwiperSlide key={index}>
                      <Image 
                        src={`/${img}`} 
                        alt={`Staff ${index + 1}`} 
                        fill 
                        priority={index === 0}
                        className="object-cover object-top scale-105 transition-transform duration-700" // Migliorato l'inquadramento
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              {/* Badge - Portato in primo piano con z-20 */}
              <div className="absolute -bottom-6 -right-6 bg-[#022166] text-white p-7 rounded-3xl shadow-2xl hidden md:block z-20 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#55B4FF]/20 rounded-xl flex items-center justify-center text-[#55B4FF] shrink-0">
                    <ShieldCheck size={28} />
                  </div>
                  <div className="max-w-[220px]">
                    <div className="text-xl font-bold tracking-tight mb-1">Fisioterapisti Certificati</div>
                    <div className="text-[9px] leading-tight uppercase tracking-wider opacity-70 font-medium">
                      Iscritti all'Albo della professione sanitaria
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SEZIONE 2: COSA FACCIAMO --- */}
          <section className="py-20 relative">
            <div className="max-w-3xl mb-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Risultati Misurabili</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-[#022166] tracking-tighter leading-tight">
                L'approccio clinico <br />
                <span className="text-[#55B4FF]">al tuo benessere.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Fisioterapia Generale", icon: <Activity size={28} />, desc: "Trattamento specialistico per discopatie e dolori articolari complessi." },
                { title: "Riabilitazione Post-Op", icon: <ShieldCheck size={28} />, desc: "Protocolli di recupero personalizzati per il ripristino della mobilità funzionale." },
                { title: "Fisioterapia Sportiva", icon: <Zap size={28} />, desc: "Ottimizziamo il gesto atletico e preveniamo le ricadute attraverso il controllo motorio." },
              ].map((item, i) => (
                <div key={i} className="group bg-white p-12 rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 bg-[#F8FAFC] text-[#022166] group-hover:bg-[#022166] group-hover:text-white rounded-2xl flex items-center justify-center mb-10 transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight uppercase">{item.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed mb-10 font-medium opacity-80">{item.desc}</p>
                  <Link href="/trattamenti" className="text-[10px] font-black text-[#022166] flex items-center gap-2 uppercase tracking-[0.4em] border-t border-slate-50 pt-8 group-hover:text-[#55B4FF] transition-colors">
                    Esplora area <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Banner CTA - Unificato allo stile Hub */}
            <div className="mt-24 bg-[#022166] rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-[#55B4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="relative z-10">
                <h3 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tighter">Recupera la tua libertà <br className="hidden md:block"/>di movimento.</h3>
                <Link href="/prenota" className="inline-flex items-center gap-4 bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black uppercase text-[11px] tracking-[0.4em] hover:bg-white transition-all shadow-xl">
                  Prenota Valutazione Clinica <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>

          {/* Footer Back Link */}
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