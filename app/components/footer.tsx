"use client";

import Link from 'next/link';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#022166] text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Colonna 1: Brand & Bio */}
        <div className="space-y-6">
          <h3 className="text-xl font-black tracking-tighter uppercase">
            Fisioterapia <span className="text-[#55B4FF]">Malavasi</span>
          </h3>
          <p className="text-white/60 text-sm leading-relaxed font-medium">
            Specialisti nel recupero funzionale e nel benessere fisico. Professionalità e cura del paziente al centro di ogni trattamento.
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

        {/* Colonna 2: Link Rapidi */}
        <div className="space-y-6">
          <h4 className="text-sm font-black uppercase tracking-widest text-[#55B4FF]">Navigazione</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li><Link href="/informazioni" className="text-white/60 hover:text-white transition-colors">Informazioni</Link></li>
            <li><Link href="/trattamenti" className="text-white/60 hover:text-white transition-colors">Trattamenti</Link></li>
            <li><Link href="/modalita" className="text-white/60 hover:text-white transition-colors">Modalità della seduta</Link></li>
            <li><Link href="/#prenota" className="text-white/60 hover:text-white transition-colors">Prenota Visita</Link></li>
          </ul>
        </div>

        {/* Colonna 3: Contatti */}
        <div className="space-y-6">
          <h4 className="text-sm font-black uppercase tracking-widest text-[#55B4FF]">Contatti</h4>
          <ul className="space-y-4 text-sm font-bold">
            <li className="flex items-center gap-3 text-white/60">
              <Phone size={18} className="text-[#55B4FF]" />
              <a href="tel:3338225464" className="hover:text-white">333 822 5464</a>
            </li>
            <li className="flex items-center gap-3 text-white/60">
              <Mail size={18} className="text-[#55B4FF]" />
              <a href="mailto:info@fisioterapiamalavasi.it" className="hover:text-white text-[12px]">info@fisioterapiamalavasi.it</a>
            </li>
            <li className="flex items-start gap-3 text-white/60">
              <MapPin size={18} className="text-[#55B4FF] shrink-0" />
              <span>Via I Maggio n°95,<br />Cavezzo (MO)</span>
            </li>
          </ul>
        </div>

        {/* Colonna 4: Orari */}
        <div className="space-y-6">
          <h4 className="text-sm font-black uppercase tracking-widest text-[#55B4FF]">Orari</h4>
          <div className="text-sm font-bold space-y-2 text-white/60">
            <p className="flex justify-between"><span>Lun - Ven:</span> <span className="text-white">09:00 - 21:00</span></p>
            <p className="flex justify-between"><span>Sabato:</span> <span className="text-white">09:00 - 13:00</span></p>
            <p className="flex justify-between"><span>Domenica:</span> <span className="text-white text-right italic">Chiuso</span></p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
          © 2026 Fisioterapia Malavasi | P. IVA 03890170362 | <Link href="/privacy" className="hover:text-white underline">Privacy</Link>
        </p>
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
          MAGO DIGITAL™ STUDIO
        </p>
      </div>
    </footer>
  );
}