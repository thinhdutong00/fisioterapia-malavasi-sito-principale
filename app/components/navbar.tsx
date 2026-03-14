"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Cambio stato dopo 50px di scroll
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image 
              src="/logo.png" 
              alt="Logo Malavasi" 
              fill 
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </div>
          <div className="flex flex-col leading-[1.1]">
            <span className={`font-black text-[10px] uppercase tracking-tighter transition-colors ${
              isScrolled ? "text-[#022166]" : "text-white"
            }`}>
              Studio
            </span>
            <span className="font-black text-xs uppercase tracking-tighter text-[#55B4FF]">
              Fisioterapico
            </span>
            <span className={`font-black text-xs uppercase tracking-tighter transition-colors ${
              isScrolled ? "text-[#022166]" : "text-white"
            }`}>
              Malavasi
            </span>
          </div>
        </Link>

        {/* NAV MENU (Voci dal tuo repository principale) */}
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { n: "Informazioni", h: "#team" },
            { n: "Trattamenti Fisioterapici", h: "#trattamenti" },
            { n: "Modalità della seduta", h: "#metodo" },
            { n: "Contatti", h: "#dove-siamo" }
          ].map((item) => (
            <Link 
              key={item.n} 
              href={item.h}
              className={`font-black text-[10px] uppercase tracking-[0.15em] transition-colors hover:text-[#55B4FF] ${
                isScrolled ? "text-[#022166]" : "text-white"
              }`}
            >
              {item.n}
            </Link>
          ))}
        </nav>

        {/* CTA & PHONE */}
        <div className="flex items-center gap-6">
          <a 
            href="tel:+393338225464" 
            className={`hidden xl:flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${
              isScrolled ? "text-[#022166] hover:text-[#55B4FF]" : "text-white hover:text-[#55B4FF]"
            }`}
          >
            <Phone size={14} className="text-[#55B4FF]" />
            333 822 5464
          </a>
          
          <Link 
            href="#prenota"
            className={`px-7 py-3.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg ${
              isScrolled 
                ? "bg-[#022166] text-white hover:bg-[#55B4FF] shadow-blue-900/10" 
                : "bg-[#55B4FF] text-[#022166] hover:bg-white shadow-black/10"
            }`}
          >
            Prenota Ora
          </Link>
        </div>
      </div>
    </header>
  );
}