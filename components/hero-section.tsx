import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-5"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.85), rgba(10,11,13,1)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        className="font-serif text-4xl md:text-6xl text-white tracking-[4px] mb-2 text-balance"
        style={{ textShadow: "0px 4px 20px rgba(212, 175, 55, 0.3)" }}
      >
        KULDEEP YADAV
      </h1>
      <p className="text-primary text-base md:text-lg font-light tracking-[2px] mb-9">
        Digital Creator &amp; AI Concept Artist
      </p>
      <Link
        href="#gallery"
        className="inline-block px-9 py-3 bg-primary text-primary-foreground font-semibold rounded-full uppercase tracking-wider text-sm transition-all duration-300 hover:bg-white hover:text-background hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:-translate-y-0.5"
      >
        View My Gallery
      </Link>
    </section>
  )
}
