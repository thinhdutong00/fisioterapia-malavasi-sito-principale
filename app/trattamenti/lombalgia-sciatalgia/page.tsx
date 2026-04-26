"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Import di Lucide-React
import { 
  ArrowLeft, Star,
  ChevronRight,
  ChevronLeft,
  Activity,
  ArrowUpRight, 
  ClipboardCheck, 
  Stethoscope, 
  ShieldCheck,
  Zap,
  Clock,
  Waves,
  Users,
  CheckCircle,
  FileText,
  Upload,
  MapPin,
  AlertTriangle,
  Info,
  CheckCircle2,
  Lock as LockIcon,
  Unlock as UnlockIcon,
  Unlock
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function LombalgiaSciatalgiaPage() {
  const router = useRouter();

  // --- LOGICA MODULO PRENOTAZIONE INTEGRATA ---
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    problema: 'Lombalgia/Sciatalgia', 
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
    if (step === 1) { formData.problema === 'Altro' ? setStep(1.2) : setStep(2); return; }
    if (step === 1.2) { setStep(2); return; }
    if (step === 4) { formData.obiettivo === 'Altro' ? setStep(4.2) : setStep(5); return; }
    if (step === 4.2) { setStep(5); return; }
    if (step === 6) { formData.diagnosiMedica === 'Sì' ? setStep(6.5) : setStep(7); return; }
    if (step === 6.5) { setStep(7); return; }
    if (step === 9 && formData.sede !== 'Domicilio') { setStep(11); } 
    else { setStep((s) => Math.min(s + 1, 11)); }
  };

  const prevStep = () => {
    if (step === 2) { formData.problema === 'Altro' ? setStep(1.2) : setStep(1); return; }
    if (step === 1.2) { setStep(1); return; }
    if (step === 5) { formData.obiettivo === 'Altro' ? setStep(4.2) : setStep(4); return; }
    if (step === 4.2) { setStep(4); return; }
    if (step === 7) { formData.diagnosiMedica === 'Sì' ? setStep(6.5) : setStep(6); return; }
    if (step === 6.5) { setStep(6); return; }
    if (step === 11 && formData.sede !== 'Domicilio') { setStep(9); } 
    else { setStep((s) => Math.max(s - 1, 1)); }
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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/trattamenti" className="hover:text-[#022166] transition-colors">Trattamenti</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Lombalgia e Sciatalgia</span>
          </nav>

          {/* HERO SECTION CON MODULO INTEGRATO */}
          <header className="mb-24 grid lg:grid-cols-2 gap-12 items-start">
            
            {/* SINISTRA: TESTO */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Soluzioni per il dolore vertebrale</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
                Liberati dal <br />dolore alla <span className="text-[#55B4FF]">schiena.</span>
              </h1>

              <p className="max-w-xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                Dalla fase acuta al ritorno al movimento: un approccio specialistico basato su terapia manuale ed evidenze scientifiche.
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

                {/* STEP 1: CONTESTO DOLORE SCHIENA */}
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Qual è il problema principale?</h3>
                    {['Mal di schiena (Lombalgia)', 'Dolore alla gamba (Sciatica)', 'Altro'].map((opzione) => (
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
                      placeholder="Es: fitte al gluteo, rigidità mattutina..." 
                      className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold" 
                      value={formData.problemaSpecifico} 
                      onChange={(e) => setFormData({...formData, problemaSpecifico: e.target.value})} 
                    />
                  </div>
                )}

                {/* STEP 2: DURATA */}
                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Da quanto tempo senti dolore?</h3>
                    {['Meno di 2 settimane', 'Da 2 a 8 settimane', 'Oltre 2 mesi'].map((opzione) => (
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
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Quanto limita la tua giornata?</h3>
                    {['Riesco a fare quasi tutto', 'Evito alcuni movimenti', 'Blocco quasi totale'].map((opzione) => (
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
                    {['Togliere il dolore acuto', 'Tornare a fare sport', 'Mantenimento/Prevenzione', 'Altro'].map((opzione) => (
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

                {/* STEP 4.2 */}
                {step === 4.2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Dettaglia il traguardo</h3>
                    <textarea placeholder="Descrivi qui..." className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold min-h-[100px] resize-none" value={formData.obiettivoSpecifico} onChange={(e) => setFormData({...formData, obiettivoSpecifico: e.target.value})} />
                  </div>
                )}

                {/* STEP 5 */}
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

                {/* STEP 6 */}
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

                {/* STEP 6.5 */}
                {step === 6.5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Carica referto (RM/RX)</h3>
                    <div className="relative group p-8 border-2 border-dashed border-white/20 rounded-2xl bg-white/5">
                      <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} className="absolute inset-0 opacity-0 cursor-pointer" />
                      {file ? <><FileText size={32} className="mx-auto text-[#55B4FF] mb-2" /><p className="text-white text-xs font-bold">{file.name}</p></> : <><Upload size={32} className="mx-auto text-white/20 mb-2" /><p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Seleziona PDF o Immagine</p></>}
                    </div>
                  </div>
                )}

                {/* STEP 7 */}
                {step === 7 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Tua fascia d'età?</h3>
                    {['Sotto i 30', '31–50', '51–65', '65+'].map((opzione) => (
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

                {/* STEP 9 */}
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

                {/* STEP 10 */}
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

          {/* SEZIONE 1: L'EMPATIA E L'INFORMAZIONE */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#022166] mb-4 block">
                  Comprendere il sintomo
                </span>
                <h2 className="text-3xl font-bold text-[#022166] tracking-tight">Perché senti dolore?</h2>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-white p-10 md:p-14 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-[#55B4FF] font-bold text-lg mb-4 uppercase tracking-tighter">Lombalgia</h3>
                      <p className="text-slate-500 text-base leading-relaxed">
                        Non è solo "mal di schiena". È un segnale del corpo che indica un sovraccarico funzionale, una rigidità articolare o una debolezza dei muscoli stabilizzatori. Ignorarla significa rischiare la cronicità.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[#022166] font-bold text-lg mb-4 uppercase tracking-tighter">Sciatalgia</h3>
                      <p className="text-slate-500 text-base leading-relaxed">
                        Quando il dolore scende lungo la gamba, spesso accompagnato da formicolio, il nervo sciatico è sotto pressione. Può essere dovuto a un'ernia del disco, ma anche a tensioni muscolari profonde.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 2: IL RIMEDIO - TERAPIA MANUALE */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 bg-[#E0F2FE] text-[#022166] px-4 py-2 rounded-full mb-8">
                  <Zap size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Il nostro metodo</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95] mb-8">
                  La Terapia Manuale: <br /><span className="text-[#55B4FF]">l'arma più efficace.</span>
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                  A differenza dei soli farmaci che coprono il sintomo, la terapia manuale agisce sulla <strong>causa meccanica</strong> del problema. Attraverso manipolazioni e mobilizzazioni specifiche, andiamo a:
                </p>
                <ul className="space-y-4">
                  {[
                    "Decomprimere le strutture nervose",
                    "Ripristinare la mobilità delle vertebre bloccate",
                    "Disattivare i 'trigger point' muscolari dolorosi",
                    "Ridurre l'infiammazione senza abuso di farmaci"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#022166] font-bold italic">
                      <ShieldCheck size={20} className="text-[#55B4FF]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="bg-[#022166] p-8 rounded-[2rem] text-white flex flex-col justify-end min-h-[250px]">
                  <Waves className="mb-4 text-[#55B4FF]" size={40} />
                  <h4 className="font-bold text-xl leading-tight">Drenaggio Infiammazione</h4>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col justify-end min-h-[250px]">
                  <Activity className="mb-4 text-[#022166]" size={40} />
                  <h4 className="font-bold text-xl text-[#022166] leading-tight">Ripristino Funzionale</h4>
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE 3: IL PERCORSO */}
          <section className="mb-32">
             <div className="bg-white p-10 md:p-20 rounded-[3rem] border border-slate-100 shadow-sm">
                <div className="text-center max-w-2xl mx-auto mb-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tighter mb-6">Come risolveremo <br />il tuo problema?</h2>
                  <p className="text-slate-500 font-medium italic">Un protocollo in tre step studiato per la tua colonna.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">01</div>
                    <ClipboardCheck className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Valutazione Iniziale</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Identifichiamo l'origine del dolore attraverso test ortopedici e neurologici specifici.</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">02</div>
                    <Stethoscope className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Fase Operativa</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Trattamento manuale per ridurre il dolore acuto e liberare i movimenti bloccati.</p>
                  </div>
                  <div className="relative">
                    <div className="text-[80px] font-black text-[#55B4FF]/10 absolute top-[-40px] left-0">03</div>
                    <Clock className="text-[#55B4FF] mb-6" size={32} />
                    <h4 className="text-xl font-bold text-[#022166] mb-4">Mantenimento</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Esercizi di rinforzo personalizzati per evitare che il dolore torni in futuro.</p>
                  </div>
                </div>
             </div>
          </section>

          {/* SEZIONE RECENSIONI */}
          <section id="recensioni" className="relative min-h-screen w-full py-16 md:py-32 px-4 overflow-hidden bg-transparent flex items-center">
            <div className="absolute inset-0 pointer-events-none opacity-30 md:opacity-40">
              <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#55B4FF]/10 rounded-full blur-[80px] md:blur-[120px]"></div>
              <div className="absolute bottom-[-5%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#022166]/5 rounded-full blur-[80px] md:blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
              <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 md:mb-24 gap-8 md:gap-10 text-center lg:text-left">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm mb-4 md:mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#022166]">Recensioni Verificate</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-bold text-[#022166] tracking-tighter leading-[1.1] md:leading-[0.95]">
                    La parola ai <br className="hidden md:block" />nostri <span className="text-[#55B4FF]">Pazienti.</span>
                  </h2>
                </div>
                
                <div className="bg-white p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl md:shadow-2xl shadow-blue-900/5 border border-white flex items-center gap-5 md:gap-8 w-full max-w-sm lg:w-auto">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F8FAFC] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex gap-0.5 text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" stroke="none" />)}
                    </div>
                    <p className="text-[#022166] font-black text-lg md:text-xl tracking-tighter leading-none">5.0 Eccellenza</p>
                    <p className="text-slate-400 text-[9px] uppercase tracking-widest mt-1 font-bold">Google Business</p>
                  </div>
                </div>
              </div>

              <div className="relative group px-0">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{ delay: 6000, disableOnInteraction: false }}
                  pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
                  breakpoints={{ 
                    768: { slidesPerView: 2, spaceBetween: 25 }, 
                    1280: { slidesPerView: 3, spaceBetween: 30 } 
                  }}
                  className="!pb-16 md:!pb-24 !overflow-visible"
                >
                  {[
                    { n: "Rosalba Cantuti", t: "Lo studio Malavasi è molto serio e professionale, Mirco segue molto bene il paziente e da’ consigli utili x continuare a migliorare nel percorso di riabilitazione.", d: "2 settimane fa" },
                    { n: "Samuele Pini", t: "Mi sono rotto il crociato e subito ho deciso di iniziare il mio percorso preoperatorio grazie al quale ho potuto affrontare la riabilitazione molto meglio, psicologicamente più sollevato. Grazie al Dott. Mirco e al suo staff, dotato di ottima preparazione", d: "1 mese fa" },
                    { n: "Federico Zagni", t: "Professionista e collega di alto livello! Grande empatia e professionalità!", d: "3 settimane fa" },
                    { n: "Alessandro Papazzoni", t: "Ci sono andato per la mia caviglia e mi hanno aiutato con molta cura e attenzione, in più sono migliorato velocemente.", d: "10 mesi fa" },
                    { n: "Elisa Cavazzoli", t: "Con Mirco mi sono trovata bene fin da subito. È ATTENTO e molto preparato nonostante la giovane età. Con i giusti esercizi e le giuste tempistiche sono riuscita a gestire e risolvere il mio problema, sono molto contenta! Consigliatissimo a tutti!!", d: "1 anno fa" },
                    { n: "Edoardo Marchesi", t: "Ho portato mia mamma da lui perchè aveva male al piede destro faceva fatica a camminare, a scendere le scale non se ne parla e dopo due infiltrazioni di cortisone non era migliorata, quindi si è decisa ad andarci con ottimi risultati non solo il piede non le duole più, ma ha acquisito un po' più di sicurezza nel camminare e a fare le scale. Grazie Mirco", d: "1 anno fa" }
                  ].map((rev, i) => (
                    <SwiperSlide key={i} className="!h-auto flex">
                      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 h-full flex flex-col shadow-sm relative group/card w-full">
                        <div className="flex gap-1 text-yellow-400 mb-6 md:mb-8">
                          {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" stroke="none" />)}
                        </div>
                        <blockquote className="flex-grow">
                          <p className="text-[#022166]/80 font-medium text-base md:text-lg leading-relaxed italic">"{rev.t}"</p>
                        </blockquote>
                        <div className="flex items-center gap-4 md:gap-5 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-50">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#022166] to-[#55B4FF] rounded-xl md:rounded-2xl flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg flex-shrink-0">
                            {rev.n[0]}
                          </div>
                          <div>
                            <p className="font-bold text-[#022166] text-base md:text-lg leading-tight mb-1">{rev.n}</p>
                            <p className="text-[9px] text-slate-400 font-black uppercase tracking-[0.1em]">{rev.d}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-pagination-custom flex justify-center mt-2 gap-2"></div>
              </div>
            </div>
          </section>

          {/* SEZIONE FINALE: CALL TO ACTION */}
          <section className="bg-[#022166] p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute top-[-10%] right-[-10%] opacity-5 group-hover:scale-110 transition-transform duration-700 text-[#55B4FF]">
              <Activity size={400} />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-black text-[10px] uppercase tracking-[0.4em]">Fisioterapia Malavasi — Specialisti della Colonna</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-[0.95]">
                Non aspettare che il <br />
                <span className="text-[#55B4FF]">dolore peggiori.</span>
              </h3>
              
              <p className="text-white/60 text-xl mb-12 font-light leading-relaxed max-w-xl">
                Usa il modulo in alto per inviare i tuoi dati e ricevere una valutazione personalizzata.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="bg-[#55B4FF] text-[#022166] px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white transition-all active:scale-95"
                >
                  Compila il modulo
                </button>
                <a 
                  href="tel:+393338225464" 
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-12 py-6 rounded-2xl font-black text-center uppercase text-[11px] tracking-[0.3em] hover:bg-white/10 transition-all active:scale-95"
                >
                  Richiedi Info
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER NAVIGATION */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link 
              href="/trattamenti" 
              className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all"
            >
              <ArrowLeft size={20} /> Altri Trattamenti
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Soluzioni Cliniche</span>
          </div>

        </div>
      </div>
    </main>
  );
}