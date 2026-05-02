import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const display = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://katonazoli.hu"),
  title: "Katona Zoli — Hotel Tech & Guest Journey Specialist",
  description:
    "I help hotels turn technology into hospitality — designing guest journeys that feel effortless, human, and memorable from the first click to the final goodbye.",
  openGraph: {
    title: "Katona Zoli — Hotel Tech & Guest Journey Specialist",
    description:
      "I help hotels turn technology into hospitality — designing guest journeys that feel effortless, human, and memorable.",
    url: "https://katonazoli.hu",
    siteName: "Katona Zoli",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katona Zoli — Hotel Tech & Guest Journey Specialist",
    description:
      "I help hotels turn technology into hospitality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
