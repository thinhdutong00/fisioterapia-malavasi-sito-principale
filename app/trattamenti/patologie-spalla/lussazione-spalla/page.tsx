"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, ChevronRight, Zap, Target, 
  CheckCircle2, Calendar, ShieldCheck, Trophy,
  AlertTriangle, Move, Waves, Activity,
  ChevronLeft, Upload, FileText, CheckCircle,
  Clock, MapPin
} from 'lucide-react';

export default function InstabilitaLussazionePage() {
  const router = useRouter();
  
  // --- LOGICA MODULO PRENOTAZIONE ---
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    problema: 'Lussazione Spalla', // Pre-impostato per il contesto pagina
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
    1: "Localizzazione dolore",
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
    9: "Luogo del trattamento",
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
      
      {/* SFONDO DINAMICO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* NAV / SEO BREADCRUMB */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={12} />
            <span className="text-[#022166]">Lussazione e Instabilità</span>
          </nav>

          {/* HERO SECTION CON MODULO INTEGRATO */}
          <header className="mb-20 grid lg:grid-cols-2 gap-12 items-start">
            
            {/* SINISTRA: TESTO */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Recupero Post-Traumatico OMPT</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
                Lussazione: <br />
                <span className="text-[#55B4FF]">Muoviti senza paura.</span>
              </h1>

              <p className="max-w-xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                Dopo che un'articolazione "esce", il vero nemico è la perdita di fiducia nel movimento. Ripristiniamo la tua <strong>stabilità meccanica</strong> per impedire nuovi episodi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <a href="tel:+393338225464" className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-[#022166] uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-all">
                   Parla con un esperto
                 </a>
              </div>
            </div>

            {/* DESTRA: MODULO MULTISTEP */}
            <div className="bg-[#022166] rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col">
              {/* Decorazione interna modulo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#55B4FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              {/* Progress Bar modulo */}
              <div className="relative z-10 w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                <div 
                  className="h-full bg-[#55B4FF] transition-all duration-700" 
                  style={{ width: `${(step / 11) * 100}%` }} 
                />
              </div>

              <div className="relative z-10 flex-grow">
                <span className="text-[#55B4FF] font-bold text-[9px] uppercase tracking-[0.2em] block mb-2 italic">
                  {stepTitles[step]}
                </span>

                {/* STEP 1: SPECIFICO PER LUSSAZIONE */}
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Cosa è successo?</h3>
                    {['Lussazione Spalla', 'Altro'].map((opzione) => (
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
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Descrivi il problema</h3>
                    <input 
                      type="text"
                      placeholder="Es: Sublussazione rotula, instabilità cronica..." 
                      className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold" 
                      value={formData.problemaSpecifico} 
                      onChange={(e) => setFormData({...formData, problemaSpecifico: e.target.value})} 
                    />
                  </div>
                )}

                {/* STEP 2: DURATA */}
                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Da quanto persiste?</h3>
                    {['Da pochi giorni', 'Da settimane', 'Da mesi / anni'].map((opzione) => (
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
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Quanto ti limita?</h3>
                    {['Poco', 'Abbastanza', 'Molto'].map((opzione) => (
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
                    {['Eliminare il dolore', 'Tornare ad allenarmi', 'Muovermi senza timore', 'Evitare intervento', 'Altro'].map((opzione) => (
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

                {/* STEP 4.2: DETTAGLIO OBIETTIVO */}
                {step === 4.2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Dettaglia il traguardo</h3>
                    <textarea 
                      placeholder="Descrivi qui..." 
                      className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold min-h-[100px] resize-none" 
                      value={formData.obiettivoSpecifico} 
                      onChange={(e) => setFormData({...formData, obiettivoSpecifico: e.target.value})} 
                    />
                  </div>
                )}

                {/* STEP 5: STORICO */}
                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Hai già fatto fisio?</h3>
                    {['Sì', 'No'].map((opzione) => (
                      <button 
                        key={opzione}
                        onClick={() => setFormData({...formData, giaFattoFisio: opzione})}
                        className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${
                          formData.giaFattoFisio === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'
                        }`}
                      >
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.giaFattoFisio === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {/* STEP 6: DIAGNOSI */}
                {step === 6 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Hai una diagnosi?</h3>
                    {['Sì', 'No'].map((opzione) => (
                      <button 
                        key={opzione}
                        onClick={() => setFormData({...formData, diagnosiMedica: opzione})}
                        className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${
                          formData.diagnosiMedica === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'
                        }`}
                      >
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.diagnosiMedica === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {/* STEP 6.5: CARICAMENTO FILE */}
                {step === 6.5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Carica referto</h3>
                    <div className="relative group p-8 border-2 border-dashed border-white/20 rounded-2xl bg-white/5">
                      <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} className="absolute inset-0 opacity-0 cursor-pointer" />
                      {file ? <><FileText size={32} className="mx-auto text-[#55B4FF] mb-2" /><p className="text-white text-xs font-bold">{file.name}</p></> : <><Upload size={32} className="mx-auto text-white/20 mb-2" /><p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Seleziona PDF o JPG</p></>}
                    </div>
                  </div>
                )}

                {/* STEP 7: ETA */}
                {step === 7 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Tua età?</h3>
                    {['18–25', '26–35', '36–50', '50+'].map((opzione) => (
                      <button 
                        key={opzione}
                        onClick={() => setFormData({...formData, eta: opzione})}
                        className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${
                          formData.eta === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'
                        }`}
                      >
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.eta === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {/* STEP 8: GIORNI/ORARI + URGENZA */}
{step === 8 && (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
    <div className="space-y-4">
      {/* Selezione Giorni */}
      <div>
        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold mb-2">Giorni preferiti</p>
        <div className="grid grid-cols-3 gap-2">
          {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'].map((g) => (
            <button key={g} onClick={() => toggleGiorno(g)} className={`p-2 rounded-lg border-2 text-[10px] font-bold transition-all ${formData.giorniPreferiti.includes(g) ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white hover:border-white/30'}`}>{g}</button>
          ))}
        </div>
      </div>

      {/* Selezione Fascia Oraria */}
      <div>
        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold mb-2">Fascia oraria</p>
        <div className="grid grid-cols-3 gap-2">
          {['Mattina', 'Pomeriggio', 'Sera'].map((f) => (
            <button key={f} onClick={() => setFormData({...formData, fasciaOraria: f})} className={`p-2 rounded-lg border-2 text-[10px] font-bold transition-all ${formData.fasciaOraria === f ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white hover:border-white/30'}`}>{f}</button>
          ))}
        </div>
      </div>

      {/* Selezione Urgenza */}
      <div className="pt-4 border-t border-white/10">
        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold mb-3">È un caso urgente?</p>
        <div className="flex gap-2">
          {['Sì', 'No'].map((u) => (
            <button 
              key={u} 
              onClick={() => setFormData({...formData, urgenza: u})} 
              className={`flex-1 p-3 rounded-xl border-2 font-bold text-[10px] transition-all flex justify-center items-center gap-2 ${
                formData.urgenza === u ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/30'
              }`}
            >
              {u === 'Sì' && <AlertTriangle size={12} />}
              <span className="uppercase">{u === 'Sì' ? 'Sì, ho dolore' : 'No'}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
)}

                {/* STEP 9: SEDE */}
                {step === 9 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Dove preferisci?</h3>
                    {['Sede Cavezzo (Mo)', 'Sede Rovereto (Mo)', 'Domicilio'].map((s) => (
                      <button 
                        key={s} 
                        onClick={() => setFormData({...formData, sede: s})} 
                        className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${
                          formData.sede === s ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'
                        }`}
                      >
                        <span className="text-sm uppercase tracking-tighter">{s}</span>
                        {formData.sede === s ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {/* STEP 10: INDIRIZZO */}
                {step === 10 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-2"><MapPin size={24} /> Indirizzo</h3>
                    <input type="text" placeholder="Via, Civico, Città" className="w-full bg-white/5 border-b-2 border-white/20 p-4 text-white font-bold" value={formData.indirizzo} onChange={(e) => setFormData({...formData, indirizzo: e.target.value})} />
                  </div>
                )}

                {/* STEP 11: CONTATTI */}
                {step === 11 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Ultimi dettagli</h3>
                    <input type="text" placeholder="Nome e Cognome" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
                    <input type="tel" placeholder="Telefono" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
                    <input type="email" placeholder="Email" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <label className="flex items-center gap-3 cursor-pointer mt-4">
                      <input type="checkbox" className="accent-[#55B4FF]" checked={formData.privacy} onChange={(e) => setFormData({...formData, privacy: e.target.checked})} />
                      <span className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Accetto Privacy Policy</span>
                    </label>
                  </div>
                )}
              </div>

              {/* NAVIGAZIONE MODULO */}
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

          {/* DIAGNOSI SINTOMI */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-[#022166] p-10 rounded-[2.5rem] text-white flex flex-col justify-center relative overflow-hidden">
                <ShieldCheck className="text-[#55B4FF] mb-6 relative z-10" size={48} />
                <h2 className="text-3xl font-bold mb-4 tracking-tight leading-tight relative z-10">Proteggi l'articolazione</h2>
                <p className="text-white/60 font-light text-sm relative z-10">Ignorare i segnali di cedimento aumenta il rischio di danni cronici ai legamenti.</p>
                <div className="absolute -right-10 -bottom-10 opacity-5">
                   <Activity size={200} />
                </div>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Senso di Incertezza", d: "Esitazione o timore nel compiere movimenti ampi o rapidi." },
                  { t: "Cedimento Percepito", d: "Sensazione che l'articolazione 'scivoli' o non sia in sede." },
                  { t: "Dolore Post-Trauma", d: "Fastidio che persiste dopo il primo episodio di lussazione." },
                  { t: "Debolezza Funzionale", d: "Mancanza di forza proprio nelle posizioni che senti 'critiche'." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-center hover:border-[#55B4FF]/30 transition-all">
                    <h4 className="font-black text-[#022166] text-[11px] uppercase mb-2 tracking-widest">{item.t}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SOLUZIONE MECCANICA */}
          <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95]">
                Basta recidive. <br />
                <span className="text-slate-400">Blocchiamo il danno.</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Una lussazione non curata correttamente predispone a interventi chirurgici futuri. La nostra strategia si basa sulla <strong>costruzione di una protezione attiva</strong>: muscoli e riflessi capaci di stabilizzare la spalla o la rotula in millisecondi.
              </p>
              <div className="grid gap-4">
                {[
                  "Stabilizzazione manuale e riposizionamento",
                  "Rinforzo dei muscoli stabilizzatori profondi",
                  "Riprogrammazione del controllo neuromuscolare",
                  "Test di ritorno allo sport e al carico massimo"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-[#55B4FF]" size={20} />
                    <span className="font-bold text-[#022166] text-[11px] uppercase tracking-wider">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square">
               <div className="absolute inset-0 bg-[#55B4FF]/10 rounded-[3rem] rotate-2"></div>
               <div className="relative h-full w-full bg-[#022166] rounded-[3rem] shadow-2xl p-12 flex flex-col justify-between overflow-hidden">
                  <Target className="text-[#55B4FF] relative z-10" size={48} />
                  <div className="relative z-10">
                    <p className="text-7xl font-black text-white tracking-tighter mb-2">100%</p>
                    <p className="text-[#55B4FF] font-bold uppercase text-xs tracking-widest">Focus sulla tenuta <br />articolare totale.</p>
                  </div>
                  <Waves className="absolute -bottom-20 -right-20 text-white/5 w-full h-full" />
               </div>
            </div>
          </section>

          {/* ROADMAP */}
          <section className="mb-32">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { i: Activity, t: "Valutazione Tenuta", d: "Analisi clinica per verificare l'integrità dei legamenti e la qualità del controllo." },
                { i: Zap, t: "Protezione Attiva", d: "Interveniamo per spegnere il dolore e attivare i muscoli che 'tengono' l'articolazione." },
                { i: Trophy, t: "Rientro Sicuro", d: "Alleniamo il gesto specifico (sportivo o lavorativo) per eliminare ogni esitazione." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                  <step.i className="text-[#55B4FF] mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h4 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{step.t}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA FINALE */}
          <section className="bg-[#022166] p-10 md:p-24 rounded-[4rem] text-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-10 group-hover:scale-105 transition-transform duration-1000">
                <Waves size={600} className="text-white absolute -bottom-20 -right-20" />
             </div>
             <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">Torna a spingere <br />senza pensieri.</h2>
                <p className="text-white/60 text-lg mb-12 font-light italic leading-relaxed">Il rischio di una seconda lussazione è altissimo senza un programma specifico. Proteggi il tuo futuro motorio oggi.</p>
                <button 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="bg-[#55B4FF] text-[#022166] px-16 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-white transition-all inline-block active:scale-95 shadow-lg"
                >
                  Inizia il percorso
                </button>
             </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50">
            <Link href="/trattamenti" className="flex items-center gap-2 text-xs font-bold hover:text-[#022166] transition-colors uppercase tracking-widest">
              <ArrowLeft size={14} /> Torna ai Trattamenti
            </Link>
            <p className="text-[10px] font-black uppercase tracking-[0.3em]">
              Fisioterapia Malavasi — Specialist Return to Play
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}