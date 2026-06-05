import { Phone } from "lucide-react";
import { business } from "@/lib/business";
import { Button, type ButtonProps } from "@/components/ui/button";

type Props = {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  label?: string;
  /** Telefonnummer hinter dem Label anzeigen. */
  showNumber?: boolean;
  withIcon?: boolean;
};

/**
 * Kanonischer Anruf-CTA. Bezieht die Nummer IMMER aus lib/business.ts
 * → keine Gefahr einer falschen Ziffer. data-call-cta für späteres Tracking.
 */
export function CallButton({
  variant = "signal",
  size = "lg",
  className,
  label = "Jetzt anrufen",
  showNumber = true,
  withIcon = true,
}: Props) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={business.phone.href}
        aria-label={`Jetzt anrufen: ${business.phone.display}`}
        data-call-cta
      >
        {withIcon ? <Phone className="size-5 shrink-0" /> : null}
        <span>
          {label}
          {showNumber ? (
            <span className="hidden font-semibold sm:inline"> · {business.phone.display}</span>
          ) : null}
        </span>
      </a>
    </Button>
  );
}
