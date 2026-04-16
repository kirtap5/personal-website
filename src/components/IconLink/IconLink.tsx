import type { PropsWithChildren } from 'react'
import { cn } from '../../lib/cn'

export type IconLinkProps = PropsWithChildren<{
  href: string
  ariaLabel: string
  className?: string
}>

export function IconLink({ href, ariaLabel, className, children }: IconLinkProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'inline-flex items-center justify-center rounded-md p-2 text-[rgba(251,249,244,0.85)] transition hover:text-white focus:outline-none focus:ring-2 focus:ring-[rgba(251,249,244,0.35)]',
        className,
      )}
    >
      {children}
    </a>
  )
}

