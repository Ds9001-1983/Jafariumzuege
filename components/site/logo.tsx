import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Wortmarke nach dem Original-Logo (jafari-logo.jpg): fettes kursives
 * JAFARI in Navy mit orangenem Speed-Swoosh, Subline in Orange.
 * Das Original bleibt als Asset unter /public/images/jafari-logo.jpg
 * erhalten und wird in der Über-uns-Sektion in voller Größe gezeigt.
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
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span className="relative inline-block pb-1.5">
        <span
          className={cn(
            "font-display text-[1.4rem] font-bold uppercase italic tracking-tight",
            isLight ? "text-white" : "text-ink",
          )}
        >
          Jafari
        </span>
        {/* Speed-Swoosh aus dem Original-Logo */}
        <svg
          viewBox="0 0 120 12"
          aria-hidden="true"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-[7px] w-full text-signal transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path d="M2 10 C 34 3, 78 1, 118 4 L 118 6.5 C 80 4.5, 38 7, 6 12 Z" fill="currentColor" />
        </svg>
      </span>
      <span className="mt-1 text-[0.57rem] font-semibold uppercase tracking-[0.15em] text-signal">
        Umzug &amp; Transportservice
      </span>
    </Link>
  );
}
