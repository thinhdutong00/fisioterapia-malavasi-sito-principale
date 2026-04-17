"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ChevronRight, Activity, 
  ShieldCheck, Zap, Waves, Target, 
  Microscope, CheckCircle2, Phone, Calendar, 
  Stethoscope, MousePointer2, Scaling, Trophy
} from 'lucide-react';

export default function LesioniMeniscaliAdvancedPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#022166]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#55B4FF]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* NAV / BREADCRUMB */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={12} />
            <span className="text-[#022166]">Lesioni Meniscali</span>
          </nav>

          {/* HERO SECTION - ALLINEATA A DESIGN SYSTEM */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Fisioterapia Specialistica OMPT</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Menisco: riprendi <br />
              il controllo <span className="text-[#55B4FF]">della tua mobilità.</span>
            </h1>

            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Oltre l'80% delle lesioni meniscali può essere gestito con successo tramite il <strong>Recupero Funzionale</strong>. La nostra missione è proteggere l'integrità del tuo ginocchio e restituirti la libertà di movimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link 
                href="#protocollo" 
                className="bg-[#022166] text-white px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-[#55B4FF] hover:shadow-[0_20px_40px_rgba(85,180,255,0.2)] transition-all active:scale-95"
              >
                Il nostro approccio
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white/5 backdrop-blur-md text-[#022166] border border-slate-200 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-slate-50 transition-all active:scale-95"
              >
                Parla con un esperto
              </a>
            </div>
          </header>

          {/* EMPATHY & CLINICAL SINERGY */}
          <section className="mb-32 grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[#022166]/10 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=800&auto=format&fit=crop" 
                  alt="Riabilitazione specialistica menisco" 
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-[#022166] font-bold text-sm italic">
                    "Un menisco sano è un ammortizzatore prezioso: la chirurgia è un'opzione, la riabilitazione è una necessità."
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight leading-tight">
                Oltre la diagnosi: <br />
                <span className="text-slate-400">ripristiniamo la tua funzione.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Il dolore al menisco spesso indica un sistema che ha perso il suo equilibrio. Sia che tu stia cercando di evitare l'intervento, sia che tu ti stia preparando alla sala operatoria, il nostro metodo <strong>OMPT</strong> ottimizza la biomeccanica del ginocchio per un recupero duraturo.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { t: "Gestione Meccanica", d: "Riallineiamo i carichi per scaricare la zona lesionata." },
                  { t: "Controllo Edema", d: "Tecniche avanzate per eliminare il gonfiore articolare." },
                  { t: "Rinforzo Selettivo", d: "Muscoli più forti per proteggere il menisco residuo." },
                  { t: "Sinergia Chirurgica", d: "Prepariamo il ginocchio per massimizzare il successo del chirurgo." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                    <CheckCircle2 className="text-[#55B4FF] shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-[#022166] text-xs uppercase mb-1 tracking-wider">{item.t}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EVIDENCE-BASED SECTION - NO TERM CONSERVATIVO */}
          <section id="protocollo" className="mb-32">
            <div className="bg-[#022166] rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                <Microscope size={400} />
              </div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Perché puntare sul Recupero Funzionale?</h2>
                <p className="text-white/70 text-lg mb-12 font-light leading-relaxed">
                  Le più recenti linee guida internazionali indicano che la gestione fisioterapica d'élite produce risultati a lungo termine sovrapponibili alla chirurgia, mantenendo però l'integrità anatomica del ginocchio e <strong>azzerando i tempi di degenza</strong>.
                </p>
                <div className="space-y-6">
                  {[
                    "Mantenimento del tessuto meniscale (fondamentale per prevenire l'artrosi).",
                    "Recupero immediato della forza senza i vincoli del post-operatorio.",
                    "Analisi e correzione dei difetti di movimento che hanno causato la lesione.",
                    "Percorso personalizzato basato su test di forza oggettivi."
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="h-2 w-2 rounded-full bg-[#55B4FF]"></div>
                      <p className="text-sm md:text-base font-medium text-white/90">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ROADMAP / STEPS */}
          <section className="mb-32">
            <h2 className="text-3xl md:text-5xl font-bold text-[#022166] mb-16 tracking-tight">Il percorso verso la <span className="text-[#55B4FF]">piena efficienza</span></h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { n: "01", icon: Scaling, t: "Valutazione Meccanica", d: "Test clinici approfonditi per determinare l'origine reale del tuo dolore." },
                { n: "02", icon: Zap, t: "Fase Neuromuscolare", d: "Terapia manuale ed esercizi per ripristinare il corretto controllo del ginocchio." },
                { n: "03", icon: Trophy, t: "Return to Life", d: "Progressione del carico per tornare allo sport o al lavoro senza timore di ricadute." }
              ].map((step, i) => (
                <div key={i} className="group">
                  <div className="text-6xl font-black text-slate-100 group-hover:text-[#55B4FF]/20 transition-colors mb-4 leading-none">{step.n}</div>
                  <step.icon className="text-[#022166] mb-6" size={36} />
                  <h4 className="text-xl font-bold text-[#022166] mb-4">{step.t}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL CONVERSION SECTION */}
          <section className="bg-white rounded-[3rem] border border-slate-100 p-8 md:p-20 shadow-2xl shadow-blue-900/5 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#55B4FF]/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-bold text-[#022166] mb-8 tracking-tighter">
                Il tuo ginocchio merita <br />una <span className="text-[#55B4FF]">strategia d'élite.</span>
              </h3>
              <p className="text-slate-500 text-lg mb-12 font-light">
                Non aspettare che il dolore limiti la tua libertà. Definiamo oggi il piano di recupero più adatto alla tua condizione clinica.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/prenota" 
                  className="w-full sm:w-auto bg-[#022166] text-white px-12 py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#55B4FF] transition-all"
                >
                  Prenota Valutazione <Calendar size={18} />
                </Link>
                <div className="flex flex-col items-center sm:items-start border-l border-slate-100 pl-6">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Direct Line</span>
                  <a href="tel:+393338225464" className="text-[#022166] font-black text-xl hover:text-[#55B4FF] transition-colors">
                    +39 333 8225464
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER NAV */}
          <footer className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
            <Link href="/trattamenti" className="flex items-center gap-2 text-xs font-bold hover:text-[#022166] transition-colors uppercase tracking-widest">
              <ArrowLeft size={16} /> Torna ai trattamenti
            </Link>
            <p className="text-[10px] font-black uppercase tracking-widest text-center">
              Dr. Malavasi OMPT — Knee Specialist
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}