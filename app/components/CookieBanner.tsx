"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [view, setView] = useState<"main" | "preferences">("main");
  
  const [preferences, setPreferences] = useState({
    analytics: true,
    ads: true,
  });

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
  }, []);

  const updateConsent = (choices: { analytics: boolean; ads: boolean }) => {
    localStorage.setItem("cookieConsent", JSON.stringify(choices));
    
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'ad_storage': choices.ads ? 'granted' : 'denied',
        'ad_user_data': choices.ads ? 'granted' : 'denied',
        'ad_ads_personalization': choices.ads ? 'granted' : 'denied',
        'analytics_storage': choices.analytics ? 'granted' : 'denied',
      });
      
      (window as any).dataLayer.push({ 
        event: 'consent_updated',
        analytics_consent: choices.analytics ? 'granted' : 'denied',
        ads_consent: choices.ads ? 'granted' : 'denied'
      });
    }
    setShowBanner(false);
  };

  // Evita errori di idratazione in Next.js
  if (!mounted || !showBanner) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-2xl z-[9999]">
      <div className="bg-white/90 backdrop-blur-xl border border-blue-100 rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-slate-800 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {view === "main" ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#022166]">La tua privacy è importante</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Utilizziamo i cookie per migliorare la tua esperienza. Alcuni sono necessari, altri ci aiutano a migliorare i nostri servizi o per mostrarti pubblicità pertinenti su Google e Meta.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => updateConsent({ analytics: true, ads: true })}
                className="flex-1 px-8 py-4 bg-[#022166] text-white rounded-2xl font-bold text-sm hover:scale-[1.02] transition-all shadow-lg active:scale-95"
              >
                Accetta Tutto
              </button>
              <button 
                onClick={() => setView("preferences")}
                className="flex-1 px-8 py-4 bg-blue-50/50 text-[#022166] rounded-2xl font-bold text-sm border border-blue-100 hover:bg-blue-100 transition-all active:scale-95"
              >
                Gestisci preferenze
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest font-medium">
              Consulta la <Link href="/cookie" className="underline hover:text-[#55B4FF]">Cookie Policy</Link>
            </p>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h2 className="text-xl font-bold text-[#022166]">Personalizza Cookie</h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-blue-50">
                <div>
                  <p className="font-bold text-sm">Tecnici e Necessari</p>
                  <p className="text-[11px] text-slate-500 font-medium uppercase tracking-tighter">Sempre attivi</p>
                </div>
                <div className="w-10 h-5 bg-blue-200 rounded-full flex items-center px-1">
                  <div className="w-3 h-3 bg-white rounded-full translate-x-5" />
                </div>
              </div>

              <label className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-blue-50 cursor-pointer hover:bg-blue-50/30 transition-colors">
                <div>
                  <p className="font-bold text-sm">Statistici (Google Analytics)</p>
                  <p className="text-[11px] text-slate-500 italic">Migliorano la navigazione</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                  className="w-5 h-5 accent-[#022166] cursor-pointer"
                />
              </label>

              <label className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-blue-50 cursor-pointer hover:bg-blue-50/30 transition-colors">
                <div>
                  <p className="font-bold text-sm">Personalizzazione dell’esperienza d’acquisto</p>
                  <p className="text-[11px] text-slate-500 italic">Contenuti su misura (Google/Meta)</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.ads}
                  onChange={(e) => setPreferences({...preferences, ads: e.target.checked})}
                  className="w-5 h-5 accent-[#022166] cursor-pointer"
                />
              </label>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button 
                onClick={() => setView("main")}
                className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-[#022166]"
              >
                Indietro
              </button>
              <button 
                onClick={() => updateConsent(preferences)}
                className="px-10 py-4 bg-[#55B4FF] text-[#022166] rounded-2xl font-bold text-sm shadow-md hover:bg-blue-400 transition-all active:scale-95"
              >
                Salva Preferenze
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}