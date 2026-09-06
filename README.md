# LATENTE

An inquiry-only brand website for **LATENTE** — a Colombian specialty coffee house
that designs bespoke coffee programs for refined hospitality. B2B, no e-commerce,
no prices. The site conveys the level of the brand and funnels a small number of
high-value prospects into a private inquiry — **the inquiry form is the checkout.**

Built with **Astro** (static), hand-written CSS design tokens, self-hosted variable
fonts with real OpenType features, responsive AVIF/WebP imagery, native
scroll-driven motion, view transitions, full **i18n** (EN · ES · AR with RTL), and
**Netlify Forms** for the inquiry. **Everything runs on free tiers** — there is no
paid service anywhere in the stack.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # serve the production build locally
npm run images   # regenerate responsive AVIF/WebP variants (after adding photos)
npm run fonts    # rebuild the variable font subsets (needs: pip install fonttools brotli)
```

Node 22+ is recommended (see `netlify.toml`).

---

## Project structure

```
public/
  fonts/            self-hosted woff2 — Cormorant Garamond + EB Garamond (variable,
                    with smcp/onum/liga kept) and Amiri (Arabic)
  images/           photography: name.jpg (fallback) + name-{720,1280,1920,2400}.{avif,webp}
  favicon.svg       placeholder palm-tree mark   ·  logo.svg  placeholder wordmark
  og-image.jpg, robots.txt, site.webmanifest, icon-*.png, apple-touch-icon.png
scripts/
  images.mjs        responsive image pipeline (sharp)  ·  fonts.sh  font subsetting
src/
  i18n/             locale dictionaries (en.ts, es.ts, ar.ts) + helpers + typed shape
  lib/images.ts     build-time helper that discovers image variants for <picture>
  styles/           tokens.css · fonts.css · global.css
  components/       Logo, LanguageSwitcher, ScrollReveal, Section, Header, Footer,
                    SEO, Hero, Home, InquiryForm, InquireContent, PrivacyContent
  layouts/          BaseLayout.astro (shell, head, view transitions, motion scripts)
  pages/            index.astro (→ /en) and en|es|ar / index · inquire · privacy
astro.config.mjs    i18n routing + sitemap     ·     netlify.toml  build, headers, redirect
```

There are **no hard-coded UI strings** in components — every string lives in the
locale dictionaries under `src/i18n/`, typed by `types.ts` (a missing key is a
build error).

---

## The inquiry engine (B2B lead capture) — free

The form on `/inquire` is wired to **Netlify Forms** (free tier: 100 submissions /
month — ample for a private B2B funnel). No server code.

**Fields** are grouped calmly into *About you · Your property · The conversation*:
name, role, email, phone, company/property, property type, country/city, number
of properties or rooms, area of interest (House Coffees · Bespoke Program ·
Hospitality Partnership · Request the full dossier), current coffee program,
timeline, message, and a **GDPR-style consent checkbox** linking to `/privacy`.
Only the essentials are required; the rest qualify the lead without friction.

**Entry points:** header, hero, Bespoke, closing call, footer, plus a
"Request the full dossier" link that opens the form with that interest
pre-selected (`/inquire?interest=dossier` — any option value works).

**Spam:** a hidden honeypot (`bot-field`) plus Netlify's built-in filtering.

### Route submissions to email (`INQUIRY_EMAIL`)

1. Deploy once, then submit a test entry so Netlify registers the `inquiry` form.
2. In Netlify: **Forms → inquiry → Settings & notifications → Add notification →
   Email notification** → enter the corporate address. This is the address the
   project refers to as **`INQUIRY_EMAIL`** — configured entirely in the Netlify
   UI, nothing in code.
3. Submissions also remain viewable in the Netlify Forms dashboard.

### Free auto-reply to the prospect (optional)

Netlify notifies *you*; to also send the prospect a confirmation for free, use
Netlify's **Outgoing webhook** notification (Forms → notifications) pointing at a
free **Zapier** (100 tasks/mo) or **Make** (1,000 ops/mo) scenario that sends a
Gmail/Outlook email. The inline "Thank you — we will be in touch privately" state
already confirms receipt on the page, so this is a nicety, not a requirement.

### Analytics hook (optional, free)

On a successful submit the page dispatches `document` event **`latente:inquiry`**
(`detail.interest` carries the selected option). Any provider can listen for it.
For cookieless, banner-free, free analytics, **Cloudflare Web Analytics** is a
good fit — add its beacon `<script>` to `BaseLayout.astro` and forward the event.
The site ships with **no** tracking by default.

---

## Deploying to Netlify (free)

1. Push to GitHub and "Add new site → Import an existing project" in Netlify.
2. `netlify.toml` provides the build command (`npm run assets && npm run build` —
   derived AVIF/WebP and font subsets regenerate if missing), publish dir,
   long-cache headers for fonts/images, security headers, and the `/ → /en/`
   redirect.
3. Set the production domain, then update **`site`** in `astro.config.mjs` and the
   `Sitemap:` line in `public/robots.txt` (used for canonical, hreflang, sitemap
   and Open Graph URLs).

---

## Public preview on GitHub Pages (free)

`.github/workflows/pages.yml` builds the site on every push and publishes the
static output to the **`gh-pages`** branch — no extra account needed. The preview
lives under the repository sub-path, so the build runs with `BASE_PATH=/LATENTE`
and every internal link and asset is base-aware via `src/config.ts` (`withBase()`).

**One-time activation (repository admin, ~1 minute).** Two facts govern this:
GitHub only serves a branch once Pages is switched on, and on the **free plan
Pages is available for public repositories only** (this repository is currently
private). Either:

- **Publish here (no accounts):** Settings → General → Danger Zone → *Change
  repository visibility* → **Public**; then Settings → Pages → Build and
  deployment → Source **"Deploy from a branch"** → **`gh-pages`** / **`/ (root)`**
  → Save. Live about a minute later; every push republishes automatically.
- **Keep the code private:** deploy to **Netlify** (free tier supports private
  repos) — the intended production host, where Netlify Forms also work out of
  the box. See "Deploying to Netlify" above.

**Live URL:** `https://anamariavlr.github.io/LATENTE/`

