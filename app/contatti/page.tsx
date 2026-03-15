"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  ChevronRight, 
  ArrowLeft,
  Phone,
  Mail
} from 'lucide-react';

export default function ContattiPage() {
  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.2345!2d11.0289!3d44.8345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDUwJzA0LjIiTiAxMcKwMDEnNDQuMCJF!5e0!3m2!1sit!2sit!4v1620000000000");
  const [isHoursOpen, setIsHoursOpen] = useState(false);

  const sedi = [
    { 
      n: 'Cavezzo (MO)', 
      a: 'Via I maggio, 95', 
      u: "https://www.google.com/maps/embed?pb=...cavezzo" // Inserire link embed reale
    },
    { 
      n: 'Rovereto sulla Secchia (MO)', 
      a: 'Via Savino Forti, 61', 
      u: "https://www.google.com/maps/embed?pb=...rovereto" // Inserire link embed reale
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS - Sincronizzati con Hub Clinico */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[40%] h-[40%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-[#55B4FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* BREADCRUMB */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#022166] font-semibold">Contatti e Sedi</span>
          </nav>

          {/* HEADER - Allineato allo stile Specialistico */}
          <header className="mb-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Vicinanza e Accessibilità</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] mb-10 tracking-tighter">
              Dove <br />
              <span className="text-[#55B4FF]">Trovarci.</span>
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
              Riceviamo presso le nostre sedi specializzate o direttamente a domicilio, 
              garantendo continuità terapeutica in tutta la provincia.
            </p>
          </header>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* COLONNA SINISTRA: SELEZIONE SEDE E INFO */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 px-2">Seleziona lo Studio</h3>
                <div className="space-y-4">
                  {sedi.map(loc => (
                    <button 
                      key={loc.n} 
                      onClick={() => setMapUrl(loc.u)} 
                      className={`group w-full flex items-center gap-5 p-6 rounded-[2rem] transition-all duration-500 border-2 ${
                        mapUrl === loc.u 
                        ? 'bg-[#022166] border-[#022166] text-white shadow-lg' 
                        : 'bg-white border-slate-50 text-[#022166] hover:border-slate-200'
                      }`}
                    >
                      <div className={`p-4 rounded-2xl shrink-0 transition-colors ${
                        mapUrl === loc.u ? 'bg-[#55B4FF] text-[#022166]' : 'bg-slate-100 text-[#022166]'
                      }`}>
                        <MapPin size={24} />
                      </div>
                      <div className="text-left">
                        <p className="font-black text-lg leading-tight mb-1">{loc.n}</p>
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${mapUrl === loc.u ? 'text-[#55B4FF]' : 'text-slate-400'}`}>{loc.a}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* CONTATTI RAPIDI */}
              <div className="bg-[#55B4FF] p-8 rounded-[3rem] text-[#022166]">
                <div className="flex flex-col space-y-6">
                  <a href="tel:+393338225464" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#022166]/10 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Telefono</p>
                      <p className="font-black text-lg">+39 333 822 5464</p>
                    </div>
                  </a>
                  <a href="mailto:info@fisiomalavasi.it" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-[#022166]/10 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Email</p>
                      <p className="font-black text-lg">info@fisiomalavasi.it</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* FISARMONICA ORARI */}
              <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-sm">
                <button 
                  onClick={() => setIsHoursOpen(!isHoursOpen)}
                  className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Clock size={20} className="text-[#55B4FF]" />
                    <span className="font-black text-[#022166] text-xs uppercase tracking-[0.2em]">Orari Clinici</span>
                  </div>
                  <ChevronRight size={18} className={`text-slate-300 transition-transform ${isHoursOpen ? 'rotate-90' : ''}`} />
                </button>
                <div className={`transition-all duration-500 ease-in-out ${isHoursOpen ? 'max-h-[500px] py-6' : 'max-h-0'} overflow-hidden`}>
                  <div className="px-8 space-y-3">
                    {[
                      { d: 'Lunedì', o: '09–13, 15–20' },
                      { d: 'Martedì', o: '09–13, 15–21' },
                      { d: 'Mercoledì', o: '09–13, 15–21' },
                      { d: 'Giovedì', o: '09–13, 15–21' },
                      { d: 'Venerdì', o: '09–13, 15–20' },
                      { d: 'Sabato', o: '09–13' },
                      { d: 'Domenica', o: 'Chiuso' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center border-b border-slate-50 pb-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{item.d}</span>
                        <span className={`text-xs font-black ${item.o === 'Chiuso' ? 'text-red-400' : 'text-[#022166]'}`}>{item.o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* COLONNA DESTRA: MAPPA */}
            <div className="lg:col-span-7 h-[600px] lg:h-full min-h-[500px] relative rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <iframe 
                src={mapUrl} 
                title="Mappa Sedi Studio Fisioterapia Malavasi"
                className="w-full h-full grayscale-[0.1] contrast-[1.05]" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* FOOTER NAVIGATION */}
          <div className="mt-24 border-t border-slate-200 pt-12 flex justify-between items-center text-slate-400">
            <Link href="/" className="inline-flex items-center gap-2 font-bold hover:text-[#022166] transition-all">
              <ArrowLeft size={20} /> Torna alla Home
            </Link>
            <span className="text-[10px] uppercase tracking-widest font-black opacity-40">Fisioterapia Malavasi — Hub Clinico</span>
          </div>

        </div>
      </div>
    </main>
  );
}