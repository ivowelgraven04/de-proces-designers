/*
 * Portfolio Index – De Proces Designers
 * Grid van gemaakte websites met sector-filter en browser-chrome mockup previews.
 * Kaartklik opent interne casestudy; ExternalLink-icoon opent live site in nieuw tab.
 */
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import {
  getAllProjects,
  getSectors,
  getSectorLabel,
  type PortfolioProject,
} from "@/lib/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

function BrowserChrome({
  project,
  eager = false,
}: {
  project: PortfolioProject;
  eager?: boolean;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-shadow duration-500 group-hover:shadow-2xl"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(134,100,251,0.15)",
        boxShadow:
          "0 20px 60px -20px rgba(134,100,251,0.25), 0 8px 24px -12px rgba(26,42,51,0.12)",
      }}
    >
      {/* Browser bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{
          background: "linear-gradient(180deg, #fafafa 0%, #f3f3f5 100%)",
          borderColor: "rgba(134,100,251,0.08)",
        }}
      >
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <div
          className="flex-1 mx-4 rounded-md text-[11px] py-1 px-3 truncate text-center"
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#8a8f98",
            fontFamily: "Inter, sans-serif",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          {project.displayUrl ?? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </div>
      </div>
      {/* Preview — hover = scroll from top to bottom */}
      <div className="relative overflow-hidden aspect-[16/10] bg-gray-50">
        {project.previewDesktop ? (
          <img
            src={project.previewDesktop}
            alt={`Preview van ${project.client}`}
            loading={eager ? "eager" : "lazy"}
            className="portfolio-preview-img w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-xs"
              style={{ color: "#a0aec0", fontFamily: "Inter, sans-serif" }}
            >
              Screenshot wordt gegenereerd…
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const projects = getAllProjects();
  const sectors = getSectors();

  const [activeSector, setActiveSector] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeSector === "all") return projects;
    return projects.filter((p) => p.sector === activeSector);
  }, [activeSector, projects]);

  useSEO({
    title: "Portfolio | Websites die wij hebben gebouwd — De Proces Designers",
    description:
      "Een selectie van websites die wij hebben ontworpen en gebouwd voor lokale bedrijven — van dakdekkers tot juridisch en financieel dienstverleners.",
    path: "/portfolio",
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ─── Page Hero ─── */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-80 h-80 -right-10 top-0 opacity-20" />
        <div className="orb orb-cyan w-60 h-60 left-1/4 bottom-0 opacity-15" />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium font-heading"
              style={{
                background: "rgba(134,100,251,0.1)",
                border: "1px solid rgba(134,100,251,0.2)",
                color: "#8664FB",
              }}
            >
              Portfolio
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-heading mb-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                color: "#1A2A33",
              }}
            >
              Websites die wij hebben{" "}
              <span className="dpd-gradient-text">gebouwd</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg max-w-2xl mb-4"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              Een selectie uit onze projecten. Elk ontwerp start bij het proces
              van jouw klant — wat moeten ze zien, voelen en doen om contact op
              te nemen?
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-sm max-w-2xl inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                color: "#8664FB",
                fontFamily: "Inter, sans-serif",
                background: "rgba(134,100,251,0.08)",
                border: "1px solid rgba(134,100,251,0.15)",
                fontWeight: 500,
              }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block animate-pulse"
                style={{ background: "#8664FB" }}
              />
              Elke week lanceren wij nieuwe projecten — niet alles staat hier.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filter + Grid ─── */}
      <section className="py-16 bg-white">
        <div className="container">
          {/* Filter chips */}
          {sectors.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              <FilterChip
                label="Alle projecten"
                active={activeSector === "all"}
                onClick={() => setActiveSector("all")}
                count={projects.length}
              />
              {sectors.map((s) => {
                const count = projects.filter((p) => p.sector === s.key).length;
                if (count === 0) return null;
                return (
                  <FilterChip
                    key={s.key}
                    label={s.label}
                    active={activeSector === s.key}
                    onClick={() => setActiveSector(s.key)}
                    count={count}
                  />
                );
              })}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p
                className="text-lg"
                style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
              >
                Geen projecten in deze categorie.
              </p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                variants={stagger}
                className="grid md:grid-cols-2 gap-8"
              >
                {filtered.map((project, idx) => (
                  <motion.article
                    key={project.slug}
                    variants={fadeUp}
                    className="group relative"
                  >
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="block"
                    >
                      <BrowserChrome project={project} eager={idx < 2} />
                      <div className="mt-5 flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-xs mb-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(134,100,251,0.08)",
                              color: "#8664FB",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: 500,
                            }}
                          >
                            {getSectorLabel(project.sector)}
                          </div>
                          <h3
                            className="font-heading font-800 text-xl mb-1.5 leading-snug"
                            style={{ color: "#1A2A33" }}
                          >
                            {project.client}
                          </h3>
                          <p
                            className="text-sm leading-relaxed mb-3"
                            style={{
                              color: "#718096",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            {project.excerpt}
                          </p>
                          {project.metrics && project.metrics.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {project.metrics.map((m, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-baseline gap-1.5 px-2.5 py-1 rounded-md text-[11px]"
                                  style={{
                                    background: "rgba(71,200,245,0.08)",
                                    border: "1px solid rgba(71,200,245,0.2)",
                                    fontFamily: "Inter, sans-serif",
                                  }}
                                >
                                  <span
                                    className="font-heading font-700"
                                    style={{ color: "#1A2A33" }}
                                  >
                                    {m.value}
                                  </span>
                                  <span style={{ color: "#718096" }}>
                                    {m.label}
                                  </span>
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div
                          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                          style={{
                            background: "rgba(134,100,251,0.08)",
                            color: "#8664FB",
                          }}
                        >
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </Link>
                    {/* Live-site icon button, separate from card link */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title={`Open ${project.displayUrl ?? project.client} in nieuw tab`}
                      className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{
                        background: "rgba(255,255,255,0.95)",
                        backdropFilter: "blur(6px)",
                        color: "#8664FB",
                        border: "1px solid rgba(134,100,251,0.15)",
                        boxShadow: "0 4px 12px rgba(26,42,51,0.08)",
                      }}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-20 relative"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-64 h-64 -left-10 top-0 opacity-15" />
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2
              className="font-heading font-800 mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                color: "#1A2A33",
              }}
            >
              Ook een website die{" "}
              <span className="dpd-gradient-text">leads oplevert</span>?
            </h2>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              Plan een gratis strategiegesprek — we kijken samen wat er voor
              jouw bedrijf mogelijk is.
            </p>
            <Link href="/contact" className="btn-primary">
              Gratis strategiegesprek plannen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
  count,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-full text-sm font-medium font-heading transition-all"
      style={{
        background: active ? "#8664FB" : "rgba(134,100,251,0.08)",
        color: active ? "#ffffff" : "#8664FB",
        border: active
          ? "1px solid #8664FB"
          : "1px solid rgba(134,100,251,0.15)",
      }}
    >
      {label}
      <span
        className="ml-2 text-[11px] opacity-70"
        style={{ fontWeight: 400 }}
      >
        {count}
      </span>
    </button>
  );
}
