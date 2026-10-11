import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CursorProvider } from "@/utils/CursorProvider";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { ThemeReset } from "@/utils/ThemeReset";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { siteUrl, siteName, siteDescription, personName, personJsonLd } from "@/constants/site";
import { JsonLd } from "@/components/JsonLd";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arif Wahyu Prasetyo | Software Engineer",
    template: "%s | Arif Wahyu Prasetyo",
  },
  description: siteDescription,
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  manifest: "/assets/icons/site.webmanifest",
  icons: {
    icon: "/assets/icons/favicon.ico",
    shortcut: "/assets/icons/favicon.ico",
    apple: "/assets/icons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Arif Wahyu Prasetyo | Software Engineer",
    description: siteDescription,
    siteName,
    images: [{ url: "/assets/images/og-image.jpg", width: 1200, height: 630, alt: "Arif Wahyu Prasetyo - Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arif Wahyu Prasetyo | Software Engineer",
    description: siteDescription,
    creator: "@arifwahyuu_",
    images: ["/assets/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "8L6RJpy3wq2q_kMq4qWpJHQgB0G2QmDE8KEiIo8z_WE" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <JsonLd data={{
          "@context": "https://schema.org",
          "@graph": [personJsonLd, {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: `${siteUrl}/`,
            name: siteName,
            inLanguage: "en",
            publisher: { "@id": `${siteUrl}/#person` },
          }],
        }} />
      </head>
      <body className={`${instrumentSans.variable} antialiased`}>
        <ThemeProvider>
          <ThemeReset />
          <CursorProvider>
            <SmoothScrollProvider>{children}</SmoothScrollProvider>
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
