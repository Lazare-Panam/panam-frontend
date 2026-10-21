import { useEffect, useState } from "react"
import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material"
import { useReducedMotion } from "framer-motion"
import { Link as RouterLink } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import ScienceIcon from "@mui/icons-material/Science"
import SpeedIcon from "@mui/icons-material/Speed"
import PublicIcon from "@mui/icons-material/Public"
import AssignmentIcon from "@mui/icons-material/Assignment"
import { Countup } from "./Countup"
import { C, GRADIENT, RADIUS, btn, sectionSx } from "../homeTokens"
import { Eyebrow } from "../homeStyles"

const features = [
  { icon: <ScienceIcon fontSize="small" />, title: "H2-Compatible Materials", desc: "SS316, Duplex, Super Duplex and Inconel options — suitability confirmed for your service conditions." },
  { icon: <SpeedIcon fontSize="small" />, title: "Advanced Leak-Detection", desc: "Training and engineering audits for high-pressure H2 storage systems." },
  { icon: <PublicIcon fontSize="small" />, title: "Global H2 Supply Chain", desc: "Material compatibility and documentation support across global markets." },
  { icon: <AssignmentIcon fontSize="small" />, title: "Documentation", desc: "Material certificates on request, plus ISO 9001, ISO 14001 and ISO 45001 certified management systems." },
]

const stats = [
  { num: "60k", unit: "psi", label: "MAX RATED PRESSURE" },
  { num: "100", unit: "%", label: "MATERIAL TESTED" },
  { num: "52+", unit: "", label: "COUNTRIES SERVED" },
  { num: "24", unit: "h", label: "TECHNICAL RESPONSE" },
]

const ROTATE_MS = 3500

