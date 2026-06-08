import { X, Check } from "lucide-react";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
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

/** Dreht die typischen Umzugs-Frust-Punkte in Jafari-Stärken um. */
export function WhyDifferent() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Schluss mit Umzugs-Stress"
          title="So macht Jafari den Unterschied"
          sub="Die typischen Ärgernisse beim Umzug? Bei uns von vornherein ausgeschlossen."
        />
        <Reveal stagger={0.09} className="mt-12 grid gap-5 sm:grid-cols-2">
          {contrasts.map((c) => (
            <div
              key={c.solution}
              className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-7 shadow-soft"
            >
              <div className="flex items-center gap-2.5 text-muted">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-ink/[0.05] text-ink/40">
                  <X className="size-3.5" />
                </span>
                <span className="text-sm line-through decoration-ink/25">{c.pain}</span>
              </div>
              <div className="h-px bg-line" />
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-accent text-white">
                  <Check className="size-4" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg font-semibold text-ink">{c.solution}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-muted">{c.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
