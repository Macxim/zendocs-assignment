"use client";

import { useEffect, useState } from "react";
import { scrollToCheckout } from "../lib/scrollToCheckout";
import { trialEnd } from "../lib/trial";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const card = document.getElementById("paywall-card");
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const pastTop = entry.boundingClientRect.bottom < 0;
        setVisible(!entry.isIntersecting && pastTop);
      },
      { threshold: 0, rootMargin: "0px 0px -100% 0px" },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={[
        "fixed inset-x-0 bottom-0 z-40 border-t border-[color:var(--color-divider)] bg-white shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.18)]",
        "transition-transform duration-200 ease-out",
        visible ? "translate-y-0" : "translate-y-full",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 sm:py-3">
        <div className="flex flex-col leading-tight">
          <span className="text-[14px] font-medium text-ink sm:text-[14.5px]">
            €1.00 today, then €39.99/month from {trialEnd}
          </span>
          <span className="mt-0.5 text-[12px] text-muted">
            Cancel anytime before then.
          </span>
        </div>

        <button
          type="button"
          onClick={scrollToCheckout}
          className="cursor-pointer inline-flex h-11 w-full items-center justify-center rounded-md bg-[color:var(--color-brand-600)] px-5 text-[14px] font-semibold text-white transition-colors hover:bg-[#138239] sm:w-auto"
        >
          Start 7-day trial &middot; €1.00
        </button>
      </div>
    </div>
  );
}
