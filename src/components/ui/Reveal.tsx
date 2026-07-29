import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { useInView } from '../../hooks/useInView.ts'

type RevealProps = HTMLMotionProps<'div'> & { delay?: number }

export function Reveal({ children, delay = 0, className = '', ...props }: RevealProps) {
  const [ref, isInView] = useInView<HTMLDivElement>()

  return (
    <motion.div ref={ref} initial={{ opacity: 0.98, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.98, y: 18 }} transition={{ duration: isInView ? 0.55 : 0, delay, ease: 'easeOut' }} className={className} {...props}>
      {children}
    </motion.div>
  )
}
