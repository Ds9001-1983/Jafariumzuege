import { z } from "zod";

/** Auswählbare Umzugsarten (= Leistungen, inkl. Zusatzleistungen der Altseite/GBP). */
export const moveTypes = [
  "Privatumzug",
  "Firmenumzug",
  "Haushaltsauflösung",
  "Nationaler Transport",
  "Entrümpelung",
  "Transportservice",
  "Möbelmontage / -demontage",
  "Verpackungsservice",
  "Einlagerung",
  "Kurier- / Eiltransport",
] as const;

/**
 * Zod-Schema des Lead-Formulars. Wird sowohl im Client (react-hook-form)
 * als auch server-seitig in der API-Route verwendet → Single Source.
 */
export const leadSchema = z.object({
  moveType: z.string().min(1, "Bitte wählen Sie eine Leistung."),
  fromAddress: z.string().min(2, "Bitte geben Sie an, von wo Sie umziehen."),
  toAddress: z.string().optional().or(z.literal("")),
  moveDate: z.string().optional().or(z.literal("")),
  size: z.string().optional().or(z.literal("")),
  name: z.string().min(2, "Bitte geben Sie Ihren Namen an."),
  phone: z.string().min(5, "Bitte geben Sie eine Telefonnummer an, unter der wir Sie erreichen."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail an.").optional().or(z.literal("")),
  message: z.string().optional().or(z.literal("")),
  consent: z
    .boolean()
    .refine((v) => v === true, { message: "Bitte stimmen Sie der Datenschutzerklärung zu." }),
  // Honeypot – ausgefülltes Feld wird in der API still verworfen (Spam-Schutz).
  // Bewusst ohne max(0): sonst bekämen Bots einen 400 statt des Fake-Erfolgs.
  website: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
