"use client";

import { useState } from "react";
import { CreditCard, Lock } from "lucide-react";
import { ApplePayMark, GPayMark, PaypalMark } from "./PaymentMarks";

type Method = "card" | "paypal" | "gpay" | "applepay";

export function PaymentTabs() {
  const [method, setMethod] = useState<Method>("card");

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Payment method"
        className="grid grid-cols-2 gap-1 rounded-lg bg-[color:var(--color-surface-2)] p-1 text-[13px] font-medium sm:grid-cols-4"
      >
        <TabButton
          active={method === "card"}
          onClick={() => setMethod("card")}
          controls="panel-card"
          ariaLabel="Pay with card"
        >
          <CreditCard className="h-4 w-4" strokeWidth={1.75} />
          <span>Card</span>
        </TabButton>
        <TabButton
          active={method === "paypal"}
          onClick={() => setMethod("paypal")}
          controls="panel-paypal"
          ariaLabel="Pay with PayPal"
        >
          <PaypalMark className="h-[14px]" />
        </TabButton>
        <TabButton
          active={method === "gpay"}
          onClick={() => setMethod("gpay")}
          controls="panel-gpay"
          ariaLabel="Pay with Google Pay"
        >
          <GPayMark className="h-[14px] w-auto" />
        </TabButton>
        <TabButton
          active={method === "applepay"}
          onClick={() => setMethod("applepay")}
          controls="panel-applepay"
          ariaLabel="Pay with Apple Pay"
        >
          <ApplePayMark className="h-[13px]" />
        </TabButton>
      </div>

      <div className="mt-4">
        {method === "card" && <CardForm />}
        {method === "paypal" && <PaypalButton />}
        {method === "gpay" && <GPayButton />}
        {method === "applepay" && <ApplePayButton />}
      </div>

      {method === "card" && (
        <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] text-body">
          <Lock className="h-3.5 w-3.5 shrink-0 text-ink" strokeWidth={2.25} />
          Encrypted via Stripe. We never see your card number.
        </p>
      )}

      <p className="mt-3 text-[12px] text-body">
        By continuing, you agree to our{" "}
        <a href="/terms" className="text-ink hover:underline">
          Terms and Conditions
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-ink hover:underline">
          Privacy Policy
        </a>
        . For assistance, please contact our support team at{" "}
        <a href="mailto:help@zendocs.com" className="text-ink hover:underline">
          help@zendocs.com
        </a>
      </p>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  controls,
  ariaLabel,
  children,
}: {
  active: boolean;
  onClick: () => void;
  controls: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={controls}
      aria-label={ariaLabel}
      onClick={onClick}
      className={[
        "cursor-pointer inline-flex items-center justify-center gap-1.5 rounded-md py-2.5 transition-colors",
        active
          ? "bg-white text-ink shadow-[0_1px_3px_rgba(15,23,42,0.08)]"
          : "text-body hover:text-ink",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function CardForm() {
  return (
    <div id="panel-card" role="tabpanel" className="space-y-3">
      <FieldRow>
        <Field label="Card number" full>
          <input
            type="text"
            name="cardNumber"
            inputMode="numeric"
            placeholder="1234 1234 1234 1234"
            autoComplete="cc-number"
            required
            className="field"
          />
        </Field>
      </FieldRow>
      <FieldRow>
        <Field label="Expiry">
          <input
            type="text"
            name="cardExpiry"
            inputMode="numeric"
            placeholder="MM / YY"
            autoComplete="cc-exp"
            className="field"
          />
        </Field>
        <Field label="CVC">
          <input
            type="text"
            name="cardCvc"
            inputMode="numeric"
            placeholder="123"
            autoComplete="cc-csc"
            className="field"
          />
        </Field>
      </FieldRow>
      <FieldRow>
        <Field label="Cardholder name" full>
          <input
            type="text"
            name="cardName"
            placeholder="Name on card"
            className="field"
            autoComplete="cc-name"
          />
        </Field>
      </FieldRow>

      <style>{`
        .field {
          width: 100%;
          height: 44px;
          border-radius: 8px;
          border: 1px solid var(--color-border);
          background: #fff;
          padding: 0 12px;
          font-size: 14px;
          color: var(--color-ink);
          transition: border-color 120ms ease, box-shadow 120ms ease;
        }
        .field::placeholder { color: var(--color-muted); }
        .field:focus {
          outline: none;
          border-color: var(--color-brand);
          box-shadow: 0 0 0 3px rgba(28, 183, 80, 0.18);
        }
      `}</style>
    </div>
  );
}

function FieldRow({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-3">{children}</div>;
}

function Field({
  label,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "col-span-2" : ""}`}>
      <span className="text-[12px] font-medium text-body">{label}</span>
      {children}
    </label>
  );
}

const brandedButtonClass =
  "inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-[color:var(--color-border)] bg-white text-ink transition-colors hover:bg-[color:var(--color-surface-2)]";

function PaypalButton() {
  return (
    <div id="panel-paypal" role="tabpanel">
      <button
        type="button"
        aria-label="Continue with PayPal"
        className={brandedButtonClass}
      >
        <span className="text-[14px] font-medium">Continue with</span>
        <PaypalMark className="h-[18px]" />
      </button>
    </div>
  );
}

function GPayButton() {
  return (
    <div id="panel-gpay" role="tabpanel">
      <button
        type="button"
        aria-label="Continue with Google Pay"
        className={brandedButtonClass}
      >
        <span className="text-[14px] font-medium">Continue with</span>
        <GPayMark className="h-[18px] w-auto" />
      </button>
    </div>
  );
}

function ApplePayButton() {
  return (
    <div id="panel-applepay" role="tabpanel">
      <button
        type="button"
        aria-label="Continue with Apple Pay"
        className={brandedButtonClass}
      >
        <span className="text-[14px] font-medium">Continue with</span>
        <ApplePayMark className="h-[18px] text-ink" />
      </button>
    </div>
  );
}
