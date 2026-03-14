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

      // 1. Gestione stile (Trasparente vs Bianco)
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Gestione visibilità (Scompare in basso, ricompare in alto)
      // Mostra sempre se siamo vicini alla cima della pagina
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Se scorriamo verso il basso, nascondi
      else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } 
      // Se scorriamo verso l'alto, mostra
      else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-4" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
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
          <div className="flex flex-col leading-none">
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

        {/* MENU DESKTOP (Voci dal tuo repository) */}
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
              className={`font-black text-[10px] uppercase tracking-widest transition-colors hover:text-[#55B4FF] ${
                isScrolled ? "text-[#022166]" : "text-white"
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
            className={`hidden xl:flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-colors ${
              isScrolled ? "text-[#022166] hover:text-[#55B4FF]" : "text-white hover:text-[#55B4FF]"
            }`}
          >
            <Phone size={14} className="text-[#55B4FF]" />
            333 822 5464
          </a>
          
          <Link 
            href="#prenota"
            className={`px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg ${
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