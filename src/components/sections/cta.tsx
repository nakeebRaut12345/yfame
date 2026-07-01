export function Cta() {
  return (
    <section className="py-15 md:py-25 border-t border-border relative overflow-hidden bg-mesh grain">
      <span className="grain-after absolute inset-0" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="capitalize max-w-5xl mx-auto text-center px-6 relative z-10">
        <div className="capitalize text-3xl md:text-4xl font-bold leading-tight mb-8 ">We think <span className="text-serif italic">strategically</span>, not <span className="text-serif italic">differently</span></div>
        <h2 className="text-[4rem] font-bold leading-[0.95] tracking-[-0.04em]">
          One message to <span className="text-serif text-gradient-warm">yfame</span> could lead to the best career decision you've ever made.
        </h2>
        <a
          href="mailto:akshaykedar.work@gmail.com"
          className="group relative mt-14 inline-flex items-center gap-3 overflow-hidden px-10 py-5 rounded-full bg-primary text-primary-foreground font-medium text-lg transition-all duration-500 hover:scale-[1.05] shadow-[0_20px_60px_-15px_var(--color-primary)] hover:shadow-[0_0_32px_0_oklch(0.65_0.19_250/0.55),0_24px_64px_-12px_var(--color-primary)]"
        >
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/15 blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <span className="relative">akshaykedar.work@gmail.com</span>
          <span className="relative transition-transform group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </section>
  );
}
