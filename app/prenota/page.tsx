import { CheckCircle2, Phone } from "lucide-react";
import Breadcrumbs from "@/app/components/new-pages/Breadcrumbs";
import NewAssessmentForm from "@/app/components/new-pages/NewAssessmentForm";
import { getAssessmentPreset, getBookingContextByPath } from "@/app/data/booking";
import { pageMetadata } from "@/app/lib/page-seo";

export const metadata = pageMetadata(
  "Richiedi una valutazione",
  "Raccontaci la tua difficoltà e indica le tue preferenze. Lo Studio Malavasi ti ricontatterà per concordare la valutazione.",
  "/prenota",
);

type PrenotaPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PrenotaPage({ searchParams }: PrenotaPageProps) {
  const params = await searchParams;
  const sourcePath = typeof params.from === "string" && params.from.startsWith("/") ? params.from : undefined;
  const context = getBookingContextByPath(sourcePath);
  const preset = getAssessmentPreset(sourcePath);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-96 rounded-full bg-[#55B4FF]/5 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto pt-28 md:pt-32 pb-20 px-4 md:px-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Richiedi una valutazione", href: "/prenota" }]} />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <section className="lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[#55B4FF]" aria-hidden="true" />
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Il primo passo</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#022166] leading-[0.95] tracking-tighter mb-8">
              Raccontaci il tuo<br /><span className="text-[#55B4FF]">punto di partenza.</span>
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-xl">
              Non serve conoscere già il nome del trattamento. Parti dalla zona che ti limita, da un percorso specialistico oppure descrivi semplicemente ciò che senti.
            </p>

            <ul className="space-y-4 mb-10 text-sm text-slate-600">
              {["Il modulo si adatta alle tue risposte", "Il referto è facoltativo", "Lo studio confermerà disponibilità e appuntamento"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#55B4FF] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="tel:+393338225464" className="inline-flex items-center gap-3 text-[#022166] font-bold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">
              <Phone size={18} aria-hidden="true" /> Preferisci parlare con noi? 333 822 5464
            </a>
          </section>

          <NewAssessmentForm config={preset ?? { context }} />
        </div>
      </div>
    </main>
  );
}
