import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Shield } from "lucide-react";
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

export default function Privacybeleid() {
  useSEO({
    title: "Privacybeleid | De Proces Designers",
    description: "Lees hoe De Proces Designers omgaat met jouw persoonsgegevens conform de AVG/GDPR wetgeving. Transparant, veilig en privacyvriendelijk.",
    path: "/privacybeleid",
  });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-72 h-72 -right-10 top-0 opacity-20" />
        <div className="container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium font-heading"
              style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB" }}>
              <Shield size={13} /> Juridisch
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#1A2A33" }}>
              Privacybeleid
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

          <Section title="1. Wie zijn wij?">
            <p>
              De Proces Designers is een marketingbureau gespecialiseerd in leadgeneratie, funneloptimalisatie en marketingautomatisering.
            </p>
            <p>
              <strong style={{ color: "#1A2A33" }}>Verwerkingsverantwoordelijke:</strong><br />
              De Proces Designers<br />
              KvK-nummer: 85905119<br />
              E-mail: <a href="mailto:info@deprocesdesigners.nl" style={{ color: "#8664FB" }}>info@deprocesdesigners.nl</a><br />
              Telefoon: +31 (0)6 51 36 95 37<br />
              Website: <a href="https://www.deprocesdesigners.nl" style={{ color: "#8664FB" }}>www.deprocesdesigners.nl</a>
            </p>
          </Section>

          <Section title="2. Welke persoonsgegevens verwerken wij?">
            <p>Wij verwerken uitsluitend persoonsgegevens die noodzakelijk zijn voor de uitvoering van onze diensten. Het gaat om de volgende categorieën:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong style={{ color: "#1A2A33" }}>Contactgegevens:</strong> naam, e-mailadres, telefoonnummer en bedrijfsnaam</li>
              <li><strong style={{ color: "#1A2A33" }}>Communicatiegegevens:</strong> inhoud van berichten die via het contactformulier of e-mail worden verzonden</li>
              <li><strong style={{ color: "#1A2A33" }}>Gebruiksgegevens:</strong> anonieme websitestatistieken (paginabezoeken, apparaattype, locatie op stadsniveau)</li>
              <li><strong style={{ color: "#1A2A33" }}>Zakelijke gegevens:</strong> bedrijfsinformatie die in het kader van een dienstverlening wordt verstrekt</li>
              <li><strong style={{ color: "#1A2A33" }}>Betalingsgegevens:</strong> factuuradres en betalingsstatus (geen betaalgegevens zoals IBAN worden opgeslagen buiten de betalingsprovider)</li>
            </ul>
            <p>Wij verwerken geen bijzondere categorieën persoonsgegevens (zoals gezondheidsgegevens of strafrechtelijke gegevens).</p>
          </Section>

          <Section title="3. Doeleinden en grondslagen">
            <p>Wij verwerken uw persoonsgegevens op basis van de volgende rechtsgronden uit de Algemene Verordening Gegevensbescherming (AVG):</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong style={{ color: "#1A2A33" }}>Uitvoering van een overeenkomst (art. 6 lid 1 sub b AVG):</strong> Voor het verlenen van onze diensten en het opvolgen van aanvragen</li>
              <li><strong style={{ color: "#1A2A33" }}>Gerechtvaardigd belang (art. 6 lid 1 sub f AVG):</strong> Voor websiteanalyse ter verbetering van onze dienstverlening en voor zakelijke communicatie met bestaande relaties</li>
              <li><strong style={{ color: "#1A2A33" }}>Wettelijke verplichting (art. 6 lid 1 sub c AVG):</strong> Voor het bewaren van factuurgegevens conform de fiscale bewaarplicht</li>
              <li><strong style={{ color: "#1A2A33" }}>Toestemming (art. 6 lid 1 sub a AVG):</strong> Indien u zich aanmeldt voor nieuwsbrieven of marketingcommunicatie</li>
            </ul>
          </Section>

          <Section title="4. Bewaartermijnen">
            <p>Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor zij zijn verzameld:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong style={{ color: "#1A2A33" }}>Contactformuliergegevens:</strong> maximaal 2 jaar na het laatste contact, tenzij er een actieve samenwerking bestaat</li>
              <li><strong style={{ color: "#1A2A33" }}>Klantgegevens (actieve relaties):</strong> gedurende de looptijd van de overeenkomst en maximaal 2 jaar na beëindiging</li>
              <li><strong style={{ color: "#1A2A33" }}>Factuur- en boekhoudgegevens:</strong> 7 jaar conform de fiscale bewaarplicht</li>
              <li><strong style={{ color: "#1A2A33" }}>Websitestatistieken:</strong> geanonimiseerd en maximaal 26 maanden</li>
            </ul>
          </Section>

          <Section title="5. Delen met derden">
            <p>Wij verkopen uw persoonsgegevens nooit aan derden. Wij kunnen gegevens delen met:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong style={{ color: "#1A2A33" }}>Verwerkers:</strong> dienstverleners die namens ons handelen (zoals hostingproviders, e-mailsoftware en analyticstools). Met deze partijen sluiten wij een verwerkersovereenkomst af.</li>
              <li><strong style={{ color: "#1A2A33" }}>Meta Platforms (Facebook/Instagram):</strong> in het kader van het uitvoeren van advertentiecampagnes op uw opdracht</li>
              <li><strong style={{ color: "#1A2A33" }}>Overheidsinstanties:</strong> indien wij hiertoe wettelijk verplicht zijn</li>
            </ul>
            <p>Gegevens worden niet doorgegeven buiten de Europese Economische Ruimte (EER), tenzij passende waarborgen zijn getroffen conform de AVG.</p>
          </Section>

          <Section title="6. Beveiliging">
            <p>Wij nemen passende technische en organisatorische maatregelen ter bescherming van uw persoonsgegevens. Dit omvat:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Versleutelde verbindingen (HTTPS/TLS) voor gegevensoverdracht</li>
              <li>Beperkte toegang tot persoonsgegevens op basis van het need-to-know-principe</li>
              <li>Regelmatige evaluatie van onze beveiligingsmaatregelen</li>
              <li>Gebruik van beveiligde en betrouwbare cloudinfrastructuur</li>
            </ul>
          </Section>

          <Section title="7. Uw rechten">
            <p>Op grond van de AVG heeft u de volgende rechten met betrekking tot uw persoonsgegevens:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong style={{ color: "#1A2A33" }}>Recht op inzage:</strong> u kunt opvragen welke gegevens wij van u verwerken</li>
              <li><strong style={{ color: "#1A2A33" }}>Recht op rectificatie:</strong> u kunt onjuiste gegevens laten corrigeren</li>
              <li><strong style={{ color: "#1A2A33" }}>Recht op verwijdering:</strong> u kunt verzoeken uw gegevens te verwijderen ("recht om vergeten te worden")</li>
              <li><strong style={{ color: "#1A2A33" }}>Recht op beperking:</strong> u kunt de verwerking van uw gegevens laten beperken</li>
              <li><strong style={{ color: "#1A2A33" }}>Recht op dataportabiliteit:</strong> u kunt uw gegevens in een gestructureerd formaat ontvangen</li>
              <li><strong style={{ color: "#1A2A33" }}>Recht van bezwaar:</strong> u kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang</li>
              <li><strong style={{ color: "#1A2A33" }}>Recht om toestemming in te trekken:</strong> indien verwerking plaatsvindt op basis van toestemming</li>
            </ul>
            <p>
              U kunt uw verzoek indienen via <a href="mailto:info@deprocesdesigners.nl" style={{ color: "#8664FB" }}>info@deprocesdesigners.nl</a>. Wij reageren binnen 30 dagen.
            </p>
            <p>
              Heeft u een klacht over de wijze waarop wij uw gegevens verwerken? U kunt een klacht indienen bij de <strong style={{ color: "#1A2A33" }}>Autoriteit Persoonsgegevens</strong> via <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" style={{ color: "#8664FB" }}>www.autoriteitpersoonsgegevens.nl</a>.
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>Onze website maakt gebruik van de volgende soorten cookies:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong style={{ color: "#1A2A33" }}>Functionele cookies:</strong> noodzakelijk voor het correct functioneren van de website. Hiervoor is geen toestemming vereist.</li>
              <li><strong style={{ color: "#1A2A33" }}>Analytische cookies:</strong> wij gebruiken geanonimiseerde statistieken om het gebruik van de website te analyseren en te verbeteren. Deze cookies worden geanonimiseerd verwerkt en vereisen geen toestemming.</li>
            </ul>
            <p>Wij maken geen gebruik van tracking cookies of advertentiecookies op onze eigen website.</p>
          </Section>

          <Section title="9. Links naar andere websites">
            <p>Onze website kan links bevatten naar websites van derden. Wij zijn niet verantwoordelijk voor de privacypraktijken van deze websites. Wij adviseren u het privacybeleid van elke website die u bezoekt te lezen.</p>
          </Section>

          <Section title="10. Wijzigingen">
            <p>Wij behouden ons het recht voor dit privacybeleid te wijzigen. Materiële wijzigingen worden op deze pagina gepubliceerd met vermelding van de ingangsdatum. Bij significante wijzigingen informeren wij u actief via e-mail, voor zover wij uw e-mailadres beschikken.</p>
            <p>Dit privacybeleid is voor het laatst bijgewerkt in april 2026.</p>
          </Section>

          <Section title="11. Contact">
            <p>Voor vragen over dit privacybeleid of uw persoonsgegevens kunt u contact opnemen:</p>
            <p>
              <strong style={{ color: "#1A2A33" }}>De Proces Designers</strong><br />
              E-mail: <a href="mailto:info@deprocesdesigners.nl" style={{ color: "#8664FB" }}>info@deprocesdesigners.nl</a><br />
              Telefoon: +31 (0)6 51 36 95 37
            </p>
          </Section>

          {/* CTA back */}
          <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between"
            style={{ borderColor: "rgba(134,100,251,0.12)" }}>
            <p className="text-sm" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
              Bekijk ook onze <Link href="/algemene-voorwaarden" style={{ color: "#8664FB" }}>Algemene Voorwaarden</Link>.
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
