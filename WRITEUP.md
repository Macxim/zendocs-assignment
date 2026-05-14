# Zendocs paywall redesign

I picked the paywall as the weakest part of the Zendocs funnel. The current
screen is built around short-term conversion: a fake-urgency countdown, a
"discount applied" the user never asked for, three competing payment
buttons, and a recurring price hidden under the trial price.

That setup converts on day one, but it shows up downstream as refund
requests, chargebacks, and 1-star Trustpilot reviews. The pattern in those
reviews is the same across hundreds of users, in five currencies: people
thought they paid €1 (or £0.99, or $0.99) for one PDF, then got charged
€39.99 a week later. Representative quote, of dozens like it:

> "Subscription trap scam! I used them to pay £1 to edit a pdf as a one off."

The company's own help center hosts an article titled "Understanding
subscriptions and recurring charges on Zendocs", a structured rebuttal
that cites Terms & Conditions sections back at confused users. It exists
because users routinely reach support believing they were charged without
consent. This demonstrates a UX failure.

The bet here is simple. A calmer, more honest paywall will convert slightly
worse in the moment but substantially better over the trial-to-month-2
window, because the people who say yes haven't been ambushed. Less refund
volume, fewer chargebacks, better reviews, more acquisition over time.

## Why the paywall and not somewhere else

Earlier steps in the funnel have their own friction. The post-upload loading
step before the editor opens is slow and silent: a static loader with no
progress, no time estimate, no copy. The email gate is slow. The
format-picker modal collapses Download / Share / Print / Done into one flow.
But Trustpilot complaints cluster at the paywall — both the moment of
charge and the cancellation flow that follows — so that's where the work is.

## What I changed

1. Removed the pressure scaffolding. No countdown, no fake discount, no
   exclamation points. The screen feels calmer, which is closer to how the
   actual editor looks.

2. Made the recurring price the headline of the plan card. The user leaves
   the screen knowing exactly what's happening: €1 today, €39.99/month from
   a specific date, cancel any time before then. The current screen has
   this information, it's just in fine print, and it's the reason people are complaining.

3. Collapsed three payment buttons into one tabbed selector (Card, PayPal,
   Google Pay, Apple Pay) with one green CTA. The CTA carries the price so
   the commitment is restated at the moment of click.

4. Kept the sticky bar but flipped its content. Same UI pattern as the
   current one, but it always shows the full deal (€1 today, then €39.99/month
   from {date}) instead of just the trial price.

5. Promoted the FAQ and opened "Is it free?" by default. The honest
   subscription disclosure was already in the page, just buried below the
   buy button. I moved it above.

6. Added a pre-trial email commitment: "We'll email you on {date 2 days
   before trial ends}." A passive disclosure becomes an active promise.
   It does imply a product commitment Zendocs would have to honor.

## How I'd test it

A/B against the current design. Primary metric: trial signup rate. Guardrail:
7-day refund and chargeback rate. The new screen is allowed to convert
slightly worse on day one if it converts substantially better at renewal.

## Things I noticed but didn't fix

A few observations from walking the full funnel as a user, ordered by how
much they matter:

- **The email gate before the paywall is slow.** Users already feeling
  pushed into a subscription are also waiting on a sluggish form.
  Performance is part of the trust argument, not separate from it.
- **The email gate itself is friction in the wrong place.** Users came to
  download one file, not create an account. A stronger pattern is to let
  them complete the download first, then offer email capture as opt-in
  ("email a copy to yourself"). Keeps lead capture, respects the user's
  mental model.
- **The paywall is where four user intents collapse into one screen.**
  Download, Share, Print, and Done all funnel through the same "pick a
  format → paywall" flow regardless of what the user actually meant.
- **Cancellation is broken downstream.** Multiple users describe
  non-functional buttons and a buried cancellation portal. Outside the paywall redesign but it's where the trust gap compounds.

## What I considered and didn't build

- A **monthly/annual toggle**. Standard industry pattern, and probably
  the right production move. I dropped it for this exercise because
  comparing two plans side-by-side pressures the user toward the bigger
  commitment.
- A **pay-per-document option**. Likely the highest-impact addition for
  revenue: the cohort that came to download one file and refunds the
  subscription is currently leaking out as support volume. Out of scope
  for this brief.
- A **firmer refund commitment** as standing policy. The "full refund
  within 30 days, 48-hour processing" copy is a design proposal pending
  legal review and an SLA from support.

## What I didn't touch

Business model, trial pricing, upstream funnel. The argument is about
how Zendocs sells the plan, not what the plan is.
