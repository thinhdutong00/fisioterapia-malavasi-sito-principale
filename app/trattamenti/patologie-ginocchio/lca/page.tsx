"use client";

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { 
  ArrowLeft, ChevronRight, Activity, 
  ShieldCheck, Zap, Waves, Target, 
  HeartPulse, Microscope, CheckCircle2, 
  Phone, Calendar, MousePointer2, 
  Trophy, Timer, Gauge, Star
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
          
          {/* BREADCRUMB - Navigazione Strutturata */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={12} />
            <span className="text-[#022166]">Ricostruzione e Lesione LCA</span>
          </nav>

          {/* HERO SECTION - AUTORITÀ CLINICA */}
          <header className="mb-20 md:mb-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#022166] text-[#55B4FF] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Trophy size={14} /> Specialist Return to Play
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-[#022166] leading-[1.05] mb-8 tracking-tight">
              Lesione LCA: <br />
              <span className="text-[#55B4FF]">Stabilità e Performance</span>
              <br /> 
              senza compromessi.
            </h1>

            <p className="max-w-3xl text-lg md:text-2xl text-slate-600 font-medium leading-relaxed mb-10">
              Che tu scelga la ricostruzione chirurgica o l'approccio conservativo, la stabilità del tuo ginocchio dipende dalla qualità del percorso neuro-cognitivo. Non riabilitiamo solo un legamento, ricostruiamo la tua capacità di muoverti nello spazio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#protocollo" 
                className="bg-[#022166] text-white px-8 py-5 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#55B4FF] hover:text-[#022166] transition-all shadow-lg active:scale-95"
              >
                Inizia il Recupero <MousePointer2 size={18} />
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white text-[#022166] border-2 border-slate-100 px-8 py-5 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:border-[#55B4FF] transition-all active:scale-95"
              >
                Consulenza OMPT <Phone size={18} />
              </a>
            </div>
          </header>

          {/* SEZIONE ESPERIENZA PROFESSIONALE - CARPI FC (CON CAROSELLO) */}
          <section className="mb-32">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-sm overflow-hidden relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-[#022166] font-black text-[10px] uppercase tracking-[0.3em]">
                    <Star size={14} className="fill-[#55B4FF] text-[#55B4FF]" /> Professional Elite Background
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight">
                    Dall'élite del calcio <br />alla tua riabilitazione.
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Il mio approccio clinico è stato forgiato sui campi del professionismo. Dal 2017 al 2021, ho servito il <strong>Carpi F.C. 1909</strong>, curando prima il settore giovanile e poi la <strong>Prima Squadra in Lega Pro</strong>. 
                  </p>
                  <p className="text-slate-500 leading-relaxed">
                    Questa esperienza sul campo mi ha permesso di affinare competenze d'eccellenza nella gestione del trauma acuto e nel recupero accelerato dell'atleta, applicando oggi gli stessi standard di rigore e precisione a ogni singolo paziente.
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
                        { src: "/fisioterapia-campo-pro.jpeg", alt: "Recupero in campo" },
                        { src: "/allenamento-lca.jpeg", alt: "Allenamento specifico LCA" }
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
                  
                  {/* Badge Società */}
                  <div className="absolute -bottom-6 -right-6 bg-[#022166] text-white p-6 rounded-2xl shadow-xl hidden md:block z-20">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1">Società Partner</p>
                    <p className="text-lg font-bold">Carpi F.C. 1909</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CLINICAL FOCUS - Perché noi */}
          <section className="mb-32 grid lg:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight">
                La risonanza non è il tuo limite. <br />
                <span className="text-slate-400">La tua funzione sì.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Una lesione del Legamento Crociato Anteriore (LCA) richiede una comprensione profonda della biomeccanica. Come specialisti **OMPT**, analizziamo i deficit di forza, la coordinazione neuromuscolare e la "fear-avoidance" (la paura del movimento) per portarti oltre la semplice guarigione tissutale.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {[
                  { t: "Pre-abilitazione", d: "Preparare il ginocchio all'intervento riduce drasticamente i tempi di recupero post-operatorio." },
                  { t: "Controllo Motorio", d: "Rieduchiamo il cervello a stabilizzare il ginocchio, non solo i muscoli." },
                  { t: "Test Isocinetici", d: "Valutazioni oggettive della forza per autorizzare il ritorno allo sport in sicurezza." },
                  { t: "Return to Sport", d: "Protocolli specifici per cambi di direzione, salti e accelerazioni." }
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
              <div className="bg-[#022166] p-8 md:p-12 rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                  <Activity size={150} />
                </div>
                <h3 className="text-2xl font-bold mb-6 relative z-10">I numeri del recupero</h3>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-end gap-4">
                    <span className="text-5xl font-black text-[#55B4FF]">90%</span>
                    <span className="text-xs uppercase font-bold tracking-widest text-white/60 pb-2">Simmetria di forza richiesta</span>
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="text-5xl font-black text-[#55B4FF]">0</span>
                    <span className="text-xs uppercase font-bold tracking-widest text-white/60 pb-2">Compromessi sulla tecnica</span>
                  </div>
                  <p className="text-sm text-white/70 italic border-t border-white/10 pt-6">
                    "Il nostro obiettivo non è farti tornare a camminare, ma farti tornare a competere, se è quello che desideri."
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ROADMAP - IL PERCORSO LCA */}
          <section id="protocollo" className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-6xl font-bold text-[#022166] tracking-tighter mb-6">Dalla lesione al campo.</h2>
              <p className="text-slate-500 font-medium">Un percorso scientifico diviso in fasi cliniche precise.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { i: Gauge, t: "Fase 1", s: "Protezione", d: "Recupero dell'estensione completa e riduzione del gonfiore." },
                { i: Zap, t: "Fase 2", s: "Carico", d: "Rinforzo muscolare progressivo e schema del cammino." },
                { i: Activity, t: "Fase 3", s: "Agilità", d: "Introduzione alla corsa e ai movimenti dinamici controllati." },
                { i: Trophy, t: "Fase 4", s: "Performance", d: "Test Return to Play e reinserimento completo in gruppo." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                  <step.i className="text-[#55B4FF] group-hover:scale-110 transition-transform mb-6" size={32} />
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">{step.t}</span>
                  <h4 className="text-xl font-bold text-[#022166] mb-4">{step.s}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CALL TO ACTION - CONVERSIONE ELEVATA */}
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
                  Non affidare il tuo ginocchio al caso. Unisciti ai pazienti che hanno già recuperato la piena funzionalità grazie al nostro metodo specialistico.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link 
                    href="/prenota" 
                    className="bg-[#55B4FF] text-[#022166] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white transition-all shadow-lg active:scale-95"
                  >
                    Prenota Valutazione <Calendar size={18} />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[3rem]">
                  <div className="flex gap-2 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => <Trophy key={s} className="text-[#55B4FF]" size={20} />)}
                  </div>
                  <p className="text-xl font-medium text-white/90 leading-relaxed italic mb-6">
                    "Dopo la rottura del crociato pensavo di dover smettere. Grazie al percorso OMPT sono tornato in campo più forte di prima."
                  </p>
                  <span className="text-xs font-black uppercase tracking-widest text-[#55B4FF]">Marco, Calciatore Dilettante</span>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER NAV */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
            <Link href="/trattamenti" className="flex items-center gap-2 text-sm font-bold hover:text-[#022166] transition-colors">
              <ArrowLeft size={16} /> Altri percorsi riabilitativi
            </Link>
            <p className="text-[10px] font-black uppercase tracking-widest text-center">
              Fisioterapia Malavasi — Scienza, Movimento, Risultati.
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}