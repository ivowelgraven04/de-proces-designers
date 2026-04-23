# Automated Blog Setup

Dit project heeft een volledig geautomatiseerde blog die **3x per week** (ma/wo/vr om 08:00) een nieuwe post publiceert. Claude schrijft het artikel, Unsplash levert de header-foto, GitHub Actions commit het naar de repo, en Vercel deployt automatisch.

## Hoe het werkt

```
Cron (GH Actions, ma/wo/vr 08:00)
  ↓
scripts/generate-post.mjs
  ├─ Claude API → verzint topic + schrijft artikel (~500w tip of ~2000w guide)
  ├─ Unsplash API → haalt passende header-foto op
  └─ Schrijft markdown naar /content/blog/<slug>.md
  ↓
git commit + push
  ↓
Vercel deploy (automatisch)
  ↓
Artikel live op /blog/<slug>
```

## Eenmalige setup (±5 minuten)

### 1. Anthropic API key

Je hebt er waarschijnlijk al een. Anders:

1. Ga naar https://console.anthropic.com/settings/keys
2. "Create Key" → kopieer de key (begint met `sk-ant-…`)

### 2. Unsplash API key

1. Ga naar https://unsplash.com/developers
2. "Register as a developer" → nieuwe app aanmaken
3. Kopieer de **Access Key**
4. De gratis tier geeft 50 requests/uur — ruim voldoende voor 3 posts/week

### 3. Secrets toevoegen aan GitHub

In je GitHub repo:

1. **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** → voeg deze twee toe:
   - Naam: `ANTHROPIC_API_KEY`   — Value: je Anthropic key
   - Naam: `UNSPLASH_ACCESS_KEY` — Value: je Unsplash access key

### 4. Workflow permissions

In je GitHub repo:

1. **Settings** → **Actions** → **General**
2. Scroll naar "Workflow permissions"
3. Zet op **"Read and write permissions"** (zodat de bot kan committen)
4. Save

### 5. Klaar

De workflow draait automatisch volgens schema. Je kunt ook handmatig triggeren:

1. **Actions** tab → **Generate Blog Post** → **Run workflow**

## Lokaal testen

```bash
# Zet env vars (of gebruik een .env file, zie .gitignore)
export ANTHROPIC_API_KEY="sk-ant-..."
export UNSPLASH_ACCESS_KEY="..."

# Genereer een test-post
pnpm blog:generate

# Bouw de index + sitemap + RSS
pnpm blog:build

# Run dev server en check /blog
pnpm dev
```

## Handmatig een post schrijven

Niet elk artikel hoeft AI te zijn. Wil je zelf iets schrijven?

1. Maak een nieuw bestand `content/blog/mijn-slug.md`
2. Kopieer de frontmatter-structuur van een bestaande post
3. Commit en push → Vercel deployt

## Kosten

| Dienst | Per post | Per maand (12 posts) |
|---|---|---|
| Claude API (Opus 4.7) | ~€0,40 | ~€5 |
| Unsplash | gratis | gratis |
| GitHub Actions | gratis (binnen free tier) | gratis |
| **Totaal** | | **±€5/maand** |

## Een post verwijderen

Delete het bestand in `content/blog/` en push. Bij de volgende build worden sitemap + RSS automatisch bijgewerkt.

## Stoppen / pauzeren

Om de cron tijdelijk uit te zetten:

1. **Actions** tab → **Generate Blog Post** → **⋯** → **Disable workflow**

Om helemaal te stoppen: verwijder `.github/workflows/blog-cron.yml`.

## Structuur

```
content/blog/            ← Markdown bron (AI + handgeschreven posts)
scripts/
  build-blog.mjs         ← Bouwt blog-data.json + sitemap + RSS bij elke build
  generate-post.mjs      ← De AI generator (Claude + Unsplash)
client/src/
  content/blog-data.json ← Auto-gegenereerd (gitignored)
  lib/blog.ts            ← Types + helpers
  pages/Blog.tsx         ← Index pagina (/blog)
  pages/BlogPost.tsx     ← Detail pagina (/blog/:slug)
.github/workflows/
  blog-cron.yml          ← De cron job
```

## Troubleshooting

**Workflow faalt met "Resource not accessible by integration"**
→ Workflow permissions staan niet op "Read and write". Zie stap 4 hierboven.

**Claude returns onjuiste JSON**
→ Kan incidenteel — de workflow faalt en probeert bij de volgende cron opnieuw. Geen actie nodig.

**Unsplash returns 403**
→ Access key is verlopen of rate limit bereikt (50/uur). Check https://unsplash.com/oauth/applications.

**Post ziet er stylematisch raar uit**
→ Controleer of de markdown valide is. Claude gebruikt soms ongebruikelijke syntax. Je kunt de `.md` in `/content/blog/` direct editen en pushen.
