"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export default function NewPage() {
  return (
    <main className="min-h-screen bg-[#F0F4F8] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS (Uguali alla Home per coerenza) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[30%] h-[30%] bg-[#022166]/5 rounded-full blur-[100px]"></div>
      </div>

      {/* CONTENUTO PAGINA */}
      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Breadcrumb per tornare indietro */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Modalità della seduta</span>
          </nav>

          {/* Header Pagina */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-[#022166] leading-tight">
              TITOLO DELLA PAGINA
            </h1>
            <div className="h-1.5 w-20 bg-[#55B4FF] mt-6 rounded-full"></div>
          </header>

          {/* Area Contenuto (Qui andranno i tuoi testi) */}
          <section className="bg-white/60 backdrop-blur-md border border-white/40 p-8 md:p-12 rounded-3xl shadow-xl">
            <p className="text-lg leading-relaxed text-slate-600">
              Inserisci qui la descrizione dei trattamenti o le informazioni dello studio. 
              Questo contenitore è già ottimizzato per la leggibilità.
            </p>
            
            {/* Esempio di griglia per contenuti extra */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#022166] mb-2 text-xl">Punto Chiave 1</h3>
                <p className="text-slate-500">Descrizione dettagliata del servizio o dell'informazione.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-[#022166] mb-2 text-xl">Punto Chiave 2</h3>
                <p className="text-slate-500">Descrizione dettagliata del servizio o dell'informazione.</p>
              </div>
            </div>
          </section>

          {/* Bottone di ritorno rapido */}
          <div className="mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[#022166] font-bold hover:gap-4 transition-all"
            >
              <ArrowLeft size={20} /> Torna alla Home
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}