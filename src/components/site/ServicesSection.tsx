import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Images, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

function ServiceCard({ service }: { service: typeof services[number] }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(Boolean(entry?.isIntersecting)), { rootMargin: "-25% 0px -25% 0px", threshold: 0.25 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <Link ref={ref} to="/servicii/$serviceId" params={{ serviceId: service.id }} className={`service-card group block min-w-0 overflow-hidden rounded-md border border-border bg-card transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${inView ? "is-in-view" : ""}`}>
      <div className="relative aspect-[16/9] overflow-hidden md:aspect-[16/10]">
        <img src={service.image} alt={service.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 bg-background/80 px-2 py-1 font-label text-xs text-foreground">{service.tag}</span>
        <div className="service-gallery-overlay absolute inset-0 flex flex-col items-center justify-center gap-2 bg-primary/80 text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Images size={28} aria-hidden="true" />
          <span className="font-label text-lg font-semibold">Apasă să vezi galeria</span>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between gap-2"><h3 className="font-display text-2xl font-bold text-card-foreground">{service.title}</h3><ArrowUpRight size={20} className="shrink-0 text-primary" /></div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground md:line-clamp-none">{service.description}</p>
        <ul className="mt-5 hidden space-y-2 md:block">{service.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle size={14} className="shrink-0 text-primary" />{feature}</li>)}</ul>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section id="servicii" className="relative scroll-mt-20 bg-background py-10 md:py-24">
      <div className="container">
        <div className="mb-6 md:mb-12">
          <span className="mb-2 block font-label text-xs uppercase text-primary">Ce oferim</span>
          <h2 className="font-display text-4xl font-bold leading-none text-foreground md:text-6xl">SERVICIILE <span className="text-primary">NOASTRE</span></h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground md:text-base">Fiecare serviciu este realizat cu materiale premium și tehnici profesionale, garantând rezultate de calitate superioară.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-10">
          <Button asChild size="lg"><a href="tel:+40741995007"><Phone />0741 995 007</a></Button>
          <Button asChild variant="outline" size="lg"><Link to="/materiale">Materiale folosite<ArrowUpRight /></Link></Button>
        </div>
      </div>
    </section>
  );
}
