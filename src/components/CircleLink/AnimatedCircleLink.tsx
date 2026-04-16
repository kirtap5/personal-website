import type { PropsWithChildren } from 'react'
import { cn } from '../../lib/cn'
import { useInViewOnce } from '../../hooks/useInViewOnce'
import { CircleLink, type CircleLinkProps } from './CircleLink'

export type AnimatedCircleLinkProps = PropsWithChildren<
  CircleLinkProps & {
    direction?: 'left' | 'right'
    delayMs?: number
  }
>

export function AnimatedCircleLink({
  direction = 'right',
  delayMs,
  className,
  children,
  ...rest
}: AnimatedCircleLinkProps) {
  const { ref, hasEntered } = useInViewOnce<HTMLDivElement>({
    threshold: 0.4,
    rootMargin: '0px 0px -15% 0px',
  })

  const animationClasses = hasEntered
    ? cn(
        'droplet-pop',
        direction === 'left' ? 'droplet-from-left' : 'droplet-from-right',
        typeof delayMs === 'number' ? `[animation-delay:${delayMs}ms]` : undefined,
      )
    : 'opacity-0 translate-y-3'

  const textClasses = hasEntered
    ? 'opacity-100 transition-opacity duration-300 delay-[360ms]'
    : 'opacity-0'

  return (
    <div ref={ref}>
      <CircleLink
        {...rest}
        className={cn(className, animationClasses)}
        innerClassName={textClasses}
      >
        {children}
      </CircleLink>
    </div>
  )
}

