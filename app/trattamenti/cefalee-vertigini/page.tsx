"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ChevronRight,
  Activity,
  ArrowUpRight, 
  ShieldCheck, 
  Brain,
  Sparkles,
  Target,
  RefreshCw,
  Search
} from 'lucide-react';

export default function CervicalgiaPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND - Coerente con il design system */}
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
            <span className="text-[#022166] font-semibold">Cervicalgia e Disturbi Correlati</span>
          </nav>

          {/* HEADER SEZIONE - EMPATHY HOOK */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Soluzioni per il tratto cervicale</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Ritrova la <br />libertà di <span className="text-[#55B4FF]">guardare lontano.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Dalla tensione muscolare alle vertigini: un approccio mirato per eliminare il dolore e restituire leggerezza al tuo collo.
            </p>
          </header>

          {/* SEZIONE 1: IDENTIFICAZIONE DEL PROBLEMA (INFORMATIVO) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  Oltre il semplice dolore
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Cosa stai provando?</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-[#E0F2FE] rounded-xl flex items-center justify-center text-[#022166]"><Target size={20}/></div>
                      <h4 className="font-bold text-[#022166]">Rigidità</h4>
                      <p className="text-sm text-slate-500">Difficoltà nel ruotare il capo e tensione costante alle spalle.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-[#F3E8FF] rounded-xl flex items-center justify-center text-[#022166]"><Brain size={20}/></div>
                      <h4 className="font-bold text-[#022166]">Cefalee</h4>
                      <p className="text-sm text-slate-500">Mal di testa che partono dalla nuca e si irradiano verso la fronte.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-[#DCFCE7] rounded-xl flex items-center justify-center text-[#022166]"><RefreshCw size={20}/></div>
                      <h4 className="font-bold text-[#022166]">Sbandamenti</h4>
                      <p className="text-sm text-slate-500">Senso di instabilità o vertigini legate ai movimenti del collo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: LA SOLUZIONE - TERAPIA MANUALE SPECIFICA (CORE VALUE) */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#FEF9C3] text-[#022166] px-4 py-2 rounded-full mb-8">
                  <Sparkles size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Precisione Terapeutica</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  Agire dove <br /><span className="text-[#55B4FF]">serve davvero.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                  Il tratto cervicale è delicato e complesso. Utilizziamo tecniche di <strong>Terapia Manuale</strong> gentili ma profonde per ripristinare il corretto scorrimento dei tessuti e la libertà articolare.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[#55B4FF] p-1 rounded-full text-white"><ShieldCheck size={14}/></div>
                    <div>
                      <h4 className="text-[#022166] font-bold">Mobilizzazione Articolare</h4>
                      <p className="text-sm text-slate-500">Per liberare le vertebre "bloccate" e ridurre la compressione nervosa.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[#55B4FF] p-1 rounded-full text-white"><ShieldCheck size={14}/></div>
                    <div>
                      <h4 className="text-[#022166] font-bold">Rilascio Miofasciale</h4>
                      <p className="text-sm text-slate-500">Per sciogliere i nodi muscolari (Trigger Points) accumulati con lo stress e la postura.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-6">
                 <div className="relative p-8 bg-white rounded-[3rem] border border-slate-100 shadow-2xl">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#55B4FF] rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                       <Search size={32} />
                    </div>
                    <h4 className="text-[#022166] font-black text-xl mb-6">Il Focus Clinico</h4>
                    <p className="text-slate-500 leading-relaxed italic mb-8">
                      "Non ci limitiamo a massaggiare il collo. Analizziamo la postura davanti al PC, lo stile di vita e lo stato del sistema nervoso per dare una soluzione che duri nel tempo."
                    </p>
                    <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-50">
                       <span className="text-[10px] font-black text-[#55B4FF] uppercase tracking-widest">Obiettivo</span>
                       <p className="text-[#022166] font-bold">Eliminare la causa, non solo il sintomo.</p>
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 3: I 3 STEP PER LA GUARIGIONE (FUNNEL) */}
          <section className="mb-32">
             <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Analisi", desc: "Test clinici per distinguere tra cervicalgia muscolare, articolare o neurologica.", icon: <Search/>, color: "bg-blue-50" },
                  { title: "Sollievo", desc: "Intervento manuale immediato per disattivare il dolore acuto e la rigidità.", icon: <Sparkles/>, color: "bg-purple-50" },
                  { title: "Controllo", desc: "Esercizi posturali specifici per rinforzare i muscoli che sostengono il capo.", icon: <Activity/>, color: "bg-green-50" }
                ].map((step, i) => (
                  <div key={i} className={`${step.color} p-12 rounded-[2.5rem] border border-white transition-transform hover:-translate-y-2 duration-500`}>
                    <div className="text-[#022166] mb-6">{step.icon}</div>
                    <h4 className="text-2xl font-bold text-[#022166] mb-4">{step.title}</h4>
                    <p className="text-sm text-[#022166]/60 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* SEZIONE FINALE: CALL TO ACTION - CONVERSIONE */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Activity size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi — Specialisti del Tratto Cervicale</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Dì addio alla <br />
                <span className="text-[#55B4FF]">tensione al collo.</span>
              </h3>
              
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed max-w-xl">
                Prenota ora la tua valutazione specialistica e torna a muoverti con leggerezza e lucidità.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link 
                  href="https://www.fisioterapiamalavasi.it/prenota" 
                  className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white hover:shadow-xl transition-all active:scale-95"
                >
                  Inizia il tuo Recupero
                </Link>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
                >
                  Parlaci del tuo dolore
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
              <ArrowLeft size={20} /> Torna ai Trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Hub Clinico — Fisioterapia e Riabilitazione</span>
          </div>

        </div>
      </div>
    </main>
  );
}