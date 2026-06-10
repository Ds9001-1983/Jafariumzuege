import { Star, ExternalLink } from "lucide-react";
import { GoogleG } from "./rating-badge";
import { business } from "@/lib/business";

/**
 * Bewertungs-Sammler: führt zufriedene Kunden mit einem Klick ins
 * Google-Bewertungsformular (writereview-Deeplink aufs echte Profil).
 * Jede neue Bewertung stärkt das lokale Ranking — die Seite arbeitet
 * damit aktiv für die Sichtbarkeit des Betriebs.
 */
export function GoogleReviewCta() {
  const valueStr = business.rating.value.toLocaleString("de-DE", {
    minimumFractionDigits: 1,
  });
  return (
    <div className="relative overflow-hidden rounded-card border border-line bg-ink p-8 text-white shadow-soft sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-signal/20 blur-3xl"
      />
      <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-semibold">
            <GoogleG className="size-4" />
            {valueStr}/5 bei Google
            <span className="flex gap-0.5 text-yellow-400" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </span>
          </span>
          <h3 className="font-display text-2xl font-semibold sm:text-[1.7rem]">
            Zufrieden mit Ihrem Umzug?
          </h3>
          <p className="max-w-md text-white/75">
            Eine Google-Bewertung dauert 60 Sekunden – und hilft uns mehr als jedes
            Trinkgeld. Vielen Dank!
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <a
            href={business.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <GoogleG className="size-5" />
            Jetzt auf Google bewerten
          </a>
          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Alle Bewertungen lesen
            <ExternalLink className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
