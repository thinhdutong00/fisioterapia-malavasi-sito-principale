"use client";

import React from 'react';
import Link from 'next/link';

// Import di Lucide-React - Icone ottimizzate per la tematica Ginocchio
import { 
  ArrowLeft, Star,
  ChevronRight,
  Activity, // Simboleggia il movimento
  ArrowUpRight, 
  Target, // Simboleggia l'identificazione della causa
  BrainCircuit, // Simboleggia la neuroscienza del dolore e controllo motorio
  ShieldCheck,
  Zap,
  Weight, // Simboleggia il carico progressivo, fondamentale per il ginocchio
  Scale // Simboleggia l'equilibrio biomeccanico
} from 'lucide-react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';


export default function GinocchioRiabilitazionePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Coerente con lo stile Hub, focalizzato sulla stabilità */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb - Navigazione Clinica */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Aree di Trattamento</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Riabilitazione Ginocchio</span>
          </nav>

          {/* HEADER SEZIONE - HOOK AD ADS (Focus Biomeccanico) */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Fisioterapia Avanzata OMPT</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Il tuo movimento <br />parte dalle <span className="text-[#55B4FF]">fondamenta.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Il dolore al ginocchio non è mai isolato. Dalla lesione sportiva all'artrosi progressiva, il nostro approccio OMPT agisce sulla complessa biomeccanica dell'arto inferiore, non solo sul sintomo.
            </p>
          </header>

          {/* SEZIONE 1: L'EMPATIA CLINICA (Rimodulazione del Dolore) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  Analisi Clinica
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Oltre l'imaging: <br/>capire il tuo ginocchio.</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-[#55B4FF] font-bold text-lg mb-4 uppercase tracking-tighter">Problematiche Meccaniche</h3>
                      <p className="text-slate-500 text-base leading-relaxed">
                        Un dolore anteriore o un blocco meniscale non sempre richiedono chirurgia. Spesso sono il risultato di un deficit di controllo motorio dell'anca o di una rigidità della caviglia. La nostra priorità è ripristinare la funzione.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#022166] font-bold text-lg mb-4 uppercase tracking-tighter">Condizioni Degenerative</h3>
                      <p className="text-slate-500 text-base leading-relaxed">
                        L'artrosi non è un verdetto. L'evidenza scientifica dimostra che un ginocchio "consumato" può essere asintomatico e performante se adeguatamente supportato da una muscolatura forte e da una biomeccanica corretta.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: IL RIMEDIO OMPT (CORE VALUE & SCIENZA) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#E0F2FE] text-[#022166] px-4 py-2 rounded-full mb-8">
                  <Scale size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Il nostro protocollo di Eccellenza</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  Terapia Manuale ed <br /><span className="text-[#55B4FF]">Esercizio Terapeutico.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Le linee guida internazionali sono chiare: la combinazione di Terapia Manuale specializzata e un piano di carico progressivo è il *gold standard* per il ginocchio. Non usiamo macchinari passivi, ma la scienza del movimento:
                </p>
                <ul className="space-y-4">
                  {[
                    "Mobilizzazioni specifiche per ripristinare l'estensione completa",
                    "Rinforzo selettivo del quadricipite e glutei (i veri ammortizzatori)",
                    "Miglioramento della propriocezione e del controllo motorio",
                    "Esposizione graduale al carico per tessuti più resilienti"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#022166] font-bold italic">
                      <ShieldCheck size={20} className="text-[#55B4FF]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="bg-[#022166] p-8 rounded-[2rem] text-white flex flex-col justify-end min-h-[250px]">
                  <Weight className="mb-4 text-[#55B4FF]" size={40} />
                  <h4 className="font-bold text-xl leading-tight">Carico <br/>Gestito</h4>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-end min-h-[250px]">
                  <Target className="mb-4 text-[#022166]" size={40} />
                  <h4 className="font-bold text-xl text-[#022166] leading-tight">Precisione <br/>Biomeccanica</h4>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 3: IL PERCORSO (FUNNEL INFORMATIVO CLINICO) */}
          <section className="mb-32">
             <div className="bg-white p-10 md:p-20 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="text-center max-w-2xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-6">Il tuo Percorso <br />di Recupero</h2>
                  <p className="text-slate-500 font-medium italic">Un protocollo adattivo basato sulle più recenti evidenze in ambito OMPT.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">01</div>
                    <Target className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Valutazione Biomeccanica</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Non guardiamo solo il ginocchio. Analizziamo come cammini, salti e ti muovi per trovare la vera causa del sovraccarico.</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">02</div>
                    <BrainCircuit className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Ricalibrazione e Controllo</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Usiamo la terapia manuale per ridurre il dolore acuto e esercizi specifici per "riaccendere" i muscoli stabilizzatori.</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">03</div>
                    <Weight className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Carico e Performance</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Costruiamo una struttura solida. Aumentiamo gradualmente il carico per preparare il tuo ginocchio al ritorno alla vita quotidiana o allo sport.</p>
                  </div>
                </div>
             </div>
          </section>


{/* --- SEZIONE RECENSIONI (PROVA SOCIALE MIRATA) --- */}
<section id="recensioni" className="relative w-full py-16 md:py-32 px-4 overflow-hidden bg-transparent flex items-center">
  
  {/* Background decorativo soffuso */}
  <div className="absolute inset-0 pointer-events-none opacity-30 md:opacity-40">
    <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#55B4FF]/10 rounded-full blur-[80px] md:blur-[120px]"></div>
    <div className="absolute bottom-[-5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#022166]/5 rounded-full blur-[80px] md:blur-[120px]"></div>
  </div>

  <div className="max-w-7xl mx-auto w-full relative z-10">
    
    {/* Header */}
    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 md:mb-24 gap-8 md:gap-10 text-center lg:text-left">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-4 md:mb-6">
          <Zap className="text-green-500" size={12} />
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#022166]">Risultati Clinici Verificati</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-bold text-[#022166] tracking-tighter leading-[1.1] md:leading-[0.95]">
          Storie di <br className="hidden md:block" />ritorno al <span className="text-[#55B4FF]">Movimento.</span>
        </h2>
      </div>
      
      {/* Google Card */}
      <div className="bg-white p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl shadow-blue-900/5 border border-white flex items-center gap-5 md:gap-8 w-full max-w-sm lg:w-auto">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F8FAFC] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
          <Scale className="w-6 h-6 md:w-8 md:h-8 text-[#022166]" />
        </div>
        <div>
          <div className="flex gap-0.5 text-yellow-400 mb-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" stroke="none" />)}
          </div>
          <p className="text-[#022166] font-black text-lg md:text-xl tracking-tighter leading-none">Specialisti Ginocchio</p>
          <p className="text-slate-400 text-[9px] uppercase tracking-widest mt-1 font-bold">Eccellenza OMPT</p>
        </div>
      </div>
    </div>

    {/* Slider Area */}
    <div className="relative group px-0">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true, 
          el: '.swiper-pagination-custom',
        }}
        breakpoints={{ 
          768: { slidesPerView: 2, spaceBetween: 25 }, 
          1280: { slidesPerView: 3, spaceBetween: 30 } 
        }}
        className="!pb-16 md:!pb-24 !overflow-visible"
      >
        {[
          { n: "Samuele Pini", t: "mi sono rotto il crociato e subito ho deciso di iniziare il mio percorso preoperatorio grazie al quale ho potuto affrontare la riabilitazione molto meglio, psicplogicamente piu sollevato. Grazie al dott.Mirco e al suo staff, dotato ci ottima preparazione", d: "2 mesi fa" },
          { n: "Luisa Tirelli", t: "Ottimo professionista. Mi ha risolto, con esercizi mirati, nel giro di 2 mesi, un problema invalidante al ginocchio. Oltre all'indubbia competenza, ti ascolta e ti spiega alla perfezione gli esercizi che ti propone x il tuo problema. Grazie mille, Mirco. Consigliatissimo!!!", d: "1 anno fa" },
          { n: "Edoardo Massarenti", t: "Esperienza super positiva. Mi sono rivolto al dottor Malavasi per curare una tendinopatia al ginocchio, in poco più di due mesi abbiamo risolto! Ho trovato grande professionalità e conoscenza della materia sia dal dottor Malavasi che dal suo collega Lorenzo. Lo consiglio caldamente!", d: "2 anni fa" }
        ].map((rev, i) => (
          <SwiperSlide key={i} className="!h-auto flex">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 h-full flex flex-col shadow-sm relative group/card w-full">
              
              <div className="flex gap-1 text-yellow-400 mb-6 md:mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" stroke="none" />)}
              </div>

              <blockquote className="flex-grow">
                <p className="text-[#022166]/80 font-medium text-base md:text-lg leading-relaxed italic">
                  "{rev.t}"
                </p>
              </blockquote>

              <div className="flex items-center gap-4 md:gap-5 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-50">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#022166] to-[#55B4FF] rounded-xl md:rounded-2xl flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg flex-shrink-0">
                  {rev.n[0]}
                </div>
                <div>
                  <p className="font-bold text-[#022166] text-base md:text-lg leading-tight mb-1">{rev.n}</p>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.1em]">{rev.d}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Pagination dots */}
      <div className="swiper-pagination-custom flex justify-center mt-2 gap-2"></div>
    </div>
  </div>
</section>



          {/* SEZIONE FINALE: CALL TO ACTION - CONVERSIONE SANITARIA DISCRETA */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700 text-[#55B4FF]">
              <Scale size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi — Specialisti della Biomeccanica</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Ripara la tua biomeccanica, <br />
                <span className="text-[#55B4FF]">riprendi il controllo.</span>
              </h3>
              
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed max-w-xl">
                Ogni giorno di dolore è un giorno di carico errato per le tue articolazioni. Prenota oggi una valutazione clinica specialistica OMPT.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="https://www.fisioterapiamalavasi.it/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:shadow-[0_20px_40px_rgba(85,180,255,0.2)] transition-all active:scale-95"
                >
                  Richiedi Valutazione Clinica
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
                >
                  Parla con un Terapista OMPT
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER NAVIGATION */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Altre Aree di Trattamento
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Soluzioni Cliniche Avanzate</span>
          </div>

        </div>
      </div>
    </main>
  );
}