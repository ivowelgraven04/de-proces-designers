---
title: "Case: hoe een letselschadekantoor in Brabant 2,3 uur per dossier bespaarde met automatische statusupdates"
slug: "case-hoe-een-letselschadekantoor-in-brabant-23-uur-per-dossier-bespaarde-met-aut"
date: "2026-11-28"
excerpt: "Hoe een Brabants letselschadekantoor met vier behandelaars 2,3 uur per dossier terugwon door statusupdates te automatiseren — zonder dat de communicatie met cliënten kil werd."
heroImage: "https://images.unsplash.com/photo-1778873750399-338b94f7feda?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHwyfHxsYXclMjBvZmZpY2UlMjBkZXNrJTIwcGFwZXJ3b3JrfGVufDF8MHx8fDE3OTU4Nzc4NTd8MA&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "Hand writing on document next to keyboard and mouse"
heroImageCredit: "Foto door Dallas Penner op Unsplash"
tags: ["Automatisering", "Niche"]
sector: "letselschade"
postType: "case-study"
readingTime: 6
author: "De Proces Designers"
---

## Uitgangspunt: vier behandelaars, 180 dossiers, en wekelijks twee boze cliënten

Een middelgroot letselschadekantoor in Noord-Brabant klopte bij ons aan met een probleem dat in de sector vrijwel iedereen herkent: de behandelaars verdronken in communicatie. Niet in de juridisch-inhoudelijke dossiervoering — dát ging goed. Maar in het laagwaardige, repetitieve stukje waar niemand voor doorgeleerd heeft: cliënten op de hoogte houden van wat er gebeurt in hun dossier.

De cijfers bij aanvang:

- **180 lopende dossiers** verdeeld over 4 behandelaars
- Gemiddeld **11 cliënt-updates per dossier** gedurende de looptijd (van intake tot slotbetaling)
- Per update ongeveer **12-15 minuten werk**: dossier openen, status checken, mail opstellen, soms nabellen, loggen in het systeem
- Wekelijks gemiddeld **2 cliënten** die geïrriteerd belden met "ik hoor al weken niets" — terwijl er wél iets gebeurd was, alleen niet gecommuniceerd
- NPS-score van **42** (gemeten in halfjaarlijks cliëntonderzoek)

De behandelaars werkten gemiddeld 20-30% van hun tijd aan statuscommunicatie in plaats van aan dossierinhoud. Dat voelde niet alleen verkeerd, het kóstte ook geld: declarabele uren die verdampten in mails die prima door een systeem gestuurd hadden kunnen worden.

De eigenaar formuleerde zijn vraag scherp: *"Ik wil niet dat mijn behandelaars jurist spelen én callcenter. Kunnen we de voorspelbare communicatie weghalen zonder dat het kil wordt?"*

## Aanpak: triggers op dossierstatus, geen massacommunicatie

Veel kantoren denken bij "automatisering" aan nieuwsbrieven of bulk-mailings. Daar hebben letselschadecliënten niets aan — die willen weten wat er gebeurt in *hun* zaak. Dus bouwden we iets anders: een trigger-gebaseerde flow die reageert op statuswijzigingen in het dossiersysteem.

### De technische opzet

Het kantoor werkt met **Cicero** als dossiersysteem, een vrij gangbaar pakket binnen de letselschadebranche. Via de API-koppeling konden we statuswijzigingen uitlezen. Die koppelden we via **Make** (voorheen Integromat) aan twee outputkanalen: WhatsApp Business (voor cliënten die daar bij intake voor kozen) en e-mail (voor de rest).

De flow werkt als volgt:

1. Behandelaar wijzigt een dossierstatus in Cicero (bijv. "medisch advies ontvangen")
2. Make detecteert de wijziging via webhook
3. Een decision tree bepaalt: welke status, welk communicatiekanaal, welke template
4. Het bericht wordt verstuurd met persoonlijke merge-velden (naam, dossiernummer, verwijzing naar behandelaar)
5. De verzending wordt automatisch gelogd in het dossier

### Welke momenten we automatiseerden

In samenspraak met de behandelaars identificeerden we **acht vaste momenten** in een gemiddeld letselschadedossier die vrijwel altijd dezelfde communicatie vragen:

- Intake bevestigd en dossier aangemaakt
- Aansprakelijkstelling verzonden aan de wederpartij
- Aansprakelijkheid erkend door verzekeraar
- Medisch advies aangevraagd bij medisch adviseur
- Medisch advies ontvangen
- Voorschot aangevraagd
- Voorschot uitbetaald
- Belangenbehartiging verlengd / tussenstand na 6 maanden

Elk moment kreeg een eigen templatetekst, geschreven door de senior behandelaar en getoetst op juridische correctheid. Belangrijk: de teksten zijn kort, concreet, en eindigen altijd met "heb je vragen? Je behandelaar [naam] is bereikbaar op [doorkiesnummer]." Geen generieke "wij helpen u graag"-formuleringen.

### De bewuste keuze om NIET alles te automatiseren

Dit is het stuk waar we het langst over hebben nagedacht met de eigenaar. Er zijn drie statussen die we expliciet handmatig hebben gehouden:

1. **Het eindvoorstel / de schikking.** Dit is het meest emotionele moment in het dossier. Cliënten hebben vaak jaren gewacht op dit bedrag, en er zijn altijd nuances uit te leggen (waarom dit bedrag, waarom niet meer, wat betekent dit fiscaal). Een geautomatiseerd berichtje hier zou wantrouwen wekken.

