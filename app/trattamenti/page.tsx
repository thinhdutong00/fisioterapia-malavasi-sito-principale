"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight, 
  Activity 
} from 'lucide-react';

export default function TrattamentiPage() {
  // Array dei trattamenti semplificato senza icone
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
                className="group relative bg-white/60 backdrop-blur-md border border-white/40 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#022166] mb-4 leading-tight group-hover:text-[#55B4FF] transition-colors">
                    {t.titolo}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                    {t.desc}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.2em]">
                  Dettagli <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}

            {/* CARD SPECIALE: PRENOTA */}
            <div className="lg:col-span-1 bg-[#022166] p-10 rounded-[2.5rem] shadow-xl flex flex-col justify-center text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                  <Activity size={120} />
               </div>
               <h3 className="text-2xl font-black mb-4 relative z-10">Consulenza Specialistica</h3>
               <p className="text-white/70 mb-8 relative z-10 text-sm">I nostri professionisti sono a disposizione per definire il piano terapeutico più adatto a te.</p>
               <Link 
                href="/prenota" 
                className="bg-[#55B4FF] text-[#022166] px-6 py-4 rounded-2xl font-black text-center uppercase text-[10px] tracking-widest hover:bg-white transition-colors relative z-10"
               >
                 Prenota Ora
               </Link>
            </div>
          </div>

          {/* Bottone di ritorno rapido */}
          <div className="mt-16 border-t border-slate-200 pt-10">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[#022166]/40 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna alla Home
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}