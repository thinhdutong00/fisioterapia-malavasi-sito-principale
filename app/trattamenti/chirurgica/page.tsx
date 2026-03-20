"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight,
  Activity,
  ArrowUpRight, 
  ShieldCheck, 
  Dumbbell,
  Target,
  Timer,
  Milestone,
  Stethoscope
} from 'lucide-react';

export default function ChirurgiaPage() {
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
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Pre e Post Chirurgica</span>
          </nav>

          {/* HEADER SEZIONE - AUTHORITY HOOK */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Riabilitazione Ortopedica Avanzata</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Ottimizza il tuo <br />recupero <span className="text-[#55B4FF]">chirurgico.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Dalla preparazione pre-operatoria al ritorno alla vita quotidiana: un percorso guidato per garantire il successo della tua operazione.
            </p>
          </header>

          {/* SEZIONE 1: L'IMPORTANZA DEL PERCORSO (INFORMATIVO) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  La strategia clinica
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Perché la fisioterapia è cruciale?</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-[#55B4FF] font-bold text-lg mb-4 uppercase tracking-tighter">Pre-Operatorio</h3>
                      <p className="text-slate-500 text-base leading-relaxed">
                        Arrivare all'intervento con muscoli forti e articolazioni mobili riduce drasticamente i tempi di recupero e migliora l'esito della chirurgia. È il "pre-condizionamento" necessario per il successo.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#022166] font-bold text-lg mb-4 uppercase tracking-tighter">Post-Operatorio</h3>
                      <p className="text-slate-500 text-base leading-relaxed">
                        Gestire il dolore, l'edema e recuperare il corretto schema di movimento. La riabilitazione tempestiva evita aderenze cicatriziali e rigidità permanenti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: FOCUS TERAPIA MANUALE E ESERCIZIO (CORE VALUE) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#E0E7FF] text-[#022166] px-4 py-2 rounded-full mb-8">
                  <Target size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Protocollo Personalizzato</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  Terapia Manuale <br />ed <span className="text-[#55B4FF]">Esercizio.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Non seguiamo schemi standard. Integriamo tecniche manuali per il drenaggio e la mobilità con l'esercizio terapeutico per restituirti l'autonomia.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#55B4FF]/10 rounded-lg flex items-center justify-center text-[#55B4FF] flex-shrink-0"><Milestone size={20}/></div>
                    <p className="text-sm font-bold text-[#022166]">Gestione precisa dei carichi progressivi</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#55B4FF]/10 rounded-lg flex items-center justify-center text-[#55B4FF] flex-shrink-0"><ShieldCheck size={20}/></div>
                    <p className="text-sm font-bold text-[#022166]">Prevenzione delle complicanze post-operatorie</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 relative">
                 <div className="bg-[#E0F2FE] p-12 rounded-[3rem] border border-white">
                    <h4 className="text-[#022166] font-black text-xs uppercase tracking-[0.3em] mb-8">Interventi comuni trattati:</h4>
                    <div className="space-y-4">
                       {["Protesi d'Anca e Ginocchio", "Ricostruzione LCA (Crociato)", "Chirurgia della Spalla (Cuffia dei Rotatori)", "Interventi alla Colonna Vertebrale"].map((item, index) => (
                         <div key={index} className="flex justify-between items-center py-4 border-b border-[#022166]/10">
                            <span className="text-[#022166] font-bold italic text-lg">{item}</span>
                            <ArrowUpRight className="text-[#55B4FF]" size={20} />
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 3: LE FASI DEL RECUPERO (FUNNEL) */}
          <section className="mb-32">
             <div className="bg-[#022166] p-10 md:p-20 rounded-[3rem] shadow-2xl text-white relative overflow-hidden">
                <div className="relative z-10 grid md:grid-cols-3 gap-12">
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-[#55B4FF] rounded-xl flex items-center justify-center text-[#022166]"><Timer size={24}/></div>
                    <h4 className="text-2xl font-bold tracking-tight">Fase 1: <br />Protezione</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Controllo del dolore, riduzione del gonfiore e protezione del tessuto in via di guarigione.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/20"><Activity size={24}/></div>
                    <h4 className="text-2xl font-bold tracking-tight">Fase 2: <br />Mobilità</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Recupero dell'arco di movimento completo e riattivazione della muscolatura atrofizzata.</p>
                  </div>
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/20"><Dumbbell size={24}/></div>
                    <h4 className="text-2xl font-bold tracking-tight">Fase 3: <br />Funzione</h4>
                    <p className="text-white/60 text-sm leading-relaxed">Rinforzo avanzato e ritorno alle attività sportive o lavorative in totale sicurezza.</p>
                  </div>
                </div>
             </div>
          </section>

          {/* SEZIONE FINALE: CALL TO ACTION - CONVERSIONE */}
          <section className="bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#022166] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi — Hub Riabilitativo</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95] text-[#022166]">
                Assicura il successo <br />
                <span className="text-[#55B4FF]">del tuo intervento.</span>
              </h3>
              
              <p className="text-slate-500 text-xl mb-12 font-light leading-relaxed max-w-xl">
                Ogni giorno perso è un giorno di ritardo nel tuo recupero. Inizia oggi il tuo percorso riabilitativo.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="https://www.fisioterapiamalavasi.it/prenota" 
                  className="bg-[#022166] text-white px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-[#55B4FF] hover:text-[#022166] transition-all active:scale-95"
                >
                  Prenota Valutazione
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-slate-100 text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-slate-200 transition-all active:scale-95"
                >
                  Ho bisogno di info
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER NAVIGATION */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Altri Trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Specialisti in Riabilitazione Post-Chirurgica</span>
          </div>

        </div>
      </div>
    </main>
  );
}