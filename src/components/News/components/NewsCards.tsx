import { Box, Container, Typography, Card, CardContent, Button, Stack } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const newsData = [
  {
    date: "OCT 24, 2025",
    category: "Technical",
    title: "Advancements in Cryogenic Valve Sealing",
    description: "Discover how our latest polymer-composite seals are setting new benchmarks for zero-leakage performance in liquid hydrogen storage.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
  },
  {
    date: "SEP 12, 2025",
    category: "Case Study",
    title: "Offshore Reliability: The North Sea Project",
    description: "A deep dive into how Panam Valves provided critical flow control solutions for one of the largest offshore platforms in the Atlantic.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
  },
  {
    date: "AUG 05, 2025",
    category: "Innovation",
    title: "Sustainability in Valve Manufacturing",
    description: "Learn about our initiative to reduce carbon footprints by optimizing high-pressure testing cycles and material sourcing.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  },
  {
    date: "JUL 18, 2025",
    category: "Industry News",
    title: "The Future of Hydrogen Infrastructure",
    description: "As the world pivots to clean energy, we explore the vital role of high-precision valves in the emerging global hydrogen economy.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    date: "JUN 30, 2025",
    category: "Safety",
    title: "Pressure Testing: Safety Without Compromise",
    description: "An overview of our rigorous safety protocols and how we simulate extreme environments to ensure fail-safe performance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    date: "MAY 14, 2025",
    category: "Global",
    title: "Expanding Strategic Hubs in Asia-Pacific",
    description: "Panam Valves announces the opening of two new support centers to provide rapid-response engineering services to the APAC region.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
  },
]

const NewsCards = () => {
  return (
    <Box sx={{ py: 10, pb: 0, backgroundColor: "#ffffff" }}>
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
            Latest News & Insights
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: PRIMARY_FONT,
              color: "#555",
              fontSize: "1.125rem",
              lineHeight: 1.8,
            }}>
            Stay informed with the latest developments, technical breakthroughs, and industry insights from Panam Valves. From innovation in valve technology to global expansion updates, discover how we're shaping the future of flow control solutions.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {newsData.map((news, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  minHeight: "450px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1px solid #e0e0e0",
                  borderRadius: "0px",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  "&:hover": {
                    boxShadow: `0px 10px 30px rgba(1, 176, 240, 0.15)`,
                    transform: "translateY(-5px)",
                    "& .news-image": {
                      transform: "scale(1.05)",
                    },
                  },
                }}>
                {/* Image Section */}
                <Box
                  sx={{
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    position: "relative",
                  }}>
                  <Box
                    component="img"
                    src={news.image}
                    alt={news.title}
                    className="news-image"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease-in-out",
                    }}
                  />
                </Box>

                {/* Content Section */}
                <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        fontFamily: PRIMARY_FONT,
                        color: "#999",
                        letterSpacing: "0.5px",
                      }}>
                      {news.date}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        fontFamily: PRIMARY_FONT,
                        color: BRAND_BLUE,
                        letterSpacing: "0.5px",
                      }}>
                      {news.category}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontFamily: PRIMARY_FONT,
                      color: "#1a1a1a",
                      mb: 2,
                      fontSize: "1.25rem",
                    }}>
                    {news.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: PRIMARY_FONT,
                      color: "#666",
                      lineHeight: 1.7,
                      mb: 3,
                      flexGrow: 1,
                    }}>
                    {news.description}
                  </Typography>

                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      alignSelf: "flex-start",
                      color: BRAND_BLUE,
                      fontWeight: 700,
                      p: 0,
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
                    Read More
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

export default NewsCards