**Custom domain (optional).** `latente.com` is *not* available — it is parked by
a domain reseller — so choose a domain you own (e.g. a `.coffee` or `.co`). Then:
1. Add a repository variable **`PAGES_CNAME`** with the bare domain
   (Settings → Secrets and variables → Actions → Variables). The workflow then
   builds at the root path for that domain and writes the `CNAME` file on every
   publish, so the setting survives redeploys.
2. At your DNS provider, add a `CNAME` record for the domain (or `www`) pointing
   to `anamariavlr.github.io`.
3. Enter the same domain under Settings → Pages → *Custom domain* and enable
   *Enforce HTTPS* once the certificate is issued (a few minutes).

Netlify Forms only exist on Netlify, so the preview uses **formsubmit.co** —
free, no account, works from any static host. To receive inquiries from the
preview, add a repository variable **`INQUIRY_EMAIL`** (Settings → Secrets and
variables → Actions → Variables) with the corporate inbox; the first submission
emails that address a one-time activation link. Production on Netlify keeps
using Netlify Forms (`PUBLIC_FORM_PROVIDER` defaults to `netlify`).

Environment knobs (all optional): `SITE_URL`, `BASE_PATH`,
`PUBLIC_FORM_PROVIDER` (`netlify` | `formsubmit`), `PUBLIC_INQUIRY_EMAIL`.

---

## Field Notes — the monthly insight section

A data-led editorial section ("Field Notes") on the homepage, with an archive at
`/insights`. Each note is one measured observation from cultivation, processing
or curation — altitude, °Brix at picking, fermentation hours and pH, moisture and
water activity, cupping scores — written in the brand's restrained voice.

**How it updates monthly, for free.** Notes live in `src/content/insights/` as
`YYYY-MM.json` (validated by `src/content.config.ts`). The build shows only notes
whose `date` has arrived, newest first, and the deploy workflow also runs on a
**schedule on the 1st of every month**, so a note written ahead of time publishes
itself. Write several months in advance; nothing else is needed.

To add a month: copy the latest JSON, bump `number`, set `date` to the first of
the month, and fill `stage`, `title`, `lede`, `body` (paragraphs), 3–6 `metrics`
(value, unit, label, short note) and `sources`. Text fields carry `en` / `es` /
`ar` variants; a missing locale falls back to English. The shipped notes are
editorial drafts built on published specialty-coffee standards (SCA cupping and
green-coffee standards, Cenicafé guidance) — review the figures against your own
farm data before launch.

If production runs on Netlify, add a repository secret `NETLIFY_BUILD_HOOK`
(Netlify → Site configuration → Build hooks) and the same monthly schedule
triggers the production build too.

---

## Design system & customisation

Everything visual is centralised — swapping these re-skins the whole site.

- **Colours, type scale, spacing, motion, photo grade:** `src/styles/tokens.css`.
  The `--grade-*` tokens apply one "film stock" (gentle desaturation + a forest
  colour cast) to every photograph so the set reads as art-directed.
