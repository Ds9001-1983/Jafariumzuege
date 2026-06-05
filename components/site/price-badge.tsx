import { BadgeEuro } from "lucide-react";
import { cn } from "@/lib/utils";

/** „Kostenlose Besichtigung · Festpreisgarantie" – wiederverwendbarer Trust-Pill. */
export function PriceBadge({
  className,
  tone = "dark",
  label = "Kostenlose Besichtigung",
  highlight = "Festpreisgarantie",
}: {
  className?: string;
  tone?: "dark" | "light";
  label?: string;
  highlight?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium",
        tone === "light"
          ? "border-white/20 bg-white/5 text-white"
          : "border-signal/30 bg-signal/5 text-signal-deep",
        className,
      )}
    >
      <BadgeEuro className="size-4 shrink-0" />
      {label}
      <span className="font-display text-base font-bold">{highlight}</span>
    </span>
  );
}
