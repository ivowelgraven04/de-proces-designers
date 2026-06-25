---
title: "De handoff-trigger: van CRM-status naar automatische actie"
slug: "de-handoff-trigger-van-crm-status-naar-automatische-actie"
date: "2026-06-25"
excerpt: "Statussen in je CRM zijn waardeloos als ze geen actie triggeren. Ontdek de 4 momenten waar deals stranden en hoe je elke statusovergang automatisch laat opvolgen."
heroImage: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGRpYWdyYW0lMjB3aGl0ZWJvYXJkfGVufDF8MHx8fDE3ODIzNzc4NjF8MA&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "Workflow diagram, product brief, and user goals are shown."
heroImageCredit: "Foto door Kelly Sikkema op Unsplash"
tags: ["Automatisering", "Leadgeneratie", "Niche"]
readingTime: 3
author: "De Proces Designers"
---

Je CRM staat vol met gekleurde labeltjes: "nieuw", "gebeld", "offerte verstuurd", "klant". Mooi overzicht. Maar als die statussen niet automatisch een vervolgactie triggeren, is je CRM niet meer dan een veredelde Excel met kleurtjes. De winst zit niet in het label — die zit in wat er gebeurt op het moment dat het label verandert.

## Waarom een status zonder trigger waardeloos is

Een dakdekker zet een lead op "offerte verstuurd". Klaar. Vier dagen later denkt hij: "Hé, ik moet die nog bellen." Soms gebeurt dat, vaak niet. Bij 50 leads per maand verlies je zo gemiddeld 8-12 deals puur door vergeten opvolging. De status zelf doet niets. Het is een notitie aan jezelf — en jezelf is een onbetrouwbare assistent.

Een status wordt pas waardevol als hij automatisch iets in gang zet. Dat heet een handoff-trigger: de overgang van de ene status naar de andere geeft het stokje door aan een systeem dat nooit vergeet.

## De 4 statusovergangen waar je tijd lekt

Bij vrijwel elk lokaal servicebedrijf zien we dezelfde vier momenten waar deals stranden:

1. **Nieuw → gebeld** — de eerste reactietijd. Hoe sneller je belt, hoe hoger de conversie. Na 5 minuten daalt je kans al met 80%.
2. **Offerte → verstuurd** — het zwarte gat. De prospect krijgt een PDF en hoort daarna weken niets.
3. **Klus → afgerond** — het moment om door te pakken: factuur, nazorg, review. Vaak blijft het bij de factuur.
4. **Klant → review** — vraag een review op het juiste moment (binnen 48 uur na afronding) en je krijgt er drie keer zoveel als wanneer je een week wacht.

## Eén status, één concrete automatisering

Hou het simpel. Per statusovergang kies je één actie. Niet drie, niet vijf — één. Anders bouw je een spaghettisysteem dat niemand meer begrijpt.

- **Nieuw → gebeld**: interne taak voor het sales-team binnen 5 minuten + Slack-melding
- **Offerte → verstuurd**: WhatsApp-opvolging na 48 uur als status niet is veranderd
- **Klus → afgerond**: automatische e-mail met factuur + nazorginstructies
- **Klant → review**: 24 uur na afronding een Google Review-link via WhatsApp

Bij een letselschadekantoor zou je "intake → dossier aangemaakt" kunnen koppelen aan een automatische agenda-uitnodiging voor het kennismakingsgesprek. Bij een financieel adviseur triggert "klant → jaargesprek nodig" een e-mail 11 maanden na de laatste afspraak.

## Praktijkvoorbeeld: de 48-uurs opvolg-WhatsApp

Een dakdekker waar wij mee werken stuurt offertes via zijn CRM. Zodra de status op "offerte verstuurd" springt, start er in Make een timer van 48 uur. Voorwaarde: de status mag in die periode niet veranderd zijn naar "gewonnen", "verloren" of "in onderhandeling".

Na 48 uur stuurt Make automatisch een WhatsApp via de Business API:

*"Hoi {voornaam}, ik wilde even checken of de offerte goed is doorgekomen en of je nog vragen hebt. Bel me gerust op 06-..."*

Resultaat: zijn offerteconversie ging van 22% naar 34%. Geen extra werk, geen vergeten leads.

## Voorkom dat triggers dubbel afgaan

Het grootste risico bij automatisering: een prospect krijgt drie berichten omdat de dakdekker hem zelf al gebeld had, maar de status nog niet had bijgewerkt. Twee regels om dat te voorkomen:

- **Bouw altijd een conditie in**: de trigger gaat alleen af als de status nog steeds dezelfde is als bij activatie. Verandert de status tussentijds? Trigger annuleren.
- **Werk met een "geen automatische opvolging"-vinkje** per lead. Soms wil je een grote klant persoonlijk benaderen — dan zet je dat vinkje aan en slaat het systeem die lead over.

Daarnaast: log elke automatische actie terug in het CRM. Zo zie je in één oogopslag dat er gisteren al een WhatsApp is gestuurd, en bel je niet over hetzelfde.

---

Wil je weten welke statusovergangen in jouw bedrijf het meeste rendement laten liggen? In een gratis strategiegesprek kijken we samen naar je proces en wijzen we de drie grootste lekken aan. [Plan een gesprek in](#).
