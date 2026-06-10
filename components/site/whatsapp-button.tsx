import { MessageCircle } from "lucide-react";
import { business } from "@/lib/business";
import { Button, type ButtonProps } from "@/components/ui/button";

/**
 * WhatsApp-CTA (sekundär). Nur sichtbar, wenn business.whatsappEnabled.
 * Öffnet den Chat immer mit vorbefüllter Nachricht — der Interessent muss
 * den ersten Satz nicht selbst formulieren. Über `message` kann der
 * Einstiegstext kontextspezifisch überschrieben werden.
 */
export function WhatsAppButton({
  variant = "outline",
  size = "lg",
  className,
  label = "WhatsApp",
  message,
}: {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  label?: string;
  message?: string;
}) {
  if (!business.whatsappEnabled) return null;
  const href = message
    ? `${business.whatsapp.href}?text=${encodeURIComponent(message)}`
    : business.whatsapp.hrefPrefilled;
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Schreiben Sie uns auf WhatsApp"
      >
        <MessageCircle className="size-5 shrink-0" />
        <span>{label}</span>
      </a>
    </Button>
  );
}
