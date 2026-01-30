import { Box, Typography, Container, Stack } from "@mui/material"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface HeroProps {
  overline: string
  titleMain: string
  titleAccent: string
  titleEnd?: string
  description: string
  backgroundImage: string
}

const HeroSection = ({ overline, titleMain, titleAccent, titleEnd, description, backgroundImage }: HeroProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#000",
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 20% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)",
        },
      }}>
      <Container maxWidth="xl" sx={{ zIndex: 2, position: "relative" }}>
        <Stack spacing={2} sx={{ maxWidth: "900px", pl: { md: 4 } }}>
          <Typography
            variant="overline"
            sx={{
              color: BRAND_BLUE,
              fontWeight: 800,
              letterSpacing: 4,
              fontFamily: PRIMARY_FONT,
              textShadow: "0px 0px 15px rgba(1, 176, 240, 0.4)",
            }}>
            {overline}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontWeight: 800,
              fontSize: { xs: "2.8rem", md: "4.5rem" },
              lineHeight: 1.1,
              fontFamily: PRIMARY_FONT,
              letterSpacing: "-0.03em",
            }}>
            {titleMain} <br />
            <span
              style={{
                color: BRAND_BLUE,
                background: `linear-gradient(90deg, ${BRAND_BLUE} 0%, #fff 180%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              {titleAccent}
            </span>{" "}
            {titleEnd}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontWeight: 400,
              maxWidth: "700px",
              lineHeight: 1.6,
              fontSize: "1.25rem",
              fontFamily: PRIMARY_FONT,
              mt: 2,
            }}>
            {description}
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default HeroSection
