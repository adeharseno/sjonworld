import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";

import "./globals.css";

const description = "Be the first to know when SJONWORLD launches.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sjonworld.com",
  ),
  title: "SjonWorld™ – Coming soon",
  description,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SJONWORLD",
    title: "SjonWorld™ – Coming soon",
    description,
  },
  twitter: {
    card: "summary",
    title: "SjonWorld™ – Coming soon",
    description,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0C0C0C",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
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
