import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/app/components/new-pages/Breadcrumbs";
import { specialistItems, treatmentGroups } from "@/app/data/navigation";
import type { NavItem } from "@/app/data/navigation";
import { pageMetadata } from "@/app/lib/page-seo";

export const metadata = pageMetadata("Tutti i trattamenti e percorsi", "Esplora i trattamenti per distretto corporeo e i percorsi specialistici dello Studio Malavasi. Trova le informazioni pertinenti e richiedi una valutazione.", "/trattamenti/tutti");

function DirectoryCard({ item }: { item: NavItem }) {
  return (
    <div className="bg-white p-7 md:p-6 xl:p-9 rounded-[2rem] border border-slate-100 shadow-sm">
      <h3 className="text-2xl font-bold tracking-tight text-[#022166] mb-6"><Link href={item.href} prefetch={false} className="flex items-start justify-between gap-4 hover:text-[#55B4FF] focus-visible:outline-2 focus-visible:outline-offset-4"><span className="min-w-0 break-words">{item.label}</span><ArrowUpRight size={22} className="shrink-0 mt-1" aria-hidden="true" /></Link></h3>
      {item.children && <ul className="space-y-1">{item.children.map((child) => <li key={child.id}><Link href={child.href} prefetch={false} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed py-2 hover:text-[#022166] hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"><ChevronRight size={15} className="shrink-0 mt-1 text-[#55B4FF]" aria-hidden="true" />{child.label}</Link></li>)}</ul>}
    </div>
  );
}

export default function TreatmentDirectory() {
  return (
    <article className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans">
      <div className="max-w-6xl mx-auto pt-32 pb-20 px-4 md:px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tutti i trattamenti", href: "/trattamenti/tutti" }]} />
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#55B4FF]" /><p className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Orientarsi, insieme</p></div>
          <h1 className="text-5xl md:text-8xl text-[#022166] font-bold leading-[0.95] tracking-tighter mb-10">Tutti i trattamenti.<br /><span className="text-[#55B4FF]">Il tuo punto di partenza.</span></h1>
          <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">Una mappa per trovare il percorso più vicino al tuo bisogno. Puoi partire dalla parte del corpo che ti limita oppure da una situazione clinica specifica.</p>
          <div className="flex flex-wrap gap-4 mt-8 text-sm font-bold text-[#022166]"><a href="#distretti" className="bg-white border border-slate-200 rounded-xl px-5 py-3 hover:border-[#022166]">Distretti corporei</a><a href="#percorsi-specialistici" className="bg-white border border-slate-200 rounded-xl px-5 py-3 hover:border-[#022166]">Percorsi specialistici</a></div>
        </header>
        <section id="distretti" className="scroll-mt-36 mb-24" aria-labelledby="distretti-heading">
          <h2 id="distretti-heading" className="text-3xl md:text-5xl font-bold tracking-tight text-[#022166] mb-10">Da dove nasce il tuo bisogno?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">{treatmentGroups.map((item) => <DirectoryCard key={item.id} item={item} />)}</div>
        </section>
        <section id="percorsi-specialistici" className="scroll-mt-36 mb-24" aria-labelledby="specialistici-heading">
          <h2 id="specialistici-heading" className="text-3xl md:text-5xl font-bold tracking-tight text-[#022166] mb-6">Percorsi specialistici.</h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-10">Obiettivi e modalità cambiano con la tua storia. Queste aree raccolgono percorsi sportivi, chirurgici, neurologici e oncologici, oltre al lavoro sul cammino e sull’equilibrio.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">{specialistItems.map((item) => <DirectoryCard key={item.id} item={item} />)}</div>
        </section>
        <section className="p-8 md:p-16 rounded-[3rem] bg-[#022166] text-white">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Non sai da dove iniziare?</h2>
          <p className="text-white/80 text-lg max-w-2xl mb-8">Non serve scegliere da soli una diagnosi. Raccontaci la tua difficoltà e porta gli eventuali documenti clinici: la valutazione è il momento per definire il passo successivo.</p>
          <Link href="/prenota" prefetch={false} className="inline-flex gap-3 items-center bg-[#55B4FF] text-[#022166] font-black uppercase text-xs tracking-widest rounded-2xl px-7 py-5 hover:bg-white">Richiedi una valutazione <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </section>
        <p className="mt-12 text-slate-600">Vuoi conoscere l’impostazione generale dello studio? <Link href="/trattamenti" prefetch={false} className="font-bold text-[#022166] underline underline-offset-4">Leggi la panoramica delle aree cliniche.</Link></p>
      </div>
    </article>
  );
}
