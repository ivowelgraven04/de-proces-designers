import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const systemSteps = [
  {
    num: "01", title: "Analyse",
    desc: "We duiken diep in jouw markt, doelgroep en concurrenten. Geen aannames — alleen data.",
    detail: "Marktonderzoek · Doelgroep analyse · Concurrentie scan · Keyword research",
    color: "#8664FB",
  },
  {
    num: "02", title: "Strategie",
    desc: "Op maat gemaakte marketingstrategie die aansluit op jouw doelen en budget.",
    detail: "Funnel mapping · Content strategie · Kanaalstrategie · KPI definitie",
    color: "#8C52FF",
  },
  {
    num: "03", title: "Implementatie",
    desc: "Wij bouwen en lanceren jouw complete marketing systeem — snel, precies en schaalbaar.",
    detail: "Landingspagina's · Ad campagnes · CRM setup · Automatiseringen",
    color: "#6B8EFF",
  },
  {
    num: "04", title: "Optimalisatie",
    desc: "Continu verbeteren op basis van data. Elke week slimmer, elke maand meer resultaat.",
    detail: "A/B testing · Performance analyse · Rapportages · Iteraties",
    color: "#47C8F5",
  },
];

export function PinnedSystemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Each step occupies 25% of the scroll range
  const activeStep = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}>

        {/* Background orb */}
        <div className="orb orb-purple w-80 h-80 -left-20 top-10 opacity-15" />
        <div className="orb orb-cyan w-60 h-60 right-10 bottom-10 opacity-10" />

        <div className="container relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: steps list */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium font-heading"
                style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB" }}
              >
                Ons Systeem
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading mb-4"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1A2A33" }}
              >
                Een Marketing Machine{" "}
                <span className="dpd-gradient-text-animated">Op Autopiloot</span>
              </motion.h2>

              <div className="space-y-4 mt-8 relative">
                {/* Connecting SVG path — 3.5 */}
                <svg
                  className="absolute left-[19px] top-10 pointer-events-none"
                  width="2"
                  height="calc(100% - 56px)"
                  style={{ height: "calc(100% - 56px)" }}
                >
                  <motion.line
                    x1="1" y1="0" x2="1" y2="100%"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    strokeDasharray="200"
                    strokeDashoffset={useTransform(scrollYProgress, [0, 0.9], [200, 0])}
                  />
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                      <stop offset="0%" stopColor="#8664FB" />
                      <stop offset="100%" stopColor="#47C8F5" />
                    </linearGradient>
                  </defs>
                </svg>

                {systemSteps.map((step, i) => (
                  <StepItem key={i} step={step} index={i} activeStep={activeStep} scrollYProgress={scrollYProgress} />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Link href="/werkwijze" className="btn-secondary">
                  Bekijk Werkwijze <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* Right: active step detail card */}
            <div className="relative hidden lg:block">
              {systemSteps.map((step, i) => (
                <StepCard key={i} step={step} index={i} activeStep={activeStep} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepItem({ step, index, activeStep, scrollYProgress }: {
  step: typeof systemSteps[0];
  index: number;
  activeStep: ReturnType<typeof useTransform>;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const threshold = index * 0.25;
  const opacity = useTransform(scrollYProgress, [threshold, threshold + 0.05], [0.35, 1]);

  return (
    <motion.div style={{ opacity }} className="flex items-start gap-4 pl-0">
      <div
        className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-heading font-800 text-sm z-10 relative"
        style={{ background: `linear-gradient(135deg, ${step.color}, #47C8F5)`, color: "white", fontSize: "0.75rem" }}
      >
        {step.num}
      </div>
      <div>
        <div className="font-heading font-700 text-sm mb-0.5" style={{ color: "#1A2A33" }}>{step.title}</div>
        <div className="text-xs leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>{step.desc}</div>
      </div>
    </motion.div>
  );
}

function StepCard({ step, index, scrollYProgress }: {
  step: typeof systemSteps[0];
  index: number;
  activeStep: ReturnType<typeof useTransform>;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const threshold = index * 0.25;
  const opacity = useTransform(scrollYProgress, [threshold, threshold + 0.1, threshold + 0.25 - 0.05, threshold + 0.25], [0, 1, 1, index === 3 ? 1 : 0]);
  const y = useTransform(scrollYProgress, [threshold, threshold + 0.1], [30, 0]);
  const scale = useTransform(scrollYProgress, [threshold, threshold + 0.1], [0.92, 1]);

  return (
    <motion.div
      style={{ opacity, y, scale, position: index === 0 ? "relative" : "absolute", top: 0, left: 0, right: 0 }}
      className="rounded-2xl p-8 shadow-2xl"
      initial={false}
    >
      <div
        className="rounded-2xl p-8"
        style={{
          background: `linear-gradient(135deg, ${step.color}15 0%, rgba(71,200,245,0.08) 100%)`,
          border: `1px solid ${step.color}25`,
          boxShadow: `0 24px 80px ${step.color}20`,
        }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 font-heading font-900 text-3xl"
          style={{ background: `linear-gradient(135deg, ${step.color}, #47C8F5)`, color: "white" }}
        >
          {step.num}
        </div>
        <h3 className="font-heading font-800 text-2xl text-center mb-3" style={{ color: "#1A2A33" }}>
          {step.title}
        </h3>
        <p className="text-sm text-center mb-5 leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
          {step.desc}
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {step.detail.split(" · ").map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full font-heading font-600"
              style={{ background: `${step.color}12`, color: step.color, border: `1px solid ${step.color}20` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
