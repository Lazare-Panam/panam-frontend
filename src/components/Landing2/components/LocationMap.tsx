import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const BRAND_BLUE = "#01B0F0"
const ADDRESS = "Ground Floor, St Edburgs Hall, Priory Road, Bicester, OX26 6BL, United Kingdom"
const MAPS_QUERY = encodeURIComponent(ADDRESS)
// Precise coordinates for OX26 6BL (via postcodes.io) — the building name alone geocodes
// ambiguously (multiple businesses share the address), so the embed pin uses lat/lng directly.
const COORDS = "51.894658,-1.150153"

const LocationMap = () => {
  return (
    <Box component="section" sx={{ py: 12, bgcolor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: { xs: "left", md: "center" } }}>
          <Typography variant="overline" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5 }}>
            Find Us
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1E293B", fontSize: { xs: "2rem", md: "2.5rem" }, mt: 1 }}>
            Visit Our UK Headquarters
          </Typography>
        </Box>

        <Grid container spacing={0} sx={{ border: "1px solid #E2E8F0", bgcolor: "#FFFFFF" }}>
          {/* Address / Contact Card */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ p: { xs: 4, md: 6 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <LocationOnIcon sx={{ color: BRAND_BLUE, mt: 0.3 }} />
                <Box>
                  <Typography sx={{ fontWeight: 800, color: "#1E293B", mb: 0.5 }}>Bicester, UK</Typography>
                  <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.7 }}>
                    Ground Floor, St Edburgs Hall
                    <br />
                    Priory Road, Bicester
                    <br />
                    OX26 6BL, United Kingdom
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon sx={{ color: BRAND_BLUE }} />
                <Typography
                  component="a"
                  href="tel:+447369243459"
                  sx={{ color: "#1E293B", fontWeight: 700, textDecoration: "none", "&:hover": { color: BRAND_BLUE } }}>
                  +44 7369 243459
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <EmailIcon sx={{ color: BRAND_BLUE }} />
                <Typography
                  component="a"
                  href="mailto:marketing@panamvalve.com"
                  sx={{ color: "#1E293B", fontWeight: 700, textDecoration: "none", textTransform: "none", "&:hover": { color: BRAND_BLUE } }}>
                  marketing@panamvalve.com
                </Typography>
              </Stack>

              <Button
                component="a"
                href={`https://maps.google.com/?q=${MAPS_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  alignSelf: "flex-start",
                  borderColor: "#E2E8F0",
                  color: "#475569",
                  fontWeight: 600,
                  borderRadius: "8px",
                  textTransform: "none",
                  px: 3,
                  transition: "0.2s",
                  "&:hover": { borderColor: BRAND_BLUE, color: BRAND_BLUE, bgcolor: "rgba(1,176,240,0.04)" },
                }}>
                Get Directions
              </Button>
            </Stack>
          </Grid>

          {/* Embedded Map */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ minHeight: { xs: 320, md: 420 }, borderLeft: { md: "1px solid #E2E8F0" } }}>
            <Box
              component="iframe"
              title="Panam Valves — Bicester, UK location map"
              src={`https://www.google.com/maps?q=${COORDS}&z=16&output=embed`}
              loading="lazy"
              sx={{ width: "100%", height: "100%", minHeight: { xs: 320, md: 420 }, border: 0, display: "block" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default LocationMap
