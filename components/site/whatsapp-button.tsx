import { MessageCircle } from "lucide-react";
import { business } from "@/lib/business";
import { Button, type ButtonProps } from "@/components/ui/button";

/** WhatsApp-CTA (sekundär). Nur sichtbar, wenn business.whatsappEnabled. */
export function WhatsAppButton({
  variant = "outline",
  size = "lg",
  className,
  label = "WhatsApp",
}: {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  label?: string;
}) {
  if (!business.whatsappEnabled) return null;
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={business.whatsapp.href}
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
