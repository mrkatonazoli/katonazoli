"use client";

import { useState } from "react";

const PHASES = [
  {
    num: "01",
    title: "Discover",
    tag: "Search & intent",
    detail:
      "Direct-booking optimization, OTA strategy, attribution & search visibility.",
  },
  {
    num: "02",
    title: "Book",
    tag: "Reservation",
    detail:
      "Booking engines, payment flows, conversion design, channel managers.",
  },
  {
    num: "03",
    title: "Pre-arrival",
    tag: "Anticipation",
    detail:
      "Confirmation flows, upsell, expectation setting, ID & preference capture.",
  },
  {
    num: "04",
    title: "Arrive",
    tag: "Check-in",
    detail:
      "Mobile keys, kiosks, digital ID verification, frictionless first impression.",
  },
  {
    num: "05",
    title: "Stay",
    tag: "Service",
    detail:
      "In-room tech, guest messaging, on-property apps, real-time service requests.",
  },
  {
    num: "06",
    title: "Depart",
    tag: "Checkout",
    detail:
      "Folio settlement, mobile checkout, late-checkout offers, frictionless goodbye.",
  },
  {
    num: "07",
    title: "Retention",
    tag: "Loyalty & return",
    detail:
      "Post-stay feedback, loyalty programs, segmentation, win-back campaigns.",
  },
];

const NODE_X_POSITIONS = [7.14, 21.43, 35.71, 50, 64.29, 78.57, 92.86];

export function Hero() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-hero-bg text-hero-fg overflow-hidden">
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none [background-image:radial-gradient(rgba(255,255,255,1)_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* Radial accent glow behind avatar */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-accent/[0.06] blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-10 md:pt-14 pb-16 md:pb-20">
        {/* Top status bar (compact) */}
        <div className="flex items-center justify-between font-mono text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-hero-fg/45 mb-8 md:mb-10">
          <div className="flex items-center gap-2.5">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-accent" />
            </span>
            <span className="text-hero-fg/75">online</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span>v.2026.05</span>
          </div>
        </div>

        {/* Role line (prominent) + name + tagline */}
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-sm md:text-base lg:text-lg uppercase tracking-[0.18em] text-accent mb-4 md:mb-6">
            Hotel Tech &amp; Guest Journey Specialist
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
            Katona Zoli
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-hero-fg/70 leading-relaxed">
            I architect{" "}
            <span className="text-accent font-medium">guest journeys</span>{" "}
            through digital marketing, software, integrations, and the ops
            behind them.
          </p>
        </div>

        {/* THE GRAPH */}
        <div className="relative">
          {/* Avatar at top center */}
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 -m-6 rounded-full bg-accent/15 blur-2xl pointer-events-none" />
              {/* Outer thin ring */}
              <div className="absolute inset-0 -m-2 rounded-full border border-accent/20" />
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-hero-fg/15 bg-hero-bg">
                <img
                  src="/portrait.png"
                  alt="Katona Zoli"
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              {/* Operator badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-hero-bg border border-accent/40 font-mono text-[9px] uppercase tracking-[0.18em] whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                <span className="text-hero-fg/80">operator</span>
              </div>
            </div>
          </div>

          {/* Fan lines (desktop only) */}
          <svg
            aria-hidden
            className="absolute left-0 right-0 w-full pointer-events-none hidden md:block"
            style={{ top: "120px", height: "100px" }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {NODE_X_POSITIONS.map((x, i) => (
              <line
                key={i}
                x1="50"
                y1="0"
                x2={x}
                y2="100"
                stroke={
                  active === i
                    ? "rgba(20, 184, 166, 0.55)"
                    : "rgba(244, 244, 245, 0.13)"
                }
                strokeWidth="1"
                strokeDasharray="2 4"
                vectorEffect="non-scaling-stroke"
                style={{
                  animation: "flow 8s linear infinite",
                  animationDelay: `${i * 0.25}s`,
                  transition: "stroke 200ms ease",
                }}
              />
            ))}
          </svg>

          {/* Mobile vertical line under avatar */}
          <div
            aria-hidden
            className="md:hidden absolute left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-accent/40 to-hero-fg/0"
            style={{ top: "112px", height: "48px" }}
          />

          {/* Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5 md:gap-2 mt-32 md:mt-44">
            {PHASES.map((p, i) => {
              const isActive = active === i;
              return (
                <button
                  type="button"
                  key={p.num}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className={`group relative text-left rounded-md border p-3 md:p-3.5 lg:p-4 transition-all duration-200 outline-none ${
                    isActive
                      ? "border-accent/60 bg-accent/[0.06] shadow-[0_0_0_1px_rgba(20,184,166,0.2)]"
                      : "border-hero-fg/10 bg-hero-fg/[0.025] hover:border-hero-fg/25 hover:bg-hero-fg/[0.04]"
                  }`}
                >
                  <div className="font-mono text-[10px] tracking-[0.22em] text-accent mb-1.5">
                    {p.num}
                  </div>
                  <div className="font-semibold text-sm md:text-base lg:text-lg leading-tight mb-1 tracking-tight">
                    {p.title}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-hero-fg/40">
                    {p.tag}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active node detail */}
          <div className="mt-6 md:mt-8 min-h-[3.5rem] md:min-h-[2.5rem] font-mono text-xs md:text-sm leading-relaxed text-hero-fg/65">
            {active !== null ? (
              <div className="flex items-start gap-3">
                <span className="text-accent shrink-0">{">"}</span>
                <span>{PHASES[active].detail}</span>
              </div>
            ) : (
              <div className="flex items-start gap-3 text-hero-fg/35">
                <span className="text-accent/40 shrink-0">{">"}</span>
                <span>Hover a phase for what I do there.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA + footer status */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-hero-fg/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-hero-bg rounded-md font-mono text-xs uppercase tracking-[0.15em] font-semibold hover:bg-accent/85 transition-colors"
            >
              Get in touch
              <span aria-hidden>→</span>
            </a>
            <a
              href="#mission"
              className="font-mono text-xs uppercase tracking-[0.18em] text-hero-fg/55 hover:text-hero-fg transition-colors"
            >
              ./about
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-hero-fg/40">
            <span>Hungary</span>
            <span className="text-hero-fg/20">·</span>
            <span>UTC+1</span>
            <span className="text-hero-fg/20">·</span>
            <span>EN / HU</span>
          </div>
        </div>
      </div>
    </section>
  );
}
