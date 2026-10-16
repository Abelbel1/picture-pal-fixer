import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { getService, getServiceImages } from "@/data/services";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ServiceGallery from "@/components/site/ServiceGallery";

export const Route = createFileRoute("/servicii/$serviceId")({
  loader: ({ params }) => {
    const service = getService(params.serviceId);
    if (!service) throw notFound();
    return { title: service.title, description: service.description, images: getServiceImages(params.serviceId) };
  },
  head: ({ loaderData }) => {
    const title = `${loaderData?.title ?? "Serviciu indisponibil"} — Galerie | Black Glass Auto Curtici`;
    const description = loaderData?.description ?? "Lucrări Black Glass Auto Curtici.";
    return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  component: ServicePage,
});

function ServicePage() {
  const { title, description, images } = Route.useLoaderData();
  return <div className="min-h-screen bg-background"><Navbar /><main className="container pb-12 pt-24 md:pb-20 md:pt-32"><Button asChild variant="ghost" className="mb-6 px-0 hover:bg-transparent"><Link to="/" hash="servicii"><ArrowLeft />Înapoi la servicii</Link></Button><div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div className="max-w-2xl"><p className="mb-2 font-label text-sm text-primary">GALERIE · {images.length} FOTOGRAFII</p><h1 className="font-display text-4xl font-bold md:text-6xl">{title}</h1><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p></div><Button asChild size="lg"><a href="tel:+40741995007"><Phone />Programează acum</a></Button></div><ServiceGallery images={images} title={title} /></main><Footer /></div>;
}
