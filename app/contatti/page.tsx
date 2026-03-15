"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  ChevronRight, 
  ArrowLeft 
} from 'lucide-react';

export default function ContattiPage() {
  // Stato per la mappa (Default: Cavezzo)
  const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.877864350324!2d11.02646277665798!3d44.83222587107026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f0f626490791d%3A0xc49d63c683b7f197!2sVia%20I%20Maggio%2C%2095%2C%2041011%20Cavezzo%20MO!5e0!3m2!1sit!2sit!4v1710465000000!5m2!1sit!2sit");
  const [isHoursOpen, setIsHoursOpen] = useState(false);

  const sedi = [
    { 
      n: 'Cavezzo (MO)', 
      a: 'Via I maggio, 95', 
      u: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.877864350324!2d11.02646277665798!3d44.83222587107026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f0f626490791d%3A0xc49d63c683b7f197!2sVia%20I%20Maggio%2C%2095%2C%2041011%20Cavezzo%20MO!5e0!3m2!1sit!2sit!4v1710465000000!5m2!1sit!2sit" 
    },
    { 
      n: 'Rovereto sulla Secchia (MO)', 
      a: 'Via Savino Forti, 61', 
      u: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.7876543210!2d10.954321!3d44.856789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f0f0f0f0f0f0f%3A0x0f0f0f0f0f0f0f0f!2sVia%20Savino%20Forti%2C%2061%2C%2041016%20Rovereto%20sulla%20Secchia%20MO!5e0!3m2!1sit!2sit!4v1710465000000!5m2!1sit!2sit" 
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* BREADCRUMB - Posizionato sopra per coerenza con le altre pagine */}
      <div className="absolute top-28 left-4 md:left-10 z-20 pointer-events-auto">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[#022166] font-black uppercase tracking-[0.3em] text-[10px]">Dove Siamo</span>
        </nav>
      </div>

      <section id="dove-siamo" className="relative z-10 bg-white flex flex-col lg:flex-row min-h-screen w-full overflow-hidden pt-20 lg:pt-0">
        
        {/* LATO TESTI E SELEZIONE */}
        <div className="lg:w-2/5 w-full p-6 md:p-16 lg:p-24 flex flex-col justify-center bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#55B4FF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 w-full mt-12 lg:mt-0">
            <span className="text-[#55B4FF] font-black text-xs uppercase tracking-[0.3em] mb-4 block">Vicinanza e Accessibilità</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#022166] tracking-tight mb-4">Dove <span className="text-[#55B4FF]">Trovarci</span></h2>
            <p className="text-slate-500 font-medium mb-12 max-w-sm">Scegli la sede più vicina a te e visualizza il percorso interattivo.</p>
            
            <div className="space-y-4 w-full">
              {sedi.map(loc => (
                <button 
                  key={loc.n} 
                  onClick={() => setMapUrl(loc.u)} 
                  className={`group w-full flex items-center gap-4 p-5 rounded-[2rem] transition-all duration-500 border ${
                    mapUrl === loc.u 
                    ? 'bg-[#022166] text-white shadow-xl border-[#022166]' 
                    : 'bg-white border-slate-100 text-[#022166]'
                  }`}
                >
                  <div className={`p-3 rounded-2xl shrink-0 transition-colors ${
                    mapUrl === loc.u ? 'bg-[#55B4FF] text-[#022166]' : 'bg-slate-100 text-[#022166]'
                  }`}>
                    <MapPin size={22} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="font-black text-base leading-none mb-1 truncate">{loc.n}</p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest truncate ${mapUrl === loc.u ? 'text-[#55B4FF]' : 'text-slate-400'}`}>{loc.a}</p>
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

            {/* Torna alla Home */}
            <div className="mt-12">
              <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#022166] font-bold transition-all text-sm uppercase tracking-widest">
                <ArrowLeft size={16} /> Torna alla Home
              </Link>
            </div>
          </div>
        </div>

        {/* LATO MAPPA */}
        <div className="lg:w-3/5 w-full h-[500px] lg:h-screen relative bg-slate-200">
          <iframe 
            src={mapUrl} 
            title="Mappa Sedi Studio Fisioterapia Malavasi"
            className="w-full h-full grayscale-[0.2] contrast-[1.1]" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}