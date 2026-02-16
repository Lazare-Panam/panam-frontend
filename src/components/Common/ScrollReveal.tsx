import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface Props {
  children: ReactNode
  delay?: number
}

const ScrollReveal = ({ children, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start 30px down and invisible
      whileInView={{ opacity: 1, y: 0 }} // Animate to original position
      viewport={{ once: true, margin: "-100px" }} // Trigger slightly before it hits the view
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Smooth "flow" curve
      }}>
      {children}
    </motion.div>
  )
}

export default ScrollReveal
