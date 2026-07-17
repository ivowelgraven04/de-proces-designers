---
title: "De verjaardag-trigger: waarom automatische felicitaties leads terugbrengen"
slug: "de-verjaardag-trigger-waarom-automatische-felicitaties-leads-terugbrengen"
date: "2026-07-17"
excerpt: "Een verjaardagsfelicitatie is het enige commerciële bericht dat écht gelezen wordt. Ontdek waarom deze simpele trigger oude leads terugbrengt — en hoe je hem opzet zonder je formulier te vervuilen."
heroImage: "https://images.unsplash.com/photo-1607977166054-ba266c446ba3?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMG1lc3NhZ2UlMjBwaG9uZXxlbnwxfDB8fHwxNzg0Mjc1NTQ4fDA&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "text"
heroImageCredit: "Foto door Gift Habeshaw op Unsplash"
tags: ["Automatisering", "Leadgeneratie", "Niche"]
readingTime: 3
author: "De Proces Designers"
---

Iedereen krijgt tientallen commerciële berichten per week. Nieuwsbrieven, aanbiedingen, "even bijpraten"-mails. Ze verdwijnen allemaal in dezelfde stapel. Behalve één type bericht: een verjaardagsfelicitatie. Die wordt wél gelezen, wél gewaardeerd, en zorgt er verrassend vaak voor dat een oude klant of lead weer aan je denkt.

## Waarom verjaardagen werken waar andere touchpoints falen

Ongevraagd contact voelt bijna altijd als verkoop. Een verjaardag is de uitzondering. Als jij als dakdekker een klant feliciteert die vorig jaar zijn dak liet vervangen, is dat geen marketing — dat is een normaal menselijk gebaar. Precies dáárom werkt het.

De felicitatie zet je onbewust weer op de radar. En vaak binnen dagen komt er een appje terug: *"Bedankt! Trouwens, mijn buurman zoekt ook een dakdekker, mag ik hem jouw nummer geven?"* Of bij een letselschadekantoor: *"Fijn dat je denkt aan me. Ik heb nog een collega die iets soortgelijks meemaakt..."*

Het is geen truc. Het is aanwezigheid op het juiste moment.

## De data die je nodig hebt (en hoe je die krijgt)

Je hebt maar twee velden nodig in je CRM:

- **Geboortedatum** (dag + maand is genoeg, jaar hoeft niet)
- **Voorkeurskanaal** (WhatsApp of e-mail)

De valkuil is dat ondernemers denken: *"Dan moet ik mijn formulier uitbreiden."* Doe dat niet. Elke extra vraag op je landingspagina kost je conversie.

Verzamel de geboortedatum op een later moment:

1. **Bij het intakegesprek** — vraag het gewoon, noteer het direct in je CRM
2. **In de bevestigingsmail na oplevering** — "We willen je graag op je verjaardag feliciteren, wanneer ben je jarig?"
3. **Bij bestaande klanten** — stuur eenmalig een korte mail met de vraag

Bij financieel adviseurs is dit vaak al makkelijker: de geboortedatum staat sowieso in je dossier vanwege pensioen- of hypotheekberekeningen.

## De opzet van de trigger

De automatisering zelf is simpel, maar de details bepalen of het werkt:

- **Plan één dag van tevoren** — je systeem checkt 's avonds welke contacten morgen jarig zijn
- **Verstuur tussen 8:00 en 9:30** — vroeg genoeg om een van de eerste te zijn, niet zo vroeg dat het geforceerd voelt
- **Gebruik het kanaal waar de klant al zit** — heb je altijd via WhatsApp gecommuniceerd? Blijf op WhatsApp. Was het e-mail? Dan mail
- **Verstuur namens een persoon, niet vanuit een bedrijfsnaam** — "Mark van De Proces Designers" opent 3x zo vaak als "info@..."

## Wat je wél en niet schrijft

De grootste fout: er een aanbieding aan koppelen. *"Gefeliciteerd! Deze maand 10% korting op..."* — je vernielt precies waarom het werkt.

**Wél doen:**
- Kort en persoonlijk (2-4 zinnen, meer niet)
- Verwijs naar iets specifieks als het kan ("hoop dat het dak nog steeds goed ligt")
- Sluit af met een open uitnodiging, niet met een call-to-action

**Voorbeeld voor een dakdekker:**

> Hoi Peter, gefeliciteerd met je verjaardag! Hoop dat je een mooie dag hebt. Alles nog goed met het dak van de aanbouw? Laat het gerust weten als er iets is. Groet, Mark

Geen link. Geen offerte. Geen "misschien tijd voor onderhoud?" De deur staat open — dat is genoeg.

## De technische opzet

Voor de meeste bedrijven werkt deze combinatie:

- **CRM**: HubSpot of Pipedrive (allebei hebben een geboortedatum-veld of je maakt er zelf een)
- **Automatisering**: Make (voorheen Integromat) of n8n
- **Verzenden**: e-mail via je CRM, WhatsApp via de officiële Business API of een tool als Trengo

De flow in Make/n8n:

1. Elke dag om 20:00 een trigger die je CRM doorzoekt op contacten met morgen als verjaardag
2. Filter op status (alleen klanten en warme leads, geen koude contacten)
3. Splits op voorkeurskanaal: e-mail of WhatsApp
4. Plan het bericht in voor de volgende ochtend

**Fallback als de geboortedatum ontbreekt:** bouw een tweede flow die één keer per jaar (bijvoorbeeld rond de oplevering van het project of jaarafsluiting) een "we willen je feliciteren"-vraag stuurt naar contacten zonder geboortedatum. Zo vult je database zich vanzelf.

---

Het mooie: je bouwt dit één keer en het draait jarenlang op de achtergrond. Elke week wordt er iemand jarig die jou weer even ziet — zonder dat jij er iets voor doet.

Wil je weten welke automatiseringen voor jouw bedrijf het meeste opleveren? Plan een gratis strategiegesprek en we lopen het samen door.
