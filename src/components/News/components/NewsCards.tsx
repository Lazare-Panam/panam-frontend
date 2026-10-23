import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { Box, Container, Stack, Typography } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded"
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded"
import { blogs, type BlogPost } from "./blogData"
import { Eyebrow } from "../../Landing2/homeStyles"
import { C, FONT, GRADIENT } from "../../Landing2/homeTokens"

interface HeroCopy {
  overline: string
  titleMain: string
  titleAccent: string
  titleEnd: string
  description: string
}

const ALL = "All articles"
const CATEGORIES = [ALL, ...Array.from(new Set(blogs.map(b => b.category)))]

// Topics the blog actually covers, scrolled in the band under the hero
const TOPICS = ["Ball valves", "Check valves", "Needle valves", "Manifolds", "Double block & bleed", "API standards", "Hydrogen", "Thread types", "Tube fittings", "Relief valves", "Swivel gauge adaptors", "UK buyer's guide"]

const clamp = (lines: number) => ({ display: "-webkit-box", WebkitLineClamp: lines, WebkitBoxOrient: "vertical" as const, overflow: "hidden" })
const pad = (n: number) => String(n).padStart(2, "0")

// Product shots sit on white backgrounds: show them whole and multiply them onto the tinted stage so the white disappears.
// Photos and banners fill their frame instead.
const isProductShot = (url: string) => url.includes("/products/")

const Stage = ({ post, minHeight }: { post: BlogPost; minHeight: number | { xs?: number; sm?: number; md?: number } }) => {
  const product = isProductShot(post.image)
  return (
    <Box
      className="stage"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight,
        height: "100%",
        background: "radial-gradient(circle at 50% 40%, #FFFFFF 0%, #EAF6FC 55%, #D9EEF8 100%)",
        "&::after": product ? { content: '""', position: "absolute", inset: "auto 15% 8% 15%", height: 18, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(15,34,54,0.18), transparent 70%)" } : {},
      }}>
      <Box
        component="img"
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="stage-img"
        sx={{
          position: "absolute",
          inset: product ? "10%" : 0,
          width: product ? "80%" : "100%",
          height: product ? "80%" : "100%",
          objectFit: product ? "contain" : "cover",
          mixBlendMode: product ? "multiply" : "normal",
          transition: "transform 0.6s cubic-bezier(.2,.8,.2,1)",
        }}
      />
    </Box>
  )
}

const Meta = ({ post, light = false }: { post: BlogPost; light?: boolean }) => (
  <Stack direction="row" alignItems="center" spacing={1} sx={{ fontSize: "0.78rem", color: light ? "rgba(255,255,255,0.8)" : C.muted, flexWrap: "wrap" }}>
    <span>{post.date}</span>
    <span>·</span>
    <Stack direction="row" alignItems="center" spacing={0.4} component="span">
      <ScheduleRoundedIcon sx={{ fontSize: 14 }} />
      <span>{post.readTime}</span>
    </Stack>
  </Stack>
)

