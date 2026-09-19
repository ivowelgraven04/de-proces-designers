/*
 * WebdesignStad Page – De Proces Designers
 * Dynamische lokale landingspagina voor webdesign per stad/regio in Gelderland
 */
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import {
  ArrowRight, CheckCircle2, Monitor, Smartphone, Zap,
  Search, Star, MapPin, ChevronDown,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO, breadcrumb } from "@/hooks/useSEO";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const deliverables = [
  { icon: <Monitor size={20} />, title: "Mobielvriendelijk design", desc: "Meer dan 70% van jouw bezoekers komt via telefoon. Elke website werkt perfect op elk scherm." },
  { icon: <Zap size={20} />, title: "Snelle laadtijd", desc: "Onder 2 seconden. Elke seconde vertraging kost 7% aan conversie — dat lossen wij op." },
  { icon: <Search size={20} />, title: "SEO-fundament ingebakken", desc: "Correcte H1-structuur, meta-tags, schema markup en lokale signalen. Vindbaar vanaf dag één." },
  { icon: <Smartphone size={20} />, title: "Conversiegerichte structuur", desc: "Bezoekers weten binnen 5 seconden wat je doet en hoe ze contact opnemen. Geen afleiding, geen twijfel." },
  { icon: <CheckCircle2 size={20} />, title: "Aanvraagflow die werkt", desc: "Formulier, offerteaanvraag of direct bellen — elke route is geoptimaliseerd op mobiel en desktop." },
  { icon: <Star size={20} />, title: "Klaar in 3–4 weken", desc: "Van intake tot live. Geen maandenlange trajecten, geen onnodig overleg. Gewoon resultaat." },
];

const standaardFaqs = [
  {
    q: "Wat kost een website laten maken bij De Proces Designers?",
    a: "De investering hangt af van de scope: een zakelijk visitekaartje begint rond €1.200 eenmalig. Een volledige conversiegerichte website met aanvraagflow, meerdere dienstenpagina's en SEO-fundament zit tussen €2.000 en €4.500. We werken ook met maandelijkse pakketten inclusief hosting, aanpassingen en ondersteuning.",
  },
  {
    q: "Hoe lang duurt het voordat mijn website live staat?",
    a: "Gemiddeld 3 tot 4 weken: één week intake en concept, één tot twee weken bouw en content, één week feedback en afronding. Spoedtrajecten in 2 weken zijn mogelijk in overleg.",
  },
  {
    q: "Kan ik mijn website daarna zelf aanpassen?",
    a: "Dat hangt af van wat je wil. We bouwen standaard websites waarvoor wij kleine aanpassingen verzorgen. Wil je zelf teksten of afbeeldingen wijzigen, dan bespreken we dat in de intake en passen de techniek daarop aan.",
  },
  {
    q: "Combineren jullie webdesign ook met leadgeneratie?",
    a: "Dat is precies waar we ons in onderscheiden. Wij bouwen geen losstaande websites — we bouwen websites die functioneren als onderdeel van een leadgeneratiesysteem. Advertentie-landingspagina's, quizfunnels, automatische opvolging: alles is optioneel aansluitbaar.",
  },
];

interface StadConfig {
  naam: string;
  provincie: string;
  slug: string;
  omschrijving: string;
  h1Extra: string;
  lokaalKenmerk: string;
  cases: string[];
  competitors: string;
  faqExtra: { q: string; a: string };
}

