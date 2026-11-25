import { Box, Typography, Container, Button } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Link as RouterLink } from "react-router-dom"
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
  // Optional call-to-action band, e.g. to point an industry page at the relevant product range.
  cta?: {
    heading: string
    text: string
    buttonLabel: string
    buttonTo: string
  }
  // id of this industry, so the "Industries We Serve" grid can drop its own self-linking card.
  currentIndustryId?: string
}

const IndustryTemplate = ({ hero, content, cta, currentIndustryId }: IndustryPageProps) => {
  return (
    <Box>
      {/* 1. Hero Section */}
      <HeroSection {...hero} />

      {/* 2. Content Section (The "About" part) */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2 }}>
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
                }}>
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
                }}>
                {content.bodyText}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Optional CTA band — links the industry to its relevant product range */}
      {cta && (
        <Box sx={{ bgcolor: "#fff", borderTop: "1px solid", borderColor: "divider" }}>
          <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
            <Grid container spacing={4} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant="h4" sx={{ fontFamily: PRIMARY_FONT, fontWeight: 800, color: "#1a1a1a", mb: 1.5 }}>
                  {cta.heading}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: PRIMARY_FONT, color: "#444", lineHeight: 1.8 }}>
                  {cta.text}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: "left", md: "right" } }}>
                <Button
                  component={RouterLink}
                  to={cta.buttonTo}
                  variant="contained"
                  sx={{
                    bgcolor: BRAND_BLUE,
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    px: 4,
                    py: 1.5,
                    borderRadius: "10px",
                    boxShadow: "none",
                    "&:hover": { bgcolor: "#0089BD" },
                  }}>
                  {cta.buttonLabel}
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}

      {/* 4. Global Industries Grid (The "Explore Others" part) */}
      <Box sx={{ py: 4 }}>
        <IndustriesCards excludeId={currentIndustryId} />
      </Box>
    </Box>
  )
}

export default IndustryTemplate
