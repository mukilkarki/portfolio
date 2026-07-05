"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";

const navItems = [
  { href: "#about", key: "nav_about" as const },
  { href: "#skills", key: "nav_skills" as const },
  { href: "#projects", key: "nav_projects" as const },
  { href: "#timeline", key: "nav_timeline" as const },
  { href: "/blog", key: "nav_blog" as const },
  { href: "#contact", key: "nav_contact" as const },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-base/80 backdrop-blur-md">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          {site.brandName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            aria-label="Switch language"
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-ink"
          >
            {lang === "en" ? "EN / த" : "த / EN"}
          </button>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            {t("hero_cta_contact")}
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-line md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-4 bg-ink transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[5px] h-[1.5px] w-4 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[10px] h-[1.5px] w-4 bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-line bg-base px-6 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-muted hover:text-ink"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "en" ? "ta" : "en")}
              className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted"
            >
              {lang === "en" ? "EN / த" : "த / EN"}
            </button>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-white"
            >
              {t("hero_cta_contact")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
