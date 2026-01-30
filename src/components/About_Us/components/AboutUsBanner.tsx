import { Box, Typography, Container, Stack, Button } from "@mui/material"
import HeroSection from "../../Common/HeroSection"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const AboutHero = () => {
  return (
    <Box>
      {/* HERO SECTION */}
      <HeroSection
        overline="THE FUTURE OF FLOW CONTROL"
        titleMain="Engineering a"
        titleAccent="Sustainable"
        titleEnd="Tomorrow."
        description="Bridging the gap between traditional industry and the renewable future. Panam Valves provides the critical precision required for the global transition to Hydrogen and clean energy."
        backgroundImage="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769618379/igal-ness-wQfV9njQxW4-unsplash_cyolxm.jpg"
      />

      {/* NEW CONTENT SECTION */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} spacing={6} alignItems="center">
            {/* Left Side: Bold Statement */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  color: "#1a1a1a",
                  fontFamily: PRIMARY_FONT,
                  lineHeight: 1.2,
                  mb: 3,
                }}>
                Decades of expertise, <br />
                <span style={{ color: BRAND_BLUE }}>driven by innovation.</span>
              </Typography>
              <Box sx={{ width: "60px", height: "5px", backgroundColor: BRAND_BLUE, mb: 4 }} />
            </Box>

            {/* Right Side: Description & CTA */}
            <Box sx={{ flex: 1.2 }}>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: "#444",
                  lineHeight: 1.8,
                  fontFamily: PRIMARY_FONT,
                  mb: 4,
                }}>
                For over 30 years, we have been at the forefront of valve manufacturing. Today, we are evolving. Our mission is to empower the green energy sector with flow control solutions that are not only efficient but fundamentally reliable in the most demanding environments.
              </Typography>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: "50px",
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#01B0F0",
                  borderColor: "#01B0F0",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    backgroundColor: "rgba(0,85,150,0.05)",
                  },
                }}>
                Explore Our Solutions
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default AboutHero
