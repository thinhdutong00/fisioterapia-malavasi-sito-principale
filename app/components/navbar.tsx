"use client"; // Obbligatorio per usare lo stato e lo scroll

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gestisce il cambio di stile allo scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "CHI SIAMO", href: "#team" },
    { name: "TRATTAMENTI", href: "#trattamenti" },
    { name: "COME LAVORIAMO", href: "#metodo" },
    { name: "TEAM", href: "#team" },
    { name: "RECENSIONI", href: "#recensioni" },
    { name: "DOVE SIAMO", href: "#dove-siamo" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="Logo Studio Malavasi" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#022166] font-black text-[10px] md:text-xs uppercase tracking-tighter leading-none">Studio</span>
            <span className="text-[#55B4FF] font-black text-xs md:text-sm uppercase tracking-tighter leading-none">Fisioterapico</span>
            <span className="text-[#022166] font-black text-xs md:text-sm uppercase tracking-tighter leading-none">Malavasi</span>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[#022166] font-black text-[10px] uppercase tracking-widest hover:text-[#55B4FF] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#55B4FF] after:transition-all hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CALL TO ACTION */}
        <div className="flex items-center gap-3">
          <a 
            href="tel:+393338225464" 
            className="hidden xl:flex items-center gap-2 text-[#022166] font-black text-[11px] uppercase tracking-widest hover:text-[#55B4FF] transition-colors"
          >
            <Phone size={14} />
            333 822 5464
          </a>
          <Link 
            href="#prenota"
            className="bg-[#022166] text-white px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-blue-900/10 hover:bg-[#55B4FF] hover:-translate-y-0.5 transition-all active:scale-95"
          >
            PRENOTA ORA
          </Link>
          
          {/* MOBILE MENU BUTTON */}
          <button 
            className="lg:hidden p-2 text-[#022166]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-50 transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#022166] font-black text-xs uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}