import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "sonner";
import NavbarComponent from "@/components/ui/navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Property Pilot - Smart Property Management Platform",
    template: "%s | Property Pilot",
  },
  description:
    "Property Pilot is the ultimate property management platform that streamlines your real estate operations. Join our waitlist for early access to smart property management tools.",
  keywords: [
    "property management",
    "real estate",
    "property software",
    "landlord tools",
    "tenant management",
    "property investment",
    "real estate technology",
    "property pilot",
  ],
  authors: [{ name: "Property Pilot Team" }],
  creator: "Property Pilot",
  publisher: "Property Pilot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://propertypilot.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://propertypilot.com",
    title: "Property Pilot - Smart Property Management Platform",
    description:
      "Streamline your property management with Property Pilot. Join our waitlist for early access to smart real estate tools.",
    siteName: "Property Pilot",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Property Pilot - Smart Property Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Pilot - Smart Property Management Platform",
    description:
      "Streamline your property management with Property Pilot. Join our waitlist for early access to smart real estate tools.",
    images: ["/og-image.jpg"],
    creator: "@propertypilot",
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HeroUIProvider>
      <html lang="en">
        <body className={`${inter.variable} font-sans antialiased`}>
          <NavbarComponent />
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </HeroUIProvider>
  );
}
