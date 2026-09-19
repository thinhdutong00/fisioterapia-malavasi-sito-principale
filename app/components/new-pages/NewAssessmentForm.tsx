"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle, ChevronLeft, Upload } from "lucide-react";

export type AssessmentConfig = {
  condition: string;
  symptoms: string[];
  limitations: string[];
  goals: string[];
};

const initialData = {
  problema: "", problemaSpecifico: "", durata: "", limitazione: "",
  obiettivo: "", obiettivoSpecifico: "", giaFattoFisio: "", diagnosiMedica: "",
  eta: "", giorniPreferiti: [] as string[], fasciaOraria: "", urgenza: "",
  sede: "", indirizzo: "", nome: "", telefono: "", email: "", privacy: false,
};
type FormData = typeof initialData;
type Step = "problema" | "problemaSpecifico" | "durata" | "limitazione" | "obiettivo" | "obiettivoSpecifico" | "giaFattoFisio" | "diagnosiMedica" | "referto" | "eta" | "disponibilita" | "sede" | "indirizzo" | "contatti";

const titles: Record<Step, string> = {
  problema: "Qual è la difficoltà principale?", problemaSpecifico: "Raccontaci cosa senti",
  durata: "Da quanto tempo?", limitazione: "Cosa limita la tua giornata?",
  obiettivo: "Da cosa vorresti ripartire?", obiettivoSpecifico: "Il tuo obiettivo personale",
  giaFattoFisio: "Hai già fatto fisioterapia?", diagnosiMedica: "Hai una diagnosi o un referto?",
  referto: "Vuoi condividere un referto?", eta: "Qual è la tua fascia d’età?",
  disponibilita: "Quando preferisci incontrarci?", sede: "Dove preferisci la seduta?",
  indirizzo: "Qual è l’indirizzo del domicilio?", contatti: "Lasciaci i tuoi contatti",
};

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = () => reject(new Error("Lettura del file non riuscita"));
    reader.readAsDataURL(file);
  });
}

