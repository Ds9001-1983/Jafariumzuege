/* ==================================================================
   SINGLE SOURCE OF TRUTH — Geschäftsdaten Jafari Umzug & Transportservice
   Quelle: Notion-Lead PROT-19 + bestehende Website jafari-umzuege.de.
   Jede Telefonnummer/Adresse im UI + JSON-LD stammt aus dieser Datei
   → NAP (Name/Adresse/Telefon) kann nicht auseinanderlaufen.
   ================================================================== */

// VERIFY: finale Produktiv-Domain bestätigen. Prototyp läuft auf Vercel-Preview.
export const SITE_URL = "https://www.jafari-umzuege.de";

export const business = {
  name: "Jafari Umzug & Transportservice",
  // VERIFY: Rechtsform + vollständiger Inhabername fürs Impressum bestätigen.
  legalName: "Jafari Umzug & Transportservice",
  owner: "Erfan Jafari",
  slogan: "Schnell. Sicher. Zuverlässig.",

  phone: {
    display: "0176 42970915",
    e164: "+4917642970915",
    href: "tel:+4917642970915",
  },

  // WhatsApp ist bei einer Umzugsfirma ein Primär-Kanal (Fotos der Räume senden).
  whatsappEnabled: true,
  whatsapp: {
    number: "4917642970915",
    href: "https://wa.me/4917642970915",
    // Vorbefüllte Nachricht wie auf der bestehenden Seite.
    hrefPrefilled:
      "https://wa.me/4917642970915?text=" +
      encodeURIComponent("Hallo, ich interessiere mich für einen Umzug."),
  },

  email: "jafari.transportservice@gmail.com",

  address: {
    street: "Wallfahrtsweg 6",
    postalCode: "49661",
    city: "Cloppenburg",
    region: "Niedersachsen",
    country: "DE",
  },

  // Exakte Koordinaten des Google-Business-Profils (Wallfahrtsweg 6).
  geo: { lat: 52.8574116, lng: 8.046786 },

  hours: "Mo–Sa 8:00–18:00 Uhr",
  openingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  opens: "08:00",
  closes: "18:00",

  experienceYears: 10,
  insurance: "Vollkasko-versichert bis 2 Mio. €",

  // Google-Business-Profil verifiziert (Stand 06/2026): Wert via Trustlocal-Spiegel
  // der Google-Rezensionen. VERIFY: exakten Stand (Wert/Anzahl) vor Launch im
  // Profil gegenprüfen — Bewertungsanzahl wächst laufend.
  rating: {
    value: 4.9,
    count: 30,
    source: "Google",
    isPlaceholder: false,
  },

  // Google-Business-Profil: "Jafari Umzug & Transportservice", Wallfahrtsweg 6,
  // 49661 Cloppenburg (Place-ID verifiziert über Google Maps, 06/2026).
  googlePlaceId: "ChIJEZfha6MVt0cRW8gJ1-Una24",
  googleMapsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJEZfha6MVt0cRW8gJ1-Una24",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJEZfha6MVt0cRW8gJ1-Una24",

  social: {
    instagram: "https://instagram.com/jafari_umzug",
    facebook: "https://facebook.com/jafari.umzug",
  },

  serviceAreaShort:
    "Cloppenburg, Oldenburg, Vechta, Osnabrück, Bremen und das gesamte Oldenburger Münsterland",
} as const;

/** Vollständige Anschrift einzeilig (Footer, Impressum). */
export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.city}`;
