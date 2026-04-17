"use client";

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { 
  ArrowLeft, ChevronRight, Activity, 
  ShieldCheck, Zap, Waves, Target, 
  Microscope, CheckCircle2, 
  Phone, Calendar, MousePointer2, 
  Trophy, Gauge, Star, Scaling
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function LCASpecialistPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden">
      
      {/* SFONDO DINAMICO - Brand Identity */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#022166]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#55B4FF]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* BREADCRUMB */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={12} />
            <span className="text-[#022166]">Specialista LCA</span>
          </nav>

          {/* HERO SECTION - ALLINEATA A STILE CERVICALGIA */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Specialist Return to Play</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Lesione LCA: <br />
              Stabilità e <span className="text-[#55B4FF]">Performance.</span>
            </h1>

            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Dalla preparazione all'intervento al ritorno in campo. La stabilità del tuo ginocchio dipende dalla qualità del <strong>percorso neuro-cognitivo</strong>: ricostruiamo la tua fiducia nel movimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link 
                href="#protocollo" 
                className="bg-[#022166] text-white px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-[#55B4FF] hover:shadow-[0_20px_40px_rgba(85,180,255,0.2)] transition-all active:scale-95"
              >
                Inizia il Recupero
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white/5 backdrop-blur-md text-[#022166] border border-slate-200 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-slate-50 transition-all active:scale-95"
              >
                Consulenza OMPT
              </a>
            </div>
          </header>

          {/* SEZIONE ESPERIENZA PROFESSIONALE - CARPI FC */}
          <section className="mb-32">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-sm overflow-hidden relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-[#022166] font-black text-[10px] uppercase tracking-[0.3em]">
                    <Star size={14} className="fill-[#55B4FF] text-[#55B4FF]" /> Professional Elite Background
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight leading-tight">
                    Standard da Serie A <br />per il tuo ginocchio.
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Ho vissuto quattro stagioni intense al <strong>Carpi F.C. 1909</strong>, curando il ritorno in campo di calciatori professionisti in Lega Pro.
                  </p>
                  <p className="text-slate-500 leading-relaxed font-light">
                    Quella stessa attenzione al dettaglio e la gestione dei carichi d'élite sono oggi le fondamenta del tuo percorso. Ogni paziente, dallo sportivo amatoriale a chi vuole semplicemente camminare sicuro, riceve un trattamento di livello professionale.
                  </p>
                </div>
                
                <div className="relative group">
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={0}
                      slidesPerView={1}
                      autoplay={{ delay: 4000, disableOnInteraction: false }}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="w-full h-full"
                    >
                      {[
                        { src: "/fisioterapia-carpi-calcio.jpeg", alt: "Fisioterapia Carpi Calcio" },
                        { src: "/fisioterapia-campo-pro.jpeg", alt: "Recupero in campo" }
                      ].map((img, index) => (
                        <SwiperSlide key={index}>
                          <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-[#022166] text-white p-6 rounded-2xl shadow-xl hidden md:block z-20">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 text-[#55B4FF]">Elite Experience</p>
                    <p className="text-lg font-bold">Carpi F.C. 1909</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CLINICAL FOCUS - CHIRURGIA & FISIOTERAPIA */}
          <section className="mb-32 grid lg:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight leading-tight">
                La risonanza non è il tuo limite. <br />
                <span className="text-slate-400">La tua funzione sì.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                La riuscita di una ricostruzione LCA dipende dall'integrazione perfetta tra chirurgia e riabilitazione. Come specialisti <strong>OMPT</strong>, non ci limitiamo a "muovere" il ginocchio: alleniamo il sistema nervoso a proteggerlo, gestendo ogni fase del recupero meccanico.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {[
                  { t: "Pre-Abilitazione", d: "Preparare il ginocchio all'intervento riduce i tempi di recupero post-operatorio del 30%." },
                  { t: "Controllo Motorio", d: "Rieduchiamo il cervello a stabilizzare l'articolazione in frazioni di secondo." },
                  { t: "Test Isocinetici", d: "Misuriamo oggettivamente la forza per autorizzare il ritorno all'attività." },
                  { t: "Return to Play", d: "Protocolli specifici per cambi di direzione e gestione degli impatti." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-[#55B4FF] mb-3" size={24} />
                    <h4 className="font-bold text-[#022166] text-sm uppercase mb-2">{item.t}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#022166] p-8 md:p-12 rounded-[3rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 text-[#55B4FF]">
                  <Scaling size={150} />
                </div>
                <h3 className="text-2xl font-bold mb-6 relative z-10">L'importanza del percorso</h3>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-end gap-4">
                    <span className="text-5xl font-black text-[#55B4FF]">90%</span>
                    <span className="text-xs uppercase font-bold tracking-widest text-white/60 pb-2 leading-tight">Simmetria di forza <br/>necessaria al rientro</span>
                  </div>
                  <p className="text-sm text-white/70 italic border-t border-white/10 pt-6 font-light">
                    "Il fallimento di un intervento è quasi sempre legato a una riabilitazione incompleta. Il nostro compito è rendere quel nuovo legamento indistruttibile."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ROADMAP - FASI CLINICHE */}
          <section id="protocollo" className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-6xl font-bold text-[#022166] tracking-tighter mb-6">Dalla lesione al campo.</h2>
              <p className="text-slate-500 font-light text-lg">Un percorso di recupero diviso in fasi cliniche oggettive.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { i: Gauge, t: "Fase 1", s: "Controllo", d: "Recupero estensione completa e gestione del gonfiore post-chirurgico." },
                { i: Zap, t: "Fase 2", s: "Carico", d: "Rinforzo muscolare progressivo e ripristino del cammino fluido." },
                { i: Activity, t: "Fase 3", s: "Agilità", d: "Introduzione alla corsa lineare e ai primi movimenti dinamici." },
                { i: Trophy, t: "Fase 4", s: "Performance", d: "Test Return to Play e reinserimento completo nell'attività sportiva." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                  <step.i className="text-[#55B4FF] group-hover:scale-110 transition-transform mb-6" size={32} />
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">{step.t}</span>
                  <h4 className="text-xl font-bold text-[#022166] mb-4">{step.s}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CALL TO ACTION */}
          <section className="bg-[#022166] p-10 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700 text-[#55B4FF]">
              <Waves size={500} />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">
                  Pronto per la <br />
                  <span className="text-[#55B4FF]">prossima sfida?</span>
                </h3>
                <p className="text-white/60 text-xl font-light leading-relaxed mb-8">
                  Che tu stia pianificando l'intervento o sia già in fase di recupero, definiamo insieme la strategia per tornare a muoverti senza paura.
                </p>
                <Link 
                  href="/prenota" 
                  className="inline-flex bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-lg active:scale-95"
                >
                  Prenota Valutazione <Calendar size={18} className="ml-2" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[3rem]">
                  <div className="flex gap-2 mb-6 text-[#55B4FF]">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-xl font-light text-white/90 leading-relaxed italic mb-6">
                    "Dopo la rottura del crociato pensavo di dover smettere. Grazie al percorso OMPT sono tornato in campo con una stabilità che non avevo mai avuto prima."
                  </p>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#55B4FF]">Marco, Atleta Professionista</span>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER NAV */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
            <Link href="/trattamenti" className="flex items-center gap-2 text-xs font-bold hover:text-[#022166] transition-colors uppercase tracking-widest">
              <ArrowLeft size={16} /> Altri percorsi riabilitativi
            </Link>
            <p className="text-[10px] font-black uppercase tracking-widest text-center">
              Fisioterapia Malavasi — Specialist Return to Play
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}