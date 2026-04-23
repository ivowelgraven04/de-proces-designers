#!/usr/bin/env node
/**
 * build-blog.mjs
 *
 * Leest alle markdown bestanden in /content/blog/, parsed frontmatter + body,
 * en schrijft:
 *   - client/src/content/blog-data.json   (volledige lijst incl. content body)
 *   - client/public/sitemap.xml           (opnieuw gegenereerd met blog-URLs)
 *   - client/public/rss.xml               (RSS feed)
 *
 * Wordt aangeroepen tijdens `pnpm build` (zie package.json).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "content", "blog");
const OUTPUT_JSON = path.join(ROOT, "client", "src", "content", "blog-data.json");
const PUBLIC_DIR = path.join(ROOT, "client", "public");
const SITEMAP_PATH = path.join(PUBLIC_DIR, "sitemap.xml");
const RSS_PATH = path.join(PUBLIC_DIR, "rss.xml");
const PORTFOLIO_FILE = path.join(ROOT, "content", "portfolio", "projects.json");

const SITE_URL = "https://www.deprocesdesigners.nl";

// ─── Frontmatter parser ─────────────────────────────────────────────────────
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Bestand mist geldige frontmatter (--- blok bovenaan).");
  }
  const [, fmBlock, body] = match;
  const data = {};
  const lines = fmBlock.split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    const [, key, rawVal] = m;
    let val = rawVal.trim();
    // Array: [a, b, c] of ["a","b","c"]
    if (val.startsWith("[") && val.endsWith("]")) {
      val = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else if (val.startsWith('"') && val.endsWith('"')) {
      val = val.slice(1, -1);
    } else if (val.startsWith("'") && val.endsWith("'")) {
      val = val.slice(1, -1);
    } else if (/^\d+$/.test(val)) {
      val = parseInt(val, 10);
    }
    data[key] = val;
  }
  return { data, body: body.trim() };
}

// ─── Read alle posts ────────────────────────────────────────────────────────
function readAllPosts() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.warn(`[blog] content dir niet gevonden: ${CONTENT_DIR}`);
    return [];
  }
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));
  const posts = [];
  for (const file of files) {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    try {
      const { data, body } = parseFrontmatter(raw);
      const required = ["title", "slug", "date", "excerpt"];
      for (const key of required) {
        if (!data[key]) {
          throw new Error(`Missing required frontmatter '${key}' in ${file}`);
        }
      }
      posts.push({
        title: data.title,
        slug: data.slug,
        date: data.date,
        excerpt: data.excerpt,
        heroImage: data.heroImage || "",
        heroImageAlt: data.heroImageAlt || data.title,
        heroImageCredit: data.heroImageCredit || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        readingTime: data.readingTime || estimateReadingTime(body),
        author: data.author || "De Proces Designers",
        content: body,
      });
    } catch (err) {
      console.error(`[blog] Fout in ${file}:`, err.message);
      throw err;
    }
  }
  // Nieuwste eerst
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

function estimateReadingTime(text) {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

// ─── Sitemap genereren ──────────────────────────────────────────────────────
function readPortfolioProjects() {
  if (!fs.existsSync(PORTFOLIO_FILE)) return [];
  try {
    const raw = JSON.parse(fs.readFileSync(PORTFOLIO_FILE, "utf-8"));
    return raw.projects || [];
  } catch {
    return [];
  }
}

function buildSitemap(posts) {
  const staticPages = [
    { loc: "/", priority: "1.0", changefreq: "weekly" },
    { loc: "/diensten", priority: "0.9", changefreq: "monthly" },
    { loc: "/over-ons", priority: "0.8", changefreq: "monthly" },
    { loc: "/werkwijze", priority: "0.8", changefreq: "monthly" },
    { loc: "/partners", priority: "0.7", changefreq: "monthly" },
    { loc: "/portfolio", priority: "0.8", changefreq: "weekly" },
    { loc: "/contact", priority: "0.9", changefreq: "monthly" },
    { loc: "/blog", priority: "0.8", changefreq: "daily" },
    { loc: "/privacybeleid", priority: "0.3", changefreq: "yearly" },
    { loc: "/algemene-voorwaarden", priority: "0.3", changefreq: "yearly" },
  ];
  const today = new Date().toISOString().slice(0, 10);
  const portfolioProjects = readPortfolioProjects();

  const urls = [
    ...staticPages.map(
      (p) => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
    ),
    ...portfolioProjects.map(
      (p) => `  <url>
    <loc>${SITE_URL}/portfolio/${p.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    ),
    ...posts.map(
      (p) => `  <url>
    <loc>${SITE_URL}/blog/${p.slug}</loc>
    <lastmod>${p.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
  fs.writeFileSync(SITEMAP_PATH, xml, "utf-8");
}

// ─── RSS genereren ──────────────────────────────────────────────────────────
function buildRss(posts) {
  const items = posts
    .slice(0, 20)
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid>${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>De Proces Designers — Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Inzichten over leadgeneratie, funnels en marketing automatisering.</description>
    <language>nl-NL</language>
${items}
  </channel>
</rss>
`;
  fs.writeFileSync(RSS_PATH, xml, "utf-8");
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// ─── Main ───────────────────────────────────────────────────────────────────
function main() {
  const posts = readAllPosts();
  fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify({ posts }, null, 2), "utf-8");
  buildSitemap(posts);
  buildRss(posts);
  console.log(`[blog] ${posts.length} posts verwerkt.`);
  console.log(`[blog] → ${path.relative(ROOT, OUTPUT_JSON)}`);
  console.log(`[blog] → ${path.relative(ROOT, SITEMAP_PATH)}`);
  console.log(`[blog] → ${path.relative(ROOT, RSS_PATH)}`);
}

main();
