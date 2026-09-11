import React from "react"
import { Box, Container, Typography, Divider, Button, Card, CardMedia, CardContent, GlobalStyles } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Link as RouterLink } from "react-router-dom"
import HighPressureFAQ from "./HighPressureFAQ"
import HighPressureSeries from "./HighPressureSeries"
import HighPressureCompliance from "./HighPressureCompliance"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"
//
const PRODUCTS = [
  {
    title: "High Pressure Cone & Thread Fittings",
    description: 'Six categories of high pressure fittings in SS 316 — connectors, unions, adapters, elbows, tees, crosses, hex nipples, caps, plugs, glands and collars. Medium Pressure at 20,000 psi and High Pressure at 60,000 psi across tube ODs from 1/4" to 1".',
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/PMC-4MF-4N-SS.jpg",
    pressure: "10,000 – 60,000 psi",
    link: "/high-pressure/fittings",
  },
  {
    title: "High Pressure Pipe Fittings",
    description: 'High pressure pipe fittings in SS 316 — hex nipples, reducing hex nipples, couplings, and adapters across NPT, ISO Parallel, and 37° JIC. 10,000 to 15,000 psi. Sizes from 1/8" to 2".',
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/hex-nipples.jpg",
    pressure: "10,000 – 15,000 psi",
    link: "/high-pressure/pipe-fittings",
  },
  {
    title: "High Pressure Needle Valves",
    subtitle: "10,000 – 60,000 psi",
    description: "Panam HP Needle Valves in SS 316 across five pressure series — HP (10,000 psi), HP1 (15,000 psi), HP2 (20,000 psi), HP3 (30,000 psi), and HP6 (60,000 psi). NPT, MP Cone, and HP Cone thread connections. Straight, Angle, 3-Way, and 2-Stem Manifold configurations.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-nv.jpg",
    pressure: "10,000 – 60,000 psi",
    link: "/high-pressure/needle-valves",
  },
  {
    title: "High Pressure Double Block & Bleed Valves",
    subtitle: "15,000 – 20,000 psi",
    description: "Panam HP Double Block & Bleed Valves in SS 316 for pressures up to 20,000 psi. Ball-Needle-Ball at 15,000 psi and Needle-Needle at 20,000 psi. NPT Female and MP Cone & Thread Female connections.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-dbb.jpg",
    pressure: "15,000 – 20,000 psi",
    link: "/high-pressure/double-block-and-valves",
  },
  {
    title: "High Pressure Ball Valves",
    subtitle: "10,000 – 20,000 psi",
    description: "Panam HP Ball Valves in SS 316 across three pressure series — HP (10,000 psi), HP1 (15,000 psi), and HP2 (20,000 psi). 2-Way, 3-Way 180° Turn, and 3-Way 90° Turn Diverter configurations.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-bv.jpg",
    pressure: "10,000 – 20,000 psi",
    link: "/high-pressure/ball-valves",
  },
  {
    title: "High Pressure Cone & Threaded Nipples",
    subtitle: "20,000 – 60,000 psi",
    description: 'Panam HP Cone & Threaded Nipples in SS 316. MP Cone & Thread at 20,000 psi and HP Cone & Thread at 60,000 psi. Available in 1/4", 3/8", 9/16", 3/4" and 1" OD across multiple lengths.',
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-cone.png",
    pressure: "20,000 – 60,000 psi",
    link: "/high-pressure/cones-threaded-nipples",
  },
  {
    title: "High Pressure 2-Valve Manifolds",
    subtitle: "15,000 – 20,000 psi",
    description: "Panam 2-Valve Manifolds in SS 316 for high pressure gauge and absolute pressure transmitter applications. 15,000 psi with NPT Female and 20,000 psi with MP Cone & Thread Female connections.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/cover-needle.jpg",
    pressure: "15,000 – 20,000 psi",
    link: "/high-pressure/2-valve-manifolds",
  },
]

const SPECS = [
  { label: "Pressure Range", value: "10,000 – 60,000 psi" },
  { label: "Material", value: "SS 316" },
  { label: "Connection Types", value: "NPT · MP Cone & Thread · HP Cone & Thread" },
  { label: "Products", value: "Needle Valves · DBB · Ball Valves · Nipples · Manifolds" },
  { label: "Configurations", value: "Straight · Angle · 3-Way · 2-Stem Manifold" },
]

type ProductItem = (typeof PRODUCTS)[0]

