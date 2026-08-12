import { cn } from "../../lib/cn";
import type { TimelineBullet } from "./types";

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export type TimelineItemBaseProps = {
  side: "left" | "right";
  title: string;
  subtitle?: string;
  description?: string;
  meta?: string;
  dateRange?: string;
  bullets?: TimelineBullet[];
};

export function TimelineItemBase({
  side,
  title,
  subtitle,
  description,
  meta,
  dateRange,
  bullets,
}: TimelineItemBaseProps) {
  const isLeft = side === "left";

  return (
    <article className="relative grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_0_minmax(0,1fr)] md:gap-x-0">
      <div
        className={cn(
          "relative flex min-h-[220px] flex-col pt-1 md:min-h-[280px] md:max-w-lg",
          isLeft
            ? "md:col-start-1 md:ml-auto md:pr-10 md:text-right"
            : "md:col-start-3 md:pl-10 md:text-left",
        )}
      >
        {/* Outer corner: bottom-left for left entries, bottom-right for right entries (away from center line) */}
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 h-2.5 w-2.5 border-[var(--color-ink)]",
            isLeft ? "left-0 border-b border-l" : "right-0 border-b border-r",
          )}
          aria-hidden
        />

        <div className="shrink-0 space-y-2">
          <h3 className="font-cardo text-xl font-normal italic tracking-wide text-[var(--color-ink)] sm:text-2xl">
            {title}
          </h3>
          {subtitle && (
            <div className="text-sm tracking-wide text-[rgba(31,47,40,0.7)]">
              {subtitle}
            </div>
          )}
          {description && (
            <p
              className={cn(
                "max-w-prose text-sm leading-relaxed text-[rgba(31,47,40,0.6)]",
                isLeft ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0",
              )}
            >
              {description}
            </p>
          )}
        </div>

        {bullets && bullets.length > 0 ? (
          <ul
            className={cn(
              "mt-auto w-full max-w-[350px] space-y-2 pt-8 mb-4",
              isLeft ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0",
            )}
          >
            {bullets.map((bullet, i) => {
              const { text, href, linkLabel } =
                typeof bullet === "string" ? { text: bullet, href: undefined, linkLabel: undefined } : bullet;

              return (
                <li
                  key={i}
                  className={cn(
                    "flex items-start gap-2.5 text-sm text-[rgba(31,47,40,0.65)]",
                    isLeft ? "md:flex-row-reverse md:text-right" : "flex-row",
                  )}
                >
                  <span
                    className="mt-[5px] h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--color-ink)]"
                    aria-hidden
                  />
                  <span>
                    {text}
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="my-2 block text-[var(--color-ink)] underline decoration-[rgba(31,47,40,0.35)] underline-offset-2 transition hover:decoration-[rgba(31,47,40,0.7)]"
                      >
                        — {linkLabel ?? href}
                      </a>
                    ) : null}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="mt-auto pt-8" />
        )}
        {meta && (
          <div
            className={cn(
              "flex items-center gap-1.5 pt-2 text-xs italic tracking-wide text-[rgba(31,47,40,0.55)] mb-2",
              isLeft
                ? "md:flex-row-reverse md:justify-start"
                : "md:justify-start",
            )}
          >
            <LocationIcon />
            {meta}
          </div>
        )}
        {dateRange && (
          <div
            className={cn(
              "flex items-center gap-1.5 text-xs italic tracking-wide text-[rgba(31,47,40,0.55)]",
              isLeft
                ? "md:flex-row-reverse md:justify-start"
                : "md:justify-start",
            )}
          >
            <CalendarIcon />
            {dateRange}
          </div>
        )}
      </div>
    </article>
  );
}
