import { business, SITE_URL } from "@/lib/business";
import { serviceCities, serviceRegions } from "@/lib/locations";
import { services, additionalServices, type Faq } from "@/lib/content";

const BUSINESS_ID = `${SITE_URL}/#business`;

/**
 * Globales MovingCompany (Subtyp von LocalBusiness). Das areaServed listet
 * alle Städte + Regionen, hasOfferCatalog alle Leistungen.
 */
export function movingCompanySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": BUSINESS_ID,
    name: business.name,
    alternateName: business.legalName,
    image: [`${SITE_URL}/images/jafari-logo.jpg`, `${SITE_URL}/opengraph-image`],
    logo: `${SITE_URL}/images/jafari-logo.jpg`,
    url: `${SITE_URL}/`,
    telephone: business.phone.e164,
    email: business.email,
    priceRange: "€€",
    founder: business.owner,
    slogan: business.slogan,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: business.openingDays,
        opens: business.opens,
        closes: business.closes,
      },
    ],
    hasMap: business.googleMapsUrl,
    sameAs: [
      business.social.instagram,
      business.social.facebook,
      business.googleMapsUrl,
    ],
    areaServed: [
      ...serviceCities.map((name) => ({ "@type": "City", name })),
      ...serviceRegions.map((name) => ({ "@type": "AdministrativeArea", name })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Umzugs- & Transportleistungen",
      itemListElement: [
        ...services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.short },
        })),
        ...additionalServices.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.text },
        })),
      ],
    },
    // Bewusst KEIN aggregateRating: Google wertet von Google selbst stammende
    // Bewertungen im eigenen Markup als "self-serving" und ignoriert sie.
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
