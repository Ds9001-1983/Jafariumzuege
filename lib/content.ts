/* ==================================================================
   Marketing-Content (Single Source of Truth für Texte).
   Quelle: bestehende Website jafari-umzuege.de (Leistungen, Ablauf,
   Bewertungen wörtlich übernommen) + Notion-Lead PROT-19.
   Icons als String-Key (siehe components/ui/icon.tsx).
   ================================================================== */

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
  icon: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "privatumzug",
    title: "Privatumzug",
    short: "Stressfreier Umzug für Ihr Zuhause – von der Planung bis zur letzten Kiste.",
    long: "Stressfreier Umzug für Ihr Zuhause. Wir kümmern uns um jeden Schritt – von der Planung bis zum Auspacken. Sie lehnen sich zurück, wir packen an.",
    bullets: [
      "Kostenlose Besichtigung & Angebot",
      "Professionelles Ein- und Auspacken",
      "Möbelmontage & -demontage",
      "Versichert und sorgfältig",
    ],
    icon: "Home",
    image: "/images/jafari-team-carrying.png",
  },
  {
    slug: "firmenumzug",
    title: "Firmenumzug",
    short: "Professionelle Büroumzüge mit minimaler Ausfallzeit – auch am Wochenende.",
    long: "Professionelle Büroumzüge mit minimaler Ausfallzeit. Wir planen Ihren Umzug auch außerhalb der Geschäftszeiten, damit Ihr Betrieb weiterläuft.",
    bullets: [
      "Umzug auch außerhalb der Geschäftszeiten",
      "IT-Equipment sicher transportiert",
      "Aktenvernichtung auf Wunsch",
      "Schlüsselfertige Übergabe",
    ],
    icon: "Building2",
    image: "/images/jafari-team-loading.png",
  },
  {
    slug: "haushaltsaufloesung",
    title: "Haushaltsauflösung",
    short: "Komplette Auflösung von Haushalten – sensibel, diskret und gründlich.",
    long: "Komplette Auflösung von Haushalten – sensibel und gründlich. Ideal bei Erbschaft oder Umzug ins Pflegeheim. Wir gehen respektvoll mit Ihrer Situation um.",
    bullets: [
      "Wertanrechnung auf Wunsch",
      "Besenreine Übergabe",
      "Entsorgung & Spenden",
      "Diskret und respektvoll",
    ],
    icon: "Boxes",
    image: "/images/jafari-consultation.png",
  },
  {
    slug: "nationale-transporte",
    title: "Nationale Transporte",
    short: "Deutschlandweite Umzüge und Transporte – von Cloppenburg überallhin.",
    long: "Deutschlandweite Umzüge und Transporte. Von Cloppenburg nach Hamburg, Berlin, München und überall hin – mit fester Terminzusage und transparenten Preisen.",
    bullets: [
      "Deutschlandweit im Einsatz",
      "Feste Terminzusage",
      "Moderne Fahrzeugflotte",
      "Transparente Preise",
    ],
    icon: "Truck",
    image: "/images/jafari-team-truck.png",
  },
  {
    slug: "entruempelung",
    title: "Entrümpelung",
    short: "Fachgerechte Entrümpelung von Wohnungen, Häusern, Kellern und Dachböden.",
    long: "Fachgerechte Entsorgung und Entrümpelung von Wohnungen, Häusern, Kellern und Dachböden. Schnell, gründlich und umweltgerecht – am Ende ist alles besenrein.",
    bullets: [
      "Schnell & gründlich",
      "Umweltgerechte Entsorgung",
      "Auch Sperrmüll & Elektroschrott",
      "Besenreine Räumung",
    ],
    icon: "Trash2",
    image: "/images/jafari-team-interior.png",
  },
  {
    slug: "transportservice",
    title: "Transportservice",
    short: "Zuverlässiger Transport von Möbeln und Gütern – regional und überregional.",
    long: "Zuverlässiger Transport von Möbeln, Geräten und anderen Gütern – regional und überregional. Auch Einzelstücke vom Möbelhaus oder Baumarkt, auf Wunsch mit Aufbau.",
    bullets: [
      "Einzelmöbel & Geräte",
      "Baumärkte & Möbelhäuser",
      "Flexible Termine",
      "Auf Wunsch mit Aufbau",
    ],
    icon: "Sofa",
    image: "/images/jafari-team-lift.png",
  },
];

export type Usp = { icon: string; title: string; text: string };

