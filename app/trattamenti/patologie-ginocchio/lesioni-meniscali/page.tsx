"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ChevronRight, Activity, 
  ShieldCheck, Zap, Waves, Target, 
  Info, HeartPulse, Microscope, 
  CheckCircle2, Phone, Calendar, 
  Stethoscope, MousePointer2
} from 'lucide-react';

export default function LesioniMeniscaliAdvancedPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden">
      
      {/* BACKGROUND ELEMENTS - Soft Brand Identity */}
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

          {/* HERO SECTION - SEO & ADS OPTIMIZED */}
          <header className="mb-20 md:mb-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#022166] text-[#55B4FF] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Stethoscope size={14} /> Fisioterapia Specialistica OMPT
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold text-[#022166] leading-[1.1] md:leading-[0.95] mb-8 tracking-tight">
              Menisco Lesionato: <br />
              <span className="text-[#55B4FF]">Riprendi il controllo </span> 
              senza chirurgia.
            </h1>
            <p className="max-w-3xl text-lg md:text-2xl text-slate-600 font-medium leading-relaxed mb-10">
              Oltre l'80% delle lesioni meniscali può essere gestito con successo senza ricorrere al bisturi. Scopri come la riabilitazione basata sulle evidenze può rigenerare la tua mobilità e proteggere il futuro del tuo ginocchio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#protocollo" 
                className="bg-[#022166] text-white px-8 py-5 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#55B4FF] hover:text-[#022166] transition-all shadow-lg active:scale-95"
              >
                Il nostro approccio <MousePointer2 size={18} />
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white text-[#022166] border-2 border-slate-100 px-8 py-5 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:border-[#55B4FF] transition-all active:scale-95"
              >
                Parla con un esperto <Phone size={18} />
              </a>
            </div>
          </header>

          {/* PAIN POINT & EMPATHY SECTION */}
          <section className="mb-32 grid lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[#022166]/10 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=800&auto=format&fit=crop" 
                  alt="Riabilitazione ginocchio specialistica" 
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-[#022166] font-bold text-sm italic italic">
                    "La qualità del tuo recupero dipende dalla precisione della tua prima valutazione."
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight">
                Ti è stata diagnosticata una lesione? <br />
                <span className="text-slate-400">Non sei destinato al riposo forzato.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Il dolore al menisco non è solo un problema meccanico; è un segnale di un sistema che ha perso il suo equilibrio biomeccanico. La nostra missione è trasformare quel dolore in una strategia di rinforzo.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { t: "Analisi del Carico", d: "Valutiamo come il tuo peso si distribuisce sull'articolazione." },
                  { t: "Gestione Edema", d: "Tecniche avanzate per ridurre il gonfiore intra-articolare." },
                  { t: "Rinforzo Selettivo", d: "Attivazione dei muscoli stabilizzatori per scaricare il menisco." },
                  { t: "Prevenzione Artrosi", d: "Proteggiamo la cartilagine per i prossimi 20 anni." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                    <CheckCircle2 className="text-[#55B4FF] shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-[#022166] text-sm uppercase mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EVIDENCE-BASED SECTION */}
          <section id="protocollo" className="mb-32">
            <div className="bg-[#022166] rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                <Microscope size={400} />
              </div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Perché scegliere l'approccio conservativo?</h2>
                <p className="text-white/70 text-lg mb-12">
                  Studi clinici recenti dimostrano che per le lesioni degenerative e molte traumatiche, la fisioterapia OMPT produce risultati sovrapponibili alla chirurgia a 2 anni, ma con <strong>zero rischi operatori</strong> e una biomeccanica più naturale.
                </p>
                <div className="space-y-6">
                  {[
                    "Eviti le complicazioni di un'anestesia e di un intervento.",
                    "Mantieni l'integrità del menisco (fondamentale per ammortizzare i carichi).",
                    "Recuperi la forza muscolare in tempi record senza degenza."
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
          <section className="mb-32 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-[#022166] mb-16 tracking-tight">Il percorso verso il <span className="text-[#55B4FF]">ritorno all'attività</span></h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { n: "01", icon: Microscope, t: "Valutazione Clinica", d: "Esame fisico approfondito per testare la stabilità meccanica del menisco." },
                { n: "02", icon: Zap, t: "Controllo Sintomi", d: "Terapia manuale e bio-stimolazione per spegnere l'infiammazione acuta." },
                { n: "03", icon: Target, t: "Rieducazione", d: "Esercizi progressivi di forza e propriocezione per tornare allo sport o al lavoro." }
              ].map((step, i) => (
                <div key={i} className="group">
                  <div className="text-6xl font-black text-slate-100 group-hover:text-[#55B4FF]/20 transition-colors mb-4">{step.n}</div>
                  <step.icon className="text-[#022166] mb-6 mx-auto md:mx-0" size={36} />
                  <h4 className="text-xl font-bold text-[#022166] mb-4">{step.t}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL CONVERSION SECTION */}
          <section className="bg-white rounded-[3rem] border border-slate-100 p-8 md:p-20 shadow-2xl shadow-blue-900/5 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#55B4FF]/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-5xl font-bold text-[#022166] mb-8 tracking-tight italic">
                Il tuo menisco merita una <br />seconda occasione.
              </h3>
              <p className="text-slate-500 text-lg mb-12">
                Non aspettare che il dolore diventi cronico. Prenota oggi una valutazione specialistica e definisci il tuo piano di recupero personalizzato.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="https://www.fisioterapiamalavasi.it/prenota" 
                  className="w-full sm:w-auto bg-[#022166] text-white px-10 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#55B4FF] hover:shadow-xl transition-all"
                >
                  Prenota Valutazione <Calendar size={18} />
                </Link>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Oppure contattaci</span>
                  <a href="tel:+393338225464" className="text-[#022166] font-black text-xl hover:text-[#55B4FF] transition-colors">
                    +39 333 8225464
                  </a>
                </div>
              </div>
              
              <p className="mt-12 text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em]">
                Dr. Malavasi — Fisioterapista OMPT & Specialista del Ginocchio
              </p>
            </div>
          </section>

          {/* FOOTER NAV */}
          <footer className="mt-20 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
            <Link href="/trattamenti" className="flex items-center gap-2 text-sm font-bold hover:text-[#022166] transition-colors">
              <ArrowLeft size={16} /> Torna a tutti i trattamenti
            </Link>
            <p className="text-[10px] font-black uppercase tracking-widest text-center">
              © 2026 Fisioterapia Malavasi — P.IVA 1234567890
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}