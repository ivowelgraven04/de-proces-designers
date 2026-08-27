---
title: "De duplicaat-lead filter: zo voorkom je dat je 2x achter dezelfde klant aanbelt"
slug: "de-duplicaat-lead-filter-zo-voorkom-je-dat-je-2x-achter-dezelfde-klant-aanbelt"
date: "2026-08-27"
excerpt: "Drie contacten in je CRM voor één klant, twee collega's die onafhankelijk terugbellen — zo verpest je de eerste indruk. Met een simpele match op drie velden voorkom je deze chaos."
heroImage: "https://images.unsplash.com/photo-1591467454366-fb32b72b20e9?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHw1fHxwaG9uZSUyMGNvbnRhY3RzJTIwc2NyZWVufGVufDF8MHx8fDE3ODc4NTExMjF8MA&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "iphone screen showing icons with icons"
heroImageCredit: "Foto door Praveen kumar Mathivanan op Unsplash"
tags: ["Automatisering", "Leadgeneratie", "Funnels"]
readingTime: 3
author: "De Proces Designers"
---

Stel je voor: een dakdekker vraagt maandagochtend een offerte aan via je website. Woensdag stuurt dezelfde man een WhatsApp omdat hij nog niets heeft gehoord. Donderdag belt hij op. Resultaat? Drie contacten in je CRM, twee collega's die hem onafhankelijk van elkaar terugbellen, en een klant die denkt: "Wat een chaos daar."

Zonde. Want juist deze lead is heet — hij neemt drie keer contact op. En jij verpest de eerste indruk met dubbele belletjes.

## Waarom duplicaten ontstaan

De meeste bedrijven hebben inmiddels meerdere entry-points: een webformulier, WhatsApp Business, een offertepagina, een terugbelverzoek, soms nog een aparte quiz-funnel. Elk kanaal maakt netjes een nieuw contact aan in je CRM. Prima — behalve dat die kanalen niet met elkaar praten.

Bij een letselschadekantoor zien we dit constant: iemand vult 's avonds een intakeformulier in, belt de volgende ochtend omdat hij twijfelt of het is aangekomen, en stuurt een uur later een WhatsApp met een foto van zijn medische verklaring. Drie losse leads, allemaal dezelfde meneer De Vries.

## Match op drie velden

Een duplicaatfilter hoeft niet ingewikkeld te zijn. Match op deze drie:

1. **Telefoonnummer, genormaliseerd.** Strip spaties, streepjes en haakjes. Zet altijd om naar +31-formaat. Zo herken je dat `06 12 34 56 78`, `+31612345678` en `0612-345678` dezelfde persoon zijn.
2. **E-mailadres, lowercase.** `Jan@Bedrijf.nl` en `jan@bedrijf.nl` zijn hetzelfde. Zet alles om naar kleine letters vóór je vergelijkt.
3. **Achternaam + postcode als backup.** Voor als iemand een tikfout heeft in zijn e-mail of een ander nummer gebruikt. Niet waterdicht, maar vangt de rest af.

## Praktische setup in Make of Zapier

Het principe is simpel: zet een **Search Record**-stap vóór je **Create Record**-stap.

Concreet in Make:

1. Trigger vangt een nieuwe lead op (formulier, WhatsApp, telefoon).
2. Normaliseer de data — telefoonnummer en e-mail eerst schoonpoetsen met tekstfuncties.
3. Zoek in je CRM op telefoonnummer. Geen match? Zoek op e-mail. Geen match? Zoek op achternaam + postcode.
4. **Bij een match:** update het bestaande contact en voeg een notitie toe met het nieuwe kanaal en tijdstip.
5. **Geen match:** maak een nieuw contact aan.

In Zapier werkt het identiek met de "Find Record"-actie en een Path of Filter erachter.

## Wat je bij een match wél en niet overschrijft

Als je een duplicaat samenvoegt, houd je aan deze regel:

- **Behoud de oudste lead-bron.** Dat is voor je rapportage cruciaal. Als iemand oorspronkelijk via Facebook binnenkwam en later via WhatsApp, blijft Facebook de bron. Anders klopt je ROI-berekening straks nergens meer op.
- **Neem de nieuwste status over.** Contactvoorkeur, laatste bericht, nieuwe informatie — die overschrijf je wel.
- **Log alle touchpoints.** Voeg elk nieuw contactmoment toe als notitie of activity, zodat je verkoper de volledige historie ziet.

## De belangrijkste stap: notificeer je team

Dit is waar de meeste bedrijven de plank misslaan. Als een bestaande lead opnieuw binnenkomt via een ander kanaal, is dat vrijwel altijd een **koopsignaal**. Diegene neemt niet voor niets opnieuw contact op.

Bouw daarom een aparte notificatie in — bijvoorbeeld een Slack-bericht of een taak in je CRM met hoge prioriteit: *"Bestaande lead [naam] neemt opnieuw contact op via [kanaal]. Oorspronkelijk binnengekomen op [datum]. Bel binnen 15 minuten terug."*

Bij een financieel adviseur die we begeleiden zagen we dat leads die twee keer contact opnamen binnen een week, drie keer zo vaak converteerden als eerste-contact-leads. Behandel ze dus niet als "nog een lead" — behandel ze als bijna-klant.

---

Loop je zelf tegen dubbele leads en gemiste opvolging aan? In een gratis strategiegesprek kijken we mee naar je huidige flow en waar het lek zit.
