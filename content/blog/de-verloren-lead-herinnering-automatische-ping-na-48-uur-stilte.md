---
title: "De verloren-lead herinnering: automatische ping na 48 uur stilte"
slug: "de-verloren-lead-herinnering-automatische-ping-na-48-uur-stilte"
date: "2026-08-18"
excerpt: "40% van je leads reageert direct. De rest verdwijnt in je CRM — terwijl een simpele automatische herinnering na 48 uur je 15 tot 20% extra afspraken oplevert uit dezelfde leadstroom."
heroImage: "https://images.unsplash.com/photo-1600960568458-7966d439289e?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHwzfHxzbWFydHBob25lJTIwbm90aWZpY2F0aW9uJTIwbWVzc2FnZXxlbnwxfDB8fHwxNzg3MDM1MDkzfDA&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "green and white apple logo"
heroImageCredit: "Foto door Brett Jordan op Unsplash"
tags: ["Automatisering", "Leadgeneratie", "Niche"]
readingTime: 3
author: "De Proces Designers"
---

Uit onze eigen data zien we het patroon telkens terugkomen: van elke 100 leads die binnenkomen, reageert ongeveer 40% direct. De rest? Die verdwijnt in het CRM als "geen reactie" en wordt nooit meer aangeraakt. Zonde, want een groot deel van die leads is niet afgehaakt — ze zijn simpelweg vergeten dat ze jouw formulier hebben ingevuld.

Eén simpele automatisering fixt dit: een geautomatiseerde herinnering na 48 uur stilte. In onze projecten zien we hierdoor gemiddeld 15 tot 20% extra afspraken uit dezelfde leadstroom.

## Waarom precies 48 uur?

Te vroeg (binnen 24 uur) voelt opdringerig — de lead heeft misschien net eerder die dag je eerste bericht gezien. Te laat (na 5+ dagen) en de context is weg: ze weten niet meer waar het over ging, welk bedrijf jij bent, of waarom ze überhaupt dat formulier invulden.

48 uur is de sweet spot. Lang genoeg om ruimte te geven, kort genoeg om nog top-of-mind te zijn. Voor een dakdekker die een lead binnenkrijgt op maandag betekent dit: woensdagochtend een reminder — precies wanneer de lead zijn week aan het plannen is.

## De trigger opzetten

In Make of Zapier bouw je dit in ongeveer 15 minuten. De logica is simpel:

1. **Trigger**: nieuwe lead met status "geen reactie" in je CRM
2. **Delay**: wacht 48 uur
3. **Check**: is de status nog steeds "geen reactie"?
4. **Actie**: stuur bericht via WhatsApp of SMS

De belangrijkste stap is die check in stap 3. Zonder deze conditie stuur je berichten naar leads die inmiddels al gebeld hebben — en dat is de snelste manier om onprofessioneel over te komen.

## Wat schrijf je écht in dat bericht?

Hier gaat 90% van de ondernemers de mist in. Berichten zoals "Ik wilde even checken of je mijn eerdere bericht had ontvangen?" werken niet. Ze klinken als een verkoper die zijn quota moet halen.

Wat wel werkt: kort, persoonlijk, één concrete vraag. Voorbeeld voor een dakdekker:

> "Hoi Mark, je vroeg maandag een offerte aan voor je platte dak in Utrecht. Nog steeds actueel? Als je 'ja' stuurt bel ik je vandaag terug met een tijdslot."

Voor een letselschadekantoor:

> "Hoi Sandra, je gaf aan dat je hulp zoekt na een ongeval. Zal ik je morgenochtend om 10:00 kort bellen om te kijken wat we voor je kunnen doen?"

De formule: **naam + concrete referentie naar hun aanvraag + één ja/nee vraag**. Geen lange uitleg, geen bedrijfsverhaal, geen link naar je website.

## Waarom WhatsApp of SMS — geen e-mail

E-mail heeft in Nederland een open rate van rond de 20-25% voor dit soort berichten. WhatsApp zit boven de 90%. SMS ergens tussenin, maar met bijna 100% zichtbaarheid.

Onze vuistregel:
- **WhatsApp** wanneer de lead het nummer heeft ingevuld en toestemming heeft gegeven — dit is verreweg de winnaar
- **SMS** als backup wanneer WhatsApp niet mogelijk is (zakelijke leads bijvoorbeeld, of oudere doelgroepen)
- **E-mail** alleen als derde optie, en dan met een korte onderwerpregel zoals "Nog interesse, Mark?"

Voor financieel adviseurs met een wat oudere doelgroep werkt SMS vaak beter dan WhatsApp. Test het in jouw markt.

## De stop-conditie: voorkom dat je gek overkomt

Dit is waar automatiseringen kunnen ontsporen. Stel: een lead reageert 47 uur na de eerste aanvraag en je secretaresse plant een afspraak in. Een uur later stuurt jouw automatisering alsnog "Hoi Mark, nog steeds actueel?" — pijnlijk.

Twee manieren om dit te voorkomen:

1. **Statuswijziging als exit**: zodra iemand in je CRM van "geen reactie" naar "gebeld", "afspraak gepland" of "niet geïnteresseerd" wordt gezet, breekt de automation af
2. **Inkomende berichten detecteren**: als je WhatsApp Business API of een SMS-provider met inbound webhook gebruikt, kun je automatisch de flow stoppen zodra de lead reageert — via welk kanaal dan ook

Bouw beide in. Dubbele borging, geen ongelukken.

---

Dit is het soort automatisering dat in één middag staat en direct verschil maakt. Wil je weten hoe je opvolging er nu uitziet en waar je concreet leads laat liggen? [Plan een gratis strategiegesprek](/strategiegesprek) — dan lopen we samen jouw huidige flow door.
