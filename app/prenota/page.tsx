"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, 
  ChevronRight, 
  Upload, 
  FileText, 
  CheckCircle 
} from 'lucide-react';

export default function PrenotaPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    motivo: '',
    sede: '',
    indirizzo: '', // Nuovo campo
    data: '',
    ora: '',
    nome: '',
    telefono: '',
    email: '',
    privacy: false
  });

  // LOGICA NAVIGAZIONE CONDIZIONALE
  const nextStep = () => {
    // Se sono alla scelta sede (3) e NON scelgo Domicilio, salto l'indirizzo (4) e vado alla data (5)
    if (step === 3 && formData.sede !== 'Domicilio') {
      setStep(5);
    } else {
      setStep((s) => Math.min(s + 1, 6));
    }
  };

  const prevStep = () => {
    // Se torno indietro dalla Data (5) e NON avevo scelto Domicilio, torno alla Sede (3)
    if (step === 5 && formData.sede !== 'Domicilio') {
      setStep(3);
    } else {
      setStep((s) => Math.max(s - 1, 1));
    }
  };

  // Generazione giorni calendario
  const oggi = new Date();
  const giorniMese = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(oggi.getDate() + i);
    return d;
  });

  const orariDisponibili = ["09:00", "10:00", "11:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

  const inviaPrenotazione = async () => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/conferma');
      } else {
        alert("C'è stato un problema tecnico. Riprova tra poco.");
      }
    } catch (error) {
      alert("Errore di connessione. Controlla la tua rete.");
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
        <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-[#55B4FF]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl w-full flex flex-col relative flex-grow justify-center">
          
          {/* PROGRESS BAR (6 Step totali ora) */}
          <div className="w-full h-1 bg-white/10 rounded-full mb-16 overflow-hidden">
            <div 
              className="h-full bg-[#55B4FF] transition-all duration-700 shadow-[0_0_10px_#55B4FF]" 
              style={{ width: `${(step / 6) * 100}%` }} 
            />
          </div>

          <div className="text-white flex flex-col">
            <div className="mb-12">
              <span className="text-[#55B4FF] font-bold text-[10px] uppercase tracking-[0.3em] block mb-2">Fase {step} di 6</span>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-[#ffffff] leading-[0.95] mb-10 tracking-tighter">
                Prenota la tua <br />
                <span className="text-[#55B4FF]">Visita.</span>
              </h1>
            </div>

            <div className="min-h-[400px] flex flex-col justify-center">
              
              {/* STEP 1: MOTIVO */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <label className="block text-2xl font-bold mb-8 tracking-tight">Qual è il motivo della visita?</label>
                  <textarea 
                    className="w-full bg-white/5 border-b-2 border-white/20 p-6 rounded-t-3xl outline-none focus:border-[#55B4FF] focus:bg-white/10 transition-all min-h-[200px] text-xl" 
                    placeholder="Descrivi brevemente il tuo problema..." 
                    value={formData.motivo} 
                    onChange={(e) => setFormData({...formData, motivo: e.target.value})} 
                  />
                </div>
              )}

              {/* STEP 2: REFERTI */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <label className="block text-2xl font-bold mb-2 tracking-tight">Hai referti o esami?</label>
                  <p className="text-[#55B4FF] mb-10 font-medium text-lg text-white/60">Facoltativo: carica documenti utili.</p>
                  <div className="relative border-2 border-dashed border-white/20 rounded-[3rem] p-16 hover:border-[#55B4FF] hover:bg-white/5 transition-all group flex flex-col items-center justify-center cursor-pointer">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                      {file ? <FileText className="text-[#55B4FF]" size={40} /> : <Upload className="text-white/40 group-hover:text-[#55B4FF]" size={40} />}
                    </div>
                    <span className="font-black text-sm uppercase tracking-widest">{file ? file.name : "Carica file"}</span>
                  </div>
                </div>
              )}

              {/* STEP 3: SEDE */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4 max-w-2xl mx-auto w-full">
                  <label className="block text-2xl font-bold mb-10 text-center tracking-tight uppercase">Dove preferisci riceverci?</label>
                  {['Sede Cavezzo (MO)', 'Sede Rovereto (MO)', 'Domicilio'].map((s) => (
                    <button 
                      key={s} 
                      onClick={() => setFormData({...formData, sede: s})} 
                      className={`w-full p-8 rounded-3xl border-2 font-black transition-all text-left flex justify-between items-center group ${formData.sede === s ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}
                    >
                      <span className="text-xl uppercase tracking-tighter">{s}</span>
                      {formData.sede === s ? <CheckCircle size={28} /> : <div className="w-6 h-6 rounded-full border-2 border-white/20" />}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 4: INDIRIZZO (CONDIZIONALE) */}
              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <label className="block text-2xl font-bold mb-8 tracking-tight text-center">Indica l'indirizzo per il domicilio</label>
                  <input 
                    type="text"
                    placeholder="Via, Civico, Città" 
                    className="w-full bg-white/5 border-b-2 border-white/20 p-6 outline-none focus:border-[#55B4FF] transition-all text-xl text-white" 
                    value={formData.indirizzo} 
                    onChange={(e) => setFormData({...formData, indirizzo: e.target.value})} 
                  />
                </div>
              )}

              {/* STEP 5: DATA E ORA */}
              {step === 5 && (
                <div className="animate-in fade-in zoom-in-95 duration-500">
                  <label className="block text-2xl font-bold text-center mb-10 tracking-tight">Data e Orario</label>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-white rounded-[2.5rem] p-8">
                      <div className="grid grid-cols-7 gap-2">
                        {giorniMese.map((data, i) => {
                          const isoData = data.toISOString().split('T')[0];
                          const isSelected = formData.data === isoData;
                          return (
                            <button key={i} onClick={() => setFormData({...formData, data: isoData})} className={`aspect-square rounded-xl text-sm font-black transition-all flex items-center justify-center ${isSelected ? 'bg-[#55B4FF] text-white' : 'text-[#022166] hover:bg-slate-100'}`}>
                              {data.getDate()}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {orariDisponibili.map((ora) => (
                        <button key={ora} onClick={() => setFormData({...formData, ora: ora})} className={`p-4 rounded-xl border-2 text-sm font-black ${formData.ora === ora ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 text-white'}`}>
                          {ora}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: CONTATTI */}
              {step === 6 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 max-w-xl mx-auto w-full text-center">
                  <label className="block text-2xl font-bold mb-10 tracking-tight">I tuoi contatti</label>
                  <input type="text" placeholder="Nome e Cognome" className="w-full bg-white/5 border-b-2 border-white/20 p-5 outline-none focus:border-[#55B4FF] text-xl font-bold text-white" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
                  <div className="grid md:grid-cols-2 gap-8">
                    <input type="tel" placeholder="Cellulare" className="bg-transparent border-b-2 border-white/20 p-5 outline-none focus:border-[#55B4FF] text-xl font-bold text-white" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
                    <input type="email" placeholder="Email" className="bg-transparent border-b-2 border-white/20 p-5 outline-none focus:border-[#55B4FF] text-xl font-bold text-white" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <label className="flex items-center gap-4 cursor-pointer pt-12">
                    <input type="checkbox" className="w-6 h-6 rounded-lg accent-[#55B4FF]" checked={formData.privacy} onChange={(e) => setFormData({...formData, privacy: e.target.checked})} />
                    <span className="text-xs text-white/40 text-left">Acconsento al trattamento dei dati (<Link href="/privacy" className="underline text-[#55B4FF]">Privacy Policy</Link>).</span>
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
                onClick={step === 6 ? inviaPrenotazione : nextStep}
                disabled={
                  (step === 3 && !formData.sede) || 
                  (step === 4 && !formData.indirizzo) ||
                  (step === 5 && (!formData.data || !formData.ora)) || 
                  (step === 6 && (!formData.nome || !formData.privacy))
                }
                className="flex-1 bg-[#55B4FF] text-[#022166] py-6 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-white transition-all disabled:opacity-20"
              >
                {step === 6 ? 'Invia Richiesta' : 'Continua'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}