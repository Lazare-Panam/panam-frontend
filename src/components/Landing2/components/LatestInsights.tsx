import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link as RouterLink } from "react-router-dom"
import { blogs } from "../../News/components/blogData"
import { C, RADIUS, btn, cardSx, cardHoverSx, sectionSx } from "../homeTokens"
import { SectionHeader } from "../homeStyles"

const featured = blogs.slice(0, 3)

const LatestInsights = () => {
  return (
    <Box component="section" id="insights" sx={sectionSx("surface")}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Insights"
          title="Latest From The Blog"
          action={
            <Button component={RouterLink} viewTransition to="/blog" endIcon={<ArrowForwardIcon />} sx={{ ...btn.secondary, flexShrink: 0 }}>
              View All Articles
            </Button>
          }
        />

        <Grid container spacing={3}>
          {featured.map(post => (
            <Grid key={post.slug} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                component={RouterLink}
                viewTransition
                to={`/blog/${post.slug}`}
                sx={{
                  ...cardSx,
                  ...cardHoverSx,
                  textDecoration: "none",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  "&:hover .insight-img": { transform: "scale(1.05)" },
                  "&:hover .insight-arrow": { transform: "translateX(4px)" },
                }}>
                <Box sx={{ width: "100%", aspectRatio: "16 / 10", overflow: "hidden", bgcolor: C.surface }}>
                  <Box
                    component="img"
                    className="insight-img"
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                </Box>
                <Stack sx={{ p: 3, flexGrow: 1 }} spacing={1.5}>
                  <Stack direction="row" spacing={1.25} alignItems="center">
                    <Box component="span" sx={{ px: 1.25, py: 0.25, borderRadius: RADIUS.pill, bgcolor: C.brandTint, color: C.brandDark, fontSize: "0.75rem", fontWeight: 600 }}>
                      {post.category}
                    </Box>
                    <Typography sx={{ color: C.muted, fontSize: "0.82rem" }}>{post.date}</Typography>
                  </Stack>
                  <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "1.08rem", lineHeight: 1.4, letterSpacing: "-0.01em" }}>{post.title}</Typography>
                  <Typography sx={{ color: C.muted, lineHeight: 1.65, flexGrow: 1, fontSize: "0.92rem" }}>
                    {post.excerpt.length > 130 ? `${post.excerpt.slice(0, 130)}…` : post.excerpt}
                  </Typography>
                  <Stack direction="row" spacing={0.75} alignItems="center" sx={{ color: C.brandDark, pt: 0.5 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>Read Article</Typography>
                    <ArrowForwardIcon className="insight-arrow" sx={{ fontSize: 17, transition: "transform 0.25s ease" }} />
                  </Stack>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default LatestInsights
