import { useScrollReveal, scrollRevealClasses } from "../../hooks/use-scroll-reveal";

const philosophies = [
  {
    num: "01",
    title: "Specialisation",
    // tag: "One craft. Mastered.",
    body: `Social media growth is not a side offering for us. Many agencies primarily operate as ad agencies,
influencer agencies, or full-service marketing firms and offer social media growth as an extension of their
services. At YFAME, social media growth is all we do. We have chosen one craft and dedicated ourselves
to mastering it.`,
  },
  {
    num: "02",
    title: "Strategy First",
    // tag: "Think before you shoot.",
    body: `Great content starts long before production. Every decision should be driven by clarity, positioning, and
intent. We put strategy at the centre of everything we do.`,
  },
  {
    num: "03",
    title: "Audiences, Not Algorithms",
    // tag: "Behaviour > algorithm.",
    body: `Platforms evolve and algorithms change. Human behaviour doesn't. The creators that win are the ones
that deeply understand their audiences and create content that genuinely resonates with them.`,
  },
];

function PhilosophyCard({ item }: { item: (typeof philosophies)[number] }) {
  // const [isSpinning, setIsSpinning] = useState(false);
  // const hasSpunRef = useRef(false);

  // const handleMouseEnter = () => {
  //   if (hasSpunRef.current || isSpinning) return;
  //   hasSpunRef.current = true;
  //   setIsSpinning(true);
  // };

  // const handleMouseLeave = () => {
  //   hasSpunRef.current = false;
  // };

  // const handleAnimationEnd = (e: React.AnimationEvent<HTMLElement>) => {
  //   if (e.animationName !== "philosophy-card-spin") return;
  //   setIsSpinning(false);
  // };

  return (
    <article
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // onAnimationEnd={handleAnimationEnd}
      className={`philosophy-card group relative z-0 p-10 rounded-[2rem] glass overflow-hidden hover:z-20 hover:border-primary/40 transition-[border-color,box-shadow] duration-500 transition-all duration-500 hover:z-20 hover:scale-110 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_12px_40px_-12px_var(--color-primary)]`}
    >
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="text-serif text-[7rem] md:text-[9rem] leading-none text-gradient-warm -ml-2 -mt-4">
            {item.num}
          </span>
          {/* <span className="chip mt-4">{item.tag}</span> */}
        </div>
        <h3 className="mt-2 text-3xl font-bold leading-tight">{item.title}</h3>
        <p className="mt-6 text-muted-foreground leading-relaxed">{item.body}</p>
      </div>
    </article>
  );
}

export function Philosophy() {
  const { ref: headingRef, visible: headingVisible } = useScrollReveal<HTMLHeadingElement>();

  return (
    <section id="philosophy" className="py-15 md:py-25 border-t border-border relative grain">
      <span className="grain-after absolute inset-0" />
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2
            ref={headingRef}
            className={`capitalize text-[3rem] font-bold leading-[0.98] tracking-[-0.03em] max-w-5xl mx-auto ${scrollRevealClasses(headingVisible)}`}
          >
            Our philosophy of <span className="text-serif text-gradient-warm">growth.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 overflow-visible">
          {philosophies.map((p) => (
            <PhilosophyCard key={p.num} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
