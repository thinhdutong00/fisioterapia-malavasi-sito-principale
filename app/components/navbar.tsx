"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, X, Menu } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Capisce se siamo in Home o in altre pagine (es. /informazioni)
  const isHomePage = pathname === '/';
  
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const attachScrollListener = () => {
      const mainContainer = document.querySelector('main');
      
      if (!mainContainer) {
        setTimeout(attachScrollListener, 100);
        return;
      }

      const controlNavbar = () => {
        const currentScrollY = mainContainer.scrollTop;
        setIsScrolled(currentScrollY > 50);

        if (currentScrollY < 10) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
      };

      mainContainer.addEventListener('scroll', controlNavbar);
      return mainContainer;
    };

    const container = attachScrollListener();

    return () => {
      if (container instanceof HTMLElement) {
        container.removeEventListener('scroll', () => {});
      }
    };
  }, [pathname]);

  // Se non siamo in Home, la navbar deve comportarsi SEMPRE come se fosse scrollata (sfondo bianco/testo scuro)
  const forceDarkStyle = !isHomePage || isScrolled;

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        ${forceDarkStyle ? 'py-2' : 'py-0'}`}>

        <div className={`mx-auto transition-all duration-500 px-4 md:px-6
          ${forceDarkStyle
            ? 'max-w-7xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl h-20'
            : 'max-w-full bg-transparent h-24'}`}>

          <div className="h-full flex items-center w-full">
            <div className="flex items-center shrink-0">
              <Link href="/">
                <Image
                  src="https://raw.githubusercontent.com/thinhdutong00/image-fisioterapia-malavasi/92e18a782853772b8d90a1ef6e851630fc1492ae/CENTRO-FISIOTERAPICO-CAVEZZO-MODENA-1.webp"
                  alt="Logo Fisioterapia Malavasi"
                  width={256}
                  height={64}
                  className={`transition-all duration-500 object-contain w-auto ${
                    forceDarkStyle ? 'h-8 md:h-12 brightness-100' : 'h-10 md:h-16 brightness-0 invert'
                  }`}
                  priority
                />
              </Link>
            </div>

            <nav className={`hidden xl:flex items-center gap-5 2xl:gap-8 text-[11px] 2xl:text-[12px] font-black uppercase tracking-[0.15em] ml-8 transition-colors duration-500
              ${forceDarkStyle ? 'text-[#022166]' : 'text-white'}`}>
              <Link href="/informazioni" className="hover:text-[#55B4FF] transition-all">INFORMAZIONI</Link>
              <Link href="/trattamenti" className="hover:text-[#55B4FF] transition-all">TRATTAMENTI FISIOTERAPICI</Link>
              <Link href="/modalita" className="hover:text-[#55B4FF] transition-all">MODALITÀ DELLA SEDUTA</Link>
              <Link href="/contatti" className="hover:text-[#55B4FF] transition-all">CONTATTI</Link>
            </nav>

            <div className="flex items-center gap-2 md:gap-3 ml-auto shrink-0">
              <a href="tel:3338225464" className={`flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl font-bold text-[11px] transition-all border-2
                ${forceDarkStyle
                  ? 'bg-white border-[#022166] text-[#022166] hover:bg-[#022166] hover:text-white'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#022166]'}`}>
                <Phone size={14} /> <span className="hidden sm:inline">333 822 5464</span>
              </a>

              <Link href="/#prenota" className={`hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[11px] transition-all shadow-md
                ${forceDarkStyle
                  ? 'bg-[#022166] text-white hover:bg-[#55B4FF]'
                  : 'bg-[#55B4FF] text-[#022166] hover:bg-white'}`}>
                PRENOTA ORA
              </Link>

              <button 
                className={`xl:hidden p-1 transition-colors ${forceDarkStyle ? 'text-[#022166]' : 'text-white'}`} 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[150] bg-[#022166] flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in-95 duration-300 xl:hidden">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-white p-2">
            <X size={40} />
          </button>
          <nav className="flex flex-col items-center gap-8 text-white font-black text-2xl uppercase tracking-widest">
            <Link href="/informazioni" onClick={() => setIsMenuOpen(false)}>Informazioni</Link>
            <Link href="/trattamenti" onClick={() => setIsMenuOpen(false)}>Trattamenti</Link>
            <Link href="/modalita" onClick={() => setIsMenuOpen(false)}>Modalità</Link>
            <Link href="/contatti" onClick={() => setIsMenuOpen(false)}>Contatti</Link>
          </nav>
          <Link href="/#prenota" onClick={() => setIsMenuOpen(false)} className="mt-4 bg-[#55B4FF] text-[#022166] px-10 py-4 rounded-2xl font-black text-lg">
            PRENOTA ORA
          </Link>
        </div>
      )}
    </>
  );
}