import { Star } from "lucide-react";
import { TrustpilotMark } from "./TrustpilotMark";

type Review = {
  quote: string;
  author: string;
  when: string;
};

const REVIEWS: Review[] = [
  {
    quote:
      "Converted my W-9 in two minutes. Saved me from filling out a paper form by hand.",
    author: "Hannah",
    when: "3 days ago",
  },
  {
    quote:
      "Used it for a vendor contract last week. Formatting held up better than I expected from a converter.",
    author: "Marcus",
    when: "1 week ago",
  },
  {
    quote:
      "One-off task, the trial covered it, cancelled in a click. No drama.",
    author: "Priya",
    when: "2 weeks ago",
  },
];

export function TrustBand() {
  return (
    <section
      aria-labelledby="trust-band-heading"
      className="bg-[color:var(--color-surface-2)] border-y border-[color:var(--color-divider)]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 sm:py-12">
        <h2 id="trust-band-heading" className="sr-only">
          Customer reviews on Trustpilot
        </h2>

        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <div className="space-y-1.5">
            <TrustpilotMark className="h-5 w-auto text-ink" />
            <div className="flex flex-wrap items-baseline gap-x-2 text-[13px]">
              <span className="font-semibold text-ink">
                Great &middot; 4.0 / 5
              </span>
              <span className="text-muted">
                from{" "}
                <a
                  href="https://www.trustpilot.com/review/zendocs.com?utm_medium=trustbox&utm_source=Slider"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:text-ink hover:underline"
                >
                  4,183 verified reviews
                </a>
              </span>
            </div>
          </div>

          <a
            href="https://www.trustpilot.com/review/zendocs.com?utm_medium=trustbox&utm_source=Slider"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-[color:var(--color-brand-600)] hover:underline"
          >
            Read all on Trustpilot →
          </a>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
          {REVIEWS.map((review) => (
            <li
              key={review.author}
              className="rounded-lg border border-[color:var(--color-border)] bg-white p-4"
            >
              <div
                className="flex items-center gap-0.5"
                aria-label="4 out of 5 stars"
              >
                {Array.from({ length: 4 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[color:var(--color-trustpilot)] text-[color:var(--color-trustpilot)]"
                    strokeWidth={1.5}
                  />
                ))}
                <Star
                  className="h-3.5 w-3.5 fill-[color:var(--color-divider)] text-[color:var(--color-divider)]"
                  strokeWidth={1.5}
                />
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-body">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="mt-2 text-[12px] text-muted">
                {review.author} &middot; {review.when}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
