---
title: "De interne notificatie-stack: wie krijgt welk signaal bij een nieuwe lead?"
slug: "de-interne-notificatie-stack-wie-krijgt-welk-signaal-bij-een-nieuwe-lead"
date: "2026-06-15"
excerpt: "Een gedeelde inbox is geen notificatiesysteem — het is een kerkhof voor leads. Zo bouw je een gelaagde stack waarbij de juiste persoon binnen minuten reageert, ook als de eerste niet opneemt."
heroImage: "https://images.unsplash.com/photo-1772618375204-06b8348417e5?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHwzfHxzbWFydHBob25lJTIwbm90aWZpY2F0aW9uJTIwYWxlcnR8ZW58MXwwfHx8MTc4MTUyNDgwOHww&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "Close-up of a smartphone screen displaying time and time"
heroImageCredit: "Foto door Amanz op Unsplash"
tags: ["Automatisering", "Leadgeneratie", "Funnels"]
readingTime: 7
author: "De Proces Designers"
---

## De stille killer: leads die in een gedeelde inbox verdwijnen

Stel je voor: het is dinsdagochtend 09:47. Een huiseigenaar ontdekt een lekkage in zijn dak en vult binnen drie minuten het contactformulier in op de website van een lokaal dakdekkersbedrijf. De aanvraag belandt netjes in info@dakdekker-voorbeeld.nl.

Daar blijft hij liggen.

De receptioniste is bezig met een binnenkomende telefoontje. De eigenaar is op een klus. De projectleider checkt zijn mail pas rond 11:30. Tegen die tijd heeft de huiseigenaar al twee andere bedrijven gebeld — en de eerste die opnam, krijgt de opdracht.

Dit gebeurt elke dag bij honderden lokale bedrijven. Niet omdat ze slechte leads krijgen, maar omdat hun notificatiesysteem in 2010 is blijven hangen. Een gedeelde inbox is geen notificatiesysteem. Het is een kerkhof voor leads.

In dit artikel leggen we uit hoe je een gelaagde notificatie-stack bouwt waarbij de juiste persoon op het juiste kanaal het juiste signaal krijgt — en wat er gebeurt als die persoon niet reageert.

## Waarom info@ je traagste reactiekanaal is

Een gedeelde inbox heeft één fundamenteel probleem: niemand voelt zich verantwoordelijk. Als iedereen kan reageren, reageert vaak niemand. Of erger: twee mensen pakken dezelfde lead op zonder dat te weten.

De echte kosten van die gedeelde inbox zijn groter dan je denkt:

- **Reactietijd loopt op naar uren in plaats van minuten.** Onderzoek van InsideSales liet jaren geleden al zien dat de kans op contact 100x hoger ligt als je binnen 5 minuten belt versus 30 minuten. Voor lokale services geldt dat dubbel.
- **Dubbele opvolging of geen opvolging.** Zonder duidelijke eigenaar valt elke lead in een grijs gebied.
- **Geen meetbaarheid.** Je weet niet welke leads zijn opgevolgd, hoe snel, en door wie.
- **Spam en ruis verdringen leads.** Tussen de nieuwsbrieven, facturen en leveranciersmails valt een binnenkomende offerteaanvraag visueel weg.

Bij een dakdekkersbedrijf waar we vorig jaar mee begonnen, bleek na analyse dat 40% van de leads niet binnen 24 uur werd opgevolgd. Niet uit onwil — uit onmogelijkheid. De eigenaar zat op het dak, de administratrice deed boekhouding op dinsdag en donderdag, en de mailbox liep over.

Het probleem was niet de leadkwaliteit. Het was de notificatie-architectuur.

## De drie lagen van een goede notificatie-stack

Een goed systeem werkt op drie niveaus die elkaar aanvullen. Niet één van de drie — alle drie.

### Laag 1: Push (telefoon)

Dit is het signaal dat niet te missen is. Een trilling in de broekzak. Een pushbericht op het scherm. Iets wat de aandacht direct trekt, ongeacht waar de ontvanger is of waar hij mee bezig is.

Push is bedoeld voor één doel: nú actie. De persoon die het krijgt, weet meteen: er is een lead en die moet ik binnen X minuten opvolgen.

