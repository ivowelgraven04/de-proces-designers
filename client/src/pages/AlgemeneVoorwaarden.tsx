import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-heading font-800 text-lg mb-4" style={{ color: "#1A2A33" }}>{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>
        {children}
      </div>
    </section>
  );
}

export default function AlgemeneVoorwaarden() {
  useSEO({
    title: "Algemene Voorwaarden | De Proces Designers",
    description: "De algemene voorwaarden van De Proces Designers. Van toepassing op alle diensten, offertes en overeenkomsten. KvK 85905119.",
    path: "/algemene-voorwaarden",
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-cyan w-72 h-72 -left-10 top-0 opacity-20" />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium font-heading"
              style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB" }}>
              <FileText size={13} /> Juridisch
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1A2A33" }}>
              Algemene Voorwaarden
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base max-w-xl"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
              Versie 1.0 — Laatst bijgewerkt: april 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container py-16">
        <div className="max-w-3xl mx-auto">

          <Section title="Artikel 1 — Definities">
            <p>In deze algemene voorwaarden worden de volgende begrippen gehanteerd:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong style={{ color: "#1A2A33" }}>De Proces Designers:</strong> de besloten vennootschap De Proces Designers, ingeschreven bij de Kamer van Koophandel onder nummer 85905119, tevens opdrachtnemer</li>
              <li><strong style={{ color: "#1A2A33" }}>Opdrachtgever:</strong> de natuurlijke persoon of rechtspersoon die een overeenkomst sluit met De Proces Designers</li>
              <li><strong style={{ color: "#1A2A33" }}>Diensten:</strong> alle werkzaamheden die De Proces Designers verricht, waaronder maar niet beperkt tot webdesign, leadgeneratie, marketingautomatisering, funneloptimalisatie en online adverteren</li>
              <li><strong style={{ color: "#1A2A33" }}>Overeenkomst:</strong> de schriftelijke of elektronische opdracht- of samenwerkingsovereenkomst tussen De Proces Designers en opdrachtgever</li>
              <li><strong style={{ color: "#1A2A33" }}>Offerte:</strong> een schriftelijk of elektronisch aanbod van De Proces Designers</li>
            </ul>
          </Section>

          <Section title="Artikel 2 — Toepasselijkheid">
            <p>Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, werkzaamheden, overeenkomsten en leveringen van diensten door De Proces Designers, tenzij schriftelijk anders is overeengekomen.</p>
            <p>Afwijking van deze voorwaarden is slechts mogelijk indien dit uitdrukkelijk en schriftelijk is overeengekomen. Toepasselijkheid van algemene voorwaarden van de opdrachtgever wordt hierbij uitdrukkelijk van de hand gewezen.</p>
            <p>Indien een bepaling in deze voorwaarden nietig of vernietigbaar blijkt, blijven de overige bepalingen onverminderd van kracht.</p>
          </Section>

          <Section title="Artikel 3 — Aanbod en totstandkoming overeenkomst">
            <p>Alle offertes van De Proces Designers zijn vrijblijvend en geldig gedurende 30 dagen na dagtekening, tenzij een andere termijn is vermeld.</p>
            <p>De overeenkomst komt tot stand door schriftelijke of elektronische aanvaarding van de offerte door opdrachtgever, dan wel doordat De Proces Designers op verzoek van opdrachtgever met de werkzaamheden is begonnen.</p>
            <p>Wijzigingen in de opdracht na totstandkoming van de overeenkomst zijn slechts geldig indien schriftelijk overeengekomen. Meerwerk wordt aanvullend gefactureerd op basis van de geldende uurtarieven of een nader overeen te komen bedrag.</p>
          </Section>

          <Section title="Artikel 4 — Uitvoering van de diensten">
            <p>De Proces Designers voert de opdracht naar beste inzicht en vermogen uit, conform de eisen van goed vakmanschap. De verplichtingen van De Proces Designers betreffen een inspanningsverplichting, tenzij uitdrukkelijk een resultaat is gegarandeerd.</p>
            <p>De Proces Designers bepaalt de wijze waarop de opdracht wordt uitgevoerd, tenzij hierover uitdrukkelijke afspraken zijn gemaakt. De Proces Designers is gerechtigd (delen van) de opdracht uit te (laten) voeren door derden.</p>
            <p>De opdrachtgever draagt zorg voor tijdige aanlevering van alle voor de uitvoering benodigde gegevens, materialen en toegangen (zoals accounttoegang tot advertentieplatformen). Vertraging die hieruit voortvloeit is niet voor rekening van De Proces Designers.</p>
            <p>Opgegeven levertijden of startdata zijn indicatief en geven opdrachtgever bij overschrijding niet het recht op ontbinding of schadevergoeding, tenzij uitdrukkelijk een fatale termijn is overeengekomen.</p>
          </Section>

          <Section title="Artikel 5 — Verplichtingen opdrachtgever">
            <p>Opdrachtgever is verplicht:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>De Proces Designers tijdig te voorzien van alle informatie, toegangsrechten en materialen die noodzakelijk zijn voor de uitvoering van de opdracht</li>
              <li>Wijzigingen in de bedrijfssituatie die relevant zijn voor de uitvoering van de opdracht direct te melden</li>
              <li>De Proces Designers schadeloos te stellen indien gebruik van door opdrachtgever aangeleverd materiaal inbreuk maakt op rechten van derden</li>
              <li>De facturen van De Proces Designers tijdig te voldoen</li>
            </ul>
          </Section>

          <Section title="Artikel 6 — Tarieven en betaling">
            <p>De tarieven zijn vermeld in de offerte en luiden in euro's, exclusief btw, tenzij anders aangegeven. Eventuele advertentiebudgetten, platformkosten en kosten van derden zijn niet inbegrepen, tenzij uitdrukkelijk overeengekomen.</p>
            <p>Facturering geschiedt maandelijks vooraf of conform de in de offerte overeengekomen betalingsstructuur. Betaling dient te geschieden binnen <strong style={{ color: "#1A2A33" }}>14 dagen</strong> na factuurdatum, tenzij anders overeengekomen.</p>
            <p>Bij niet-tijdige betaling is opdrachtgever van rechtswege in verzuim. De Proces Designers is dan gerechtigd de werkzaamheden op te schorten en wettelijke rente in rekening te brengen over het openstaande bedrag.</p>
            <p>De Proces Designers behoudt zich het recht voor haar tarieven jaarlijks te indexeren op basis van de CBS-consumentenprijsindex. Opdrachtgever wordt hiervan minimaal 30 dagen vooraf op de hoogte gesteld.</p>
          </Section>

          <Section title="Artikel 7 — Intellectueel eigendom">
            <p>Alle rechten van intellectueel eigendom op door De Proces Designers ontwikkelde werken, waaronder websites, advertentiecreatives, funnels, teksten, grafisch materiaal, systemen en software, berusten bij De Proces Designers, tenzij schriftelijk anders overeengekomen.</p>
            <p>Na volledige betaling van de overeengekomen vergoeding verleent De Proces Designers aan opdrachtgever een niet-exclusief, niet-overdraagbaar gebruiksrecht op de voor opdrachtgever gemaakte werken, voor het overeengekomen doel.</p>
            <p>Door De Proces Designers gebruikte tools, sjablonen, frameworks en onderliggende systemen blijven te allen tijde eigendom van De Proces Designers, ook na beëindiging van de samenwerking.</p>
            <p>Opdrachtgever garandeert dat de door hem aangeleverde materialen (teksten, afbeeldingen, logo's etc.) geen inbreuk maken op rechten van derden en vrijwaart De Proces Designers voor aanspraken dienaangaande.</p>
          </Section>

          <Section title="Artikel 8 — Geheimhouding">
            <p>Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de samenwerking verkrijgen. Informatie geldt als vertrouwelijk indien dit uitdrukkelijk is aangegeven of redelijkerwijs uit de aard van de informatie volgt.</p>
            <p>Deze geheimhoudingsverplichting geldt niet voor informatie die reeds openbaar was, door opdrachtgever zelf openbaar is gemaakt, of waarvan openbaarmaking wettelijk is vereist.</p>
            <p>De geheimhoudingsplicht blijft ook na beëindiging van de overeenkomst van kracht.</p>
          </Section>

          <Section title="Artikel 9 — Aansprakelijkheid">
            <p>De aansprakelijkheid van De Proces Designers voor directe schade is beperkt tot het bedrag dat in het kader van de betreffende opdracht in de voorgaande drie maanden door opdrachtgever is betaald, met een maximum van € 5.000 per schadeveroorzakende gebeurtenis.</p>
            <p>De Proces Designers is niet aansprakelijk voor:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Indirecte schade, gevolgschade, gederfde winst of omzetderving</li>
              <li>Schade die voortvloeit uit onjuiste of onvolledige informatie verstrekt door opdrachtgever</li>
              <li>Resultaten van advertentiecampagnes of leadgeneratie, gezien de inspanningsverplichting</li>
              <li>Schade door storingen of wijzigingen bij derden (zoals Meta, Google of andere platformen)</li>
              <li>Schade door overmacht</li>
            </ul>
            <p>De in dit artikel opgenomen beperkingen gelden niet indien de schade het gevolg is van opzet of bewuste roekeloosheid van De Proces Designers of haar leidinggevenden.</p>
          </Section>

          <Section title="Artikel 10 — Overmacht">
            <p>In geval van overmacht is De Proces Designers niet gehouden haar verplichtingen na te komen. Onder overmacht wordt verstaan: elke omstandigheid buiten de wil en invloed van De Proces Designers die nakoming tijdelijk of blijvend verhindert, waaronder maar niet beperkt tot: ziekte van medewerkers, storingen bij toeleveranciers, internetuitval, cyberaanvallen, beperkingen of wijzigingen van platforms van derden (zoals Facebook of Google) en overheidsmaatregelen.</p>
            <p>Bij overmacht van langer dan 30 dagen zijn beide partijen gerechtigd de overeenkomst te ontbinden, zonder dat een schadevergoedingsverplichting ontstaat.</p>
          </Section>

          <Section title="Artikel 11 — Looptijd en opzegging">
            <p>Overeenkomsten worden aangegaan voor de duur zoals vermeld in de offerte, standaard op maandbasis.</p>
            <p>Opzegging dient te geschieden met een opzegtermijn van <strong style={{ color: "#1A2A33" }}>één kalendermaand</strong>, per e-mail gericht aan <a href="mailto:info@deprocesdesigners.nl" style={{ color: "#8664FB" }}>info@deprocesdesigners.nl</a>. Reeds gefactureerde of te factureren werkzaamheden blijven verschuldigd.</p>
            <p>De Proces Designers is gerechtigd de overeenkomst met onmiddellijke ingang te beëindigen of op te schorten indien:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Opdrachtgever in surseance van betaling of faillissement verkeert</li>
              <li>Opdrachtgever na ingebrekestelling in gebreke blijft met betaling</li>
              <li>Opdrachtgever in strijd handelt met de bepalingen van deze voorwaarden of de overeenkomst</li>
            </ul>
          </Section>

          <Section title="Artikel 12 — Toepasselijk recht en geschillen">
            <p>Op alle overeenkomsten en rechtshandelingen tussen De Proces Designers en opdrachtgever is uitsluitend <strong style={{ color: "#1A2A33" }}>Nederlands recht</strong> van toepassing.</p>
            <p>Geschillen die voortvloeien uit of verband houden met een overeenkomst worden bij voorkeur in goed overleg opgelost. Indien partijen er onderling niet uitkomen, worden geschillen voorgelegd aan de bevoegde rechter van de rechtbank Noord-Holland, locatie Alkmaar, tenzij dwingende wettelijke bepalingen een andere rechter aanwijzen.</p>
          </Section>

          <Section title="Artikel 13 — Slotbepalingen">
            <p>De meest recente versie van deze algemene voorwaarden is te raadplegen op <a href="https://www.deprocesdesigners.nl/algemene-voorwaarden" style={{ color: "#8664FB" }}>www.deprocesdesigners.nl/algemene-voorwaarden</a>.</p>
            <p>De Proces Designers behoudt zich het recht voor deze voorwaarden te wijzigen. Wijzigingen worden minimaal 30 dagen voor inwerkingtreding gepubliceerd op de website. Voortzetting van de samenwerking na inwerkingtreding geldt als aanvaarding van de gewijzigde voorwaarden.</p>
            <p>Deze algemene voorwaarden zijn opgesteld in de Nederlandse taal en voor het eerst gepubliceerd in april 2026.</p>
          </Section>

          {/* CTA back */}
          <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between"
            style={{ borderColor: "rgba(134,100,251,0.12)" }}>
            <p className="text-sm" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
              Bekijk ook ons <Link href="/privacybeleid" style={{ color: "#8664FB" }}>Privacybeleid</Link>.
            </p>
            <Link href="/contact" className="btn-primary text-sm">
              Neem Contact Op <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
