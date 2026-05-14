import { Logo } from "./Logo";
import {
  ApplePayMark,
  GPayMark,
  MastercardMark,
  PaypalMark,
  VisaMark,
} from "./PaymentMarks";

const SUPPORT_LINKS = [
  { label: "How to cancel", href: "#" },
  { label: "Help center", href: "#" },
  { label: "Contact us", href: "mailto:help@zendocs.com" },
];

const LEGAL_LINKS = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[color:var(--color-surface-2)] border-t border-[color:var(--color-divider)] pb-24 sm:pb-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-[13px] leading-relaxed text-body">
              © 2024-2026 Zendocs America Inc.
              <br />
              All rights reserved.
            </p>
            <p className="mt-2 text-[10px] leading-snug text-muted/80">
              All trademarks referenced herein are the properties of their
              respective owners.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted">
              Customer support
            </h3>
            <ul className="mt-4 space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-body hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-body hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-6 border-t border-[color:var(--color-divider)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <PaymentLogos />
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}

function PaymentLogos() {
  return (
    <ul
      className="flex flex-wrap items-center gap-2"
      aria-label="Accepted payment methods"
    >
      <PaymentChip label="Visa">
        <VisaMark className="w-[34px] h-auto" />
      </PaymentChip>
      <PaymentChip label="Mastercard">
        <MastercardMark className="w-[26px] h-auto" />
      </PaymentChip>
      <PaymentChip label="PayPal">
        <PaypalMark className="h-3 w-auto" />
      </PaymentChip>
      <PaymentChip label="Apple Pay">
        <ApplePayMark className="h-3 w-auto text-ink" />
      </PaymentChip>
      <PaymentChip label="Google Pay">
        <GPayMark className="h-3 w-auto" />
      </PaymentChip>
    </ul>
  );
}

function PaymentChip({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <li
      aria-label={label}
      className="inline-flex h-8 px-2.5 items-center justify-center rounded-md border border-[color:var(--color-border)] bg-white"
    >
      {children}
    </li>
  );
}

function LanguageSwitcher() {
  return (
    <label className="inline-flex items-center gap-2 text-[13px] text-body">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <select
        defaultValue="en"
        className="appearance-none bg-transparent pr-4 text-[13px] text-body focus:outline-none"
        aria-label="Language"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
        <option value="es">Español</option>
      </select>
    </label>
  );
}
