import { Container } from "@/components/site/container";
import { Eyebrow } from "@/components/site/eyebrow";
import { Breadcrumb, type Crumb } from "@/components/site/breadcrumb";
import { SplitReveal } from "@/components/anim/split-reveal";

/** Kompakter dunkler Seitenkopf für Unterseiten. */
export function PageHero({
  eyebrow,
  title,
  sub,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  breadcrumb?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid">
        <Container className="pb-16 pt-32 lg:pb-20 lg:pt-40">
          {breadcrumb ? <Breadcrumb items={breadcrumb} className="mb-6" /> : null}
          {eyebrow ? <Eyebrow tone="light">{eyebrow}</Eyebrow> : null}
          <SplitReveal
            as="h1"
            text={title}
            trigger="load"
            className="mt-4 block max-w-3xl text-balance font-display text-[clamp(2.2rem,6vw,4rem)] font-bold leading-[1.04] text-white"
          />
          {sub ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{sub}</p> : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Container>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </section>
  );
}
