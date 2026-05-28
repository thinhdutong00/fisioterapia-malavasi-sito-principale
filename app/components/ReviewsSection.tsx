import { Star } from "lucide-react";

const reviews = [
  {
    n: "Rosalba Cantuti",
    t: "Lo studio Malavasi è molto serio e professionale, Mirco segue molto bene il paziente e da' consigli utili x continuare a migliorare nel percorso di riabilitazione.",
    d: "2 settimane fa",
  },
  {
    n: "Samuele Pini",
    t: "Mi sono rotto il crociato e subito ho deciso di iniziare il mio percorso preoperatorio grazie al quale ho potuto affrontare la riabilitazione molto meglio, psicologicamente più sollevato. Grazie al Dott. Mirco e al suo staff, dotato di ottima preparazione",
    d: "1 mese fa",
  },
  {
    n: "Federico Zagni",
    t: "Professionista e collega di alto livello! Grande empatia e professionalità!",
    d: "3 settimane fa",
  },
  {
    n: "Alessandro Papazzoni",
    t: "Ci sono andato per la mia caviglia e mi hanno aiutato con molta cura e attenzione, in più sono migliorato velocemente.",
    d: "10 mesi fa",
  },
  {
    n: "Elisa Cavazzoli",
    t: "Con Mirco mi sono trovata bene fin da subito. È ATTENTO e molto preparato nonostante la giovane età. Con i giusti esercizi e le giuste tempistiche sono riuscita a gestire e risolvere il mio problema, sono molto contenta! Consigliatissimo a tutti!!",
    d: "1 anno fa",
  },
  {
    n: "Edoardo Marchesi",
    t: "Ho portato mia mamma da lui perchè aveva male al piede destro faceva fatica a camminare, a scendere le scale non se ne parla e dopo due infiltrazioni di cortisone non era migliorata, quindi si è decisa ad andarci con ottimi risultati non solo il piede non le duole più, ma ha acquisito un po' più di sicurezza nel camminare e a fare le scale. Grazie Mirco",
    d: "1 anno fa",
  },
];

function Stars({ size = 16 }: { size?: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} fill="currentColor" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="recensioni" className="relative w-full py-20 md:py-32 px-4 overflow-x-hidden bg-gradient-to-b from-white to-[#F0F4F8]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#022166] tracking-tight mb-4">
              La parola ai nostri <span className="text-[#55B4FF]">Pazienti</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg">Esperienze reali tratte dal nostro profilo ufficiale Google Business.</p>
          </div>

          <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-blue-900/5 border border-slate-100 flex items-center gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-[#4285F4] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <div>
              <div className="mb-1">
                <Stars size={18} />
              </div>
              <p className="text-[#022166] font-black text-sm uppercase tracking-tighter">Eccellenza 5.0 su Google</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((rev) => (
            <article key={rev.n} className="bg-white p-7 md:p-10 rounded-[2.5rem] border border-slate-100 h-full flex flex-col relative shadow-lg shadow-blue-900/[0.02] hover:shadow-2xl transition-all duration-500">
              <div className="mb-6">
                <Stars />
              </div>
              <p className="text-slate-700 font-medium text-base md:text-lg leading-relaxed flex-grow italic">&ldquo;{rev.t}&rdquo;</p>
              <div className="flex items-center gap-4 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-slate-50">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#022166] to-[#0a3a8a] rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg">{rev.n[0]}</div>
                <div>
                  <p className="font-black text-[#022166] text-base md:text-lg leading-none">{rev.n}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1.5">{rev.d}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
