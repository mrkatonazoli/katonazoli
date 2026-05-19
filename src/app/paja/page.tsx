export default function PajaPage() {
  return (
    <main className="min-h-screen bg-hero-bg text-hero-fg px-6 md:px-12 lg:px-20 py-16">
      {/* Dot grid */}
      <div
        aria-hidden
        className="fixed inset-0 opacity-[0.04] pointer-events-none [background-image:radial-gradient(rgba(255,255,255,1)_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-hero-fg/40">
            <span className="text-accent">{">"}</span>
            <span>project.workspace</span>
          </div>
          <a
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-hero-fg/30 hover:text-hero-fg/60 transition-colors"
          >
            ← katonazoli.hu
          </a>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          Project workspace
        </h1>
        <p className="font-mono text-sm text-hero-fg/50 mb-16">
          Internal use only — shared with client.
        </p>

        {/* Placeholder content */}
        <div className="border border-hero-fg/10 rounded-lg p-10 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-4">
            {">"} flowchart.coming_soon
          </div>
          <p className="text-hero-fg/40 text-sm">
            A folyamatábra hamarosan ide kerül.
          </p>
        </div>
      </div>
    </main>
  );
}
