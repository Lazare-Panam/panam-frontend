import { useEffect, useState } from "react"
import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material"
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import { useReducedMotion } from "framer-motion"
import { C, sectionSx } from "../homeTokens"
import { Eyebrow } from "../homeStyles"

const testimonials = [
  {
    quote: "Panam consistently hits tight lead times on stock items — often quicker than the big-name suppliers we compared them against.",
    role: "Procurement Manager",
    company: "Major UK Industrial Distributor",
  },
  {
    quote: "Their pricing on high-volume orders lets us protect margin without compromising on certification or traceability.",
    role: "Operations Director",
    company: "Leading UK Oil & Gas Distributor",
  },
  {
    quote: "We buy in real volume and Panam has never missed a delivery window. That reliability is worth more than a few pence on unit price.",
    role: "Buyer",
    company: "National Fluid Power Distributor",
  },
]

const ROTATE_MS = 7000

const navBtnSx = {
  width: 48,
  height: 48,
  border: `1px solid ${C.border}`,
  bgcolor: C.white,
  color: C.ink,
  transition: "all 0.2s ease",
  "&:hover": { bgcolor: C.brand, borderColor: C.brand, color: C.white },
}

// Spotlight layout: one large quote at a time, author cards below act as tabs, auto-rotates (pauses on hover).
const Testimonials = () => {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const go = (d: number) => setActive(i => (i + d + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused || prefersReducedMotion) return
    const id = setInterval(() => setActive(i => (i + 1) % testimonials.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [paused, prefersReducedMotion])

  const t = testimonials[active]

  return (
    <Box component="section" sx={sectionSx("white")} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Eyebrow>Trusted By Distributors</Eyebrow>
            <Typography component="h2" sx={{ mt: 2, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, fontSize: { xs: "2.2rem", md: "2.9rem" }, color: C.ink }}>
              What Our Partners Say
            </Typography>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 4 }}>
              <IconButton aria-label="Previous testimonial" onClick={() => go(-1)} sx={navBtnSx}>
                <ArrowBackRoundedIcon />
              </IconButton>
              <IconButton aria-label="Next testimonial" onClick={() => go(1)} sx={navBtnSx}>
                <ArrowForwardRoundedIcon />
              </IconButton>
              <Typography sx={{ ml: 1.5, color: C.muted, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
                <Box component="span" sx={{ color: C.ink }}>{String(active + 1).padStart(2, "0")}</Box> / {String(testimonials.length).padStart(2, "0")}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            {/* Spotlight quote */}
            <Box
              aria-live="polite"
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "28px",
                p: { xs: 4, md: 6 },
                minHeight: { md: 280 },
                boxSizing: "border-box",
                background: `linear-gradient(135deg, ${C.tintBg} 0%, #FFFFFF 70%)`,
                border: "1px solid rgba(1,176,240,0.2)",
              }}>
              <FormatQuoteRoundedIcon aria-hidden sx={{ position: "absolute", right: { xs: 8, md: 24 }, top: { xs: -10, md: -24 }, fontSize: { xs: 140, md: 220 }, color: C.brand, opacity: 0.1 }} />
              <Box
                key={active}
                sx={{
                  position: "relative",
                  animation: prefersReducedMotion ? "none" : "tqIn 0.55s cubic-bezier(0.215, 0.61, 0.355, 1)",
                  "@keyframes tqIn": { from: { opacity: 0, transform: "translateY(12px)" }, to: { opacity: 1, transform: "none" } },
                }}>
                <Typography sx={{ color: C.ink, fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.45, fontSize: { xs: "1.3rem", md: "1.75rem" } }}>
                  “{t.quote}”
                </Typography>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 4 }}>
                  <Box sx={{ width: 4, height: 36, borderRadius: 2, bgcolor: C.brand }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: C.ink }}>{t.role}</Typography>
                    <Typography sx={{ color: C.muted, fontSize: "0.92rem" }}>{t.company}</Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>

            {/* Author tabs */}
            <Grid container spacing={1.5} sx={{ mt: 1.5 }}>
              {testimonials.map((item, i) => {
                const on = i === active
                return (
                  <Grid key={item.role} size={{ xs: 12, sm: 4 }}>
                    <Box
                      component="button"
                      type="button"
                      onClick={() => setActive(i)}
                      aria-pressed={on}
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        height: "100%",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        p: 1.75,
                        textAlign: "left",
                        cursor: "pointer",
                        font: "inherit",
                        borderRadius: "16px",
                        border: `1px solid ${on ? "rgba(1,176,240,0.45)" : C.border}`,
                        bgcolor: on ? C.white : C.surface,
                        boxShadow: on ? "0 10px 26px rgba(1,120,190,0.12)" : "none",
                        transition: "all 0.25s ease",
                        "&:hover": { borderColor: "rgba(1,176,240,0.45)", bgcolor: C.white },
                      }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          flex: "none",
                          borderRadius: "50%",
                          display: "grid",
                          placeItems: "center",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          color: on ? C.white : C.brandDark,
                          background: on ? `linear-gradient(135deg, ${C.brand}, ${C.brandDeep})` : C.brandTint,
                          transition: "all 0.25s ease",
                        }}>
                        {item.role.charAt(0)}
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "0.9rem" }}>{item.role}</Typography>
                        <Typography sx={{ color: C.muted, fontSize: "0.78rem", lineHeight: 1.35 }}>{item.company}</Typography>
                      </Box>
                      {on && !prefersReducedMotion && (
                        <Box
                          key={`${active}-${paused}`}
                          sx={{
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            height: 3,
                            bgcolor: C.brand,
                            width: paused ? 0 : "100%",
                            animation: paused ? "none" : `tqProgress ${ROTATE_MS}ms linear`,
                            "@keyframes tqProgress": { from: { width: 0 }, to: { width: "100%" } },
                          }}
                        />
                      )}
                    </Box>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Testimonials
