// Responsive image pipeline — free and local, run with `npm run images`.
//
// For every source JPG in /public/images it writes AVIF + WebP variants at
// several widths (never upscaling). The <Section> and <Hero> components pick
// these up automatically via src/lib/images.ts, so adding a new photo is:
//   1. drop `name.jpg` (2000–2400px wide) into /public/images
//   2. run `npm run images`
//   3. reference `/images/name.jpg` in the section
// Idempotent: variants that already exist are skipped, so it is safe (and fast)
// to run on every deploy — netlify.toml runs it before `astro build`.
import sharp from 'sharp';
import { existsSync, readdirSync } from 'node:fs';

const dir = 'public/images';
const WIDTHS = [720, 1280, 1920, 2400];
const sources = readdirSync(dir).filter((f) => /^[a-z0-9-]+\.jpg$/.test(f));

for (const file of sources) {
  const base = file.replace(/\.jpg$/, '');
  const meta = await sharp(`${dir}/${file}`).metadata();
  const widths = WIDTHS.filter((w) => w <= (meta.width ?? 0));
  let made = 0;
  for (const w of widths) {
    const avif = `${dir}/${base}-${w}.avif`;
    const webp = `${dir}/${base}-${w}.webp`;
    if (existsSync(avif) && existsSync(webp)) continue;
    const img = sharp(`${dir}/${file}`).resize({ width: w, withoutEnlargement: true });
    if (!existsSync(avif)) await img.clone().avif({ quality: 52, effort: 4 }).toFile(avif);
    if (!existsSync(webp)) await img.clone().webp({ quality: 74 }).toFile(webp);
    made++;
  }
  console.log(
    `${base}: ${meta.width}×${meta.height} → ${widths.join('/')}w ` +
      (made ? `(${made} generated)` : '(up to date)'),
  );
}
