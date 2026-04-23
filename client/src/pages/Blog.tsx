/*
 * Blog Index Page – De Proces Designers
 * Lijst van alle blog posts, geautomatiseerd gegenereerd via scripts/build-blog.mjs
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { getAllPosts, formatDate } from "@/lib/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function Blog() {
  const posts = getAllPosts();

  useSEO({
    title: "Blog | Inzichten over leadgeneratie & automatisering — De Proces Designers",
    description:
      "Wekelijkse artikelen over leadgeneratie, funnels en marketing automatisering voor lokale ondernemers. Geen theorie, wel wat werkt in de praktijk.",
    path: "/blog",
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "De Proces Designers Blog",
      url: "https://www.deprocesdesigners.nl/blog",
      description:
        "Inzichten over leadgeneratie, funnels en marketing automatisering.",
      publisher: {
        "@type": "Organization",
        name: "De Proces Designers",
        url: "https://www.deprocesdesigners.nl",
      },
      blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `https://www.deprocesdesigners.nl/blog/${p.slug}`,
        datePublished: p.date,
        description: p.excerpt,
      })),
    },
  });

  const [featured, ...rest] = posts;

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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium font-heading"
              style={{
                background: "rgba(134,100,251,0.1)",
                border: "1px solid rgba(134,100,251,0.2)",
                color: "#8664FB",
              }}
            >
              Blog
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
              Inzichten die je bedrijf{" "}
              <span className="dpd-gradient-text">laten groeien</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg max-w-2xl"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              Drie keer per week publiceren wij artikelen over leadgeneratie,
              funnels en marketing automatisering. Geen theorie — wel wat wij
              in de praktijk zien werken.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Posts ─── */}
      <section className="py-20 bg-white">
        <div className="container">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p
                className="text-lg"
                style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
              >
                Binnenkort verschijnen hier de eerste artikelen.
              </p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={stagger}
                  className="mb-20"
                >
                  <motion.div variants={fadeUp}>
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="group block dpd-card rounded-3xl overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto">
                          <img
                            src={featured.heroImage}
                            alt={featured.heroImageAlt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="eager"
                          />
                          <div
                            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium font-heading"
                            style={{
                              background: "rgba(134,100,251,0.92)",
                              color: "white",
                            }}
                          >
                            Nieuwste
                          </div>
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <div
                            className="flex items-center gap-4 text-xs mb-3"
                            style={{
                              color: "#718096",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            <span className="flex items-center gap-1.5">
                              <Calendar size={14} />
                              {formatDate(featured.date)}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={14} />
                              {featured.readingTime} min lezen
                            </span>
                          </div>
                          <h2
                            className="font-heading font-800 mb-4"
                            style={{
                              fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                              color: "#1A2A33",
                              lineHeight: 1.2,
                            }}
                          >
                            {featured.title}
                          </h2>
                          <p
                            className="mb-6 leading-relaxed"
                            style={{
                              color: "#4a5568",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            {featured.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {featured.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-xs font-medium font-heading"
                                style={{
                                  background: "rgba(134,100,251,0.08)",
                                  color: "#8664FB",
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span
                            className="inline-flex items-center gap-2 text-sm font-medium font-heading transition-colors group-hover:text-[#8C52FF]"
                            style={{ color: "#8664FB" }}
                          >
                            Lees artikel{" "}
                            <ArrowRight
                              size={16}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={stagger}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {rest.map((post) => (
                    <motion.article key={post.slug} variants={fadeUp}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group block dpd-card rounded-2xl overflow-hidden h-full flex flex-col"
                      >
                        <div className="relative overflow-hidden aspect-[16/10]">
                          <img
                            src={post.heroImage}
                            alt={post.heroImageAlt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <div
                            className="flex items-center gap-3 text-xs mb-3"
                            style={{
                              color: "#718096",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {formatDate(post.date)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {post.readingTime} min
                            </span>
                          </div>
                          <h3
                            className="font-heading font-800 text-lg mb-3 leading-snug"
                            style={{ color: "#1A2A33" }}
                          >
                            {post.title}
                          </h3>
                          <p
                            className="text-sm mb-4 flex-1"
                            style={{
                              color: "#718096",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            {post.excerpt.length > 140
                              ? post.excerpt.slice(0, 140) + "…"
                              : post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1.5">
                              {post.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium font-heading"
                                  style={{
                                    background: "rgba(134,100,251,0.08)",
                                    color: "#8664FB",
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <ArrowRight
                              size={16}
                              className="shrink-0 transition-transform group-hover:translate-x-1"
                              style={{ color: "#8664FB" }}
                            />
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </motion.div>
              )}
            </>
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
              Klaar om dit in te zetten voor{" "}
              <span className="dpd-gradient-text">jouw bedrijf</span>?
            </h2>
            <p
              className="text-base mb-8 leading-relaxed"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              Lezen is leuk, doen is beter. Plan een gratis strategiegesprek en
              ontdek wat concreet werkt voor jouw situatie.
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
