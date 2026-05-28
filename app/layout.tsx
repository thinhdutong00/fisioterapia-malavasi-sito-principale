import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import DeferredWidgets from "./components/DeferredWidgets";

export const metadata: Metadata = {
  title: "Fisioterapia Malavasi | Cavezzo",
  description: "Studio di Fisioterapia del Dott. Mirco Malavasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        {/* 1. CONSENT MODE DEFAULT - Caricato immediatamente per conformità Google 2024 */}
        <Script id="google-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Prova a recuperare il consenso esistente
            var consentData = localStorage.getItem('cookieConsent');
            var choices = { ads: false, analytics: false };
            
            if (consentData) {
              try {
                var parsed = JSON.parse(consentData);
                choices.ads = parsed.ads === true;
                choices.analytics = parsed.analytics === true;
              } catch (e) {
                // Se il formato vecchio era solo una stringa "accepted"
                if (consentData === 'accepted') { choices.ads = true; choices.analytics = true; }
              }
            }

            gtag('consent', 'default', {
              'ad_storage': choices.ads ? 'granted' : 'denied',
              'ad_user_data': choices.ads ? 'granted' : 'denied',
              'ad_ads_personalization': choices.ads ? 'granted' : 'denied',
              'analytics_storage': choices.analytics ? 'granted' : 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>
      </head>
      <body className="antialiased font-sans min-h-screen flex flex-col overflow-x-hidden">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9SJWP7K"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <Navbar />
        
        <main className="flex-grow w-full">
          {children}
        </main>

        <Footer />
        
        <DeferredWidgets />
      </body>
    </html>
  );
}
