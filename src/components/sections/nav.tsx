export function Nav() {
  return (
    <header className="absolute top-0 inset-x-0 z-50 px-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight flex items-center gap-2 px-3 py-0 md:px-4 md:py-2 rounded-full">
          {/* <span className="w-2 h-2 rounded-full bg-primary pulse-dot" /> */}
          {/* Y<span className="text-primary">FAME</span> */}
          <img src="/yfame_logo.png" alt="" width="150px" className="-translate-y-2 md:translate-y-0" />
        </a>
        {/* <nav className="hidden md:flex items-center gap-1 glass rounded-full p-1.5">
          {["Doctors", "Process", "Philosophy", "Framework", "Quiz"].map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="px-4 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition">
              {n}
            </a>
          ))}
        </nav> */}
        {/* <a
          href="mailto:hello@yfame.com"
          className="group glass rounded-full px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition flex items-center gap-2"
        >
          Work with us
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a> */}
      </div>
    </header>
  );
}
