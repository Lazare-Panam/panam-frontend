import { Box, Typography, Container  } from "@mui/material"
import Grid from "@mui/material/Grid"
import HeroSection from "../../Common/HeroSection"
import IndustriesCards from "./IndustriesCards" 

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface IndustryPageProps {
  hero: {
    overline: string
    titleMain: string
    titleAccent: string
    titleEnd?: string
    description: string
    backgroundImage: string
  }
  content: {
    heading: string
    subHeading: string
    bodyText: string
  }
}

const IndustryTemplate = ({ hero, content }: IndustryPageProps) => {
  return (
    <Box>
      {/* 1. Hero Section */}
      <HeroSection {...hero} />

      {/* 2. Content Section (The "About" part) */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="overline"
                sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2 }}
              >
                {content.subHeading}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: PRIMARY_FONT,
                  fontWeight: 800,
                  mt: 1,
                  color: "#1a1a1a",
                  lineHeight: 1.2,
                }}
              >
                {content.heading}
              </Typography>
              <Box
                sx={{
                  width: "60px",
                  height: "4px",
                  backgroundColor: BRAND_BLUE,
                  mt: 3,
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: PRIMARY_FONT,
                  fontSize: "1.1rem",
                  color: "#444",
                  lineHeight: 1.8,
                  whiteSpace: "pre-line", // Respects line breaks in your text
                }}
              >
                {content.bodyText}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Global Industries Grid (The "Explore Others" part) */}
      <Box sx={{ py: 4 }}>
        <IndustriesCards />
      </Box>
    </Box>
  )
}

export default IndustryTemplate