/* ============================================================
   FILMS SECTION — Black Glass Auto
   Window Protection Films: QDP CHARCOAL, HP CHARCOAL, QDP BLACK CERAMIC
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const FILMS = [
  {
    name: "QDP CHARCOAL",
    subtitle: "Folie Auto Premium",
    description: "Dublu strat, colorat în profunzime",
    features: [
      "Nu devine mov în timp",
      "99% protecție UV",
      "Respinge până la 42% din energia solară totală",
      "Certificată RAR și TÜV",
      "Nu interferează cu sistemele radio, GPS și telefonie mobilă",
    ],
    color: "from-gray-800 to-gray-900",
  },
  {
    name: "HP CHARCOAL",
    subtitle: "Folie Auto Premium",
    description: "Două straturi - metalic și colorat",
    features: [
      "Nu devine mov în timp",
      "99% protecție UV",
      "Respinge până la 61% din energia solară totală",
      "Certificată RAR și TÜV",
      "Performanță superioară",
    ],
    color: "from-gray-700 to-gray-800",
  },
  {
    name: "QDP BLACK CERAMIC",
    subtitle: "Folie Nano Ceramică Premium",
    description: "Înaltă performanță și transparență",
    features: [
      "Transparență 6%",
      "Reduce 75% din radiația IR",
      "99% protecție UV",
      "Energie totală respinsă: 67%",
      "Nano ceramică de înaltă performanță",
    ],
    color: "from-black to-gray-900",
  },
];

export default function FilmsSection() {
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
      id="folii-geamuri"
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
            Protecție Premium
          </span>
          <div className="flex items-end gap-6">
            <h2
              className="font-display text-5xl lg:text-6xl font-bold text-white leading-none"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              FOLII PENTRU
              <br />
              <span className="text-[#e31c1c]">GEAMURI</span>
            </h2>
            <div className="hidden lg:block flex-1 h-px bg-white/10 mb-3" />
          </div>
          <p className="text-white/60 mt-6 max-w-2xl text-lg">
            Protecție UV și termică de înaltă performanță pentru vehiculul tău
          </p>
        </div>

        {/* Films Grid */}
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {FILMS.map((film, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden transition-all duration-500 hover:scale-105`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${film.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* Top section */}
                <div>
                  <h3
                    className="font-display text-3xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {film.name}
                  </h3>
                  <p
                    className="font-label text-xs tracking-widest uppercase text-[#e31c1c] mb-4"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {film.subtitle}
                  </p>
                  <p className="text-white/80 text-sm mb-6">{film.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {film.features.map((feature, fidx) => (
                    <div key={fidx} className="flex gap-3 items-start">
                      <Check size={18} className="text-[#e31c1c] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>


              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-[#e31c1c]/50 transition-colors duration-500 pointer-events-none" />
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
            Certificări și Standarde
          </p>
          <p className="text-white/80">
            Toate foliile noastre sunt certificate RAR și TÜV, garantând cea mai înaltă calitate și siguranță. Protecția UV și termică oferă confort și protecție pentru ocupanții vehiculului.
          </p>
        </div>
      </div>
    </section>
  );
}
