"use client";

import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";

export default function TechStack() {
  const { t } = useLang();
  const groups = Object.entries(site.techStack);

  return (
    <section className="border-b border-line/60 py-20 md:py-28" aria-labelledby="stack-heading">
      <div className="container-narrow">
        <p className="eyebrow">03</p>
        <h2 id="stack-heading" className="section-heading mt-3 text-3xl text-ink md:text-4xl">
          {t("section_stack")}
        </h2>

        <div className="mt-10 flex flex-col gap-8">
          {groups.map(([group, items]) => (
            <div key={group} className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:gap-8">
              <span className="w-28 shrink-0 font-mono text-xs uppercase tracking-widest text-muted">
                {group}
              </span>
              <div className="flex flex-wrap gap-2.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-4 py-1.5 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
