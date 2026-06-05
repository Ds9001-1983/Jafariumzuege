import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import { Logo } from "./logo";
import { CallButton } from "./call-button";
import { WhatsAppButton } from "./whatsapp-button";
import { business, fullAddress } from "@/lib/business";
import { services } from "@/lib/content";

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/preise", label: "Preise" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#einsatzgebiete", label: "Einsatzgebiete" },
  { href: "/#kontakt", label: "Kontakt" },
];

const reasons = [
  "Festpreisgarantie – keine versteckten Kosten",
  "Versicherter Transport bis 2 Mio. €",
  "Erfahrene & geschulte Umzugshelfer",
  "Flexible Termine – auch am Wochenende",
];

export function SiteFooter() {
  return (
    <footer className="relative bg-ink text-white">
      <div className="bg-grid">
        <div className="mx-auto max-w-[1240px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            {/* Marke + NAP */}
            <div className="flex flex-col gap-5">
              <Logo tone="light" />
              <p className="max-w-xs font-display text-lg text-white/85">„{business.slogan}“</p>
              <ul className="flex flex-col gap-2.5 text-sm text-white/70">
                <li>
                  <a
                    href={business.phone.href}
                    data-call-cta
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-signal"
                  >
                    <Phone className="size-4 text-signal" />
                    {business.phone.display}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${business.email}`}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-signal"
                  >
                    <Mail className="size-4 text-signal" />
                    {business.email}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2.5">
                  <MapPin className="size-4 text-signal" />
                  {fullAddress}
                </li>
                <li className="inline-flex items-center gap-2.5">
                  <Clock className="size-4 text-signal" />
                  {business.hours}
                </li>
              </ul>
              <div className="flex items-center gap-3">
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jafari auf Instagram"
                  className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <IgIcon />
                </a>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jafari auf Facebook"
                  className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <FbIcon />
                </a>
              </div>
            </div>

            {/* Leistungen */}
            <nav className="flex flex-col gap-3" aria-label="Leistungen">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
                Leistungen
              </h2>
              <ul className="flex flex-col gap-2 text-sm text-white/70">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/leistungen#${s.slug}`}
                      className="transition-colors hover:text-signal"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Navigation */}
            <nav className="flex flex-col gap-3" aria-label="Seiten">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
                Navigation
              </h2>
              <ul className="flex flex-col gap-2 text-sm text-white/70">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-signal">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA + Warum Jafari */}
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
                Warum Jafari?
              </h2>
              <ul className="flex flex-col gap-2 text-sm text-white/70">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-signal" />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-1 flex flex-col gap-3">
                <CallButton className="w-full" />
                <WhatsAppButton variant="whatsapp" className="w-full" />
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {/* Jahr im Prototyp bewusst statisch */}2026 {business.name} · {fullAddress}
            </p>
            <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Rechtliches">
              <Link href="/impressum" className="transition-colors hover:text-white">
                Impressum
              </Link>
              <Link href="/datenschutz" className="transition-colors hover:text-white">
                Datenschutz
              </Link>
              <Link href="/#kontakt" className="transition-colors hover:text-white">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* SUPERBRAND-Credit (Pflicht) */}
          <p className="mt-8 text-center text-sm text-white/45">
            Made with <span className="text-brand-green">❤️</span> by{" "}
            <a
              href="https://superbrand.marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-brand-green"
            >
              SUPERBRAND.marketing
            </a>{" "}
            – Dein Superheld für deine Werbung.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Inline-Brand-Icons (lucide-react führt Social-Marken aus Markenrechtsgründen nicht mehr). */
function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-5">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.33-.04-1.56-.14-2.86-.14C11.93 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  );
}
