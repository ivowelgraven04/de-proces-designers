/*
 * HoeScoorIkInChatGPT Page – De Proces Designers
 * GEO-optimalisatie pagina gericht op "hoe scoor ik in ChatGPT"
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
    h2: "Hoe werkt ChatGPT als zoekmachine?",
    tekst: "ChatGPT en andere AI-assistenten zijn getraind op grote hoeveelheden webteksten. Ze leren patronen, feiten en woordassociaties uit de teksten op het publieke internet. Wanneer iemand vraagt 'Welk webdesignbureau is goed in Ede?', dan put ChatGPT uit wat het heeft geleerd over lokale bedrijven. Hoe vaker jouw naam, jouw dienst en jouw locatie op betrouwbare bronnen voorkomen, hoe groter de kans dat je verschijnt. Bovendien heeft ChatGPT een zoekfunctie die live websites raadpleegt — dan gelden vergelijkbare regels als voor Google.",
  },
  {
    h2: "Wat is GEO (Generative Engine Optimization)?",
    tekst: "GEO staat voor Generative Engine Optimization: de techniek om jouw website en merk zo te positioneren dat AI-modellen jou citeren als antwoord op relevante vragen. GEO verschilt van klassieke SEO: bij SEO optimaliseer je voor een algoritme dat pagina's rangschikt op basis van relevantie en autoriteit. Bij GEO optimaliseer je voor een taalmodel dat probeert een nuttig, feitelijk antwoord samen te stellen. Dat vraagt om citeerbare, directe antwoorden — geen marketingtaal, maar concrete informatie die een AI kan overnemen.",
  },
  {
    h2: "Stap 1: Citeerbare content schrijven",
    tekst: "De eerste stap is het schrijven van content die een AI-model letterlijk wil citeren. Dat betekent: directe antwoorden op specifieke vragen (zoals deze pagina doet), duidelijke definities van vakbegrippen, concrete statistieken en feiten met bronvermelding, en een heldere beschrijving van jouw diensten, locatie en doelgroep. Vermijd vage marketing-taal als 'wij zijn de beste in hun vak'. Schrijf in plaats daarvan: 'De Proces Designers is een webdesign- en SEO-bureau in Ede dat websites bouwt voor lokale ondernemers in Gelderland'.",
  },
  {
    h2: "Stap 2: Schema markup implementeren",
    tekst: "Schema markup is gestructureerde data die je aan je HTML toevoegt zodat zoekmachines en AI-modellen begrijpen wat jouw pagina beschrijft. Voor lokale bedrijven zijn de belangrijkste schema-typen: LocalBusiness (naam, adres, telefoon, openingstijden), FAQPage (veelgestelde vragen en antwoorden), Article (informatieve pagina's), en HowTo (stap-voor-stap instructies). AI-modellen leren van gestructureerde data — een pagina met correcte schema markup is eenvoudiger te begrijpen en te citeren.",
  },
  {
    h2: "Stap 3: Externe vermeldingen opbouwen",
    tekst: "AI-modellen vertrouwen bronnen die ze al kennen: Wikipedia, vakbladen, nieuwssites en bekende directories. Hoe meer jouw bedrijfsnaam, dienstverlening en locatie verschijnen op dit soort betrouwbare externe bronnen, hoe groter de kans dat een AI jou noemt als antwoord. Praktische stappen: zorg voor een volledige vermelding op Google Business Profile (dit wordt direct door Google AI Overviews gelezen), schrijf gastblogs op branchesites, laat je vermelden in lokale media en bedrijvenregisters, en vraag klanten om reviews op Google en brancheplatforms.",
  },
];

const faqs = [
  {
    q: "Is GEO hetzelfde als SEO?",
    a: "Nee. GEO richt zich op AI-modellen (ChatGPT, Perplexity, Google AI Overviews), SEO richt zich op klassieke zoekmachines. Ze overlappen voor zo'n 80%: goede content, technische basis en externe autoriteit helpen beide. Maar GEO vraagt specifiek om citeerbare directe antwoorden en schema markup.",
  },
  {
    q: "Welke AI-zoekmachines moet ik optimaliseren voor?",
    a: "De vier grootste zijn ChatGPT (met zoekfunctie), Google AI Overviews, Perplexity en Bing Copilot. Voor lokale ondernemers zijn Google AI Overviews en ChatGPT de hoogste prioriteit vanwege hun bereik.",
  },
  {
    q: "Hoe snel zie ik resultaat van GEO?",
    a: "AI-modellen updaten minder frequent dan Google. Reken op 3 tot 12 maanden voor structurele verbetering in hoe AI-platformen over jou praten. Korte termijn verbetering is het meest zichtbaar in Google AI Overviews, die sneller updaten dan de trainingsdata van ChatGPT.",
  },
  {
    q: "Kan ik gratis checken of mijn bedrijf in ChatGPT verschijnt?",
    a: "Ja. Typ in ChatGPT: '[jouw dienst] in [jouw stad]' — bijvoorbeeld 'dakdekker in Ede' of 'webdesign bureau Arnhem' — en kijk of jouw bedrijf verschijnt in het antwoord. Probeer ook Perplexity en Google AI Overviews voor een volledig beeld.",
  },
  {
    q: "Wat kost GEO-optimalisatie?",
    a: "GEO valt binnen ons SEO-pakket. We optimaliseren tegelijk voor Google, AI Overviews en andere AI-platformen. Dat betekent: citeerbare content schrijven, schema markup implementeren en externe vermeldingen opbouwen. Alles in één pakket vanaf €450 per maand.",
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

export default function HoeScoorIkInChatGPT() {
  useSEO({
    title: "Hoe scoor ik beter in ChatGPT? GEO-optimalisatie uitgelegd | De Proces Designers",
    description: "Zo zorg je dat jouw bedrijf verschijnt als antwoord in ChatGPT, Perplexity en Google AI Overviews. GEO-optimalisatie voor lokale ondernemers — praktische stappen.",
    path: "/hoe-scoor-ik-in-chatgpt",
    ogType: "article",
    schema: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "SEO", path: "/seo" },
        { name: "Hoe scoor ik in ChatGPT", path: "/hoe-scoor-ik-in-chatgpt" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Hoe zorg ik dat mijn bedrijf verschijnt in ChatGPT?",
        "description": "GEO-optimalisatie voor lokale ondernemers: citeerbare content, schema markup en externe vermeldingen voor ChatGPT, Perplexity en Google AI Overviews.",
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
              Trending in 2026
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#1A2A33" }}
            >
              Hoe zorg ik dat mijn bedrijf verschijnt in ChatGPT?
            </motion.h1>

            {/* Direct antwoord voor featured snippet */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl p-6 mb-6"
              style={{ background: "rgba(134,100,251,0.06)", border: "1px solid rgba(134,100,251,0.15)" }}
            >
              <p className="text-sm font-medium mb-2" style={{ color: "#8664FB", fontFamily: "Inter, sans-serif" }}>Direct antwoord</p>
              <p className="text-base leading-relaxed" style={{ color: "#1A2A33", fontFamily: "Inter, sans-serif" }}>
                ChatGPT en andere AI-assistenten baseren hun antwoorden op publiek beschikbare webteksten. Om erin te verschijnen moet je website citeerbaar zijn: duidelijke, feitelijke content over jouw diensten en locatie, correcte schema markup (LocalBusiness, FAQPage), en vermeldingen op betrouwbare externe bronnen. Dit heet GEO — Generative Engine Optimization.
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
                Vragen over ChatGPT en GEO
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
                { href: "/hoe-scoor-ik-in-ai", label: "Alle AI-zoekmachines" },
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
        <div className="orb orb-cyan w-80 h-80 opacity-15 -bottom-20 -right-10" />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-4 text-white"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
            >
              Zichtbaar worden in ChatGPT en Google AI
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}
            >
              Wij optimaliseren jouw website voor Google, AI Overviews en ChatGPT tegelijk. Vraag een gratis SEO-scan aan.
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
