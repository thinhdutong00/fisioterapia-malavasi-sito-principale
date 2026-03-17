"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Award,
  Layout,
  Dumbbell,
  Stethoscope
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

export default function InformazioniPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[60%] md:w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[80px] md:blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[60%] md:w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[80px] md:blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* BREADCRUMB */}
          <nav className="flex items-center gap-2 text-[10px] md:text-sm text-slate-500 mb-8 md:mb-12 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} className="shrink-0" />
            <span className="text-[#022166] font-semibold">Informazioni</span>
          </nav>

          {/* --- SEZIONE 1: IL TEAM (HEADER) --- */}
          <header className="mb-16 md:mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 md:w-12 bg-[#55B4FF]"></div>
              <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#55B4FF]">
                (R)enjoy your mo(ve)ments
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-[#022166] leading-[1.1] md:leading-[0.95] mb-8 md:mb-10 tracking-tighter">
              Il nostro team <br />
              di <span className="text-[#55B4FF]">specialisti.</span>
            </h1>
            <p className="max-w-3xl text-lg md:text-2xl text-slate-600 leading-relaxed font-light">
              Siamo un gruppo di fisioterapisti che condivide un’idea essenziale: 
              <span className="text-[#022166] font-semibold"> la fisioterapia deve aiutare la persona</span>, non solo curare un sintomo.
            </p>
          </header>

          {/* CONTENUTO DETTAGLIATO TEAM */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-24 items-start mb-24 md:mb-40">
            <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
              <div className="space-y-6 md:space-y-8 text-base md:text-xl text-slate-500 font-light leading-relaxed">
                <p>
                  Nel nostro studio mettiamo al centro l’ascolto e la continuità del percorso. Ogni trattamento nasce da una valutazione approfondita basata sulle più recenti evidenze scientifiche.
                </p>
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm italic text-slate-500 font-medium relative mt-8 md:mt-12">
                  <span className="absolute -top-4 left-6 md:left-8 bg-[#55B4FF] text-white p-2 rounded-lg shadow-lg">
                    <Award size={18} />
                  </span>
                  "Il nostro compito non è solo rimetterti in piedi, ma restituirti equilibrio, sicurezza e libertà di movimento."
                </div>
              </div>
            </div>

            {/* Destra: Carosello Immagini */}
            <div className="order-1 lg:order-2 relative group">
              <div className="relative bg-white p-2 md:p-3 rounded-[30px] md:rounded-[40px] shadow-2xl border border-white z-10">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  loop={true}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  className="rounded-[24px] md:rounded-[32px] overflow-hidden aspect-square"
                >
                  {[
                    "mirco.webp",
                    "luca.webp",
                    "alice.jpg"
                  ].map((img, index) => (
                    <SwiperSlide key={index}>
                      <Image 
                        src={`/${img}`} 
                        alt={`Staff ${index + 1}`} 
                        fill 
                        priority={index === 0}
                        className="object-cover object-top scale-105 transition-transform duration-700"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-[#022166] text-white p-4 md:p-7 rounded-2xl md:rounded-3xl shadow-2xl z-20 border border-white/10 max-w-[180px] md:max-w-none">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-[#55B4FF]/20 rounded-lg flex items-center justify-center text-[#55B4FF] shrink-0">
                    <ShieldCheck size={20} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <div className="text-xs md:text-xl font-bold tracking-tight">Certificati</div>
                    <div className="text-[7px] md:text-[9px] leading-tight uppercase tracking-wider opacity-70 font-medium">
                      Iscritti all'Albo Nazionale
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- SEZIONE 2: COSA FACCIAMO --- */}
          <section className="py-12 md:py-20 relative">
            <div className="max-w-3xl mb-12 md:mb-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Risultati Misurabili</span>
              </div>
              <h2 className="text-3xl md:text-7xl font-bold text-[#022166] tracking-tighter leading-tight">
                L'approccio clinico <br />
                <span className="text-[#55B4FF]">al tuo benessere.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {[
                { title: "Fisioterapia Generale", desc: "Trattamento specialistico per discopatie e dolori articolari complessi." },
                { title: "Riabilitazione Post-chirurgica", desc: "Protocolli di recupero personalizzati per il ripristino della mobilità funzionale." },
                { title: "Fisioterapia Sportiva", desc: "Ottimizziamo il gesto atletico e preveniamo le ricadute attraverso il controllo motorio." },
              ].map((item, i) => (
                <div key={i} className="group bg-white p-8 md:p-12 rounded-2xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#022166] mb-4 tracking-tight uppercase">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 md:mb-10 font-medium opacity-80">
                      {item.desc}
                    </p>
                  </div>
                  <Link 
                    href="/trattamenti" 
                    className="text-[9px] md:text-[10px] font-black text-[#022166] flex items-center gap-2 uppercase tracking-[0.3em] md:tracking-[0.4em] border-t border-slate-50 pt-6 md:pt-8 group-hover:text-[#55B4FF] transition-colors"
                  >
                    Esplora area <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 md:mt-12">
              <Link 
                href="/trattamenti" 
                className="group w-full md:w-auto inline-flex items-center justify-center gap-4 border-2 border-[#022166]/10 px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] text-[#022166] hover:bg-[#022166] hover:text-white transition-all duration-500"
              >
                Guarda di più
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </section>

          {/* --- NUOVA SEZIONE: IL NOSTRO STUDIO --- */}
          <section className="py-24 md:py-40 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Gli Spazi</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold text-[#022166] tracking-tighter leading-tight mb-16 md:mb-24">
              Il nostro <br />
              <span className="text-[#55B4FF]">studio.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { 
                  title: "Reception", 
                  desc: "Un'area accogliente progettata per farti sentire a tuo agio fin dal primo momento.",
                  icon: <Layout size={24} />,
                  img: "/reception.jpg"
                },
                { 
                  title: "Palestra Riabilitativa", 
                  desc: "Spazio attrezzato con tecnologie moderne per il recupero funzionale e l'esercizio terapeutico.",
                  icon: <Dumbbell size={24} />,
                  img: "/palestra.jpg"
                },
                { 
                  title: "Sale Terapeutiche", 
                  desc: "Ambienti riservati e confortevoli dove eseguiamo sedute manuali e trattamenti strumentali.",
                  icon: <Stethoscope size={24} />,
                  img: "/sala.jpg"
                }
              ].map((studio, i) => (
                <div key={i} className="group relative bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
                  {/* Image Container */}
                  <div className="relative h-64 md:h-72 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-[#022166]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <Image 
                      src={studio.img} 
                      alt={studio.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-8 md:p-10 relative">
                    <div className="w-12 h-12 bg-[#F8FAFC] rounded-xl flex items-center justify-center text-[#55B4FF] mb-6 group-hover:bg-[#55B4FF] group-hover:text-white transition-all duration-500">
                      {studio.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#022166] mb-4">
                      {studio.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium opacity-80">
                      {studio.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- CTA FINAL --- */}
          <section className="py-12 md:py-20">
            <div className="bg-[#022166] rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-[#55B4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="relative z-10">
                <h3 className="text-2xl md:text-6xl font-bold text-white mb-8 md:mb-10 tracking-tighter">
                  Recupera la tua libertà <br className="hidden md:block"/> di movimento.
                </h3>
                <Link href="/prenota" className="w-full md:w-auto inline-flex items-center justify-center gap-4 bg-[#55B4FF] text-[#022166] px-8 md:px-12 py-5 md:py-6 rounded-xl md:rounded-2xl font-black uppercase text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.4em] hover:bg-white transition-all shadow-xl">
                  Prenota Valutazione <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </section>

          {/* FOOTER NAVIGATION */}
          <div className="mt-16 md:mt-24 border-t border-slate-200 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna alla Home
            </Link>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-black opacity-40 text-center">
              Fisioterapia Malavasi — Hub Clinico
            </span>
          </div>
        </div>
      </div>    
    </main>
  );
}