/* ============================================================
   NAVBAR — Black Glass Auto Industrial Noir Design
   Transparent on top, opaque dark on scroll. Red accent on active links.
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Acasă", href: "#hero" },
  { label: "Servicii", href: "#servicii" },
  { label: "Despre Noi", href: "#despre" },
  { label: "Galerie", href: "#galerie" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 overflow-hidden border-2 border-[#e31c1c]/60 group-hover:border-[#e31c1c] transition-colors duration-300">
              <img
                src={logo}
                alt="Black Glass Auto"
                className="w-full h-full object-contain bg-black"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <span
                className="font-display text-xl lg:text-2xl font-bold text-white tracking-wide leading-none block"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                BLACK GLASS
              </span>
              <span
                className="font-label text-xs tracking-[0.25em] text-[#e31c1c] uppercase block"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Auto Curtici
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative font-label text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-300 group"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] bg-[#e31c1c] w-0 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+40741995007"
              className="flex items-center gap-2 bg-[#e31c1c] hover:bg-[#c41515] text-white px-4 py-2 font-label text-sm tracking-wider uppercase transition-all duration-300 btn-shimmer"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <Phone size={14} />
              0741 995 007
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0d0d0d]/98 border-t border-white/5`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left font-label text-base tracking-widest uppercase text-white/70 hover:text-white hover:bg-white/5 px-4 py-3 transition-colors duration-200"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+40741995007"
            className="flex items-center gap-2 bg-[#e31c1c] text-white px-4 py-3 mt-2 font-label text-sm tracking-wider uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            <Phone size={14} />
            0741 995 007
          </a>
        </div>
      </div>
    </nav>
  );
}
