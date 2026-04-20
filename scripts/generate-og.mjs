import sharp from "sharp";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = join(__dirname, "../client/public/og-image.svg");
const outPath = join(__dirname, "../client/public/og-image.png");

const svgBuffer = readFileSync(svgPath);

await sharp(svgBuffer)
  .resize(1200, 630)
  .png({ compressionLevel: 8 })
  .toFile(outPath);

console.log("✓ og-image.png gegenereerd (1200×630)");
