import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";

import "./globals.css";

const description = "Be the first to know when SJONWORLD launches.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sjonworld.com",
  ),
  title: "SJONWORLD | Coming Soon",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "SJONWORLD",
    title: "SJONWORLD | Coming Soon",
    description,
  },
  twitter: {
    card: "summary",
    title: "SJONWORLD | Coming Soon",
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