const STEDEN: Record<string, StadConfig> = {
  "webdesign-ede": {
    naam: "Ede",
    provincie: "Gelderland",
    slug: "webdesign-ede",
    omschrijving: "Ede en omgeving (Bennekom, Lunteren, Veenendaal, Rhenen)",
    h1Extra: "in Ede",
    lokaalKenmerk: "Actief in Ede en de directe omgeving: Bennekom, Lunteren, Veenendaal en Rhenen.",
    cases: ["Dakdekkers in de Gelderse Vallei", "Boekhouders in Ede-centrum"],
    competitors: "mrwebdesignede.nl, bsmedia.nl, ccorner.nl",
    faqExtra: { q: "Zitten jullie ook echt in Ede?", a: "Ja, De Proces Designers is gevestigd in Ede. Wij werken voor bedrijven door heel Nederland, maar de meeste van onze klanten zitten in de regio Ede, Wageningen, Veenendaal en de Gelderse Vallei." },
  },
  "webdesign-arnhem": {
    naam: "Arnhem",
    provincie: "Gelderland",
    slug: "webdesign-arnhem",
    omschrijving: "Arnhem en omgeving (Velp, Duiven, Zevenaar, Westervoort)",
    h1Extra: "in Arnhem",
    lokaalKenmerk: "Webdesign bureau voor Arnhemse ondernemers in alle sectoren — van dakdekkers in Presikhaaf tot kantoren in het stadscentrum.",
    cases: ["MKB-ondernemers in Arnhem-Noord", "Installatiebedrijven Arnhem"],
    competitors: "pixelcreation.nl, bsmedia.nl, webidee.nl",
    faqExtra: { q: "Werken jullie ook voor bedrijven buiten de stad Arnhem?", a: "Ja, wij werken voor bedrijven door heel Arnhem en de directe regio: Velp, Duiven, Zevenaar, Westervoort en Huissen. Alle communicatie verloopt online, dus afstand is geen probleem." },
  },
  "webdesign-nijmegen": {
    naam: "Nijmegen",
    provincie: "Gelderland",
    slug: "webdesign-nijmegen",
    omschrijving: "Nijmegen en omgeving (Beuningen, Wijchen, Grave, Groesbeek)",
    h1Extra: "in Nijmegen",
    lokaalKenmerk: "Conversiegerichte websites voor Nijmeegse ondernemers — van ZZP'ers in de Benedenstad tot grotere bedrijven in het Waalsprong-gebied.",
    cases: ["ZZP-dienstverleners Nijmegen", "Bouw- en installatiebedrijven regio Nijmegen"],
    competitors: "ccorner.nl, pixelcreation.nl, webdesignnijmegen.nl",
    faqExtra: { q: "Maken jullie ook websites voor startende ondernemers in Nijmegen?", a: "Zeker. Of je nu net start of al jaren actief bent — wij bouwen websites die passen bij jouw fase. Starterspakketten beginnen rond €1.200, volledig maatwerk voor grotere bedrijven tussen €2.500 en €4.500." },
  },
  "webdesign-wageningen": {
    naam: "Wageningen",
    provincie: "Gelderland",
    slug: "webdesign-wageningen",
    omschrijving: "Wageningen en omgeving (Renkum, Rhenen, Veenendaal)",
    h1Extra: "in Wageningen",
    lokaalKenmerk: "Website laten maken in Wageningen? Wij bouwen professionele websites voor ondernemers in de Wageningse regio — inclusief kennisbedrijven, installateurs en ZZP-dienstverleners.",
    cases: ["Technische dienstverleners Wageningen", "Lokaal MKB regio Wageningen"],
    competitors: "mm-webmedia.nl, webvriend.nl",
    faqExtra: { q: "Kunnen jullie ook een website bouwen voor een Wagenings kennisbedrijf of tech-startup?", a: "Ja. Wageningen heeft een sterk kennis-ecosysteem rondom de WUR. Wij bouwen websites die passen bij die professionele uitstraling — duidelijk, snel en vindbaar voor de juiste doelgroep." },
  },
  "webdesign-apeldoorn": {
    naam: "Apeldoorn",
    provincie: "Gelderland",
    slug: "webdesign-apeldoorn",
    omschrijving: "Apeldoorn en omgeving (Deventer, Zutphen, Epe)",
    h1Extra: "in Apeldoorn",
    lokaalKenmerk: "Professionele webdesign bureau voor ondernemers in Apeldoorn en de Stedendriehoek. Van klussenbedrijven tot financieel dienstverleners.",
    cases: ["Dakdekkers en aannemers regio Apeldoorn", "Financieel adviseurs Apeldoorn"],
    competitors: "bsmedia.nl, mm-webmedia.nl",
    faqExtra: { q: "Leveren jullie ook websites voor de Stedendriehoek (Apeldoorn, Deventer, Zutphen)?", a: "Ja, wij zijn actief in de gehele Stedendriehoek. Klanten in Apeldoorn, Deventer en Zutphen kunnen bij ons terecht voor hetzelfde pakket en dezelfde aanpak als onze klanten in de Gelderse Vallei." },
  },
  "webdesign-gelderland": {
    naam: "Gelderland",
    provincie: "Gelderland",
    slug: "webdesign-gelderland",
    omschrijving: "Heel Gelderland — van Nijmegen tot Apeldoorn",
    h1Extra: "in Gelderland",
    lokaalKenmerk: "De Proces Designers is een Gelders webdesign bureau met klanten door heel de provincie — van de Achterhoek tot de Betuwe, van de Gelderse Vallei tot de Veluwe.",
    cases: ["Dakdekkers door heel Gelderland", "MKB-bedrijven Gelderse regio"],
    competitors: "bsmedia.nl, ccorner.nl, mrwebdesignede.nl",
    faqExtra: { q: "Zijn jullie het beste webdesign bureau in Gelderland?", a: "Wij zijn een van de weinige Gelderse bureaus die zich specialiseren in conversiegerichte websites voor specifieke branches: dakdekkers, boekhouders en juridische dienstverleners. Onze klanten staan in heel Gelderland en waarderen de niche-expertise en het persoonlijk contact." },
  },
};

