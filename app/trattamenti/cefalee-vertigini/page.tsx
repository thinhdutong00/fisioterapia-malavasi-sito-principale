"use client";

import Link from 'next/link';
import NewAssessmentForm from '@/app/components/new-pages/NewAssessmentForm';
import { assessmentPresets } from '@/app/data/booking';

import { 
  ArrowLeft, 
  ChevronRight,
  Activity,
  Star,
  ShieldCheck, 
  Brain,
  Sparkles,
  Target,
  RefreshCw,
  Search
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function CefaleeVertiginiPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND */}
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

          {/* HERO SECTION CON MODULO */}
          <header className="mb-24 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Soluzioni per il tratto cervicale</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
                Cervicalgia,<br />mal di testa <span className="text-[#55B4FF]">e vertigini.</span>
              </h1>
              <p className="max-w-xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                Dalla tensione muscolare alle vertigini: un approccio mirato per eliminare il dolore e restituire leggerezza al tuo collo.
              </p>
              <div className="bg-white/50 border border-slate-100 p-6 rounded-2xl backdrop-blur-sm max-w-md">
                <p className="text-sm text-slate-500 italic">"Il 90% delle cefalee muscolo-tensive può essere risolto con un corretto inquadramento del tratto cervicale superiore."</p>
              </div>
            </div>

            <NewAssessmentForm config={assessmentPresets["/trattamenti/cefalee-vertigini"]} />
          </header>

          {/* SEZIONE 1: IDENTIFICAZIONE DEL PROBLEMA */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">Oltre il semplice dolore</span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Cosa stai provando?</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-[#E0F2FE] rounded-xl flex items-center justify-center text-[#022166]"><Target size={20}/></div>
                      <h3 className="font-bold text-[#022166]">Rigidità</h3>
                      <p className="text-sm text-slate-500">Difficoltà nel ruotare il capo e tensione costante alle spalle.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-[#F3E8FF] rounded-xl flex items-center justify-center text-[#022166]"><Brain size={20}/></div>
                      <h3 className="font-bold text-[#022166]">Cefalee</h3>
                      <p className="text-sm text-slate-500">Mal di testa che partono dalla nuca e si irradiano verso la fronte.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-10 h-10 bg-[#DCFCE7] rounded-xl flex items-center justify-center text-[#022166]"><RefreshCw size={20}/></div>
                      <h3 className="font-bold text-[#022166]">Sbandamenti</h3>
                      <p className="text-sm text-slate-500">Senso di instabilità o vertigini legate ai movimenti del collo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: LA SOLUZIONE */}
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
                      <h3 className="text-[#022166] font-bold">Mobilizzazione Articolare</h3>
                      <p className="text-sm text-slate-500">Per liberare le vertebre "bloccate" e ridurre la compressione nervosa.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-[#55B4FF] p-1 rounded-full text-white"><ShieldCheck size={14}/></div>
                    <div>
                      <h3 className="text-[#022166] font-bold">Rilascio Miofasciale</h3>
                      <p className="text-sm text-slate-500">Per sciogliere i nodi muscolari (Trigger Points) accumulati con lo stress.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                 <div className="relative p-8 bg-white rounded-[3rem] border border-slate-100 shadow-2xl">
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#55B4FF] rounded-full flex items-center justify-center text-white shadow-lg">
                       <Search size={32} />
                    </div>
                    <h3 className="text-[#022166] font-black text-xl mb-6">Il Focus Clinico</h3>
                    <p className="text-slate-500 leading-relaxed italic mb-8">"Non ci limitiamo a massaggiare il collo. Analizziamo la postura davanti al PC, lo stile di vita e lo stato del sistema nervoso per dare una soluzione che duri nel tempo."</p>
                    <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-50">
                       <span className="text-[10px] font-black text-[#55B4FF] uppercase tracking-widest">Obiettivo</span>
                       <p className="text-[#022166] font-bold">Eliminare la causa, non solo il sintomo.</p>
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 3: I 3 STEP */}
          <section className="mb-32">
             <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Analisi", desc: "Test clinici per distinguere tra cervicalgia muscolare, articolare o neurologica.", icon: <Search/>, color: "bg-blue-50" },
                  { title: "Sollievo", desc: "Intervento manuale immediato per disattivare il dolore acuto e la rigidità.", icon: <Sparkles/>, color: "bg-purple-50" },
                  { title: "Controllo", desc: "Esercizi posturali specifici per rinforzare i muscoli che sostengono il capo.", icon: <Activity/>, color: "bg-green-50" }
                ].map((step, i) => (
                  <div key={i} className={`${step.color} p-12 rounded-[2.5rem] border border-white transition-transform hover:-translate-y-2 duration-500`}>
                    <div className="text-[#022166] mb-6">{step.icon}</div>
                    <h3 className="text-2xl font-bold text-[#022166] mb-4">{step.title}</h3>
                    <p className="text-sm text-[#022166]/60 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                ))}
             </div>
          </section>

          {/* RECENSIONI */}
          <section id="recensioni" className="relative min-h-screen w-full py-16 md:py-32 px-4 overflow-hidden bg-transparent flex items-center">
            <div className="absolute inset-0 pointer-events-none opacity-30 md:opacity-40">
              <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-[#55B4FF]/10 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-5%] right-[-10%] w-[500px] h-[500px] bg-[#022166]/5 rounded-full blur-[120px]"></div>
            </div>
            <div className="max-w-7xl mx-auto w-full relative z-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-24 gap-10 text-center lg:text-left">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 mb-6">
                    <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#022166]">Recensioni Verificate</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-bold text-[#022166] tracking-tighter">La parola ai <br />nostri <span className="text-[#55B4FF]">Pazienti.</span></h2>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-white flex items-center gap-8">
                  <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg className="w-8 h-8" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  </div>
                  <div>
                    <div className="flex gap-0.5 text-yellow-400 mb-1">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" stroke="none" />)}</div>
                    <p className="text-[#022166] font-black text-xl tracking-tighter">5.0 Eccellenza</p>
                  </div>
                </div>
              </div>
              <div className="relative group"><Swiper modules={[Autoplay, Pagination]} spaceBetween={30} slidesPerView={1} autoplay={{ delay: 6000 }} pagination={{ clickable: true, el: '.swiper-pagination-custom' }} breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }} className="!pb-24 !overflow-visible">
                {[
                  { n: "Elisa Cavazzoli", t: "Con Mirco mi sono trovata bene fin da subito. È ATTENTO e molto preparato. Con i giusti esercizi sono riuscita a risolvere il mio problema al collo, sono molto contenta!", d: "1 anno fa" },
                  { n: "Federico Zagni", t: "Professionista e collega di alto livello! Grande empatia e professionalità nel trattare disturbi complessi.", d: "3 settimane fa" },
                  { n: "Edoardo Marchesi", t: "Ho portato mia mamma da lui perchè faceva fatica a camminare per le vertigini, ha acquisito molta più sicurezza. Grazie Mirco", d: "1 anno fa" }
                ].map((rev, i) => (
                  <SwiperSlide key={i} className="!h-auto flex"><div className="bg-white p-12 rounded-[3rem] border border-slate-100 h-full flex flex-col shadow-sm relative w-full">
                    <div className="flex gap-1 text-yellow-400 mb-8">{[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" stroke="none" />)}</div>
                    <blockquote className="flex-grow"><p className="text-[#022166]/80 font-medium text-lg italic">"{rev.t}"</p></blockquote>
                    <div className="flex items-center gap-5 mt-12 pt-8 border-t border-slate-50"><div className="w-14 h-14 bg-gradient-to-br from-[#022166] to-[#55B4FF] rounded-2xl flex items-center justify-center text-white font-black text-xl">{rev.n[0]}</div><div><p className="font-bold text-[#022166] text-lg leading-tight mb-1">{rev.n}</p><p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.1em]">{rev.d}</p></div></div>
                  </div></SwiperSlide>))}
                </Swiper><div className="swiper-pagination-custom flex justify-center mt-2 gap-2"></div></div>
            </div>
          </section>

          {/* CTA FINALE */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700"><Activity size={400} /></div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6"><div className="h-[1px] w-8 bg-[#55B4FF]"></div><span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi — Specialisti del Tratto Cervicale</span></div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">Dì addio alla <br /><span className="text-[#55B4FF]">tensione al collo.</span></h2>
              <p className="text-white/60 text-xl mb-12 font-light max-w-xl">Prenota ora la tua valutazione specialistica e torna a muoverti con leggerezza e lucidità.</p>
              <div className="flex flex-wrap gap-6">
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white transition-all">Inizia il tuo Recupero</button>
                <a href="tel:+393338225464" className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all">Parlaci del tuo dolore</a>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link href="/trattamenti" className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"><ArrowLeft size={20} /> Torna ai Trattamenti</Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Hub Clinico — Fisioterapia e Riabilitazione</span>
          </div>
        </div>
      </div>
    </main>
  );
}
