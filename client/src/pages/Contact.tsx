/*
 * Contact Page – De Proces Designers
 * Style: Liquid Tech / Futuristic SaaS
 * Focus: Sterke CTA, formulier, conversiegericht
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Clock, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503644974/J7Udx3KWkNc6vFgqgyECYk/dpd-cta-bg-Lb4Gg2j5Go7MK7hxFMRdVj.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const benefits = [
  "Gratis en vrijblijvend gesprek",
  "Concrete aanbevelingen voor jouw situatie",
  "Geen verkooppraatje, maar echte waarde",
  "Respons binnen 24 uur",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    bedrijf: "",
    dienst: "",
    bericht: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/VsiiyLuWIeAdlGvpDn5z/webhook-trigger/683a2e37-96a2-4d05-bf10-a88520a0a41e";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          naam: formData.naam,
          email: formData.email,
          telefoon: formData.telefoon,
          bedrijf: formData.bedrijf,
          dienst: formData.dienst,
          bericht: formData.bericht,
          timestamp: new Date().toISOString(),
          bron: "Website contactformulier – deprocesdesigners.nl",
        }),
      });
    } catch (_) {
      // Webhook errors zijn stil — formulier altijd als succesvol tonen
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Page Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f6ff 0%, #f0fbff 100%)" }}
      >
        <div className="orb orb-purple w-80 h-80 -right-10 top-0 opacity-20" />
        <div className="orb orb-cyan w-60 h-60 -left-10 bottom-0 opacity-15" />
        <div className="container relative z-10">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-medium"
              style={{ background: "rgba(134,100,251,0.1)", border: "1px solid rgba(134,100,251,0.2)", color: "#8664FB", fontFamily: "Montserrat, sans-serif" }}>
              Contact
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#1A2A33" }}>
              Laten We <span className="dpd-gradient-text">Praten</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg max-w-xl"
              style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
              Plan een gratis strategiegesprek en ontdek hoe wij jouw bedrijf kunnen laten groeien.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">

            {/* Left: Info */}
            <AnimatedSection>
              <motion.div variants={fadeUp}>
                <h2 className="font-heading font-800 text-2xl mb-4" style={{ color: "#1A2A33" }}>
                  Gratis Strategiegesprek
                </h2>
                <p className="text-base mb-8 leading-relaxed" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                  In een gesprek van 30 minuten analyseren wij jouw situatie en geven wij concrete aanbevelingen — volledig gratis en zonder verplichtingen.
                </p>

                <div className="space-y-3 mb-8">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} style={{ color: "#8664FB" }} className="shrink-0" />
                      <span className="text-sm" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ background: "rgba(134,100,251,0.06)", border: "1px solid rgba(134,100,251,0.12)" }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, #8664FB, #47C8F5)", color: "white" }}>
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="font-heading font-700 text-sm" style={{ color: "#1A2A33" }}>Reactietijd</div>
                      <div className="text-xs" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>Wij reageren binnen 24 uur</div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ background: "rgba(134,100,251,0.06)", border: "1px solid rgba(134,100,251,0.12)" }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "linear-gradient(135deg, #8664FB, #47C8F5)", color: "white" }}>
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <div className="font-heading font-700 text-sm" style={{ color: "#1A2A33" }}>Gespreksduur</div>
                      <div className="text-xs" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>30 minuten, volledig gratis</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail size={16} style={{ color: "#8664FB" }} />
                    <span className="text-sm" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>info@deprocesdesigners.nl</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} style={{ color: "#8664FB" }} />
                    <span className="text-sm" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>+31 (0) 6513 69537</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} style={{ color: "#8664FB" }} />
                    <span className="text-sm" style={{ color: "#4a5568", fontFamily: "Inter, sans-serif" }}>Nederland</span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection>
              <motion.div
                variants={fadeUp}
                className="dpd-card p-8"
                style={{ borderRadius: "16px" }}
              >
                {submitted ? (
                  <div className="text-center py-8">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ background: "linear-gradient(135deg, #8664FB, #47C8F5)" }}
                    >
                      <CheckCircle2 size={32} color="white" />
                    </div>
                    <h3 className="font-heading font-800 text-xl mb-3" style={{ color: "#1A2A33" }}>
                      Bericht Ontvangen!
                    </h3>
                    <p className="text-sm" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                      Bedankt voor je bericht. Wij nemen binnen 24 uur contact met je op voor een gratis strategiegesprek.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-heading font-800 text-lg mb-1" style={{ color: "#1A2A33" }}>
                        Plan je Gratis Gesprek
                      </h3>
                      <p className="text-xs" style={{ color: "#718096", fontFamily: "Inter, sans-serif" }}>
                        Vul het formulier in en wij nemen snel contact op.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-600 mb-1.5" style={{ color: "#1A2A33" }}>
                          Naam *
                        </label>
                        <input
                          type="text"
                          name="naam"
                          required
                          value={formData.naam}
                          onChange={handleChange}
                          placeholder="Jouw naam"
                          className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                          style={{
                            border: "1.5px solid rgba(134,100,251,0.2)",
                            fontFamily: "Inter, sans-serif",
                            color: "#1A2A33",
                            background: "rgba(248,246,255,0.5)",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#8664FB")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(134,100,251,0.2)")}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-heading font-600 mb-1.5" style={{ color: "#1A2A33" }}>
                          Bedrijfsnaam
                        </label>
                        <input
                          type="text"
                          name="bedrijf"
                          value={formData.bedrijf}
                          onChange={handleChange}
                          placeholder="Jouw bedrijf"
                          className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                          style={{
                            border: "1.5px solid rgba(134,100,251,0.2)",
                            fontFamily: "Inter, sans-serif",
                            color: "#1A2A33",
                            background: "rgba(248,246,255,0.5)",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "#8664FB")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(134,100,251,0.2)")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-600 mb-1.5" style={{ color: "#1A2A33" }}>
                        E-mailadres *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jouw@email.nl"
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                        style={{
                          border: "1.5px solid rgba(134,100,251,0.2)",
                          fontFamily: "Inter, sans-serif",
                          color: "#1A2A33",
                          background: "rgba(248,246,255,0.5)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#8664FB")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(134,100,251,0.2)")}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-600 mb-1.5" style={{ color: "#1A2A33" }}>
                        Telefoonnummer
                      </label>
                      <input
                        type="tel"
                        name="telefoon"
                        value={formData.telefoon}
                        onChange={handleChange}
                        placeholder="+31 6 00 00 00 00"
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                        style={{
                          border: "1.5px solid rgba(134,100,251,0.2)",
                          fontFamily: "Inter, sans-serif",
                          color: "#1A2A33",
                          background: "rgba(248,246,255,0.5)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#8664FB")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(134,100,251,0.2)")}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-600 mb-1.5" style={{ color: "#1A2A33" }}>
                        Interesse in
                      </label>
                      <select
                        name="dienst"
                        value={formData.dienst}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                        style={{
                          border: "1.5px solid rgba(134,100,251,0.2)",
                          fontFamily: "Inter, sans-serif",
                          color: formData.dienst ? "#1A2A33" : "#a0aec0",
                          background: "rgba(248,246,255,0.5)",
                        }}
                      >
                        <option value="">Selecteer een dienst</option>
                        <option value="leadgeneratie">Leadgeneratie</option>
                        <option value="funnels">Funnels & Conversie</option>
                        <option value="automatisering">Marketing Automatisering</option>
                        <option value="webdesign">Webdesign</option>
                        <option value="alles">Volledige Marketing Aanpak</option>
                        <option value="advies">Strategisch Advies</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-600 mb-1.5" style={{ color: "#1A2A33" }}>
                        Vertel ons meer
                      </label>
                      <textarea
                        name="bericht"
                        value={formData.bericht}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Beschrijf kort jouw situatie en wat je wilt bereiken..."
                        className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all resize-none"
                        style={{
                          border: "1.5px solid rgba(134,100,251,0.2)",
                          fontFamily: "Inter, sans-serif",
                          color: "#1A2A33",
                          background: "rgba(248,246,255,0.5)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#8664FB")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(134,100,251,0.2)")}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-sm"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Versturen...
                        </>
                      ) : (
                        <>
                          Gratis Gesprek Aanvragen <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center" style={{ color: "#a0aec0", fontFamily: "Inter, sans-serif" }}>
                      Door te versturen ga je akkoord met ons privacybeleid. Geen spam, beloofd.
                    </p>
                  </form>
                )}
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `url(${CTA_BG})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "rgba(26,42,51,0.85)" }} />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            <motion.h2 variants={fadeUp} className="font-heading mb-3 text-white"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800 }}>
              Liever Direct Bellen?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base mb-6"
              style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}>
              Wij zijn bereikbaar op werkdagen van 9:00 tot 18:00.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="tel:+31651369537"
              className="btn-primary inline-flex"
            >
              <Phone size={18} /> +31 (0) 6513 69537
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
