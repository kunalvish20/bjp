import type { HTMLAttributes } from 'react'
import { useInView } from '../../hooks/useInView.ts'

type RevealProps = HTMLAttributes<HTMLDivElement> & { delay?: number }

export function Reveal({ children, delay = 0, className = '', style, ...props }: RevealProps) {
  const [ref, isInView] = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      data-in-view={isInView ? 'true' : 'false'}
      className={`reveal-motion ${className}`}
      style={{ transitionDelay: isInView ? `${delay}s` : '0s', ...style }}
      {...props}
    >
      {children}
    </div>
  )
}
