import { Box, Container, Grid, Typography, Button } from "@mui/material"
import TuneIcon from "@mui/icons-material/Tune"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as RouterLink } from "react-router-dom"
import { C, btn } from "../homeTokens"

const ConfigureCTA = () => {
  return (
    <Box component="section" sx={{ bgcolor: C.white, pb: { xs: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "24px",
            px: { xs: 3.5, md: 7 },
            py: { xs: 5, md: 6 },
            bgcolor: C.tintBg,
            border: "1px solid rgba(1,176,240,0.2)",
            "&:hover .configure-badge-icon": { transform: "rotate(90deg)" },
            "&::after": {
              content: '""',
              position: "absolute",
              right: -110,
              top: -110,
              width: 360,
              height: 360,
              borderRadius: "50%",
              border: "56px solid rgba(1,176,240,0.08)",
            },
          }}>
          <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, color: C.brandDark, mb: 1.5 }}>
                <TuneIcon className="configure-badge-icon" sx={{ fontSize: 20, transition: "transform 0.4s ease" }} />
                <Typography sx={{ fontWeight: 700, letterSpacing: "0.06em", fontSize: "0.75rem", textTransform: "uppercase" }}>Product Configurator</Typography>
              </Box>
              <Typography component="h3" sx={{ fontWeight: 800, mb: 1.5, fontSize: { xs: "1.75rem", md: "2.25rem" }, lineHeight: 1.15, letterSpacing: "-0.025em", color: C.ink }}>
                Build Your Exact Spec, Configured Your Way
              </Typography>
              <Typography sx={{ color: C.muted, maxWidth: 580, lineHeight: 1.7 }}>
                Choose end connections, materials, pressure ratings and certifications for valves, manifolds and fittings — then add your exact configuration straight to an order.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "flex-start", md: "flex-end" } }}>
              <Button component={RouterLink} viewTransition to="/products" endIcon={<ArrowForwardIcon />} sx={{ ...btn.primary, py: 1.5, px: 3.5 }}>
                Start Configuring
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default ConfigureCTA
