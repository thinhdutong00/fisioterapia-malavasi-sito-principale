import Link from "next/link";
import {
  Accessibility,
  ArrowLeft,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileText,
  HandHeart,
  Heart,
  Home,
  ShieldCheck,
  Sparkles,
  Sun,
  ThermometerSun,
  Users,
} from "lucide-react";
import Breadcrumbs from "@/app/components/new-pages/Breadcrumbs";
import type { SpecialistPageData } from "@/app/data/specialist-pages";

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#55B4FF]";

/** A dedicated template: the existing oncology and neurology pages do not import it. */
export default function SpecialistPage({ page }: { page: SpecialistPageData }) {
  const oncology = page.family === "oncologica";
  const pillarIcons = oncology ? [Sun, ThermometerSun, HandHeart] : [Brain, Accessibility, Users];
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Trattamenti", href: "/trattamenti" },
    ...(page.parent.href === "/trattamenti" ? [] : [page.parent]),
    { label: page.breadcrumbLabel, href: page.path },
  ];

  return (
    <article className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={breadcrumbs} />

          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 shrink-0 bg-[#55B4FF]" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">(R)enjoy your mo(ve)ments</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter break-words">
              {page.hero.lead}<br /><span className="text-[#55B4FF]">{page.hero.accent}</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">{page.hero.description}</p>
          </header>

          <section className="grid md:grid-cols-3 gap-8 mb-24" aria-label="I bisogni da cui partire">
            {page.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index % pillarIcons.length];
              return (
                <div key={pillar.title} className="group bg-white p-8 md:p-6 lg:p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 motion-reduce:transform-none motion-reduce:transition-none">
                  <div className="mb-8 p-4 bg-[#F8FAFC] w-fit rounded-2xl group-hover:bg-[#022166] transition-colors duration-500">
                    <Icon className="text-[#55B4FF]" size={32} aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{pillar.title}</h2>
                  <p className="text-slate-500 leading-relaxed text-sm md:text-base">{pillar.description}</p>
                </div>
              );
            })}
          </section>

          <section className="relative mb-24" aria-labelledby="approccio-title">
            {oncology && <div className="absolute inset-0 bg-[#022166] rounded-[4rem] -rotate-1 scale-[1.02] opacity-5" aria-hidden="true" />}
            <div className={`relative rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 overflow-hidden ${oncology ? "bg-white border border-slate-100 shadow-sm" : "bg-[#022166] text-white shadow-2xl"}`}>
              {!oncology && (
                <div className="absolute top-0 right-0 opacity-5 pointer-events-none -translate-y-1/4 translate-x-1/4" aria-hidden="true"><Brain size={500} /></div>
              )}
              <div className="relative z-10 grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-3 min-w-0">
                  {!oncology && (
                    <div className="flex items-center gap-3 text-[#55B4FF] mb-8">
                      <Sparkles size={24} className="shrink-0" aria-hidden="true" />
                      <span className="text-xs font-black uppercase tracking-widest text-white/60">Progetto riabilitativo individuale</span>
                    </div>
                  )}
                  <h2 id="approccio-title" className={`text-3xl md:text-5xl font-black mb-8 tracking-tight leading-tight ${oncology ? "text-[#022166]" : "text-white"}`}>{page.clinical.title}</h2>
                  <p className={`mb-10 text-lg leading-relaxed ${oncology ? "text-slate-600" : "text-white/70"}`}>{page.clinical.description}</p>
                  <ul className="space-y-4">
                    {page.clinical.points.map((point) => (
                      <li key={point} className={`flex items-start gap-4 ${oncology ? "text-[#022166]" : "bg-white/5 p-4 rounded-2xl border border-white/10 text-white/90"}`}>
                        {oncology ? <ShieldCheck size={20} className="text-[#55B4FF] mt-0.5 shrink-0" aria-hidden="true" /> : <CheckCircle2 size={20} className="text-[#55B4FF] mt-0.5 shrink-0" aria-hidden="true" />}
                        <span className="text-sm md:text-base font-bold tracking-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`lg:col-span-2 relative p-8 md:p-10 rounded-[3rem] border ${oncology ? "bg-[#F8FAFC] border-slate-200" : "bg-white/10 backdrop-blur-md border-white/20"}`}>
                  {oncology ? <FileText className="text-[#55B4FF] mb-8" size={48} aria-hidden="true" /> : <Heart className="text-[#55B4FF] mb-8" size={48} aria-hidden="true" />}
                  <h3 className={`text-2xl font-bold mb-6 tracking-tight ${oncology ? "text-[#022166]" : "text-white"}`}>{page.clinical.asideTitle}</h3>
                  <p className={`text-base leading-relaxed mb-8 ${oncology ? "text-slate-600" : "text-white/70"}`}>{page.clinical.asideDescription}</p>
                  <p className={`p-6 rounded-2xl text-sm leading-relaxed ${oncology ? "bg-white border border-[#55B4FF]/20 text-[#022166] shadow-inner" : "bg-white/5 border border-white/10 text-white/80"}`}>{page.clinical.note}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-24" aria-labelledby="percorso-title">
            <h2 id="percorso-title" className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-12 max-w-3xl">{page.journeyTitle}</h2>
            <ol className="grid md:grid-cols-3 gap-8">
              {page.journey.map((step, index) => (
                <li key={step.title} className="bg-white p-8 md:p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                  <span className="block text-5xl font-black text-[#55B4FF]/40 tracking-tighter mb-6" aria-hidden="true">0{index + 1}</span>
                  <h3 className="text-xl font-bold text-[#022166] tracking-tight mb-4">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-24 bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-sm" aria-labelledby="domicilio-title">
            <div className="grid lg:grid-cols-12">
              <div className="hidden lg:block lg:col-span-1 bg-[#022166]" aria-hidden="true" />
              <div className="lg:col-span-11 p-8 md:p-16">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-8 mb-8">
                  <div className="max-w-2xl">
                    <h2 id="domicilio-title" className="text-3xl md:text-5xl font-bold text-[#022166] mb-6 tracking-tighter leading-tight">La continuità del percorso,<br /><span className="text-[#55B4FF]">anche a casa.</span></h2>
                    <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">{page.homeDescription}</p>
                  </div>
                  <div className="w-20 h-20 shrink-0 bg-[#F8FAFC] border border-slate-200 rounded-2xl flex items-center justify-center text-[#022166] shadow-inner"><Home size={32} strokeWidth={1.2} aria-hidden="true" /></div>
                </div>
                <Link href="/metodo/seduta-fisioterapica-domiciliare" prefetch={false} className={`inline-flex items-center gap-2 text-[#022166] font-bold hover:text-[#55B4FF] transition-colors rounded ${focusStyle}`}>Scopri la modalità domiciliare <ArrowUpRight size={18} aria-hidden="true" /></Link>
              </div>
            </div>
          </section>

          <section className="mb-24 max-w-4xl mx-auto" aria-labelledby="faq-title">
            <h2 id="faq-title" className="text-3xl md:text-5xl font-bold text-[#022166] mb-10 tracking-tighter">Le tue domande,<br /><span className="text-[#55B4FF]">un punto da cui partire.</span></h2>
            <div className="space-y-4">
              {page.faq.map((item) => (
                <details key={item.question} className="group bg-white border border-slate-200 rounded-[2rem] open:shadow-sm">
                  <summary className={`cursor-pointer list-none flex items-center justify-between gap-4 p-6 md:p-8 font-bold text-[#022166] rounded-[2rem] [&::-webkit-details-marker]:hidden ${focusStyle}`}>
                    <h3 className="text-base md:text-lg">{item.question}</h3>
                    <ChevronDown size={20} className="shrink-0 text-[#55B4FF] transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
                  </summary>
                  <p className="px-6 pb-6 md:px-8 md:pb-8 text-slate-600 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mb-24" aria-labelledby="related-title">
            <h2 id="related-title" className="text-2xl md:text-3xl font-bold text-[#022166] mb-8 tracking-tight">Prosegui nel percorso.</h2>
            <ul className="grid md:grid-cols-3 gap-4">
              {page.related.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} prefetch={false} className={`h-full flex items-center justify-between gap-4 p-7 bg-white border border-slate-200 rounded-3xl text-[#022166] font-bold hover:border-[#55B4FF] transition-colors ${focusStyle}`}>
                    {link.label}<ArrowUpRight size={20} className="text-[#55B4FF] shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={`text-center relative ${oncology ? "bg-[#022166] rounded-[3rem] md:rounded-[4rem] p-8 py-16 md:p-24 text-white overflow-hidden shadow-2xl" : "py-10"}`} aria-labelledby="valutazione-title">
            {oncology && <div className="absolute top-0 right-0 opacity-5 pointer-events-none -translate-y-1/4 translate-x-1/4" aria-hidden="true"><Sparkles size={500} /></div>}
            <div className="relative z-10">
              <h2 id="valutazione-title" className={`text-4xl md:text-6xl font-black mb-8 tracking-tighter ${oncology ? "text-white" : "text-[#022166]"}`}>{page.cta.title}</h2>
              <p className={`max-w-2xl mx-auto mb-12 text-lg md:text-xl font-light ${oncology ? "text-white/70" : "text-slate-500"}`}>{page.cta.description}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/prenota" prefetch={false} className={`group px-8 md:px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl ${oncology ? "bg-[#55B4FF] text-[#022166] hover:bg-white" : "bg-[#022166] text-white hover:bg-[#55B4FF] hover:text-[#022166]"} ${focusStyle}`}>
                  {oncology ? "Richiedi un colloquio" : "Richiedi valutazione"}<ChevronRight size={18} className="shrink-0" aria-hidden="true" />
                </Link>
                <a href="tel:+393338225464" className={`px-8 md:px-12 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all border-2 ${oncology ? "border-white/20 text-white hover:bg-white/10" : "bg-white border-[#022166] text-[#022166] hover:bg-[#F8FAFC]"} ${focusStyle}`}>
                  {oncology ? "Chiamaci con fiducia" : "Consulenza telefonica"}
                </a>
              </div>
            </div>
          </section>

          <div className="mt-24 border-t border-slate-200 pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-slate-400">
            <Link href={page.parent.href} prefetch={false} className={`inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-colors rounded ${focusStyle}`}><ArrowLeft size={20} className="shrink-0" aria-hidden="true" />{page.parent.label}</Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-60">Fisioterapia Malavasi — {oncology ? "Supporto & Benessere" : "Riabilitazione Specialistica"}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
