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
  Timer
} from 'lucide-react';

export default function FisioterapiaSportiva() {
  const pilastriValore = [
    {
      icon: <Timer className="text-[#55B4FF]" size={32} />,
      titolo: "Return to Play Accelerato",
      desc: "Protocolli ottimizzati per ridurre i tempi di inattività senza bruciare le tappe biologiche della guarigione."
    },
    {
      icon: <Zap className="text-[#55B4FF]" size={32} />,
      titolo: "Prevenzione Infortuni",
      desc: "Analisi dei pattern di movimento per correggere i compensi prima che si trasformino in una lesione."
    },
    {
      icon: <Dna className="text-[#55B4FF]" size={32} />,
      titolo: "Performance Optimization",
      desc: "Non solo cura: lavoriamo sulla forza, sulla mobilità e sulla potenza per farti tornare più forte di prima."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#022166]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#55B4FF]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Fisioterapia Sportiva</span>
          </nav>

          {/* HERO - Il Sogno dell'Atleta */}
          <header className="mb-24 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
               <Trophy size={20} className="text-[#55B4FF]" />
               <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Elite Performance Recovery</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#022166] leading-[1] mb-8">
              Torna in campo. <br />
              <span className="text-[#55B4FF]">Vinci la sfida.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              L'infortunio non è solo un limite fisico, è un ostacolo mentale. La nostra missione è 
              trasformare il tuo periodo di stop in un'opportunità di evoluzione atletica.
            </p>
          </header>

          {/* HORMORZI SECTION: Probabilità e Tempo */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            {pilastriValore.map((p, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="mb-6">{p.icon}</div>
                <h3 className="text-xl font-bold text-[#022166] mb-4">{p.titolo}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {p.desc}
                </p>
              </div>
            ))}
          </section>

          {/* ARGOMENTAZIONE CLINICA - Elevato Valore SEO */}
          <section className="grid lg:grid-cols-2 gap-16 items-center mb-24 bg-white/40 p-10 md:p-16 rounded-[4rem] border border-white/60">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#022166] mb-8">
                Un approccio sartoriale per lo sportivo moderno
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#022166] text-white rounded-full flex items-center justify-center font-bold italic">01</div>
                  <div>
                    <h4 className="font-bold text-[#022166] text-lg mb-2">Valutazione Biomeccanica Specifica</h4>
                    <p className="text-slate-500 text-sm">Non analizziamo solo il dolore, ma il gesto tecnico specifico della tua disciplina (corsa, salto, lancio, pedalata).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#022166] text-white rounded-full flex items-center justify-center font-bold italic">02</div>
                  <div>
                    <h4 className="font-bold text-[#022166] text-lg mb-2">Monitoraggio del Carico</h4>
                    <p className="text-slate-500 text-sm">Gestiamo lo stress tissutale per evitare ricadute, garantendo una progressione sicura e scientificamente monitorata.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#022166] text-white rounded-full flex items-center justify-center font-bold italic">03</div>
                  <div>
                    <h4 className="font-bold text-[#022166] text-lg mb-2">Terapia Manuale & Esercizio</h4>
                    <p className="text-slate-500 text-sm">Combiniamo il tocco clinico specialistico con il movimento attivo, il vero motore della guarigione atletica.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#022166] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
               <TrendingUp size={200} className="absolute -bottom-10 -right-10 text-white/5" />
               <h3 className="text-2xl font-bold mb-6 relative z-10">Cosa trattiamo:</h3>
               <ul className="grid grid-cols-1 gap-4 relative z-10">
                 {[
                   "Lesioni muscolari (strappi, stiramenti)",
                   "Distorsioni legamentose (ACL, caviglia)",
                   "Tendinopatie dello sportivo",
                   "Pubalgie e dolore all'anca",
                   "Fratture da stress",
                   "Riabilitazione Post-Chirurgica Atleti"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                     <ShieldCheck size={18} className="text-[#55B4FF]" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </section>

          {/* CTA - Chiusura Emozionale e Pratica */}
          <section className="text-center py-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#022166] mb-8">
              Non aspettare che il dolore diventi cronico.
            </h2>
            <p className="max-w-2xl mx-auto text-slate-500 mb-12 text-lg">
              Ogni giorno di stop è un giorno perso per il tuo obiettivo. Prenota oggi la tua valutazione 
              sportiva e riprendi il controllo della tua performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/prenota" 
                className="bg-[#022166] text-white px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-[#55B4FF] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#022166]/20"
              >
                Inizia il Recupero
              </Link>
              <a 
                href="tel:+393338225464" 
                className="flex items-center justify-center gap-3 border-2 border-[#022166] text-[#022166] px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-slate-100 transition-all"
              >
                Parla con un Fisioterapista
              </a>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-20 border-t border-slate-200 pt-10">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Tutti i trattamenti
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}