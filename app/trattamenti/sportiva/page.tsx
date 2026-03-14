"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowLeft, 
  Trophy, 
  Zap, 
  Dna, 
  TrendingUp, 
  ShieldCheck, 
  Timer,
  Activity
} from 'lucide-react';

export default function FisioterapiaSportiva() {
  const pilastriValore = [
    {
      icon: <Timer className="text-[#55B4FF]" size={32} />,
      titolo: "Ritorno in Campo Rapido",
      desc: "Protocolli ottimizzati per ridurre i tempi di inattività nel rispetto dei tempi biologici di guarigione dei tessuti."
    },
    {
      icon: <Zap className="text-[#55B4FF]" size={32} />,
      titolo: "Prevenzione Infortuni",
      desc: "Analisi avanzata dei pattern di movimento per correggere i compensi prima che si trasformino in una lesione."
    },
    {
      icon: <Dna className="text-[#55B4FF]" size={32} />,
      titolo: "Ottimizzazione Performance",
      desc: "Lavoriamo su forza, mobilità e potenza per garantirti un rientro all'attività sportiva più resiliente di prima."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Dinamismo e Pulizia */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Navigazione / Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Fisioterapia Sportiva</span>
          </nav>

          {/* HERO - Impatto e Focus Atletico */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Protocollo Recupero Atleti</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Vinci la sfida <br />del <span className="text-[#55B4FF]">ritorno in campo.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              L'infortunio è un ostacolo che richiede una strategia precisa. La nostra missione è 
              trasformare il tuo periodo di stop forzato in un percorso di evoluzione atletica e fisica.
            </p>
          </header>

          {/* PILASTRI - Valore per l'Atleta */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            {pilastriValore.map((p, i) => (
              <div key={i} className="group bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-8 p-4 bg-[#F8FAFC] w-fit rounded-2xl group-hover:bg-[#022166] group-hover:text-white transition-colors duration-500">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{p.titolo}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  {p.desc}
                </p>
              </div>
            ))}
          </section>

          {/* ARGOMENTAZIONE CLINICA - Metodologia */}
          <section className="relative mb-24">
            <div className="absolute inset-0 bg-[#022166] rounded-[4rem] -rotate-1 scale-[1.02] opacity-5"></div>
            <div className="relative bg-white border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#022166] mb-8 tracking-tight">
                    Come lo <br />facciamo
                  </h2>
                  <div className="space-y-8">
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F8FAFC] text-[#022166] rounded-2xl flex items-center justify-center font-black border border-slate-100">01</div>
                      <div>
                        <h4 className="font-bold text-[#022166] text-lg mb-1">Valutazione Biomeccanica Specifica</h4>
                        <p className="text-slate-500 text-sm">Analisi del gesto tecnico specifico della tua disciplina per individuare squilibri funzionali.</p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F8FAFC] text-[#022166] rounded-2xl flex items-center justify-center font-black border border-slate-100">02</div>
                      <div>
                        <h4 className="font-bold text-[#022166] text-lg mb-1">Monitoraggio Rigoroso del Carico</h4>
                        <p className="text-slate-500 text-sm">Gestione scientifica dello stress tissutale per garantire una progressione sicura senza ricadute.</p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#F8FAFC] text-[#022166] rounded-2xl flex items-center justify-center font-black border border-slate-100">03</div>
                      <div>
                        <h4 className="font-bold text-[#022166] text-lg mb-1">Integrazione Manuale e Attiva</h4>
                        <p className="text-slate-500 text-sm">Sinergia tra terapia manuale specialistica ed esercizio terapeutico ad alto carico.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#022166] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                   <TrendingUp size={240} className="absolute -bottom-16 -right-16 text-white/5" />
                   <h3 className="text-2xl font-black mb-8 relative z-10">Cosa trattiamo:</h3>
                   <ul className="space-y-5 relative z-10">
                     {[
                       "Lesioni muscolari (strappi, stiramenti)",
                       "Distorsioni legamentose (ACL, caviglia)",
                       "Tendinopatie dello sportivo",
                       "Pubalgie e sindromi da sovraccarico",
                       "Fratture da stress e traumi ossei",
                       "Riabilitazione post-chirurgica per atleti"
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-4 text-white/90 font-bold">
                         <ShieldCheck size={20} className="text-[#55B4FF]" />
                         <span className="text-sm md:text-base tracking-tight">{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA - Chiusura Professionale */}
          <section className="text-center py-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#022166] mb-8 tracking-tighter">
              Non fermare <br />la tua evoluzione.
            </h2>
            <p className="max-w-2xl mx-auto text-slate-500 mb-12 text-lg">
              Ogni giorno di stop è un giorno perso per il tuo obiettivo. Prenota oggi la tua valutazione 
              sportiva e riprendi il controllo della tua performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/prenota" 
                className="group bg-[#022166] text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#55B4FF] transition-all shadow-2xl shadow-[#022166]/30 flex items-center justify-center gap-3"
              >
                Inizia il Recupero <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white text-[#022166] border-2 border-[#022166] px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#F8FAFC] transition-all"
              >
                Parla con uno specialista
              </a>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna ai Trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Performance & Recupero</span>
          </div>

        </div>
      </div>
    </main>
  );
}