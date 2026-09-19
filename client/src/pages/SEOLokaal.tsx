/*
 * SEOLokaal Page – De Proces Designers
 * Sub-dienst pagina voor Lokale SEO: Google Maps, GBP, lokale zoekwoorden, reviews
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, MapPin, Star, CheckCircle2, ChevronDown,
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

const signalen = [
  {
    icon: <MapPin size={20} />,
    title: "Google Business Profile",
    punten: [
      "Juiste primaire en aanvullende categorieën",
      "Alle diensten met beschrijvingen",
      "Correcte openingstijden en feestdagen",
      "Foto's en Q&A regelmatig bijgehouden",
    ],
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "Lokale zoekwoorden",
    punten: [
      "Stadspecifieke landingspagina's per regio",
      "NAP-consistentie op alle vermeldingen",
      "Lokale schema markup (LocalBusiness)",
      "Locatiegebonden zoekwoorden in tekst en titels",
    ],
  },
  {
    icon: <Star size={20} />,
    title: "Reviews & reputatie",
    punten: [
      "Reviewstrategie: actief vragen na elke klus",
      "Professioneel antwoorden op alle reviews",
      "AggregateRating schema voor sterren in zoekresultaten",
      "Monitoring van nieuwe reviews via GBP",
    ],
  },
];

const steden = [
  { naam: "Ede", slug: "webdesign-ede" },
  { naam: "Arnhem", slug: "webdesign-arnhem" },
  { naam: "Nijmegen", slug: "webdesign-nijmegen" },
  { naam: "Wageningen", slug: "webdesign-wageningen" },
  { naam: "Apeldoorn", slug: "webdesign-apeldoorn" },
  { naam: "Gelderland", slug: "webdesign-gelderland" },
];

const faqs = [
  {
    q: "Wat is het verschil tussen lokale SEO en gewone SEO?",
    a: "Lokale SEO richt zich op zoekopdrachten met een geografische component, zoals 'dakdekker Ede' of 'webdesign bureau Arnhem'. Het doel is zichtbaarheid in de Google Maps Local Pack en in de organische resultaten voor die specifieke locatie. Gewone SEO richt zich op nationaal of internationaal verkeer.",
  },
  {
    q: "Hoe lang duurt het om in de Local Pack te komen?",
    a: "Gemiddeld 4 tot 8 weken voor een goed geoptimaliseerd GBP-profiel op een locatie met weinig concurrentie. Voor competitieve locaties of branches kan dit 3 tot 6 maanden duren. Consistentie en reviews zijn doorslaggevend.",
  },
  {
    q: "Moet ik een fysiek adres hebben in de stad?",
    a: "Voor zichtbaarheid in Google Maps heb je een geregistreerd adres nodig in of nabij die stad. Voor organische lokale zoekresultaten zijn ook virtuele kantoren of het opgeven van een servicegebied mogelijk — Google toont je dan in een groter gebied zonder pin op de kaart.",
  },
  {
    q: "Combineren jullie lokale SEO met webdesign?",
    a: "Ja. Wij bouwen stadspecifieke landingspagina's als onderdeel van het webdesign of als losse SEO-dienst. Elke stadspagina krijgt lokale zoekwoorden, de juiste schema markup en interne links naar de hoofddienstenpagina.",
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

export default function SEOLokaal() {
  useSEO({
    title: "Lokale SEO — Beter Gevonden in Jouw Regio | De Proces Designers",
    description: "Lokale SEO voor bedrijven in Ede, Arnhem en Nijmegen. Google Business Profile, lokale zoekwoorden, reviews en stadspecifieke landingspagina's. Klaar in 4 weken.",
    path: "/seo/lokale-seo",
    schema: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "SEO", path: "/seo" },
        { name: "Lokale SEO", path: "/seo/lokale-seo" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Lokale SEO",
        "serviceType": "Lokale SEO",
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
        "areaServed": [
          { "@type": "City", "name": "Ede" },
          { "@type": "City", "name": "Arnhem" },
          { "@type": "City", "name": "Nijmegen" },
          { "@type": "City", "name": "Wageningen" },
          { "@type": "City", "name": "Apeldoorn" },
          { "@type": "AdministrativeArea", "name": "Gelderland" },
        ],
        "description": "Lokale SEO voor bedrijven in Gelderland: Google Business Profile, stadspecifieke landingspagina's, reviews en lokale schema markup.",
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
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #ffffff 60%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-96 h-96 -top-20 -right-20 opacity-30" />
        <div className="orb orb-cyan w-64 h-64 bottom-0 left-1/4 opacity-20" />

        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-3">
              <Link href="/seo" className="text-xs font-medium" style={{ color: "#8664FB", fontFamily: "Inter, sans-serif" }}>
                ← SEO-diensten
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-medium font-heading"
              style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB" }}
            >
              <MapPin size={13} /> Ede · Arnhem · Nijmegen · heel Gelderland
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading mb-5 leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, color: "#1A2A33" }}
            >
              Lokaal gevonden worden door klanten{" "}
              <span className="dpd-gradient-text">in jouw regio</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg max-w-2xl mb-8 leading-relaxed"
              style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}
            >
              Lokale SEO is de snelste manier om nieuwe klanten te bereiken die actief zoeken naar jouw dienst in jouw stad. De Proces Designers optimaliseert jouw lokale aanwezigheid op Google Maps, zoekresultaten en AI-platforms.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Gratis SEO-scan aanvragen <ArrowRight size={16} />
              </Link>
              <Link href="/seo" className="btn-secondary">
                Alle SEO-diensten
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* LOKALE SIGNALEN */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Drie pijlers</p>
              <h2 className="font-heading mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1A2A33" }}>
                Wat we voor jou optimaliseren
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                Lokale SEO draait om drie samenhangende elementen: een volledig GBP, lokale zoekwoorden en een actieve reviewstrategie.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {signalen.map((item, i) => (
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
                  <h3 className="font-heading font-700 text-base mb-3" style={{ color: "#1A2A33" }}>{item.title}</h3>
                  <ul className="space-y-2">
                    {item.punten.map((punt, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 size={13} style={{ color: "#8664FB", flexShrink: 0, marginTop: 2 }} />
                        <span className="text-sm" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>{punt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STEDEN GRID */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}>
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-8">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Werkgebied</p>
              <h2 className="font-heading mb-2" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Lokale SEO in jouw regio
              </h2>
              <p className="text-sm" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                Actief in heel Nederland, met de meeste klanten in Gelderland en omgeving.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {steden.map((stad) => (
                <Link
                  key={stad.slug}
                  href={`/${stad.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(134,100,251,0.08)",
                    color: "#8664FB",
                    border: "1px solid rgba(134,100,251,0.2)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <MapPin size={13} /> {stad.naam}
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-2xl">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Veelgestelde vragen</p>
              <h2 className="font-heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Vragen over lokale SEO
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              {faqs.map((faq, i) => <FAQ key={i} item={faq} />)}
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* INTERNE LINKS */}
      <section className="py-14" style={{ background: "#f8f6ff" }}>
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-6 text-center">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-2" style={{ color: "#8664FB" }}>Meer lezen</p>
              <h3 className="font-heading font-700" style={{ color: "#1A2A33", fontSize: "1.2rem" }}>Gerelateerde pagina's</h3>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
              {[
                { href: "/seo", label: "SEO-diensten overzicht" },
                { href: "/webdesign", label: "Website laten maken" },
                { href: "/beter-vindbaar-in-google", label: "Beter vindbaar in Google" },
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

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A2A33 0%, #0f1a22 100%)" }}
      >
        <div className="orb orb-purple w-96 h-96 opacity-20 -top-20 -right-10" />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <motion.p variants={fadeUp} className="text-xs font-heading font-700 uppercase tracking-widest mb-4" style={{ color: "#8664FB" }}>
              Lokaal zichtbaar in 4 weken
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-4 text-white"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
            >
              Gevonden worden in jouw stad
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              We optimaliseren jouw Google Business Profile, bouwen stadspecifieke landingspagina's en starten een reviewstrategie. Gratis scan om te beginnen.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Gratis SEO-scan aanvragen <ArrowRight size={16} />
              </Link>
              <Link href="/seo" className="btn-secondary-dark">
                Alle SEO-diensten
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
