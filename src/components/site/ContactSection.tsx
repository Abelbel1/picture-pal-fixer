/* ============================================================
   CONTACT SECTION — Black Glass Auto Industrial Noir
   Dark contact card with red accents, phone CTA, map placeholder
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Phone, MapPin, Clock, Facebook, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon / Programări",
    value: "0741 995 007",
    href: "tel:+40741995007",
    sub: "Raul — disponibil zilnic",
  },
  {
    icon: MapPin,
    label: "Locație",
    value: "Strada Dorobanţilor 42",
    href: "https://maps.app.goo.gl/UtsPzjQtEoq9wMFS9",
    sub: "315200 Curtici, Arad",
  },
  {
    icon: Clock,
    label: "Program",
    value: "Luni — Sâmbătă",
    href: null,
    sub: "08:00 — 18:00",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Black Glass Auto Curtici",
    href: "https://www.facebook.com/people/Black-Glass-Auto-Curtici/100067030166606/",
    sub: "276 urmăritori",
  },
];

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="relative py-24 bg-[#111111]" ref={ref}>
      {/* Right border accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#e31c1c]/40 to-transparent" />

      <div className="container">
        {/* Section Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="font-label text-xs tracking-[0.3em] uppercase text-[#e31c1c] block mb-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Vino la noi
          </span>
          <div className="flex items-end gap-6">
            <h2
              className="font-display text-5xl lg:text-6xl font-bold text-white leading-none"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              CONTACT &
              <br />
              <span className="text-[#e31c1c]">PROGRAMĂRI</span>
            </h2>
            <div className="hidden lg:block flex-1 h-px bg-white/10 mb-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Cards */}
          <div
            className={`space-y-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const content = (
                <div
                  key={info.label}
                  className="flex items-start gap-4 bg-[#131313] border border-white/8 hover:border-[#e31c1c]/40 p-5 transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="w-10 h-10 bg-[#e31c1c]/10 border border-[#e31c1c]/30 flex items-center justify-center shrink-0 group-hover:bg-[#e31c1c]/20 transition-colors duration-300">
                    <Icon size={18} className="text-[#e31c1c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="font-label text-xs tracking-widest uppercase text-white/40 block mb-1"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {info.label}
                    </span>
                    <span
                      className="font-display text-lg font-semibold text-white block"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                      {info.value}
                    </span>
                    <span
                      className="font-body text-sm text-white/50"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {info.sub}
                    </span>
                  </div>
                  {info.href && (
                    <ExternalLink size={14} className="text-white/20 group-hover:text-[#e31c1c] transition-colors duration-300 shrink-0 mt-1" />
                  )}
                </div>
              );

              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={info.label}>{content}</div>
              );
            })}

            {/* Big CTA */}
            <div className="mt-6 bg-[#e31c1c] p-6 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 4px,
                    rgba(255,255,255,0.1) 4px,
                    rgba(255,255,255,0.1) 8px
                  )`,
                }}
              />
              <p
                className="font-display text-2xl font-bold text-white mb-2 relative z-10"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                Sună acum pentru o programare!
              </p>
              <p
                className="font-body text-white/80 text-sm mb-4 relative z-10"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Raul vă stă la dispoziție pentru consultanță gratuită și programări.
              </p>
              <a
                href="tel:+40741995007"
                className="relative z-10 inline-flex items-center gap-2 bg-white text-[#e31c1c] px-6 py-3 font-display text-xl font-bold hover:bg-white/90 transition-colors duration-300"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                <Phone size={18} />
                0741 995 007
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative h-full min-h-[400px] bg-[#131313] border border-white/8 overflow-hidden">
              {/* Embedded Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.5!2d21.3!3d46.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47464e1b0f5e0001%3A0x0!2sStrada%20Doroban%C5%A3ilor%2042%2C%20315200%20Curtici%2C%20Arad!5e0!3m2!1sro!2sro!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px", filter: "grayscale(1) invert(0.9) contrast(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Black Glass Auto Curtici — Locație"
              />
              {/* Map overlay label */}
              <div className="absolute top-4 left-4 bg-[#0d0d0d]/90 border border-[#e31c1c]/40 px-4 py-2">
                <span
                  className="font-label text-xs tracking-widest uppercase text-[#e31c1c]"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Strada Dorobanţilor 42
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
