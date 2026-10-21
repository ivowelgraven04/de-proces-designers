#!/usr/bin/env node
/**
 * build-llms.mjs
 *
 * Schrijft client/public/llms.txt: een wegwijzer voor de crawlers van ChatGPT,
 * Perplexity en Claude.
 *
 * Wat het niet is: een ranglijst-instelling. Google doet er niets mee en er is
 * geen officiële standaard achter. Wat het wel doet is een taalmodel dat een
 * vraag over dit bureau moet beantwoorden in één bestand vertellen welke
 * pagina's het antwoord bevatten.
 *
 * Dit is een wegwijzer, geen uitdraai van de site. Daarom:
 *   - alleen pagina's die bestaan en iets voor een lezer betekenen,
 *   - geen interne templates, geen bedankpagina's, geen ruwe tekstdumps,
 *   - de kennisbank gegroepeerd per onderwerp in plaats van honderd regels
 *     achter elkaar,
 *   - alleen feiten die wij kunnen onderbouwen.
 *
 * Wordt aangeroepen tijdens `pnpm build` en `pnpm dev` (zie package.json),
 * zodat het bestand niet kan verlopen als er een artikel bij komt.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "content", "blog");
const PORTFOLIO_FILE = path.join(ROOT, "content", "portfolio", "projects.json");
const OUTPUT = path.join(ROOT, "client", "public", "llms.txt");

const SITE_URL = "https://www.deprocesdesigners.nl";

/** Frontmatter uitlezen; zelfde vorm als in build-blog.mjs. */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    const [, key, rawVal] = m;
    let val = rawVal.trim();
    if (val.startsWith("[") && val.endsWith("]")) {
      val = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else if (/^".*"$/.test(val) || /^'.*'$/.test(val)) {
      val = val.slice(1, -1);
    }
    data[key] = val;
  }
  return data;
}

function leesArtikelen() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseFrontmatter(fs.readFileSync(path.join(BLOG_DIR, f), "utf-8")))
    .filter((a) => a && a.slug && a.title)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function leesProjecten() {
  if (!fs.existsSync(PORTFOLIO_FILE)) return [];
  const data = JSON.parse(fs.readFileSync(PORTFOLIO_FILE, "utf-8"));
  return Array.isArray(data.projects) ? data.projects : [];
}

