import React from "react"
import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded"
import { CATEGORIES, drawingKindFor, type TechnicalFileCategory } from "./categories"
import CadDrawing from "./CadDrawing"
import { CategoryPage } from "../Common/CategoryIndexKit"
import { Eyebrow } from "../Landing2/homeStyles"
import { C, GRADIENT, RADIUS, SHADOW, btn, cardHoverSx, cardSx } from "../Landing2/homeTokens"

const hrefFor = (category: string) => `/cad-step-files/${encodeURIComponent(category)}`

// Blueprint sheet holding one of the fitting drawings
const DrawingSheet: React.FC<{ category: string; sx?: object }> = ({ category, sx }) => (
  <Box sx={{ borderRadius: "10px", border: "1px solid rgba(1,176,240,0.22)", bgcolor: "#F3FAFE", backgroundImage: "linear-gradient(rgba(1,176,240,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(1,176,240,0.06) 1px, transparent 1px)", backgroundSize: "10px 10px", boxShadow: SHADOW.card, p: 0.75, boxSizing: "border-box", ...sx }}>
    <CadDrawing kind={drawingKindFor(category)} />
  </Box>
)

// Category card: product photo with its matching drawing sheet tucked in the corner, then copy and a clear action
const CategoryCard: React.FC<TechnicalFileCategory> = ({ name, category, subtitle, description, image }) => (
  <Box
    component={RouterLink}
    viewTransition
    to={hrefFor(category)}
    sx={{
      ...cardSx,
      ...cardHoverSx,
      display: "flex",
      flexDirection: "column",
      height: "100%",
      overflow: "hidden",
      textDecoration: "none",
      "&:hover .cad-photo": { transform: "scale(1.06)" },
      "&:hover .cad-sheet": { transform: "rotate(0deg) translateY(-4px)" },
      "&:hover .cad-cta": { background: GRADIENT.brand, color: C.white, borderColor: "transparent" },
    }}>
    <Box sx={{ position: "relative", aspectRatio: "4 / 3", m: 1.25, mb: 0, borderRadius: "14px", overflow: "hidden", background: `radial-gradient(ellipse at 40% 45%, ${C.white} 0%, ${C.white} 40%, ${C.tintBg} 100%)` }}>
      {image ? (
        <Box component="img" className="cad-photo" src={image} alt={name} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "contain", p: 4, pr: 9, boxSizing: "border-box", mixBlendMode: "multiply", transition: "transform 0.45s ease" }} />
      ) : (
        <Box className="cad-photo" sx={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", p: 4, pr: 9, transition: "transform 0.45s ease" }}>
          <Box sx={{ width: "70%" }}>
            <CadDrawing kind={drawingKindFor(category)} />
          </Box>
        </Box>
      )}
      <Stack direction="row" alignItems="center" spacing={0.6} sx={{ position: "absolute", top: 12, left: 12, px: 1.1, py: 0.4, borderRadius: RADIUS.pill, bgcolor: "rgba(255,255,255,0.92)", border: `1px solid ${C.border}`, color: C.brandDark, fontSize: "0.72rem", fontWeight: 700, "& svg": { fontSize: 14 } }}>
        <ViewInArRoundedIcon />
        <span>{subtitle}</span>
      </Stack>
      <Box className="cad-sheet" sx={{ position: "absolute", right: 12, bottom: 12, width: "44%", transform: "rotate(-4deg)", transition: "transform 0.35s ease" }}>
        <DrawingSheet category={category} sx={{ aspectRatio: "16 / 10" }} />
      </Box>
    </Box>

    <Box sx={{ px: 3, pt: 2.5, pb: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.brandDark }}>CAD & STEP Files</Typography>
      <Typography component="h2" sx={{ mt: 0.5, fontWeight: 800, fontSize: "1.35rem", color: C.ink, letterSpacing: "-0.02em" }}>
        {name}
      </Typography>
      <Typography sx={{ mt: 1, color: C.muted, fontSize: "0.92rem", lineHeight: 1.7, flexGrow: 1 }}>{description}</Typography>
      <Stack className="cad-cta" direction="row" alignItems="center" justifyContent="center" spacing={0.75} sx={{ ...btn.secondary, mt: 2.5, py: 1.1, transition: "all 0.25s ease", "& svg": { fontSize: 18 } }}>
        <span>Browse files</span>
        <ArrowForwardRoundedIcon />
      </Stack>
    </Box>
  </Box>
)

const CadStepFiles: React.FC = () => (
  <CategoryPage>
    {/* Hero: copy on the left, the three drawing sheets fanned on the right */}
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: GRADIENT.heroBg, pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Stack spacing={2.5}>
              <Box>
                <Eyebrow>Technical Downloads</Eyebrow>
              </Box>
              <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.05, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.5rem" } }}>
                CAD &amp; STEP{" "}
                <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Files
                </Box>
              </Typography>
              <Typography sx={{ color: C.muted, fontSize: { xs: "1.02rem", md: "1.12rem" }, lineHeight: 1.75, maxWidth: 560 }}>Browse and download 3D STEP models and technical drawings by category — ready to drop straight into your CAD assembly.</Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1, pt: 0.5 }}>
                {CATEGORIES.map(cat => (
                  <Box
                    key={cat.category}
                    component={RouterLink}
                    viewTransition
                    to={hrefFor(cat.category)}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      px: 1.75,
                      py: 0.75,
                      borderRadius: RADIUS.pill,
                      fontSize: "0.86rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      border: `1px solid ${C.border}`,
                      bgcolor: "rgba(255,255,255,0.85)",
                      color: C.inkSoft,
                      transition: "all 0.2s ease",
                      "& svg": { fontSize: 16, transition: "transform 0.2s ease" },
                      "&:hover": { borderColor: C.ink, color: C.ink },
                      "&:hover svg": { transform: "translateX(2px)" },
                    }}>
                    {cat.name}
                    <ArrowForwardRoundedIcon />
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ md: 5.5 }} sx={{ display: { xs: "none", md: "block" } }}>
            {/* Tidy grid of the three drawing sheets: one large on top, two below */}
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1.5 }}>
              {CATEGORIES.slice(0, 3).map((cat, i) => (
                <Box key={cat.category} component={RouterLink} viewTransition to={hrefFor(cat.category)} sx={{ gridColumn: i === 0 ? "1 / -1" : "auto", position: "relative", display: "block", textDecoration: "none", transition: "transform 0.3s ease", "&:hover": { transform: "translateY(-4px)" } }}>
                  <DrawingSheet category={cat.category} sx={{ aspectRatio: i === 0 ? "16 / 7" : "16 / 10", bgcolor: C.white, boxShadow: SHADOW.card }} />
                  <Box component="span" sx={{ position: "absolute", left: 10, bottom: 8, px: 1, py: 0.3, borderRadius: RADIUS.pill, bgcolor: "rgba(255,255,255,0.92)", border: `1px solid ${C.border}`, color: C.inkSoft, fontSize: "0.7rem", fontWeight: 700 }}>
                    {cat.name}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    <Box component="section" sx={{ bgcolor: C.surface, py: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2.5, md: 4 }}>
          {CATEGORIES.map(cat => (
            <Grid key={cat.category} size={{ xs: 12, sm: 6, md: 4 }}>
              <CategoryCard {...cat} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </CategoryPage>
)

export default CadStepFiles
