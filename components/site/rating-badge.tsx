import { Star } from "lucide-react";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

/** Mehrfarbiges Google-"G" (offizielle Markenfarben). */
export function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-4", className)}>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.86c2.26-2.09 3.56-5.17 3.56-8.87z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a11.99 11.99 0 0 0 0 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0A11.99 11.99 0 0 0 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

/**
 * Bewertungs-Badge: echte Google-Bewertung (4,9/5), verlinkt aufs
 * Google-Business-Profil — Klick in der Demo landet auf dem echten Eintrag.
 */
export function RatingBadge({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const { value, count, source } = business.rating;
  const valueStr = value.toLocaleString("de-DE", { minimumFractionDigits: 1 });
  return (
    <a
      href={business.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${valueStr} von 5 Sternen aus ${count} ${source}-Bewertungen – Profil öffnen`}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm transition-colors",
        tone === "light"
          ? "border-white/20 bg-white/5 text-white hover:bg-white/10"
          : "border-line bg-white text-ink shadow-soft hover:border-ink/20",
        className,
      )}
    >
      <GoogleG className="size-4.5 shrink-0" />
      <span className="flex gap-0.5 text-yellow-400" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </span>
      <span className="font-display text-base font-bold">{valueStr}/5</span>
      <span className={cn(tone === "light" ? "text-white/70" : "text-muted")}>
        {count} Google-Bewertungen
      </span>
    </a>
  );
}