// Auto-cycling stat display: one big stat at a time with a slide/fade + count-up, tabs below to pick one.
const StatShowcase = () => {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (paused || reduce) return
    const id = setInterval(() => setActive(i => (i + 1) % stats.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [paused, reduce])

  const s = stats[active]

  return (
    <Box onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} sx={{ position: "relative" }}>
      <Box aria-hidden sx={{ position: "absolute", inset: { xs: "14px -10px -14px 10px", md: "22px -22px -22px 22px" }, borderRadius: "32px", background: GRADIENT.brand, opacity: 0.14 }} />
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "28px",
          minHeight: { xs: 340, md: 460 },
          p: { xs: 3.5, md: 5 },
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: C.white,
          background: GRADIENT.brand,
          boxShadow: "0 24px 60px rgba(1,120,190,0.28)",
        }}>
        {/* decoration */}
        <Box aria-hidden sx={{ position: "absolute", right: -120, top: -120, width: 420, height: 420, borderRadius: "50%", border: "60px solid rgba(255,255,255,0.08)" }} />
        <Box aria-hidden sx={{ position: "absolute", left: -60, bottom: -60, width: 220, height: 220, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.16)" }} />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "linear-gradient(160deg, #000 0%, transparent 65%)",
            WebkitMaskImage: "linear-gradient(160deg, #000 0%, transparent 65%)",
          }}
        />

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ position: "relative" }}>
          <Box sx={{ px: 1.5, py: 0.5, borderRadius: RADIUS.pill, bgcolor: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em" }}>H2</Box>
          <Typography sx={{ fontWeight: 700, fontVariantNumeric: "tabular-nums", color: "rgba(255,255,255,0.8)" }}>
            {String(active + 1).padStart(2, "0")} / {String(stats.length).padStart(2, "0")}
          </Typography>
        </Stack>

        {/* Big stat */}
        <Box
          key={active}
          aria-live="polite"
          sx={{
            position: "relative",
            my: 4,
            animation: reduce ? "none" : "h2StatIn 0.7s cubic-bezier(0.215, 0.61, 0.355, 1)",
            "@keyframes h2StatIn": { from: { opacity: 0, transform: "translateY(28px) scale(0.98)", filter: "blur(6px)" }, to: { opacity: 1, transform: "none", filter: "blur(0)" } },
          }}>
          <Typography component="p" sx={{ fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 0.95, fontSize: { xs: "5rem", sm: "6.5rem", md: "8rem" }, fontVariantNumeric: "tabular-nums" }}>
            <Countup target={s.num} duration={1100} />
            <Box component="span" sx={{ fontSize: "0.32em", ml: 1, fontWeight: 700, letterSpacing: "-0.01em", color: "rgba(255,255,255,0.75)" }}>
              {s.unit}
            </Box>
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 700, letterSpacing: "0.12em", fontSize: { xs: "0.85rem", md: "1rem" }, color: "rgba(255,255,255,0.9)" }}>{s.label}</Typography>
        </Box>

        {/* Tabs */}
        <Box sx={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1 }}>
          {stats.map((st, i) => {
            const on = i === active
            return (
              <Box
                key={st.label}
                component="button"
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${st.num}${st.unit} ${st.label}`}
                aria-pressed={on}
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  p: 1.25,
                  border: "1px solid",
                  borderColor: on ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.22)",
                  borderRadius: "12px",
                  bgcolor: on ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)",
                  color: C.white,
                  font: "inherit",
                  fontWeight: 700,
                  fontSize: { xs: "0.8rem", md: "0.95rem" },
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.16)" },
                }}>
                {st.num}
                <Box component="span" sx={{ fontSize: "0.75em", opacity: 0.8 }}>{st.unit}</Box>
                {on && !reduce && (
                  <Box
                    key={`${active}-${paused}`}
                    sx={{
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      height: 3,
                      bgcolor: C.white,
                      width: paused ? 0 : "100%",
                      animation: paused ? "none" : `h2Progress ${ROTATE_MS}ms linear`,
                      "@keyframes h2Progress": { from: { width: 0 }, to: { width: "100%" } },
                    }}
                  />
                )}
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

const HydrogenSection = () => {
  return (
    <Box component="section" id="hydrogen" sx={{ ...sectionSx("tint"), position: "relative", overflow: "hidden" }}>
      <Box aria-hidden sx={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", right: -250, top: -250, background: "radial-gradient(circle, rgba(1,176,240,0.16), transparent 65%)" }} />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Eyebrow>HYDROGEN INFRASTRUCTURE</Eyebrow>
            <Typography variant="h2" sx={{ mt: 2.5, mb: 2.5, fontWeight: 800, fontSize: { xs: "2.5rem", md: "3.5rem" }, lineHeight: 1.05, letterSpacing: "-0.035em", color: C.ink }}>
              The Future
              <br />
              Runs on{" "}
              <Box component="span" sx={{ display: "inline-block", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", fontStyle: "italic", pr: "0.12em", mr: "-0.12em", pb: "0.06em" }}>
                H2
              </Box>
            </Typography>
            <Typography sx={{ color: C.muted, mb: 4.5, maxWidth: 560, lineHeight: 1.75, fontSize: "1.08rem" }}>
              Dedicated hydrogen product engineering and project support for large-scale electrolyser and refuelling infrastructure. Our H2 supply chain ensures material compatibility.
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4.5 }}>
              {features.map(feat => (
                <Grid size={{ xs: 12, sm: 6 }} key={feat.title}>
                  <Box sx={{ height: "100%", boxSizing: "border-box", p: 2.25, borderRadius: "16px", bgcolor: C.white, border: `1px solid ${C.border}`, transition: "border-color 0.25s ease, transform 0.25s ease", "&:hover": { borderColor: "rgba(1,176,240,0.45)", transform: "translateY(-2px)" } }}>
                    <Stack direction="row" spacing={1.5}>
                      <Box sx={{ width: 38, height: 38, flex: "none", borderRadius: RADIUS.button, background: GRADIENT.brand, color: C.white, display: "grid", placeItems: "center" }}>{feat.icon}</Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: "0.95rem", color: C.ink }}>{feat.title}</Typography>
                        <Typography sx={{ color: C.muted, fontSize: "0.85rem", lineHeight: 1.5, mt: 0.5 }}>{feat.desc}</Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button component={RouterLink} viewTransition to="/high-pressure" endIcon={<ArrowForwardIcon />} sx={{ ...btn.primary, py: 1.5, px: 3.5 }}>
                SHOP H2 PRODUCTS
              </Button>
              <Button component={RouterLink} viewTransition to="/resources" startIcon={<MenuBookIcon />} sx={{ ...btn.secondary, py: 1.5, px: 3.5 }}>
                H2 TECHNICAL GUIDE
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <StatShowcase />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HydrogenSection
