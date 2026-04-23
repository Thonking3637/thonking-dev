/**
 * One-shot generator for OG image + favicons.
 * Run with: node scripts/generate-assets.mjs
 *
 * Produces:
 *   public/og-image.png           (1200x630 OG card)
 *   public/apple-touch-icon.png   (180x180)
 *   public/android-chrome-192x192.png
 *   public/android-chrome-512x512.png
 *   public/favicon.ico            (multi-res 16/32/48)
 *   public/favicon.svg            (hand-drawn mini mark — not from PNG)
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const PUB = resolve("public");
const MASCOT_HEAD = resolve(PUB, "mascot/mascot-idle.png");
const MASCOT_HERO_HAPPY = resolve(PUB, "mascot/mascot-hero-happy.png");

// ─── OG image (1200x630) ───────────────────────────────────────────
async function generateOgImage() {
  const W = 1200;
  const H = 630;

  // Background SVG (cream + dot grid + decorative star + text).
  // Fonts fall back to system — Geist/JetBrains Mono won't render
  // server-side without being embedded. We use generic families.
  const svg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#1a1815" opacity="0.08"/>
    </pattern>
    <radialGradient id="glow" cx="90%" cy="10%" r="60%">
      <stop offset="0%" stop-color="#f4d35e" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#f4d35e" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="5%" cy="95%" r="50%">
      <stop offset="0%" stop-color="#ff6b4a" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#ff6b4a" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#edebe6"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>

  <!-- mostaza star top-right of text area -->
  <g transform="translate(650 110) rotate(14)">
    <path d="M30 0 L38 24 L62 26 L44 40 L50 62 L30 48 L10 62 L16 40 L-2 26 L22 24 Z"
          transform="translate(6 6)" fill="#1a1815"/>
    <path d="M30 0 L38 24 L62 26 L44 40 L50 62 L30 48 L10 62 L16 40 L-2 26 L22 24 Z"
          fill="#f4d35e" stroke="#1a1815" stroke-width="4" stroke-linejoin="round"/>
  </g>

  <!-- main title -->
  <text x="80" y="280"
        font-family="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
        font-size="108" font-weight="900" fill="#1a1815"
        letter-spacing="-3">thonking.dev</text>

  <!-- subtitle -->
  <text x="82" y="346"
        font-family="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
        font-size="36" font-weight="500" fill="#5a5650">
    Unity Developer · Gamificación &amp; Tools
  </text>

  <!-- muted rule -->
  <line x1="82" y1="400" x2="360" y2="400" stroke="#1a1815" stroke-width="2" opacity="0.15"/>

  <!-- email -->
  <text x="82" y="440"
        font-family="'JetBrains Mono', ui-monospace, monospace"
        font-size="22" font-weight="600" fill="#b89a3d"
        letter-spacing="2">GABRIEL@THONKING.DEV</text>

  <!-- tag line bottom -->
  <text x="82" y="560"
        font-family="'JetBrains Mono', ui-monospace, monospace"
        font-size="16" font-weight="500" fill="#5a5650"
        letter-spacing="4">LIMA · PERÚ · ES</text>
</svg>`.trim();

  // Background rendered to raster
  const bg = await sharp(Buffer.from(svg)).png().toBuffer();

  // Mascot resized to ~500px height, keep aspect
  const mascot = await sharp(MASCOT_HERO_HAPPY)
    .resize({ height: 520 })
    .png({ compressionLevel: 9 })
    .toBuffer();

  const mascotMeta = await sharp(mascot).metadata();
  const mw = mascotMeta.width ?? 520;
  const mh = mascotMeta.height ?? 520;

  // Position mascot on the right 40%
  const left = Math.round(W * 0.6 + (W * 0.4 - mw) / 2);
  const top = Math.round((H - mh) / 2);

  await sharp(bg)
    .composite([{ input: mascot, left, top }])
    .png({ compressionLevel: 9, quality: 88 })
    .toFile(resolve(PUB, "og-image.png"));

  console.log("✓ og-image.png");
}

// ─── Favicon PNG set from mascot-idle.png ──────────────────────────
async function generateFavicons() {
  const sizes = [
    { out: "apple-touch-icon.png", size: 180 },
    { out: "android-chrome-192x192.png", size: 192 },
    { out: "android-chrome-512x512.png", size: 512 },
    { out: "favicon-48x48.png", size: 48 }, // temp for ico
    { out: "favicon-32x32.png", size: 32 }, // temp for ico
    { out: "favicon-16x16.png", size: 16 }, // temp for ico
  ];

  for (const { out, size } of sizes) {
    // Render on cream background so transparent PNG looks fine
    // when OS renders with light bg. For apple-touch-icon, need solid bg.
    const isAppleTouch = out === "apple-touch-icon.png";
    const pipeline = sharp(MASCOT_HEAD).resize(size, size, {
      fit: "contain",
      background: isAppleTouch
        ? { r: 0xed, g: 0xeb, b: 0xe6, alpha: 1 }
        : { r: 0, g: 0, b: 0, alpha: 0 },
    });
    await pipeline.png({ compressionLevel: 9 }).toFile(resolve(PUB, out));
    console.log(`✓ ${out}`);
  }

  // Build favicon.ico from the three PNGs
  const icoBuf = await pngToIco([
    resolve(PUB, "favicon-16x16.png"),
    resolve(PUB, "favicon-32x32.png"),
    resolve(PUB, "favicon-48x48.png"),
  ]);
  writeFileSync(resolve(PUB, "favicon.ico"), icoBuf);
  console.log("✓ favicon.ico (multi-res 16/32/48)");

  // Clean temp PNGs — keep 32x32 for browsers that prefer PNG
  // (we keep favicon-32x32.png as useful, remove 16 and 48)
  const { unlinkSync } = await import("node:fs");
  try {
    unlinkSync(resolve(PUB, "favicon-16x16.png"));
    unlinkSync(resolve(PUB, "favicon-48x48.png"));
  } catch {}
}

// ─── favicon.svg — simple vector mark (yellow cat helmet) ─────────
function generateFaviconSvg() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <!-- helmet shadow -->
  <circle cx="17" cy="17" r="13" fill="#1a1815" opacity="0.15"/>
  <!-- helmet -->
  <circle cx="16" cy="15" r="13" fill="#f4d35e" stroke="#1a1815" stroke-width="2"/>
  <!-- ears -->
  <path d="M6 8 L9 3 L11 10 Z" fill="#1a1815"/>
  <path d="M26 8 L23 3 L21 10 Z" fill="#1a1815"/>
  <!-- eyes -->
  <ellipse cx="11.5" cy="15" rx="1.8" ry="2.4" fill="#1a1815"/>
  <ellipse cx="20.5" cy="15" rx="1.8" ry="2.4" fill="#1a1815"/>
  <!-- eye highlights -->
  <circle cx="12.2" cy="14.2" r="0.6" fill="#fff"/>
  <circle cx="21.2" cy="14.2" r="0.6" fill="#fff"/>
  <!-- smile -->
  <path d="M13 20 Q16 22 19 20" stroke="#1a1815" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  <!-- collar bell -->
  <rect x="6" y="24" width="20" height="4" rx="1.5" fill="#1a1815"/>
  <circle cx="16" cy="29" r="2.5" fill="#ff6b4a" stroke="#1a1815" stroke-width="1"/>
  <text x="16" y="30.3" font-family="monospace" font-size="3.2" font-weight="900" fill="#1a1815" text-anchor="middle">T</text>
</svg>
`;
  writeFileSync(resolve(PUB, "favicon.svg"), svg);
  console.log("✓ favicon.svg");
}

// ─── Run ──────────────────────────────────────────────────────────
console.log("Generating assets...");
await generateOgImage();
await generateFavicons();
generateFaviconSvg();
console.log("\nAll done.");
