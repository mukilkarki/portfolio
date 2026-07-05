"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";

const statusLines = [
  "identity.load(mukil_karki_m)",
  "studio.init(creovisia)",
  "mission: simplify AI. build fearlessly.",
];

export default function Hero() {
  const { t } = useLang();
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const full = statusLines[lineIndex];
    let i = 0;
    setText("");
    const typing = setInterval(() => {
      i++;
      setText(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(typing);
        setTimeout(() => setLineIndex((prev) => (prev + 1) % statusLines.length), 1400);
      }
    }, 32);
    return () => clearInterval(typing);
  }, [lineIndex]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-line/60 bg-noise-grid"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.10),_transparent_55%)]" />

      <div className="container-narrow relative grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-[1fr_0.9fr] md:gap-8 md:py-28">
        {/* Text column */}
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <p className="eyebrow mb-5">{site.role}</p>

          <h1 className="section-heading text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl">
            {site.fullName}
          </h1>

          <p className="mt-5 max-w-md font-display text-xl text-muted sm:text-2xl">
            {site.tagline}
          </p>

          <div className="mt-8 flex h-6 items-center font-mono text-sm text-accent-soft">
            <span aria-hidden="true">&gt;&nbsp;</span>
            <span aria-hidden="true">{text}</span>
            <span aria-hidden="true" className="ml-0.5 h-4 w-[2px] animate-blink bg-accent-soft" />
            <span className="sr-only">{statusLines[lineIndex]}</span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-accent px-7 py-3 text-center text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              {t("hero_cta_work")}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-7 py-3 text-center text-sm font-semibold text-ink transition-colors hover:border-accent"
            >
              {t("hero_cta_contact")}
            </a>
          </div>
        </div>

        {/* Portrait column */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative aspect-[3/4] w-64 overflow-hidden rounded-2xl border border-line/80 shadow-[0_0_80px_-20px_rgba(59,130,246,0.35)] sm:w-80 md:w-full md:max-w-sm">
            <Image
              src="/portrait.png"
              alt={`${site.fullName}, founder of ${site.brandName} — black and white studio portrait`}
              fill
              priority
              sizes="(max-width: 768px) 320px, 384px"
              className="object-cover grayscale"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-transparent mix-blend-overlay" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 h-24 bg-gradient-to-b from-accent/25 to-transparent opacity-40 animate-scan"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
