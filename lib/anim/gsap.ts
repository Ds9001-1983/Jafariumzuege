import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Plugin nur im Browser registrieren (SSR-sicher).
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** True, wenn der Nutzer reduzierte Bewegung wünscht (BFSG/WCAG). */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export { gsap, ScrollTrigger };
