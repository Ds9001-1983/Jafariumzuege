"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/anim/gsap";
import { useIsoLayoutEffect } from "@/lib/anim/use-iso-layout-effect";
import { cn } from "@/lib/utils";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/** Zählt beim Scrollen von 0 hoch. SSR zeigt den Endwert (No-JS-sicher). */
export function CountUp({ to, prefix = "", suffix = "", duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.textContent = `${prefix}${to}${suffix}`;
      return;
    }

    const obj = { val: 0 };
    el.textContent = `${prefix}0${suffix}`;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          val: to,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
          },
        }),
    });

    return () => st.kill();
  }, [to, prefix, suffix, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {to}
      {suffix}
    </span>
  );
}
