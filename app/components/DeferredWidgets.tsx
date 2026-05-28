"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CookieBanner = dynamic(() => import("./CookieBanner"), {
  ssr: false,
});

const WhatsAppWidget = dynamic(() => import("./WhatsAppWidget"), {
  ssr: false,
});

const MarketingScripts = dynamic(() => import("./MarketingScripts"), {
  ssr: false,
});

export default function DeferredWidgets() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const showWidgets = () => setReady(true);
    const idleCallback = window.requestIdleCallback?.(showWidgets, { timeout: 3500 });
    const timer = window.setTimeout(showWidgets, 3500);

    return () => {
      window.clearTimeout(timer);
      if (idleCallback) window.cancelIdleCallback?.(idleCallback);
    };
  }, []);

  if (!ready) return null;

  return (
    <>
      <MarketingScripts />
      <WhatsAppWidget />
      <CookieBanner />
    </>
  );
}
