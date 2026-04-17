"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ChevronRight, Activity, 
  ShieldCheck, Zap, Waves, Target, 
  CheckCircle2, Phone, Calendar, 
  MousePointer2, Trophy, Microscope,
  Stethoscope, ThermometerSnowflake, Star, 
  Lock, Unlock, Info
} from 'lucide-react';

export default function CapsuliteAdesivaPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVO */}
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
            <span className="text-[#022166]">Capsulite Adesiva</span>
          </nav>

          {/* HERO SECTION - ALLINEATA A STILE CERVICALGIA */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Specialista Spalla Congelata</span>
            </div>

            {/* Applicazione del font: font-bold, leading-[0.95] e tracking-tighter */}
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Sblocca la tua <br />
              libertà di <span className="text-[#55B4FF]">movimento.</span>
            </h1>

            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              La spalla congelata non è solo un dolore: è un ostacolo alla tua vita quotidiana. Un approccio specialistico <strong>OMPT</strong> può ridurre drasticamente i tempi di guarigione, guidandoti fuori dalla fase infiammatoria.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link 
                href="#percorso" 
                className="bg-[#022166] text-white px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-[#55B4FF] hover:shadow-[0_20px_40px_rgba(85,180,255,0.2)] transition-all active:scale-95"
              >
                Inizia lo sblocco
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white/5 backdrop-blur-md text-[#022166] border border-slate-200 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-slate-50 transition-all active:scale-95"
              >
                Consulenza OMPT
              </a>
            </div>
          </header>

          {/* ANALISI DELLA PATOLOGIA - EDUCAZIONE AL PAZIENTE */}
          <section className="mb-32">
            <div className="bg-white rounded-[4rem] p-8 md:p-20 border border-slate-100 shadow-sm">
              <div className="grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.3em]">
                    <Info size={14} /> Comprendere la Capsulite
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight leading-tight">
                    Perché la spalla si è "congelata"?
                  </h2>
                  <p className="text-lg text-slate-600 font-light leading-relaxed">
                    La capsulite adesiva è un'infiammazione profonda della capsula articolare che porta a un progressivo irrigidimento. È un percorso che attraversa tre fasi distinte: **Freezing** (dolore acuto), **Frozen** (blocco massimo) e **Thawing** (sblocco).
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-[#F8FAFC] rounded-3xl">
                      <Lock className="text-[#022166] mb-3" size={24} />
                      <h4 className="font-bold text-[#022166] text-sm uppercase mb-2">Fase Blocco</h4>
                      <p className="text-slate-500 text-xs italic">Dolore intenso, specialmente di notte.</p>
                    </div>
                    <div className="p-6 bg-[#E0F2FE] rounded-3xl">
                      <Unlock className="text-[#55B4FF] mb-3" size={24} />
                      <h4 className="font-bold text-[#022166] text-sm uppercase mb-2">Fase Recupero</h4>
                      <p className="text-slate-500 text-xs italic">Graduale ritorno alla mobilità attiva.</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                   <div className="absolute inset-0 bg-[#022166]/5 rounded-[3rem] -rotate-2"></div>
                   <div className="relative bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-lg z-10 w-full">
                      <h3 className="text-xl font-bold text-[#022166] mb-8">Il dolore non deve durare anni.</h3>
                      <ul className="space-y-6">
                        {[
                          "Trattamenti manuali per il controllo del dolore",
                          "Mobilizzazioni specifiche in gradi sicuri",
                          "Esercizi di 'allungamento' capsulare indolore",
                          "Supporto e coordinazione con il medico specialista"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <CheckCircle2 className="text-[#55B4FF] flex-shrink-0" size={20} />
                            <p className="text-slate-600 text-sm font-medium">{item}</p>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROTOCOLLO CLINICO - FUNNEL SOLUZIONE */}
          <section id="percorso" className="mb-32">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter mb-6">Il Metodo Malavasi.</h2>
                <p className="text-slate-500 text-lg font-light">Non forziamo mai il blocco. Lo accompagniamo verso la risoluzione attraverso la scienza del movimento.</p>
              </div>
              <div className="bg-[#022166] text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.3em]">
                Evidence Based Medicine
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { i: Stethoscope, t: "Valutazione Differenziale", d: "Escludiamo altre patologie della spalla per confermare la diagnosi di capsulite." },
                { i: Waves, t: "Gestione Infiammatoria", d: "Utilizziamo tecniche manuali dolci per abbassare la reattività del sistema nervoso." },
                { i: Activity, t: "Recupero Funzionale", d: "Protocolli di esercizio terapeutico per riabilitare la forza e la mobilità persa." }
              ].map((step, idx) => (
                <div key={idx} className="group p-10 bg-white rounded-[3rem] border border-slate-100 hover:border-[#55B4FF] transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="w-16 h-16 bg-[#F8FAFC] group-hover:bg-[#55B4FF] rounded-2xl flex items-center justify-center mb-8 transition-colors">
                    <step.i className="text-[#022166] group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#022166] mb-4">{step.t}</h4>
                  <p className="text-slate-500 leading-relaxed font-light">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA SEZIONI - MASSIMA CONVERSIONE */}
          <section className="bg-[#022166] p-12 md:p-24 rounded-[4rem] relative overflow-hidden text-white shadow-2xl">
             <div className="absolute top-0 right-0 p-12 opacity-10">
                <Unlock size={300} />
             </div>
             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
                    Smetti di convivere <br />con il <span className="text-[#55B4FF]">blocco.</span>
                  </h3>
                  <p className="text-white/60 text-xl font-light mb-10 leading-relaxed">
                    Ogni giorno perso è un giorno di dolore inutile. Prenota oggi la tua valutazione e ricevi un piano d'azione chiaro e professionale.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link 
                      href="/prenota" 
                      className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-95"
                    >
                      Prenota Valutazione <Calendar size={18} />
                    </Link>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem]">
                   <div className="flex gap-1 text-[#55B4FF] mb-6">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="currentColor" />)}
                   </div>
                   <p className="text-xl font-light italic text-white/90 mb-6">
                    "La mia spalla era letteralmente immobile. Mirco mi ha spiegato ogni fase del percorso, dandomi la calma necessaria per affrontare i mesi di recupero. Oggi muovo il braccio al 100%."
                   </p>
                   <span className="text-[10px] font-black uppercase tracking-widest text-[#55B4FF]">Giulia, Insegnante</span>
                </div>
             </div>
          </section>

          {/* FOOTER NAV */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
            <Link href="/trattamenti" className="flex items-center gap-2 text-sm font-bold hover:text-[#022166] transition-colors">
              <ArrowLeft size={16} /> Altri percorsi riabilitativi
            </Link>
            <p className="text-[10px] font-black uppercase tracking-widest text-center">
              Fisioterapia Malavasi — Mirco Malavasi OMPT.
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}