import { MessageCircle } from "lucide-react";
import { business } from "@/lib/business";

/**
 * Floatender WhatsApp-Einstieg für Desktop (mobil übernimmt die StickyCallBar).
 * Hält den Primärkanal auf jeder Seite dauerhaft sichtbar.
 */
export function WhatsAppBubble() {
  if (!business.whatsappEnabled) return null;
  return (
    <a
      href={business.whatsapp.hrefPrefilled}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Schreiben Sie uns auf WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lift transition-transform hover:scale-105 active:scale-95 lg:grid"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
