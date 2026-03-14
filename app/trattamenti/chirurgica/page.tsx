"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowLeft, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Microscope, 
  UserCheck,
  Stethoscope
} from 'lucide-react';

export default function PrePostChirurgica() {
  const fasiPercorso = [
    {
      icon: <Microscope className="text-[#55B4FF]" size={32} />,
      titolo: "Pre-abilitazione",
      desc: "Preparare i tessuti e la muscolatura prima dell'intervento riduce drasticamente i tempi di recupero e migliora l'esito chirurgico."
    },
    {
      icon: <Activity className="text-[#55B4FF]" size={32} />,
      titolo: "Gestione Post-Op Immediata",
      desc: "Controllo del dolore, dell'infiammazione e protezione della riparazione tissutale nelle fasi più delicate."
    },
    {
      icon: <Zap className="text-[#55B4FF]" size={32} />,
      titolo: "Recupero Funzionale",
      desc: "Rieducazione al carico e al movimento fluido per tornare alle attività quotidiane e sportive senza timori."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Precisione e Pulizia */}
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
            <span className="text-[#022166] font-semibold">Pre e Post Chirurgica</span>
          </nav>

          {/* HERO - Il Sogno della Certezza del Risultato */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Surgical Recovery Protocol</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              L'intervento è <br />solo <span className="text-[#55B4FF]">metà dell'opera.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Il successo di un'operazione chirurgica dipende dalla qualità della riabilitazione. 
              Proteggiamo il tuo investimento in salute con un protocollo rigoroso, 
              che massimizza il successo clinico e azzera le incertezze del post-operatorio.
            </p>
          </header>

          {/* HORMORZI: Valore = Riduzione del Rischio e Tempo */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            {fasiPercorso.map((f, i) => (
              <div key={i} className="group bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-8 p-4 bg-[#F0F4F8] w-fit rounded-2xl group-hover:bg-[#022166] group-hover:text-white transition-colors duration-500">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{f.titolo}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </section>

          {/* SEZIONE ARGOMENTATIVA - Alto Valore SEO & Autorità */}
          <section className="relative mb-24">
            <div className="absolute inset-0 bg-[#022166] rounded-[4rem] -rotate-1 scale-[1.02] opacity-5"></div>
            <div className="relative bg-white border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#022166] mb-8 tracking-tight">
                    Ingegneria del <br />movimento post-op.
                  </h2>
                  <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                    Collaboriamo con i principali chirurghi ortopedici per garantire che il tuo 
                    percorso sia in totale continuità con quanto eseguito in sala operatoria. 
                    Monitoriamo ogni millimetro di mobilità riguadagnata.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Protesi d'Anca, Ginocchio e Spalla",
                      "Ricostruzione Legamento Crociato Anteriore (LCA)",
                      "Chirurgia della Colonna Vertebrale (Ernie, Stabilizzazioni)",
                      "Suture Tendinee e Riparazione Cuffia dei Rotatori",
                      "Chirurgia del Piede e della Caviglia"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-[#022166] font-bold">
                        <UserCheck size={20} className="text-[#55B4FF]" />
                        <span className="text-sm md:text-base tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative p-8 bg-[#F8FAFC] rounded-[3rem] border border-slate-200">
                   <div className="absolute top-6 right-8 text-[#022166]/10">
                      <Stethoscope size={100} />
                   </div>
                   <h4 className="text-2xl font-bold text-[#022166] mb-6 relative z-10">Perché iniziare prima?</h4>
                   <p className="text-slate-500 text-sm leading-relaxed mb-8 relative z-10">
                    Gli studi dimostrano che un paziente che esegue 4 settimane di fisioterapia pre-operatoria 
                    diminuisce del 30% la necessità di assistenza post-operatoria intensiva. 
                    <strong> Arrivare pronti significa tornare pronti.</strong>
                   </p>
                   <div className="p-6 bg-white rounded-2xl border border-[#55B4FF]/20 shadow-inner">
                      <div className="text-xs text-[#55B4FF] font-black uppercase mb-2 tracking-widest">Obiettivo Clinico</div>
                      <div className="text-[#022166] font-bold italic">"Ripristino della biomeccanica fisiologica nel minor tempo biologico possibile."</div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA - Funnel di Conversione ad Alto Impatto */}
          <section className="text-center py-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#022166] mb-8 tracking-tighter">
              Non lasciare il tuo <br />recupero al caso.
            </h2>
            <p className="max-w-2xl mx-auto text-slate-500 mb-12 text-lg">
              Sia che tu stia programmando l'intervento o che tu l'abbia già affrontato, 
              la finestra temporale per un recupero ottimale è adesso.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/prenota" 
                className="group bg-[#022166] text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#55B4FF] transition-all shadow-2xl shadow-[#022166]/30 flex items-center justify-center gap-3"
              >
                Pianifica il Recupero <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <a 
                href="tel:+393338225464" 
                className="bg-white text-[#022166] border-2 border-[#022166] px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#F8FAFC] transition-all"
              >
                Consulenza Post-Op
              </a>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-24 border-t border-slate-200 pt-12">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna all'Hub Trattamenti
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}