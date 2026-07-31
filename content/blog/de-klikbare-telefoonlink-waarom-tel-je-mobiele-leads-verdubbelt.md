---
title: "De klikbare telefoonlink: waarom 'tel:' je mobiele leads verdubbelt"
slug: "de-klikbare-telefoonlink-waarom-tel-je-mobiele-leads-verdubbelt"
date: "2026-07-31"
excerpt: "Op mobiel wil 60% van je bezoekers direct bellen, maar de meeste sites hebben hun nummer als platte tekst staan. Met één regel HTML verdubbel je je telefonische leads — hier lees je precies hoe."
heroImage: "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHw0fHxzbWFydHBob25lJTIwY2FsbGluZyUyMGhhbmR8ZW58MXwwfHx8MTc4NTQ4NzU0MHww&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "woman holding iPhone during daytime"
heroImageCredit: "Foto door Paul Hanaoka op Unsplash"
tags: ["Webdesign", "Leadgeneratie", "Niche"]
readingTime: 3
author: "De Proces Designers"
---

Stel je voor: iemand zoekt 's avonds om 21:00 met spoed een dakdekker omdat er water door het plafond druppelt. Hij vindt jouw site op zijn telefoon, ziet je nummer staan... en moet het onthouden of overtypen om te bellen. In die drie seconden is hij al bij je concurrent.

Dit is geen theorie. Op mobiel wil ongeveer 60% van je bezoekers direct contact opnemen via telefoon. En toch staan op de meeste lokale bedrijfssites telefoonnummers gewoon als platte tekst — niet klikbaar. Dat is elke dag geld weggeven.

## De fix is één regel HTML

Je telefoonnummer moet een `tel:`-link zijn. Zo simpel is het:

```html
<a href="tel:+31201234567">020 123 45 67</a>
```

Dat is het. Wanneer een bezoeker hier op zijn telefoon op tikt, opent direct de belapp met jouw nummer al ingevuld. Eén tik, gesprek.

Zet deze link **overal** waar je nummer voorkomt:

- In de header (rechtsboven, altijd zichtbaar)
- In de footer
- In je contactblok
- Bij elke CTA in de hero-sectie
- Onder klantverhalen en cases
- Op je bedankpagina na het invullen van een formulier

Gebruik altijd het internationale formaat met `+31` en zonder de eerste 0. Zo werkt het ook voor bezoekers die vanuit het buitenland bellen (relevanter dan je denkt bij letselschadekantoren met expat-cliënten).

## Waarom een 'Bel nu'-knop beter werkt dan alleen het nummer

Een nummer voelt als informatie. Een knop voelt als een actie. Dat verschil zie je terug in de conversie.

Vergelijk zelf:

- **Slecht:** `020 123 45 67` (platte tekst)
- **Beter:** [020 123 45 67](#) (klikbare link)
- **Best:** een groene knop met **📞 Bel direct: 020 123 45 67**

Bij dakdekkers zien wij dat een expliciete "Bel nu voor gratis inspectie"-knop consistent 30-50% meer bel-clicks oplevert dan hetzelfde nummer als tekstlink. De reden: mensen moeten weten dat het klikbaar is én dat bellen de gewenste actie is.

Voor letselschadekantoren werkt "Gratis eerste gesprek — bel nu" beter dan alleen het nummer, omdat het de drempel wegneemt. Voor financieel adviseurs kies je iets als "Bel voor een oriëntatiegesprek".

## Meten wat converteert

Als je niet meet, weet je niet wat werkt. Bel-clicks zijn in Google Analytics 4 gemakkelijk te tracken als event. Laat je webbouwer een event toevoegen dat afgaat bij elke klik op een `tel:`-link:

```html
<a href="tel:+31201234567" onclick="gtag('event', 'phone_click', {'location': 'header'});">
  020 123 45 67
</a>
```

Door de `location`-parameter mee te geven (header, footer, hero, contact) zie je precies **waar** op de pagina mensen bellen. Bij een klant van ons — een letselschadekantoor — bleek 70% van de bel-clicks uit de hero-CTA te komen. De footer-knop kon eruit, de hero-knop kreeg meer nadruk. Resultaat: 22% meer telefoontjes in een maand.

Koppel dit aan je advertentiecampagnes en je weet precies welke Facebook-ad daadwerkelijk telefoontjes oplevert — niet alleen kliks.

## De veelgemaakte fout: nummer verstoppen op mobiel

Dit zien wij bij letterlijk de helft van de sites die we auditen: op desktop staat het nummer prominent in de header, maar op mobiel is het "opgeruimd" in een hamburgermenu. Twee tikken extra. Weg lead.

Terwijl mobiel juist het apparaat is waarmee mensen daadwerkelijk gaan bellen. Draai het om: op mobiel moet je nummer of belknop **altijd zichtbaar** zijn, bij voorkeur als sticky element onderaan het scherm. Op desktop mag het subtieler.

Test het zelf: pak je telefoon, open je eigen site en tik op je nummer. Gebeurt er niets? Dan lekt je site elke week leads waar je niets van weet.

---

Wil je weten hoeveel leads jouw site nu misloopt en waar de grootste lekken zitten? In een gratis strategiegesprek lopen we samen door je site en marketing. [Plan een gesprek in](#) — 30 minuten, geen verplichtingen.
