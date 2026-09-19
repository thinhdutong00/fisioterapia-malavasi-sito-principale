import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail, FileText } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";
import { locations, type LocationKey } from "@/app/data/locations";

export default function LocationPage({ locationKey }: { locationKey: LocationKey }) {
  const location = locations[locationKey];
  const other = locations[location.other];
  return (
    <article className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans">
      <div className="pt-32 pb-20 px-4 md:px-6 max-w-6xl mx-auto">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sedi e contatti", href: "/contatti" }, { label: location.name, href: location.path }]} />
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-6"><span className="h-px w-12 bg-[#55B4FF]" /><p className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Vicini al tuo percorso</p></div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-[#022166] mb-10">Fisioterapia a<br /><span className="text-[#55B4FF]">{location.name}.</span></h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed font-light">{location.intro}</p>
        </header>
        <section className="grid lg:grid-cols-2 gap-8 mb-24" aria-labelledby="indirizzo">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
            <MapPin size={36} className="text-[#55B4FF] mb-6" aria-hidden="true" />
            <h2 id="indirizzo" className="text-3xl font-bold tracking-tight text-[#022166] mb-6">L’indirizzo della sede.</h2>
            <address className="not-italic text-xl text-slate-600 mb-8">{location.address}</address>
            <a href={location.directions} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#022166] text-white rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#55B4FF] hover:text-[#022166]">Indicazioni stradali <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight text-[#022166] mb-6">Parla con lo studio.</h2>
            <p className="text-slate-600 leading-relaxed mb-8">I contatti dello Studio Malavasi ti permettono di richiedere informazioni e concordare la visita nella sede desiderata.</p>
            <div className="space-y-5"><a href="tel:+393338225464" className="flex gap-3 items-center font-bold text-[#022166]"><Phone size={20} className="shrink-0" aria-hidden="true" />333 822 5464</a><a href="mailto:fisioterapiamalavasi@gmail.com" className="flex gap-3 items-center text-sm font-bold text-[#022166] break-all"><Mail size={20} className="shrink-0" aria-hidden="true" />fisioterapiamalavasi@gmail.com</a></div>
          </div>
        </section>
        <section className="mb-20 grid md:grid-cols-2 gap-12">
          <div><h2 className="text-3xl font-bold text-[#022166] tracking-tight mb-6">{location.arrivalTitle}</h2><p className="text-lg text-slate-600 leading-relaxed">{location.arrivalText}</p></div>
          <div><FileText size={28} className="text-[#55B4FF] mb-5" aria-hidden="true" /><h2 className="text-3xl font-bold text-[#022166] tracking-tight mb-6">Preparare il primo incontro.</h2><p className="text-lg text-slate-600 leading-relaxed">Porta eventuali referti, indicazioni mediche e una descrizione delle attività che vorresti recuperare. Per esigenze legate al tuo percorso, verifica con lo studio l’organizzazione più adatta prima di recarti in sede.</p></div>
        </section>
        <section className="bg-[#022166] p-8 md:p-20 rounded-[3rem] text-white text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Iniziamo dalla tua storia.</h2><p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">La richiesta online è il primo contatto con lo studio. L’appuntamento viene concordato successivamente.</p>
          <Link href="/prenota" prefetch={false} className="inline-flex gap-3 items-center px-7 py-5 rounded-2xl bg-[#55B4FF] text-[#022166] font-black uppercase text-xs tracking-widest hover:bg-white">Richiedi una valutazione <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </section>
        <nav aria-label="Altre informazioni" className="mt-14 flex flex-col sm:flex-row gap-6 justify-between text-sm font-bold text-[#022166]"><Link href={other.path} prefetch={false} className="underline underline-offset-4">La sede di {other.name}</Link><Link href="/trattamenti/tutti" prefetch={false} className="underline underline-offset-4">Esplora i percorsi dello studio</Link><Link href="/contatti" prefetch={false} className="underline underline-offset-4">Tutti i contatti</Link></nav>
      </div>
    </article>
  );
}
