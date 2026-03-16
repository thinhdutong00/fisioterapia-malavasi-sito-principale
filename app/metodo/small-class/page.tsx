"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight,
  Users,
  Target,
  Dumbbell,
  HeartPulse,
  Clock,
  CheckCircle2,
  CalendarDays
} from 'lucide-react';

export default function SmallClassPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
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
            <Link href="/metodo" className="hover:text-[#022166] transition-colors text-[#022166] font-semibold">Modalità della seduta</Link>
            <ChevronRight size={14} />
            <span className="text-slate-400">SmallClass</span>
          </nav>

          {/* HEADER SEZIONE */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Exercise Medicine</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              SmallClass:<br />Il potere del <span className="text-[#55B4FF]">gruppo.</span>
            </h1>
          </header>

          {/* SEZIONE 1: COSA SONO */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  Definizione Clinica
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Cosa sono</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                  <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                    Le <strong className="font-bold text-[#022166]">SmallClass</strong> sono sessioni di esercizio terapeutico supervisionato, progettate per piccoli gruppi d'élite.
                  </p>
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium opacity-90">
                    Non si tratta di semplici lezioni di fitness, ma di protocolli basati sulla scienza del movimento (Da 1 a 5 membri). Sono percorsi studiati specificamente per contrastare patologie croniche come diabete, obesità, ipertensione, problematiche cardiovascolari, osteoporosi e per il supporto durante o dopo terapie oncologiche.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: PER CHI SONO PENSATE */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  Il movimento come cura
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight mb-6">A chi è rivolto</h2>
                <div className="inline-flex items-center gap-3 bg-[#022166] text-white px-6 py-3 rounded-2xl">
                  <Target size={18} className="text-[#55B4FF]" />
                  <span className="text-sm font-bold tracking-tight">Pazienti Selezionati</span>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#E0F2FE] p-8 rounded-[2rem] border border-white/50 transition-all hover:shadow-lg">
                    <h4 className="text-[#022166] font-bold text-lg mb-3">Post-Riabilitazione</h4>
                    <p className="text-[#022166]/70 text-sm leading-relaxed font-medium">
                      Per chi ha terminato il percorso riabilitativo individuale e desidera mantenere i risultati ottenuti in un ambiente sicuro.
                    </p>
                  </div>
                  <div className="bg-[#F3E8FF] p-8 rounded-[2rem] border border-white/50 transition-all hover:shadow-lg">
                    <h4 className="text-[#022166] font-bold text-lg mb-3">Gestione Cronicità</h4>
                    <p className="text-[#022166]/70 text-sm leading-relaxed font-medium">
                      Per chi vuole intraprendere un percorso preventivo o curativo basato sull'esercizio come medicina.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 3: I VANTAGGI - GRID LAYOUT */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-[2px] bg-[#55B4FF]"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166]">Plus Valore</span>
                </div>
                <h2 className="text-4xl font-bold text-[#022166] tracking-tight leading-none mb-6">
                  Perché scegliere<br />una SmallClass
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm">
                  <div className="space-y-10">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-[#DCFCE7] rounded-xl flex items-center justify-center text-[#166534] shrink-0">
                        <Users size={24} />
                      </div>
                      <div>
                        <h4 className="text-[#022166] font-bold text-xl mb-2">Rapporto 1:5</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">
                          A differenza delle palestre commerciali, garantiamo un massimo di 5 partecipanti per classe. Questo permette al fisioterapista di correggere ogni singolo movimento in tempo reale.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-[#E0F2FE] rounded-xl flex items-center justify-center text-[#0369a1] shrink-0">
                        <HeartPulse size={24} />
                      </div>
                      <div>
                        <h4 className="text-[#022166] font-bold text-xl mb-2">Supervisione Clinica</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">
                          Ogni lezione è guidata da un fisioterapista esperto in patologie muscolo-scheletriche, non da un semplice istruttore. Hai un professionista sanitario a tua disposizione ad ogni incontro.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-[#F3E8FF] rounded-xl flex items-center justify-center text-[#7e22ce] shrink-0">
                        <Dumbbell size={24} />
                      </div>
                      <div>
                        <h4 className="text-[#022166] font-bold text-xl mb-2">Palestra Riabilitativa</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">
                          Le attività si svolgono all'interno della nostra struttura, utilizzando attrezzature specifiche per la riabilitazione e il recupero funzionale.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 4: DETTAGLI LOGISTICI */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight mb-4">Organizzazione.</h2>
                <p className="text-slate-500 font-medium">Standard elevati per risultati concreti.</p>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-6 bg-white border border-slate-100 rounded-2xl flex flex-col gap-4">
                    <Clock className="text-[#55B4FF]" size={24} />
                    <span className="text-xs font-black uppercase tracking-widest text-[#022166]">Durata</span>
                    <p className="text-sm font-bold text-slate-500">60 minuti circa per sessione</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-2xl flex flex-col gap-4">
                    <CalendarDays className="text-[#55B4FF]" size={24} />
                    <span className="text-xs font-black uppercase tracking-widest text-[#022166]">Frequenza</span>
                    <p className="text-sm font-bold text-slate-500">Lunedì — Venerdì in orari fissi</p>
                  </div>
                  <div className="p-6 bg-white border border-slate-100 rounded-2xl flex flex-col gap-4">
                    <CheckCircle2 className="text-[#55B4FF]" size={24} />
                    <span className="text-xs font-black uppercase tracking-widest text-[#022166]">Qualità</span>
                    <p className="text-sm font-bold text-slate-500">Min 3 — Max 5 partecipanti</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA SEZIONE */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Users size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Inizia il tuo percorso</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Prenota il tuo posto <br />
                <span className="text-[#55B4FF]">nella prossima classe.</span>
              </h3>
              
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed max-w-xl">
                La qualità del servizio richiede una pianificazione anticipata. Assicurati il tuo spazio nel gruppo guidato dai nostri fisioterapisti.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:shadow-[0_20px_40px_rgba(85,180,255,0.2)] transition-all active:scale-95"
                >
                  Richiedi Iscrizione
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
                >
                  Info Orari
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER NAVIGATION */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/metodo" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna a Modalità
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Palestra Riabilitativa</span>
          </div>

        </div>
      </div>
    </main>
  );
}