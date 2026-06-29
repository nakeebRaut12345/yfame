export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-[minmax(0,1fr)_auto] md:flex md:items-center md:justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display font-bold text-foreground">
          <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
          Y<span className="text-primary">FAME</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 font-sans font-normal text-xs uppercase tracking-[0.2em]">
          <a href="#doctors" className="hover:text-foreground transition">Doctors</a>
          <a href="#philosophy" className="hover:text-foreground transition">Philosophy</a>
          <a href="#framework" className="hover:text-foreground transition">Framework</a>
          <a href="#quiz" className="hover:text-foreground transition">Quiz</a>
        </nav>
        <div className="font-sans font-normal text-xs uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} · YFAME
        </div>
      </div>
    </footer>
  );
}
