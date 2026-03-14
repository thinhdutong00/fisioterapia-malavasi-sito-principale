"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, CalendarCheck, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 80);

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

  const navLinks = [
    { n: "Informazioni", h: "#team" },
    { n: "Trattamenti", h: "#trattamenti" },
    { n: "Il Metodo", h: "#metodo" },
    { n: "Contatti", h: "#dove-siamo" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${isScrolled ? "pt-4 px-4 md:px-0" : "pt-0 px-0"}`}
    >
      <div 
        className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-between border ${
          isScrolled 
            ? "max-w-6xl bg-white/80 backdrop-blur-2xl border-white/40 shadow-[0_20px_50px_-12px_rgba(2,33,102,0.1)] rounded-2xl px-6 md:px-10 py-3" 
            : "max-w-full bg-transparent border-transparent py-10 px-8 md:px-16 rounded-none"
        }`}
      >
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className={`relative transition-all duration-500 ${isScrolled ? "w-8 h-8 md:w-9 md:h-9" : "w-11 h-11 md:w-12 md:h-12"}`}>
            <Image 
              src="/logo.png" 
              alt="Logo Malavasi" 
              fill 
              className={`object-contain transition-all duration-500 ${isScrolled ? "" : "brightness-0 invert"}`}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-[9px] uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-[#022166]/60" : "text-white/60"}`}>Studio</span>
            <span className="font-black text-xs md:text-sm uppercase tracking-tight text-[#55B4FF]">Fisioterapico</span>
            <span className={`font-black text-xs md:text-sm uppercase tracking-tight transition-colors ${isScrolled ? "text-[#022166]" : "text-white"}`}>Malavasi</span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((item) => (
            <Link 
              key={item.n} 
              href={item.h}
              className={`relative font-bold text-[10px] uppercase tracking-[0.15em] transition-all hover:text-[#55B4FF] group/link ${
                isScrolled ? "text-[#022166]" : "text-white"
              }`}
            >
              {item.n}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#55B4FF] transition-all duration-300 group-hover/link:w-full" />
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* CALL BUTTON - NUOVO DESIGN */}
          <a 
            href="tel:+393338225464" 
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all active:scale-95 ${
              isScrolled 
                ? "bg-[#022166]/5 text-[#022166] hover:bg-[#022166] hover:text-white" 
                : "bg-white/10 text-white hover:bg-white hover:text-[#022166]"
            }`}
          >
            <Phone size={14} className={isScrolled ? "text-[#55B4FF]" : "text-white group-hover:text-[#55B4FF]"} />
            <span className="hidden sm:inline">Contattaci</span>
          </a>
          
          {/* PRENOTA ORA - EFFETTO PREMIUM */}
          <Link 
            href="#prenota"
            className={`group relative overflow-hidden flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-90 shadow-lg ${
              isScrolled 
                ? "bg-[#022166] text-white rounded-xl" 
                : "bg-[#55B4FF] text-[#022166] rounded-full"
            }`}
          >
            {/* Animazione Shimmer (riflesso lucido) */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            
            <CalendarCheck size={16} className="relative z-10 transition-transform group-hover:scale-110" />
            <span className="relative z-10">Prenota Ora</span>
            
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>
        </div>
      </div>

      {/* CSS per l'animazione Shimmer - Da aggiungere nel file globals.css o sotto */}
      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </header>
  );
}