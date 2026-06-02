import Link from "next/link"
import { SectionTitle } from "./section-title"

const socialLinks = [
  {
    href: "https://youtube.com/@aiyoungs?si=dIHnVaJLX0YrGjg5",
    label: "YouTube",
  },
  {
    href: "https://www.instagram.com/mr_cool.009?igsh=cmt5cTIzMHVvMW0=",
    label: "Instagram",
  },
  {
    href: "https://wa.me/917255944245",
    label: "WhatsApp",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-[8%] text-center bg-background">
      <SectionTitle>{"Let's Connect"}</SectionTitle>

      <p className="text-muted-foreground text-base mb-3">
        Location: Bandasinga, Barkatha, Hazaribagh
      </p>
      <p className="text-muted-foreground text-base mb-8">
        Kisi bhi collaboration, support ya queries ke liye aap mujhse jud sakte hain.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-foreground font-semibold text-base transition-all duration-300 hover:text-primary border-b border-transparent hover:border-primary pb-0.5"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
