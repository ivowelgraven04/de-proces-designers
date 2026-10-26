---
title: "Case: hoe een hypotheekadviseur zijn no-show daalde van 32% naar 7%"
slug: "case-hoe-een-hypotheekadviseur-zijn-no-show-daalde-van-32-naar-7"
date: "2026-10-26"
excerpt: "Een hypotheekadviseur verloor maandelijks €14.000 aan no-shows, ondanks reminders per mail en SMS. We laten zien welke aanpak zijn opkomstpercentage structureel omhoog bracht."
heroImage: "https://images.unsplash.com/photo-1714974528718-b3b52f91c334?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHwzfHxmaW5hbmNpYWwlMjBhZHZpc29yJTIwbWVldGluZ3xlbnwxfDB8fHwxNzkzMDE2ODk4fDA&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "a group of people sitting around a table"
heroImageCredit: "Foto door Vitaly Gariev op Unsplash"
tags: ["Automatisering", "Leadgeneratie", "Funnels"]
sector: "financieel"
postType: "case-study"
readingTime: 6
author: "De Proces Designers"
---

## De uitgangssituatie: veel leads, te weinig gesprekken

Een hypotheekkantoor uit Noord-Brabant (vier adviseurs, gevestigd in een middelgrote stad) kwam bij ons met een probleem dat op het eerste gezicht niet eens zo erg leek. De marketing liep namelijk prima. Via Meta Ads haalden ze gemiddeld 180 leads per maand binnen tegen een CPL van €62. Mensen die een hypotheekcheck of oriëntatiegesprek aanvroegen, netjes via een landingspagina en een korte intake-quiz.

Het probleem zat verderop in de funnel. Van de leads die daadwerkelijk een kennismakingsgesprek inplanden, kwam **32% niet opdagen**. Geen afmelding, geen bericht, gewoon een lege agenda-slot waar een adviseur een uur voor had vrijgemaakt.

Reken even mee wat dat kostte:

- Gemiddeld 95 ingeplande gesprekken per maand
- 32% no-show = 30 gemiste gesprekken
- Conversie van gesprek naar klant lag rond de 25%
- Gemiddelde dealwaarde (provisie + advieskosten): €1.850

Dat is **ruim €14.000 aan misgelopen omzet per maand**. En dan tellen we de verspilde advertising spend op die no-shows nog niet eens mee: 30 leads × €62 = bijna €1.900 die effectief verdampte.

De eigenaar had al van alles geprobeerd. Een reminder-mail een dag van tevoren. Een SMS twee uur voor het gesprek. Een strengere tekst op de bevestigingspagina ("Zorg dat je er echt bent"). Allemaal passieve maatregelen, allemaal met beperkt resultaat.

De vraag die hij ons stelde was simpel: "Kunnen jullie zorgen dat de mensen die boeken, ook écht komen opdagen?"

## De aanpak: van passieve reminders naar actieve herbevestiging

Voordat we één regel automatisering bouwden, hebben we eerst gekeken naar wat er precies gebeurde tussen boeking en afspraak. We hebben 40 no-shows nagebeld om te begrijpen waarom ze niet waren verschenen. De antwoorden waren verrassend consistent:

1. "Ik was het eigenlijk vergeten"
2. "Ik had het druk en wilde het verzetten, maar wist niet precies hoe"
3. "Ik twijfelde of het echt nodig was, en toen is het blijven liggen"

Geen van die mensen was per se afwijzend. Ze hadden simpelweg geen moment gehad waarop ze bewust 'ja' zeiden tegen de afspraak nadat ze hem in hun agenda hadden gezet. Een reminder lezen is passief. Op een reminder réageren is actief — en dat maakt het verschil.

Op basis daarvan hebben we een flow ontworpen rond één kernprincipe: **de lead moet op minstens één moment actief bevestigen dat hij of zij komt.** Niet weer een mailtje dat je kunt wegklikken, maar een vraag die om een antwoord vraagt.

### De techniek onder de motorkap

De bestaande stack bestond uit Calendly voor de agenda en HubSpot voor het CRM. We hebben daar WhatsApp Business API aan gekoppeld via Make (voorheen Integromat), met de volgende logica:

- Zodra iemand een afspraak boekt via Calendly, triggert dat een scenario in Make
- Make werkt het HubSpot-contact bij met afspraakdetails en status
- Vervolgens worden alle berichten vanuit één centrale timeline aangestuurd
- Reacties via WhatsApp worden teruggesynct naar HubSpot, zodat de adviseur in één overzicht ziet wie bevestigd heeft, wie niet, en wie wil verzetten

Belangrijk detail: WhatsApp Business API vereist goedgekeurde message templates voor berichten buiten het 24-uursvenster. We hebben vier templates ingediend bij Meta, afgestemd op de AFM-regelgeving rond communicatie door financiële dienstverleners. Geen beloftes, geen pushy taal, alleen functionele afspraakinformatie.

### De flow in detail

Zo zag de uiteindelijke sequence eruit vanaf het moment van boeking:

**Direct na boeking (binnen 2 minuten):**
Een WhatsApp-bericht met de bevestiging van de afspraak, naam van de adviseur, locatie en een korte zin: "Je ontvangt over een paar dagen een mailtje met wat je kunt voorbereiden." Hiermee wordt WhatsApp meteen gevestigd als het primaire communicatiekanaal.

