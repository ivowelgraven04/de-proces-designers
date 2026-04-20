// 1.5 – Horizontal scroll section for packages
// To remove: delete this file + replace <HorizontalScrollPackages> with original grid
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Starter",
    badge: null,
    highlight: false,
    tagline: "Perfecte start voor groeiende bedrijven",
    features: [
      "Professionele landingspagina",
      "Basis leadgeneratie setup",
      "E-mail automatisering",
      "Maandelijkse rapportage",
      "1 marketing funnel",
    ],
    cta: "Meer informatie",
  },
  {
    name: "Boost",
    badge: "Meest Gekozen",
    highlight: true,
    tagline: "De complete marketing machine",
    features: [
      "Alles uit Starter",
      "Geavanceerde funnel strategie",
      "Multi-channel leadgeneratie",
      "CRM integratie & automatisering",
      "A/B testing & optimalisatie",
      "Wekelijkse performance calls",
      "Priority support",
    ],
    cta: "Start met Boost",
  },
  {
    name: "Premium",
    badge: null,
    highlight: false,
    tagline: "Voor bedrijven die maximaal willen groeien",
    features: [
      "Alles uit Boost",
      "Custom webdesign",
      "Volledige marketing strategie",
      "Dedicated accountmanager",
      "Uitgebreide analytics",
    ],
    cta: "Meer informatie",
  },
];

export function HorizontalScrollPackages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Translate the inner strip horizontally
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-46%"]);

  return (
    <div ref={containerRef} style={{ height: "220vh" }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}>

        <div className="orb orb-cyan w-96 h-96 -right-20 top-0 opacity-15" />

        {/* Header — stays fixed */}
        <div className="container mb-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1A2A33" }}>
              Kies Jouw <span className="dpd-gradient-text-animated">Pakket</span>
            </h2>
            <p className="max-w-xl mx-auto text-base" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
              Van eerste stap tot volledige marketing machine. Scroll voor alle opties →
            </p>
          </motion.div>
        </div>

        {/* Horizontal strip */}
        <div className="overflow-visible relative z-10">
          <motion.div
            style={{ x }}
            className="flex gap-6 pl-[max(2rem,calc((100vw-1280px)/2))] pr-12"
          >
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[min(85vw,360px)] relative rounded-2xl p-8"
                style={{
                  background: pkg.highlight
                    ? "linear-gradient(135deg, #8664FB 0%, #47C8F5 100%)"
                    : "rgba(255,255,255,0.92)",
                  border: pkg.highlight ? "none" : "1px solid rgba(134,100,251,0.15)",
                  boxShadow: pkg.highlight
                    ? "0 24px 64px rgba(134,100,251,0.4)"
                    : "0 4px 24px rgba(134,100,251,0.08)",
                  transform: pkg.highlight ? "scale(1.03)" : "scale(1)",
                }}
              >
                {pkg.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-heading font-700"
                    style={{ background: "#1A2A33", color: "white" }}
                  >
                    {pkg.badge}
                  </div>
                )}
                <h3 className="font-heading font-800 text-xl mb-2"
                  style={{ color: pkg.highlight ? "white" : "#1A2A33" }}>
                  {pkg.name}
                </h3>
                <p className="text-sm mb-6"
                  style={{ color: pkg.highlight ? "rgba(255,255,255,0.8)" : "#718096", fontFamily: "Inter, sans-serif" }}>
                  {pkg.tagline}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5"
                        style={{ color: pkg.highlight ? "rgba(255,255,255,0.9)" : "#8664FB" }} />
                      <span className="text-sm"
                        style={{ color: pkg.highlight ? "rgba(255,255,255,0.9)" : "#4a5568", fontFamily: "Inter, sans-serif" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={pkg.highlight ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                  style={pkg.highlight ? { background: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.6)", color: "white" } : {}}
                >
                  {pkg.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        <p className="text-center mt-6 text-xs relative z-10" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
          Geen verborgen kosten. Altijd transparant. Neem contact op voor persoonlijk advies.
        </p>
      </div>
    </div>
  );
}
