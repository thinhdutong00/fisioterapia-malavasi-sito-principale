"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, 
  ChevronRight, 
  Upload, 
  FileText, 
  CheckCircle,
  Clock,
  Calendar,
  MapPin
} from 'lucide-react';

export default function PrenotaPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    // Dati Clinici (Step 1-7)
    problema: '',
    durata: '',
    limitazione: '',
    obiettivo: '',
    giaFattoFisio: '',
    diagnosiMedica: '',
    eta: '',
    // Disponibilità (Step 8)
    giorniPreferiti: [] as string[],
    fasciaOraria: '',
    urgenza: '',
    // Sede e Indirizzo (Step 9-10)
    sede: '',
    indirizzo: '',
    // Contatti (Step 11)
    nome: '',
    telefono: '',
    email: '',
    privacy: false
  });

  // Funzione per convertire il file in Base64 per l'invio API
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // LOGICA NAVIGAZIONE CONDIZIONALE
  const nextStep = () => {
    // Gestione Step 6 -> 6.5 (File) o 7
    if (step === 6) {
      if (formData.diagnosiMedica === 'Sì') {
        setStep(6.5);
      } else {
        setStep(7);
      }
      return;
    }

    // Gestione Step 6.5 -> 7
    if (step === 6.5) {
      setStep(7);
      return;
    }

    // Se sono alla scelta sede (9) e NON scelgo Domicilio, salto l'indirizzo (10) e vado ai contatti (11)
    if (step === 9 && formData.sede !== 'Domicilio') {
      setStep(11);
    } else {
      setStep((s) => Math.min(s + 1, 11));
    }
  };

  const prevStep = () => {
    // Gestione ritorno da Step 7 verso 6.5 o 6
    if (step === 7) {
      if (formData.diagnosiMedica === 'Sì') {
        setStep(6.5);
      } else {
        setStep(6);
      }
      return;
    }

    // Gestione ritorno da 6.5 a 6
    if (step === 6.5) {
      setStep(6);
      return;
    }

    // Se torno indietro dai Contatti (11) e NON avevo scelto Domicilio, torno alla Sede (9)
    if (step === 11 && formData.sede !== 'Domicilio') {
      setStep(9);
    } else {
      setStep((s) => Math.max(s - 1, 1));
    }
  };

  // GESTIONE SELEZIONE MULTIPLA GIORNI
  const toggleGiorno = (giorno: string) => {
    const attuali = formData.giorniPreferiti;
    if (attuali.includes(giorno)) {
      setFormData({ ...formData, giorniPreferiti: attuali.filter(g => g !== giorno) });
    } else {
      setFormData({ ...formData, giorniPreferiti: [...attuali, giorno] });
    }
  };

  const inviaPrenotazione = async () => {
    setIsSending(true);
    try {
      let attachment = null;
      if (file) {
        const base64Content = await fileToBase64(file);
        attachment = {
          filename: file.name,
          content: base64Content,
        };
      }

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, attachment }),
      });

      if (response.ok) {
        router.push('/conferma');
      } else {
        alert("C'è stato un problema tecnico. Riprova tra poco.");
      }
    } catch (error) {
      alert("Errore di connessione. Controlla la tua rete.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* BREADCRUMB */}
      <div className="w-full pt-32 pb-10 lg:pt-48 lg:pb-12 bg-white flex items-end px-6 md:px-12 lg:px-24">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[#022166] font-black uppercase tracking-[0.3em] text-[10px]">Prenotazione Online</span>
        </nav>
      </div>

      <section className="relative min-h-screen w-full py-32 px-6 bg-[#022166] flex flex-col items-center overflow-visible">
        {/* DECORAZIONE SFONDO */}
        <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-[#55B4FF]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl w-full flex flex-col relative flex-grow justify-center">
          
          {/* PROGRESS BAR */}
          <div className="w-full h-1 bg-white/10 rounded-full mb-8 md:mb-16 overflow-hidden">
            <div 
              className="h-full bg-[#55B4FF] transition-all duration-700 shadow-[0_0_10px_#55B4FF]" 
              style={{ width: `${(step / 11) * 100}%` }} 
            />
          </div>

          <div className="text-white flex flex-col">
            <div className="mb-6 md:mb-12">
              <span className="text-[#55B4FF] font-bold text-[10px] uppercase tracking-[0.3em] block mb-2">
                Fase {step === 6.5 ? "6 Bis" : step} di 11
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-[#ffffff] leading-[0.95] mb-6 md:mb-10 tracking-tighter">
                {step === 11 ? "Ci siamo" : "Esaminiamo il tuo"} <br />
                <span className="text-[#55B4FF]">{step === 11 ? "quasi" : "dolore"}</span>
              </h1>
            </div>

            {/* CONTENITORE STEP: Altezza ridotta su mobile, centrata su desktop */}
            <div className="min-h-[280px] md:min-h-[400px] flex flex-col justify-start md:justify-center">
              
              {/* STEP 1: PROBLEMA */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                  <label className="block text-2xl font-bold mb-8 tracking-tight">In quale punto del corpo senti dolore o rigidità?</label>
                  {['Mal di schiena', 'Dolore cervicale', 'Problema alla spalla', 'Ginocchio / anca', 'Infortunio sportivo', 'Altro'].map((opzione) => (
                    <button 
                      key={opzione}
                      onClick={() => setFormData({...formData, problema: opzione})}
                      className={`w-full p-6 rounded-2xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.problema === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}
                    >
                      <span className="text-xl uppercase tracking-tighter">{opzione}</span>
                      {formData.problema === opzione ? <CheckCircle size={28} /> : <div className="w-6 h-6 rounded-full border-2 border-white/20" />}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 2: DURATA */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                  <label className="block text-2xl font-bold mb-8 tracking-tight">Da quanto tempo hai questo problema?</label>
                  {['Da pochi giorni', 'Da settimane', 'Da mesi/anni'].map((opzione) => (
                    <button 
                      key={opzione}
                      onClick={() => setFormData({...formData, durata: opzione})}
                      className={`w-full p-6 rounded-2xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.durata === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}
                    >
                      <span className="text-xl uppercase tracking-tighter">{opzione}</span>
                      {formData.durata === opzione ? <CheckCircle size={28} /> : <div className="w-6 h-6 rounded-full border-2 border-white/20" />}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 3: LIMITAZIONE */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                  <label className="block text-2xl font-bold mb-8 tracking-tight">Quanto ti limita nella vita quotidiana?</label>
                  {['Poco', 'Abbastanza', 'Molto'].map((opzione) => (
                    <button 
                      key={opzione}
                      onClick={() => setFormData({...formData, limitazione: opzione})}
                      className={`w-full p-6 rounded-2xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.limitazione === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}
                    >
                      <span className="text-xl uppercase tracking-tighter">{opzione}</span>
                      {formData.limitazione === opzione ? <CheckCircle size={28} /> : <div className="w-6 h-6 rounded-full border-2 border-white/20" />}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 4: OBIETTIVO */}
              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                  <label className="block text-2xl font-bold mb-8 tracking-tight">Cosa vorresti ottenere dalla fisioterapia?</label>
                  {['Eliminare il dolore', 'Tornare ad allenarmi', 'Muovermi senza fastidi', 'Evitare un intervento', 'Altro'].map((opzione) => (
                    <button 
                      key={opzione}
                      onClick={() => setFormData({...formData, obiettivo: opzione})}
                      className={`w-full p-6 rounded-2xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.obiettivo === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}
                    >
                      <span className="text-xl uppercase tracking-tighter">{opzione}</span>
                      {formData.obiettivo === opzione ? <CheckCircle size={28} /> : <div className="w-6 h-6 rounded-full border-2 border-white/20" />}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 5: GIA FATTO FISIO */}
              {step === 5 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                  <label className="block text-2xl font-bold mb-8 tracking-tight">Hai già fatto fisioterapia per questo problema?</label>
                  {['Sì', 'No'].map((opzione) => (
                    <button 
                      key={opzione}
                      onClick={() => setFormData({...formData, giaFattoFisio: opzione})}
                      className={`w-full p-6 rounded-2xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.giaFattoFisio === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}
                    >
                      <span className="text-xl uppercase tracking-tighter">{opzione}</span>
                      {formData.giaFattoFisio === opzione ? <CheckCircle size={28} /> : <div className="w-6 h-6 rounded-full border-2 border-white/20" />}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 6: DIAGNOSI */}
              {step === 6 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                  <label className="block text-2xl font-bold mb-8 tracking-tight">Hai una diagnosi medica?</label>
                  {['Sì', 'No'].map((opzione) => (
                    <button 
                      key={opzione}
                      onClick={() => setFormData({...formData, diagnosiMedica: opzione})}
                      className={`w-full p-6 rounded-2xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.diagnosiMedica === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}
                    >
                      <span className="text-xl uppercase tracking-tighter">{opzione}</span>
                      {formData.diagnosiMedica === opzione ? <CheckCircle size={28} /> : <div className="w-6 h-6 rounded-full border-2 border-white/20" />}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 6.5: CARICAMENTO REFERTO (CONDIZIONALE) */}
              {step === 6.5 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                   <label className="block text-2xl font-bold mb-8 tracking-tight">Carica il tuo referto medico</label>
                   <div className="relative group">
                    <input 
                      type="file" 
                      onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className={`p-12 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center transition-all ${file ? 'border-[#55B4FF] bg-[#55B4FF]/10' : 'border-white/20 bg-white/5 group-hover:border-white/40'}`}>
                      {file ? (
                        <>
                          <FileText size={48} className="text-[#55B4FF] mb-4" />
                          <p className="text-xl font-bold text-white text-center">{file.name}</p>
                          <p className="text-sm text-[#55B4FF] mt-2 font-bold uppercase tracking-widest">Pronto per l'invio</p>
                        </>
                      ) : (
                        <>
                          <Upload size={48} className="text-white/20 mb-4 group-hover:text-[#55B4FF] transition-colors" />
                          <p className="text-xl font-bold text-white/60 text-center uppercase tracking-tighter">Trascina o seleziona il file</p>
                          <p className="text-sm text-white/30 mt-2 uppercase font-bold text-center">PDF, JPG o PNG (Max 5MB)</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 7: ETA */}
              {step === 7 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                  <label className="block text-2xl font-bold mb-8 tracking-tight">Indica la tua fascia d'età</label>
                  {['18–25', '26–35', '36–50', '50+'].map((opzione) => (
                    <button 
                      key={opzione}
                      onClick={() => setFormData({...formData, eta: opzione})}
                      className={`w-full p-6 rounded-2xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.eta === opzione ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}
                    >
                      <span className="text-xl uppercase tracking-tighter">{opzione}</span>
                      {formData.eta === opzione ? <CheckCircle size={28} /> : <div className="w-6 h-6 rounded-full border-2 border-white/20" />}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 8: GIORNI E ORARI */}
              {step === 8 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                  <div>
                    <label className="block text-xl font-bold mb-4 flex items-center gap-2 tracking-tight">
                      <Calendar size={20} className="text-[#55B4FF]"/> Giorni preferiti
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {['Lun', 'Mar', 'Mer', 'Gio', 'Ven'].map((g) => (
                        <button 
                          key={g} 
                          type="button" 
                          onClick={() => toggleGiorno(g)} 
                          className={`p-4 rounded-xl border-2 font-bold transition-all text-sm ${formData.giorniPreferiti.includes(g) ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white hover:border-white/30'}`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl font-bold mb-4 flex items-center gap-2 tracking-tight">
                      <Clock size={20} className="text-[#55B4FF]"/> Fascia oraria
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Mattina', 'Pomeriggio', 'Sera'].map((f) => (
                        <button 
                          key={f} 
                          type="button" 
                          onClick={() => setFormData({...formData, fasciaOraria: f})} 
                          className={`p-4 rounded-xl border-2 font-bold transition-all text-sm ${formData.fasciaOraria === f ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white hover:border-white/30'}`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl font-bold mb-4 tracking-tight">Disponibilità urgente?</label>
                    <div className="flex gap-4">
                      {['Sì', 'No'].map((u) => (
                        <button 
                          key={u} 
                          type="button" 
                          onClick={() => setFormData({...formData, urgenza: u})} 
                          className={`flex-1 p-4 rounded-xl border-2 font-bold transition-all ${formData.urgenza === u ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white hover:border-white/30'}`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 9: SEDE */}
              {step === 9 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3">
                  <label className="block text-2xl font-bold mb-8 tracking-tight">Dove preferisci effettuare la visita?</label>
                  {['Sede Cavezzo (Mo)', 'Sede Rovereto sulla Secchia (Mo)', 'Domicilio'].map((s) => (
                    <button 
                      key={s} 
                      onClick={() => setFormData({...formData, sede: s})} 
                      className={`w-full p-6 rounded-2xl border-2 font-bold transition-all text-left flex justify-between items-center ${formData.sede === s ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}
                    >
                      <span className="text-xl uppercase tracking-tighter">{s}</span>
                      {formData.sede === s ? <CheckCircle size={28} /> : <div className="w-6 h-6 rounded-full border-2 border-white/20" />}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 10: INDIRIZZO (CONDIZIONALE) */}
{step === 10 && (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <label className="block text-2xl font-bold mb-8 tracking-tight flex items-center gap-3">
      <MapPin className="text-[#55B4FF]" /> Indicare indirizzo di residenza
    </label>
    <input 
      type="text"
      name="address"
      autoComplete="street-address"
      placeholder="Via, Civico, Città, CAP" 
      className="w-full bg-white/5 border-b-2 border-white/20 p-6 outline-none focus:border-[#55B4FF] transition-all text-xl text-white font-bold" 
      value={formData.indirizzo} 
      onChange={(e) => setFormData({...formData, indirizzo: e.target.value})} 
    />
    <p className="text-white/40 mt-4 text-sm uppercase tracking-widest font-bold italic">
      Necessario per organizzare lo spostamento al domicilio
    </p>
  </div>
)}

              {/* STEP 11: CONTATTI */}
{step === 11 && (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 max-w-xl mx-auto w-full text-center">
    <label className="block text-2xl font-bold mb-10 tracking-tight">I tuoi contatti</label>
    
    <input 
      type="text" 
      name="name"
      autoComplete="name"
      placeholder="Nome e Cognome" 
      className="w-full bg-white/5 border-b-2 border-white/20 p-5 outline-none focus:border-[#55B4FF] text-xl font-bold text-white" 
      value={formData.nome} 
      onChange={(e) => setFormData({...formData, nome: e.target.value})} 
    />
    
    <div className="grid md:grid-cols-2 gap-8">
      <input 
        type="tel" 
        name="tel"
        autoComplete="tel"
        placeholder="Cellulare" 
        className="bg-transparent border-b-2 border-white/20 p-5 outline-none focus:border-[#55B4FF] text-xl font-bold text-white" 
        value={formData.telefono} 
        onChange={(e) => setFormData({...formData, telefono: e.target.value})} 
      />
      
      <input 
        type="email" 
        name="email"
        autoComplete="email"
        placeholder="Email" 
        className="bg-transparent border-b-2 border-white/20 p-5 outline-none focus:border-[#55B4FF] text-xl font-bold text-white" 
        value={formData.email} 
        onChange={(e) => setFormData({...formData, email: e.target.value})} 
      />
    </div>

    <label className="flex items-center gap-4 cursor-pointer pt-12">
      <input 
        type="checkbox" 
        name="privacy"
        className="w-6 h-6 rounded-lg accent-[#55B4FF]" 
        checked={formData.privacy} 
        onChange={(e) => setFormData({...formData, privacy: e.target.checked})} 
      />
      <span className="text-xs text-white/40 text-left">
        Acconsento al trattamento dei dati (<Link href="/privacy" className="underline text-[#55B4FF]">Privacy Policy</Link>).
      </span>
    </label>
  </div>
)}
            </div>

            {/* NAVIGAZIONE */}
            <div className="mt-20 mb-24 flex gap-6 shrink-0">
              {step > 1 && (
                <button onClick={prevStep} className="p-6 border-2 border-white/10 rounded-full text-white hover:border-[#55B4FF] transition-all">
                  <ChevronLeft size={32} />
                </button>
              )}
              <button 
                onClick={step === 11 ? inviaPrenotazione : nextStep}
                disabled={
                  isSending ||
                  (step === 1 && !formData.problema) ||
                  (step === 2 && !formData.durata) ||
                  (step === 3 && !formData.limitazione) ||
                  (step === 4 && !formData.obiettivo) ||
                  (step === 5 && !formData.giaFattoFisio) ||
                  (step === 6 && !formData.diagnosiMedica) ||
                  (step === 6.5 && !file) || // Obbligatorio se si è scelto SI
                  (step === 7 && !formData.eta) ||
                  (step === 8 && (formData.giorniPreferiti.length === 0 || !formData.fasciaOraria || !formData.urgenza)) ||
                  (step === 9 && !formData.sede) ||
                  (step === 10 && !formData.indirizzo) ||
                  (step === 11 && (!formData.nome || !formData.telefono || !formData.email || !formData.privacy))
                }
                className="flex-1 bg-[#55B4FF] text-[#022166] py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-all disabled:opacity-20"
              >
                {isSending ? 'Invio in corso...' : (step === 11 ? 'Invia Richiesta' : 'Continua')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}