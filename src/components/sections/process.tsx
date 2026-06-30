import { useScrollReveal, scrollRevealClasses } from "../../hooks/use-scroll-reveal";

const steps = [
  "Content Strategy",
  "Scripting",
  "Shooting & Production",
  "Post Production",
  "Click-worthy Thumbnails",
  "Posting",
  "Study of Analytics",
];

export function Process() {
  const { ref: headingRef, visible: headingVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="process" className="py-15 md:py-25 border-t border-border relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div
          ref={headingRef}
          className={`mb-16 text-center ${scrollRevealClasses(headingVisible)}`}
        >
          <h2 className=" text-[3rem] font-bold leading-[0.98] tracking-[-0.03em] max-w-5xl mx-auto">
            All We Need is <span className="text-serif text-gradient-warm">2 Hours</span> of Your Time Every Month.
          </h2>
          <h2 className="text-[3rem] font-bold leading-[0.98] tracking-[-0.03em] max-w-5xl mx-auto">
            We Handle the Rest.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
          {steps.map((step, i) => (
            <div
              key={step}
              className="group relative z-0 min-w-0 overflow-hidden glass rounded-2xl p-5 lg:p-4 transition-all duration-500 hover:z-20 hover:scale-120 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_12px_40px_-12px_var(--color-primary)]"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative">
                <div className="text-serif text-3xl text-gradient-warm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 lg:mt-3 text-sm lg:text-[0.8125rem] font-medium leading-snug">{step}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
