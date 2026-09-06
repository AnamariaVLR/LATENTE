// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Origin and base path come from the environment so one codebase deploys to
// Netlify at the root (production) and to a GitHub Pages preview under /LATENTE.
// Update SITE_URL (or the default below) to the live domain before launch — it
// feeds the sitemap, canonical URLs, hreflang and Open Graph tags.
const SITE = process.env.SITE_URL || 'https://latente.coffee';
const BASE = process.env.BASE_PATH || '/';
const ROOT = new URL(BASE.endsWith('/') ? BASE : `${BASE}/`, SITE).href;

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  // Static output — no backend, no SSR. Deploys as plain files anywhere.
  output: 'static',
  // Three locales. `en` is the default and is prefixed (/en) so every locale
  // is treated equally and the root can redirect to a negotiated language.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ar'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // The bare root is only a redirect to /en — keep it out of the sitemap.
      filter: (page) => page !== ROOT,
      // Emit hreflang alternate links between the three locales.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es', ar: 'ar' },
      },
    }),
  ],
});
