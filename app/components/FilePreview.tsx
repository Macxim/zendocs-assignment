"use client";

import Image from "next/image";
import { scrollToCheckout } from "../lib/scrollToCheckout";

export function FilePreview() {
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={scrollToCheckout}
        aria-label="Start your trial to download this file"
        className="group relative h-[238px] w-[168px] cursor-pointer overflow-hidden rounded-lg border border-[color:var(--color-border)] bg-white shadow-[0_18px_44px_-18px_rgba(15,23,42,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_26px_56px_-18px_rgba(15,23,42,0.36)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-brand-600)]"
      >
        <Image
          src="/Resume-Design_Engineer.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="168px"
          className="object-cover object-top"
          priority
        />

        {/* Format badge */}
        <div className="absolute right-2 top-2 z-10 rounded-sm bg-[color:var(--color-brand)] px-1.5 py-[2px] text-[8px] font-semibold uppercase tracking-wide text-white shadow-[0_2px_6px_-2px_rgba(15,23,42,0.25)]">
          PDF
        </div>

        {/* Fade effect */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </button>

      <p className="text-[13px] text-muted">resume-maxime-laforet.pdf</p>
    </div>
  );
}
