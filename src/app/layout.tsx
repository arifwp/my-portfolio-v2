import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { CursorProvider } from "@/CursorProvider";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arif Prasetyo",
  description: "Portfolio of Arif Prasetyo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} antialiased`}>
        <CursorProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
