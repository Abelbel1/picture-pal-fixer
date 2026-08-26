/* ============================================================
   ABOUT SECTION — Black Glass Auto Industrial Noir
   Asymmetric layout: image left, text right. Stats with red accents.
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Award, Clock, MapPin, CheckCircle2 } from "lucide-react";

const ABOUT_IMAGE = "/__l5e/assets-v1/cb60e4c1-9fb4-46db-943b-3040f803f3ec/chrome-delete-67.jpeg";
const FACEBOOK_BANNER = "/__l5e/assets-v1/c4a2aa7b-6ac5-4cd1-a5b8-1e05be0ded45/reconditionari-faruri-11.jpeg";
const ABOUT_BANNER = "/__l5e/assets-v1/c4a2aa7b-6ac5-4cd1-a5b8-1e05be0ded45/reconditionari-faruri-11.jpeg";

const stats = [
  { icon: Clock, value: "10+", label: "Ani Experiență" },
  { icon: Award, value: "RAR", label: "Omologat Oficial" },
  { icon: MapPin, value: "Curtici", label: "Arad, România" },
];

const qualities = [
  "Folii omologate RAR — conformitate garantată",
  "Marca Armolan Global — calitate premium",
  "Tehnici profesionale de aplicare fără bule",
  "Consultanță gratuită pentru alegerea foliei potrivite",
  "Programări flexibile — respectăm timpul dumneavoastră",
];

export default function AboutSection() {
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
    <section id="despre" className="relative py-24 bg-[#111111]" ref={ref}>
      {/* Subtle red left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#e31c1c]/40 to-transparent" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div
            className={`relative transition-all duration-800 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "0.1s" }}
          >
            {/* Main image - Facebook Banner */}
            <div className="relative overflow-hidden">
              <img
                src={ABOUT_BANNER}
                alt="Black Glass Auto Services"
                className="w-full h-[500px] object-cover"
              />
              {/* Diagonal overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e31c1c]/10 to-transparent" />
            </div>

            {/* Stats overlay card */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-[#0d0d0d] border border-white/10 p-6 grid grid-cols-3 gap-4 shadow-2xl">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <Icon size={18} className="text-[#e31c1c] mx-auto mb-1" />
                    <div
                      className="font-display text-xl font-bold text-white"
                      style={{ fontFamily: "'Rajdhani', sans-serif" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="font-label text-[10px] tracking-wider uppercase text-white/40"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Red corner accent */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#e31c1c]" />
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-800 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span
              className="font-label text-xs tracking-[0.3em] uppercase text-[#e31c1c] block mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Povestea noastră
            </span>
            <h2
              className="font-display text-5xl lg:text-6xl font-bold text-white leading-none mb-6"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              DESPRE
              <br />
              <span className="text-[#e31c1c]">BLACK GLASS</span>
            </h2>

            {/* Red accent line */}
            <div className="h-1 w-16 bg-[#e31c1c] mb-6" />

            <p
              className="font-body text-white/70 leading-relaxed mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Aplicăm folii auto omologate RAR, marca{" "}
              <strong className="text-white">Armolan Global</strong>. Cu peste{" "}
              <strong className="text-white">10 ani de experiență</strong> în domeniu,
              astăzi pornim sub un brand nou — dar cu aceeași seriozitate și standarde
              ridicate care ne-au definit mereu.
            </p>
            <p
              className="font-body text-white/60 leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Fiecare mașină tratată este o dovadă a dedicării noastre față de calitate.
              Nu facem compromisuri — folosim doar materiale certificate și tehnici
              profesionale pentru a garanta un rezultat impecabil.
            </p>

            {/* Qualities list */}
            <ul className="space-y-3 mb-8">
              {qualities.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#e31c1c] shrink-0 mt-0.5" />
                  <span
                    className="font-body text-sm text-white/70"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {q}
                  </span>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+40741995007"
                className="flex items-center gap-2 bg-[#e31c1c] hover:bg-[#c41515] text-white px-6 py-3 font-label text-sm tracking-wider uppercase transition-all duration-300 btn-shimmer"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Raul — 0741 995 007
              </a>
              <a
                href="https://www.facebook.com/people/Black-Glass-Auto-Curtici/100067030166606/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/20 hover:border-[#e31c1c]/60 text-white/60 hover:text-white px-6 py-3 font-label text-sm tracking-wider uppercase transition-all duration-300"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
