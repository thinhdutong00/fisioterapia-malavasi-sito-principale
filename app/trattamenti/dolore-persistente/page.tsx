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
      desc: "Analizziamo i meccanismi di sensibilizzazione del sistema nervoso centrale per identificare le cause della persistenza del sintomo oltre i tempi fisiologici di guarigione."
    },
    {
      icon: <ShieldCheck className="text-[#55B4FF]" size={32} />,
      titolo: "Esposizione Graduale al Carico",
      desc: "Implementiamo protocolli di esercizio terapeutico personalizzato per ricalibrare la soglia di tolleranza e ridurre la risposta protettiva del sistema nervoso."
    },
    {
      icon: <HeartHandshake className="text-[#55B4FF]" size={32} />,
      titolo: "Alleanza Terapeutica",
      desc: "Garantiamo un supporto clinico costante e un'educazione terapeutica mirata per fornire al paziente gli strumenti di autogestione del dolore."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Rigore e Pulizia Visiva */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb - Navigazione Tecnica */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Gestione Clinica Dolore Persistente</span>
          </nav>

          {/* HERO - Focus sulla Metodologia Clinica */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Evidence-Based Management Protocol</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Dalla diagnosi <br />al <span className="text-[#55B4FF]">recupero funzionale.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Il trattamento del dolore cronico richiede un approccio multimodale che superi il modello puramente biomeccanico. 
              Attraverso l'integrazione di neuroscienze e riabilitazione attiva, accompagniamo il paziente in un percorso di 
              desensibilizzazione e ripristino dell'autonomia motoria.
            </p>
          </header>

          {/* PILASTRI - Conversione basata sulla competenza */}
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

          {/* SEZIONE ARGOMENTATIVA - Presa in Carico Clinica */}
          <section className="relative mb-24">
            <div className="absolute inset-0 bg-[#022166] rounded-[4rem] -rotate-1 scale-[1.02] opacity-5"></div>
            <div className="relative bg-white border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#022166] mb-8 tracking-tight">
                    Riprogrammazione <br />delle risposte neurali.
                  </h2>
                  <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                    Nelle sindromi dolorose persistenti, il sistema nervoso mantiene una risposta protettiva anche in assenza di danno tissutale attivo. 
                    Il nostro protocollo interviene sulla modulazione del dolore, promuovendo adattamenti neuroplastici attraverso il movimento controllato.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Sindrome Fibromialgica (Gestione clinica)",
                      "Lombalgia cronica aspecifica e Cervicalgie",
                      "Sensibilizzazione Centrale e Dolore Nociplastico",
                      "Sindrome da Dolore Regionale Complesso (CRPS)",
                      "Nevralgie e Dolore Neuropatico persistente"
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
                   <h4 className="text-2xl font-bold text-[#022166] mb-6 relative z-10">Il Modello Biopsicosociale</h4>
                   <p className="text-slate-500 text-sm leading-relaxed mb-8 relative z-10">
                    Seguiamo le linee guida internazionali che pongono il paziente al centro del processo di cura. 
                    Lavoriamo sull'identificazione dei fattori contribuenti per garantire una prognosi favorevole e una riduzione della disabilità correlata al dolore.
                   </p>
                   <div className="p-6 bg-white rounded-2xl border border-[#55B4FF]/20 shadow-inner">
                      <div className="text-xs text-[#55B4FF] font-black uppercase mb-2 tracking-widest">Standard Operativo</div>
                      <div className="text-[#022166] font-bold italic">"Ripristino della funzionalità motoria attraverso la desensibilizzazione sistematica del sistema somatosensoriale."</div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA - Conversione Professionale */}
          <section className="text-center py-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#022166] mb-8 tracking-tighter">
              Pianifica una <br />valutazione clinica.
            </h2>
            <p className="max-w-2xl mx-auto text-slate-500 mb-12 text-lg">
              La complessità del dolore persistente richiede un'analisi dettagliata della storia del paziente. 
              Siamo a disposizione per definire la strategia terapeutica più indicata per il tuo caso.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/prenota" 
                className="group bg-[#022166] text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#55B4FF] transition-all shadow-2xl shadow-[#022166]/30 flex items-center justify-center gap-3"
              >
                Prenota Valutazione <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white text-[#022166] border-2 border-[#022166] px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#F8FAFC] transition-all"
              >
                Contatto Professionale
              </a>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Elenco Aree Cliniche
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40 italic">Fisioterapia Malavasi — Protocollo Avanzato Dolore Persistente</span>
          </div>

        </div>
      </div>
    </main>
  );
}