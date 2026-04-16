"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Star, ChevronRight, Activity, 
  ShieldCheck, Zap, Clock, Waves, 
  Dna, Move, HeartPulse, Microscope
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function GonartrosiPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#642d3a]/3 rounded-full blur-[100px]"></div>
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
            <Link href="/trattamenti/patologie-ginocchio" className="hover:text-[#022166] transition-colors">Ginocchio</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Gonartrosi</span>
          </nav>

          {/* HEADER SEZIONE */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#642d3a]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#642d3a]">Specialisti della cartilagine</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Gonartrosi: <br />Torna a <span className="text-[#642d3a]">camminare</span> bene.
            </h1>
            <p className="max-w-2xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              L'usura del ginocchio non deve fermare la tua vita. Attraverso il protocollo OMPT, riduciamo il dolore e miglioriamo la mobilità senza dipendere solo dai farmaci.
            </p>
          </header>

          {/* SEZIONE 1: COMPRENDERE LA PATOLOGIA */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  Oltre l'usura
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Cos'è davvero l'artrosi?</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm">
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    La gonartrosi non è un semplice "consumo" inevitabile, ma un processo infiammatorio e degenerativo che coinvolge l'intera articolazione. 
                    <strong> Il dolore non è proporzionale al danno radiografico:</strong> molte persone con ginocchia "usurate" vivono senza dolore grazie a un'ottima gestione funzionale.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mt-10">
                    <div className="p-6 bg-slate-50 rounded-2xl">
                      <h4 className="font-bold text-[#022166] mb-2">Sintomi Tipici</h4>
                      <ul className="text-sm text-slate-500 space-y-2">
                        <li>• Rigidità al risveglio</li>
                        <li>• Dolore scendendo le scale</li>
                        <li>• Gonfiore dopo sforzi</li>
                        <li>• Sensazione di "sabbiolina"</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl">
                      <h4 className="font-bold text-[#022166] mb-2">Il nostro obiettivo</h4>
                      <ul className="text-sm text-slate-500 space-y-2">
                        <li>• Ridurre il carico articolare</li>
                        <li>• Rinforzare i muscoli di sostegno</li>
                        <li>• Evitare o posticipare la chirurgia</li>
                        <li>• Migliorare la qualità del cammino</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: APPROCCIO OMPT (IL VALORE CLINICO) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#ffefcc] text-[#642d3a] px-4 py-2 rounded-full mb-8">
                  <Microscope size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Evidence Based Practice</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  Trattare la funzione, <br /><span className="text-[#642d3a]">non solo il danno.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Le linee guida internazionali indicano che l'esercizio terapeutico e la terapia manuale sono la <strong>prima scelta</strong> per la gonartrosi. Non si tratta di "fare ginnastica", ma di ricalibrare come il tuo ginocchio riceve il peso del corpo.
                </p>
                <ul className="space-y-4">
                  {[
                    "Mobilizzazioni per recuperare i gradi di estensione",
                    "Esercizio di carico progressivo (Glazing)",
                    "Gestione del peso e del micro-edema osseo",
                    "Rieducazione del passo e dell'equilibrio"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#022166] font-bold">
                      <ShieldCheck size={20} className="text-[#642d3a]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="bg-[#642d3a] p-8 rounded-[2rem] text-white flex flex-col justify-end min-h-[250px]">
                  <Move className="mb-4 text-[#ffefcc]" size={40} />
                  <h4 className="font-bold text-xl leading-tight">Mobilità Articolare</h4>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-end min-h-[250px]">
                  <HeartPulse className="mb-4 text-[#642d3a]" size={40} />
                  <h4 className="font-bold text-xl text-[#022166] leading-tight">Forza Stabilizzatrice</h4>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 3: PROTOCOLLO CLINICO */}
          <section className="mb-32">
             <div className="bg-white p-10 md:p-20 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="text-center max-w-2xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-6">Il tuo percorso <br />di rinascita.</h2>
                  <p className="text-slate-500 font-medium italic">Un protocollo scientifico per un'articolazione più giovane.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#642d3a]/5 absolute top-[-40px] left-0">01</div>
                    <Activity className="text-[#642d3a] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Analisi Funzionale</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Valutiamo non solo il ginocchio, ma anche anca e caviglia per capire dove si originano i compensi dolorosi.</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#642d3a]/5 absolute top-[-40px] left-0">02</div>
                    <Zap className="text-[#642d3a] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Controllo del Dolore</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Tecniche manuali e consigli posturali per abbassare immediatamente l'infiammazione acuta.</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#642d3a]/5 absolute top-[-40px] left-0">03</div>
                    <Dna className="text-[#642d3a] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Rinforzo e Carico</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Alleniamo il ginocchio a sopportare il peso in modo corretto, proteggendo la cartilagine residua.</p>
                  </div>
                </div>
             </div>
          </section>

          {/* RECENSIONI (Mantenuto lo stile della pagina precedente) */}
          {/* ... (Codice Swiper recensioni uguale a Lombalgia, adattato con nomi se necessario) ... */}

          {/* CTA FINALE */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700 text-[#642d3a]">
              <Waves size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#642d3a]"></div>
                <span className="text-[#642d3a] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi — Specialisti Ginocchio</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Proteggi il tuo <br />
                <span className="text-[#ffefcc]">futuro motorio.</span>
              </h3>
              
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed max-w-xl">
                La gonartrosi è un viaggio, non una destinazione. Scegli di percorrerlo con i giusti specialisti.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="/prenota" 
                  className="bg-[#642d3a] text-white px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-[#ffefcc] hover:text-[#642d3a] transition-all active:scale-95"
                >
                  Prenota Valutazione Ginocchio
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
                >
                  Parla con un Fisioterapista
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER NAVIGATION */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link href="/trattamenti/patologie-ginocchio" className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all">
              <ArrowLeft size={20} /> Patologie Ginocchio
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Clinica Malavasi — OMPT Certified</span>
          </div>

        </div>
      </div>
    </main>
  );
}