const ALLE_STEDEN_LINKS = [
  { naam: "Ede", slug: "webdesign-ede" },
  { naam: "Arnhem", slug: "webdesign-arnhem" },
  { naam: "Nijmegen", slug: "webdesign-nijmegen" },
  { naam: "Wageningen", slug: "webdesign-wageningen" },
  { naam: "Apeldoorn", slug: "webdesign-apeldoorn" },
  { naam: "Gelderland", slug: "webdesign-gelderland" },
];

function FAQ({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border rounded-xl overflow-hidden cursor-pointer"
      style={{ borderColor: "rgba(134,100,251,0.15)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-4 p-5">
        <p className="font-heading font-700 text-sm" style={{ color: "#1A2A33" }}>{item.q}</p>
        <ChevronDown
          size={18}
          style={{
            color: "#8664FB",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        />
      </div>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm leading-relaxed" style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}>{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function WebdesignStad() {
  const params = useParams<{ stad: string }>();
  const slug = `webdesign-${params.stad ?? ""}`;
  const stad = STEDEN[slug];

  // Onbekende stad: stille 404-fallback
  if (!stad) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container py-40 text-center">
          <h1 className="font-heading text-3xl font-800 mb-4" style={{ color: "#1A2A33" }}>
            Pagina niet gevonden
          </h1>
          <p className="mb-8" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
            We hebben geen pagina gevonden voor deze regio.
          </p>
          <Link href="/webdesign" className="btn-primary">
            Naar webdesign overzicht <ArrowRight size={16} />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const alleVragen = [...standaardFaqs, stad.faqExtra];
  const andereSteden = ALLE_STEDEN_LINKS.filter((s) => s.slug !== slug);

  useSEO({
    title: `Website laten maken ${stad.h1Extra} — Webdesign ${stad.naam} | De Proces Designers`,
    description: `Professionele website laten maken ${stad.h1Extra}? De Proces Designers bouwt conversiegerichte websites voor ondernemers in ${stad.omschrijving}. Klaar in 3–4 weken. Vraag gratis offerte aan.`,
    path: `/${slug}`,
    schema: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Webdesign", path: "/webdesign" },
        { name: `Webdesign ${stad.naam}`, path: `/${slug}` },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Website laten maken ${stad.naam}`,
        "serviceType": "Webdesign",
        "provider": {
          "@type": "LocalBusiness",
          "name": "De Proces Designers",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ede",
            "addressRegion": "Gelderland",
            "postalCode": "6711",
            "addressCountry": "NL",
          },
          "telephone": "+31651369537",
          "url": "https://www.deprocesdesigners.nl",
        },
        "areaServed": { "@type": "City", "name": stad.naam },
        "description": `Conversiegerichte websites voor ondernemers in ${stad.omschrijving}. Klaar in 3–4 weken.`,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": alleVragen.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #ffffff 60%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-96 h-96 -top-20 -right-20 opacity-30" />
        <div className="orb orb-cyan w-64 h-64 bottom-0 left-1/4 opacity-20" />

        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-medium font-heading"
              style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB" }}
            >
              <MapPin size={13} /> {stad.naam} · {stad.provincie}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading mb-5 leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, color: "#1A2A33" }}
            >
              Website laten maken{" "}
              <span className="dpd-gradient-text">{stad.h1Extra}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg max-w-2xl mb-4 leading-relaxed"
              style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}
            >
              {stad.lokaalKenmerk} Klaar in 3–4 weken.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm mb-8"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              {stad.omschrijving} — voor dakdekkers, boekhouders, juridische dienstverleners en lokaal MKB.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Gratis offerte aanvragen <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                Bekijk ons werk
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WAT JE KRIJGT ─── */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Standaard inbegrepen</p>
              <h2 className="font-heading mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1A2A33" }}>
                Geen website. Een groei­instrument.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                Elke website die wij bouwen heeft dezelfde fundering: snel, vindbaar, mobielvriendelijk en gericht op conversie.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl p-6"
                  style={{ border: "1px solid rgba(134,100,251,0.12)", background: "rgba(134,100,251,0.02)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(134,100,251,0.1)", color: "#8664FB" }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-700 text-base mb-2" style={{ color: "#1A2A33" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── LOKALE CONTEXT ─── */}
      <section className="py-20" style={{ background: "#f8f6ff" }}>
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-10 max-w-xl">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Onze aanpak {stad.h1Extra}</p>
              <h2 className="font-heading mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Websites die werken voor jouw regio
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                We bouwen geen generieke templates. Elke website past bij de lokale markt, de lokale concurrentie en de lokale zoekwoorden in {stad.naam} en omgeving.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {stad.cases.map((c, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl p-6 bg-white"
                  style={{ border: "1px solid rgba(134,100,251,0.15)", boxShadow: "0 4px 20px rgba(134,100,251,0.05)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-heading font-700 px-3 py-1 rounded-full"
                      style={{ background: "rgba(134,100,251,0.1)", color: "#8664FB" }}
                    >
                      Case
                    </span>
                  </div>
                  <p className="font-heading font-700 text-base" style={{ color: "#1A2A33" }}>{c}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-8 text-center">
              <Link href="/portfolio" className="btn-secondary inline-flex">
                Bekijk alle cases <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WERKWIJZE ─── */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-12 max-w-xl mx-auto">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Hoe het werkt</p>
              <h2 className="font-heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Van gesprek tot live — in 4 weken
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { stap: "1", titel: "Intake & strategie", desc: "We bespreken jouw doelgroep, regio en concurrenten. Op basis daarvan bepalen we de structuur en het zoekwoord-fundament." },
                { stap: "2", titel: "Design & content", desc: "Wij schrijven de teksten (SEO-geoptimaliseerd) en bouwen het design. Jij geeft feedback op één gestructureerd moment." },
                { stap: "3", titel: "Bouw & optimalisatie", desc: "De site wordt gebouwd op moderne technologie: razendsnelle laadtijden, correcte schema markup en mobielvriendelijk." },
                { stap: "4", titel: "Live & overdracht", desc: "Na jouw akkoord gaat de site live. Wij zorgen voor hosting, SSL en instructie. Daarna optionele doorlopende ondersteuning." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="text-center">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 font-heading font-800 text-lg"
                    style={{ background: "rgba(134,100,251,0.1)", color: "#8664FB" }}
                  >
                    {item.stap}
                  </div>
                  <h3 className="font-heading font-700 text-sm mb-2" style={{ color: "#1A2A33" }}>{item.titel}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20" style={{ background: "#f8f6ff" }}>
        <div className="container max-w-2xl">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Veelgestelde vragen</p>
              <h2 className="font-heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Vragen over webdesign {stad.h1Extra}
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              {alleVragen.map((faq, i) => <FAQ key={i} item={faq} />)}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── INTERNE LINKS NAAR ANDERE STEDEN ─── */}
      <section className="py-16 bg-white">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Werkgebied</p>
              <h2 className="font-heading mb-2" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Webdesign in andere regio's
              </h2>
              <p className="text-sm" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                Actief in heel Gelderland en Nederland. Bekijk onze pagina's per regio.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/webdesign"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(134,100,251,0.15)",
                  color: "#8664FB",
                  border: "1px solid rgba(134,100,251,0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <ArrowRight size={13} /> Webdesign overzicht
              </Link>
              {andereSteden.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(134,100,251,0.08)",
                    color: "#8664FB",
                    border: "1px solid rgba(134,100,251,0.2)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <MapPin size={13} /> Webdesign {s.naam}
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A2A33 0%, #0f1a22 100%)" }}
      >
        <div className="orb orb-purple w-96 h-96 opacity-20 -top-20 -right-10" />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <motion.p variants={fadeUp} className="text-xs font-heading font-700 uppercase tracking-widest mb-4" style={{ color: "#8664FB" }}>
              Klaar om te starten?
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-4 text-white"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
            >
              Jouw website {stad.h1Extra} in 3–4 weken live
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Vraag een gratis offerte aan. We reageren binnen één werkdag met een concreet voorstel op maat.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Gratis offerte aanvragen <ArrowRight size={16} />
              </Link>
              <Link href="/portfolio" className="btn-secondary-dark">
                Ons werk bekijken
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
