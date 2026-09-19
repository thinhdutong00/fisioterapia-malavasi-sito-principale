import Link from "next/link";
import { Activity, ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
import { treatmentGroups } from "@/app/data/navigation";
import type { TreatmentHub } from "@/app/data/treatment-hubs";

export default function HubPage({ hub }: { hub: TreatmentHub }) {
  const group = treatmentGroups.find((item) => item.id === hub.id);
  return (
    <article className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-96 rounded-full bg-[#55B4FF]/5 blur-[100px] pointer-events-none" />
      <div className="relative pt-32 pb-20 px-4 md:px-6 max-w-6xl mx-auto">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tutti i trattamenti", href: "/trattamenti/tutti" }, { label: hub.title, href: hub.path }]} />
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#55B4FF]" /><p className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Il tuo movimento, il tuo percorso</p></div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-[#022166] mb-8">{hub.title}</h1>
          <p className="text-2xl md:text-3xl text-[#55B4FF] font-bold mb-6 tracking-tight">{hub.accent}</p>
          <p className="text-xl md:text-2xl leading-relaxed font-light text-slate-600 max-w-3xl">{hub.intro}</p>
        </header>
        <section className="mb-24" aria-labelledby="orientamento">
          <h2 id="orientamento" className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight mb-10">Riconoscere il proprio bisogno.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {hub.needs.map((need) => <div key={need.title} className="p-8 md:p-6 lg:p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm"><Activity size={28} className="text-[#55B4FF] mb-6" aria-hidden="true" /><h3 className="text-xl font-bold text-[#022166] mb-4 break-words">{need.title}</h3><p className="text-slate-500 leading-relaxed">{need.text}</p></div>)}
          </div>
        </section>
        <section id="trattamenti" className="mb-24 scroll-mt-32" aria-labelledby="percorsi">
          <h2 id="percorsi" className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight mb-4">Trova il tuo approfondimento.</h2>
          <p className="text-lg text-slate-600 mb-10">Parti dalla situazione che ti riguarda. La lettura orienta; la valutazione permette di definire il percorso.</p>
          <div className="grid md:grid-cols-2 gap-6">{group?.children?.map((item) => <Link key={item.href} href={item.href} prefetch={false} className="group flex flex-col justify-between gap-8 p-8 md:p-10 rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#022166]"><h3 className="text-2xl font-bold tracking-tight text-[#022166]">{item.label}</h3><span className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-[#55B4FF]">Scopri il percorso <ArrowUpRight size={20} aria-hidden="true" /></span></Link>)}</div>
        </section>
        <section className="mb-24 p-8 md:p-16 bg-white border border-slate-100 rounded-[3rem]">
          <div className="grid lg:grid-cols-2 gap-10 items-start"><div><CheckCircle2 size={32} className="text-[#55B4FF] mb-6" aria-hidden="true" /><h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight mb-6">Una valutazione.<br />Obiettivi condivisi.</h2></div><p className="text-lg text-slate-600 leading-relaxed">{hub.approach}</p></div>
        </section>
        <section className="bg-[#022166] text-white text-center rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Parliamo del tuo prossimo passo.</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">Raccontaci cosa limita le tue giornate. Insieme possiamo individuare da dove iniziare.</p>
          <Link href="/prenota" prefetch={false} className="inline-flex items-center justify-center gap-3 px-7 py-5 rounded-2xl bg-[#55B4FF] text-[#022166] text-xs font-black uppercase tracking-widest hover:bg-white transition-colors">Richiedi una valutazione <ChevronRight size={18} aria-hidden="true" /></Link>
        </section>
        <div className="mt-16"><Link href="/trattamenti/tutti" prefetch={false} className="font-bold text-[#022166] underline underline-offset-4">Esplora tutti i trattamenti</Link></div>
      </div>
    </article>
  );
}
