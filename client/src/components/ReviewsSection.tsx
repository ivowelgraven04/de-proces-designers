/*
 * ReviewsSection – De Proces Designers
 * Style: Liquid Tech / Google Reviews Widget look
 * Premium, clean, trust-building carousel
 */
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GOOGLE_LOGO = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg";

const reviews = [
  {
    name: "Jonathan Schouten",
    initials: "JS",
    color: "#34A853",
    rating: 5,
    text: "Met Ivo in contact gekomen. Veel duidelijk overleg gehad over een lead campagne wat de mogelijkheden waren en een gemiddelde aantal leads wat er ongeveer binnen zou komen de campagne moest eerst even opstarten maar toen hij eenmaal goed liep 1 woord geweldig. Als iets niet goed werkte in de campagne werd het meteen aangepast dit gebeurd ook gewoon. In het weekend. Een top bedrijf om mee samen te werken. Eerlijke mensen. En denken mee met alles. Tevens ook een nieuwe website afgenomen bij Ivo hij regelt alles van a tot z. Ivo zet hem op. 💪💪💪💪",
  },
  {
    name: "Demi Stekelenburg",
    initials: "DS",
    color: "#4285F4",
    rating: 5,
    text: "Samenwerken met De Proces Designers was precies wat we nodig hadden. Tot nu toe had ik zelf onze websites in elkaar gezet. Werkte prima, maar je merkt gewoon: het kan strakker, professioneler en vooral slimmer. Zij hebben niet alleen twee sterke websites neergezet voor Link2Talent en Link2Leads, maar vooral meegedacht in structuur, flow en conversie. Geen \"mooie plaatjes bouwen\", maar echt snappen wat er nodig is om van bezoeker naar klant te gaan. Communicatie was direct, snel schakelen en geen onnodig gedoe. Als je serieus bent over je business en je online fundament goed wil neerzetten, dan zit je hier goed.",
  },
  {
    name: "Steven Been",
    initials: "SB",
    color: "#34A853",
    rating: 5,
    text: "Wat een fijne samenwerking met Ivo en zijn team! Vanaf het eerste contact voelde het goed – open, duidelijk en vooral erg behulpzaam. Ze hebben me super goed geholpen met mijn marketingvraagstukken en echt met me meegedacht. Ivo is makkelijk in de omgang, denkt vooruit en je merkt aan alles dat hij passie heeft voor zijn vak. Dat werkt aanstekelijk! Alles werd tot in de puntjes geregeld en ik had er zelf nauwelijks omkijken naar. Echt top! Bedankt Ivo, voor de fijne samenwerking en het mooie resultaat!",
  },
  {
    name: "Josias Mallee",
    initials: "JM",
    color: "#47C8F5",
    rating: 5,
    text: "Super service, Ivo denkt goed mee in bepaalde processen waardoor we optimaal gebruik hebben kunnen maken van de winst die er te behalen viel op het gebied van optimalisatie en efficiëntie. Zeker aan te raden om samen te werken met dit bedrijf!",
  },
  {
    name: "Mathieu Kofflard",
    initials: "MK",
    color: "#4285F4",
    rating: 5,
    text: "Ivo en zijn club specialisten hebben mij enorm geholpen met het bouwen van een website. Ze namen mij echt alles uit handen (wel handig voor iemand met weinig affiniteit met computers 😅)! Het enige wat ik hoefde te doen was het aanleveren van content zoals foto's en teksten! De rest deden zij!! Echt geweldig! Ivo praat ook vol passie over zijn werk en dat is voor mij echt een pluspunt als je met iemand zaken wil doen! Ga zo door Ivo, en enorm bedankt voor het mooie resultaat!! 👌🏻",
  },
  {
    name: "Micah Stekelenburg",
    initials: "MS",
    color: "#EA4335",
    rating: 5,
    text: "Super service en kwaliteit! De Proces Designers hebben niet alleen een mooie en functionele website gemaakt, maar ook gezorgd voor extra tools zoals een WhatsApp-chatfunctie en missed call text back. Mijn klanten kunnen nu nog makkelijker contact opnemen, wat direct heeft geleid tot meer aanvragen. Aanrader!",
  },
  {
    name: "Teun Van Westen",
    initials: "TW",
    color: "#FBBC05",
    rating: 5,
    text: "Fantastische service en snelle levering! De Proces Designers hebben een professionele website gebouwd die perfect aansluit bij mijn bedrijf. De extra tools zoals de WhatsApp-chatfunctie en Google Ads-optimalisatie hebben direct resultaat opgeleverd. Zeer blij met de samenwerking!",
  },
  {
    name: "Juliette Gootzen",
    initials: "JG",
    color: "#8664FB",
    rating: 5,
    text: "Zeer professioneel team dat precies weet wat je bedrijf nodig heeft. De website die ze voor mij hebben gebouwd, ziet er strak uit en werkt perfect op alle apparaten. Daarnaast leveren ze geweldige support en denken ze echt mee over hoe je je online aanwezigheid kunt verbeteren. Absoluut 5 sterren waard!",
  },
  {
    name: "Garnett Antwi",
    initials: "GA",
    color: "#34A853",
    rating: 5,
    text: "Ik ben superblij met mijn nieuwe website, dankzij Proces Designers. Ze dachten echt met me mee, kwamen met toffe ideeën en vertaalden mijn visie perfect naar iets dat werkt én er goed uitziet. De communicatie was makkelijk en snel, en je merkt gewoon dat ze hart voor hun werk hebben. Bedankt Ivo je bent een topper!! Echt topservice – ik zou ze zo weer inschakelen!",
  },
  {
    name: "Dak Techniek",
    initials: "DT",
    color: "#EA4335",
    rating: 5,
    text: "Na een afspraak gemaakt te hebben hebben wij binnen 2 weken een nieuwe website mogen ontvangen en zijn erg tevreden over onze nieuwe website. Ons bedrijf is goed geholpen met alle vragen en het contact is goed verlopen.",
  },
  {
    name: "Michel Martins",
    initials: "MM",
    color: "#4285F4",
    rating: 5,
    text: "Dames en heren van de procesdesigners zijn echte vakmensen in hun werkgebied, goede en heldere communicatie over wat ze gaan doen en wat je van ze kan verwachten. Echt aanrader!!",
  },
  {
    name: "Allround Dakspecialist",
    initials: "AD",
    color: "#FBBC05",
    rating: 5,
    text: "Wij zijn erg tevreden over onze nieuwe website. Het contact verliep goed en nog steeds ook zelfs wanneer de site klaar is en er zijn nog vragen worden ze netjes beantwoord.",
  },
  {
    name: "Maus Waltmans",
    initials: "MW",
    color: "#8664FB",
    rating: 5,
    text: null,
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text && review.text.length > 180;
  const displayText = review.text
    ? (!isLong || expanded ? review.text : review.text.slice(0, 180) + "…")
    : null;

  return (
    <div
      className="flex flex-col h-full p-5 rounded-2xl select-none"
      style={{
        background: "white",
        border: "1px solid rgba(134,100,251,0.1)",
        boxShadow: "0 4px 24px rgba(134,100,251,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        minWidth: "280px",
        maxWidth: "320px",
        width: "300px",
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-700 text-sm shrink-0"
          style={{ background: review.color }}
        >
          {review.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-heading font-700 text-sm truncate" style={{ color: "#1A2A33" }}>
            {review.name}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <StarRating count={review.rating} />
          </div>
        </div>
        {/* Google G icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" className="shrink-0">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>

      {/* Review text */}
      <div className="flex-1">
        {displayText ? (
          <p className="text-sm leading-relaxed" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>
            {displayText}
            {isLong && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="ml-1 font-medium"
                style={{ color: "#8664FB", fontFamily: "Inter, sans-serif" }}
              >
                {expanded ? "Minder" : "Meer"}
              </button>
            )}
          </p>
        ) : (
          <p className="text-sm italic" style={{ color: "#a0aec0", fontFamily: "Inter, sans-serif" }}>
            5 sterren beoordeling
          </p>
        )}
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  const totalRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-20" style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 text-xs font-medium"
                style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB", fontFamily: "Montserrat, sans-serif" }}>
                Klantbeoordelingen
              </div>
              <h2 className="font-heading mb-1" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, color: "#1A2A33" }}>
                Wat Onze Klanten Zeggen
              </h2>
              <p className="text-sm" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                Echte ervaringen van ondernemers die wij hebben geholpen groeien.
              </p>
            </div>

            {/* Google rating summary */}
            <div
              className="flex items-center gap-4 px-5 py-4 rounded-2xl shrink-0"
              style={{
                background: "white",
                border: "1px solid rgba(134,100,251,0.1)",
                boxShadow: "0 4px 20px rgba(134,100,251,0.08)",
              }}
            >
              <img src={GOOGLE_LOGO} alt="Google" className="h-5 w-auto" />
              <div className="w-px h-8" style={{ background: "rgba(134,100,251,0.15)" }} />
              <div className="text-center">
                <div className="font-heading font-800 text-2xl" style={{ color: "#1A2A33", lineHeight: 1 }}>
                  {totalRating}
                </div>
                <StarRating count={5} />
                <div className="text-xs mt-0.5" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                  15+ beoordelingen
                </div>
              </div>
            </div>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={fadeUp} className="relative">
            {/* Scroll buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              style={{ background: "white", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB" }}
              aria-label="Vorige"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              style={{ background: "white", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB" }}
              aria-label="Volgende"
            >
              <ChevronRight size={18} />
            </button>

            {/* Cards scroll container */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingLeft: "4px",
                paddingRight: "4px",
              }}
            >
              {reviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
