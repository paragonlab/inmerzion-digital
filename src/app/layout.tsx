import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieConsent } from "@/components/CookieConsent";
import {
  GoogleAnalytics,
  consentDefaultInlineScript,
} from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { defaultOgImage, siteJsonLd } from "@/lib/seo";
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
    siteName: site.name,
    title: `${site.name} · ${site.company}`,
    description: site.description,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.company}`,
    description: site.description,
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "m4cexRq7rHQNNoL6ZK_D9g0sb0A1AKbxPW1zXY48Das",
  },
  other: {
    "llms-txt": "/llms.txt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.lang} className={`${syne.variable} ${figtree.variable} h-full`}>
      <head>
        <link rel="llms-txt" href="/llms.txt" />
        <script
          id="ga-consent-default"
          dangerouslySetInnerHTML={{ __html: consentDefaultInlineScript }}
        />
      </head>
      <body className="min-h-full antialiased">
        <JsonLd data={siteJsonLd()} />
        {children}
        <GoogleAnalytics />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
