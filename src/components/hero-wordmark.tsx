"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Wordmark with occasional RGB-split glitch. Falls back to static text when
 * the user prefers reduced motion.
 */
export function HeroWordmark() {
  const [canGlitch, setCanGlitch] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCanGlitch(!reduced);
  }, []);

  return (
    <h1
      className={`hero-wordmark animate-rise font-display text-[clamp(3.2rem,12vw,7.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white${
        canGlitch ? " hero-wordmark--glitch" : ""
      }`}
      data-text={site.name}
    >
      {site.name}
    </h1>
  );
}
