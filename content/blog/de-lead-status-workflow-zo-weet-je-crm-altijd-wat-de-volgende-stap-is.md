---
title: "De lead-status workflow: zo weet je CRM altijd wat de volgende stap is"
slug: "de-lead-status-workflow-zo-weet-je-crm-altijd-wat-de-volgende-stap-is"
date: "2026-06-19"
excerpt: "Je CRM hoort je niet alleen te vertellen wie je leads zijn, maar vooral wat de volgende stap is. Zo bouw je een lead-status workflow die dat elke dag automatisch regelt."
heroImage: "https://images.unsplash.com/photo-1763718432504-7716caff6e99?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHw0fHx3b3JrZmxvdyUyMGRhc2hib2FyZCUyMHNjcmVlbnxlbnwxfDB8fHwxNzgxODY0NjEyfDA&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "Student dashboard with quick access and alerts."
heroImageCredit: "Foto door prashant hiremath op Unsplash"
tags: ["Automatisering", "Leadgeneratie", "Niche"]
readingTime: 7
author: "De Proces Designers"
---

Je hebt waarschijnlijk een CRM. Misschien HubSpot, misschien Pipedrive, misschien iets als Teamleader of een eigen Excel-achtige oplossing. En als je eerlijk bent: je gebruikt het vooral als digitaal adressenboek. Namen, telefoonnummers, een notitie hier en daar over wat er besproken is.

Het probleem? Maandagochtend open je je CRM en zie je 87 contacten. Wie moet je vandaag bellen? Welke offerte ligt al twee weken stil? Welke lead heeft gisteren je e-mail geopend maar nog niet gereageerd? Geen idee. Dus bel je degenen die je toevallig nog vers in je hoofd hebt — en de rest verdwijnt langzaam in het niets.

Dat is zonde. Want een CRM hoort je niet alleen te vertellen *wie* je leads zijn, maar vooral *wat de volgende stap is*. Elke dag, automatisch, zonder dat je hoeft na te denken.

In deze guide leggen we uit hoe je een lead-status workflow opzet die dat regelt. Geen theorie, maar de exacte setup die wij bouwen voor dakdekkers, letselschadekantoren en financieel adviseurs.

## Het verschil tussen status en stadium (en waarom dit alles bepaalt)

De meeste CRM's worden uit de doos geleverd met drie of vier opties: nieuwe lead, in behandeling, gewonnen, verloren. Klinkt logisch, maar het is veel te grof.

"In behandeling" kan tien dingen betekenen. Je hebt gebeld maar niemand kreeg te pakken. Je hebt een afspraak gepland voor volgende week. Je hebt een offerte gestuurd en wacht op antwoord. Je hebt drie keer geappt zonder reactie. Allemaal "in behandeling" — terwijl ze totaal verschillende vervolgacties vragen.

Wat je nodig hebt is een onderscheid tussen:

- **Stadium**: in welke fase van het verkoopproces zit deze lead?
- **Status**: wat is de actuele situatie en welke actie is nu nodig?

Een lead kan in het stadium "offerte uit" zitten, met de status "wacht op reactie — opvolgen over 3 dagen". Dat onderscheid maakt dat je CRM ineens kan vertellen wat er vandaag moet gebeuren.

## De 6 statussen die elk servicebedrijf nodig heeft

Na honderden trajecten met lokale bedrijven kwamen we op zes statussen die werken voor vrijwel elk servicebedrijf. Niet meer, want dan wordt het onoverzichtelijk. Niet minder, want dan mis je nuance.

### 1. Nieuw

De lead is net binnengekomen via je formulier, advertentie of telefoon. Er is nog geen contact geweest. Doel van deze status: zo snel mogelijk eruit. Idealiter binnen 5 minuten.

### 2. Gecontacteerd

Je hebt een eerste poging gedaan — gebeld, geappt, een e-mail gestuurd. Maar de lead heeft nog niet teruggereageerd of er is nog geen duidelijke vervolgafspraak.

