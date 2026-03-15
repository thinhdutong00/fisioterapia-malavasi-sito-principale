"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowLeft,
  Home, 
  Brain, 
  Heart, 
  Users, 
  Accessibility, 
  CheckCircle2,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function FisioterapiaNeurologica() {
  const puntiForza = [
    {
      icon: <Brain className="text-[#55B4FF]" size={32} />,
      titolo: "Neuroplasticità Guidata",
      desc: "Sfruttiamo la capacità del sistema nervoso di riorganizzarsi attraverso stimoli specifici e ripetuti."
    },
    {
      icon: <Accessibility className="text-[#55B4FF]" size={32} />,
      titolo: "Autonomia Funzionale",
      desc: "L'obiettivo primario è il recupero delle attività di vita quotidiana per una maggiore indipendenza."
    },
    {
      icon: <Users className="text-[#55B4FF]" size={32} />,
      titolo: "Supporto ai Caregiver",
      desc: "Coinvolgiamo e formiamo la famiglia per garantire una continuità terapeutica anche a domicilio."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Atmosfera Accogliente e Professionale */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Navigazione / Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Neurologica</span>
          </nav>

          {/* HERO - Focus sulla Riconquista del Movimento */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">(R)enjoy your mo(ve)ments</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Ridisegnare il <br />movimento, <span className="text-[#55B4FF]">riprendere la vita.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Affrontare una patologia neurologica richiede pazienza, metodo e una guida esperta. 
              Il nostro approccio integra le neuroscienze con la cura della persona.
            </p>
          </header>

          {/* PILASTRI - Card Evolute */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            {puntiForza.map((p, i) => (
              <div key={i} className="group bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-8 p-4 bg-[#F8FAFC] w-fit rounded-2xl group-hover:bg-[#022166] group-hover:text-white transition-colors duration-500">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{p.titolo}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  {p.desc}
                </p>
              </div>
            ))}
          </section>

          {/* AREA CLINICA - Box Scuro ad Alto Impatto */}
          <section className="relative mb-24">
            <div className="bg-[#022166] rounded-[4rem] p-10 md:p-20 text-white overflow-hidden relative shadow-2xl">
              {/* Icona Background Gigante */}
              <div className="absolute top-0 right-0 opacity-5 pointer-events-none -translate-y-1/4 translate-x-1/4">
                <Brain size={500} />
              </div>
              
              <div className="relative z-10 grid lg:grid-cols-5 gap-16 items-center">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 text-[#55B4FF] mb-8">
                    <Sparkles size={24} />
                    <span className="text-xs font-black uppercase tracking-widest text-white/60 text-sm">Progetto Riabilitativo Individuale</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                    Percorsi per patologie complesse.
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-10">
                    Ogni lesione neurologica è unica. Per questo non utilizziamo protocolli standardizzati, 
                    ma costruiamo un progetto riabilitativo individuale basato sulla valutazione clinica 
                    dei deficit motori e cognitivi.
                  </p>
                  <div className="grid sm:grid-cols-1 gap-4">
                    {[
                      "Esiti di Ictus Cerebrale (Ischemico ed Emorragico)",
                      "Morbo di Parkinson e parkinsonismi",
                      "Sclerosi Multipla",
                      "Lesioni del sistema nervoso periferico",
                      "Disturbi dell'equilibrio e della coordinazione"
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                        <CheckCircle2 size={20} className="text-[#55B4FF]" />
                        <span className="text-sm md:text-base font-bold tracking-tight text-white/90">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-12 rounded-[3rem] relative">
                    <Heart className="text-[#55B4FF] mb-8" size={48} />
                    <h4 className="text-2xl font-bold mb-4 tracking-tight">Oltre la terapia fisica</h4>
                    <p className="text-white/70 text-base leading-relaxed">
                      Sappiamo che il percorso può essere lungo. La nostra promessa è quella di non lasciarvi mai soli, 
                      fornendo obiettivi chiari e misurabili per mantenere alta la motivazione e la fiducia nel recupero.
                    </p>
                    <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-2 text-[#55B4FF] font-black text-[10px] uppercase tracking-widest">
                      Supporto Integrato <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



{/* SEZIONE DOMICILIO - Approccio Clinico e Soluzione Logistica */}
<section className="mb-24 px-4">
  <div className="max-w-6xl mx-auto bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-sm relative group hover:shadow-2xl transition-all duration-700">
    <div className="grid lg:grid-cols-12">
      
      {/* Colonna Accento - Blu Istituzionale */}
      <div className="hidden lg:block lg:col-span-1 bg-[#022166] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 rotate-90 whitespace-nowrap">
          <span className="text-white text-[10px] font-black uppercase tracking-[1em]">
            Clinical Support System
          </span>
        </div>
      </div>

      {/* Contenuto Principale */}
      <div className="lg:col-span-11 p-10 md:p-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-bold text-[#022166] mb-6 tracking-tighter leading-tight">
              La continuità terapeutica <br />
              <span className="text-[#55B4FF]">oltre i limiti logistici.</span>
            </h3>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
              Le barriere architettoniche e le difficoltà di trasporto non devono condizionare l'esito della riabilitazione. 
              Garantiamo l'intervento specialistico direttamente a domicilio per pazienti con mobilità ridotta o quadri clinici complessi.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-[#F8FAFC] border border-slate-200 rounded-2xl flex items-center justify-center text-[#022166] shadow-inner">
              <Home size={32} strokeWidth={1.2} />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-10 border-t border-slate-100">
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#022166]">Efficacia Clinica</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Manteniamo gli stessi standard qualitativi e strumentali del setting ambulatoriale.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#022166]">Risparmio Energetico</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Preserviamo le risorse fisiche del paziente per il focus esclusivo sull'attività riabilitativa.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-widest text-[#022166]">Analisi Ambientale</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Valutiamo il contesto domestico per ottimizzare l'autonomia nelle attività quotidiane.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* CTA - Chiusura Professionale */}
          <section className="text-center py-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#022166] mb-8 tracking-tighter">
              Costruiamo insieme <br />il prossimo passo.
            </h2>
            <p className="max-w-2xl mx-auto text-slate-500 mb-12 text-lg">
              La tempestività dell'intervento è un fattore determinante nelle patologie neurologiche. 
              Siamo pronti ad ascoltare la vostra storia e definire la strategia migliore.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/prenota" 
                className="group bg-[#022166] text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#55B4FF] transition-all shadow-2xl shadow-[#022166]/30 flex items-center justify-center gap-3"
              >
                Richiedi Valutazione <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white text-[#022166] border-2 border-[#022166] px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#F8FAFC] transition-all"
              >
                Consulenza Telefonica
              </a>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Altri Trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Riabilitazione Specialistica</span>
          </div>

        </div>
      </div>
    </main>
  );
}