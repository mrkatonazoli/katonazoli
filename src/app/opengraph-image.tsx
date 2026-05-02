import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Katona Zoli — Hotel Tech & Guest Journey Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portraitData = await readFile(
    join(process.cwd(), "public", "portrait.png"),
  );
  const portraitSrc = `data:image/png;base64,${portraitData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0b",
          color: "#f4f4f5",
          display: "flex",
          position: "relative",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          padding: "72px 80px",
        }}
      >
        {/* Subtle dot grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
          }}
        />

        {/* Accent radial glow */}
        <div
          style={{
            position: "absolute",
            left: 720,
            top: 100,
            width: 540,
            height: 540,
            borderRadius: 9999,
            background: "rgba(20, 184, 166, 0.18)",
            filter: "blur(120px)",
          }}
        />

        {/* Left column — text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            zIndex: 1,
            paddingRight: 32,
          }}
        >
          {/* Eyebrow / role */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#14b8a6",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: 9999,
                background: "#14b8a6",
                boxShadow: "0 0 14px rgba(20,184,166,0.6)",
              }}
            />
            Hotel Tech &amp; Guest Journey Specialist
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              display: "flex",
            }}
          >
            Katona Zoli
          </div>

          {/* URL */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(244,244,245,0.55)",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            <span style={{ color: "#14b8a6" }}>→</span>
            katonazoli.hu
          </div>
        </div>

        {/* Right column — portrait with teal accent frame */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 460,
            zIndex: 1,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 460,
              height: 399,
              borderRadius: 14,
              border: "3px solid rgba(20, 184, 166, 0.45)",
              boxShadow: "0 0 60px rgba(20, 184, 166, 0.15)",
              backgroundColor: "rgba(20, 184, 166, 0.04)",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img
              src={portraitSrc}
              width={460}
              height={399}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
