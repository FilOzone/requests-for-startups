import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
  title: "Requests for Startups — Filecoin Onchain Cloud",
  description:
    "Build AI-native products on Filecoin Onchain Cloud. We are seeking teams building working, mainnet-deployed systems where AI agents persist, transact, and coordinate onchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-card-border">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/logo.svg" alt="Filecoin Onchain Cloud" width={120} height={40} priority />
            </Link>
            <span className="text-xs text-muted font-mono">RFS Program</span>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
