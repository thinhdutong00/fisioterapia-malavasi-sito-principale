"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowLeft, 
  Brain, 
  Heart, 
  Users, 
  Accessibility, 
  CheckCircle2,
  Sparkles
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
      
      {/* BACKGROUND DECORATIONS - Toni più morbidi */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-[#55B4FF]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[35%] h-[35%] bg-[#022166]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Fisioterapia Neurologica</span>
          </nav>

          {/* HERO - Il Sogno della Riconquista */}
          <header className="mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-6">
               <Sparkles size={16} className="text-[#55B4FF]" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#022166]">Riabilitazione Specialistica</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-[#022166] leading-[1.1] mb-8">
              Ridisegnare il movimento, <br />
              <span className="text-[#55B4FF]">riprendere la vita.</span>
            </h1>
            <p className="max-w-3xl text-xl text-slate-600 leading-relaxed font-light">
              Affrontare una patologia neurologica richiede pazienza, metodo e una guida esperta. 
              Il nostro approccio integra le neuroscienze con la cura della persona, per trasformare 
              ogni piccolo progresso in una grande vittoria.
            </p>
          </header>

          {/* HORMORZI: Valore attraverso la specializzazione */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            {puntiForza.map((p, i) => (
              <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:scale-[1.02] transition-transform duration-500">
                <div className="mb-6">{p.icon}</div>
                <h3 className="text-xl font-bold text-[#022166] mb-4">{p.titolo}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </section>

          {/* AREA CLINICA - Linguaggio SEO di alto livello */}
          <section className="bg-[#022166] rounded-[4rem] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden mb-24">
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <Brain size={600} className="absolute -top-20 -right-20" />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-8">Percorsi di riabilitazione per patologie complesse</h2>
                <p className="text-white/70 mb-10 leading-relaxed">
                  Ogni lesione neurologica è unica. Per questo non utilizziamo protocolli standardizzati, 
                  ma costruiamo un progetto riabilitativo individuale basato sulla valutazione clinica 
                  dei deficit motori e cognitivi.
                </p>
                <div className="space-y-4">
                  {[
                    "Esiti di Ictus Cerebrale (Ischemico ed Emorragico)",
                    "Morbo di Parkinson e parkinsonismi",
                    "Sclerosi Multipla",
                    "Lesioni del sistema nervoso periferico",
                    "Disturbi dell'equilibrio e della coordinazione"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-[#55B4FF]" />
                      <span className="text-sm md:text-base font-medium text-white/90">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[3rem]">
                <Heart className="text-[#55B4FF] mb-6" size={40} />
                <h4 className="text-2xl font-bold mb-4">Oltre la terapia fisica</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Sappiamo che il percorso può essere lungo. La nostra promessa è quella di non lasciarvi mai soli, 
                  fornendo obiettivi chiari e misurabili per mantenere alta la motivazione e la fiducia nel recupero.
                </p>
              </div>
            </div>
          </section>

          {/* CTA - Emotività e Azione Rapida */}
          <section className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-[#022166] mb-8">
              Costruiamo insieme il prossimo passo.
            </h2>
            <p className="text-slate-500 mb-12 text-lg">
              La tempestività dell'intervento è un fattore determinante nelle patologie neurologiche. 
              Siamo pronti ad ascoltare la vostra storia e definire insieme la strategia migliore.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/prenota" 
                className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-[#022166] hover:text-white transition-all shadow-xl shadow-[#55B4FF]/20"
              >
                Richiedi Valutazione
              </Link>
              <a 
                href="tel:+393338225464" 
                className="flex items-center justify-center gap-3 bg-white text-[#022166] border-2 border-[#022166]/10 px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:border-[#022166] transition-all"
              >
                Consulenza Telefonica
              </a>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-20 border-t border-slate-200 pt-10">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Esplora altri trattamenti
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}