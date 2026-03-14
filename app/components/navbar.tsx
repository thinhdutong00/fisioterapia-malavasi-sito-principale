"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si attiva non appena scendi di 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-4" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO - Cambia colore in base allo scroll */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image 
              src="https://github.com/thinhdutong00/Fisioterapia-Malavasi---landing-page-1/blob/main/public/Progetto%20senza%20titolo%20-%202026-02-23T223838.202.png?raw=true" 
              alt="Logo Malavasi" 
              fill 
              className={`object-contain transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"}`}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-black text-[10px] uppercase tracking-tighter ${isScrolled ? "text-[#022166]" : "text-white"}`}>Studio</span>
            <span className="font-black text-xs uppercase tracking-tighter text-[#55B4FF]">Fisioterapico</span>
            <span className={`font-black text-xs uppercase tracking-tighter ${isScrolled ? "text-[#022166]" : "text-white"}`}>Malavasi</span>
          </div>
        </Link>

        {/* MENU DESKTOP - Cambia colore in base allo scroll */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { n: "IL TEAM", h: "#team" },
            { n: "TRATTAMENTI", h: "#servizi" },
            { n: "IL METODO", h: "#metodo" },
            { n: "DOVE SIAMO", h: "#dove-siamo" }
          ].map((item) => (
            <Link 
              key={item.n} 
              href={item.h}
              className={`font-black text-[10px] uppercase tracking-[0.2em] transition-colors hover:text-[#55B4FF] ${
                isScrolled ? "text-[#022166]" : "text-white/90"
              }`}
            >
              {item.n}
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <a 
            href="tel:+393338225464" 
            className={`hidden md:flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${
              isScrolled ? "text-[#022166] hover:text-[#55B4FF]" : "text-white hover:text-[#55B4FF]"
            }`}
          >
            <Phone size={14} className="text-[#55B4FF]" />
            333 822 5464
          </a>
          
          <Link 
            href="#prenota"
            className={`px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg ${
              isScrolled 
                ? "bg-[#022166] text-white hover:bg-[#55B4FF]" 
                : "bg-[#55B4FF] text-[#022166] hover:bg-white"
            }`}
          >
            Prenota Ora
          </Link>
        </div>
      </div>
    </header>
  );
}