export default function NewAssessmentForm({ config }: { config: AssessmentConfig }) {
  const router = useRouter();
  const [data, setData] = useState<FormData>(initialData);
  const [step, setStep] = useState<Step>("problema");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const sendingRef = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lastStep = useRef(step);
  const uploadRef = useRef<HTMLInputElement>(null);

  const steps: Step[] = [
    "problema", ...(data.problema === "Altro" ? ["problemaSpecifico" as const] : []),
    "durata", "limitazione", "obiettivo", ...(data.obiettivo === "Altro" ? ["obiettivoSpecifico" as const] : []),
    "giaFattoFisio", "diagnosiMedica", ...(data.diagnosiMedica === "Sì" ? ["referto" as const] : []),
    "eta", "disponibilita", "sede", ...(data.sede === "Domicilio" ? ["indirizzo" as const] : []), "contatti",
  ];
  const index = steps.indexOf(step);

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

  const choices: Partial<Record<Step, string[]>> = {
    problema: [...config.symptoms, "Altro"],
    durata: ["Da meno di un mese", "Da 1 a 3 mesi", "Da oltre 3 mesi", "Dopo un intervento"],
    limitazione: [...config.limitations, "Un’altra attività"],
    obiettivo: [...config.goals, "Altro"],
    giaFattoFisio: ["Sì", "No"], diagnosiMedica: ["Sì", "No"],
    eta: ["Sotto i 25", "25–45", "46–65", "Over 65"],
    sede: ["Sede Cavezzo", "Sede Rovereto", "Domicilio"],
  };

  function validate(): string {
    if (choices[step] && !data[step as keyof FormData]) return "Seleziona una risposta per continuare.";
    if (step === "problemaSpecifico" && !data.problemaSpecifico.trim()) return "Descrivi brevemente la tua difficoltà.";
    if (step === "obiettivoSpecifico" && !data.obiettivoSpecifico.trim()) return "Scrivi l’obiettivo che vorresti raggiungere.";
    if (step === "indirizzo" && data.indirizzo.trim().length < 5) return "Inserisci via, numero civico e città.";
    if (step === "disponibilita" && (!data.giorniPreferiti.length || !data.fasciaOraria || !data.urgenza)) return "Scegli almeno un giorno, una fascia oraria e indica se hai dolore acuto.";
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
    if (validationError) { setError(validationError); return; }
    if (step !== "contatti") { setError(""); setStep(steps[index + 1]); return; }
    sendingRef.current = true;
    setIsSending(true);
    setError("");
    try {
      const attachment = file && data.diagnosiMedica === "Sì"
        ? { filename: file.name, content: await fileToBase64(file) } : null;
      const response = await fetch("/api/send", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          problema: data.problema === "Altro" ? "Altro" : `${config.condition} — ${data.problema}`,
          problemaSpecifico: data.problema === "Altro" ? `${config.condition}: ${data.problemaSpecifico.trim()}` : "",
          obiettivoSpecifico: data.obiettivo === "Altro" ? data.obiettivoSpecifico.trim() : "",
          indirizzo: data.sede === "Domicilio" ? data.indirizzo.trim() : "",
          nome: data.nome.trim(), telefono: data.telefono.trim(), email: data.email.trim(), attachment,
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
  const smallChoice = "rounded-xl border-2 p-3 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

  return (
    <form id="valutazione" aria-labelledby="assessment-title" noValidate onSubmit={onSubmit} className="scroll-mt-32 bg-[#022166] rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[620px] flex flex-col text-white">
      <div aria-hidden="true" className="absolute top-0 right-0 w-64 h-64 bg-[#55B4FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <p id="assessment-title" className="relative text-[#55B4FF] text-xs font-black uppercase tracking-widest mb-2">Richiedi una valutazione</p>
      <p className="relative text-white/70 text-xs leading-relaxed mb-6">{config.condition}</p>
      <div role="progressbar" aria-label="Avanzamento richiesta" aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={index + 1} className="relative h-1 bg-white/10 rounded-full mb-3 overflow-hidden">
        <div className="h-full bg-[#55B4FF] transition-all duration-300" style={{ width: `${((index + 1) / steps.length) * 100}%` }} />
      </div>
      <p className="relative text-white/70 text-xs mb-6">Passaggio {index + 1} di {steps.length}</p>
      <fieldset disabled={isSending} className="relative flex-grow min-w-0">
        <legend className="sr-only">{titles[step]}</legend>
        <h2 ref={headingRef} tabIndex={-1} className="text-2xl font-bold mb-6 tracking-tight outline-none">{titles[step]}</h2>
        {choices[step] && <div className="space-y-3">{choices[step]!.map((option) => (
          <label key={option} className={`relative w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex gap-3 items-center cursor-pointer focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-[#022166] ${data[step as keyof FormData] === option ? "border-[#55B4FF] bg-[#55B4FF] text-[#022166]" : "border-white/20 bg-white/5 text-white hover:border-white/50"}`}>
            <input className="sr-only" type="radio" name={step} value={option} checked={data[step as keyof FormData] === option} onChange={() => update(step as keyof FormData, option)} />
            <span className="text-sm grow">{option}</span>
            {data[step as keyof FormData] === option ? <CheckCircle size={20} aria-hidden="true" className="shrink-0" /> : <span aria-hidden="true" className="w-5 h-5 rounded-full border-2 border-white/30 shrink-0" />}
          </label>
        ))}</div>}
        {(step === "problemaSpecifico" || step === "obiettivoSpecifico" || step === "indirizzo") && <label className="block">
          <span className="block text-sm mb-2">{step === "indirizzo" ? "Via, numero civico e città *" : "La tua risposta *"}</span>
          <textarea required rows={3} maxLength={500} className={inputClass} value={data[step]} autoComplete={step === "indirizzo" ? "street-address" : "off"} onChange={(e) => update(step, e.target.value)} />
        </label>}
        {step === "referto" && <div className="space-y-5">
          <p className="text-sm text-white/80">Il caricamento è facoltativo. Puoi anche portare il referto alla prima seduta.</p>
          <label className="border-2 border-dashed border-white/30 rounded-[2rem] p-6 flex flex-col gap-3 items-center text-center cursor-pointer focus-within:ring-2 focus-within:ring-white">
            <Upload size={36} className="text-[#55B4FF]" aria-hidden="true" />
            <span className="text-sm font-bold break-all">{file ? file.name : "Seleziona un referto"}</span>
            <span className="text-xs text-white/80">PDF o JPG, massimo 5 MB</span>
            <input ref={uploadRef} type="file" accept=".pdf,.jpg,.jpeg,application/pdf,image/jpeg" className="max-w-full text-xs" onChange={(event) => {
              const selected = event.target.files?.[0];
              if (!selected) return;
              const extensionValid = /\.(pdf|jpe?g)$/i.test(selected.name);
              const mimeValid = !selected.type || ["application/pdf", "image/jpeg"].includes(selected.type);
              if (!extensionValid || !mimeValid || selected.size > 5 * 1024 * 1024) {
                setFile(null); event.target.value = ""; setError("Scegli un file PDF o JPG di dimensione non superiore a 5 MB."); return;
              }
              setFile(selected); setError("");
            }} />
          </label>
          {file && <button type="button" className="text-sm underline underline-offset-4" onClick={() => { setFile(null); if (uploadRef.current) uploadRef.current.value = ""; setError(""); }}>Rimuovi allegato</button>}
        </div>}
        {step === "disponibilita" && <div className="space-y-6">
          <fieldset><legend className="text-sm font-bold mb-3">Giorni preferiti *</legend><div className="flex flex-wrap gap-2">{["Lun", "Mar", "Mer", "Gio", "Ven"].map((day) => <label key={day} className={`${smallChoice} cursor-pointer focus-within:ring-2 focus-within:ring-white ${data.giorniPreferiti.includes(day) ? "border-[#55B4FF] bg-[#55B4FF] text-[#022166]" : "border-white/20"}`}><input type="checkbox" className="sr-only" checked={data.giorniPreferiti.includes(day)} onChange={() => update("giorniPreferiti", data.giorniPreferiti.includes(day) ? data.giorniPreferiti.filter((item) => item !== day) : [...data.giorniPreferiti, day])} />{day}</label>)}</div></fieldset>
          <fieldset><legend className="text-sm font-bold mb-3">Fascia oraria *</legend><div className="flex flex-wrap gap-2">{["Mattina", "Pomeriggio", "Sera"].map((time) => <label key={time} className={`${smallChoice} cursor-pointer focus-within:ring-2 focus-within:ring-white ${data.fasciaOraria === time ? "border-[#55B4FF] bg-[#55B4FF] text-[#022166]" : "border-white/20"}`}><input type="radio" name="fasciaOraria" className="sr-only" checked={data.fasciaOraria === time} onChange={() => update("fasciaOraria", time)} />{time}</label>)}</div></fieldset>
          <fieldset><legend className="text-sm font-bold mb-3">Hai dolore acuto? *</legend><div className="flex gap-3">{["Sì", "No"].map((value) => <label key={value} className={`${smallChoice} cursor-pointer min-w-20 text-center focus-within:ring-2 focus-within:ring-white ${data.urgenza === value ? "border-[#55B4FF] bg-[#55B4FF] text-[#022166]" : "border-white/20"}`}><input type="radio" name="urgenza" className="sr-only" checked={data.urgenza === value} onChange={() => update("urgenza", value)} />{value}</label>)}</div></fieldset>
          <p className="text-xs text-white/80">Indica le tue preferenze: disponibilità e appuntamento saranno confermati dallo studio.</p>
        </div>}
        {step === "contatti" && <div className="space-y-4">
          <label className="block text-sm">Nome e cognome *<input autoComplete="name" required maxLength={100} className={`${inputClass} mt-1`} value={data.nome} onChange={(e) => update("nome", e.target.value)} /></label>
          <label className="block text-sm">Cellulare *<input type="tel" autoComplete="tel" required maxLength={30} className={`${inputClass} mt-1`} value={data.telefono} onChange={(e) => update("telefono", e.target.value)} /></label>
          <label className="block text-sm">Email (facoltativa)<input type="email" autoComplete="email" maxLength={254} className={`${inputClass} mt-1`} value={data.email} onChange={(e) => update("email", e.target.value)} /></label>
          <label className="flex gap-3 items-start text-xs leading-relaxed pt-3"><input type="checkbox" required checked={data.privacy} className="mt-1 h-4 w-4 shrink-0 accent-[#55B4FF]" onChange={(e) => update("privacy", e.target.checked)} /><span>Accetto il trattamento dei dati personali secondo la <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="underline text-[#55B4FF] underline-offset-4">Privacy Policy</Link>. *</span></label>
        </div>}
      </fieldset>
      {error && <p role="alert" className="relative mt-5 p-3 rounded-xl bg-white text-[#022166] text-sm font-semibold">{error}</p>}
      <div className="relative mt-8 flex gap-3">
        {index > 0 && <button type="button" disabled={isSending} aria-label="Passaggio precedente" className="p-4 border-2 border-white/20 rounded-xl hover:border-[#55B4FF] focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-50" onClick={() => { setError(""); setStep(steps[index - 1]); }}><ChevronLeft size={20} aria-hidden="true" /></button>}
        <button type="submit" disabled={isSending} className="flex-1 bg-[#55B4FF] text-[#022166] py-4 px-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:opacity-60 disabled:cursor-wait">{isSending ? "Invio in corso…" : step === "contatti" ? "Invia richiesta" : step === "referto" && !file ? "Continua senza allegato" : "Continua"}</button>
      </div>
    </form>
  );
}
