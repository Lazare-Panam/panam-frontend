import { Box, Grid, Container, Typography, Card, CardContent, Button } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const industryData = [
  {
    title: "Marine",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80", // Ship/marine
  },
  {
    title: "Oil & Gas",
    image: "https://res.cloudinary.com/dm9rmmemx/image/upload/v1769616666/zbynek-burival-GrmwVnVSSdU-unsplash_eruerc.jpg", // Oil rig
  },
  {
    title: "Renewables",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", // Wind turbines
  },
  {
    title: "Automotive",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", // Car manufacturing
  },
  {
    title: "Agriculture",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80", // Tractor/farming
  },
  {
    title: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", // Factory
  },
]

const IndustriesCards = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#ffffff" }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 8, textAlign: "center", maxWidth: "800px", mx: "auto" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontFamily: PRIMARY_FONT,
              color: "#1a1a1a",
              mb: 3,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}>
            Industries We Serve
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: PRIMARY_FONT,
              color: "#555",
              fontSize: "1.125rem",
              lineHeight: 1.8,
              "& span": {
                color: BRAND_BLUE,
                fontWeight: 600,
              },
            }}>
            For over two decades, we've been delivering precision-engineered solutions across the world's most demanding sectors. From powering <span>offshore operations</span> to supporting <span>sustainable energy transitions</span>, our technology drives efficiency and reliability where it matters most. Trusted by industry leaders globally, we turn complex challenges into seamless operations.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {industryData.map((industry, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: "350px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid #e0e0e0",
                  borderRadius: "0px",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: `0px 10px 30px rgba(1, 176, 240, 0.15)`,
                    transform: "translateY(-5px)",
                    "& .industry-image": {
                      transform: "scale(1.05)",
                    },
                  },
                }}>
                {/* Image Section */}
                <Box
                  sx={{
                    width: "100%",
                    height: "250px",
                    overflow: "hidden",
                    position: "relative",
                  }}>
                  <Box
                    component="img"
                    src={industry.image}
                    alt={industry.title}
                    className="industry-image"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease-in-out",
                    }}
                  />
                  {/* Dark overlay for better text contrast */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)",
                    }}
                  />
                </Box>

                {/* Content Section */}
                <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontFamily: PRIMARY_FONT,
                      color: "#1a1a1a",
                      mb: 2,
                    }}>
                    {industry.title}
                  </Typography>
                  <Box
                    sx={{
                      width: "40px",
                      height: "3px",
                      backgroundColor: BRAND_BLUE,
                      mb: "auto",
                    }}
                  />

                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      alignSelf: "flex-start",
                      color: BRAND_BLUE,
                      fontWeight: 700,
                      p: 0,
                      mt: 2,
                      textTransform: "none",
                      fontFamily: PRIMARY_FONT,
                      "& .MuiButton-endIcon": {
                        transition: "transform 0.2s",
                      },
                      "&:hover": {
                        backgroundColor: "transparent",
                        "& .MuiButton-endIcon": {
                          transform: "translateX(5px)",
                        },
                      },
                    }}>
                    Find out more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default IndustriesCards
