"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  BookOpen, 
  Stethoscope, 
  Search,
  CheckCircle2,
  Heart
} from 'lucide-react';

export default function DolorePersistente() {
  const pilastriClinici = [
    {
      icon: <Stethoscope className="text-[#022166]" size={28} />,
      titolo: "Valutazione Multidimensionale",
      desc: "Un inquadramento clinico che analizza i fattori biologici, psicologici e sociali che contribuiscono alla persistenza del sintomo."
    },
    {
      icon: <BookOpen className="text-[#022166]" size={28} />,
      titolo: "Riconcettualizzazione",
      desc: "Forniamo le basi neuroscientifiche per comprendere il dolore, riducendo l'incertezza e restituendo il controllo al paziente."
    },
    {
      icon: <ShieldCheck className="text-[#022166]" size={28} />,
      titolo: "Esposizione Sicura",
      desc: "Un piano di movimento graduale e protetto, studiato per ricalibrare il sistema di allarme corporeo in totale sicurezza."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#1A202C] font-sans relative">
      
      {/* BACKGROUND - Pulizia assoluta */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#F0F4F8] rounded-full blur-[120px] -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166]">Home</Link>
            <ChevronRight size={10} />
            <Link href="/trattamenti" className="hover:text-[#022166]">Trattamenti</Link>
            <ChevronRight size={10} />
            <span className="text-[#022166] font-bold">Dolore Persistente</span>
          </nav>

          {/* HEADER - Focus sull'Accompagnamento */}
          <header className="mb-20 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#022166] leading-tight mb-8">
              Percorsi di accompagnamento alla <br />
              <span className="text-[#55B4FF]">Gestione del Dolore Persistente</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed italic">
              "Il dolore cronico non è un danno che persiste, ma un sistema che protegge troppo. 
              Il nostro compito è accompagnarti nel processo di desensibilizzazione, un passo alla volta."
            </p>
          </header>

          {/* PILASTRI - Metodologia EBP */}
          <section className="grid md:grid-cols-3 gap-12 mb-28">
            {pilastriClinici.map((p, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-2xl flex items-center justify-center border border-slate-100">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold text-[#022166] tracking-tight">{p.titolo}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </section>

          {/* DETTAGLIO CLINICO - Onestà e Sicurezza */}
          <section className="bg-[#F8FAFC] border border-slate-100 rounded-[2.5rem] p-8 md:p-16 mb-28">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-2 text-[#55B4FF] mb-4">
                  <Search size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Inquadramento</span>
                </div>
                <h2 className="text-3xl font-bold text-[#022166] mb-8">Ambiti di applicazione</h2>
                <div className="space-y-5">
                  {[
                    "Lombalgia e cervicalgia persistente",
                    "Sensibilizzazione centrale e dolore nociplastico",
                    "Supporto clinico nella Sindrome Fibromialgica",
                    "Dolore post-operatorio a lungo termine",
                    "Neuropatie e dolore cronico aspecifico"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-[#55B4FF] shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
                <Heart className="text-[#022166] mb-6 opacity-40" size={32} />
                <h4 className="text-lg font-bold text-[#022166] mb-4">L'Alleanza Terapeutica</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  La ricerca dimostra che la qualità del rapporto tra clinico e paziente è un fattore determinante nel successo della terapia. 
                  Il nostro impegno è garantire un ascolto attento e una presenza costante durante tutto il percorso di riconquista della propria autonomia.
                </p>
                <div className="h-0.5 w-12 bg-[#022166]"></div>
              </div>
            </div>
          </section>

          {/* CTA - Etica e Professionale */}
          <section className="text-center bg-[#022166] rounded-[2.5rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 italic">Iniziamo un dialogo costruttivo.</h2>
              <p className="text-white/70 mb-10 leading-relaxed">
                Ogni storia di dolore è unica. Per questo il primo passo è una valutazione clinica approfondita 
                per definire insieme se il nostro approccio sia il più idoneo alle tue necessità.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link 
                  href="/prenota" 
                  className="bg-white text-[#022166] px-10 py-4 rounded-xl font-bold uppercase text-[11px] tracking-widest hover:bg-[#55B4FF] hover:text-white transition-all"
                >
                  Richiedi Valutazione Clinica
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="border border-white/20 px-10 py-4 rounded-xl font-bold uppercase text-[11px] tracking-widest hover:bg-white/10 transition-all"
                >
                  Contatto Telefonico
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <div className="mt-24 border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 text-xs font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={14} /> Torna all'elenco aree cliniche
            </Link>
            <p className="text-[10px] uppercase tracking-[0.2em]">Fisioterapia Malavasi &bull; Scienza e Cura</p>
          </div>

        </div>
      </div>
    </main>
  );
}