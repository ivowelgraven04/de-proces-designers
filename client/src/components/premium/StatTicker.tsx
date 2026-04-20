// 5.6 – Live stat ticker bar
// To remove: delete this file + remove <StatTicker> from Home.tsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix: string;
  increment: number;
}

const initialStats: Stat[] = [
  { icon: <Users size={14} />, label: "Leads gegenereerd vandaag", value: 47, suffix: "", increment: 1 },
  { icon: <TrendingUp size={14} />, label: "Campagnes actief", value: 12, suffix: "", increment: 0 },
  { icon: <Zap size={14} />, label: "Automatiseringen gedraaid", value: 284, suffix: "", increment: 3 },
  { icon: <Target size={14} />, label: "Conversieratio gemiddeld", value: 84, suffix: "%", increment: 0 },
];

export function StatTicker() {
  const [stats, setStats] = useState(initialStats);
  const [activeIndex, setActiveIndex] = useState(0);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((s) =>
          s.increment > 0 ? { ...s, value: s.value + s.increment } : s
        )
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Cycle through stats on mobile ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % initialStats.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full py-3 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, rgba(134,100,251,0.06) 0%, rgba(71,200,245,0.06) 100%)",
        borderTop: "1px solid rgba(134,100,251,0.12)",
        borderBottom: "1px solid rgba(134,100,251,0.12)",
      }}
    >
      {/* Desktop: all stats */}
      <div className="hidden md:flex items-center justify-center gap-8 flex-wrap">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-[#8664FB]">{s.icon}</span>
            <span className="text-xs font-medium font-heading" style={{ color: "#1A2A33" }}>
              {s.label}:
            </span>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={s.value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-bold dpd-gradient-text font-heading"
              >
                {s.value}{s.suffix}
              </motion.span>
            </AnimatePresence>
            {i < stats.length - 1 && (
              <span className="ml-4 text-[#8664FB]/30 hidden lg:inline">·</span>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: cycling single stat */}
      <div className="md:hidden flex items-center justify-center gap-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <span className="text-[#8664FB]">{stats[activeIndex].icon}</span>
            <span className="text-xs font-medium font-heading" style={{ color: "#1A2A33" }}>
              {stats[activeIndex].label}:
            </span>
            <span className="text-xs font-bold dpd-gradient-text font-heading">
              {stats[activeIndex].value}{stats[activeIndex].suffix}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
