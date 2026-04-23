#!/usr/bin/env node
/**
 * generate-post.mjs
 *
 * Volledig geautomatiseerde blog generator voor De Proces Designers.
 *
 * Flow:
 *   1. Kies een topic (van AI, checkt eerdere posts om duplicatie te vermijden)
 *   2. Schrijf artikel met Claude API (Opus 4.7)
 *   3. Haal relevante foto op via Unsplash API
 *   4. Schrijf markdown bestand naar /content/blog/
 *
 * Aanroep: `node scripts/generate-post.mjs`
 *
 * Vereiste env vars:
 *   - ANTHROPIC_API_KEY  (Anthropic console)
 *   - UNSPLASH_ACCESS_KEY (https://unsplash.com/developers)
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT_DIR = path.join(ROOT, "content", "blog");

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const BLOG_THEME_OVERRIDE = (process.env.BLOG_THEME || "").trim().toLowerCase();
const BLOG_DATE_OVERRIDE = (process.env.BLOG_DATE || "").trim();

if (!ANTHROPIC_API_KEY) {
  console.error("Missing env var: ANTHROPIC_API_KEY");
  process.exit(1);
}
if (!UNSPLASH_ACCESS_KEY) {
  console.error("Missing env var: UNSPLASH_ACCESS_KEY");
  process.exit(1);
}

const CLAUDE_MODEL = "claude-opus-4-7";

// ─── Brand context — meegegeven aan Claude ──────────────────────────────────
const BRAND_CONTEXT = `
Je schrijft voor "De Proces Designers", een Nederlandse marketingstudio die zich
specialiseert in het bouwen van geautomatiseerde leadgeneratie-systemen voor
lokale bedrijven — met name dakdekkers, letselschadekantoren en financieel
adviseurs.

Kernservices:
1. Leadgeneratie — exclusieve leads via Facebook & Instagram ads
2. Funnels & conversie — quiz funnels, landingspagina's, CRO
3. Marketing automatisering — lead nurturing, opvolging, agenda-integratie

Tone of voice:
- Professioneel maar toegankelijk, geschreven voor ondernemers (geen jargon)
- Direct en concreet — geen holle beloftes of "10 tips" lijstjes
- Praktijkgericht — gebaseerd op wat werkt in de echte wereld
- Nederlands, geschreven in de je-vorm
- Gebruik "wij" wanneer we over De Proces Designers praten

Doelgroep: eigenaren van lokale servicebedrijven (5-50 medewerkers) die serieus
willen groeien maar geen tijd hebben om zelf in marketing te duiken.
`.trim();

// ─── Thema's — per run wordt er 1 gekozen (random of via BLOG_THEME env) ────
const THEMES = {
  leadgen: {
    name: "Leadgeneratie Marketing voor lokale bedrijven",
    focus: `Facebook & Instagram Ads, Google Ads, lead funnels, quiz funnels,
targeting (lookalikes, retargeting), advertentiecopy, creatives, bidding, CPL
verlagen, lead kwaliteit verhogen, van lead naar afspraak. Alles specifiek voor
lokale servicebedrijven (dakdekkers, letselschade, financieel advies, installateurs,
horeca, etc.) — niet e-commerce of SaaS.`,
    angleHints: [
      "Waarom lokale leads anders zijn dan online-only leads",
      "De hook-formule die werkt voor servicebedrijven",
      "Targeting-fouten die budget weglopen kosten",
      "Van lead naar klantgesprek binnen 24 uur",
      "Waarom je CPL eigenlijk niets zegt",
      "Quiz funnels vs. directe formulieren",
      "Creatives die werken in 2026 voor lokale niches",
    ],
    tagHint: "Leadgeneratie",
  },
  webdesign: {
    name: "Webdesign voor lokale bedrijven",
    focus: `Landingspagina's, homepage-structuur, UX, mobile-first design, laadsnelheid,
copy, call-to-actions, formulieren, trust-elementen, reviews-integratie, conversie-
optimalisatie, visuele hiërarchie, navigatie. Alles in de context van websites voor
lokale servicebedrijven — geen webshops of SaaS-productpagina's.`,
    angleHints: [
      "Waarom je homepage geen landingspagina is",
      "De 3-seconden regel op mobile",
      "Formulieren die wel worden ingevuld",
      "Trust-elementen die conversie verdubbelen",
      "Waarom meer tekst soms beter converteert",
      "Call-to-actions voor servicebedrijven",
      "Snelheid: hoe 1 seconde je omzet kost",
      "Hoe je reviews inzet zonder te overdrijven",
    ],
    tagHint: "Webdesign",
  },
  automations: {
    name: "Automatisering voor lokale bedrijven",
    focus: `CRM-integraties (HubSpot, Pipedrive, Salesforce), e-mail flows, WhatsApp
automatisering, afsprakenbots, agenda-koppelingen (Calendly, Google Agenda),
no-code tools (Zapier, Make, n8n), review-automatisering, lead-opvolging,
nurturing sequences. Focus op tijd besparen en leads niet laten vallen — voor
lokale servicebedrijven.`,
    angleHints: [
      "Hoe je leads automatisch opvolgt zonder creepy te zijn",
      "WhatsApp automatisering voor afspraak-booking",
      "CRM koppelen aan je advertentieplatform",
      "Automatisch reviews ophalen na een klus",
      "De 5-minuten regel voor lead response",
      "Zapier vs. Make vs. n8n voor lokale bedrijven",
      "E-mail flows die wél geopend worden",
      "Agenda-integratie: geen dubbele afspraken meer",
    ],
    tagHint: "Automatisering",
  },
};

function pickTheme() {
  if (BLOG_THEME_OVERRIDE && THEMES[BLOG_THEME_OVERRIDE]) {
    return { key: BLOG_THEME_OVERRIDE, ...THEMES[BLOG_THEME_OVERRIDE] };
  }
  if (BLOG_THEME_OVERRIDE) {
    console.warn(
      `[blog-gen] Onbekend thema "${BLOG_THEME_OVERRIDE}" — kies willekeurig uit ${Object.keys(THEMES).join(", ")}`,
    );
  }
  const keys = Object.keys(THEMES);
  const key = keys[Math.floor(Math.random() * keys.length)];
  return { key, ...THEMES[key] };
}

// ─── Topic pools per lengte/type ────────────────────────────────────────────
// D2 uit het plan: mix korte tips (~500w) en diepgaande guides (~2000w)
const POST_TYPES = [
  {
    type: "tip",
    weight: 2, // vaker dan guides
    wordCount: "500-700",
    description:
      "Korte, direct toepasbare tip. Eén specifiek probleem, één concrete oplossing. Geen uitgebreide intro — direct de waarde.",
  },
  {
    type: "guide",
    weight: 1,
    wordCount: "1600-2200",
    description:
      "Diepgaande guide over een onderwerp. Structuur: situatie-schets → waarom het misgaat → onze aanpak (stap voor stap) → concrete voorbeelden → hoe je begint. Gebruik H2 koppen om secties te scheiden.",
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────
function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function getExistingPosts() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, f), "utf-8");
      const titleMatch = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m);
      const slugMatch = raw.match(/^slug:\s*["']?(.+?)["']?\s*$/m);
      return {
        title: titleMatch?.[1] ?? f,
        slug: slugMatch?.[1] ?? f.replace(/\.md$/, ""),
      };
    });
}

function pickWeightedType() {
  const total = POST_TYPES.reduce((a, b) => a + b.weight, 0);
  let r = Math.random() * total;
  for (const t of POST_TYPES) {
    r -= t.weight;
    if (r <= 0) return t;
  }
  return POST_TYPES[0];
}

// ─── Claude API call ────────────────────────────────────────────────────────
async function callClaude(systemPrompt, userPrompt, { maxTokens = 6000 } = {}) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Claude API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.content[0].text;
}

// ─── Topic genereren ────────────────────────────────────────────────────────
async function generateTopic(postType, theme) {
  const existing = getExistingPosts();
  const existingList =
    existing.length > 0
      ? existing.map((p) => `- ${p.title}`).join("\n")
      : "(nog geen posts)";

  const systemPrompt = `${BRAND_CONTEXT}

THEMA VOOR DEZE POST: ${theme.name}
FOCUS-GEBIED (blijf hier binnen):
${theme.focus}

Je taak: verzin een concreet, waardevol onderwerp dat STRIKT binnen dit thema
valt. Het onderwerp moet voor de doelgroep direct herkenbaar zijn ("oh ja, dát
is bij mij ook een probleem"). NIET: algemene marketingadviezen of onderwerpen
die buiten dit thema vallen.`;

  const userPrompt = `Verzin één specifiek blog-onderwerp voor een ${
    postType.type === "tip" ? "korte tip (500-700 woorden)" : "diepgaande guide (1600-2200 woorden)"
  }.

Het thema is: **${theme.name}**.

Voorbeelden van invalshoeken binnen dit thema (ter inspiratie — verzin iets nieuws):
${theme.angleHints.map((h) => `- ${h}`).join("\n")}

Al gepubliceerde artikelen (VERMIJD duplicatie, ook qua invalshoek):
${existingList}

Geef terug als **strict JSON** (geen markdown, geen uitleg eromheen):
{
  "title": "De titel van het artikel (max 70 tekens, pakkend, geen clickbait)",
  "angle": "Eén zin die de invalshoek samenvat — wat maakt dit artikel waardevol?",
  "keyPoints": ["3-5 kernpunten die in het artikel moeten komen"],
  "unsplashQuery": "2-3 Engelse zoekwoorden voor een passende header foto (bv. 'business meeting', 'team strategy', 'construction roof'). Vermijd cliché stockfoto's — kies iets dat bij de inhoud past."
}`;

  const response = await callClaude(systemPrompt, userPrompt, { maxTokens: 800 });

  // Strip markdown code fences if aanwezig
  const cleaned = response
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/, "")
    .replace(/```\s*$/, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error(`Kon topic JSON niet parsen: ${cleaned}`);
  }
}

// ─── Artikel genereren ──────────────────────────────────────────────────────
async function generateArticle(topic, postType) {
  const systemPrompt = `${BRAND_CONTEXT}

Schrijfregels:
- Gebruik Markdown (## voor H2, ### voor H3, **bold**, lijsten met -, nummered met 1.)
- GEEN H1 (# titel) — de titel wordt apart bovenaan geplaatst
- Begin direct met inhoud (geen "In dit artikel bespreken we..." of samenvatting vooraf)
- Gebruik concrete voorbeelden uit de niches (dakdekkers, letselschade, financieel advies)
- Schrijf natuurlijk Nederlands — geen Engels jargon tenzij het gangbaar is
- Bij een ${postType.type === "tip" ? "tip" : "guide"}: houd ${postType.wordCount} woorden aan
- Sluit af met een regel die doorverwijst naar een gratis strategiegesprek — subtiel, niet pushy
- ${postType.description}`;

  const userPrompt = `Schrijf het volledige artikel.

TITEL: ${topic.title}
INVALSHOEK: ${topic.angle}
KERNPUNTEN DIE EROP IN MOETEN:
${topic.keyPoints.map((p) => `- ${p}`).join("\n")}

Geef ALLEEN de markdown body terug (zonder frontmatter, zonder H1 titel, zonder
uitleg over wat je gaat doen — direct de inhoud).`;

  const body = await callClaude(systemPrompt, userPrompt, {
    maxTokens: postType.type === "tip" ? 3000 : 7000,
  });

  return body.trim();
}

// ─── Excerpt genereren ──────────────────────────────────────────────────────
async function generateExcerpt(title, body) {
  const systemPrompt = `${BRAND_CONTEXT}

Je taak: schrijf een korte excerpt (2 zinnen, max 220 tekens) die:
- Kort samenvat waar het artikel over gaat
- De lezer nieuwsgierig maakt
- Geen clickbait is`;

  const userPrompt = `Titel: ${title}

Eerste deel van het artikel:
${body.slice(0, 1500)}

Geef terug: alleen de excerpt tekst, geen aanhalingstekens eromheen.`;

  const excerpt = await callClaude(systemPrompt, userPrompt, { maxTokens: 300 });
  return excerpt.trim().replace(/^["']|["']$/g, "");
}

// ─── Unsplash fetch ─────────────────────────────────────────────────────────
async function fetchUnsplashImage(query) {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    query,
  )}&per_page=10&orientation=landscape&content_filter=high`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      "Accept-Version": "v1",
    },
  });

  if (!res.ok) {
    throw new Error(`Unsplash API error ${res.status}`);
  }

  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error(`Geen Unsplash resultaten voor query: ${query}`);
  }

  // Kies willekeurige uit top 10 voor variatie
  const pick = data.results[Math.floor(Math.random() * Math.min(5, data.results.length))];

  // Trigger download event (Unsplash API requirement voor compliance)
  try {
    await fetch(pick.links.download_location, {
      headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
    });
  } catch {
    /* niet fataal */
  }

  return {
    url: `${pick.urls.raw}&w=1600&q=80&fm=jpg&fit=crop`,
    alt: pick.alt_description || pick.description || query,
    credit: `Foto door ${pick.user.name} op Unsplash`,
  };
}

