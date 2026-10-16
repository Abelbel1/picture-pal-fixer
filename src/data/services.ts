import { Shield, Layers, Wrench, CheckCircle } from "lucide-react";
import gallery from "./gallery.json";

const TINTING_IMG = "/gallery/folii-geamuri/3.jpeg";
const WRAPPING_IMG = "/gallery/chrome-delete/4.jpeg";
const FILM_REPLACEMENT_IMG = "/gallery/folii-geamuri/11.jpeg";
const HEADLIGHT_POLISH_IMG = "/gallery/reconditionari-faruri/2.jpeg";
const HEADLIGHT_PROTECTION_IMG = "/gallery/reconditionari-faruri/7.jpeg";

export const services = [
  {
    id: "folie",
    galleryCategory: "Folii geamuri" as const,
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
    galleryCategory: "Chrome delete" as const,
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
    galleryCategory: "Folii geamuri" as const,
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
    galleryCategory: "Reconditionari faruri" as const,
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
    galleryCategory: "Reconditionari faruri" as const,
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


export function getService(id: string) { return services.find((service) => service.id === id); }
export function getServiceImages(id: string): string[] {
  const service = getService(id);
  return service ? gallery[service.galleryCategory] : [];
}
