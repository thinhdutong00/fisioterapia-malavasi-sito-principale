"use client";

import Link from 'next/link';
import NewAssessmentForm from '@/app/components/new-pages/NewAssessmentForm';
import { assessmentPresets } from '@/app/data/booking';
import { 
  ArrowLeft, ChevronRight,
  ShieldCheck, Zap, Waves, Move,
  CheckCircle2, AlertCircle, Microscope, HelpCircle
} from 'lucide-react';

export default function GonartrosiAdsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={12} />
            <span className="text-[#022166]">Gonartrosi</span>
          </nav>

          {/* HERO SECTION CON MODULO INTEGRATO */}
          <header className="mb-24 grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Specialista Artrosi Ginocchio</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
                Artrosi al Ginocchio: <br />
                <span className="text-[#55B4FF]">riprendi i tuoi passi.</span>
              </h1>

              <p className="max-w-xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                Il dolore da gonartrosi non è una condanna. Con il metodo <strong>OMPT</strong>, riduciamo l'infiammazione e ricostruiamo la forza necessaria per camminare senza pensieri.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <a href="tel:+393338225464" className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-[#022166] uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-all">
                   Parla con un esperto
                 </a>
              </div>
            </div>

            <NewAssessmentForm config={assessmentPresets["/trattamenti/patologie-ginocchio/gonartrosi"]} />
          </header>

          {/* SEZIONE ANALISI EMPATICA */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start text-left">
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <HelpCircle className="text-[#55B4FF] mb-4" size={32} />
                  <h2 className="text-2xl font-bold text-[#022166] mb-4">Ti senti limitato nelle tue passioni?</h2>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Svegliarsi con le ginocchia rigide o provare dolore a ogni gradino è frustrante. Sappiamo che cerchi una soluzione reale, non un semplice palliativo.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl">
                  <h2 className="text-2xl font-bold text-[#022166] mb-8 tracking-tight">Perché la scienza è dalla tua parte:</h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-10 italic">
                    "L'artrosi non è una malattia da 'usura', ma una condizione che risponde incredibilmente bene al carico graduale."
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { t: "Riduzione Rigidità", d: "Tecniche manuali per migliorare la lubrificazione naturale." },
                      { t: "Rinforzo Protetto", d: "Esercizi che stabilizzano senza sovraccaricare." },
                      { t: "Prevenzione Chirurgica", d: "Ottimizziamo la biomeccanica per posticipare la protesi." },
                      { t: "Educazione al Carico", d: "Ti insegniamo come muoverti senza infiammare il ginocchio." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <CheckCircle2 className="text-[#55B4FF] flex-shrink-0" size={24} />
                        <div>
                          <h3 className="font-bold text-[#022166] text-sm uppercase tracking-wide">{item.t}</h3>
                          <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE TRUST & METODO */}
          <section className="mb-32 text-left">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#E0F2FE] text-[#022166] px-4 py-2 rounded-full mb-8">
                  <ShieldCheck size={16} className="text-[#55B4FF]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Protocollo Certificato OMPT</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  Più mobilità, <br /><span className="text-[#55B4FF]">meno farmaci.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  La nostra fisioterapia agisce sulla <strong>causa meccanica</strong>. Integrando le migliori prove scientifiche, costruiamo un percorso che ti restituisce fiducia.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-3">
                      <Microscope className="text-[#55B4FF]" size={20} />
                      <span className="text-sm font-bold text-[#022166]">Analisi Biomeccanica</span>
                   </div>
                   <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-3">
                      <Zap className="text-[#55B4FF]" size={20} />
                      <span className="text-sm font-bold text-[#022166]">Terapia Manuale</span>
                   </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative p-10 bg-[#022166] rounded-[3rem] text-white shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                    <Move size={150} />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 tracking-tight italic">"Il ginocchio non è vecchio, è solo il modo in cui lavora che va aggiornato."</h3>
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#55B4FF] rounded-full"></div>
                      <p className="text-sm text-white/80 font-medium tracking-wide">Miglioramento visibile dalla 3° seduta</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#55B4FF] rounded-full"></div>
                      <p className="text-sm text-white/80 font-medium tracking-wide">Protocollo basato su linee guida NICE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROADMAP DI RECUPERO */}
          <section className="mb-32">
             <div className="bg-white p-10 md:p-20 rounded-[3rem] border border-slate-100 shadow-sm text-left">
                <div className="text-center max-w-2xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-6 text-center">Il tuo piano d'azione</h2>
                  <p className="text-slate-500 font-medium uppercase text-xs tracking-[0.2em] text-center">Semplice. Professionale. Efficace.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-16">
                  {[
                    { n: "01", t: "Valutazione", d: "Analizziamo non solo il ginocchio, ma come cammini e carichi il peso." },
                    { n: "02", t: "Sollievo", d: "Tecniche manuali per ridurre la pressione e dare respiro all'articolazione." },
                    { n: "03", t: "Autonomia", d: "Ti diamo gli strumenti per mantenere il risultato nel tempo." }
                  ].map((step, i) => (
                    <div key={i}>
                      <span className="text-4xl font-black text-[#55B4FF] block mb-4">/ {step.n}</span>
                      <h3 className="text-xl font-bold text-[#022166] mb-3">{step.t}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          {/* CTA FINALE */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group text-white text-left">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700 text-[#55B4FF]">
              <Waves size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Torna a vivere <br />
                <span className="text-[#55B4FF]">senza rassegnazione.</span>
              </h2>
              
              <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white transition-all active:scale-95"
              >
                Inizia il modulo sopra <ChevronRight className="inline ml-2" size={16} />
              </button>
              
              <div className="mt-12 flex items-center gap-4 text-white/40">
                 <AlertCircle size={16} />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Disponibilità limitata per prime valutazioni</span>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link href="/trattamenti" className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all">
              <ArrowLeft size={20} /> Tutti i trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Mirco Malavasi OMPT — Fisioterapia</span>
          </footer>

        </div>
      </div>
    </main>
  );
}
