import React from "react"
import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined"
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded"
import { CATEGORIES, drawingKindFor, type TechnicalFileCategory } from "./categories"
import CadDrawing from "./CadDrawing"
import { DRAWING_FILES } from "./drawings"
import { CategoryPage } from "../Common/CategoryIndexKit"
import { Eyebrow } from "../Landing2/homeStyles"
import { C, GRADIENT, RADIUS, SHADOW, btn, cardHoverSx, cardSx } from "../Landing2/homeTokens"

const hrefFor = (category: string) => `/cad-step-files/${encodeURIComponent(category)}`

// Hero panel: the whole library styled as a file browser, filterable by format
type FormatTab = "All" | "STEP" | "PDF"
const FORMAT_TABS: FormatTab[] = ["All", "STEP", "PDF"]
const formatOf = (subtitle: string): Exclude<FormatTab, "All"> => (subtitle.startsWith("STEP") ? "STEP" : "PDF")
const DRAWING_COUNTS = DRAWING_FILES.reduce<Record<string, number>>((acc, f) => ({ ...acc, [f.category]: (acc[f.category] ?? 0) + 1 }), {})
const STEP_COUNT = CATEGORIES.filter(c => formatOf(c.subtitle) === "STEP").length

const HeroFilePanel: React.FC = () => {
  const [tab, setTab] = React.useState<FormatTab>("All")
  const rows = CATEGORIES.filter(c => tab === "All" || formatOf(c.subtitle) === tab)

  return (
    <Box sx={{ borderRadius: RADIUS.card, bgcolor: C.white, border: `1px solid ${C.border}`, boxShadow: SHADOW.hover, overflow: "hidden" }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2, py: 1.25, borderBottom: `1px solid ${C.border}`, bgcolor: C.surface }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FolderOpenRoundedIcon sx={{ fontSize: 20, color: C.brandDark }} />
          <Typography sx={{ fontSize: "0.85rem", fontWeight: 700, color: C.inkSoft }}>Panam technical library</Typography>
        </Stack>
        <Stack direction="row" spacing={0.5} sx={{ p: 0.4, borderRadius: RADIUS.pill, bgcolor: C.white, border: `1px solid ${C.border}` }}>
          {FORMAT_TABS.map(t => (
            <Box
              key={t}
              component="button"
              type="button"
              onClick={() => setTab(t)}
              sx={{ border: 0, cursor: "pointer", px: 1.25, py: 0.4, borderRadius: RADIUS.pill, fontSize: "0.72rem", fontWeight: 700, fontFamily: "inherit", transition: "all 0.2s ease", ...(tab === t ? { background: GRADIENT.brand, color: C.white } : { bgcolor: "transparent", color: C.muted, "&:hover": { color: C.ink } }) }}>
              {t === "All" ? "All" : `.${t}`}
            </Box>
          ))}
        </Stack>
      </Stack>

      <Box sx={{ maxHeight: 340, overflowY: "auto" }}>
        {rows.map(cat => {
          const format = formatOf(cat.subtitle)
          const count = DRAWING_COUNTS[cat.category]
          return (
            <Stack
              key={cat.category}
              component={RouterLink}
              viewTransition
              to={hrefFor(cat.category)}
              direction="row"
              alignItems="center"
              spacing={1.5}
              sx={{ px: 2, py: 1.1, borderBottom: `1px solid ${C.border}`, textDecoration: "none", transition: "background-color 0.2s ease", "&:hover": { bgcolor: C.tintBg }, "&:hover .hero-dl": { background: GRADIENT.brand, color: C.white, borderColor: "transparent" } }}>
              <Box sx={{ width: 32, height: 32, borderRadius: "9px", display: "grid", placeItems: "center", bgcolor: C.brandTint, color: C.brandDark, flexShrink: 0, "& svg": { fontSize: 18 } }}>{format === "STEP" ? <ViewInArRoundedIcon /> : <DescriptionOutlinedIcon />}</Box>
              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Typography sx={{ fontSize: "0.88rem", fontWeight: 700, color: C.ink }}>{cat.name}</Typography>
                <Typography sx={{ fontSize: "0.74rem", color: C.muted }}>{format === "STEP" ? "3D STEP models" : `${count ?? 0} PDF drawing${count === 1 ? "" : "s"}`}</Typography>
              </Box>
              <Box component="span" sx={{ px: 1, py: 0.2, borderRadius: RADIUS.pill, fontSize: "0.66rem", fontWeight: 800, letterSpacing: "0.06em", color: format === "STEP" ? C.brandDeep : C.inkSoft, bgcolor: format === "STEP" ? C.brandTint : C.surface, border: `1px solid ${C.border}` }}>
                .{format}
              </Box>
              <Box className="hero-dl" sx={{ width: 28, height: 28, borderRadius: "50%", display: "grid", placeItems: "center", border: `1px solid ${C.border}`, color: C.inkSoft, transition: "all 0.2s ease", "& svg": { fontSize: 16 } }}>
                <FileDownloadOutlinedIcon />
              </Box>
            </Stack>
          )
        })}
      </Box>

      <Stack direction="row" sx={{ px: 2, py: 1.5, bgcolor: C.surface }} spacing={3}>
        {[
          { value: CATEGORIES.length, label: "Product categories" },
          { value: STEP_COUNT, label: "STEP model libraries" },
          { value: DRAWING_FILES.length, label: "PDF drawings" },
        ].map(stat => (
          <Box key={stat.label}>
            <Typography sx={{ fontSize: "1.4rem", fontWeight: 800, lineHeight: 1.1, background: GRADIENT.number, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.value}</Typography>
            <Typography sx={{ fontSize: "0.72rem", color: C.muted, fontWeight: 600 }}>{stat.label}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

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
    {/* Hero: copy on the left, a file-browser panel of sample libraries on the right */}
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
            <HeroFilePanel />
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