// ─── Hoofd flow ─────────────────────────────────────────────────────────────
async function main() {
  console.log("[blog-gen] Start generator");

  const theme = pickTheme();
  console.log(`[blog-gen] Thema: ${theme.name} (${theme.key})`);

  const postType = pickWeightedType();
  console.log(`[blog-gen] Type gekozen: ${postType.type} (${postType.wordCount} woorden)`);

  console.log("[blog-gen] Topic genereren…");
  const topic = await generateTopic(postType, theme);
  console.log(`[blog-gen] Topic: ${topic.title}`);

  console.log("[blog-gen] Artikel schrijven…");
  const body = await generateArticle(topic, postType);
  const wordCount = body.split(/\s+/).length;
  console.log(`[blog-gen] Artikel geschreven: ~${wordCount} woorden`);

  console.log("[blog-gen] Excerpt genereren…");
  const excerpt = await generateExcerpt(topic.title, body);

  console.log(`[blog-gen] Unsplash zoeken op: "${topic.unsplashQuery}"`);
  const image = await fetchUnsplashImage(topic.unsplashQuery);

  // Bepaal slug (unique)
  let slug = slugify(topic.title);
  const existing = new Set(getExistingPosts().map((p) => p.slug));
  if (existing.has(slug)) {
    slug = `${slug}-${Date.now().toString(36).slice(-4)}`;
  }

  // Datum: BLOG_DATE override (voor backdated posts) of vandaag
  let postDate = new Date().toISOString().slice(0, 10);
  if (BLOG_DATE_OVERRIDE) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(BLOG_DATE_OVERRIDE)) {
      postDate = BLOG_DATE_OVERRIDE;
      console.log(`[blog-gen] Datum override: ${postDate}`);
    } else {
      console.warn(
        `[blog-gen] BLOG_DATE="${BLOG_DATE_OVERRIDE}" is geen YYYY-MM-DD — val terug op vandaag (${postDate})`,
      );
    }
  }

  const readingTime = Math.max(1, Math.round(wordCount / 220));

  // Tag-bepaling: eerste tag komt altijd uit thema, extra tags uit contentmatching
  const contentTags = determineTagsFromContent(topic.title + " " + body);
  const tags = [theme.tagHint, ...contentTags.filter((t) => t !== theme.tagHint)].slice(0, 3);

  const frontmatter = `---
title: "${escapeYaml(topic.title)}"
slug: "${slug}"
date: "${postDate}"
excerpt: "${escapeYaml(excerpt)}"
heroImage: "${image.url}"
heroImageAlt: "${escapeYaml(image.alt)}"
heroImageCredit: "${escapeYaml(image.credit)}"
tags: [${tags.map((t) => `"${t}"`).join(", ")}]
readingTime: ${readingTime}
author: "De Proces Designers"
---

${body}
`;

  const filepath = path.join(CONTENT_DIR, `${slug}.md`);
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(filepath, frontmatter, "utf-8");

  console.log(`[blog-gen] ✓ Post geschreven: ${path.relative(ROOT, filepath)}`);
  console.log(`[blog-gen] ✓ Titel:   ${topic.title}`);
  console.log(`[blog-gen] ✓ Thema:   ${theme.name}`);
  console.log(`[blog-gen] ✓ Datum:   ${postDate}`);
  console.log(`[blog-gen] ✓ Type:    ${postType.type} (${wordCount} woorden, ${readingTime} min)`);
  console.log(`[blog-gen] ✓ Tags:    ${tags.join(", ")}`);
}

function escapeYaml(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function determineTagsFromContent(text) {
  const lower = text.toLowerCase();
  const tags = [];
  if (/\b(lead|meta|facebook|instagram|ads?)\b/.test(lower)) tags.push("Leadgeneratie");
  if (/\b(funnel|convers|landings|quiz)\b/.test(lower)) tags.push("Funnels");
  if (/\b(automati|crm|opvolg|nurtur)\b/.test(lower)) tags.push("Automatisering");
  if (/\b(dakdekker|dakwerk|letselschade|financieel adviseur)\b/.test(lower))
    tags.push("Niche");
  if (tags.length === 0) tags.push("Marketing");
  return tags.slice(0, 3);
}

main().catch((err) => {
  console.error("[blog-gen] Fout:", err);
  process.exit(1);
});
