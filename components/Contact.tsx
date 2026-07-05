"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;

    // TODO: replace with your real EmailJS Service ID, Template ID, and Public Key.
    // Sign up free at https://www.emailjs.com — no backend server required.
    const SERVICE_ID = "service_xjb8zur";
    const TEMPLATE_ID = "template_4ah69hr";
    const PUBLIC_KEY = "rKtmlDZKuaY8eb1pP";

    try {
      if (SERVICE_ID.startsWith("YOUR_")) {
        // Demo mode: no EmailJS keys configured yet.
        await new Promise((r) => setTimeout(r, 900));
        setStatus("success");
        form.reset();
        return;
      }
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28" aria-labelledby="contact-heading">
      <div className="container-narrow grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <p className="eyebrow">06</p>
          <h2 id="contact-heading" className="section-heading mt-3 text-3xl text-ink md:text-4xl">
            {t("section_contact")}
          </h2>
          <p className="mt-5 max-w-sm text-muted">{t("contact_lead")}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block font-mono text-sm text-accent-soft underline underline-offset-4"
          >
            {site.email}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="from_name" className="text-sm text-muted">
              {t("form_name")}
            </label>
            <input
              id="from_name"
              name="from_name"
              type="text"
              required
              autoComplete="name"
              className="rounded-lg border border-line bg-card px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="reply_to" className="text-sm text-muted">
              {t("form_email")}
            </label>
            <input
              id="reply_to"
              name="reply_to"
              type="email"
              required
              autoComplete="email"
              className="rounded-lg border border-line bg-card px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm text-muted">
              {t("form_message")}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border border-line bg-card px-4 py-3 text-ink outline-none transition-colors focus:border-accent"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "sending" ? t("form_sending") : t("form_send")}
          </button>

          <div role="status" aria-live="polite">
            {status === "success" && (
              <p className="text-sm text-accent-soft">{t("form_success")}</p>
            )}
            {status === "error" && <p className="text-sm text-red-400">{t("form_error")}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
