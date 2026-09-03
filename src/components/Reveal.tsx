import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

interface RevealProps extends PropsWithChildren {
  className?: string
  delay?: number
  amount?: number
}

export function Reveal({ children, className, delay = 0, amount = 0.18 }: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