Goede kanalen voor pushberichten:
- **Slack** of **Microsoft Teams** met een dedicated #leads-kanaal
- **Telegram** met een bot die in een groep post
- **SMS** als ultieme fallback (komt altijd door)
- **WhatsApp Business** via de API

### Laag 2: Pull (CRM-dashboard)

Pushberichten zijn voor het moment. Maar wat als iemand wil zien welke leads er deze week zijn binnengekomen? Welke status ze hebben? Wie ermee bezig is?

Dat is de pull-laag: een centrale plek waar alle leads terechtkomen, met status, eigenaar, en geschiedenis. Een CRM dus — Pipedrive, HubSpot, of zelfs een goed ingerichte Airtable of Notion.

Hier zit ook je rapportage: hoe snel reageren we gemiddeld? Welke leads worden niet opgevolgd? Welke bron levert de meeste afspraken?

### Laag 3: Escalatie (de safety net)

Wat als laag 1 én laag 2 niet werken? De pushmelding komt binnen, maar de eigenaar zit in een bespreking en ziet hem niet. Dan moet er na X minuten automatisch een tweede signaal komen — naar iemand anders.

Dit is de laag die de meeste bedrijven overslaan. En dit is precies de laag die het verschil maakt tussen 80% opvolging en 100% opvolging.

## De concrete setup: van formulier tot opvolging

Hoe ziet dit er technisch uit? Hieronder de architectuur die we standaard inrichten bij onze klanten.

**Stap 1: Het webformulier**

Het formulier op de landingspagina of website stuurt data niet naar e-mail, maar naar een automatisering-tool als **Make** (voorheen Integromat) of **Zapier**. Make heeft onze voorkeur voor complexere flows — meer controle, lagere kosten bij volume.

**Stap 2: De router in Make/Zapier**

Zodra de leaddata binnenkomt, splitst het scenario zich in meerdere acties die parallel lopen:

1. **Aanmaken in het CRM** (Pipedrive, HubSpot, etc.) met de juiste pipeline en eigenaar
2. **Pushbericht naar Slack/Telegram** in een vooraf bepaald kanaal
3. **SMS-backup** naar de eigenaar of vaste opvolger
4. **Timer starten** voor de escalatieregel (zie verderop)

**Stap 3: Het pushbericht**

Het bericht zelf moet alle relevante info bevatten zodat de opvolger meteen kan handelen:

```
🚨 NIEUWE LEAD — Offerte-aanvraag
Naam: Jan de Vries
Telefoon: 06-12345678
Postcode: 3811 AB
Type werk: Volledig dak vervangen
Urgentie: Binnen 2 weken
Bron: Facebook ad — campagne "Winterdak"
```

De opvolger kan direct bellen vanuit het bericht — geen inlogprocedure, geen zoeken in een CRM.

**Stap 4: De terugkoppeling**

Wanneer iemand de lead opvolgt, klikt hij op een knop in Slack ("Ik pak deze op") of werkt de status bij in het CRM. Daarmee stopt de escalatietimer en weet de rest van het team dat de lead is opgepakt.

## Differentieer op leadwaarde — voorkom afstomping

Als elk signaal hetzelfde dringend is, wordt geen enkel signaal dringend. Dat is wat er gebeurt als je team na een week aan pushberichten begint te negeren wat binnenkomt.

Daarom: differentieer op leadwaarde.

Een **brochure-download** van een letselschadekantoor is een lage-intentie lead. Iemand oriënteert zich. Een **gratis intake aanvraag na een ongeval** is een hoge-intentie lead — die persoon zoekt nu hulp en belt anders binnen 10 minuten een ander kantoor.

Concrete differentiatie:

- **Hoge intentie** (offerte-aanvraag, gratis intake, demo-aanvraag): push naar telefoon + SMS naar eigenaar + 5-minuten escalatie
- **Gemiddelde intentie** (quiz-resultaat, calculator gebruikt): push naar Slack-kanaal + CRM-taak met 1-uur opvolging
- **Lage intentie** (brochure, nieuwsbriefinschrijving): alleen in CRM + opname in geautomatiseerde e-mailflow, geen pushbericht

