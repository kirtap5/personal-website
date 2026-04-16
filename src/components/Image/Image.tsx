import { cn } from '../../lib/cn'

export type ImageProps = {
  src: string
  alt: string
  className?: string
  wrapperClassName?: string
  rounded?: 'none' | 'md' | 'lg' | 'xl' | 'full'
  aspect?: 'square' | 'portrait' | 'landscape' | 'auto'
}

const roundedMap: Record<NonNullable<ImageProps['rounded']>, string> = {
  none: '',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
}

const aspectMap: Record<NonNullable<ImageProps['aspect']>, string> = {
  auto: '',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
}

export function Image({
  src,
  alt,
  className,
  wrapperClassName,
  rounded = 'none',
  aspect = 'auto',
}: ImageProps) {
  return (
    <div className={cn('overflow-hidden', roundedMap[rounded], wrapperClassName)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          'h-full w-full object-cover',
          aspectMap[aspect],
          roundedMap[rounded],
          className,
        )}
      />
    </div>
  )
}

