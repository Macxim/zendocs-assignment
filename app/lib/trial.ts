const PURCHASE_DATE = new Date();
const TRIAL_DAYS = 7;
const REMINDER_LEAD_DAYS = 2;

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function format(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

export const trialEnd = format(addDays(PURCHASE_DATE, TRIAL_DAYS));
export const reminder = format(
  addDays(PURCHASE_DATE, TRIAL_DAYS - REMINDER_LEAD_DAYS),
);
