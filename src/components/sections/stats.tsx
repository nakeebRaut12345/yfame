const stats = [
  { k: "50M+", v: "Monthly organic views" },
  { k: "0.1%", v: "Top doctors we work with" },
  { k: "2 hrs", v: "Of your time / month" },
  { k: "100%", v: "Done-for-you craft" },
];

export function Stats() {
  return (
    <section className="py-20 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {stats.map((s) => (
          <div key={s.v} className="bg-background px-6 py-10 md:py-14 text-center hover:bg-card transition">
            <div className="text-serif text-5xl md:text-7xl text-gradient-warm">{s.k}</div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-sans font-normal">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
