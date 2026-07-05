import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts, getAllCategories } from "@/data/blog";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Notes on AI, software development, and building ${site.brandName} — written by ${site.fullName}.`,
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    title: `Blog — ${site.fullName}`,
    description: `Notes on AI, software development, and building ${site.brandName}.`,
    url: `${site.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const categories = getAllCategories();
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${site.fullName} Blog`,
    url: `${site.url}/blog`,
    blogPost: sorted.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${site.url}/blog/${p.slug}`,
      datePublished: p.date,
    })),
  };

  return (
    <>
      <Header />
      <main id="main-content" className="py-20 md:py-28">
        <div className="container-narrow">
          <p className="eyebrow">Blog</p>
          <h1 className="section-heading mt-3 text-4xl text-ink md:text-5xl">Writing</h1>
          <p className="mt-4 max-w-xl text-muted">
            Notes on AI, building products, and what I'm learning along the way.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-line bg-card p-7 transition-colors hover:border-accent/50"
              >
                <span className="font-mono text-xs text-accent-soft">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  · {post.readingTime}
                </span>
                <h2 className="mt-3 font-display text-xl text-ink group-hover:text-accent-soft">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] text-muted/70">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
    </>
  );
}
