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
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS - Stile Hub */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-[#022166]/3 rounded-full blur-[100px]"></div>
      </div>

      <section className="relative z-10 flex flex-col lg:flex-row min-h-screen w-full overflow-hidden">
        
        {/* LATO TESTI (40%) */}
        <div className="lg:w-[40%] w-full p-6 md:p-16 lg:p-20 flex flex-col justify-start bg-white/80 backdrop-blur-xl border-r border-slate-100 relative z-20 pt-32">
          
          <div className="max-w-md mx-auto lg:mx-0 w-full">
            {/* Breadcrumb - Allineato a Trattamenti */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-12">
              <Link href="/" className="hover:text-[#022166] transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-[#022166] font-semibold">Contatti</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#55B4FF]"></div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#55B4FF]">Vicinanza e Accessibilità</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-[#022166] leading-[0.95] tracking-tighter mb-8">
                Dove <br />
                <span className="text-[#55B4FF]">Trovarci.</span>
              </h1>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Scegli la sede più vicina a te o contattaci per una seduta domiciliare.
              </p>
            </header>

            {/* SELEZIONE SEDI */}
            <div className="space-y-4 mb-8">
              {sedi.map(loc => (
                <button 
                  key={loc.n} 
                  onClick={() => setMapUrl(loc.u)} 
                  className={`group w-full flex items-center gap-5 p-5 rounded-[2rem] transition-all duration-500 border-2 ${
                    mapUrl === loc.u 
                    ? 'bg-[#022166] border-[#022166] text-white shadow-2xl' 
                    : 'bg-white border-slate-100 text-[#022166] hover:border-[#55B4FF]/30'
                  }`}
                >
                  <div className={`p-4 rounded-2xl shrink-0 transition-colors ${
                    mapUrl === loc.u ? 'bg-[#55B4FF] text-[#022166]' : 'bg-[#F8FAFC] text-[#022166]'
                  }`}>
                    <MapPin size={24} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="font-black text-base leading-tight mb-1 truncate">{loc.n}</p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest truncate ${mapUrl === loc.u ? 'text-[#55B4FF]' : 'text-slate-400'}`}>{loc.a}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* FISARMONICA ORARI - Design Uniformato */}
            <div className="mb-8 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm">
              <button 
                onClick={() => setIsHoursOpen(!isHoursOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4 text-[#022166]">
                  <Clock size={20} className="text-[#55B4FF]" />
                  <span className="font-black text-[10px] uppercase tracking-[0.2em]">Orari Clinici</span>
                </div>
                <ChevronRight size={18} className={`text-slate-300 transition-transform duration-300 ${isHoursOpen ? 'rotate-90' : ''}`} />
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${isHoursOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 pt-0 space-y-3 border-t border-slate-50">
                  {[
                    { d: 'Lun-Ven', o: '09–13, 15–21' },
                    { d: 'Sabato', o: '09–13' },
                    { d: 'Domenica', o: 'Chiuso' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.d}</span>
                      <span className={`text-xs font-black ${item.o === 'Chiuso' ? 'text-red-400' : 'text-[#022166]'}`}>{item.o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CONTATTI RAPIDI AGGIUNTI */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <a href="tel:+393338225464" className="flex flex-col p-6 bg-[#F8FAFC] rounded-[2rem] hover:bg-[#55B4FF]/10 transition-colors group">
                <Phone size={20} className="mb-4 text-[#55B4FF]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Chiamaci</span>
                <span className="text-sm font-black text-[#022166]">333 822 5464</span>
              </a>
              <a href="mailto:info@fisiomalavasi.it" className="flex flex-col p-6 bg-[#F8FAFC] rounded-[2rem] hover:bg-[#55B4FF]/10 transition-colors group">
                <Mail size={20} className="mb-4 text-[#55B4FF]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Email</span>
                <span className="text-sm font-black text-[#022166]">Contattaci</span>
              </a>
            </div>

            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#022166] font-bold transition-all text-[10px] uppercase tracking-[0.3em]">
              <ArrowLeft size={16} /> Torna alla Home
            </Link>
          </div>
        </div>

        {/* LATO MAPPA (60%) - Funzionalità Intatta */}
        <div className="lg:w-[60%] w-full h-[500px] lg:h-screen relative bg-slate-200 z-10">
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