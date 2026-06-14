"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (type: "event", name: string, params?: Record<string, unknown>) => void;
    plausible?: (name: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

function getEventProps(element: HTMLElement) {
  const label = element.getAttribute("aria-label") || element.textContent?.trim() || undefined;
  const href = element instanceof HTMLAnchorElement ? element.href : undefined;

  return {
    event_category: "cta",
    event_label: label,
    link_url: href,
    page_path: window.location.pathname,
  };
}

export function EventTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-event]") : null;

      if (!target) {
        return;
      }

      const eventName = target.dataset.event;

      if (!eventName) {
        return;
      }

      const props = getEventProps(target);

      window.dataLayer?.push({ event: eventName, ...props });
      window.gtag?.("event", eventName, props);
      window.plausible?.(eventName, { props });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
