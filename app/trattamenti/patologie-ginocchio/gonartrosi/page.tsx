"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, ChevronRight, Activity, 
  ShieldCheck, Zap, Waves, Move, Target, 
  CheckCircle2, Calendar, Lock as LockIcon, 
  Unlock as UnlockIcon, Trophy, Stethoscope, 
  Info, ChevronLeft, Upload, FileText, CheckCircle,
  MapPin, AlertTriangle, Star, AlertCircle, Microscope, HelpCircle
} from 'lucide-react';

export default function GonartrosiAdsPage() {
  const router = useRouter();
  
  // --- LOGICA MODULO PRENOTAZIONE ---
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    problema: 'Gonartrosi', 
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
    1: "Inquadramento Ginocchio",
    1.2: "Specifica sintomi",
    2: "Cronicità del dolore",
    3: "Impatto sulla mobilità",
    4: "Obiettivo di recupero",
    4.2: "Dettaglio traguardo",
    5: "Storico trattamenti",
    6: "Esami diagnostici",
    6.5: "Documentazione",
    7: "Fascia d'età",
    8: "Disponibilità",
    9: "Sede preferita",
    10: "Logistica domicilio",
    11: "Dati finali"
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
    if (step === 1) { formData.problema === 'Altro' ? setStep(1.2) : setStep(2); return; }
    if (step === 1.2) { setStep(2); return; }
    if (step === 4) { formData.obiettivo === 'Altro' ? setStep(4.2) : setStep(5); return; }
    if (step === 4.2) { setStep(5); return; }
    if (step === 6) { formData.diagnosiMedica === 'Sì' ? setStep(6.5) : setStep(7); return; }
    if (step === 6.5) { setStep(7); return; }
    if (step === 9 && formData.sede !== 'Domicilio') { setStep(11); } else { setStep((s) => Math.min(s + 1, 11)); }
  };

  const prevStep = () => {
    if (step === 2) { formData.problema === 'Altro' ? setStep(1.2) : setStep(1); return; }
    if (step === 1.2) { setStep(1); return; }
    if (step === 5) { formData.obiettivo === 'Altro' ? setStep(4.2) : setStep(4); return; }
    if (step === 4.2) { setStep(4); return; }
    if (step === 7) { formData.diagnosiMedica === 'Sì' ? setStep(6.5) : setStep(6); return; }
    if (step === 6.5) { setStep(6); return; }
    if (step === 11 && formData.sede !== 'Domicilio') { setStep(9); } else { setStep((s) => Math.max(s - 1, 1)); }
  };

  const toggleGiorno = (giorno: string) => {
    const attuali = formData.giorniPreferiti;
    setFormData({
      ...formData,
      giorniPreferiti: attuali.includes(giorno) ? attuali.filter(g => g !== giorno) : [...attuali, giorno]
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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVO */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-12">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={12} />
            <span className="text-[#022166]">Gonartrosi</span>
          </nav>

          {/* HERO SECTION CON MODULO INTEGRATO */}
          <header className="mb-24 grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Specialista Artrosi Ginocchio</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
                Artrosi al Ginocchio: <br />
                <span className="text-[#55B4FF]">riprendi i tuoi passi.</span>
              </h1>

              <p className="max-w-xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                Il dolore da gonartrosi non è una condanna. Con il metodo <strong>OMPT</strong>, riduciamo l'infiammazione e ricostruiamo la forza necessaria per camminare senza pensieri.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <a href="tel:+393338225464" className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-[#022166] uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-all">
                   Parla con un esperto
                 </a>
              </div>
            </div>

            {/* MODULO MULTISTEP */}
            <div className="bg-[#022166] rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col text-left">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#55B4FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-[#55B4FF] transition-all duration-700" style={{ width: `${(step / 11) * 100}%` }} />
              </div>

              <div className="relative z-10 flex-grow">
                <span className="text-[#55B4FF] font-bold text-[9px] uppercase tracking-[0.2em] block mb-2 italic">
                  {stepTitles[step]}
                </span>

                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Qual è il problema principale?</h3>
                    {['Dolore nel camminare', 'Rigidità mattutina', 'Gonfiore al ginocchio', 'Altro'].map((opzione) => (
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

                {step === 1.2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Specifica i sintomi</h3>
                    <input type="text" placeholder="Es: dolore scendendo le scale..." className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold" value={formData.problemaSpecifico} onChange={(e) => setFormData({...formData, problemaSpecifico: e.target.value})} />
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Da quanto dura il dolore?</h3>
                    {['Meno di 6 mesi', 'Da 6 a 12 mesi', 'Oltre un anno'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, durata: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.durata === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.durata === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Quanto limita i tuoi passi?</h3>
                    {['Poco (fastidio)', 'Abbastanza (cammino meno)', 'Molto (difficoltà scale)'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, limitazione: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.limitazione === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.limitazione === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 4 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Il tuo obiettivo?</h3>
                    {['Camminare senza dolore', 'Evitare la protesi', 'Tornare a fare sport', 'Ridurre i farmaci', 'Altro'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, obiettivo: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.obiettivo === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase tracking-tighter">{opzione}</span>
                        {formData.obiettivo === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 4.2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Dettaglia il tuo traguardo</h3>
                    <textarea placeholder="Es: tornare a fare trekking..." className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold min-h-[100px] resize-none" value={formData.obiettivoSpecifico} onChange={(e) => setFormData({...formData, obiettivoSpecifico: e.target.value})} />
                  </div>
                )}

                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Hai già fatto riabilitazione in precedenza?</h3>
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
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Hai una RX o Risonanza?</h3>
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
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Allega referto</h3>
                    <div className="relative group p-8 border-2 border-dashed border-white/20 rounded-2xl bg-white/5">
                      <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} className="absolute inset-0 opacity-0 cursor-pointer" />
                      {file ? <><FileText size={32} className="mx-auto text-[#55B4FF] mb-2" /><p className="text-white text-xs font-bold">{file.name}</p></> : <><Upload size={32} className="mx-auto text-white/20 mb-2" /><p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Seleziona PDF o JPG</p></>}
                    </div>
                  </div>
                )}

                {step === 7 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">La tua fascia d'età?</h3>
                    {['40–55', '56–70', '71–85', '85+'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, eta: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.eta === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.eta === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

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
                        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold mb-3">È urgente (dolore acuto)?</p>
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

                {step === 9 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Dove vuoi vederci?</h3>
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

          {/* SEZIONE ANALISI EMPATICA */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start text-left">
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <HelpCircle className="text-[#55B4FF] mb-4" size={32} />
                  <h2 className="text-2xl font-bold text-[#022166] mb-4">Ti senti limitato nelle tue passioni?</h2>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Svegliarsi con le ginocchia rigide o provare dolore a ogni gradino è frustrante. Sappiamo che cerchi una soluzione reale, non un semplice palliativo.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm transition-all hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-[#022166] mb-8 tracking-tight">Perché la scienza è dalla tua parte:</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-10 italic">
                    "L'artrosi non è una malattia da 'usura', ma una condizione che risponde incredibilmente bene al carico graduale."
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { t: "Riduzione Rigidità", d: "Tecniche manuali per migliorare la lubrificazione naturale." },
                      { t: "Rinforzo Protetto", d: "Esercizi che stabilizzano senza sovraccaricare." },
                      { t: "Prevenzione Chirurgica", d: "Ottimizziamo la biomeccanica per posticipare la protesi." },
                      { t: "Educazione al Carico", d: "Ti insegniamo come muoverti senza infiammare il ginocchio." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <CheckCircle2 className="text-[#55B4FF] flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-bold text-[#022166] text-sm uppercase tracking-wide">{item.t}</h4>
                          <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE TRUST & METODO */}
          <section className="mb-32 text-left">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#E0F2FE] text-[#022166] px-4 py-2 rounded-full mb-8">
                  <ShieldCheck size={16} className="text-[#55B4FF]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Protocollo Certificato OMPT</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  Più mobilità, <br /><span className="text-[#55B4FF]">meno farmaci.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  La nostra fisioterapia agisce sulla <strong>causa meccanica</strong>. Integrando le migliori prove scientifiche, costruiamo un percorso che ti restituisce fiducia.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-3">
                      <Microscope className="text-[#55B4FF]" size={20} />
                      <span className="text-sm font-bold text-[#022166]">Analisi Biomeccanica</span>
                   </div>
                   <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-3">
                      <Zap className="text-[#55B4FF]" size={20} />
                      <span className="text-sm font-bold text-[#022166]">Terapia Manuale</span>
                   </div>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative p-10 bg-[#022166] rounded-[3rem] text-white shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                    <Move size={150} />
                  </div>
                  <h4 className="text-2xl font-bold mb-6 tracking-tight italic">"Il ginocchio non è vecchio, è solo il modo in cui lavora che va aggiornato."</h4>
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#55B4FF] rounded-full"></div>
                      <p className="text-sm text-white/80 font-medium tracking-wide">Miglioramento visibile dalla 3° seduta</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#55B4FF] rounded-full"></div>
                      <p className="text-sm text-white/80 font-medium tracking-wide">Protocollo basato su linee guida NICE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROADMAP DI RECUPERO */}
          <section className="mb-32">
             <div className="bg-white p-10 md:p-20 rounded-[3rem] border border-slate-100 shadow-sm text-left">
                <div className="text-center max-w-2xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-6 text-center">Il tuo piano d'azione</h2>
                  <p className="text-slate-500 font-medium uppercase text-xs tracking-[0.2em] text-center">Semplice. Professionale. Efficace.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-16">
                  {[
                    { n: "01", t: "Valutazione", d: "Analizziamo non solo il ginocchio, ma come cammini e carichi il peso." },
                    { n: "02", t: "Sollievo", d: "Tecniche manuali per ridurre la pressione e dare respiro all'articolazione." },
                    { n: "03", t: "Autonomia", d: "Ti diamo gli strumenti per mantenere il risultato nel tempo." }
                  ].map((step, i) => (
                    <div key={i}>
                      <span className="text-4xl font-black text-[#55B4FF] block mb-4">/ {step.n}</span>
                      <h4 className="text-xl font-bold text-[#022166] mb-3">{step.t}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          {/* CTA FINALE */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden group text-white text-left">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700 text-[#55B4FF]">
              <Waves size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Torna a vivere <br />
                <span className="text-[#55B4FF]">senza rassegnazione.</span>
              </h3>
              
              <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white transition-all active:scale-95"
              >
                Inizia il modulo sopra <ChevronRight className="inline ml-2" size={16} />
              </button>
              
              <div className="mt-12 flex items-center gap-4 text-white/40">
                 <AlertCircle size={16} />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Disponibilità limitata per prime valutazioni</span>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link href="/trattamenti" className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all">
              <ArrowLeft size={20} /> Tutti i trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Mirco Malavasi OMPT — Fisioterapia</span>
          </footer>

        </div>
      </div>
    </main>
  );
}