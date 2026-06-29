const tickerWords = [
  "Human Behaviour > Algorithms",
  "Specialisation",
  "Strategy First",
  "Audiences, Not Algorithms",
  "50M+ Monthly Views",
];

export function Ticker() {
  const doubledTicker = [...tickerWords, ...tickerWords, ...tickerWords, ...tickerWords];

  return (
    <section className="relative py-6 border-y border-border bg-card overflow-hidden">
      <div className="flex w-max ticker gap-12 items-center">
        {doubledTicker.map((w, i) => (
          <div key={i} className="flex items-center gap-12 shrink-0">
            <span className="text-serif text-3xl md:text-5xl text-foreground whitespace-nowrap">{w}</span>
            <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
