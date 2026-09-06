// Site-wide build configuration. Everything here is driven by environment
// variables so the same code deploys to Netlify (production) and to a public
// GitHub Pages preview without edits.
//
//   SITE_URL              origin, e.g. https://latente.coffee        (astro.config)
//   BASE_PATH             sub-path, "/" or "/LATENTE" on Pages      (astro.config)
//   PUBLIC_FORM_PROVIDER  "netlify" (default) | "formsubmit"
//   PUBLIC_INQUIRY_EMAIL  the inbox inquiries are delivered to

/** Base path without a trailing slash: "" at the root, "/LATENTE" on Pages. */
export const BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');

/** Prefix a root-relative path with the base path. withBase('/en') → '/LATENTE/en'. */
export function withBase(path: string): string {
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Where inquiries go. Placeholder until the owner sets PUBLIC_INQUIRY_EMAIL. */
export const INQUIRY_EMAIL: string =
  import.meta.env.PUBLIC_INQUIRY_EMAIL || 'hello@latente.coffee';

/**
 * Form backend.
 *  - netlify    — Netlify Forms (zero config on Netlify; the intended production host)
 *  - formsubmit — formsubmit.co, free, no account: works from any static host such
 *                 as GitHub Pages. The first submission emails INQUIRY_EMAIL a
 *                 one-time activation link.
 */
export const FORM_PROVIDER: 'netlify' | 'formsubmit' =
  import.meta.env.PUBLIC_FORM_PROVIDER === 'formsubmit' ? 'formsubmit' : 'netlify';
