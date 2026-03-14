"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Attiva lo stile "floating" dopo 100px di scroll
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Logica di visibilità (Show on scroll up, hide on scroll down)
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Il wrapper esterno gestisce il posizionamento e la visibilità
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-4 md:px-0 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${isScrolled ? "pt-4" : "pt-0"}`}
    >
      {/* Il contenitore interno cambia forma e stile */}
      <div 
        className={`mx-auto transition-all duration-700 ease-in-out flex items-center justify-between ${
          isScrolled 
            ? "max-w-5xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] px-8 py-3" 
            : "max-w-7xl bg-transparent py-8 px-6 md:px-12"
        }`}
      >
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className={`relative transition-all duration-500 ${isScrolled ? "w-8 h-8 md:w-10 md:h-10" : "w-10 h-10 md:w-12 md:h-12"}`}>
            <Image 
              src="/logo.png" 
              alt="Logo Malavasi" 
              fill 
              className={`object-contain transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"}`}
            />
          </div>
          <div className="flex flex-col leading-[1.1]">
            <span className={`font-black text-[9px] uppercase tracking-tighter transition-colors ${isScrolled ? "text-[#022166]" : "text-white"}`}>Studio</span>
            <span className="font-black text-[11px] uppercase tracking-tighter text-[#55B4FF]">Fisioterapico</span>
            <span className={`font-black text-[11px] uppercase tracking-tighter transition-colors ${isScrolled ? "text-[#022166]" : "text-white"}`}>Malavasi</span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
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

        {/* ACTIONS */}
        <div className="flex items-center gap-4 xl:gap-8">
          <a 
            href="tel:+393338225464" 
            className={`hidden md:flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${
              isScrolled ? "text-[#022166] hover:text-[#55B4FF]" : "text-white hover:text-[#55B4FF]"
            }`}
          >
            <Phone size={14} className="text-[#55B4FF]" />
            <span className={isScrolled ? "opacity-100" : "opacity-90"}>333 822 5464</span>
          </a>
          
          <Link 
            href="#prenota"
            className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg ${
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