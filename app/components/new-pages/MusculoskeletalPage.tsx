import Link from "next/link";
import { Activity, ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Compass, Target } from "lucide-react";
import type { MusculoskeletalTreatment } from "@/app/data/musculoskeletal";
import { bookingHref } from "@/app/data/booking";
import Breadcrumbs from "./Breadcrumbs";
import NewAssessmentForm from "./NewAssessmentForm";

const phaseIcons = [Target, Activity, Compass];

export default function MusculoskeletalPage({ treatment }: { treatment: MusculoskeletalTreatment }) {
  return (
    <article className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden text-left">
      <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#022166]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#55B4FF]/5 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 pt-28 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Trattamenti", href: "/trattamenti" }, treatment.category, { label: treatment.label, href: treatment.path }]} />
          <header className="mb-24 grid lg:grid-cols-2 gap-12 items-start">
            <div className="min-w-0">
              <div className="flex items-center gap-3 mb-6"><div aria-hidden="true" className="h-px w-12 shrink-0 bg-[#55B4FF]" /><span className="text-xs font-black uppercase tracking-[0.2em] text-[#55B4FF]">{treatment.category.label}</span></div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#022166] leading-[0.98] mb-8 tracking-tighter break-words">{treatment.heading}<br /><span className="text-[#55B4FF]">{treatment.accent}</span></h1>
              <p className="max-w-xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">{treatment.intro}</p>
              <a href="tel:+393338225464" className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-[#022166] uppercase text-xs tracking-widest hover:bg-slate-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4">Parliamone insieme</a>
            </div>
            <NewAssessmentForm
              config={{
                condition: treatment.label,
                symptoms: treatment.symptoms.map((item) => item.title),
                limitations: treatment.limitations,
                goals: treatment.goals,
                context: {
                  kind: "area",
                  areaLabel: treatment.category.label,
                  treatmentId: treatment.id,
                  treatmentLabel: treatment.label,
                  sourcePath: treatment.path,
                },
              }}
            />
          </header>

          <section className="mb-24 md:mb-32" aria-labelledby="symptom-title">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-[#022166] p-8 md:p-10 rounded-[2.5rem] text-white flex flex-col justify-center">
                <Activity className="text-[#55B4FF] mb-6" size={40} aria-hidden="true" />
                <h2 id="symptom-title" className="text-3xl font-bold mb-4 tracking-tight">Da cosa partiamo?</h2>
                <p className="text-white/80 text-sm leading-relaxed">Le difficoltà che incontri ogni giorno ci aiutano a impostare la valutazione. I sintomi, da soli, non sono una diagnosi.</p>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">{treatment.symptoms.map((item) => <div key={item.title} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-center hover:border-[#55B4FF]/30 transition-colors"><h3 className="font-black text-[#022166] text-xs uppercase mb-3 tracking-widest">{item.title}</h3><p className="text-slate-600 text-sm font-light leading-relaxed">{item.text}</p></div>)}</div>
            </div>
          </section>

          <section className="mb-24 md:mb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" aria-labelledby="approach-title">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#55B4FF] block mb-5">Il nostro approccio</span>
              <h2 id="approach-title" className="text-4xl md:text-5xl font-bold text-[#022166] tracking-tighter leading-tight mb-8">{treatment.approachTitle}</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">{treatment.approach}</p>
            </div>
            <div className="relative p-8 md:p-10 bg-[#022166] rounded-[3rem] text-white shadow-xl">
              <Target className="text-[#55B4FF] mb-6" size={40} aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Un lavoro concreto, insieme.</h3>
              <ul className="space-y-5">{treatment.actions.map((action) => <li key={action} className="flex items-start gap-3 text-sm leading-relaxed"><CheckCircle2 size={20} className="text-[#55B4FF] shrink-0 mt-0.5" aria-hidden="true" /><span>{action}</span></li>)}</ul>
            </div>
          </section>

          <section className="mb-24 md:mb-32" aria-labelledby="path-title">
            <h2 id="path-title" className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-10">Il tuo percorso di recupero.</h2>
            <div className="grid md:grid-cols-3 gap-6">{treatment.phases.map((phase, index) => {
              const Icon = phaseIcons[index];
              return <div key={phase.title} className="min-w-0 bg-white p-8 md:p-6 lg:p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-shadow"><Icon className="text-[#55B4FF] mb-6" size={36} aria-hidden="true" /><span className="text-xs font-black text-slate-500 tracking-widest block mb-3">0{index + 1}</span><h3 className="break-words text-2xl font-bold text-[#022166] mb-4 tracking-tight">{phase.title}</h3><p className="text-slate-600 text-sm font-light leading-relaxed">{phase.text}</p></div>;
            })}</div>
          </section>

          <section className="mb-24 md:mb-32" aria-labelledby="faq-title">
            <div className="max-w-3xl"><span className="text-xs font-black uppercase tracking-[0.25em] text-[#55B4FF] block mb-5">Facciamo chiarezza</span><h2 id="faq-title" className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-10">Le domande che contano.</h2></div>
            <div className="grid md:grid-cols-2 gap-6">{treatment.faq.map((item) => <div key={item.question} className="bg-white rounded-[2rem] border border-slate-100 p-8"><h3 className="text-xl font-bold text-[#022166] mb-4">{item.question}</h3><p className="text-slate-600 leading-relaxed">{item.answer}</p></div>)}</div>
          </section>

          <section className="mb-24" aria-labelledby="related-title">
            <h2 id="related-title" className="text-2xl font-bold text-[#022166] tracking-tight mb-6">Approfondisci il tuo percorso.</h2>
            <div className="grid sm:grid-cols-2 gap-4">{treatment.related.map((link) => <Link key={link.href} href={link.href} className="flex items-center justify-between gap-6 bg-white border border-slate-200 p-6 rounded-2xl font-bold text-[#022166] hover:border-[#55B4FF] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"><span>{link.label}</span><ArrowUpRight size={20} className="text-[#55B4FF] shrink-0" aria-hidden="true" /></Link>)}</div>
          </section>

          <section className="bg-[#022166] p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] text-center relative overflow-hidden text-white">
            <div className="relative max-w-2xl mx-auto"><h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Il prossimo passo<br /><span className="text-[#55B4FF]">parte da te.</span></h2><p className="text-white/80 text-lg mb-10 font-light leading-relaxed">Raccontaci cosa vorresti tornare a fare. La valutazione ci aiuta a definire priorità, obiettivi e un percorso adatto alla tua situazione.</p><a href="#valutazione" className="inline-flex items-center justify-center gap-3 bg-[#55B4FF] text-[#022166] px-8 md:px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Richiedi una valutazione<ChevronRight size={18} aria-hidden="true" /></a><Link href={bookingHref(treatment.path)} className="block w-fit mx-auto mt-6 text-sm underline underline-offset-4 text-white/90 focus-visible:outline-2 focus-visible:outline-offset-4">Apri la richiesta in una pagina dedicata</Link></div>
          </section>
          <div className="mt-20 pt-8 border-t border-slate-200"><Link href={treatment.category.href} className="inline-flex gap-2 items-center text-sm font-bold text-[#022166] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"><ArrowLeft size={16} aria-hidden="true" />{treatment.category.label}</Link></div>
        </div>
      </div>
    </article>
  );
}
