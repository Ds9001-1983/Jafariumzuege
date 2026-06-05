import Link from "next/link";
import { Truck } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Wortmarke in den Marken-Farben des bestehenden Logos (Navy + Orange).
 * Refined-Variante fürs Header/Footer; das Original-Logo bleibt als Asset
 * unter /public/images/jafari-logo.jpg erhalten (siehe README).
 */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <Link
      href="/"
      aria-label="Jafari Umzug & Transportservice – zur Startseite"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-xl bg-signal text-white shadow-sm transition-transform duration-300 group-hover:-translate-x-0.5"
      >
        <Truck className="size-5" strokeWidth={2} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.15rem] font-bold uppercase tracking-tight",
            isLight ? "text-white" : "text-ink",
          )}
        >
          Jafari
        </span>
        <span
          className={cn(
            "mt-1 text-[0.62rem] font-medium uppercase tracking-[0.2em]",
            isLight ? "text-white/55" : "text-muted",
          )}
        >
          Umzug &amp; Transport
        </span>
      </span>
    </Link>
  );
}
