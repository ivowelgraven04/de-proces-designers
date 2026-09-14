/*
 * Letselschade landingspagina — De Proces Designers
 * Sector-landing voor e-mailcampagne richting letselschadekantoren.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, Scale, Shield, Target, Zap,
  CheckCircle2, TrendingUp, AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO, breadcrumb } from "@/hooks/useSEO";
import { InteractiveDiagnose } from "@/components/InteractiveDiagnose";

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

const PAIN_POINTS = [
  {
    icon: <AlertCircle size={20} />,
    title: "Google Ads is onbetaalbaar",
    desc: "Grote kantoren bieden €50–150 per klik. Zonder enorm budget verlies je de veiling — terwijl je dezelfde leads tóch deelt met concurrenten.",
  },
  {
    icon: <AlertCircle size={20} />,
    title: "Gedeelde leadplatforms verbranden marge",
    desc: "Iedere aanvraag gaat naar 5+ kantoren tegelijk. Je wint op snelheid, niet op kwaliteit — en altijd op prijs.",
  },
  {
    icon: <AlertCircle size={20} />,
    title: "Cliënten haken af na de eerste melding",
    desc: "Zonder een opvolg-systeem verdampt 60–80% van de aanmeldingen voordat ze in dossier zitten.",
  },
];

const USPS = [
  {
    icon: <Shield size={28} />,
    title: "100% exclusieve cliënten-leads",
    desc: "Elke aanmelding is alleen voor jouw kantoor. Geen veiling met 5 andere kantoren, geen prijs-race.",
    color: "#8664FB",
  },
  {
    icon: <Target size={28} />,
    title: "Pre-gekwalificeerd vóór binnenkomst",
    desc: "Quiz-funnels filteren op zaak-type, aansprakelijkheid en haalbaarheid. Jij krijgt alleen dossiers die er écht toe doen.",
    color: "#6B8EFF",
  },
  {
    icon: <Zap size={28} />,
    title: "Automatische opvolging",
    desc: "Direct contact via WhatsApp en e-mail, intake-afspraak in jouw agenda — zonder dat iemand bij jou hoeft te bellen.",
    color: "#47C8F5",
  },
];

const CASE_METRICS = [
  { value: "68%", label: "Lagere kosten per gekwalificeerde lead" },
  { value: "2×", label: "Cliëntenaantal in 4 maanden" },
  { value: "€0", label: "Google Ads budget nodig" },
];

export default function Letselschade() {
  useSEO({
    title:
      "Marketing & Leadgeneratie voor Letselschadekantoren | De Proces Designers",
    description:
      "Exclusieve, gekwalificeerde cliënten-leads voor letselschadekantoren — buiten de dure Google Ads-veiling om. Meta-funnels met pre-kwalificatie, automatische opvolging en directe agenda-integratie.",
    path: "/letselschade",
    imageAlt:
      "Leadgeneratie voor letselschadekantoren — De Proces Designers",
    schema: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Letselschade", path: "/letselschade" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Leadgeneratie en marketing voor letselschadekantoren",
        name: "Marketing voor letselschadekantoren",
        description:
          "Exclusieve, pre-gekwalificeerde cliënten-leads voor letselschade-advocaten en -bureaus via Meta-funnels, met automatische opvolging en agenda-integratie.",
        provider: {
          "@type": "Organization",
          name: "De Proces Designers",
          url: "https://www.deprocesdesigners.nl",
        },
        areaServed: { "@type": "Country", name: "Netherlands" },
        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "Letselschadekantoren, letselschade-advocaten, letselschade-bureaus",
        },
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ─── HERO ─── */}
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
              style={{
                background: "rgba(134,100,251,0.1)",
                border: "1px solid rgba(134,100,251,0.2)",
                color: "#8664FB",
              }}
            >
              <Scale size={14} />
              Voor Letselschadekantoren
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading mb-4"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                fontWeight: 800,
                color: "#1A2A33",
                lineHeight: 1.1,
              }}
            >
              Exclusieve cliënten-leads,{" "}
              <span className="dpd-gradient-text">zonder Google Ads-veiling</span>.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg max-w-2xl mb-8 leading-relaxed"
              style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}
            >
              Wij bouwen Meta-funnels die gekwalificeerde letselschade-cliënten direct
              naar jouw kantoor brengen — pre-gefilterd op zaak-type, automatisch opgevolgd
              en met afspraak in jouw agenda. Geen gedeelde leadplatforms, geen prijs-oorlog.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link href="/contact" className="btn-primary">
                Gratis strategiegesprek <ArrowRight size={18} />
              </Link>
              <a href="#diagnose" className="btn-secondary">
                Doe de diagnose
              </a>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── PIJN: wat herken je? ─── */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-12">
              <h2
                className="font-heading font-800 mb-4"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#1A2A33" }}
              >
                Waarom marketing voor letselschade <span className="dpd-gradient-text">anders werkt</span>
              </h2>
              <p className="text-base" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                De standaard speelboek — Google Ads en gedeelde leadplatforms — is in deze sector
                kapot. Hier zien we waarom kantoren vastlopen:
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {PAIN_POINTS.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: "1px solid rgba(239,68,68,0.15)",
                    boxShadow: "0 4px 24px rgba(239,68,68,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(239,68,68,0.08)", color: "#ef4444" }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="font-heading font-700 text-base mb-2" style={{ color: "#1A2A33" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── USPs ─── */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-64 h-64 -left-10 top-10 opacity-15" />
        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-16">
              <h2
                className="font-heading font-800 mb-4"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#1A2A33" }}
              >
                Wat wij <span className="dpd-gradient-text">anders doen</span>
              </h2>
              <p className="text-base" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                Een leadsysteem dat is gebouwd voor de werkelijkheid van letselschade:
                strenge kwalificatie, snelle opvolging en exclusiviteit per kantoor.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {USPS.map((u, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-2xl p-7 h-full"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    border: `1px solid ${u.color}25`,
                    boxShadow: `0 8px 32px ${u.color}10`,
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      background: `linear-gradient(135deg, ${u.color}, #47C8F5)`,
                      color: "white",
                    }}
                  >
                    {u.icon}
                  </div>
                  <h3 className="font-heading font-800 text-lg mb-3" style={{ color: "#1A2A33" }}>
                    {u.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>
                    {u.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CASE / SOCIAL PROOF ─── */}
      <section className="py-24 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="text-center mb-12">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium font-heading"
                  style={{
                    background: "rgba(134,100,251,0.1)",
                    border: "1px solid rgba(134,100,251,0.2)",
                    color: "#8664FB",
                  }}
                >
                  <TrendingUp size={14} />
                  Case Study
                </div>
                <h2
                  className="font-heading font-800 mb-3"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#1A2A33" }}
                >
                  Letselschade-kantoor Amsterdam
                </h2>
                <p
                  className="text-base max-w-xl mx-auto"
                  style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
                >
                  Van €8.000/maand aan Google Ads (met overwegend ongekwalificeerde leads) naar
                  een eigen, exclusief instroomkanaal binnen 90 dagen.
                </p>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-5"
              >
                {CASE_METRICS.map((m, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-8 text-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(134,100,251,0.08), rgba(71,200,245,0.08))",
                      border: "1px solid rgba(134,100,251,0.15)",
                    }}
                  >
                    <div
                      className="font-heading font-900 mb-2 dpd-gradient-text"
                      style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)" }}
                    >
                      {m.value}
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── DIAGNOSE (sector-flow heeft letselschade al) ─── */}
      <div id="diagnose">
        <InteractiveDiagnose />
      </div>

      {/* ─── WERKWIJZE / 3 STAPPEN ─── */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
              <h2
                className="font-heading font-800 mb-4"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#1A2A33" }}
              >
                Zo werkt het — in <span className="dpd-gradient-text">3 stappen</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Strategiegesprek",
                  desc: "We brengen je huidige instroom, kostprijs per cliënt en zaak-mix in kaart. Geen verkooppraatje — een concrete diagnose.",
                },
                {
                  step: "02",
                  title: "Funnel-bouw",
                  desc: "We bouwen een Meta-campagne met pre-kwalificatie-quiz, landingspagina en automatische opvolging via e-mail en WhatsApp.",
                },
                {
                  step: "03",
                  title: "Cliënten in agenda",
                  desc: "Gekwalificeerde cliënten plannen direct een intake in jouw agenda. Jij opent de afspraak, wij optimaliseren de stroom.",
                },
              ].map((s, i) => (
                <motion.div key={i} variants={fadeUp} className="relative">
                  <div
                    className="font-heading font-900 mb-3 dpd-gradient-text"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="font-heading font-700 text-lg mb-2" style={{ color: "#1A2A33" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FAQ-light: kernbezwaren ─── */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <motion.h2
                variants={fadeUp}
                className="font-heading font-800 text-center mb-10"
                style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)", color: "#1A2A33" }}
              >
                Veelgestelde vragen
              </motion.h2>
              <div className="space-y-5">
                {[
                  {
                    q: "Hoe weet ik dat de leads exclusief zijn?",
                    a: "We bouwen jouw funnel binnen jouw eigen advertentie-account. De inkomende aanvragen landen rechtstreeks in jouw CRM of mailbox — wij verkopen ze nergens anders door.",
                  },
                  {
                    q: "Komen er ook ongekwalificeerde aanvragen binnen?",
                    a: "De quiz-pre-kwalificatie filtert op zaak-type, aansprakelijkheid en termijn. Onbruikbare aanvragen worden uitgesloten vóór ze jou bereiken — dat is precies waar het systeem op is gebouwd.",
                  },
                  {
                    q: "Wat als ik al Google Ads draai?",
                    a: "Dan kun je doorgaan of afbouwen — wij vervangen het of vullen het aan. Veel kantoren bouwen Google Ads helemaal af zodra de Meta-funnel stabiel draait.",
                  },
                  {
                    q: "Hoe snel zien we resultaat?",
                    a: "Eerste gekwalificeerde aanmeldingen meestal binnen 2 weken na livegang. Stabiele instroom binnen 30–60 dagen, afhankelijk van regio en zaak-type.",
                  },
                ].map((f, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="rounded-2xl p-6"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      border: "1px solid rgba(134,100,251,0.12)",
                      boxShadow: "0 2px 12px rgba(134,100,251,0.06)",
                    }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2 size={18} style={{ color: "#8664FB", marginTop: 2 }} />
                      <h3 className="font-heading font-700 text-base" style={{ color: "#1A2A33" }}>
                        {f.q}
                      </h3>
                    </div>
                    <p
                      className="text-sm leading-relaxed ml-7"
                      style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
                    >
                      {f.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
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
              Klaar voor exclusieve cliënten-leads?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}
            >
              Plan een gratis strategiegesprek. We laten zien wat er in jouw regio mogelijk is —
              concreet, met cijfers en zonder verplichtingen.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="btn-primary animate-pulse-glow">
                Gratis strategiegesprek <ArrowRight size={18} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
