import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { SectionHeading } from "@/components/site/section-heading";
import { CallButton } from "@/components/site/call-button";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { CtaBand } from "@/components/site/cta-band";
import { PrototypeBadge } from "@/components/site/prototype-badge";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/anim/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { pricePackages, priceIncludes } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Preise & Festpreisgarantie",
  description:
    "Transparente Preise mit Festpreisgarantie: Nach einer kostenlosen Besichtigung erhalten Sie von Jafari Umzug & Transportservice ein verbindliches Angebot – ohne versteckte Kosten.",
  alternates: { canonical: "/preise" },
};

const factors = [
  { icon: "Boxes", title: "Umzugsvolumen", text: "Anzahl Zimmer, Möbel und Kartons." },
  { icon: "Route", title: "Entfernung", text: "Strecke zwischen alter und neuer Adresse." },
  { icon: "Building2", title: "Etage & Zugang", text: "Stockwerk, Aufzug, Halteverbotszone." },
  { icon: "Sparkles", title: "Zusatzleistungen", text: "Verpackung, Montage, Einlagerung u. v. m." },
];

export default function PreisePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Preise", path: "/preise" },
        ])}
      />

      <PageHero
        eyebrow="Transparente Preise"
        title="Preise & Festpreisgarantie"
        sub="Jeder Umzug ist anders – deshalb erhalten Sie nach einer kostenlosen Besichtigung ein verbindliches Festpreisangebot. Was wir nennen, gilt: keine versteckten Kosten."
        breadcrumb={[{ name: "Startseite", href: "/" }, { name: "Preise" }]}
      >
        <CallButton />
      </PageHero>

      {/* So entsteht Ihr Preis */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="So entsteht Ihr Preis"
            title="Fair kalkuliert – nach Ihrem Bedarf"
            sub="Diese Faktoren bestimmen den Festpreis. Bei der kostenlosen Besichtigung erfassen wir alles genau."
          />
          <Reveal stagger={0.08} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {factors.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-3 rounded-card border border-line bg-white p-6 shadow-soft"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={f.icon} className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Richtwert-Pakete */}
      <section className="bg-paper-dim py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Orientierung"
            title="Richtwerte für Ihren Umzug"
            sub="Zur ersten Orientierung – Ihr exakter Festpreis ergibt sich nach der kostenlosen Besichtigung."
          />
          <div className="mx-auto mt-6 flex justify-center">
            <PrototypeBadge>Beispiel-Richtwerte – noch zu bestätigen</PrototypeBadge>
          </div>

          <Reveal stagger={0.1} className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricePackages.map((p) => (
              <div
                key={p.name}
                className={cn(
                  "flex flex-col gap-5 rounded-2xl border bg-white p-8 shadow-soft",
                  p.highlight ? "border-accent ring-1 ring-accent/30" : "border-line",
                )}
              >
                {p.highlight ? (
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Beliebt
                  </span>
                ) : null}
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl font-semibold text-ink">{p.name}</h3>
                  <p className="text-sm text-muted">{p.forWhom}</p>
                </div>
                <p className="font-display text-3xl font-bold text-ink">{p.priceFrom}</p>
                <ul className="flex flex-col gap-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-ink/85">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                        <Check className="size-3.5" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <CallButton className="mt-auto w-full" size="md" />
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Inklusive */}
      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Immer inklusive"
            title="Das steckt in jedem Angebot"
            sub="Bei Jafari sind die wichtigsten Leistungen selbstverständlich – ohne Aufpreis-Überraschungen."
          />
          <Reveal as="ul" stagger={0.08} className="grid gap-4 sm:grid-cols-2">
            {priceIncludes.map((it) => (
              <li
                key={it}
                className="flex items-start gap-3 rounded-card border border-line bg-white p-5 shadow-soft"
              >
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                  <Check className="size-4" />
                </span>
                <span className="text-ink/85">{it}</span>
              </li>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container className="flex flex-col items-center gap-4 text-center">
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Sie wünschen einen konkreten Preis? Senden Sie uns einfach Fotos Ihrer Räume per
            WhatsApp – Sie erhalten zügig ein unverbindliches Festpreisangebot.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton
              variant="whatsapp"
              message="Hallo, ich möchte ein Festpreis-Angebot – ich sende gleich Fotos meiner Räume."
            />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Kostenloses Festpreis-Angebot anfordern"
        sub="Unverbindlich und transparent – wir melden uns innerhalb von 24 Stunden."
      />
    </>
  );
}
