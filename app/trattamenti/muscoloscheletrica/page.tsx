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
  ShieldCheck,
  Medal,
  Activity
} from 'lucide-react';

export default function FisioterapiaMuscoloscheletrica() {
  const pilastri = [
    {
      icon: <Target className="text-[#55B4FF]" size={32} />,
      titolo: "Diagnosi Funzionale",
      desc: "Identifichiamo la causa radice del disturbo, evitando di trattare unicamente il sintomo doloroso superficiale."
    },
    {
      icon: <ShieldCheck className="text-[#55B4FF]" size={32} />,
      titolo: "Protocolli Scientifici",
      desc: "Utilizziamo percorsi riabilitativi validati a livello internazionale per garantire la massima efficacia terapeutica."
    },
    {
      icon: <Clock className="text-[#55B4FF]" size={32} />,
      titolo: "Tempi di Recupero",
      desc: "Pianifichiamo il percorso per massimizzare i risultati nel minor tempo fisiologicamente possibile."
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
          
          {/* Navigazione / Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Muscoloscheletrica</span>
          </nav>

          {/* HERO - Grande Impatto Visivo */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Protocollo Riabilitativo Avanzato</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Recupero della <br />piena <span className="text-[#55B4FF]">efficienza.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              L'approccio clinico dedicato alla risoluzione delle patologie dell'apparato locomotore. 
              Attraverso terapie manuali e l'esercizio terapeutico, ripristiniamo la tua libertà 
              di movimento basandoci sulle più recenti evidenze scientifiche.
            </p>
          </header>

          {/* PILASTRI - Valore Clinico */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            {pilastri.map((p, i) => (
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

          {/* SEZIONE OMPT - Autorità Specialistica */}
          <section className="mb-24 relative">
             <div className="bg-[#022166] rounded-[4rem] p-10 md:p-20 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 opacity-5 -translate-y-1/4 translate-x-1/4">
                  <Medal size={400} />
                </div>
                <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-center">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 text-[#55B4FF] mb-6">
                      <Medal size={24} />
                      <span className="text-xs font-black uppercase tracking-widest">Specializzazione Internazionale</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                      Eccellenza OMPT: <br />
                      Terapia Manuale Ortopedica.
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed mb-6">
                      Il titolo OMPT è un riconoscimento internazionale rilasciato secondo gli standard IFOMPT. 
                      Garantisce che il fisioterapista possieda competenze avanzate nel ragionamento clinico e 
                      nelle tecniche manuali più sofisticate.
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed font-medium italic">
                      Scegliere un professionista OMPT significa affidarsi a una gestione del dolore e del movimento 
                      ai massimi livelli qualitativi oggi disponibili.
                    </p>
                  </div>
                  <div className="lg:col-span-2 space-y-4">
                    {[
                      "Ragionamento clinico avanzato",
                      "Tecniche di manipolazione articolare",
                      "Gestione dei quadri clinici complessi",
                      "Integrazione di evidenze e bio-meccanica",
                      "Standard formativi universitari internazionali"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                        <CheckCircle2 size={18} className="text-[#55B4FF]" />
                        <span className="text-sm font-bold tracking-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
             </div>
          </section>

          {/* DETTAGLIO CLINICO - Competenze */}
          <section className="relative mb-24">
            <div className="absolute inset-0 bg-[#022166] rounded-[4rem] -rotate-1 scale-[1.02] opacity-5"></div>
            <div className="relative bg-white border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#022166] mb-8 tracking-tight">
                    Ambiti di <br />applicazione.
                  </h2>
                  <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                    Il nostro obiettivo è ripristinare la corretta biomeccanica del corpo attraverso un piano 
                    personalizzato che affronta un ampio spettro di disturbi dell'apparato locomotore.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Lombalgie, Sciatalgie ed Ernie del disco",
                      "Cervicalgie e disturbi dell'area nucale",
                      "Riabilitazione post-traumatica (distorsioni, lesioni)",
                      "Tendinopatie e borsiti croniche",
                      "Artrosi e patologie degenerative"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-[#022166] font-bold">
                        <CheckCircle2 size={20} className="text-[#55B4FF]" />
                        <span className="text-sm md:text-base tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative p-8 bg-[#F8FAFC] rounded-[3rem] border border-slate-200">
                   <div className="absolute top-6 right-8 text-[#022166]/10">
                      <Stethoscope size={100} />
                   </div>
                   <h4 className="text-2xl font-bold text-[#022166] mb-6 relative z-10">Metodologia di cura</h4>
                   <p className="text-slate-500 text-sm leading-relaxed mb-8 relative z-10">
                    Ogni trattamento integra tecniche di terapia manuale ed esercizio correttivo, 
                    mirando non solo alla riduzione del dolore, ma al potenziamento della resilienza strutturale dei tessuti.
                   </p>
                   <div className="p-6 bg-white rounded-2xl border border-[#55B4FF]/20 shadow-inner">
                      <div className="text-xs text-[#55B4FF] font-black uppercase mb-2 tracking-widest">Obiettivo Clinico</div>
                      <div className="text-[#022166] font-bold italic">"Ripristinare la biomeccanica fisiologica nel rispetto della guarigione biologica."</div>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA - Conversione */}
          <section className="text-center py-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#022166] mb-8 tracking-tighter">
              Inizia il tuo <br />percorso di cura.
            </h2>
            <p className="max-w-2xl mx-auto text-slate-500 mb-12 text-lg">
              Attraverso una valutazione iniziale approfondita, definiremo gli obiettivi clinici 
              e le modalità di intervento più idonee al tuo caso specifico.
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
                Parlaci del tuo caso
              </a>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna ai Trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Eccellenza Clinica</span>
          </div>

        </div>
      </div>
    </main>
  );
}