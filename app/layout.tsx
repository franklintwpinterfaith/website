import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://franklintwpinterfaith.org"),
  title: "Franklin Township Interfaith Council",
  description:
    "A welcoming interfaith council serving Franklin Township through religious and cultural acceptance, community connection, shared service, and emergency coordination.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Franklin Township Interfaith Council",
    description:
      "Many faiths. One community. Shared care when it matters most.",
    url: "https://franklintwpinterfaith.org",
    siteName: "Franklin Township Interfaith Council",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Franklin Township Interfaith Council logo and tagline: Many faiths. One community.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Franklin Township Interfaith Council",
    description:
      "Many faiths. One community. Shared care when it matters most.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/ftic-logo-color-white-background.png",
    shortcut: "/ftic-logo-color-white-background.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
