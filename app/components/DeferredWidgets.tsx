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
    let idleCallback: number | undefined;
    let scheduled = false;
    const events = ["pointerdown", "keydown", "scroll", "touchstart"];

    const scheduleWidgets = () => {
      if (scheduled) return;
      scheduled = true;
      idleCallback = window.requestIdleCallback?.(showWidgets, { timeout: 1500 });
      if (!idleCallback) window.setTimeout(showWidgets, 800);
    };

    const fallbackTimer = window.setTimeout(scheduleWidgets, 60000);

    const cleanup = () => {
      window.clearTimeout(fallbackTimer);
      if (idleCallback) window.cancelIdleCallback?.(idleCallback);
      events.forEach((event) => window.removeEventListener(event, scheduleWidgets));
    };

    function showWidgets() {
      cleanup();
      setReady(true);
    }

    events.forEach((event) => {
      window.addEventListener(event, scheduleWidgets, { once: true, passive: true });
    });

    return cleanup;
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
