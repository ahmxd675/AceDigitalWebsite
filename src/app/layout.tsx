import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acedigitalsolutions.com"),
  title: {
    default: "Ace Digital Solutions — Custom software for business",
    template: "%s · Ace Digital Solutions",
  },
  description:
    "Ace Digital Solutions designs and builds custom software tailored to how your business actually works — from first idea to long-term support.",
  keywords: [
    "custom software",
    "software development",
    "bespoke software",
    "business software",
    "web applications",
    "systems integration",
  ],
  openGraph: {
    type: "website",
    siteName: "Ace Digital Solutions",
    title: "Ace Digital Solutions — Custom software for business",
    description:
      "Custom software, designed and built around how your business actually works.",
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
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
