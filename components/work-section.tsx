import Link from "next/link"
import { SectionTitle } from "./section-title"

const channels = [
  {
    title: "Ai Youngs",
    description:
      "Is channel par aapko behtareen AI animations, 3D character designs aur mobile-optimized 9:16 vertical video shorts dekhne ko milenge.",
    linkHref: "https://youtube.com/@aiyoungs?si=dIHnVaJLX0YrGjg5",
    linkLabel: "Watch Shorts →",
  },
  {
    title: "Creative Portfolio",
    description:
      "Mera personal AI visual collection aur experimental digital art jo maine apne creative journey mein banaya hai.",
    linkHref: "https://www.instagram.com/mr_cool.009?igsh=cmt5cTIzMHVvMW0=",
    linkLabel: "Check Out →",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-20 px-[8%]" style={{ backgroundColor: "rgb(15 17 21)" }}>
      <div className="text-center">
        <SectionTitle>My Official Channel</SectionTitle>
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-2">
        {channels.map((channel) => (
          <div
            key={channel.title}
            className="channel-card w-full max-w-sm p-9 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1.5"
          >
            <h3 className="font-serif text-xl text-white mb-3">{channel.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {channel.description}
            </p>
            <Link
              href={channel.linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold text-xs uppercase tracking-wider hover:text-white transition-colors duration-300"
            >
              {channel.linkLabel}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
