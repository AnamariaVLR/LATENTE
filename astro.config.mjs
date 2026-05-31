// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The production URL. Update this to the live domain before launch — it is used
// for the sitemap, canonical URLs, hreflang and Open Graph tags.
const SITE = 'https://latente.coffee';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Static output — no backend, no SSR. Deploys as plain files to Netlify.
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
      // The bare "/" is only a redirect to /en — keep it out of the sitemap.
      filter: (page) => page !== `${SITE}/`,
      // Emit hreflang alternate links between the three locales.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es', ar: 'ar' },
      },
    }),
  ],
});
