# Setup Guide: GitHub → Vercel → EmailJS

## Part 1 — Push your code to GitHub

1. Unzip `creovisia-portfolio.zip` on your computer.
2. Install [Git](https://git-scm.com/downloads) if you don't have it.
3. Create a new empty repository on [github.com/new](https://github.com/new) — name it e.g. `creovisia-portfolio`. Don't add a README/gitignore (you already have one).
4. Open a terminal inside the unzipped folder and run:

```bash
git init
git add .
git commit -m "Initial commit: Creovisia portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/creovisia-portfolio.git
git push -u origin main
```

Your code is now on GitHub.

## Part 2 — Deploy live on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in with your **GitHub account** (easiest, auto-connects).
2. Click **Add New → Project**.
3. Select your `creovisia-portfolio` repo → click **Import**.
4. Leave all settings as default (Vercel auto-detects Next.js) → click **Deploy**.
5. Wait ~1 minute. You'll get a live URL like `creovisia-portfolio.vercel.app`.
6. Open `data/site.ts` in your code, set:
   ```ts
   url: "https://creovisia-portfolio.vercel.app", // or your custom domain
   ```
7. Commit and push that change — Vercel auto-redeploys on every push to `main`:
   ```bash
   git add .
   git commit -m "Update site URL"
   git push
   ```

**Optional — custom domain:** In your Vercel project → Settings → Domains → add your domain (e.g. `creovisia.com`) and follow the DNS instructions Vercel shows you.

## Part 3 — Full EmailJS setup (so your contact form sends real emails)

1. Go to [emailjs.com](https://www.emailjs.com) → Sign up (free tier = 200 emails/month).
2. **Add a service**: Dashboard → *Email Services* → *Add New Service* → choose **Gmail** (or Outlook) → connect your email account → note the **Service ID** it generates (e.g. `service_abc123`).
3. **Create a template**: Dashboard → *Email Templates* → *Create New Template*. Set it up like this:
   - **To email**: your real email address
   - **Subject**: `New message from {{from_name}}`
   - **Content**:
     ```
     Name: {{from_name}}
     Email: {{reply_to}}

     Message:
     {{message}}
     ```
   - Click **Save**, then note the **Template ID** (e.g. `template_xyz789`).
4. **Get your Public Key**: Dashboard → *Account* → *General* → copy the **Public Key**.
5. Open `components/Contact.tsx` in your code and find this block near the top of `handleSubmit`:
   ```ts
   const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
   const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
   const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
   ```
   Replace the three placeholder strings with your real IDs from steps 2–4, e.g.:
   ```ts
   const SERVICE_ID = "service_abc123";
   const TEMPLATE_ID = "template_xyz789";
   const PUBLIC_KEY = "AbCdEfGhIjKlMnOp";
   ```
6. Save, then commit and push:
   ```bash
   git add .
   git commit -m "Connect EmailJS contact form"
   git push
   ```
   Vercel redeploys automatically. Test the live contact form — you should receive an email within seconds.

**Note:** these three values are safe to expose in client-side code — EmailJS is designed for this. Just make sure your template's "To email" field is locked to your address in the EmailJS dashboard (not editable from the form) so no one can hijack it to spam others.

## Quick reference — files you'll touch again later

| What you want to change | File |
|---|---|
| Name, tagline, about, skills, projects, links, resume | `data/site.ts` |
| Blog posts | `data/blog.ts` |
| Contact form email keys | `components/Contact.tsx` |
| Colors / fonts | `tailwind.config.ts` |
| Translations (EN/Tamil) | `lib/i18n.tsx` |
