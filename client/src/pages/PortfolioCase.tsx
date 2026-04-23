/*
 * Portfolio Case Study – De Proces Designers
 * Per-project detailpagina: probleem → aanpak → resultaat → live site.
 */
import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import {
  getProjectBySlug,
  getRelatedProjects,
  getSectorLabel,
  type PortfolioProject,
} from "@/lib/portfolio";
import NotFound from "@/pages/NotFound";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function BigBrowserMockup({ project }: { project: PortfolioProject }) {
  return (
    <div
      className="rounded-3xl overflow-hidden"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(134,100,251,0.18)",
        boxShadow:
          "0 40px 100px -30px rgba(134,100,251,0.35), 0 16px 40px -20px rgba(26,42,51,0.18)",
      }}
    >
      <div
        className="flex items-center gap-2 px-5 py-3 border-b"
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
          className="flex-1 mx-4 rounded-md text-xs py-1.5 px-4 truncate text-center"
          style={{
            background: "rgba(255,255,255,0.95)",
            color: "#8a8f98",
            fontFamily: "Inter, sans-serif",
            border: "1px solid rgba(0,0,0,0.04)",
          }}
        >
          {project.displayUrl ?? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </div>
      </div>
      <div className="relative aspect-[16/10] bg-gray-50 overflow-hidden">
        {project.previewDesktop ? (
          <img
            src={project.previewDesktop}
            alt={`Screenshot van ${project.client}`}
            loading="eager"
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-sm"
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

export default function PortfolioCase() {
  const [, params] = useRoute("/portfolio/:slug");
  const slug = params?.slug ?? "";
  const project = getProjectBySlug(slug);

  useSEO({
    title: project
      ? `${project.client} | Casestudy — De Proces Designers`
      : "Casestudy — De Proces Designers",
    description:
      project?.excerpt ??
      "Een uitgewerkt portfolio-project van De Proces Designers.",
    path: `/portfolio/${slug}`,
    schema: project
      ? {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.client,
          url: `https://www.deprocesdesigners.nl/portfolio/${project.slug}`,
          about: project.url,
          description: project.excerpt,
          creator: {
            "@type": "Organization",
            name: "De Proces Designers",
            url: "https://www.deprocesdesigners.nl",
          },
          datePublished: project.launched,
          genre: project.sector,
        }
      : undefined,
  });

  if (!project) return <NotFound />;

  const related = getRelatedProjects(project.slug, 3);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ─── Hero ─── */}
      <section
        className="relative pt-32 pb-10 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-80 h-80 -right-10 top-0 opacity-20" />
        <div className="orb orb-cyan w-60 h-60 left-1/4 bottom-0 opacity-15" />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm mb-6 transition-colors hover:text-[#8664FB]"
                style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
              >
                <ArrowLeft size={14} /> Terug naar portfolio
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium font-heading"
              style={{
                background: "rgba(134,100,251,0.1)",
                border: "1px solid rgba(134,100,251,0.2)",
                color: "#8664FB",
              }}
            >
              {getSectorLabel(project.sector)}
              {project.launched && (
                <>
                  <span style={{ opacity: 0.5 }}>·</span>
                  <span>Live {project.launched}</span>
                </>
              )}
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
              {project.client}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg max-w-2xl mb-8"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              {project.excerpt}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Bezoek live site <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Browser Mockup ─── */}
      <section className="relative -mt-4 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <BigBrowserMockup project={project} />
          </motion.div>
        </div>
      </section>

      {/* ─── Metrics strip ─── */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="pb-16">
          <div className="container">
            <div
              className="rounded-3xl p-8 md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(134,100,251,0.06) 0%, rgba(71,200,245,0.06) 100%)",
                border: "1px solid rgba(134,100,251,0.12)",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.metrics.map((m, i) => (
                  <div key={i} className={i > 0 ? "md:border-l md:pl-8" : ""}
                       style={{ borderColor: "rgba(134,100,251,0.12)" }}>
                    <div
                      className="font-heading font-800 mb-1"
                      style={{
                        fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                        color: "#1A2A33",
                        lineHeight: 1.1,
                      }}
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
                {project.metrics.length < 3 && (
                  <div className="md:border-l md:pl-8"
                       style={{ borderColor: "rgba(134,100,251,0.12)" }}>
                    <div
                      className="font-heading font-800 mb-1"
                      style={{
                        fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                        color: "#8664FB",
                        lineHeight: 1.1,
                      }}
                    >
                      {project.launched ?? "Live"}
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
                    >
                      Livegang
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Content: Challenge / Approach / Result ─── */}
      <section className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Challenge */}
            {project.challenge && (
              <div>
                <h2
                  className="font-heading font-800 mb-4 text-xs uppercase tracking-widest"
                  style={{ color: "#8664FB" }}
                >
                  De uitdaging
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#1A2A33", fontFamily: "Inter, sans-serif" }}
                >
                  {project.challenge}
                </p>
              </div>
            )}

            {/* Approach */}
            {project.approach && project.approach.length > 0 && (
              <div>
                <h2
                  className="font-heading font-800 mb-4 text-xs uppercase tracking-widest"
                  style={{ color: "#8664FB" }}
                >
                  Onze aanpak
                </h2>
                <ul className="space-y-4">
                  {project.approach.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{
                          background: "rgba(134,100,251,0.1)",
                          color: "#8664FB",
                        }}
                      >
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span
                        className="text-base leading-relaxed"
                        style={{
                          color: "#1A2A33",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Result */}
            {project.result && (
              <div>
                <h2
                  className="font-heading font-800 mb-4 text-xs uppercase tracking-widest"
                  style={{ color: "#8664FB" }}
                >
                  Resultaat
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#1A2A33", fontFamily: "Inter, sans-serif" }}
                >
                  {project.result}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Testimonial (optional) ─── */}
      {project.testimonial && (
        <section className="pb-20">
          <div className="container">
            <blockquote
              className="max-w-3xl mx-auto text-center p-10 rounded-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(134,100,251,0.05) 0%, rgba(71,200,245,0.05) 100%)",
                border: "1px solid rgba(134,100,251,0.1)",
              }}
            >
              <p
                className="font-heading text-xl md:text-2xl mb-6 leading-relaxed"
                style={{ color: "#1A2A33" }}
              >
                "{project.testimonial.quote}"
              </p>
              <footer
                className="text-sm"
                style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
              >
                <span className="font-heading font-700" style={{ color: "#1A2A33" }}>
                  {project.testimonial.author}
                </span>
                {project.testimonial.role && <> · {project.testimonial.role}</>}
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* ─── Related projects ─── */}
      {related.length > 0 && (
        <section
          className="py-16"
          style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
        >
          <div className="container">
            <h2
              className="font-heading font-800 mb-8 text-center"
              style={{
                fontSize: "clamp(1.4rem, 2.4vw, 1.8rem)",
                color: "#1A2A33",
              }}
            >
              Meer projecten
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="block group"
                >
                  <div
                    className="rounded-xl overflow-hidden transition-shadow duration-300 group-hover:shadow-xl"
                    style={{
                      background: "#ffffff",
                      border: "1px solid rgba(134,100,251,0.12)",
                    }}
                  >
                    {p.previewDesktop && (
                      <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                        <img
                          src={p.previewDesktop}
                          alt={`Preview van ${p.client}`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div
                        className="text-[11px] mb-1"
                        style={{
                          color: "#8664FB",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {getSectorLabel(p.sector)}
                      </div>
                      <div
                        className="font-heading font-700"
                        style={{ color: "#1A2A33" }}
                      >
                        {p.client}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ─── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2
              className="font-heading font-800 mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                color: "#1A2A33",
              }}
            >
              Ook zo'n{" "}
              <span className="dpd-gradient-text">resultaat</span> voor jouw bedrijf?
            </h2>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              In een gratis strategiegesprek kijken we samen wat er voor jouw
              situatie mogelijk is — zonder verplichting.
            </p>
            <Link href="/contact" className="btn-primary">
              Plan een strategiegesprek <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
