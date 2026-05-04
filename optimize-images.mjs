/**
 * optimize-images.mjs
 * Run once before deploying: node optimize-images.mjs
 * Resizes & converts heavy PNG/JPG files in /public to WebP at 80% quality.
 * Originals are preserved with a .orig extension so you can roll back.
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "public");

// Images to optimize: [filename, maxWidthPx]
const TARGETS = [
  ["dcivan.png",          1200],   // 5.2 MB → target ~150 KB
  ["ortodoncia_v3.png",   1200],   // 3.5 MB → target ~100 KB
  ["druchuya.png",         900],   // 1.2 MB → target ~80 KB
  ["dcroberto.png",        900],   // 1.3 MB → target ~80 KB
  ["logouchuya.png",       200],   // 439 KB → target ~20 KB
  ["implantedental.png",   900],   // 1.0 MB → target ~70 KB
  ["hero.png",            1920],   // 674 KB → target ~120 KB
  ["smile.png",            900],   // 620 KB → target ~60 KB
  ["doctor.png",           900],   // 664 KB → target ~60 KB
  ["diseñosonrisa.jpg",    900],   // 375 KB → target ~50 KB
  ["evaluacion.jpg",       900],   // 311 KB → target ~45 KB
];

async function optimizeImage(filename, maxWidth) {
  const inputPath = path.join(PUBLIC_DIR, filename);
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠  Skipping ${filename} — not found`);
    return;
  }

  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  const outputPath = path.join(PUBLIC_DIR, `${base}.webp`);
  const backupPath = path.join(PUBLIC_DIR, `${base}${ext}.orig`);

  const before = fs.statSync(inputPath).size;

  // Backup original once
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(inputPath, backupPath);
  }

  await sharp(inputPath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);

  const after = fs.statSync(outputPath).size;
  const savings = (((before - after) / before) * 100).toFixed(1);
  console.log(`✓ ${filename} → ${base}.webp  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (${savings}% smaller)`);
}

console.log("🖼  Starting image optimization…\n");
for (const [filename, maxWidth] of TARGETS) {
  await optimizeImage(filename, maxWidth);
}
console.log("\n✅ Done! Update your component src props to use .webp extensions where applicable.");
