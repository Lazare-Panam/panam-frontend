import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as RouterLink } from "react-router-dom"
import { C, btn, sectionSx } from "../homeTokens"
import { SectionHeader } from "../homeStyles"

const productData = [
  { name: "High Pressure & Hydrogen", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/high-pressure/adapters_-_npt_x_npt_-_jpg-removebg-preview.png", path: "/high-pressure" },
  { name: "Instrumentation Fittings", img: "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/male-tee.png", path: "/instrumentation-fittings" },
  { name: "Valves", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/valves/check-valves/PCV%20S%2004%20OD%2001.png", path: "/valves" },
  { name: "Manifolds", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/manifolds/2VM/2VM-SS-8-RM_-_JPG__1_-removebg-preview.png", path: "/manifolds" },
  { name: "Double Block & Bleed", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/dbb/block___bleed_-_flange_x_flange_-_JPEG-removebg-preview.png", path: "/double-block-and-bleed-valves" },
  { name: "Filters", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/filters/PIF-IA-02-2-SS_-_JPG-removebg-preview.png", path: "/filters" },
  { name: "Quick Coupling", img: "https://pblol2.blob.core.windows.net/panam-images/products/quick-coupling/iso-a", path: "/quick-coupling-and-tubing" },
  { name: "System Integration", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/system-integration/Img11695-removebg-preview.png", path: "/system-integration" },
]

const CoreProducts = () => {
  return (
    <Box component="section" id="products" sx={sectionSx("white")}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Core Product Lines"
          title="Our Core Products"
          subtitle="Precision-engineered valves, manifolds and fittings for critical global infrastructure."
          action={
            <Stack
              direction="row"
              useFlexGap
              flexWrap={{ xs: "wrap", sm: "nowrap" }}
              gap={1.25}
              sx={{ flexShrink: 0, width: { xs: "100%", md: "auto" }, "& > a": { flex: { xs: "1 1 0", md: "0 0 auto" }, px: { xs: 1.5, sm: 3 } } }}>
              <Button component={RouterLink} viewTransition to="/products" endIcon={<ArrowForwardIcon />} sx={btn.secondary}>
                Products
              </Button>
              <Button component={RouterLink} viewTransition to="/about" endIcon={<ArrowForwardIcon />} sx={btn.secondary}>
                Panam
              </Button>
              <Button component={RouterLink} viewTransition to="/catalogPDFs" endIcon={<ArrowForwardIcon />} sx={btn.primary}>
                Catalogs
              </Button>
            </Stack>
          }
        />

        <Grid container spacing={{ xs: 2, md: 3 }}>
          {productData.map((product, i) => (
            <Grid size={{ xs: 6, md: 3 }} key={product.name}>
              <Box
                component={RouterLink}
                viewTransition
                to={product.path}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  borderRadius: "24px",
                  overflow: "hidden",
                  bgcolor: C.white,
                  border: `1px solid ${C.border}`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: "0 24px 50px rgba(1,120,190,0.16)", borderColor: "rgba(1,176,240,0.4)" },
                  "&:hover .prod-img": { transform: "scale(1.1) rotate(-3deg)" },
                  "&:hover .prod-bg": { opacity: 1 },
                  "&:hover .prod-btn": { bgcolor: C.brand, color: C.white, borderColor: C.brand, transform: "rotate(-45deg)" },
                }}>
                {/* Image stage */}
                <Box sx={{ position: "relative", aspectRatio: "4 / 3", flex: "none", display: "flex", alignItems: "center", justifyContent: "center", p: { xs: 2.5, md: 3.5 }, background: `radial-gradient(circle at 50% 55%, #FFFFFF 0%, ${C.surface} 70%)`, overflow: "hidden" }}>
                  <Box className="prod-bg" aria-hidden sx={{ position: "absolute", inset: 0, background: `radial-gradient(circle at 50% 55%, #FFFFFF 0%, ${C.tintBg} 60%, rgba(1,176,240,0.16) 100%)`, opacity: 0, transition: "opacity 0.4s ease" }} />
                  <Typography aria-hidden sx={{ position: "absolute", top: 14, left: 16, fontWeight: 700, fontSize: "0.78rem", color: C.muted, letterSpacing: "0.06em", fontVariantNumeric: "tabular-nums" }}>
                    {String(i + 1).padStart(2, "0")}
                  </Typography>
                  <Box
                    component="img"
                    className="prod-img"
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", boxSizing: "border-box", p: { xs: 1.5, md: 4 }, objectFit: "contain", transition: "transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1)", filter: "drop-shadow(0 16px 20px rgba(15,34,54,0.18))" }}
                  />
                </Box>
                {/* Footer */}
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1.5} sx={{ px: { xs: 2, md: 2.5 }, py: { xs: 1.75, md: 2.25 }, flex: 1, borderTop: `1px solid ${C.border}` }}>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: { xs: "0.92rem", md: "1.02rem" }, lineHeight: 1.3, letterSpacing: "-0.01em" }}>{product.name}</Typography>
                    <Typography sx={{ mt: 0.5, fontWeight: 600, fontSize: "0.8rem", color: C.brandDark }}>View Range</Typography>
                  </Box>
                  <Box className="prod-btn" sx={{ width: 38, height: 38, flex: "none", borderRadius: "50%", border: `1px solid ${C.border}`, color: C.ink, display: { xs: "none", sm: "grid" }, placeItems: "center", transition: "all 0.3s ease" }}>
                    <ArrowForwardIcon sx={{ fontSize: 18 }} />
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CoreProducts
