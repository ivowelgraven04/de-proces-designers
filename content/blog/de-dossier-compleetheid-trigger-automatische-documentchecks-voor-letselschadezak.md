---
title: "De dossier-compleetheid trigger: automatische documentchecks voor letselschadezaken"
slug: "de-dossier-compleetheid-trigger-automatische-documentchecks-voor-letselschadezak"
date: "2026-11-23"
excerpt: "Ontdek hoe je CRM zelf ontbrekende documenten signaleert en cliënten automatisch herinnert, zodat dossiers niet weken stilliggen door een vergeten loonstrook of medische machtiging."
heroImage: "https://images.unsplash.com/photo-1583521214690-73421a1829a9?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHwzfHxsZWdhbCUyMGRvY3VtZW50cyUyMGRlc2t8ZW58MXwwfHx8MTc5NTQyOTE3OXww&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "stacks of paper documents and file folders"
heroImageCredit: "Foto door Wesley Tingey op Unsplash"
tags: ["Automatisering", "Niche"]
sector: "letselschade"
postType: "tip"
readingTime: 3
author: "De Proces Designers"
---

In letselschadezaken ligt de bottleneck zelden bij jouw juridische werk. Het ligt bij documenten die maar niet binnenkomen. Een ontbrekend politierapport, een niet-ondertekende medische machtiging, loonstroken die de cliënt "nog even gaat opzoeken" — en ondertussen staat het dossier stil. Weken. Soms maanden.

De oplossing is geen extra secretaresse. Het is een CRM die zelf weet welke documenten ontbreken en de cliënt eigenhandig achter de broek zit.

## Waarom dit het grootste tijdlek in je kantoor is

Gemiddeld wacht een letselschadebehandelaar in 60-70% van de lopende dossiers op minimaal één stuk aanvullende documentatie. Per dossier kost dat achteraf aan rappelleren, mailen en bellen al snel 2 tot 4 uur per maand aan secretariaatstijd. Vermenigvuldig dat met 150 lopende zaken en je begrijpt waarom je team nooit vooruit lijkt te komen.

Erger nog: hoe langer het dossier open staat, hoe lager de bereidheid van de cliënt om nog actief mee te werken. De emotie van het ongeval zakt, het leven gaat door, en jouw mail belandt onder in de stapel.

## Stap 1: koppel een checklist aan het zaaktype

Niet elk letselschadedossier heeft dezelfde documenten nodig. Begin met drie basis-templates in je CRM:

- **Verkeersongeval**: politierapport (proces-verbaal), schadeformulier, foto's ongevalslocatie, medische machtiging, WA-gegevens tegenpartij, loonstroken 3 maanden voor ongeval
- **Bedrijfsongeval**: ongevalsrapportage werkgever, melding Inspectie SZW, arbeidsovereenkomst, loonstroken, medische machtiging, verklaring collega-getuigen
- **Medische fout**: volledig medisch dossier, kopie klacht aan ziekenhuis/zorgverlener, second opinion (indien aanwezig), medische machtiging, bewijs van geleden kosten

In Pipedrive of HubSpot maak je per type een custom field aan voor elk document met waarde "ontbreekt / aangevraagd / ontvangen / goedgekeurd". Zodra de behandelaar bij intake het zaaktype selecteert, verschijnt de juiste checklist automatisch.

## Stap 2: de herinneringsflow die geen cliënt vergeet

Dit is waar Make (voormalig Integromat) het verschil maakt. Per ontbrekend document bouw je één flow:

1. **Dag 0**: direct na intake automatische e-mail met uitleg welke documenten nodig zijn, waarom, en een persoonlijke upload-link
2. **Dag 2**: vriendelijke herinnerings-e-mail als er nog niets is geüpload
3. **Dag 5**: WhatsApp-bericht via de Twilio- of 360dialog-integratie — kort, persoonlijk, met dezelfde link
4. **Dag 8**: interne taak in het CRM voor de behandelaar met belsignaal: "Bel cliënt X over ontbrekend document Y"

Zodra het document binnen is en op "ontvangen" staat, stopt de flow automatisch. Zet je het op "goedgekeurd", dan triggert dat de volgende processtap in het dossier.

## Stap 3: vervang e-mailbijlagen door een upload-portaal

Dit onderdeel wordt vaak onderschat. Een cliënt die een loonstrook moet mailen, moet eerst inloggen bij de werkgever, downloaden, zoeken in zijn mailbox naar jouw adres, een bijlage toevoegen, misschien iets typen. Drempel: hoog.

Een upload-link (bijvoorbeeld via Content Snare, Clustdoc of een eigen portaal gekoppeld aan je CRM) laat de cliënt op zijn telefoon in 30 seconden een foto maken en uploaden. Resultaat: doorlooptijd van documentverzameling halveert gemiddeld van 18 naar 8 dagen.

Bonus: elk geüpload bestand krijgt automatisch de juiste tag en wordt in de juiste dossiermap geplaatst. Geen secretariaat dat bestanden hoeft te verplaatsen.

## Wat je concreet nodig hebt

- CRM met custom fields per documenttype (Pipedrive of HubSpot)
- Make-account voor de automatiseringsflows
- Upload-tool met API (Content Snare werkt goed met Nederlandse privacy-eisen)
- WhatsApp Business API via 360dialog of Twilio
- Eén dag inregelen, één dag testen

De investering verdien je terug in de eerste maand aan bespaarde secretariaatstijd — nog los van de kortere doorlooptijd per zaak.

---

Wil je weten hoe dit er voor jouw kantoor concreet uit zou zien? In een gratis strategiegesprek kijken we samen naar je huidige dossierproces en laten we zien waar de grootste tijdwinst zit.
