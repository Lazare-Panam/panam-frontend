import { Box, Container, Stack, Typography, Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { C, GRADIENT, RADIUS } from "../homeTokens"

// Homepage promo strip for the End of Year Stock Clear-Out. Count is hardcoded so the homepage
// bundle doesn't pull in the full 148-item stock data module.
const ClearanceBanner = () => (
  <Box sx={{ py: { xs: 2, md: 2.5 } }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          background: GRADIENT.brand,
          borderRadius: RADIUS.card,
          color: C.white,
          px: { xs: 2.5, md: 4 },
          py: { xs: 2.5, md: 3 },
          boxShadow: "0 18px 40px rgba(3,104,166,0.25)",
        }}>
        {/* decorative ring, matching the site's brand cards */}
        <Box aria-hidden sx={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", top: -150, right: -80, border: "40px solid rgba(255,255,255,0.08)" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={{ xs: 2, md: 3 }}
          sx={{ position: "relative" }}>
          <Box
            sx={{
              flexShrink: 0,
              width: 52,
              height: 52,
              borderRadius: "14px",
              display: "grid",
              placeItems: "center",
              bgcolor: "rgba(255,255,255,0.16)",
              border: "1px solid rgba(255,255,255,0.28)",
            }}>
            <Inventory2OutlinedIcon />
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.9 }}>
              Limited Stock • While Supplies Last
            </Typography>
            <Typography component="p" sx={{ fontWeight: 800, fontSize: { xs: "1.25rem", md: "1.5rem" }, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              End of Year Stock Clear-Out
            </Typography>
            <Typography sx={{ opacity: 0.92, fontSize: { xs: "0.9rem", md: "0.98rem" }, mt: 0.5 }}>
              148 ex-stock lines of SS 316 fittings &amp; valves — cheaper than ever, delivered in 2–3 days from PO.
            </Typography>
          </Box>

          <Button
            component={RouterLink}
            to="/stock-clearance"
            endIcon={<ArrowForwardIcon />}
            sx={{
              flexShrink: 0,
              bgcolor: C.white,
              color: C.brandDark,
              fontWeight: 800,
              textTransform: "none",
              fontSize: "0.98rem",
              px: 3.25,
              py: 1.35,
              borderRadius: RADIUS.button,
              boxShadow: "none",
              whiteSpace: "nowrap",
              "&:hover": { bgcolor: "#EEF6FA", transform: "translateY(-1px)" },
            }}>
            Shop the clearance
          </Button>
        </Stack>
      </Box>
    </Container>
  </Box>
)

export default ClearanceBanner
