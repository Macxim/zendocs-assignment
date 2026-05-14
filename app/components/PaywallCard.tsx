import { Bell, Star } from "lucide-react";
import { CheckoutForm } from "./CheckoutForm";
import { FilePreview } from "./FilePreview";
import { reminder, trialEnd } from "../lib/trial";

export function PaywallCard() {
  return (
    <section
      id="paywall-card"
      className="mx-auto w-full max-w-[520px] px-5 pt-6 pb-10 sm:pt-8 sm:pb-14"
    >
      <FilePreview />

      <div className="mt-5 text-center">
        <h1 className="text-[28px] font-semibold tracking-tight text-ink sm:text-[32px] sm:leading-[40px]">
          Your file is ready
        </h1>
        <p className="mt-2 text-[15px] text-body sm:text-[16px]">
          Start your 7-day trial to download.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-[#c8e9cf] bg-[#f0faf3] p-6 shadow-[0_2px_10px_-6px_rgba(15,23,42,0.08)] sm:p-7">
        <div className="flex items-baseline gap-2">
          <span className="text-[30px] font-semibold tracking-tight text-ink sm:text-[32px]">
            €1.00
          </span>
          <span className="text-[16px] font-normal text-body">today</span>
        </div>

        <p className="mt-2 text-[14px] leading-relaxed text-body sm:text-[15px]">
          Then <span className="font-semibold text-ink">€39.99/month</span> from{" "}
          {trialEnd}.
          <br />
          Cancel anytime before then.
        </p>
      </div>

      <p className="mt-3 flex items-start gap-2 text-[13px] text-body">
        <Bell className="mt-[1px] h-4 w-4 shrink-0 text-ink" strokeWidth={2} />
        <span>
          We&apos;ll email you on{" "}
          <strong className="font-semibold text-ink">{reminder}</strong>,
          exactly 2 days before your trial ends.
        </span>
      </p>

      <div id="checkout" className="mt-6 scroll-mt-6">
        <CheckoutForm />
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-[13px] text-body">
        <Star
          className="h-4 w-4 fill-[color:var(--color-brand-600)] text-[color:var(--color-brand-600)]"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <span className="font-semibold text-ink">4.0</span>
        <span className="text-muted">from 4,183 reviews</span>
      </div>
    </section>
  );
}
