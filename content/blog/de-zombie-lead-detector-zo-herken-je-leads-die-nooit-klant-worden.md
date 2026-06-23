---
title: "De zombie-lead detector: zo herken je leads die nooit klant worden"
slug: "de-zombie-lead-detector-zo-herken-je-leads-die-nooit-klant-worden"
date: "2026-06-23"
excerpt: "Een drukke pipeline zegt weinig als het meeste dode leads zijn. Ontdek de 4 signalen waarmee je 'zombies' automatisch herkent en je CRM weer een eerlijk beeld geeft."
heroImage: "https://images.unsplash.com/photo-1549637642-90187f64f420?ixid=M3w5MzMyNDV8MHwxfHNlYXJjaHw1fHxlbXB0eSUyMG9mZmljZSUyMGRlc2t8ZW58MXwwfHx8MTc4MjIwNzMxOXww&ixlib=rb-4.1.0&w=1600&q=80&fm=jpg&fit=crop"
heroImageAlt: "empty black rolling chairs at cubicles"
heroImageCredit: "Foto door kate.sade op Unsplash"
tags: ["Automatisering", "Leadgeneratie", "Niche"]
readingTime: 3
author: "De Proces Designers"
---

## Je pipeline zit vol met zombies

Je CRM ziet er druk uit. 340 open leads, lekker veel werk aan de winkel. Maar als je eerlijk kijkt: hoeveel daarvan reageren nog? Hoeveel hebben de laatste drie mails geopend? Hoeveel zijn realistisch gezien nog een klant?

Een vervuilde pipeline doet drie dingen die je groei remmen. Je conversiepercentage lijkt structureel lager dan het is, waardoor je verkeerde conclusies trekt over je advertenties. Je salesteam verspilt tijd aan opvolging van leads die allang afgehaakt zijn. En je gemiddelde reactietijd op nieuwe, warme leads loopt op omdat de pijplijn opstopt.

Tijd voor een zombie-detector.

## De 4 signalen van een dode lead

Een lead markeer je automatisch als 'zombie' wanneer alle vier de signalen aanwezig zijn binnen een bepaalde periode (meestal 21-30 dagen, afhankelijk van je verkoopcyclus):

1. **Geen email-opens** in de laatste 3 verzonden berichten
2. **Geen clicks** op links in je opvolg-mails
3. **Geen reply** op directe vragen of WhatsApp-berichten
4. **Geen site-bezoek** in de afgelopen 30 dagen (te tracken via je CRM-cookie)

Eén signaal zegt weinig. Mensen zijn op vakantie, een mail komt in spam terecht, iemand heeft het druk. Maar alle vier tegelijk? Die lead is mentaal al weg.

## Zo bouw je het in HubSpot of Pipedrive

Het mooie is dat je hier geen developer voor nodig hebt. Met Make of n8n koppel je je CRM aan een eenvoudige scoringflow.

**Trigger:** dagelijks om 07:00 een check op alle leads in de status 'in opvolging'.

**Conditie:** filter op contacten waar `last_email_open` > 21 dagen, `last_click` > 21 dagen, `last_reply` leeg of > 30 dagen, en `last_website_visit` > 30 dagen.

**Actie:** verhoog een custom field `zombie_score` met 1. Bij score 4 → verplaats naar de pipeline-fase 'zombie review' en trigger de laatste-kans-mail.

In HubSpot doe je dit met een workflow op basis van een berekende eigenschap. In Pipedrive werkt het via een automation gekoppeld aan filters. Wij bouwen het zelf het liefst in Make, omdat je dan ook direct WhatsApp-data en Facebook custom audiences kunt aansturen vanuit dezelfde flow.

## De laatste-kans-mail

Voordat je iemand archiveert, krijgt hij één laatste bericht. Geen verkooppraatje, geen herinnering aan je aanbod. Eén korte, eerlijke vraag.

Voor een letselschadekantoor werkt bijvoorbeeld dit:

> *Onderwerp: Nog actueel?*
>
> *Hoi [voornaam], ik hoor al een tijdje niets meer van je. Geen probleem — soms verandert een situatie. Mag ik je dossier afsluiten, of speelt het nog?*
>
> *Een 'ja' of 'nee' is genoeg.*

Geen knoppen, geen plaatjes, geen disclaimer. Stuur 'm vanaf een persoonlijk emailadres, niet vanaf info@. In de praktijk reageert 10 tot 15% alsnog — en daarvan converteert een verrassend deel omdat ze net de stap nog niet hadden gezet.

## Wat doe je met de rest?

De stille meerderheid (de 85-90%) gaat door een drietraps opschoonflow:

- **Archiveer in je CRM** met de tag `zombie_archived_[datum]`. Niet verwijderen — je wilt later kunnen analyseren waar deze leads vandaan kwamen.
- **Sluit ze uit van je advertenties.** Push het emailadres als custom audience exclusion naar Meta. Zonde om opnieuw te betalen voor mensen die je product al kennen en bewust hebben afgehaakt.
- **Plan een win-back na 6 maanden.** Voor een dakdekker is dat bijvoorbeeld een mail aan het begin van het volgende voorjaar: *"Vorig jaar vroeg je een offerte aan voor je dak. Nog plannen voor dit seizoen?"* Zonder iets bijzonders te doen haal je hier 3-5% van terug.

## Wat dit oplevert

Een opgeschoonde pipeline geeft je drie dingen terug: realistische conversiecijfers waar je beslissingen op kunt baseren, een salesteam dat zich focust op leads die warm zijn, en lagere advertentiekosten omdat je niet opnieuw betaalt voor dode contacten.

Bij de meeste klanten verdwijnt 30 tot 50% van de pipeline na de eerste opschoning. Voelt confronterend, maar je nieuwe conversiepercentage — gemeten op de echte pipeline — ligt opeens twee tot drie keer hoger. Datzelfde percentage gebruik je vervolgens om scherper te sturen op je advertentiebudget.

---

*Wil je weten hoe zo'n opschoonflow er voor jouw bedrijf uit zou zien? Plan een gratis strategiegesprek — dan kijken we samen waar de zombies in jouw pipeline zitten.*
