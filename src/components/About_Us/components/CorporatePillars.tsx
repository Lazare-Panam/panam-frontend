import { Box, Typography, Container, Card, CardMedia, CardContent, Divider, Button, Stack } from "@mui/material"
import Grid from "@mui/material/Grid" // Import Grid2 separately

const TEXT_GREY = "#444444"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const TEXT_MAIN = "#1a1a1a"
const TEXT_SECONDARY = "#555555"
const pillarData = [
  {
    title: "Sustainability",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    description: "Learn how we keep business practices sustainable for ourselves and our customers.",
  },
  {
    title: "Our Leadership",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769789155/WhatsApp_Image_2026-01-30_at_3.43.08_PM_stqorr.jpg",
    description: "Our team of strong and diverse leaders guides Panam Valves in our world's dynamic environment.",
  },
  {
    title: "Global Mission",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
    description: "Join a team of passionate innovators dedicated to making the world a better place.",
  },
]

const CorporatePillars = () => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Divider
        sx={{
          width: "100%",
          borderColor: "rgba(0,0,0,0.1)",
          borderBottomWidth: 1,
          mb: 5, // Remove default vertical margins if you want total control
        }}
      />
      <Container maxWidth="xl">
        {/* TOP DIVIDER */}

        {/* THE GRID CONTAINER */}
        <Grid container spacing={4} sx={{ mb: 12 }}>
          {pillarData.map((item, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <Card elevation={0} sx={{ borderRadius: 0, backgroundColor: "transparent" }}>
                <Box sx={{ overflow: "hidden", mb: 3 }}>
                  <CardMedia
                    component="img"
                    height="260"
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
                    }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CENTERED BUSINESS SECTION */}
        <Box sx={{ textAlign: "center", maxWidth: "950px", mx: "auto" }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: PRIMARY_FONT,
              fontWeight: 300,
              color: "#333",
              mb: 4,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}>
            Our Business
          </Typography>
          <Typography
            sx={{
              fontFamily: PRIMARY_FONT,
              fontSize: "1.25rem",
              lineHeight: 1.6,
              color: TEXT_GREY,
              fontWeight: 300,
            }}>
            Panam Valves' industry-leading portfolio enables us to identify and confront the challenges of an increasingly complex and unpredictable marketplace from a position of strength, driving near- and long-term value as a trusted partner for our customers.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", py: 8 }}>
          {/* Visual Divider on Top */}
          <Divider sx={{ mb: 8, borderColor: "rgba(0,0,0,0.1)", borderWidth: 1 }} />

          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              {/* LEFT: TEXT CONTENT */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack spacing={3}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: "#1A1A1A",
                      lineHeight: 1.2,
                      fontSize: { xs: "2rem", md: "2.8rem" },
                    }}>
                    Company Portfolio
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#4A4A4A",
                      fontSize: "1.1rem",
                      lineHeight: 1.7,
                    }}>
                    Industry leaders are looking to Panam as a trusted partner that continuously innovates to help them meet the next big challenge. Our robust automation portfolio enables us to collaborate across our businesses to develop more complete solutions for customers based on our deep industry experience. We leverage our global presence, domain expertise and industrial software to help
                    industries achieve key sustainability and operational goals.
                  </Typography>

                  <Box sx={{ pt: 2 }}>
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "50px",
                        px: 4,
                        py: 1.2,
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
                      Find Information About Panam
                    </Button>
                  </Box>
                </Stack>
              </Grid>

              {/* RIGHT: IMAGE */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  component="img"
                  src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769532955/pexels-rbrigant44-771881_kvhwsv.jpg"
                  alt="Panam Headquarters"
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "600px",
                    objectFit: "cover",
                    borderRadius: "2px",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  )
}

export default CorporatePillars
