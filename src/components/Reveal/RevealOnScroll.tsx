import type { CSSProperties, PropsWithChildren } from 'react'
import { useInViewOnce } from '../../hooks/useInViewOnce'
import { cn } from '../../lib/cn'

export type RevealOnScrollProps = PropsWithChildren<{
  className?: string
  delayMs?: number
}>

export function RevealOnScroll({ className, delayMs = 0, children }: RevealOnScrollProps) {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>({
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px',
  })

  const style = { animationDelay: `${delayMs}ms` } as CSSProperties

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        hasEntered ? 'reveal-pop transform-gpu' : 'reveal-hidden',
        className,
      )}
    >
      {children}
    </div>
  )
}

