"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Star, ChevronRight, Activity, 
  ShieldCheck, Zap, Clock, Waves, 
  Target, Info, HeartPulse, Microscope, CheckCircle2
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function LesioniMeniscaliAdsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVO - Brand Blue Identity */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb - Importante per la navigazione Ads */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Lesioni Meniscali</span>
          </nav>

          {/* HEADER SEZIONE - STRATEGIA ADS: SOLUZIONE IMMEDIATA AL DUBBIO */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Approccio Conservativo Specialistico</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Lesione al Menisco: <br /><span className="text-[#55B4FF]">Recupera senza fretta di operare.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Sappiamo quanto possa spaventare l'idea di un intervento. La moderna fisioterapia OMPT offre percorsi personalizzati per stabilizzare il ginocchio, eliminare il dolore e tornare allo sport in sicurezza.
            </p>
          </header>

          {/* SEZIONE EMPATICA - STRATEGIA ADS: IDENTIFICAZIONE DEL PROBLEMA */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="bg-[#E0F2FE] p-8 rounded-[2rem] border border-blue-100">
                   <Info className="text-[#022166] mb-4" size={28} />
                   <h2 className="text-2xl font-bold text-[#022166] leading-tight mb-4">Ti senti bloccato?</h2>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Il dolore meniscale può essere invalidante, ma la chirurgia non è l'unica strada. Molte lesioni possono essere gestite con successo attraverso il rinforzo neuromuscolare.
                   </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-[#022166] mb-8 tracking-tight">Perché la nostra valutazione fa la differenza:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { t: "Diagnosi Funzionale", d: "Capiamo se la lesione è la vera causa del dolore o se dipende da un compenso biomeccanico." },
                      { t: "Riduzione Infiammazione", d: "Tecniche manuali per drenare l'edema e ridurre la pressione intra-articolare." },
                      { t: "Stabilità Dinamica", d: "Esercizi mirati per rendere i muscoli i nuovi 'ammortizzatori' del tuo ginocchio." },
                      { t: "Piano Personalizzato", d: "Niente protocolli standard. Solo quello che serve davvero al tuo stile di vita." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <CheckCircle2 className="text-[#55B4FF] flex-shrink-0" size={20} />
                        <div>
                          <h4 className="font-bold text-[#022166] text-sm uppercase tracking-wide">{item.t}</h4>
                          <p className="text-slate-500 text-sm">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE VALORE CLINICO (OMPT) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#F1F5F9] text-[#022166] px-4 py-2 rounded-full mb-8">
                  <Microscope size={16} className="text-[#55B4FF]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Evidenze Scientifiche 2026</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  Trattamento <br /><span className="text-[#55B4FF]">Conservativo vs Chirurgia.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  Le linee guida internazionali suggeriscono che la fisioterapia dovrebbe essere il primo passo. Il nostro obiettivo è preservare il tessuto meniscale originale, fondamentale per prevenire l'artrosi precoce.
                </p>
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100">
                      <Zap className="text-[#55B4FF]" size={24} />
                      <span className="font-bold text-[#022166]">Recupero accelerato per atleti e amatori</span>
                   </div>
                   <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100">
                      <Target className="text-[#55B4FF]" size={24} />
                      <span className="font-bold text-[#022166]">Esercizi sport-specifici basati sul tuo obiettivo</span>
                   </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative rounded-[3rem] overflow-hidden bg-[#022166] p-12 text-white min-h-[400px] flex flex-col justify-center">
                  <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Activity size={200} />
                  </div>
                  <h4 className="text-3xl font-bold mb-6 tracking-tight">"Il movimento è la cura, se guidato dalla scienza."</h4>
                  <p className="text-white/70 italic text-lg leading-relaxed">
                    Ogni giorno aiutiamo decine di pazienti a evitare interventi non necessari, riportandoli a correre, sciare o semplicemente a camminare senza pensieri.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROTOCOLLO IN 3 STEP (STRUTTURA FUNNEL) */}
          <section className="mb-32">
             <div className="bg-white p-10 md:p-20 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="text-center max-w-2xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-6">Il tuo percorso <br />verso la guarigione</h2>
                  <p className="text-slate-500 font-medium">Un approccio empatico e professionale in tre fasi chiare.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
                  {[
                    { n: "01", icon: Microscope, t: "Diagnosi", d: "Valutazione clinica profonda per capire la stabilità del menisco e i tuoi limiti attuali." },
                    { n: "02", icon: Zap, t: "Protezione", d: "Gestione del dolore e del gonfiore attraverso terapia manuale e consigli posturali." },
                    { n: "03", icon: HeartPulse, t: "Ritorno", d: "Rinforzo muscolare progressivo per tornare alle tue attività senza recidive." }
                  ].map((step, i) => (
                    <div key={i} className="relative group">
                      <div className="text-[70px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0">{step.n}</div>
                      <step.icon className="text-[#55B4FF] mb-6 mx-auto md:mx-0" size={40} />
                      <h4 className="text-xl font-bold text-[#022166] mb-4">{step.t}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          {/* CALL TO ACTION - OTTIMIZZATA PER CONVERSIONE ADS */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700 text-[#55B4FF]">
              <Waves size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi — Specialisti della Clinica</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Non lasciare che il <br />
                <span className="text-[#55B4FF]">dolore decida per te.</span>
              </h3>
              
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed max-w-xl">
                Scegli una consulenza specialistica. Insieme valuteremo la strategia migliore per proteggere il tuo ginocchio.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="https://www.fisioterapiamalavasi.it/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:shadow-[0_20px_40px_rgba(85,180,255,0.3)] transition-all active:scale-95"
                >
                  Prenota la Valutazione
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
                >
                  Chiedi un Consiglio
                </a>
              </div>
              
              <p className="mt-10 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                Risposta garantita entro 24 ore — Professionalità e Riservatezza
              </p>
            </div>
          </section>

          {/* FOOTER NAVIGATION */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Torna ai Trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Soluzioni Cliniche Certificate</span>
          </div>

        </div>
      </div>
    </main>
  );
}