# Creovisia Portfolio — Mukil Karki M

A premium, SEO-first personal portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Why this stack

- **Next.js App Router** — pages are server-rendered, so Google (and every crawler) receives fully-built HTML on first request. This is the single biggest lever for ranking well.
- **TypeScript** — catches content/data mistakes before they ship.
- **Tailwind CSS** — small, purged CSS bundle, fast paint times.
- **@vercel/analytics + @vercel/speed-insights** — visitor analytics and Core Web Vitals tracking with zero backend.
- **EmailJS** — lets your contact form send real emails with no server code.

## 1. Install

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## 2. Edit your content

Everything you'll actually update lives in two files:

- `data/site.ts` — your name, tagline, about text, skills, tech stack, projects, timeline, education, social links, resume URL, contact email.
- `data/blog.ts` — blog posts. Add a new object to the `posts` array to publish a new post (no CMS needed).

Every `// TODO` comment in `data/site.ts` marks something you still need to fill in:
- GitHub/live-demo links for each project
- LinkedIn and X/Twitter URLs
- Real email address
- Resume PDF path (drop your PDF into `/public/resume.pdf` and set `resumeUrl: "/resume.pdf"`)
- Your real deployed domain in `url` (this powers canonical URLs, sitemap, and Open Graph tags)

## 3. Connect the contact form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Add an Email Service (e.g. Gmail) and create a Template with fields `from_name`, `reply_to`, `message`.
3. Copy your **Service ID**, **Template ID**, and **Public Key**.
4. Open `components/Contact.tsx` and replace the three `YOUR_EMAILJS_...` placeholders.

Until you do this, the form runs in demo mode (shows a success message but doesn't send anything), so nothing breaks if you deploy before setting it up.

## 4. Add your favicon and social preview image

Drop these two files into `/public`:
- `favicon.ico` (32×32 or 48×48)
- `og-image.jpg` (1200×630) — this is the image shown when your link is shared on social media/WhatsApp/LinkedIn.

## 5. Language toggle

The header includes an EN / த toggle. Core UI strings (nav, buttons, form labels) and the About paragraph are translated in `lib/i18n.tsx`. To translate more sections, add keys there and swap them in following the same pattern used in `components/About.tsx`.

## 6. Deploy to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click Deploy — no configuration needed.
3. Once deployed, update `url` in `data/site.ts` to your real Vercel (or custom) domain, and redeploy.
4. Analytics and Speed Insights activate automatically once deployed on Vercel — check the Analytics tab in your Vercel dashboard.

## 7. SEO checklist already built in

- Semantic HTML with correct heading hierarchy (one `<h1>` per page)
- Per-page metadata: title, description, canonical URL, Open Graph, Twitter Cards
- `robots.txt` and `sitemap.xml` generated automatically (`app/robots.ts`, `app/sitemap.ts`)
- JSON-LD structured data: Person, Organization, Website, BreadcrumbList, BlogPosting, ItemList (projects)
- `rss.xml` feed at `/blog/rss.xml`
- Descriptive `alt` text on the portrait image
- `next/image` for automatic lazy-loading, responsive sizes, and AVIF/WebP conversion
- `next/font` for self-hosted, zero-layout-shift font loading
- Visible focus states, skip-to-content link, `aria-label`s on nav/menu controls, `prefers-reduced-motion` support

After deploying, run a free [Lighthouse](https://pagespeed.web.dev) audit on your live URL to confirm 95+ scores, and submit your sitemap in [Google Search Console](https://search.google.com/search-console) so Google indexes it faster.

## 8. What to add later (already scaffolded for)

- **Resume** — add the PDF and set `resumeUrl`.
- **Achievements/Certificates** — add entries to `site.achievements` in `data/site.ts`, then render them in a new `Achievements.tsx` component the same way `Timeline.tsx` renders `site.timeline`.
- **Testimonials** — add a `testimonials` array to `data/site.ts` and a `Testimonials.tsx` component using the `Skills.tsx` card grid as a template.
- **CMS/Admin panel** — when you outgrow hand-editing `data/blog.ts`, the cleanest upgrade path is adding [Contentlayer](https://contentlayer.dev) or a headless CMS (e.g. Sanity) without changing the page structure.

## Project structure

```
app/
  layout.tsx        → global metadata + JSON-LD (Person/Org/Website)
  page.tsx           → homepage (assembles all sections)
  sitemap.ts         → auto-generated sitemap.xml
  robots.ts          → auto-generated robots.txt
  blog/
    page.tsx         → blog index
    [slug]/page.tsx  → individual post + BlogPosting/Breadcrumb schema
    rss.xml/route.ts → RSS feed
components/          → Hero, About, Skills, TechStack, Projects, Timeline, Contact, Header, Footer
data/
  site.ts            → all your content (edit this first)
  blog.ts            → blog posts
lib/
  i18n.tsx           → EN/Tamil dictionary + language context
```
