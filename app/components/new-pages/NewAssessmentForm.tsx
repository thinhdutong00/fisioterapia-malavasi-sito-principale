"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle, ChevronLeft, Upload } from "lucide-react";
import {
  bookingAreas,
  bookingPathways,
  generalGoals,
  generalLimitations,
  generalSymptoms,
  type BookingContext,
  type BookingKind,
  type BookingOption,
} from "@/app/data/booking";

export type AssessmentConfig = {
  condition?: string;
  symptoms?: string[];
  limitations?: string[];
  goals?: string[];
  context?: BookingContext;
};

type FormData = {
  tipoRichiesta: BookingKind | "";
  areaId: string;
  area: string;
  trattamentoId: string;
  trattamento: string;
  percorsoId: string;
  percorso: string;
  percorsoDettaglioId: string;
  percorsoDettaglio: string;
  paginaOrigine: string;
  problema: string;
  problemaSpecifico: string;
  durata: string;
  limitazione: string;
  obiettivo: string;
  obiettivoSpecifico: string;
  giaFattoFisio: string;
  diagnosiMedica: string;
  eta: string;
  giorniPreferiti: string[];
  fasciaOraria: string;
  urgenza: string;
  sede: string;
  indirizzo: string;
  nome: string;
  telefono: string;
  email: string;
  privacy: boolean;
  website: string;
};

type Step =
  | "orientamento"
  | "area"
  | "trattamento"
  | "percorso"
  | "percorsoDettaglio"
  | "problema"
  | "problemaSpecifico"
  | "quadro"
  | "obiettivo"
  | "storiaClinica"
  | "referto"
  | "disponibilita"
  | "sede"
  | "contatti";

const titles: Record<Step, string> = {
  orientamento: "Da dove vuoi partire?",
  area: "Quale area ti sta limitando?",
  trattamento: "Riconosci una di queste situazioni?",
  percorso: "Quale percorso stai cercando?",
  percorsoDettaglio: "Quale situazione ti riguarda?",
  problema: "Qual è la difficoltà principale?",
  problemaSpecifico: "Raccontaci brevemente il problema",
  quadro: "Da quanto tempo e cosa ti limita?",
  obiettivo: "Da cosa vorresti ripartire?",
  storiaClinica: "Qualche informazione utile",
  referto: "Vuoi condividere un referto?",
  disponibilita: "Quando preferisci incontrarci?",
  sede: "Dove preferisci la seduta?",
  contatti: "Lasciaci i tuoi contatti",
};

const durationOptions = ["Da meno di un mese", "Da 1 a 3 mesi", "Da oltre 3 mesi", "Dopo un intervento"];
const ageOptions = ["Sotto i 25", "25–45", "46–65", "Over 65"];
const locationOptions = ["Sede Cavezzo", "Sede Rovereto", "Domicilio"];

function initialData(config: AssessmentConfig): FormData {
  const context = config.context ?? {};
  const inferredKind = context.kind ?? (config.condition ? "area" : "");

  return {
    tipoRichiesta: inferredKind,
    areaId: context.areaId ?? "",
    area: context.areaLabel ?? "",
    trattamentoId: context.treatmentId ?? "",
    trattamento: context.treatmentLabel ?? (inferredKind === "area" ? config.condition ?? "" : ""),
    percorsoId: context.pathwayId ?? "",
    percorso: context.pathwayLabel ?? (inferredKind === "percorso" ? config.condition ?? "" : ""),
    percorsoDettaglioId: context.pathwayDetailId ?? "",
    percorsoDettaglio: context.pathwayDetailLabel ?? "",
    paginaOrigine: context.sourcePath ?? "",
    problema: "",
    problemaSpecifico: "",
    durata: "",
    limitazione: "",
    obiettivo: "",
    obiettivoSpecifico: "",
    giaFattoFisio: "",
    diagnosiMedica: "",
    eta: "",
    giorniPreferiti: [],
    fasciaOraria: "",
    urgenza: "",
    sede: "",
    indirizzo: "",
    nome: "",
    telefono: "",
    email: "",
    privacy: false,
    website: "",
  };
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = () => reject(new Error("Lettura del file non riuscita"));
    reader.readAsDataURL(file);
  });
}

