/*
 * SEO Page – De Proces Designers
 * Anchor pagina voor SEO-diensten: lokaal, technisch, content en AI-zoekmachines
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, MapPin, Search, CheckCircle2, TrendingUp, ChevronDown, BarChart2,
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

const diensten = [
  {
    icon: <MapPin size={20} />,
    title: "Lokale SEO",
    desc: "Google Maps-optimalisatie, Google Business Profile, lokale zoekwoorden en NAP-consistentie. Gevonden worden in jouw regio.",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "Technische SEO",
    desc: "Laadtijd, crawlbaarheid, schema markup en Core Web Vitals. De technische basis die Google verwacht.",
  },
  {
    icon: <Search size={20} />,
    title: "Content SEO",
    desc: "Zoekwoordonderzoek, pagina-structuur, featured snippets en FAQ-schema. Content die Google wil indexeren en tonen.",
  },
  {
    icon: <BarChart2 size={20} />,
    title: "AI-zoekmachines",
    desc: "GEO-optimalisatie voor ChatGPT, Perplexity en Google AI Overviews. Zichtbaar in de zoekmachines van morgen.",
  },
];

const werkwijze = [
  { stap: "1", titel: "SEO-scan & analyse", desc: "We analyseren jouw huidige positie: technische fouten, zoekwoordkansen en concurrentie. Basis voor alles wat volgt.", periode: "Week 1" },
  { stap: "2", titel: "Prioriteiten & roadmap", desc: "Op basis van de scan stellen we een prioriteitenlijst op. Wat levert het meeste op in de kortste tijd?", periode: "Week 2" },
  { stap: "3", titel: "Implementatie", desc: "Technische fixes, content-optimalisatie, linkbuilding en schema markup. Stap voor stap uitgevoerd.", periode: "Maand 1-3" },
  { stap: "4", titel: "Monitoring & rapportage", desc: "Maandelijkse rapportage met rankings, traffic en concrete acties voor de volgende periode.", periode: "Doorlopend" },
];

const stats = [
  { getal: "35+", label: "Domein Rating" },
  { getal: "119", label: "Gecorrigeerde indexeringsfouten" },
  { getal: "3-6 mnd", label: "Gemiddeld tot eerste rankings" },
];

const internLinks = [
  { href: "/beter-vindbaar-in-google", label: "Hoe word ik beter vindbaar in Google?" },
  { href: "/hoe-scoor-ik-in-chatgpt", label: "Hoe scoor ik in ChatGPT?" },
  { href: "/hoe-scoor-ik-in-ai", label: "Hoe scoor ik in AI-zoekmachines?" },
];

const faqs = [
  { q: "Wat kost SEO bij De Proces Designers?", a: "Vanaf €450 per maand voor een continu SEO-pakket. Eenmalige optimalisatie vanaf €750. We bespreken de scope en investering in een gratis gesprek." },
  { q: "Hoe lang duurt het voordat ik resultaat zie?", a: "Gemiddeld 3 tot 6 maanden voor eerste stabiele rankings op competitieve zoekwoorden. Lokale SEO en technische fixes zijn soms al sneller zichtbaar." },
  { q: "Doen jullie ook AI-optimalisatie (GEO)?", a: "Ja. GEO-optimalisatie voor ChatGPT, Perplexity en Google AI Overviews valt standaard binnen ons SEO-pakket." },
  { q: "Combineren jullie SEO met webdesign?", a: "Absoluut. Wij bouwen websites met SEO-fundament ingebakken en kunnen daarna doorlopende SEO verzorgen als aanvullende dienst." },
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

export default function SEO() {
  useSEO({
    title: "SEO Bureau — Beter Vindbaar in Google & AI | De Proces Designers",
    description: "SEO voor lokale ondernemers in Ede, Arnhem en Nijmegen. Van technische SEO tot AI-zoekmachines zoals ChatGPT en Google AI Overviews. Vraag gratis SEO-scan aan.",
    path: "/seo",
    schema: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "SEO", path: "/seo" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "SEO — Zoekmachineoptimalisatie",
        "serviceType": "SEO",
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
          { "@type": "AdministrativeArea", "name": "Gelderland" },
        ],
        "description": "SEO voor lokale ondernemers: lokale SEO, technische SEO, content SEO en GEO-optimalisatie voor AI-zoekmachines.",
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
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-medium font-heading"
              style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB" }}
            >
              Nieuwe dienst
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading mb-5 leading-tight"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, color: "#1A2A33" }}
            >
              Gevonden worden door de klanten{" "}
              <span className="dpd-gradient-text">die er toe doen</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg max-w-2xl mb-8 leading-relaxed"
              style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}
            >
              De Proces Designers helpt lokale ondernemers beter scoren in Google, Google Maps én AI-zoekmachines zoals ChatGPT en Perplexity. Van technische SEO tot content-strategie.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Gratis SEO-scan aanvragen <ArrowRight size={16} />
              </Link>
              <a href="#werkwijze" className="btn-secondary">
                Bekijk aanpak
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* DIENSTEN GRID */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Wat we doen</p>
              <h2 className="font-heading mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1A2A33" }}>
                SEO van basis tot AI-zoekmachines
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                Vier pijlers die samen zorgen voor duurzame zichtbaarheid — zowel in Google als in de AI-platformen die steeds meer zoekverkeer verwerken.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {diensten.map((item, i) => (
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

      {/* WERKWIJZE */}
      <section id="werkwijze" className="py-20" style={{ background: "#f8f6ff" }}>
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-12 max-w-xl mx-auto">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Hoe het werkt</p>
              <h2 className="font-heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Van scan tot resultaat
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {werkwijze.map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="text-center">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 font-heading font-800 text-lg"
                    style={{ background: "rgba(134,100,251,0.1)", color: "#8664FB" }}
                  >
                    {item.stap}
                  </div>
                  <p className="text-xs font-medium mb-1" style={{ color: "#47C8F5", fontFamily: "Inter, sans-serif" }}>{item.periode}</p>
                  <h3 className="font-heading font-700 text-sm mb-2" style={{ color: "#1A2A33" }}>{item.titel}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATISTIEKEN */}
      <section className="py-16" style={{ background: "#1A2A33" }}>
        <div className="container">
          <AnimatedSection>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              {stats.map((stat, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <div
                    className="font-heading font-900 mb-2 dpd-gradient-text"
                    style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
                  >
                    {stat.getal}
                  </div>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INTERNE LINKS */}
      <section className="py-16 bg-white">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-8 text-center max-w-xl mx-auto">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Meer lezen</p>
              <h2 className="font-heading mb-2" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Verdiep je in specifieke vragen
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
              {internLinks.map((link) => (
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

      {/* FAQ */}
      <section className="py-20" style={{ background: "#f8f6ff" }}>
        <div className="container max-w-2xl">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Veelgestelde vragen</p>
              <h2 className="font-heading" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Vragen over SEO
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-3">
              {faqs.map((faq, i) => <FAQ key={i} item={faq} />)}
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
              Klaar om te starten?
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-4 text-white"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
            >
              Gratis SEO-scan — ontdek jouw kansen
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              We analyseren jouw website op technische fouten, zoekwoordkansen en AI-zichtbaarheid. Gratis, zonder verplichtingen.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Gratis SEO-scan aanvragen <ArrowRight size={16} />
              </Link>
              <Link href="/seo/lokale-seo" className="btn-secondary-dark">
                Lokale SEO bekijken
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
