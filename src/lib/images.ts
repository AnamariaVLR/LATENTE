// Build-time helper for responsive imagery. Given the fallback JPG path, it
// discovers which pre-generated AVIF/WebP width variants exist on disk (see the
// `images` script in README) and returns base-aware srcset strings for <picture>.
// Runs in Node at build only — Astro is static, so nothing ships to the client.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { withBase } from '../config';

export const WIDTHS = [720, 1280, 1920, 2400] as const;

export interface ResponsiveSources {
  /** e.g. "/images/x-720.avif 720w, /images/x-1280.avif 1280w" */
  avif: string;
  webp: string;
  /** Single-file WebP fallback ("/images/x.webp") when no width variants exist. */
  webpSingle: string;
  /** The original JPG, used as the <img src> fallback. */
  fallback: string;
  /** Whether width variants were found. */
  responsive: boolean;
}

export function responsiveSources(jpg: string): ResponsiveSources {
  const stem = jpg.replace(/\.jpe?g$/i, '');
  const rel = stem.replace(/^\/+/, '');
  const available = WIDTHS.filter((w) =>
    existsSync(join(process.cwd(), 'public', `${rel}-${w}.avif`)),
  );
  const set = (ext: string) =>
    available.map((w) => `${withBase(`${stem}-${w}.${ext}`)} ${w}w`).join(', ');
  return {
    avif: set('avif'),
    webp: set('webp'),
    webpSingle: withBase(`${stem}.webp`),
    fallback: withBase(jpg),
    responsive: available.length > 0,
  };
}
