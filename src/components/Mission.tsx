export function Mission() {
  return (
    <section
      id="mission"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-line"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-xs tracking-[0.22em] uppercase text-muted mb-10 flex items-center">
          <span className="inline-block w-8 h-px bg-accent mr-3" />
          Mission
        </div>
        <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
          To help hotels turn technology into{" "}
          <span className="italic text-accent">hospitality</span> — designing
          guest journeys that feel effortless, human, and memorable from the
          first click to the final goodbye.
        </p>
      </div>
    </section>
  );
}
