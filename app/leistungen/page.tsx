import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";
import { PriceBadge } from "@/components/site/price-badge";
import { CallButton } from "@/components/site/call-button";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { SectionHeading } from "@/components/site/section-heading";
import { FaqSection } from "@/components/site/faq-section";
import { CtaBand } from "@/components/site/cta-band";
import { Icon } from "@/components/ui/icon";
import { SmartImage } from "@/components/ui/smart-image";
import { Reveal } from "@/components/anim/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/seo/schema";
import { services, additionalServices, faqs } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Leistungen – Privatumzug, Firmenumzug, Haushaltsauflösung & Transport",
  description:
    "Alle Leistungen von Jafari Umzug & Transportservice: Privatumzug, Firmenumzug, Haushaltsauflösung, nationale Transporte, Entrümpelung, Transportservice, Verpackungsservice, Möbelmontage, Einlagerung und Kuriertransporte – versichert und zum Festpreis.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Startseite", path: "/" },
            { name: "Leistungen", path: "/leistungen" },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Alles aus einer Hand"
        title="Unsere Umzugs-Leistungen"
        sub="Von der Planung bis zur Umsetzung – Jafari bietet Ihnen einen Rundum-Service für Ihren Umzug in Cloppenburg und überall hin."
        breadcrumb={[{ name: "Startseite", href: "/" }, { name: "Leistungen" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <PriceBadge tone="light" />
          <CallButton />
        </div>
      </PageHero>

      {/* Detail-Blöcke je Leistung (mit Bulletpoints) */}
      <section className="py-20 lg:py-28">
        <Container className="flex flex-col gap-16 lg:gap-24">
          {services.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <Reveal
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-ink to-accent-deep shadow-soft",
                    flip && "lg:order-2",
                  )}
                >
                  <SmartImage
                    src={s.image}
                    alt={`${s.title} – Jafari Umzug & Transportservice`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </Reveal>
                <div className="flex flex-col gap-5">
                  <span className="inline-flex w-fit items-center gap-2.5 rounded-full bg-accent/10 px-3.5 py-1.5 text-sm font-semibold text-accent">
                    <Icon name={s.icon} className="size-4" />
                    {s.title}
                  </span>
                  <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-semibold text-ink">
                    {s.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-muted">{s.long}</p>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-ink/85">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                          <Check className="size-3.5" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <CallButton className="mt-1 self-start" size="md" />
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* Zusatzleistungen (Altseite + Google-Kategorien) als kompakte Karten */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Darüber hinaus"
            title="Weitere Leistungen"
            sub="Auch das übernehmen wir für Sie – einzeln buchbar oder als Teil Ihres Umzugs."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((s) => (
              <li
                key={s.title}
                className="flex flex-col gap-3 rounded-card border border-line bg-white p-6 shadow-soft"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-paper-dim py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Häufige Fragen" title="Gut zu wissen" />
            <p className="text-lg leading-relaxed text-muted">
              Noch Fragen zu einer Leistung oder zum Festpreis? Rufen Sie uns an oder schreiben Sie
              per WhatsApp – wir beraten Sie ehrlich.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <WhatsAppButton variant="whatsapp" />
            </div>
          </div>
          <FaqSection items={faqs} />
        </Container>
      </section>

      <CtaBand
        title="Welche Leistung dürfen wir für Sie übernehmen?"
        sub="Fordern Sie Ihr kostenloses Festpreis-Angebot an – wir melden uns innerhalb von 24 Stunden."
      />
    </>
  );
}
