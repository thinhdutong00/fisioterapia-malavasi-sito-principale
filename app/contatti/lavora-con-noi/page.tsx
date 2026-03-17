"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  ChevronRight, 
  Mail, 
  MapPin, 
  Stethoscope, 
  HeartPulse, 
  Plus, 
  Upload, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function LavoraConNoi() {
  const [file, setFile] = useState<File | null>(null);
  const [inviato, setInviato] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui andrebbe la logica di invio API
    setInviato(true);
  };

  return (
    <main className="relative min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-[#022166] text-white overflow-hidden">
        {/* Decorazione di sfondo */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#55B4FF]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Cresciamo insieme
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8">
              Costruiamo il futuro della <span className="text-[#55B4FF]">riabilitazione.</span>
            </h1>
            <p className="text-xl text-white/70 font-medium leading-relaxed max-w-2xl">
              Siamo costantemente alla ricerca di fisioterapisti appassionati e professionisti della salute che condividano il nostro approccio basato sulle evidenze scientifiche.
            </p>
          </div>
        </div>
      </section>

      {/* --- VALORI / COSA CERCHIAMO --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://github.com/thinhdutong00/image-fisioterapia-malavasi/blob/main/1.png?raw=true" 
                alt="Ambiente di lavoro Studio Malavasi"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-[#022166] tracking-tight mb-6">Chi stiamo cercando</h2>
                <p className="text-slate-500 text-lg leading-relaxed italic">
                  Il nostro studio a Cavezzo non è solo un luogo di cura, ma un centro di eccellenza dove la formazione continua e il confronto clinico sono all'ordine del giorno.
                </p>
              </div>

              <div className="grid gap-6">
                {[
                  { 
                    title: "Fisioterapisti OMPT / Specializzati", 
                    desc: "Professionisti con focus sulla terapia manuale e l'esercizio terapeutico.",
                    icon: <Stethoscope className="text-[#55B4FF]" />
                  },
                  { 
                    title: "Altre Figure Sanitarie", 
                    desc: "Nutrizionisti, Osteopati o Medici specialisti interessati a una collaborazione multidisciplinare.",
                    icon: <HeartPulse className="text-[#55B4FF]" />
                  },
                  { 
                    title: "Mentalità Scientifica", 
                    desc: "Persone curiose, aggiornate e orientate al miglioramento costante del paziente.",
                    icon: <Plus className="text-[#55B4FF]" />
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#022166] text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORM DI CANDIDATURA --- */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-slate-100">
          {!inviato ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#022166] mb-4">Invia la tua candidatura</h2>
                <p className="text-slate-500 font-medium">Compila il modulo e allega il tuo CV, ti risponderemo al più presto.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#022166] ml-2">Nome Completo</label>
                    <input type="text" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#55B4FF] transition-all" placeholder="Mario Rossi" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#022166] ml-2">Email</label>
                    <input type="email" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#55B4FF] transition-all" placeholder="mario@esempio.it" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#022166] ml-2">Specializzazione / Ruolo</label>
                  <input type="text" required className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#55B4FF] transition-all" placeholder="es. Fisioterapista OMPT" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#022166] ml-2">Messaggio di presentazione</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-[#55B4FF] transition-all resize-none" placeholder="Raccontaci brevemente di te..."></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#022166] ml-2">Il tuo CV (PDF)</label>
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-[2rem] bg-slate-50 hover:bg-slate-100 hover:border-[#55B4FF] cursor-pointer transition-all">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 text-slate-400 mb-2" />
                      <p className="text-sm text-slate-500 font-bold">{file ? file.name : "Clicca per caricare o trascina"}</p>
                    </div>
                    <input type="file" className="hidden" accept=".pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                  </label>
                </div>

                <button type="submit" className="w-full bg-[#022166] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#55B4FF] transition-all shadow-lg shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-3">
                  Invia Candidatura <ArrowRight size={18} />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-bold text-[#022166] mb-4">Ricevuto!</h2>
              <p className="text-slate-500 mb-8">Grazie per il tuo interesse. Valuteremo il tuo profilo e ti contatteremo se in linea con le nostre ricerche attuali.</p>
              <Link href="/" className="inline-flex items-center gap-2 text-[#55B4FF] font-black text-xs uppercase tracking-widest hover:underline">
                Torna alla Home <ChevronRight size={14} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* --- INFO CONTACT --- */}
      <section className="py-12 px-6 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
          Oppure scrivici direttamente a: <span className="text-[#022166] ml-2">fisioterapiamalavasi@gmail.com</span>
        </p>
      </section>

    </main>
  );
}