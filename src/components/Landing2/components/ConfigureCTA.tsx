import { Box, Container, Grid, Typography, Button, alpha } from "@mui/material"
import TuneIcon from "@mui/icons-material/Tune"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as RouterLink } from "react-router-dom"

const BRAND_BLUE = "#01B0F0"

const ConfigureCTA = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: "#1E293B",
        color: "#FFFFFF",
        "&:hover .configure-badge-icon": { transform: "rotate(90deg)" },
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: BRAND_BLUE, mb: 2 }}>
              <TuneIcon className="configure-badge-icon" sx={{ transition: "transform 0.4s ease" }} />
              <Typography sx={{ fontWeight: 800, letterSpacing: 1.5, fontSize: "0.8rem", textTransform: "uppercase" }}>
                Product Configurator
              </Typography>
            </Box>
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "1.8rem", md: "2.4rem" }, lineHeight: 1.2 }}>
              Build Your Exact Spec, Configured Your Way
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 560, lineHeight: 1.7 }}>
              Choose end connections, materials, pressure ratings and certifications for valves, manifolds and fittings — then add your exact configuration straight to an order.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
            <Button
              component={RouterLink} viewTransition
              to="/products"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: BRAND_BLUE,
                fontWeight: 700,
                borderRadius: 0,
                px: 4,
                py: 1.5,
                whiteSpace: "nowrap",
                transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
                "&:hover": { bgcolor: alpha(BRAND_BLUE, 0.9), transform: "translateY(-2px)", boxShadow: `0 8px 20px ${alpha(BRAND_BLUE, 0.35)}` },
                "&:active": { transform: "translateY(0)" },
              }}>
              Start Configuring
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ConfigureCTA
