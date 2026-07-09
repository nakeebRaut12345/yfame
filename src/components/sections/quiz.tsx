import { useState } from "react";
import { useScrollReveal, scrollRevealClasses } from "../../hooks/use-scroll-reveal";

const mythOrFact = [
  { q: "The right hashtags can make your content go viral.", a: "Nope" },
  { q: "Posting time can significantly influence your content's reach and engagement", a: "Nope" },
  { q: "Replying to comments does not increase your reach.", a: "Yes" },
  { q: "The algorithm does not push your videos.", a: "Yes" },
  { q: "Tags do not matter on YouTube.", a: "Yes" },
];

function MythOrFactCard({ item, index }: { item: (typeof mythOrFact)[number]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const toggle = () => {
    if (isOpening) return;

    if (!isOpen) {
      setIsOpen(true);
      setIsOpening(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleAnimationEnd = () => {
    setIsOpening(false);
  };

  return (
    <div
      className={`myth-fact-card group glass rounded-2xl p-6 hover:border-primary/40 transition ${
        isOpen
          ? item.a === "Yes"
            ? "!bg-green-500/15 !border-green-500/50"
            : "!bg-red-500/15 !border-red-500/50"
          : ""
      } ${isOpening ? "myth-fact-card--open" : ""}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between cursor-pointer gap-6 text-left"
      >
        <div className="flex gap-4 items-start">
          <span className="text-md font-sans font-normal text-primary shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-lg leading-snug">{item.q}</p>
        </div>
        <span
          className={`text-2xl text-muted-foreground transition-transform shrink-0 ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 pl-10 flex items-center gap-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-sans font-normal uppercase tracking-[0.2em] ${
              item.a === "Yes" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
            }`}
          >
            {item.a}
          </span>
          <span className="text-md text-muted-foreground">
            {item.a === "Yes" ? "that's true." : "common misconception."}
          </span>
        </div>
      )}
    </div>
  );
}

export function Quiz() {
  const { ref: headingRef, visible: headingVisible } = useScrollReveal<HTMLHeadingElement>();

  return (
    <section id="quiz" className="py-15 md:py-25 border-t border-border relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 text-center">
          <h2
            ref={headingRef}
            className={`capitalize text-[3rem] font-bold leading-[1.1] tracking-[-0.03em] max-w-5xl mx-auto ${scrollRevealClasses(headingVisible)}`}
          >
            Is this actually <span className="text-serif text-gradient-warm">true?</span>
          </h2>
          <p className="capitalize mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            Quick reality-check on the things creators get told every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {mythOrFact.map((m, i) => (
            <MythOrFactCard key={i} item={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
