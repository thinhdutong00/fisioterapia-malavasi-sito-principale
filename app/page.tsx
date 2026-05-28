import Image from 'next/image';
import {
  CheckCircle,
  Phone,
  ArrowRight,
  Home,
  MessageCircle,
  ClipboardCheck,
  Shield,
} from 'lucide-react';
import HomeTreatments from './components/HomeTreatments';
import LocationMap from './components/LocationMap';
import ReviewsSection from './components/ReviewsSection';

export default function FisioterapiaMalavasi() {
  return (
    /* MODIFICATO: rimosso h-screen, overflow-y-auto e snap-scroll. Aggiunto min-h-screen e rimosso snap-mandatory */
   <main className="relative min-h-screen w-full bg-[#F0F4F8] text-slate-800 font-sans scroll-smooth">
      
      {/* BACKGROUND DECORATIONS - Modificato per non creare overflow */}
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden max-w-full">
    <div className="absolute top-[-2%] left-[-10%] w-[70%] md:w-[40%] h-[30%] bg-[#55B4FF]/10 rounded-full blur-[80px] md:blur-[100px]"></div>
    <div className="absolute bottom-[5%] right-[-10%] w-[60%] md:w-[30%] h-[30%] bg-[#022166]/5 rounded-full blur-[80px] md:blur-[100px]"></div>
  </div>





     {/* --- HERO SECTION --- */}
      {/* MODIFICATO: rimosso h-screen e snap. Aggiunto min-h-screen */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 overflow-hidden bg-[#022166]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/studio-fisioterapia-malavasi.jpg"
            alt="Studio Fisioterapia Malavasi"
            fill
            className="hidden md:block object-cover opacity-40"
            quality={45}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#022166]/80 via-[#022166]/60 to-[#022166]/90"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center py-32 md:py-40">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
            <div className="relative h-5 w-10">
              <Image
                src="/Progetto senza titolo - 2026-02-23T223838.202.png"
                alt="Logo Malavasi"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            LA SCIENZA PENSATA PER IL TUO BENESSERE
          </div>

          <h1 className="text-[2.6rem] leading-[1.1] sm:text-5xl md:text-7xl xl:text-8xl font-bold text-white mb-8 tracking-tighter">
  Fisioterapia e <br className="sm:hidden" /> Riabilitazione <br />
  <span className="text-[#55B4FF]">a Cavezzo</span>
</h1>

          <p className="hidden sm:block text-base md:text-xl text-white/80 mb-10 max-w-xl md:max-w-2xl mx-auto font-medium leading-relaxed">
            Valutazioni precise e trattamenti fisioterapici basati su evidenze scientifiche, pensati per ridurre il dolore, migliorare la mobilità e accompagnarti verso un recupero stabile e reale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/prenota" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#55B4FF] text-[#022166] px-9 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all group shadow-lg shadow-[#55B4FF]/20">
              Inizia il Percorso <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href="#servizi" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-9 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
              I nostri trattamenti
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/30 hidden md:block">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

{/* --- TRATTAMENTI --- */}
      <section id="servizi" className="relative w-full py-24 md:py-32 px-6 bg-white overflow-hidden">
        
        {/* Decorazione di sfondo sottile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#55B4FF]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Sezione */}
          <div className="flex flex-col items-center text-center mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-[#55B4FF]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#55B4FF]">Specializzazioni</span>
              <div className="h-[1px] w-8 bg-[#55B4FF]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-none">
              Soluzioni per il tuo <br />
              <span className="text-slate-400">benessere fisico.</span>
            </h2>
          </div>

          <HomeTreatments />
        </div>
      </section>

      {/* --- SEZIONE DOMICILIO --- */}
      <section id="servizio-domiciliare" className="relative w-full py-20 md:py-32 px-6 bg-[#F8FAFC] overflow-hidden">
        
        {/* Background Decorativo */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* COLONNA SINISTRA: Titolo e Badge */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-10 bg-[#55B4FF]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#55B4FF]">
                  Servizio Esclusivo
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold text-[#022166] leading-[0.95] tracking-tighter mb-8">
                La cura <br />
                <span className="text-slate-400">arriva da te.</span>
              </h2>

              <div className="inline-flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-[#022166] text-[#55B4FF] rounded-xl flex items-center justify-center shadow-lg shadow-[#022166]/20">
                  <Home size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Copertura attiva</p>
                  <p className="text-sm font-bold text-[#022166]">Cavezzo e zone limitrofe</p>
                </div>
              </div>
            </div>

            {/* COLONNA DESTRA: Dettagli e Chiamata */}
            <div className="lg:col-span-7">
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
                  Trattamenti professionali direttamente nel comfort di casa tua, ideali per chi ha <span className="text-[#022166] font-semibold">difficoltà di spostamento</span> o necessità riabilitative specifiche.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {[
                    "Ridotta mobilità o anziani",
                    "Riabilitazione Post-Chirurgica",
                    "Pazienti Neurologici",
                    "Attrezzatura professionale inclusa"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-[#55B4FF] shrink-0" />
                      <span className="text-slate-600 font-medium text-base">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-slate-200">
                  <p className="text-slate-400 text-sm mb-6 italic">
                    * Servizio su appuntamento telefonico previa valutazione della distanza.
                  </p>
                  
                  <a 
                    href="tel:+393338225464" 
                    className="group inline-flex items-center justify-center gap-4 bg-[#022166] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#55B4FF] transition-all shadow-xl shadow-[#022166]/20 active:scale-95"
                  >
                    <Phone size={18} />
                    Chiama per Prenotare
                    <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* --- SEZIONE STAFF --- */}
{/* MODIFICATO: rimosso h-screen e classi snap. Aggiunto min-h-screen */}
<section id="team" className="relative py-20 md:py-32 px-4 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto relative z-10 w-full">
    <div className="text-center mb-12 md:mb-20">
      <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.3em] block mb-4">Professionalità e Competenza</span>
      <h2 className="text-3xl md:text-6xl font-black text-[#022166] tracking-tighter mb-6">Il Nostro <span className="text-[#55B4FF]">Team</span></h2>
    </div>
    {/* Cambiato gap-8 in gap-6 per mobile */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[
        { nome: "Mirco Malavasi", ruolo: "Fisioterapista OMPT", specialita: "Riabilitazione muscolo-scheletrica e oncologica", foto: "/mirco.webp" },
        { nome: "Alice Nanetti", ruolo: "Fisioterapista", specialita: "Riabilitazione muscolo-scheletrica e neurologica", foto: "/alice.jpg" },
        { nome: "Luca Rabaglia", ruolo: "Fisioterapista", specialita: "Riabilitazione muscolo-scheletrica e sportiva", foto: "/luca.webp" }
      ].map((membro, idx) => (
        <div key={idx} className="group bg-slate-50 rounded-[2.5rem] md:rounded-[3.5rem] p-4 pb-10 md:pb-12 transition-all duration-700 border border-slate-100 text-center flex flex-col items-center w-full max-w-[400px] mx-auto">
          <div className="aspect-[4/5] w-full relative overflow-hidden rounded-[2rem] md:rounded-[2.8rem] mb-6 md:mb-8">
            <Image 
              src={membro.foto} 
              alt={membro.nome} 
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <span className="bg-[#f0f9ff] text-[#55B4FF] border border-[#55B4FF]/20 px-4 py-1.5 rounded-full font-black text-[8px] md:text-[9px] uppercase tracking-widest mb-4">{membro.ruolo}</span>
          <h2 className="text-2xl md:text-3xl font-black text-[#022166] mb-3 group-hover:text-[#55B4FF] transition-colors">{membro.nome}</h2>
          <p className="text-slate-500 text-xs md:text-sm font-bold italic max-w-[220px]">{membro.specialita}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<ReviewsSection />


{/* --- SEZIONE COME LAVORIAMO (PROCESSO) --- */}
{/* MODIFICATO: rimosso h-screen e snap-start. Aggiunto min-h-screen */}
<section id="metodo" className="relative min-h-screen w-full flex items-center justify-center py-32 px-4 overflow-hidden bg-white">
  {/* Decorazione sottile di sfondo */}
  <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#55B4FF]/5 rounded-full blur-[100px] -z-10" />

  <div className="max-w-7xl mx-auto relative z-10 w-full">
    {/* Header Sezione */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center justify-center p-1 px-3 mb-4 rounded-full bg-[#022166]/5 border border-[#022166]/10">
        <span className="text-[#022166] font-black text-[10px] uppercase tracking-[0.3em]">Protocollo Clinico</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-[#022166] tracking-tighter mb-6">
        Il Tuo Percorso di <span className="text-[#55B4FF]">Recupero</span>
      </h2>
      <p className="max-w-2xl mx-auto text-slate-500 font-bold text-lg leading-relaxed italic">
        Un approccio scientifico in 3 fasi per risolvere il dolore alla radice e restituirti la libertà di movimento.
      </p>
    </div>

    {/* Griglia dei Passaggi */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative px-2 md:px-0">
      {/* Linea connettiva (visibile solo su desktop) */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

      {[
        {
          fase: "01",
          titolo: "Anamnesi e Colloquio",
          desc: "Ascoltiamo la tua storia. Raccogliamo ogni dettaglio sui tuoi sintomi e sulle tue attività quotidiane per inquadrare correttamente il tuo problema clinico fin dal primo istante.",
          icon: <MessageCircle size={24} />
        },
        {
          fase: "02",
          titolo: "Esame Obiettivo e Test",
          desc: "La scienza del movimento. Attraverso test specifici, valutazioni attive e passive, individuiamo con precisione la causa della tua disfunzione muscolo-scheletrica.",
          icon: <ClipboardCheck size={24} />
        },
        {
          fase: "03",
          titolo: "Trattamento ed Autonomia",
          desc: "Risultati che durano. Combiniamo terapia manuale ed esercizi personalizzati, rendendoti protagonista e autonomo nel tuo processo di guarigione.",
          icon: <Shield size={24} />
        }
      ].map((step, idx) => (
        <div key={idx} className="relative z-10 group">
          <div className="bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 pb-12 border border-slate-100 transition-all duration-700 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(2,33,102,0.15)] hover:-translate-y-2 h-full flex flex-col items-center text-center">
            
            {/* Numero Fase e Icona */}
            <div className="flex justify-between items-start w-full mb-8">
              <span className="text-5xl font-black text-[#022166]/10 group-hover:text-[#55B4FF]/20 transition-colors">
                {step.fase}
              </span>
              <div className="w-12 h-12 rounded-2xl bg-[#022166] text-white flex items-center justify-center shadow-lg shadow-[#022166]/20 group-hover:bg-[#55B4FF] transition-colors duration-500">
                {step.icon}
              </div>
            </div>

            <h2 className="text-2xl font-black text-[#022166] mb-4 tracking-tight group-hover:text-[#55B4FF] transition-colors">
              {step.titolo}
            </h2>
            
            <p className="text-slate-500 font-bold text-sm leading-relaxed italic">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Nota finale CTA */}
    <div className="mt-20 text-center">
      <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-6">Ogni seduta ha una durata di circa 45-60 minuti</p>
      <div className="w-16 h-1 bg-[#022166] mx-auto rounded-full opacity-20"></div>
    </div>
  </div>
</section>

<LocationMap />
      
    </main>
  );
}
