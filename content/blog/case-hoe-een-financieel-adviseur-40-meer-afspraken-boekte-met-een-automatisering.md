---
title: "Case: hoe een financieel adviseur 40% meer afspraken boekte met één automatisering"
slug: "case-hoe-een-financieel-adviseur-40-meer-afspraken-boekte-met-een-automatisering"
date: "2026-10-29"
excerpt: "Een financieel adviseur kreeg 180 leads per maand binnen, maar boekte amper afspraken. We leggen uit welke ene automatisering het aantal gesprekken met 40% liet stijgen."
heroImage: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHwyfHxmaW5hbmNpYWwlMjBhZHZpc29yJTIwbGFwdG9wfGVufDF8MHx8fDE3OTMyNzYxOTF8MA&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "person typing on silver MacBook"
heroImageCredit: "Foto door Burst op Unsplash"
tags: ["Automatisering", "Leadgeneratie", "Funnels"]
sector: "financieel"
postType: "case-study"
readingTime: 6
author: "De Proces Designers"
---

## Het uitgangspunt: 180 leads, maar waar bleven de afspraken?

Een onafhankelijk financieel adviseur in Oost-Nederland klopte vorig jaar bij ons aan met een probleem dat we vaker zien bij kantoren in deze sector: de leads kwamen binnen, maar de agenda bleef halfleeg.

De cijfers waren op papier niet eens slecht. Via Meta Ads werden er maandelijks rond de **180 leads** gegenereerd, met een gemiddelde CPL van **€47**. Het ging om mensen die interesse hadden in hypotheekadvies, pensioenplanning of vermogensopbouw — relevante doelgroep, prima intentie. Toch boekte uiteindelijk slechts **12% van die leads een afspraak**. Dat betekent concreet: van de 180 leads kwamen er circa 22 in de agenda terecht.

Toen we onder de motorkap keken, was de oorzaak snel te vinden. De opvolging was volledig handmatig. Leads kwamen binnen in een gedeelde mailbox, de adviseur of zijn assistent belde of mailde ze terug — als er tijd was. De gemiddelde reactietijd lag op **7 uur**. In de weekenden kon dat oplopen tot anderhalve dag. En in de financiële sector, waar iemand doorgaans drie tot vijf adviseurs tegelijkertijd aanvraagt, is 7 uur gewoon te laat. Dan heeft de concurrent al teruggebeld, een eerste gesprek ingepland en vertrouwen opgebouwd.

Daarbovenop kwam een no-show percentage van **28%**. Van de afspraken die wél werden gemaakt, kwam dus bijna een derde niet opdagen. Zonde van de tijd, zonde van het advertentiebudget, en frustrerend voor een adviseur die zijn week vooraf had ingedeeld.

De vraag was helder: hoe halen we meer rendement uit dezelfde 180 leads, zonder het advertentiebudget te verhogen?

## De aanpak: één gekoppelde flow van quiz tot WhatsApp

We hebben bewust niet gekozen voor "meer leads". Het fundament klopte niet, en dan is extra budget pompen in een lek vat. De aanpak werd opgebouwd rond drie principes: **kwalificeren bij de voordeur, binnen 5 minuten reageren, en opvolgen op het kanaal waar mensen écht reageren.**

### Stap 1: quiz-funnel in plaats van losse leadform

De bestaande leadforms op Meta waren simpel: naam, e-mail, telefoonnummer. Dat levert leads op, maar geen context. We hebben de advertenties doorverwezen naar een **quiz-funnel** met zes tot acht vragen, afhankelijk van het gekozen onderwerp. De vragen waren opgebouwd rond drie thema's:

- **Hypotheek**: koopplannen, huidige situatie, geschatte hypotheeksom, timing
- **Pensioen**: leeftijd, dienstverband (loondienst/ondernemer), huidige voorzieningen
- **Vermogen**: beschikbaar vermogen, risicoprofiel, doel (groei vs. inkomen)

De quiz deed twee dingen tegelijk. Hij **kwalificeerde** de lead (iemand die aangaf "oriënterend" te zijn kreeg een andere opvolging dan iemand die binnen 3 maanden een huis wilde kopen), en hij **investeerde de lead**. Mensen die zes vragen hebben beantwoord, zijn mentaal al verder dan iemand die alleen een formuliertje heeft achtergelaten. De show-up rate op afspraken stijgt daar vrijwel altijd van.

### Stap 2: directe push naar Pipedrive

Alle quiz-antwoorden werden via Make doorgezet naar Pipedrive, met de volledige context in het dealprofiel. De adviseur zag dus niet "Jan de Vries – telefoonnummer", maar "Jan de Vries – hypotheek – €385.000 – koopt binnen 3 maanden – eerste woning".

**Waarom Pipedrive en niet HubSpot?** Een eerlijke vraag die we vaak krijgen. HubSpot is uitgebreider, maar voor een kantoor van 4 FTE is het overkill en relatief duur. Pipedrive is pragmatisch, visueel en de pijplijnweergave sluit beter aan bij hoe adviseurs daadwerkelijk werken: lead → eerste contact → oriëntatiegesprek → adviesgesprek → productafname. Minder knoppen, meer gebruik.

### Stap 3: WhatsApp binnen 4 minuten

Hier zat de echte hefboom. Zodra een lead binnenkwam in Pipedrive, triggerde Make een geautomatiseerd **WhatsApp-bericht** via de WhatsApp Business API. Gemiddelde reactietijd: **4 minuten**. Dag en nacht, zeven dagen per week.

