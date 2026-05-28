"use client";

import { useState } from "react";
import { ChevronRight, Clock, MapPin } from "lucide-react";

const locations = [
  {
    n: "Cavezzo (MO)",
    a: "Via I maggio, 95",
    u: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.32688402506!2d11.026417776652431!3d44.83533497107052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f9754f738e681%3A0x867041a677332c8c!2sVia%20I%20Maggio%2C%2095%2C%2041032%20Cavezzo%20MO!5e0!3m2!1sit!2sit!4v1709574488954!5m2!1sit!2sit",
  },
  {
    n: "Rovereto sulla Secchia (MO)",
    a: "Via Savino Forti, 61",
    u: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.782531652156!2d10.957581576654!3d44.86566877107044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f98c8c68c928b%3A0x6a2c27072c72b25b!2sVia%20Savino%20Forti%2C%2061%2C%2041039%20Rovereto%20sulla%20Secchia%20MO!5e0!3m2!1sit!2sit!4v1709574542231!5m2!1sit!2sit",
  },
];

const hours = [
  { d: "Lunedì", o: "09-13, 15-20" },
  { d: "Martedì", o: "09-13, 15-21" },
  { d: "Mercoledì", o: "09-13, 15-21" },
  { d: "Giovedì", o: "09-13, 15-21" },
  { d: "Venerdì", o: "09-13, 15-20" },
  { d: "Sabato", o: "09-13" },
  { d: "Domenica", o: "Chiuso" },
];

export default function LocationMap() {
  const [mapUrl, setMapUrl] = useState(locations[0].u);
  const [isHoursOpen, setIsHoursOpen] = useState(false);

  return (
    <section id="dove-siamo" className="relative z-10 bg-white flex flex-col lg:flex-row min-h-screen w-full overflow-hidden">
      <div className="lg:w-2/5 w-full p-6 md:p-16 lg:p-24 flex flex-col justify-center bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#55B4FF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

        <div className="relative z-10 w-full">
          <span className="text-[#55B4FF] font-black text-xs uppercase tracking-[0.3em] mb-4 block">Vicinanza e Accessibilità</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#022166] tracking-tight mb-4">Dove <span className="text-[#55B4FF]">Trovarci</span></h2>
          <p className="text-slate-500 font-medium mb-12 max-w-sm">Scegli la sede più vicina a te e visualizza il percorso interattivo.</p>

          <div className="space-y-4 w-full">
            {locations.map((loc) => {
              const active = mapUrl === loc.u;

              return (
                <button
                  key={loc.n}
                  onClick={() => setMapUrl(loc.u)}
                  className={`group w-full flex items-center gap-4 p-5 rounded-[2rem] transition-all duration-500 border ${
                    active
                      ? "bg-[#022166] text-white shadow-xl border-[#022166]"
                      : "bg-white border-slate-100 text-[#022166]"
                  }`}
                  type="button"
                >
                  <div className={`p-3 rounded-2xl shrink-0 transition-colors ${
                    active ? "bg-[#55B4FF] text-[#022166]" : "bg-slate-100 text-[#022166]"
                  }`}>
                    <MapPin size={22} />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="font-black text-base leading-none mb-1 truncate">{loc.n}</p>
                    <p className={`text-[10px] font-bold uppercase tracking-widest truncate ${active ? "text-[#55B4FF]" : "text-slate-400"}`}>{loc.a}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm w-full">
            <button
              onClick={() => setIsHoursOpen((value) => !value)}
              className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
              type="button"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#55B4FF]/10 rounded-xl flex items-center justify-center text-[#55B4FF]">
                  <Clock size={20} />
                </div>
                <span className="font-black text-[#022166] text-sm uppercase tracking-widest">Orari di Apertura</span>
              </div>
              <div className={`transition-transform duration-300 ${isHoursOpen ? "rotate-180" : ""}`}>
                <ChevronRight size={20} className="text-slate-400 rotate-90" />
              </div>
            </button>

            <div className={`transition-all duration-500 ease-in-out ${isHoursOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
              <div className="p-5 pt-0 space-y-3 border-t border-slate-50">
                {hours.map((item) => (
                  <div key={item.d} className="flex justify-between items-center gap-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter shrink-0">{item.d}</span>
                    <span className={`text-xs font-black ${item.o === "Chiuso" ? "text-red-400" : "text-[#022166]"} text-right`}>{item.o}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-3/5 w-full h-[400px] lg:h-auto min-h-[400px] relative bg-slate-200">
        <iframe
          src={mapUrl}
          title="Mappa Sedi Studio Fisioterapia Malavasi"
          className="w-full h-full grayscale-[0.2] contrast-[1.1]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
