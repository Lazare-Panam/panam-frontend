import React from "react"
import { Box, Container, Typography, Stack, Button } from "@mui/material"
import { keyframes } from "@mui/system"
import { Link as RouterLink } from "react-router-dom"
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined"
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined"
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined"
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { C, GRADIENT, btn } from "../homeTokens"

// Same three points as the old scrolling ticker ("LEAD TIMES ON REQUEST • GLOBAL DISPATCH • ENGINEERING SUPPORT"),
// now scrolling between a fixed badge and CTA.
const points = [
  { icon: <ScheduleOutlinedIcon />, text: "LEAD TIMES ON REQUEST" },
  { icon: <LocalShippingOutlinedIcon />, text: "GLOBAL DISPATCH" },
  { icon: <EngineeringOutlinedIcon />, text: "ENGINEERING SUPPORT" },
]

// Four copies of the points; moving by a quarter of the track width loops seamlessly.
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-25%); }
`

const MovingBanner: React.FC = () => {
  return (
    <Box sx={{ bgcolor: C.white, py: { xs: 1, md: 1 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "stretch", md: "center" }}
          spacing={{ xs: 2.5, md: 3 }}
          sx={{
            p: { xs: 2.5, md: 1.5 },
            pl: { md: 1.5 },
            borderRadius: "20px",
            background: `linear-gradient(100deg, ${C.tintBg} 0%, #FFFFFF 75%)`,
            border: "1px solid rgba(1,176,240,0.22)",
          }}>
          {/* Badge */}
          <Stack direction="row" spacing={1.25} alignItems="center" sx={{ flex: "none", px: 2, py: 1.25, borderRadius: "14px", background: GRADIENT.brand, color: C.white, alignSelf: { xs: "flex-start", md: "center" } }}>
            <CampaignOutlinedIcon sx={{ fontSize: 22 }} />
            <Typography sx={{ fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Announcement</Typography>
          </Stack>

          {/* Points — scrolling marquee (badge and CTA stay fixed) */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              overflow: "hidden",
              maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              "&:hover .ann-track": { animationPlayState: "paused" },
            }}>
            <Box
              className="ann-track"
              sx={{
                display: "flex",
                width: "max-content",
                animation: `${scroll} 30s linear infinite`,
                "@media (prefers-reduced-motion: reduce)": { animation: "none" },
              }}>
              {[0, 1, 2, 3].map(copy =>
                points.map(p => (
                  <Stack
                    key={`${copy}-${p.text}`}
                    aria-hidden={copy > 0 ? true : undefined}
                    direction="row"
                    spacing={1.25}
                    alignItems="center"
                    sx={{ px: { xs: 2, lg: 3.5 }, borderLeft: `1px solid ${C.border}`, flex: "none" }}>
                    <Box sx={{ width: 34, height: 34, flex: "none", borderRadius: "10px", bgcolor: C.white, border: `1px solid ${C.border}`, color: C.brandDark, display: "grid", placeItems: "center", "& svg": { fontSize: 19 } }}>
                      {p.icon}
                    </Box>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.85rem", color: C.inkSoft, letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{p.text}</Typography>
                  </Stack>
                )),
              )}
            </Box>
          </Box>

          {/* CTA */}
          <Button component={RouterLink} viewTransition to="/enquiry" endIcon={<ArrowForwardIcon />} sx={{ ...btn.primary, flex: "none", alignSelf: { xs: "flex-start", md: "center" } }}>
            CONTACT SALES
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default MovingBanner
