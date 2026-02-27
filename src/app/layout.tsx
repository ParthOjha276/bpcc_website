import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// 1. Configure the Serif Font (Headings)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

// 2. Configure the Sans-Serif Font (Body text)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BITS Pilani Consulting Club | Strategize. Solve. Succeed.",
  description: "The premier student consulting body of BITS Pilani.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Inject font variables into the body */}
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-bpcc-cream text-slate-900`}>
        {children}
      </body>
    </html>
  );
}