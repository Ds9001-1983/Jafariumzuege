import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { SectionHeading } from "@/components/site/section-heading";
import { HeroBackground } from "@/components/site/hero-background";
import { RatingBadge } from "@/components/site/rating-badge";
import { Umzugsrechner } from "@/components/site/umzugsrechner";
import { TrustBar } from "@/components/site/trust-bar";
import { WhyDifferent } from "@/components/site/why-different";
import { AboutJafari } from "@/components/site/about-jafari";
import { ServiceGrid } from "@/components/site/service-grid";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { FaqSection } from "@/components/site/faq-section";
import { AreaPills } from "@/components/site/area-list";
import { TestimonialMarquee } from "@/components/site/testimonials";
import { GoogleReviewCta } from "@/components/site/google-review-cta";
import { ContactSection } from "@/components/site/contact-section";
import { CtaBand } from "@/components/site/cta-band";
import { CallButton } from "@/components/site/call-button";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { SplitReveal } from "@/components/anim/split-reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/seo/schema";
import { services, steps, faqs } from "@/lib/content";

const heroProofs = ["Festpreisgarantie", "Versichert bis 2 Mio. €", "Pünktlich garantiert"];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* ---------------- HERO (split: Story + Festpreis-Rechner) ---------------- */}
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <HeroBackground
          src="/images/jafari-team-truck.jpg"
          alt="Jafari Umzug & Transportservice – Team mit Umzugswagen in Cloppenburg"
        />
        <Container className="relative z-10 grid items-center gap-10 pb-20 pt-32 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pt-36">
          <div className="max-w-xl">
            <Eyebrow tone="light" className="mb-5">
              Umzugsunternehmen · Cloppenburg &amp; Oldenburger Münsterland
            </Eyebrow>
            <h1 className="font-display text-[clamp(2.4rem,6.5vw,4.4rem)] font-bold leading-[1.03] text-white">
              <SplitReveal as="span" text="Ihr Umzug zum Festpreis." trigger="load" className="block" />
              <SplitReveal
                as="span"
                text="Richtpreis in 60 Sekunden."
                trigger="load"
                delay={0.28}
                className="block text-accent-glow"
              />
            </h1>
            <p className="mt-6 max-w-lg text-lg text-white/80 sm:text-xl">
              Privatumzug, Firmenumzug &amp; Transport – versichert bis 2 Mio. €, pünktlich und ohne
              versteckte Kosten. Sagen Sie uns kurz, was ansteht, und Sie sehen sofort Ihren
              Richtpreis.
            </p>
            <div className="mt-7">
              <RatingBadge tone="light" />
            </div>
            <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-white/75">
              {heroProofs.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Check className="size-4 text-accent-glow" />
                  {p}
                </li>
              ))}
            </ul>
            {/* Mobil liegt der Rechner unter dem Fold — direkter Weg dorthin + WhatsApp. */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:hidden">
              <Button asChild variant="signal" size="lg">
                <Link href="/#rechner">
                  Richtpreis in 60 Sek. berechnen
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <WhatsAppButton variant="whatsapp" />
            </div>
          </div>

          {/* Festpreis-Rechner – der zentrale Conversion-Motor */}
          <div id="rechner" className="scroll-mt-28">
            <Umzugsrechner />
          </div>
        </Container>
      </section>

      {/* ---------------- PROOF-BAND (überlappt Hero) ---------------- */}
      <Container className="relative z-20 -mt-12 sm:-mt-16">
        <TrustBar />
      </Container>

      {/* ---------------- SO MACHT JAFARI ES ANDERS (dunkles Band) ---------------- */}
      <WhyDifferent />

      {/* ---------------- ÜBER JAFARI (Foto + Siegel) ---------------- */}
      <AboutJafari />

      {/* ---------------- ABLAUF (Routen-Timeline) ---------------- */}
      <section id="ablauf" className="scroll-mt-24 bg-paper-dim py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="So einfach geht's"
            title="In vier Schritten zum stressfreien Umzug"
            sub="Strukturiert, transparent und zuverlässig – Sie wissen jederzeit, was als Nächstes passiert."
          />
          <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {/* Routen-Linie (Desktop) */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden border-t-2 border-dashed border-accent/30 lg:block"
            />
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
              >
                <span className="relative z-10 grid size-14 place-items-center rounded-full border-4 border-paper-dim bg-ink font-display text-xl font-bold text-white shadow-soft">
                  {i + 1}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  <Icon name={s.icon} className="size-4" />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="font-display text-xl font-semibold text-ink">
              Fertig – zuverlässig, strukturiert und ohne unnötigen Aufwand.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <Button asChild variant="outline" size="lg">
                <Link href="/#kontakt">
                  Online Anfrage stellen
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- LEISTUNGEN ---------------- */}
      <section id="leistungen" className="scroll-mt-24 py-20 lg:py-28">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Alles aus einer Hand"
              title="Unsere Leistungen"
              sub="Von der Planung bis zur Umsetzung – Jafari bietet Ihnen einen Rundum-Service für Ihren Umzug."
            />
            <Button asChild variant="outline" size="lg" className="shrink-0">
              <Link href="/leistungen">
                Alle Leistungen im Detail
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
          <ServiceGrid items={services} className="mt-12" />
        </Container>
      </section>

      {/* ---------------- BEWERTUNGEN ---------------- */}
      <section className="bg-paper-dim py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Ausgezeichnet bewertet"
            title="Das sagen unsere Kundinnen und Kunden"
          />
          <div className="mt-7 flex justify-center">
            <RatingBadge />
          </div>
        </Container>
        <div className="mt-12">
          <TestimonialMarquee />
        </div>
        <Container className="mt-12">
          <GoogleReviewCta />
        </Container>
        <Container className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="font-display text-xl font-semibold text-ink">
            Werden Sie unser nächster zufriedener Kunde.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="signal" size="lg">
              <Link href="/#rechner">
                Richtpreis berechnen
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <CallButton variant="outline" />
          </div>
        </Container>
      </section>

      {/* ---------------- EINSATZGEBIETE ---------------- */}
      <section id="einsatzgebiete" className="scroll-mt-24 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Unsere Einsatzgebiete"
              title="Wir sind in Ihrer Nähe für Sie da"
              sub="Jafari ist in Cloppenburg und dem gesamten Oldenburger Münsterland für Sie im Einsatz – und auf Anfrage deutschlandweit. Ihr Ort ist nicht dabei? Fragen Sie einfach an."
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton />
              <WhatsAppButton variant="whatsapp" />
            </div>
          </div>
          <AreaPills />
        </Container>
      </section>

      {/* ---------------- WHATSAPP ---------------- */}
      <WhatsAppCta />

      {/* ---------------- FAQ ---------------- */}
      <section id="faq" className="scroll-mt-24 py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Häufige Fragen" title="Gut zu wissen" />
            <p className="text-lg leading-relaxed text-muted">
              Ihre Frage steht hier nicht? Rufen Sie uns an oder schreiben Sie per WhatsApp – wir
              helfen Ihnen gern weiter.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CallButton className="self-start" />
              <WhatsAppButton variant="whatsapp" />
            </div>
          </div>
          <FaqSection items={faqs} />
        </Container>
      </section>

      {/* ---------------- KONTAKT ---------------- */}
      <ContactSection />

      {/* ---------------- FINAL CTA ---------------- */}
      <CtaBand
        title="Bereit für einen stressfreien Umzug?"
        sub="Schnell. Sicher. Zuverlässig. – Berechnen Sie Ihren Richtpreis oder rufen Sie direkt an."
      />
    </>
  );
}
