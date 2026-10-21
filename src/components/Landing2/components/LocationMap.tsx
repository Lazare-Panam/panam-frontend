import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { C, RADIUS, btn, cardSx, sectionSx } from "../homeTokens"
import { SectionHeader } from "../homeStyles"

const ADDRESS = "Ground Floor, St Edburgs Hall, Priory Road, Bicester, OX26 6BL, United Kingdom"
const MAPS_QUERY = encodeURIComponent(ADDRESS)
// Precise coordinates for OX26 6BL (via postcodes.io) — the building name alone geocodes
// ambiguously (multiple businesses share the address), so the embed pin uses lat/lng directly.
const COORDS = "51.894658,-1.150153"

const iconTile = { width: 40, height: 40, flex: "none", borderRadius: RADIUS.button, bgcolor: C.brandTint, color: C.brandDark, display: "grid", placeItems: "center", "& svg": { fontSize: 21 } }
const linkSx = { color: C.ink, fontWeight: 600, textDecoration: "none", textTransform: "none", "&:hover": { color: C.brandDark } }

const LocationMap = () => {
  return (
    <Box component="section" sx={sectionSx("white")}>
      <Container maxWidth="lg">
        <SectionHeader eyebrow="Find Us" title="Visit Our UK Headquarters" align="center" />

        <Grid container sx={{ ...cardSx, borderRadius: "20px", overflow: "hidden" }}>
          <Grid size={{ xs: 12, md: 4 }} sx={{ p: { xs: 3.5, md: 5 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Box sx={iconTile}>
                  <LocationOnOutlinedIcon />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: C.ink, mb: 0.5 }}>Bicester, UK</Typography>
                  <Typography sx={{ color: C.muted, lineHeight: 1.7, fontSize: "0.92rem" }}>
                    Ground Floor, St Edburgs Hall
                    <br />
                    Priory Road, Bicester
                    <br />
                    OX26 6BL, United Kingdom
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={iconTile}>
                  <PhoneOutlinedIcon />
                </Box>
                <Typography component="a" href="tel:+447369243459" sx={linkSx}>
                  +44 7369 243459
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={iconTile}>
                  <EmailOutlinedIcon />
                </Box>
                <Typography component="a" href="mailto:marketing@panamvalve.com" sx={{ ...linkSx, wordBreak: "break-all" }}>
                  marketing@panamvalve.com
                </Typography>
              </Stack>

              <Button
                component="a"
                href={`https://maps.google.com/?q=${MAPS_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ArrowForwardIcon />}
                sx={{ ...btn.secondary, alignSelf: "flex-start" }}>
                Get Directions
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 8 }} sx={{ minHeight: { xs: 300, md: 440 }, bgcolor: C.surface }}>
            <Box
              component="iframe"
              title="Panam Valves — Bicester, UK location map"
              src={`https://www.google.com/maps?q=${COORDS}&z=16&output=embed`}
              loading="lazy"
              sx={{ width: "100%", height: "100%", minHeight: { xs: 300, md: 440 }, border: 0, display: "block" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default LocationMap
