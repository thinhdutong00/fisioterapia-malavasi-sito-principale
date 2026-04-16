"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ChevronRight, Activity, 
  ShieldCheck, Zap, Waves, 
  Move, HeartPulse, Microscope, 
  CheckCircle2, AlertCircle, HelpCircle
} from 'lucide-react';

export default function GonartrosiAdsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVO - Coerente con Brand Identity */}
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
            <span className="text-[#022166] font-semibold text-xs uppercase tracking-widest">Gonartrosi</span>
          </nav>

          {/* HEADER SEZIONE - STRATEGIA ADS: EMPATIA E PROMESSA CHIARA */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Centro di Riabilitazione d'Eccellenza</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Artrosi al Ginocchio: <br />
              <span className="text-[#55B4FF]">Riprendi i tuoi passi.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Il dolore da gonartrosi non deve definire i tuoi limiti. Attraverso il metodo OMPT, aiutiamo i nostri pazienti a ridurre l'infiammazione e a ritrovare la forza necessaria per camminare senza pensieri, evitando quando possibile la sala operatoria.
            </p>
          </header>

          {/* SEZIONE 1: ANALISI EMPATICA (GENTILE MA DIRETTA) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <HelpCircle className="text-[#55B4FF] mb-4" size={32} />
                  <h2 className="text-2xl font-bold text-[#022166] mb-4">Ti senti limitato nelle tue passioni?</h2>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Svegliarsi con le ginocchia rigide, rinunciare a una passeggiata o provare dolore a ogni gradino è frustrante. Sappiamo che cerchi una soluzione reale, non un semplice palliativo.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-[#022166] mb-8 tracking-tight">Perché la scienza è dalla tua parte:</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-10 italic">
                    "L'artrosi non è una malattia da 'usura', ma una condizione di salute articolare che risponde incredibilmente bene al carico graduale e alla terapia manuale."
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { t: "Riduzione della Rigidità", d: "Tecniche manuali specifiche per migliorare la lubrificazione naturale del ginocchio." },
                      { t: "Rinforzo Muscolare Protetto", d: "Esercizi che stabilizzano l'articolazione senza sovraccaricare la cartilagine." },
                      { t: "Prevenzione Chirurgica", d: "Ottimizziamo la biomeccanica per posticipare o evitare l'uso di protesi." },
                      { t: "Educazione al Carico", d: "Ti insegniamo come muoverti correttamente per non infiammare più il ginocchio." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <CheckCircle2 className="text-[#55B4FF] flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-bold text-[#022166] text-sm uppercase tracking-wide">{item.t}</h4>
                          <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: TRUST & METODO (EBM FOCUS) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#E0F2FE] text-[#022166] px-4 py-2 rounded-full mb-8">
                  <ShieldCheck size={16} className="text-[#55B4FF]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Protocollo Certificato OMPT</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  Più mobilità, <br /><span className="text-[#55B4FF]">meno farmaci.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Le infiltrazioni e i farmaci agiscono sul sintomo. La nostra fisioterapia agisce sulla <strong>causa meccanica</strong>. Integrando le migliori prove scientifiche, costruiamo un percorso che ti restituisce la fiducia nei tuoi movimenti.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-3">
                      <Microscope className="text-[#55B4FF]" size={20} />
                      <span className="text-sm font-bold text-[#022166]">Analisi Biomeccanica</span>
                   </div>
                   <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-3">
                      <Zap className="text-[#55B4FF]" size={20} />
                      <span className="text-sm font-bold text-[#022166]">Terapia Manuale</span>
                   </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative p-10 bg-[#022166] rounded-[3rem] text-white shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                    <Move size={150} />
                  </div>
                  <h4 className="text-2xl font-bold mb-6 tracking-tight italic">"Non è il ginocchio che è vecchio, è il modo in cui lavora che va aggiornato."</h4>
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#55B4FF] rounded-full"></div>
                      <p className="text-sm text-white/80 font-medium tracking-wide">Miglioramento visibile dalla 3° seduta</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#55B4FF] rounded-full"></div>
                      <p className="text-sm text-white/80 font-medium tracking-wide">Protocollo basato su linee guida NICE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROADMAP DI RECUPEO (FUNNEL LOGIC) */}
          <section className="mb-32">
             <div className="bg-white p-10 md:p-20 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="text-center max-w-2xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-6">Il tuo piano d'azione</h2>
                  <p className="text-slate-500 font-medium uppercase text-xs tracking-[0.2em]">Semplice. Professionale. Efficace.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-16">
                  {[
                    { n: "01", t: "Valutazione", d: "Analizziamo non solo il ginocchio, ma come cammini e come carichi il peso." },
                    { n: "02", t: "Sollievo", d: "Applichiamo tecniche manuali per ridurre la pressione e dare respiro all'articolazione." },
                    { n: "03", t: "Autonomia", d: "Ti diamo gli strumenti e gli esercizi per mantenere il risultato nel tempo." }
                  ].map((step, i) => (
                    <div key={i} className="text-center md:text-left">
                      <span className="text-4xl font-black text-[#55B4FF] block mb-4">/ {step.n}</span>
                      <h4 className="text-xl font-bold text-[#022166] mb-3">{step.t}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          {/* CTA FINALE - OTTIMIZZATA PER CONVERSIONE ADS */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700 text-[#55B4FF]">
              <Waves size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi — Specialisti Ginocchio</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Torna a vivere <br />
                <span className="text-[#55B4FF]">senza rassegnazione.</span>
              </h3>
              
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed max-w-xl">
                Ogni giorno di attesa è un giorno di mobilità persa. Inizia oggi il tuo percorso di recupero scientifico.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="https://www.fisioterapiamalavasi.it/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:shadow-2xl transition-all active:scale-95"
                >
                  Prenota Valutazione Ginocchio
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
                >
                  Richiedi una Chiamata
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-white/40">
                 <AlertCircle size={16} />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Disponibilità limitata per prime valutazioni</span>
              </div>
            </div>
          </section>

          {/* FOOTER NAVIGATION */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Scopri tutti i trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Clinica Malavasi — Scienza e Professionalità</span>
          </div>

        </div>
      </div>
    </main>
  );
}