import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const ist = new Date(d.getTime() + 5.5 * 60 * 60 * 1000 + d.getTimezoneOffset() * 60000);
      setTime(
        ist.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }) + " IST"
      );
    };
    tick();
    const i = setInterval(tick, 30000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 h-10 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans font-normal">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-dot" />
          India · {time}
        </div>
        <div className="hidden md:block">Social Media Studio for Doctors</div>
        <div>50M+ Monthly Views</div>
      </div>
    </div>
  );
}
