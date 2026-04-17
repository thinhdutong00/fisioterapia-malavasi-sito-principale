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
      
      {/* SFONDO DINAMICO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* NAV / SEO BREADCRUMB */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={12} />
            <span className="text-[#022166]">Lussazione e Instabilità</span>
          </nav>

          {/* HERO - FOCUS SUL RITORNO ALLA SICUREZZA */}
          <header className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Recupero Post-Traumatico OMPT</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Lussazione: <br />
              <span className="text-[#55B4FF]">Muoviti senza paura.</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Dopo che un'articolazione "esce", il vero nemico è la perdita di fiducia nel movimento. Ripristiniamo la tua <strong>stabilità meccanica</strong> per impedire nuovi episodi e tornare a caricare al 100%.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link 
                href="/prenota" 
                className="bg-[#022166] text-white px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-[#55B4FF] shadow-[0_20px_40px_rgba(2,33,102,0.1)] transition-all active:scale-95"
              >
                Inizia il Recupero
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white/50 backdrop-blur-md text-[#022166] border border-slate-200 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-slate-50 transition-all"
              >
                Contatto Diretto
              </a>
            </div>
          </header>

          {/* DIAGNOSI SINTOMI - ADS OPTIMIZED */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-[#022166] p-10 rounded-[2.5rem] text-white flex flex-col justify-center relative overflow-hidden">
                <ShieldCheck className="text-[#55B4FF] mb-6 relative z-10" size={48} />
                <h2 className="text-3xl font-bold mb-4 tracking-tight leading-tight relative z-10">Proteggi l'articolazione</h2>
                <p className="text-white/60 font-light text-sm relative z-10">Ignorare i segnali di cedimento aumenta il rischio di danni cronici ai legamenti.</p>
                <div className="absolute -right-10 -bottom-10 opacity-5">
                   <Activity size={200} />
                </div>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Senso di Incertezza", d: "Esitazione o timore nel compiere movimenti ampi o rapidi." },
                  { t: "Cedimento Percepito", d: "Sensazione che l'articolazione 'scivoli' o non sia in sede." },
                  { t: "Dolore Post-Trauma", d: "Fastidio che persiste dopo il primo episodio di lussazione." },
                  { t: "Debolezza Funzionale", d: "Mancanza di forza proprio nelle posizioni che senti 'critiche'." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-center hover:border-[#55B4FF]/30 transition-all">
                    <h4 className="font-black text-[#022166] text-[11px] uppercase mb-2 tracking-widest">{item.t}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SOLUZIONE MECCANICA */}
          <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95]">
                Basta recidive. <br />
                <span className="text-slate-400">Blocchiamo il danno.</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Una lussazione non curata correttamente predispone a interventi chirurgici futuri. La nostra strategia si basa sulla <strong>costruzione di una protezione attiva</strong>: muscoli e riflessi capaci di stabilizzare la spalla o la rotula in millisecondi.
              </p>
              <div className="grid gap-4">
                {[
                  "Stabilizzazione manuale e riposizionamento",
                  "Rinforzo dei muscoli stabilizzatori profondi",
                  "Riprogrammazione del controllo neuromuscolare",
                  "Test di ritorno allo sport e al carico massimo"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#55B4FF]" size={20} />
                    <span className="font-bold text-[#022166] text-[11px] uppercase tracking-wider">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square">
               <div className="absolute inset-0 bg-[#55B4FF]/10 rounded-[3rem] rotate-2"></div>
               <div className="relative h-full w-full bg-[#022166] rounded-[3rem] shadow-2xl p-12 flex flex-col justify-between overflow-hidden">
                  <Target className="text-[#55B4FF] relative z-10" size={48} />
                  <div className="relative z-10">
                    <p className="text-7xl font-black text-white tracking-tighter mb-2">100%</p>
                    <p className="text-[#55B4FF] font-bold uppercase text-xs tracking-widest">Focus sulla tenuta <br />articolare totale.</p>
                  </div>
                  <Waves className="absolute -bottom-20 -right-20 text-white/5 w-full h-full" />
               </div>
            </div>
          </section>

          {/* ROADMAP - GOOGLE ADS CONVERSION PATH */}
          <section className="mb-32">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { i: Activity, t: "Valutazione Tenuta", d: "Analisi clinica per verificare l'integrità dei legamenti e la qualità del controllo." },
                { i: Zap, t: "Protezione Attiva", d: "Interveniamo per spegnere il dolore e attivare i muscoli che 'tengono' l'articolazione." },
                { i: Trophy, t: "Rientro Sicuro", d: "Alleniamo il gesto specifico (sportivo o lavorativo) per eliminare ogni esitazione." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                  <step.i className="text-[#55B4FF] mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h4 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{step.t}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA AGGRESSIVA - CONVERSIONE */}
          <section className="bg-[#022166] p-10 md:p-24 rounded-[4rem] text-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-10 group-hover:scale-105 transition-transform duration-1000">
                <Waves size={600} className="text-white absolute -bottom-20 -right-20" />
             </div>
             <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">Torna a spingere <br />senza pensieri.</h2>
                <p className="text-white/60 text-lg mb-12 font-light italic leading-relaxed">Il rischio di una seconda lussazione è altissimo senza un programma specifico. Proteggi il tuo futuro motorio oggi.</p>
                <Link 
                  href="/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-16 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-white transition-all inline-block active:scale-95 shadow-lg"
                >
                  Prenota Valutazione
                </Link>
             </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50">
            <Link href="/trattamenti" className="flex items-center gap-2 text-xs font-bold hover:text-[#022166] transition-colors uppercase tracking-widest">
              <ArrowLeft size={14} /> Torna ai Trattamenti
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