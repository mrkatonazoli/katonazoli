"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PalaceLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const res = await fetch("/api/palace-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/palace");
        router.refresh();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-hero-bg text-hero-fg flex items-center justify-center px-6">
      <div
        aria-hidden
        className="fixed inset-0 opacity-[0.04] pointer-events-none [background-image:radial-gradient(rgba(255,255,255,1)_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div className="relative w-full max-w-sm">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-hero-fg/40 mb-10">
          <span className="text-accent">{">"}</span>
          <span>palace.restricted</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Enter password
        </h1>
        <p className="font-mono text-xs text-hero-fg/45 mb-8">
          This page is protected. Contact Zoli for access.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoFocus
            className={`w-full bg-hero-fg/[0.04] border rounded-md px-4 py-3 font-mono text-sm outline-none transition-all placeholder:text-hero-fg/25 focus:border-accent/60 focus:bg-accent/[0.04] ${
              error ? "border-red-500/60" : "border-hero-fg/15"
            }`}
          />
          {error && (
            <p className="font-mono text-[11px] text-red-400/80 -mt-2">
              Wrong password. Try again.
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-hero-bg rounded-md font-mono text-xs uppercase tracking-[0.15em] font-semibold hover:bg-accent/85 transition-colors disabled:opacity-50"
          >
            {loading ? "Checking..." : "Enter →"}
          </button>
        </form>
      </div>
    </main>
  );
}
