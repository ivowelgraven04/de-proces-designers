/*
 * InteractiveDiagnose – De Proces Designers
 * Interactieve 3-stappen diagnose: sector → problemen → geprobeerd → resultaat
 * Case study content: placeholder — wordt later ingevuld
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, ChevronLeft,
  HardHat, Scale, Calculator, XCircle, Lightbulb, TrendingUp, ArrowUpRight,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Sector = "dakdekker" | "letselschade" | "financieel";

interface Probleem { id: string; label: string; uitleg: string }
interface Geprobeerd { id: string; label: string; waarom: string }
interface CaseStudy {
  naam: string; regio: string; probleem: string;
  aanpak: string; resultaat1: string; resultaat2: string; resultaat3: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const DATA: Record<Sector, {
  label: string; kleur: string; problemen: Probleem[]; geprobeerd: Geprobeerd[]; caseStudy: CaseStudy;
}> = {
  dakdekker: {
    label: "Dakdekker",
    kleur: "#8664FB",
    problemen: [
      { id: "gedeeld", label: "Ik betaal voor leads die ik deel met 4–6 anderen", uitleg: "Je betaalt voor interesse, maar die interesse is ook naar je concurrenten gestuurd. Je verliest opdrachten nog voor het gesprek begint." },
      { id: "noreact", label: "Leads nemen niet op of reageren niet terug", uitleg: "Slechte lead-kwaliteit: mensen die even informatie opvragen, daarna niets meer laten horen." },
      { id: "prijs", label: "Ik moet altijd concurreren op prijs", uitleg: "Als leads meerdere offertes aanvragen, wint de goedkoopste. Niet de beste." },
      { id: "instroom", label: "Geen constante stroom van nieuwe opdrachten", uitleg: "Drukke periodes wisselen af met stille weken. Geen voorspelbaar bedrijf." },
      { id: "website", label: "Mijn website levert geen offerteaanvragen op", uitleg: "Bezoekers komen, kijken en gaan weg zonder actie te ondernemen." },
      { id: "kosten", label: "Ik weet niet wat een nieuwe klant me kost", uitleg: "Zonder meetbare marketing weet je niet wat je investering oplevert." },
    ],
    geprobeerd: [
      { id: "werkspot", label: "Werkspot / Klusnet / andere leadplatforms", waarom: "Je betaalt per lead, maar diezelfde lead gaat ook naar 4–6 concurrenten. Resultaat: prijs-oorlog." },
      { id: "googleads", label: "Google Ads", waarom: "Hoge kosten per klik, veel klikken van mensen die nóg niet klaar zijn om te kopen." },
      { id: "seo", label: "SEO laten doen", waarom: "Werkt op lange termijn, maar duurt 6–12 maanden. Geen directe leadstroom." },
      { id: "website", label: "Nieuwe website laten bouwen", waarom: "Een mooie website zonder conversiestrategie en traffic levert geen leads op." },
      { id: "flyeren", label: "Flyeren / borden bij projecten", waarom: "Bereik is beperkt, niet meetbaar en levert zelden directe aanvragen op." },
      { id: "social", label: "Zelf social media gepost", waarom: "Zonder betaalde strategie bereik je bijna uitsluitend mensen die je al kennen." },
      { id: "bureau", label: "Een marketingbureau ingehuurd", waarom: "Generieke bureaus kennen jouw sector niet en leveren geen exclusieve leads." },
      { id: "mond", label: "Mond-tot-mond / netwerk", waarom: "Niet schaalbaar. Je bent afhankelijk van andermans timing en goede wil." },
    ],
    caseStudy: {
      naam: "Dakdekbedrijf",
      regio: "Noord-Holland",
      probleem: "Betaalde €45 per gedeelde lead via Werkspot. Concurreerde op prijs tegen 5 anderen. Elke week onzekerheid over de orderportefeuille.",
      aanpak: "Exclusieve Meta campagne gericht op huiseigenaren in een straal van 25 km. Landingspagina met directe offerteflow en automatische opvolging.",
      resultaat1: "€18 per exclusieve lead",
      resultaat2: "3× meer omzet in 90 dagen",
      resultaat3: "0 gedeelde leads meer",
    },
  },
  financieel: {
    label: "Financiële Dienstverlening",
    kleur: "#47C8F5",
    problemen: [
      { id: "netwerk", label: "Mijn netwerk raakt uitgeput als klantbron", uitleg: "Verwijzingen drogen op. Zonder actieve online instroom van nieuwe klanten stagneer je." },
      { id: "prijs", label: "Klanten kiezen puur op prijs, niet op kwaliteit", uitleg: "Wie niet online zichtbaar is, wordt vergeleken op tarief. Niet op expertise." },
      { id: "website", label: "Mijn website levert geen afsprakenaanvragen op", uitleg: "Bezoekers komen, maar er is geen systeem dat hen omzet naar betalende klanten." },
      { id: "zichtbaar", label: "Ik ben niet zichtbaar voor de juiste doelgroep", uitleg: "MKB-ondernemers die jou nodig hebben vinden je niet — of vinden de concurrent eerder." },
      { id: "instroom", label: "Geen voorspelbare stroom van nieuwe klanten", uitleg: "Drukke kwartalen wisselen af met stille periodes. Structurele groei ontbreekt." },
      { id: "concurrentie", label: "Grote kantoren en online tools domineren de markt", uitleg: "Boekhoudtools en grote accountantskantoren pakken online marktaandeel. Kleinere kantoren verdwijnen naar de achtergrond." },
    ],
    geprobeerd: [
      { id: "linkedin", label: "LinkedIn marketing", waarom: "Bereik blijft beperkt tot je bestaande netwerk. Groei buiten eigen kring is nagenoeg nul." },
      { id: "googleads", label: "Google Ads", waarom: "Zoekvolume voor boekhouders is lokaal laag. Hoge kosten per klik, lage conversie." },
      { id: "seo", label: "SEO laten doen", waarom: "Gedomineerd door grote portals, vergelijkingssites en accountantskantoren met enorme SEO-budgetten." },
      { id: "netwerk", label: "Netwerkbijeenkomsten", waarom: "Tijdrovend en niet schaalbaar. Afhankelijk van toeval en de beschikbaarheid van anderen." },
      { id: "website", label: "Nieuwe website laten bouwen", waarom: "Zonder gerichte traffic en een conversiestrategie levert zelfs de mooiste website geen klanten op." },
      { id: "social", label: "Zelf social media gedaan", waarom: "Organisch bereik op Meta zonder betaald advertentiebudget is vrijwel nul." },
      { id: "bureau", label: "Marketingbureau ingehuurd", waarom: "Generieke bureaus kennen de financiële sector niet en genereren ongekwalificeerde aanvragen." },
      { id: "branche", label: "Branchevereniging / verwijzingen", waarom: "Niet schaalbaar. Volledig afhankelijk van andermans bereidheid en timing." },
    ],
    caseStudy: {
      naam: "Boekhoudkantoor",
      regio: "Randstad",
      probleem: "Groeide uitsluitend via mond-tot-mond. Geen online instroom. Grote kantoren domineerden Google volledig.",
      aanpak: "Meta quiz funnel gericht op MKB-ondernemers in de regio. Pre-kwalificatie op branche en omzet. Automatische afsprakenpagina direct na aanmelding.",
      resultaat1: "23 nieuwe klantgesprekken in maand 1",
      resultaat2: "€31 per gekwalificeerde afspraak",
      resultaat3: "100% exclusieve leads",
    },
  },
  letselschade: {
    label: "Letselschade Kantoor",
    kleur: "#6B8EFF",
    problemen: [
      { id: "kwaliteit", label: "De meeste leads zijn niet gekwalificeerd", uitleg: "Iedereen wil een vergoeding. Maar van de aanmeldingen is een groot deel kansloos of irrelevant." },
      { id: "google", label: "Google Ads is onbetaalbaar geworden", uitleg: "Grote advocatenkantoren bieden €50–150 per klik. Voor kleinere kantoren is dit niet bij te houden." },
      { id: "kosten", label: "Hoge kosten per lead maar weinig rendement", uitleg: "Je betaalt veel voor leads die vervolgens niet reageren of niet in behandeling genomen kunnen worden." },
      { id: "noreact", label: "Leads melden zich aan maar reageren daarna niet", uitleg: "Na aanmelding zijn ze weg. Geen opvolging-systeem = gemiste omzet." },
      { id: "concurrentie", label: "Ik concurreer met kantoren met enorme budgetten", uitleg: "De grote spelers domineren Google en kopen ook nog eens dezelfde leads als jij." },
      { id: "zichtbaar", label: "Mijn online zichtbaarheid is slecht", uitleg: "Potentiële cliënten vinden je niet, of vinden je te laat in hun zoekproces." },
    ],
    geprobeerd: [
      { id: "googleads", label: "Google Ads gedraaid", waarom: "Kosten lopen op tot €50–150 per klik. Vrijwel onhoudbaar zonder groot budget." },
      { id: "seo", label: "SEO laten doen", waarom: "Gedomineerd door grote portals en gevestigde kantoren. Duurt jaren om op te bouwen." },
      { id: "leadplatform", label: "Leadplatforms gebruikt (gedeelde leads)", waarom: "Dezelfde aanvraag gaat naar 5+ kantoren tegelijk. Kwaliteit én exclusiviteit zijn laag." },
      { id: "social", label: "Eigen social media gedaan", waarom: "Letselschade cliënten zoeken niet actief via Instagram of Facebook naar juridische hulp." },
      { id: "website", label: "Nieuwe website laten bouwen", waarom: "Zonder gerichte traffic en pre-kwalificatie levert een website geen cliënten op." },
      { id: "netwerk", label: "Advocatennetwerk / verwijzingen", waarom: "Niet schaalbaar. Je bent afhankelijk van andermans netwerk en agenda." },
      { id: "bureau", label: "Marketingbureau ingehuurd", waarom: "Bureaus zonder letselschade-expertise genereren ongekwalificeerde aanvragen." },
      { id: "linkedin", label: "LinkedIn marketing", waarom: "Verkeerd platform voor letselschade. Cliënten zitten hier niet met een actieve zoekvraag." },
    ],
    caseStudy: {
      naam: "Letselschade Kantoor",
      regio: "Amsterdam",
      probleem: "Google Ads kostte €8.000/maand maar leverde hoofdzakelijk ongekwalificeerde leads op. Grote kantoren domineerden de veiling volledig.",
      aanpak: "Meta funnel met meerdere pre-kwalificatie stappen. Alleen gekwalificeerde aanvragen bereiken het kantoor. Automatische opvolging voor no-shows.",
      resultaat1: "68% lagere kosten per gekwalificeerde lead",
      resultaat2: "Cliëntenaantal verdubbeld in 4 maanden",
      resultaat3: "Geen Google Ads budget meer nodig",
    },
  },
};

// ─── Animatie helpers ──────────────────────────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit:  (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.25 } }),
};

// ─── Sub-components ────────────────────────────────────────────────────────────
function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium font-heading transition-all duration-200 text-left"
      style={{
        background: selected ? "linear-gradient(135deg, #8664FB15, #47C8F515)" : "rgba(255,255,255,0.7)",
        border: selected ? "1.5px solid #8664FB60" : "1.5px solid rgba(134,100,251,0.15)",
        color: selected ? "#8664FB" : "#4a5568",
        boxShadow: selected ? "0 2px 12px rgba(134,100,251,0.15)" : "0 1px 4px rgba(0,0,0,0.04)",
        transform: selected ? "translateY(-1px)" : "none",
      }}
    >
      <span
        className="shrink-0 w-4 h-4 rounded flex items-center justify-center"
        style={{ background: selected ? "#8664FB" : "rgba(134,100,251,0.1)" }}
      >
        {selected && <CheckCircle2 size={12} color="white" strokeWidth={3} />}
      </span>
      {label}
    </button>
  );
}

function ProgressDots({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-2 justify-center mb-8">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-2">
          <div
            className="rounded-full transition-all duration-400"
            style={{
              width: step >= s ? 28 : 8,
              height: 8,
              background: step >= s ? "linear-gradient(90deg, #8664FB, #47C8F5)" : "rgba(134,100,251,0.2)",
            }}
          />
          {s < 3 && <div className="w-6 h-px" style={{ background: "rgba(134,100,251,0.15)" }} />}
        </div>
      ))}
    </div>
  );
}

// ─── Resultaat ────────────────────────────────────────────────────────────────
function Resultaat({
  sector, problemen, geprobeerd,
}: { sector: Sector; problemen: string[]; geprobeerd: string[] }) {
  const d = DATA[sector];
  const geselecteerdeProblemen = d.problemen.filter(p => problemen.includes(p.id));
  const geselecteerdeGeprobeerd = d.geprobeerd.filter(g => geprobeerd.includes(g.id));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* ── Herkenning */}
      <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(134,100,251,0.12)", boxShadow: "0 4px 24px rgba(134,100,251,0.08)" }}>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(134,100,251,0.12), rgba(71,200,245,0.12))" }}>
            <Lightbulb size={16} style={{ color: "#8664FB" }} />
          </div>
          <h3 className="font-heading font-700 text-base" style={{ color: "#1A2A33" }}>Dit herkennen wij precies.</h3>
        </div>
        <div className="space-y-3">
          {geselecteerdeProblemen.map((p) => (
            <div key={p.id} className="flex items-start gap-3">
              <div className="shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #8664FB, #47C8F5)" }}>
                  <CheckCircle2 size={12} color="white" strokeWidth={3} />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium font-heading" style={{ color: "#1A2A33" }}>{p.label}</p>
                <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>{p.uitleg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Geprobeerd */}
      {geselecteerdeGeprobeerd.length > 0 && (
        <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(239,68,68,0.12)", boxShadow: "0 4px 24px rgba(239,68,68,0.04)" }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(239,68,68,0.08)" }}>
              <XCircle size={16} style={{ color: "#ef4444" }} />
            </div>
            <h3 className="font-heading font-700 text-base" style={{ color: "#1A2A33" }}>Waarom dit niet structureel werkt</h3>
          </div>
          <div className="space-y-3">
            {geselecteerdeGeprobeerd.map((g) => (
              <div key={g.id} className="flex items-start gap-3">
                <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full" style={{ background: "#ef4444", marginTop: "6px" }} />
                <div>
                  <span className="text-sm font-medium font-heading" style={{ color: "#1A2A33" }}>{g.label}: </span>
                  <span className="text-sm" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>{g.waarom}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4 p-3 rounded-lg font-medium" style={{ background: "rgba(239,68,68,0.06)", color: "#ef4444", fontFamily: "Inter, sans-serif" }}>
            Dit zijn symptoomoplossingen. Ze lossen het onderliggende probleem — exclusieve, gekwalificeerde leads — niet op.
          </p>
        </div>
      )}

      {/* ── Case Study */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #8664FB 0%, #47C8F5 100%)", boxShadow: "0 16px 48px rgba(134,100,251,0.3)" }}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp size={16} color="rgba(255,255,255,0.8)" />
            <span className="text-xs font-heading font-600 uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.7)" }}>Case Study</span>
          </div>
          <h3 className="font-heading font-800 text-lg text-white mb-1">
            {d.caseStudy.naam} · {d.caseStudy.regio}
          </h3>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
            <strong className="text-white font-medium">Situatie:</strong> {d.caseStudy.probleem}
          </p>
          <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
            <strong className="text-white font-medium">Aanpak:</strong> {d.caseStudy.aanpak}
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[d.caseStudy.resultaat1, d.caseStudy.resultaat2, d.caseStudy.resultaat3].map((r, i) => (
              <div key={i} className="rounded-xl p-3 text-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                <p className="text-xs font-heading font-700 text-white leading-snug">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA */}
      <div className="text-center pt-2">
        <p className="text-sm mb-4" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
          Herken je dit? We laten je in een gratis gesprek zien wat er in jouw situatie mogelijk is.
        </p>
        <Link href="/contact" className="btn-primary inline-flex">
          Boek een gratis strategiegesprek <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Hoofdcomponent ────────────────────────────────────────────────────────────
export function InteractiveDiagnose() {
  const [step, setStep]       = useState(1);
  const [dir,  setDir]        = useState(1);
  const [sector, setSector]   = useState<Sector | null>(null);
  const [problemen, setProblemen]       = useState<string[]>([]);
  const [geprobeerd, setGeprobeerd]     = useState<string[]>([]);

  const go = (nextStep: number) => {
    setDir(nextStep > step ? 1 : -1);
    setStep(nextStep);
  };

  const toggleProbleem = (id: string) =>
    setProblemen(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const toggleGeprobeerd = (id: string) =>
    setGeprobeerd(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const reset = () => { setStep(1); setDir(-1); setSector(null); setProblemen([]); setGeprobeerd([]); };

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium font-heading"
              style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB" }}
            >
              Persoonlijke Diagnose
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading mb-3"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1A2A33" }}
            >
              Herken jij dit <span className="dpd-gradient-text">ook</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base max-w-xl mx-auto"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}
            >
              Beantwoord 3 korte vragen en zie direct welke aanpak bij jouw situatie past.
            </motion.p>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl p-8"
            style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)", border: "1px solid rgba(134,100,251,0.12)", boxShadow: "0 8px 40px rgba(134,100,251,0.1)" }}
          >
            {step < 4 && <ProgressDots step={step} />}

            <AnimatePresence mode="wait" custom={dir}>

              {/* ── Stap 1: Sector */}
              {step === 1 && (
                <motion.div key="step1" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                  <h3 className="font-heading font-700 text-lg text-center mb-6" style={{ color: "#1A2A33" }}>
                    In welke sector ben je actief?
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {(["dakdekker", "financieel", "letselschade"] as Sector[]).map((s) => {
                      const subtitles: Record<Sector, string> = {
                        dakdekker: "Dakrenovatie · Dakramen · Goten",
                        financieel: "Boekhouders · Accountants · Advies",
                        letselschade: "Letselschade · Claims · Advocatuur",
                      };
                      const icons: Record<Sector, React.ReactNode> = {
                        dakdekker: <HardHat size={26} color="white" />,
                        financieel: <Calculator size={26} color="white" />,
                        letselschade: <Scale size={26} color="white" />,
                      };
                      return (
                        <button
                          key={s}
                          onClick={() => { setSector(s); go(2); }}
                          className="group relative flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 text-center"
                          style={{
                            background: "rgba(255,255,255,0.9)",
                            border: "1.5px solid rgba(134,100,251,0.15)",
                            boxShadow: "0 4px 16px rgba(134,100,251,0.06)",
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-4px)";
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 16px 40px rgba(134,100,251,0.18)";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(134,100,251,0.4)";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(134,100,251,0.06)";
                            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(134,100,251,0.15)";
                          }}
                        >
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                            style={{ background: "linear-gradient(135deg, #8664FB, #47C8F5)" }}
                          >
                            {icons[s]}
                          </div>
                          <div>
                            <div className="font-heading font-700 text-sm mb-1" style={{ color: "#1A2A33" }}>
                              {DATA[s].label}
                            </div>
                            <div className="text-xs" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                              {subtitles[s]}
                            </div>
                          </div>
                          <ArrowUpRight size={14} className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#8664FB" }} />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ── Stap 2: Problemen */}
              {step === 2 && sector && (
                <motion.div key="step2" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                  <div className="flex items-center gap-3 mb-6">
                    <button onClick={() => go(1)} className="p-1.5 rounded-lg hover:bg-purple-50 transition-colors">
                      <ChevronLeft size={18} style={{ color: "#8664FB" }} />
                    </button>
                    <h3 className="font-heading font-700 text-lg" style={{ color: "#1A2A33" }}>
                      Wat herken jij in jouw situatie?
                    </h3>
                  </div>
                  <p className="text-sm mb-5" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                    Selecteer alles wat van toepassing is.
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {DATA[sector].problemen.map((p) => (
                      <Chip key={p.id} label={p.label} selected={problemen.includes(p.id)} onClick={() => toggleProbleem(p.id)} />
                    ))}
                  </div>
                  <button
                    onClick={() => go(3)}
                    disabled={problemen.length === 0}
                    className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Volgende stap <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {/* ── Stap 3: Geprobeerd */}
              {step === 3 && sector && (
                <motion.div key="step3" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                  <div className="flex items-center gap-3 mb-6">
                    <button onClick={() => go(2)} className="p-1.5 rounded-lg hover:bg-purple-50 transition-colors">
                      <ChevronLeft size={18} style={{ color: "#8664FB" }} />
                    </button>
                    <h3 className="font-heading font-700 text-lg" style={{ color: "#1A2A33" }}>
                      Wat heb je al geprobeerd?
                    </h3>
                  </div>
                  <p className="text-sm mb-5" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                    Selecteer alles wat je hebt geprobeerd, ook als het deels werkte.
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {DATA[sector].geprobeerd.map((g) => (
                      <Chip key={g.id} label={g.label} selected={geprobeerd.includes(g.id)} onClick={() => toggleGeprobeerd(g.id)} />
                    ))}
                  </div>
                  <button onClick={() => go(4)} className="btn-primary w-full justify-center">
                    Bekijk mijn diagnose <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {/* ── Stap 4: Resultaat */}
              {step === 4 && sector && (
                <motion.div key="step4" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading font-700 text-lg" style={{ color: "#1A2A33" }}>Jouw diagnose</h3>
                    <button
                      onClick={reset}
                      className="text-xs font-heading font-600 px-3 py-1.5 rounded-lg transition-colors hover:bg-purple-50"
                      style={{ color: "#8664FB" }}
                    >
                      Opnieuw beginnen
                    </button>
                  </div>
                  <Resultaat sector={sector} problemen={problemen} geprobeerd={geprobeerd} />
                </motion.div>
              )}

            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