const Tag = ({ label, light = false }: { label: string; light?: boolean }) => (
  <Box component="span" sx={{ display: "inline-flex", alignSelf: "flex-start", px: 1.25, py: 0.4, borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", bgcolor: light ? "rgba(255,255,255,0.16)" : C.brandTint, color: light ? C.white : C.brandDark, border: light ? "1px solid rgba(255,255,255,0.25)" : "none" }}>
    {label}
  </Box>
)

const tileBase = {
  position: "relative",
  display: "flex",
  overflow: "hidden",
  textDecoration: "none",
  borderRadius: "24px",
  border: `1px solid ${C.border}`,
  bgcolor: C.white,
  transition: "transform 0.35s ease, box-shadow 0.35s ease",
  "&:hover": { transform: "translateY(-6px)", boxShadow: "0 24px 50px rgba(15,34,54,0.14)" },
  "&:hover .stage-img": { transform: "scale(1.08) rotate(-3deg)" },
  "&:hover .go": { transform: "rotate(45deg)", bgcolor: C.brand, color: C.white },
} as const

const GoButton = ({ light = false }: { light?: boolean }) => (
  <Box className="go" sx={{ flex: "none", width: 40, height: 40, borderRadius: "50%", display: "grid", placeItems: "center", bgcolor: light ? C.white : C.tintBg, color: light ? C.brandDeep : C.brandDark, transition: "all 0.3s ease", "& svg": { fontSize: 20 } }}>
    <NorthEastRoundedIcon />
  </Box>
)

// Lead story: big image stage on top, brand-blue band with the headline below
const LeadTile = ({ post }: { post: BlogPost }) => (
  <Box component={Link} to={`/blog/${post.slug}`} viewTransition sx={{ ...tileBase, flexDirection: "column", gridColumn: { xs: "auto", sm: "1 / -1", md: "1 / 3" }, gridRow: { md: "1 / 3" }, border: "none", boxShadow: "0 20px 50px rgba(3,104,166,0.22)" }}>
    <Box sx={{ position: "relative", flex: 1 }}>
      <Stage post={post} minHeight={{ xs: 240, md: 320 }} />
      <Box sx={{ position: "absolute", top: 18, left: 18, display: "inline-flex", alignItems: "center", gap: 0.75, px: 1.5, py: 0.6, borderRadius: "999px", bgcolor: C.ink, color: C.white, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.04em" }}>
        <Box component="span" sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "#3CC6F5", boxShadow: "0 0 0 4px rgba(60,198,245,0.3)" }} />
        LATEST
      </Box>
    </Box>
    <Stack spacing={1.75} sx={{ position: "relative", p: { xs: 3, md: 4 }, color: C.white, background: `linear-gradient(135deg, ${C.brand} 0%, ${C.brandDark} 55%, ${C.brandDeep} 100%)`, overflow: "hidden", "&::after": { content: '""', position: "absolute", width: 260, height: 260, borderRadius: "50%", right: -110, bottom: -150, border: "34px solid rgba(255,255,255,0.07)" } }}>
      <Tag label={post.category} light />
      <Typography component="h2" sx={{ fontWeight: 800, fontSize: { xs: "1.5rem", md: "1.95rem" }, lineHeight: 1.18, letterSpacing: "-0.025em", ...clamp(3) }}>
        {post.title}
      </Typography>
      <Typography sx={{ opacity: 0.88, fontSize: "0.98rem", lineHeight: 1.65, ...clamp(2) }}>{post.excerpt}</Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ pt: 0.5, position: "relative", zIndex: 1 }}>
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: "0.88rem" }}>{post.author}</Typography>
          <Meta post={post} light />
        </Box>
        <GoButton light />
      </Stack>
    </Stack>
  </Box>
)

// Wide tile: stage left, copy right
const WideTile = ({ post }: { post: BlogPost }) => (
  <Box component={Link} to={`/blog/${post.slug}`} viewTransition sx={{ ...tileBase, gridColumn: { xs: "auto", sm: "1 / -1", md: "3 / 5" }, flexDirection: { xs: "column", sm: "row" } }}>
    <Box sx={{ width: { xs: "100%", sm: "44%" }, flex: "none" }}>
      <Stage post={post} minHeight={{ xs: 200, sm: 240 }} />
    </Box>
    <Stack spacing={1.5} sx={{ p: 3, flex: 1, justifyContent: "space-between" }}>
      <Stack spacing={1.5}>
        <Tag label={post.category} />
        <Typography component="h3" sx={{ fontWeight: 800, color: C.ink, fontSize: "1.2rem", lineHeight: 1.3, letterSpacing: "-0.015em", ...clamp(3) }}>
          {post.title}
        </Typography>
        <Typography sx={{ color: C.muted, fontSize: "0.9rem", lineHeight: 1.6, ...clamp(2) }}>{post.excerpt}</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Meta post={post} />
        <GoButton />
      </Stack>
    </Stack>
  </Box>
)

// Compact tile: stage on top, headline below
const CompactTile = ({ post }: { post: BlogPost }) => (
  <Box component={Link} to={`/blog/${post.slug}`} viewTransition sx={{ ...tileBase, flexDirection: "column" }}>
    <Box sx={{ height: { xs: 190, md: 150 } }}>
      <Stage post={post} minHeight={0} />
    </Box>
    <Stack spacing={1.25} sx={{ p: 2.5, flex: 1, justifyContent: "space-between" }}>
      <Typography component="h3" sx={{ fontWeight: 700, color: C.ink, fontSize: "1rem", lineHeight: 1.35, ...clamp(3) }}>
        {post.title}
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Meta post={post} />
        <GoButton />
      </Stack>
    </Stack>
  </Box>
)

