#!/usr/bin/env node
/**
 * optimize-portfolio-images.mjs
 *
 * Converteert alle PNG-screenshots in client/public/portfolio/ naar WebP.
 * Verwijdert de originele PNG na succesvolle conversie.
 *
 * Aanroep: node scripts/optimize-portfolio-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.resolve(__dirname, "..", "client", "public", "portfolio");

const files = (await fs.readdir(DIR)).filter((f) => f.endsWith(".png"));
if (files.length === 0) {
  console.log("[optimize] Geen PNG-bestanden gevonden.");
  process.exit(0);
}

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const src = path.join(DIR, file);
  const dst = path.join(DIR, file.replace(/\.png$/, ".webp"));
  const before = (await fs.stat(src)).size;
  totalBefore += before;

  await sharp(src).webp({ quality: 82, effort: 5 }).toFile(dst);
  const after = (await fs.stat(dst)).size;
  totalAfter += after;

  const saved = (((before - after) / before) * 100).toFixed(0);
  console.log(
    `  ${file} → ${path.basename(dst)}  (${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB, -${saved}%)`,
  );

  await fs.unlink(src);
}

const savedTotal = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0);
console.log(
  `\n[optimize] ✓ ${files.length} bestanden. Totaal: ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (-${savedTotal}%).`,
);
