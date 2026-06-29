import { useEffect, useRef } from "react";

function useMouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, []);
  return ref;
}

export function Hero() {
  const heroRef = useMouseGlow();

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center justify-center bg-mesh overflow-hidden px-6 pt-14.5"
      style={{
        backgroundImage:
          "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), oklch(0.70 0.19 250 / 0.18), transparent 40%)",
      }}
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-60 float-slow"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.20 250 / 0.5), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[620px] h-[620px] rounded-full blur-3xl opacity-50 float-slow-2"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.18 220 / 0.5), transparent 70%)" }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay pointer-events-none" />

      {/* <div
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans font-normal"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        <span>For India's Top 0.1% of Doctors</span>
      </div> */}
      {/* <div
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans font-normal"
        style={{ writingMode: "vertical-rl" }}
      >
        <span>YouTube · Instagram</span>
      </div> */}

      <div className="relative max-w-[1200px] mx-auto text-center fade-up">
        {/* <div className="chip mx-auto mb-10">
          <span className="w-1 h-1 rounded-full bg-primary" />
          50M+ organic views every month
        </div> */}

        <h1 className="text-[7rem] font-bold leading-[0.92] tracking-[-0.04em]">
          <span className="block">
            Human Beings Are <span className="text-serif text-gradient-warm">Predictable.</span>
          </span>
          <span className="block mt-1">
            Content is Too.
          </span>
        </h1>

        <p className="mt-10 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The secret to virality isn't chasing algorithms.
          <br />
          It's understanding <span className="text-foreground">Human Behaviour</span> and mastering the <span className="text-foreground">Fundamentals</span>.
        </p>

        {/* <p className="mt-6 text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto font-sans font-normal uppercase tracking-[0.18em]">
          Social media for India's Top 0.1% of doctors · YouTube & Instagram
        </p> */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 mb-8">
          <a
            href="mailto:hello@yfame.com"
            className="group relative px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:scale-[1.03] transition-all duration-300 shadow-[0_10px_40px_-10px_var(--color-primary)]"
          >
            See case studies
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">↗</span>
          </a>
          {/* <a href="#doctors" className="px-7 py-3.5 rounded-full glass hover:bg-secondary/40 transition">
            See case studies
          </a> */}
        </div>
      </div>

      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans font-normal">
        <span>Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div> */}
    </section>
  );
}
