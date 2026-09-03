import { motion, useReducedMotion } from "framer-motion"
import { type ReactNode } from "react"

interface Props {
  children: ReactNode
  delay?: number
}

const ScrollReveal = ({ children, delay = 0 }: Props) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }} // Skip the animation entirely if the user has motion sensitivity set
      whileInView={{ opacity: 1, y: 0 }} // Animate to original position
      viewport={{ once: true, margin: "-100px" }} // Trigger slightly before it hits the view
      transition={{
        duration: prefersReducedMotion ? 0 : 0.8,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Smooth "flow" curve
      }}>
      {children}
    </motion.div>
  )
}

export default ScrollReveal
