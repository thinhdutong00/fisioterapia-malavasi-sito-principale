"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, ChevronRight, Activity, 
  ShieldCheck, Zap, Waves, Target, 
  CheckCircle2, Calendar, Lock as LockIcon, 
  Unlock as UnlockIcon,
  Trophy, Stethoscope, Unlock, Info,
  ChevronLeft, Upload, FileText, CheckCircle,
  MapPin, AlertTriangle, Star
} from 'lucide-react';

export default function CapsuliteAdesivaPage() {
  const router = useRouter();
  
  // --- LOGICA MODULO PRENOTAZIONE ---
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    problema: 'Capsulite Adesiva', // Pre-impostato per il contesto pagina
    problemaSpecifico: '',
    durata: '',
    limitazione: '',
    obiettivo: '',
    obiettivoSpecifico: '',
    giaFattoFisio: '',
    diagnosiMedica: '',
    eta: '',
    giorniPreferiti: [] as string[],
    fasciaOraria: '',
    urgenza: '',
    sede: '',
    indirizzo: '',
    nome: '',
    telefono: '',
    email: '',
    privacy: false
  });

  const stepTitles: { [key: number]: string } = {
    1: "Inquadramento clinico",
    1.2: "Specifica problema",
    2: "Analisi temporale",
    3: "Impatto quotidiano",
    4: "Obiettivo terapeutico",
    4.2: "Dettaglio obiettivo",
    5: "Storico trattamenti",
    6: "Diagnosi medica",
    6.5: "Documentazione clinica",
    7: "Profilo anagrafico",
    8: "Disponibilità e Urgenza",
    9: "Luogo della seduta",
    10: "Logistica domicilio",
    11: "Conferma e Contatti"
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const nextStep = () => {
    if (step === 1) {
      formData.problema === 'Altro' ? setStep(1.2) : setStep(2);
      return;
    }
    if (step === 1.2) { setStep(2); return; }
    if (step === 4) {
      formData.obiettivo === 'Altro' ? setStep(4.2) : setStep(5);
      return;
    }
    if (step === 4.2) { setStep(5); return; }
    if (step === 6) {
      formData.diagnosiMedica === 'Sì' ? setStep(6.5) : setStep(7);
      return;
    }
    if (step === 6.5) { setStep(7); return; }
    if (step === 9 && formData.sede !== 'Domicilio') {
      setStep(11);
    } else {
      setStep((s) => Math.min(s + 1, 11));
    }
  };

  const prevStep = () => {
    if (step === 2) {
      formData.problema === 'Altro' ? setStep(1.2) : setStep(1);
      return;
    }
    if (step === 1.2) { setStep(1); return; }
    if (step === 5) {
      formData.obiettivo === 'Altro' ? setStep(4.2) : setStep(4);
      return;
    }
    if (step === 4.2) { setStep(4); return; }
    if (step === 7) {
      formData.diagnosiMedica === 'Sì' ? setStep(6.5) : setStep(6);
      return;
    }
    if (step === 6.5) { setStep(6); return; }
    if (step === 11 && formData.sede !== 'Domicilio') {
      setStep(9);
    } else {
      setStep((s) => Math.max(s - 1, 1));
    }
  };

  const toggleGiorno = (giorno: string) => {
    const attuali = formData.giorniPreferiti;
    setFormData({
      ...formData,
      giorniPreferiti: attuali.includes(giorno) 
        ? attuali.filter(g => g !== giorno) 
        : [...attuali, giorno]
    });
  };

  const inviaPrenotazione = async () => {
    setIsSending(true);
    try {
      let attachment = null;
      if (file) {
        const base64Content = await fileToBase64(file);
        attachment = { filename: file.name, content: base64Content };
      }
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, attachment }),
      });
      if (response.ok) router.push('/conferma');
      else alert("Errore tecnico. Riprova.");
    } catch (error) {
      alert("Errore di connessione.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#022166]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#55B4FF]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* BREADCRUMB */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={12} />
            <span className="text-[#022166]">Capsulite Adesiva</span>
          </nav>

          {/* HERO SECTION CON MODULO INTEGRATO */}
          <header className="mb-24 grid lg:grid-cols-2 gap-12 items-start">
            
            {/* SINISTRA: TESTO */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Specialista Spalla Congelata</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
                Sblocca la tua <br />
                libertà di <span className="text-[#55B4FF]">movimento.</span>
              </h1>

              <p className="max-w-xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                La spalla congelata non è solo un dolore: è un ostacolo alla tua vita. Un approccio specialistico <strong>OMPT</strong> può ridurre drasticamente i tempi di guarigione.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <a href="tel:+393338225464" className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-[#022166] uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-all">
                   Parla con un esperto
                 </a>
              </div>
            </div>

            {/* DESTRA: MODULO MULTISTEP */}
            <div className="bg-[#022166] rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#55B4FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-[#55B4FF] transition-all duration-700" style={{ width: `${(step / 11) * 100}%` }} />
              </div>

              <div className="relative z-10 flex-grow">
                <span className="text-[#55B4FF] font-bold text-[9px] uppercase tracking-[0.2em] block mb-2 italic">
                  {stepTitles[step]}
                </span>

                {/* STEP 1: CONTESTO CAPSULITE */}
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Qual è il problema principale?</h3>
                    {['Spalla bloccata', 'Dolore notturno spalla', 'Altro'].map((opzione) => (
                      <button 
                        key={opzione}
                        onClick={() => setFormData({...formData, problema: opzione})}
                        className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${
                          formData.problema === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'
                        }`}
                      >
                        <span className="text-sm uppercase tracking-tighter">{opzione}</span>
                        {formData.problema === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {/* STEP 1.2: SPECIFICA ALTRO */}
                {step === 1.2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Descrivi i sintomi</h3>
                    <input 
                      type="text"
                      placeholder="Es: fitte improvvise, braccio pesante..." 
                      className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold" 
                      value={formData.problemaSpecifico} 
                      onChange={(e) => setFormData({...formData, problemaSpecifico: e.target.value})} 
                    />
                  </div>
                )}

                {/* STEP 2: DURATA */}
                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Da quanto tempo è bloccata?</h3>
                    {['Meno di 3 mesi', 'Da 3 a 9 mesi', 'Oltre 9 mesi'].map((opzione) => (
                      <button 
                        key={opzione}
                        onClick={() => setFormData({...formData, durata: opzione})}
                        className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${
                          formData.durata === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'
                        }`}
                      >
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.durata === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {/* STEP 3: LIMITAZIONE */}
                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Quanto limita il sonno/lavoro?</h3>
                    {['Poco', 'Abbastanza', 'Molto (non dormo)'].map((opzione) => (
                      <button 
                        key={opzione}
                        onClick={() => setFormData({...formData, limitazione: opzione})}
                        className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${
                          formData.limitazione === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'
                        }`}
                      >
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.limitazione === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {/* STEP 4: OBIETTIVO */}
                {step === 4 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Il tuo obiettivo?</h3>
                    {['Ridurre il dolore', 'Recuperare movimento', 'Tornare a dormire', 'Evitare infiltrazioni', 'Altro'].map((opzione) => (
                      <button 
                        key={opzione}
                        onClick={() => setFormData({...formData, obiettivo: opzione})}
                        className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${
                          formData.obiettivo === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'
                        }`}
                      >
                        <span className="text-sm uppercase tracking-tighter">{opzione}</span>
                        {formData.obiettivo === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {/* STEP 4.2, 5, 6, 6.5, 7 - (Standard) */}
                {step === 4.2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Dettaglia il traguardo</h3>
                    <textarea placeholder="Descrivi qui..." className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold min-h-[100px] resize-none" value={formData.obiettivoSpecifico} onChange={(e) => setFormData({...formData, obiettivoSpecifico: e.target.value})} />
                  </div>
                )}

                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Hai già fatto fisioterapia?</h3>
                    {['Sì', 'No'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, giaFattoFisio: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.giaFattoFisio === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.giaFattoFisio === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 6 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Hai una diagnosi medica?</h3>
                    {['Sì', 'No'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, diagnosiMedica: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.diagnosiMedica === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.diagnosiMedica === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 6.5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Carica referto</h3>
                    <div className="relative group p-8 border-2 border-dashed border-white/20 rounded-2xl bg-white/5">
                      <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} className="absolute inset-0 opacity-0 cursor-pointer" />
                      {file ? <><FileText size={32} className="mx-auto text-[#55B4FF] mb-2" /><p className="text-white text-xs font-bold">{file.name}</p></> : <><Upload size={32} className="mx-auto text-white/20 mb-2" /><p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Seleziona PDF o JPG</p></>}
                    </div>
                  </div>
                )}

                {step === 7 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Tua fascia d'età?</h3>
                    {['18–35', '36–50', '51–65', '65+'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, eta: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.eta === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.eta === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {/* STEP 8: DISPONIBILITA + URGENZA */}
                {step === 8 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold mb-2">Giorni preferiti</p>
                        <div className="grid grid-cols-3 gap-2">
                          {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'].map((g) => (
                            <button key={g} onClick={() => toggleGiorno(g)} className={`p-2 rounded-lg border-2 text-[10px] font-bold transition-all ${formData.giorniPreferiti.includes(g) ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white hover:border-white/30'}`}>{g}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold mb-2">Fascia oraria</p>
                        <div className="grid grid-cols-3 gap-2">
                          {['Mattina', 'Pomeriggio', 'Sera'].map((f) => (
                            <button key={f} onClick={() => setFormData({...formData, fasciaOraria: f})} className={`p-2 rounded-lg border-2 text-[10px] font-bold transition-all ${formData.fasciaOraria === f ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white hover:border-white/30'}`}>{f}</button>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold mb-3">È un caso urgente?</p>
                        <div className="flex gap-2">
                          {['Sì', 'No'].map((u) => (
                            <button key={u} onClick={() => setFormData({...formData, urgenza: u})} className={`flex-1 p-3 rounded-xl border-2 font-bold text-[10px] transition-all flex justify-center items-center gap-2 ${formData.urgenza === u ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                              {u === 'Sì' && <AlertTriangle size={12} />}
                              <span className="uppercase">{u === 'Sì' ? 'Sì, ho dolore' : 'No'}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 9-11 (Standard) */}
                {step === 9 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Sede preferita?</h3>
                    {['Sede Cavezzo (Mo)', 'Sede Rovereto (Mo)', 'Domicilio'].map((s) => (
                      <button key={s} onClick={() => setFormData({...formData, sede: s})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.sede === s ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{s}</span>
                        {formData.sede === s ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 10 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-2"><MapPin size={24} /> Indirizzo</h3>
                    <input type="text" placeholder="Via, Civico, Città" className="w-full bg-white/5 border-b-2 border-white/20 p-4 text-white font-bold" value={formData.indirizzo} onChange={(e) => setFormData({...formData, indirizzo: e.target.value})} />
                  </div>
                )}

                {/* STEP 11: CONTATTI (Versione con Link Privacy) */}
{step === 11 && (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Ultime informazioni</h3>
    <input type="text" placeholder="Nome e Cognome" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold outline-none focus:border-[#55B4FF]" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
    <input type="tel" placeholder="Telefono" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold outline-none focus:border-[#55B4FF]" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
    <input type="email" placeholder="Email" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold outline-none focus:border-[#55B4FF]" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
    
    {/* CHECKBOX PRIVACY AGGIORNATA */}
    <div className="flex items-start gap-3 mt-6">
      <input 
        type="checkbox" 
        id="privacy"
        className="mt-1 accent-[#55B4FF] w-4 h-4 cursor-pointer" 
        checked={formData.privacy} 
        onChange={(e) => setFormData({...formData, privacy: e.target.checked})} 
      />
      <label htmlFor="privacy" className="text-[10px] text-white/50 leading-relaxed font-medium cursor-pointer">
        Ho letto e accetto l'
        <Link 
          href="/privacy-policy" 
          target="_blank" 
          className="text-[#55B4FF] hover:underline ml-1 font-bold"
        >
          informativa sulla privacy
        </Link>
        . I tuoi dati saranno trattati solo per gestire la richiesta di prenotazione.
      </label>
    </div>
  </div>
)}
              </div>

              {/* NAVIGAZIONE */}
              <div className="relative z-10 mt-8 flex gap-3">
                {step > 1 && (
                  <button onClick={prevStep} className="p-4 border-2 border-white/10 rounded-xl text-white hover:border-[#55B4FF] transition-all">
                    <ChevronLeft size={20} />
                  </button>
                )}
                <button 
                  onClick={step === 11 ? inviaPrenotazione : nextStep}
                  disabled={isSending || (step === 11 && !formData.privacy)}
                  className="flex-1 bg-[#55B4FF] text-[#022166] py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all disabled:opacity-30"
                >
                  {isSending ? 'Invio...' : (step === 11 ? 'Invia Richiesta' : 'Continua')}
                </button>
              </div>
            </div>
          </header>

          {/* ANALISI DELLA PATOLOGIA */}
          <section className="mb-32">
            <div className="bg-white rounded-[4rem] p-8 md:p-20 border border-slate-100 shadow-sm">
              <div className="grid lg:grid-cols-2 gap-16 text-left">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.3em]">
                    <Info size={14} /> Comprendere la Capsulite
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight leading-tight">
                    Perché la spalla si è "congelata"?
                  </h2>
                  <p className="text-lg text-slate-600 font-light leading-relaxed">
                    La capsulite adesiva è un'infiammazione profonda della capsula articolare che porta a un progressivo irrigidimento. È un percorso che attraversa tre fasi distinte: **Freezing** (dolore acuto), **Frozen** (blocco massimo) e **Thawing** (sblocco).
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-[#F8FAFC] rounded-3xl">
                      <LockIcon className="text-[#022166] mb-3" size={24} />
                      <h4 className="font-bold text-[#022166] text-sm uppercase mb-2">Fase Blocco</h4>
                      <p className="text-slate-500 text-xs italic">Dolore intenso, specialmente di notte.</p>
                    </div>
                    <div className="p-6 bg-[#E0F2FE] rounded-3xl">
                      <UnlockIcon size={24} className="text-[#55B4FF] mb-3" />
                      <h4 className="font-bold text-[#022166] text-sm uppercase mb-2">Fase Recupero</h4>
                      <p className="text-slate-500 text-xs italic">Graduale ritorno alla mobilità attiva.</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                   <div className="absolute inset-0 bg-[#022166]/5 rounded-[3rem] -rotate-2"></div>
                   <div className="relative bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-lg z-10 w-full">
                      <h3 className="text-xl font-bold text-[#022166] mb-8">Il dolore non deve durare anni.</h3>
                      <ul className="space-y-6">
                        {[
                          "Trattamenti manuali per il controllo del dolore",
                          "Mobilizzazioni specifiche in gradi sicuri",
                          "Esercizi di 'allungamento' capsulare indolore",
                          "Supporto e coordinazione con il medico specialista"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-left">
                            <CheckCircle2 className="text-[#55B4FF] flex-shrink-0" size={20} />
                            <p className="text-slate-600 text-sm font-medium">{item}</p>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROTOCOLLO CLINICO */}
          <section id="percorso" className="mb-32">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 text-left">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter mb-6">Il Metodo Malavasi.</h2>
                <p className="text-slate-500 text-lg font-light">Non forziamo mai il blocco. Lo accompagniamo verso la risoluzione attraverso la scienza del movimento.</p>
              </div>
              <div className="bg-[#022166] text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.3em]">
                Evidence Based Medicine
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { i: Stethoscope, t: "Valutazione Differenziale", d: "Escludiamo altre patologie della spalla per confermare la diagnosi di capsulite." },
                { i: Waves, t: "Gestione Infiammatoria", d: "Utilizziamo tecniche manuali dolci per abbassare la reattività del sistema nervoso." },
                { i: Activity, t: "Recupero Funzionale", d: "Protocolli di esercizio terapeutico per riabilitare la forza e la mobilità persa." }
              ].map((step, idx) => (
                <div key={idx} className="group p-10 bg-white rounded-[3rem] border border-slate-100 hover:border-[#55B4FF] transition-all duration-500 shadow-sm hover:shadow-xl text-left">
                  <div className="w-16 h-16 bg-[#F8FAFC] group-hover:bg-[#55B4FF] rounded-2xl flex items-center justify-center mb-8 transition-colors">
                    <step.i className="text-[#022166] group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-[#022166] mb-4">{step.t}</h4>
                  <p className="text-slate-500 leading-relaxed font-light">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIAL E CTA FINALE */}
          <section className="bg-[#022166] p-12 md:p-24 rounded-[4rem] relative overflow-hidden text-white shadow-2xl">
             <div className="absolute top-0 right-0 p-12 opacity-10">
                <Unlock size={300} />
             </div>
             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center text-left">
                <div>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
                    Smetti di convivere <br />con il <span className="text-[#55B4FF]">blocco.</span>
                  </h3>
                  <p className="text-white/60 text-xl font-light mb-10 leading-relaxed">
                    Ogni giorno perso è un giorno di dolore inutile. Prenota oggi la tua valutazione e ricevi un piano d'azione chiaro e professionale.
                  </p>
                  <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-95">
                    Inizia il modulo sopra <ChevronRight size={18} className="inline ml-2" />
                  </button>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem]">
                   <div className="flex gap-1 text-[#55B4FF] mb-6">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="currentColor" />)}
                   </div>
                   <p className="text-xl font-light italic text-white/90 mb-6">
                    "La mia spalla era letteralmente immobile. Mirco mi ha spiegato ogni fase del percorso, dandomi la calma necessaria. Oggi muovo il braccio al 100%."
                   </p>
                   <span className="text-[10px] font-black uppercase tracking-widest text-[#55B4FF]">Giulia, Insegnante</span>
                </div>
             </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
            <Link href="/trattamenti" className="flex items-center gap-2 text-sm font-bold hover:text-[#022166] transition-colors">
              <ArrowLeft size={16} /> Altri percorsi riabilitativi
            </Link>
            <p className="text-[10px] font-black uppercase tracking-widest text-center">
              Fisioterapia Malavasi — Mirco Malavasi OMPT.
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}