import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";

import "./globals.css";

const description = "Be the first to know when SJONWORLD launches.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sjonworld.com";
const title = "SjonWorld™ – Coming soon";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "SjonWorld",
  creator: "SjonWorld",
  publisher: "SjonWorld",
  keywords: ["SjonWorld", "Sjón World", "Sjon World", "coming soon"],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/images/favicon/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
      { url: "/images/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/favicon/favicon.ico",
    apple: [
      {
        url: "/images/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/images/favicon/site.webmanifest",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SjonWorld",
    title,
    description,
    images: [
      {
        url: "/images/background-logo.png",
        width: 6410,
        height: 4272,
        alt: "SjonWorld",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/background-logo.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0C0C0C",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SjonWorld",
    alternateName: ["Sjón World", "Sjon World"],
    url: siteUrl,
    description,
    sameAs: ["https://instagram.com/sjonworld"],
  };

  return (
    <html lang="en">
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Toaster
          position="top-center"
          theme="dark"
          toastOptions={{ duration: 4500 }}
        />
      </body>
    </html>
  );
}