function uniqueOptions(options: string[], fallback: string) {
  return [...new Set([...options.filter(Boolean), fallback])];
}

function optionById(options: BookingOption[], id: string) {
  return options.find((option) => option.id === id);
}

type ChoiceListProps = {
  name: string;
  options: Array<{ id: string; label: string }>;
  value: string;
  onChange: (id: string, label: string) => void;
  compact?: boolean;
};

function ChoiceList({ name, options, value, onChange, compact = false }: ChoiceListProps) {
  return (
    <div className={compact ? "space-y-2" : "space-y-3"}>
      {options.map((option) => (
        <label
          key={option.id}
          className={`relative w-full ${compact ? "p-3" : "p-4"} rounded-xl border-2 font-bold transition-all text-left flex gap-3 items-center cursor-pointer focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-[#022166] ${
            value === option.id
              ? "border-[#55B4FF] bg-[#55B4FF] text-[#022166]"
              : "border-white/20 bg-white/5 text-white hover:border-white/50"
          }`}
        >
          <input
            className="sr-only"
            type="radio"
            name={name}
            value={option.id}
            checked={value === option.id}
            onChange={() => onChange(option.id, option.label)}
          />
          <span className="text-sm grow leading-snug">{option.label}</span>
          {value === option.id ? (
            <CheckCircle size={20} aria-hidden="true" className="shrink-0" />
          ) : (
            <span aria-hidden="true" className="w-5 h-5 rounded-full border-2 border-white/30 shrink-0" />
          )}
        </label>
      ))}
    </div>
  );
}