/** „Warum Jafari" – 5 Vertrauensfaktoren (Quelle: Website-Vertrauenssektion). */
export const trustFactors: Usp[] = [
  {
    icon: "ShieldCheck",
    title: "Vollversichert",
    text: "Ihr Umzugsgut ist über eine Transportversicherung bis 2 Mio. € abgesichert – auf dem gesamten Weg.",
  },
  {
    icon: "Clock",
    title: "Pünktlich garantiert",
    text: "Feste Terminzusage statt vager Zeitfenster. Wenn wir kommen, sind wir da – verlässlich.",
  },
  {
    icon: "BadgeEuro",
    title: "Festpreisgarantie",
    text: "Was wir im Angebot nennen, gilt. Keine versteckten Kosten nach dem Umzug – versprochen.",
  },
  {
    icon: "Heart",
    title: "Familiärer Service",
    text: "Ein eingespieltes Team statt anonymer Subunternehmer – persönlich, freundlich und sorgfältig.",
  },
  {
    icon: "Truck",
    title: "Moderne Fahrzeugflotte",
    text: "Gepflegte, gut ausgestattete Fahrzeuge für jeden Umzug – vom Einzelstück bis zum Komplettumzug.",
  },
];

export type TrustItem = {
  icon: string;
  value: string;
  label: string;
  countTo?: number;
  prefix?: string;
  suffix?: string;
};

export const trustItems: TrustItem[] = [
  { icon: "Truck", value: "1000+", label: "Erfolgreiche Umzüge", countTo: 1000, suffix: "+" },
  { icon: "Heart", value: "99 %", label: "Kundenzufriedenheit", countTo: 99, suffix: " %" },
  { icon: "Award", value: "10+ Jahre", label: "Erfahrung", countTo: 10, suffix: "+ Jahre" },
  { icon: "Clock", value: "24h", label: "Antwortzeit" },
];

export type Step = { icon: string; title: string; text: string };

/** 4-Schritte-Ablauf (Quelle: Website-Sektion „So funktioniert's"). */
export const steps: Step[] = [
  {
    icon: "Phone",
    title: "Anfrage stellen",
    text: "Sie erreichen uns telefonisch, per WhatsApp oder über das Formular. Wir klären, welche Leistungen Sie benötigen.",
  },
  {
    icon: "Search",
    title: "Kostenlose Besichtigung",
    text: "Wir verschaffen uns vor Ort einen genauen Überblick und erstellen ein verbindliches Festpreisangebot.",
  },
  {
    icon: "Truck",
    title: "Professioneller Umzug",
    text: "Unser Team übernimmt alles: Ausräumen, Verpacken, sicherer Transport und Einräumen. Sie rühren keinen Finger.",
  },
  {
    icon: "BadgeCheck",
    title: "Einzug & Abschluss",
    text: "Wir übergeben die Räume besenrein und im einwandfreien Zustand – zuverlässig und ohne unnötigen Aufwand.",
  },
];

export type Faq = { q: string; a: string };

// VERIFY: Die Fragen stammen wörtlich von der Website; die ANTWORTEN wurden
// branchenüblich/plausibel entworfen (Live-Accordion nicht auslesbar) und sind
// vor der Live-Schaltung vom Kunden zu bestätigen.
export const faqs: Faq[] = [
  {
    q: "Wie viel kostet ein Umzug?",
    a: "Die Kosten hängen von Umzugsvolumen, Entfernung, Etage und den gewünschten Zusatzleistungen ab. Nach einer kostenlosen Besichtigung erhalten Sie von uns ein verbindliches Festpreisangebot – ganz ohne versteckte Kosten.",
  },
  {
    q: "Wie lange dauert ein Umzug?",
    a: "Ein durchschnittlicher Wohnungsumzug dauert je nach Größe meist einen halben bis ganzen Tag. Den genauen Zeitrahmen besprechen wir mit Ihnen bei der Besichtigung.",
  },
  {
    q: "Bieten Sie auch Haushaltsauflösungen an?",
    a: "Ja. Wir lösen Haushalte komplett, besenrein und diskret auf – auf Wunsch mit Wertanrechnung sowie fachgerechter Entsorgung und Spende noch brauchbarer Gegenstände.",
  },
  {
    q: "Sind meine Sachen während des Umzugs versichert?",
    a: "Ja. Ihr Umzugsgut ist bei uns über eine Transportversicherung bis 2 Mio. € abgesichert. So ist Ihr Hab und Gut auf dem gesamten Weg geschützt.",
  },
  {
    q: "Wie weit im Voraus sollte ich meinen Umzug buchen?",
    a: "Wir empfehlen eine Vorlaufzeit von 2–4 Wochen, damit Ihr Wunschtermin sicher klappt. Kurzfristige Umzüge sind nach Verfügbarkeit aber ebenfalls möglich – fragen Sie einfach an.",
  },
  {
    q: "Führen Sie auch Umzüge ins Ausland durch?",
    a: "Unser Schwerpunkt sind deutschlandweite Umzüge und Transporte. Für Umzüge ins benachbarte Ausland sprechen Sie uns gerne an – wir prüfen Ihre Anfrage individuell.",
  },
];

