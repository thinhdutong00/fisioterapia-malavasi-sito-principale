"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight, 
  Activity,
  ArrowUpRight
} from 'lucide-react';

export default function TrattamentiPage() {
  const trattamenti = [
    {
      titolo: "Fisioterapia Muscoloscheletrica",
      slug: "/trattamenti/muscoloscheletrica",
      desc: "Riabilitazione per patologie articolari, muscolari e della colonna vertebrale."
    },
    {
      titolo: "Fisioterapia Sportiva",
      slug: "/trattamenti/sportiva",
      desc: "Recupero post-infortunio e ottimizzazione delle performance per atleti."
    },
    {
      titolo: "Fisioterapia Neurologica",
      slug: "/trattamenti/neurologica",
      desc: "Supporto e riabilitazione per pazienti con lesioni del sistema nervoso."
    },
    {
      titolo: "Fisioterapia Oncologica",
      slug: "/trattamenti/oncologica",
      desc: "Percorsi riabilitativi personalizzati per il supporto durante e dopo le terapie."
    },
    {
      titolo: "Pre e Post Chirurgica",
      slug: "/trattamenti/chirurgica",
      desc: "Preparazione e recupero funzionale per interventi ortopedici."
    },
    {
      titolo: "Dolore Persistente",
      slug: "/trattamenti/dolore-persistente",
      desc: "Gestione multidisciplinare del dolore cronico e sensibilizzazione centrale."
    },
    {
      titolo: "Cefalee e Vertigini",
      slug: "/trattamenti/cefalee-vertigini",
      desc: "Trattamento dei disturbi cervicali correlati a mal di testa e vertigini."
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
            <span className="text-[#022166] font-semibold">Aree Cliniche</span>
          </nav>

          {/* HEADER - Stile Bold come le sottopagine */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">(R)enjoy your mo(ve)ments)</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Aree di <br />intervento <span className="text-[#55B4FF]">specialistico.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Ogni trattamento è guidato dalle più recenti evidenze scientifiche e progettato 
              per rispondere alle tue specifiche necessità cliniche.
            </p>
          </header>

          {/* GRID TRATTAMENTI - Card Strutturate */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trattamenti.map((t, index) => (
              <Link 
                key={index} 
                href={t.slug}
                className="group relative bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-[#F8FAFC] rounded-2xl group-hover:bg-[#55B4FF] group-hover:text-white transition-colors">
                        <Activity size={24} className="opacity-40 group-hover:opacity-100" />
                    </div>
                    <ArrowUpRight size={20} className="text-slate-300 group-hover:text-[#55B4FF] transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#022166] mb-4 leading-tight tracking-tight">
                    {t.titolo}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium opacity-80">
                    {t.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-[#022166] font-black text-[10px] uppercase tracking-[0.3em] border-t border-slate-50 pt-6">
                  Vai alla sezione <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}

            {/* CARD CTA - Unificata allo stile Hub */}
            <div className="lg:col-span-1 bg-[#022166] p-12 rounded-[3.5rem] shadow-xl flex flex-col justify-center text-white relative overflow-hidden group">
               <div className="absolute top-[-10%] right-[-10%] p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <Activity size={280} />
               </div>
               <h3 className="text-3xl font-black mb-6 relative z-10 leading-tight">Valutazione <br />Clinica</h3>
               <p className="text-white/60 mb-10 relative z-10 text-sm leading-relaxed">
                 Non sai quale percorso sia più adatto a te? I nostri professionisti sono a disposizione per definire la strategia corretta.
               </p>
               <Link 
                href="/prenota" 
                className="bg-[#55B4FF] text-[#022166] px-8 py-5 rounded-2xl font-black text-center uppercase text-[10px] tracking-[0.3em] hover:bg-white transition-all relative z-10"
               >
                 Prenota Consulto
               </Link>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna alla Home
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Hub Clinico</span>
          </div>

        </div>
      </div>
    </main>
  );
}