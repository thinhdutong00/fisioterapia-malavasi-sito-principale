"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#022166] text-white pt-20 pb-10 px-6 border-t border-white/5 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
       {/* Bio */}
<div className="space-y-8">
  {/* Logo corretto per Next.js */}
  <div className="relative h-12 w-auto">
    <Image 
      src="/logo-bianco-fisioterapia-malavasi.png" 
      alt="Logo Fisioterapia Malavasi"
      width={200}
      height={48}
      className="object-contain"
    />
  </div>
  
  <p className="text-white/60 text-sm leading-relaxed font-medium max-w-xs">
    Professionalità e cura del paziente al centro di ogni trattamento. Specialisti nel recupero funzionale e nel benessere motorio.
  </p>
  
  <div className="flex gap-4">
    <a 
      href="https://www.instagram.com/fisioterapiamalavasi/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-white/5 rounded-xl hover:bg-[#55B4FF] hover:text-[#022166] transition-all duration-300"
    >
      <Instagram size={20} />
    </a>
    <a 
      href="https://www.facebook.com/Dott.MircoMalavasi" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-white/5 rounded-xl hover:bg-[#55B4FF] hover:text-[#022166] transition-all duration-300"
    >
      <Facebook size={20} />
    </a>
  </div>
</div>

        {/* Link */}
        <div className="space-y-6">
          <h4 className="text-sm font-black uppercase tracking-widest text-[#55B4FF]">Navigazione</h4>
          <ul className="space-y-4 text-sm font-bold text-white/60">
            <li><Link href="/informazioni" className="hover:text-white transition-colors">Informazioni</Link></li>
            <li><Link href="/trattamenti" className="hover:text-white transition-colors">Trattamenti</Link></li>
            <li><Link href="/modalita" className="hover:text-white transition-colors">Modalità seduta</Link></li>
            <li><Link href="/#prenota" className="hover:text-white transition-colors">Prenota Ora</Link></li>
          </ul>
        </div>

        {/* Contatti */}
        <div className="space-y-6">
          <h4 className="text-sm font-black uppercase tracking-widest text-[#55B4FF]">Contatti</h4>
          <ul className="space-y-4 text-sm font-bold text-white/60">
            <li className="flex items-center gap-3"><Phone size={18} className="text-[#55B4FF]" /> 333 822 5464</li>
            <li className="flex items-center gap-3"><Mail size={18} className="text-[#55B4FF]" /> fisioterapiamalavasi@gmail.com</li>
            <li className="flex items-start gap-3"><MapPin size={18} className="text-[#55B4FF] shrink-0" /> Via I Maggio 95, Cavezzo (MO)</li>
            <li className="flex items-start gap-3"><MapPin size={18} className="text-[#55B4FF] shrink-0" /> Via Savino Forti 61, Rovereto sulla Secchia (MO)</li>
          </ul>
        </div>

        {/* Orari */}
        <div className="space-y-6">
          <h4 className="text-sm font-black uppercase tracking-widest text-[#55B4FF]">Orari</h4>
          <div className="text-sm font-bold space-y-2 text-white/60">
            <p className="flex justify-between"><span>Lun - Ven:</span> <span className="text-white">09:00 - 21:00</span></p>
            <p className="flex justify-between"><span>Sabato:</span> <span className="text-white">09:00 - 13:00</span></p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
        <p className="text-[10px] font-black uppercase tracking-widest">© 2026 | Dott. Malavasi Mirco FISIOTERAPISTA | Via I Maggio n°95 41032 Cavezzo (MO) | P. IVA 03890170362 |</p>
        <p className="text-[9px] font-black uppercase tracking-[0.3em]">MAGO DIGITAL™ Web Solutions</p>
      </div>
    </footer>
  );
}