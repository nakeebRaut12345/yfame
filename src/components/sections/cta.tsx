export function Cta() {
  return (
    <section className="py-15 md:py-25 border-t border-border relative overflow-hidden bg-mesh grain">
      <span className="grain-after absolute inset-0" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="capitalize max-w-5xl mx-auto text-center px-6 relative z-10">
        <div className="capitalize text-3xl md:text-4xl font-bold leading-[1.5] mb-8 ">We think <span className="text-serif italic">strategically</span>, not <span className="text-serif italic">differently</span></div>
        <h2 className="text-[2.25rem] sm:text-[4rem] font-bold leading-[1.1] tracking-[-0.02em] sm:tracking-[-0.04em] text-balance">
          One message to <span className="text-serif text-gradient-warm">YFAME</span> could lead to the best career decision you've ever made.
        </h2>
        <div className="mt-14 grid w-full max-w-xs md:max-w-lg mx-auto grid-cols-1 md:grid-cols-2 gap-5">
          <a
            href="mailto:info@yfame.in"
            className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden px-6 md:px-10 py-5 rounded-full bg-primary text-primary-foreground font-medium text-xl md:text-lg transition-all duration-500 hover:scale-[1.05] shadow-[0_20px_60px_-15px_var(--color-primary)] hover:shadow-[0_0_32px_0_oklch(0.65_0.19_250/0.55),0_24px_64px_-12px_var(--color-primary)]"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/15 blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <img
              src="https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/E-mail/3D/e-mail_3d.png"
              alt=""
              className="relative size-9 shrink-0 object-contain"
            />
            <span className="relative lowercase">info@yfame.in</span>
            <span className="relative transition-transform group-hover:translate-x-1">↗</span>
          </a>
          <a
            href="https://www.instagram.com/yfame.in?igsh=MXZsZW83ZnB3dDZseA=="
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] px-6 md:px-10 py-5 text-xl md:text-lg font-medium text-white shadow-[0_20px_60px_-15px_#dd2a7b] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_32px_0_#dd2a7b88,0_24px_64px_-12px_#8134af]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <img
              src="https://framerusercontent.com/images/XyWhrdsJVEsHQzjxyyym1s7jAWg.png?width=500&height=500"
              alt=""
              className="relative size-9 shrink-0 rounded-md object-cover"
            />
            <span className="relative">@yfame</span>
            <span className="relative transition-transform group-hover:translate-x-1">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
