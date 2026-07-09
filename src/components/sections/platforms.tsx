import { useScrollReveal, scrollRevealClasses } from "../../hooks/use-scroll-reveal";
import Tooltip from "@mui/material/Tooltip";

const platforms = [
  {
    name: "YouTube",
    img: "https://framerusercontent.com/images/WDJ6MbmDtxyvEvHwIoM2bOuWKI.png?width=500&height=500",
  },
  {
    name: "Instagram",
    img: "https://framerusercontent.com/images/XyWhrdsJVEsHQzjxyyym1s7jAWg.png?width=500&height=500",
  },
  // {
  //   name: "LinkedIn",
    
  //   img: "https://framerusercontent.com/images/lFakLSAofGRHsKj1lc42YT3Die8.png?width=500&height=500",
  // },
  // {
  //   name: "X",
  //   img: "https://framerusercontent.com/images/rNtt8ZjKicRS8EXsypIL0Hj37Q.png?width=500&height=500",
  // },
];

export function Platforms() {
  const { ref: headingRef, visible: headingVisible } = useScrollReveal<HTMLHeadingElement>();

  return (
    <section id="platforms" className="py-10 md:py-15 border-t border-border relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center">
          <h2
            ref={headingRef}
            className={`capitalize text-[3rem] font-bold leading-[0.98] tracking-[-0.03em] max-w-5xl mx-auto ${scrollRevealClasses(headingVisible)}`}
          >
            We help you grow on
          </h2>
        </div>

        <div className="relative flex justify-center items-center min-h-[180px] md:min-h-[220px]">
          <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full bg-primary/25 blur-3xl opacity-30 pointer-events-none" />
          <div className="relative flex items-center gap-4 md:gap-6 px-6 py-5 md:px-8 md:py-6 rounded-3xl glass shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
            {platforms.map((platform) => (
              <Tooltip
                key={platform.name}
                title={platform.name}
                placement="bottom"
                enterDelay={150}
                slotProps={{
                  tooltip: {
                    sx: {
                      bgcolor: "oklch(0.65 0.19 250)",
                      color: "oklch(0.99 0 0)",
                      fontSize: "1rem",
                      px: 2,
                      py: 1,
                      borderRadius: "0.375rem",
                    },
                  },
                }}
              >
                <button
                  type="button"
                  aria-label={platform.name}
                  className="group relative z-0 w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl overflow-hidden glass transition-all duration-500 hover:z-20 hover:scale-110 hover:border-primary/70 hover:bg-primary/10 hover:shadow-[0_0_28px_0_oklch(0.65_0.19_250/0.45),0_16px_48px_-12px_var(--color-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-primary/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <img
                    src={platform.img}
                    alt=""
                    loading="lazy"
                    className="relative w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:saturate-110"
                  />
                </button>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
