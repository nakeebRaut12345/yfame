export function Nav() {
  return (
    <header className="absolute top-5 left-0 right-0 z-50 px-4 sm:px-6 pt-2 md:pt-3">
      <div className="max-w-[1400px] mx-auto flex items-center justify-start">
        <a href="#top" className="block shrink-0" aria-label="Yfame">
          <img
            src="/yfame_logo.png"
            alt="Yfame"
            width={140}
            height={36}
            className="h-8 w-auto md:h-9"
          />
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
