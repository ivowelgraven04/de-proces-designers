import { Link, useParams } from "wouter";
import { ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { LINKPARTNERS } from "./Linkpartners";

export default function LinkpartnerDetail() {
  const { slug } = useParams<{ slug: string }>();
  const partner = LINKPARTNERS.find((p) => p.slug === slug);

  useSEO({
    title: partner
      ? `${partner.naam} – Linkpartner van De Proces Designers`
      : "Linkpartner niet gevonden",
    description: partner ? partner.intro : "",
    path: `/linkpartners/${slug}`,
  });

  if (!partner) {
    return (
      <main className="pt-32 pb-20 container text-center">
        <h1 className="font-heading text-3xl font-bold mb-4" style={{ color: "#1A2A33" }}>
          Linkpartner niet gevonden
        </h1>
        <Link href="/linkpartners" className="btn-primary inline-flex">
          Terug naar Linkpartners
        </Link>
      </main>
    );
  }

  const idx = LINKPARTNERS.findIndex((p) => p.slug === slug);
  const prev = LINKPARTNERS[idx - 1] ?? null;
  const next = LINKPARTNERS[idx + 1] ?? null;

  return (
    <main className="pt-24 pb-20">
      {/* Breadcrumb */}
      <div className="container mb-10">
        <Link
          href="/linkpartners"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-70"
          style={{ color: "#8664FB", fontFamily: "Inter, sans-serif" }}
        >
          <ArrowLeft size={15} />
          Alle linkpartners
        </Link>
      </div>

      {/* Hero */}
      <section className="container mb-14">
        <div
          className="rounded-3xl p-10 md:p-14"
          style={{
            background: `linear-gradient(135deg, ${partner.kleur}08 0%, rgba(255,255,255,0.6) 100%)`,
            border: `1px solid ${partner.kleur}20`,
            boxShadow: `0 20px 60px ${partner.kleur}12`,
          }}
        >
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-5 px-3 py-1 rounded-full"
            style={{ background: `${partner.kleur}15`, color: partner.kleur }}
          >
            {partner.categorie}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3" style={{ color: "#1A2A33" }}>
            {partner.naam}
          </h1>
          <p className="text-lg font-medium mb-6" style={{ color: partner.kleur, fontFamily: "Inter, sans-serif" }}>
            {partner.tagline}
          </p>
          <p className="text-base leading-relaxed max-w-2xl" style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}>
            {partner.intro}
          </p>
        </div>
      </section>

      {/* Detail tekst */}
      <section className="container mb-14">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-bold mb-4" style={{ color: "#1A2A33" }}>
            Onze samenwerking
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}>
            {partner.details}
          </p>
        </div>
      </section>

      {/* CTA naar website */}
      <section className="container mb-16">
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-semibold text-base rounded-2xl px-8 py-4 transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: partner.kleur,
            color: "#fff",
            boxShadow: `0 8px 24px ${partner.kleur}40`,
          }}
        >
          Bezoek {partner.naam}
          <ExternalLink size={17} />
        </a>
      </section>

      {/* Prev / Next navigatie */}
      {(prev || next) && (
        <section className="container border-t pt-10" style={{ borderColor: "rgba(134,100,251,0.12)" }}>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prev ? (
              <Link
                href={`/linkpartners/${prev.slug}`}
                className="group flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs uppercase tracking-wide mb-0.5" style={{ color: "#A0AEC0" }}>Vorige partner</div>
                  <div className="font-semibold" style={{ color: "#1A2A33" }}>{prev.naam}</div>
                </div>
              </Link>
            ) : <div />}

            {next && (
              <Link
                href={`/linkpartners/${next.slug}`}
                className="group flex items-center gap-3 text-sm text-right transition-opacity hover:opacity-70 sm:justify-end"
                style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}
              >
                <div>
                  <div className="text-xs uppercase tracking-wide mb-0.5" style={{ color: "#A0AEC0" }}>Volgende partner</div>
                  <div className="font-semibold" style={{ color: "#1A2A33" }}>{next.naam}</div>
                </div>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
