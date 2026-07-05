import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { posts, getPostBySlug } from "@/data/blog";
import { site } from "@/data/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: site.fullName },
    datePublished: post.date,
    url: `${site.url}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content" className="py-16 md:py-24">
        <article className="container-narrow max-w-2xl">
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-muted">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-ink">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{post.title}</span>
          </nav>

          <p className="eyebrow">{post.category}</p>
          <h1 className="section-heading mt-3 text-3xl text-ink md:text-4xl">{post.title}</h1>
          <p className="mt-4 font-mono text-xs text-muted">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.readingTime}
          </p>

          <div className="mt-10 flex flex-col gap-5 text-lg leading-relaxed text-muted">
            {post.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-t border-line/60 pt-6">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {related.length > 0 && (
          <div className="container-narrow mt-16 max-w-2xl border-t border-line/60 pt-10">
            <h2 className="section-heading text-xl text-ink">Related posts</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="rounded-xl border border-line bg-card p-5 transition-colors hover:border-accent/50"
                >
                  <h3 className="font-display text-base text-ink">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
