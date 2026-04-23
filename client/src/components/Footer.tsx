/*
 * Footer – De Proces Designers
 * Style: Liquid Tech / Dark navy base with gradient accents
 */
import { Link } from "wouter";
import { Mail, Phone, ArrowRight } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663503644974/J7Udx3KWkNc6vFgqgyECYk/DPDLogoWebsite_9eb05d54.png";

export default function Footer() {
  return (
    <footer style={{ background: "#1A2A33" }} className="text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={LOGO_URL}
              alt="De Proces Designers"
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}>
              Waar Proces & Design Samenkomt. Wij helpen lokale bedrijven groeien met slimme marketing, leadgeneratie en automatisering.
            </p>
            <Link href="/contact" className="btn-primary text-sm inline-flex">
              Start Vandaag <ArrowRight size={16} />
            </Link>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="font-heading font-700 text-sm uppercase tracking-widest mb-5" style={{ color: "#8664FB" }}>
              Navigatie
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/diensten", label: "Diensten" },
                { href: "/over-ons", label: "Over Ons" },
                { href: "/werkwijze", label: "Werkwijze" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#47C8F5]"
                    style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-700 text-sm uppercase tracking-widest mb-5" style={{ color: "#8664FB" }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0" style={{ color: "#47C8F5" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}>
                  info@deprocesdesigners.nl
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "#47C8F5" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "Inter, sans-serif" }}>
                  +31 (0) 6513 69537
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.4)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <span>© {new Date().getFullYear()} De Proces Designers · KvK 85905119 · Alle rechten voorbehouden.</span>
          <div className="flex gap-6">
            <Link href="/privacybeleid" className="hover:text-[#47C8F5] transition-colors">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden" className="hover:text-[#47C8F5] transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
