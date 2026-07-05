import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/60 py-10">
      <div className="container-narrow flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-muted">
          © {year} {site.fullName} · {site.brandName}
        </p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-5 text-xs text-muted">
          <Link href="/" className="hover:text-ink">Home</Link>
          <Link href="/blog" className="hover:text-ink">Blog</Link>
          {site.social.github && (
            <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub
            </a>
          )}
          {site.social.linkedin && (
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          )}
          {site.social.twitter && (
            <a href={site.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              X
            </a>
          )}
        </nav>
      </div>
    </footer>
  );
}
