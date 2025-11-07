import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "./globals.css";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import WorldReveal from "@/components/WorldReveal";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suren Builds | Web Development Portfolio",
  description: "Showcasing premium web development projects. Custom websites built with Next.js, modern design, and proven results.",
  icons: {
    icon: "/brand/s-logo.svg",
    shortcut: "/brand/s-logo.svg",
    apple: "/brand/s-logo.svg",
  },
  openGraph: {
    title: "Suren Builds | Web Development Portfolio",
    description: "Showcasing premium web development projects. Custom websites built with Next.js, modern design, and proven results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
              <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
              >
                <SmoothScroll />
                <ScrollProgress />
                {/* World Reveal - 3D camera movement on scroll */}
                <WorldReveal />
                {/* Cursor Glow - Interactive light orb */}
                <CursorGlow />
                <Nav />
                <main className="pt-16">{children}</main>
                <Footer />
              </body>
    </html>
  );
}
