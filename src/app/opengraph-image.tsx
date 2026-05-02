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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
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

        {/* Teal radial glow behind the avatar */}
        <div
          style={{
            position: "absolute",
            width: 720,
            height: 720,
            borderRadius: 9999,
            background: "rgba(20, 184, 166, 0.16)",
            filter: "blur(140px)",
          }}
        />

        {/* Portrait circle — uses background-image so border-radius clips reliably in Satori */}
        <div
          style={{
            display: "flex",
            width: 460,
            height: 460,
            borderRadius: 9999,
            border: "3px solid rgba(20, 184, 166, 0.45)",
            boxShadow: "0 0 80px rgba(20, 184, 166, 0.25)",
            backgroundColor: "rgba(20, 184, 166, 0.04)",
            backgroundImage: `url(${portraitSrc})`,
            backgroundSize: "auto 540px",
            backgroundPosition: "center 20px",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
