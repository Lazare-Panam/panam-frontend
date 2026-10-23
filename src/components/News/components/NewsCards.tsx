import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded"
import { blogs, type BlogPost } from "./blogData"
import { Eyebrow } from "../../Landing2/homeStyles"
import { C, FONT, GRADIENT, SHADOW, cardHoverSx, cardSx } from "../../Landing2/homeTokens"

interface HeroCopy {
  overline: string
  titleMain: string
  titleAccent: string
  titleEnd: string
  description: string
}

const ALL = "All articles"
const CATEGORIES = [ALL, ...Array.from(new Set(blogs.map(b => b.category)))]

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map(n => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

const clamp = (lines: number) => ({ display: "-webkit-box", WebkitLineClamp: lines, WebkitBoxOrient: "vertical" as const, overflow: "hidden" })

const CategoryPill = ({ label, onImage = false }: { label: string; onImage?: boolean }) => (
  <Box component="span" sx={{ display: "inline-flex", px: 1.25, py: 0.4, borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.02em", bgcolor: onImage ? "rgba(255,255,255,0.92)" : C.brandTint, color: C.brandDark, backdropFilter: onImage ? "blur(6px)" : undefined }}>
    {label}
  </Box>
)

const Byline = ({ post }: { post: BlogPost }) => (
  <Stack direction="row" alignItems="center" spacing={1.25}>
    <Box sx={{ width: 32, height: 32, flex: "none", borderRadius: "50%", background: GRADIENT.brand, color: C.white, display: "grid", placeItems: "center", fontSize: "0.72rem", fontWeight: 700 }}>{initials(post.author)}</Box>
    <Box sx={{ minWidth: 0 }}>
      <Typography noWrap sx={{ fontSize: "0.82rem", fontWeight: 600, color: C.ink, lineHeight: 1.3 }}>
        {post.author}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={0.75} sx={{ color: C.muted, fontSize: "0.76rem" }}>
        <span>{post.date}</span>
        <span>·</span>
        <Stack direction="row" alignItems="center" spacing={0.4} component="span">
          <ScheduleRoundedIcon sx={{ fontSize: 13 }} />
          <span>{post.readTime}</span>
        </Stack>
      </Stack>
    </Box>
  </Stack>
)

// Large horizontal card for the newest article
const FeaturedCard = ({ post }: { post: BlogPost }) => (
  <Box component={Link} to={`/blog/${post.slug}`} viewTransition sx={{ ...cardSx, ...cardHoverSx, display: "grid", gridTemplateColumns: { xs: "1fr", md: "1.15fr 1fr" }, overflow: "hidden", textDecoration: "none", borderRadius: "24px", "&:hover img": { transform: "scale(1.04)" }, "&:hover .read-more svg": { transform: "translateX(4px)" } }}>
    <Box sx={{ position: "relative", minHeight: { xs: 220, md: 380 }, bgcolor: C.surface, overflow: "hidden" }}>
      <Box component="img" src={post.image} alt={post.title} sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }} />
      <Box sx={{ position: "absolute", top: 16, left: 16 }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, px: 1.5, py: 0.5, borderRadius: "999px", bgcolor: C.brand, color: C.white, fontSize: "0.75rem", fontWeight: 700, boxShadow: SHADOW.brand }}>
          Latest
        </Box>
      </Box>
    </Box>
    <Stack spacing={2.25} sx={{ p: { xs: 3, md: 5 }, justifyContent: "center" }}>
      <Box>
        <CategoryPill label={post.category} />
      </Box>
      <Typography component="h2" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.5rem", md: "2rem" }, lineHeight: 1.2, letterSpacing: "-0.025em" }}>
        {post.title}
      </Typography>
      <Typography sx={{ color: C.muted, fontSize: "1rem", lineHeight: 1.75, ...clamp(4) }}>{post.excerpt}</Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pt: 1, gap: 2, flexWrap: "wrap" }}>
        <Byline post={post} />
        <Stack className="read-more" direction="row" alignItems="center" spacing={0.75} sx={{ color: C.brandDark, fontWeight: 700, fontSize: "0.92rem", "& svg": { fontSize: 18, transition: "transform 0.2s ease" } }}>
          <span>Read article</span>
          <ArrowForwardRoundedIcon />
        </Stack>
      </Stack>
    </Stack>
  </Box>
)

