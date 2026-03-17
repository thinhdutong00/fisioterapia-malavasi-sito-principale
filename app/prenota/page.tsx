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
      
      {/* SPAZIATURA SUPERIORE AGGIORNATA */}
      <div className="w-full pt-32 pb-10 lg:pt-48 lg:pb-12 bg-white flex items-end px-6 md:px-12 lg:px-24">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[#022166] font-black uppercase tracking-[0.3em] text-[10px]">Prenotazione Online</span>
        </nav>
      </div>

      {/* --- SEZIONE PRENOTAZIONE --- */}
<section id="prenota" className="relative min-h-screen w-full py-16 md:py-24 px-4 md:px-6 bg-[#022166] flex flex-col items-center overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] shadow-2xl">
  
  {/* Decorazioni di sfondo migliorate */}
  <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#55B4FF]/10 rounded-full blur-[80px] md:blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#55B4FF]/5 rounded-full blur-[70px] md:blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

  <div className="max-w-4xl w-full flex flex-col relative z-10">
    
    {/* Progress Bar - Più sottile e discreta */}
    <div className="w-full h-1 bg-white/10 rounded-full mb-10 md:mb-16 overflow-hidden">
      <div 
        className="h-full bg-[#55B4FF] transition-all duration-700 ease-out shadow-[0_0_15px_rgba(85,180,255,0.6)]" 
        style={{ width: `${(step / 5) * 100}%` }} 
      />
    </div>

    <div className="text-white flex flex-col">
      <header className="mb-8 md:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[1px] w-6 md:w-8 bg-[#55B4FF]"></div>
          <span className="text-[#55B4FF] font-black text-[9px] md:text-[10px] uppercase tracking-[0.3em]">Fase {step} di 5</span>
        </div>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] md:leading-[0.95] tracking-tighter">
          Prenota la tua <br />
          <span className="text-[#55B4FF]">Visita.</span>
        </h2>
      </header>

      {/* Contenitore Step con altezza flessibile */}
      <div className="min-h-[380px] md:min-h-[450px] flex flex-col justify-start md:justify-center py-4">
        
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <label className="block text-xl md:text-3xl font-bold mb-6 tracking-tight">Qual è il motivo della visita?</label>
            <textarea 
              className="w-full bg-white/5 border-b-2 border-white/10 p-5 md:p-8 rounded-t-2xl md:rounded-t-3xl outline-none focus:border-[#55B4FF] focus:bg-white/10 transition-all min-h-[180px] md:min-h-[220px] text-lg md:text-2xl font-light placeholder:text-white/10" 
              placeholder="Descrivi brevemente il tuo problema..." 
              value={formData.motivo} 
              onChange={(e) => setFormData({...formData, motivo: e.target.value})} 
            />
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <label className="block text-xl md:text-3xl font-bold mb-2 tracking-tight">Hai referti o esami?</label>
            <p className="text-[#55B4FF]/80 mb-8 font-medium text-base md:text-lg">Carica foto o PDF per aiutarci (facoltativo).</p>
            <div className="relative border-2 border-dashed border-white/10 rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-16 hover:border-[#55B4FF] hover:bg-white/5 transition-all group flex flex-col items-center justify-center cursor-pointer">
              <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => setFile(e.target.files?.[0] || null)} />
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
                {file ? <FileText className="text-[#55B4FF]" size={32} /> : <Upload className="text-white/40 group-hover:text-[#55B4FF]" size={32} />}
              </div>
              <span className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em] text-center px-4">
                {file ? file.name : "Trascina o seleziona file"}
              </span>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-3 md:space-y-4 max-w-2xl mx-auto w-full">
            <label className="block text-xl md:text-3xl font-bold mb-8 text-center tracking-tight">Dove preferisci riceverci?</label>
            {['Sede Cavezzo (MO)', 'Sede Rovereto (MO)', 'Domicilio'].map((s) => (
              <button 
                key={s} 
                onClick={() => setFormData({...formData, sede: s})} 
                className={`w-full p-5 md:p-8 rounded-2xl md:rounded-3xl border font-black transition-all text-left flex justify-between items-center group ${formData.sede === s ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166] scale-[1.01]' : 'border-white/10 bg-white/5 text-white hover:border-white/30'}`}
              >
                <span className="text-base md:text-xl uppercase tracking-tighter">{s}</span>
                {formData.sede === s ? <CheckCircle size={24} /> : <div className="w-5 h-5 rounded-full border-2 border-white/20 group-hover:border-[#55B4FF]" />}
              </button>
            ))}
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <label className="block text-xl md:text-3xl font-bold text-center mb-8 md:mb-10 tracking-tight">Seleziona Data e Orario</label>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Calendario Mobile-Optimized */}
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6 px-2">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#022166]">
                    {oggi.toLocaleString('it-IT', { month: 'long', year: 'numeric' })}
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center mb-4">
                  {['L', 'M', 'M', 'G', 'V', 'S', 'D'].map((g, idx) => (
                    <span key={idx} className="text-[9px] font-black text-slate-300 uppercase">{g}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 md:gap-2">
                  {giorniMese.map((data, i) => {
                    const isoData = data.toISOString().split('T')[0];
                    const isSelected = formData.data === isoData;
                    return (
                      <button 
                        key={i} 
                        type="button" 
                        onClick={() => setFormData({...formData, data: isoData})} 
                        className={`aspect-square rounded-lg md:rounded-xl text-[12px] md:text-sm font-black transition-all flex items-center justify-center ${isSelected ? 'bg-[#55B4FF] text-[#022166] shadow-md scale-105' : 'hover:bg-slate-100 text-[#022166]'}`}
                      >
                        {data.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fasce Orarie Mobile-Optimized */}
              <div className="space-y-4 md:space-y-6">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#55B4FF] block text-center lg:text-left">Orari disponibili</span>
                <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 md:gap-3 max-h-[200px] md:max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                  {orariDisponibili.map((ora) => (
                    <button 
                      key={ora} 
                      type="button" 
                      onClick={() => setFormData({...formData, ora: ora})} 
                      className={`p-3 md:p-5 rounded-xl md:rounded-2xl border text-[11px] md:text-sm font-black transition-all text-center ${formData.ora === ora ? 'border-[#55B4FF] bg-[#55B4FF] text-[#022166]' : 'border-white/10 bg-white/5 text-white hover:border-white/30'}`}
                    >
                      {ora}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-5 md:space-y-6 max-w-xl mx-auto w-full text-center px-2">
            <label className="block text-xl md:text-3xl font-bold mb-6 md:mb-10 tracking-tight">Ultimo passaggio: i tuoi contatti</label>
            <input type="text" placeholder="Nome e Cognome" className="w-full bg-transparent border-b border-white/10 p-4 md:p-6 outline-none focus:border-[#55B4FF] transition-all text-lg md:text-xl font-bold text-white placeholder:text-white/20" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              <input type="tel" placeholder="Cellulare" className="bg-transparent border-b border-white/10 p-4 md:p-6 outline-none focus:border-[#55B4FF] transition-all text-lg md:text-xl font-bold text-white placeholder:text-white/20" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} />
              <input type="email" placeholder="Email" className="bg-transparent border-b border-white/10 p-4 md:p-6 outline-none focus:border-[#55B4FF] transition-all text-lg md:text-xl font-bold text-white placeholder:text-white/20" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <label className="flex items-start gap-4 cursor-pointer pt-8 md:pt-12 group text-left">
              <input type="checkbox" className="mt-1 w-5 h-5 md:w-6 md:h-6 rounded-lg accent-[#55B4FF] border-2 border-white/10 bg-transparent" checked={formData.privacy} onChange={(e) => setFormData({...formData, privacy: e.target.checked})} />
              <span className="text-[10px] text-white/40 group-hover:text-white/70 transition-colors font-medium leading-relaxed uppercase tracking-wider">
                Acconsento al trattamento dei dati personali in conformità alla <Link href="/privacy" className="underline text-[#55B4FF]">Privacy Policy</Link>.
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Pulsanti di navigazione - Fissi in fondo per facilità d'uso */}
      <div className="mt-12 md:mt-20 mb-16 flex gap-4 md:gap-6 shrink-0">
        {step > 1 && (
          <button onClick={prevStep} className="p-5 md:p-7 border border-white/10 rounded-full text-white hover:border-[#55B4FF] hover:text-[#55B4FF] transition-all active:scale-90">
            <ChevronLeft size={24} className="md:w-8 md:h-8" />
          </button>
        )}
        <button 
          onClick={step === 5 ? inviaPrenotazione : nextStep}
          disabled={(step === 3 && !formData.sede) || (step === 4 && (!formData.data || !formData.ora)) || (step === 5 && (!formData.nome || !formData.privacy))}
          className="flex-1 bg-[#55B4FF] text-[#022166] py-5 md:py-7 rounded-full font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] hover:bg-white hover:shadow-[0_20px_40px_rgba(85,180,255,0.3)] transition-all disabled:opacity-20 active:scale-[0.98] shadow-xl"
        >
          {step === 5 ? 'Invia Prenotazione' : 'Avanti'}
        </button>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}