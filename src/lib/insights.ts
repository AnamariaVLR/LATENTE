// Field Notes helpers: which notes are published, and locale-aware accessors.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n';

export type Insight = CollectionEntry<'insights'>;

/**
 * Notes whose date is on or before the build date, newest first. Because the
 * site is static, a future-dated note appears automatically at the next build —
 * the scheduled monthly workflow rebuilds on the 1st for exactly this reason.
 */
export async function publishedInsights(): Promise<Insight[]> {
  const now = new Date();
  const all = await getCollection('insights', ({ data }) => data.date.getTime() <= now.getTime());
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Resolve a localized value, falling back to English when a locale is missing. */
export function pick<T>(value: { en: T; es?: T; ar?: T }, locale: Locale): T {
  return (value[locale] as T | undefined) ?? value.en;
}

/** "September 2026" in the locale's language. */
export function monthLabel(date: Date, htmlLang: string): string {
  return date.toLocaleDateString(htmlLang, { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** Two-digit note number for the small-caps meta line: 2 → "02". */
export function pad(n: number): string {
  return String(n).padStart(2, '0');
}
