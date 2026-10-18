import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Solanki — Product Engineer & AI Builder",
  description:
    "Shubham Solanki builds products people come back to. CollegePaglu, MicroKahani and Broll AI.",
  keywords: ["Shubham Solanki", "Product Engineer", "AI Builder", "Full Stack Developer", "Broll AI", "CollegePaglu"],
  openGraph: {
    title: "Shubham Solanki — Product Engineer & AI Builder",
    description: "I turn wild ideas into live products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${instrument.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
