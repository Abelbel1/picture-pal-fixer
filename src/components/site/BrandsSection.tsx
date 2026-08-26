/* ============================================================
   BRANDS SECTION — Black Glass Auto
   Decal Protection Brands: AVERY DENNISON, GLOBAL, REGEN, MOTIVA, KPMF
   ============================================================ */
import { useEffect, useRef, useState } from "react";

const BRANDS = [
  {
    name: "AVERY DENNISON PPF",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498639300/SwbogNZPAXb3k3JD2casbJ/AVERY DENNISON PPF_1cba7013.png",
    description: "Paint Protection Film Premium",
  },
  {
    name: "GLOBAL",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498639300/SwbogNZPAXb3k3JD2casbJ/GLOBAL_b3642d18.png",
    description: "Window Films Professional",
  },
  {
    name: "REGEN",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498639300/SwbogNZPAXb3k3JD2casbJ/REGEN_c1e4805b.png",
    description: "Instant Self-Healing PPF",
  },
  {
    name: "MOTIVA PPF",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498639300/SwbogNZPAXb3k3JD2casbJ/MOTIVA_41be73bd.png",
    description: "Premium Protection Films",
  },
  {
    name: "KPMF",
    logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663498639300/SwbogNZPAXb3k3JD2casbJ/KPMF_f6a09a3a.png",
    description: "Professional Vinyl Wraps",
  },
];

export default function BrandsSection() {
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
    <section
      id="colantari"
      className="relative py-24 bg-[#0d0d0d]"
      ref={ref}
      style={{
        clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        marginTop: "-2rem",
        marginBottom: "-2rem",
      }}
    >
      <div className="container relative z-10">
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
            Mărci Premium
          </span>
          <div className="flex items-end gap-6">
            <h2
              className="font-display text-5xl lg:text-6xl font-bold text-white leading-none"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              COLANTARI
              <br />
              <span className="text-[#e31c1c]">CHROME OFF</span>
            </h2>
            <div className="hidden lg:block flex-1 h-px bg-white/10 mb-3" />
          </div>
          <p className="text-white/60 mt-6 max-w-2xl text-lg">
            Parteneri de încredere pentru protecție și personalizare vehiculelor
          </p>
        </div>

        {/* Brands Grid */}
        <div
          className={`grid md:grid-cols-5 gap-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden transition-all duration-500 hover:scale-105`}
            >
              {/* Card Background */}
              <div className="relative p-6 bg-gradient-to-br from-gray-900 to-black border border-white/10 group-hover:border-[#e31c1c]/50 transition-all duration-500 h-full flex flex-col items-center justify-center text-center">
                {/* Logo Placeholder */}
                <div className="w-full h-24 mb-4 bg-white/5 rounded flex items-center justify-center overflow-hidden group-hover:bg-white/10 transition-colors duration-300">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Brand Name */}
                <h3
                  className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#e31c1c] transition-colors duration-300"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {brand.name}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-xs">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        <div
          className={`mt-16 p-8 border border-white/10 bg-white/5 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <p
            className="font-label text-xs tracking-widest uppercase text-[#e31c1c] mb-3"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Calitate și Profesionalism
          </p>
          <p className="text-white/80">
            Folosim doar mărci de renume internațional, certificate și testate, pentru a asigura cea mai bună calitate și durabilitate a lucrărilor noastre. Fiecare brand este selectat cu grijă pentru a oferi rezultate excepționale.
          </p>
        </div>
      </div>
    </section>
  );
}
