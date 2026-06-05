import { AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Container } from "@/components/site/container";

export function LegalLayout({
  title,
  breadcrumbName,
  children,
}: {
  title: string;
  breadcrumbName: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        title={title}
        breadcrumb={[{ name: "Startseite", href: "/" }, { name: breadcrumbName }]}
      />
      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <div className="flex flex-col gap-7 leading-relaxed text-ink/80 [&_a]:text-accent-deep [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_h3]:font-semibold [&_h3]:text-ink [&_strong]:text-ink [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-1.5 [&_ul]:pl-5">
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}

/** Sichtbarer Platzhalter-Hinweis für den Kunden (vor Live-Schaltung füllen). */
export function LegalPlaceholderNote() {
  return (
    <div className="flex items-start gap-3 rounded-card border border-signal/30 bg-signal/5 p-5 text-sm text-ink/80">
      <AlertTriangle className="mt-0.5 size-5 shrink-0 text-signal" />
      <p>
        <strong>Hinweis (Prototyp):</strong> Die rechtlichen Angaben enthalten Platzhalter
        (z. B. USt-IdNr., zuständige Kammer/Aufsichtsbehörde). Bitte vor der Live-Schaltung mit den
        verbindlichen Daten ergänzen und rechtlich prüfen lassen.
      </p>
    </div>
  );
}
