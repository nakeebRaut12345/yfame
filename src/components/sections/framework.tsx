import { useScrollReveal, scrollRevealClasses } from "../../hooks/use-scroll-reveal";

const ccnCards = [
  { letter: "C", word: "Core Audience", body: "The people who already know and trust you. Our content gives them deeper insights and keeps them coming back." },
  { letter: "C", word: "Casual Audience", body: "The people interested in your topic but not yet attached to your brand. Our content solves problems in simple, relatable ways and gradually turns them into followers." },
  { letter: "N", word: "New Audience", body: "The people discovering you for the very first time. Our content starts with ideas so compelling that even complete strangers want to stop, watch, and learn more." },
];

const tips = [
  "There is a difference between storytelling vs telling a story.",
  "Storytelling is all about conviction & your passion about the topic.",
  "Algorithm is nothing but human psychology.",
  "Just replace the word algorithm with people. So instead of saying the algorithm didn’t like my video, say people didn’t like my video.",
  "Educate people, don't just sell your packages",
  "Higher the watch time, higher the views.",
  "Always overdeliver in the video. Have multiple payoffs.",
  "Make videos what people want to see, not what you like.",
  "View counts and watch time are the two data points worth analysing. Everything else is secondary.",
  "Don't treat your channel like a VC start up. It's not.",
  "Going from 0 to 10k as a creator takes a lot longer than 10k to 100k",
  "Reputation is built over years and destroyed in seconds.",
  "Watch like a student not a consumer. Every video is an opportunity to learn.",
  "Create a playlist, every time you see an outlier video, add it. Then at the end of each week analyse those videos.",
  "The difference between a struggling creator and a 1m+ subscriber creator is nearly always better time allocation.",
  "If 90% of your time is filming and editing, you're a video maker not a content creator.",
  "Allocate at least 25% of time to titles, thumbnails, ideas, intros.",
  "If you don't want to play the intro and hook game, go upload videos to Vimeo. It's part of the job,whether you like it or not.",
  "The idea sets the ceiling for your video, your packaging and execution = the result.",
  "Brainstorm 10 new ideas per day. Make it a muscle.",
  "Make great f***ng videos that people feel privileged to watch. Everything else is noise.",
  "Post the video. It might change your life.",
  
];

export function Framework() {
  const { ref: headingRef, visible: headingVisible } = useScrollReveal<HTMLHeadingElement>();

  return (
    <section id="framework" className="py-15 md:py-25 border-t border-border relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 text-center">
          <h2
            ref={headingRef}
            className={`capitalize text-[3rem] font-bold leading-[0.98] tracking-[-0.03em] max-w-5xl mx-auto ${scrollRevealClasses(headingVisible)}`}
          >
            Our viral philosophy: <span className="text-serif text-gradient-warm">the CCN Framework.</span>
          </h2>
        </div>

        {/* CCN cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {ccnCards.map((c) => (
            <div key={c.word} className="glass rounded-3xl p-8 hover:border-primary/40 transition group relative overflow-hidden hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_12px_40px_-12px_var(--color-primary)]">
              <div className="text-[10rem] leading-[0.8] font-display font-bold text-primary/10 group-hover:text-primary/20 transition absolute -top-4 -right-2 ">
                {c.letter}
              </div>
              <div className="relative">
                {/* <div className="text-sm font-sans font-normal uppercase tracking-[0.25em] text-primary">{c.letter}</div> */}
                <div className="mt-2 text-3xl font-bold">{c.word}</div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Content tips — masonry-ish */}
        <div className="grid md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-4">
            <div className="sticky top-32">
              <div className="chip mb-4">Content tips</div>
              <h3 className="capitalize text-[3rem] font-bold leading-tight">
                Things we keep telling <span className="text-serif text-gradient-warm">every creator.</span>
              </h3>
              <p className="capitalize mt-4 text-muted-foreground">
                Hard-won lessons from thousands of videos shipped across our roster.
              </p>
            </div>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-3">
            {tips.map((t, i) => (
              <div
                key={i}
                className="group relative z-0 overflow-hidden glass rounded-xl p-5 transition-all duration-500 hover:z-20 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_12px_40px_-12px_var(--color-primary)] flex gap-3 items-start"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <span className="relative text-sm font-sans font-normal text-primary shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="relative text-md leading-relaxed text-foreground/90">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