const PostCard = ({ post }: { post: BlogPost }) => (
  <Box component={Link} to={`/blog/${post.slug}`} viewTransition sx={{ ...cardSx, ...cardHoverSx, height: "100%", display: "flex", flexDirection: "column", overflow: "hidden", textDecoration: "none", "&:hover img": { transform: "scale(1.05)" }, "&:hover .read-more svg": { transform: "translateX(4px)" } }}>
    <Box sx={{ position: "relative", aspectRatio: "16 / 10", bgcolor: C.surface, overflow: "hidden" }}>
      <Box component="img" src={post.image} alt={post.title} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }} />
      <Box sx={{ position: "absolute", top: 12, left: 12 }}>
        <CategoryPill label={post.category} onImage />
      </Box>
    </Box>
    <Stack sx={{ p: 3, flex: 1 }} spacing={1.5}>
      <Typography component="h3" sx={{ fontWeight: 700, color: C.ink, fontSize: "1.12rem", lineHeight: 1.35, letterSpacing: "-0.01em", ...clamp(2) }}>
        {post.title}
      </Typography>
      <Typography sx={{ color: C.muted, fontSize: "0.92rem", lineHeight: 1.7, flex: 1, ...clamp(3) }}>{post.excerpt}</Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pt: 2, mt: "auto", borderTop: `1px solid ${C.border}`, gap: 1 }}>
        <Byline post={post} />
        <Box className="read-more" sx={{ flex: "none", width: 36, height: 36, borderRadius: "50%", bgcolor: C.tintBg, color: C.brandDark, display: "grid", placeItems: "center", "& svg": { fontSize: 18, transition: "transform 0.2s ease" } }}>
          <ArrowForwardRoundedIcon />
        </Box>
      </Stack>
    </Stack>
  </Box>
)

// Blog listing: light hero with category filter, featured latest article, then the card grid.
const NewsCards = ({ hero }: { hero: HeroCopy }) => {
  const [category, setCategory] = useState(ALL)

  const filtered = useMemo(() => blogs.filter(b => category === ALL || b.category === category), [category])

  const isFiltering = category !== ALL
  const [featured, ...rest] = filtered
  const gridPosts = isFiltering ? filtered : rest

  return (
    <Box sx={{ fontFamily: FONT, textTransform: "none", "& .MuiTypography-root": { fontFamily: FONT } }}>
      {/* Hero */}
      <Box component="section" sx={{ background: GRADIENT.heroBg, pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
        <Container maxWidth="lg">
          <Stack alignItems="center" spacing={2.5} sx={{ textAlign: "center", maxWidth: 780, mx: "auto" }}>
            <Eyebrow>{hero.overline}</Eyebrow>
            <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.06, fontSize: { xs: "2.4rem", sm: "3rem", md: "3.6rem" } }}>
              {hero.titleMain}{" "}
              <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {hero.titleAccent}
              </Box>{" "}
              {hero.titleEnd}
            </Typography>
            <Typography sx={{ color: C.muted, fontSize: { xs: "1rem", md: "1.12rem" }, lineHeight: 1.7, maxWidth: 640 }}>{hero.description}</Typography>

            {/* Category filter */}
            <Stack direction="row" justifyContent="center" sx={{ flexWrap: "wrap", gap: 1, pt: 1 }}>
              {CATEGORIES.map(cat => {
                const active = cat === category
                const count = cat === ALL ? blogs.length : blogs.filter(b => b.category === cat).length
                return (
                  <Box
                    key={cat}
                    component="button"
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCategory(cat)}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.75,
                      px: 1.75,
                      py: 0.75,
                      font: "inherit",
                      fontSize: "0.86rem",
                      fontWeight: active ? 600 : 500,
                      cursor: "pointer",
                      borderRadius: "999px",
                      border: `1px solid ${active ? C.brand : C.border}`,
                      bgcolor: active ? C.brand : "rgba(255,255,255,0.85)",
                      color: active ? C.white : C.text,
                      transition: "all 0.2s ease",
                      "&:hover": { borderColor: C.brand, color: active ? C.white : C.brandDark },
                    }}>
                    {cat}
                    <Box component="span" sx={{ fontSize: "0.72rem", fontWeight: 700, px: 0.75, borderRadius: "999px", bgcolor: active ? "rgba(255,255,255,0.22)" : C.surface, color: active ? C.white : C.muted }}>
                      {count}
                    </Box>
                  </Box>
                )
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Articles */}
      <Box component="section" sx={{ bgcolor: C.white, pt: { xs: 5, md: 7 }, pb: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          {filtered.length === 0 ? (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "1.2rem" }}>No articles found</Typography>
              <Typography sx={{ color: C.muted, mt: 1 }}>Try a different category.</Typography>
            </Box>
          ) : (
            <>
              {!isFiltering && featured && (
                <Box sx={{ mb: { xs: 5, md: 7 } }}>
                  <FeaturedCard post={featured} />
                </Box>
              )}

              <Stack direction="row" alignItems="baseline" justifyContent="space-between" sx={{ mb: 3 }}>
                <Typography component="h2" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.4rem", md: "1.7rem" }, letterSpacing: "-0.02em" }}>
                  {isFiltering ? `${filtered.length} article${filtered.length === 1 ? "" : "s"}` : "Latest News & Insights"}
                </Typography>
                {isFiltering && (
                  <Box component="button" type="button" onClick={() => setCategory(ALL)} sx={{ border: 0, bgcolor: "transparent", cursor: "pointer", font: "inherit", fontSize: "0.88rem", fontWeight: 600, color: C.brandDark, "&:hover": { textDecoration: "underline" } }}>
                    Show all articles
                  </Box>
                )}
              </Stack>

              <Grid container spacing={3}>
                {gridPosts.map(post => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.slug}>
                    <PostCard post={post} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Container>
      </Box>
    </Box>
  )
}

export default NewsCards
