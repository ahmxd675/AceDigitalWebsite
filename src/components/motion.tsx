"use client";

import {
  createElement,
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";

/*
  Scroll-reveal wrapper. Progressive enhancement only:
  - Server / no-JS render: content is fully visible (no `reveal` class).
  - prefers-reduced-motion: stays visible, no animation.
  - Otherwise: hidden just before paint (useLayoutEffect, no flash), then
    fades + slides up when scrolled into view.
  The actual transition lives in globals.css under `.reveal`.
*/

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "span";
}) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    el.classList.add("reveal");
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return createElement(Tag, { ref, className }, children);
}
