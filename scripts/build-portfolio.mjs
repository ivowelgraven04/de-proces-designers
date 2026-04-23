#!/usr/bin/env node
/**
 * build-portfolio.mjs
 *
 * Combineert content/portfolio/projects.json met screenshot-bestanden
 * en schrijft client/src/content/portfolio-data.json dat de frontend leest.
 *
 * Aanroep: pnpm portfolio:build
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PROJECTS_FILE = path.join(ROOT, "content", "portfolio", "projects.json");
const SCREENSHOT_DIR = path.join(ROOT, "client", "public", "portfolio");
const OUTPUT_FILE = path.join(
  ROOT,
  "client",
  "src",
  "content",
  "portfolio-data.json",
);

if (!fs.existsSync(PROJECTS_FILE)) {
  console.warn(
    `[portfolio-build] Geen projects.json — skip. (${PROJECTS_FILE})`,
  );
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify({ sectors: [], projects: [] }, null, 2),
  );
  process.exit(0);
}

const raw = JSON.parse(fs.readFileSync(PROJECTS_FILE, "utf-8"));
const sectors = raw.sectors || [];
const projects = (raw.projects || []).map((p) => {
  const desktop = `/portfolio/${p.slug}-desktop.png`;
  const mobile = `/portfolio/${p.slug}-mobile.png`;
  const desktopExists = fs.existsSync(path.join(SCREENSHOT_DIR, `${p.slug}-desktop.png`));
  const mobileExists = fs.existsSync(path.join(SCREENSHOT_DIR, `${p.slug}-mobile.png`));
  return {
    ...p,
    previewDesktop: desktopExists ? desktop : null,
    previewMobile: mobileExists ? mobile : null,
  };
});

const output = { sectors, projects };

fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));

const withScreenshots = projects.filter((p) => p.previewDesktop).length;
console.log(
  `[portfolio-build] ✓ ${projects.length} projecten (${withScreenshots} met screenshot) → ${path.relative(ROOT, OUTPUT_FILE)}`,
);
