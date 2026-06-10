import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/site/container";
import { CallButton } from "@/components/site/call-button";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/anim/magnetic";

/**
 * Finales CTA-Band. title/sub sind bewusst Pflicht-Props, damit jede
 * Verwendung seitenspezifische Copy mitbringt (kein stiller Default).
 */
export function CtaBand({
  title,
  sub,
  showCalculator = true,
}: {
  title: string;
  sub: string;
  showCalculator?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid">
        <Container className="flex flex-col items-center gap-6 py-20 text-center lg:py-24">
          <h2 className="max-w-2xl text-balance font-display text-[clamp(1.9rem,5vw,3.25rem)] font-bold leading-tight text-white">
            {title}
          </h2>
          <p className="max-w-lg text-lg text-white/70">{sub}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <CallButton size="xl" />
            </Magnetic>
            <WhatsAppButton variant="whatsapp" size="xl" />
            {showCalculator ? (
              <Button asChild variant="outlineLight" size="xl">
                <Link href="/#rechner">
                  Richtpreis berechnen
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
            ) : null}
          </div>
        </Container>
      </div>
    </section>
  );
}
