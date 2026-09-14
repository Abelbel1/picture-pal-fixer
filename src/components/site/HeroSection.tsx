/* ============================================================
   HERO SECTION — Black Glass Auto Industrial Noir
   Full-screen dark hero with diagonal cut, animated text, red accents
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Phone, Star } from "lucide-react";

const HERO_IMAGE = "/gallery/folii-geamuri/1.jpeg";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    document.querySelector("#servicii")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 93%, 0 100%)",
        paddingBottom: "8rem",
        marginBottom: "-4rem",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Black Glass Auto hero"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-[#0d0d0d]/40" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
        {/* Carbon texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.03) 2px,
              rgba(255,255,255,0.03) 4px
            )`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span
              className="font-label text-xs tracking-[0.3em] uppercase text-[#e31c1c]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Curtici, Arad · România
            </span>
            <span className="h-px w-12 bg-[#e31c1c]" />
            <span
              className="font-label text-xs tracking-[0.3em] uppercase text-white/50"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Armolan Global
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              transitionDelay: "0.2s",
            }}
          >
            BLACK
            <br />
            <span className="text-[#e31c1c]">GLASS</span>
            <br />
            <span className="text-white/90">AUTO</span>
          </h1>

          {/* Red accent line */}
          <div
            className={`h-1 bg-[#e31c1c] mb-6 transition-all duration-700 ${
              visible ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
            style={{ transitionDelay: "0.4s" }}
          />

          {/* Subtitle */}
          <p
            className={`font-body text-lg md:text-xl text-white/70 max-w-xl mb-8 leading-relaxed transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.5s", fontFamily: "'DM Sans', sans-serif" }}
          >
            Folie auto omologată RAR și colantări profesionale. Peste{" "}
            <strong className="text-white">10 ani de experiență</strong> în protecția
            și personalizarea vehiculelor dumneavoastră.
          </p>

          {/* Stats Row */}
          <div
            className={`flex flex-wrap gap-8 mb-10 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            {[
              { value: "10+", label: "Ani Experiență" },
              { value: "RAR", label: "Omologat" },
              { value: "Pro", label: "Armolan Global" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="font-display text-3xl font-bold text-[#e31c1c]"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-label text-xs tracking-widest uppercase text-white/50"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.7s" }}
          >
            <a
              href="tel:+40741995007"
              className="flex items-center gap-2 bg-[#e31c1c] hover:bg-[#c41515] text-white px-8 py-4 font-label text-sm tracking-wider uppercase transition-all duration-300 btn-shimmer"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              <Phone size={16} />
              Programează Acum
            </a>
            <button
              onClick={scrollToServices}
              className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/70 hover:text-white px-8 py-4 font-label text-sm tracking-wider uppercase transition-all duration-300"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Serviciile Noastre
            </button>
          </div>

          {/* Rating */}
          <div
            className={`flex items-center gap-2 mt-8 transition-all duration-700 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.9s" }}
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="text-[#e31c1c] fill-[#e31c1c]" />
              ))}
            </div>
            <span
              className="font-body text-sm text-white/50"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Servicii de top · Curtici, Arad
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-white/80 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