### 3. Afspraak gepland

De lead heeft een afspraak in de agenda staan. Een opname, een adviesgesprek, een telefonische intake. Vanaf hier is het concreet.

### 4. Offerte uit

Je hebt een voorstel of offerte verstuurd. De bal ligt bij de klant. Hier gaan de meeste deals stuk — niet omdat de prijs te hoog is, maar omdat er niet wordt opgevolgd.

### 5. Opvolging

Een aparte status voor leads die "warm" zijn maar nog niet rond. Misschien wilden ze wachten tot na de vakantie. Misschien moeten ze het bespreken met hun partner. Belangrijk: deze leads horen niet weg te zakken, ze horen op een vaste opvolgcadans.

### 6. Gewonnen / Verloren

De deal is rond, of definitief afgevallen. Bij "verloren" is het cruciaal dat je een reden noteert (te duur, ging naar concurrent, geen budget, timing klopte niet). Die data is goud voor je marketing.

## Waarom statuswissels automatisch moeten gebeuren

Hier zit de grootste winst: een lead-status mag nooit afhankelijk zijn van een medewerker die eraan denkt om iets te wijzigen. Want dat gebeurt niet. Mensen vergeten dat. Of doen het inconsequent.

Statussen moeten verschuiven op basis van triggers — gebeurtenissen die je systeem zelf kan detecteren.

Een paar voorbeelden uit onze praktijk:

- **Formulier ingevuld** → status wordt automatisch "Nieuw", er gaat direct een SMS naar de verkoper en een bevestigingsmail naar de lead
- **Afspraak gepland in Calendly of Google Agenda** → status springt naar "Afspraak gepland", de lead krijgt automatisch een herinnering 24 uur vooraf
- **Offerte verstuurd via je offertetool** → status wordt "Offerte uit" en er wordt een opvolgtaak ingepland voor over 3 werkdagen
- **E-mail geopend maar geen reactie binnen 5 dagen** → status springt naar "Opvolging", er komt een taak om persoonlijk te bellen
- **Geen activiteit in 14 dagen** → de lead krijgt automatisch een "wakker-mail" en de verkoper krijgt een notificatie

Dit klinkt complex, maar het is precies het soort werk dat tools als Make (voorheen Integromat) of Zapier in een middag voor je inrichten — als je weet wat je doet.

## Per status een vervolgactie automatiseren

Een status zonder vervolgactie is nutteloos. Voor elke status moet duidelijk zijn: wat gebeurt er nu, automatisch én door wie?

Hieronder hoe wij dit standaard inrichten voor onze klanten:

**Status: Nieuw**
- Automatisch: SMS naar verkoper met naam + nummer lead, bevestigingsmail naar lead
- Taak voor verkoper: bellen binnen 5 minuten
- Als geen contact binnen 1 uur: tweede belpoging, daarna WhatsApp

**Status: Gecontacteerd**
- Automatisch: e-mail met meer informatie + agenda-link
- Taak: tweede belpoging na 1 dag, derde na 3 dagen
- Na 5 dagen geen reactie: status naar "Opvolging" of "Verloren"

**Status: Afspraak gepland**
- Automatisch: bevestiging, herinnering 24u vooraf, herinnering 1u vooraf
- Bij no-show: automatische e-mail met optie om opnieuw te plannen
- Na afspraak: notificatie aan verkoper om binnen 24u offerte te sturen

**Status: Offerte uit**
- Automatisch: opvolgtaak na 3 werkdagen, herinneringsmail na 5 werkdagen
- Bij e-mail geopend zonder reactie: notificatie aan verkoper "warm — bel nu"
- Na 10 werkdagen geen beweging: status naar "Opvolging"

**Status: Opvolging**
- Automatisch: maandelijkse waardevolle e-mail (geen verkoop, wel relevant)
- Taak: kwartaalcheck door verkoper
- Bij heractivering (klikt op link, antwoordt): direct terug naar "Gecontacteerd"

