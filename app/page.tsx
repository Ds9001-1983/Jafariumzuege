import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { SectionHeading } from "@/components/site/section-heading";
import { HeroBackground } from "@/components/site/hero-background";
import { CallButton } from "@/components/site/call-button";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { RatingBadge } from "@/components/site/rating-badge";
import { TrustBar } from "@/components/site/trust-bar";
import { USPGrid } from "@/components/site/usp-grid";
import { ServiceGrid } from "@/components/site/service-grid";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { FaqSection } from "@/components/site/faq-section";
import { AreaPills } from "@/components/site/area-list";
import { TestimonialMarquee } from "@/components/site/testimonials";
import { ContactSection } from "@/components/site/contact-section";
import { CtaBand } from "@/components/site/cta-band";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { SplitReveal } from "@/components/anim/split-reveal";
import { Reveal } from "@/components/anim/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/seo/schema";
import { services, steps, faqs } from "@/lib/content";

const heroProofs = [
  "Festpreisgarantie",
  "Versichert bis 2 Mio. €",
  "Pünktlich garantiert",
  "10+ Jahre Erfahrung",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-svh items-center overflow-hidden">
        <HeroBackground
          src="/images/jafari-team-truck.png"
          alt="Jafari Umzug & Transportservice – Team mit Umzugswagen in Cloppenburg"
        />
        <Container className="relative z-10 pb-24 pt-32 lg:pt-36">
          <div className="max-w-2xl">
            <Eyebrow tone="light" className="mb-5">
              Jafari Umzug &amp; Transportservice · Cloppenburg
            </Eyebrow>
            <h1 className="font-display text-[clamp(2.4rem,7vw,4.6rem)] font-bold leading-[1.03] text-white">
              <SplitReveal as="span" text="Ihr Umzug in Cloppenburg" trigger="load" className="block" />
              <SplitReveal
                as="span"
                text="Schnell. Sicher. Zuverlässig."
                trigger="load"
                delay={0.28}
                className="block text-accent-glow"
              />
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              Wir kümmern uns um Ihren Umzug – von der Planung bis zur letzten Kiste. Professionell,
              pünktlich und zu fairen Preisen.
            </p>
            <div className="mt-7">
              <RatingBadge tone="light" />
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton size="xl" />
              <WhatsAppButton variant="whatsapp" size="xl" />
            </div>
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-white/75">
              {heroProofs.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Check className="size-4 text-accent-glow" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ---------------- TRUSTBAR (überlappt Hero) ---------------- */}
      <Container className="relative z-20 -mt-12 sm:-mt-16">
        <TrustBar />
      </Container>

      {/* ---------------- WARUM JAFARI (Trust-Faktoren) ---------------- */}
      <section className="bg-ink py-20 text-white lg:py-28">
        <Container>
          <SectionHeading
            tone="light"
            align="center"
            eyebrow="Warum Jafari"
            title="Ihr verlässlicher Partner für jeden Umzug"
            sub="Mit erfahrenem Team und modernem Equipment sorgen wir dafür, dass Ihr Umzug reibungslos und stressfrei verläuft."
          />
          <div className="mt-14">
            <USPGrid />
          </div>
        </Container>
      </section>

      {/* ---------------- LEISTUNGEN-TEASER ---------------- */}
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

      {/* ---------------- ABLAUF ---------------- */}
      <section id="ablauf" className="scroll-mt-24 bg-paper-dim py-20 lg:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="So funktioniert's"
            title="So einfach läuft Ihr Umzug ab"
            sub="Strukturiert, transparent und zuverlässig – in vier klaren Schritten zu Ihrem stressfreien Umzug."
          />
          <Reveal as="ol" stagger={0.1} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="flex flex-col gap-3 rounded-card border border-line bg-white p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-white">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span className="font-display text-4xl font-bold text-accent/15">{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </Reveal>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
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

      {/* ---------------- BEWERTUNGEN ---------------- */}
      <section className="py-20 lg:py-28">
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
      </section>

      {/* ---------------- EINSATZGEBIETE ---------------- */}
      <section id="einsatzgebiete" className="scroll-mt-24 bg-paper-dim py-20 lg:py-28">
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
            <CallButton className="self-start" />
          </div>
          <FaqSection items={faqs} />
        </Container>
      </section>

      {/* ---------------- KONTAKT ---------------- */}
      <ContactSection />

      {/* ---------------- FINAL CTA ---------------- */}
      <CtaBand
        title="Bereit für einen stressfreien Umzug?"
        sub="Schnell. Sicher. Zuverlässig. – Ein Anruf genügt, und wir kümmern uns um den Rest."
      />
    </>
  );
}
