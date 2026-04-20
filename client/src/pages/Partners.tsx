/*
 * Partners Page – De Proces Designers
 * Twee secties:
 *   1. Onze 5-sterren partners (tabblad per partner, volledige story)
 *   2. Klantenportfolio (folder-tab systeem per sector/dienst)
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, HardHat, Calculator, Scale, Car,
  Star, TrendingUp, CheckCircle2, Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewsSection from "@/components/ReviewsSection";
import { useSEO } from "@/hooks/useSEO";

// ─── 5-STERREN PARTNERS DATA ──────────────────────────────────────────────────
// Voeg foto toe: zet het bestand in /public/ en vul het pad in bij `foto`
// Voorbeeld: foto: "/js-techniek-hoodie.jpg"

type SterrenPartner = {
  id: string;
  naam: string;
  sector: string;
  locatie: string;
  samenwerking: string;
  kleur: string;
  foto?: string;
  stats: { waarde: string; label: string }[];
  startsituatie: string;
  aanpak: string[];
  resultaten: string[];
  impact: string[];
  quote?: string;
  website?: string;
  websiteNote?: string;
  beschikbaar: boolean; // false = placeholder tab
};

const VIJFSTERREN: SterrenPartner[] = [
  {
    id: "js-techniek",
    naam: "JS Techniek",
    sector: "Dakdekkers",
    locatie: "Den Helder, Noord-Holland",
    samenwerking: "± 1 jaar",
    kleur: "#8664FB",
    foto: "/js-techniek-hoodie.png",
    beschikbaar: true,
    stats: [
      { waarde: "90+", label: "Leads in Q1 2026" },
      { waarde: "85%", label: "Conversie lead → offerte" },
    ],
    startsituatie:
      "JS Techniek startte met een inconsistente opdrachtstroom, afhankelijkheid van externe partijen en geen schaalbaar systeem om zelfstandig leads te genereren. De doelgroepen waren nog niet scherp in kaart gebracht en er was geen voorspelbaar groeipad.",
    aanpak: [
      "Stap voor stap opbouwen van een eigen, permanent leadgeneratiesysteem",
      "Doelgroepen analyseren en verfijnen op basis van campagnedata",
      "Campagnes optimaliseren op langetermijn stabiliteit — geen korte pieken",
      "Volledige focus op voorspelbaarheid en controle over de aanvraagestroom",
    ],
    resultaten: [
      "90+ gekwalificeerde leads gegenereerd in Q1 2026",
      "85% conversieratio van lead naar offerte — structureel boven marktgemiddelde",
      "Tienduizenden euro's extra omzet gegenereerd in Q1 2026",
    ],
    impact: [
      "Agenda structureel gevuld — weken tot maanden vooruit gepland",
      "Volledig overgestapt naar eigen opdrachten",
      "Geen afhankelijkheid meer van externe partijen",
      "Stabiele en voorspelbare groei gerealiseerd",
    ],
    quote:
      "We zijn niet meer afhankelijk van andermans opdrachten. De agenda staat vol en we weten precies waar de volgende klant vandaan komt.",
  },
  {
    id: "fixz24",
    naam: "Fixz24",
    sector: "Financiële Dienstverlening",
    locatie: "Nederland",
    samenwerking: "+ 1 jaar",
    kleur: "#47C8F5",
    foto: undefined,
    website: "https://fixz24.vercel.app/",
    websiteNote: "Nieuwe website in ontwikkeling — preview al beschikbaar",
    beschikbaar: true,
    stats: [
      { waarde: "<15 min", label: "Per onboarding (was 4–6 uur)" },
      { waarde: "6", label: "Systemen geïntegreerd in één flow" },
      { waarde: "2×", label: "Volledig geautomatiseerde processen" },
    ],
    startsituatie:
      "Fixz24 behandelde elke nieuwe klant als een handmatig project. Van accountaanmaak tot boekhoudstructuur en welkomstmail — elk onderdeel kostte tijd, aandacht en menselijke handelingen. De gemiddelde onboarding nam 4 tot 6 uur in beslag per klant. Tegelijkertijd liep het jaarafsluitingsproces via losse e-mails en handmatig doorgestuurde documenten tussen klant, boekhouder en accountant. Veel ruis, veel vertraging en een structureel capaciteitsprobleem dat niet oplosbaar was met meer personeel.",
    aanpak: [
      "Eén centraal onboardingformulier + follow-up formulier gebouwd als geautomatiseerd startpunt voor alle systemen",
      "Directe integratie met 6 platformen: accounts aangemaakt, boekhoudstructuren ingericht, welkomstmails verstuurd — zonder handmatig ingrijpen",
      "Jaarafsluitingsproces volledig gedigitaliseerd: klant uploadt document → accountant ontvangt notificatie → keurt goed → document teruggeplaatst → klant bevestigt automatisch",
      "Koppelingen via e-mail, WhatsApp en gedeelde bestandsomgeving voor volledige traceerbaarheid en nul communicatieruis",
    ],
    resultaten: [
      "Onboarding teruggebracht van 4–6 uur naar minder dan 15 minuten per klant",
      "Volledige handmatige workflow vervangen door één formulier gekoppeld aan 6 systemen",
      "Jaarafsluiting: communicatieruis geëlimineerd, doorlooptijd drastisch verkort, geen handmatig schakelen meer",
    ],
    impact: [
      "Capaciteit vrijgekomen — meer klanten onboarden zonder extra personeel",
      "Schaalbaar groeien: groei kost geen extra tijd of mankracht",
      "Hogere servicekwaliteit tijdens drukke periodes zoals de jaarafsluiting",
      "Fundament gelegd voor de volgende fase: leadgeneratie via Meta",
    ],
  },
  {
    id: "beuker",
    naam: "Beuker Bouw & Installatie",
    sector: "Dakdekkers",
    locatie: "Nederland",
    samenwerking: "Actief",
    kleur: "#6B8EFF",
    beschikbaar: false,
    stats: [],
    startsituatie: "",
    aanpak: [],
    resultaten: [],
    impact: [],
  },
  {
    id: "wkm",
    naam: "WKM Automotive",
    sector: "Automotive",
    locatie: "Nederland",
    samenwerking: "Actief",
    kleur: "#8C52FF",
    beschikbaar: false,
    stats: [],
    startsituatie: "",
    aanpak: [],
    resultaten: [],
    impact: [],
  },
];

// ─── PORTFOLIO DATA ───────────────────────────────────────────────────────────
type Klant = { naam: string; logo?: string; extra?: string[] };
type SectorId = "dakdekkers" | "financieel" | "letselschade" | "automotive";

const PORTFOLIO: Record<SectorId, {
  label: string; shortLabel: string;
  icon: React.ReactNode; kleur: string;
  subtabs: Record<string, Klant[]>;
}> = {
  dakdekkers: {
    label: "Dakdekkers", shortLabel: "Dakdekkers",
    icon: <HardHat size={15} />, kleur: "#8664FB",
    subtabs: {
      "Leadgeneratie": [
        { naam: "JS Techniek" }, { naam: "Dak 77" }, { naam: "Klusjeshuis" },
      ],
      "Webdesign": [
        { naam: "JS Techniek" }, { naam: "Dak 77" }, { naam: "Klusjeshuis" },
        { naam: "AD Renovatie" }, { naam: "Martin's Daktechniek" },
        { naam: "Dakservice Gooiland" }, { naam: "YOURINK Dakwerken" },
        { naam: "Beuker Bouw & Installatie" },
      ],
    },
  },
  financieel: {
    label: "Financiële Dienstverlening", shortLabel: "Financieel",
    icon: <Calculator size={15} />, kleur: "#47C8F5",
    subtabs: {
      "Leadgeneratie": [{ naam: "Factorly" }],
      "Webdesign": [{ naam: "Fixz24" }],
      "Automatiseringen": [
        { naam: "Fixz24", extra: ["Onboarding Automation", "Jaarafsluiting Automation"] },
      ],
    },
  },
  letselschade: {
    label: "Letselschade", shortLabel: "Letselschade",
    icon: <Scale size={15} />, kleur: "#6B8EFF",
    subtabs: {
      "Leadgeneratie": [{ naam: "RechtPunt" }],
      "Webdesign": [{ naam: "RechtPunt" }],
    },
  },
  automotive: {
    label: "Automotive", shortLabel: "Automotive",
    icon: <Car size={15} />, kleur: "#8C52FF",
    subtabs: {
      "Leadgeneratie": [
        { naam: "WKM (Automotive Imaging)" }, { naam: "KSR Auto's" },
      ],
    },
  },
};

const SECTOR_ORDER: SectorId[] = ["dakdekkers", "financieel", "letselschade", "automotive"];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getInitials(naam: string): string {
  const words = naam.trim().split(/[\s&(]+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return naam.substring(0, 2).toUpperCase();
}

function StarsRow({ size = 16 }: { size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} fill="#FBBF24" stroke="none" />
      ))}
    </div>
  );
}

// ─── KlantCard (portfolio grid) ───────────────────────────────────────────────
function KlantCard({ klant, kleur }: { klant: Klant; kleur: string }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl p-5 flex items-start gap-4"
      style={{ background: "white", border: "1px solid rgba(134,100,251,0.1)", boxShadow: "0 2px 12px rgba(134,100,251,0.06)" }}
    >
      {klant.logo ? (
        <img src={klant.logo} alt={klant.naam} className="w-12 h-12 object-contain rounded-xl shrink-0" />
      ) : (
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-heading font-800 text-sm text-white select-none"
          style={{ background: `linear-gradient(135deg, ${kleur}, #47C8F5)` }}
        >
          {getInitials(klant.naam)}
        </div>
      )}
      <div className="min-w-0">
        <div className="font-heading font-700 text-sm leading-snug truncate" style={{ color: "#1A2A33" }}>
          {klant.naam}
        </div>
        {klant.extra && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {klant.extra.map((tag, i) => (
              <span key={i} className="text-xs px-2.5 py-0.5 rounded-full font-heading font-600"
                style={{ background: `${kleur}12`, color: kleur, border: `1px solid ${kleur}20` }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── JS Techniek Partner Story ────────────────────────────────────────────────
function PartnerStory({ partner }: { partner: SterrenPartner }) {
  if (!partner.beschikbaar) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{ background: `linear-gradient(135deg, ${partner.kleur}15, rgba(71,200,245,0.1))`, color: partner.kleur }}>
          <Star size={28} fill={partner.kleur} stroke="none" />
        </div>
        <h3 className="font-heading font-800 text-xl mb-3" style={{ color: "#1A2A33" }}>
          {partner.naam}
        </h3>
        <p className="text-sm" style={{ color: "#9ca3af", fontFamily: "Inter, sans-serif" }}>
          Het verhaal van {partner.naam} wordt binnenkort toegevoegd.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      key={partner.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      {/* ── Header ── */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-800 text-base text-white"
              style={{ background: `linear-gradient(135deg, ${partner.kleur}, #47C8F5)` }}>
              {getInitials(partner.naam)}
            </div>
            <div>
              <h3 className="font-heading font-800 text-xl" style={{ color: "#1A2A33" }}>{partner.naam}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <StarsRow size={14} />
                <span className="text-xs font-heading font-600" style={{ color: "#FBBF24" }}>5-sterren partner</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-2">
            {[partner.sector, partner.locatie, `Samenwerking: ${partner.samenwerking}`].map((tag, i) => (
              <span key={i} className="text-xs px-3 py-1 rounded-full font-heading font-600"
                style={{ background: "rgba(134,100,251,0.08)", color: "#8664FB", border: "1px solid rgba(134,100,251,0.15)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-3 gap-4">
        {partner.stats.map((stat, i) => (
          <div key={i} className="rounded-2xl p-5 text-center"
            style={{ background: `linear-gradient(135deg, ${partner.kleur}08, rgba(71,200,245,0.06))`, border: `1px solid ${partner.kleur}18` }}>
            <div className="font-heading font-900 mb-1 dpd-gradient-text" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
              {stat.waarde}
            </div>
            <div className="text-xs leading-snug" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Twee kolommen: story + foto ── */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">

        {/* Linker kolom: tekst */}
        <div className="space-y-6">

          {/* Startsituatie */}
          <div>
            <h4 className="font-heading font-700 text-sm uppercase tracking-wider mb-2" style={{ color: partner.kleur }}>
              Startsituatie
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
              {partner.startsituatie}
            </p>
          </div>

          {/* Aanpak */}
          <div>
            <h4 className="font-heading font-700 text-sm uppercase tracking-wider mb-3" style={{ color: partner.kleur }}>
              Aanpak
            </h4>
            <ul className="space-y-2">
              {partner.aanpak.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: partner.kleur }} />
                  <span className="text-sm" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resultaten */}
          <div>
            <h4 className="font-heading font-700 text-sm uppercase tracking-wider mb-3" style={{ color: partner.kleur }}>
              Resultaten
            </h4>
            <ul className="space-y-2">
              {partner.resultaten.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <TrendingUp size={15} className="shrink-0 mt-0.5" style={{ color: "#10b981" }} />
                  <span className="text-sm font-medium" style={{ color: "#1A2A33", fontFamily: "Inter, sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="rounded-2xl p-5"
            style={{ background: "linear-gradient(135deg, rgba(134,100,251,0.06), rgba(71,200,245,0.04))", border: "1px solid rgba(134,100,251,0.12)" }}>
            <h4 className="font-heading font-700 text-sm uppercase tracking-wider mb-3" style={{ color: partner.kleur }}>
              Impact
            </h4>
            <ul className="space-y-2">
              {partner.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: partner.kleur }} />
                  <span className="text-sm" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          {partner.quote && (
            <div className="rounded-2xl p-5 relative"
              style={{ background: `linear-gradient(135deg, ${partner.kleur}10, rgba(71,200,245,0.08))`, border: `1px solid ${partner.kleur}20` }}>
              <Quote size={20} className="mb-3" style={{ color: partner.kleur, opacity: 0.5 }} />
              <p className="text-sm leading-relaxed italic font-medium" style={{ color: "#1A2A33", fontFamily: "Inter, sans-serif" }}>
                "{partner.quote}"
              </p>
              <p className="text-xs mt-2 font-heading font-600" style={{ color: partner.kleur }}>
                — {partner.naam}
              </p>
            </div>
          )}

          {/* Website */}
          {partner.website && (
            <div className="rounded-2xl p-5 flex items-center justify-between gap-4"
              style={{ background: `linear-gradient(135deg, ${partner.kleur}08, rgba(71,200,245,0.06))`, border: `1px solid ${partner.kleur}18` }}>
              <div>
                <p className="font-heading font-700 text-sm mb-0.5" style={{ color: "#1A2A33" }}>
                  Nieuwe website
                </p>
                <p className="text-xs" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                  {partner.websiteNote}
                </p>
              </div>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 whitespace-nowrap font-heading font-700 text-xs px-4 py-2 rounded-full transition-opacity hover:opacity-80 shrink-0"
                style={{ background: `linear-gradient(135deg, ${partner.kleur}, #47C8F5)`, color: "white" }}
              >
                Bekijk preview <ArrowRight size={13} />
              </a>
            </div>
          )}
        </div>

        {/* Rechter kolom: foto */}
        <div className="flex flex-col gap-5">
          {partner.foto ? (
            <div className="rounded-2xl overflow-hidden"
              style={{ boxShadow: `0 24px 80px ${partner.kleur}20`, border: `1px solid ${partner.kleur}15` }}>
              <img
                src={partner.foto}
                alt={`${partner.naam} — 5-sterren partner De Proces Designers`}
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            /* Placeholder: voeg foto toe door `foto: "/pad/naar/foto.jpg"` in te vullen */
            <div className="rounded-2xl flex items-center justify-center text-center p-12"
              style={{
                minHeight: 320,
                background: `linear-gradient(135deg, ${partner.kleur}06, rgba(71,200,245,0.05))`,
                border: `2px dashed ${partner.kleur}25`,
              }}>
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `linear-gradient(135deg, ${partner.kleur}15, rgba(71,200,245,0.1))` }}>
                  <Star size={24} fill={partner.kleur} stroke="none" />
                </div>
                <p className="text-sm font-heading font-600" style={{ color: partner.kleur }}>Foto volgt</p>
                <p className="text-xs mt-1" style={{ color: "#9ca3af", fontFamily: "Inter, sans-serif" }}>
                  Voeg foto toe via <code className="text-xs">foto: "/pad/naar/foto.jpg"</code>
                </p>
              </div>
            </div>
          )}

          {/* Samenwerking badge */}
          <div className="rounded-2xl p-5 text-center"
            style={{ background: "linear-gradient(135deg, #8664FB, #47C8F5)", boxShadow: "0 16px 48px rgba(134,100,251,0.3)" }}>
            <StarsRow size={18} />
            <p className="text-white font-heading font-800 text-base mt-3 mb-1">5-sterren partner</p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Inter, sans-serif" }}>
              Samenwerking van {partner.samenwerking} · {partner.sector}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Hoofdpagina ──────────────────────────────────────────────────────────────
export default function Partners() {
  useSEO({
    title: "Partners & Klanten | Bewezen Resultaten — De Proces Designers",
    description: "Bekijk de resultaten van onze 5-sterren partners zoals JS Techniek en Fixz24. Echte cases, meetbare groei. 43+ bedrijven die structureel groeien met onze systemen.",
    path: "/partners",
  });
  const [activePartner, setActivePartner] = useState<string>("js-techniek");
  const [activeSector, setActiveSector] = useState<SectorId>("dakdekkers");
  const [activeSubtab, setActiveSubtab] = useState<string>("Leadgeneratie");

  const sector = PORTFOLIO[activeSector];
  const subtabs = Object.keys(sector.subtabs);
  const currentSubtab = subtabs.includes(activeSubtab) ? activeSubtab : subtabs[0];
  const klanten = sector.subtabs[currentSubtab] ?? [];

  const handleSectorClick = (id: SectorId) => {
    setActiveSector(id);
    setActiveSubtab(Object.keys(PORTFOLIO[id].subtabs)[0]);
  };

  const currentPartner = VIJFSTERREN.find(p => p.id === activePartner)!;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ─── Page Hero ─── */}
      <section
        className="relative pt-32 pb-16"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-80 h-80 -right-10 top-0 opacity-20" />
        <div className="orb orb-cyan w-60 h-60 left-1/4 bottom-0 opacity-15" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium font-heading"
            style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB" }}>
            Partners & Klanten
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
            className="font-heading mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#1A2A33" }}>
            Bedrijven die <span className="dpd-gradient-text">Groeien met Ons</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.14 }}
            className="text-base max-w-xl"
            style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
            Van exclusieve leadgeneratie tot complete marketingautomatisering — dit zijn de bedrijven die structureel groeien met onze systemen.
          </motion.p>
        </div>
      </section>

      {/* ─── ONZE 5-STERREN ⭐ PARTNERS ─── */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>

            {/* Sectie header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#FBBF24" stroke="none" />
                ))}
              </div>
              <h2 className="font-heading font-800" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#1A2A33" }}>
                Onze 5-sterren partners
              </h2>
            </div>

            {/* Partner tabs */}
            <div className="flex items-end overflow-x-auto gap-1 mb-0" style={{ scrollbarWidth: "none" }}>
              {VIJFSTERREN.map((p) => {
                const isActive = activePartner === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePartner(p.id)}
                    className="flex items-center gap-2 whitespace-nowrap transition-all duration-200 font-heading"
                    style={{
                      padding: "10px 18px",
                      borderRadius: "10px 10px 0 0",
                      border: `1.5px solid ${isActive ? "rgba(134,100,251,0.2)" : "rgba(134,100,251,0.1)"}`,
                      borderBottom: isActive ? "1.5px solid white" : "1.5px solid rgba(134,100,251,0.08)",
                      background: isActive ? "white" : "rgba(134,100,251,0.03)",
                      color: isActive ? "#1A2A33" : "#9ca3af",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "0.78rem",
                      marginBottom: isActive ? "-1.5px" : 0,
                      position: "relative",
                      zIndex: isActive ? 2 : 1,
                      cursor: "pointer",
                    }}
                  >
                    <Star size={13} fill={isActive ? "#FBBF24" : "#d1d5db"} stroke="none" />
                    <span className="hidden sm:inline">{p.naam}</span>
                    <span className="sm:hidden">{p.naam.split(" ")[0]}</span>
                    {!p.beschikbaar && (
                      <span className="text-xs ml-1 opacity-50" style={{ fontFamily: "Inter, sans-serif" }}>•••</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Partner content panel */}
            <div
              style={{
                border: "1.5px solid rgba(134,100,251,0.2)",
                borderRadius: "0 12px 12px 12px",
                background: "white",
                padding: "clamp(20px, 4vw, 40px)",
                position: "relative",
                zIndex: 1,
                minHeight: 400,
              }}
            >
              <AnimatePresence mode="wait">
                <PartnerStory key={activePartner} partner={currentPartner} />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── KLANTENPORTFOLIO ─── */}
      <section className="py-12 pb-16" style={{ background: "linear-gradient(135deg, #fafbff 0%, #f8feff 100%)" }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}>

            <h2 className="font-heading font-800 mb-8" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", color: "#1A2A33" }}>
              Klantenportfolio
            </h2>

            {/* Sector tabs */}
            <div className="flex items-end overflow-x-auto gap-1" style={{ scrollbarWidth: "none" }}>
              {SECTOR_ORDER.map((id) => {
                const s = PORTFOLIO[id];
                const isActive = activeSector === id;
                return (
                  <button key={id} onClick={() => handleSectorClick(id)}
                    className="flex items-center gap-2 whitespace-nowrap transition-all duration-200 font-heading"
                    style={{
                      padding: "10px 18px",
                      borderRadius: "10px 10px 0 0",
                      border: `1.5px solid ${isActive ? "rgba(134,100,251,0.2)" : "rgba(134,100,251,0.1)"}`,
                      borderBottom: isActive ? "1.5px solid white" : "1.5px solid rgba(134,100,251,0.08)",
                      background: isActive ? "white" : "rgba(134,100,251,0.03)",
                      color: isActive ? "#1A2A33" : "#9ca3af",
                      fontWeight: isActive ? 700 : 500,
                      fontSize: "0.78rem",
                      marginBottom: isActive ? "-1.5px" : 0,
                      position: "relative",
                      zIndex: isActive ? 2 : 1,
                      cursor: "pointer",
                    }}>
                    <span style={{ color: isActive ? s.kleur : "#d1d5db" }}>{s.icon}</span>
                    <span className="hidden sm:inline">{s.label}</span>
                    <span className="sm:hidden">{s.shortLabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Folder content */}
            <div style={{
              border: "1.5px solid rgba(134,100,251,0.2)",
              borderRadius: activeSector === "dakdekkers" ? "0 12px 12px 12px" : "12px 12px 12px 12px",
              background: "white",
              position: "relative",
              zIndex: 1,
              minHeight: 300,
            }}>
              {/* Subtabs */}
              <div className="flex gap-2 px-6 pt-5 pb-4 overflow-x-auto" style={{ borderBottom: "1px solid rgba(134,100,251,0.08)", scrollbarWidth: "none" }}>
                {subtabs.map((sub) => {
                  const isActive = currentSubtab === sub;
                  return (
                    <button key={sub} onClick={() => setActiveSubtab(sub)}
                      className="whitespace-nowrap font-heading transition-all duration-200"
                      style={{
                        padding: "6px 14px", borderRadius: "999px",
                        fontSize: "0.75rem",
                        fontWeight: isActive ? 700 : 500,
                        background: isActive ? `linear-gradient(135deg, ${sector.kleur}18, rgba(71,200,245,0.12))` : "transparent",
                        color: isActive ? sector.kleur : "#9ca3af",
                        border: `1px solid ${isActive ? sector.kleur + "30" : "transparent"}`,
                        cursor: "pointer",
                      }}>
                      {sub}
                      <span className="ml-1.5 font-heading font-700"
                        style={{ fontSize: "0.65rem", background: isActive ? sector.kleur : "#e5e7eb", color: isActive ? "white" : "#9ca3af", padding: "1px 6px", borderRadius: "999px" }}>
                        {sector.subtabs[sub].length}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Klanten */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div key={`${activeSector}-${currentSubtab}`}
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22 }}>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {klanten.map((klant, i) => (
                        <KlantCard key={`${klant.naam}-${i}`} klant={klant} kleur={sector.kleur} />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <p className="mt-3 text-xs text-right" style={{ color: "#9ca3af", fontFamily: "Inter, sans-serif" }}>
              {klanten.length} klant{klanten.length !== 1 ? "en" : ""} · {sector.label} → {currentSubtab}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <ReviewsSection />

      {/* ─── CTA ─── */}
      <section className="py-20 relative" style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}>
        <div className="orb orb-purple w-64 h-64 -left-10 top-0 opacity-15" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-800 mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#1A2A33" }}>
              Jouw bedrijf ook in dit <span className="dpd-gradient-text">overzicht</span>?
            </h2>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
              Plan een gratis strategiegesprek en ontdek hoe wij jouw leadgeneratie, webdesign of automatisering aanpakken.
            </p>
            <Link href="/contact" className="btn-primary">
              Gratis Strategiegesprek <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
