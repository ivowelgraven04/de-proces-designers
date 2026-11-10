#!/usr/bin/env node
/**
 * build-static-pages.mjs
 *
 * Draait na `vite build`. De site is een SPA: zonder deze stap kreeg elke
 * blog-URL de HTML van de homepage (titel, beschrijving en canonical naar /),
 * waardoor Google de artikelen niet indexeerde.
 *
 * Schrijft op basis van de gebouwde dist/public/index.html:
 *   - dist/public/blog/index.html          (/blog met eigen kop + lijst van posts)
 *   - dist/public/blog/<slug>/index.html   (per post eigen kop + artikeltekst)
 *   - dist/public/spa.html                 (fallback voor overige routes, zonder
 *                                           vaste canonical naar de homepage)
 *
 * dist/public/index.html zelf blijft ongewijzigd en houdt zijn canonical naar /.
 * Vercel serveert bestaande bestanden voor de rewrite naar spa.html (vercel.json).
 *
 * De posts komen uit client/src/content/blog-data.json, dat build-blog.mjs
 * eerder in dezelfde build maakt. Nieuwe posts van de dagelijkse GitHub Action
 * gaan dus vanzelf mee.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist", "public");
const TEMPLATE_PATH = path.join(DIST, "index.html");
const BLOG_JSON = path.join(ROOT, "client", "src", "content", "blog-data.json");

const SITE_URL = "https://www.deprocesdesigners.nl";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function absUrl(u) {
  if (!u) return DEFAULT_IMAGE;
  if (/^https?:\/\//.test(u)) return u;
  return `${SITE_URL}${u.startsWith("/") ? "" : "/"}${u}`;
}

/** JSON veilig in een <script>-blok zetten. */
function jsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

/** Vervangt het content-attribuut van een bestaande meta-tag, of voegt hem toe. */
function setMeta(html, attr, key, value) {
  const re = new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/?>`);
  const tag = `<meta ${attr}="${key}" content="${esc(value)}" />`;
  if (re.test(html)) return html.replace(re, tag);
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setHead(html, { title, description, url, image, imageAlt, ogType, robots }) {
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = setMeta(html, "name", "description", description);
  if (robots) html = setMeta(html, "name", "robots", robots);
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${esc(url)}" />`,
  );
  html = setMeta(html, "property", "og:type", ogType);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:image", image);
  html = setMeta(html, "property", "og:image:alt", imageAlt);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);
  html = setMeta(html, "name", "twitter:image", image);
  return html;
}

/**
 * Pagina-schema met id json-ld-page: useSEO() hergebruikt en vervangt precies
 * dit element zodra React draait, dus er ontstaat geen dubbel schema.
 */
function addSchema(html, schema) {
  const block = `    <script type="application/ld+json" id="json-ld-page">${jsonLd(schema)}</script>\n  </head>`;
  return html.replace("</head>", block);
}

/**
 * Statische inhoud in #root. createRoot().render() vervangt dit zodra de app
 * laadt; zonder JavaScript ziet een crawler zo toch de echte tekst.
 */
function setBody(html, inner) {
  return html.replace(/<div id="root"><\/div>/, `<div id="root">${inner}</div>`);
}

function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

