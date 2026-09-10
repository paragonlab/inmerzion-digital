import type { Metadata } from "next";
import { offerings, site } from "@/lib/site";

const LALA_INSTAGRAM = "https://www.instagram.com/lala.softfit/";

export const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Inmerzion · Experiencias digitales inmersivas",
} as const;

/** Per-page Open Graph + Twitter overrides (avoids inheriting root home URL). */
export function pageSocialMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  const url = path === "/" ? site.url : `${site.url}${path}`;
  return {
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title,
      description,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}

/** Site-wide @graph for Organization, WebSite, and ProfessionalService. */
export function siteJsonLd() {
  const serviceCatalog = offerings.map((o) => ({
    "@type": "Offer",
    name: o.title,
    description: o.description,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.company,
        alternateName: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phoneTel,
        description: site.description,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: site.email,
          telephone: site.phoneTel,
          availableLanguage: ["Spanish", "es-MX"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: site.lang,
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: site.name,
        url: site.url,
        description: site.description,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: "MX",
        email: site.email,
        telephone: site.phoneTel,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Inmerzion",
          itemListElement: serviceCatalog,
        },
      },
    ],
  };
}

/** Person schema for Lala Softfit (digital influencer). */
export function lalaPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lala Softfit",
    alternateName: "@lala.softfit",
    url: `${site.url}/lala`,
    description:
      "Influencer digital soft-girl de fitness y lifestyle. Talento virtual de Inmerzion · Paragon Labs.",
    sameAs: [LALA_INSTAGRAM],
    worksFor: {
      "@type": "Organization",
      name: site.company,
      alternateName: site.name,
      url: site.url,
    },
  };
}

export { LALA_INSTAGRAM };
