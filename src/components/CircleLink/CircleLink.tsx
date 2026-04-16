import type { PropsWithChildren } from "react";
import { cn } from "../../lib/cn";

export type CircleLinkProps = PropsWithChildren<{
  href: string;
  className?: string;
  ariaLabel?: string;
  innerClassName?: string;
}>;

export function CircleLink({
  href,
  className,
  ariaLabel,
  innerClassName,
  children,
}: CircleLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex h-28 w-28 p-5 items-center justify-center rounded-full bg-[var(--color-green-background)] text-xs text-white shadow-sm transition hover:bg-[var(--color-green-background-hover)] focus:outline-none focus:ring-2 focus:ring-[rgba(251,249,244,0.45)] focus:ring-offset-2 focus:ring-offset-[var(--color-paper)]",
        className,
      )}
    >
      <span
        className={cn(
          // Slightly smaller size + more tracking to make Cardo feel lighter
          "text-center font-cardo italic leading-tight text-[0.7rem] tracking-[0.26em]",
          innerClassName,
        )}
      >
        {children}
      </span>
    </a>
  );
}
