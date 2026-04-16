import { cn } from '../../lib/cn'
import type { ReactNode } from 'react'

export type SectionTitleProps = {
  eyebrow?: string
  title: ReactNode | string
  align?: 'left' | 'center' | 'right'
  className?: string
  titleClassName?: string
  /**
   * Two-line header: `eyebrow` = smaller first line, `title` = larger second line,
   * with light grey bars offset behind each line (design reference).
   */
  stacked?: boolean
  /** When `stacked`, set false to keep original casing (e.g. “About Me”). Default: all-caps. */
  stackedAllCaps?: boolean
}

function StackedLine({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span className={cn('relative inline-block max-w-full', className)}>
      <span
        className={cn(
          'pointer-events-none absolute bg-[var(--color-section-header-accent)]',
          'left-[15%] top-[70%] h-[0.70em] w-[100%] -translate-y-1/2',
        )}
        aria-hidden
      />
      <span className="relative z-10 block">{children}</span>
    </span>
  )
}

export function SectionTitle({
  eyebrow,
  title,
  align = 'center',
  className,
  titleClassName,
  stacked,
  stackedAllCaps = true,
}: SectionTitleProps) {
  const alignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

  if (stacked && eyebrow && typeof title === 'string') {
    const casing = stackedAllCaps ? 'uppercase' : 'normal-case'
    return (
      <header className={cn('space-y-1', alignClass, className)}>
        <h2
          className={cn(
            'font-cormorant font-normal leading-[1.1] tracking-[0.12em] text-[var(--color-ink)]',
            casing,
            titleClassName,
          )}
        >
          <span className="block">
            {eyebrow}
          </span>
          <span className="mt-1 block">
            <StackedLine className="text-[clamp(2rem,5.5vw,3.25rem)]">
              {title}
            </StackedLine>
          </span>
        </h2>
      </header>
    )
  }

  return (
    <header className={cn('space-y-3', alignClass, className)}>
      {eyebrow ? (
        <div className="font-cormorant text-xs tracking-[0.35em] text-[rgba(31,47,40,0.55)]">
          {eyebrow}
        </div>
      ) : null}
      <h2
        className={cn(
          'font-cormorant text-4xl leading-[1.05] tracking-wide text-[var(--color-ink)]',
          titleClassName,
        )}
      >
        {title}
      </h2>
    </header>
  )
}

