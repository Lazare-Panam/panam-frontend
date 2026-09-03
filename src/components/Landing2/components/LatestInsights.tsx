import { Box, Container, Grid, Stack, Typography, Card, CardContent, Button } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as RouterLink } from "react-router-dom"
import { blogs } from "../../News/components/blogData"

const BRAND_BLUE = "#01B0F0"

const featured = blogs.slice(0, 3)

const LatestInsights = () => {
  return (
    <Box component="section" id="insights" sx={{ py: 12, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "flex-end" }} spacing={3} sx={{ mb: 8 }}>
          <Box>
            <Typography variant="overline" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5 }}>
              Insights
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, color: "#1E293B", fontSize: { xs: "2rem", md: "2.5rem" }, mt: 1 }}>
              Latest From The Blog
            </Typography>
          </Box>
          <Button
            component={RouterLink} viewTransition
            to="/blog"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderColor: "#E2E8F0",
              color: "#475569",
              fontWeight: 600,
              px: 3,
              borderRadius: "8px",
              textTransform: "none",
              transition: "0.2s",
              "&:hover": { borderColor: BRAND_BLUE, color: BRAND_BLUE, bgcolor: "rgba(1,176,240,0.04)" },
            }}>
            View All Articles
          </Button>
        </Stack>

        <Grid container spacing={4}>
          {featured.map(post => (
            <Grid key={post.slug} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                component={RouterLink} viewTransition
                to={`/blog/${post.slug}`}
                elevation={0}
                sx={{
                  textDecoration: "none",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #E2E8F0",
                  borderRadius: 0,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 15px 30px rgba(1,176,240,0.1)",
                    transform: "translateY(-6px)",
                    "& .insight-img": { transform: "scale(1.06)" },
                    "& .insight-arrow": { transform: "translateX(4px)", opacity: 1 },
                  },
                }}>
                <Box sx={{ width: "100%", height: 190, overflow: "hidden" }}>
                  <Box
                    component="img"
                    className="insight-img"
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                  />
                </Box>
                <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Stack direction="row" spacing={2} sx={{ mb: 1.5 }}>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: "#94A3B8" }}>{post.date}</Typography>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: BRAND_BLUE }}>{post.category}</Typography>
                  </Stack>
                  <Typography sx={{ fontWeight: 800, color: "#1E293B", mb: 1.5, fontSize: "1.05rem", lineHeight: 1.4 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.7, flexGrow: 1, mb: 2 }}>
                    {post.excerpt.length > 120 ? `${post.excerpt.slice(0, 120)}…` : post.excerpt}
                  </Typography>
                  <Stack direction="row" spacing={0.75} alignItems="center">
                    <Typography variant="caption" sx={{ fontWeight: 700, color: BRAND_BLUE }}>
                      Read Article
                    </Typography>
                    <ArrowForwardIcon
                      className="insight-arrow"
                      sx={{ fontSize: 14, color: BRAND_BLUE, opacity: 0.7, transition: "transform 0.25s ease, opacity 0.25s ease" }}
                    />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default LatestInsights
