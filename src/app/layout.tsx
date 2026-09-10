import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.company}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.company }],
  creator: site.company,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.company}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.company}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "m4cexRq7rHQNNoL6ZK_D9g0sb0A1AKbxPW1zXY48Das",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.lang} className={`${syne.variable} ${figtree.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
