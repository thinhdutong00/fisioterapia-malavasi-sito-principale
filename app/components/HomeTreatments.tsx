"use client";

import { useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Brain,
  ChevronRight,
  Footprints,
  GitCommitVertical,
  HeartPulse,
  MoveVertical,
  RotateCw,
  X,
} from "lucide-react";

type Treatment = {
  id: number;
  titolo: string;
  Icon: LucideIcon;
  breve: string;
  descrizione: string;
  link: string;
};

const treatments: Treatment[] = [
  {
    id: 1,
    titolo: "Riabilitazione Post-Chirurgica",
    Icon: GitCommitVertical,
    breve: "Recupero della mobilità dopo interventi di protesi (anca/ginocchio) o ricostruzione legamentosa.",
    descrizione:
      "L'intervento chirurgico è solo il primo passo: il vero successo dipende dalla riabilitazione. Seguo protocolli basati sulle più recenti evidenze scientifiche per restituirti la piena autonomia nel minor tempo possibile.",
    link: "/trattamenti/chirurgica",
  },
  {
    id: 2,
    titolo: "Dolore Persistente",
    Icon: MoveVertical,
    breve: "Approccio multidisciplinare per la gestione di dolori cronici e problematiche della colonna che non trovano sollievo.",
    descrizione:
      "Il dolore persistente richiede un approccio che vada oltre la semplice terapia locale. Attraverso l'educazione al dolore e tecniche manuali specifiche, lavoriamo per desensibilizzare il sistema nervoso e farti tornare a muoverti con fiducia.",
    link: "/trattamenti/dolore-persistente",
  },
  {
    id: 3,
    titolo: "Fisioterapia Sportiva",
    Icon: Footprints,
    breve: "Trattamento specialistico per distorsioni, lesioni muscolari e problematiche articolari traumatiche.",
    descrizione:
      "Mi occupo del trattamento di traumi acuti e cronici, applicando tecniche che accelerano la riparazione dei tessuti e prevengono future recidive per garantirti la massima performance.",
    link: "/trattamenti/sportiva",
  },
  {
    id: 4,
    titolo: "Cefalee e Vertigini",
    Icon: RotateCw,
    breve: "Valutazione e trattamento di mal di testa di origine cervicale e disturbi dell'equilibrio.",
    descrizione:
      "Molte cefalee e vertigini dipendono da disfunzioni del tratto cervicale superiore. Attraverso tecniche manuali mirate e rieducazione specifica, riduciamo la frequenza degli attacchi e miglioriamo la stabilità posturale.",
    link: "/trattamenti/cefalee-vertigini",
  },
  {
    id: 5,
    titolo: "Riabilitazione Neurologica",
    Icon: Brain,
    breve: "Recupero funzionale per esiti di ictus, Parkinson, sclerosi multipla o lesioni nervose.",
    descrizione:
      "Attraverso esercizi neurocognitivi e stimolazioni specifiche, lavoriamo per riprogrammare il movimento, migliorare l'equilibrio e contrastare la spasticità.",
    link: "/trattamenti/neurologica",
  },
  {
    id: 6,
    titolo: "Fisioterapia Oncologica",
    Icon: HeartPulse,
    breve: "Gestione del linfedema, del dolore e della stanchezza cronica (fatigue) post-oncologica.",
    descrizione:
      "Trattamento del linfedema tramite linfodrenaggio manuale e bendaggi, oltre al recupero della mobilità articolare post-chirurgia. Un supporto concreto per la qualità della vita.",
    link: "/trattamenti/oncologica",
  },
];

export default function HomeTreatments() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const SelectedIcon = selectedTreatment?.Icon;

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {treatments.map(({ Icon, ...item }) => (
          <button
            key={item.id}
            onClick={() => setSelectedTreatment({ ...item, Icon })}
            className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-[#55B4FF]/30 hover:shadow-[0_20px_40px_rgba(2,33,102,0.05)] transition-all duration-500 cursor-pointer flex flex-col h-full text-left"
            type="button"
          >
            <div className="w-14 h-14 bg-[#F8FAFC] text-[#022166] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#022166] group-hover:text-[#55B4FF] transition-all duration-500 shadow-sm">
              <Icon size={28} />
            </div>

            <h2 className="text-xl font-bold text-[#022166] mb-4 leading-tight tracking-tight">
              {item.titolo}
            </h2>

            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
              {item.breve}
            </p>

            <div className="flex items-center gap-2 text-[#55B4FF] font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
              Dettagli <ChevronRight size={14} />
            </div>
          </button>
        ))}
      </div>

      {selectedTreatment && SelectedIcon && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6 bg-[#022166]/20 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedTreatment(null)}
              className="absolute top-6 right-6 p-2 bg-slate-50 text-[#022166] rounded-full hover:bg-slate-100 transition-colors z-10"
              type="button"
              aria-label="Chiudi dettaglio trattamento"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-12">
              <div className="w-16 h-16 bg-[#022166] text-[#55B4FF] rounded-2xl flex items-center justify-center mb-8">
                <SelectedIcon size={32} />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#022166] mb-6 tracking-tighter">
                {selectedTreatment.titolo}
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-10 font-light">
                {selectedTreatment.descrizione}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={selectedTreatment.link}
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-[#022166] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#55B4FF] transition-all group"
                >
                  Scopri di più <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => setSelectedTreatment(null)}
                  className="flex-1 inline-flex items-center justify-center px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-400 border border-slate-100 hover:bg-slate-50 transition-all"
                  type="button"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
