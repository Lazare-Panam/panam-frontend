import { useState, useEffect, useRef } from "react"

// Renders the real number up front (so prerendered HTML and crawlers see it), then counts up from 0 once scrolled into view
export const Countup = ({ target, duration = 2000 }: { target: string; duration?: number }) => {
  const targetNum = parseInt(target.replace(/[^0-9]/g, "")) // Extract number
  const suffix = target.replace(/[0-9]/g, "") // Extract 'k' or '+'
  const [count, setCount] = useState(targetNum)
  const countRef = useRef<HTMLSpanElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0)
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (countRef.current) observer.observe(countRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return
    let start = 0
    const increment = targetNum / (duration / 16) // 16ms is roughly 1 frame at 60fps

    const timer = setInterval(() => {
      start += increment
      if (start >= targetNum) {
        setCount(targetNum)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [hasStarted, targetNum, duration])

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  )
}