function MiniChoices({
  name,
  label,
  options,
  value,
  onChange,
}: {
  name: string;
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-bold mb-3">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option}
            className={`rounded-xl border-2 p-3 text-xs font-bold transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-white ${
              value === option ? "border-[#55B4FF] bg-[#55B4FF] text-[#022166]" : "border-white/20"
            }`}
          >
            <input
              type="radio"
              name={name}
              className="sr-only"
              checked={value === option}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function NewAssessmentForm({ config }: { config: AssessmentConfig }) {
  const router = useRouter();
  const contextualEntry = Boolean(
    config.condition ||
      config.context?.kind ||
      config.context?.areaId ||
      config.context?.treatmentId ||
      config.context?.pathwayId,
  );
  const [data, setData] = useState<FormData>(() => initialData(config));
  const [step, setStep] = useState<Step>(contextualEntry ? "problema" : "orientamento");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const sendingRef = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lastStep = useRef(step);
  const uploadRef = useRef<HTMLInputElement>(null);

  const selectedArea = optionById(bookingAreas, data.areaId);
  const selectedPathway = optionById(bookingPathways, data.percorsoId);
  const problemOptions = uniqueOptions(config.symptoms?.length ? config.symptoms : generalSymptoms, "Altro");
  const limitationOptions = uniqueOptions(config.limitations?.length ? config.limitations : generalLimitations, "Un’altra attività");
  const goalOptions = uniqueOptions(config.goals?.length ? config.goals : generalGoals, "Altro");

  const steps = useMemo(() => {
    const activeSteps: Step[] = [];

    if (!contextualEntry) {
      activeSteps.push("orientamento");
      if (data.tipoRichiesta === "area") {
        activeSteps.push("area");
        if (selectedArea?.children.length) activeSteps.push("trattamento");
      }
      if (data.tipoRichiesta === "percorso") {
        activeSteps.push("percorso");
        if (selectedPathway?.children.length) activeSteps.push("percorsoDettaglio");
      }
    }

    if (data.tipoRichiesta === "non-so") activeSteps.push("problemaSpecifico");
    else activeSteps.push("problema");

    activeSteps.push("quadro", "obiettivo", "storiaClinica");
    if (data.diagnosiMedica === "Sì") activeSteps.push("referto");
    activeSteps.push("disponibilita", "sede", "contatti");
    return activeSteps;
  }, [contextualEntry, data.diagnosiMedica, data.tipoRichiesta, selectedArea, selectedPathway]);

  const index = Math.max(steps.indexOf(step), 0);
  const contextLabel =
    data.percorsoDettaglio ||
    data.trattamento ||
    data.percorso ||
    data.area ||
    config.condition ||
    "Richiesta generale";

  useEffect(() => {
    if (lastStep.current !== step) {
      headingRef.current?.focus({ preventScroll: true });
      lastStep.current = step;
    }
  }, [step]);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((current) => ({ ...current, [key]: value }));
    setError("");
  }

  function chooseRequestKind(kind: BookingKind) {
    setData((current) => ({
      ...current,
      tipoRichiesta: kind,
      areaId: "",
      area: "",
      trattamentoId: "",
      trattamento: "",
      percorsoId: "",
      percorso: "",
      percorsoDettaglioId: "",
      percorsoDettaglio: "",
      problema: "",
      problemaSpecifico: "",
    }));
    setError("");
  }

  function validate(): string {
    if (step === "orientamento" && !data.tipoRichiesta) return "Scegli da dove preferisci partire.";
    if (step === "area" && !data.areaId) return "Seleziona un’area oppure torna indietro e scegli «Non lo so».";
    if (step === "trattamento" && !data.trattamentoId) return "Seleziona una situazione oppure «Da definire insieme».";
    if (step === "percorso" && !data.percorsoId) return "Seleziona il percorso che ti interessa.";
    if (step === "percorsoDettaglio" && !data.percorsoDettaglioId) return "Seleziona una situazione oppure «Da definire insieme».";
    if (step === "problema" && !data.problema) return "Seleziona la difficoltà principale.";
    if ((step === "problemaSpecifico" || (step === "problema" && data.problema === "Altro")) && data.problemaSpecifico.trim().length < 3) {
      return "Descrivi brevemente la tua difficoltà.";
    }
    if (step === "quadro" && (!data.durata || !data.limitazione)) return "Indica da quanto tempo è presente il problema e cosa limita maggiormente.";
    if (step === "obiettivo" && !data.obiettivo) return "Seleziona il tuo obiettivo principale.";
    if (step === "obiettivo" && data.obiettivo === "Altro" && data.obiettivoSpecifico.trim().length < 3) return "Scrivi l’obiettivo che vorresti raggiungere.";
    if (step === "storiaClinica" && (!data.giaFattoFisio || !data.diagnosiMedica || !data.eta)) return "Completa le tre informazioni per continuare.";
    if (step === "disponibilita" && (!data.giorniPreferiti.length || !data.fasciaOraria || !data.urgenza)) return "Scegli almeno un giorno, una fascia oraria e completa l’ultima domanda.";
    if (step === "sede" && !data.sede) return "Seleziona la sede o il domicilio.";
    if (step === "sede" && data.sede === "Domicilio" && data.indirizzo.trim().length < 5) return "Inserisci via, numero civico e città.";
    if (step === "contatti") {
      if (data.nome.trim().length < 2) return "Inserisci nome e cognome.";
      const digits = data.telefono.replace(/\D/g, "");
      if (digits.length < 7 || digits.length > 15 || !/^[+\d\s().-]+$/.test(data.telefono)) return "Inserisci un numero di telefono valido.";
      if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) return "Controlla l’indirizzo email oppure lascia il campo vuoto.";
      if (!data.privacy) return "Per inviare la richiesta è necessario accettare la Privacy Policy.";
    }
    return "";
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sendingRef.current) return;

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (step !== "contatti") {
      setError("");
      setStep(steps[index + 1]);
      return;
    }

    sendingRef.current = true;
    setIsSending(true);
    setError("");

    try {
      const attachment = file && data.diagnosiMedica === "Sì"
        ? { filename: file.name, content: await fileToBase64(file), contentType: file.type }
        : null;
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          problema: data.tipoRichiesta === "non-so" ? "Da definire" : data.problema,
          problemaSpecifico: data.problemaSpecifico.trim(),
          obiettivoSpecifico: data.obiettivoSpecifico.trim(),
          indirizzo: data.sede === "Domicilio" ? data.indirizzo.trim() : "",
          nome: data.nome.trim(),
          telefono: data.telefono.trim(),
          email: data.email.trim(),
          attachment,
        }),
      });

      if (!response.ok) throw new Error("Invio non riuscito");
      router.push("/conferma");
    } catch {
      setError("Non siamo riusciti a inviare la richiesta. Riprova oppure chiamaci al 333 822 5464.");
    } finally {
      sendingRef.current = false;
      setIsSending(false);
    }
  }

  const inputClass = "w-full bg-white/5 border-b-2 border-white/30 p-4 text-white rounded-t-lg outline-none focus:border-[#55B4FF] placeholder:text-white/60";

  let content: ReactNode;

  if (step === "orientamento") {
    content = <ChoiceList name="tipoRichiesta" value={data.tipoRichiesta} options={[{ id: "area", label: "Una parte del corpo o un dolore" }, { id: "percorso", label: "Un percorso specialistico" }, { id: "non-so", label: "Non lo so: preferisco descriverlo" }]} onChange={(id) => chooseRequestKind(id as BookingKind)} />;
  } else if (step === "area") {
    content = <ChoiceList name="area" compact value={data.areaId} options={bookingAreas.map(({ id, label }) => ({ id, label }))} onChange={(id, label) => { setData((current) => ({ ...current, areaId: id, area: label, trattamentoId: "", trattamento: "" })); setError(""); }} />;
  } else if (step === "trattamento") {
    content = <ChoiceList name="trattamento" compact value={data.trattamentoId} options={[...(selectedArea?.children.map(({ id, label }) => ({ id, label })) ?? []), { id: "da-definire", label: "Non lo so / Da definire insieme" }]} onChange={(id, label) => { setData((current) => ({ ...current, trattamentoId: id, trattamento: label })); setError(""); }} />;
  } else if (step === "percorso") {
    content = <ChoiceList name="percorso" compact value={data.percorsoId} options={bookingPathways.map(({ id, label }) => ({ id, label }))} onChange={(id, label) => { setData((current) => ({ ...current, percorsoId: id, percorso: label, percorsoDettaglioId: "", percorsoDettaglio: "" })); setError(""); }} />;
  } else if (step === "percorsoDettaglio") {
    content = <ChoiceList name="percorsoDettaglio" compact value={data.percorsoDettaglioId} options={[...(selectedPathway?.children.map(({ id, label }) => ({ id, label })) ?? []), { id: "da-definire", label: "Non lo so / Da definire insieme" }]} onChange={(id, label) => { setData((current) => ({ ...current, percorsoDettaglioId: id, percorsoDettaglio: label })); setError(""); }} />;
  } else if (step === "problemaSpecifico") {
    content = <label className="block"><span className="block text-sm mb-2">Descrivi cosa senti e quale attività ti risulta difficile *</span><textarea required rows={5} maxLength={500} className={inputClass} value={data.problemaSpecifico} onChange={(event) => update("problemaSpecifico", event.target.value)} placeholder="Per esempio: sento dolore al ginocchio quando salgo le scale…" /></label>;
  } else if (step === "problema") {
    content = <div className="space-y-5"><ChoiceList name="problema" compact value={data.problema} options={problemOptions.map((option) => ({ id: option, label: option }))} onChange={(id) => { update("problema", id); if (id !== "Altro") update("problemaSpecifico", ""); }} />{data.problema === "Altro" && <label className="block"><span className="block text-sm mb-2">Descrivi brevemente la difficoltà *</span><textarea required rows={3} maxLength={500} className={inputClass} value={data.problemaSpecifico} onChange={(event) => update("problemaSpecifico", event.target.value)} /></label>}</div>;
  } else if (step === "quadro") {
    content = <div className="space-y-7"><MiniChoices name="durata" label="Da quanto tempo? *" options={durationOptions} value={data.durata} onChange={(value) => update("durata", value)} /><fieldset><legend className="text-sm font-bold mb-3">Cosa limita maggiormente? *</legend><ChoiceList name="limitazione" compact value={data.limitazione} options={limitationOptions.map((option) => ({ id: option, label: option }))} onChange={(id) => update("limitazione", id)} /></fieldset></div>;
  } else if (step === "obiettivo") {
    content = <div className="space-y-5"><ChoiceList name="obiettivo" compact value={data.obiettivo} options={goalOptions.map((option) => ({ id: option, label: option }))} onChange={(id) => { update("obiettivo", id); if (id !== "Altro") update("obiettivoSpecifico", ""); }} />{data.obiettivo === "Altro" && <label className="block"><span className="block text-sm mb-2">Qual è il tuo obiettivo? *</span><textarea required rows={3} maxLength={500} className={inputClass} value={data.obiettivoSpecifico} onChange={(event) => update("obiettivoSpecifico", event.target.value)} /></label>}</div>;
  } else if (step === "storiaClinica") {
    content = <div className="space-y-7"><MiniChoices name="giaFattoFisio" label="Hai già fatto fisioterapia per questo problema? *" options={["Sì", "No"]} value={data.giaFattoFisio} onChange={(value) => update("giaFattoFisio", value)} /><MiniChoices name="diagnosiMedica" label="Hai una diagnosi o un referto? *" options={["Sì", "No"]} value={data.diagnosiMedica} onChange={(value) => update("diagnosiMedica", value)} /><MiniChoices name="eta" label="Fascia d’età *" options={ageOptions} value={data.eta} onChange={(value) => update("eta", value)} /></div>;
  } else if (step === "referto") {
    content = <div className="space-y-5"><p className="text-sm text-white/80">Il caricamento è facoltativo. Puoi anche portare il referto alla prima seduta.</p><label className="border-2 border-dashed border-white/30 rounded-[2rem] p-6 flex flex-col gap-3 items-center text-center cursor-pointer focus-within:ring-2 focus-within:ring-white"><Upload size={36} className="text-[#55B4FF]" aria-hidden="true" /><span className="text-sm font-bold break-all">{file ? file.name : "Seleziona un referto"}</span><span className="text-xs text-white/80">PDF, JPG o PNG, massimo 5 MB</span><input ref={uploadRef} type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" className="max-w-full text-xs" onChange={(event) => { const selected = event.target.files?.[0]; if (!selected) return; const extensionValid = /\.(pdf|jpe?g|png)$/i.test(selected.name); const mimeValid = !selected.type || ["application/pdf", "image/jpeg", "image/png"].includes(selected.type); if (!extensionValid || !mimeValid || selected.size > 5 * 1024 * 1024) { setFile(null); event.target.value = ""; setError("Scegli un file PDF, JPG o PNG di dimensione non superiore a 5 MB."); return; } setFile(selected); setError(""); }} /></label>{file && <button type="button" className="text-sm underline underline-offset-4" onClick={() => { setFile(null); if (uploadRef.current) uploadRef.current.value = ""; setError(""); }}>Rimuovi allegato</button>}</div>;
  } else if (step === "disponibilita") {
    content = <div className="space-y-7"><fieldset><legend className="text-sm font-bold mb-3">Giorni preferiti *</legend><div className="flex flex-wrap gap-2">{["Lun", "Mar", "Mer", "Gio", "Ven"].map((day) => <label key={day} className={`rounded-xl border-2 p-3 text-xs font-bold cursor-pointer focus-within:ring-2 focus-within:ring-white ${data.giorniPreferiti.includes(day) ? "border-[#55B4FF] bg-[#55B4FF] text-[#022166]" : "border-white/20"}`}><input type="checkbox" className="sr-only" checked={data.giorniPreferiti.includes(day)} onChange={() => update("giorniPreferiti", data.giorniPreferiti.includes(day) ? data.giorniPreferiti.filter((item) => item !== day) : [...data.giorniPreferiti, day])} />{day}</label>)}</div></fieldset><MiniChoices name="fasciaOraria" label="Fascia oraria *" options={["Mattina", "Pomeriggio", "Sera"]} value={data.fasciaOraria} onChange={(value) => update("fasciaOraria", value)} /><MiniChoices name="urgenza" label="Il dolore è acuto o peggiorato di recente? *" options={["Sì", "No"]} value={data.urgenza} onChange={(value) => update("urgenza", value)} /><p className="text-xs text-white/70">Le preferenze non costituiscono una prenotazione: lo studio ti ricontatterà per confermare l’appuntamento. Per un’emergenza sanitaria non usare questo modulo.</p></div>;
  } else if (step === "sede") {
    content = <div className="space-y-5"><ChoiceList name="sede" compact value={data.sede} options={locationOptions.map((option) => ({ id: option, label: option }))} onChange={(id) => update("sede", id)} />{data.sede === "Domicilio" && <label className="block"><span className="block text-sm mb-2">Via, numero civico e città *</span><textarea required rows={3} maxLength={300} autoComplete="street-address" className={inputClass} value={data.indirizzo} onChange={(event) => update("indirizzo", event.target.value)} /></label>}</div>;
  } else {
    content = <div className="space-y-4"><label className="block text-sm">Nome e cognome *<input autoComplete="name" required maxLength={100} className={`${inputClass} mt-1`} value={data.nome} onChange={(event) => update("nome", event.target.value)} /></label><label className="block text-sm">Cellulare *<input type="tel" autoComplete="tel" required maxLength={30} className={`${inputClass} mt-1`} value={data.telefono} onChange={(event) => update("telefono", event.target.value)} /></label><label className="block text-sm">Email (facoltativa)<input type="email" autoComplete="email" maxLength={254} className={`${inputClass} mt-1`} value={data.email} onChange={(event) => update("email", event.target.value)} /></label><label className="flex gap-3 items-start text-xs leading-relaxed pt-3"><input type="checkbox" required checked={data.privacy} className="mt-1 h-4 w-4 shrink-0 accent-[#55B4FF]" onChange={(event) => update("privacy", event.target.checked)} /><span>Accetto il trattamento dei dati personali secondo la <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="underline text-[#55B4FF] underline-offset-4">Privacy Policy</Link>. *</span></label><label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">Sito web<input tabIndex={-1} autoComplete="off" value={data.website} onChange={(event) => update("website", event.target.value)} /></label></div>;
  }

  return (
    <form id="valutazione" aria-labelledby="assessment-title" noValidate onSubmit={onSubmit} className="scroll-mt-32 bg-[#022166] rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[620px] flex flex-col text-white">
      <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-[#55B4FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <p id="assessment-title" className="relative text-[#55B4FF] text-xs font-black uppercase tracking-widest mb-2">Richiedi una valutazione</p>
      <p className="relative text-white/70 text-xs leading-relaxed mb-6">{contextLabel}</p>
      <div role="progressbar" aria-label="Avanzamento richiesta" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={index + 1} className="relative h-1 bg-white/10 rounded-full mb-3 overflow-hidden"><div className="h-full bg-[#55B4FF] transition-all duration-300" style={{ width: `${((index + 1) / steps.length) * 100}%` }} /></div>
      <p className="relative text-white/70 text-xs mb-6">Passaggio {index + 1} di {steps.length}</p>
      <fieldset disabled={isSending} className="relative flex-grow min-w-0"><legend className="sr-only">{titles[step]}</legend><h2 ref={headingRef} tabIndex={-1} className="text-2xl font-bold mb-6 tracking-tight outline-none">{titles[step]}</h2>{content}</fieldset>
      {error && <p role="alert" className="relative mt-5 p-3 rounded-xl bg-white text-[#022166] text-sm font-semibold">{error}</p>}
      <div className="relative mt-8 flex gap-3">{index > 0 && <button type="button" disabled={isSending} aria-label="Passaggio precedente" className="p-4 border-2 border-white/20 rounded-xl hover:border-[#55B4FF] focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-50" onClick={() => { setError(""); setStep(steps[index - 1]); }}><ChevronLeft size={20} aria-hidden="true" /></button>}<button type="submit" disabled={isSending} className="flex-1 bg-[#55B4FF] text-[#022166] py-4 px-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:opacity-60 disabled:cursor-wait">{isSending ? "Invio in corso…" : step === "contatti" ? "Invia richiesta" : step === "referto" && !file ? "Continua senza allegato" : "Continua"}</button></div>
    </form>
  );
}
