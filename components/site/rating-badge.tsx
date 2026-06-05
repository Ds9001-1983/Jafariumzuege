import { Star } from "lucide-react";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

/** Bewertungs-Badge: 5,0/5 aus 14 Bewertungen (Quelle: Trustindex). */
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
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm",
        tone === "light"
          ? "border-white/20 bg-white/5 text-white"
          : "border-line bg-white text-ink shadow-soft",
        className,
      )}
    >
      <span className="flex gap-0.5 text-yellow-400" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </span>
      <span className="font-display text-base font-bold">{valueStr}/5</span>
      <span className={cn(tone === "light" ? "text-white/70" : "text-muted")}>
        aus {count} Bewertungen · {source}
      </span>
    </span>
  );
}
