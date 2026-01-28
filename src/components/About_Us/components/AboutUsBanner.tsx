import { Box, Typography, Container, Stack, Button } from "@mui/material"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const AboutHero = () => {
  return (
    <Box>
      {/* HERO SECTION */}
      <Box
        sx={{
          width: "100%",
          height: "70vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#000",
          backgroundImage: `url('https://res.cloudinary.com/dm9rmmemx/image/upload/v1769618379/igal-ness-wQfV9njQxW4-unsplash_cyolxm.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)",
            zIndex: 1,
          },
        }}>
        <Container maxWidth="xl" sx={{ zIndex: 2, position: "relative" }}>
          <Stack spacing={2} sx={{ maxWidth: "850px", pl: { md: 4 } }}>
            <Typography
              variant="overline"
              sx={{
                color: BRAND_BLUE,
                fontWeight: 800,
                letterSpacing: 4,
                fontFamily: PRIMARY_FONT,
                textShadow: "0px 0px 10px rgba(1, 176, 240, 0.3)",
              }}>
              THE FUTURE OF FLOW CONTROL
            </Typography>

            <Typography
              variant="h1"
              sx={{
                color: "white",
                fontWeight: 800,
                fontSize: { xs: "2.8rem", md: "4.5rem" },
                lineHeight: 1.05,
                fontFamily: PRIMARY_FONT,
                letterSpacing: "-0.02em",
              }}>
              Engineering a <br />
              <span
                style={{
                  color: BRAND_BLUE,
                  background: `linear-gradient(90deg, ${BRAND_BLUE} 0%, #fff 200%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                Sustainable
              </span>{" "}
              Tomorrow.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "rgba(255, 255, 255, 0.85)",
                fontWeight: 400,
                maxWidth: "650px",
                lineHeight: 1.7,
                fontSize: "1.2rem",
                fontFamily: PRIMARY_FONT,
                mt: 1,
              }}>
              Bridging the gap between traditional industry and the renewable future. Panam Valves provides the critical precision required for the global transition to Hydrogen and clean energy.
            </Typography>
          </Stack>
        </Container>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: `linear-gradient(90deg, ${BRAND_BLUE}, transparent)`,
          }}
        />
      </Box>

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
