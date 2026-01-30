import { Box, Typography, Container, Card, CardContent, Divider } from "@mui/material"
import Grid from "@mui/material/Grid"
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest"
import GroupIcon from "@mui/icons-material/Group"
import LanguageIcon from "@mui/icons-material/Language"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const cardData = [
  {
    title: "Our Innovation",
    text: "We leverage advanced computational fluid dynamics to design valves that handle the unique challenges of Hydrogen and high-pressure renewables.",
    icon: <SettingsSuggestIcon sx={{ fontSize: 45, color: BRAND_BLUE }} />,
  },
  {
    title: "Expert Leadership",
    text: "With over 30 years of industrial heritage, our engineers are the backbone of our commitment to safety and precision engineering.",
    icon: <GroupIcon sx={{ fontSize: 45, color: BRAND_BLUE }} />,
  },
  {
    title: "Global Presence",
    text: "Operating across major energy hubs, we ensure that Panam Valves provides the critical flow control infrastructure where the world needs it most.",
    icon: <LanguageIcon sx={{ fontSize: 45, color: BRAND_BLUE }} />,
  },
]

const AboutUsCards = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
      {/* FULL WIDTH DIVIDER - Stretches 100% of the viewport */}
      <Divider
        sx={{
          width: "100%",
          borderColor: "rgba(0,0,0,0.1)",
          borderBottomWidth: 1,
          mb: { xs: 6, md: 10 },
        }}
      />

      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "#1A1A1A",
            lineHeight: 1.2,
            fontSize: { xs: "2rem", md: "2.8rem" },
            alignItems: "center",
            mb: 5,
          }}>
          Company Portfolio
        </Typography>

        <Grid container spacing={4} sx={{ mb: 25 }}>
          {cardData.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  p: { xs: 2, md: 4 },
                  borderRadius: "4px", // Sharp, professional industrial corners
                  backgroundColor: "transparent",
                  border: "1px solid rgba(0,0,0,0.05)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    borderColor: BRAND_BLUE,
                    transform: "translateY(-8px)",
                    boxShadow: `0 20px 40px rgba(1, 176, 240, 0.12)`,
                  },
                }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ mb: 3 }}>{item.icon}</Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: PRIMARY_FONT,
                      fontWeight: 800,
                      color: "#1a1a1a",
                      mb: 2,
                      fontSize: "1.5rem",
                    }}>
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: PRIMARY_FONT,
                      color: "#555",
                      lineHeight: 1.8,
                      fontSize: "1rem",
                    }}>
                    {item.text}
                  </Typography>

                  {/* Aesthetic Accent Line */}
                  <Box
                    sx={{
                      width: "40px",
                      height: "3px",
                      backgroundColor: BRAND_BLUE,
                      mt: 4,
                      opacity: 0.5,
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutUsCards
