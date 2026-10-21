import { Link as RouterLink } from "react-router-dom"
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded"
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined"
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined"
import { Countup } from "./Countup"
import { C, GRADIENT, SHADOW, btn } from "../homeTokens"

// Same items as the former standalone TrustBar, now the bottom row of this card.
const trust = [
  { icon: <LocalShippingOutlinedIcon />, label: "Global Dispatch" },
  { icon: <VerifiedOutlinedIcon />, label: "ISO 9001:2015 Certified" },
  { icon: <PublicOutlinedIcon />, countTarget: "52+", labelSuffix: " Countries Served" },
  { icon: <SupportAgentOutlinedIcon />, countTarget: "24", labelSuffix: "h Technical Response" },
]

// One card: part-number search on top, trust points below. The links to the Product Index, the High-Pressure
// Index and the HTML sitemap are always visible and prerendered — internal links every product page relies on.
const PartNumberFinder = () => (
  <Box component="section" sx={{ bgcolor: C.white, pt: { xs: 4, md: 5 }, pb: { xs: 1, md: 2 } }}>
    <Container maxWidth="lg">
      <Box sx={{ borderRadius: "22px", bgcolor: C.white, border: `1px solid ${C.border}`, boxShadow: SHADOW.card, overflow: "hidden" }}>
        {/* Search row */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2.5, md: 3 }}
          alignItems={{ xs: "stretch", md: "center" }}
          sx={{ p: { xs: 2.5, md: 2 }, pl: { md: 2.5 }, background: `linear-gradient(100deg, ${C.tintBg} 0%, ${C.white} 60%)` }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ flex: 1, minWidth: 0 }}>
            <Box aria-hidden sx={{ width: 46, height: 46, flex: "none", borderRadius: "50%", bgcolor: C.white, color: C.brandDark, display: "grid", placeItems: "center", boxShadow: "0 0 0 5px rgba(1,176,240,0.10)", "& svg": { fontSize: 22 } }}>
              <QrCodeScannerRoundedIcon />
            </Box>
            <Typography sx={{ fontWeight: 600, color: C.ink, fontSize: "1rem", whiteSpace: { lg: "nowrap" } }}>Know the part number? Search our full product index.</Typography>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} alignItems={{ xs: "stretch", sm: "center" }}>
            <Button component={RouterLink} to="/product-index" startIcon={<SearchIcon />} sx={btn.primary}>
              Find a Part Number
            </Button>
            {/* Direct entry point to the full high-pressure directory so every HP product page has an
                internal link from the homepage (fixes the orphaned HP SKUs flagged in the crawl). */}
            <Button component={RouterLink} to="/high-pressure-index" sx={btn.secondary}>
              High-Pressure Index
            </Button>
            {/* Low-emphasis entry point to the full HTML sitemap (also linked sitewide in the footer). */}
            <Button component={RouterLink} to="/sitemap" sx={{ ...btn.secondary, border: "1px solid transparent", color: C.muted, "&:hover": { color: C.brandDark, bgcolor: C.tintBg } }}>
              Site Map
            </Button>
          </Stack>
        </Stack>

        {/* Trust row */}
        <Grid container sx={{ borderTop: `1px solid ${C.border}` }}>
          {trust.map((item, i) => (
            <Grid
              key={item.label}
              size={{ xs: 6, md: 3 }}
              sx={{
                px: { xs: 2, md: 3 },
                py: { xs: 2, md: 2.25 },
                borderLeft: { md: i > 0 ? `1px solid ${C.border}` : "none" },
                borderTop: { xs: i > 1 ? `1px solid ${C.border}` : "none", md: "none" },
                borderRight: { xs: i % 2 === 0 ? `1px solid ${C.border}` : "none", md: "none" },
              }}>
              <Stack direction="row" spacing={1.5} alignItems="center" justifyContent={{ md: "center" }} sx={{ "&:hover .trust-icon": { transform: "translateY(-2px)" } }}>
                <Box className="trust-icon" sx={{ width: 38, height: 38, flex: "none", borderRadius: "12px", background: GRADIENT.brand, color: C.white, display: "grid", placeItems: "center", transition: "transform 0.25s ease", "& svg": { fontSize: 20 } }}>
                  {item.icon}
                </Box>
                <Typography sx={{ fontWeight: 600, fontSize: { xs: "0.82rem", md: "0.92rem" }, color: C.ink, lineHeight: 1.3 }}>
                  {item.countTarget ? (
                    <>
                      <Countup target={item.countTarget} />
                      {item.labelSuffix}
                    </>
                  ) : (
                    item.label
                  )}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </Box>
)

export default PartNumberFinder
