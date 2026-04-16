import { IconLink } from '../IconLink/IconLink'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Z" />
      <path d="M16.5 11.9a4.5 4.5 0 1 1-8.9 1.2 4.5 4.5 0 0 1 8.9-1.2Z" />
      <path d="M17.6 6.4h.01" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 9v11" />
      <path d="M4 6.5v.5" />
      <path d="M9 20V9" />
      <path d="M9 13.5c.7-2.6 5.6-3.2 6.7-.2.2.6.3 1.2.3 1.9V20" />
      <path d="M20 20v-6.1c0-2.8-1.5-4.9-4.6-4.9-2 0-3.2.8-3.9 1.7" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export type SocialLinksProps = {
  className?: string
  items?: Array<{ kind: 'instagram' | 'linkedin' | 'email'; href: string; label?: string }>
}

const defaultItems: NonNullable<SocialLinksProps['items']> = [
  { kind: 'instagram', href: '#', label: 'Instagram' },
  { kind: 'linkedin', href: '#', label: 'LinkedIn' },
  { kind: 'email', href: 'mailto:hello@example.com', label: 'Email' },
]

export function SocialLinks({ className, items = defaultItems }: SocialLinksProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-end gap-1">
        {items.map((item) => (
          <IconLink key={item.kind} href={item.href} ariaLabel={item.label ?? item.kind}>
            {item.kind === 'instagram' && <InstagramIcon />}
            {item.kind === 'linkedin' && <LinkedInIcon />}
            {item.kind === 'email' && <MailIcon />}
          </IconLink>
        ))}
      </div>
    </div>
  )
}

