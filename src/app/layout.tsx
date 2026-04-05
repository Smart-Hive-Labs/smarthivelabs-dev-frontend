import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Smart Hive Labs | Software and Game Development",
    template: "%s | Smart Hive Labs",
  },
  description:
    "Smart Hive Labs builds software products, web and mobile apps, AI-enabled systems, and game development projects for businesses and partners.",
  keywords: [
    "Smart Hive Labs",
    "Software Development",
    "Web Applications",
    "Mobile App Development",
    "AI Systems",
    "Game Development",
    "Product Engineering",
    "Software Engineering Partner",
  ],
  authors: [{ name: "Smart Hive Labs", url: "https://smarthivelabs.dev" }],
  creator: "Smart Hive Labs",
  publisher: "Smart Hive Labs",
  metadataBase: new URL("https://smarthivelabs.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Smart Hive Labs | Software and Game Development",
    description:
      "Software, AI, mobile, web, and game development services from Smart Hive Labs.",
    url: "https://smarthivelabs.dev",
    siteName: "Smart Hive Labs",
    images: [
      {
        url: "/homepage.png",
        width: 1200,
        height: 630,
        alt: "Smart Hive Labs homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Hive Labs | Software and Game Development",
    description:
      "Software and game development partner for product builds, AI-enabled systems, and curated project work.",
    images: ["/homepage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-06FFDTHRW8"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-06FFDTHRW8');
            `,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
