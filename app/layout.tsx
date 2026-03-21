import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import CookieBanner from "./components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

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

        {/* 2. GOOGLE TAG MANAGER */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+dl:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9SJWP7K');
          `}
        </Script>

        {/* 3. CLARITY */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vm4wfzivpa");
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans min-h-screen flex flex-col overflow-x-hidden`}>
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
        
        <WhatsAppWidget />
        <CookieBanner />
      </body>
    </html>
  );
}