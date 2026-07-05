"use client";

import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";

export default function Timeline() {
  const { t } = useLang();

  return (
    <section id="timeline" className="border-b border-line/60 py-20 md:py-28" aria-labelledby="timeline-heading">
      <div className="container-narrow">
        <p className="eyebrow">05</p>
        <h2 id="timeline-heading" className="section-heading mt-3 text-3xl text-ink md:text-4xl">
          {t("section_timeline")}
        </h2>

        <ol className="mt-10 border-l border-line pl-8">
          {site.timeline.map((item, idx) => (
            <li key={idx} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent-soft">{item.year}</span>
              <h3 className="mt-1 font-display text-lg text-ink">{item.title}</h3>
              <p className="mt-1 max-w-xl text-sm text-muted">{item.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <h3 className="section-heading text-2xl text-ink">{t("section_education")}</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {site.education.map((edu, idx) => (
              <div key={idx} className="rounded-xl border border-line bg-card p-6">
                <span className="font-mono text-xs text-accent-soft">{edu.period}</span>
                <h4 className="mt-1 font-display text-base text-ink">{edu.title}</h4>
                {edu.place && <p className="text-sm text-muted">{edu.place}</p>}
                <p className="mt-2 text-sm text-muted">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
