import { Box, Typography, Container, Stack, Button, Link } from "@mui/material"
import HeroSection from "../Common/HeroSection"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const ErrorPage = () => {
  return (
    <Box>
      <HeroSection
        overline="SYSTEM ANOMALY — CODE 500"
        titleMain="Our Tech Guy is"
        titleAccent="On It."
        description="Something broke. Honestly, our tech guy is probably staring at a terminal window right now with a very concentrated look on his face. We'll be back shortly."
        backgroundImage="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769785299/francisco-de-legarreta-c-hHg9MC-G8_Y-unsplash_ahfxok.jpg"
      />

      <Container maxWidth="md" sx={{ py: 10, textAlign: "center" }}>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: PRIMARY_FONT }}>
            Wait, don't leave just yet.
          </Typography>

          <Typography sx={{ fontSize: "1.1rem", color: "#444", lineHeight: 1.8, maxWidth: "600px" }}>First, maybe do a quick check on your internet? If your connection is solid, then it’s likely the cloud acting up. If our providers are down, half the internet is currently scrambling with us—so at least we're in good company.</Typography>

          <Box
            sx={{
              p: 5,
              bgcolor: "rgba(1, 176, 240, 0.03)",
              borderRadius: 8,
              border: `1px solid rgba(1, 176, 240, 0.2)`,
              position: "relative",
              overflow: "hidden",
            }}>
            {/* Subtle decorative accent */}
            <Box sx={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", bgcolor: BRAND_BLUE }} />

            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: "#1a1a1a" }}>
              Have an urgent enquiry?
            </Typography>
            <Typography sx={{ mb: 3, color: "#666" }}>Don't let a server hiccup stall your project. Our sales and engineering teams are still very much online. Shoot us a mail—we promise you won't be unheard.</Typography>

            <Button
              variant="contained"
              href="mailto:support@panamvalves.com"
              sx={{
                bgcolor: BRAND_BLUE,
                px: 4,
                py: 1.5,
                borderRadius: "50px",
                fontWeight: 800,
                boxShadow: "0 4px 14px 0 rgba(1, 176, 240, 0.39)",
                "&:hover": {
                  bgcolor: "#0096ce",
                  boxShadow: "0 6px 20px rgba(1, 176, 240, 0.23)",
                },
              }}>
              Contact the Humans
            </Button>
          </Box>

          <Stack direction="row" spacing={3}>
            <Link href="/" sx={{ color: BRAND_BLUE, fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              ← Back to Homepage
            </Link>
            <Typography sx={{ color: "#ccc" }}>|</Typography>
            <Typography sx={{ color: "#999", fontSize: "0.9rem" }}>Status: Tech guy is trying his best.</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default ErrorPage
