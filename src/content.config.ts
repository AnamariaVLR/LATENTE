// Content collections (Astro content layer).
//
// `insights` — the monthly Field Notes. One JSON file per month in
// src/content/insights/, named YYYY-MM.json. The homepage shows the most recent
// note whose `date` is on or before the build date; the /insights page lists
// them all. Future-dated notes are invisible until the scheduled monthly rebuild
// (see .github/workflows/pages.yml) publishes them automatically.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** A string that can carry per-locale variants; missing locales fall back to EN. */
const localized = z.object({
  en: z.string(),
  es: z.string().optional(),
  ar: z.string().optional(),
});

const localizedParagraphs = z.object({
  en: z.array(z.string()),
  es: z.array(z.string()).optional(),
  ar: z.array(z.string()).optional(),
});

const insights = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/insights' }),
  schema: z.object({
    /** Publication month; the note goes live on this date (ISO YYYY-MM-DD). */
    date: z.coerce.date(),
    /** Running number shown as "Note 03". */
    number: z.number().int().positive(),
    /** Which stage of the chain this note measures. */
    stage: localized,
    title: localized,
    /** One-sentence lede shown on the homepage. */
    lede: localized,
    /** Full text for the archive page. */
    body: localizedParagraphs,
    /** The data: a few measured values with their working thresholds. */
    metrics: z
      .array(
        z.object({
          label: localized,
          value: z.string(),
          unit: z.string().optional(),
          /** Short qualifier, e.g. "target" or "at picking". */
          note: localized.optional(),
        }),
      )
      .min(3)
      .max(6),
    /** Standards and references the thresholds are drawn from. */
    sources: z.array(z.string()).default([]),
  }),
});

export const collections = { insights };
