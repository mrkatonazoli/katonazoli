"use client";

import { useState, useRef } from "react";
import Link from "next/link";

/**
 * /only — vicces aloldal. "OnlyFans 24h kupon" igénylő, ami valójában
 * a középső-ujjas majmot adja vissza. Sima joke, semmi backend.
 */
export default function OnlyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const revealRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading || submitted) return;
    setLoading(true);
    // Drámai hatáshoz pici delay — mintha tényleg dolgozna a szerver
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // scroll a reveal-ig
      setTimeout(() => {
        revealRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }, 1400);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#f4f4f5]">
      {/* Vissza-link */}
      <nav className="max-w-[720px] mx-auto px-6 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-[#a1a1aa] hover:text-[#14b8a6] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          katonazoli.hu
        </Link>
      </nav>

      <main className="max-w-[720px] mx-auto px-6 pt-10 pb-20 sm:pt-16">
        {/* Hero */}
        <div className="text-center mb-10">
          <div
            className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-[#14b8a6] mb-4 px-3 py-1 rounded-full"
            style={{ background: "rgba(20,184,166,0.12)" }}
          >
            🔞 Limited drop · 24h
          </div>
          <h1 className="text-[40px] sm:text-[56px] leading-[1.05] font-extrabold tracking-[-0.025em] mb-4">
            Only<span style={{ color: "#14b8a6" }}>KatonaZoli</span>
          </h1>
          <p className="text-[16px] sm:text-[18px] text-[#a1a1aa] leading-relaxed max-w-[480px] mx-auto">
            Igényelj <strong className="text-[#f4f4f5]">24 órás kupont</strong> az
            OnlyFans csatornámhoz. Limitált példányszám,
            <br className="hidden sm:block" />
            csak a beavatottaknak. 🍌
          </p>
        </div>

        {/* Form vagy reveal */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="rounded-[16px] border border-[#27272a] bg-[#111114] p-6 sm:p-8 space-y-5"
          >
            <div>
              <label className="block text-[12px] font-mono uppercase tracking-[0.08em] text-[#71717a] mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="te@example.com"
                disabled={loading}
                className="w-full h-12 px-4 rounded-[10px] bg-[#1c1c20] border border-[#27272a] text-[15px] text-[#f4f4f5] placeholder:text-[#52525b] outline-none focus:border-[#14b8a6] focus:ring-[3px] focus:ring-[#14b8a6]/20 transition disabled:opacity-50"
              />
              <p className="text-[11px] text-[#52525b] mt-2 font-mono">
                Nem küldünk spamet. (Semmit se küldünk valójában.)
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-13 px-6 py-3.5 rounded-[10px] bg-[#14b8a6] hover:bg-[#0d9488] disabled:opacity-60 disabled:cursor-not-allowed text-[#0a0a0b] font-bold text-[15px] transition-colors inline-flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-spin">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Kupon generálása…
                </>
              ) : (
                <>
                  Igénylés
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </button>

            <p className="text-[11px] text-[#52525b] text-center font-mono">
              ✓ Diszkrét számlázás · ✓ 4K minőség · ✓ Cancel anytime
            </p>
          </form>
        ) : (
          <div
            ref={revealRef}
            className="rounded-[16px] overflow-hidden border border-[#27272a] bg-[#111114]"
          >
            <div className="p-6 sm:p-8 text-center">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#14b8a6] mb-3">
                ✓ Kupon kiállítva
              </div>
              <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.01em] mb-2">
                Itt a 24 órás kódod 👇
              </h2>
              <p className="text-[14.5px] text-[#a1a1aa]">
                Tekintsd át alaposan, használd jól.
              </p>
            </div>
            <div className="bg-[#0a0a0b] border-y border-[#27272a]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/monkey.jpg"
                alt="A kuponod"
                className="w-full h-auto block"
              />
            </div>
            <div className="p-6 sm:p-8 text-center space-y-4">
              <p className="text-[15px] text-[#f4f4f5] font-semibold">
                Köszi az érdeklődést! 🦍
              </p>
              <p className="text-[13.5px] text-[#a1a1aa] leading-relaxed">
                Ha mégis hotel tech / digital marketing dolgokról akarsz hallani,
                arra van rendes csatorna —
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 h-10 px-5 rounded-[8px] bg-[#1c1c20] border border-[#27272a] text-[13.5px] text-[#f4f4f5] hover:border-[#14b8a6] hover:text-[#14b8a6] transition-colors"
              >
                Vissza a komoly oldalra
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        )}

        {/* Footer kis kacsintás */}
        <p className="text-center text-[11px] text-[#52525b] mt-10 font-mono">
          (Nincs OnlyFans csatorna. Ez egy vicc.)
        </p>
      </main>
    </div>
  );
}
