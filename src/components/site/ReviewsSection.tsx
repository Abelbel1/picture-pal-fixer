/* ============================================================
   REVIEWS SECTION — Black Glass Auto Industrial Noir
   Customer testimonials with 5-star ratings
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Taran Andrei",
    text: "Seriozitate și profesionalism! Recomand!",
    rating: 5,
  },
  {
    id: 2,
    name: "Calin Albici",
    text: "Serviciu de calitate superioară. Foarte mulțumit de rezultat!",
    rating: 5,
  },
  {
    id: 3,
    name: "Andrei Popovici",
    text: "Echipă profesională și atentă la detalii. Recomand cu plăcere!",
    rating: 5,
  },
];

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`bg-[#131313] border border-white/8 hover:border-[#e31c1c]/40 p-6 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-[#e31c1c] text-[#e31c1c]" />
        ))}
      </div>

      {/* Review text */}
      <p
        className="font-body text-white/70 leading-relaxed mb-4 italic"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        "{review.text}"
      </p>

      {/* Author */}
      <div className="pt-4 border-t border-white/10">
        <span
          className="font-display text-sm font-semibold text-white"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {review.name}
        </span>
        <span
          className="font-label text-xs text-[#e31c1c] block"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          CLIENT VERIFICAT
        </span>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
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
    <section id="recenzii" className="relative py-24 bg-[#111111]" ref={ref}>
      {/* Left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#e31c1c]/40 to-transparent" />

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
            Ce spun clienții
          </span>
          <div className="flex items-end gap-6">
            <h2
              className="font-display text-5xl lg:text-6xl font-bold text-white leading-none"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              RECENZII
              <br />
              <span className="text-[#e31c1c]">5 STELE</span>
            </h2>
            <div className="hidden lg:block flex-1 h-px bg-white/10 mb-3" />
          </div>
          <p
            className="font-body text-white/50 max-w-xl mt-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Clienții noștri apreciază seriozitatea, profesionalismul și calitatea serviciilor pe care le oferim.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>

        {/* Add Review Section */}
        <div
          className={`mt-16 p-8 border border-white/10 bg-white/5 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <h3
            className="font-display text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Adăugaţi o Recenzie
          </h3>
          <p
            className="font-body text-white/60 mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Spuneţi-ne părerea despre serviciile noastre! Recenziile dumneavoastră ne ajută să ne îmbunătăţim și să ajutam alţi clienţi.
          </p>
          <form className="space-y-4">
            <div>
              <label
                className="font-label text-xs tracking-widest uppercase text-white/60 block mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Nume
              </label>
              <input
                type="text"
                placeholder="Introduceţi numele dumneavoastră"
                className="w-full bg-[#0d0d0d] border border-white/10 text-white placeholder-white/30 px-4 py-2 focus:outline-none focus:border-[#e31c1c]/60 transition-colors"
              />
            </div>
            <div>
              <label
                className="font-label text-xs tracking-widest uppercase text-white/60 block mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Recenzie
              </label>
              <textarea
                placeholder="Spuneţi-ne ce v-a plăcut la serviciile noastre..."
                rows={4}
                className="w-full bg-[#0d0d0d] border border-white/10 text-white placeholder-white/30 px-4 py-2 focus:outline-none focus:border-[#e31c1c]/60 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e31c1c] hover:bg-[#c71818] text-white font-label text-sm tracking-widest uppercase px-8 py-3 transition-all duration-300"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Trimite Recenzie
            </button>
          </form>
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <p
            className="font-body text-white/50 mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Lăsaţi și dumneavoastră o recenzie pe Facebook
          </p>
          <a
            href="https://www.facebook.com/people/Black-Glass-Auto-Curtici/100067030166606/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-[#e31c1c]/60 text-white/60 hover:text-white px-8 py-3 font-label text-sm tracking-wider uppercase transition-all duration-300"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Vizitaţi Facebook →
          </a>
        </div>
      </div>
    </section>
  );
}
