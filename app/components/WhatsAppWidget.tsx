"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const phoneNumber = "393338225464"; // Il tuo numero senza il +
  const message = "Ciao! Vorrei avere informazioni sulle sedute fisioterapiche."; // Messaggio predefinito
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[150] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contattaci su WhatsApp"
    >
      {/* Tooltip che appare al passaggio del mouse */}
      <span className="absolute right-full mr-4 bg-[#022166] text-white text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Scrivici ora
      </span>
      
      <MessageCircle size={28} fill="currentColor" />
      
      {/* Effetto pulsazione radar per attirare l'attenzione */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
    </a>
  );
}