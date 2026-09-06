import type { Dictionary } from './types';
import { withBase } from '../config';
import en from './en';
import es from './es';
import ar from './ar';

export const LOCALES = ['en', 'es', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

const dictionaries: Record<Locale, Dictionary> = { en, es, ar };

/** Type guard: is this string one of our supported locales? */
export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/** Get the full dictionary for a locale (falls back to the default). */
export function getDictionary(locale: string | undefined): Dictionary {
  return isLocale(locale) ? dictionaries[locale] : dictionaries[DEFAULT_LOCALE];
}

/**
 * Build a base-aware, locale-prefixed path.
 * localizePath('ar', '/inquire') → '/ar/inquire' (or '/LATENTE/ar/inquire' on Pages).
 */
export function localizePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return withBase(clean ? `/${locale}/${clean}` : `/${locale}`);
}

/** The set of alternate-language links for a given page, used for hreflang. */
export function alternates(path = ''): { locale: Locale; href: string }[] {
  return LOCALES.map((locale) => ({ locale, href: localizePath(locale, path) }));
}
