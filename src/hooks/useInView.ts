import { useEffect, useRef, useState, type RefObject } from 'react'

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || isInView || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.disconnect()
      }
    }, { threshold: 0.16, rootMargin: '0px 0px -40px', ...options })

    observer.observe(node)
    return () => observer.disconnect()
  }, [isInView, options])

  return [ref, isInView]
}
