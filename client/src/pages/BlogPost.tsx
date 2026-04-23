/*
 * Blog Post Detail Page – De Proces Designers
 */
import { motion } from "framer-motion";
import { Link, useParams, useLocation } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Streamdown } from "streamdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import {
  getPostBySlug,
  getRelatedPosts,
  formatDate,
  type BlogPost,
} from "@/lib/blog";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const slug = params?.slug ?? "";
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (!post) {
      navigate("/404", { replace: true });
    }
  }, [post, navigate]);

  if (!post) return null;

  return <PostView post={post} />;
}

function PostView({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post.slug, 3);

  useSEO({
    title: `${post.title} | De Proces Designers`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.heroImage,
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.heroImage,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: post.author,
        url: "https://www.deprocesdesigners.nl",
      },
      publisher: {
        "@type": "Organization",
        name: "De Proces Designers",
        url: "https://www.deprocesdesigners.nl",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.deprocesdesigners.nl/blog/${post.slug}`,
      },
      keywords: post.tags.join(", "),
    },
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* ─── Header ─── */}
      <section
        className="relative pt-28 pb-8 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-72 h-72 -right-10 top-0 opacity-15" />
        <div className="container relative z-10 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#8C52FF]"
                style={{ color: "#8664FB", fontFamily: "Inter, sans-serif" }}
              >
                <ArrowLeft size={16} /> Terug naar blog
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium font-heading"
                  style={{
                    background: "rgba(134,100,251,0.1)",
                    border: "1px solid rgba(134,100,251,0.2)",
                    color: "#8664FB",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading mb-5"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#1A2A33",
                lineHeight: 1.15,
              }}
            >
              {post.title}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-5 text-sm"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              <span className="flex items-center gap-2">
                <Calendar size={15} />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={15} />
                {post.readingTime} min lezen
              </span>
              <span>·</span>
              <span>{post.author}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Hero image ─── */}
      <section className="bg-white">
        <div className="container max-w-5xl -mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-[16/9] relative"
            style={{
              boxShadow:
                "0 20px 60px rgba(134,100,251,0.15), 0 8px 24px rgba(26,42,51,0.08)",
            }}
          >
            <img
              src={post.heroImage}
              alt={post.heroImageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
          {post.heroImageCredit && (
            <p
              className="text-xs text-center mt-3"
              style={{ color: "#9ca3af", fontFamily: "Inter, sans-serif" }}
            >
              {post.heroImageCredit}
            </p>
          )}
        </div>
      </section>

      {/* ─── Body ─── */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="blog-prose"
          >
            <Streamdown>{post.content}</Streamdown>
          </motion.article>

          {/* Inline CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-8 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)",
              border: "1px solid rgba(134,100,251,0.15)",
            }}
          >
            <h3
              className="font-heading font-800 mb-3"
              style={{ fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)", color: "#1A2A33" }}
            >
              Dit toepassen op jouw bedrijf?
            </h3>
            <p
              className="mb-6 max-w-md mx-auto text-sm"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              Plan een gratis strategiegesprek — we kijken samen hoe dit
              concreet werkt voor jouw situatie.
            </p>
            <Link href="/contact" className="btn-primary">
              Gratis strategiegesprek <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Related posts ─── */}
      {related.length > 0 && (
        <section
          className="py-20"
          style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
        >
          <div className="container">
            <h2
              className="font-heading font-800 mb-10 text-center"
              style={{
                fontSize: "clamp(1.4rem, 2.6vw, 2rem)",
                color: "#1A2A33",
              }}
            >
              Ook <span className="dpd-gradient-text">interessant</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block dpd-card rounded-2xl overflow-hidden bg-white"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.heroImage}
                      alt={p.heroImageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div
                      className="text-xs mb-2"
                      style={{
                        color: "#718096",
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      {formatDate(p.date)} · {p.readingTime} min
                    </div>
                    <h3
                      className="font-heading font-800 text-base leading-snug"
                      style={{ color: "#1A2A33" }}
                    >
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
