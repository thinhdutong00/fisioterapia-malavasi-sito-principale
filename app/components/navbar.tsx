"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, CalendarCheck, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isLavoraConNoi = pathname === "/contatti/lavora-con-noi";
  
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null); // Per mobile
  const lastScrollY = useRef(0);

  // Gestione Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 80);

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
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
      setOpenSubmenu(null);
    }
  }, [isMobileMenuOpen]);

const navLinks = [
    { n: "Informazioni", h: "/informazioni" },
    { 
      n: "Trattamenti", 
      h: "/trattamenti",
      sub: [
        { n: "Riabilitazione Post-Chirurgica", h: "/trattamenti/chirurgica" },
        { n: "Dolore Persistente", h: "/trattamenti/dolore-persistente" },
        { n: "Fisioterapia Sportiva", h: "/trattamenti/sportiva" },
        { n: "Cefalee e Vertigini", h: "/trattamenti/cefalee-vertigini" },
        { n: "Riabilitazione Neurologica", h: "/trattamenti/neurologica" },
        { n: "Fisioterapia Oncologica", h: "/trattamenti/oncologica" },
      ]
    },
    { 

      n: "Modalità della seduta", h: "/metodo", 
      
      sub: [
        { n: "Seduta Fisioterapica", h: "/metodo/seduta-fisioterapica" },
        { n: "Seduta Domiciliare", h: "/metodo/seduta-fisioterapica-domiciliare" },
        { n: "Small Class", h: "/metodo/small-class" },
      ]
    },


    { 
    
      n: "Contatti", 
      h: "/contatti",
      sub: [
        { n: "Contatti", h: "/contatti" },
        { n: "Lavora con noi", h: "/contatti/lavora-con-noi" },
        { n: "Prenota", h: "/prenota" },
      ]
    }
  ];

  const isDarkTheme = (isHomePage || isLavoraConNoi) && !isScrolled;
  
  // Colori header principale
  const textColor = isDarkTheme ? "text-white" : "text-[#022166]";
  const logoSrc = isDarkTheme 
    ? "/logo-bianco-fisioterapia-malavasi.png" 
    : "/logo-fisioterapia-malavasi.png";

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
        
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <div className={`relative transition-all duration-500 ${
            isScrolled ? "w-36 h-8 md:w-44 h-9" : "w-52 h-10 md:w-72 h-14"
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
            <div key={item.n} className="relative group/menu">
              {item.sub ? (
                <div className="flex items-center gap-1 cursor-default py-2">
                   <span className={`relative font-bold text-[11px] uppercase tracking-[0.1em] transition-all group-hover/menu:text-[#55B4FF] whitespace-nowrap ${textColor}`}>
                    {item.n}
                  </span>
                  <ChevronDown size={14} className={`transition-transform duration-300 group-hover/menu:rotate-180 ${textColor} group-hover/menu:text-[#55B4FF]`} />
                  
                  {/* DROPDOWN DESKTOP */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 transform group-hover/menu:translate-y-0 translate-y-2">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden min-w-[240px] p-2">
                      {item.sub.map((subItem) => (
                        <Link 
                          key={subItem.n}
                          href={subItem.h}
                          className="block px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-[#022166] hover:bg-slate-50 hover:text-[#55B4FF] transition-colors rounded-xl"
                        >
                          {subItem.n}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  href={item.h}
                  className={`relative font-bold text-[11px] uppercase tracking-[0.1em] transition-all hover:text-[#55B4FF] group/link whitespace-nowrap ${textColor}`}
                >
                  {item.n}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#55B4FF] transition-all duration-300 ${pathname === item.h ? "w-full" : "w-0 group-hover/link:w-full"}`} />
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* ACTIONS & HAMBURGER */}
        <div className="flex items-center flex-shrink-0 gap-3">
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+393338225464" className={`${btnBaseClass} ${borderRadiusClass} ${isDarkTheme ? "bg-white/10 text-white border border-white/20" : "bg-[#022166]/5 text-[#022166] border border-[#022166]/10 hover:bg-[#022166] hover:text-white"}`}>
              <Phone size={14} />
              <span className="hidden xl:inline">Contattaci</span>
            </a>
            <Link href="/prenota" className={`${btnBaseClass} ${borderRadiusClass} ${isDarkTheme ? "bg-[#55B4FF] text-[#022166]" : "bg-[#022166] text-white"}`}>
              <CalendarCheck size={16} />
              <span>Prenota Ora</span>
            </Link>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden p-2 transition-colors ${textColor}`}
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU TENDINA */}
      <div 
        className={`fixed inset-0 h-screen w-screen bg-white z-[10000] lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <div className="absolute top-0 left-0 w-full flex items-center justify-between py-8 px-6 border-b border-slate-50">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative w-48 h-10">
              <Image src="/logo-fisioterapia-malavasi.png" alt="Logo Malavasi" fill className="object-contain" />
            </div>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[#022166]"><X size={32} /></button>
        </div>

        <div className="flex flex-col h-full pt-32 pb-12 px-8 overflow-y-auto">
          <nav className="flex flex-col">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-[#022166] uppercase py-5 border-b border-slate-50">Home</Link>
            
            {navLinks.map((item) => (
              <div key={item.n} className="flex flex-col border-b border-slate-50">
                {item.sub ? (
                  <>
                    <button 
                      onClick={() => setOpenSubmenu(openSubmenu === item.n ? null : item.n)}
                      className="flex items-center justify-between text-lg font-bold text-[#022166] uppercase py-5 w-full text-left"
                    >
                      {item.n}
                      <ChevronDown size={20} className={`transition-transform duration-300 ${openSubmenu === item.n ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openSubmenu === item.n ? "max-h-[500px] mb-4" : "max-h-0"}`}>
                      {item.sub.map((sub) => (
                        <Link 
                          key={sub.n} 
                          href={sub.h} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 pl-4 text-sm font-semibold text-slate-500 hover:text-[#55B4FF]"
                        >
                          {sub.n}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.h} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-[#022166] uppercase py-5">
                    {item.n}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-10 space-y-4">
            <a href="tel:+393338225464" className="w-full flex items-center justify-center gap-4 bg-slate-100 text-[#022166] py-5 rounded-2xl font-black uppercase text-xs tracking-widest">
              <Phone size={20} /> Chiama Studio
            </a>
            <Link href="/prenota" onClick={() => setIsMobileMenuOpen(false)} className="w-full flex items-center justify-center gap-4 bg-[#022166] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl">
              <CalendarCheck size={20} /> Prenota Ora
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}