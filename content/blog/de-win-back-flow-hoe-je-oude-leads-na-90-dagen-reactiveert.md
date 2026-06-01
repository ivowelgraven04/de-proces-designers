---
title: "De win-back flow: hoe je oude leads na 90 dagen reactiveert"
slug: "de-win-back-flow-hoe-je-oude-leads-na-90-dagen-reactiveert"
date: "2026-06-01"
excerpt: "Honderden leads in je CRM lijken dood, maar zijn dat zelden. Zo bouw je een win-back flow die 5 tot 10% alsnog omzet in klanten — zonder extra werk na de setup."
heroImage: "https://images.unsplash.com/photo-1627892414154-ba29c0558a1d?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHwzfHxkdXN0eSUyMGZpbGluZyUyMGNhYmluZXR8ZW58MXwwfHx8MTc4MDMxMzMyNXww&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "white and black gas stove on brown wooden table"
heroImageCredit: "Foto door Diane Picchiottino op Unsplash"
tags: ["Automatisering", "Leadgeneratie", "Funnels"]
readingTime: 3
author: "De Proces Designers"
---

In je CRM zitten waarschijnlijk honderden leads die ooit een offerte aanvroegen, een quiz invulden of een terugbelverzoek deden — en daarna stil bleven. De meeste ondernemers schrijven die af als "dood". Onterecht. Met een goed opgezette win-back flow haal je daar realistisch 5 tot 10% alsnog uit als klant. Zonder dat je er nog iets aan hoeft te doen na de setup.

## Waarom 'dode' leads vaak niet dood zijn

Een lead die 90 dagen geleden niet reageerde, heeft zelden besloten dat jouw bedrijf niks voor hem is. Veel waarschijnlijker:

- De **dakvervanging** werd uitgesteld omdat het nog net niet lekte
- Het **letselschadetraject** liep nog via de verzekeraar en ze wilden eerst dat afwachten
- Het **financieel advies** kon wachten tot na de verbouwing of jobwissel
- Ze kozen een concurrent — en kwamen erachter dat die offerte tegenviel

Timing is in lokale dienstverlening de grootste reden dat leads niet converteren. Niet prijs, niet vertrouwen. Gewoon: het moment klopte niet. Een reactivatie-flow vangt precies die mensen op zodra het moment er wél is.

## De juiste segmentatie: filter scherp

Voordat je iets automatiseert, moet je segment kloppen. Filter in je CRM op:

- Leads ouder dan **90 dagen**
- Status: `no response`, `no show` of `lost — geen reactie`
- **Uitsluiten**: leads met status `lost — niet geïnteresseerd` of `lost — verkeerde doelgroep`

Dat laatste is cruciaal. Iemand die expliciet "nee" zei, ga je niet opnieuw mailen. Dat schaadt je reputatie en je deliverability. Je richt je alleen op de stille groep.

## De 3-berichten structuur

Een win-back flow bestaat uit drie berichten, met telkens een ander doel. Geen verkooppraatje. Eén regel: laagdrempelig.

### Bericht 1 — De trigger (e-mail, dag 0)

Geef een concrete aanleiding waarom je nu contact opneemt. Een nieuw seizoen, een wetswijziging, een rentestand. Voor een dakdekker: *"De herfststormen komen eraan — we krijgen nu veel aanvragen van mensen die in januari al wat zagen lekken."* Korte mail, persoonlijke afzender, geen branding-overload.

### Bericht 2 — De proof (WhatsApp of e-mail, dag 4)

Een recent project of review uit hun buurt of situatie. *"Vorige week een dak vervangen in [stad lead] — klant deelde deze foto's."* Of een korte review-screenshot. Doel: laten zien dat je nog steeds actief en betrouwbaar bent. WhatsApp werkt hier sterk, mits ze ooit opt-in hebben gegeven.

### Bericht 3 — De re-engagement (e-mail, dag 9)

Geen offerte-aanbod. Eén simpele vraag: *"Speelt het nog of mag ik je uit het systeem halen?"* Deze "permission to leave"-aanpak haalt verrassend veel reacties los. Mensen die nog twijfelen, melden zich. De rest archiveer je.

## Welke kanalen werken — en wanneer

- **E-mail** voor touch 1 en 3: laagdrempelig, niet-opdringerig
- **WhatsApp** voor touch 2: hogere openrate, alleen bij eerdere opt-in
- **Bellen** pas zinvol zodra een lead opnieuw klikt of reageert — dan is de intentie er weer

Direct bellen op een 90 dagen oude lead is verspilde tijd. Wachten tot ze zelf weer een signaal geven verhoogt je conversie per gesprek enorm.

## Opzet in HubSpot of Pipedrive met Make

De technische opzet is simpeler dan je denkt:

1. Maak in HubSpot of Pipedrive een **dynamische lijst/filter** op de criteria hierboven
2. Voeg een tag toe: `winback-eligible`
3. Bouw een Make-scenario dat dagelijks de lijst checkt en nieuwe leads in de flow zet
4. Zet bij start van de flow de tag `winback-active` (voorkomt dat ze in andere campagnes vallen)
5. Bij respons: tag `winback-responded` + notificatie naar sales
6. Na bericht 3 zonder respons: tag `winback-completed` — zo benader je ze niet opnieuw

Die tags zijn niet optioneel. Zonder die structuur stuur je iemand binnen een maand drie keer dezelfde mail vanuit drie campagnes. Dat is precies waarom mensen zich uitschrijven.

---

Wil je weten welk percentage van jouw huidige CRM in aanmerking komt voor een win-back flow? In een [gratis strategiegesprek](#) kijken we mee in je systeem en rekenen we het concreet voor je door.
