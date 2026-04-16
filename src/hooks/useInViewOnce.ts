import { useEffect, useRef, useState } from 'react'

export type UseInViewOnceOptions = {
  /** How much of the element should be visible before we trigger (0–1). */
  threshold?: number
  /** Root margin for the observer, e.g. '0px 0px -20% 0px'. */
  rootMargin?: string
}

export function useInViewOnce<T extends HTMLElement>({
  threshold = 0.25,
  rootMargin = '0px 0px -10% 0px',
}: UseInViewOnceOptions = {}) {
  const ref = useRef<T | null>(null)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    if (hasEntered) return
    const target = ref.current
    if (!target || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEntered(true)
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [hasEntered, rootMargin, threshold])

  return { ref, hasEntered }
}

