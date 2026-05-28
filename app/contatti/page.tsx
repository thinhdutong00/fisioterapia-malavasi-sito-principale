"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  ChevronRight, 
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';

export default function ContattiPage() {
  const [selectedLocation, setSelectedLocation] = useState(0);
  const [isHoursOpen, setIsHoursOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const sedi = [
    { 
      n: 'Cavezzo (MO)', 
      a: 'Via I maggio, 95', 
      directions: 'https://www.google.com/maps/dir/?api=1&destination=Via%20I%20Maggio%2095%2C%20Cavezzo%20MO',
      u: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.877864350324!2d11.02646277665798!3d44.83222587107026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f0f626490791d%3A0xc49d63c683b7f197!2sVia%20I%20Maggio%2C%2095%2C%2041011%20Cavezzo%20MO!5e0!3m2!1sit!2sit!4v1710465000000!5m2!1sit!2sit" 
    },
    { 
      n: 'Rovereto sulla Secchia (MO)', 
      a: 'Via Savino Forti, 61', 
      directions: 'https://www.google.com/maps/dir/?api=1&destination=Via%20Savino%20Forti%2061%2C%20Rovereto%20sulla%20Secchia%20MO',
      u: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.7876543210!2d10.954321!3d44.856789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f0f0f0f0f0f0f%3A0x0f0f0f0f0f0f0f0f!2sVia%20Savino%20Forti%2C%2061%2C%2041016%20Rovereto%20sulla%20Secchia%20MO!5e0!3m2!1sit!2sit!4v1710465000000!5m2!1sit!2sit" 
    }
  ];
  const activeLocation = sedi[selectedLocation];

  return (
    <main className="min-h-screen bg-white">
      
      {/* SPAZIATURA SUPERIORE (Bordo per Header) */}
      <div className="w-full h-40 lg:h-64 bg-white flex items-end pb-10 px-6 md:px-12 lg:px-24">
        {/* Breadcrumb integrato nello spazio bianco */}
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[#022166] font-black uppercase tracking-[0.3em] text-[10px]">Dove Siamo</span>
        </nav>
      </div>

      <section id="dove-siamo" className="relative z-10 bg-white flex flex-col lg:flex-row min-h-[calc(100-rem)] w-full overflow-hidden">
        
        {/* LATO TESTI E SELEZIONE */}
        <div className="lg:w-2/5 w-full p-6 md:p-16 lg:p-24 flex flex-col justify-center bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#55B4FF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 w-full">
            <span className="text-[#55B4FF] font-black text-xs uppercase tracking-[0.3em] mb-4 block">Vicinanza e Accessibilità</span>
            <h2 className="text-5xl md:text-8xl font-bold text-[#022166] leading-[0.95] tracking-tighter mb-8">
  Dove <br className="hidden md:block" /> 
  <span className="text-[#55B4FF]">Trovarci.</span>
</h2>
            <p className="text-slate-500 font-medium mb-12 max-w-sm">Scegli la sede più vicina a te e visualizza il percorso interattivo.</p>
            
            <div className="space-y-4 w-full">
              {sedi.map((loc, index) => (
                <button 
                  key={loc.n} 
                  onClick={() => {
                    setSelectedLocation(index);
                    setShowMap(false);
                  }} 
                  className={`group w-full flex items-center gap-4 p-5 rounded-[2rem] transition-all duration-500 border ${
                    selectedLocation === index
                    ? 'bg-[#022166] text-white shadow-xl border-[#022166]' 
                    : 'bg-white border-slate-100 text-[#022166]'
                  }`}
                  type="button"
                >
                  <div className={`p-3 rounded-2xl shrink-0 transition-colors ${
                    selectedLocation === index ? 'bg-[#55B4FF] text-[#022166]' : 'bg-slate-100 text-[#022166]'
                  }`}>
                    <MapPin size={22} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="font-black text-base leading-none mb-1 truncate">{loc.n}</p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest truncate ${selectedLocation === index ? 'text-[#55B4FF]' : 'text-slate-500'}`}>{loc.a}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* FISARMONICA ORARI */}
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm w-full">
              <button 
                onClick={() => setIsHoursOpen(!isHoursOpen)}
                className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
                type="button"
                aria-label="Mostra orari di apertura"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#55B4FF]/10 rounded-xl flex items-center justify-center text-[#55B4FF]">
                    <Clock size={20} />
                  </div>
                  <span className="font-black text-[#022166] text-sm uppercase tracking-widest">Orari di Apertura</span>
                </div>
                <div className={`transition-transform duration-300 ${isHoursOpen ? 'rotate-180' : ''}`}>
                  <ChevronRight size={20} className="text-slate-400 rotate-90" />
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${isHoursOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-5 pt-0 space-y-3 border-t border-slate-50">
                  {[
                    { d: 'Lunedì', o: '09–13, 15–20' },
                    { d: 'Martedì', o: '09–13, 15–21' },
                    { d: 'Mercoledì', o: '09–13, 15–21' },
                    { d: 'Giovedì', o: '09–13, 15–21' },
                    { d: 'Venerdì', o: '09–13, 15–20' },
                    { d: 'Sabato', o: '09–13' },
                    { d: 'Domenica', o: 'Chiuso' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center gap-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter shrink-0">{item.d}</span>
                      <span className={`text-xs font-black ${item.o === 'Chiuso' ? 'text-red-400' : 'text-[#022166]'} text-right`}>{item.o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#022166] font-bold transition-all text-sm uppercase tracking-widest">
                <ArrowLeft size={16} /> Torna alla Home
              </Link>
            </div>
          </div>
        </div>

        {/* LATO MAPPA */}
        <div className="lg:w-3/5 w-full h-[500px] lg:h-auto min-h-[500px] relative bg-slate-200">
          {showMap ? (
            <iframe 
              src={activeLocation.u} 
              title="Mappa Sedi Studio Fisioterapia Malavasi"
              className="w-full h-full grayscale-[0.2] contrast-[1.1]" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="h-full w-full bg-[#022166] text-white flex items-center justify-center p-8">
              <div className="max-w-md text-center">
                <div className="mx-auto mb-8 w-20 h-20 rounded-3xl bg-[#55B4FF] text-[#022166] flex items-center justify-center">
                  <MapPin size={34} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#55B4FF] mb-4">Sede selezionata</p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">{activeLocation.n}</h2>
                <p className="text-white/80 font-medium mb-8">{activeLocation.a}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setShowMap(true)}
                    type="button"
                    className="inline-flex items-center justify-center gap-3 bg-white text-[#022166] px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#55B4FF] transition-colors"
                  >
                    Carica mappa
                  </button>
                  <a
                    href={activeLocation.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-colors"
                  >
                    Indicazioni <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
