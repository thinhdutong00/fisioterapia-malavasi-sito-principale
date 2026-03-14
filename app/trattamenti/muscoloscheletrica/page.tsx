"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  Target, 
  Clock, 
  Stethoscope,
  ShieldCheck
} from 'lucide-react';

export default function FisioterapiaMuscoloscheletrica() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#55B4FF]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Breadcrumb - SEO Friendly */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Fisioterapia Muscoloscheletrica</span>
          </nav>

          {/* HERO SECTION - Outcome & Dream (Hormozi) */}
          <header className="mb-20">
            <span className="inline-block px-4 py-1.5 bg-[#55B4FF]/10 text-[#55B4FF] text-xs font-black uppercase tracking-widest rounded-full mb-6">
              Specializzazione Clinica
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#022166] leading-[1.1] mb-8">
              Recupero Funzionale e <br />
              <span className="text-[#55B4FF]">Libertà di Movimento</span>
            </h1>
            <p className="max-w-3xl text-xl text-slate-600 leading-relaxed italic">
              "L'approccio clinico focalizzato sulla risoluzione delle patologie dell'apparato locomotore, 
              attraverso terapie manuali ed esercizio terapeutico basato sulle più recenti evidenze scientifiche."
            </p>
          </header>

          {/* VALORE CLINICO - Probability of Success */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <Target className="text-[#55B4FF] mb-6" size={32} />
              <h3 className="text-lg font-bold text-[#022166] mb-3">Diagnosi Funzionale</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Identifichiamo la causa radice del disturbo, non limitandoci a trattare il solo sintomo doloroso.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <ShieldCheck className="text-[#55B4FF] mb-6" size={32} />
              <h3 className="text-lg font-bold text-[#022166] mb-3">Evidenza Scientifica</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Utilizziamo protocolli validati a livello internazionale per garantire la massima efficacia terapeutica.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <Clock className="text-[#55B4FF] mb-6" size={32} />
              <h3 className="text-lg font-bold text-[#022166] mb-3">Tempi Ottimizzati</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Pianifichiamo il percorso riabilitativo per massimizzare i risultati nel minor tempo fisiologicamente possibile.
              </p>
            </div>
          </section>

          {/* COSA TRATTIAMO - SEO Keywords */}
          <section className="bg-white/60 backdrop-blur-md border border-white/40 rounded-[3rem] p-10 md:p-16 mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black text-[#022166] mb-6">Competenze Specifiche</h2>
                <p className="text-slate-600 mb-8">
                  La fisioterapia muscoloscheletrica si occupa di un ampio spettro di disturbi. Il nostro obiettivo è 
                  ripristinare la corretta biomeccanica del corpo attraverso un piano personalizzato.
                </p>
                <ul className="space-y-4">
                  {[
                    "Lombalgie, Sciatalgie e Discoteche",
                    "Cervicalgie e disturbi dell'area nucale",
                    "Riabilitazione post-traumatica (distorsioni, lesioni muscolari)",
                    "Tendinopatie e borsiti",
                    "Artrosi e degenerazioni articolari"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 size={18} className="text-[#55B4FF]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square bg-[#022166]/5 rounded-[2.5rem] flex items-center justify-center border border-[#022166]/10">
                <Stethoscope size={120} className="text-[#022166]/20" />
                {/* Qui potresti inserire un'immagine clinica reale */}
              </div>
            </div>
          </section>

          {/* CTAs - Conversion Funnel */}
          <section className="text-center bg-[#022166] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Inizia il tuo percorso di guarigione</h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg">
                Attraverso una valutazione iniziale approfondita, definiremo gli obiettivi clinici e le modalità di intervento più idonee al tuo caso.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-lg shadow-[#55B4FF]/20"
                >
                  Prenota una Valutazione
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white/20 transition-all"
                >
                  Parlaci del tuo caso
                </a>
              </div>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-20">
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