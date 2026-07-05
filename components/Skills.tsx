"use client";

import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="border-b border-line/60 py-20 md:py-28" aria-labelledby="skills-heading">
      <div className="container-narrow">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="eyebrow">02</p>
            <h2 id="skills-heading" className="section-heading mt-3 text-3xl text-ink md:text-4xl">
              {t("section_skills")}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-xl border border-line bg-card p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-base font-medium text-ink">{skill.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent-soft">
                  {skill.level}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted">{skill.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
