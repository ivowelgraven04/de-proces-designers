# SEO Checklist & Roadmap — De Proces Designers

> Levend document. Bijgehouden vanaf de eerste SEO-sessie op **20-05-2026**.
> Doel: in 3–6 maanden ranken voor target-keywords rond **dakdekkers** en **boekhouders/financieel dienstverleners**, plus brand-defense voor "de procesdesigners".

---

## 1. Wat in deze sessie is gefixt ✅

### 1.1 Technisch SEO-foundation (commit-ready)
- **`client/index.html`**
  - Titel ingekort + keyword-targeting voor dakdekkers & boekhouders
  - `<meta name="keywords">` weggehaald (legacy, geen waarde)
  - `<meta name="robots">` op `index, follow, max-image-preview:large, max-snippet:-1`
  - **GSC verificatie placeholder** toegevoegd (`google-site-verification`)
  - **GA4 placeholder** toegevoegd (`gtag.js` met `G-XXXXXXXXXX`)
  - JSON-LD verrijkt: `ProfessionalService + LocalBusiness + Organization` in `@graph`, met:
    - Adres Ede + provincie Gelderland + postcode 6711
    - `geo` coördinaten
    - `areaServed` voor 5 provincies
    - `knowsAbout` met 11 dakdekker/boekhouder-relevante topics
    - `hasOfferCatalog` met 5 services (was 3) — apart per niche
    - `alternateName` met "De Procesdesigners", "DPD", "Proces Designers" (brand defense)

