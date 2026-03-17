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
          <div className="relative h-12 w-auto">
            <Image 
              src="/logo-bianco-fisioterapia-malavasi.png" 
              alt="Logo Fisioterapia Malavasi"
              width={220}
              height={52}
              className="object-contain"
            />
          </div>
          
          <p className="text-white/50 text-[13px] leading-relaxed font-medium max-w-xs tracking-tight">
            Professionalità e cura del paziente al centro di ogni trattamento. Specialisti nel recupero funzionale e nel benessere motorio.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/fisioterapiamalavasi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl hover:bg-[#55B4FF] hover:text-[#022166] transition-all duration-500 ease-out border border-white/5"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.facebook.com/Dott.MircoMalavasi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-xl hover:bg-[#55B4FF] hover:text-[#022166] transition-all duration-500 ease-out border border-white/5"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Link */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#55B4FF]">Navigazione</h4>
          <ul className="space-y-4 text-[11px] font-black uppercase tracking-widest text-white/60">
            <li><Link href="/informazioni" className="hover:text-[#55B4FF] transition-colors">Informazioni</Link></li>
            <li><Link href="/trattamenti" className="hover:text-[#55B4FF] transition-colors">Trattamenti</Link></li>
            <li><Link href="/metodo" className="hover:text-[#55B4FF] transition-colors">Modalità seduta</Link></li>
            <li><Link href="/prenota" className="hover:text-[#55B4FF] transition-colors">Prenota Ora</Link></li>
          </ul>
        </div>

        {/* Contatti */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#55B4FF]">Contatti</h4>
          <ul className="space-y-5 text-[12px] font-bold text-white/70">
            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
              <Phone size={16} className="text-[#55B4FF]" /> 
              <span>333 822 5464</span>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
              <Mail size={16} className="text-[#55B4FF]" /> 
              <span className="break-all">fisioterapiamalavasi@gmail.com</span>
            </li>
            <li className="flex items-start gap-3 hover:text-white transition-colors cursor-default">
              <MapPin size={16} className="text-[#55B4FF] shrink-0 mt-0.5" /> 
              <span className="leading-snug">Via I Maggio 95, Cavezzo (MO)</span>
            </li>
            <li className="flex items-start gap-3 hover:text-white transition-colors cursor-default">
              <MapPin size={16} className="text-[#55B4FF] shrink-0 mt-0.5" /> 
              <span className="leading-snug">Via Savino Forti 61, Rovereto sulla Secchia (MO)</span>
            </li>
          </ul>
        </div>

        {/* Orari */}
        <div className="space-y-6">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#55B4FF]">Orari</h4>
          <div className="text-[11px] font-black uppercase tracking-widest space-y-3 text-white/50">
            <p className="flex justify-between items-center border-b border-white/5 pb-2">
              <span>Lun - Ven</span> 
              <span className="text-white">09:00 - 21:00</span>
            </p>
            <p className="flex justify-between items-center border-b border-white/5 pb-2">
              <span>Sabato</span> 
              <span className="text-white">09:00 - 13:00</span>
            </p>
            <p className="text-[9px] italic font-medium lowercase tracking-normal text-white/30">Domenica Chiuso</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
  <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
    <p className="text-[10px] font-black uppercase tracking-widest">
      © 2026 | Dott. Malavasi Mirco FISIOTERAPISTA | Via I Maggio n°95 41032 Cavezzo (MO) | P. IVA 03890170362 |
    </p>
    <div className="flex gap-2">
      <Link href="/privacy" className="text-[10px] font-black uppercase tracking-widest hover:text-[#55B4FF] transition-colors">
        Privacy Policy
      </Link>
      <span className="text-[10px] font-black">|</span>
      <Link href="/cookie" className="text-[10px] font-black uppercase tracking-widest hover:text-[#55B4FF] transition-colors">
        Cookie Policy
      </Link>
    </div>
  </div>
  <p className="text-[9px] font-black uppercase tracking-[0.3em]">MAGO DIGITAL™ Web Solutions</p>
</div>
    </footer>
  );
}