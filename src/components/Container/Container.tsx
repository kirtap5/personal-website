import type { ElementType, PropsWithChildren } from 'react'
import { cn } from '../../lib/cn'

export type ContainerProps = PropsWithChildren<{
  className?: string
  as?: ElementType
}>

export function Container({ className, as, children }: ContainerProps) {
  const Comp = (as ?? 'div') as ElementType
  return (
    <Comp className={cn('mx-auto w-full max-w-6xl px-6', className)}>
      {children}
    </Comp>
  )
}

