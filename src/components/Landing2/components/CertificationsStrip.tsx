import { Box, Container, Grid, Typography, Button } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as RouterLink } from "react-router-dom"
import { certsByTab } from "../../Resources/components/Cert"
import { C, btn, cardSx, cardHoverSx, sectionSx } from "../homeTokens"
import { SectionHeader } from "../homeStyles"

const featuredCerts = [...(certsByTab["qms"] ?? []).map(cert => ({ ...cert, tab: "qms" }))]

const CertificationsStrip = () => {
  return (
    <Box component="section" sx={sectionSx("surface")}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Certified & Compliant"
          title="Quality You Can Verify"
          titleComponent="h3"
          action={
            <Button component={RouterLink} viewTransition to="/certificates" endIcon={<ArrowForwardIcon />} sx={{ ...btn.secondary, flexShrink: 0 }}>
              View All Certifications
            </Button>
          }
        />

        <Grid container spacing={{ xs: 2.5, md: 4 }}>
          {featuredCerts.map(cert => (
            <Grid key={cert.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                component={RouterLink}
                viewTransition
                to={`/certificates/${cert.tab}`}
                sx={{
                  ...cardSx,
                  ...cardHoverSx,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                  textDecoration: "none",
                  "&:hover .cert-img": { transform: "scale(1.08)" },
                  "&:hover .cert-cta": { color: C.brandDark },
                }}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 300, md: 340 },
                    m: 1.25,
                    borderRadius: "14px",
                    bgcolor: C.white,
                    border: `1px solid ${C.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}>
                  <Box
                    component="img"
                    className="cert-img"
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    sx={{ height: "100%", width: "100%", objectFit: "contain", transform: "scale(1)", transition: "transform 0.45s ease" }}
                  />
                </Box>
                <Box sx={{ px: 3, pt: 1.5, pb: 3 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.15rem", color: C.ink, letterSpacing: "-0.01em" }}>{cert.title}</Typography>
                  <Typography sx={{ color: C.muted, fontSize: "0.92rem", lineHeight: 1.5, mt: 0.5 }}>{cert.subtitle}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CertificationsStrip
