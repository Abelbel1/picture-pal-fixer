/* ============================================================
   SERVICES SECTION — Black Glass Auto Industrial Noir
   Staggered service cards with red accent borders on hover
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Shield, Layers, Wrench, CheckCircle } from "lucide-react";

const TINTING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498639300/SwbogNZPAXb3k3JD2casbJ/service_tinting-4bZk7tojpepbRgm2oCr3yL.webp";
const WRAPPING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498639300/SwbogNZPAXb3k3JD2casbJ/service_wrapping-HcxZCbVaPQVVKuBRXYNq2h.webp";
const FILM_REPLACEMENT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498639300/SwbogNZPAXb3k3JD2casbJ/service_film_replacement-8RjARUm5LpmWnktnyoSZwt.webp";
const HEADLIGHT_POLISH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498639300/SwbogNZPAXb3k3JD2casbJ/service_headlight_polish-23xyt6PTQq7gmQiuriCPjQ.webp";
const HEADLIGHT_PROTECTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663498639300/SwbogNZPAXb3k3JD2casbJ/service_headlight_protection-HmnPxfngYWEJEDq8a6CUqi.webp";

const services = [
  {
    id: "folie",
    icon: Shield,
    title: "Folie Auto",
    subtitle: "Geamuri cu Protecție",
    description:
      "Aplicăm folii auto omologate RAR, marca Armolan Global. Folia protejează interiorul mașinii de razele UV, reduce temperatura în habitaclu și oferă intimitate sporită.",
    features: [
      "Omologat RAR",
      "Marca Armolan Global",
      "Protecție UV 99%",
      "Diverse grade de transparență",
      "Garanție aplicare",
    ],
    image: TINTING_IMG,
    tag: "Cel mai solicitat",
  },
  {
    id: "colantare",
    icon: Layers,
    title: "Colantări Auto",
    subtitle: "Colantări Profesionale",
    description:
      "Personalizăm vehiculul dumneavoastră cu folii de colantare de înaltă calitate. De la schimbarea culorii la design-uri personalizate, oferim soluții complete de branding auto.",
    features: [
      "Folii premium de colantare",
      "Design personalizat",
      "Schimbare culoare vehicul",
      "Branding comercial",
      "Finisaj profesional",
    ],
    image: WRAPPING_IMG,
    tag: "Personalizare totală",
  },
  {
    id: "inlocuire",
    icon: Wrench,
    title: "Înlocuire Folii",
    subtitle: "Folii Decolorate & Neomologate",
    description:
      "Îndepărtăm foliile vechi, decolorate sau neomologate și le înlocuim cu folii noi, certificate RAR. Asigurăm conformitatea vehiculului cu normele în vigoare.",
    features: [
      "Îndepărtare folii vechi",
      "Verificare conformitate RAR",
      "Aplicare folii noi omologate",
      "Consultanță gratuită",
      "Intervenție rapidă",
    ],
    image: FILM_REPLACEMENT_IMG,
    tag: "Conformitate RAR",
  },
  {
    id: "polish",
    icon: Shield,
    title: "Polish Faruri",
    subtitle: "Restaurare Faruri",
    description:
      "Restaurăm farurile opacizate și deteriorate prin polisare profesională. Îmbunătățim vizibilitatea și aspectul estetic al vehiculului dumneavoastră.",
    features: [
      "Îndepărtare opacitate",
      "Polisare profesională",
      "Restaurare strălucire",
      "Protecție UV",
      "Rezultat imediat vizibil",
    ],
    image: HEADLIGHT_POLISH_IMG,
    tag: "Restaurare",
  },
  {
    id: "protectie",
    icon: CheckCircle,
    title: "Folie Protecție Faruri",
    subtitle: "Protecție Transparentă",
    description:
      "Aplicăm folie protectoare transparentă pe faruri pentru a preveni deteriorarea și UV-ul. Menține farurile în stare perfectă și ușor de curățat.",
    features: [
      "Folie protectoare transparentă",
      "Protecție UV și mecanică",
      "Ușor de curățat",
      "Durabilitate înaltă",
      "Fără schimbare aspect",
    ],
    image: HEADLIGHT_PROTECTION_IMG,
    tag: "Protecție",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative bg-[#131313] border transition-all duration-500 overflow-hidden ${
        hovered ? "border-[#e31c1c]/60 shadow-[0_0_30px_rgba(227,28,28,0.15)]" : "border-white/8"
      } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transition: "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s, box-shadow 0.3s" }}
    >
      {/* Tag */}
      <div
        className="absolute top-4 right-4 z-10 font-label text-xs tracking-widest uppercase px-3 py-1 bg-[#e31c1c] text-white"
        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      >
        {service.tag}
      </div>

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/30 to-transparent" />
        {/* Icon overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 bg-[#e31c1c] flex items-center justify-center">
            <Icon size={22} className="text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-1">
          <span
            className="font-label text-xs tracking-[0.25em] uppercase text-[#e31c1c]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {service.subtitle}
          </span>
        </div>
        <h3
          className="font-display text-2xl font-bold text-white mb-3"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {service.title}
        </h3>
        <p
          className="font-body text-sm text-white/60 leading-relaxed mb-5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#e31c1c] shrink-0" />
              <span
                className="font-body text-sm text-white/70"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Red bottom accent line */}
        <div
          className={`mt-6 h-[2px] bg-[#e31c1c] transition-all duration-500 ${
            hovered ? "w-full" : "w-8"
          }`}
        />
      </div>
    </div>
  );
}

export default function ServicesSection() {
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
      id="servicii"
      className="relative py-24 bg-[#0d0d0d]"
      style={{
        clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)",
        paddingTop: "8rem",
        paddingBottom: "8rem",
        marginTop: "-2rem",
        marginBottom: "-2rem",
      }}
    >
      {/* Carbon texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.015) 2px,
            rgba(255,255,255,0.015) 4px
          )`,
        }}
      />

      <div className="container relative z-10" ref={ref}>
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
            Ce oferim
          </span>
          <div className="flex items-end gap-6">
            <h2
              className="font-display text-5xl lg:text-6xl font-bold text-white leading-none"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              SERVICIILE
              <br />
              <span className="text-[#e31c1c]">NOASTRE</span>
            </h2>
            <div className="hidden lg:block flex-1 h-px bg-white/10 mb-3" />
          </div>
          <p
            className="font-body text-white/50 max-w-xl mt-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Fiecare serviciu este realizat cu materiale premium și tehnici profesionale,
            garantând rezultate de calitate superioară.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <a
            href="tel:+40741995007"
            className="inline-flex items-center gap-3 bg-[#e31c1c] hover:bg-[#c41515] text-white px-10 py-4 font-label text-sm tracking-wider uppercase transition-all duration-300 btn-shimmer"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            0741 995 007
          </a>
        </div>
      </div>
    </section>
  );
}
