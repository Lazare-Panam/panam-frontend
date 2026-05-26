import { Box, Container, Typography, Button, Grid, Stack, alpha } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useNavigate, Link as RouterLink } from "react-router-dom"

const BRAND_BLUE = "#01B0F0"

const productData = [
  { name: "Hydrogen", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/high-pressure/adapters_-_npt_x_npt_-_jpg-removebg-preview.png", path: "/products/hydrogen/pipe-fittings-hydrogen" },
  { name: "Instrumenation Fittings", img: "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/male-tee.png", path: "/instrumentation-fittings" },
  { name: "Valves", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/valves/check-valves/PCV%20S%2004%20OD%2001.png", path: "/valves" },
  { name: "Manifolds", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/manifolds/2VM/2VM-SS-8-RM_-_JPG__1_-removebg-preview.png", path: "/manifolds" },
  { name: "Double Block & Bleed", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/dbb/block___bleed_-_flange_x_flange_-_JPEG-removebg-preview.png", path: "/double-block-and-bleed-valves" },
  { name: "Filters", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/filters/PIF-IA-02-2-SS_-_JPG-removebg-preview.png", path: "/filters" },
  { name: "Quick Coupling", img: "https://pblol2.blob.core.windows.net/panam-images/products/quick-coupling/iso-a", path: "/products/quick-coupling-and-hoses" },
  { name: "System Integration", img: "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/products/system-integration/Img11695-removebg-preview.png", path: "/products/system-integration" },
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
            <Stack
              direction={{ xs: "column", sm: "row" }} // Stacks on mobile, row on desktop
              spacing={2}
              alignItems="center">
              <Button
                component={RouterLink}
                to="/products"
                variant="outlined"
                endIcon={<ArrowForwardIcon sx={{ fontSize: "1.1rem" }} />}
                sx={{
                  borderColor: "#E2E8F0",
                  color: "#475569",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderRadius: "8px", // Rounded corners for a modern feel
                  textTransform: "none",
                  transition: "0.2s",
                  "&:hover": {
                    borderColor: BRAND_BLUE,
                    color: BRAND_BLUE,
                    bgcolor: "rgba(0, 144, 200, 0.04)",
                  },
                }}>
                Products
              </Button>

              <Button
                component={RouterLink}
                to="/about"
                variant="contained"
                disableElevation
                endIcon={<ArrowForwardIcon sx={{ fontSize: "1.1rem" }} />}
                sx={{
                  bgcolor: BRAND_BLUE,
                  color: "#fff",
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderRadius: "8px",
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#0090C8",
                    boxShadow: "0 4px 12px rgba(0, 144, 200, 0.2)",
                  },
                }}>
                Panam
              </Button>

              <Button
                component={RouterLink}
                to="/catalogPDFs"
                variant="contained"
                disableElevation
                // Using a gold/amber accent to make it "jump out" against the blue
                endIcon={<ArrowForwardIcon sx={{ fontSize: "1.1rem" }} />}
                sx={{
                  bgcolor: "#FF6B00",
                  color: "#fff",
                  fontWeight: 700, // Slightly bolder
                  px: 3,
                  py: 1,
                  borderRadius: "8px",
                  textTransform: "none",
                  boxShadow: "0 2px 4px rgba(245, 158, 11, 0.2)",
                  "&:hover": {
                    bgcolor: "#D97706",
                    boxShadow: "0 6px 15px rgba(245, 158, 11, 0.4)",
                    transform: "scale(1.02)", // Scale effect makes it feel more "interactive"
                  },
                }}>
                Catalogs
              </Button>
            </Stack>
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
