import type { TimelineItemBaseProps } from './TimelineItemBase'
import { TimelineItemBase } from './TimelineItemBase'

export type TimelineItemLeftProps = Omit<TimelineItemBaseProps, 'side'>

export function TimelineItemLeft(props: TimelineItemLeftProps) {
  return <TimelineItemBase side="left" {...props} />
}
