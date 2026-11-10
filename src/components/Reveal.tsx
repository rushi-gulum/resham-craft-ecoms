"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Wait this long (ms) after scrolling into view, to stagger neighbours. */
  delay?: number;
  /** up: rises and fades. zoom: scales up and fades. wipe: unrolls left to right. */
  variant?: "up" | "zoom" | "wipe";
}

/** Plays its entrance once, the first time it scrolls into view. Styles live in globals.css. */
export default function Reveal({ children, className, delay = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
