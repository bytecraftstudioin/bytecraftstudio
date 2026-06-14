import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Bytecraft Studio",
  description: "Premium websites, apps and AI experiences.",

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

      <body className="min-h-full flex flex-col">

        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4162936079798609"
          crossOrigin="anonymous"
        />

        {children}
      </body>

    </html>
  );
}