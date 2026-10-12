import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as RouterLink } from "react-router-dom"
import { certsByTab } from "../../Resources/components/Cert"

const BRAND_BLUE = "#01B0F0"

const featuredCerts = [
  ...(certsByTab["qms"] ?? []).map(cert => ({ ...cert, tab: "qms" })),
]

const CertificationsStrip = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "flex-end" }} spacing={3} sx={{ mb: 6 }}>
          <Box>
            <Typography variant="overline" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5 }}>
              Certified & Compliant
            </Typography>
            <Typography variant="h4" component="h3" sx={{ fontWeight: 800, color: "#1E293B", mt: 1 }}>
              Quality You Can Verify
            </Typography>
          </Box>
          <Button
            component={RouterLink} viewTransition
            to="/certificates"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderColor: "#E2E8F0",
              color: "#475569",
              fontWeight: 600,
              px: 3,
              borderRadius: "8px",
              textTransform: "none",
              transition: "0.2s",
              "&:hover": { borderColor: BRAND_BLUE, color: BRAND_BLUE, bgcolor: "rgba(1,176,240,0.04)" },
            }}>
            View All Certifications
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {featuredCerts.map((cert, i) => (
            <Grid key={i} size={{ xs: 6, sm: 4, md: 3 }}>
              <Stack
                component={RouterLink} viewTransition
                to={`/certificates/${cert.tab}`}
                spacing={1.5}
                alignItems="center"
                sx={{
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                  bgcolor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "#FFFFFF",
                    borderColor: BRAND_BLUE,
                    boxShadow: "0 10px 24px rgba(1,176,240,0.1)",
                    transform: "translateY(-4px)",
                    "& .cert-img": { transform: "scale(1.08)" },
                  },
                  "&:active": { transform: "translateY(-1px)" },
                }}>
                <Box
                  component="img"
                  className="cert-img"
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  sx={{ height: 56, width: "auto", maxWidth: "100%", objectFit: "contain", transition: "transform 0.3s ease" }}
                />
                <Typography sx={{ fontWeight: 800, fontSize: "0.85rem", color: "#1E293B" }}>{cert.title}</Typography>
                <Typography variant="caption" sx={{ color: "#64748B" }}>{cert.subtitle}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CertificationsStrip
