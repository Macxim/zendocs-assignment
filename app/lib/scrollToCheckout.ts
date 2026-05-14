export function scrollToCheckout(): void {
  const target = document.getElementById("checkout");
  if (!target) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  target.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });

  const focusInput = () => {
    const input = document.querySelector<HTMLInputElement>(
      'input[name="cardNumber"]',
    );
    input?.focus({ preventScroll: true });
  };

  if (reduced) {
    focusInput();
  } else {
    window.setTimeout(focusInput, 450);
  }
}