export type Testimonial = {
  name: string;
  location?: string;
  quote: string;
  isPlaceholder?: boolean;
};

// VERIFY: Bewertungen wörtlich von der Website (Trustindex) übernommen.
// Echtheit/Quelle vor Launch bestätigen (siehe README).
export const testimonials: Testimonial[] = [
  {
    name: "Laura Fischer",
    quote:
      "Ich bin sehr zufrieden mit dem Service von Jafari Umzug & Transportservice. Die Kommunikation war von Anfang an professionell und zuverlässig. Der Umzug wurde pünktlich, sorgfältig und effizient durchgeführt. Klare Empfehlung!",
  },
  {
    name: "Milina Rudi",
    quote:
      "Einfach nur gut! Das Team ist sehr nett und hilfsbereit, erfüllt jeden Wunsch und arbeitet sehr gut und sauber. Kann ich nur empfehlen. Top Umzugsunternehmen. Sehr fleißig, super freundlich und sehr fair im Preis!",
  },
  {
    name: "Hanna Müller",
    quote:
      "Sehr zuverlässiger und professioneller Service von Jafari Umzug & Transportservice. Der Umzug lief schnell, organisiert und ohne Probleme. Das Team war freundlich und pünktlich. Absolut empfehlenswert!",
  },
  {
    name: "Osman Alshaboo",
    quote:
      "Sehr zuverlässiger und professioneller Transportservice. Der Umzug lief schnell, sauber und ohne Probleme. Das Team war freundlich und sorgfältig mit den Möbeln. Klare Empfehlung!",
  },
  {
    name: "Layc S.",
    quote:
      "Sehr zuverlässiger Umzugs- und Transportservice. Pünktlich, ordentlich und kompetent. Absolut empfehlenswert.",
  },
  {
    name: "Mariana K.",
    quote:
      "Sehr freundlicher und zuverlässiger junger Mann. Er hat uns beim Transport sehr geholfen, war pünktlich, vorsichtig und sehr hilfsbereit. Alles lief reibungslos. Absolut empfehlenswert!",
  },
];

/* ---------------- Preise (Richtwerte für /preise) ---------------- */

export type PricePackage = {
  name: string;
  priceFrom: string;
  forWhom: string;
  points: string[];
  highlight?: boolean;
};

// VERIFY: Beispiel-Richtwerte! Alle Preise vom Kunden bestätigen lassen.
// Das 890-€-Beispiel stammt aus dem WhatsApp-Flow der bestehenden Website.
export const pricePackages: PricePackage[] = [
  {
    name: "Single & 1-Zimmer",
    priceFrom: "ab 390 €",
    forWhom: "Kleiner Umzug, Studierende, einzelne Zimmer",
    points: ["Bis ca. 1–1,5 Zimmer", "2 erfahrene Umzugshelfer", "Transporter inklusive", "Festpreis nach Besichtigung"],
  },
  {
    name: "Familie & 2–3 Zimmer",
    priceFrom: "ab 890 €",
    forWhom: "Klassischer Wohnungsumzug",
    points: [
      "Bis ca. 2–3 Zimmer",
      "Inkl. Verpackungsmaterial",
      "Möbelmontage & -demontage",
      "Versichert bis 2 Mio. €",
    ],
    highlight: true,
  },
  {
    name: "Haus & Firma",
    priceFrom: "individuell",
    forWhom: "Großer Umzug, Haus oder Büro",
    points: [
      "Ab 4 Zimmer / Gewerbe",
      "Komplett-Service möglich",
      "Auch außerhalb der Geschäftszeiten",
      "Persönlicher Ansprechpartner",
    ],
  },
];

export const priceIncludes: string[] = [
  "Kostenlose Besichtigung & verbindliches Festpreisangebot",
  "Versicherter Transport bis 2 Mio. €",
  "Erfahrene & geschulte Umzugshelfer",
  "Flexible Termine – auch am Wochenende",
];
