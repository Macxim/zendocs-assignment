import { ChevronRight } from "lucide-react";

type Item = {
  question: string;
  answer: React.ReactNode;
  defaultOpen?: boolean;
};

const ITEMS: Item[] = [
  {
    question: "Is it free to use?",
    defaultOpen: true,
    answer: (
      <>
        <p>
          Zendocs is a recurring subscription service rather than a free tool.
          We offer a <strong className="text-ink">7-day trial for €1.00</strong>{" "}
          that gives you full access to every feature.
        </p>
        <p className="mt-3">
          If you cancel within those 7 days, no further charges are made. If you
          continue past the trial, you&apos;ll be enrolled in our monthly plan
          (€29.99–€39.99 depending on region and promotions). The exact price is
          always shown at sign-up before any charge.
        </p>
      </>
    ),
  },
  {
    question: "How do I cancel my subscription?",
    answer: (
      <p>
        Cancelling takes less than a minute. Click{" "}
        <a
          href="#"
          className="font-medium text-[color:var(--color-brand-600)] hover:underline"
        >
          Cancel my subscription
        </a>{" "}
        in your account, or follow the link in any billing email. Your access
        continues until the end of your billing period.
      </p>
    ),
  },
  {
    question: "What if I'm not satisfied?",
    answer: (
      <p>
        If you&apos;re charged after your trial and didn&apos;t intend to
        subscribe, contact{" "}
        <a
          href="mailto:help@zendocs.com"
          className="font-medium text-[color:var(--color-brand-600)] hover:underline"
        >
          help@zendocs.com
        </a>{" "}
        within 30 days for a full refund. Most refund requests are processed
        within 48 hours.
      </p>
    ),
  },
  {
    question: "Are my documents safe?",
    answer: (
      <p>
        Your data is stored securely and encrypted with bank-level security. We
        never share documents with third parties. Payment information is
        processed according to PCI-DSS industry standards. Read more in our{" "}
        <a
          href="#"
          className="font-medium text-[color:var(--color-brand-600)] hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>
    ),
  },
];

export function Faq() {
  return (
    <section className="mx-auto w-full max-w-[720px] px-5 sm:px-8 py-16 sm:py-20">
      <h2 className="text-center text-[24px] font-semibold tracking-tight text-ink">
        Frequently asked questions
      </h2>

      <ul className="mt-8 divide-y divide-[color:var(--color-divider)] border-y border-[color:var(--color-divider)]">
        {ITEMS.map((item) => (
          <li key={item.question}>
            <details className="group" open={item.defaultOpen}>
              <summary className="flex items-center justify-between gap-4 py-5 text-lg font-semibold text-ink">
                <span>{item.question}</span>
                <ChevronRight
                  className="h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-90"
                  strokeWidth={2}
                />
              </summary>
              <div className="pb-5 text-[14px] leading-relaxed text-body sm:text-[15px]">
                {item.answer}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
