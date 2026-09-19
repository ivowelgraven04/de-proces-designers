/*
 * BeterVindbaarGoogle Page – De Proces Designers
 * Informatieve pagina gericht op featured snippet voor "hoe word ik beter vindbaar in Google"
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, ChevronDown,
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

const secties = [
  {
    h2: "Waarom Google je (nog) niet vindt",
    tekst: "De meeste lokale bedrijfswebsites worden niet gevonden door drie concrete oorzaken: technische blokkades (trage laadtijd, niet-crawlbare pagina's, ontbrekende sitemap), dunne content die niet aansluit op wat klanten zoeken, en het ontbreken van lokale signalen zoals een Google Business Profile en stadspecifieke pagina's. Google heeft simpelweg niet genoeg aanleiding om jouw site te tonen. Pas als je deze drie oorzaken aanpakt, gaat de ranking omhoog.",
  },
  {
    h2: "Technische SEO: de basis",
    tekst: "Voordat Google jouw website goed kan ranken, moet de technische basis in orde zijn. Dat betekent: een laadtijd onder de 2-3 seconden (mobielvriendelijk), een correct werkende HTTPS-verbinding, een XML-sitemap die alle pagina's bevat, canonical-tags zodat Google weet welke versie van een pagina de hoofdversie is, en geen onnodige 404-fouten. Core Web Vitals — Google's maatstaf voor gebruikerservaring — wegen ook steeds zwaarder mee. Een technische SEO-audit brengt al deze punten in kaart.",
  },
  {
    h2: "Content die Google wil indexeren",
    tekst: "Content is het grootste SEO-hefboom voor lokale bedrijven. Google kijkt naar de H1-structuur (is er één duidelijke hoofdkop?), het gebruik van zoekwoorden in titels, koppen en de lopende tekst, en de diepte van de content. Pagina's van minimaal 800 woorden ranken structureel beter dan dunne pagina's. Schrijf voor de klant, niet voor Google: beantwoord de vragen die jouw doelgroep stelt. Featured snippets (het directe antwoord bovenaan de zoekresultaten) pak je door vragen expliciet te beantwoorden in je tekst.",
  },
  {
    h2: "Google Business Profile optimaliseren",
    tekst: "Voor lokale bedrijven is het Google Business Profile (GBP) minstens even belangrijk als de website zelf. Een volledig ingevuld GBP zorgt voor zichtbaarheid in de Local Pack — de kaart met drie bedrijven die bovenaan zoekresultaten verschijnt. Vul in: de juiste categorie (en meerdere aanvullende categorieën), alle diensten met beschrijving, correcte openingstijden inclusief feestdagen, een korte bedrijfsbeschrijving met lokale zoekwoorden, en regelmatige foto's. Vraag actief om reviews — ze hebben direct invloed op jouw ranking in Maps.",
  },
  {
    h2: "Linkbuilding voor lokale bedrijven",
    tekst: "Externe links (backlinks) zijn een signaal dat andere websites jou vertrouwen. Voor lokale bedrijven zijn lokale vermeldingen het laaghangende fruit: zorg dat je naam, adres en telefoonnummer (NAP) consistent staan op branchedirectories (zoals De Gouden Gids, Bedrijvengids.nl, Yelp), lokale bedrijvenverenigingen, en partnerwebsites in de regio. Elke vermelding telt mee. Hoger in de hiërarchie staan vermeldingen op kranten, vakbladen en regionale media.",
  },
  {
    h2: "Hoelang duurt het?",
    tekst: "SEO is geen snelle fix. Reken op 3 tot 6 maanden voor de eerste stabiele rankings op competitieve zoekwoorden. Lokale SEO kan sneller gaan: een goed geoptimaliseerd GBP-profiel is soms al binnen 4-8 weken merkbaar in de Maps-resultaten. Niche-zoekwoorden (weinig concurrentie) ranken ook sneller. Eenmaal opgebouwde rankings zijn echter duurzaam — in tegenstelling tot betaalde advertenties die stoppen zodra het budget op is.",
  },
];

const faqs = [
  {
    q: "Hoe lang duurt het om hoger in Google te komen?",
    a: "3 tot 6 maanden voor competitieve zoekwoorden. Sneller voor lokale of niche-zoekwoorden. Technische fixes zijn soms al binnen weken zichtbaar in indexering, maar rankings bewegen trager.",
  },
  {
    q: "Wat kost SEO bij De Proces Designers?",
    a: "Vanaf €450 per maand voor een continu SEO-pakket. Eenmalige optimalisatie vanaf €750. We bespreken de scope en investering in een gratis gesprek.",
  },
  {
    q: "Kan ik zelf SEO doen?",
    a: "Ja, de basis (GBP invullen, paginatitels aanpassen, laadtijd verbeteren) kun je zelf doen. Voor technische SEO, structurele linkbuilding en contentstrategie is expertise nodig om echt resultaat te halen.",
  },
  {
    q: "Werkt SEO ook voor kleine bedrijven?",
    a: "Zeker. Lokale SEO is juist voor kleine bedrijven zeer effectief: minder concurrentie dan nationaal, hogere intentie bij de zoeker (ze zijn al in jouw regio) en hogere conversie.",
  },
  {
    q: "Wat is het verschil tussen SEO en Google Ads?",
    a: "Google Ads geeft direct zichtbaarheid maar stopt zodra je stopt met betalen. SEO bouwt duurzame organische zichtbaarheid op die blijft werken ook als je niet actief investeert. Ze zijn complementair.",
  },
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

export default function BeterVindbaarGoogle() {
  useSEO({
    title: "Hoe word ik beter vindbaar in Google? | De Proces Designers",
    description: "Praktische uitleg: zo word je beter gevonden in Google als lokale ondernemer. Technische SEO, content, Google Business Profile en linkbuilding — alles uitgelegd.",
    path: "/beter-vindbaar-in-google",
    ogType: "article",
    schema: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "SEO", path: "/seo" },
        { name: "Beter vindbaar in Google", path: "/beter-vindbaar-in-google" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Hoe word ik beter vindbaar in Google?",
        "description": "Praktische uitleg voor lokale ondernemers over technische SEO, content, Google Business Profile en linkbuilding.",
        "author": {
          "@type": "Organization",
          "name": "De Proces Designers",
          "url": "https://www.deprocesdesigners.nl",
        },
        "publisher": {
          "@type": "Organization",
          "name": "De Proces Designers",
          "url": "https://www.deprocesdesigners.nl",
        },
        "datePublished": "2026-09-19",
        "dateModified": "2026-09-19",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
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

      {/* HERO */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #ffffff 60%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-80 h-80 -top-20 -right-20 opacity-25" />

        <div className="container relative z-10 max-w-3xl">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-3">
              <Link href="/seo" className="text-xs font-medium" style={{ color: "#8664FB", fontFamily: "Inter, sans-serif" }}>
                ← SEO-diensten
              </Link>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#1A2A33" }}
            >
              Hoe word ik beter vindbaar in Google?
            </motion.h1>

            {/* Direct antwoord voor featured snippet */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-6 mb-6"
              style={{ background: "rgba(134,100,251,0.06)", border: "1px solid rgba(134,100,251,0.15)" }}
            >
              <p className="text-sm font-medium mb-2" style={{ color: "#8664FB", fontFamily: "Inter, sans-serif" }}>Direct antwoord</p>
              <p className="text-base leading-relaxed" style={{ color: "#1A2A33", fontFamily: "Inter, sans-serif" }}>
                Beter vindbaar worden in Google vraagt om drie dingen tegelijk: een technisch correcte website (snel, mobielvriendelijk, crawlbaar), relevante content die aansluit op wat jouw klanten zoeken, en autoriteit via externe links en een volledig Google Business Profile. Lokale ondernemers profiteren het meest van lokale SEO: een geoptimaliseerd GBP-profiel en stadspecifieke landingspagina's.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Gratis SEO-scan aanvragen <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* INHOUD SECTIES */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {secties.map((sectie, i) => (
              <AnimatedSection key={i}>
                <motion.div variants={fadeUp}>
                  <h2
                    className="font-heading mb-4"
                    style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 700, color: "#1A2A33" }}
                  >
                    {sectie.h2}
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}>
                    {sectie.tekst}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "#f8f6ff" }}>
        <div className="container max-w-2xl">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Veelgestelde vragen</p>
              <h2 className="font-heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Vragen over Google-vindbaarheid
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              {faqs.map((faq, i) => <FAQ key={i} item={faq} />)}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* INTERNE LINKS */}
      <section className="py-14 bg-white">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-6 text-center">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-2" style={{ color: "#8664FB" }}>Meer lezen</p>
              <h3 className="font-heading font-700" style={{ color: "#1A2A33", fontSize: "1.2rem" }}>Gerelateerde pagina's</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
              {[
                { href: "/seo", label: "SEO-diensten overzicht" },
                { href: "/hoe-scoor-ik-in-chatgpt", label: "Hoe scoor ik in ChatGPT?" },
                { href: "/webdesign", label: "Website laten maken" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(134,100,251,0.08)",
                    color: "#8664FB",
                    border: "1px solid rgba(134,100,251,0.2)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <ArrowRight size={13} /> {link.label}
                </Link>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* LICHTE CTA */}
      <section className="py-16" style={{ background: "#f8f6ff" }}>
        <div className="container text-center max-w-xl mx-auto">
          <AnimatedSection>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-4"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "#1A2A33" }}
            >
              Wil je weten waar jouw website nu staat?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base mb-6 leading-relaxed"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              Wij analyseren jouw website gratis op technische fouten, zoekwoordkansen en lokale vindbaarheid.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="btn-primary">
                Gratis SEO-scan aanvragen <ArrowRight size={16} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