function postPage(template, post) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const image = absUrl(post.heroImage);
  const title = `${post.title} | De Proces Designers`;
  const schema = [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      name: post.title,
      description: post.excerpt,
      image,
      url,
      datePublished: post.date,
      dateModified: post.date,
      inLanguage: "nl-NL",
      wordCount: String(post.content || "").trim().split(/\s+/).length,
      articleSection: post.tags?.[0],
      author: { "@type": "Organization", name: post.author, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "De Proces Designers",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      keywords: (post.tags || []).join(", "),
      about: (post.tags || []).map((t) => ({ "@type": "Thing", name: t })),
    },
  ];

  let html = setHead(template, {
    title,
    description: post.excerpt,
    url,
    image,
    imageAlt: post.heroImageAlt || post.title,
    ogType: "article",
  });
  html = setMeta(html, "property", "article:published_time", post.date);
  html = addSchema(html, schema);

  const hero = post.heroImage
    ? `<img src="${esc(image)}" alt="${esc(post.heroImageAlt || post.title)}" width="1200" height="630" />`
    : "";
  const body = `<main><article>
<nav aria-label="Kruimelpad"><a href="/">Home</a> / <a href="/blog">Blog</a></nav>
<h1>${esc(post.title)}</h1>
<p><time datetime="${esc(post.date)}">${esc(formatDate(post.date))}</time> · ${esc(post.readingTime)} min leestijd</p>
${hero}
<p>${esc(post.excerpt)}</p>
${marked.parse(String(post.content || ""))}
</article>
<p><a href="/blog">Alle artikelen</a> · <a href="/contact">Contact</a></p></main>`;
  return setBody(html, body);
}

function blogIndexPage(template, posts) {
  const url = `${SITE_URL}/blog`;
  const title =
    "Blog — Marketing & Leadgeneratie voor Lokale Ondernemers | De Proces Designers";
  const description =
    "Praktijkartikelen over leadgeneratie, webdesign en marketingautomatisering voor dakdekkers, boekhouders en lokale ondernemers. Geen theorie — wat in de praktijk werkt.";
  const schema = [
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "De Proces Designers Blog",
      url,
      description:
        "Praktijkartikelen over leadgeneratie, webdesign en marketingautomatisering voor dakdekkers, boekhouders en lokale ondernemers.",
      inLanguage: "nl-NL",
      publisher: {
        "@type": "Organization",
        name: "De Proces Designers",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.svg` },
      },
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${SITE_URL}/blog/${p.slug}`,
        datePublished: p.date,
        description: p.excerpt,
      })),
    },
  ];

  let html = setHead(template, {
    title,
    description,
    url,
    image: DEFAULT_IMAGE,
    imageAlt:
      "Blog De Proces Designers — leadgeneratie en marketing voor dakdekkers en boekhouders",
    ogType: "website",
  });
  html = addSchema(html, schema);
  const items = posts
    .map(
      (p) =>
        `<li><a href="/blog/${esc(p.slug)}">${esc(p.title)}</a> <time datetime="${esc(p.date)}">${esc(formatDate(p.date))}</time><p>${esc(p.excerpt)}</p></li>`,
    )
    .join("\n");
  const body = `<main><h1>Blog</h1><p>${esc(description)}</p><ul>
${items}
</ul></main>`;
  return setBody(html, body);
}

/** Fallback voor alle andere SPA-routes: geen vaste canonical/og:url naar de homepage. */
function spaFallback(template) {
  return template
    .replace(/\s*<!--[^>]*Canonical[^>]*-->/, "")
    .replace(/\s*<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, "")
    .replace(/\s*<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, "");
}

function write(rel, html) {
  const file = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html, "utf-8");
}

function main() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    throw new Error(`[static] ${TEMPLATE_PATH} ontbreekt; draai eerst vite build.`);
  }
  const template = fs.readFileSync(TEMPLATE_PATH, "utf-8");
  if (!/<link\s+rel="canonical"/.test(template) || !template.includes('<div id="root"></div>')) {
    throw new Error("[static] index.html mist canonical of lege #root; template veranderd?");
  }
  const { posts } = JSON.parse(fs.readFileSync(BLOG_JSON, "utf-8"));

  write("spa.html", spaFallback(template));
  write(path.join("blog", "index.html"), blogIndexPage(template, posts));
  for (const post of posts) {
    if (!/^[a-z0-9-]+$/.test(post.slug)) {
      throw new Error(`[static] ongeldige slug: ${post.slug}`);
    }
    write(path.join("blog", post.slug, "index.html"), postPage(template, post));
  }
  console.log(`[static] /blog + ${posts.length} blogpagina's + spa.html geschreven.`);
}

main();
