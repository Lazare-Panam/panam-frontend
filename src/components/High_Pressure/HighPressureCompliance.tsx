import React from "react"
import { Box, Typography, Grid, Stack } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import VerifiedIcon from "@mui/icons-material/Verified"
import ScienceIcon from "@mui/icons-material/Science"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const industries = [
  {
    title: "Hydrogen Infrastructure",
    path: "/industries/hydrogen",
    desc: "H2-rated valves and fittings for electrolyser, storage and refuelling projects requiring proven material compatibility at high pressure.",
  },
  {
    title: "Oil & Gas",
    path: "/industries/oil-gas",
    desc: "Upstream, midstream and downstream process control where sour service material requirements and high-pressure ratings are common.",
  },
]

const HighPressureCompliance: React.FC = () => {
  return (
    <Box component="section">
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
            Service Considerations
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 3, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Sour Service & Hydrogen
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mb: 3 }} alignItems="flex-start">
            <ScienceIcon sx={{ color: BRAND_BLUE, mt: 0.3 }} />
            <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>
              NACE MR0175 governs material selection for equipment exposed to H2S-containing (sour) environments, requiring controlled hardness and resistance to sulfide stress cracking. If your application requires NACE MR0175 materials, tell us at enquiry and we will confirm what can be supplied.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2} alignItems="flex-start">
            <VerifiedIcon sx={{ color: BRAND_BLUE, mt: 0.3 }} />
            <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>
              In hydrogen service, material embrittlement and micro-leakage are the key risks at high pressure. Share your media, pressure and temperature at enquiry and we will confirm suitability for your application.
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Typography sx={{ fontWeight: 700, mb: 2, fontSize: 14, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: 0.5, textTransform: "uppercase" }}>
            Where This Range Is Used
          </Typography>
          <Stack spacing={2}>
            {industries.map(ind => (
              <Box
                key={ind.path}
                component={RouterLink}
                viewTransition
                to={ind.path}
                sx={{
                  display: "block",
                  p: 3,
                  bgcolor: "#f5fbfe",
                  border: "1px solid #d0eef9",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  "&:hover": { borderColor: BRAND_BLUE, boxShadow: "0 8px 20px rgba(1,176,240,0.1)" },
                }}>
                <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontFamily: PRIMARY_FONT, mb: 1 }}>{ind.title}</Typography>
                <Typography sx={{ fontSize: 13, color: "#666", fontFamily: PRIMARY_FONT, lineHeight: 1.7, mb: 1.5 }}>{ind.desc}</Typography>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Typography variant="caption" sx={{ fontWeight: 700, color: BRAND_BLUE }}>Explore Industry</Typography>
                  <ArrowForwardIcon sx={{ fontSize: 14, color: BRAND_BLUE }} />
                </Stack>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HighPressureCompliance
