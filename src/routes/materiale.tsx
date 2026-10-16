import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import BrandsSection from "@/components/site/BrandsSection";
import FilmsSection from "@/components/site/FilmsSection";
const title = "Materiale folosite — Mărci și folii premium | Black Glass Auto Curtici";
const description = "Mărcile premium pentru colantări Chrome Off și foliile QDP Charcoal, HP Charcoal și QDP Black Ceramic folosite la Black Glass Auto Curtici.";
export const Route = createFileRoute("/materiale")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: MaterialsPage,
});
function MaterialsPage() {
  return <div className="min-h-screen bg-background"><Navbar /><main className="materials-page pt-24 md:pt-32"><div className="container"><Button asChild variant="ghost" className="mb-5 px-0 hover:bg-transparent"><Link to="/" hash="servicii"><ArrowLeft />Înapoi la servicii</Link></Button><h1 className="font-display text-4xl font-bold text-foreground md:text-6xl">MATERIALE <span className="text-primary">FOLOSITE</span></h1></div><BrandsSection /><FilmsSection /></main><Footer /></div>;
}
