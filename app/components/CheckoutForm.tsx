"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { PaymentTabs } from "./PaymentTabs";

// Reference: https://docs.stripe.com/testing
const STRIPE_SUCCESS_CARDS = new Set([
  "4242424242424242",
  "4000056655665556",
  "5555555555554444",
  "2223003122003222",
  "5200828282828210",
  "5105105105105100",
  "378282246310005",
  "371449635398431",
  "6011111111111117",
  "6011000990139424",
  "30569309025904",
  "38520000023237",
  "3530111333300000",
  "3566002020360505",
  "6200000000000005",
]);

const STRIPE_DECLINE_CARDS: Record<string, string> = {
  "4000000000000002": "Your card was declined.",
  "4000000000009995": "Your card has insufficient funds.",
  "4000000000009987": "Your card was reported lost.",
  "4000000000009979": "Your card was reported stolen.",
  "4000000000000069": "Your card has expired.",
  "4000000000000127": "Your card's security code is incorrect.",
};

type Status = "idle" | "success";

export function CheckoutForm() {
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const rawCard = formData.get("cardNumber");

    if (rawCard !== null) {
      const digits = String(rawCard).replace(/\D/g, "");

      if (STRIPE_DECLINE_CARDS[digits]) {
        setError(STRIPE_DECLINE_CARDS[digits]);
        return;
      }

      if (!STRIPE_SUCCESS_CARDS.has(digits)) {
        setError(
          "Use a Stripe test card to continue, e.g. 4242 4242 4242 4242.",
        );
        return;
      }
    }

    const link = document.createElement("a");
    link.href = "/Resume-Design_Engineer.pdf";
    link.download = "resume-maxime-laforet.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setStatus("success");
    window.setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentTabs />

      {error && (
        <p
          role="alert"
          className="mt-3 flex items-start gap-1.5 text-[13px] font-medium text-[#b42318]"
        >
          <AlertCircle
            className="mt-[1px] h-3.5 w-3.5 shrink-0"
            strokeWidth={2.25}
            aria-hidden="true"
          />
          <span>{error}</span>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "success"}
        className="cursor-pointer mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[color:var(--color-brand-600)] px-4 text-[15px] font-semibold text-white shadow-[0_8px_24px_-12px_rgba(23,154,67,0.45)] transition-colors hover:bg-[#138239] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-brand-600)] disabled:opacity-95"
      >
        {status === "success" ? (
          <>
            <CheckCircle2 className="h-4 w-4" strokeWidth={2.25} />
            Trial started, downloading
          </>
        ) : (
          <>Start 7-day trial &middot; €1.00</>
        )}
      </button>

      <div role="status" aria-live="polite" className="sr-only">
        {status === "success" ? "Trial started. Your file is downloading." : ""}
      </div>
    </form>
  );
}
