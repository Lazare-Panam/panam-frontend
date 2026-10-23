import { Link as RouterLink } from "react-router-dom"
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined"
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined"
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined"
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined"
import { Eyebrow } from "../../Landing2/homeStyles"
import { C, GRADIENT, SHADOW, btn } from "../../Landing2/homeTokens"

interface Props {
  overline: string
  titleMain: string
  titleAccent: string
  titleEnd: string
  description: string
  backgroundImage: string
}

// Headline figures, taken from the Key Metrics section further down the page
const HERO_STATS = [
  { icon: <WorkspacePremiumOutlinedIcon />, value: "25+", label: "Years of experience" },
  { icon: <Inventory2OutlinedIcon />, value: "2,000+", label: "Products" },
  { icon: <PublicOutlinedIcon />, value: "52+", label: "Global reach" },
  { icon: <FactoryOutlinedIcon />, value: "165,000", label: "Sq. ft manufacturing" },
]

// Light split hero in the homepage style (same layout as the products hero): copy left, framed photo right.
// A white stats bar straddles the hero's bottom edge so the hero reads as its own block, separate from the content below.
const AboutHero = ({ overline, titleMain, titleAccent, titleEnd, description, backgroundImage }: Props) => (
  <>
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: GRADIENT.heroBg, borderBottom: `1px solid ${C.border}`, pt: { xs: 5, md: 8 }, pb: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Box>
                <Eyebrow>{overline}</Eyebrow>
              </Box>
              <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.05, fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.9rem" } }}>
                {titleMain}{" "}
                <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {titleAccent}
                </Box>{" "}
                {titleEnd}
              </Typography>
              <Typography sx={{ color: C.muted, fontSize: { xs: "1.02rem", md: "1.15rem" }, lineHeight: 1.75, maxWidth: 560 }}>{description}</Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ pt: 1 }}>
                <Button component={RouterLink} viewTransition to="/products" endIcon={<ArrowForwardRoundedIcon />} sx={{ ...btn.primary, py: 1.5, px: 3.25 }}>
                  Explore our products
                </Button>
                <Button component={RouterLink} viewTransition to="/enquiry" sx={{ ...btn.secondary, py: 1.5, px: 3.25 }}>
                  Contact us
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", pl: { md: 2 } }}>
              <Box aria-hidden sx={{ position: "absolute", inset: { xs: "-12px", md: "-18px -18px -18px 0" }, borderRadius: "32px", background: "linear-gradient(135deg, rgba(1,176,240,0.18), rgba(1,176,240,0) 60%)" }} />
              <Box
                role="img"
                aria-label="Panam Valves testing facility"
                sx={{
                  position: "relative",
                  aspectRatio: { xs: "4 / 3", md: "5 / 4" },
                  borderRadius: "26px",
                  overflow: "hidden",
                  boxShadow: SHADOW.hover,
                  backgroundColor: C.surface,
                  backgroundImage: `url('${backgroundImage}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  "&::after": { content: '""', position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0) 55%, rgba(1,176,240,0.18) 100%)" },
                }}
              />
              {/* Floating badge */}
              <Stack direction="row" alignItems="center" spacing={1.5} sx={{ position: "absolute", left: { xs: 16, md: -8 }, bottom: { xs: 16, md: 28 }, px: 2, py: 1.5, borderRadius: "16px", bgcolor: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", boxShadow: SHADOW.hover, border: `1px solid ${C.border}` }}>
                <Box sx={{ width: 40, height: 40, borderRadius: "12px", bgcolor: C.tintBg, color: C.brand, display: "grid", placeItems: "center" }}>
                  <VerifiedOutlinedIcon />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "0.92rem", color: C.ink, lineHeight: 1.2 }}>ISO 9001</Typography>
                  <Typography sx={{ fontSize: "0.78rem", color: C.muted }}>Certified quality management</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* Stats bar overlapping the hero edge */}
    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, mt: { xs: -6, md: -8 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
          bgcolor: C.white,
          borderRadius: "22px",
          border: `1px solid ${C.border}`,
          boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 20px 50px rgba(15,34,54,0.10)",
          overflow: "hidden",
        }}>
        {HERO_STATS.map((s, i) => (
          <Stack
            key={s.label}
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              p: { xs: 2.25, md: 3.5 },
              borderLeft: { xs: i % 2 === 1 ? `1px solid ${C.border}` : "none", md: i > 0 ? `1px solid ${C.border}` : "none" },
              borderTop: { xs: i > 1 ? `1px solid ${C.border}` : "none", md: "none" },
            }}>
            <Box sx={{ display: { xs: "none", sm: "grid" }, width: 48, height: 48, flex: "none", borderRadius: "14px", bgcolor: C.tintBg, color: C.brand, placeItems: "center" }}>{s.icon}</Box>
            <Box>
              <Typography sx={{ fontWeight: 800, fontSize: { xs: "1.45rem", md: "1.75rem" }, letterSpacing: "-0.02em", color: C.ink, lineHeight: 1 }}>{s.value}</Typography>
              <Typography sx={{ mt: 0.75, fontSize: "0.85rem", color: C.muted }}>{s.label}</Typography>
            </Box>
          </Stack>
        ))}
      </Box>
    </Container>
  </>
)

export default AboutHero
