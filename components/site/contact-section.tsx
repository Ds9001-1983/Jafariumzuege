import { Phone, Mail, MapPin, Clock, Navigation, MessageCircle } from "lucide-react";
import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { LeadForm } from "@/components/site/lead-form";
import { business, fullAddress } from "@/lib/business";

const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  fullAddress,
)}`;

/** Kontakt-Sektion der Startseite: NAP links, mehrstufiges Lead-Formular rechts. */
export function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-24 py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* NAP */}
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <Eyebrow>Kontakt</Eyebrow>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-semibold text-ink">
              Bereit für Ihren Umzug?
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Fordern Sie Ihr kostenloses, unverbindliches Angebot an – oder rufen Sie uns direkt an.
              Wir melden uns innerhalb von 24 Stunden.
            </p>
          </div>

          <a
            href={business.phone.href}
            data-call-cta
            className="inline-flex items-center gap-3 font-display text-3xl font-bold text-ink transition-colors hover:text-signal-deep"
          >
            <Phone className="size-7 text-signal" />
            {business.phone.display}
          </a>

          <ul className="flex flex-col gap-4">
            <ContactRow icon={<MessageCircle className="size-5" />} label="WhatsApp">
              <a
                href={business.whatsapp.hrefPrefilled}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Direkt schreiben
              </a>
            </ContactRow>
            <ContactRow icon={<Mail className="size-5" />} label="E-Mail">
              <a href={`mailto:${business.email}`} className="transition-colors hover:text-accent">
                {business.email}
              </a>
            </ContactRow>
            <ContactRow icon={<MapPin className="size-5" />} label="Adresse">
              {fullAddress}
            </ContactRow>
            <ContactRow icon={<Clock className="size-5" />} label="Öffnungszeiten">
              {business.hours}
            </ContactRow>
          </ul>

          {/* Privacy-freundliche Karte (öffnet Google Maps erst bei Klick) */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-40 flex-col justify-end overflow-hidden rounded-card border border-line bg-ink bg-grid p-6 text-white"
          >
            <span className="absolute right-6 top-6 grid size-11 place-items-center rounded-full bg-signal text-white transition-transform duration-300 group-hover:scale-110">
              <MapPin className="size-5" />
            </span>
            <span className="font-display text-lg font-semibold">{business.name}</span>
            <span className="text-white/70">{fullAddress}</span>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-glow">
              <Navigation className="size-4" />
              Route planen
            </span>
          </a>
        </div>

        {/* Lead-Formular */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-2xl font-semibold text-ink">
              Kostenloses Angebot in 2 Minuten
            </h3>
            <p className="text-muted">In 3 kurzen Schritten zu Ihrem unverbindlichen Festpreis.</p>
          </div>
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
        {icon}
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-muted">{label}</span>
        <span className="text-ink">{children}</span>
      </div>
    </li>
  );
}
