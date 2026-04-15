"use client";

import React from 'react';
import Link from 'next/link';

// Icone Lucide-React ottimizzate per la complessità della Spalla
import { 
  ArrowLeft, Star,
  ChevronRight,
  RefreshCw, // Simboleggia il recupero della mobilità (rotazione)
  Compass, // Simboleggia la guida/orientamento clinico
  ShieldCheck,
  Zap,
  MoveHorizontal, // Simboleggia l'ampiezza di movimento
  Stethoscope,
  Phone,
  CalendarCheck
} from 'lucide-react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';


export default function SpallaRiabilitazionePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb - SEO & Navigabilità */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Fisioterapia della Spalla</span>
          </nav>

          {/* HEADER - GOOGLE ADS HOOK */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Centro Specialistico OMPT</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Ritrova la libertà <br />di alzare il <span className="text-[#55B4FF]">braccio.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Dalla spalla congelata alle lesioni della cuffia dei rotatori: risolviamo il dolore agendo sulla meccanica articolare con protocolli clinici basati sulle più recenti evidenze internazionali.
            </p>
          </header>

          {/* SEZIONE 1: IDENTIFICAZIONE DEL DOLORE (USER INTENT) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  Cosa stai provando?
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Il dolore alla spalla <br/>non è tutto uguale.</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-[#55B4FF] font-bold text-lg mb-4 uppercase tracking-tighter">Dolore Notturno</h3>
                      <p className="text-slate-500 text-base leading-relaxed">
                        Spesso legato a fenomeni infiammatori o borsiti. È il segnale che lo spazio sub-acromiale è ridotto e i tessuti sono in sofferenza. Ignorarlo può portare a rigidità cronica.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#022166] font-bold text-lg mb-4 uppercase tracking-tighter">Debolezza e Blocchi</h3>
                      <p className="text-slate-500 text-base leading-relaxed">
                        Se avverti una "scossa" o mancanza di forza nei movimenti sopra la testa, potrebbe esserci un deficit di stabilità della scapola o una sofferenza dei tendini della cuffia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: IL DIFFERENZIALE OMPT (PERCHÉ NOI?) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#E0F2FE] text-[#022166] px-4 py-2 rounded-full mb-8">
                  <RefreshCw size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Metodo Riabilitativo Avanzato</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  La diagnosi funzionale <br /><span className="text-[#55B4FF]">fa la differenza.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Trattare la spalla senza analizzare la colonna e la scapola è l'errore più comune. Il nostro approccio OMPT integra:
                </p>
                <ul className="space-y-4">
                  {[
                    "Terapia Manuale per liberare le restrizioni capsulari",
                    "Esercizi di controllo scapolo-toracico personalizzati",
                    "Tecniche di neuro-modulazione per il dolore acuto",
                    "Recupero del gesto sportivo o lavorativo specifico"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#022166] font-bold italic">
                      <ShieldCheck size={20} className="text-[#55B4FF]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="bg-[#022166] p-8 rounded-[2rem] text-white flex flex-col justify-end min-h-[250px]">
                  <MoveHorizontal className="mb-4 text-[#55B4FF]" size={40} />
                  <h4 className="font-bold text-xl leading-tight">Recupero del <br/>Range of Motion</h4>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-end min-h-[250px]">
                  <Zap className="mb-4 text-[#022166]" size={40} />
                  <h4 className="font-bold text-xl text-[#022166] leading-tight">Esercizio <br/>Funzionale</h4>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 3: PERCORSO CLINICO (FIDUCIA) */}
          <section className="mb-32">
             <div className="bg-white p-10 md:p-20 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="text-center max-w-2xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-6">Il Protocollo Spalla</h2>
                  <p className="text-slate-500 font-medium italic">Un iter rigoroso per eliminare le recidive.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">01</div>
                    <Stethoscope className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Screening Clinico</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Test ortopedici di differenziazione per capire se l'origine è tendinea, articolare o riferita.</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">02</div>
                    <RefreshCw className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Reset e Mobilità</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Fase manuale per abbassare il dolore e "sbloccare" i segmenti rigidi (spalla e torace).</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">03</div>
                    <Compass className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Autogestione</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Ti forniamo gli strumenti per mantenere i risultati nel tempo in totale autonomia.</p>
                  </div>
                </div>
             </div>
          </section>

{/* --- RECENSIONI TARGETIZZATE --- */}
<section id="recensioni" className="relative w-full py-16 md:py-32 px-4 overflow-hidden bg-transparent flex items-center">
  <div className="max-w-7xl mx-auto w-full relative z-10">
    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 md:mb-24 gap-8 md:gap-10 text-center lg:text-left">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-7xl font-bold text-[#022166] tracking-tighter leading-[1.1]">
          Cosa dicono i <br />nostri <span className="text-[#55B4FF]">pazienti.</span>
        </h2>
      </div>
      <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-white flex items-center gap-5">
        <div className="flex gap-0.5 text-yellow-400 mb-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" stroke="none" />)}
        </div>
        <p className="text-[#022166] font-black text-lg">Voto 5/5</p>
      </div>
    </div>

    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={25}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
      breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
      className="!pb-20"
    >
      {[
        { n: "Marco L.", t: "Soffrivo di dolore notturno alla spalla da mesi. Grazie a Mirco ho finalmente capito la causa e con pochi trattamenti mirati sono tornato a dormire bene.", d: "1 mese fa" },
        { n: "Giulia P.", t: "Professionalità eccezionale. Mi hanno aiutato a recuperare dopo una lussazione, spiegandomi ogni fase del percorso. Super consigliato!", d: "2 mesi fa" },
        { n: "Stefano R.", t: "Esercizi e terapia manuale top. Non è il solito fisioterapista che ti mette una macchina e se ne va. Qui sei seguito per davvero.", d: "3 settimane fa" }
      ].map((rev, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm h-full">
            <p className="text-[#022166]/80 font-medium italic mb-8">"{rev.t}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#022166] rounded-full flex items-center justify-center text-white font-bold">{rev.n[0]}</div>
              <p className="font-bold text-[#022166]">{rev.n}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="swiper-pagination-custom flex justify-center gap-2"></div>
  </div>
</section>

          {/* FINAL CTA - OTTIMIZZATA PER CONVERSIONE ADS */}
          <section className="bg-[#022166] p-12 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden text-white">
            <div className="relative z-10 text-center">
              <h3 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">
                Smetti di convivere <br />con il <span className="text-[#55B4FF]">dolore.</span>
              </h3>
              <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto font-light">
                Unisciti alle centinaia di pazienti che hanno recuperato la piena funzionalità della spalla nel nostro studio.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link 
                  href="/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-10 py-6 rounded-2xl font-black uppercase text-[12px] tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3"
                >
                  <CalendarCheck size={18} /> Prenota Valutazione
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-6 rounded-2xl font-black uppercase text-[12px] tracking-widest hover:bg-white/20 transition-all flex items-center justify-center gap-3"
                >
                  <Phone size={18} /> Chiama in Studio
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400">
            <Link href="/trattamenti" className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all">
              <ArrowLeft size={20} /> Torna ai Trattamenti
            </Link>
            <p className="text-[10px] uppercase tracking-widest font-black opacity-40">Eccellenza in Fisioterapia OMPT — Malavasi</p>
          </div>

        </div>
      </div>
    </main>
  );
}