// Editorial row: outlined index number, copy, thumbnail. Number fills with the brand gradient on hover.
const ListRow = ({ post, index }: { post: BlogPost; index: number }) => (
  <Box
    component={Link}
    to={`/blog/${post.slug}`}
    viewTransition
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", sm: "72px 1fr 200px", md: "110px 1fr 260px" },
      gap: { xs: 2, sm: 3, md: 4 },
      alignItems: "center",
      py: { xs: 3, md: 3.5 },
      px: { xs: 0, sm: 2 },
      mx: { sm: -2 },
      borderRadius: "20px",
      borderBottom: `1px solid ${C.border}`,
      textDecoration: "none",
      transition: "background-color 0.3s ease",
      "&:hover": { bgcolor: C.surface },
      "&:hover .num": { WebkitTextStroke: "0px", backgroundImage: GRADIENT.brand },
      "&:hover .stage-img": { transform: "scale(1.08) rotate(-3deg)" },
      "&:hover .read": { gap: 1.25, color: C.brandDark },
    }}>
    <Typography className="num" aria-hidden sx={{ display: { xs: "none", sm: "block" }, fontWeight: 800, fontSize: { sm: "3rem", md: "4.2rem" }, lineHeight: 1, letterSpacing: "-0.05em", color: "transparent", WebkitTextStroke: `1.5px ${C.border}`, backgroundImage: "none", WebkitBackgroundClip: "text", backgroundClip: "text", transition: "all 0.3s ease" }}>
      {pad(index)}
    </Typography>
    <Stack spacing={1.25} sx={{ minWidth: 0, order: { xs: 2, sm: 0 } }}>
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ flexWrap: "wrap", rowGap: 0.75 }}>
        <Tag label={post.category} />
        <Meta post={post} />
      </Stack>
      <Typography component="h3" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.15rem", md: "1.4rem" }, lineHeight: 1.25, letterSpacing: "-0.02em", ...clamp(2) }}>
        {post.title}
      </Typography>
      <Typography sx={{ color: C.muted, fontSize: "0.94rem", lineHeight: 1.65, ...clamp(2) }}>{post.excerpt}</Typography>
      <Stack className="read" direction="row" alignItems="center" sx={{ gap: 0.75, pt: 0.5, color: C.ink, fontWeight: 700, fontSize: "0.88rem", transition: "all 0.25s ease", "& svg": { fontSize: 18 } }}>
        Read article <ArrowForwardRoundedIcon />
      </Stack>
    </Stack>
    <Box sx={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "4 / 3", order: { xs: 1, sm: 0 } }}>
      <Stage post={post} minHeight={0} />
    </Box>
  </Box>
)

const TopicTicker = () => (
  <Box aria-hidden sx={{ overflow: "hidden", py: 1.75, background: `linear-gradient(90deg, ${C.brandDeep}, ${C.brand})`, color: C.white }}>
    <Box sx={{ display: "flex", width: "max-content", animation: "blogTicker 40s linear infinite", "@keyframes blogTicker": { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } }, "@media (prefers-reduced-motion: reduce)": { animation: "none" } }}>
      {[...TOPICS, ...TOPICS].map((t, i) => (
        <Stack key={i} direction="row" alignItems="center" sx={{ gap: 3, pr: 3, fontWeight: 700, fontSize: { xs: "0.95rem", md: "1.05rem" }, whiteSpace: "nowrap", letterSpacing: "-0.01em" }}>
          {t}
          <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.55)" }} />
        </Stack>
      ))}
    </Box>
  </Box>
)

