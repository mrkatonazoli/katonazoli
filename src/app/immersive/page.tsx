import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immersive — The Future | Katona Zoli",
  description: "Solára Immersive Booking Flow — the future of hotel guest experience.",
};

export default function ImmersivePage() {
  return (
    <main className="fixed inset-0 w-full h-full bg-[#faf9f5]">
      <iframe
        src="/immersive-app.html"
        className="w-full h-full border-0"
        title="Immersive — The Future"
        allowFullScreen
      />
    </main>
  );
}
