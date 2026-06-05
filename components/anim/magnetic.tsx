"use client";

import { useRef, type ElementType } from "react";
import { gsap, prefersReducedMotion } from "@/lib/anim/gsap";
import { useIsoLayoutEffect } from "@/lib/anim/use-iso-layout-effect";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: ElementType;
};

/** Magnetischer Hover (Desktop/Maus). Auf Touch + reduced-motion deaktiviert. */
export function Magnetic({ children, className, strength = 0.35, as: Tag = "span" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion() || !fine) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.6, ease: "power3.out" });
    };
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <Tag ref={ref} className={cn("inline-block", className)}>
      {children}
    </Tag>
  );
}
