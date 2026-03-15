"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ChevronRight,
  Home, 
  ArrowLeft, 
  HeartPulse, 
  ShieldCheck, 
  Sun, 
  ThermometerSun,
  HandHeart,
  FileText,
  ArrowUpRight,
  Sparkles
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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Atmosfera di Luce e Supporto */}
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
            <span className="text-[#022166] font-semibold">Oncologica</span>
          </nav>

          {/* HERO - Empatia e Professionalità */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">(R)enjoy your mo(ve)ments</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Oltre la cura, <br />il tuo <span className="text-[#55B4FF]">benessere.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Un percorso di supporto che ti accompagna prima, durante e dopo le terapie. 
              Proteggiamo la tua qualità di vita, restituendo dignità al movimento.
            </p>
          </header>

          {/* PILASTRI - Card Evolute */}
          <section className="grid md:grid-cols-3 gap-8 mb-24">
            {benefici.map((b, i) => (
              <div key={i} className="group bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="mb-8 p-4 bg-[#F8FAFC] w-fit rounded-2xl group-hover:bg-[#022166] group-hover:text-white transition-colors duration-500">
                  {b.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{b.titolo}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                  {b.desc}
                </p>
              </div>
            ))}
          </section>

          {/* AREA CLINICA - Sicurezza e Collaborazione Medica */}
          <section className="relative mb-24">
            <div className="absolute inset-0 bg-[#022166] rounded-[4rem] -rotate-1 scale-[1.02] opacity-5"></div>
            <div className="relative bg-white border border-slate-100 rounded-[4rem] p-10 md:p-20 overflow-hidden shadow-sm">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-[#022166] mb-8 tracking-tight">
                    Intervento sicuro <br />e validato.
                  </h2>
                  <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                    La ricerca clinica conferma che un'attività fisica controllata è uno dei pilastri per il recupero 
                    della forza e il potenziamento del sistema immunitario.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Recupero funzionale post-mastectomia",
                      "Trattamento delle neuropatie indotte da chemioterapia",
                      "Rieducazione respiratoria specialistica",
                      "Esercizio terapeutico adattato",
                      "Gestione delle problematiche osteo-articolari"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-[#022166] font-bold">
                        <ShieldCheck size={20} className="text-[#55B4FF]" />
                        <span className="text-sm md:text-base tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative p-8 bg-[#F8FAFC] rounded-[3rem] border border-slate-200">
                   <div className="absolute top-6 right-8 text-[#022166]/10">
                      <FileText size={100} />
                   </div>
                   <h4 className="text-2xl font-bold text-[#022166] mb-6 relative z-10">Collaborazione Medica</h4>
                   <p className="text-slate-500 text-sm leading-relaxed mb-8 relative z-10">
                    Lavoriamo in stretta sinergia con il tuo oncologo e il tuo team medico. Ogni fase del trattamento 
                    viene calibrata in base al tuo stato di salute e al ciclo di cure.
                   </p>
                   <div className="p-6 bg-white rounded-2xl border border-[#55B4FF]/20 shadow-inner">
                      <div className="text-xs text-[#55B4FF] font-black uppercase mb-2 tracking-widest">Garanzia di Sicurezza</div>
                      <div className="text-[#022166] font-bold italic">"Monitoraggio costante dei parametri e adattamento del carico ad ogni seduta."</div>
                   </div>
                </div>
              </div>
            </div>
          </section>



{/* SEZIONE DOMICILIO - Focus Logistico e Continuità Clinica */}
<section className="mb-24 px-4">
  <div className="max-w-5xl mx-auto bg-[#F1F5F9]/50 border border-slate-200 p-10 md:p-16 rounded-[4rem] relative overflow-hidden group transition-all duration-700 hover:bg-white hover:shadow-2xl">
    <div className="grid md:grid-cols-12 gap-12 items-start relative z-10">
      
      {/* Icona Tecnica */}
      <div className="md:col-span-1">
        <div className="w-16 h-16 bg-[#022166] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#022166]/20">
          <Home size={28} strokeWidth={1.5} />
        </div>
      </div>

      {/* Contenuto Testuale Professionale */}
      <div className="md:col-span-11">
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#55B4FF] mb-4 block">
              Continuità Terapeutica Domiciliare
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#022166] mb-6 tracking-tighter">
              Eliminare le barriere del trasporto.
            </h3>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-4xl font-medium opacity-90">
              Riconosciamo che il carico fisico e organizzativo degli spostamenti può compromettere la regolarità delle cure. 
              Per garantire la massima aderenza al piano riabilitativo, abbiamo strutturato un servizio di 
              **fisioterapia domiciliare specialistica**: portiamo le competenze e le tecnologie dello studio 
              direttamente nel tuo ambiente, annullando lo stress logistico e preservando le tue energie per il recupero.
            </p>
          </div>

          {/* Badge Professionali - Rigorosi */}
          <div className="flex flex-wrap gap-y-4 gap-x-8 pt-8 border-t border-slate-200/60">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#55B4FF]"></div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#022166]">Protocolli Clinici Invariati</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#55B4FF]"></div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#022166]">Ottimizzazione dei Tempi</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#55B4FF]"></div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#022166]">Supporto ai Caregiver</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Elemento Decorativo Tecnico in background */}
    <div className="absolute right-0 bottom-0 opacity-[0.02] pointer-events-none translate-x-1/4 translate-y-1/4">
      <Home size={400} />
    </div>
  </div>
</section>



          {/* CTA - Box Scuro ad Alto Impatto */}
          <section className="text-center py-10 relative">
             <div className="bg-[#022166] rounded-[4rem] p-12 md:p-24 text-white overflow-hidden relative shadow-2xl">
                <div className="absolute top-0 right-0 opacity-5 pointer-events-none -translate-y-1/4 translate-x-1/4">
                  <Sparkles size={500} />
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                    Riprendi spazio, <br />un passo alla volta.
                  </h2>
                  <p className="max-w-2xl mx-auto text-white/70 mb-12 text-lg md:text-xl font-light">
                    Siamo qui per ascoltare le tue necessità e costruire un percorso che rispetti i tuoi tempi e le tue energie.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link 
                      href="/prenota" 
                      className="group bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                      Richiedi un Colloquio <ArrowUpRight size={18} />
                    </Link>
                    <a 
                      href="tel:+393338225464" 
                      className="bg-transparent border-2 border-white/20 text-white px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-white/10 transition-all"
                    >
                      Chiamaci con fiducia
                    </a>
                  </div>
                </div>
             </div>
          </section>

          {/* Footer Back Link */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Tutti i Trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40 italic">Fisioterapia Malavasi — Supporto & Benessere</span>
          </div>

        </div>
      </div>
    </main>
  );
}