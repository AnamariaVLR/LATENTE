# LATENTE

An inquiry-only brand website for **LATENTE** — a Colombian specialty coffee house
that designs bespoke coffee programs for refined hospitality. B2B, no e-commerce,
no prices. The site conveys the level of the brand and funnels a small number of
high-value prospects into a private email inquiry.

Built with **Astro** (static output), hand-written CSS design tokens, self-hosted
fonts, full **i18n** (EN · ES · AR with RTL), and **Netlify Forms** for the inquiry.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # serve the production build locally
```

Node 22+ is recommended (see `netlify.toml`).

---

## Project structure

```
public/
  fonts/            self-hosted woff2 (Cormorant Garamond, EB Garamond, Amiri)
  images/           placeholder photography (REPLACE before launch — see below)
  favicon.svg       placeholder palm-tree mark
  logo.svg          placeholder wordmark (swapped in via Logo.astro)
  og-image.jpg      generated social card
  robots.txt, site.webmanifest, icon-*.png, apple-touch-icon.png
src/
  i18n/             locale dictionaries (en.ts, es.ts, ar.ts) + helpers + types
  styles/           tokens.css · fonts.css · global.css
  components/        Logo, LanguageSwitcher, ScrollReveal, Section, Header,
                     Footer, SEO, Hero, Home, InquiryForm, InquireContent
  layouts/          BaseLayout.astro (html shell, head, fonts, reveal observer)
  pages/            index.astro (→ /en) and en|es|ar / index + inquire
astro.config.mjs    i18n routing + sitemap
netlify.toml        build, headers, redirect
```

There are **no hard-coded UI strings** in components — every string lives in the
locale dictionaries under `src/i18n/`.

---

## Deploying to Netlify

1. Push this repo to GitHub/GitLab and "Add new site → Import an existing project"
   in Netlify, or run `netlify deploy` with the CLI.
2. Netlify reads `netlify.toml` automatically:
   - build command `npm run build`, publish directory `dist`
   - long-cache headers for `/fonts` and `/images`
   - `/` → `/en/` redirect
3. Set the production domain, then update **`site`** in `astro.config.mjs` and the
   `Sitemap:` line in `public/robots.txt` to the live URL (used for canonical,
   hreflang, sitemap and Open Graph URLs).

### Routing inquiry form submissions to email (`INQUIRY_EMAIL`)

The inquiry form uses **Netlify Forms** — no server code. Netlify auto-detects the
form named `inquiry` from the static HTML at deploy time.

To deliver submissions to the corporate inbox:

1. Deploy once so Netlify registers the `inquiry` form (submit a test entry).
2. In the Netlify dashboard: **Forms → inquiry → Settings & notifications →
   Add notification → Email notification**.
3. Set the recipient to the corporate address. This address is referred to as
   **`INQUIRY_EMAIL`** throughout this project — there is no secret to configure in
   code; it is set entirely in the Netlify UI.
4. (Recommended) Enable Netlify's spam filtering; a hidden honeypot field
   (`bot-field`) is already in place as a first line of defence.

Submissions also remain viewable in the Netlify Forms dashboard. With JavaScript
enabled the form submits via `fetch` and shows an inline thank-you; without JS it
posts natively and Netlify shows its default success page.

---

## Customising via tokens

Everything visual is centralised — swapping these re-skins the whole site.

- **Colours & type scale & motion:** `src/styles/tokens.css` (CSS custom properties).
- **Fonts:** `src/styles/fonts.css`. To use the real brand font, drop the woff2
  files into `public/fonts/` and update the `@font-face` `src` paths + the
  `--font-display` / `--font-body` token values. Fonts are self-hosted (never
  hotlinked) and the two most critical faces are preloaded in `BaseLayout.astro`.
- **Logo:** replace `public/logo.svg` with the real wordmark (the brand mark places
  a palm tree in the "T"), then set `useSvg = true` in
  `src/components/Logo.astro`. The favicon set is generated from
  `public/favicon.svg` — regenerate the PNGs with sharp if you change it.

---

## Site imagery

Each image-backed section is served as a `<picture>` with a modern **`.webp`**
source and a **`.jpg`** fallback. Provide both formats for every image, keeping the
same base filename (the `.webp` path is derived automatically from the `.jpg`
path). Section paths live in the locale dictionaries (`editions[].image`) and in
`Hero.astro` / `Home.astro`.

| Base filename              | Used in                          | Recommended size | Treatment |
|----------------------------|----------------------------------|------------------|-----------|
| `hero-cocora-valley`       | Hero                             | 2400×1600        | Misty Cocora Valley wax palms; muted/desaturated |
| `essence-coffee-blossom`   | Essence **and** No. 01 The High Bloom | 2000×1333   | Coffee blossoms, soft light |
| `coffee-02-cacao-ground`   | No. 02 The Cacao Ground          | 2000×1333        | Dark, cacao-toned foliage |
| `coffee-03-ferment-light`  | No. 03 The Ferment Light         | 2000×1333        | Ripe coffee cherries, warm |
| `hospitality-interior`     | Hospitality                      | 2400×1600        | Refined interior, warm muted light |
| `og-image.jpg`             | Social share card                | 1200×630         | Branded card (regenerate or replace) |

> The licensed photography is already in place. `essence-coffee-blossom` is reused
> for both the Essence section and the No. 01 (The High Bloom) edition.

Every image-backed text section applies a gradient **scrim** so overlaid text stays
above WCAG AA contrast. To add a new image section, drop in `name.webp` + `name.jpg`
and point the section at `name.jpg`. The markup already uses `loading="lazy"` and
`decoding="async"` (the hero uses `fetchpriority="high"`).

---

## Completing the translations

Copy lives in `src/i18n/{en,es,ar}.ts`, all sharing the typed shape in `types.ts`
(a missing or misnamed key is a build error).

- **English (`en.ts`)** — canonical, final copy.
- **Spanish (`es.ts`)** — a faithful **draft**. The owner (native speaker) should
  review and refine before launch.
- **Arabic (`ar.ts`)** — ⚠ **PLACEHOLDER, machine-quality draft.** The locale is
  fully scaffolded with **RTL** support (`dir="rtl"`, mirrored layout via CSS
  logical properties, the Amiri Arabic serif). **Every Arabic string must be
  professionally translated and reviewed by a native copywriter before launch.**
  Confirm whether brand names (LATENTE, the three edition names) should be
  transliterated or kept in Latin script.

To add or rename a string: update `types.ts`, then fill the key in all three
dictionaries.

---

## Accessibility & performance notes

- Semantic HTML5, single `<h1>` per page, labelled landmarks, skip link.
- Visible focus states; AA-minimum contrast (text over imagery always scrimmed).
- Scroll-reveal motion fully respects `prefers-reduced-motion: reduce`.
- Self-hosted, preloaded fonts (`font-display: swap`) to minimise layout shift.
- Lazy-loaded images; static output; minimal JS (one IntersectionObserver + the
  form's progressive-enhancement submit).

Run Lighthouse against the production build (`npm run build && npm run preview`)
and iterate; target 95+ across the board.