Bij een financieel adviseur waar we mee werken, betekent dit dat een aanvraag voor een hypotheekberekening direct op het scherm van twee adviseurs verschijnt, terwijl een download van het pensioen-e-book stilletjes in een nurturing-sequence belandt. Het team raakt niet afgestompt, want elk dringend signaal is écht dringend.

## De escalatieregel: wat als niemand reageert?

Hier zit het mechanisme dat de meeste bedrijven missen. Een eenvoudige timer in Make of Zapier kijkt: is deze lead binnen 5 minuten opgepakt? Zo nee, dan gebeurt er dit:

1. **Minuut 5:** Tweede pushbericht — nu naar een back-up persoon (kantoormanager, projectleider)
2. **Minuut 10:** SMS naar de eigenaar van het bedrijf met de leadgegevens
3. **Minuut 15:** Telefoontje (via een service als CallFire of een automatische voicemail) naar de eigenaar

Voor de letselschadeniche zien we vaak een nog strakkere regel: minuut 3, minuut 7, minuut 12. De marges zijn daar minimaal — een slachtoffer dat na een ongeval zoekt naar juridische hulp, kiest binnen 20 minuten.

Hoe je "opgevolgd" definieert is technisch een kwestie van: de CRM-status is veranderd, of er is op de "ik pak op"-knop in Slack geklikt, of er is een uitgaand telefoontje naar het nummer geregistreerd via een belplatform als Aircall.

## Praktijkvoorbeeld: van 40% naar 100% opvolging

Terug naar het dakdekkersbedrijf waar we mee begonnen. De situatie vooraf:

- Alle leads naar info@bedrijf.nl
- Eigenaar checkte mail 's avonds
- Gemiddelde reactietijd: 6 uur, mediaan 4 uur
- 40% van de leads werd niet binnen 24 uur opgevolgd
- Conversie van lead naar afspraak: 18%

Wat we hebben ingericht:

- Webformulier verbonden met Make
- Pipedrive als CRM met automatische deal-aanmaak
- Telegram-groep met drie deelnemers: eigenaar, projectleider, administratrice
- SMS-backup naar de eigenaar bij offerte-aanvragen
- Escalatie: 5 minuten → projectleider, 10 minuten → SMS eigenaar
- Differentiatie tussen "spoedreparatie" (direct dringend) en "renovatie-aanvraag" (binnen 30 min)

Resultaat na 6 weken:

- Gemiddelde reactietijd: 8 minuten
- 100% van de leads opgevolgd binnen 10 minuten tijdens kantooruren
- Conversie van lead naar afspraak: 34%

Dezelfde ad-uitgaven. Dezelfde leadkwaliteit. Bijna een verdubbeling van het aantal afspraken — puur door de notificatie-architectuur.

## Hoe je begint

Je hoeft niet alles tegelijk in te richten. Begin klein en bouw uit.

**Week 1: stop de bloeding**
Maak een Make- of Zapier-account aan. Verbind je webformulier met één Slack- of Telegram-kanaal. Dit alleen al verkort je reactietijd met uren.

**Week 2: voeg het CRM toe**
Zorg dat elke lead automatisch in je CRM verschijnt met de juiste eigenaar en pipeline. Geen handmatig invoeren meer.

**Week 3: bouw de escalatie**
Voeg een vertraging van 5 minuten toe en een tweede pushbericht naar een back-up. Test het door zelf een nepformulier in te vullen en niet te reageren.

**Week 4: differentieer**
Splits je flows op leadtype. Hoge intentie krijgt SMS, lage intentie alleen CRM.

**Week 5: meet en optimaliseer**
Kijk naar je reactietijden en escalaties. Welke leads worden te vaak geëscaleerd? Daar zit je opvolgprobleem.

De grootste fout die we ondernemers zien maken: ze wachten tot ze "het hele systeem" perfect hebben voor ze starten. Begin morgen met laag 1. De andere lagen kunnen volgen.

---

Werk je met een team waar nu nog veel leads via een gedeelde inbox binnenkomen? Dan is dit waarschijnlijk het grootste lek in je marketingmachine — groter dan je advertentie-instellingen of je landingspagina. Wil je weten hoe een notificatie-stack er voor jouw situatie uit zou zien? Plan een gratis strategiegesprek in via onze site, dan kijken we samen waar je nu leads laat liggen.
