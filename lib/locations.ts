/* ==================================================================
   Einsatzgebiet — EINE Datenquelle für die Einsatzgebiet-Sektion, den
   Teaser und das schema.org areaServed. Quelle: Website-Sektion
   „Unsere Einsatzgebiete" (Oldenburger Münsterland + deutschlandweit).
   ================================================================== */

export type LocationGroup = {
  title: string;
  intro: string;
  places: string[];
};

export const locationGroups: LocationGroup[] = [
  {
    title: "Cloppenburg & Umkreis",
    intro: "Unser Zuhause. Von hier sind wir schnell und auf kurzem Weg bei Ihnen.",
    places: [
      "Cloppenburg",
      "Garrel",
      "Molbergen",
      "Lastrup",
      "Löningen",
      "Friesoythe",
      "Essen (Oldb.)",
    ],
  },
  {
    title: "Oldenburger Münsterland",
    intro: "In der gesamten Region für Sie im Einsatz – zuverlässig und ortskundig.",
    places: ["Vechta", "Lohne", "Damme", "Dinklage", "Quakenbrück"],
  },
  {
    title: "Region & Großstädte",
    intro: "Auch über das Münsterland hinaus – und deutschlandweit auf Anfrage.",
    places: ["Oldenburg", "Osnabrück", "Bremen", "Emsland"],
  },
];

/* --- Für schema.org areaServed: Städte (City) vs. Regionen (AdministrativeArea) --- */

export const serviceCities: string[] = [
  "Cloppenburg",
  "Oldenburg",
  "Vechta",
  "Osnabrück",
  "Bremen",
  "Lohne",
  "Friesoythe",
  "Garrel",
  "Löningen",
  "Essen (Oldb.)",
  "Quakenbrück",
  "Damme",
  "Dinklage",
  "Molbergen",
  "Lastrup",
];

export const serviceRegions: string[] = ["Oldenburger Münsterland", "Emsland"];
