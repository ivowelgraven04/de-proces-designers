/*
 * HoeScoorIkInAI Page – De Proces Designers
 * Overzichtspagina voor AI-zoekmachines optimalisatie (GEO)
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, ChevronDown, CheckCircle2,
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

const platforms = [
  {
    naam: "Google AI Overviews",
    kleur: "#8664FB",
    desc: "Verschijnt boven reguliere zoekresultaten voor informatieve queries. Bereikt de grootste groep Nederlandse zoekers.",
    vereisten: ["E-E-A-T signalen (expertise, autoriteit, betrouwbaarheid)", "FAQPage en HowTo schema markup", "Citeerbare, directe antwoorden in de tekst", "Snel ladende, mobielvriendelijke website"],
  },
  {
    naam: "ChatGPT Search",
    kleur: "#47C8F5",
    desc: "De zoekfunctie in ChatGPT Plus en Teams. Leest live websites bij het beantwoorden van vragen.",
    vereisten: ["Snel ladende pagina (laadtijd onder 3 seconden)", "Duidelijke H1 met locatie en dienst", "LocalBusiness en FAQPage schema", "Feitelijke, directe beschrijving van diensten"],
  },
  {
    naam: "Perplexity",
    kleur: "#FF6B35",
    desc: "Populaire AI-zoekmachine die bronnen citeert en weergeeft. Groeit het snelst in marktaandeel.",
    vereisten: ["Externe vermeldingen op betrouwbare bronnen", "Duidelijke auteur-attributie op pagina's", "Feitelijke content met bronnen en statistieken", "Consistente NAP-vermelding op directories"],
  },
  {
    naam: "Bing Copilot",
    kleur: "#2D9E2D",
    desc: "Gebaseerd op de Bing-index, aangedreven door GPT-4. Volgt deels klassieke SEO-regels.",
    vereisten: ["Indexatie in Bing via Bing Webmaster Tools", "Schema markup (LocalBusiness, FAQPage)", "Goede organische Bing-ranking als basis", "Snel ladende, mobielvriendelijke website"],
  },
];

const vergelijking = [
  { aspect: "Doel", seo: "Ranken in zoekresultaten", geo: "Geciteerd worden als antwoord" },
  { aspect: "Doelplatform", seo: "Google, Bing (traditionele SERP)", geo: "ChatGPT, Perplexity, AI Overviews" },
  { aspect: "Contentformat", seo: "Lange pagina's met zoekwoorden", geo: "Directe antwoorden, definities, feiten" },
  { aspect: "Schema markup", seo: "Nuttig (rich snippets)", geo: "Cruciaal (AI leest gestructureerde data)" },
  { aspect: "Externe links", seo: "Gezag (PageRank)", geo: "Vertrouwen (AI citeert bekende bronnen)" },
  { aspect: "Resultaat zichtbaar na", seo: "3-6 maanden", geo: "3-12 maanden" },
];

const stappen = [
  "Schrijf directe antwoorden op specifieke vragen die jouw klanten stellen.",
  "Implementeer LocalBusiness schema met naam, adres, telefoon en diensten.",
  "Voeg FAQPage schema toe aan pagina's met veelgestelde vragen.",
  "Zorg dat jouw bedrijf volledig vermeld staat in Google Business Profile.",
  "Bouw vermeldingen op betrouwbare externe bronnen (directories, vakbladen, lokale media).",
  "Gebruik concrete feiten en statistieken in je teksten — AI-modellen citeren ze graag.",
];

const faqs = [
  {
    q: "Vervangt AI Google volledig?",
    a: "Nee. Google blijft dominant maar AI-zoekmachines verwerken een groeiend aandeel van informatieve zoekopdrachten — schattingen liggen op 15 tot 25% in 2026. Beide kanalen zijn belangrijk.",
  },
  {
    q: "Moet ik kiezen tussen SEO en GEO?",
    a: "Nee. Ongeveer 80% van wat goed werkt voor SEO (technische basis, goede content, externe autoriteit) werkt ook voor GEO. GEO vraagt aanvullend om citeerbare antwoorden en schema markup.",
  },
  {
    q: "Wat is llms.txt?",
    a: "Een nieuw, optioneel bestandsformaat (niet door Google Search gelezen) dat AI-modellen uitlegt wat jouw site doet. Het staat in de root van je website als llms.txt en kan AI-crawlers helpen jouw content te begrijpen. Wij implementeren het als onderdeel van ons pakket.",
  },
  {
    q: "Welk AI-platform groeit het snelst?",
    a: "Perplexity groeit het snelst in marktaandeel (gebruik verdubbeld in 2025-2026). ChatGPT is het grootst in absolute gebruikers. Google AI Overviews heeft het grootste bereik omdat het al in de vertrouwde Google-omgeving zit.",
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

export default function HoeScoorIkInAI() {
  useSEO({
    title: "Hoe scoor ik beter in AI-zoekmachines? | De Proces Designers",
    description: "Van Google AI Overviews tot Perplexity en Copilot: zo zorg je dat jouw bedrijf zichtbaar is in AI-gedreven zoekresultaten. GEO-strategie voor lokale ondernemers.",
    path: "/hoe-scoor-ik-in-ai",
    ogType: "article",
    schema: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "SEO", path: "/seo" },
        { name: "Hoe scoor ik in AI-zoekmachines", path: "/hoe-scoor-ik-in-ai" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Hoe scoor ik beter in AI-zoekmachines?",
        "description": "GEO-strategie voor lokale ondernemers: optimaliseren voor Google AI Overviews, ChatGPT, Perplexity en Bing Copilot.",
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
        <div className="orb orb-cyan w-64 h-64 bottom-0 left-1/4 opacity-20" />

        <div className="container relative z-10 max-w-3xl">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-3">
              <Link href="/seo" className="text-xs font-medium" style={{ color: "#8664FB", fontFamily: "Inter, sans-serif" }}>
                ← SEO-diensten
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-medium font-heading"
              style={{ background: "rgba(71,200,245,0.1)", border: "1px solid rgba(71,200,245,0.25)", color: "#47C8F5" }}
            >
              AI & Zoekmachines
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#1A2A33" }}
            >
              Hoe scoor ik beter in AI-zoekmachines?
            </motion.h1>

            {/* Direct antwoord */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-6 mb-6"
              style={{ background: "rgba(134,100,251,0.06)", border: "1px solid rgba(134,100,251,0.15)" }}
            >
              <p className="text-sm font-medium mb-2" style={{ color: "#8664FB", fontFamily: "Inter, sans-serif" }}>Direct antwoord</p>
              <p className="text-base leading-relaxed" style={{ color: "#1A2A33", fontFamily: "Inter, sans-serif" }}>
                AI-zoekmachines zoals Google AI Overviews, ChatGPT, Perplexity en Bing Copilot werken anders dan klassieke zoekmachines. Ze genereren antwoorden op basis van webteksten die ze vertrouwen. Beter scoren doe je door citeerbare, feitelijke content te schrijven, technische schema markup te implementeren en je merk te laten vermelden op betrouwbare externe bronnen.
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

      {/* PLATFORM KAARTEN */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>De vier platforms</p>
              <h2 className="font-heading mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1A2A33" }}>
                Welke AI-zoekmachines tellen?
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                Elk platform werkt anders en heeft eigen vereisten. Hier is wat je moet weten over de vier grootste.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {platforms.map((platform, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl p-6 bg-white"
                  style={{ border: `1px solid ${platform.kleur}20`, boxShadow: `0 4px 20px ${platform.kleur}08` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-heading font-700 px-3 py-1 rounded-full"
                      style={{ background: `${platform.kleur}12`, color: platform.kleur }}
                    >
                      {platform.naam}
                    </span>
                  </div>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>{platform.desc}</p>
                  <ul className="space-y-2">
                    {platform.vereisten.map((v, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 size={14} style={{ color: platform.kleur, flexShrink: 0, marginTop: 2 }} />
                        <span className="text-sm" style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}>{v}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* VERGELIJKINGSTABEL */}
      <section className="py-20" style={{ background: "#f8f6ff" }}>
        <div className="container max-w-3xl">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Vergelijking</p>
              <h2 className="font-heading mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1A2A33" }}>
                AI-optimalisatie vs. klassieke SEO
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(134,100,251,0.12)" }}>
              <table className="w-full" style={{ fontFamily: "Inter, sans-serif" }}>
                <thead>
                  <tr style={{ background: "rgba(134,100,251,0.06)" }}>
                    <th className="text-left p-4 text-xs font-heading font-700 uppercase tracking-wide" style={{ color: "#1A2A33" }}>Aspect</th>
                    <th className="text-left p-4 text-xs font-heading font-700 uppercase tracking-wide" style={{ color: "#1A2A33" }}>Klassieke SEO</th>
                    <th className="text-left p-4 text-xs font-heading font-700 uppercase tracking-wide" style={{ color: "#8664FB" }}>GEO (AI)</th>
                  </tr>
                </thead>
                <tbody>
                  {vergelijking.map((rij, i) => (
                    <tr key={i} style={{ borderTop: "1px solid rgba(134,100,251,0.08)", background: i % 2 === 0 ? "white" : "rgba(134,100,251,0.02)" }}>
                      <td className="p-4 text-sm font-medium" style={{ color: "#1A2A33" }}>{rij.aspect}</td>
                      <td className="p-4 text-sm" style={{ color: "#718096" }}>{rij.seo}</td>
                      <td className="p-4 text-sm" style={{ color: "#4A5568" }}>{rij.geo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* PRAKTISCHE STAPPEN */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="mb-10">
              <p className="text-xs font-heading font-700 uppercase tracking-widest mb-3" style={{ color: "#8664FB" }}>Actieplan</p>
              <h2 className="font-heading mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Praktische stappen voor lokale ondernemers
              </h2>
            </motion.div>

            <div className="space-y-4">
              {stappen.map((stap, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-xl p-5"
                  style={{ border: "1px solid rgba(134,100,251,0.12)", background: "rgba(134,100,251,0.02)" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-heading font-700 text-sm"
                    style={{ background: "rgba(134,100,251,0.1)", color: "#8664FB" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-sm leading-relaxed pt-1" style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}>{stap}</p>
                </motion.div>
              ))}
            </div>
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
                Vragen over AI-zoekmachines
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
                { href: "/hoe-scoor-ik-in-chatgpt", label: "Specifiek: ChatGPT" },
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
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-4 text-white"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
            >
              Klaar om zichtbaar te worden in AI?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Wij analyseren jouw AI-zichtbaarheid en implementeren een GEO-strategie die jou laat verschijnen waar jouw klanten zoeken.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Gratis SEO-scan aanvragen <ArrowRight size={16} />
              </Link>
              <Link href="/seo" className="btn-secondary-dark">
                Bekijk ons SEO-aanbod
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
