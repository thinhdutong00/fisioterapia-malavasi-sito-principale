"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowLeft, 
  Activity, 
  BookOpen, 
  Stethoscope, 
  Search,
  CheckCircle2,
  FileText
} from 'lucide-react';

export default function DolorePersistente() {
  const pilastriClinici = [
    {
      icon: <Stethoscope className="text-[#022166]" size={28} />,
      titolo: "Inquadramento Clinico",
      desc: "Valutazione approfondita per distinguere tra dolore nocicettivo, neuropatico e nociplastico (sensibilizzazione centrale)."
    },
    {
      icon: <BookOpen className="text-[#022166]" size={28} />,
      titolo: "Pain Education",
      desc: "Spiegazione dei meccanismi neurofisiologici del dolore per ridurre la minaccia percepita e favorire l'alleanza terapeutica."
    },
    {
      icon: <Activity className="text-[#022166]" size={28} />,
      titolo: "Grandi Graduati",
      desc: "Esposizione progressiva al carico e al movimento per ripristinare la tolleranza dei tessuti e del sistema nervoso."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#1A202C] font-sans relative">
      
      {/* BACKGROUND - Estrema pulizia */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#F0F4F8] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Breadcrumb - Professionale */}
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166]">Home</Link>
            <ChevronRight size={10} />
            <Link href="/trattamenti" className="hover:text-[#022166]">Trattamenti</Link>
            <ChevronRight size={10} />
            <span className="text-[#022166] font-bold">Gestione del Dolore Persistente</span>
          </nav>

          {/* HEADER - Formale e Accurato */}
          <header className="mb-20 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#022166] leading-tight mb-8">
              Percorsi terapeutici per la <br />
              <span className="text-[#55B4FF]">Gestione del Dolore Cronico</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Il dolore persistente richiede un approccio che superi il modello puramente biomeccanico. 
              Attraverso le moderne neuroscienze del dolore, offriamo strategie cliniche mirate alla 
              riduzione della disabilità e al miglioramento della qualità della vita del paziente.
            </p>
          </header>

          {/* APPROCCIO EBP - Hormozi adattato (Probabilità di successo tramite la scienza) */}
          <section className="grid md:grid-cols-3 gap-12 mb-28">
            {pilastriClinici.map((p, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="w-12 h-12 bg-[#F0F4F8] rounded-xl flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-[#022166]">{p.titolo}</h3>
                <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-slate-100 pl-4">
                  {p.desc}
                </p>
              </div>
            ))}
          </section>

          {/* DETTAGLIO CLINICO - SEO Specialistica */}
          <section className="bg-[#F8FAFC] border border-slate-100 rounded-[2rem] p-8 md:p-16 mb-28">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-2 text-[#55B4FF] mb-4">
                  <Search size={20} />
                  <span className="text-xs font-black uppercase tracking-widest">Indicazioni Cliniche</span>
                </div>
                <h2 className="text-3xl font-bold text-[#022166] mb-8">Ambiti di Intervento</h2>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Lombalgia e Cervicalgia cronica aspecifica",
                    "Sindrome Fibromialgica (Gestione Multimodale)",
                    "Dolore nociplastico e sensibilizzazione centrale",
                    "Nevralgia post-erpetica e dolori neuropatici",
                    "Cefalee tensive a lungo decorso"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-[#55B4FF]" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-sm">
                <FileText className="text-[#022166] mb-6 opacity-40" size={32} />
                <h4 className="text-lg font-bold text-[#022166] mb-4">Unità di Misura del Risultato</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  Il successo della terapia non viene misurato solo sulla scala VAS del dolore, 
                  ma sulla riconquista della funzionalità, sulla riduzione dell'uso di farmaci 
                  e sulla ripresa delle attività lavorative e sociali.
                </p>
                <div className="h-0.5 w-12 bg-[#55B4FF]"></div>
              </div>
            </div>
          </section>

          {/* CALL TO ACTION - Sobria e Professionale */}
          <section className="text-center bg-[#022166] rounded-[2rem] p-12 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Consulenza per la Gestione del Dolore</h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-10">
                È possibile prenotare una valutazione clinica per analizzare la cronicità del disturbo 
                e definire un piano di trattamento personalizzato basato sulle più recenti linee guida.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-10 py-4 rounded-xl font-bold uppercase text-[11px] tracking-widest hover:bg-white transition-all"
                >
                  Prenota Valutazione
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="border border-white/20 px-10 py-4 rounded-xl font-bold uppercase text-[11px] tracking-widest hover:bg-white/10 transition-all"
                >
                  Contattaci per informazioni
                </a>
              </div>
            </div>
          </section>

          {/* BACK LINK */}
          <div className="mt-20 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 text-sm font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={16} /> Torna ai trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest">Fisioterapia Malavasi — Protocollo Scientifico</span>
          </div>

        </div>
      </div>
    </main>
  );
}