// Blog listing: hero with category filter, scrolling topic band, bento grid of the newest four, then a numbered editorial list.
const NewsCards = ({ hero }: { hero: HeroCopy }) => {
  const [category, setCategory] = useState(ALL)

  const filtered = useMemo(() => blogs.filter(b => category === ALL || b.category === category), [category])
  const isFiltering = category !== ALL
  const bento = isFiltering ? [] : filtered.slice(0, 4)
  const listPosts = isFiltering ? filtered : filtered.slice(4)
  const listOffset = isFiltering ? 1 : 5

  return (
    <Box sx={{ fontFamily: FONT, textTransform: "none", "& .MuiTypography-root": { fontFamily: FONT } }}>
      {/* Hero */}
      <Box component="section" sx={{ position: "relative", overflow: "hidden", background: GRADIENT.heroBg, pt: { xs: 5, md: 8 }, pb: { xs: 5, md: 7 } }}>
        {/* Oversized outlined word behind the headline */}
        <Typography aria-hidden sx={{ position: "absolute", left: "50%", top: { xs: 30, md: 10 }, transform: "translateX(-50%)", fontWeight: 900, fontSize: { xs: "6rem", md: "13rem" }, lineHeight: 1, letterSpacing: "-0.06em", color: "transparent", WebkitTextStroke: "1.5px rgba(1,176,240,0.12)", whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none" }}>
          INSIGHTS
        </Typography>
        <Container maxWidth="lg" sx={{ position: "relative" }}>
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
                      border: `1px solid ${active ? C.ink : C.border}`,
                      bgcolor: active ? C.ink : "rgba(255,255,255,0.85)",
                      color: active ? C.white : C.text,
                      transition: "all 0.2s ease",
                      "&:hover": { borderColor: C.ink, color: active ? C.white : C.ink },
                    }}>
                    {cat}
                    <Box component="span" sx={{ fontSize: "0.72rem", fontWeight: 700, px: 0.75, borderRadius: "999px", bgcolor: active ? "rgba(255,255,255,0.2)" : C.surface, color: active ? C.white : C.muted }}>
                      {count}
                    </Box>
                  </Box>
                )
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <TopicTicker />

      <Box component="section" sx={{ bgcolor: C.white, pt: { xs: 5, md: 8 }, pb: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          {/* Bento grid */}
          {bento.length > 0 && (
            <Box sx={{ mb: { xs: 7, md: 10 } }}>
              <Stack direction="row" alignItems="baseline" justifyContent="space-between" sx={{ mb: 3 }}>
                <Typography component="h2" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.5rem", md: "1.9rem" }, letterSpacing: "-0.025em" }}>
                  Fresh off the press
                </Typography>
                <Typography sx={{ color: C.muted, fontSize: "0.88rem", display: { xs: "none", sm: "block" } }}>Our newest technical guides</Typography>
              </Stack>
              <Box sx={{ display: "grid", gap: 2.5, gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" }, gridAutoRows: { md: "minmax(280px, auto)" } }}>
                {bento[0] && <LeadTile post={bento[0]} />}
                {bento[1] && <WideTile post={bento[1]} />}
                {bento[2] && <CompactTile post={bento[2]} />}
                {bento[3] && <CompactTile post={bento[3]} />}
              </Box>
            </Box>
          )}

          {/* Editorial list */}
          {listPosts.length > 0 ? (
            <Box>
              <Stack direction="row" alignItems="baseline" justifyContent="space-between" sx={{ mb: 1, pb: 2, borderBottom: `2px solid ${C.ink}` }}>
                <Typography component="h2" sx={{ fontWeight: 800, color: C.ink, fontSize: { xs: "1.5rem", md: "1.9rem" }, letterSpacing: "-0.025em" }}>
                  {isFiltering ? category : "Latest News & Insights"}
                </Typography>
                {isFiltering ? (
                  <Box component="button" type="button" onClick={() => setCategory(ALL)} sx={{ border: 0, bgcolor: "transparent", cursor: "pointer", font: "inherit", fontSize: "0.88rem", fontWeight: 600, color: C.brandDark, "&:hover": { textDecoration: "underline" } }}>
                    Show all articles
                  </Box>
                ) : (
                  <Typography sx={{ color: C.muted, fontSize: "0.88rem" }}>{listPosts.length} more articles</Typography>
                )}
              </Stack>
              {listPosts.map((post, i) => (
                <ListRow key={post.slug} post={post} index={i + listOffset} />
              ))}
            </Box>
          ) : (
            isFiltering && (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "1.2rem" }}>No articles found</Typography>
                <Typography sx={{ color: C.muted, mt: 1 }}>Try a different category.</Typography>
              </Box>
            )
          )}
        </Container>
      </Box>
    </Box>
  )
}

export default NewsCards
