import type { Metadata } from "next";
import { Toaster } from "sonner";
import "../main-site.css";

export const metadata: Metadata = {
  title: {
    default: "Property Pilot - Smart Property Management Platform",
    template: "%s | Property Pilot",
  },
  description:
    "Property Pilot is the ultimate property management platform that streamlines your real estate operations. Join our waitlist for early access to smart property management tools designed for Australian property investors.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  keywords: [
    "property management",
    "real estate",
    "property software",
    "landlord tools",
    "tenant management",
    "property investment",
    "real estate technology",
    "property pilot",
    "Australian property",
    "Airbnb Australia",
    "short-term rentals",
  ],
  authors: [{ name: "Property Pilot Team" }],
  creator: "Property Pilot",
  publisher: "Property Pilot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://propertypilot.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://propertypilot.com.au",
    title: "Property Pilot - Smart Property Management Platform",
    description:
      "Streamline your property management with Property Pilot. Join our waitlist for early access to smart real estate tools designed for Australian property investors.",
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
      "Streamline your property management with Property Pilot. Join our waitlist for early access to smart real estate tools designed for Australian property investors.",
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
    yandex: "your-yahoo-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
