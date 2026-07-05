"use client";

import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";

export default function About() {
  const { t, lang } = useLang();
  const copy = lang === "ta" ? site.aboutTa : site.about;

  return (
    <section id="about" className="border-b border-line/60 py-20 md:py-28" aria-labelledby="about-heading">
      <div className="container-narrow grid gap-10 md:grid-cols-[0.3fr_1fr] md:gap-16">
        <div>
          <p className="eyebrow">01</p>
          <h2 id="about-heading" className="section-heading mt-3 text-3xl text-ink md:text-4xl">
            {t("section_about")}
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{copy}</p>
      </div>
    </section>
  );
}
