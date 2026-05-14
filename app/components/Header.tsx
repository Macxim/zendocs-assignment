import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full bg-[color:var(--color-surface-2)] border-b border-[color:var(--color-divider)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Zendocs home" className="shrink-0">
          <Logo />
        </Link>

        <div className="flex items-center gap-3">
          <div
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-brand-50)] text-[13px] font-semibold text-[color:var(--color-brand-600)]"
          >
            M
          </div>
          <span className="hidden text-[13px] text-body sm:inline">
            me@macx.im
          </span>
        </div>
      </div>
    </header>
  );
}
