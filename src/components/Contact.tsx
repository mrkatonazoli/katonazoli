"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          size?: "normal" | "flexible" | "compact" | "invisible";
          appearance?: "always" | "execute" | "interaction-only";
        },
      ) => string;
      reset: (id?: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "0x4AAAAAADI1q1nKMYlZVHCG";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    function tryRender() {
      if (
        widgetRef.current &&
        window.turnstile &&
        widgetIdRef.current === null
      ) {
        widgetIdRef.current = window.turnstile.render(widgetRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token) => setTurnstileToken(token),
          "error-callback": () => setTurnstileToken(""),
          "expired-callback": () => setTurnstileToken(""),
        });
      }
    }
    tryRender();
    const interval = window.setInterval(tryRender, 300);
    return () => window.clearInterval(interval);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError(null);

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken("");
      }
    }
  }

  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-line"
    >
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        async
        defer
      />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <div className="font-mono text-xs tracking-[0.22em] uppercase text-muted flex items-center gap-3">
            <span className="text-accent">{">"}</span>
            <span>contact.sh</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold mt-6 leading-[1] tracking-[-0.03em]">
            Let&apos;s <span className="text-accent">talk.</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Working on a guest experience problem, evaluating hotel tech, or
            just want to swap notes? Drop a line.
          </p>
          <p className="mt-8 text-sm text-muted">
            Or write directly to{" "}
            <a
              href="mailto:hello@katonazoli.hu"
              className="text-foreground underline underline-offset-4 decoration-accent decoration-2 hover:text-accent transition-colors"
            >
              hello@katonazoli.hu
            </a>
          </p>
        </div>

        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-[10px] tracking-[0.22em] uppercase text-muted mb-2"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="w-full bg-transparent border-b border-line focus:border-accent py-3 outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-mono text-[10px] tracking-[0.22em] uppercase text-muted mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full bg-transparent border-b border-line focus:border-accent py-3 outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[10px] tracking-[0.22em] uppercase text-muted mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-transparent border-b border-line focus:border-accent py-3 outline-none transition-colors resize-none"
              />
            </div>
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px] w-px h-px opacity-0"
              aria-hidden="true"
            />
            <div ref={widgetRef} className="pt-2" />
            <div className="flex items-center gap-6 pt-2">
              <button
                type="submit"
                disabled={
                  status === "sending" ||
                  status === "success" ||
                  !turnstileToken
                }
                className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-md font-mono text-xs uppercase tracking-[0.15em] font-semibold hover:bg-accent transition-colors disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "success"
                    ? "Sent ✓"
                    : "Send message"}
                {status === "idle" && <span aria-hidden>→</span>}
              </button>
              {status === "success" && (
                <p className="text-sm text-accent">
                  Thanks — I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && error && (
                <p className="text-sm text-red-700">{error}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
