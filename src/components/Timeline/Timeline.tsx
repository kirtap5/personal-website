import { cn } from '../../lib/cn'
import type { TimelineItemModel } from './types'
import { TimelineItemLeft } from './TimelineItemLeft'
import { TimelineItemRight } from './TimelineItemRight'

export type TimelineProps = {
  items: TimelineItemModel[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn('relative pt-5 pb-5', className)}>
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[rgba(31,47,40,0.2)] md:block" />

      <div className="space-y-14 md:space-y-20">
        {items.map((item) => (
          <div key={item.id} className="relative">
            <div className="absolute left-1/2 top-6 hidden h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-[var(--color-ink)] md:block" />

            {item.side === 'left' ? (
              <TimelineItemLeft
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                meta={item.meta}
                dateRange={item.dateRange}
                bullets={item.bullets}
              />
            ) : (
              <TimelineItemRight
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                meta={item.meta}
                dateRange={item.dateRange}
                bullets={item.bullets}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

