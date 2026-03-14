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
  Zap, 
  HeartPulse, 
  Brain, 
  Move 
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
    // FIX: Rimosso h-screen e overflow-y-auto per permettere alla Navbar di rilevare lo scroll globale
    <main className="min-h-screen bg-[#F0F4F8] text-slate-800 font-sans relative">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[30%] h-[30%] bg-[#022166]/5 rounded-full blur-[100px]"></div>
      </div>

      {/* FIX: Aumentato il padding-top (pt-40) per evitare che il contenuto finisca sotto la Navbar fixed */}
      <div className="relative z-10 pt-32 md:pt-40 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-12 animate-in fade-in slide-in-from-top duration-500">
            <Link href="/" className="hover:text-[#022166] transition-colors font-bold">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-black uppercase tracking-widest text-xs">Informazioni</span>
          </nav>

          {/* --- SEZIONE 1: IL TEAM --- */}
          <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Sinistra: Testo */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#022166]/5 border border-[#022166]/10">
                <Users size={16} className="text-[#022166]" />
                <span className="text-xs font-black tracking-[0.2em] uppercase text-[#022166]">Eccellenza Professionale</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-[#022166] leading-tight">
                IL NOSTRO TEAM DI <br />
                <span className="text-[#55B4FF]">SPECIALISTI.</span>
              </h1>

              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  Siamo un gruppo di fisioterapisti laureati che condivide un’idea semplice ma essenziale: 
                  <span className="text-[#022166] font-bold"> la fisioterapia deve aiutare la persona</span>, non solo curare un sintomo.
                </p>
                <p>
                  Nel nostro studio mettiamo al centro <span className="text-[#55B4FF] font-bold">l’ascolto</span>, la professionalità e la continuità del percorso. Ogni trattamento nasce da una valutazione approfondita e da un dialogo aperto con il paziente.
                </p>
                <p className="bg-white/50 p-6 rounded-2xl border-l-4 border-[#55B4FF] italic shadow-sm">
                  "Il nostro compito non è solo rimetterti in piedi, ma restituirti equilibrio, sicurezza e libertà di movimento."
                </p>
              </div>
            </div>

            {/* Destra: Carosello Immagini */}
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="absolute -inset-4 bg-[#55B4FF] rounded-[40px] blur-3xl opacity-10"></div>
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
              
              <div className="absolute -bottom-6 -left-6 bg-[#022166] text-white p-6 rounded-3xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#55B4FF]/20 rounded-xl flex items-center justify-center text-[#55B4FF]">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-xl font-black italic">100% Laureati</div>
                    <div className="text-xs uppercase tracking-widest opacity-60 font-bold">Staff Qualificato</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SEZIONE 2: COSA FACCIAMO --- */}
          <section className="mt-32 py-10 relative">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#55B4FF]/10 border border-[#55B4FF]/20 mb-6">
                <Target size={16} className="text-[#022166]" />
                <span className="text-xs font-black tracking-widest uppercase text-[#022166]">Risultati Misurabili</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#022166] mb-6">
                L'APPROCCIO CLINICO <br />
                <span className="text-[#55B4FF]">AL TUO BENESSERE.</span>
              </h2>
            </div>

            {/* Grid dei Servizi */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card Example (Ripetuta per brevità) */}
              {[
                { title: "Fisioterapia Generale", icon: <Activity size={28} />, desc: "Trattamento specialistico per discopatie e dolori articolari." },
                { title: "Riabilitazione Post-Op", icon: <ShieldCheck size={28} />, desc: "Protocolli di recupero personalizzati per il ripristino della mobilità." },
                { title: "Fisioterapia Sportiva", icon: <Zap size={28} />, desc: "Ottimizziamo il gesto atletico e preveniamo le ricadute." },
              ].map((item, i) => (
                <div key={i} className="group bg-white/40 backdrop-blur-sm p-8 rounded-[32px] border border-white/60 hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 bg-[#022166] text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#55B4FF] transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-[#022166] mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                  <Link href="/trattamenti" className="text-xs font-black text-[#022166] flex items-center gap-2 uppercase tracking-widest hover:text-[#55B4FF]">
                    Scopri di più <ChevronRight size={14} />
                  </Link>
                </div>
              ))}
            </div>

            {/* Banner CTA */}
            <div className="mt-20 bg-[#022166] rounded-[40px] p-10 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6">Recupera la tua libertà di movimento.</h3>
                <Link href="/contatti" className="inline-flex items-center gap-3 bg-[#55B4FF] text-[#022166] px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg">
                  Prenota una valutazione <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>

          {/* Bottone di ritorno */}
          <div className="mt-24 border-t border-slate-200 pt-10">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[#022166] font-black hover:gap-4 transition-all uppercase tracking-widest text-sm"
            >
              <ArrowLeft size={20} /> Torna alla Home
            </Link>
          </div>
        </div>
      </div>    
    </main>
  );
}