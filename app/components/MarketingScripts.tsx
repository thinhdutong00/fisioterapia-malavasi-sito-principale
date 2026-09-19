"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type CookieConsent = {
  analytics?: boolean;
  ads?: boolean;
};

type ConsentWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
};

function getConsentChoices() {
  try {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") return { analytics: true, ads: true };
    if (!consent) return { analytics: false, ads: false };

    const parsed = JSON.parse(consent) as CookieConsent;
    return {
      analytics: parsed.analytics === true,
      ads: parsed.ads === true,
    };
  } catch {
    return { analytics: false, ads: false };
  }
}

function hasMarketingConsent() {
  const choices = getConsentChoices();
  return choices.analytics || choices.ads;
}

function initializeConsentMode() {
  const consentWindow = window as ConsentWindow;
  const choices = getConsentChoices();

  consentWindow.dataLayer = consentWindow.dataLayer || [];
  consentWindow.gtag =
    consentWindow.gtag ||
    ((...args: unknown[]) => {
      consentWindow.dataLayer?.push(args);
    });

  consentWindow.gtag("consent", "default", {
    ad_storage: choices.ads ? "granted" : "denied",
    ad_user_data: choices.ads ? "granted" : "denied",
    ad_personalization: choices.ads ? "granted" : "denied",
    analytics_storage: choices.analytics ? "granted" : "denied",
    wait_for_update: 500,
  });
}

export default function MarketingScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const consentEnabled = hasMarketingConsent();
      if (consentEnabled) initializeConsentMode();
      setEnabled(consentEnabled);
    };

    syncConsent();
    window.addEventListener("cookie-consent-updated", syncConsent);

    return () => window.removeEventListener("cookie-consent-updated", syncConsent);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script id="gtm-script" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W9SJWP7K');
        `}
      </Script>

      <Script id="microsoft-clarity" strategy="lazyOnload">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vm4wfzivpa");
        `}
      </Script>
    </>
  );
}
