"use client";

import { useEffect, useRef, useState } from "react";

type CopySegment = {
  text: string;
  accent?: boolean;
};

type Word = {
  text: string;
  accent: boolean;
};

const headline = [
  { text: "Aiutarti a tornare a" },
  { text: "muoverti liberamente,", accent: true },
  { text: "senza dipendere da trattamenti passivi." },
];

const explanation = [
  { text: "Prendiamo in carico davvero la persona: non come un meccanico che aggiusta un pezzo e presenta il conto, ma come un" },
  { text: "istruttore di guida", accent: true },
  { text: "che ti insegna a capire il problema, gestirlo e renderti autonomo. Lo facciamo attraverso percorsi di" },
  { text: "esercizio terapeutico", accent: true },
  { text: "e" },
  { text: "Cognitive Functional Therapy (CFT),", accent: true },
  { text: "perché il tuo corpo funzioni meglio anche senza di noi." },
];

// Muted but WCAG-compliant on the section background, including before the reveal starts.
const fadedColor = [71, 85, 105];
const primaryColor = [2, 33, 102];
const accentColor = [0, 110, 184];

function toWords(segments: CopySegment[]): Word[] {
  return segments.flatMap((segment) =>
    segment.text.split(/\s+/).map((text) => ({
      text,
      accent: segment.accent ?? false,
    })),
  );
}

function clamp(value: number) {
  return Math.min(Math.max(value, 0), 1);
}

function rangeProgress(progress: number, start: number, end: number) {
  return clamp((progress - start) / (end - start));
}

function mixColor(target: number[], amount: number) {
  const channels = fadedColor.map((channel, index) =>
    Math.round(channel + (target[index] - channel) * amount),
  );

  return `rgb(${channels.join(" ")})`;
}

function ProgressiveText({
  segments,
  progress,
}: {
  segments: CopySegment[];
  progress: number;
}) {
  const words = toWords(segments);

  return (
    <span aria-hidden="true">
      {words.map((word, index) => {
        const wordProgress = clamp(progress * (words.length + 5) - index);
        const target = word.accent ? accentColor : primaryColor;

        return (
          <span key={`${word.text}-${index}`} style={{ color: mixColor(target, wordProgress) }}>
            {word.text}
            {index < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  );
}

export default function ScrollManifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!section) {
      return;
    }

    if (reducedMotion.matches) {
      const reducedMotionFrame = window.requestAnimationFrame(() => setProgress(1));
      return () => window.cancelAnimationFrame(reducedMotionFrame);
    }

    const updateProgress = () => {
      frameRef.current = null;
      const rect = section.getBoundingClientRect();
      const revealStart = window.innerHeight * 0.82;
      const revealEnd = window.innerHeight * 0.18;
      const scrollDistance = Math.max(section.offsetHeight + revealStart - revealEnd, 1);
      setProgress(clamp((revealStart - rect.top) / scrollDistance));
    };

    const requestUpdate = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const headlineProgress = rangeProgress(progress, 0.02, 0.44);
  const explanationProgress = rangeProgress(progress, 0.24, 0.8);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="manifesto-title"
      className="scroll-manifesto relative overflow-hidden bg-[#F8FAFC]"
    >
      <div className="relative px-6 py-28 md:px-10 md:py-40">
        <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#55B4FF]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-[#022166]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <div className="mb-8 flex items-center gap-4 md:mb-12">
            <div className="h-px w-10 bg-[#55B4FF] md:w-16" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#006EB8]">
              Il nostro modo di prenderci cura di te
            </p>
          </div>

          <h2
            id="manifesto-title"
            aria-label="Aiutarti a tornare a muoverti liberamente, senza dipendere da trattamenti passivi."
            className="max-w-5xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-7xl lg:text-[5.5rem]"
          >
            <ProgressiveText segments={headline} progress={headlineProgress} />
          </h2>

          <div className="mt-12 grid gap-8 border-t border-[#022166]/10 pt-8 md:mt-16 md:grid-cols-12 md:gap-12 md:pt-10">
            <div className="md:col-span-3">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#022166]">
                Dalla dipendenza
                <span className="mt-2 block text-[#006EB8]">all’autonomia</span>
              </p>
            </div>
            <p
              className="max-w-3xl text-lg font-medium leading-relaxed md:col-span-9 md:text-2xl md:leading-relaxed"
            >
              <span className="sr-only">Prendiamo in carico davvero la persona: non come un meccanico che aggiusta un pezzo e presenta il conto, ma come un istruttore di guida che ti insegna a capire il problema, gestirlo e renderti autonomo. Lo facciamo attraverso percorsi di esercizio terapeutico e Cognitive Functional Therapy, CFT, perché il tuo corpo funzioni meglio anche senza di noi.</span>
              <ProgressiveText segments={explanation} progress={explanationProgress} />
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
