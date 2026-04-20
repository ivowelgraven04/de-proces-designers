/*
 * Over Ons Page – De Proces Designers
 * Style: Liquid Tech / Futuristic SaaS
 * Focus: Autoriteit, positionering, vertrouwen
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Award, Heart, Lightbulb, Target, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503644974/J7Udx3KWkNc6vFgqgyECYk/dpd-about-visual-79fsXrKoocH5JtGjrRTj4t.webp";
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

const values = [
  {
    icon: <Target size={24} />,
    title: "Resultaatgericht",
    desc: "Wij meten alles. Elke beslissing is gebaseerd op data en gericht op meetbare groei voor jouw bedrijf.",
  },
  {
    icon: <Heart size={24} />,
    title: "Klantgericht",
    desc: "Jouw succes is ons succes. Wij bouwen langetermijnrelaties op basis van vertrouwen en transparantie.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Innovatief",
    desc: "Wij blijven vooroplopen met de nieuwste marketing technologieën en strategieën.",
  },
  {
    icon: <Award size={24} />,
    title: "Kwaliteit",
    desc: "Geen compromissen op kwaliteit. Elk project krijgt onze volledige aandacht en expertise.",
  },
];

const stats = [
  { num: "43+", label: "Actieve klanten" },
  { num: "8 jr", label: "Ervaring" },
  { num: "3.4×", label: "Gemiddelde groei" },
  { num: "98%", label: "Klanttevredenheid" },
];

const expertise = [
  "Meta leadgeneratie",
  "CRM implementatie",
  "Speed-to-lead automatiseringen",
  "Lead nurture automatiseringen",
  "Webdesign & webdevelopment",
  "Data-analyse & reporting",
];

export default function OverOns() {
  useSEO({
    title: "Over Ons | De Proces Designers — 43+ Klanten, 8 Jaar Ervaring",
    description: "Leer ons kennen. De Proces Designers helpt lokale bedrijven structureel groeien met bewezen marketing systemen. 43+ actieve klanten, 3.4× gemiddelde groei, 98% klanttevredenheid.",
    path: "/over-ons",
  });
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-80 h-80 -left-10 top-10 opacity-20" />
        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium"
              style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB", fontFamily: "Montserrat, sans-serif" }}>
              Over Ons
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#1A2A33" }}>
              Wij Zijn <span className="dpd-gradient-text">De Proces Designers</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg max-w-2xl"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
              Gespecialiseerd in Meta leadgeneratie, funnel-optimalisatie en marketingautomatisering voor dakdekkers, letselschadekantoren en financiële dienstverleners.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Missie & Visie */}
      <section className="py-24 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2 variants={fadeUp} className="font-heading mb-6"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1A2A33" }}>
                  Waar Proces & Design <span className="dpd-gradient-text">Samenkomt</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-base mb-5 leading-relaxed"
                  style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                  De Proces Designers is opgericht met één doel: lokale bedrijven helpen groeien met marketing die echt werkt. Wij geloven dat elk bedrijf, ongeacht grootte of sector, toegang verdient tot professionele marketing systemen.
                </motion.p>
                <motion.p variants={fadeUp} className="text-base mb-6 leading-relaxed"
                  style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                  Onze naam zegt het al: wij combineren slimme processen met doordacht design. Elk systeem dat wij bouwen is niet alleen functioneel, maar ook visueel overtuigend en gebruiksvriendelijk.
                </motion.p>
                <motion.ul variants={fadeUp} className="space-y-2.5 mb-8">
                  {[
                    "Volledig op maat gemaakte aanpak",
                    "Transparante communicatie en rapportage",
                    "Resultaten die je kunt meten",
                    "Langetermijn partnership, geen eenmalige projecten",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} style={{ color: "#8664FB" }} className="shrink-0" />
                      <span className="text-sm" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>{item}</span>
                    </li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeUp}>
                  <Link href="/contact" className="btn-primary text-sm">
                    Maak Kennis <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="relative">
                <div
                  className="rounded-2xl overflow-hidden shadow-2xl"
                  style={{ boxShadow: "0 24px 80px rgba(134,100,251,0.18)" }}
                >
                  <img src={ABOUT_IMG} alt="De Proces Designers" className="w-full h-auto" />
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A2A33 0%, #2d3f4d 100%)" }}
      >
        <div className="orb orb-purple w-64 h-64 -right-10 top-0 opacity-20" />
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="text-center">
                  <div className="font-heading font-900 text-4xl mb-2 dpd-gradient-text">{stat.num}</div>
                  <div className="text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Waarden */}
      <section className="py-24 bg-white">
        <div className="container">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="font-heading mb-3" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Onze <span className="dpd-gradient-text">Kernwaarden</span>
              </h2>
              <p className="max-w-xl mx-auto text-sm" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                Deze waarden sturen elke beslissing die wij nemen voor onze klanten.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div key={i} variants={fadeUp} className="dpd-card p-6 text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: "linear-gradient(135deg, rgba(134,100,251,0.12), rgba(71,200,245,0.12))", color: "#8664FB" }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-700 text-base mb-2" style={{ color: "#1A2A33" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Expertise */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="container relative z-10">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <h2 className="font-heading mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1A2A33" }}>
                  Onze <span className="dpd-gradient-text">Expertise</span>
                </h2>
                <p className="text-base mb-8 leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                  Geen generalist-bureau. Wij zijn gespecialiseerd in de systemen die lokale bedrijven in onze drie niches de meeste groei opleveren.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {expertise.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "linear-gradient(135deg, #8664FB, #47C8F5)" }} />
                      <span className="text-sm" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div
                  className="rounded-2xl p-8"
                  style={{
                    background: "linear-gradient(135deg, rgba(134,100,251,0.06), rgba(71,200,245,0.06))",
                    border: "1px solid rgba(134,100,251,0.12)",
                  }}
                >
                  <h3 className="font-heading font-700 text-lg mb-6" style={{ color: "#1A2A33" }}>
                    Waarom Kiezen voor Ons?
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Bewezen resultaten", desc: "Onze klanten groeien gemiddeld 3.4× sneller na samenwerking — meetbaar, niet geschat." },
                      { title: "Geen lock-in", desc: "Transparante contracten zonder verborgen kosten of verplichtingen." },
                      { title: "Dedicated team", desc: "Jij krijgt een vast team dat jouw business door en door kent." },
                      { title: "Snelle implementatie", desc: "Van strategie naar eerste resultaten binnen 30 dagen." },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-heading font-700"
                          style={{ background: "linear-gradient(135deg, #8664FB, #47C8F5)", color: "white" }}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-heading font-700 text-sm mb-0.5" style={{ color: "#1A2A33" }}>{item.title}</div>
                          <div className="text-xs" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
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
              Laten We Samenwerken
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base mb-8 max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
              Ontdek hoe wij jouw bedrijf kunnen helpen groeien. Plan een vrijblijvend kennismakingsgesprek.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="btn-primary">
                Neem Contact Op <ArrowRight size={18} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
