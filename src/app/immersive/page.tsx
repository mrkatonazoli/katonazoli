"use client";

import { useRef, useState } from "react";

export default function ImmersivePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [fullscreen, setFullscreen] = useState(false);

  function handleFullscreen() {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (isIOS) {
      // iPhone: open the mobile-optimised version directly in Safari
      window.open("/immersive-mobile.html", "_self");
      return;
    }

    // Desktop / Android: fullscreen the iframe
    const el = iframeRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen()
        .then(() => setFullscreen(true))
        .catch(() => window.open("/immersive-mobile.html", "_blank"));
    } else {
      document.exitFullscreen().then(() => setFullscreen(false));
    }
  }

  return (
    <main className="fixed inset-0 w-full h-full bg-[#faf9f5]">
      <iframe
        ref={iframeRef}
        src="/immersive-app.html"
        className="w-full h-full border-0"
        title="Immersive — The Future"
        allowFullScreen
      />

      {/* Floating button */}
      {!fullscreen && (
        <button
          onClick={handleFullscreen}
          aria-label="Teljes képernyő"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[11px] uppercase tracking-[0.18em] hover:bg-black/90 transition-all shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
            <path d="M3 16v3a2 2 0 0 0 2 2h3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
          Teljes képernyő
        </button>
      )}
    </main>
  );
}
