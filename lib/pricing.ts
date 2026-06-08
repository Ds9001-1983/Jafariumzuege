/* ==================================================================
   Preislogik für den Festpreis-Rechner (Sofort-Richtpreis im Hero).
   VERIFY: Alle Beträge sind plausible Beispiel-Richtwerte und müssen
   vom Kunden bestätigt/kalibriert werden. Der Rechner liefert bewusst
   nur eine SPANNE als unverbindliche Schätzung – der exakte Festpreis
   ergibt sich nach der kostenlosen Besichtigung.
   ================================================================== */

export type PriceOption = { id: string; label: string; value: number };

export const sizeOptions: PriceOption[] = [
  { id: "1z", label: "1 Zimmer", value: 390 },
  { id: "2z", label: "2 Zimmer", value: 690 },
  { id: "3z", label: "3 Zimmer", value: 990 },
  { id: "haus", label: "4+ / Haus", value: 1490 },
];

export const distanceOptions: PriceOption[] = [
  { id: "stadt", label: "In Cloppenburg", value: 0 },
  { id: "umkreis", label: "Umkreis (bis 30 km)", value: 120 },
  { id: "region", label: "Region (bis 80 km)", value: 280 },
  { id: "de", label: "Deutschlandweit", value: 650 },
];

export const accessOptions: PriceOption[] = [
  { id: "eg", label: "EG oder Aufzug", value: 0 },
  { id: "og12", label: "1.–2. OG ohne Aufzug", value: 90 },
  { id: "og3", label: "3. OG+ ohne Aufzug", value: 190 },
];

export const addonOptions: PriceOption[] = [
  { id: "pack", label: "Verpackungsservice", value: 180 },
  { id: "montage", label: "Möbelmontage", value: 150 },
  { id: "material", label: "Packmaterial gestellt", value: 90 },
];

/** Liefert eine gerundete Preisspanne (unverbindliche Schätzung). */
export function estimateRange(opts: {
  size: number;
  distance: number;
  access: number;
  addons: number;
}): { low: number; high: number } {
  const total = opts.size + opts.distance + opts.access + opts.addons;
  const round10 = (n: number) => Math.round(n / 10) * 10;
  return { low: round10(total * 0.9), high: round10(total * 1.12) };
}

/** „690 €" formatiert. */
export function euro(n: number): string {
  return `${n.toLocaleString("de-DE")} €`;
}
