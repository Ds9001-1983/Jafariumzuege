import Link from "next/link";
import { X, Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Button } from "@/components/ui/button";
import { SplitReveal } from "@/components/anim/split-reveal";
import { Reveal } from "@/components/anim/reveal";

type Contrast = { pain: string; solution: string; detail: string };

const contrasts: Contrast[] = [
  {
    pain: "Versteckte Nachforderungen am Umzugstag",
    solution: "Festpreisgarantie",
    detail: "Der Preis aus dem Angebot gilt – keine bösen Überraschungen, wenn der Wagen voll ist.",
  },
  {
    pain: "Unklare, vage Termine",
    solution: "Feste Terminzusage",
    detail: "Sie bekommen einen verbindlichen Termin – und wir sind pünktlich da.",
  },
  {
    pain: "Beschädigte Möbel ohne Absicherung",
    solution: "Versichert bis 2 Mio. €",
    detail: "Ihr Hab und Gut ist auf dem gesamten Weg über eine Transportversicherung geschützt.",
  },
  {
    pain: "Tagelang auf eine Antwort warten",
    solution: "Antwort in 24 Stunden",
    detail: "Per Formular, Telefon oder WhatsApp – schnell, persönlich und unkompliziert.",
  },
];

/** Dunkles, editoriales Band: dreht die typischen Umzugs-Frust-Punkte in Stärken um. */
export function WhyDifferent() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white lg:py-28">
      <div className="bg-grid">
        <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Eyebrow tone="light">Schluss mit Umzugs-Stress</Eyebrow>
            <SplitReveal
              as="h2"
              text="So macht Jafari den Unterschied"
              className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-semibold leading-[1.05] text-white"
            />
            <p className="max-w-md text-lg leading-relaxed text-white/70">
              Die typischen Ärgernisse beim Umzug? Bei uns von vornherein ausgeschlossen – dafür
              stehen wir mit unserem Namen.
            </p>
            <Button asChild variant="signal" size="lg" className="self-start">
              <Link href="/#rechner">
                Richtpreis berechnen
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>

          <Reveal
            as="ul"
            stagger={0.09}
            className="flex flex-col divide-y divide-white/10 border-y border-white/10"
          >
            {contrasts.map((c) => (
              <li
                key={c.solution}
                className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <div className="flex items-center gap-2.5 text-white/40 sm:w-[38%]">
                  <X className="size-4 shrink-0" />
                  <span className="text-sm line-through decoration-white/30">{c.pain}</span>
                </div>
                <div className="flex items-start gap-3 sm:flex-1">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-signal text-white">
                    <Check className="size-4" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-display text-lg font-semibold text-white">{c.solution}</h3>
                    <p className="text-sm leading-relaxed text-white/65">{c.detail}</p>
                  </div>
                </div>
              </li>
            ))}
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
