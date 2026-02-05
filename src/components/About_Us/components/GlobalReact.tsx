import React, { useEffect, useState, useRef } from "react"
import { Box, Container, Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Grid" // Reverted to Grid2 for layout consistency

const BRAND_BLUE = "#01B0F0"
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
          color: BRAND_BLUE,
          fontWeight: 800,
          fontFamily: PRIMARY_FONT,
          fontSize: { xs: "2.2rem", md: "3rem" },
          mb: 0.5,
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
    <>
      <Divider
        sx={{
          width: "100%",
          borderColor: "rgba(0,0,0,0.1)",
          borderBottomWidth: 1,
        }}
      />
      <Box sx={{ py: 12, bgcolor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          {/* Header Section */}
          <Box sx={{ mb: 10, textAlign: "left" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontFamily: PRIMARY_FONT,
                color: BRAND_BLUE,
                mb: 3,
                fontSize: { xs: "2rem", md: "2.8rem" },
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
              }}>
              Key Metrics of Our Achievements
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "#4A4A4A", // Kept description dark grey for better readability
                maxWidth: "850px",
                fontFamily: PRIMARY_FONT,
              }}>
              Our achievements serve as milestones that define Panam Valves Ltd.'s journey of innovation, excellence, and global impact. Each accomplishment is a tangible reflection of our dedication to advancing industrial systems.
            </Typography>
          </Box>

          {/* Stats Grid */}
          <Grid container spacing={{ xs: 6, md: 4 }}>
            {stats.map((stat, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Box
                  sx={{
                    textAlign: "left",
                    borderLeft: `4px solid ${BRAND_BLUE}`,
                    pl: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "translateX(8px)" }, // Subtle nudge to the right on hover
                  }}>
                  <StatCounter endValue={stat.value} suffix={stat.suffix} />
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#666", // Grey label so the blue number stands out
                      fontFamily: PRIMARY_FONT,
                      fontSize: "0.85rem",
                    }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default GlobalReachMetrics
