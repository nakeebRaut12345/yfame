const caseStudies = [
  {
    name: "Dr. Umang Shah",
    result: "1M+ organic views every month",
    img: "https://framerusercontent.com/images/5eHJQlTUQYkvL2XpMymeQY5ybU.webp?width=874&height=596",
  },
  {
    name: "Dr. Rohini Patil",
    result: "0 → 100k on YouTube in 12 months",
    img: "https://framerusercontent.com/images/r22pepKsdJo3dnKjZtfGRB5AG8.webp?width=736&height=552",
  },
  {
    name: "Saloni Arora",
    result: "15k → 125k in 3 months",
    img: "https://framerusercontent.com/images/VQ1PSxvSp21l6hPTQhso2AsRw.webp?width=800&height=712",
  },
];

export function Doctors() {
  const doubledCaseStudies = [...caseStudies, ...caseStudies];

  return (
    <section id="doctors" className="py-15 md:py-25 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="capitalize text-[3rem] font-bold leading-[0.98] tracking-[-0.03em] max-w-5xl mx-auto">
            We work with india's top <span className="text-serif text-gradient-warm">0.1% of doctors</span> to build their social media presence.
          </h2>
        </div>

        <div className="mt-8 overflow-x-hidden overflow-y-visible">
          <div className="flex w-max ticker-cards gap-6 items-stretch py-10">
            {doubledCaseStudies.map((c, i) => (
              <figure
                key={`${c.name}-${i}`}
                className="group relative z-0 w-[min(85vw,440px)] shrink-0 rounded-3xl overflow-hidden glass transition-all duration-500 hover:z-20 hover:scale-115 hover:border-primary/40"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                <figcaption className="p-6">
                  <div className="text-2xl font-semibold tracking-tight">{c.name}</div>
                  <div className="mt-2 text-primary text-sm font-sans font-normal uppercase tracking-[0.15em]">{c.result}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:hello@yfame.com"
            className="inline-flex items-center gap-2 text-sm font-sans font-normal uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition"
          >
            <span className="w-8 h-px bg-current" />
            Detailed case study deck
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
