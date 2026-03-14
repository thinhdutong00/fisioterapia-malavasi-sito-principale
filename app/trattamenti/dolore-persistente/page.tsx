"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  Stethoscope, 
  GraduationCap,
  Heart,
  Compass,
  ArrowRight
} from 'lucide-react';

export default function DolorePersistente() {
  return (
    <main className="min-h-screen bg-[#FDFEFF] text-slate-800 font-sans relative">
      
      {/* Background minimale */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-slate-50 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Breadcrumb istituzionale */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166]">Home</Link>
            <ChevronRight size={10} />
            <Link href="/trattamenti" className="hover:text-[#022166]">Trattamenti</Link>
            <ChevronRight size={10} />
            <span className="text-[#022166] font-bold">Gestione Clinica del Dolore</span>
          </nav>

          {/* INTRODUZIONE - L'Accompagnamento */}
          <header className="mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-[#022166] leading-tight mb-8">
              Un percorso condiviso per la <br />
              <span className="text-slate-400">risoluzione del dolore persistente.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              Il dolore che si protrae nel tempo richiede una comprensione che va oltre il singolo sintomo. 
              Il nostro obiettivo non è fornire una soluzione rapida e temporanea, ma <strong>accompagnarti con metodo e pazienza</strong> verso il recupero della tua autonomia, attraverso le evidenze delle neuroscienze moderne.
            </p>
          </header>

          {/* I TRE PILASTRI DELL'ACCOMPAGNAMENTO */}
          <section className="grid md:grid-cols-2 gap-12 mb-28">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-slate-100 p-2 rounded-lg">
                  <Compass size={20} className="text-[#022166]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#022166] mb-2">Guida e Orientamento</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Spesso il dolore è accompagnato dall'incertezza. Ti aiutiamo a comprendere i meccanismi neurofisiologici alla base del disturbo, eliminando i dubbi che alimentano il senso di fragilità.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-slate-100 p-2 rounded-lg">
                  <ShieldCheck size={20} className="text-[#022166]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#022166] mb-2">Sicurezza e Gradualità</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Ogni passo del percorso è calibrato sulle tue reali capacità. Utilizziamo un approccio di esposizione graduale al movimento, garantendo che ogni esercizio sia percepito come sicuro dal tuo sistema nervoso.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-slate-100 p-2 rounded-lg">
                  <GraduationCap size={20} className="text-[#022166]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#022166] mb-2">Educazione Strategica</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Ti forniamo gli strumenti per gestire autonomamente le fasi di riacutizzazione, rendendoti parte attiva e consapevole del tuo processo di guarigione.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 bg-slate-100 p-2 rounded-lg">
                  <Heart size={20} className="text-[#022166]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#022166] mb-2">Alleanza Terapeutica</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Non sarai solo. La continuità del supporto e l'ascolto clinico sono parte integrante del trattamento, per assicurare che il percorso rimanga sempre allineato ai tuoi obiettivi.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* APPROFONDIMENTO CLINICO */}
          <section className="bg-slate-50 rounded-3xl p-10 md:p-16 mb-28 border border-slate-100">
            <h2 className="text-2xl font-bold text-[#022166] mb-8">Ambiti di applicazione del percorso</h2>
            <div className="grid md:grid-cols-2 gap-8 text-slate-600">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#55B4FF] rounded-full"></div>
                  <span className="text-sm font-medium italic underline decoration-[#55B4FF]/30">Lombalgia e cervicalgia cronica</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#55B4FF] rounded-full"></div>
                  <span className="text-sm font-medium italic underline decoration-[#55B4FF]/30">Sensibilizzazione centrale</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#55B4FF] rounded-full"></div>
                  <span className="text-sm font-medium italic underline decoration-[#55B4FF]/30">Fibromialgia</span>
                </li>
              </ul>
              <div className="p-6 bg-white rounded-2xl border border-slate-100">
                <h4 className="font-bold text-[#022166] mb-3 text-sm uppercase tracking-wider">Un approccio Integrato</h4>
                <p className="text-xs leading-relaxed text-slate-500">
                  Il trattamento del dolore persistente segue le linee guida internazionali che suggeriscono un approccio multimodale, dove l'esercizio terapeutico e l'educazione al dolore si fondono per ristabilire l'equilibrio del sistema biologico.
                </p>
              </div>
            </div>
          </section>

          {/* CONCLUSIONE - La Porta Aperta */}
          <section className="border-t border-slate-200 pt-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-[#022166] mb-6">Iniziare un percorso di cambiamento.</h2>
              <p className="text-slate-600 mb-10 leading-relaxed">
                Riconoscere che il dolore richiede una nuova strategia è il primo passo verso una guarigione sicura. 
                Siamo a disposizione per una prima valutazione clinica in cui analizzeremo la tua storia e 
                costruiremo insieme la strada da percorrere.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="/prenota" 
                  className="flex items-center gap-3 text-[#022166] font-black uppercase text-[11px] tracking-[0.2em] group"
                >
                  Richiedi una valutazione clinica <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <span className="text-slate-300">|</span>
                <a 
                  href="tel:+393338225464" 
                  className="text-slate-500 font-bold text-[11px] uppercase tracking-[0.2em] hover:text-[#022166] transition-colors"
                >
                  Contattaci per un colloquio conoscitivo
                </a>
              </div>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-32 text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 text-xs font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={14} /> Elenco aree cliniche
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}