/* ============================================================
   GALLERY SECTION — Black Glass Auto Industrial Noir
   3 Subcategories with Grid Layout
   ============================================================ */
import { useState } from "react";
import { X } from "lucide-react";

// Local gallery images from public folder
const GALLERY_DATA = {
  "Reconditionari faruri": [
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.30 (1).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.30.jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.31 (1).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.31.jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.32 (1).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.32 (2).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.32 (3).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.32.jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.33 (1).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.33 (2).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.33 (3).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.33.jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.34.jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.35 (1).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.35 (2).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.35.jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.36 (1).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.36 (2).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.36.jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.37 (1).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.37 (2).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.37.jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.38 (1).jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.38.jpeg",
    "/gallery/reconditionari-faruri/WhatsApp Image 2026-04-28 at 16.43.39.jpeg",
  ],
  "Folii geamuri": [
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.47 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.47 (2).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.47.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.56.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.57 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.57 (2).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.57.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.58 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.58 (2).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.58 (3).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.58 (4).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.42.58.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.01 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.01 (2).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.01.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.02 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.02 (2).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.02 (3).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.02.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.03 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.03 (2).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.03.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.04 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.04 (2).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.04 (3).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.04.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.05 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.05 (2).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.05 (3).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.05.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.06 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.06 (2).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.06.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.19 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.19.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.20 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.20 (2).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.20 (3).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.20.jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.21 (1).jpeg",
    "/gallery/folii-geamuri/WhatsApp Image 2026-04-28 at 16.43.21.jpeg",
  ],
  "Chrome delete": [
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.46.jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.47 (1).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.47 (2).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.47 (3).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.47.jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.48 (1).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.48 (2).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.48 (3).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.48.jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.49 (1).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.49 (2).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.49 (3).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.43.49.jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.00 (1).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.00 (2).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.00 (3).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.00.jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.01 (1).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.01.jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.02 (1).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.02.jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.03 (1).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.03 (2).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.03.jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.04 (1).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.04 (2).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.04.jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.05 (1).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.05 (2).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.05 (3).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.05.jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.06 (1).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.06 (2).jpeg",
    "/gallery/chrome-delete/WhatsApp Image 2026-04-28 at 16.44.06.jpeg",
  ],
};

type CategoryName = keyof typeof GALLERY_DATA;

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories: CategoryName[] = ["Reconditionari faruri", "Folii geamuri", "Chrome delete"];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container">
        {/* Main Gallery View */}
        {selectedCategory === null ? (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                REZULTATELE NOASTRE
              </h2>
              <p className="text-lg text-muted-foreground">
                Alege o categorie pentru a vedea toate pozele
              </p>
            </div>

            {/* Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="group relative overflow-hidden rounded-lg h-64 cursor-pointer transform transition-transform hover:scale-105"
                >
                  {/* Category Image */}
                  <img
                    src={GALLERY_DATA[category][0]}
                    alt={category}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category}
                      </h3>
                      <p className="text-gray-200">
                        {GALLERY_DATA[category].length} imagini
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Sub-Gallery Header */}
            <div className="mb-8 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedImage(null);
                }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                ← Înapoi
              </button>
              <h2 className="text-3xl font-bold text-foreground">
                {selectedCategory}
              </h2>
              <div className="w-24" /> {/* Spacer for alignment */}
            </div>

            {/* Grid Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {GALLERY_DATA[selectedCategory].map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`${selectedCategory} ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                </button>
              ))}
            </div>
          </>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
