/*
 * Diensten Page – De Proces Designers
 * 3 kernservices: Leadgeneratie (Meta), Funnels & Conversie, Marketing & Automatisering
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  TrendingUp, Target, Zap, ArrowRight,
  CheckCircle2, Video, HelpCircle, Users, Bell, CalendarCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503644974/J7Udx3KWkNc6vFgqgyECYk/dpd-cta-bg-Lb4Gg2j5Go7MK7hxFMRdVj.webp";

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

const mainServices = [
  {
    icon: <TrendingUp size={32} />,
    title: "Leadgeneratie",
    subheader: "Exclusieve leads via Facebook & Instagram",
    tagline: "Kernservice",
    desc: "Wij bouwen Meta campagnes die exclusieve leads genereren voor jouw bedrijf. Geen gedeelde platforms, geen prijs-oorlog met concurrenten. Elke aanvraag die binnenkomt is van jou alleen — gericht op jouw regio en doelgroep.",
    features: [
      { icon: <HelpCircle size={16} />, text: "Quiz funnels met gemiddeld 60–76% leadkwalificatie" },
      { icon: <Video size={16} />, text: "High-converting video creatives (±2.5× hogere conversie)" },
      { icon: <Users size={16} />, text: "Full creative productie: editing, hooks en scripts" },
      { icon: <Target size={16} />, text: "Geavanceerde targeting & retargeting strategieën" },
      { icon: <TrendingUp size={16} />, text: "Data-driven optimalisatie op basis van campagneresultaten" },
    ],
    stat: "76%",
    statLabel: "Gemiddelde leadkwalificatie via quiz funnel",
    color: "#8664FB",
  },
  {
    icon: <Target size={32} />,
    title: "Funnels & Conversie",
    subheader: "Van bezoeker naar gekwalificeerde lead naar afspraak",
    tagline: "Kernservice",
    desc: "Traffic zonder conversie is weggegooid geld. Wij bouwen funnels die bezoekers stap voor stap door een geoptimaliseerd proces leiden — van eerste klik tot bevestigde afspraak in jouw agenda.",
    features: [
      { icon: <HelpCircle size={16} />, text: "Quiz funnels die leads pre-kwalificeren vóór contact" },
      { icon: <Target size={16} />, text: "CRO-geoptimaliseerde landingspagina's per niche" },
      { icon: <TrendingUp size={16} />, text: "A/B testing op headlines, visuals en CTA's" },
      { icon: <CheckCircle2 size={16} />, text: "Geoptimaliseerde offerteflows en contactformulieren" },
      { icon: <CalendarCheck size={16} />, text: "Directe koppeling naar afsprakenpagina na aanmelding" },
    ],
    stat: "3.4×",
    statLabel: "Gemiddelde conversiestijging na funnel-optimalisatie",
    color: "#8C52FF",
  },
  {
    icon: <Zap size={32} />,
    title: "Marketing & Automatisering",
    subheader: "Geen leads laten liggen — afspraken in de agenda",
    tagline: "Kernservice",
    desc: "De meeste leads die binnenkomen worden nooit opgevolgd. Wij bouwen systemen die dat automatisch doen: van eerste melding tot bevestigde afspraak. Jij hoeft er niets voor te doen.",
    features: [
      { icon: <Bell size={16} />, text: "In-app en sms-notificatie bij elke nieuwe lead" },
      { icon: <Zap size={16} />, text: "Automatische lead nurturing via e-mail en WhatsApp" },
      { icon: <CalendarCheck size={16} />, text: "Afspraakplanner: lead kiest zelf een tijd in jouw agenda" },
      { icon: <CheckCircle2 size={16} />, text: "Geautomatiseerde follow-up bij no-shows of geen reactie" },
      { icon: <TrendingUp size={16} />, text: "CRM-integratie zodat elk contact traceerbaar is" },
    ],
    stat: "40u",
    statLabel: "Gemiddelde tijdsbesparing per maand op opvolging",
    color: "#47C8F5",
  },
];

export default function Diensten() {
  useSEO({
    title: "Onze Diensten | Leadgeneratie, Funnels & Automatisering — De Proces Designers",
    description: "Drie kernservices voor maximale groei: exclusieve Meta leadgeneratie, quiz funnels met 76% kwalificatie en volledige marketing automatisering. Plan een gratis strategiegesprek.",
    path: "/diensten",
  });
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ─── Page Hero ─── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-80 h-80 -right-10 top-0 opacity-20" />
        <div className="orb orb-cyan w-60 h-60 left-1/4 bottom-0 opacity-15" />
        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium font-heading"
              style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB" }}
            >
              Onze Diensten
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#1A2A33" }}
            >
              Leads die <span className="dpd-gradient-text">Afspraken Worden</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg max-w-2xl"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              Drie gespecialiseerde diensten die samen één doel hebben: exclusieve leads binnenhalen, kwalificeren en automatisch omzetten naar afspraken in jouw agenda.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Kernservices ─── */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="space-y-24">
            {mainServices.map((service, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeUp}
                  className={`grid lg:grid-cols-2 gap-12 items-center`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium font-heading mb-3"
                      style={{ background: `${service.color}15`, color: service.color }}
                    >
                      {service.tagline}
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${service.color}15`, color: service.color }}
                      >
                        {service.icon}
                      </div>
                      <h2 className="font-heading font-800 text-2xl" style={{ color: "#1A2A33" }}>
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-sm font-medium mb-4" style={{ color: service.color, fontFamily: "Inter, sans-serif" }}>
                      {service.subheader}
                    </p>
                    <p className="text-base mb-6 leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                      {service.desc}
                    </p>
                    <ul className="space-y-3 mb-7">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="shrink-0 mt-0.5" style={{ color: service.color }}>{f.icon}</span>
                          <span className="text-sm" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>{f.text}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="btn-primary text-sm">
                      Gratis strategiegesprek <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""} relative`}>
                    <div
                      className="rounded-2xl p-10 text-center relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}10 0%, rgba(71,200,245,0.08) 100%)`,
                        border: `1px solid ${service.color}20`,
                      }}
                    >
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        style={{ background: `linear-gradient(135deg, ${service.color}, #47C8F5)`, color: "white" }}
                      >
                        {service.icon}
                      </div>
                      <div
                        className="font-heading font-900 mb-2 dpd-gradient-text"
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                      >
                        {service.stat}
                      </div>
                      <div className="text-sm max-w-xs mx-auto" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                        {service.statLabel}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pakketten CTA ─── */}
      <section
        className="py-20 relative"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-64 h-64 -left-10 top-0 opacity-15" />
        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
              <h2
                className="font-heading font-800 mb-4"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#1A2A33" }}
              >
                Starter, Boost of <span className="dpd-gradient-text">Persoonlijke Strategie</span>?
              </h2>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                Elk pakket is direct inzetbaar voor dakdekkers, letselschadekantoren en financiële dienstverleners. Plan een gratis gesprek en ontdek welk pakket bij jouw situatie past.
              </p>
              <Link href="/contact" className="btn-primary">
                Gratis strategiegesprek plannen <ArrowRight size={18} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${CTA_BG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "rgba(26,42,51,0.82)" }} />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <motion.h2
              variants={fadeUp}
              className="font-heading mb-4 text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}
            >
              Klaar voor Exclusieve Leads?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Plan vandaag een gratis strategiegesprek. Geen verplichtingen — wel een concreet plan voor meer leads en afspraken.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="btn-primary">
                Gratis Strategiegesprek <ArrowRight size={18} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
