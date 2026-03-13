"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ChevronRight, Users, Star, ShieldCheck } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Import Swiper styles
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
    <main className="h-screen overflow-y-auto bg-[#F0F4F8] text-slate-800 font-sans relative">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[30%] h-[30%] bg-[#022166]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-12 animate-in fade-in slide-in-from-top duration-500">
            <Link href="/" className="hover:text-[#022166] transition-colors font-bold">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-black uppercase tracking-widest text-xs">Chi Siamo</span>
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
                <p>
                  Crediamo nella <span className="text-[#022166] font-bold">competenza scientifica</span> unita all’attenzione umana. La formazione costante e l’esperienza pratica si affiancano a un approccio empatico, perché la fiducia è il primo passo per guarire davvero.
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
                  {/* Sostituisci gli URL con le foto reali dello staff */}
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
              
              {/* Badge flottante sotto il carosello */}
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