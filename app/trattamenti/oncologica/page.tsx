"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ArrowLeft, 
  HeartPulse, 
  ShieldCheck, 
  Sun, 
  ThermometerSun,
  HandHeart,
  FileText
} from 'lucide-react';

export default function FisioterapiaOncologica() {
  const benefici = [
    {
      icon: <Sun className="text-[#55B4FF]" size={32} />,
      titolo: "Gestione della Fatigue",
      desc: "Interventi mirati per contrastare la stanchezza cronica legata alle terapie farmacologiche e radioterapiche."
    },
    {
      icon: <ThermometerSun className="text-[#55B4FF]" size={32} />,
      titolo: "Trattamento Linfedema",
      desc: "Prevenzione e cura dei ristagni linfatici post-operatori attraverso drenaggio manuale e bendaggi specifici."
    },
    {
      icon: <HandHeart className="text-[#55B4FF]" size={32} />,
      titolo: "Recupero della Mobilità",
      desc: "Trattamento delle cicatrici e delle rigidità articolari per ripristinare la fluidità dei movimenti quotidiani."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFEFF] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Toni caldi e rassicuranti */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#55B4FF]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[5%] right-[5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Fisioterapia Oncologica</span>
          </nav>

          {/* HERO - Empatia e Sostegno */}
          <header className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-pink-100 mb-6">
               <HeartPulse size={16} className="text-[#55B4FF]" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#022166]">Supporto Integrato</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-[#022166] leading-[1.1] mb-8">
              Oltre la cura, <br />
              <span className="text-[#55B4FF]">il tuo benessere.</span>
            </h1>
            <p className="max-w-3xl text-xl text-slate-600 leading-relaxed font-light">
              La fisioterapia oncologica non è solo riabilitazione: è un percorso di supporto che ti accompagna 
              prima, durante e dopo le terapie. L'obiettivo è proteggere la tua qualità di vita, 
              riducendo gli effetti collaterali e restituendo dignità al movimento.
            </p>
          </header>

          {/* VALORE AGGIUNTO: Riduzione Sforzo e Paura */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            {benefici.map((b, i) => (
              <div key={i} className="bg-white/70 backdrop-blur-md p-10 rounded-[3rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-md">
                <div className="mb-6">{b.icon}</div>
                <h3 className="text-xl font-bold text-[#022166] mb-4">{b.titolo}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{b.desc}</p>
              </div>
            ))}
          </section>

          {/* SEZIONE CLINICA - Massima Sicurezza (Probability of Success) */}
          <section className="bg-white border border-slate-100 rounded-[4rem] p-10 md:p-16 mb-24 shadow-sm relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-[#022166] mb-8">Un intervento sicuro, <br />basato sulle evidenze.</h2>
                <div className="space-y-6 text-slate-600">
                  <p>
                    Molti pazienti temono che l'esercizio possa essere rischioso. Al contrario, la ricerca clinica 
                    conferma che un'attività fisica controllata è uno dei pilastri per il recupero della forza 
                    e il potenziamento del sistema immunitario.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      "Recupero funzionale post-mastectomia",
                      "Trattamento delle neuropatie indotte da chemioterapia",
                      "Rieducazione respiratoria",
                      "Esercizio terapeutico adattato",
                      "Gestione delle problematiche osteo-articolari"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <ShieldCheck size={18} className="text-[#55B4FF]" />
                        <span className="text-sm font-semibold text-[#022166]/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F0F4F8] p-10 rounded-[3rem] flex flex-col justify-center border border-slate-200/50">
                <FileText className="text-[#022166] mb-6 opacity-20" size={48} />
                <h4 className="text-xl font-bold text-[#022166] mb-4">Collaborazione Medica</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Lavoriamo in stretta sinergia con il tuo oncologo e il tuo team medico. Ogni fase del trattamento 
                  fisioterapico viene calibrata in base al tuo stato di salute attuale e al ciclo di cure che stai seguendo.
                </p>
              </div>
            </div>
          </section>

          {/* CTA - Funnel di Conversione Gentile */}
          <section className="text-center bg-[#022166] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6">Riprendi spazio, un passo alla volta.</h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg">
                Siamo qui per ascoltare le tue necessità e costruire un percorso che rispetti i tuoi tempi e le tue energie. 
                Inizia oggi il tuo viaggio verso un domani più attivo.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link 
                  href="/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-white transition-all"
                >
                  Richiedi un Colloquio
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="flex items-center justify-center gap-3 bg-transparent border-2 border-white/20 px-12 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.2em] hover:bg-white/10 transition-all"
                >
                  Chiamaci con fiducia
                </a>
              </div>
            </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-20">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna all'elenco trattamenti
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}