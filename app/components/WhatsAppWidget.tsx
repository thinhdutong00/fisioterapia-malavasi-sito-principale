"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);
  
  const phoneNumber = "393338225464";
  const message = "Ciao! Vorrei avere informazioni sulle SmallClass o sulle sedute in studio.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // 1. Mostra l'icona quasi subito
    const iconTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    // 2. Mostra la chat dopo 20 secondi
    const chatTimer = setTimeout(() => {
      console.log("Timer 20s scattato: mostro la chat"); // Debug
      setShowChat(true);
    }, 20000);

    return () => {
      clearTimeout(iconTimer);
      clearTimeout(chatTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] flex flex-col items-end gap-3">
      
      {/* MINI CHAT BOX */}
      {showChat && (
        <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100 p-5 w-[280px] md:w-[320px] mb-2 animate-in slide-in-from-bottom-4 fade-in duration-500 relative">
          {/* Pulsante chiusura */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              setShowChat(false);
            }}
            className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-1"
          >
            <X size={16} />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="w-10 h-10 bg-[#022166] rounded-full flex items-center justify-center text-white font-bold text-xs">
                MM
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <p className="text-[#022166] font-bold text-sm">Studio Malavasi</p>
              <p className="text-green-500 text-[10px] uppercase tracking-widest font-black">Online ora</p>
            </div>
          </div>

          <div className="bg-[#F8FAFC] p-4 rounded-xl mb-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              Ciao! 👋 Hai domande sulle nostre <span className="font-bold">SmallClass</span> o vuoi prenotare una valutazione?
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#25D366] text-white text-center py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#1ebe57] transition-all shadow-md"
          >
            Inizia Conversazione
          </a>
        </div>
      )}

      {/* ICONA WHATSAPP */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center relative group"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="30" 
          height="30" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"></span>
      </button>
    </div>
  );
}