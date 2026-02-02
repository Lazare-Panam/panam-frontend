import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface Props {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
}

const SlideIn = ({ children, direction = "up", delay = 0 }: Props) => {
  // Define offset based on direction
  const offsets = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offsets[direction].x,
        y: offsets[direction].y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Smooth cubic-bezier for a "premium" feel
      }}>
      {children}
    </motion.div>
  )
}

export default SlideIn
