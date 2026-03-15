"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight, 
  ArrowUpRight 
} from 'lucide-react';

export default function ModalitaSedutaPage() {
  const modalita = [
    {
      titolo: "Seduta Fisioterapica",
      // Puntiamo alla sottocartella /metodo/seduta-fisioterapica
      slug: "/metodo/seduta-fisioterapica", 
      desc: "L'intervento riabilitativo d'eccellenza presso il nostro studio. Setting controllato e tecnologie avanzate per il tuo recupero.",
      color: "bg-[#E0F2FE]", 
      label: "In Studio"
    },
    {
      titolo: "Seduta Fisioterapica Domiciliare",
      // Puntiamo alla sottocartella /metodo/seduta-fisioterapica-domiciliare
      slug: "/metodo/seduta-fisioterapica-domiciliare", 
      desc: "Portiamo la massima qualità clinica direttamente a casa tua, abbattendo le barriere logistiche e i disagi dello spostamento.",
      color: "bg-[#F3E8FF]", 
      label: "A Domicilio"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
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
            <span className="text-[#022166] font-semibold">Modalità della seduta</span>
          </nav>

          {/* HEADER - Stile Hub con font Bold e tracking tight */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Clinical Access</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Scegli la tua <br />modalità di <span className="text-[#55B4FF]">cura.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Flessibilità logistica senza compromettere il rigore scientifico. Scegli l'ambiente 
              più adatto alle tue attuali necessità cliniche.
            </p>
          </header>

          {/* GRID MODALITÀ - Le due Card Sottomenu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modalita.map((m, index) => (
              <Link 
                key={index} 
                href={m.slug}
                className={`group relative ${m.color} p-12 rounded-[2rem] border border-white/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[400px]`}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#022166] bg-white/40 px-4 py-2 rounded-full">
                      {m.label}
                    </span>
                    <ArrowUpRight size={24} className="text-[#022166]/30 group-hover:text-[#022166] transition-colors" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#022166] mb-6 leading-tight tracking-tight">
                    {m.titolo}
                  </h3>
                  <p className="text-[#022166]/70 text-lg leading-relaxed mb-8 font-medium">
                    {m.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-[#022166] font-black text-[10px] uppercase tracking-[0.3em] border-t border-[#022166]/10 pt-8">
                  Scopri il protocollo <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Footer Back Link */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna alla Home
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Hub Clinico</span>
          </div>

        </div>
      </div>
    </main>
  );
}