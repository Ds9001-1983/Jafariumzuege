import { z } from "zod";

/** Auswählbare Umzugsarten (= Leistungen). */
export const moveTypes = [
  "Privatumzug",
  "Firmenumzug",
  "Haushaltsauflösung",
  "Nationaler Transport",
  "Entrümpelung",
  "Transportservice",
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
  // Honeypot – muss leer bleiben (Spam-Schutz).
  website: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
