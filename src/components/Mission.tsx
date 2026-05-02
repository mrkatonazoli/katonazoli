export function Mission() {
  return (
    <section
      id="mission"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-line"
    >
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs tracking-[0.22em] uppercase text-muted mb-10 flex items-center gap-3">
          <span className="text-accent">{">"}</span>
          <span>mission.txt</span>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.2] tracking-[-0.015em]">
          Help hotels turn technology into{" "}
          <span className="text-accent">hospitality</span> — designing guest
          journeys that feel effortless, human, and memorable from the first
          click to retention.
        </p>
      </div>
    </section>
  );
}
