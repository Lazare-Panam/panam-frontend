import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface SideProps {
  children: ReactNode
  delay?: number
  direction?: "left" | "right"
}

const SideReveal = ({ children, delay = 0, direction = "left" }: SideProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}>
      {children}
    </motion.div>
  )
}

export default SideReveal
