import { Link } from "wouter";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export const LINKPARTNERS = [
  {
    slug: "wonera",
    naam: "Wonera",
    url: "https://www.wonera.nl",
    tagline: "Slimme woningplatformen voor heel Nederland",
    intro:
      "Wonera is een toonaangevend platform dat huiseigenaren en huurders verbindt met betrouwbare vakspecialisten voor woning­gerelateerde klussen. Van onderhoud tot renovatie: Wonera zorgt voor snelle koppeling, transparante prijzen en gegarandeerde kwaliteit.",
    details:
      "Via Wonera vinden dagelijks honderden woningeigenaren de juiste vakman voor hun klus. Het platform werkt met een gecertificeerd netwerk van specialisten, een heldere offerteflow en nazorg. De samenwerking met De Proces Designers zorgt voor optimale online vindbaarheid en een sterke digitale aanwezigheid van het Wonera-netwerk.",
    kleur: "#8664FB",
    categorie: "Woonplatform",
  },
  {
    slug: "wonera-spoed-centrale",
    naam: "Wonera Spoed Centrale",
    url: "https://www.woneraspoedcentrale.nl",
    tagline: "24/7 spoedservice voor acute woning­problemen",
    intro:
      "Wonera Spoed Centrale is de spoedafdeling van het Wonera-netwerk en bereikbaar 24 uur per dag, 7 dagen per week. Bij acute situaties zoals een lekkend dak, kapotte cv-ketel of wateroverlast regelt Wonera Spoed Centrale binnen korte tijd een gecertificeerde vakman.",
    details:
      "De Spoed Centrale is opgezet voor situaties waarbij wachten geen optie is. Het platform combineert beschikbaarheid, snelheid en kwaliteit: een vaste responstijd, directe koppeling aan beschikbare specialisten in de regio en transparante spoedtarieven. De Proces Designers verzorgt de digitale strategie en online marketing voor dit platform.",
    kleur: "#FF6B35",
    categorie: "Spoeddiensten",
  },
  {
    slug: "spoedcentrale",
    naam: "Spoedcentrale",
    url: "https://www.spoedcentrale.nl",
    tagline: "Uw centrale voor alle spoedklussen thuis",
    intro:
      "Spoedcentrale.nl is hét online aanspreekpunt voor urgente herstel­werkzaamheden aan uw woning. Of het nu gaat om loodgieterswerk, elektra, dakproblemen of sloten­makerij: de Spoedcentrale schakelt direct de juiste vakman in uw regio in.",
    details:
      "Met een breed netwerk van aangesloten vakmensen in heel Nederland biedt Spoedcentrale een betrouwbaar alternatief voor dure spoedtarieven. Het platform is gefocust op snelheid, eerlijkheid en kwaliteitscontrole. Als onderdeel van het Wonera-netwerk werkt Spoedcentrale nauw samen met De Proces Designers voor online zichtbaarheid en conversie­optimalisatie.",
    kleur: "#47C8F5",
    categorie: "Spoeddiensten",
  },
  {
    slug: "dakdekkersloket",
    naam: "Dakdekkersloket",
    url: "https://www.dakdekkerloket.nl",
    tagline: "Specialist in dakdekkers en dakreparaties",
    intro:
      "Dakdekkersloket.nl koppelt woningeigenaren en vastgoedbeheerders aan erkende dakdekkers voor inspectie, reparatie en volledige dakrenovatie. Snel, vakkundig en met heldere prijsafspraken.",
    details:
      "Een lekkend dak of beschadigde dakbedekking vraagt om snelle actie. Dakdekkersloket werkt uitsluitend met gecertificeerde dakdekkers die voldoen aan strenge kwaliteitsnormen. Van platdak tot pannendak, van zink tot EPDM: het loket biedt overzicht en gemak. De Proces Designers ondersteunt Dakdekkersloket met gerichte leadgeneratie en SEO-strategie.",
    kleur: "#2D9E2D",
    categorie: "Dakreparaties",
  },
  {
    slug: "spoed-bij-lekkage",
    naam: "Spoed bij Lekkage",
    url: "https://www.spoedbijlekkage.nl",
    tagline: "Direct hulp bij waterlekkage en waterschade",
    intro:
      "Spoed bij Lekkage is de specia­list voor acute lekkage­problemen in huis. Wateroverlast, lekkende leidingen of indringing van buitenaf: het platform schakelt direct een erkende lekkage­specialist in uw omgeving in.",
    details:
      "Waterschade is één van de meest voorkomende en kostbare woningproblemen. Spoed bij Lekkage minimaliseert schade door snel de juiste vakman in te schakelen. Het platform beschikt over een landelijk netwerk van loodgieters en lekkage­specialisten met 24/7 bereik­baarheid. De Proces Designers verzorgt de online marketing en website­ontwikkeling voor dit platform.",
    kleur: "#0EA5E9",
    categorie: "Lekkage & Water",
  },
];

export default function Linkpartners() {
  useSEO({
    title: "Linkpartners – De Proces Designers",
    description:
      "Onze linkpartners: Wonera, Wonera Spoed Centrale, Spoedcentrale, Dakdekkersloket en Spoed bij Lekkage. Betrouwbare platforms voor woning­gerelateerde diensten in heel Nederland.",
  });

  return (
    <main className="pt-24 pb-20">
      {/* Hero */}
      <section className="container mb-16">
        <div className="max-w-2xl">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ background: "rgba(134,100,251,0.1)", color: "#8664FB" }}
          >
            Netwerk
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1A2A33" }}>
            Linkpartners
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}>
            Wij werken nauw samen met een netwerk van toonaangevende woning­platforms. Hieronder vindt u een overzicht van onze linkpartners, elk met een korte toelichting en een directe link naar hun website.
          </p>
        </div>
      </section>

      {/* Partner grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LINKPARTNERS.map((partner) => (
            <Link key={partner.slug} href={`/linkpartners/${partner.slug}`}>
              <article
                className="group rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: `1px solid ${partner.kleur}20`,
                  boxShadow: `0 4px 24px ${partner.kleur}10`,
                  background: "rgba(255,255,255,0.8)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${partner.kleur}25`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${partner.kleur}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${partner.kleur}10`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${partner.kleur}20`;
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: `${partner.kleur}15`, color: partner.kleur }}
                  >
                    {partner.categorie}
                  </span>
                  <ExternalLink size={16} style={{ color: partner.kleur }} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h2 className="font-heading text-xl font-bold mb-1" style={{ color: "#1A2A33" }}>
                  {partner.naam}
                </h2>
                <p className="text-sm mb-3" style={{ color: partner.kleur, fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                  {partner.tagline}
                </p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#4A5568", fontFamily: "Inter, sans-serif" }}>
                  {partner.intro}
                </p>

                <div
                  className="flex items-center gap-2 text-sm font-semibold transition-gap duration-200"
                  style={{ color: partner.kleur }}
                >
                  Lees meer
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
