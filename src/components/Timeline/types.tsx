export type TimelineSide = 'left' | 'right'

export type TimelineItemModel = {
  id: string
  side: TimelineSide
  title: string
  subtitle?: string
  description?: string
  meta?: string
  dateRange?: string
  bullets?: string[]
}

