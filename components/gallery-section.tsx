import Image from "next/image"
import { SectionTitle } from "./section-title"

const galleryImages = [
  {
    src: "https://i.ibb.co/gbqVXVv1/IMG-20260520-013355.png",
    alt: "Friend 1",
  },
  {
    src: "https://i.ibb.co/0yW4ZDSr/IMG-20251102-WA0189.jpg",
    alt: "Friend 2",
  },
  {
    src: "https://i.ibb.co/7tGLBnsV/IMG-20260426-WA0008.jpg",
    alt: "Friend 3",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-[8%] text-center bg-background">
      <SectionTitle>Friends</SectionTitle>
      <p className="text-muted-foreground mb-8">
        Mere doston ki kuch yaadgaar aur khaas tasveerein
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
              className="w-full h-[380px] object-cover transition-all duration-400"
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
