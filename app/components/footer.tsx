"use client";

import Link from 'next/link';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#022166] text-white pt-20 pb-10 px-6 border-t border-white/5 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Bio */}
        <div className="space-y-6">
          <h3 className="text-xl font-black tracking-tighter uppercase">
            Fisioterapia <span className="text-[#55B4FF]">Malavasi</span>
          </h3>
          <p className="text-white/60 text-sm leading-relaxed font-medium">
            Professionalità e cura del paziente al centro di ogni trattamento. Specialisti nel recupero funzionale.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#55B4FF] hover:text-[#022166] transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#55B4FF] hover:text-[#022166] transition-all">
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
            <li className="flex items-center gap-3"><Mail size={18} className="text-[#55B4FF]" /> info@fisioterapiamalavasi.it</li>
            <li className="flex items-start gap-3"><MapPin size={18} className="text-[#55B4FF] shrink-0" /> Via I Maggio 95, Cavezzo (MO)</li>
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