**Dag -3 (e-mail):**
Een voorbereidingsmail met échte waarde. Geen "verheug je je al?"-tekst, maar een checklist van documenten die handig zijn om bij de hand te hebben (laatste jaaropgave, overzicht spaargeld, eventuele BKR-registraties), plus een korte uitleg over wat er in het gesprek aan bod komt. Dit heeft twee doelen: de lead voelt dat er een serieus proces loopt, en de perceived value van het gesprek stijgt.

**Dag -1 (WhatsApp, het kernmoment):**
Dit is waar de hele flow om draait. Een persoonlijk bericht met de tekst: "Hoi [voornaam], morgen om [tijd] staat je gesprek met [adviseur]. Lukt het je nog steeds? Antwoord met JA om te bevestigen, of met VERZETTEN als het niet uitkomt."

Reageert iemand met JA? Dan krijgt hij een korte bevestiging en gaat de afspraak door. Reageert iemand met VERZETTEN? Dan krijgt hij automatisch een link naar een rebooking-pagina. Reageert iemand helemaal niet binnen 4 uur? Dan belt een assistente actief na.

**Dag van de afspraak (2 uur van tevoren, WhatsApp):**
Een korte reminder met de locatie, een Google Maps-link, parkeerinformatie en het directe telefoonnummer van de adviseur voor onverwachte situaties. Praktisch, functioneel, niet pushy.

De hele flow draait volautomatisch, maar met één menselijke uitzondering: de niet-reageerders op dag -1. Die worden handmatig nagebeld, omdat we uit de pilotfase merkten dat telefonisch contact in die groep de redding bood voor ongeveer de helft van de dreigende no-shows.

## Het resultaat na 6 maanden

De flow ging live na een bouwperiode van ongeveer drie weken. De eerste maand gebruikten we om te meten, aan te passen en templates te optimaliseren. Vanaf maand twee draaide het systeem stabiel.

De cijfers na een halfjaar:

- **No-show percentage gedaald van 32% naar 7%**
- Dat betekent 23 extra gesprekken per maand die wél doorgingen
- Bij een conversie van 25% zijn dat circa 6 extra klanten per maand
- Gemiddelde dealwaarde: €1.850
- **Extra omzet per maand: ongeveer €10.600**
- **Over 6 maanden: ruim €84.000 extra omzet** zonder één euro extra ad spend
- Totale kosten van het bouwen en draaien van de automatisering (inclusief maandelijkse tooling): minder dan €4.000 over diezelfde periode
- **Terugverdientijd op de investering: 11 dagen**

Een ander effect dat de eigenaar niet had voorzien: de adviseurs waren merkbaar meer gemotiveerd. Niemand vindt het leuk om de derde lege afspraak op een dag te hebben. Door de drastische daling van no-shows werd elke dag productiever en voorspelbaarder.

## Wat je hiervan kunt meenemen

Deze case is specifiek voor een hypotheekkantoor, maar de principes gelden breder voor elk servicebedrijf dat met geboekte gesprekken werkt — of je nu financieel adviseur, pensioenspecialist of vermogensbeheerder bent.

### Actieve herbevestiging verslaat passieve reminders

De klassieke reminder ("Vergeet onze afspraak morgen niet!") werkt beperkt omdat het geen actie vraagt. Zodra je iemand dwingt om bewust 'ja' te typen, gebeurt er iets psychologisch belangrijks: ze committeren zich opnieuw. En degenen die níet willen komen, geven dat eerder aan — waardoor je het slot nog kunt invullen met een andere lead of werk.

Uit de data van deze case: van de mensen die wel een reminder ontvingen maar niet actief bevestigden, kwam ongeveer 60% uiteindelijk niet opdagen. Van de mensen die wél actief 'JA' typten, verscheen 94% op het gesprek.

### WhatsApp heeft bij deze doelgroep een enorme voorsprong op e-mail

In de meetperiode zagen we een gemiddelde openrate van 89% op WhatsApp-berichten binnen twee uur, tegenover 23% voor e-mail binnen 24 uur. Dat is bijna vier keer zo hoog. Reactiepercentages liepen vergelijkbaar uiteen: 71% reactie op WhatsApp-vragen tegenover 8% op e-mail-vragen.

Belangrijk om toe te voegen: dit werkt niet in alle sectoren even goed. Voor hypotheekklanten (vaak dertigers en veertigers, gewend aan WhatsApp voor zakelijke communicatie met makelaars, notarissen en adviseurs) is het ideaal. Voor een doelgroep van 70-plussers zou e-mail of telefoon beter werken.

### De waarde zit niet in de tools, maar in de flow

Calendly, HubSpot, Make en WhatsApp Business API — stuk voor stuk gereedschappen die duizenden bedrijven gebruiken. Het verschil zit in hoe je ze combineert, welke momenten je kiest, en welke micro-beslissingen je neemt in de toon van elk bericht. Een slechte flow in de duurste tools scoort nog altijd slechter dan een goed doordachte flow in simpele tools.

### Begin bij je grootste lek, niet bij je grootste trofee

De eigenaar had makkelijk €15.000 per maand extra kunnen uitgeven aan advertising om zijn omzet te laten groeien. Maar met datzelfde budget zou hij óók 32% van die extra leads kwijtraken aan no-shows. Door eerst het lek te dichten, verdiende hij meer uit zijn bestaande leads dan door erbij te kopen. Negen van de tien keer is dát de slimste eerste stap.

---

*Loop je tegen vergelijkbare lekken aan in je eigen funnel — no-shows, trage opvolging, leads die stilletjes doodbloeden? In een vrijblijvend strategiegesprek kijken we samen waar bij jou de grootste winst te halen is. [Plan een gesprek in →](#)*
