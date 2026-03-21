"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [view, setView] = useState<"main" | "preferences">("main");
  
  // Stati per le preferenze granulari
  const [preferences, setPreferences] = useState({
    analytics: true,
    ads: true,
  });

  useEffect(() => {
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
      
      (window as any).dataLayer.push({ event: 'consent_updated' });
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[999] flex justify-center">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-blue-100 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-slate-800 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {view === "main" ? (
          /* VISTA PRINCIPALE */
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-[#022166]">La tua privacy è importante</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Utilizziamo i cookie per migliorare la tua esperienza sul sito di Fisioterapia Malavasi. Alcuni sono necessari per il funzionamento, altri ci aiutano a capire come migliorare i nostri servizi o per mostrarti pubblicità pertinenti. Puoi personalizzare le tue scelte o accettare tutto.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => updateConsent({ analytics: true, ads: true })}
                className="flex-1 px-8 py-4 bg-[#022166] text-white rounded-2xl font-bold text-sm hover:scale-[1.02] transition-all shadow-lg"
              >
                Accetta Tutto
              </button>
              <button 
                onClick={() => setView("preferences")}
                className="flex-1 px-8 py-4 bg-blue-50 text-[#022166] rounded-2xl font-bold text-sm border border-blue-100 hover:bg-blue-100 transition-all"
              >
                Gestisci preferenze
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest">
              Consulta la <Link href="/cookie" className="underline hover:text-[#55B4FF]">Cookie Policy</Link>
            </p>
          </div>
        ) : (
          /* VISTA PREFERENZE */
          <div className="space-y-6 animate-in fade-in duration-300">
            <h2 className="text-xl font-bold text-[#022166]">Personalizza Cookie</h2>
            
            <div className="space-y-4">
              {/* Necessari (Sempre ON) */}
              <div className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-blue-50">
                <div>
                  <p className="font-bold text-sm">Tecnici e Necessari</p>
                  <p className="text-[11px] text-slate-500 font-medium uppercase">Sempre attivi</p>
                </div>
                <div className="w-10 h-5 bg-blue-200 rounded-full flex items-center px-1">
                  <div className="w-3 h-3 bg-white rounded-full translate-x-5" />
                </div>
              </div>

              {/* Analitici */}
              <label className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-blue-50 cursor-pointer group">
                <div>
                  <p className="font-bold text-sm">Statistici (Google Analytics)</p>
                  <p className="text-[11px] text-slate-500">Ci aiutano a migliorare il sito</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                  className="w-5 h-5 accent-[#022166]"
                />
              </label>

              {/* Marketing */}
              <label className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-blue-50 cursor-pointer group">
                <div>
                  <p className="font-bold text-sm">Marketing (Google & Meta Ads)</p>
                  <p className="text-[11px] text-slate-500 font-medium">Contenuti pubblicitari su misura</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={preferences.ads}
                  onChange={(e) => setPreferences({...preferences, ads: e.target.checked})}
                  className="w-5 h-5 accent-[#022166]"
                />
              </label>
            </div>

            <div className="flex gap-3 pt-2">
              <button 
                onClick={() => setView("main")}
                className="px-6 py-4 text-slate-400 font-bold text-sm"
              >
                Indietro
              </button>
              <button 
                onClick={() => updateConsent(preferences)}
                className="flex-1 px-8 py-4 bg-[#55B4FF] text-[#022166] rounded-2xl font-bold text-sm shadow-md hover:bg-blue-400 transition-all"
              >
                Salva mie preferenze
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}