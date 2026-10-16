import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/site/Navbar";
import HeroSection from "@/components/site/HeroSection";
import ServicesSection from "@/components/site/ServicesSection";
import AboutSection from "@/components/site/AboutSection";
import ReviewsSection from "@/components/site/ReviewsSection";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";

const title = "Black Glass Auto Curtici — Folie Auto & Colantări Profesionale";
const description =
  "Folie auto omologată RAR, colantări, înlocuire folii și recondiționări faruri în Curtici, Arad. Peste 10 ani experiență. Programări: 0741 995 007.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
