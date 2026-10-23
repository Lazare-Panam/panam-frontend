import React, { useEffect, useState, useRef } from "react"
import { Box, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { SectionHeader } from "../../Landing2/homeStyles"
import { C } from "../../Landing2/homeTokens"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface StatItem {
  label: string
  value: number
  suffix: string
}

interface StatCounterProps {
  endValue: number
  suffix?: string
  duration?: number
}

const StatCounter: React.FC<StatCounterProps> = ({ endValue, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState<number>(0)
  const [hasStarted, setHasStarted] = useState<boolean>(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true)
      },
      { threshold: 0.1 }
    )
    if (elementRef.current) observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * endValue))
      if (progress < 1) window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }, [hasStarted, endValue, duration])

  return (
    <Box ref={elementRef}>
      <Typography
        variant="h2"
        sx={{
          color: C.white,
          fontWeight: 800,
          fontFamily: PRIMARY_FONT,
          fontSize: { xs: "2rem", md: "2.5rem" },
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          mb: 0.75,
        }}>
        {count.toLocaleString()}
        {suffix}
      </Typography>
    </Box>
  )
}

const GlobalReachMetrics: React.FC = () => {
  const stats: StatItem[] = [
    { label: "Global Reach", value: 52, suffix: "+" },
    { label: "Manufacturing Excellence (sq. ft)", value: 165000, suffix: "" },
    { label: "Partnerships & Alliances", value: 50, suffix: "+" },
    { label: "Production Capacity", value: 100000, suffix: "" },
    { label: "Total No of Products", value: 2000, suffix: "+" },
    { label: "Industrial Experience", value: 25, suffix: "+ years" },
  ]

  return (
    <Box component="section" sx={{ py: { xs: 7, md: 9 }, bgcolor: C.white }}>
      <Container maxWidth="lg">
        {/* Brand-blue band, same gradient as the enquiry side panel */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "28px",
            color: C.white,
            px: { xs: 3, sm: 5, md: 7 },
            py: { xs: 5, md: 7 },
            background: `linear-gradient(135deg, ${C.brand} 0%, ${C.brandDark} 50%, ${C.brandDeep} 100%)`,
            boxShadow: "0 24px 60px rgba(3,104,166,0.25)",
            "&::before": { content: '""', position: "absolute", width: 420, height: 420, borderRadius: "50%", top: -220, right: -140, border: "50px solid rgba(255,255,255,0.06)" },
            "&::after": { content: '""', position: "absolute", width: 300, height: 300, borderRadius: "50%", bottom: -190, left: -100, border: "40px solid rgba(255,255,255,0.05)" },
          }}>
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <SectionHeader dark eyebrow="By the numbers" title="Key Metrics of Our Achievements" subtitle="Our achievements serve as milestones that define Panam Valves Ltd.'s journey of innovation, excellence, and global impact. Each accomplishment is a tangible reflection of our dedication to advancing industrial systems." />
            <Grid container spacing={2}>
              {stats.map(stat => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={stat.label}>
                  <Box
                    sx={{
                      height: "100%",
                      boxSizing: "border-box",
                      p: { xs: 2.5, md: 3 },
                      borderRadius: "18px",
                      bgcolor: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      backdropFilter: "blur(6px)",
                      transition: "transform 0.25s ease, background-color 0.25s ease",
                      "&:hover": { transform: "translateY(-4px)", bgcolor: "rgba(255,255,255,0.16)" },
                    }}>
                    <StatCounter endValue={stat.value} suffix={stat.suffix} />
                    <Typography sx={{ fontWeight: 500, fontSize: "0.92rem", opacity: 0.85, fontFamily: PRIMARY_FONT }}>{stat.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default GlobalReachMetrics
