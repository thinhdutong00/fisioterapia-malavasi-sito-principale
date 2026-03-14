"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowLeft, 
  Waves, 
  Lightbulb, 
  BrainCircuit, 
  ShieldCheck, 
  LifeBuoy,
  Scale
} from 'lucide-react';

export default function DolorePersistente() {
  const pilastriMetodo = [
    {
      icon: <BrainCircuit className="text-[#55B4FF]" size={32} />,
      titolo: "Ricalibrazione del Sistema",
      desc: "Il dolore persistente non è un danno tissutale costante, ma un sistema di allarme eccessivamente sensibile. Lavoriamo per desensibilizzarlo."
    },
    {
      icon: <Lightbulb className="text-[#55B4FF]" size={32} />,
      titolo: "Educazione Terapeutica",
      desc: "Capire come funziona il dolore è la prima medicina. Ti forniamo gli strumenti scientifici per riprendere il controllo del tuo corpo."
    },
    {
      icon: <Scale className="text-[#55B4FF]" size={32} />,
      titolo: "Esposizione Graduale",
      desc: "Riconquisti i movimenti che avevi paura di fare attraverso carichi progressivi, in totale sicurezza e assenza di minaccia."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F4F7F9] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Atmosfera di calma profonda */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#022166]/5 to-transparent"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#55B4FF]/10 rounded-full blur-[150px] animate-pulse"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Dolore Persistente</span>
          </nav>

          {/* HERO - Il Sogno della Libertà Mentale */}
          <header className="mb-24 relative">
            <div className="flex items-center gap-3 mb-6">
              <Waves size={24} className="text-[#55B4FF] animate-bounce" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-[#022166]/60">Neuroscience Based Clinic</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#022166] leading-[0.9] mb-10 tracking-tighter">
              Oltre il dolore, <br />
              <span className="text-[#55B4FF]">ritrova te stesso.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-3xl text-slate-600 leading-relaxed font-light">
              Il dolore che dura da mesi non è un destino inevitabile. È un segnale che il tuo sistema nervoso ha imparato a proteggerti troppo. Insieme, possiamo insegnargli a smettere.
            </p>
          </header>

          {/* HORMORZI: Massima Probabilità di Successo (Scienza) */}
          <section className="grid md:grid-cols-3 gap-8 mb-32">
            {pilastriMetodo.map((p, i) => (
              <div key={i} className="bg-white/60 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-3 duration-500">
                <div className="mb-8">{p.icon}</div>
                <h3 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{p.titolo}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  {p.desc}
                </p>
              </div>
            ))}
          </section>

          {/* LA SVOLTA CLINICA - Conversione ad alto valore */}
          <section className="relative mb-32 overflow-hidden rounded-[4rem] bg-[#022166] p-10 md:p-24 text-white">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#55B4FF]/10 blur-[120px] rounded-full translate-x-1/2"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                  Perché i trattamenti comuni hanno fallito?
                </h2>
                <p className="text-white/70 text-lg mb-10 leading-relaxed italic">
                  "Se ti sei sentito dire che è tutto nella tua testa, o che devi rassegnarti a convivere con il dolore, ti hanno dato informazioni obsolete."
                </p>
                <div className="space-y-6">
                  {[
                    "Sindrome Fibromialgica",
                    "Lombalgia Cronica aspecifica",
                    "Dolore pelvico cronico",
                    "Sindrome da sensibilizzazione centrale",
                    "Dolore post-chirurgico persistente"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-[#55B4FF]/20 flex items-center justify-center group-hover:bg-[#55B4FF] transition-colors">
                        <ShieldCheck size={16} className="text-[#55B4FF] group-hover:text-[#022166]" />
                      </div>
                      <span className="text-lg font-medium tracking-tight">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-12 rounded-[3rem]">
                <LifeBuoy className="text-[#55B4FF] mb-8" size={48} />
                <h4 className="text-2xl font-bold mb-6 italic tracking-tight">Il nostro impegno</h4>
                <p className="text-white/80 leading-relaxed mb-6">
                  Non cerchiamo il "tasto off" che non esiste. Costruiamo una strategia di gestione attiva che riduce l'impatto del dolore sulla tua vita sociale, lavorativa ed emotiva.
                </p>
                <div className="h-1 w-20 bg-[#55B4FF] rounded-full"></div>
              </div>
            </div>
          </section>

          {/* CTA - Funnel Emozionale basato sul Valore di Hormozi */}
          <section className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-[#022166] mb-8 tracking-tighter">
              Smetti di sopravvivere. <br />Torna a vivere.
            </h2>
            <p className="text-slate-500 mb-16 text-xl leading-relaxed">
              Il dolore persistente richiede un approccio diverso da quello acuto. Prenota una consulenza dedicata e scopri come le neuroscienze possono cambiare la tua storia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <Link 
                href="/prenota" 
                className="group relative bg-[#022166] text-white px-14 py-7 rounded-[2rem] font-black uppercase text-xs tracking-[0.3em] hover:bg-[#55B4FF] transition-all shadow-[0_20px_50px_rgba(2,33,102,0.3)] overflow-hidden"
              >
                <span className="relative z-10">Inizia il Percorso</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white text-[#022166] border-2 border-[#022166]/10 px-14 py-7 rounded-[2rem] font-black uppercase text-xs tracking-[0.3em] hover:border-[#022166] transition-all shadow-sm"
              >
                Parlaci della tua storia
              </a>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-32 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Tutti i trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-30">Science . Empathy . Recovery</span>
          </div>

        </div>
      </div>
    </main>
  );
}