import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined"
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded"
import { C, GRADIENT, SHADOW, cardSx, cardHoverSx, sectionSx } from "../homeTokens"
import { Eyebrow } from "../homeStyles"

const tools = [
  {
    icon: <TuneOutlinedIcon />,
    title: "Product Configurator",
    desc: "Build your exact valve, manifold or fitting spec online.",
    path: "/products",
    cta: "Open",
  },
  {
    icon: <MenuBookOutlinedIcon />,
    title: "Catalog & CAD Files",
    desc: "Full product catalogue plus 2D/3D drawings for your design workflow.",
    path: "/catalogPDFs",
    cta: "Open",
  },
  {
    icon: <VerifiedOutlinedIcon />,
    title: "Certifications",
    desc: "ISO 9001, 14001 and 45001, plus ATEX and CE PED for tube fittings — view our certificates.",
    path: "/certificates",
    cta: "Open",
  },
]

const [featured, ...rest] = tools

// Bento layout: the configurator as a large featured card, the other two stacked beside it.
const ToolsResources = () => {
  return (
    <Box component="section" sx={sectionSx("surface")}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 5, md: 6 } }}>
          <Eyebrow>Tools & Resources</Eyebrow>
          <Typography component="h2" sx={{ mt: 2, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, fontSize: { xs: "2.2rem", md: "2.9rem" }, color: C.ink, maxWidth: 640 }}>
            Everything You Need, One Click Away
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {/* Featured */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={RouterLink}
              viewTransition
              to={featured.path}
              sx={{
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                minHeight: { xs: 300, md: 420 },
                boxSizing: "border-box",
                p: { xs: 3.5, md: 5 },
                borderRadius: "28px",
                textDecoration: "none",
                color: C.white,
                background: GRADIENT.brand,
                boxShadow: "0 20px 50px rgba(1,120,190,0.25)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": { transform: "translateY(-4px)", boxShadow: "0 28px 60px rgba(1,120,190,0.32)" },
                "&:hover .feat-arrow": { transform: "rotate(45deg)", bgcolor: C.white, color: C.brandDeep },
                "&:hover .feat-icon": { transform: "rotate(-8deg) scale(1.05)" },
              }}>
              {/* decorative rings + grid */}
              <Box aria-hidden sx={{ position: "absolute", right: -90, bottom: -90, width: 340, height: 340, borderRadius: "50%", border: "50px solid rgba(255,255,255,0.10)" }} />
              <Box aria-hidden sx={{ position: "absolute", right: 40, bottom: 40, width: 150, height: 150, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.18)" }} />
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                  maskImage: "linear-gradient(135deg, #000 0%, transparent 60%)",
                  WebkitMaskImage: "linear-gradient(135deg, #000 0%, transparent 60%)",
                }}
              />

              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ position: "relative" }}>
                <Box
                  className="feat-icon"
                  sx={{ width: 72, height: 72, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)", display: "grid", placeItems: "center", transition: "transform 0.35s ease", "& svg": { fontSize: 38 } }}>
                  {featured.icon}
                </Box>
                <Box
                  className="feat-arrow"
                  sx={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.4)", display: "grid", placeItems: "center", transition: "all 0.3s ease" }}>
                  <NorthEastRoundedIcon />
                </Box>
              </Stack>

              <Box sx={{ position: "relative", mt: 6 }}>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.7rem", md: "2.2rem" }, letterSpacing: "-0.025em", lineHeight: 1.1 }}>{featured.title}</Typography>
                <Typography sx={{ mt: 1.5, color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: 380 }}>{featured.desc}</Typography>
                <Stack direction="row" spacing={0.75} alignItems="center" sx={{ mt: 3 }}>
                  <Typography sx={{ fontWeight: 700 }}>{featured.cta}</Typography>
                  <ArrowForwardIcon sx={{ fontSize: 18 }} />
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* Stacked */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2.5} sx={{ height: "100%" }}>
              {rest.map(tool => (
                <Box
                  key={tool.title}
                  component={RouterLink}
                  viewTransition
                  to={tool.path}
                  sx={{
                    ...cardSx,
                    ...cardHoverSx,
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 2.5, md: 3 },
                    p: { xs: 3, md: 3.5 },
                    borderRadius: "24px",
                    textDecoration: "none",
                    boxShadow: SHADOW.card,
                    "&:hover .tool-icon": { background: GRADIENT.brand, color: C.white },
                    "&:hover .tool-arrow": { bgcolor: C.brand, borderColor: C.brand, color: C.white, transform: "rotate(45deg)" },
                  }}>
                  <Box
                    className="tool-icon"
                    sx={{ width: 68, height: 68, flex: "none", borderRadius: "20px", bgcolor: C.brandTint, color: C.brandDark, display: "grid", placeItems: "center", transition: "all 0.3s ease", "& svg": { fontSize: 32 } }}>
                    {tool.icon}
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: { xs: "1.1rem", md: "1.25rem" }, letterSpacing: "-0.015em" }}>{tool.title}</Typography>
                    <Typography sx={{ color: C.muted, lineHeight: 1.6, fontSize: "0.95rem", mt: 0.75 }}>{tool.desc}</Typography>
                    <Typography sx={{ mt: 1.25, color: C.brandDark, fontWeight: 600, fontSize: "0.9rem" }}>{tool.cta}</Typography>
                  </Box>
                  <Box
                    className="tool-arrow"
                    sx={{ width: 44, height: 44, flex: "none", borderRadius: "50%", border: `1px solid ${C.border}`, color: C.ink, display: { xs: "none", sm: "grid" }, placeItems: "center", transition: "all 0.3s ease" }}>
                    <NorthEastRoundedIcon sx={{ fontSize: 20 }} />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ToolsResources
