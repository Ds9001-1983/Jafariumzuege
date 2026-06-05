import { MessageCircle, Check } from "lucide-react";
import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";
import { CallButton } from "@/components/site/call-button";
import { SmartImage } from "@/components/ui/smart-image";
import { business } from "@/lib/business";

const points = [
  "Kostenlose Erstberatung per WhatsApp",
  "Fotos der Räume einfach senden",
  "Schnelle Antwort – meist innerhalb von 24 Stunden",
  "Keine App-Installation nötig",
];

/** WhatsApp-Soforthilfe-Sektion (grüner Akzent, Foto). */
export function WhatsAppCta() {
  return (
    <section className="bg-paper-dim py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 overflow-hidden rounded-2xl border border-line bg-white shadow-soft lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6 p-8 lg:p-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-whatsapp/10 px-3.5 py-1.5 text-sm font-semibold text-whatsapp-deep">
              <MessageCircle className="size-4" />
              Soforthilfe über WhatsApp
            </span>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-semibold text-ink">
              Starten Sie Ihren Umzug direkt per WhatsApp
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-muted">
              Einfach Fotos der Räume senden – wir erledigen den Rest und melden uns mit einem
              unverbindlichen Angebot.
            </p>
            <ul className="flex flex-col gap-2.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-ink/85">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-whatsapp/10 text-whatsapp-deep">
                    <Check className="size-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="whatsapp" size="lg">
                <a
                  href={business.whatsapp.hrefPrefilled}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jetzt per WhatsApp starten"
                >
                  <MessageCircle className="size-5" />
                  Jetzt per WhatsApp starten
                </a>
              </Button>
              <CallButton variant="outline" />
            </div>
          </div>
          <div className="relative hidden min-h-72 self-stretch lg:block">
            <SmartImage
              src="/images/customer-phone-call.jpg"
              alt="Kundin kontaktiert Jafari Umzug & Transportservice per Telefon und WhatsApp"
              fill
              sizes="(max-width: 1024px) 0vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
