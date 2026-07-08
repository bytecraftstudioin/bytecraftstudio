import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bytecraft Studio",
    template: "%s | Bytecraft Studio",
  },

  description:
    "Professional Website Development, Microsoft 365 Setup, Business Email Solutions, IT Support, and Software Testing Services.",

  keywords: [
    "Website Development",
    "Microsoft 365",
    "Business Email",
    "IT Support",
    "Software Testing",
    "Bytecraft Studio",
  ],

  authors: [{ name: "Bytecraft Studio" }],

  creator: "Bytecraft Studio",

  openGraph: {
    title: "Bytecraft Studio",
    description:
      "Professional Website Development and IT Services.",
    type: "website",
    url: "https://bytecraftstudio.com",
    siteName: "Bytecraft Studio",
  },

  other: {
    "google-adsense-account": "ca-pub-4162936079798609",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-4162936079798609"
        />
      </head>

      <body className="min-h-screen flex flex-col bg-[#0B0F19] text-white">

<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4162936079798609"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>

  {/* Global Navbar */}
  <Navbar />

  {/* All Pages */}
  <main className="flex-1">
    {children}
  </main>

  {/* Global Footer */}
  <Footer />

</body>
    </html>
  );
}