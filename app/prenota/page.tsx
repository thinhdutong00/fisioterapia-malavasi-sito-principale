"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  Upload, 
  FileText, 
  CheckCircle 
} from 'lucide-react';

export default function PrenotaPage() {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    motivo: '',
    sede: '',
    data: '',
    ora: '',
    nome: '',
    telefono: '',
    email: '',
    privacy: false
  });

  // Logica navigazione
  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  // Generazione giorni calendario (Esempio semplificato per 14 giorni)
  const oggi = new Date();
  const giorniMese = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(oggi.getDate() + i);
    return d;
  });

  const orariDisponibili = ["09:00", "10:00", "11:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

  const inviaPrenotazione = () => {
    alert("Richiesta inviata con successo! Ti ricontatteremo a breve.");
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      
      {/* SPAZIATURA SUPERIORE (Bordo per Header) */}
      <div className="w-full h-32 lg:h-48 bg-white flex items-end pb-8 px-6 md:px-12 lg:px-24">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[#022166] font-black uppercase tracking-[0.3em] text-[10px]">Prenotazione Online</span>
        </nav>
      </div>

      {/* --- SEZIONE PRENOTAZIONE --- */}
      <section id="prenota" className="relative min-h-screen w-full py-24 px-6 bg-[#022166] flex flex-col items-center overflow-visible rounded-t-[3rem] md:rounded-t-[5rem] shadow-2xl">
        
        {/* Decorazioni di sfondo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#55B4FF]/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#55B4FF]/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl w-full flex flex-col relative flex-grow justify-center">
          
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-white/10 rounded-full mb-16 overflow-hidden">
            <div 
              className="h-full bg-[#55B4FF] transition-all duration-700 shadow-[0_0_15px_#55B4FF]" 
              style={{ width: `${(step / 5) * 100}%` }} 
            />
          </div>

          <div className="text-white flex flex-col">
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-[#55B4FF]"></div>
                <span className="text-[#55B4FF] font-bold text-[10px] uppercase tracking-[0.4em]">Fase {step} di 5</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold text-[#ffffff] leading-[0.95] mb-10 tracking-tighter">
  Prenota la tua <br />
  <span className="text-[#55B4FF]">Visita.</span>
</h1>
            </header>

            <div className="min-h-[450px] flex flex-col justify-center">
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <label className="block text-2xl md:text-3xl font-bold mb-8 tracking-tight">Qual è il motivo della visita?</label>
                  <textarea 
                    className="w-full bg-white/5 border-b-2 border-white/20 p-8 rounded-t-3xl outline-none focus:border-[#55B4FF] focus:bg-white/10 transition-all min-h-[220px] text-xl md:text-2xl font-light placeholder:text-white/10" 
                    placeholder="Descrivi brevemente il tuo problema..." 
                    value={formData.motivo} 
                    onChange={(e) => setFormData({...formData, motivo: e.target.value})} 
                  />
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <label className="block text-2xl md:text-3xl font-bold mb-2 tracking-tight">Hai referti o esami?</label>
                  <p className="text-[#55B4FF]/80 mb-10 font-medium text-lg">Carica foto o PDF per aiutarci nella diagnosi (facoltativo).</p>
                  <div className="relative border-2 border-dashed border-white/20 rounded-[3rem] p-16 hover:border-[#55B4FF] hover:bg-white/5 transition-all group flex flex-col items-center justify-center cursor-pointer">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {file ? <FileText className="text-[#55B4FF]" size={40} /> : <Upload className="text-white/40 group-hover:text-[#55B4FF]" size={40} />}
                    </div>
                    <span className="font-black text-xs uppercase tracking-[0.3em]">{file ? file.name : "Trascina o seleziona file"}</span>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4 max-w-2xl mx-auto w-full">
                  <label className="block text-2xl md:text-3xl font-bold mb-10 text-center tracking-tight">Dove preferisci riceverci?</label>
                  {['Sede Cavezzo (MO)', 'Sede Rovereto (MO)', 'Domicilio'].map((s) => (
                    <button 
                      key={s} 
                      onClick={() => setFormData({...formData, sede: s})} 
                      className={`w-full p-8 rounded-3xl border-2 font-black transition-all text-left flex justify-between items-center group ${formData.sede === s ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166] scale-[1.02]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}
                    >
                      <span className="text-xl uppercase tracking-tighter">{s}</span>
                      {formData.sede === s ? <CheckCircle size={28} /> : <div className="w-6 h-6 rounded-full border-2 border-white/20 group-hover:border-[#55B4FF]" />}
                    </button>
                  ))}
                </div>
              )}

              {step === 4 && (
                <div className="animate-in fade-in zoom-in-95 duration-500">
                  <label className="block text-2xl md:text-3xl font-bold text-center mb-10 tracking-tight">Seleziona Data e Orario</label>
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl">
                      <div className="flex items-center justify-between mb-6 px-2">
                        <span className="text-xs font-black uppercase tracking-widest text-[#022166]">
                          {oggi.toLocaleString('it-IT', { month: 'long', year: 'numeric' })}
                        </span>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center mb-4">
                        {['L', 'M', 'M', 'G', 'V', 'S', 'D'].map((g, idx) => (
                          <span key={idx} className="text-[10px] font-black text-slate-300 uppercase">{g}</span>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {giorniMese.map((data, i) => {
                          const isoData = data.toISOString().split('T')[0];
                          const isSelected = formData.data === isoData;
                          return (
                            <button key={i} type="button" onClick={() => setFormData({...formData, data: isoData})} className={`aspect-square rounded-xl text-sm font-black transition-all flex items-center justify-center ${isSelected ? 'bg-[#55B4FF] text-[#022166] shadow-lg scale-110' : 'hover:bg-slate-100 text-[#022166]'}`}>
                              {data.getDate()}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#55B4FF] block">Fasce orarie disponibili</span>
                      <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {orariDisponibili.map((ora) => (
                          <button key={ora} type="button" onClick={() => setFormData({...formData, ora: ora})} className={`p-5 rounded-2xl border-2 text-sm font-black transition-all text-center ${formData.ora === ora ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/40'}`}>
                            {ora}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6 max-w-xl mx-auto w-full text-center">
                  <label className="block text-2xl md:text-3xl font-bold mb-10 tracking-tight">Ultimo passaggio: i tuoi contatti</label>
                  <input type="text" placeholder="Nome e Cognome" className="w-full bg-white/5 border-b-2 border-white/20 p-6 outline-none focus:border-[#55B4FF] transition-all text-xl font-bold text-white placeholder:text-white/20" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
                  <div className="grid md:grid-cols-2 gap-8">
                    <input type="tel" placeholder="Cellulare" className="bg-transparent border-b-2 border-white/20 p-6 outline-none focus:border-[#55B4FF] transition-all text-xl font-bold text-white placeholder:text-white/20" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
                    <input type="email" placeholder="Email" className="bg-transparent border-b-2 border-white/20 p-6 outline-none focus:border-[#55B4FF] transition-all text-xl font-bold text-white placeholder:text-white/20" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <label className="flex items-start gap-4 cursor-pointer pt-12 group text-left">
                    <input type="checkbox" className="mt-1 w-6 h-6 rounded-lg accent-[#55B4FF] border-2 border-white/20 bg-transparent" checked={formData.privacy} onChange={(e) => setFormData({...formData, privacy: e.target.checked})} />
                    <span className="text-xs text-white/40 group-hover:text-white/70 transition-colors font-medium leading-relaxed uppercase tracking-wider">
                      Acconsento al trattamento dei dati personali in conformità alla <Link href="/privacy" className="underline text-[#55B4FF]">Privacy Policy</Link>.
                    </span>
                  </label>
                </div>
              )}
            </div>

            <div className="mt-20 mb-24 flex gap-6 shrink-0">
              {step > 1 && (
                <button onClick={prevStep} className="p-7 border-2 border-white/10 rounded-full text-white hover:border-[#55B4FF] hover:text-[#55B4FF] transition-all">
                  <ChevronLeft size={32} />
                </button>
              )}
              <button 
                onClick={step === 5 ? inviaPrenotazione : nextStep}
                disabled={(step === 3 && !formData.sede) || (step === 4 && (!formData.data || !formData.ora)) || (step === 5 && (!formData.nome || !formData.privacy))}
                className="flex-1 bg-[#55B4FF] text-[#022166] py-7 rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:bg-white hover:shadow-[0_25px_50px_rgba(85,180,255,0.4)] transition-all disabled:opacity-20 active:scale-95 shadow-xl"
              >
                {step === 5 ? 'Invia Prenotazione' : 'Passaggio Successivo'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}