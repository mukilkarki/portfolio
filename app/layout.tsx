import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/data/site";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.tagline}`,
    template: `%s — ${site.fullName}`,
  },
  description: site.about,
  keywords: [
    site.fullName,
    site.brandName,
    "AI Developer",
    "Artificial Intelligence",
    "Software Developer Portfolio",
    "Cybersecurity",
    "Prompt Engineering",
    "PromptForge",
  ],
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.fullName} — ${site.tagline}`,
    description: site.about,
    siteName: site.brandName,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.fullName} — ${site.brandName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.tagline}`,
    description: site.about,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.fullName,
    url: site.url,
    jobTitle: site.role,
    description: site.about,
    sameAs: Object.values(site.social).filter(Boolean),
    worksFor: {
      "@type": "Organization",
      name: site.brandName,
      url: site.url,
    },
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brandName,
    url: site.url,
    founder: {
      "@type": "Person",
      name: site.fullName,
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${site.fullName} Portfolio`,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-base text-ink font-body antialiased selection:bg-accent/30 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <LangProvider>{children}</LangProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
