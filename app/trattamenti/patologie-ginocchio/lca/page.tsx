"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { 
  ArrowLeft, ChevronRight, Activity, 
  ShieldCheck, Zap, Waves, Target, 
  Microscope, CheckCircle2, 
  Phone, Calendar, MousePointer2, 
  Trophy, Gauge, Star, Scaling,
  ChevronLeft, Upload, CheckCircle, 
  AlertTriangle, AlertCircle
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function LCASpecialistPage() {
  const router = useRouter();

  // --- LOGICA MODULO PRENOTAZIONE ---
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    problema: 'Lesione LCA', 
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
    1: "Stato della Lesione",
    1.2: "Specifica il problema",
    2: "Cronologia infortunio",
    3: "Limitazione attuale",
    4: "Traguardo desiderato",
    4.2: "Dettaglio obiettivo",
    5: "Precedenti interventi",
    6: "Documentazione RM/RX",
    6.5: "Carica referto",
    7: "Dati anagrafici",
    8: "Organizzazione sedute",
    9: "Luogo del trattamento",
    10: "Dati per domicilio",
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
    if (step === 9) { formData.sede === 'Domicilio' ? setStep(10) : setStep(11); return; }
    if (step === 10) { setStep(11); return; }
    setStep((s) => Math.min(s + 1, 11));
  };

  const prevStep = () => {
    if (step === 2) { formData.problema === 'Altro' ? setStep(1.2) : setStep(1); return; }
    if (step === 1.2) { setStep(1); return; }
    if (step === 5) { formData.obiettivo === 'Altro' ? setStep(4.2) : setStep(4); return; }
    if (step === 4.2) { setStep(4); return; }
    if (step === 7) { formData.diagnosiMedica === 'Sì' ? setStep(6.5) : setStep(6); return; }
    if (step === 6.5) { setStep(6); return; }
    if (step === 11) { formData.sede === 'Domicilio' ? setStep(10) : setStep(9); return; }
    if (step === 10) { setStep(9); return; }
    setStep((s) => Math.max(s - 1, 1));
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
      
      {/* SFONDO DINAMICO */}
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
            <span className="text-[#022166]">Specialista LCA</span>
          </nav>

          {/* HERO SECTION CON MODULO */}
          <header className="mb-24 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Specialist Return to Play</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
                Lesione LCA: <br />
                Stabilità e <span className="text-[#55B4FF]">Performance.</span>
              </h1>

              <p className="max-w-xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                Dalla preparazione all'intervento al ritorno in campo. La stabilità del tuo ginocchio dipende dalla qualità del <strong>percorso neuro-cognitivo</strong>: ricostruiamo la tua fiducia nel movimento.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <a href="tel:+393338225464" className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-[#022166] uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-all">
                   <Phone size={14} /> Consulenza OMPT
                 </a>
              </div>
            </div>

            {/* MODULO MULTISTEP INTEGRATO */}
            <div className="bg-[#022166] rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative overflow-hidden min-h-[620px] flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#55B4FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-[#55B4FF] transition-all duration-700" style={{ width: `${(step / 11) * 100}%` }} />
              </div>

              <div className="relative z-10 flex-grow text-left">
                <span className="text-[#55B4FF] font-bold text-[9px] uppercase tracking-[0.2em] block mb-2 italic">
                  {stepTitles[step]}
                </span>

                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Qual è la tua situazione?</h3>
                    {['Rottura Totale LCA', 'Rottura Parziale', 'Post-Operatorio', 'Altro'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, problema: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.problema === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase tracking-tighter">{opzione}</span>
                        {formData.problema === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 1.2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Dettagli lesione</h3>
                    <input type="text" placeholder="Es: lesione associata al menisco..." className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold" value={formData.problemaSpecifico} onChange={(e) => setFormData({...formData, problemaSpecifico: e.target.value})} />
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Quando è successo?</h3>
                    {['Recente (< 1 mese)', 'Da diversi mesi', 'Appena operato'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, durata: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.durata === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.durata === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Qual è il limite maggiore?</h3>
                    {['Instabilità (cede)', 'Dolore / Gonfiore', 'Paura di muovermi'].map((opzione) => (
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
                    {['Tornare allo sport', 'Evitare chirurgia', 'Recupero post-op', 'Altro'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, obiettivo: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.obiettivo === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase tracking-tighter">{opzione}</span>
                        {formData.obiettivo === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 4.2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Specifica obiettivo</h3>
                    <input type="text" placeholder="Es: tornare a giocare a calcio..." className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold" value={formData.obiettivoSpecifico} onChange={(e) => setFormData({...formData, obiettivoSpecifico: e.target.value})} />
                  </div>
                )}

                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Hai già una data intervento?</h3>
                    {['Sì, già fissata', 'No, in valutazione', 'Già operato'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, giaFattoFisio: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.giaFattoFisio === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.giaFattoFisio === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 6 && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Hai il referto della RM?</h3>
                    {['Sì', 'No'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, diagnosiMedica: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.diagnosiMedica === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.diagnosiMedica === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 6.5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Carica Referto</h3>
                    <div className="border-2 border-dashed border-white/20 rounded-[2rem] p-12 text-center hover:border-[#55B4FF] transition-all group">
                      <input type="file" id="file-upload" className="hidden" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
                      <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                        <Upload size={48} className="text-[#55B4FF] mb-4 group-hover:scale-110 transition-transform" />
                        <span className="text-white font-bold text-sm uppercase tracking-widest">{file ? file.name : "Seleziona File"}</span>
                      </label>
                    </div>
                  </div>
                )}

                {step === 7 && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Fascia d'età</h3>
                    {['Under 20', '21–35', '36–50', 'Over 50'].map((opzione) => (
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
                            <button key={g} type="button" onClick={() => toggleGiorno(g)} className={`p-2 rounded-lg border-2 text-[10px] font-bold transition-all ${formData.giorniPreferiti.includes(g) ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white hover:border-white/30'}`}>{g}</button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold mb-2">Fascia oraria</p>
                        <div className="grid grid-cols-3 gap-2">
                          {['Mattina', 'Pomeriggio', 'Sera'].map((f) => (
                            <button key={f} type="button" onClick={() => setFormData({...formData, fasciaOraria: f})} className={`p-2 rounded-lg border-2 text-[10px] font-bold transition-all ${formData.fasciaOraria === f ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white hover:border-white/30'}`}>{f}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 9 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Sede preferita</h3>
                    {['Sede Cavezzo', 'Sede Rovereto', 'Domicilio'].map((s) => (
                      <button key={s} onClick={() => setFormData({...formData, sede: s})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.sede === s ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{s}</span>
                        {formData.sede === s ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 10 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Dati Domicilio</h3>
                    <div className="space-y-1">
                      <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold ml-1">Indirizzo completo *</p>
                      <input type="text" placeholder="Via, Civico, Città" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold outline-none focus:border-[#55B4FF]" value={formData.indirizzo} onChange={(e) => setFormData({...formData, indirizzo: e.target.value})} />
                    </div>
                  </div>
                )}

                {step === 11 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Concludiamo</h3>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold ml-1">Nome e Cognome *</p>
                        <input type="text" placeholder="Tuo nome" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold outline-none focus:border-[#55B4FF]" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold ml-1">Cellulare *</p>
                        <input type="tel" placeholder="Tuo numero" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold outline-none focus:border-[#55B4FF]" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
                      </div>
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer mt-6 group">
                      <div className="mt-1">
                        <input type="checkbox" className="accent-[#55B4FF] h-4 w-4 shadow-sm" checked={formData.privacy} onChange={(e) => setFormData({...formData, privacy: e.target.checked})} />
                      </div>
                      <span className="text-[9px] text-white/40 uppercase font-bold tracking-widest leading-tight group-hover:text-white/60">
                        Accetto la <Link href="/privacy-policy" target="_blank" className="text-[#55B4FF] underline">Privacy Policy</Link> *
                      </span>
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
                  disabled={isSending || (step === 11 && (!formData.nome.trim() || !formData.telefono.trim() || !formData.privacy))}
                  className="flex-1 bg-[#55B4FF] text-[#022166] py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {isSending ? 'Invio...' : (step === 11 ? 'Invia Richiesta' : 'Continua')}
                </button>
              </div>
            </div>
          </header>

          {/* SEZIONE ESPERIENZA PROFESSIONALE - CARPI FC */}
          <section className="mb-32">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-sm overflow-hidden relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-[#022166] font-black text-[10px] uppercase tracking-[0.3em]">
                    <Star size={14} className="fill-[#55B4FF] text-[#55B4FF]" /> Professional Background
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight leading-tight">
                    Standard da Serie A <br />per il tuo ginocchio.
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Ho vissuto quattro stagioni intense al <strong>Carpi F.C. 1909</strong>, curando il ritorno in campo di calciatori professionisti in Lega Pro.
                  </p>
                </div>
                
                <div className="relative group">
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl">
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      spaceBetween={0}
                      slidesPerView={1}
                      autoplay={{ delay: 4000, disableOnInteraction: false }}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      className="w-full h-full"
                    >
                      {[
                        { src: "/fisioterapia-carpi-calcio.jpeg", alt: "Fisioterapia Carpi Calcio" },
                        { src: "/fisioterapia-campo-pro.jpeg", alt: "Recupero in campo" }
                      ].map((img, index) => (
                        <SwiperSlide key={index}>
                          <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CLINICAL FOCUS */}
          <section className="mb-32 grid lg:grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-[#022166] tracking-tight leading-tight">
                La risonanza non è il tuo limite. <br />
                <span className="text-slate-400">La tua funzione sì.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                La riuscita di una ricostruzione LCA dipende dall'integrazione perfetta tra chirurgia e riabilitazione. Come specialisti <strong>OMPT</strong>, alleniamo il sistema nervoso a proteggere il ginocchio.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                {[
                  { t: "Pre-Abilitazione", d: "Preparare il ginocchio riduce i tempi post-operatori del 30%." },
                  { t: "Controllo Motorio", d: "Rieduchiamo il cervello a stabilizzare l'articolazione." },
                  { t: "Test di Forza", d: "Misuriamo oggettivamente i valori per il rientro." },
                  { t: "Return to Play", d: "Protocolli specifici per cambi di direzione e impatti." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-[#55B4FF] mb-3" size={24} />
                    <h4 className="font-bold text-[#022166] text-sm uppercase mb-2">{item.t}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#022166] p-8 md:p-12 rounded-[3rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 text-[#55B4FF]">
                  <Scaling size={150} />
                </div>
                <h3 className="text-2xl font-bold mb-6 relative z-10 text-white">L'importanza del percorso</h3>
                <div className="space-y-8 relative z-10">
                  <div className="flex items-end gap-4">
                    <span className="text-5xl font-black text-[#55B4FF]">90%</span>
                    <span className="text-xs uppercase font-bold tracking-widest text-white/60 pb-2 leading-tight">Simmetria di forza <br/>necessaria al rientro</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ROADMAP */}
          <section id="protocollo" className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-6xl font-bold text-[#022166] tracking-tighter mb-6 text-center">Dalla lesione al campo.</h2>
              <p className="text-slate-500 font-light text-lg">Un percorso di recupero diviso in fasi cliniche oggettive.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { i: Gauge, t: "Fase 1", s: "Controllo", d: "Recupero estensione completa e gestione del gonfiore post-chirurgico." },
                { i: Zap, t: "Fase 2", s: "Carico", d: "Rinforzo muscolare progressivo e ripristino del cammino fluido." },
                { i: Activity, t: "Fase 3", s: "Agilità", d: "Introduzione alla corsa lineare e ai primi movimenti dinamici." },
                { i: Trophy, t: "Fase 4", s: "Performance", d: "Test Return to Play e reinserimento completo nell'attività sportiva." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                  <step.i className="text-[#55B4FF] group-hover:scale-110 transition-transform mb-6" size={32} />
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">{step.t}</span>
                  <h4 className="text-xl font-bold text-[#022166] mb-4">{step.s}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CALL TO ACTION AGGRESSIVA */}
          <section className="bg-[#022166] p-10 md:p-24 rounded-[4rem] text-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <Waves size={600} className="text-white absolute -bottom-20 -right-20" />
             </div>
             <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Non aspettare.</h2>
                <p className="text-white/60 text-lg mb-12 font-light italic leading-relaxed">Ogni giorno perso è un giorno di muscolo e fiducia in meno. Recupera la tua stabilità ora.</p>
                <button 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="bg-[#55B4FF] text-[#022166] px-16 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-white transition-all inline-block active:scale-95"
                >
                  Compila il modulo sopra <ChevronRight className="inline ml-2" size={16} />
                </button>
             </div>
          </section>

          {/* FOOTER NAV */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
            <Link href="/trattamenti" className="flex items-center gap-2 text-xs font-bold hover:text-[#022166] transition-colors uppercase tracking-widest text-slate-500">
              <ArrowLeft size={16} /> Altri percorsi riabilitativi
            </Link>
            <p className="text-[10px] font-black uppercase tracking-widest text-center text-slate-500">
              Fisioterapia Malavasi — Specialist Return to Play
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}