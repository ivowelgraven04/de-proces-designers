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
const STEDEN_FILE = path.join(ROOT, "client", "src", "pages", "WebdesignStad.tsx");
const LINKPARTNERS_FILE = path.join(ROOT, "client", "src", "pages", "Linkpartners.tsx");

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
        sector: data.sector || null,
        postType: data.postType || null,
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

/**
 * De stadspagina's komen uit de STEDEN-tabel in WebdesignStad.tsx en de
 * linkpartners uit Linkpartners.tsx. Bewust uitlezen in plaats van hier
 * overtikken: deze pagina's stonden eerder niet in de sitemap, en een
 * tweede lijst die je met de hand moet bijwerken loopt opnieuw achter.
 */
function leesSlugs(bestand, patroon) {
  if (!fs.existsSync(bestand)) {
    console.warn(`[sitemap] bronbestand niet gevonden: ${bestand}`);
    return [];
  }
  const inhoud = fs.readFileSync(bestand, "utf-8");
  return [...new Set([...inhoud.matchAll(patroon)].map((m) => m[1]))];
}

function buildSitemap(posts) {
  // Alleen indexable & SEO-waardevolle pagina's in de sitemap.
  // /privacybeleid en /algemene-voorwaarden staan op noindex (zie pages/*.tsx)
  // en horen daarom NIET in de sitemap — anders krijg je conflict-signalen in
  // Google Search Console ("Submitted URL marked 'noindex'").
  const staticPages = [
    { loc: "/", priority: "1.0", changefreq: "weekly" },
    { loc: "/diensten", priority: "0.9", changefreq: "monthly" },
    { loc: "/letselschade", priority: "0.9", changefreq: "monthly" },
    { loc: "/over-ons", priority: "0.7", changefreq: "monthly" },
    { loc: "/werkwijze", priority: "0.8", changefreq: "monthly" },
    { loc: "/partners", priority: "0.7", changefreq: "monthly" },
    { loc: "/portfolio", priority: "0.8", changefreq: "monthly" },
    { loc: "/contact", priority: "0.8", changefreq: "monthly" },
    { loc: "/blog", priority: "0.8", changefreq: "weekly" },
    // Dienstpagina's. Deze stonden hier niet in, waardoor ze bij elke build uit
    // de sitemap verdwenen terwijl ze wel live en indexeerbaar zijn.
    { loc: "/webdesign", priority: "0.9", changefreq: "monthly" },
    { loc: "/seo", priority: "0.9", changefreq: "monthly" },
    { loc: "/seo/lokale-seo", priority: "0.8", changefreq: "monthly" },
    { loc: "/beter-vindbaar-in-google", priority: "0.8", changefreq: "monthly" },
    { loc: "/hoe-scoor-ik-in-chatgpt", priority: "0.8", changefreq: "monthly" },
    { loc: "/hoe-scoor-ik-in-ai", priority: "0.8", changefreq: "monthly" },
    { loc: "/linkpartners", priority: "0.5", changefreq: "monthly" },
    ...leesSlugs(STEDEN_FILE, /"(webdesign-[a-z-]+)":\s*\{/g).map((slug) => ({
      loc: `/${slug}`,
      priority: "0.8",
      changefreq: "monthly",
    })),
    ...leesSlugs(LINKPARTNERS_FILE, /\bslug:\s*"([a-z0-9-]+)"/g).map((slug) => ({
      loc: `/linkpartners/${slug}`,
      priority: "0.4",
      changefreq: "monthly",
    })),
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
    .map((p) => {
      const heroUrl = p.heroImage
        ? p.heroImage.startsWith("http")
          ? p.heroImage
          : `${SITE_URL}${p.heroImage.startsWith("/") ? "" : "/"}${p.heroImage}`
        : `${SITE_URL}/og-image.png`;
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid>${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt)}</description>
      <content:encoded><![CDATA[${heroUrl}]]></content:encoded>
      <enclosure url="${escapeXml(heroUrl)}" type="image/jpeg" />
      <media:thumbnail url="${escapeXml(heroUrl)}" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:content="http://purl.org/rss/1.0/modules/content/">
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
