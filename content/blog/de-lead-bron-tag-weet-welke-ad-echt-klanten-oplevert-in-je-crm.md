---
title: "De lead-bron tag: weet welke ad écht klanten oplevert in je CRM"
slug: "de-lead-bron-tag-weet-welke-ad-echt-klanten-oplevert-in-je-crm"
date: "2026-08-19"
excerpt: "Klanten zeggen \"via Google\", maar de data vertelt vaak een ander verhaal. Zo leg je automatisch vast welke advertentie écht die klant van vorige week opleverde."
heroImage: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZGFzaGJvYXJkJTIwbGFwdG9wfGVufDF8MHx8fDE3ODcxMjE1MjF8MA&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "black and silver laptop computer"
heroImageCredit: "Foto door path digital op Unsplash"
tags: ["Automatisering", "Leadgeneratie", "Niche"]
readingTime: 3
author: "De Proces Designers"
---

Je draait advertenties op Facebook, Google en misschien LinkedIn. Er komen leads binnen, sommige worden klant. Maar als je jezelf de vraag stelt: *"Welke advertentie leverde die klant van vorige week nou eigenlijk op?"* — dan blijft het stil.

Dat is het probleem dat je vandaag oplost.

## Waarom "hoe heb je ons gevonden?" onbetrouwbaar is

De meest gebruikte oplossing is een dropdown in je contactformulier: *"Hoe heb je ons gevonden?"* Klanten kiezen dan Google, Facebook, Mond-tot-mond of Anders.

Het probleem: mensen weten het zelf niet meer.

Een dakdekker in Brabant deed hier een test. Van de 47 klanten die "Google" invulden, kwam er volgens de trackingdata **19** daadwerkelijk via een Google-zoekopdracht binnen. De rest zag eerst een Facebook-advertentie, googelde later het bedrijf, en klikte via de zoekresultaten door.

Voor de klant voelt dat als "ik vond jullie via Google". Voor jouw marketingbudget is dat een fout van duizenden euro's per maand.

## Wat je automatisch wilt vastleggen

Elke klik op je advertentie krijgt via UTM-parameters een unieke afzender mee in de URL. Zoiets als:

`jouwsite.nl/offerte?utm_source=facebook&utm_campaign=dakinspectie-januari&utm_content=video-ad-buurman`

Die informatie moet je vasthouden en meesturen naar je CRM. De drie velden die je minimaal wilt vastleggen per lead:

1. **Bron** (utm_source) — Facebook, Google, LinkedIn, nieuwsbrief
2. **Campagne** (utm_campaign) — welke campagne binnen die bron
3. **Advertentie** (utm_content) — welke specifieke ad of variant

Deze drie samen vertellen je niet alleen *waar* een lead vandaan komt, maar ook *welke boodschap* hem overhaalde.

## Zo koppel je het aan je CRM

De technische route is simpeler dan je denkt. Je hebt drie dingen nodig:

- Verborgen velden op je landingspagina die de UTM's uit de URL uitlezen
- Een koppeling (Zapier of Make) tussen je formulier en je CRM
- Drie custom velden in je CRM voor bron, campagne en advertentie

Concreet voorbeeld voor een letselschadekantoor met HubSpot:

1. Bezoeker klikt op een Facebook-ad met UTM's
2. Landt op de landingspagina — JavaScript vangt de UTM's op en zet ze in verborgen formuliervelden
3. Bezoeker vult formulier in en klikt versturen
4. Zapier vangt de submission op en maakt een contact in HubSpot aan
5. De UTM-waarden landen automatisch in de velden Lead Source, Campaign en Ad Content

Vanaf dat moment kun je in HubSpot filteren: *"Toon me alle klanten van de afgelopen 90 dagen, gegroepeerd op campagne."* Dan zie je zwart-op-wit welke campagne betaalt en welke geld verbrandt.

## Wees geduldig met je conclusies

Één belangrijke waarschuwing: trek geen conclusies na tien leads.

Als je vijf leads uit Campagne A hebt en drie uit Campagne B, en er wordt uit A één klant — dan lijkt A "20% conversie" te doen. Statistisch betekent dat helemaal niets.

Reken op minimaal **30 tot 50 leads per bron** voordat je betrouwbare conclusies kunt trekken over conversie. Voor een financieel adviseur die 40 leads per maand krijgt, betekent dat: pas na een maand of anderhalf per campagne kun je bijsturen.

Kort daarvoor bijsturen leidt tot het uitzetten van campagnes die eigenlijk prima werkten — je zag ze alleen op een ongelukkig moment.

## Wat je hiermee wint

Zodra dit staat, verandert je gesprek met je marketingpartij (of jezelf) fundamenteel:

- Je weet welke campagne échte klanten oplevert, niet alleen goedkope leads
- Je kunt budget verschuiven van verliezende naar winnende ads
- Je ziet welke advertentiecreatie het beste kwalificeert
- Je stopt met gokken en begint met sturen

De setup kost je één middag. De inzichten die je erna krijgt, sturen je marketingbudget voor de komende jaren.

---

Wil je weten hoe deze koppeling er specifiek voor jouw bedrijf en CRM uitziet? Plan een gratis strategiegesprek — dan kijken we samen naar je huidige setup en waar de blinde vlekken zitten.
