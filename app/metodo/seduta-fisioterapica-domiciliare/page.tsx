"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight, 
  Home, 
  MapPin, 
  Clock, 
  Car,
  ShieldCheck
} from 'lucide-react';

export default function SedutaDomiciliarePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Coerente con lo stile Hub */}
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
            <Link href="/metodo" className="hover:text-[#022166] transition-colors">Modalità</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Seduta Domiciliare</span>
          </nav>

          {/* HEADER SEZIONE */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#F3E8FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#A855F7]">Servizio a Domicilio</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Fisioterapia <br />a <span className="text-[#A855F7]">casa tua.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Garantiamo gli stessi standard qualitativi e scientifici dello studio, 
              portando la riabilitazione direttamente nel tuo ambiente domestico.
            </p>
          </header>

          {/* SEZIONE 1: VALORE DEL SERVIZIO */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  Accessibilità e Cura
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Perché il domicilio?</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                  <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                    Il servizio domiciliare è progettato per pazienti con difficoltà motorie, post-operatori immediati o per chi necessita di ottimizzare i tempi di cura.
                  </p>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium opacity-90">
                    Svolgere la fisioterapia nel proprio ambiente permette al terapista di valutare direttamente le barriere architettoniche e le dinamiche quotidiane, adattando gli esercizi alle reali necessità della vita in casa. La qualità del trattamento rimane invariata: portiamo con noi tutta l'attrezzatura necessaria per una seduta professionale completa.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: DETTAGLI LOGISTICI */}
          <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card Area */}
              <div className="bg-[#F3E8FF] p-10 rounded-[2rem] border border-white/50 flex flex-col justify-between">
                <div>
                  <MapPin className="text-[#A855F7] mb-6" size={32} />
                  <h3 className="text-xl font-bold text-[#022166] mb-2">Area di Intervento</h3>
                  <p className="text-[#022166]/60 text-sm font-medium">Copriamo l'intera area urbana e le zone limitrofe con interventi programmati.</p>
                </div>
              </div>

              {/* Card Attrezzatura */}
              <div className="bg-[#E0F2FE] p-10 rounded-[2rem] border border-white/50 flex flex-col justify-between">
                <div>
                  <ShieldCheck className="text-[#0EA5E9] mb-6" size={32} />
                  <h3 className="text-xl font-bold text-[#022166] mb-2">Qualità Garantita</h3>
                  <p className="text-[#022166]/60 text-sm font-medium">Utilizziamo presidi portatili professionali per test ed esercizi terapeutici.</p>
                </div>
              </div>

              {/* Card Tempo */}
              <div className="bg-[#DCFCE7] p-10 rounded-[2rem] border border-white/50 flex flex-col justify-between">
                <div>
                  <Clock className="text-[#22C55E] mb-6" size={32} />
                  <h3 className="text-xl font-bold text-[#022166] mb-2">Durata Seduta</h3>
                  <p className="text-[#022166]/60 text-sm font-medium">Circa 60 minuti, comprensivi di valutazione continua e trattamento attivo.</p>
                </div>
              </div>

            </div>
          </section>

          {/* SEZIONE 3: CALL TO ACTION */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[2rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5">
              <Home size={400} />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">Prenota la tua seduta a casa.</h3>
              <p className="text-white/60 text-lg mb-10 font-light">
                Contattaci per verificare la disponibilità nella tua zona e programmare il primo incontro valutativo domiciliare.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-10 py-5 rounded-2xl font-black text-center uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all"
                >
                  Verifica Disponibilità
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-center uppercase text-[10px] tracking-[0.3em] hover:bg-white/20 transition-all"
                >
                  Chiama Ora
                </a>
              </div>
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/metodo" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna a Modalità
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Protocollo Domiciliare</span>
          </div>

        </div>
      </div>
    </main>
  );
}