### 1.2 Per-pagina SEO (`useSEO` op iedere route)
- **`client/src/hooks/useSEO.ts`** uitgebreid met:
  - `index: boolean` (noindex support)
  - `ogType` (article/website/profile)
  - `imageAlt` voor og:image:alt
  - `breadcrumb()` helper voor BreadcrumbList JSON-LD
  - Cleanup bij route-wissel (schema's blijven niet plakken)
- Alle 13 pagina's hebben nu **unieke title + description + canonical**:
  - `/` Home — focus dakdekkers & boekhouders
  - `/diensten` — uitgebreid Service-schema met 5 offers
  - `/over-ons` — "marketingbureau in Ede"
  - `/werkwijze` — FAQPage-schema uitgebreid met boekhouder-vraag
  - `/contact` — ContactPage-schema met adres Ede
  - `/partners` — "Klanten & Cases — Dakdekkers, Boekhouders & Lokale Bedrijven"
  - `/portfolio` — "Websites voor Dakdekkers, Boekhouders & Lokale Bedrijven"
  - `/blog` — verrijkt Blog-schema, breadcrumb
  - `/blog/:slug` — BlogPosting + breadcrumb + article OG-type + wordCount + keywords
  - `/portfolio/:slug` — CreativeWork + breadcrumb + sector-keywords
  - `/privacybeleid` — **noindex** (geen ranking-waarde)
  - `/algemene-voorwaarden` — **noindex**
  - `/404` — **noindex** + NL-vertaling van Engelse tekst

### 1.3 Sitemap & robots
- **`client/public/sitemap.xml`** geregenereerd (42 URLs)
  - `/privacybeleid` en `/algemene-voorwaarden` eruit (zaten op noindex → conflict)
  - `changefreq: "daily"` voor `/blog` → `"weekly"` (realistisch)
  - Alle 24 blogposts + 10 portfolio cases erin
- **`scripts/build-blog.mjs`** aangepast zodat dit elke build correct gebeurt
- **`client/public/robots.txt`** verfijnd:
  - Disallow `/privacybeleid`, `/algemene-voorwaarden`, `/404`
  - Expliciete `Allow: /` voor GPTBot, ChatGPT-User, PerplexityBot, Google-Extended, ClaudeBot
    (AI-zoekmachines geven voorrang aan sites die ze expliciet toelaten)

### 1.4 Bevestigde build
```
pnpm build → ✓ built in 6.4s
- Title in geserveerde HTML: ✓
- Description: ✓
- robots: ✓
- google-site-verification placeholder: ✓
- GA4 placeholder: ✓
- Schema met adres Ede: ✓
- Sitemap: 42 URLs ✓
```

---

## 2. Wat JIJ nog moet doen (in deze volgorde)

### 2.1 🚨 KRITIEK — Vóór de eerste deploy
1. **Google Search Console verificatie-token plakken**
   - Ga naar https://search.google.com/search-console
   - "Add property" → kies "URL prefix" → `https://www.deprocesdesigners.nl/`
   - Kies verificatiemethode "HTML tag"
   - Kopieer alleen het **content="…"** gedeelte
   - In `client/index.html` regel met `google-site-verification`: vervang `REPLACE_WITH_GSC_VERIFICATION_TOKEN`
   - Push & deploy
   - In GSC: klik "Verify"

2. **Google Analytics 4 Measurement ID plakken**
   - Ga naar https://analytics.google.com → Admin → Data Streams → web stream voor deprocesdesigners.nl
   - Kopieer het **Measurement ID** (formaat: `G-XXXXXXXXXX`)
   - In `client/index.html`: vervang BEIDE voorkomens van `G-XXXXXXXXXX` met je echte ID
     - Eén in de `<script async src="…gtag/js?id=…">`
     - Eén in `gtag('config', '…', { … })`

3. **Sitemap submitten in GSC**
   - GSC → Sitemaps → "Add a new sitemap" → typ `sitemap.xml` → Submit
   - GSC zal binnen ~24h beginnen met crawlen

### 2.2 🔥 HOOG — Binnen 1 week
4. **Google Business Profile controleren / verrijken**
   - Check op https://www.google.com/business
   - Verifieer dat de naam exact "De Proces Designers" is
   - **Adres**: vul de exacte straat + huisnummer in (ik heb in schema alleen "Ede" + postcode "6711" — pas dit aan als jouw postcode anders is, in `client/index.html`)
   - **Categorieën**: Marketing Agency + Website Designer + Advertising Agency
   - **Diensten**: voeg apart toe voor dakdekkers + boekhouders + financieel
   - **Werkgebied**: vink "Gelderland", "Utrecht", "Noord-Holland", etc.
   - **Foto's**: minimaal 10 (logo, kantoor, team, work samples)
   - Vraag klanten om reviews (richt op `+5 reviews per maand`)

5. **Oude `nl.deprocesdesigners.nl` URLs uit Google halen**
   - Bevestigd dat het subdomein dood is (DNS bestaat niet meer)
   - Maar Google heeft nog steeds 3 oude URLs geïndexeerd:
     - `nl.deprocesdesigners.nl/home`
     - `nl.deprocesdesigners.nl/onze-diensten`
     - `nl.deprocesdesigners.nl/over-ons`
   - **Actie**: In GSC → "Removals" → "New Request" → "Remove all URLs with this prefix" → `https://nl.deprocesdesigners.nl/`
   - Tussentijdse oplossing als je controle hebt over DNS: voeg een DNS-record toe voor `nl` subdomein dat een 301-redirect doet naar `https://www.deprocesdesigners.nl/$path`

### 2.3 📈 MEDIUM — Binnen 1 maand
6. **Bing Webmaster Tools** — importeer GSC-data in 1 klik op https://www.bing.com/webmasters
7. **Schema Validator** — test elke pagina-type op https://validator.schema.org/
8. **Rich Results Test** — test specifiek de FAQPage (werkwijze) en BlogPosting op https://search.google.com/test/rich-results

### 2.4 🎯 STRATEGISCH — Volgende sessie(s)
Zie sectie 4.

---

## 3. Bekende beperkingen (binnen huidige scope)

### 3.1 HTTP 404-status werkt niet correct
- **Probleem**: alle niet-bestaande URLs (`/dit-bestaat-niet`) geven HTTP **200 OK** ipv 404, omdat Vercel rewrite `/(.*)` → `/index.html` doet (nodig voor SPA-routing).
- **Wat we wél hebben gedaan**: NotFound-pagina zet `noindex` client-side + `Disallow: /404` in robots.txt + canonical naar de foute URL.
- **Echte fix vereist**: óf SSR/SSG (structurele wijziging, buiten scope), óf een list van valid routes in `vercel.json` met `status: 404` voor catch-all. Voorstel voor volgende sessie.

### 3.2 React SPA zonder Server-Side Rendering
- **Probleem**: Google moet JavaScript renderen om titles/content/H1's te zien. Dit lukt wel, maar:
  - Vertraging van dagen tot weken voor (her)indexering
  - Veel crawl-budget per pagina
  - Bing en social previews zien alleen de defaults uit `client/index.html`
- **Wat we wél hebben gedaan**: de defaults in `client/index.html` zijn nu sterke targets voor de homepage. Per-route SEO werkt client-side via `useSEO`.
- **Echte fix**: switch naar **Vite SSG** (statisch pre-renderen per route) of een full-stack framework als Next.js/Astro. Dit is een structurele wijziging — bespreken in een aparte sessie.

### 3.3 Lege H1 in pre-JS HTML
- Geen `<h1>` in `client/index.html` (zit pas in React-componenten). Hangt samen met 3.2.

### 3.4 `<meta viewport>` heeft `maximum-scale=1`
- Klein accessibility-issue (gebruikers kunnen niet inzoomen). Geen direct SEO-impact maar telt mee in Lighthouse-score. Niet aangepast omdat het buiten "geen design-wijzigingen" valt — flag voor later.

---

## 4. Roadmap volgende sessies

### Sessie 2 — Content-optimalisatie (geen design, alleen copy)
- Per pagina H1 + body-copy uitbreiden met target-keywords
- Pillar-page draft: `/leadgeneratie-dakdekkers` (sub-route, nieuwe pagina-component nodig — dit zou een structurele toevoeging zijn; bespreken)
- Per blogpost de inleiding kort uitbreiden zodat keyword in eerste 100 woorden staat
- Alt-tekst audit op alle `<img>` (zit verspreid over componenten)

### Sessie 3 — Off-page & lokale SEO
- Google Business Profile uitbouwen
- NAP-consistency op marktplaatsen (KvK, Nationale Bedrijvengids, Yelp NL, Telefoonboek.nl)
- Backlink-strategie via klantcases (laat klanten naar je linken vanaf hun site)
- Outreach voor gastblogs in dakdekker-/boekhouder-publicaties

### Sessie 4 — Architectuur (mits jij groen licht geeft)
- SSR/SSG implementeren (Vite-plugin `vite-plugin-ssr` of overstap naar Astro)
- Echte 404-status via gecodeerde route-lijst in `vercel.json`
- Per-route pre-rendered HTML met juiste H1, content, schema

### Sessie 5 — Programmatic SEO (geavanceerd)
- Lokale landingspagina's per stad: `/leadgeneratie-dakdekker-utrecht`, `/leadgeneratie-dakdekker-amsterdam`, etc.
- Comparison-pagina's: `/vs/dakconnect`, `/vs/gigaleads`, `/vs/leadsmaster`
- Doelgroep-specifieke pagina's: `/voor-dakdekkers`, `/voor-boekhouders`, `/voor-letselschadekantoren`

---

## 5. Target keyword-tracker

Bijhouden in GSC + handmatige check elke 2 weken.

### Brand-defense (moet altijd #1)
- [ ] "de procesdesigners"
- [ ] "de proces designers"
- [ ] "procesdesigners"
- [ ] "proces designers"

### Dakdekkers (primair)
- [ ] "leadgeneratie dakdekkers"
- [ ] "leads dakdekkers"
- [ ] "marketing dakdekkers"
- [ ] "marketingbureau dakdekkers"
- [ ] "website dakdekker"
- [ ] "webdesign dakdekkers"
- [ ] "websites voor dakdekkers"
- [ ] "goedkope website dakdekker"
- [ ] "online marketing dakdekker"
- [ ] "facebook ads dakdekker"
- [ ] "meta advertenties dakdekker"

### Boekhouders / financieel (primair)
- [ ] "leadgeneratie boekhouder"
- [ ] "leads boekhouders"
- [ ] "marketing boekhouder"
- [ ] "website boekhouder"
- [ ] "webdesign boekhouder"
- [ ] "leadgeneratie financieel dienstverlener"
- [ ] "marketingbureau accountantskantoor"
- [ ] "facebook ads boekhouder"

### Long-tail (groei-kansen)
- [ ] "marketingbureau ede"
- [ ] "leadgeneratie ede"
- [ ] "marketing automatisering lokaal bedrijf"
- [ ] "exclusieve leads dakdekker"
- [ ] "quiz funnel dakdekker"

---

## 6. Bestanden gewijzigd in sessie 1 (voor commit)

```
M client/index.html
M client/src/hooks/useSEO.ts
M client/src/pages/Home.tsx
M client/src/pages/Diensten.tsx
M client/src/pages/OverOns.tsx
M client/src/pages/Werkwijze.tsx
M client/src/pages/Contact.tsx
M client/src/pages/Partners.tsx
M client/src/pages/Portfolio.tsx
M client/src/pages/PortfolioCase.tsx
M client/src/pages/Blog.tsx
M client/src/pages/BlogPost.tsx
M client/src/pages/Privacybeleid.tsx
M client/src/pages/AlgemeneVoorwaarden.tsx
M client/src/pages/NotFound.tsx
M client/public/robots.txt
M client/public/sitemap.xml      (auto-gegenereerd door build)
M client/public/rss.xml          (auto-gegenereerd door build)
M scripts/build-blog.mjs
+ SEO-CHECKLIST.md               (dit bestand)
```

---

**Volgende stap:**
1. Plak je GSC-token en GA4-ID in `client/index.html`
2. `pnpm build` lokaal testen
3. Commit & deploy
4. Submit `sitemap.xml` in GSC
5. Wacht 7–14 dagen → eerste data binnen
