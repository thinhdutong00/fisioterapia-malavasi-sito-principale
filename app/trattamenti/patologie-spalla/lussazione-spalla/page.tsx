"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ChevronRight, Zap, Target, 
  CheckCircle2, Calendar, ShieldCheck, Trophy,
  AlertTriangle, Move, Waves, Activity
} from 'lucide-react';

export default function InstabilitaLussazionePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* NAV */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#022166]">Instabilità e Lussazione</span>
          </nav>

          {/* HERO - FOCUS SULLA SICUREZZA */}
          <header className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Specialista della Stabilità</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Ti senti <span className="text-[#55B4FF]">instabile?</span> <br />
              Torna a fidarti.
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Dopo una lussazione, la paura che l'articolazione "esca di nuovo" è il tuo limite più grande. Non serve solo rinforzare, serve <strong>riprogrammare i tuoi riflessi</strong> per una stabilità totale.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link 
                href="/prenota" 
                className="bg-[#022166] text-white px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-[#55B4FF] shadow-xl transition-all active:scale-95"
              >
                Recupera la Stabilità
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white text-[#022166] border border-slate-200 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-slate-50 transition-all"
              >
                Primo episodio? Chiamaci
              </a>
            </div>
          </header>

          {/* SINTOMI - RICONOSCERE L'INSTABILITÀ */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-[#022166] p-10 rounded-[2.5rem] text-white flex flex-col justify-center relative overflow-hidden">
                <AlertTriangle className="text-[#55B4FF] mb-6 relative z-10" size={48} />
                <h2 className="text-3xl font-bold mb-4 tracking-tight leading-tight relative z-10">La sensazione di "vuoto"</h2>
                <p className="text-white/60 font-light text-sm relative z-10">L'instabilità non è sempre dolore, spesso è insicurezza nel movimento.</p>
                <div className="absolute -right-10 -bottom-10 opacity-5">
                   <Move size={200} />
                </div>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Apprensione", d: "Paura immediata nel compiere determinati gesti (es. alzare il braccio o ruotare il ginocchio)." },
                  { t: "Sensazione di uscita", d: "Percezione nitida che l'articolazione si sposti per un istante." },
                  { t: "Dolore Sordo", d: "Fastidio costante dopo un episodio di sub-lussazione." },
                  { t: "Perdita di Forza", d: "Incapacità di spingere o caricare a causa dell'instabilità percepita." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-center hover:border-[#55B4FF]/30 transition-all">
                    <h4 className="font-black text-[#022166] text-[11px] uppercase mb-2 tracking-widest">{item.t}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SOLUZIONE - IL NOSTRO METODO */}
          <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95]">
                Riduciamo il rischio <br />
                <span className="text-slate-400">di nuove lussazioni.</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Ogni volta che la spalla o la rotula escono, i legamenti subiscono un danno. La soluzione non è stare fermi, ma creare un <strong>"tutore naturale"</strong> attraverso il controllo neuromuscolare d'élite.
              </p>
              <div className="grid gap-4">
                {[
                  "Riposizionamento e gestione post-traumatica",
                  "Rinforzo dei muscoli stabilizzatori profondi",
                  "Riprogrammazione dei riflessi (Propriocezione)",
                  "Protocolli Return to Sport ad alto impatto"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#55B4FF]" size={20} />
                    <span className="font-bold text-[#022166] text-[11px] uppercase tracking-wider">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square">
               <div className="absolute inset-0 bg-[#022166]/5 rounded-[3rem] -rotate-3"></div>
               <div className="relative h-full w-full bg-white rounded-[3rem] border border-slate-100 shadow-2xl p-12 flex flex-col justify-between overflow-hidden">
                  <ShieldCheck className="text-[#022166]" size={48} />
                  <div>
                    <p className="text-7xl font-black text-[#022166] tracking-tighter mb-2">ZERO</p>
                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] leading-relaxed">Compromessi sulla tua sicurezza. <br />Torniamo a muoverci al 100%.</p>
                  </div>
                  <Activity className="absolute bottom-10 right-10 text-[#55B4FF]/20 w-32 h-32" />
               </div>
            </div>
          </section>

          {/* ROADMAP RAPIDA */}
          <section className="mb-32">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { i: Target, t: "Test di Stabilità", d: "Valutiamo clinicamente la tenuta dei legamenti e i deficit di controllo." },
                { i: Zap, t: "Reattività", d: "Alleniamo il muscolo a reagire velocemente agli imprevisti motori." },
                { i: Trophy, t: "Potenza Sicura", d: "Testiamo il braccio o la gamba sotto sforzo massimo prima del rientro." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-50 hover:shadow-xl transition-all group">
                  <step.i className="text-[#55B4FF] mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h4 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{step.t}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA FINALE */}
          <section className="bg-[#022166] p-10 md:p-24 rounded-[4rem] text-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <Waves size={600} className="text-white absolute -bottom-20 -right-20" />
             </div>
             <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Elimina l'incertezza.</h2>
                <p className="text-white/60 text-lg mb-12 font-light italic leading-relaxed">Smetti di aver paura del tuo prossimo movimento. Prenota una valutazione specialistica OMPT.</p>
                <Link 
                  href="/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-16 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-white transition-all inline-block active:scale-95 shadow-lg"
                >
                  Fissa un Appuntamento
                </Link>
             </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50">
            <Link href="/trattamenti" className="flex items-center gap-2 text-xs font-bold hover:text-[#022166] transition-colors uppercase tracking-widest">
              <ArrowLeft size={14} /> Trattamenti
            </Link>
            <p className="text-[10px] font-black uppercase tracking-[0.3em]">
              Fisioterapia Malavasi — Specialist Return to Play
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}