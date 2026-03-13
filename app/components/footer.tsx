"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#022166] text-white pt-20 pb-10 px-4 md:px-6 relative overflow-hidden">
      {/* Decorazione di sfondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#55B4FF]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Colonna 1: Logo e Mission */}
          <div className="space-y-6">
            <Image
              src="https://raw.githubusercontent.com/thinhdutong00/image-fisioterapia-malavasi/92e18a782853772b8d90a1ef6e851630fc1492ae/CENTRO-FISIOTERAPICO-CAVEZZO-MODENA-1.webp"
              alt="Logo Fisioterapia Malavasi"
              width={200}
              height={50}
              className="brightness-0 invert object-contain"
            />
            <p className="text-slate-300 text-sm leading-relaxed">
              Specialisti nel recupero funzionale e nel benessere della persona. 
              La nostra missione è restituirti la libertà di movimento attraverso 
              terapie basate su evidenze scientifiche.
            </p>
          </div>

          {/* Colonna 2: Link Rapidi */}
          <div className="space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest">Navigazione</h4>
            <nav className="flex flex-col gap-4 text-sm text-slate-300">
              <Link href="/informazioni" className="hover:text-[#55B4FF] transition-colors">Chi Siamo</Link>
              <Link href="/trattamenti" className="hover:text-[#55B4FF] transition-colors">Trattamenti</Link>
              <Link href="/modalita" className="hover:text-[#55B4FF] transition-colors">Modalità Seduta</Link>
              <Link href="/contatti" className="hover:text-[#55B4FF] transition-colors">Contatti</Link>
            </nav>
          </div>

          {/* Colonna 3: Contatti */}
          <div className="space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest">Contatti</h4>
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              <a href="tel:3338225464" className="flex items-center gap-3 hover:text-[#55B4FF] transition-colors">
                <Phone size={18} className="text-[#55B4FF]" /> 333 822 5464
              </a>
              <a href="mailto:info@fisioterapiamalavasi.it" className="flex items-center gap-3 hover:text-[#55B4FF] transition-colors">
                <Mail size={18} className="text-[#55B4FF]" /> info@fisioterapiamalavasi.it
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#55B4FF] shrink-0" />
                <span>Via Cavour, 12<br />41012 Cavezzo (MO)</span>
              </div>
            </div>
          </div>

          {/* Colonna 4: Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-black uppercase tracking-widest">Seguici</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#55B4FF] hover:text-[#022166] transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#55B4FF] hover:text-[#022166] transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Centro Fisioterapico Malavasi - P.IVA 01234567890</p>
        </div>
      </div>
    </footer>
  );
}