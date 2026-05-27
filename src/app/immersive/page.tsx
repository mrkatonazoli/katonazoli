"use client";

import { useEffect, useRef } from "react";

export default function ImmersivePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // On mobile: swap iframe src to the mobile-optimised version
    const isMobile =
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (isMobile && iframeRef.current) {
      iframeRef.current.src = "/immersive-mobile.html";
    }
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}>
      <iframe
        ref={iframeRef}
        src="/immersive-app.html"
        style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        title="Immersive — The Future"
        allowFullScreen
      />
    </div>
  );
}
