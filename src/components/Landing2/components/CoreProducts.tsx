import { Box, Container, Typography, Button, Grid, Stack, alpha } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useNavigate } from "react-router-dom"

const BRAND_BLUE = "#01B0F0"

const productData = [
  { name: "Hydrogen Fittings", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065950/cross-npt-1_r7ivzj.png", path: "/products/hydrogen/pipe-fittings-hydrogen" },
  { name: "Double Block & Bleed", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065511/MONO-FLANGE-1_zo3vzq.png", path: "/products/double-block-and-bleed-valves" },
  { name: "Filters", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065475/PTF-TC-06-60-SS_qvotij.png", path: "/products/filters" },
  { name: "System Integration", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065393/Img11695_kst9gv.png", path: "/products/system-integration" },
  { name: "Check Valves", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773066005/PCV-S-08-OD-PNG-removebg-preview_gfigng.png", path: "/products/valves/check-valves" },
  { name: "2-Way Valve Manifold", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065762/2VM-SS-8-20M-RM_gviqce.png", path: "/products/valve-manifolds/2-way-valve-manifold" },
  { name: "3-Way Valve Manifold", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065795/3VM-SS-H_xhzpkr.png", path: "/products/valve-manifolds/3-way-valve-manifold" },
  { name: "Pipe Fittings", img: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1773065185/reducing-hex-couplings-npt_dlncbd.png", path: "/products/instrumentation-fittings/pipe-fittings" },
]
const CoreProducts = () => {
  const navigate = useNavigate()
  return (
    <Box component="section" id="products" sx={{ py: 12, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Grid container spacing={4} alignItems="flex-end" sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="overline" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5 }}>
                  Core Product Lines
                </Typography>
                <Box sx={{ flex: 1, height: "1px", bgcolor: alpha(BRAND_BLUE, 0.2) }} />
              </Stack>
              <Typography variant="h2" sx={{ fontWeight: 800, color: "#1E293B", fontSize: { xs: "2.5rem", md: "3.5rem" }, lineHeight: 1.1 }}>
                Our Core
                <Box component="span" sx={{ color: BRAND_BLUE }}>
                  {" "}
                  Products
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: "#64748B", maxWidth: 600, fontSize: "1.1rem" }}>
                Precision-engineered instrumentation solutions for critical global infrastructure.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { md: "flex-end" } }}>
            <Button variant="outlined" endIcon={<ArrowForwardIcon />} onClick={()=>navigate("/products")} sx={{ borderColor: "#E2E8F0", color: "#1E293B", fontWeight: 700, px: 3, py: 1.5, "&:hover": { borderColor: BRAND_BLUE, color: BRAND_BLUE } }}>
              Find All Products
            </Button>
          </Grid>
        </Grid>

        {/* Product Grid */}
        <Grid container spacing={4}>
          {" "}
          {/* Spacing 4 creates a nice 32px gap between cards */}
          {productData.map((product, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Box
                onClick={() => navigate(product.path)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  p: 4,
                  cursor: "pointer",
                  // Makes all cards in a row the same height
                  borderRadius: "0", // Small radius looks more industrial than 0
                  bgcolor: "#F8FAFC",
                  border: "1px solid #F1F5F9",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  textAlign: "center",
                  "&:hover": {
                    bgcolor: "#FFFFFF",
                    borderColor: BRAND_BLUE,
                    boxShadow: `0 15px 30px ${alpha(BRAND_BLUE, 0.1)}`,
                    transform: "translateY(-10px)",
                    "& .prod-img": { transform: "scale(1.08)" },
                    "& .prod-link": { color: BRAND_BLUE },
                  },
                }}>
                <Box sx={{ height: 160, display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
                  <Box
                    component="img"
                    className="prod-img"
                    src={product.img}
                    alt={product.name}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                      transition: "transform 0.4s ease",
                      filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.08))",
                    }}
                  />
                </Box>

                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1E293B", mb: 2, flexGrow: 1 }}>
                  {product.name}
                </Typography>

                <Typography
                  className="prod-link"
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "#94A3B8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    mt: "auto", // Pushes the link to the bottom regardless of text height
                    transition: "color 0.3s ease",
                  }}>
                  View Range <ArrowForwardIcon sx={{ fontSize: 14 }} />
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CoreProducts