const ProductCard: React.FC<ProductItem> = ({ title, description, image, pressure, link }) => (
  <Card
    variant="outlined"
    sx={{
      borderRadius: 0,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #e8e8e8",
      transition: "box-shadow 0.2s",
      "&:hover": { boxShadow: "0 4px 24px rgba(1,176,240,0.10)" },
    }}>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#ffffff", p: 3, borderBottom: "1px solid #f0f0f0", minHeight: 220 }}>
      <CardMedia component="img" image={image} alt={title} loading="lazy" sx={{ width: "100%", maxWidth: 200, height: 180, objectFit: "contain" }} />
    </Box>
    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2, fontSize: 10, fontFamily: PRIMARY_FONT }}>
        PANAM® High Pressure
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 1, fontSize: "1.05rem" }}>
        {title}
      </Typography>
      <Box sx={{ display: "inline-flex", alignItems: "center", bgcolor: "#e8f7fd", border: "1px solid #b3e5f7", borderRadius: 0.5, px: 1.2, py: 0.3, mb: 2 }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: 0.5 }}>{pressure} MAX</Typography>
      </Box>
      <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.88rem", fontFamily: PRIMARY_FONT }}>
        {description}
      </Typography>
    </CardContent>
    <Box sx={{ p: 2, pt: 0, display: "flex", flexDirection: "column", gap: 1 }}>
      <Button component={RouterLink} viewTransition to={link} variant="contained" fullWidth size="small" sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, fontWeight: 700, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#0090c8" } }}>
        VIEW RANGE
      </Button>
      <Button variant="outlined" fullWidth size="small" href="mailto:sales@panamvalves.co.uk" sx={{ borderColor: "#ddd", color: "#444", borderRadius: 0, fontWeight: 600, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#f5f5f5", borderColor: "#bbb" } }}>
        REQUEST QUOTE
      </Button>
    </Box>
  </Card>
)

export default function HighPressureIndexPage() {
  return (
    <>
      <title>PANAM® High Pressure Valves & Fittings | 10,000 – 60,000 psi | Hydrogen Ready</title>
      <meta name="description" content="Panam high pressure valves and fittings rated 10,000 to 60,000 psi — needle valves, double block & bleed, ball valves, cone & threaded nipples, and 2-valve manifolds. SS 316, NACE MR0175. Hydrogen compatible." />
      <meta name="keywords" content="high pressure needle valves, high pressure ball valves, double block and bleed valves, cone threaded nipples, 2-valve manifolds, hydrogen valves, 60000 psi valves, SS316 high pressure fittings, NACE MR0175" />
      <meta property="og:title" content="PANAM® High Pressure Valves & Fittings | Hydrogen Ready | 10,000 – 60,000 psi" />
      <meta property="og:description" content="Five high pressure product families — needle valves, DBB, ball valves, nipples, and manifolds — rated from 10,000 to 60,000 psi in SS 316. NACE certified. Hydrogen compatible." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.panamvalve.com/high-pressure" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PANAM® High Pressure Valves & Fittings",
          description: "Five high pressure product families — needle valves, double block & bleed, ball valves, cone & threaded nipples, and 2-valve manifolds — rated 10,000 to 60,000 psi in SS 316.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: PRODUCTS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: `https://www.panamvalve.com${p.link}`,
            })),
          },
        })}
      </script>
      <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
        {/* ── HERO ── */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: { xs: "60vh", md: "75vh" },
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-hero.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            py: { xs: 8, md: 12 },
          }}>
          <Container maxWidth="lg">
            <Typography variant="overline" sx={{ color: BRAND_BLUE, letterSpacing: 3, fontSize: 11, fontWeight: 700, fontFamily: PRIMARY_FONT }}>
              PANAM® High Pressure
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: 38, md: 68 }, fontWeight: 900, color: "#fff", mt: 1, mb: 3, lineHeight: 1.08, maxWidth: 750, fontFamily: PRIMARY_FONT, letterSpacing: "-0.03em" }}>
              High Pressure Valves
              <br />
              <span style={{ color: BRAND_BLUE }}>Built to Withstand.</span>
            </Typography>
            <Typography sx={{ fontSize: { xs: 16, md: 19 }, color: "rgba(255,255,255,0.88)", maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>Needle valves, double block & bleed valves, ball valves, cone & threaded nipples, and 2-valve manifolds — all rated from 10,000 to 60,000 psi in SS 316.</Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button variant="contained" size="large" href="#range" sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
                Explore Range
              </Button>
              <Button variant="outlined" size="large" href="mailto:sales@panamvalves.co.uk" sx={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "rgba(255,255,255,0.08)", borderColor: "#fff" } }}>
                Request Quote
              </Button>
            </Box>
          </Container>
        </Box>

        {/* ── MARQUEE ── */}
        <Box sx={{ borderBottom: "1px solid #eee", py: 1.5, bgcolor: "#fff", overflow: "hidden", whiteSpace: "nowrap" }}>
          <GlobalStyles styles={{ "@keyframes marquee": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } } }} />
          <Box sx={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
            {[1, 2].map(i => (
              <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
                {["10,000 – 60,000 psi", "SS 316 construction", "NPT · MP Cone & Thread · HP Cone & Thread", "Needle · Ball · DBB · Nipples · Manifolds", "Straight · Angle · 3-Way · Manifold configurations", "NACE MR0175 available"].map(item => (
                  <Typography key={item} sx={{ fontSize: 13, fontWeight: 500, color: "text.secondary", display: "flex", alignItems: "center", gap: 1.5, fontFamily: PRIMARY_FONT }}>
                    <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: BRAND_BLUE, flexShrink: 0 }} />
                    {item}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          {/* ── INTRO ── */}
          <Grid container spacing={8} sx={{ mb: 10 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 34 }, fontWeight: 800, mb: 3, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
                One source.
                <br />
                Every high pressure product.
              </Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>Panam High Pressure products cover the full spectrum from 10,000 to 60,000 psi — needle valves, double block & bleed valves, ball valves, cone & threaded nipples, and 2-valve manifolds. All manufactured in SS 316 with NPT, MP Cone & Thread, and HP Cone & Thread connections.</Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>Five needle valve pressure series (HP through HP6), three ball valve series, Ball-Needle-Ball and Needle-Needle DBB configurations, and cone & thread nipples available in lengths from 2.75" to 12". NACE MR0175 certification available across the range.</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ bgcolor: "#f5fbfe", border: "1px solid #d0eef9", p: 4, height: "100%" }}>
                <Typography sx={{ fontWeight: 700, mb: 2.5, fontSize: 14, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: 0.5, textTransform: "uppercase" }}>Technical Specifications</Typography>
                {SPECS.map(spec => (
                  <Box key={spec.label} sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", py: 1.2, borderBottom: "1px solid #e4f2fa", gap: 2 }}>
                    <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#444", fontFamily: PRIMARY_FONT, flexShrink: 0 }}>{spec.label}</Typography>
                    <Typography sx={{ fontSize: 13, color: "#666", fontFamily: PRIMARY_FONT, textAlign: "right" }}>{spec.value}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ mb: 10 }} />

          {/* ── PRODUCT GRID ── */}
          <Box id="range" sx={{ mb: 10 }}>
            <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
              Product Range
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
              Five Products. One Standard.
            </Typography>
            <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8 }}>Each product is purpose-built for its pressure class and application. Select by valve type, pressure rating, or connection standard.</Typography>
            <Grid container spacing={3}>
              {PRODUCTS.map(p => (
                <Grid key={p.title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <ProductCard {...p} />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mb: 10 }} />

          <HighPressureSeries />

          <Divider sx={{ my: 10 }} />

          <HighPressureCompliance />

          <Divider sx={{ mb: 10 }} />

          {/* ── KEY FEATURES ── */}
          <Box sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
              Why specify PANAM® High Pressure products
            </Typography>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT }}>All five product families are built to the same engineering standard — consistent materials, construction, and test procedures across the entire range.</Typography>
            <Grid container spacing={2}>
              {[
                "SS 316 construction across all products",
                "10,000 to 60,000 psi pressure coverage",
                "NPT, MP Cone & Thread, HP Cone & Thread connections",
                "NACE MR0175 certification available",
                "Needle, Ball, DBB, and Manifold configurations",
                "HP Needle Valves in 5 pressure series (HP – HP6)",
                "Ball Valves in 2-Way, 3-Way 180° and 90° Diverter",
                "DBB in Ball-Needle-Ball and Needle-Needle configurations",
                'Cone & Thread Nipples from 2.75" to 12" length',
                "2-Valve Manifolds for gauge and DP transmitters",
                '1/4" to 1" connection sizes across the range',
                "Full technical documentation and material traceability",
              ].map(feat => (
                <Grid key={feat} size={{ xs: 12, sm: 6, md: 6 }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: BRAND_BLUE, flexShrink: 0, mt: "6px" }} />
                    <Typography sx={{ fontSize: 14, color: "#555", fontFamily: PRIMARY_FONT, lineHeight: 1.7 }}>{feat}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mb: 10 }} />

          <HighPressureFAQ />

          <Divider sx={{ my: 10 }} />

          {/* ── CTA ── */}
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
              Specify your high pressure product
            </Typography>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>Need a specific pressure series, connection type, or configuration? Our technical team responds to high pressure enquiries within 24 hours.</Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="contained" size="large" href="mailto:sales@panamvalves.co.uk" sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
                Email Technical Sales
              </Button>
              <Button component={RouterLink} viewTransition to="/enquiry" variant="outlined" size="large" sx={{ borderColor: "#ddd", color: "#333", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#f5fbfe", borderColor: BRAND_BLUE } }}>
                Request Quote
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
