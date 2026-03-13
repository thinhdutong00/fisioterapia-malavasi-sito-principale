"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, X, Menu } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Reset del menu quando cambi pagina
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mainContainer = document.querySelector('main');
    if (!mainContainer) return;

    const controlNavbar = () => {
      const currentScrollY = mainContainer.scrollTop;
      
      // Cambia stile dopo 50px di scroll
      setIsScrolled(currentScrollY > 50);

      // Logica Mostra/Nascondi (Header a scomparsa)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scorri giù: nascondi
      } else {
        isVisible === false && setIsVisible(true); // Scorri su: mostra
      }
      
      setLastScrollY(currentScrollY);
    };

    mainContainer.addEventListener('scroll', controlNavbar);
    return () => mainContainer.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isVisible]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        ${isScrolled ? 'py-2' : 'py-0'}`}>

        <div className={`mx-auto transition-all duration-500 px-4 md:px-6
          ${isScrolled
            ? 'max-w-7xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl h-20'
            : 'max-w-full bg-transparent h-24'}`}>

          <div className="h-full flex items-center w-full justify-between">
            <div className="flex items-center shrink-0">
              <Link href="/">
                <Image
                  src="https://raw.githubusercontent.com/thinhdutong00/image-fisioterapia-malavasi/92e18a782853772b8d90a1ef6e851630fc1492ae/CENTRO-FISIOTERAPICO-CAVEZZO-MODENA-1.webp"
                  alt="Logo"
                  width={256}
                  height={64}
                  className={`transition-all duration-500 object-contain w-auto h-10 md:h-14 ${
                    isScrolled ? 'brightness-100' : 'brightness-0 invert'
                  }`}
                  priority
                />
              </Link>
            </div>

            <nav className={`hidden xl:flex items-center gap-6 text-[11px] font-black uppercase tracking-widest
              ${isScrolled ? 'text-[#022166]' : 'text-white'}`}>
              <Link href="/informazioni" className="hover:opacity-70 transition-all">INFORMAZIONI</Link>
              <Link href="/trattamenti" className="hover:opacity-70 transition-all">TRATTAMENTI</Link>
              <Link href="/modalita" className="hover:opacity-70 transition-all">MODALITÀ</Link>
              <Link href="/contatti" className="hover:opacity-70 transition-all">CONTATTI</Link>
            </nav>

            <div className="flex items-center gap-3">
              <a href="tel:3338225464" className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-[11px] transition-all border-2
                ${isScrolled ? 'bg-white border-[#022166] text-[#022166]' : 'bg-white/10 border-white/20 text-white'}`}>
                <Phone size={14} /> <span className="hidden sm:inline">333 822 5464</span>
              </a>
              <button onClick={() => setIsMenuOpen(true)} className={`xl:hidden p-1 ${isScrolled ? 'text-[#022166]' : 'text-white'}`}>
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#022166] flex flex-col items-center justify-center gap-8 animate-in fade-in duration-300">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={40}/></button>
          <Link href="/informazioni" className="text-white text-2xl font-black uppercase">Informazioni</Link>
          <Link href="/trattamenti" className="text-white text-2xl font-black uppercase">Trattamenti</Link>
          <Link href="/modalita" className="text-white text-2xl font-black uppercase">Modalità</Link>
          <Link href="/contatti" className="text-white text-2xl font-black uppercase">Contatti</Link>
        </div>
      )}
    </>
  );
}