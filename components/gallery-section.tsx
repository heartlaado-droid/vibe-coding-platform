import Image from "next/image"
import { SectionTitle } from "./section-title"

const galleryImages = [
  {
    src: "https://i.ibb.co/tTWzytrr/IMG-20251102-WA0056.jpg",
    alt: "AI Art 1 - Kuldeep Yadav",
  },
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=500",
    alt: "AI Art 2 - Digital Creation",
  },
  {
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=500",
    alt: "AI Art 3 - Visual Design",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-[8%] text-center bg-background">
      <SectionTitle>My AI Art &amp; Creations</SectionTitle>
      <p className="text-muted-foreground mb-8">
        Mere banaye gaye kuch behtareen hyper-realistic 3D designs
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl"
            style={{ border: "2px solid rgb(26 29 36)" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={280}
              className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              style={{
                display: "block",
              }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
              style={{
                border: "2px solid rgb(212 175 55)",
                boxShadow: "0 5px 15px rgba(212, 175, 55, 0.2)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
