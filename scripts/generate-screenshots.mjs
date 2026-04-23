#!/usr/bin/env node
/**
 * generate-screenshots.mjs
 *
 * Neemt automatisch screenshots van alle portfolio-projecten met Playwright.
 * Input:  content/portfolio/projects.json
 * Output: client/public/portfolio/<slug>-desktop.webp (1440x900, retina 2x, q82)
 *         client/public/portfolio/<slug>-mobile.webp  (390x844,  retina 2x, q82)
 *
 * Flow per site:
 *   1. Open URL
 *   2. Wacht tot netwerk rustig is + extra 1500ms voor animaties
 *   3. Scroll naar top (voor als er ankers/anchors zijn)
 *   4. Screenshot viewport (boven-de-vouw, geen fullpage)
 *
 * Aanroep:
 *   pnpm portfolio:screenshot
 *   pnpm portfolio:screenshot -- --slug=bricks-dakwerk   (enkele site)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PROJECTS_FILE = path.join(ROOT, "content", "portfolio", "projects.json");
const OUTPUT_DIR = path.join(ROOT, "client", "public", "portfolio");

// Filter op enkele slug via --slug=xxx
const slugFilter = process.argv
  .find((a) => a.startsWith("--slug="))
  ?.split("=")[1];

const DESKTOP = { width: 1440, height: 900, deviceScaleFactor: 2 };
const MOBILE = { width: 390, height: 844, deviceScaleFactor: 2 };

async function takeScreenshot(browser, url, viewport, outputPath) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: viewport.deviceScaleFactor,
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  } catch (err) {
    // networkidle kan timeout-en op sites met long-polling — fallback naar load
    console.warn(`  ⚠ networkidle timeout, fallback naar load: ${err.message}`);
    await page.goto(url, { waitUntil: "load", timeout: 30000 });
  }

  // Scroll naar top + extra tijd voor hero-animaties, fonts, etc.
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1500);

  // Probeer cookie banners weg te klikken (heuristiek)
  await page.evaluate(() => {
    const candidates = [
      'button[aria-label*="accept" i]',
      'button[id*="accept" i]',
      'button[class*="accept" i]',
      'button:has-text("Accepteren")',
      'button:has-text("Akkoord")',
      'button:has-text("Accept")',
    ];
    for (const sel of candidates) {
      try {
        const btn = document.querySelector(sel);
        if (btn) {
          btn.click();
          return;
        }
      } catch {}
    }
  });
  await page.waitForTimeout(500);

  const pngBuffer = await page.screenshot({ type: "png", fullPage: false });
  await sharp(pngBuffer).webp({ quality: 82, effort: 5 }).toFile(outputPath);

  await context.close();
}

async function main() {
  if (!fs.existsSync(PROJECTS_FILE)) {
    console.error(`Geen projects.json gevonden op ${PROJECTS_FILE}`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(PROJECTS_FILE, "utf-8"));
  let projects = data.projects || [];
  if (slugFilter) {
    projects = projects.filter((p) => p.slug === slugFilter);
    if (projects.length === 0) {
      console.error(`Geen project gevonden met slug "${slugFilter}"`);
      process.exit(1);
    }
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log(`[screenshots] ${projects.length} project(en) te verwerken`);
  const browser = await chromium.launch();

  for (const project of projects) {
    const { slug, url, client: clientName } = project;
    console.log(`\n[screenshots] ${clientName} (${url})`);

    const desktopPath = path.join(OUTPUT_DIR, `${slug}-desktop.webp`);
    const mobilePath = path.join(OUTPUT_DIR, `${slug}-mobile.webp`);

    try {
      console.log(`  → Desktop screenshot…`);
      await takeScreenshot(browser, url, DESKTOP, desktopPath);
      console.log(`  ✓ ${path.relative(ROOT, desktopPath)}`);

      console.log(`  → Mobile screenshot…`);
      await takeScreenshot(browser, url, MOBILE, mobilePath);
      console.log(`  ✓ ${path.relative(ROOT, mobilePath)}`);
    } catch (err) {
      console.error(`  ✗ Fout voor ${slug}: ${err.message}`);
    }
  }

  await browser.close();
  console.log(`\n[screenshots] Klaar. Run 'pnpm portfolio:build' om data te updaten.`);
}

main().catch((err) => {
  console.error("[screenshots] Fatale fout:", err);
  process.exit(1);
});
