"use client";

import { useRef, type ElementType } from "react";
import { gsap, prefersReducedMotion } from "@/lib/anim/gsap";
import { useIsoLayoutEffect } from "@/lib/anim/use-iso-layout-effect";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Versatz in px beim Einblenden. */
  y?: number;
  delay?: number;
  /** Wenn gesetzt: direkte Kinder werden gestaffelt eingeblendet. */
  stagger?: number;
  as?: ElementType;
};

/**
 * Sanftes Einblenden beim Scrollen (einmalig). Staffelt optional die
 * direkten Kinder. Respektiert prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  stagger,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets =
      stagger != null ? (Array.from(el.children) as HTMLElement[]) : el;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          delay,
          stagger: stagger ?? 0,
          // Inline-Transform/Opacity nach Abschluss entfernen, damit
          // CSS-Hover-Transforms (z. B. Karten-Lift) wieder greifen.
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [y, delay, stagger]);

  return (
    <Tag ref={ref} className={cn(className)}>
      {children}
    </Tag>
  );
}
