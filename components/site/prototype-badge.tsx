import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Sichtbarer Platzhalter-Hinweis für unbestätigte Inhalte (z. B. Preise, FAQ).
 * Nur sichtbar, wenn NEXT_PUBLIC_PROTOTYPE=true gesetzt ist → vor Launch ausschalten.
 */
export function PrototypeBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  if (process.env.NEXT_PUBLIC_PROTOTYPE !== "true") return null;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3 py-1 text-xs font-medium text-signal-deep",
        className,
      )}
    >
      <AlertTriangle className="size-3.5" />
      {children}
    </span>
  );
}
