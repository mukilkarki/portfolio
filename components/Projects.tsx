"use client";

import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";

export default function Projects() {
  const { t } = useLang();

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: site.projects.map((p, idx) => ({
      "@type": "CreativeWork",
      position: idx + 1,
      name: p.name,
      description: p.description,
      url: p.demo || p.github || site.url,
    })),
  };

  return (
    <section id="projects" className="border-b border-line/60 py-20 md:py-28" aria-labelledby="projects-heading">
      <div className="container-narrow">
        <p className="eyebrow">04</p>
        <h2 id="projects-heading" className="section-heading mt-3 text-3xl text-ink md:text-4xl">
          {t("section_projects")}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {site.projects.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="flex flex-col rounded-2xl border border-line bg-card p-7 transition-colors hover:border-accent/50"
            >
              <div className="mb-4 flex aspect-video items-center justify-center rounded-lg border border-line/70 bg-surface font-mono text-xs text-muted">
                {project.name} — preview
              </div>

              <h3 className="font-display text-xl font-medium text-ink">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <dl className="mt-5 space-y-3 border-t border-line/70 pt-5 text-sm">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-accent-soft">Problem</dt>
                  <dd className="mt-1 text-muted">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-accent-soft">Solution</dt>
                  <dd className="mt-1 text-muted">{project.solution}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline underline-offset-4 hover:text-accent-soft">
                    {t("view_github")}
                  </a>
                ) : (
                  <span className="font-mono text-xs text-muted/60">{t("view_github")}: coming soon</span>
                )}
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline underline-offset-4 hover:text-accent-soft">
                    {t("view_demo")}
                  </a>
                ) : (
                  <span className="font-mono text-xs text-muted/60">{t("view_demo")}: coming soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
    </section>
  );
}
