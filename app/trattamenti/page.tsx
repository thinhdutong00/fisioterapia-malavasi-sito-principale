"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight, 
  Activity, 
  Trophy, 
  Brain, 
  HeartPulse, 
  Stethoscope, 
  Wind, 
  AlertCircle 
} from 'lucide-react';

export default function TrattamentiPage() {
  // Array dei trattamenti con icone dedicate
  const trattamenti = [
    {
      titolo: "Fisioterapia Muscoloscheletrica",
      slug: "/trattamenti/muscoloscheletrica",
      icon: <Stethoscope className="text-[#55B4FF]" size={28} />,
      desc: "Riabilitazione per patologie articolari, muscolari e della colonna vertebrale."
    },
    {
      titolo: "Fisioterapia Sportiva",
      slug: "/trattamenti/sportiva",
      icon: <Trophy className="text-[#55B4FF]" size={28} />,
      desc: "Recupero post-infortunio e ottimizzazione delle performance per atleti."
    },
    {
      titolo: "Fisioterapia Neurologica",
      slug: "/trattamenti/neurologica",
      icon: <Brain className="text-[#55B4FF]" size={28} />,
      desc: "Supporto e riabilitazione per pazienti con lesioni del sistema nervoso."
    },
    {
      titolo: "Fisioterapia Oncologica",
      slug: "/trattamenti/oncologica",
      icon: <HeartPulse className="text-[#55B4FF]" size={28} />,
      desc: "Percorsi riabilitativi personalizzati per il supporto durante e dopo le terapie."
    },
    {
      titolo: "Pre e Post Chirurgica",
      slug: "/trattamenti/chirurgica",
      icon: <Activity className="text-[#55B4FF]" size={28} />,
      desc: "Preparazione e recupero funzionale per interventi ortopedici."
    },
    {
      titolo: "Dolore Persistente",
      slug: "/trattamenti/dolore-persistente",
      icon: <AlertCircle className="text-[#55B4FF]" size={28} />,
      desc: "Gestione multidisciplinare del dolore cronico e sensibilizzazione centrale."
    },
    {
      titolo: "Cefalee e Vertigini",
      slug: "/trattamenti/cefalee-vertigini",
      icon: <Wind className="text-[#55B4FF]" size={28} />,
      desc: "Trattamento dei disturbi cervicali correlati a mal di testa e vertigini."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F0F4F8] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[30%] h-[30%] bg-[#022166]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Trattamenti</span>
          </nav>

          {/* Header Pagina */}
          <header className="mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-[#022166] leading-tight mb-6">
              Eccellenza nella <br />
              <span className="text-[#55B4FF]">Riabilitazione</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
              Esplora le nostre aree di specializzazione. Ogni percorso è costruito intorno alle tue esigenze cliniche, 
              utilizzando le migliori evidenze scientifiche.
            </p>
          </header>

          {/* GRID TRATTAMENTI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trattamenti.map((t, index) => (
              <Link 
                key={index} 
                href={t.slug}
                className="group relative bg-white/60 backdrop-blur-md border border-white/40 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#022166] transition-all duration-500">
                    <div className="group-hover:text-white transition-colors">
                      {t.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#022166] mb-3 leading-snug">
                    {t.titolo}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {t.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-[#55B4FF] font-bold text-xs uppercase tracking-widest">
                  Scopri di più <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}

            {/* CARD SPECIALE: PRENOTA */}
            <div className="lg:col-span-1 bg-[#022166] p-8 rounded-[2rem] shadow-xl flex flex-col justify-center text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <Activity size={120} />
               </div>
               <h3 className="text-2xl font-black mb-4 relative z-10">Hai bisogno di una consulenza?</h3>
               <p className="text-white/70 mb-8 relative z-10">I nostri specialisti sono a disposizione per valutare il tuo caso clinico.</p>
               <Link 
                href="/prenota" 
                className="bg-[#55B4FF] text-[#022166] px-6 py-4 rounded-xl font-black text-center uppercase text-xs tracking-widest hover:bg-white transition-colors relative z-10"
               >
                 Prenota Valutazione
               </Link>
            </div>
          </div>

          {/* Bottone di ritorno rapido */}
          <div className="mt-16 border-t border-slate-200 pt-10">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[#022166]/50 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna alla Home
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}