/*
 * Home Page – De Proces Designers
 * Style: Liquid Tech / Futuristic SaaS — Premium Edition
 */
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import ClientLogos from "@/components/ClientLogos";
import {
  SplitText, CountUp, Typewriter, WebGLBackground, Particles,
  StatTicker, PinnedSystemSection, PinnedVoordelenSection,
} from "@/components/premium";
import { InteractiveDiagnose } from "@/components/InteractiveDiagnose";

const PROCESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503644974/J7Udx3KWkNc6vFgqgyECYk/dpd-process-visual-Fe2gecTx6gfDwRQ64oG7nR.webp";
const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503644974/J7Udx3KWkNc6vFgqgyECYk/dpd-cta-bg-Lb4Gg2j5Go7MK7hxFMRdVj.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

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



export default function Home() {
  useEffect(() => {
    document.title = "De Proces Designers | Marketing & Leadgeneratie";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #ffffff 50%, #f0fbff 100%)" }}
      >
        {/* Animated WebGL gradient background */}
        <WebGLBackground className="opacity-70" />

        {/* Particles */}
        <Particles count={60} className="opacity-80" />

        {/* Floating orbs */}
        <div className="orb orb-purple w-96 h-96 -top-20 -right-20" style={{ animationDelay: "0s" }} />
        <div className="orb orb-cyan w-64 h-64 bottom-20 right-1/3" style={{ animationDelay: "3s" }} />
        <div className="orb orb-purple w-48 h-48 top-1/3 right-1/4" style={{ animationDelay: "1.5s" }} />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
              style={{
                background: "rgba(134,100,251,0.1)",
                border: "1px solid rgba(134,100,251,0.25)",
                color: "#8664FB",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <Star size={14} fill="#8664FB" />
              Waar Proces & Design Samenkomt
            </motion.div>

            {/* 2.1 – SplitText word reveal */}
            <h1
              className="font-heading mb-4 leading-tight"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)", fontWeight: 800, color: "#1A2A33" }}
            >
              <SplitText text="Meer Klanten." />{" "}
              <br />
              <SplitText text="Slimmer Groeien." delay={250} className="dpd-gradient-text-animated" />
              <br />
              <SplitText text="Zonder Gedoe." delay={500} />
            </h1>

            {/* 2.4 – Typewriter tagline — eigen regel zodat de omliggende tekst niet beweegt */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8 max-w-xl"
            >
              <p className="text-lg leading-relaxed" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>
                De Proces Designers bouwt geautomatiseerde systemen die lokale bedrijven helpen groeien.
              </p>
              <p className="text-base mt-2 font-medium" style={{ fontFamily: "Inter, sans-serif", minHeight: "1.8em" }}>
                <span style={{ color: "#9ca3af" }}>Specialiteit: </span>
                <Typewriter
                  words={["Leadgeneratie op autopiloot", "Funnels die converteren", "Marketing automatisering", "Data-gedreven groeisystemen"]}
                  className="dpd-gradient-text font-semibold"
                />
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link href="/contact" className="btn-primary">
                Gratis Strategie Gesprek <ArrowRight size={18} />
              </Link>
              <Link href="/diensten" className="btn-secondary">
                Bekijk Diensten
              </Link>
            </motion.div>

            {/* 2.3 – CountUp stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-8 mt-10"
            >
              <div className="text-center">
                <div className="font-heading font-800 text-2xl dpd-gradient-text">
                  <CountUp end={43} suffix="+" />
                </div>
                <div className="text-xs mt-1" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>Actieve klanten</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-800 text-2xl dpd-gradient-text">
                  <CountUp end={8} suffix=" jr" />
                </div>
                <div className="text-xs mt-1" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>Ervaring</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-800 text-2xl dpd-gradient-text">
                  3.4x
                </div>
                <div className="text-xs mt-1" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>Gemiddelde groei</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-800 text-2xl dpd-gradient-text">
                  <CountUp end={98} suffix="%" />
                </div>
                <div className="text-xs mt-1" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>Klanttevredenheid</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5.6 – Live stat ticker */}
      <StatTicker />


      {/* ─── INTERACTIEVE DIAGNOSE ─── */}
      <InteractiveDiagnose />

      {/* ─── HET SYSTEEM – 1.2 + 1.3 + 3.5 pinned scroll section ─── */}
      <PinnedSystemSection />

      {/* ─── VOORDELEN – pinned card scroll ─── */}
      <PinnedVoordelenSection />

      {/* ─── CLIENT LOGOS ─── */}
      <ClientLogos />

      {/* ─── PAKKETTEN ─── */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-cyan w-96 h-96 -right-20 top-0 opacity-15" />
        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-heading mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1A2A33" }}>
                Kies Jouw <span className="dpd-gradient-text-animated">Pakket</span>
              </h2>
              <p className="max-w-xl mx-auto text-base" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                Van solide basis tot volledig geautomatiseerd groeisysteem — transparant geprijsd, direct inzetbaar.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
              {[
                {
                  name: "Starter", badge: null, highlight: false,
                  tagline: "Solide basis voor directe leadinstroom",
                  features: [
                    "Meta leadgeneratiecampagnes",
                    "Static foto advertenties",
                    "Geoptimaliseerde landingspagina",
                    "Standaard leadformulieren",
                    "Maandelijkse rapportage",
                    "Wekelijkse check-in",
                    "1 actieve campagne",
                  ],
                  cta: "Meer informatie",
                },
                {
                  name: "Boost", badge: "Meest Gekozen", highlight: true,
                  tagline: "Het volledige leadgeneratie- en conversiesysteem",
                  features: [
                    "Alles uit Starter",
                    "Videoadvertenties (±2.5× hogere conversie)",
                    "Quiz funnels (tot 76% leadkwalificatie)",
                    "CRM-integratie & automatiseringen",
                    "Geautomatiseerde lead opvolging",
                    "A/B testing & optimalisatie",
                    "Meerdere campagnes tegelijk",
                  ],
                  cta: "Start met Boost",
                },
                {
                  name: "Persoonlijke Strategie", badge: null, highlight: false,
                  tagline: "Maatwerk op basis van jouw doel en markt",
                  features: [
                    "Volledig op maat samengesteld",
                    "Keuze uit alle diensten en formats",
                    "Strategie op basis van jouw markt",
                    "Afgestemd op jouw budget en doel",
                    "Dedicated strategiegesprek",
                  ],
                  cta: "Bespreek mijn situatie",
                },
              ].map((pkg, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`relative rounded-2xl p-8 ${pkg.highlight ? "scale-105" : ""}`}
                  style={{
                    background: pkg.highlight ? "linear-gradient(135deg, #8664FB 0%, #47C8F5 100%)" : "rgba(255,255,255,0.9)",
                    border: pkg.highlight ? "none" : "1px solid rgba(134,100,251,0.15)",
                    boxShadow: pkg.highlight ? "0 24px 64px rgba(134,100,251,0.35)" : "0 4px 24px rgba(134,100,251,0.08)",
                  }}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-heading font-700"
                      style={{ background: "#1A2A33", color: "white" }}>
                      {pkg.badge}
                    </div>
                  )}
                  <h3 className="font-heading font-800 text-xl mb-2" style={{ color: pkg.highlight ? "white" : "#1A2A33" }}>{pkg.name}</h3>
                  <p className="text-sm mb-6" style={{ color: pkg.highlight ? "rgba(255,255,255,0.8)" : "#718096", fontFamily: "Inter, sans-serif" }}>{pkg.tagline}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: pkg.highlight ? "rgba(255,255,255,0.9)" : "#8664FB" }} />
                        <span className="text-sm" style={{ color: pkg.highlight ? "rgba(255,255,255,0.9)" : "#4a5568", fontFamily: "Inter, sans-serif" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className={pkg.highlight ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                    style={pkg.highlight ? { background: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.6)", color: "white" } : {}}
                  >
                    {pkg.cta}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeUp} className="text-center mt-8 text-sm" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
              Geen verborgen kosten. Geen lock-in. Neem contact op voor een vrijblijvend strategiegesprek.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <ReviewsSection />

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${CTA_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(26,42,51,0.82)" }} />

        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-4 text-white"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800 }}
            >
              Klaar om te Groeien?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Plan vandaag nog een gratis strategiegesprek en ontdek wat wij voor jouw bedrijf kunnen betekenen.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary animate-pulse-glow">
                Gratis Gesprek Inplannen <ArrowRight size={18} />
              </Link>
              <Link href="/diensten" className="btn-secondary" style={{ borderColor: "rgba(255,255,255,0.5)", color: "white" }}>
                Meer Ontdekken
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
