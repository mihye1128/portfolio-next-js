"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Content stays visible when JavaScript or motion is unavailable. */
export default function ScrollReveal({
  children,
  className,
  targets,
}: {
  children: ReactNode;
  className?: string;
  /** Animate matching descendants independently, without extra layout wrappers. */
  targets?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!container || preference.matches || !("IntersectionObserver" in window))
      return;

    const elements = targets
      ? Array.from(container.querySelectorAll<HTMLElement>(targets))
      : [container];
    const animations = new Map<Element, Animation>();
    const observer = new IntersectionObserver((entries) => {
      let stagger = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target;
        observer.unobserve(element);
        if (preference.matches || element.contains(document.activeElement))
          continue;
        const animation = element.animate(
          [
            { opacity: 0, transform: "translateY(24px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 1100,
            delay: Math.min(stagger++ * 80, 240),
            easing: "cubic-bezier(0.22, 0.61, 0.36, 1)",
            fill: "backwards",
          }
        );
        animations.set(element, animation);
        animation.onfinish = () => animations.delete(element);
      }
    });
    const onFocus = (event: FocusEvent) => {
      for (const element of elements) {
        if (event.target instanceof Node && element.contains(event.target)) {
          observer.unobserve(element);
          animations.get(element)?.cancel();
          animations.delete(element);
        }
      }
    };
    const cancelMotion = () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const onPreferenceChange = () => {
      if (preference.matches) cancelMotion();
    };
    for (const element of elements) {
      // Preserve content already visible at load, including direct anchor visits.
      if (element.getBoundingClientRect().top >= window.innerHeight)
        observer.observe(element);
    }
    container.addEventListener("focusin", onFocus);
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      cancelMotion();
      container.removeEventListener("focusin", onFocus);
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, [targets]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
