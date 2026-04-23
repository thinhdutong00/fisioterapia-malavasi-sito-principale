"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, ChevronRight, Zap, Target, 
  CheckCircle2, Calendar, Scaling, Trophy,
  AlertCircle, Activity, Waves, ChevronLeft,
  Upload, FileText, CheckCircle, MapPin, 
  AlertTriangle, Microscope, HelpCircle, Move
} from 'lucide-react';

export default function LesioniMeniscaliAdvancedPage() {
  const router = useRouter();
  
  // --- LOGICA MODULO PRENOTAZIONE ---
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    problema: 'Lesione Meniscale', 
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
    1: "Analisi Sintomi",
    1.2: "Specifica il dolore",
    2: "Cronologia infortunio",
    3: "Impatto Funzionale",
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
            <span className="text-[#022166]">Specialista Menisco</span>
          </nav>

          {/* HERO CON MODULO */}
          <header className="mb-24 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Soluzioni rapide per il ginocchio</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
                Ginocchio bloccato? <br />
                <span className="text-[#55B4FF]">Risolviamo la causa.</span>
              </h1>

              <p className="max-w-xl text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-8">
                Il dolore al menisco non sparisce col riposo. Serve una <strong>strategia meccanica</strong> immediata per spegnere l'infiammazione e tornare a caricare senza la paura dell'intervento.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <a href="tel:+393338225464" className="flex items-center justify-center gap-2 bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-[#022166] uppercase text-[10px] tracking-widest hover:bg-slate-50 transition-all">
                   Sintomi acuti? Chiamaci
                 </a>
              </div>
            </div>

            {/* MODULO MULTISTEP INTEGRATO */}
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
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Qual è il sintomo principale?</h3>
                    {['Dolore fitta laterale', 'Ginocchio bloccato', 'Instabilità / Cedimento', 'Altro'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, problema: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.problema === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase tracking-tighter">{opzione}</span>
                        {formData.problema === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {/* ... Stessi step logici del modulo precedente adattati alle lesioni meniscali ... */}
                {step === 1.2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Specifica il tuo dolore</h3>
                    <input type="text" placeholder="Es: dolore durante le torsioni..." className="w-full bg-white/5 border-b-2 border-white/20 p-4 outline-none focus:border-[#55B4FF] text-white font-bold" value={formData.problemaSpecifico} onChange={(e) => setFormData({...formData, problemaSpecifico: e.target.value})} />
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Quando è successo?</h3>
                    {['Infortunio recente', 'Dolore cronico (>3 mesi)', 'Post-intervento'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, durata: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.durata === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.durata === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Cosa non riesci a fare?</h3>
                    {['Piegare tutto il ginocchio', 'Correre / Saltare', 'Scale senza dolore'].map((opzione) => (
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
                    {['Evitare l\'operazione', 'Tornare allo sport', 'Sbloccare il ginocchio', 'Altro'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, obiettivo: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.obiettivo === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase tracking-tighter">{opzione}</span>
                        {formData.obiettivo === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {step === 5 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Sei già stato operato?</h3>
                    {['Sì', 'No, vorrei evitarlo', 'In lista d\'attesa'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, giaFattoFisio: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.giaFattoFisio === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.giaFattoFisio === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}

                {/* Logica comune agli altri moduli per step 6-11 */}
                {step === 6 && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Hai un referto RM?</h3>
                    {['Sì', 'No'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, diagnosiMedica: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.diagnosiMedica === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                        {formData.diagnosiMedica === opzione ? <CheckCircle size={20} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20" />}
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Visualizza gli step finali simili a Gonartrosi... */}
                {step === 7 && (
                   <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Fascia d'età</h3>
                    {['Sotto i 25', '25–45', '46–65', 'Over 65'].map((opzione) => (
                      <button key={opzione} onClick={() => setFormData({...formData, eta: opzione})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.eta === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                        <span className="text-sm uppercase">{opzione}</span>
                      </button>
                    ))}
                  </div>
                )}

                {step === 8 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Quando saresti libero?</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'].map((g) => (
                        <button key={g} onClick={() => toggleGiorno(g)} className={`p-2 rounded-lg border-2 text-[10px] font-bold transition-all ${formData.giorniPreferiti.includes(g) ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white hover:border-white/30'}`}>{g}</button>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-[9px] uppercase tracking-widest text-[#55B4FF] font-bold mb-3">È un dolore acuto?</p>
                      <button onClick={() => setFormData({...formData, urgenza: 'Sì'})} className={`w-full p-3 rounded-xl border-2 font-bold text-[10px] transition-all flex justify-center items-center gap-2 ${formData.urgenza === 'Sì' ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white'}`}>SÌ, HO DOLORE ORA</button>
                    </div>
                  </div>
                )}

                {step === 9 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Sede preferita</h3>
                    {['Sede Cavezzo', 'Sede Rovereto', 'Domicilio'].map((s) => (
                      <button key={s} onClick={() => setFormData({...formData, sede: s})} className={`w-full p-4 rounded-xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.sede === s ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white'}`}>
                        <span className="text-sm uppercase">{s}</span>
                      </button>
                    ))}
                  </div>
                )}

                {step === 11 && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Concludiamo</h3>
                    <input type="text" placeholder="Nome e Cognome" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold outline-none" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
                    <input type="tel" placeholder="Cellulare" className="w-full bg-white/5 border-b-2 border-white/20 p-3 text-white font-bold outline-none" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
                    <label className="flex items-center gap-3 cursor-pointer mt-4">
                      <input type="checkbox" className="accent-[#55B4FF]" checked={formData.privacy} onChange={(e) => setFormData({...formData, privacy: e.target.checked})} />
                      <span className="text-[9px] text-white/40 uppercase font-bold">Accetto Privacy Policy</span>
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

          {/* CHECKLIST SINTOMI */}
          <section className="mb-32">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 bg-[#022166] p-10 rounded-[2.5rem] text-white flex flex-col justify-center">
                <AlertCircle className="text-[#55B4FF] mb-6" size={48} />
                <h2 className="text-3xl font-bold mb-4 tracking-tight leading-tight">Cosa senti?</h2>
                <p className="text-white/60 font-light text-sm leading-relaxed">Se provi queste sensazioni, la meccanica del tuo ginocchio è in sofferenza.</p>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Dolore alla rima", d: "Fitta localizzata sul lato del ginocchio durante le rotazioni." },
                  { t: "Blocco Articolare", d: "Difficoltà a estendere o flettere completamente la gamba." },
                  { t: "Cedimento", d: "Sensazione che il ginocchio 'scappi' scendendo le scale." },
                  { t: "Gonfiore Post-Sforzo", d: "L'articolazione si infiamma dopo aver camminato o corso." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-center hover:border-[#55B4FF]/30 transition-colors">
                    <h4 className="font-black text-[#022166] text-[11px] uppercase mb-2 tracking-widest">{item.t}</h4>
                    <p className="text-slate-500 text-sm font-light leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FOCUS AZIONE */}
          <section className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-[#022166] tracking-tighter leading-[0.95]">
                Basta fermarsi. <br />
                <span className="text-slate-400">Torniamo a caricare.</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Il menisco soffre quando il peso non è distribuito bene. Il nostro metodo OMPT non è "massaggi e attesa", ma <strong>riprogrammazione del carico</strong> per togliere pressione alla lesione.
              </p>
              <div className="grid gap-4">
                {[
                  "Sblocco immediato della mobilità con terapia manuale",
                  "Gestione rapida dell'edema intra-articolare",
                  "Esercizi di rinforzo selettivo per proteggere il menisco",
                  "Test di forza oggettivi per il ritorno in sicurezza"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-[#55B4FF]"></div>
                    <span className="font-bold text-[#022166] text-xs uppercase tracking-wider">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square">
               <div className="absolute inset-0 bg-[#55B4FF]/10 rounded-[3rem] rotate-2"></div>
               <div className="relative h-full w-full bg-[#022166] rounded-[3rem] shadow-2xl p-12 flex flex-col justify-between overflow-hidden text-white">
                  <Activity className="text-[#55B4FF] relative z-10" size={48} />
                  <div className="relative z-10">
                    <p className="text-7xl font-black text-white tracking-tighter mb-2">2-4</p>
                    <p className="text-[#55B4FF] font-bold uppercase text-xs tracking-widest">Settimane per tornare <br />alla vita quotidiana.</p>
                  </div>
                  <Waves className="absolute -bottom-20 -right-20 text-white/5 w-full h-full" />
               </div>
            </div>
          </section>

          {/* ROADMAP */}
          <section className="mb-32">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { i: Scaling, t: "Test Meccanico", d: "In 30 minuti capiamo se il dolore è causato dalla lesione o da un sovraccarico." },
                { i: Zap, t: "Sollievo Rapido", d: "Interveniamo subito sui tessuti per ridurre la fitta e il gonfiore." },
                { i: Trophy, t: "Performance", d: "Alleniamo il ginocchio a reggere carichi superiori per prevenire ricadute." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                  <step.i className="text-[#55B4FF] mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h4 className="text-2xl font-bold text-[#022166] mb-4 tracking-tight">{step.t}</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA AGGRESSIVA */}
          <section className="bg-[#022166] p-10 md:p-24 rounded-[4rem] text-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <Waves size={600} className="text-white absolute -bottom-20 -right-20" />
             </div>
             <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Non aspettare.</h2>
                <p className="text-white/60 text-lg mb-12 font-light italic leading-relaxed">Ogni giorno passato a zoppicare è un giorno di muscolo perso e infiammazione che si cronicizza. Recupera la tua mobilità ora.</p>
                <button 
                  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                  className="bg-[#55B4FF] text-[#022166] px-16 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] hover:bg-white transition-all inline-block active:scale-95"
                >
                  Compila il modulo sopra <ChevronRight className="inline ml-2" size={16} />
                </button>
             </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-24 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 opacity-50">
            <Link href="/trattamenti" className="flex items-center gap-2 text-xs font-bold hover:text-[#022166] transition-colors uppercase tracking-widest text-slate-500">
              <ArrowLeft size={14} /> Altri Percorsi
            </Link>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              Dr. Malavasi OMPT — Knee Specialist
            </p>
          </footer>

        </div>
      </div>
    </main>
  );
}