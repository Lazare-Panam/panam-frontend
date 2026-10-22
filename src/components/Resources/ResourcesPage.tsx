import type { ReactNode } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded"
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded"
import { C, GRADIENT, SHADOW, btn, cardSx, cardHoverSx, sectionSx } from "../Landing2/homeTokens"
import { Eyebrow, SectionHeader } from "../Landing2/homeStyles"

interface Resource {
  icon: ReactNode
  tag: string
  title: string
  desc: string
  path: string
  cta: string
}

const resources: Resource[] = [
  {
    icon: <MenuBookOutlinedIcon />,
    tag: "PDF Downloads",
    title: "Technical Catalogues",
    desc: "Product specifications, pressure and temperature ratings, flow data and dimensional drawings for every Panam range.",
    path: "/catalogPdfs",
    cta: "Browse catalogues",
  },
  {
    icon: <VerifiedOutlinedIcon />,
    tag: "Quality",
    title: "Quality & Certifications",
    desc: "ISO 9001, ISO 14001 and ISO 45001 certificates, plus ATEX and PED documentation.",
    path: "/certificates",
    cta: "View certificates",
  },
  {
    icon: <ScienceOutlinedIcon />,
    tag: "Testing",
    title: "Type Test Reports",
    desc: "Independent type test results to support qualification and vendor approval.",
    path: "/certificates/type-reports",
    cta: "View reports",
  },
  {
    icon: <ViewInArOutlinedIcon />,
    tag: "2D / 3D",
    title: "CAD & STEP Files",
    desc: "Drop-in models for your design workflow, organised by product category.",
    path: "/cad-step-files",
    cta: "Browse CAD files",
  },
]

const [featured, ...rest] = resources

const guides = [
  { title: "NPT vs BSPP vs BSPT Thread Standards", path: "/blog/npt-vs-bspp-vs-bspt-thread-standards" },
  { title: "API Valve Standards: 600, 602, 603, 598 & 6D", path: "/blog/api-valve-standards-600-602-603-598-6d" },
  { title: "How to Specify Industrial and Control Valves", path: "/blog/how-to-specify-industrial-and-control-valves" },
  { title: "Manifold Valves for Accurate, Safe Instrumentation", path: "/blog/manifold-valves-for-accurate-safe-instrumentation" },
]

const highlights = ["ISO 9001 · 14001 · 45001", "ATEX & PED documentation", "CAD & STEP models"]

const IconTile = ({ children, size = 52, onBrand = false }: { children: ReactNode; size?: number; onBrand?: boolean }) => (
  <Box
    sx={{
      width: size,
      height: size,
      flex: "none",
      borderRadius: "14px",
      display: "grid",
      placeItems: "center",
      bgcolor: onBrand ? "rgba(255,255,255,0.16)" : C.brandTint,
      color: onBrand ? C.white : C.brandDark,
      border: onBrand ? "1px solid rgba(255,255,255,0.28)" : "none",
      "& svg": { fontSize: size * 0.5 },
    }}>
    {children}
  </Box>
)

const CardCta = ({ children }: { children: ReactNode }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.75}
    className="card-cta"
    sx={{ color: C.brandDark, fontWeight: 600, fontSize: "0.92rem", "& svg": { fontSize: 18, transition: "transform 0.2s ease" } }}>
    <span>{children}</span>
    <ArrowForwardIcon />
  </Stack>
)

