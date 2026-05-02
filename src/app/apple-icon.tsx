import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        {/* Outer halo */}
        <div
          style={{
            position: "absolute",
            width: 140,
            height: 140,
            borderRadius: 9999,
            background: "rgba(20, 184, 166, 0.18)",
          }}
        />
        {/* Solid dot */}
        <div
          style={{
            width: 76,
            height: 76,
            borderRadius: 9999,
            background: "#14b8a6",
            boxShadow: "0 0 30px rgba(20, 184, 166, 0.5)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
