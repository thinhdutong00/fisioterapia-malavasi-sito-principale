"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ChevronRight, Zap, Target, 
  CheckCircle2, Calendar, Scaling, Trophy,
  AlertCircle, Activity, Waves
} from 'lucide-react';

export default function LesioniMeniscaliAdvancedPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden">
      
      {/* SFONDO DINAMICO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#022166]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#55B4FF]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* BREADCRUMB RAPIDO */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#022166]">Specialista Menisco</span>
          </nav>

          {/* HERO - FOCUS SULLA RISOLUZIONE */}
          <header className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Soluzioni rapide per il ginocchio</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Ginocchio bloccato? <br />
              <span className="text-[#55B4FF]">Risolviamo la causa.</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Il dolore al menisco non sparisce col riposo. Serve una <strong>strategia meccanica</strong> immediata per spegnere l'infiammazione e tornare a caricare senza la paura dell'intervento.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link 
                href="/prenota" 
                className="bg-[#022166] text-white px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-[#55B4FF] shadow-[0_20px_40px_rgba(2,33,102,0.15)] transition-all active:scale-95"
              >
                Inizia il Recupero
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white/50 backdrop-blur-md text-[#022166] border border-slate-200 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white transition-all active:scale-95"
              >
                Sintomi acuti? Chiamaci
              </a>
            </div>
          </header>

          {/* CHECKLIST SINTOMI - EMPATIA IMMEDIATA */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-[#022166] p-10 rounded-[2.5rem] text-white flex flex-col justify-center">
                <AlertCircle className="text-[#55B4FF] mb-6" size={48} />
                <h2 className="text-3xl font-bold mb-4 tracking-tight leading-tight">Cosa senti?</h2>
                <p className="text-white/60 font-light text-sm leading-relaxed">Se provi queste sensazioni, la meccanica del tuo ginocchio è in sofferenza.</p>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Dolore alla rima", d: "Fitta localizzata sul lato del ginocchio durante le rotazioni." },
                  { t: "Blocco Articolare", d: "Difficoltà a estendere o flettere completamente la gamba." },
                  { t: "Cedimento", d: "Sensazione che il ginocchio 'scappi' scendendo le scale." },
                  { t: "Gonfiore Post-Sforzo", d: "L'articolazione si infiamma dopo aver camminato o corso." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-center hover:border-[#55B4FF]/30 transition-colors">
                    <h4 className="font-black text-[#022166] text-[11px] uppercase mb-2 tracking-widest">{item.t}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FOCUS AZIONE - PERCHÉ NOI */}
          <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95]">
                Basta fermarsi. <br />
                <span className="text-slate-400">Torniamo a caricare.</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Il menisco soffre quando il peso non è distribuito bene. Il nostro metodo OMPT non è "massaggi e attesa", ma <strong>riprogrammazione del carico</strong> per togliere pressione alla lesione.
              </p>
              <div className="grid gap-4">
                {[
                  "Sblocco immediato della mobilità con terapia manuale",
                  "Gestione rapida dell'edema intra-articolare",
                  "Esercizi di rinforzo selettivo per proteggere il menisco",
                  "Test di forza oggettivi per il ritorno in sicurezza"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#55B4FF]"></div>
                    <span className="font-bold text-[#022166] text-xs uppercase tracking-wider">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square">
               <div className="absolute inset-0 bg-[#55B4FF]/10 rounded-[3rem] rotate-2"></div>
               <div className="relative h-full w-full bg-[#022166] rounded-[3rem] shadow-2xl p-12 flex flex-col justify-between overflow-hidden">
                  <Activity className="text-[#55B4FF] relative z-10" size={48} />
                  <div className="relative z-10">
                    <p className="text-7xl font-black text-white tracking-tighter mb-2">2-4</p>
                    <p className="text-[#55B4FF] font-bold uppercase text-xs tracking-widest">Settimane per tornare <br />alla vita quotidiana.</p>
                  </div>
                  <Waves className="absolute -bottom-20 -right-20 text-white/5 w-full h-full" />
               </div>
            </div>
          </section>

          {/* ROADMAP D'AZIONE */}
          <section className="mb-32">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { i: Scaling, t: "Test Meccanico", d: "In 30 minuti capiamo se il dolore è causato dalla lesione o da un sovraccarico." },
                { i: Zap, t: "Sollievo Rapido", d: "Interveniamo subito sui tessuti per ridurre la fitta e il gonfiore." },
                { i: Trophy, t: "Performance", d: "Alleniamo il ginocchio a reggere carichi superiori per prevenire ricadute." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                  <step.i className="text-[#55B4FF] mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h4 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{step.t}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA AGGRESSIVA */}
          <section className="bg-[#022166] p-10 md:p-24 rounded-[4rem] text-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <Waves size={600} className="text-white absolute -bottom-20 -right-20" />
             </div>
             <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Non aspettare.</h2>
                <p className="text-white/60 text-lg mb-12 font-light italic leading-relaxed">Ogni giorno passato a zoppicare è un giorno di muscolo perso e infiammazione che si cronicizza. Recupera la tua mobilità ora.</p>
                <Link 
                  href="/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-16 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-white hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all inline-block active:scale-95"
                >
                  Prenota Valutazione
                </Link>
             </div>
          </section>

          {/* FOOTER NAV */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50">
            <Link href="/trattamenti" className="flex items-center gap-2 text-xs font-bold hover:text-[#022166] transition-colors uppercase tracking-widest">
              <ArrowLeft size={14} /> Altri Percorsi
            </Link>
            <p className="text-[10px] font-black uppercase tracking-[0.3em]">
              Dr. Malavasi OMPT — Knee Specialist
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}