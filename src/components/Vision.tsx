export function Vision() {
  return (
    <section
      id="vision"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-line"
    >
      <div className="max-w-5xl mx-auto">
        <div className="font-mono text-xs tracking-[0.22em] uppercase text-muted mb-10 flex items-center gap-3">
          <span className="text-accent">{">"}</span>
          <span>vision.txt</span>
        </div>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.025em]">
          A hospitality industry where technology disappears into the
          experience — leaving only what matters:{" "}
          <span className="text-accent">how a guest feels.</span>
        </p>
      </div>
    </section>
  );
}