/** Eén zin, zonder regeleindes, zodat elke link op één regel past. */
function eenRegel(tekst) {
  return String(tekst ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function regel(pad, titel, uitleg) {
  const staart = uitleg ? `: ${eenRegel(uitleg)}` : "";
  return `- [${eenRegel(titel)}](${SITE_URL}${pad})${staart}`;
}

/**
 * De kennisbank per onderwerp. Een artikel heeft meerdere tags; het valt onder
 * de eerste groep die past, zodat het nergens dubbel staat. "Niche" is bewust
 * geen groep: dat is een interne tag, geen onderwerp voor een lezer.
 */
const GROEPEN = [
  { tag: "Webdesign", kop: "websites die werk opleveren" },
  { tag: "Funnels", kop: "funnels en conversie" },
  { tag: "Automatisering", kop: "marketing en automatisering" },
  { tag: "Leadgeneratie", kop: "leadgeneratie en advertenties" },
];

function groepeer(artikelen) {
  const rest = [...artikelen];
  const groepen = GROEPEN.map(({ tag, kop }) => {
    const mijn = [];
    for (let i = rest.length - 1; i >= 0; i -= 1) {
      const tags = Array.isArray(rest[i].tags) ? rest[i].tags : [];
      if (tags.includes(tag)) mijn.unshift(...rest.splice(i, 1));
    }
    return { kop, artikelen: mijn };
  }).filter((g) => g.artikelen.length > 0);
  if (rest.length) groepen.push({ kop: "overige onderwerpen", artikelen: rest });
  return groepen;
}

function bouw() {
  const artikelen = leesArtikelen();
  const projecten = leesProjecten();

  const regels = [
    "# De Proces Designers",
    "",
    "> De Proces Designers is een Nederlands marketingbureau uit Ede dat voor dakdekkers, letselschadekantoren en financieel dienstverleners websites bouwt, advertenties draait en de opvolging automatiseert. Eén aanspreekpunt, geen abonnement op losse uren.",
    "",
    "Het bureau bouwt websites die bezoekers omzetten in aanvragen, zet daar",
    "advertenties en funnels omheen en automatiseert wat daarna gebeurt. Het",
    "werkt voor een beperkt aantal branches en heeft daar eigen platforms voor",
    "gebouwd, zodat de aanpak op eigen merken is uitgeprobeerd voordat hij bij",
    "een klant wordt ingezet.",
    "",
    "## De feiten",
    "",
    "- De Proces Designers is een eenmanszaak, ingeschreven bij de KvK onder nummer 85905119, gevestigd aan Hofbeeklaan 29, 6715 EA Ede. Opgericht en gerund door Ivo Welgraven.",
    "- Werkgebied: heel Nederland. Voor webdesign zijn er aparte pagina's voor Ede, Arnhem, Nijmegen, Wageningen, Apeldoorn en Gelderland als geheel.",
    "- Branches waar het bureau zich op richt: dakdekkers en bouwbedrijven, letselschadekantoren, en boekhouders en financieel dienstverleners.",
    "- Diensten: webdesign, leadgeneratie via Meta en Google, funnels en conversieoptimalisatie, SEO, vindbaarheid in AI-zoekmachines, en marketingautomatisering.",
    "- Dezelfde onderneming voert ook de handelsnamen Wonera, LeadHuis en RechtPunt. Die platforms zijn eigen producten, geen klantopdrachten.",
    "- Contact: info@deprocesdesigners.nl.",
    `- Er staan ${artikelen.length} artikelen in de kennisbank en ${projecten.length} opgeleverde projecten in het portfolio.`,
    "",
    "## Wat wij doen",
    "",
    regel("/diensten", "Diensten", "Het volledige aanbod: leadgeneratie, funnels, automatisering, webdesign en SEO."),
    regel("/webdesign", "Webdesign", "Websites die gebouwd zijn om aanvragen op te leveren, niet om een prijs te winnen."),
    regel("/seo", "SEO", "Vindbaar worden in Google op de zoekopdrachten waar een klant koopintentie heeft."),
    regel("/seo/lokale-seo", "Lokale SEO", "Gevonden worden in de eigen regio, inclusief Google Bedrijfsprofiel."),
    regel("/beter-vindbaar-in-google", "Beter vindbaar in Google", "Wat vindbaarheid werkelijk bepaalt en in welke volgorde je het aanpakt."),
    regel("/hoe-scoor-ik-in-chatgpt", "Hoe scoor ik in ChatGPT", "Wat ervoor nodig is om genoemd te worden als iemand ChatGPT om een aanbeveling vraagt."),
    regel("/hoe-scoor-ik-in-ai", "Hoe scoor ik in AI-zoekmachines", "Vindbaarheid in AI-antwoorden: wat werkt, wat niet, en waarom het anders is dan SEO."),
    regel("/letselschade", "Marketing voor letselschadekantoren", "De aanpak voor letselschade: zaakaanvragen in plaats van losse klikken."),
    regel("/werkwijze", "Werkwijze", "Hoe een traject loopt, van eerste gesprek tot oplevering en opvolging."),
    "",
    "## Webdesign per plaats",
    "",
    regel("/webdesign-ede", "Webdesign Ede", "Websites voor bedrijven in Ede en omgeving."),
    regel("/webdesign-arnhem", "Webdesign Arnhem", "Websites voor bedrijven in Arnhem en omgeving."),
    regel("/webdesign-nijmegen", "Webdesign Nijmegen", "Websites voor bedrijven in Nijmegen en omgeving."),
    regel("/webdesign-wageningen", "Webdesign Wageningen", "Websites voor bedrijven in Wageningen en omgeving."),
    regel("/webdesign-apeldoorn", "Webdesign Apeldoorn", "Websites voor bedrijven in Apeldoorn en omgeving."),
    regel("/webdesign-gelderland", "Webdesign Gelderland", "Websites voor bedrijven in de provincie Gelderland."),
    "",
    "## Opgeleverd werk",
    "",
    regel("/portfolio", "Portfolio", "De opgeleverde projecten, per branche."),
    ...projecten.map((p) => regel(`/portfolio/${p.slug}`, p.client, p.excerpt)),
    "",
    "## Over het bureau",
    "",
    regel("/over-ons", "Over ons", "Wie erachter zit, waar het bureau vandaan komt en waar het voor kiest."),
    regel("/contact", "Contact", "Hoe je een gesprek inplant en wat je in dat gesprek kunt verwachten."),
    regel("/partners", "Partners", "Met wie het bureau samenwerkt."),
    "",
    "## Kennisbank",
    "",
    regel("/blog", "Alle artikelen", "Het volledige overzicht van de kennisbank, nieuwste eerst."),
    "",
  ];

  // Bewust H2 en geen H3: llms.txt kent alleen een H1 en daaronder secties.
  for (const groep of groepeer(artikelen)) {
    regels.push(`## Kennisbank: ${groep.kop}`, "");
    for (const a of groep.artikelen) {
      regels.push(regel(`/blog/${a.slug}`, a.title, a.excerpt));
    }
    regels.push("");
  }

  regels.push(
    "## Optional",
    "",
    regel("/privacybeleid", "Privacybeleid", "Welke gegevens worden verwerkt en hoe lang ze bewaard blijven."),
    regel("/algemene-voorwaarden", "Algemene voorwaarden", "De voorwaarden bij een opdracht."),
    "",
  );

  fs.writeFileSync(OUTPUT, regels.join("\n"), "utf-8");
  console.log(
    `[llms] llms.txt geschreven: ${artikelen.length} artikelen, ${projecten.length} projecten, ${(fs.statSync(OUTPUT).size / 1024).toFixed(1)} kB`,
  );
}

bouw();
