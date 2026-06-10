import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { CallButton } from "@/components/site/call-button";
import { GuaranteeSeal } from "@/components/site/guarantee-seal";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { SplitReveal } from "@/components/anim/split-reveal";

const points = [
  "Feste Gesichter statt anonymer Subunternehmer",
  "Erfahrenes, geschultes Team mit modernem Equipment",
  "In Cloppenburg, dem Münsterland und deutschlandweit zu Hause",
];

/** Asymmetrische, foto-geführte „Über uns"-Sektion mit Garantie-Siegel. */
export function AboutJafari() {
  return (
    <section id="ueber-uns" className="scroll-mt-24 py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        {/* Foto mit überlappendem Siegel + Original-Logo als Marken-Stempel */}
        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[1.75rem]">
            <SmartImage
              src="/images/jafari-team-loading.png"
              alt="Das Team von Jafari Umzug & Transportservice beim Beladen des Umzugswagens"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
          </div>
          <GuaranteeSeal className="absolute -bottom-6 right-4 sm:-right-6" />
          {/* Original-Logo des Betriebs (Social-Icon-Zeile weggecroppt) */}
          <div className="absolute -top-5 left-4 w-36 -rotate-2 overflow-hidden rounded-xl border border-line bg-white p-1.5 shadow-lift sm:-left-5 sm:w-44">
            <div className="relative aspect-[15/8] overflow-hidden rounded-lg">
              <SmartImage
                src="/images/jafari-logo.jpg"
                alt="Original-Logo von Jafari Umzug & Transportservice"
                fill
                sizes="176px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-5">
          <Eyebrow>Aus Cloppenburg. Für Ihre Region.</Eyebrow>
          <SplitReveal
            as="h2"
            text="Ein Familienbetrieb, der wirklich anpackt"
            className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-semibold leading-[1.05] text-ink"
          />
          <p className="text-lg leading-relaxed text-muted">
            Jafari Umzug &amp; Transportservice ist Ihr verlässlicher Partner aus Cloppenburg – mit
            erfahrenem Team und modernem Equipment. Ob Privatumzug, Firmenumzug oder Transport: Wir
            kümmern uns persönlich um jedes Detail, damit Sie sich auf Ihr neues Zuhause
            konzentrieren können.
          </p>
          <ul className="flex flex-col gap-2.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-ink/85">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                  <Check className="size-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <CallButton />
            <Button asChild variant="outline" size="lg">
              <Link href="/#kontakt">
                Angebot anfordern
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