- **Typography:** display face **Bodoni Moda** — an Italian high-contrast Didone
  with an optical-size axis, chosen because its hairline serifs echo the wax
  palms of the hero and the Didone voice is the shared language of global luxury
  (fashion houses, hospitality), distinct from the Garamond most artisan brands
  use. Body face **EB Garamond** for reading comfort, with true **small caps**
  (`smcp`) for eyebrows and labels, old-style figures in running text and lining,
  tabular figures in headings, data and forms — all from the fonts' own OpenType
  tables (`global.css`).
- **Fonts:** `src/styles/fonts.css`. Both faces are single **variable** files
  subset via `scripts/fonts.sh` (`npm run fonts`). To use a brand font, drop the
  woff2 into `public/fonts/`, update the `@font-face` and the `--font-*` tokens.
- **Logo:** replace `public/logo.svg` with the real wordmark (the brand mark places
  a palm tree in the "T"), then set `useSvg = true` in `Logo.astro`.

### Motion (2026-grade, all free, all reduced-motion safe)

- **Scroll-linked reveals** via native CSS `animation-timeline: view()` — text
  resolves *as you scroll*, off the main thread. Browsers without support fall
  back to a small IntersectionObserver. Two treatments: a fade-lift and an
  editorial **mask wipe** (`<ScrollReveal mask />`).
- **Parallax depth** on every photo section and the hero.
- **View transitions** between pages/locales (`<ClientRouter />`).
- **Sticky-stack editions**: each House Coffee pins and the next slides over it.
- **Magnetic** primary buttons (fine pointers only) and a quiet **section index**.
- Header wordmark hidden over the hero, rising in with a forest band on scroll.

### Imagery

Each image section is a `<picture>` with **AVIF → WebP → JPG** sources at
720/1280/1920/2400 widths (`sizes="100vw"`), discovered automatically at build.

| Base filename              | Used in                          | Source size |
|----------------------------|----------------------------------|-------------|
| `hero-cocora-valley`       | Hero                             | 2400×1602   |
| `essence-coffee-blossom`   | No. 01 The High Bloom            | 2000×1200   |
| `coffee-02-cacao-ground`   | No. 02 The Cacao Ground          | 2000×1333   |
| `coffee-03-ferment-light`  | No. 03 The Ferment Light         | 2000×1335   |
| `hospitality-interior`     | Hospitality                      | 2000×1333   |

To add or replace a photo: put `name.jpg` in `public/images/`, run
`npm run images`, reference `/images/name.jpg`. Every image section keeps a
gradient **scrim** so overlaid text stays above WCAG AA.

**Cinemagraph hero (optional):** drop `hero-cocora-valley.mp4` and/or `.webm`
(6–10 s, silent, ~1920×1080, H.264/VP9, ≤ 3 MB) into `public/images/` and the
hero becomes a looping video automatically, using the still as poster and
falling back to it under `prefers-reduced-motion`. Free tools: HandBrake or
`ffmpeg -an -t 8 -vf scale=1920:-2 -crf 26`.

---

## Completing the translations

Copy lives in `src/i18n/{en,es,ar}.ts`, all sharing the typed shape in `types.ts`.

- **English (`en.ts`)** — canonical, final copy.
- **Spanish (`es.ts`)** — a faithful **draft**; the owner (native speaker) should
  review before launch.
- **Arabic (`ar.ts`)** — ⚠ **PLACEHOLDER, machine-quality draft.** The locale is
  fully scaffolded with **RTL** support (logical CSS properties, the Amiri serif,
  no letter-spacing/italics/small-caps on Arabic script). **Every string must be
  professionally translated before launch.** Confirm whether LATENTE and the
  edition names should be transliterated.

---

## Launch checklist

- [ ] Netlify email notification set to `INQUIRY_EMAIL`; test submission received
- [ ] `/privacy` copy reviewed by counsel (it is a clearly-marked template)
- [ ] Spanish copy reviewed; Arabic professionally translated
- [ ] Real logo SVG and (if any) brand fonts dropped into the token slots
- [ ] Production domain set in `astro.config.mjs` + `robots.txt`
- [ ] Optional: cinemagraph video, cookieless analytics
- [ ] Lighthouse 95+ and a WCAG AA pass on the production URL

## Accessibility & performance

Semantic HTML5, one `<h1>` per page, labelled landmarks, skip link, visible focus,
AA contrast everywhere (photos scrimmed; gold reserved for rules and large
numerals), full `prefers-reduced-motion` parity, self-hosted preloaded fonts,
AVIF/WebP with `srcset`, lazy loading, `content-visibility` on below-fold text
sections, static output, minimal JS.
