"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, CalendarCheck } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 1. Gestione stile (Trasparente vs Riquadro floating)
      setIsScrolled(currentScrollY > 80);

      // 2. Gestione visibilità (Mostra/Nascondi allo scroll)
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
    { n: "Informazioni", h: "/informazioni" },
    { n: "Trattamenti", h: "/trattamenti" },
    { n: "Il Metodo", h: "/metodo" },
    { n: "Dove Siamo", h: "/dove-siamo" }
  ];

  // --- LOGICA COLORI E LOGO ---
  // isDarkTheme è TRUE quando siamo in Home e NON abbiamo ancora scrollato (sfondo scuro della Hero)
  const isDarkTheme = isHomePage && !isScrolled;
  
  const textColor = isDarkTheme ? "text-white" : "text-[#022166]";
  const secondaryTextColor = isDarkTheme ? "text-white/60" : "text-[#022166]/60";
  
  // Scambio dinamico del file immagine del logo
  const logoSrc = isDarkTheme 
    ? "/logo-bianco-fisioterapia-malavasi.png" 
    : "/logo-fisioterapia-malavasi.png";

  const btnBaseClass = `group relative overflow-hidden flex items-center justify-center gap-3 px-6 py-3.5 font-black text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-md`;
  const borderRadiusClass = isScrolled ? "rounded-xl" : "rounded-full";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${isScrolled ? "pt-4 px-4 md:px-0" : "pt-0 px-0"}`}
    >
      <div 
        className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-between border ${
          isScrolled 
            ? "max-w-6xl bg-white/85 backdrop-blur-2xl border-white/40 shadow-[0_20px_50px_-12px_rgba(2,33,102,0.1)] rounded-2xl px-6 md:px-10 py-3" 
            : "max-w-full bg-transparent border-transparent py-10 px-8 md:px-16 rounded-none"
        }`}
      >
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className={`relative transition-all duration-500 ${isScrolled ? "w-8 h-8 md:w-9 md:h-9" : "w-11 h-11 md:w-12 md:h-12"}`}>
            <Image 
              src={logoSrc} 
              alt="Logo Malavasi" 
              fill 
              priority // Carica il logo con priorità per evitare flash al cambio pagina
              className="object-contain transition-all duration-500"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-[9px] uppercase tracking-[0.2em] transition-colors ${secondaryTextColor}`}>Studio</span>
            <span className="font-black text-xs md:text-sm uppercase tracking-tight text-[#55B4FF]">Fisioterapico</span>
            <span className={`font-black text-xs md:text-sm uppercase tracking-tight transition-colors ${textColor}`}>Malavasi</span>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((item) => (
            <Link 
              key={item.n} 
              href={item.h}
              className={`relative font-bold text-[10px] uppercase tracking-[0.15em] transition-all hover:text-[#55B4FF] group/link ${textColor}`}
            >
              {item.n}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#55B4FF] transition-all duration-300 ${pathname === item.h ? "w-full" : "w-0 group-hover/link:w-full"}`} />
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 md:gap-4">
          <a 
            href="tel:+393338225464" 
            className={`${btnBaseClass} ${borderRadiusClass} ${
              isDarkTheme
                ? "bg-white/10 text-white border border-white/20 backdrop-blur-sm"
                : "bg-[#022166]/5 text-[#022166] border border-[#022166]/10 hover:bg-[#022166] hover:text-white"
            }`}
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <Phone size={14} className="relative z-10" />
            <span className="relative z-10 hidden sm:inline">Contattaci</span>
          </a>
          
          <Link 
            href="/prenota"
            className={`${btnBaseClass} ${borderRadiusClass} ${
              isDarkTheme
                ? "bg-[#55B4FF] text-[#022166]"
                : "bg-[#022166] text-white"
            }`}
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <CalendarCheck size={16} className="relative z-10" />
            <span className="relative z-10">Prenota Ora</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        .animate-shimmer { animation: shimmer 2s infinite; }
      `}</style>
    </header>
  );
}