// Quick links styled as a document list, one row per resource type.
const HeroVisual = () => {
  const sheets = [
    { icon: <PictureAsPdfOutlinedIcon />, title: "Product Catalogues", meta: "PDF · Full range", path: "/catalogPdfs" },
    { icon: <VerifiedOutlinedIcon />, title: "QMS Certifications", meta: "ISO 9001 · 14001 · 45001", path: "/certificates/qms" },
    { icon: <ViewInArOutlinedIcon />, title: "CAD & STEP Models", meta: "2D / 3D by category", path: "/cad-step-files" },
    { icon: <DescriptionOutlinedIcon />, title: "Type Test Reports", meta: "Qualification data", path: "/certificates/type-reports" },
  ]
  return (
    <Box sx={{ position: "relative", pl: { md: 2 } }}>
      <Box aria-hidden sx={{ position: "absolute", inset: { xs: "-12px", md: "-18px -18px -18px 0" }, borderRadius: "32px", background: "linear-gradient(135deg, rgba(1,176,240,0.18), rgba(1,176,240,0) 60%)" }} />
      <Box component="nav" aria-label="Resource quick links" sx={{ ...cardSx, position: "relative", borderRadius: "24px", boxShadow: SHADOW.hover, p: { xs: 2.5, md: 3 } }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2.5 }}>
          <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "0.95rem" }}>Document Library</Typography>
          <Box sx={{ px: 1.25, py: 0.4, borderRadius: "999px", bgcolor: C.brandTint, color: C.brandDark, fontSize: "0.72rem", fontWeight: 700 }}>Quick links</Box>
        </Stack>
        <Stack spacing={1.25}>
          {sheets.map(s => (
            <Stack
              key={s.title}
              component={RouterLink}
              viewTransition
              to={s.path}
              direction="row"
              alignItems="center"
              spacing={1.75}
              sx={{
                p: 1.5,
                borderRadius: "12px",
                border: `1px solid ${C.border}`,
                bgcolor: C.white,
                textDecoration: "none",
                transition: "background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                "& .row-arrow": { fontSize: 18, color: "#B6C2CF", transition: "color 0.2s ease, transform 0.2s ease" },
                "&:hover": { bgcolor: C.tintBg, borderColor: "rgba(1,176,240,0.35)", transform: "translateX(2px)" },
                "&:hover .row-arrow": { color: C.brand, transform: "translate(2px, -2px)" },
              }}>
              <IconTile size={40}>{s.icon}</IconTile>
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography noWrap sx={{ fontWeight: 600, color: C.ink, fontSize: "0.92rem" }}>{s.title}</Typography>
                <Typography noWrap sx={{ color: C.muted, fontSize: "0.8rem" }}>{s.meta}</Typography>
              </Box>
              <NorthEastRoundedIcon className="row-arrow" />
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

const ResourcesPage = () => (
  <>
    <title>Technical Resources | Panam Valves – Catalogues & Certifications</title>
    <meta name="description" content="Access Panam Valves' technical resources including product catalogues, ISO certifications, safety documentation and compliance records for industrial valve applications." />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Technical Resources | Panam Valves" />
    <meta property="og:description" content="Product catalogues, ISO certifications, and compliance documentation for industrial valves and fittings." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.panamvalve.com/resources" />
    <link rel="canonical" href="https://www.panamvalve.com/resources" />

    {/* Hero */}
    <Box component="section" sx={{ position: "relative", overflow: "hidden", background: GRADIENT.heroBg, pt: { xs: 5, md: 8 }, pb: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Box>
                <Eyebrow>Resource Centre</Eyebrow>
              </Box>
              <Typography component="h1" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.035em", lineHeight: 1.05, fontSize: { xs: "2.6rem", sm: "3.2rem", md: "3.9rem" } }}>
                Technical{" "}
                <Box component="span" sx={{ display: "inline-block", pb: "0.08em", background: GRADIENT.brand, WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Resources
                </Box>
              </Typography>
              <Typography sx={{ color: C.muted, fontSize: { xs: "1.02rem", md: "1.15rem" }, lineHeight: 1.75, maxWidth: 560 }}>
                Engineering data, certifications and procurement documentation for global infrastructure projects — everything your design and approval teams need in one place.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button component={RouterLink} viewTransition to="/catalogPdfs" endIcon={<ArrowForwardIcon />} sx={{ ...btn.primary, py: 1.5 }}>
                  Download Catalogues
                </Button>
                <Button component={RouterLink} viewTransition to="/certificates" sx={{ ...btn.secondary, py: 1.5 }}>
                  View Certificates
                </Button>
              </Stack>
              <Stack direction="row" flexWrap="wrap" useFlexGap spacing={2.5} sx={{ pt: 1 }}>
                {highlights.map(h => (
                  <Stack key={h} direction="row" alignItems="center" spacing={0.75} sx={{ color: C.text, fontSize: "0.88rem", fontWeight: 500 }}>
                    <CheckCircleRoundedIcon sx={{ fontSize: 18, color: C.brand }} />
                    <span>{h}</span>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <HeroVisual />
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* Library: featured catalogue card plus the remaining resources */}
    <Box component="section" sx={sectionSx("surface")}>
      <Container maxWidth="lg">
        <SectionHeader eyebrow="Document Library" title="Browse by Resource Type" subtitle="Download what you need for specification, design and vendor approval." />

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={RouterLink}
              viewTransition
              to={featured.path}
              sx={{
                position: "relative",
                overflow: "hidden",
                height: "100%",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 6,
                p: { xs: 3.5, md: 4.5 },
                borderRadius: "20px",
                background: GRADIENT.brand,
                color: C.white,
                textDecoration: "none",
                boxShadow: SHADOW.brand,
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                "&::after": { content: '""', position: "absolute", width: 320, height: 320, right: -120, bottom: -140, borderRadius: "50%", border: "48px solid rgba(255,255,255,0.08)" },
                "&:hover": { transform: "translateY(-4px)", boxShadow: "0 18px 40px rgba(1,176,240,0.38)" },
                "&:hover .card-cta svg": { transform: "translateX(4px)" },
              }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <IconTile size={60} onBrand>
                  {featured.icon}
                </IconTile>
                <Box sx={{ px: 1.5, py: 0.5, borderRadius: "999px", bgcolor: "rgba(255,255,255,0.16)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.04em" }}>{featured.tag}</Box>
              </Stack>
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography component="h3" sx={{ fontWeight: 800, fontSize: { xs: "1.8rem", md: "2.2rem" }, letterSpacing: "-0.025em", lineHeight: 1.1, mb: 1.5 }}>
                  {featured.title}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7, mb: 3.5, maxWidth: 420 }}>{featured.desc}</Typography>
                <Stack direction="row" alignItems="center" spacing={0.75} className="card-cta" sx={{ fontWeight: 600, "& svg": { fontSize: 18, transition: "transform 0.2s ease" } }}>
                  <span>{featured.cta}</span>
                  <ArrowForwardIcon />
                </Stack>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={2.5} sx={{ height: "100%" }}>
              {rest.map(r => (
                <Box
                  key={r.title}
                  component={RouterLink}
                  viewTransition
                  to={r.path}
                  sx={{
                    ...cardSx,
                    ...cardHoverSx,
                    flex: 1,
                    display: "flex",
                    gap: 2.5,
                    alignItems: { xs: "flex-start", sm: "center" },
                    flexDirection: { xs: "column", sm: "row" },
                    p: { xs: 3, md: 3.5 },
                    textDecoration: "none",
                    "&:hover .card-cta svg": { transform: "translateX(4px)" },
                  }}>
                  <IconTile>{r.icon}</IconTile>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Stack direction="row" alignItems="center" spacing={1.25} sx={{ mb: 0.75 }}>
                      <Typography component="h3" sx={{ fontWeight: 700, color: C.ink, fontSize: "1.2rem", letterSpacing: "-0.01em" }}>
                        {r.title}
                      </Typography>
                      <Box sx={{ px: 1, py: 0.25, borderRadius: "999px", bgcolor: C.surface, border: `1px solid ${C.border}`, color: C.muted, fontSize: "0.7rem", fontWeight: 600, whiteSpace: "nowrap" }}>{r.tag}</Box>
                    </Stack>
                    <Typography sx={{ color: C.muted, lineHeight: 1.65, fontSize: "0.95rem", mb: 1.5 }}>{r.desc}</Typography>
                    <CardCta>{r.cta}</CardCta>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* Technical guides from the blog */}
    <Box component="section" sx={sectionSx("white")}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Engineering Guides"
          title="Technical Know-How"
          subtitle="In-depth guides from our engineers on standards, threads and valve selection."
          action={
            <Button component={RouterLink} viewTransition to="/blog" endIcon={<ArrowForwardIcon />} sx={btn.secondary}>
              All articles
            </Button>
          }
        />
        <Grid container spacing={2.5}>
          {guides.map((g, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={g.path}>
              <Box
                component={RouterLink}
                viewTransition
                to={g.path}
                sx={{
                  ...cardSx,
                  ...cardHoverSx,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 4,
                  p: 3,
                  textDecoration: "none",
                  "&:hover .card-cta svg": { transform: "translateX(4px)" },
                }}>
                <Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2.5 }}>
                    <IconTile size={44}>
                      <ArticleOutlinedIcon />
                    </IconTile>
                    <Typography sx={{ color: "#C5D0DB", fontWeight: 800, fontSize: "1.6rem", letterSpacing: "-0.02em" }}>{String(i + 1).padStart(2, "0")}</Typography>
                  </Stack>
                  <Typography component="h3" sx={{ fontWeight: 700, color: C.ink, fontSize: "1.05rem", lineHeight: 1.4 }}>
                    {g.title}
                  </Typography>
                </Box>
                <CardCta>Read guide</CardCta>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* Custom documentation CTA */}
    <Box component="section" sx={{ bgcolor: C.white, pb: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "24px",
            background: GRADIENT.brand,
            color: C.white,
            p: { xs: 4, md: 7 },
            boxShadow: SHADOW.brand,
            "&::before": { content: '""', position: "absolute", width: 420, height: 420, right: -140, top: -200, borderRadius: "50%", border: "60px solid rgba(255,255,255,0.07)" },
            "&::after": { content: '""', position: "absolute", width: 260, height: 260, left: -100, bottom: -160, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.06)" },
          }}>
          <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Eyebrow dark>Need something specific?</Eyebrow>
              <Typography component="h2" sx={{ mt: 2, fontWeight: 800, fontSize: { xs: "1.9rem", md: "2.6rem" }, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                Custom Documentation Request
              </Typography>
              <Typography sx={{ mt: 2, color: "rgba(255,255,255,0.88)", fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.7, maxWidth: 560 }}>
                Need specific CAD drawings or material certificates for your project? Our engineering team provides custom technical support.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack direction={{ xs: "column", sm: "row", md: "column" }} spacing={1.5} alignItems={{ md: "flex-end" }}>
                <Button component={RouterLink} viewTransition to="/enquiry" startIcon={<EmailOutlinedIcon />} endIcon={<ArrowForwardIcon />} sx={{ ...btn.light, py: 1.6, px: 3.5, minWidth: { md: 260 } }}>
                  Contact Engineering
                </Button>
                <Button href="tel:+447369243459" startIcon={<PhoneOutlinedIcon />} sx={{ ...btn.onDark, py: 1.6, px: 3.5, minWidth: { md: 260 } }}>
                  +44 7369 243459
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
)

export default ResourcesPage
