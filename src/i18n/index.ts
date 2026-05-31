import type { Dictionary } from './types';
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
 * Build a locale-prefixed path. e.g. localizePath('ar', '/inquire') -> '/ar/inquire'.
 * Always returns a trailing-slash-free, leading-slash path segment join.
 */
export function localizePath(locale: Locale, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

/** The set of alternate-language links for a given page, used for hreflang. */
export function alternates(path = ''): { locale: Locale; href: string }[] {
  return LOCALES.map((locale) => ({ locale, href: localizePath(locale, path) }));
}
