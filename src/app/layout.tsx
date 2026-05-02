import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://katonazoli.hu"),
  title: "Katona Zoli — Hotel Tech & Guest Journey Specialist",
  description:
    "I architect guest journeys through software, integrations, and the ops behind them.",
  openGraph: {
    title: "Katona Zoli — Hotel Tech & Guest Journey Specialist",
    description:
      "I architect guest journeys through software, integrations, and the ops behind them.",
    url: "https://katonazoli.hu",
    siteName: "Katona Zoli",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katona Zoli — Hotel Tech & Guest Journey Specialist",
    description:
      "I architect guest journeys through software, integrations, and the ops behind them.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
