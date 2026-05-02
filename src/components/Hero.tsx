const portraitMask =
  "radial-gradient(ellipse 80% 90% at 55% 50%, #000 55%, transparent 95%)";

export function Hero() {
  return (
    <section className="relative bg-hero-bg text-hero-fg px-6 md:px-12 lg:px-20 pt-24 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="text-xs tracking-[0.22em] uppercase text-hero-fg/55 mb-8 flex items-center">
            <span className="inline-block w-8 h-px bg-accent mr-3" />
            Hotel Tech &amp; Guest Journey Specialist
          </div>
          <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.92] tracking-tight">
            Katona
            <br />
            <span className="italic text-accent">Zoli</span>
          </h1>
          <p className="mt-10 max-w-xl text-lg md:text-xl text-hero-fg/80 leading-relaxed">
            I help hotels turn technology into hospitality — designing guest
            journeys that feel effortless, human, and unmistakably theirs.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-hero-fg text-hero-bg rounded-full text-sm font-medium hover:bg-accent hover:text-hero-fg transition-colors"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
            <a
              href="#mission"
              className="text-sm text-hero-fg/55 hover:text-hero-fg transition-colors underline-offset-4 hover:underline"
            >
              Read more
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none relative overflow-hidden">
            <img
              src="/portrait.jpg"
              alt="Katona Zoli"
              className="absolute inset-0 w-full h-full object-cover mix-blend-lighten"
              style={{
                WebkitMaskImage: portraitMask,
                maskImage: portraitMask,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
