"use client";

import { useEffect } from "react";

export default function InteractionInspector() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = document.elementFromPoint(
        e.clientX,
        e.clientY
      ) as HTMLElement | null;
      console.groupCollapsed(
        "[InteractionInspector] click at",
        e.clientX,
        e.clientY
      );
      console.log("window.event target:", e.target);
      if (!el) {
        console.log("No element found at point");
        console.groupEnd();
        return;
      }
      const style = window.getComputedStyle(el);
      const info = {
        tag: el.tagName,
        id: el.id,
        classes: el.className,
        zIndex: style.zIndex,
        pointerEvents: style.pointerEvents,
        opacity: style.opacity,
        bounding: el.getBoundingClientRect(),
      };
      console.log("Top element info:", info);

      // Temporary visual highlight
      const prevOutline = el.style.outline;
      const prevTransition = el.style.transition;
      el.style.outline = "3px solid rgba(255,0,0,0.85)";
      el.style.transition = "outline 160ms ease-in-out";
      setTimeout(() => {
        el.style.outline = prevOutline;
        el.style.transition = prevTransition;
        console.groupEnd();
      }, 900);
    };

    // Use capture phase so we inspect before handlers potentially call preventDefault
    window.addEventListener("click", handler, true);
    return () => window.removeEventListener("click", handler, true);
  }, []);

  return null;
}
