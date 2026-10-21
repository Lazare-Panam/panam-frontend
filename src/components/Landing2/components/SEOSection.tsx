import { useState } from "react"
import { Box, Container, Stack, Typography } from "@mui/material"
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded"
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined"
import Grid from "@mui/material/Grid"
import { C, GRADIENT, SHADOW, sectionSx } from "../homeTokens"
import { Eyebrow } from "../homeStyles"

const YOUTUBE_ID = "HRFxY37P0Lg"

const bodySx = { color: C.text, lineHeight: 1.85, fontSize: "1.05rem", "& strong": { color: C.ink, fontWeight: 600 } }

// Media-left layout: large feature video, copy on the right, and the sub-section as a full-width
// highlight strip below. Copy and headings are unchanged (this block carries the homepage's main SEO text).
const SEOSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Box component="section" sx={{ ...sectionSx("white"), position: "relative", overflow: "hidden" }}>
      <Box aria-hidden sx={{ position: "absolute", top: -220, left: -220, width: 620, height: 620, borderRadius: "50%", background: "radial-gradient(circle, rgba(1,176,240,0.10), transparent 65%)" }} />
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          {/* Video */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ position: "relative" }}>
              <Box aria-hidden sx={{ position: "absolute", inset: { xs: "14px -10px -14px 10px", md: "22px -22px -22px 22px" }, borderRadius: "30px", background: GRADIENT.brand, opacity: 0.14 }} />
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  borderRadius: "28px",
                  overflow: "hidden",
                  boxShadow: SHADOW.hover,
                  bgcolor: C.surface,
                }}>
                {isPlaying ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
                    title="Panam - Instrumentation Fittings & Valves"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: 0, display: "block" }}></iframe>
                ) : (
                  <Box
                    component="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play video: Panam - Instrumentation Fittings & Valves"
                    sx={{
                      width: "100%",
                      height: "100%",
                      p: 0,
                      border: "none",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      bgcolor: C.surface,
                      "&:hover .vid-thumb": { transform: "scale(1.42)" },
                      "&:hover .play-badge": { transform: "translate(-50%, -50%) scale(1.08)" },
                      "&:hover .play-ring": { transform: "translate(-50%, -50%) scale(1.2)", opacity: 0 },
                    }}>
                    {/* The video frame has letterbox bars baked in; zoom crops them away */}
                    <Box
                      className="vid-thumb"
                      sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(https://i.ytimg.com/vi/${YOUTUBE_ID}/maxresdefault.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform: "scale(1.35)",
                        transition: "transform 0.8s ease",
                      }}
                    />
                    <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(1,176,240,0.05) 30%, rgba(3,104,166,0.45) 100%)" }} />
                    <Box
                      className="play-ring"
                      sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 128, height: 128, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.75)", transition: "all 0.6s ease" }}
                    />
                    <Box
                      className="play-badge"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 92,
                        height: 92,
                        borderRadius: "50%",
                        bgcolor: C.white,
                        display: "grid",
                        placeItems: "center",
                        boxShadow: "0 14px 40px rgba(3,104,166,0.4)",
                        transition: "transform 0.25s ease",
                      }}>
                      <PlayArrowRoundedIcon sx={{ color: C.brand, fontSize: 52 }} />
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        left: { xs: 16, md: 24 },
                        bottom: { xs: 16, md: 24 },
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        px: 2,
                        py: 1,
                        borderRadius: "999px",
                        bgcolor: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(8px)",
                        color: C.brandDark,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        "&::before": { content: '""', width: 8, height: 8, borderRadius: "50%", bgcolor: "#EF4444" },
                      }}>
                      Watch Panam In Action
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>

          {/* Copy */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Eyebrow>Instrumentation</Eyebrow>
            <Typography component="h2" sx={{ mt: 2, mb: 3, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, fontSize: { xs: "2.2rem", md: "2.8rem" }, color: C.ink }}>
              Valves & Flow Control Products
            </Typography>
            <Typography sx={{ ...bodySx, fontSize: { xs: "1.06rem", md: "1.12rem" }, color: "#3E5266", mb: 2.5 }}>
              PANAM Valves provides a complete range of high-quality instrumentation valves and flow control products designed for performance in demanding industrial environments. Our solutions are widely used across <strong>oil & gas, petrochemical, and process industries</strong> where reliability and precision are critical.
            </Typography>
            <Typography sx={bodySx}>
              Our product portfolio includes <strong>needle valves, check valves, and non return check valves</strong>, alongside advanced solutions such as the <strong>block and bleed valve</strong> for safe isolation and pressure control. We also supply a wide range of <strong>pipe and fittings</strong>, including <strong>stainless steel fittings</strong>, ensuring compatibility across a variety of industrial systems.
            </Typography>
          </Grid>
        </Grid>

        {/* Sub-section: open layout (hairline above, heading left, copy right) */}
        <Grid container spacing={{ xs: 2.5, md: 8 }} alignItems="flex-start" sx={{ mt: { xs: 5, md: 7 }, pt: { xs: 4, md: 5 }, borderTop: `1px solid ${C.border}` }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box sx={{ width: 48, height: 48, flex: "none", borderRadius: "50%", bgcolor: C.brandTint, color: C.brandDark, display: "grid", placeItems: "center", "& svg": { fontSize: 24 } }}>
                <PrecisionManufacturingOutlinedIcon />
              </Box>
              <Typography component="h3" sx={{ fontWeight: 700, color: C.ink, fontSize: { xs: "1.15rem", md: "1.3rem" }, letterSpacing: "-0.015em", lineHeight: 1.3 }}>
                Precision-Engineered for Industrial Applications
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography sx={{ ...bodySx, fontSize: "1.02rem" }}>
              All PANAM products are manufactured using premium materials to ensure durability and long service life. Our range of <strong>tube fitting</strong> solutions and <strong>flare fittings</strong> are designed for secure, leak-free connections in high-pressure environments.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default SEOSection
