 "use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, ChevronRight, Activity, 
  ShieldCheck, Zap, Waves, Target, 
  CheckCircle2, Calendar, Lock as LockIcon, 
  Unlock as UnlockIcon, Dumbbell,
  Trophy, Stethoscope, Info,
  ChevronLeft, Upload, FileText, CheckCircle,
  MapPin, AlertTriangle, Star, AlertCircle, Microscope
} from 'lucide-react';

export default function TendinopatiaSpallaPage() {
  const router = useRouter();
  
  // --- LOGICA MODULO PRENOTAZIONE ---
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    problema: 'Tendinopatia Cuffia', 
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
    1: "Tipologia di dolore",
    1.2: "Specifica problema",
    2: "Cronicità",
    3: "Impatto funzionale",
    4: "Traguardo desiderato",
    4.2: "Dettaglio obiettivo",
    5: "Precedenti terapie",
    6: "Esami strumentali",
    6.5: "Caricamento Referto",
    7: "Dati anagrafici",
    8: "Pianificazione",
    9: "Sede del trattamento",
    10: "Indirizzo domicilio",
    11: "Contatti finali"
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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans relative overflow-hidden text-left">
      
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
            <span className="text-[#022166]">Tendinopatia Cuffia</span>
          </nav>

          {/* HERO SECTION CON MODULO */}
          <header className="mb-24 grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Specialista Riabilitazione Spalla</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
                Torna ad alzare <br />
                il braccio <span className="text-[#55B4FF]">senza dolore.</span>
              </h1>

              <p className="max-w-xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                Il dolore alla spalla non si risolve con il riposo. Recupera la <strong>meccanica del movimento</strong> attraverso la terapia manuale OMPT e l'esercizio terapeutico.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <a href="tel:+393338225464" className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-[#022166] uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-all">
                   Consulenza Specialistica
                 </a>
              </div>
            </div>

            {/* MODULO MULTISTEP */}
            <div className="bg-[#022166] rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col">
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
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Cosa senti alla spalla?</h3>
                    {['Dolore solo nel movimento', 'Dolore a riposo/notte', 'Debolezza improvvisa', 'Altro'].map((opzione) => (
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
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight text-left">Specifica i sintomi</h3>
                    <input type="text" placeholder="Es: dolore acuto quando tolgo la maglia..." className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold" value={formData.problemaSpecifico} onChange={(e) => setFormData({...formData, problemaSpecifico: e.target.value})} />
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Da quanto dura il dolore?</h3>
                    {['Pochi giorni', 'Da qualche mese', 'Oltre 6 mesi'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, durata: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.durata === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.durata === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Come impatta sulla vita?</h3>
                    {['Lieve fastidio', 'Difficoltà nel lavoro/sport', 'Blocco totale movimenti'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, limitazione: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.limitazione === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.limitazione === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 4 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Il tuo obiettivo principale?</h3>
                    {['Ridurre il dolore', 'Tornare allo sport', 'Recuperare forza', 'Evitare intervento', 'Altro'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, obiettivo: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.obiettivo === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase tracking-tighter">{opzione}</span>
                        {formData.obiettivo === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 4.2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Descrivi il tuo traguardo</h3>
                    <textarea placeholder="Descrivi qui..." className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold min-h-[100px] resize-none" value={formData.obiettivoSpecifico} onChange={(e) => setFormData({...formData, obiettivoSpecifico: e.target.value})} />
                  </div>
                )}

                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Hai già provato infiltrazioni o fisio?</h3>
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
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Hai una Risonanza o Ecografia?</h3>
                    {['Sì', 'No'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, diagnosiMedica: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.diagnosiMedica === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.diagnosiMedica === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 6.5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center text-left">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Allega il referto</h3>
                    <div className="relative group p-8 border-2 border-dashed border-white/20 rounded-2xl bg-white/5">
                      <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} className="absolute inset-0 opacity-0 cursor-pointer" />
                      {file ? <><FileText size={32} className="mx-auto text-[#55B4FF] mb-2" /><p className="text-white text-xs font-bold">{file.name}</p></> : <><Upload size={32} className="mx-auto text-white/20 mb-2" /><p className="text-white/40 text-[10px] uppercase font-bold tracking-widest text-left">Trascina qui o seleziona</p></>}
                    </div>
                  </div>
                )}

                {step === 7 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">La tua fascia d'età</h3>
                    {['Sotto i 30', '31–50', '51–70', '70+'].map((opzione) => (
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
                        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold mb-2">Preferenza oraria</p>
                        <div className="grid grid-cols-3 gap-2">
                          {['Mattina', 'Pomeriggio', 'Sera'].map((f) => (
                            <button key={f} onClick={() => setFormData({...formData, fasciaOraria: f})} className={`p-2 rounded-lg border-2 text-[10px] font-bold transition-all ${formData.fasciaOraria === f ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white hover:border-white/30'}`}>{f}</button>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold mb-3">È una necessità urgente?</p>
                        <div className="flex gap-2">
                          {['Sì', 'No'].map((u) => (
                            <button key={u} onClick={() => setFormData({...formData, urgenza: u})} className={`flex-1 p-3 rounded-xl border-2 font-bold text-[10px] transition-all flex justify-center items-center gap-2 ${formData.urgenza === u ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                              {u === 'Sì' && <AlertTriangle size={12} />}
                              <span className="uppercase">{u === 'Sì' ? 'Sì, ho molto dolore' : 'No'}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 9 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Dove preferisci la seduta?</h3>
                    {['Sede Cavezzo (Mo)', 'Sede Rovereto (Mo)', 'Domicilio'].map((s) => (
                      <button key={s} onClick={() => setFormData({...formData, sede: s})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.sede === s ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{s}</span>
                        {formData.sede === s ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 10 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-2"><MapPin size={24} /> Indirizzo domicilio</h3>
                    <input type="text" placeholder="Via, Civico, Città" className="w-full bg-white/5 border-b-2 border-white/20 p-4 text-white font-bold" value={formData.indirizzo} onChange={(e) => setFormData({...formData, indirizzo: e.target.value})} />
                  </div>
                )}

                {step === 11 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4 text-left">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Dati di contatto</h3>
                    <input type="text" placeholder="Nome e Cognome" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold outline-none" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
                    <input type="tel" placeholder="Cellulare" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold outline-none" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
                    <input type="email" placeholder="Email" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <label className="flex items-center gap-3 cursor-pointer mt-4">
                      <input type="checkbox" className="accent-[#55B4FF]" checked={formData.privacy} onChange={(e) => setFormData({...formData, privacy: e.target.checked})} />
                      <span className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Accetto Privacy Policy</span>
                    </label>
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

          {/* SECTION 1: SINTOMI */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-square bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden flex items-center justify-center">
                   <div className="absolute top-0 right-0 p-8 opacity-5 text-[#022166]">
                     <AlertCircle size={200} />
                   </div>
                   <div className="space-y-8 relative z-10 text-left">
                      <h3 className="text-2xl font-bold text-[#022166]">Ti riconosci in questi sintomi?</h3>
                      <ul className="space-y-6">
                        {[
                          { t: "Dolore Notturno", d: "Difficoltà a dormire sul lato della spalla interessata." },
                          { t: "Limitazione Funzionale", d: "Dolore nel pettinarsi, vestirsi o sollevare carichi." },
                          { t: "Debolezza", d: "Sensazione di cedimento quando alzi il braccio lateralmente." },
                          { t: "Dolore 'a arco'", d: "Fitte acute solo in determinati gradi di movimento." }
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                            <div className="h-6 w-6 rounded-full bg-[#55B4FF]/20 flex items-center justify-center flex-shrink-0 mt-1">
                              <div className="h-2 w-2 rounded-full bg-[#55B4FF]"></div>
                            </div>
                            <div>
                              <h4 className="font-bold text-[#022166] text-sm uppercase">{item.t}</h4>
                              <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6 text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#55B4FF]">Diagnosi & Analisi</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#022166] tracking-tight">
                  Perché la spalla è così <br />complessa?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  La spalla è l'articolazione più mobile del corpo, ma la sua stabilità dipende da un delicato equilibrio muscolare: la <strong>Cuffia dei Rotatori</strong>. 
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Quando questo equilibrio si rompe i tendini iniziano a soffrire. Ignorare questi segnali porta spesso a calcificazioni o a lesioni complete.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border-l-4 border-l-[#55B4FF] shadow-sm">
                    <Microscope className="text-[#022166]" size={24} />
                    <p className="text-xs font-medium text-slate-500 italic">Analizziamo la tua risonanza per integrare il reperto con la valutazione funzionale.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: LA SOLUZIONE */}
          <section className="mb-32 bg-[#022166] rounded-[4rem] p-8 md:p-20 text-white relative overflow-hidden text-left">
             <div className="absolute bottom-0 right-0 opacity-5">
                <Target size={400} />
             </div>
             
             <div className="max-w-3xl relative z-10">
                <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-8">Il nostro approccio: <br /><span className="text-[#55B4FF]">Carico Progressivo.</span></h2>
                <p className="text-white/70 text-lg md:text-xl mb-12 font-light">
                  Il vecchio approccio "riposo e antinfiammatori" è superato. Il tendine ha bisogno di <strong>carico guidato</strong> per guarire.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { i: Stethoscope, t: "Terapia Manuale", d: "Per ridurre il dolore immediato e migliorare la mobilità." },
                    { i: Dumbbell, t: "Esercizio Terapeutico", d: "Rinforzo specifico per ricentrare la testa dell'omero." },
                    { i: Zap, t: "Gestione del Carico", d: "Educazione su come usare la spalla quotidianamente." },
                    { i: ShieldCheck, t: "Prevenzione Ricadute", d: "Protocolli per una spalla forte e resiliente." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <item.i className="text-[#55B4FF] flex-shrink-0" size={28} />
                      <div>
                        <h4 className="font-bold text-sm uppercase mb-2 tracking-widest text-white">{item.t}</h4>
                        <p className="text-white/50 text-sm leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          {/* SECTION 3: ROADMAP */}
          <section id="protocollo" className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-6xl font-bold text-[#022166] tracking-tighter mb-6">Il percorso di guarigione.</h2>
              <p className="text-slate-500 font-medium italic">4 fasi per riportare la tua spalla alla funzionalità.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { t: "Fase 1", s: "Controllo Dolore", d: "Tecniche manuali per eliminare il dolore infiammatorio." },
                { t: "Fase 2", s: "Recupero ROM", d: "Ripristino della mobilità completa del braccio." },
                { t: "Fase 3", s: "Forza e Stabilità", d: "Rinforzo dei muscoli stabilizzatori e scapolari." },
                { t: "Fase 4", s: "Ritorno Funzionale", d: "Test per il ritorno allo sport o al lavoro pesante." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all text-left">
                  <span className="text-[10px] font-black uppercase text-[#55B4FF] tracking-[0.2em] block mb-4">{step.t}</span>
                  <h4 className="text-xl font-bold text-[#022166] mb-4">{step.s}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: CTA FINALE */}
          <section className="bg-white p-10 md:p-24 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden group text-left">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-[#022166] mb-8 tracking-tighter">
                  Non lasciare che la spalla <br />diventi un limite.
                </h3>
                <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
                  Una valutazione precoce può evitare l'aggravarsi della lesione. Prenota ora la tua consulenza OMPT.
                </p>
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="inline-flex bg-[#022166] text-white px-12 py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-[#55B4FF] transition-all shadow-lg active:scale-95">
                  Inizia il modulo sopra <ChevronRight className="ml-2" size={16} />
                </button>
              </div>
              <div className="bg-[#F8FAFC] p-8 rounded-[3rem] border border-slate-100">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-[#022166] font-medium italic text-lg leading-relaxed mb-6">
                  "Dopo mesi di dolore e notti insonni, finalmente ho trovato un percorso chiaro. Ora sono tornato a nuotare senza fastidio."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#022166] rounded-full flex items-center justify-center text-white font-bold text-xs">P</div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">Paolo, Paziente Sportivo</span>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
            <Link href="/trattamenti" className="flex items-center gap-2 text-sm font-bold hover:text-[#022166] transition-colors">
              <ArrowLeft size={16} /> Altri percorsi
            </Link>
            <p className="text-[10px] font-black uppercase tracking-widest text-center">
              Fisioterapia Malavasi — Scienza e Movimento.
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}