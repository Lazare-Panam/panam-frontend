import React from "react"
import { Box, Typography, Container, Card, CardMedia, CardContent, Divider } from "@mui/material"
import Grid from "@mui/material/Grid" // Consistency with Grid2 preference

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const TEXT_MAIN = "#1a1a1a"
const TEXT_SECONDARY = "#555555"
const BRAND_BLUE = "#01B0F0"

const pillarData = [
  {
    title: "Sustainability",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    description: "Learn how we keep business practices sustainable for ourselves and our customers.",
  },
  {
    title: "Our Leadership",
    image: "https://pblol2.blob.core.windows.net/panam-images/about/leadership-image.jpeg",
    description: "Our team of strong and diverse leaders guides Panam Valves in our world's dynamic environment.",
  },
  {
    title: "Global Mission",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
    description: "Join a team of passionate innovators dedicated to making the world a better place.",
  },
]

const CorporatePillars: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", py: 10 }}>
      <Divider
        sx={{
          width: "100%",
          borderColor: "rgba(0,0,0,0.1)",
          borderBottomWidth: 1,
          mb: 8,
        }}
      />

      <Container maxWidth="xl">
        {/* --- CENTRALIZED HEADER SECTION --- */}
        <Box
          sx={{
            mb: 10,
            maxWidth: "850px",
            mx: "auto",
            textAlign: "center",
          }}>
          <Typography
            variant="overline"
            sx={{
              color: BRAND_BLUE,
              fontWeight: 700,
              letterSpacing: "0.2em",
              fontFamily: PRIMARY_FONT,
              display: "block",
            }}>
            Our Foundation
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: PRIMARY_FONT,
              color: TEXT_MAIN,
              fontWeight: 800,
              mt: 1,
              mb: 3,
              fontSize: { xs: "2.2rem", md: "3rem" },
            }}>
            The Pillars of Our Excellence
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: PRIMARY_FONT,
              color: TEXT_SECONDARY,
              fontSize: "1.15rem",
              lineHeight: 1.8,
            }}>
            At Panam Valves, our growth is rooted in a steadfast commitment to environmental responsibility, visionary leadership, and a shared global mission to deliver engineering solutions that withstand the test of time.
          </Typography>
        </Box>

        {/* THE GRID CONTAINER */}
        <Grid container spacing={4}>
          {pillarData.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 0,
                  backgroundColor: "transparent",
                  height: "100%",
                }}>
                <Box sx={{ overflow: "hidden", mb: 3 }}>
                  <CardMedia
                    component="img"
                    height="320"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      transition: "transform 0.5s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: PRIMARY_FONT,
                      color: TEXT_MAIN,
                      fontWeight: 700,
                      fontSize: "1.6rem",
                      mb: 2,
                    }}>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: PRIMARY_FONT,
                      color: TEXT_SECONDARY,
                      fontSize: "1.05rem",
                      lineHeight: 1.6,
                    }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CorporatePillars
