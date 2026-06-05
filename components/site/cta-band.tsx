import { Container } from "@/components/site/container";
import { CallButton } from "@/components/site/call-button";
import { Magnetic } from "@/components/anim/magnetic";

export function CtaBand({
  title = "Ausgesperrt? Wir machens fair.",
  sub = "24/7 erreichbar – ein Anruf genügt, und wir sind für Sie da.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid">
        <Container className="flex flex-col items-center gap-6 py-20 text-center lg:py-24">
          <h2 className="max-w-2xl text-balance font-display text-[clamp(1.9rem,5vw,3.25rem)] font-bold leading-tight text-white">
            {title}
          </h2>
          <p className="max-w-lg text-lg text-white/70">{sub}</p>
          <Magnetic>
            <CallButton size="xl" />
          </Magnetic>
        </Container>
      </div>
    </section>
  );
}
