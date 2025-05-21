import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Footer, Header } from "@/components";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyan University",
  description: "Unlock the next level of your career",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cyanuniversity-5i4h.vercel.app",
    siteName: "Cyan University",
    title: "Cyan University",
    description: "Unlock the next level of your career",
    images: [
      {
        url: "/assets/courses-page/course-banner.png",
        width: 1200,
        height: 630,
        alt: "Cyan University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyan University",
    description: "Unlock the next level of your career",
    images: ["/assets/courses-page/course-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SmoothScroll>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </SmoothScroll>
      </body>
    </html>
  );
}
