const stats = [
  { k: "50M+", v: "Monthly organic views" },
  { k: "0.1%", v: "Top doctors we work with" },
  { k: "2 hrs", v: "Of your time / month" },
  { k: "100%", v: "Done-for-you craft" },
];

export function Stats() {
  return (
    <section className="py-20 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {stats.map((s) => (
          <div
            key={s.v}
            className="@container bg-background px-3 py-8 sm:px-6 sm:py-10 md:py-14 text-center hover:bg-card transition min-w-0 overflow-hidden"
          >
            <div className="text-serif text-[clamp(1.5rem,22cqi,4.5rem)] md:text-7xl text-gradient-warm leading-none">
              {s.k}
            </div>
            <div className="mt-3 text-[clamp(8px,3.2cqi,10px)] uppercase tracking-[0.15em] sm:tracking-[0.3em] text-muted-foreground font-sans font-normal">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
