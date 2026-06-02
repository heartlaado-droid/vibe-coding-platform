interface SectionTitleProps {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="font-serif text-3xl text-primary mb-8 tracking-[2px] text-balance after:block after:w-[50px] after:h-0.5 after:bg-primary after:mt-3 after:mx-auto">
      {children}
    </h2>
  )
}
