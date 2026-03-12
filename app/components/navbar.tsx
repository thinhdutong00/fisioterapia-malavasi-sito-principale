"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mainContainer = document.querySelector('main');
    const controlNavbar = () => {
      if (mainContainer) {
        const currentScrollY = mainContainer.scrollTop;
        setIsScrolled(currentScrollY > 50);
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };
    mainContainer?.addEventListener('scroll', controlNavbar);
    return () => mainContainer?.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        ${isScrolled ? 'py-2' : 'py-0'}`}>
        <div className={`mx-auto transition-all duration-500 px-4 md:px-6
          ${isScrolled ? 'max-w-7xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl h-20' : 'max-w-full bg-transparent h-24'}`}>
          <div className="h-full flex items-center w-full">
            <Link href="/" className="flex items-center shrink-0">
              <Image src="https://raw.githubusercontent.com/thinhdutong00/image-fisioterapia-malavasi/92e18a782853772b8d90a1ef6e851630fc1492ae/CENTRO-FISIOTERAPICO-CAVEZZO-MODENA-1.webp" 
              alt="Logo" width={200} height={50} className={`transition-all ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`} />
            </Link>
            <nav className={`hidden xl:flex items-center gap-8 text-[12px] font-black uppercase ml-8 ${isScrolled ? 'text-[#022166]' : 'text-white'}`}>
              <Link href="/informazioni">INFORMAZIONI</Link>
              <Link href="/trattamenti">TRATTAMENTI</Link>
              <Link href="/modalita">MODALITÀ</Link>
              <Link href="/contatti">CONTATTI</Link>
            </nav>
            <div className="ml-auto flex items-center gap-4">
               <a href="tel:3338225464" className={`px-4 py-2 rounded-xl font-bold border-2 ${isScrolled ? 'border-[#022166] text-[#022166]' : 'border-white text-white'}`}>
                 333 822 5464
               </a>
               <button className="xl:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                 {isMenuOpen ? <X className={isScrolled ? 'text-[#022166]' : 'text-white'} /> : <Menu className={isScrolled ? 'text-[#022166]' : 'text-white'} />}
               </button>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-[150] bg-[#022166] flex flex-col items-center justify-center gap-8 text-white uppercase font-black text-2xl">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8"><X size={40}/></button>
          <Link href="/informazioni" onClick={() => setIsMenuOpen(false)}>Informazioni</Link>
          <Link href="/trattamenti" onClick={() => setIsMenuOpen(false)}>Trattamenti</Link>
          <Link href="/modalita" onClick={() => setIsMenuOpen(false)}>Modalità</Link>
          <Link href="/contatti" onClick={() => setIsMenuOpen(false)}>Contatti</Link>
        </div>
      )}
    </>
  );
}