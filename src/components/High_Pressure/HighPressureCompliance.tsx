import React from "react"
import { Box, Typography, Grid, Stack } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import { Eyebrow } from "../Landing2/homeStyles"
import { C, SHADOW, cardSx } from "../Landing2/homeTokens"

// Each consideration sits beside the industry it matters most to, so the two columns line up row by row
const rows = [
  {
    icon: <ScienceOutlinedIcon />,
    title: "Sour service (NACE MR0175)",
    text: "NACE MR0175 governs material selection for equipment exposed to H2S-containing (sour) environments, requiring controlled hardness and resistance to sulfide stress cracking. If your application requires NACE MR0175 materials, tell us at enquiry and we will confirm what can be supplied.",
    industry: {
      title: "Oil & Gas",
      path: "/industries/oil-gas",
      desc: "Upstream, midstream and downstream process control where sour service material requirements and high-pressure ratings are common.",
    },
  },
  {
    icon: <VerifiedOutlinedIcon />,
    title: "Hydrogen service",
    text: "In hydrogen service, material embrittlement and micro-leakage are the key risks at high pressure. Share your media, pressure and temperature at enquiry and we will confirm suitability for your application.",
    industry: {
      title: "Hydrogen Infrastructure",
      path: "/industries/hydrogen",
      desc: "H2-rated valves and fittings for electrolyser, storage and refuelling projects requiring proven material compatibility at high pressure.",
    },
  },
]

const columnLabelSx = { fontWeight: 700, fontSize: "0.78rem", color: C.muted, letterSpacing: "0.12em", textTransform: "uppercase" } as const

const HighPressureCompliance: React.FC = () => {
  return (
    <Box>
      <Box sx={{ maxWidth: 720, mb: { xs: 4, md: 5 } }}>
        <Eyebrow>Service Considerations</Eyebrow>
        <Typography component="h2" sx={{ mt: 2, fontWeight: 800, color: C.ink, letterSpacing: "-0.025em", lineHeight: 1.12, fontSize: { xs: "2rem", md: "2.6rem" } }}>
          Sour Service & Hydrogen
        </Typography>
      </Box>

      {/* Column labels, desktop only (on phones each pair stacks) */}
      <Grid container spacing={3} sx={{ mb: 1.5, display: { xs: "none", md: "flex" } }}>
        <Grid size={{ md: 7 }}>
          <Typography sx={columnLabelSx}>What to consider</Typography>
        </Grid>
        <Grid size={{ md: 5 }}>
          <Typography sx={columnLabelSx}>Where this range is used</Typography>
        </Grid>
      </Grid>

      <Stack spacing={3}>
        {rows.map(row => (
          <Grid key={row.title} container spacing={{ xs: 1.5, md: 3 }} alignItems="stretch">
            <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex" }}>
              <Stack direction="row" spacing={2} sx={{ ...cardSx, flex: 1, p: { xs: 2.5, md: 3.5 }, borderRadius: "20px" }}>
                <Box sx={{ width: 46, height: 46, flex: "none", borderRadius: "13px", bgcolor: C.tintBg, color: C.brand, display: "grid", placeItems: "center" }}>{row.icon}</Box>
                <Box>
                  <Typography component="h3" sx={{ fontWeight: 800, color: C.ink, fontSize: "1.05rem", mb: 0.75 }}>
                    {row.title}
                  </Typography>
                  <Typography sx={{ color: C.muted, lineHeight: 1.75, fontSize: "0.94rem" }}>{row.text}</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex" }}>
              <Box
                component={RouterLink}
                viewTransition
                to={row.industry.path}
                sx={{
                  position: "relative",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 2,
                  p: { xs: 2.5, md: 3.5 },
                  borderRadius: "20px",
                  overflow: "hidden",
                  color: C.white,
                  textDecoration: "none",
                  background: `linear-gradient(135deg, ${C.brand} 0%, ${C.brandDark} 55%, ${C.brandDeep} 100%)`,
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&::after": { content: '""', position: "absolute", width: 180, height: 180, borderRadius: "50%", right: -70, bottom: -100, border: "26px solid rgba(255,255,255,0.08)" },
                  "&:hover": { transform: "translateY(-4px)", boxShadow: SHADOW.brand },
                  "&:hover .go": { transform: "rotate(45deg)" },
                }}>
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.1rem", mb: 1 }}>{row.industry.title}</Typography>
                  <Typography sx={{ fontSize: "0.9rem", opacity: 0.9, lineHeight: 1.65 }}>{row.industry.desc}</Typography>
                </Box>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ position: "relative", zIndex: 1 }}>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.88rem" }}>Explore industry</Typography>
                  <Box className="go" sx={{ width: 36, height: 36, borderRadius: "50%", bgcolor: C.white, color: C.brandDeep, display: "grid", placeItems: "center", transition: "transform 0.3s ease", "& svg": { fontSize: 18 } }}>
                    <NorthEastRoundedIcon />
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </Box>
  )
}

export default HighPressureCompliance
