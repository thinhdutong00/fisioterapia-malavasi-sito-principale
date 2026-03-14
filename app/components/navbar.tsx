"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Attivazione stile floating solo dopo 80px
      setIsScrolled(currentScrollY > 80);

      // Logica Hide/Show
      if (currentScrollY < 50) {
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
      } ${isScrolled ? "pt-4" : "pt-0"}`}
    >
      <div 
        className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-between border ${
          isScrolled 
            ? "max-w-6xl bg-white/70 backdrop-blur-2xl border-white/40 shadow-[0_25px_50px_-12px_rgba(2,33,102,0.08)] rounded-[2rem] px-10 py-3" 
            : "max-w-7xl bg-transparent border-transparent py-10 px-12 shadow-none"
        }`}
      >
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className={`relative transition-all duration-500 ${isScrolled ? "w-9 h-9" : "w-12 h-12"}`}>
            <Image 
              src="/logo.png" 
              alt="Logo Malavasi" 
              fill 
              className={`object-contain transition-all duration-500 group-hover:scale-105 ${isScrolled ? "" : "brightness-0 invert"}`}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-[10px] uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-[#022166]/60" : "text-white/60"}`}>Studio</span>
            <span className="font-black text-sm uppercase tracking-tight text-[#55B4FF]">Fisioterapico</span>
            <span className={`font-black text-sm uppercase tracking-tight transition-colors ${isScrolled ? "text-[#022166]" : "text-white"}`}>Malavasi</span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link 
              key={item.n} 
              href={item.h}
              className={`relative font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:text-[#55B4FF] group/link ${
                isScrolled ? "text-[#022166]" : "text-white"
              }`}
            >
              {item.n}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#55B4FF] transition-all duration-300 group-hover/link:w-full" />
            </Link>
          ))}
        </nav>

        {/* CONTACT & CTA */}
        <div className="flex items-center gap-8">
          <a 
            href="tel:+393338225464" 
            className={`hidden xl:flex items-center gap-2.5 font-bold text-[11px] transition-all ${
              isScrolled ? "text-[#022166] hover:text-[#55B4FF]" : "text-white hover:text-[#55B4FF]"
            }`}
          >
            <div className={`p-2 rounded-full transition-colors ${isScrolled ? "bg-[#022166]/5" : "bg-white/10"}`}>
              <Phone size={14} className="text-[#55B4FF]" />
            </div>
            <span className="tracking-widest">333 822 5464</span>
          </a>
          
          <Link 
            href="#prenota"
            className={`group relative overflow-hidden flex items-center gap-3 px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 ${
              isScrolled 
                ? "bg-[#022166] text-white shadow-[0_10px_20px_rgba(2,33,102,0.2)]" 
                : "bg-white text-[#022166]"
            }`}
          >
            <span className="relative z-10">Prenota Ora</span>
            <ArrowRight size={14} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-[#55B4FF] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
        </div>
      </div>
    </header>
  );
}