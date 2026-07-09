import { useScrollReveal, scrollRevealClasses } from "../../hooks/use-scroll-reveal";

const caseStudies = [
  {
    name: "Dr. Umang Shah",
    result: "1M+ organic views every month",
    img: "/umang_shah.png",
  },
  {
    name: "Dr. Jay Shah",
    result: "800k+ organic views first month",
    img: "/jay_shah.png",
  },
  {
    name: "Ameya Innovex",
    result: "1M+ impressions",
    img: "/innovex.png",
  },
];

export function Doctors() {
  const doubledCaseStudies = [...caseStudies, ...caseStudies];
  const { ref: headingRef, visible: headingVisible } = useScrollReveal<HTMLHeadingElement>();

  return (
    <section id="doctors" className="py-15 md:py-25 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 text-center">
          <h2
            ref={headingRef}
            className={` text-[3rem] font-bold leading-[1.1] tracking-[-0.03em] max-w-5xl mx-auto ${scrollRevealClasses(headingVisible)}`}
          >
            <div>We Work With India's Top <span className="text-serif text-gradient-warm">0.1% of Doctors</span></div>
             To Their Social Media Presence.
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
            href=""
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
