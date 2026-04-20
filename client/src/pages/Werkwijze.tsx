/*
 * Werkwijze Page – De Proces Designers
 * Style: Liquid Tech / Futuristic SaaS
 * Focus: Stap-voor-stap proces, visueel, animaties
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, Search, Lightbulb, Rocket,
  Settings, CheckCircle2, Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROCESS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503644974/J7Udx3KWkNc6vFgqgyECYk/dpd-process-visual-Fe2gecTx6gfDwRQ64oG7nR.webp";
const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503644974/J7Udx3KWkNc6vFgqgyECYk/dpd-cta-bg-Lb4Gg2j5Go7MK7hxFMRdVj.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

const steps = [
  {
    num: "01",
    icon: <Settings size={28} />,
    title: "Onboarding & Lancering",
    duration: "Week 1",
    desc: "In de eerste week leggen wij het fundament en lanceren wij de eerste campagnes. Geen lange aanlooptijd — binnen 7 dagen draaien jouw eerste exclusieve leadcampagnes op Meta.",
    deliverables: [
      "Toegang verkregen tot Business Manager, Ads Manager en Meta accounts",
      "Content verzameld en omgezet naar converterende creatives",
      "Concurrentieanalyse en regio-analyse afgerond",
      "Markt- en deskresearch volledig uitgevoerd",
      "Complete campagnestructuur ingericht en live gezet",
    ],
    color: "#8664FB",
  },
  {
    num: "02",
    icon: <Search size={28} />,
    title: "Data-analyse",
    duration: "Week 2",
    desc: "De eerste campagnedata geeft direct inzicht in wat werkt en wat niet. Wij analyseren elke variabele — van creative performance tot doelgroepsegmenten — en vertalen dit naar concrete verbeteracties.",
    deliverables: [
      "Eerste campagneresultaten geanalyseerd op lead­kwaliteit en kosten",
      "Winnende en verliezende advertentievarianten geïdentificeerd",
      "Doelgroepsegmenten beoordeeld op prestaties",
      "Initiële optimalisaties doorgevoerd op basis van data",
    ],
    color: "#8C52FF",
  },
  {
    num: "03",
    icon: <Lightbulb size={28} />,
    title: "Optimalisatie",
    duration: "Week 3",
    desc: "Met twee weken aan data scherpen wij de strategie aan. Budget wordt herschikt naar de best presterende campagnes, conversiepunten worden geoptimaliseerd en systemen worden gefinetuned voor maximale efficiëntie.",
    deliverables: [
      "Campagnestrategie aangescherpt op basis van week 2-data",
      "Conversiepunten in de funnel geoptimaliseerd",
      "Automatiseringsflows gecontroleerd en verbeterd",
      "Budgetverdeling herschikt naar best presterende advertenties",
    ],
    color: "#47C8F5",
  },
  {
    num: "04",
    icon: <Rocket size={28} />,
    title: "Opschalen",
    duration: "Week 4",
    desc: "Wat werkt, schalen wij op. Bewezen campagnes krijgen meer budget, succesvolle creatives worden uitgebreid en het systeem wordt ingericht voor structurele, voorspelbare groei op de lange termijn.",
    deliverables: [
      "Winnende campagnes opgeschaald met verhoogd budget",
      "Aanvullende creatives ontwikkeld op basis van top-performers",
      "Rapportage opgesteld met KPI's, kosten per lead en groeiprognose",
      "Groeistrategie uitgestippeld voor de komende maanden",
    ],
    color: "#8664FB",
  },
];

const faqs = [
  {
    q: "Wanneer zie ik de eerste leads binnenkomen?",
    a: "In de meeste gevallen binnen 7 dagen na lancering. Wij gaan niet maanden bouwen voordat er iets live staat — campagnes worden in week 1 al gelanceerd.",
  },
  {
    q: "Wat heb ik zelf nodig te doen?",
    a: "Toegang verlenen tot jouw Meta-accounts en beschikbaar zijn voor een onboardinggesprek. De rest nemen wij volledig over — van content tot lancering.",
  },
  {
    q: "Werken jullie met vaste contracten?",
    a: "Wij werken met maandelijkse overeenkomsten zonder langetermijn lock-in. Je behoudt altijd de controle.",
  },
  {
    q: "Zijn de leads echt exclusief voor mij?",
    a: "Altijd. Wij bouwen campagnes specifiek voor jouw bedrijf en regio. Geen leadplatforms, geen gedeelde aanvragen — elke lead is van jou alleen.",
  },
];

export default function Werkwijze() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-cyan w-80 h-80 -right-10 top-0 opacity-20" />
        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium"
              style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB", fontFamily: "Montserrat, sans-serif" }}>
              Onze Werkwijze
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#1A2A33" }}>
              Van Onboarding naar <span className="dpd-gradient-text">Exclusieve Leads</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg max-w-2xl"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
              Geen maanden van voorbereiding. In 4 weken bouwen, lanceren en optimaliseren wij een volledig leadgeneratiesysteem dat op automatische piloot exclusieve leads aanlevert.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  variants={fadeUp}
                  className={`relative flex gap-6 md:gap-10 mb-12 pb-12 ${i < steps.length - 1 ? "border-b" : ""}`}
                  style={{ borderColor: "rgba(134,100,251,0.12)" }}
                >
                  {/* Step number & connector */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-heading font-800 text-lg shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, #47C8F5)`,
                        color: "white",
                        boxShadow: `0 8px 24px ${step.color}40`,
                      }}
                    >
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-0.5 flex-1 mt-4"
                        style={{ background: `linear-gradient(180deg, ${step.color}40, transparent)` }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-heading font-800 text-xl" style={{ color: "#1A2A33" }}>
                        {step.title}
                      </h3>
                      <div
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: `${step.color}12`, color: step.color, fontFamily: "Montserrat, sans-serif" }}
                      >
                        <Clock size={12} />
                        {step.duration}
                      </div>
                    </div>
                    <p className="text-base mb-5 leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                      {step.desc}
                    </p>
                    <div
                      className="rounded-xl p-5"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}08, rgba(71,200,245,0.06))`,
                        border: `1px solid ${step.color}15`,
                      }}
                    >
                      <div className="text-xs font-heading font-700 uppercase tracking-wider mb-3" style={{ color: step.color }}>
                        Deliverables
                      </div>
                      <ul className="space-y-2">
                        {step.deliverables.map((d, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <CheckCircle2 size={14} style={{ color: step.color }} className="shrink-0" />
                            <span className="text-sm" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Visual */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp} className="relative">
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl animate-float"
                  style={{ boxShadow: "0 24px 80px rgba(134,100,251,0.2)" }}
                >
                  <img src={PROCESS_IMG} alt="Werkwijze visualisatie" className="w-full h-auto" />
                </div>
              </motion.div>

              <div>
                <motion.h2 variants={fadeUp} className="font-heading mb-4"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1A2A33" }}>
                  Veelgestelde <span className="dpd-gradient-text">Vragen</span>
                </motion.h2>
                <div className="space-y-5">
                  {faqs.map((faq, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className="dpd-card p-5"
                    >
                      <h4 className="font-heading font-700 text-sm mb-2" style={{ color: "#1A2A33" }}>
                        {faq.q}
                      </h4>
                      <p className="text-sm leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${CTA_BG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "rgba(26,42,51,0.82)" }} />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="font-heading mb-4 text-white"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800 }}>
              Klaar om te Starten?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
              Stap 1 is simpel: plan een gratis kennismakingsgesprek en ontdek wat wij voor jou kunnen doen.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="btn-primary">
                Plan Stap 1 Nu <ArrowRight size={18} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
