"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, CalendarCheck, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Gestione Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 80);

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Nascondi header solo se il menu mobile è CHIUSO
        if (!isMobileMenuOpen) {
          setIsVisible(false);
        }
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Blocca lo scroll della pagina principale quando l'hamburger menu è aperto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { n: "Informazioni", h: "/informazioni" },
    { n: "Trattamenti", h: "/trattamenti" },
    { n: "Modalità della seduta", h: "/metodo" },
    { n: "Dove siamo", h: "/contatti" }
  ];

  const isDarkTheme = isHomePage && !isScrolled;
  
  // Colore testo e icone: blu se menu aperto, altrimenti basato su scroll
  const textColor = isMobileMenuOpen 
    ? "text-[#022166]" 
    : (isDarkTheme ? "text-white" : "text-[#022166]");
  
  const logoSrc = isMobileMenuOpen || !isDarkTheme
    ? "/logo-fisioterapia-malavasi.png" 
    : "/logo-bianco-fisioterapia-malavasi.png";

  const btnBaseClass = `group relative overflow-hidden flex items-center justify-center gap-3 px-5 py-3.5 font-black text-[11px] uppercase tracking-[0.15em] transition-all active:scale-95 shadow-md whitespace-nowrap`;
  const borderRadiusClass = isScrolled ? "rounded-xl" : "rounded-full";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${isScrolled ? "pt-4 px-4" : "pt-0 px-0"}`}
    >
      <div 
        className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-between border ${
          isScrolled 
            ? "max-w-[96%] bg-white/95 backdrop-blur-2xl border-white/40 shadow-[0_20px_50px_-12px_rgba(2,33,102,0.1)] rounded-2xl px-6 md:px-8 py-3" 
            : "max-w-[98%] bg-transparent border-transparent py-8 px-4 md:px-10 rounded-none"
        }`}
      >
        
        {/* LOGO AREA - Rimane fisso perché dentro l'header fixed */}
        <Link href="/" className="flex items-center flex-shrink-0 z-[120]">
          <div className={`relative transition-all duration-500 ${
            isScrolled 
              ? "w-36 h-8 md:w-44 h-9" 
              : "w-52 h-10 md:w-72 h-14"
          }`}>
            <Image 
              src={logoSrc} 
              alt="Logo Malavasi" 
              fill 
              priority 
              className="object-contain transition-all duration-500"
            />
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className={`hidden lg:flex items-center flex-shrink transition-all duration-500 ${
          isScrolled ? "gap-4 xl:gap-6" : "gap-6 xl:gap-10" 
        }`}>
          {navLinks.map((item) => (
            <Link 
              key={item.n} 
              href={item.h}
              className={`relative font-bold text-[11px] uppercase tracking-[0.1em] transition-all hover:text-[#55B4FF] group/link whitespace-nowrap ${textColor}`}
            >
              {item.n}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#55B4FF] transition-all duration-300 ${pathname === item.h ? "w-full" : "w-0 group-hover/link:w-full"}`} />
            </Link>
          ))}
        </nav>

        {/* ACTIONS & HAMBURGER */}
        <div className="flex items-center flex-shrink-0 gap-3 z-[120]">
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="tel:+393338225464" 
              className={`${btnBaseClass} ${borderRadiusClass} ${
                isDarkTheme
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-[#022166]/5 text-[#022166] border border-[#022166]/10 hover:bg-[#022166] hover:text-white"
              }`}
            >
              <Phone size={14} />
              <span className="hidden xl:inline">Contattaci</span>
            </a>
            
            <Link 
              href="/prenota"
              className={`${btnBaseClass} ${borderRadiusClass} ${
                isDarkTheme ? "bg-[#55B4FF] text-[#022166]" : "bg-[#022166] text-white"
              }`}
            >
              <CalendarCheck size={16} />
              <span>Prenota Ora</span>
            </Link>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${textColor}`}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU TENDINA - SFONDO SOLIDO BIANCO */}
      <div 
        className={`fixed inset-0 h-screen w-screen bg-white z-[110] lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? "translate-y-0 opacity-100 visible" 
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        {/* Contenitore interno con scroll indipendente */}
        <div className="flex flex-col h-full pt-44 pb-12 px-10 overflow-y-auto">
          
          {/* Menu Links */}
          <nav className="flex flex-col">
            {navLinks.map((item) => (
              <Link 
                key={item.n} 
                href={item.h}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-2xl font-bold text-[#022166] uppercase tracking-[0.1em] border-b border-slate-100 py-6"
              >
                {item.n}
              </Link>
            ))}
          </nav>

          {/* Pulsanti CTA in fondo */}
          <div className="mt-auto pt-10 space-y-4">
            <a 
              href="tel:+393338225464" 
              className="w-full flex items-center justify-center gap-4 bg-slate-100 text-[#022166] py-5 rounded-2xl font-black uppercase text-xs tracking-widest active:scale-95 transition-all"
            >
              <Phone size={20} />
              Chiama Studio
            </a>
            <Link 
              href="/prenota"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-4 bg-[#022166] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl active:scale-95 transition-all"
            >
              <CalendarCheck size={20} />
              Prenota Ora
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        .animate-shimmer { animation: shimmer 2s infinite; }
      `}</style>
    </header>
  );
}