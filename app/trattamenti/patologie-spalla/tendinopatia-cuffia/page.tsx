"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ChevronRight, Activity, 
  ShieldCheck, Zap, Waves, Target, 
  CheckCircle2, Phone, Calendar, 
  MousePointer2, Trophy, Microscope,
  Stethoscope, Dumbbell, Star, AlertCircle
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TendinopatiaSpallaPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#022166]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#55B4FF]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* BREADCRUMB - SEO Friendly */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={12} />
            <span className="text-[#022166]">Tendinopatia Cuffia dei Rotatori</span>
          </nav>

          {/* HERO SECTION - Landing Page Mode (Google Ads optimized) */}
          <header className="mb-20 md:mb-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#022166] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Activity size={14} className="text-[#55B4FF]" /> Specialista Riabilitazione Spalla
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-[#022166] leading-[1.05] mb-8 tracking-tight">
              Torna ad alzare <br />
              <span className="text-[#55B4FF]">il braccio.</span>
              <br /> 
              Senza dolore.
            </h1>

            <p className="max-w-3xl text-lg md:text-2xl text-slate-600 font-medium leading-relaxed mb-10">
              Il dolore alla spalla non si risolve con il solo riposo. Che si tratti di un'infiammazione o di una lesione della cuffia, la soluzione è recuperare la <strong>meccanica del movimento</strong> attraverso la terapia manuale OMPT.
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
                Consulenza Specialistica <Phone size={18} />
              </a>
            </div>
          </header>

          {/* SECTION 1: CONSAPEVOLEZZA (Il problema) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-square bg-white rounded-[3rem] p-8 border border-slate-100 shadow-sm relative overflow-hidden flex items-center justify-center">
                   <div className="absolute top-0 right-0 p-8 opacity-5 text-[#022166]">
                     <AlertCircle size={200} />
                   </div>
                   <div className="space-y-8 relative z-10">
                      <h3 className="text-2xl font-bold text-[#022166]">Ti riconosci in questi sintomi?</h3>
                      <ul className="space-y-6">
                        {[
                          { t: "Dolore Notturno", d: "Difficoltà a dormire sul lato della spalla interessata." },
                          { t: "Limitazione Funzionale", d: "Dolore nel pettinarsi, vestirsi o sollevare carichi leggeri." },
                          { t: "Debolezza", d: "Sensazione di cedimento quando provi ad alzare il braccio lateralmente." },
                          { t: "Dolore 'a arco'", d: "Fitte acute solo in determinati gradi di movimento." }
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                            <div className="h-6 w-6 rounded-full bg-[#55B4FF]/20 flex items-center justify-center flex-shrink-0 mt-1">
                              <div className="h-2 w-2 rounded-full bg-[#55B4FF]"></div>
                            </div>
                            <div>
                              <h4 className="font-bold text-[#022166] text-sm uppercase">{item.t}</h4>
                              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#55B4FF]">Diagnosi & Analisi</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#022166] tracking-tight">
                  Perché la spalla è così <br />complessa?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  La spalla è l'articolazione più mobile del corpo, ma la sua stabilità dipende da un delicato equilibrio muscolare: la <strong>Cuffia dei Rotatori</strong>. 
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Quando questo equilibrio si rompe (per trauma, usura o postura), i tendini iniziano a soffrire. Ignorare questi segnali porta spesso a calcificazioni o, nei casi peggiori, a lesioni complete che richiedono la chirurgia.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border-l-4 border-l-[#55B4FF] shadow-sm">
                    <Microscope className="text-[#022166]" size={24} />
                    <p className="text-xs font-medium text-slate-500 italic">Analizziamo la tua risonanza o ecografia per integrare il reperto clinico con la valutazione funzionale.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: LA SOLUZIONE (Metodo OMPT) */}
          <section className="mb-32 bg-[#022166] rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden">
             <div className="absolute bottom-0 right-0 opacity-5">
                <Target size={400} />
             </div>
             
             <div className="max-w-3xl relative z-10">
                <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-8">Il nostro approccio: <br /><span className="text-[#55B4FF]">Carico Progressivo.</span></h2>
                <p className="text-white/70 text-lg md:text-xl mb-12 font-light">
                  Il vecchio approccio "riposo e antinfiammatori" è superato. Il tendine ha bisogno di <strong>carico guidato</strong> per guarire. Il nostro protocollo OMPT combina:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { i: Stethoscope, t: "Terapia Manuale", d: "Per ridurre il dolore immediato e migliorare la mobilità articolare." },
                    { i: Dumbbell, t: "Esercizio Terapeutico", d: "Rinforzo specifico della cuffia per ricentrare la testa dell'omero." },
                    { i: Zap, t: "Gestione del Carico", d: "Educazione su come usare la spalla quotidianamente senza irritarla." },
                    { i: ShieldCheck, t: "Prevenzione Ricadute", d: "Protocolli di mantenimento per una spalla forte e resiliente." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <item.i className="text-[#55B4FF] flex-shrink-0" size={28} />
                      <div>
                        <h4 className="font-bold text-sm uppercase mb-2 tracking-widest text-white">{item.t}</h4>
                        <p className="text-white/50 text-sm leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          {/* SECTION 3: ROADMAP (Il Funnel del Recupero) */}
          <section id="protocollo" className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-6xl font-bold text-[#022166] tracking-tighter mb-6">Il percorso di guarigione.</h2>
              <p className="text-slate-500 font-medium italic">4 fasi per riportare la tua spalla alla massima funzionalità.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { t: "Fase 1", s: "Controllo Dolore", d: "Tecniche manuali per eliminare il dolore notturno e infiammatorio." },
                { t: "Fase 2", s: "Recupero ROM", d: "Ripristino della mobilità completa del braccio in ogni direzione." },
                { t: "Fase 3", s: "Forza e Stabilità", d: "Rinforzo dei muscoli stabilizzatori e della scapola." },
                { t: "Fase 4", s: "Ritorno all'Attività", d: "Test funzionali per il ritorno allo sport o al lavoro pesante." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                  <span className="text-[10px] font-black uppercase text-[#55B4FF] tracking-[0.2em] block mb-4">{step.t}</span>
                  <h4 className="text-xl font-bold text-[#022166] mb-4">{step.s}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: CTA FINALE */}
          <section className="bg-white p-10 md:p-24 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-[#022166] mb-8 tracking-tighter">
                  Non lasciare che la spalla <br />diventi un limite.
                </h3>
                <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
                  Una valutazione precoce può evitare l'aggravarsi della tendinopatia. Prenota ora la tua consulenza OMPT.
                </p>
                <Link 
                  href="/prenota" 
                  className="inline-flex bg-[#022166] text-white px-12 py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-[#55B4FF] transition-all shadow-lg active:scale-95"
                >
                  Prenota la Valutazione
                </Link>
              </div>
              <div className="bg-[#F8FAFC] p-8 rounded-[3rem] border border-slate-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#022166] font-medium italic text-lg leading-relaxed mb-6">
                  "Dopo mesi di dolore e notti insonni, finalmente ho trovato un percorso chiaro. Ora sono tornato a nuotare senza alcun fastidio."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#022166] rounded-full flex items-center justify-center text-white font-bold text-xs">P</div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Paolo, Paziente Sportivo</span>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER NAV */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
            <Link href="/trattamenti" className="flex items-center gap-2 text-sm font-bold hover:text-[#022166] transition-colors">
              <ArrowLeft size={16} /> Altri percorsi specialistici
            </Link>
            <p className="text-[10px] font-black uppercase tracking-widest text-center">
              Fisioterapia Malavasi — Scienza e Movimento.
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}