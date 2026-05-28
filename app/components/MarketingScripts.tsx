"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

type CookieConsent = {
  analytics?: boolean;
  ads?: boolean;
};

function hasMarketingConsent() {
  try {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) return false;
    if (consent === "accepted") return true;

    const parsed = JSON.parse(consent) as CookieConsent;
    return parsed.analytics === true || parsed.ads === true;
  } catch {
    return false;
  }
}

export default function MarketingScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => setEnabled(hasMarketingConsent());

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
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+dl:'';j.async=true;j.src=
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
