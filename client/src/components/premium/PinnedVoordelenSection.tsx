// Pinned scroll section: "Waarom De Proces Designers"
// Cards enter from bottom, exit to top — one at a time, mobile + desktop
// To remove: delete this file + replace <PinnedVoordelenSection /> with original grid
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lock, Cpu, TrendingUp, BarChart3, Shield } from "lucide-react";

const voordelen = [
  {
    icon: <Lock size={30} />,
    title: "Exclusieve Leads",
    desc: "Elke lead die wij genereren is van jou alleen. Geen gedeelde platforms, geen concurrent die dezelfde aanvraag ontvangt. 100% exclusief, direct in jouw systeem.",
    color: "#8664FB",
  },
  {
    icon: <Cpu size={30} />,
    title: "Volledig op Automatische Piloot",
    desc: "Van eerste contact tot geplande afspraak in de agenda — zonder handmatig werk. Leads worden automatisch opgevolgd, gekwalificeerd en ingepland.",
    color: "#8C52FF",
  },
  {
    icon: <TrendingUp size={30} />,
    title: "Hoogste Conversieratio in de Markt",
    desc: "Standaard formulieren converteren gemiddeld 10% van bezoekers. Onze quiz funnels halen structureel 60–76%. Meer leads uit hetzelfde advertentiebudget.",
    color: "#6B8EFF",
  },
  {
    icon: <BarChart3 size={30} />,
    title: "Meetbaar Resultaat",
    desc: "Geen vage rapporten. Elke euro die je investeert is herleidbaar naar een lead, een afspraak of een klant. Je weet altijd exact wat je rendement is.",
    color: "#47C8F5",
  },
  {
    icon: <Shield size={30} />,
    title: "Bewezen in Jouw Sector",
    desc: "Wij werken exclusief voor dakdekkers, letselschadekantoren en financiële dienstverleners. Geen generieke aanpak — een systeem dat gebouwd is voor jouw markt.",
    color: "#8664FB",
  },
];

const TOTAL = voordelen.length;

export function PinnedVoordelenSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} style={{ height: `${TOTAL * 100}vh` }}>
      <div
        className="sticky top-0 h-screen flex flex-col"
        style={{ background: "white" }}
      >
        {/* Background orbs */}
        <div className="orb orb-purple w-96 h-96 -right-24 -top-12 opacity-10" />
        <div className="orb orb-cyan w-64 h-64 -left-12 bottom-10 opacity-08" />

        {/* Section header */}
        <div className="container relative z-10 shrink-0 pt-16 pb-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 text-xs font-medium font-heading"
            style={{
              background: "rgba(134,100,251,0.1)",
              border: "1px solid rgba(134,100,251,0.2)",
              color: "#8664FB",
            }}
          >
            Waarom Wij
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="font-heading"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "#1A2A33",
            }}
          >
            Waarom{" "}
            <span className="dpd-gradient-text-animated">De Proces Designers</span>?
          </motion.h2>
        </div>

        {/* Card area — overflow-hidden clips the sliding cards */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center px-4">
            {voordelen.map((v, i) => (
              <VoordeelCard
                key={i}
                item={v}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Progress dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2.5 z-20">
            {voordelen.map((_, i) => (
              <ProgressDot key={i} index={i} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VoordeelCard({
  item,
  index,
  scrollYProgress,
}: {
  item: (typeof voordelen)[0];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / TOTAL;
  const end = (index + 1) / TOTAL;
  const isFirst = index === 0;
  const isLast = index === TOTAL - 1;

  // Enter from bottom, exit to top. First card starts visible; last card stays.
  const yInput = isFirst
    ? [0, end - 0.05, end]
    : isLast
    ? [start, start + 0.08]
    : [start, start + 0.08, end - 0.05, end];

  const yOutput = isFirst
    ? [0, 0, -600]
    : isLast
    ? [600, 0]
    : [600, 0, 0, -600];

  const opacityInput = isFirst
    ? [0, end - 0.05, end]
    : isLast
    ? [start, start + 0.08]
    : [start, start + 0.08, end - 0.05, end];

  const opacityOutput = isFirst
    ? [1, 1, 0]
    : isLast
    ? [0, 1]
    : [0, 1, 1, 0];

  const y = useTransform(scrollYProgress, yInput, yOutput);
  const opacity = useTransform(scrollYProgress, opacityInput, opacityOutput);

  return (
    <motion.div
      style={{ y, opacity, position: "absolute", width: "100%" }}
      className="flex justify-center px-4"
    >
      <div
        className="w-full rounded-2xl p-8 md:p-12"
        style={{
          maxWidth: 620,
          background: `linear-gradient(135deg, ${item.color}08 0%, rgba(71,200,245,0.05) 100%)`,
          border: `1px solid ${item.color}22`,
          boxShadow: `0 24px 80px ${item.color}14`,
        }}
      >
        {/* Icon + large number */}
        <div className="flex items-center gap-5 mb-7">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
            style={{
              background: `linear-gradient(135deg, ${item.color}, #47C8F5)`,
              color: "white",
            }}
          >
            {item.icon}
          </div>
          <span
            className="font-heading font-800 select-none"
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              lineHeight: 1,
              color: item.color,
              opacity: 0.12,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3
          className="font-heading font-800 mb-4"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#1A2A33" }}
        >
          {item.title}
        </h3>
        <p
          className="leading-relaxed"
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
            color: "#718096",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

function ProgressDot({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / TOTAL;
  const end = (index + 1) / TOTAL;
  const isFirst = index === 0;
  const isLast = index === TOTAL - 1;

  const scaleInput = isFirst
    ? [0, end - 0.05, end]
    : isLast
    ? [start, start + 0.08]
    : [start, start + 0.08, end - 0.05, end];

  const scaleOutput = isFirst
    ? [1.8, 1.8, 1]
    : isLast
    ? [1, 1.8]
    : [1, 1.8, 1.8, 1];

  const bgOpacity = isFirst
    ? [1, 1, 0.3]
    : isLast
    ? [0.3, 1]
    : [0.3, 1, 1, 0.3];

  const scale = useTransform(scrollYProgress, scaleInput, scaleOutput);
  const opacity = useTransform(scrollYProgress, scaleInput, bgOpacity);

  return (
    <motion.div
      style={{ scale, opacity, background: "#8664FB" }}
      className="w-2 h-2 rounded-full"
    />
  );
}