Het eerste bericht was persoonlijk opgesteld, verwees naar de quiz-antwoorden ("Je gaf aan dat je oriënteert op een hypotheek rond €385.000...") en bood een korte reactie plus de aankondiging dat er binnen een werkdag persoonlijk contact zou volgen. Bericht twee, 20 minuten later, bevatte een **Calendly-link** waarmee de lead direct zelf een oriëntatiegesprek kon plannen op een moment dat uitkwam.

### Stap 4: Make boven Zapier

Voor de automatisering kozen we Make (voorheen Integromat) in plaats van Zapier. **Waarom?** Bij meerstapsflows met voorwaardelijke logica — "als lead = hypotheek én koopdatum < 3 maanden, dan ander bericht dan bij pensioen-lead" — wordt Zapier snel duur en onoverzichtelijk. Make rekent per operatie in plaats van per taak, en de visuele flow-editor maakt complexere routings beheersbaar. Voor dit kantoor scheelde dat uiteindelijk zo'n €80 per maand aan abonnementskosten.

### Stap 5: AFM-compliance ingebakken

Dit is het onderdeel waar veel marketingbureaus overheen stappen, maar in de financiële sector is het niet onderhandelbaar. Alle geautomatiseerde berichten zijn in samenwerking met de adviseur opgesteld met oog voor **AFM-richtlijnen**:

- Geen productaanbevelingen of concrete adviezen in de berichten
- Duidelijke vermelding dat het om een oriënterend gesprek gaat, geen advies
- Correcte vermelding van het kantoor en de inschrijving bij de AFM
- Opt-out mogelijkheid in elk WhatsApp-bericht

Dat laatste punt is extra belangrijk omdat WhatsApp Business strikter is dan e-mail als het om commerciële communicatie gaat. De quiz bevatte daarom expliciete toestemming voor WhatsApp-contact, met heldere formulering.

## De resultaten na 90 dagen

Na drie maanden draaien hebben we de cijfers naast elkaar gelegd. Zelfde advertentiebudget, zelfde doelgroep, zelfde adviseur — ander proces.

- **Afsprakenratio: van 12% naar 22%.** Op 180 leads betekent dat niet 22 maar circa 40 afspraken per maand. Bijna een verdubbeling.
- **No-show percentage: van 28% naar 9%.** Door directe reactie, een persoonlijk WhatsApp-contactpunt en een automatische herinnering 24 uur en 2 uur voor de afspraak.
- **CPL: van €47 naar €41.** Niet omdat de advertenties beter werden, maar omdat de quiz-funnel iets beter converteerde dan het losse leadform. Een meevaller bovenop de rest.
- **Reactietijd: van 7 uur naar 4 minuten gemiddeld.**
- **Terugverdientijd van het bouwproject: 6 weken.** Daarna draaide het systeem puur winst op de bestaande advertentieinvestering.

Als je het in omzet vertaalt: waar het kantoor eerst gemiddeld 22 afspraken per maand had en daar een bepaald conversie-percentage naar klant op had, zaten ze na 90 dagen op ruim 36 effectieve afspraken (40 geboekt minus 9% no-show). Dat is **64% meer gesprekken** met potentiële klanten, zonder één euro extra aan advertenties.

## De lessen die je mee kunt nemen

Deze case is specifiek, maar de principes zijn breed toepasbaar in de financiële sector.

### 1. Reactietijd is belangrijker dan budget

Elke studie over leadopvolging wijst dezelfde kant op: wie binnen 5 minuten reageert, heeft dramatisch meer kans om de deal te winnen dan wie binnen een uur reageert. In de financiële sector, waar vertrouwen en snelheid elkaar versterken, is dat effect nog sterker. Voordat je overweegt om je advertentiebudget te verdubbelen: controleer eerst hoe lang het duurt voordat een nieuwe lead iets van jou hoort.

### 2. WhatsApp verslaat e-mail — bijna altijd

In onze metingen bij financiële kantoren zien we open rates van **85–95% op WhatsApp**, versus 20–30% op e-mail. En de responsrate ligt vaak drie tot vier keer hoger. Mensen behandelen WhatsApp als persoonlijk, e-mail als commercieel. Voor een oriënterend adviesgesprek is dat precies het verschil tussen "ik reageer wel een keer" en "ik reageer nu".

### 3. Drie touchpoints maken het verschil

In deze flow zaten drie momenten die cruciaal waren: het **eerste WhatsApp-bericht binnen 5 minuten**, de **tweede boodschap met Calendly-link** 20 minuten later, en de **herinnering 2 uur voor de afspraak**. Weinig kantoren hebben alle drie goed geregeld. Als je start, begin dan met het eerste. Dat alleen al tilt je afsprakenratio zichtbaar omhoog.

### 4. Kwalificeer vooraan, niet achteraan

De quiz leek extra moeite voor de lead, maar leverde juist betere leads op. Mensen die niet serieus zijn, haken af bij vraag drie. De mensen die doorzetten, zijn warm. Dat scheelt de adviseur enorm veel tijd aan ongeschikte gesprekken.

---

Herken je deze situatie — leads die binnenkomen, maar een agenda die achterblijft? In een gratis strategiegesprek kijken we samen naar jouw huidige opvolging en waar de grootste winst voor jouw kantoor zit. [Plan hier een gesprek in.](#)
