"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Content stays visible when JavaScript or motion is unavailable. */
export default function ScrollReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !("IntersectionObserver" in window))
      return;
    // Do not replay an entrance for content already visible, including anchor visits.
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (preference.matches || element.contains(document.activeElement))
        return;
      animation = element.animate(
        [
          { opacity: 0, transform: "translateY(16px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 550, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
      );
    });
    const cancelMotion = () => animation?.cancel();
    const onPreferenceChange = () => {
      if (preference.matches) {
        observer.disconnect();
        cancelMotion();
      }
    };
    observer.observe(element);
    element.addEventListener("focusin", cancelMotion);
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      observer.disconnect();
      cancelMotion();
      element.removeEventListener("focusin", cancelMotion);
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
