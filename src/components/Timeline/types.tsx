export type TimelineSide = 'left' | 'right'

export type TimelineBullet =
  | string
  | {
      text: string
      href: string
      /** Visible text for the link. Defaults to the href if omitted. */
      linkLabel?: string
    }

export type TimelineItemModel = {
  id: string
  side: TimelineSide
  title: string
  subtitle?: string
  description?: string
  meta?: string
  dateRange?: string
  bullets?: TimelineBullet[]
}

