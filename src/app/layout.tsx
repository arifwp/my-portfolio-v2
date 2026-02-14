import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CursorProvider } from "@/utils/CursorProvider";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { ThemeReset } from "@/utils/ThemeReset";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_FRONTEND_URL || "https://arifprasetyo.com",
  ),

  title: {
    default: "Arif Wahyu Prasetyo | Full Stack Engineer - Frontend Heavy",
    template: "%s | Arif Wahyu Prasetyo",
  },

  description:
    "Full Stack Engineer specializing in Frontend Development. Expert in React, Next.js, TypeScript, and modern web technologies. Building scalable, performant, and user-centric applications.",

  keywords: [
    "Arif Wahyu Prasetyo",
    "Full Stack Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Expert",
    "Linkedin Arif Wahyu Prasetyo",
    "Website Arif Wahyu Prasetyo",
    "Frontend Engineer",
    "Jakarta Developer",
    "Indonesia Developer",
  ],

  authors: [{ name: "Arif Wahyu Prasetyo" }],
  creator: "Arif Wahyu Prasetyo",

  manifest: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/icons/site.webmanifest`,
  icons: {
    icon: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/icons/favicon.ico`,
    shortcut: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/icons/favicon.ico`,
    apple: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/icons/apple-touch-icon.png`,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_FRONTEND_URL,
    title: "Arif Wahyu Prasetyo | Full Stack Engineer - Frontend Heavy",
    description:
      "Full Stack Engineer specializing in Frontend Development. Expert in React, Next.js, TypeScript, and modern web technologies.",
    siteName: "Arif Wahyu Prasetyo Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Arif Wahyu Prasetyo - Full Stack Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arif Wahyu Prasetyo | Full Stack Engineer - Frontend Heavy",
    description:
      "Full Stack Engineer specializing in Frontend Development. Expert in React, Next.js, TypeScript, and modern web technologies.",
    creator: "@arifwahyuu_",
    images: [
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/og-image.jpg`,
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "8L6RJpy3wq2q_kMq4qWpJHQgB0G2QmDE8KEiIo8z_WE",
  },

  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arif Wahyu Prasetyo",
    jobTitle: "Full Stack Engineer",
    description: "Full Stack Engineer specializing in Frontend Development",
    url: process.env.NEXT_PUBLIC_FRONTEND_URL,
    sameAs: [
      "https://github.com/arifwp",
      "https://linkedin.com/in/arif-wahyu-prasetyo",
      "https://x.com/arifwahyuu_",
    ],
    image: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/og-image.jpg`,
    alumniOf: {
      "@type": "Organization",
      name: "Universitas Amikom Yogyakarta",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Full Stack Engineer",
      "Tailwind CSS",
      "Node.js",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
