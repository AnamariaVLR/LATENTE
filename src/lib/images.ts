// Build-time helper for responsive imagery. Given the fallback JPG path, it
// discovers which pre-generated AVIF/WebP width variants exist on disk (see the
// `images` script in README) and returns srcset strings for a <picture>.
// Runs in Node at build only — Astro is static, so nothing ships to the client.
import { existsSync } from 'node:fs';
import { join } from 'node:path';

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
  const base = jpg.replace(/\.jpe?g$/i, '');
  const rel = base.replace(/^\/+/, '');
  const available = WIDTHS.filter((w) =>
    existsSync(join(process.cwd(), 'public', `${rel}-${w}.avif`)),
  );
  const set = (ext: string) => available.map((w) => `${base}-${w}.${ext} ${w}w`).join(', ');
  return {
    avif: set('avif'),
    webp: set('webp'),
    webpSingle: `${base}.webp`,
    fallback: jpg,
    responsive: available.length > 0,
  };
}
