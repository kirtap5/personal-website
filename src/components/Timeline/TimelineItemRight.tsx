import type { TimelineItemBaseProps } from './TimelineItemBase'
import { TimelineItemBase } from './TimelineItemBase'

export type TimelineItemRightProps = Omit<TimelineItemBaseProps, 'side'>

export function TimelineItemRight(props: TimelineItemRightProps) {
  return <TimelineItemBase side="right" {...props} />
}