2. **Afwijzing aansprakelijkheid.** Als de wederpartij aansprakelijkheid afwijst, moet de behandelaar dit zelf toelichten — inclusief uitleg over de vervolgstappen (voorlopig deskundigenbericht, deelgeschil, procedure). Een automatische mail zou cliënten doen denken dat hun zaak is "opgegeven".

3. **Dossiers met overlijdensschade of ernstig blijvend letsel.** Hier is élke communicatie maatwerk. We hebben in het systeem een flag ingebouwd die bij deze dossiercategorie álle automatische berichten uitschakelt.

Die keuze bleek achteraf één van de belangrijkste succesfactoren. Niet omdat het systeem technisch niet kan — wel omdat het juridisch en reputatietechnisch niet verstandig is.

## Resultaat: 2,3 uur per dossier terug, en belinkomsten die kelderen

Na een bouwperiode van 3 weken en een pilotfase van 6 weken (eerst 20 dossiers, daarna uitgebreid naar alle lopende zaken) hebben we na 4 maanden de volgende cijfers gemeten:

### Tijdsbesparing

- **2,3 uur tijdsbesparing per dossier** gemiddeld, over de volledige looptijd
- Bij 180 lopende dossiers en een gemiddelde doorlooptijd van 14 maanden: ongeveer **355 behandelaarsuren per jaar** vrijgespeeld
- Vertaald naar capaciteit: ruimte voor circa **35-40 extra dossiers per jaar** zonder nieuwe behandelaar aan te nemen

### Cliëntervaring

- Belincidenten "ik hoor niets" gedaald van **8 naar 1 per week**
- NPS-score gestegen van **42 naar 68** in de volgende halfjaarlijkse meting
- In de open feedback noemden cliënten specifiek "duidelijkheid over waar mijn dossier staat" als belangrijkste verbetering

### Financieel

- Bouwkosten (inclusief koppeling, templates, training, pilotbegeleiding): eenmalig
- Maandelijkse kosten (Make-abonnement, WhatsApp Business API, onderhoud): beperkt
- **Terugverdientijd: 6 weken**, gemeten vanaf livegang — gebaseerd op uitgespaarde behandelaarsuren tegen interne uurtarieven

De eigenaar vatte het achteraf samen: *"Het grootste effect zit niet eens in de tijd. Het zit erin dat mijn mensen weer energie hebben voor de dossiers waar ze écht het verschil maken."*

## Lessen die voor elk letselschadekantoor gelden

Deze case is specifiek, maar de principes zijn bruikbaar voor vrijwel elk letselschadekantoor dat met een digitaal dossiersysteem werkt. Drie lessen die wat ons betreft generaliseerbaar zijn:

### 1. Automatiseer de voorspelbare communicatie, hou de emotionele momenten menselijk

Dit klinkt logisch, maar in de praktijk zien we twee uitersten: kantoren die *alles* handmatig doen (uit angst om onpersoonlijk over te komen) of kantoren die álles willen automatiseren (uit efficiëntiedrang). Beide zijn verkeerd. De sweet spot ligt in het scherp afbakenen: welke 70-80% van de communicatie is voorspelbaar en feitelijk? Die kan weg. De rest blijft mensenwerk — en wórdt daardoor zelfs sterker, omdat behandelaars er meer tijd en aandacht voor hebben.

### 2. Meet welke updates cliënten écht geruststellen

We hebben in de pilotfase gevraagd aan cliënten: welke berichten vonden jullie waardevol, welke niet? Daar kwamen verrassende inzichten uit. De update "medisch advies aangevraagd" bleek enorm geruststellend — cliënten wisten vaak niet eens dat die stap bestond, en het bericht maakte duidelijk dat er beweging in hun dossier zat. De update "aansprakelijkstelling verzonden" vonden ze juist minder waardevol, omdat ze al wisten dat dat één van de eerste stappen was.

Les: ga niet uit van wat jíj denkt dat belangrijk is. Vraag het cliënten in de pilotfase en pas de berichten aan op basis van wat écht effect heeft.

### 3. Begin bij het systeem dat je al hebt

We zien regelmatig kantoren die denken dat ze eerst een ander dossiersysteem moeten aanschaffen voordat ze kunnen automatiseren. Dat klopt zelden. De meeste gangbare systemen in de letselschadewereld (Cicero, Fileroom, vergelijkbare pakketten) hebben óf een API óf een exportfunctie die je kunt koppelen. De winst zit niet in nieuwe software, maar in slim koppelen van wat er al staat.

---

Letselschadekantoren zitten in een lastige spagaat: de inhoud van het werk vraagt om zorgvuldigheid en empathie, maar de randvoorwaarden (administratie, communicatie, voortgangsbewaking) vreten tijd. Juist in die randvoorwaarden zit de ruimte om efficiënter te worden zonder in te leveren op kwaliteit.

Herken je het beeld uit deze case — behandelaars die te veel tijd kwijt zijn aan statuscommunicatie, of cliënten die bellen met "ik hoor niets"? We denken graag vrijblijvend mee in een strategiegesprek over wat er in jouw kantoor automatiseerbaar is, en wat je bewust menselijk moet houden.