**Status: Gewonnen / Verloren**
- Bij gewonnen: onboarding-flow start, verzoek om review na oplevering
- Bij verloren: reden noteren, lead gaat in nurture-lijst voor lange termijn

## Praktijkvoorbeeld: dakdekker met HubSpot + Make

Eén van onze klanten — een dakdekkersbedrijf in Brabant met 12 medewerkers — kreeg via Facebook-advertenties zo'n 80 leads per maand. Probleem: hun conversie was 8%. De leads kwamen wel binnen, maar het werd een chaos.

Wat we deden:

1. In HubSpot zes statussen ingericht zoals hierboven beschreven
2. Via Make een koppeling gebouwd tussen hun advertentieformulier, Calendly, en hun offertetool (Offorte)
3. Triggers ingesteld: zodra een lead binnenkomt → SMS via Twilio naar de verkoper + bevestigingsmail
4. Calendly gekoppeld aan HubSpot: afspraak gepland = status verandert automatisch
5. Offorte gekoppeld: offerte verstuurd = status "Offerte uit" + taak na 3 dagen
6. Dagelijks dashboard met "leads die actie nodig hebben vandaag"

Resultaat na drie maanden: conversie van 8% naar 19%. Niet omdat er meer leads kwamen, maar omdat er minder verdwenen.

## Hetzelfde in Pipedrive

Pipedrive werkt iets anders — daar zijn "stages" (pipeline-fases) en "labels" gescheiden. Wij gebruiken de pipeline-fases als stadium en labels of custom fields als status.

Met Zapier of Make koppel je dan:
- Lead-formulier → Pipedrive deal aanmaken in fase "Nieuw"
- Calendly → fase verschuift naar "Afspraak gepland"
- E-mail-tracking (via Mailtrack of HubSpot Sales) → notificatie bij openen
- Geautomatiseerde taken via Pipedrive's eigen automatisering of via Make

Het principe is hetzelfde: laat het systeem het denkwerk doen.

## De wekelijkse dashboard-check

Een goed status-systeem geeft je elke maandagochtend antwoord op één vraag: **welke leads staan stil, en waarom?**

Bouw een simpel dashboard (kan in HubSpot, Pipedrive of zelfs Google Data Studio) met deze drie views:

1. **Leads zonder activiteit > 7 dagen**: hier zit je grootste lek
2. **Offertes uit > 5 werkdagen zonder reactie**: deze moeten vandaag een belletje krijgen
3. **Status-verdeling**: zit alles in "Nieuw" of "Gecontacteerd"? Dan stagneert je verkoopproces

Plan elke maandagochtend 20 minuten om dit door te lopen. Niet langer. Als je systeem goed staat, hoef je alleen de uitzonderingen op te pakken.

## Hoe je begint (zonder alles tegelijk om te gooien)

Het kost gemiddeld 2 tot 4 weken om dit goed neer te zetten, afhankelijk van je huidige situatie. Begin niet door alles te willen automatiseren — begin met de basis.

**Week 1**: definieer je 6 statussen en zet ze in je CRM. Train je team om consistent te updaten (handmatig, voor nu).

**Week 2**: koppel je leadformulieren aan je CRM. Zorg dat elke nieuwe lead automatisch als "Nieuw" binnenkomt met directe notificatie.

**Week 3**: automatiseer de afspraak-flow. Calendly of Google Agenda gekoppeld aan je CRM, met automatische status-updates en herinneringen.

**Week 4**: bouw de opvolgflows voor "Offerte uit" en "Opvolging". Dit is waar de meeste deals worden gewonnen of verloren.

Daarna kun je verfijnen: meer triggers, slimmere segmentatie, betere rapportages. Maar de basis moet eerst staan.

---

Wil je weten hoe dit er voor jouw bedrijf concreet uit zou zien? In een gratis strategiegesprek kijken we naar je huidige proces en laten we zien waar de grootste lekken zitten — en hoe je ze dichtrolt. [Plan een gesprek in](#) wanneer het je uitkomt.
