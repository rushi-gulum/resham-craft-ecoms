"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Wait this long (ms) after scrolling into view, to stagger neighbours. */
  delay?: number;
  /** up: rises and fades. zoom: scales up and fades. wipe: unrolls left to right. */
  variant?: "up" | "zoom" | "wipe";
}

// False until the first page has painted. Reveals mounted after that (a new
// page, a filter change) animate even when they start on screen.
let revealArmed = false;

/**
 * Plays its entrance once, the first time it scrolls into view. Styles live in globals.css.
 *
 * Content is only hidden once this script is running (the `data-reveal-ready` flag on <html>),
 * so if JavaScript is off or fails to load, everything simply stays visible.
 */
export default function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Runs before the browser paints, so nothing already on screen ever flickers out
  useLayoutEffect(() => {
    const element = ref.current;
    if (!revealArmed && element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) setVisible(true);
    }
    document.documentElement.dataset.revealReady = "true";
    if (!revealArmed) requestAnimationFrame(() => (revealArmed = true));
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    // A wiped element starts fully clipped, so it never counts as on screen.
    // Watch its unclipped parent instead.
    observer.observe(variant === "wipe" && element.parentElement ? element.parentElement : element);
    return () => observer.disconnect();
  }, [variant]);

  return (
    <div
      ref={ref}
      data-reveal={variant}
      data-visible={visible}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className ? `scroll-reveal ${className}` : "scroll-reveal"}
    >
      {children}
    </div>
  );
}
