"use client";

import { Fragment, useRef, type ElementType } from "react";
import { gsap, prefersReducedMotion } from "@/lib/anim/gsap";
import { useIsoLayoutEffect } from "@/lib/anim/use-iso-layout-effect";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  as?: ElementType;
  /** "scroll" (default) blendet beim Scrollen ein, "load" sofort. */
  trigger?: "scroll" | "load";
  delay?: number;
  wordClassName?: string;
};

/**
 * Wort-für-Wort-Reveal mit Masken (Premium-Headline-Effekt).
 * SSR rendert den echten Text (SEO + No-JS sichtbar); JS animiert via
 * fromTo mit immediateRender → kein Flash. Respektiert reduced-motion.
 */
export function SplitReveal({
  text,
  className,
  as: Tag = "span",
  trigger = "scroll",
  delay = 0,
  wordClassName,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(".sr-word");
    if (prefersReducedMotion()) {
      gsap.set(targets, { yPercent: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const to: gsap.TweenVars = {
        yPercent: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.055,
        delay,
      };
      if (trigger === "scroll") {
        to.scrollTrigger = { trigger: el, start: "top 88%", once: true };
      }
      gsap.fromTo(targets, { yPercent: 110 }, to);
    }, el);

    return () => ctx.revert();
  }, [text, trigger, delay]);

  return (
    <Tag ref={ref} className={cn(className)}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
            <span className={cn("sr-word inline-block will-change-transform", wordClassName)}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
