/* ============================================================
   FOOTER — Black Glass Auto Industrial Noir
   Dark footer with brand info, quick links, contact
   ============================================================ */
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Facebook } from "lucide-react";

export default function Footer() {

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="font-display text-2xl font-bold text-white block leading-none"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                BLACK GLASS
              </span>
              <span
                className="font-label text-xs tracking-[0.25em] text-[#e31c1c] uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Auto Curtici
              </span>
            </div>
            <div className="h-1 w-8 bg-[#e31c1c] mb-4" />
            <p
              className="font-body text-sm text-white/50 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Servicii profesionale de folie auto omologată RAR și colantări auto.
              Marca Armolan Global. Curtici, Arad, România.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-label text-xs tracking-[0.25em] uppercase text-white/40 mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Navigare rapidă
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Acasă", href: "#hero" },
                { label: "Servicii", href: "#servicii" },
                { label: "Despre Noi", href: "#despre" },
                { label: "Materiale folosite", href: "/materiale" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href === "/materiale" ? "/materiale" : "/"}
                    hash={link.href.startsWith("#") ? link.href.slice(1) : undefined}
                    className="font-body text-sm text-white/50 hover:text-[#e31c1c] transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-label text-xs tracking-[0.25em] uppercase text-white/40 mb-4"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+40741995007"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 group"
              >
                <Phone size={14} className="text-[#e31c1c]" />
                <span
                  className="font-body text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  0741 995 007
                </span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <MapPin size={14} className="text-[#e31c1c]" />
                <span
                  className="font-body text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Curtici, Arad, România
                </span>
              </div>
              <a
                href="https://www.facebook.com/people/Black-Glass-Auto-Curtici/100067030166606/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200"
              >
                <Facebook size={14} className="text-[#e31c1c]" />
                <span
                  className="font-body text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Facebook
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="font-body text-xs text-white/25"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Black Glass Auto Curtici. Toate drepturile rezervate.
          </p>
          <p
            className="font-label text-xs tracking-widest uppercase text-white/20"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Armolan Global · RAR Omologat
          </p>
        </div>
      </div>
    </footer>
  );
}
