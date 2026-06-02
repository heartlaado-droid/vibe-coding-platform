import Image from "next/image"
import { SectionTitle } from "./section-title"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-[8%] text-center" style={{ backgroundColor: "rgb(15 17 21)" }}>
      <div className="flex flex-col items-center">
        <Image
          src="https://i.ibb.co/tTWzytrr/IMG-20251102-WA0056.jpg"
          alt="Kuldeep Yadav"
          width={160}
          height={160}
          className="rounded-full object-cover mb-5"
          style={{
            border: "4px solid rgb(212 175 55)",
            boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)",
          }}
        />
        <SectionTitle>About Me</SectionTitle>
        <p className="max-w-2xl text-base leading-relaxed text-slate-300 mx-auto">
          Ram Ram bhaiyo! Main Kuldeep Yadav, ek digital content creator aur AI artist hoon. Mujhe
          hyper-realistic 3D images, cinematic short videos aur unique visual storytelling banana
          pasand hai. YouTube aur alag-alag digital platforms ke zariye main apne creative ideas ko
          duniya ke samne lata hoon.
        </p>
      </div>
    </section>
  )
}
