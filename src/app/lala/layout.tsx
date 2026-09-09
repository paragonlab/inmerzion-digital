import type { Metadata } from "next";
import { Fraunces, Quicksand } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-lala-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-lala-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    absolute: "Lala Softfit · @lala.softfit",
  },
  description:
    "Links afiliados y recomendaciones de Lala Softfit — influencer digital soft-girl de fitness y lifestyle. Instagram @lala.softfit.",
  alternates: { canonical: "/lala" },
  openGraph: {
    title: "Lala Softfit · @lala.softfit",
    description:
      "Mis favoritos soft-girl: termo, leggings, skincare y más. Links de afiliado en un solo lugar.",
    url: "/lala",
    siteName: "Inmerzion",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/lala/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lala Softfit — @lala.softfit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lala Softfit · @lala.softfit",
    description:
      "Mis favoritos soft-girl: termo, leggings, skincare y más. Links de afiliado en un solo lugar.",
    images: ["/lala/opengraph-image"],
  },
};

export default function LalaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`lala-theme ${fraunces.variable} ${quicksand.variable}`}
      style={{
        fontFamily: "var(--font-lala-body), system-ui, sans-serif",
      }}
    >
      {children}
    </div>
  );
}
