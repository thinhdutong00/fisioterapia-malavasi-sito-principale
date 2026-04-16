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
      
      {/* BACKGROUND DECORATIVO - Coerente con Brand Hub */}
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
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Gonartrosi</span>
          </nav>

          {/* HEADER SEZIONE - STRATEGIA: VALIDAZIONE DEL PROBLEMA */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Riabilitazione Specialistica Ginocchio</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Gonartrosi: <br />Non fermare il <span className="text-[#55B4FF]">movimento.</span>
            </h1>
            <p className="max-w-2xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              L'usura della cartilagine non è una condanna alla sedentarietà. Gestisci il dolore e recupera la tua autonomia con un percorso basato sulle più recenti evidenze scientifiche.
            </p>
          </header>

          {/* SEZIONE 1: CLINICAL COPYWRITING (DEMISTIFICAZIONE) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  Analisi Biomeccanica
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Oltre la radiografia.</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl">
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Molte persone credono che l'artrosi sia un semplice "consumo" irreversibile. In realtà, la ricerca scientifica dimostra che il dolore è causato da un <strong>deficit di carico</strong> e da un'infiammazione dei tessuti molli. 
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mt-10">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h4 className="font-bold text-[#022166] mb-2 uppercase text-xs tracking-wider">Segnali d'allarme</h4>
                      <ul className="text-sm text-slate-500 space-y-2">
                        <li>• Dolore mattutino che "si scalda" muovendosi</li>
                        <li>• Difficoltà marcata nel fare le scale</li>
                        <li>• Gonfiore dopo una passeggiata prolungata</li>
                        <li>• Cedimenti improvvisi dell'articolazione</li>
                      </ul>
                    </div>
                    <div className="p-6 bg-[#022166]/5 rounded-2xl border border-[#022166]/10">
                      <h4 className="font-bold text-[#022166] mb-2 uppercase text-xs tracking-wider">Il nostro Focus</h4>
                      <ul className="text-sm text-slate-500 space-y-2">
                        <li>• Ottimizzazione della lubrificazione articolare</li>
                        <li>• Rinforzo selettivo del quadricipite</li>
                        <li>• Miglioramento della stabilità dinamica</li>
                        <li>• Prevenzione della protesizzazione precoce</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: IL METODO OMPT (CORE SOLUTION) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#E0F2FE] text-[#022166] px-4 py-2 rounded-full mb-8">
                  <Microscope size={16} className="text-[#55B4FF]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Protocollo EBM</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  L'esercizio è la <br /><span className="text-[#55B4FF]">vera medicina.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Attraverso la Terapia Manuale OMPT e il carico progressivo, insegniamo al tuo ginocchio a gestire nuovamente le forze. Non si tratta di riposo, ma di <strong>movimento intelligente</strong>.
                </p>
                <ul className="space-y-4">
                  {[
                    "Tecniche di trazione per il sollievo immediato",
                    "Esercizi a catena cinetica chiusa per la stabilità",
                    "Programma di 'Pre-abilitazione' all'intervento (se necessario)",
                    "Rieducazione propriocettiva per l'equilibrio"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#022166] font-bold italic">
                      <ShieldCheck size={20} className="text-[#55B4FF]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="bg-[#022166] p-8 rounded-[2rem] text-white flex flex-col justify-end min-h-[250px]">
                  <Move className="mb-4 text-[#55B4FF]" size={40} />
                  <h4 className="font-bold text-xl leading-tight">Recupero Range Articolare</h4>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-end min-h-[250px]">
                  <HeartPulse className="mb-4 text-[#022166]" size={40} />
                  <h4 className="font-bold text-xl text-[#022166] leading-tight">Potenziamento Funzionale</h4>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 3: IL FUNNEL (ROADMAP) */}
          <section className="mb-32">
             <div className="bg-white p-10 md:p-20 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="text-center max-w-2xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-6">Come agiremo sul <br />tuo ginocchio?</h2>
                  <p className="text-slate-500 font-medium italic">Tre fasi cliniche per tornare alla tua vita quotidiana.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#022166]/5 absolute top-[-40px] left-0">01</div>
                    <Activity className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Valutazione OMPT</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Test di forza e mobilità per quantificare il grado di disfunzione meccanica.</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#022166]/5 absolute top-[-40px] left-0">02</div>
                    <Zap className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Desensibilizzazione</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Terapia manuale mirata a ridurre lo stato infiammatorio e la rigidità capsulare.</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#022166]/5 absolute top-[-40px] left-0">03</div>
                    <Dna className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Carico Adattivo</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Programma di esercizi personalizzati per rendere il ginocchio "resiliente" agli sforzi.</p>
                  </div>
                </div>
             </div>
          </section>

          {/* CTA FINALE - CONVERSIONE */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700 text-[#55B4FF]">
              <Activity size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi — Focus Ginocchio</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Riprendi in mano <br />
                <span className="text-[#55B4FF]">la tua libertà.</span>
              </h3>
              
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed max-w-xl">
                Non rassegnarti al dolore cronico. Prenota una valutazione e scopri come migliorare la salute delle tue articolazioni.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="https://www.fisioterapiamalavasi.it/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:shadow-xl transition-all active:scale-95"
                >
                  Prenota Valutazione
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
                >
                  Richiedi Informazioni
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER NAVIGATION */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Altri Trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Scienza del Movimento</span>
          </div>

        </div>
      </div>
    </main>
  );
}