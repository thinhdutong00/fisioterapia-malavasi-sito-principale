"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowLeft, 
  Activity, 
  ShieldCheck, 
  BrainCircuit, 
  Microscope, 
  HeartHandshake,
  Stethoscope
} from 'lucide-react';

export default function DolorePersistente() {
  const pilastriPercorso = [
    {
      icon: <BrainCircuit className="text-[#55B4FF]" size={32} />,
      titolo: "Inquadramento Neuroscientifico",
      desc: "Analizziamo i meccanismi di sensibilizzazione del sistema nervoso per comprendere perché il dolore persiste oltre i normali tempi di guarigione."
    },
    {
      icon: <ShieldCheck className="text-[#55B4FF]" size={32} />,
      titolo: "Esposizione Graduale",
      desc: "Un percorso di movimento protetto e calibrato per ricalibrare il sistema di allarme corporeo senza generare nuove minacce."
    },
    {
      icon: <HeartHandshake className="text-[#55B4FF]" size={32} />,
      titolo: "Alleanza Terapeutica",
      desc: "Un accompagnamento costante che mette al centro l'ascolto e la comprensione della tua storia clinica e personale."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Eleganza Clinica */}
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
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Dolore Persistente</span>
          </nav>

          {/* HERO - La Sicurezza del Percorso */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Chronic Pain Management Protocol</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Il dolore non è <br />il tuo <span className="text-[#55B4FF]">destino.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Affrontare il dolore cronico richiede una strategia diversa dalla cura del sintomo acuto. 
              Ti accompagniamo verso una guarigione sicura attraverso un metodo basato sulle evidenze, 
              che mira a restituirti la libertà di movimento e la serenità quotidiana.
            </p>
          </header>

          {/* PILASTRI: Valore = Scienza e Riduzione del Timore */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            {pilastriPercorso.map((f, i) => (
              <div key={i} className="group bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-8 p-4 bg-[#F0F4F8] w-fit rounded-2xl group-hover:bg-[#022166] group-hover:text-white transition-colors duration-500">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{f.titolo}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  {f.desc}
                </p>
              </div>
            ))}
          </section>

          {/* SEZIONE ARGOMENTATIVA - L'Essenza del Metodo */}
          <section className="relative mb-24">
            <div className="absolute inset-0 bg-[#022166] rounded-[4rem] -rotate-1 scale-[1.02] opacity-5"></div>
            <div className="relative bg-white border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#022166] mb-8 tracking-tight">
                    Riprogrammare <br />il sistema di allarme.
                  </h2>
                  <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                    Nel dolore persistente, il corpo continua a inviare segnali di protezione anche quando il tessuto è guarito. 
                    Il nostro percorso non "forza" la guarigione, ma educa il sistema nervoso a ritrovare il suo equilibrio naturale.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Fibromialgia e Sensibilizzazione Centrale",
                      "Lombalgia e Cervicalgia cronica aspecifica",
                      "Dolore Pelvico e Neuropatie persistenti",
                      "Sindrome da dolore regionale complesso (CRPS)",
                      "Gestione delle riacutizzazioni (Flare-ups)"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-[#022166] font-bold">
                        <Activity size={20} className="text-[#55B4FF]" />
                        <span className="text-sm md:text-base tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative p-8 bg-[#F8FAFC] rounded-[3rem] border border-slate-200">
                   <div className="absolute top-6 right-8 text-[#022166]/10">
                      <Microscope size={100} />
                   </div>
                   <h4 className="text-2xl font-bold text-[#022166] mb-6 relative z-10">L'approccio Biopsicosociale</h4>
                   <p className="text-slate-500 text-sm leading-relaxed mb-8 relative z-10">
                    Il dolore non è mai solo fisico. Consideriamo ogni aspetto della tua vita che può influenzare 
                    la percezione del sintomo, garantendo un trattamento che sia realmente personalizzato e sostenibile.
                    <strong> Non sei solo in questo percorso.</strong>
                   </p>
                   <div className="p-6 bg-white rounded-2xl border border-[#55B4FF]/20 shadow-inner">
                      <div className="text-xs text-[#55B4FF] font-black uppercase mb-2 tracking-widest">Obiettivo Terapeutico</div>
                      <div className="text-[#022166] font-bold italic">"Ripristinare la fiducia nel proprio corpo e la libertà di compiere ogni gesto quotidiano."</div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA - Accompagnamento e Fiducia */}
          <section className="text-center py-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#022166] mb-8 tracking-tighter">
              Costruiamo insieme <br />il tuo prossimo passo.
            </h2>
            <p className="max-w-2xl mx-auto text-slate-500 mb-12 text-lg">
              La gestione del dolore persistente inizia con un ascolto clinico attento. 
              Siamo pronti ad analizzare la tua storia per definire la strategia di recupero più sicura.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/prenota" 
                className="group bg-[#022166] text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#55B4FF] transition-all shadow-2xl shadow-[#022166]/30 flex items-center justify-center gap-3"
              >
                Inizia la Valutazione <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white text-[#022166] border-2 border-[#022166] px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#F8FAFC] transition-all"
              >
                Parlaci della tua storia
              </a>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna ai Trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black text-slate-300">Fisioterapia Malavasi — Protocollo Dolore Persistente</span>
          </div>

        </div>
      </div>
    </main>
  );
}