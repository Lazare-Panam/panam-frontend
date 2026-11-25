import { Box, Container, Stack, Typography, Button } from "@mui/material"
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded"
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded"
import { Link as RouterLink } from "react-router-dom"
import { C, btn, cardSx } from "../../Landing2/homeTokens"

// Dedicated post-submit confirmation page. We land users here (instead of just a toast) so there is
// a real, shareable URL that marketing/analytics can treat as the enquiry conversion event. It is
// intentionally noindex — a thank-you page should never surface in search results — and is NOT in
// the prerender list in prerender.mjs for the same reason.
const EnquiryThankYou = () => {
  return (
    <Box sx={{ bgcolor: C.surface, minHeight: "70vh", display: "flex", alignItems: "center", py: { xs: 8, md: 12 } }}>
      <title>Enquiry Received | Thank You | PANAM®</title>
      <meta name="robots" content="noindex, follow" />

      <Container maxWidth="sm">
        <Box sx={{ ...cardSx, p: { xs: 4, md: 6 }, textAlign: "center" }}>
          <Box
            sx={{
              width: 72,
              height: 72,
              mx: "auto",
              mb: 3,
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: C.brandTint,
            }}
          >
            <CheckCircleRoundedIcon sx={{ fontSize: 44, color: C.brand }} />
          </Box>

          <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.6rem", md: "2rem" }, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Thank you — your enquiry is in.
          </Typography>

          <Typography sx={{ mt: 2, color: C.text, fontSize: "1.02rem", lineHeight: 1.6 }}>
            Our team has received your enquiry and will review it shortly. You&apos;ll hear back from a
            PANAM® specialist with pricing, lead times and any technical detail you need.
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: "999px",
              bgcolor: C.tintBg,
              color: C.muted,
              fontSize: "0.9rem",
            }}
          >
            <AccessTimeRoundedIcon sx={{ fontSize: 18, color: C.brandDark }} />
            Typical response within 24 business hours
          </Box>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            <Button component={RouterLink} to="/" sx={btn.primary}>
              Back to home
            </Button>
            <Button component={RouterLink} to="/products" sx={btn.secondary}>
              Browse products
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default EnquiryThankYou
