import { Box, Container, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid"; // Updated to Grid2 as requested previously
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom"; // Import Link
import { blogs } from "./blogData";

const BRAND_BLUE = "#01B0F0";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

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
            }}
          >
            Latest News & Insights
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: PRIMARY_FONT,
              color: "#555",
              fontSize: "1.125rem",
              lineHeight: 1.8,
            }}
          >
            Stay informed with the latest developments, technical breakthroughs, and industry insights from Panam Valves.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {blogs.map((news) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={news.slug}>
              {/* Wrap the whole card in a Link for better UX */}
              <Card
                component={Link}
                to={`/blog/${news.slug}`}
                elevation={0}
                sx={{
                  textDecoration: "none", // Remove underline from Link
                  height: "100%",
                  minHeight: "450px",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e0e0e0",
                  borderRadius: "0px",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                  backgroundColor: "#ffffff",
                  "&:hover": {
                    boxShadow: `0px 10px 30px rgba(1, 176, 240, 0.15)`,
                    transform: "translateY(-5px)",
                    "& .news-image": {
                      transform: "scale(1.05)",
                    },
                  },
                }}
              >
                {/* Image Section */}
                <Box sx={{ width: "100%", height: "200px", overflow: "hidden" }}>
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
                      sx={{ fontWeight: 600, color: "#999", letterSpacing: "0.5px" }}
                    >
                      {news.date}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: 700, color: BRAND_BLUE, letterSpacing: "0.5px" }}
                    >
                      {news.category}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#1a1a1a",
                      mb: 2,
                      fontSize: "1.15rem",
                      lineHeight: 1.4,
                      fontFamily: PRIMARY_FONT,
                    }}
                  >
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
                    }}
                  >
                    {news.excerpt} {/* Using the excerpt from blogData */}
                  </Typography>

                  <Button
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      alignSelf: "flex-start",
                      color: BRAND_BLUE,
                      fontWeight: 700,
                      p: 0,
                      textTransform: "none",
                      "& .MuiButton-endIcon": { transition: "transform 0.2s" },
                      "&:hover": {
                        backgroundColor: "transparent",
                        "& .MuiButton-endIcon": { transform: "translateX(5px)" },
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsCards;