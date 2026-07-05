import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-base px-6 text-center text-ink">
      <p className="eyebrow">404</p>
      <h1 className="section-heading text-3xl">This page doesn't exist.</h1>
      <p className="text-muted">The page you're looking for was moved or never existed.</p>
      <Link
        href="/"
        className="mt-4 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white"
      >
        Back to home
      </Link>
    </main>
  );
}
