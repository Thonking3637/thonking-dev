/**
 * Convert mascot PNGs to WebP (quality 85) keeping originals as fallback.
 * Run: node scripts/convert-webp.mjs
 */
import sharp from "sharp";
import { readdirSync } from "node:fs";
import { resolve, extname, basename } from "node:path";

const DIR = resolve("public/mascot");
const files = readdirSync(DIR).filter((f) => f.endsWith(".png"));

for (const f of files) {
  const name = basename(f, ".png");
  const src = resolve(DIR, f);
  const dst = resolve(DIR, `${name}.webp`);
  const info = await sharp(src)
    .webp({ quality: 85, effort: 6 })
    .toFile(dst);
  const srcSize = (await sharp(src).metadata()).size ?? 0;
  console.log(
    `✓ ${name}.webp  ${Math.round(info.size / 1024)}KB  (was ${Math.round(
      srcSize / 1024
    )}KB PNG)`
  );
}
