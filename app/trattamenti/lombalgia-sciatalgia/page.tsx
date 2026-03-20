"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight,
  Activity,
  ArrowUpRight, 
  ClipboardCheck, 
  Stethoscope, 
  ShieldCheck,
  Zap,
  Clock,
  Waves
} from 'lucide-react';

export default function LombalgiaSciatalgiaPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Coerente con lo stile Hub */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Lombalgia e Sciatalgia</span>
          </nav>

          {/* HEADER SEZIONE - HOOK AD ADS */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Soluzioni per il dolore vertebrale</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Liberati dal <br />dolore alla <span className="text-[#55B4FF]">schiena.</span>
            </h1>
            <p className="max-w-2xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Dalla fase acuta al ritorno al movimento: un approccio specialistico basato su terapia manuale ed evidenze scientifiche.
            </p>
          </header>

          {/* SEZIONE 1: L'EMPATIA E L'INFORMAZIONE (COSA SONO) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  Comprendere il sintomo
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Perché senti dolore?</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-[#55B4FF] font-bold text-lg mb-4 uppercase tracking-tighter">Lombalgia</h3>
                      <p className="text-slate-500 text-base leading-relaxed">
                        Non è solo "mal di schiena". È un segnale del corpo che indica un sovraccarico funzionale, una rigidità articolare o una debolezza dei muscoli stabilizzatori. Ignorarla significa rischiare la cronicità.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#022166] font-bold text-lg mb-4 uppercase tracking-tighter">Sciatalgia</h3>
                      <p className="text-slate-500 text-base leading-relaxed">
                        Quando il dolore scende lungo la gamba, spesso accompagnato da formicolio, il nervo sciatico è sotto pressione. Può essere dovuto a un'ernia del disco, ma anche a tensioni muscolari profonde.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: IL RIMEDIO - TERAPIA MANUALE (CORE VALUE) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#E0F2FE] text-[#022166] px-4 py-2 rounded-full mb-8">
                  <Zap size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Il nostro metodo</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  La Terapia Manuale: <br /><span className="text-[#55B4FF]">l'arma più efficace.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  A differenza dei soli farmaci che coprono il sintomo, la terapia manuale agisce sulla <strong>causa meccanica</strong> del problema. Attraverso manipolazioni e mobilizzazioni specifiche, andiamo a:
                </p>
                <ul className="space-y-4">
                  {[
                    "Decomprimere le strutture nervose",
                    "Ripristinare la mobilità delle vertebre bloccate",
                    "Disattivare i 'trigger point' muscolari dolorosi",
                    "Ridurre l'infiammazione senza abuso di farmaci"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#022166] font-bold italic">
                      <ShieldCheck size={20} className="text-[#55B4FF]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="bg-[#022166] p-8 rounded-[2rem] text-white flex flex-col justify-end min-h-[250px]">
                  <Waves className="mb-4 text-[#55B4FF]" size={40} />
                  <h4 className="font-bold text-xl leading-tight">Drenaggio Infiammazione</h4>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-end min-h-[250px]">
                  <Activity className="mb-4 text-[#022166]" size={40} />
                  <h4 className="font-bold text-xl text-[#022166] leading-tight">Ripristino Funzionale</h4>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 3: IL PERCORSO (FUNNEL INFORMATIVO) */}
          <section className="mb-32">
             <div className="bg-white p-10 md:p-20 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="text-center max-w-2xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-6">Come risolveremo <br />il tuo problema?</h2>
                  <p className="text-slate-500 font-medium italic">Un protocollo in tre step studiato per la tua colonna.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">01</div>
                    <ClipboardCheck className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Valutazione Iniziale</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Identifichiamo l'origine del dolore attraverso test ortopedici e neurologici specifici.</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">02</div>
                    <Stethoscope className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Fase Operativa</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Trattamento manuale per ridurre il dolore acuto e liberare i movimenti bloccati.</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">03</div>
                    <Clock className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Mantenimento</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Esercizi di rinforzo personalizzati per evitare che il dolore torni in futuro.</p>
                  </div>
                </div>
             </div>
          </section>

          {/* SEZIONE FINALE: CALL TO ACTION - CONVERSIONE */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700 text-[#55B4FF]">
              <Activity size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi — Specialisti della Colonna</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Non aspettare che il <br />
                <span className="text-[#55B4FF]">dolore peggiori.</span>
              </h3>
              
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed max-w-xl">
                Prenota oggi una valutazione specialistica e torna a muoverti senza limitazioni.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="https://www.fisioterapiamalavasi.it/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:shadow-[0_20px_40px_rgba(85,180,255,0.2)] transition-all active:scale-95"
                >
                  Prenota la tua Visita
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
                >
                  Richiedi Info
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
              <ArrowLeft size={20} /> Altri Trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Soluzioni Cliniche</span>
          </div>

        </div>
      </div>
    </main>
  );
}