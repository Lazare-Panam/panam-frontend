import React from "react"
import { Box, Container, Typography, Divider, Button, Card, CardMedia, CardContent } from "@mui/material"
import Grid from "@mui/material/Grid"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const PRODUCTS = [
  {
    title: "Hex Nipples & Reducing Hex Nipples",
    description: "Hex Nipples and Reducing Hex Nipples in SS 316. NPT, ISO Parallel, and 37° JIC thread combinations. Standard and Swivel variants. 10,000 to 15,000 psi. Sizes from 1/8\" to 2\".",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/hex-nipples.jpg",
    pressure: "10,000 – 15,000 psi",
    link: "/high-pressure/pipe-fittings/hex-nipples",
  },
  {
    title: "Hex Couplings & Reducing Hex Couplings",
    description: "Hex Couplings and Reducing Hex Couplings in SS 316. NPT and ISO Parallel thread connections. 10,000 to 15,000 psi. Sizes from 1/8\" to 1\".",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/hex-coupling.png",
    pressure: "10,000 – 15,000 psi",
    link: "/high-pressure/pipe-fittings/hex-couplings",
  },
  {
    title: "Adapters",
    description: "High Pressure Adapters in SS 316. NPT and ISO Parallel thread connections. 10,000 to 15,000 psi. Sizes from 1/8\" to 1\".",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/adapters.jpg",
    pressure: "10,000 – 15,000 psi",
    link: "/high-pressure/pipe-fittings/adapters",
  },
  {
  title: "Elbows",
  description: "Male, Female, Street, Swivel Male and Swivel Union Elbows in SS 316. NPT and ISO Parallel thread connections. 10,000 to 15,000 psi. Sizes from 1/8\" to 1 1/2\".",
  image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-pipe-fittings/male-elbow-hp.png",
  pressure: "10,000 – 15,000 psi",
  link: "/high-pressure/pipe-fittings/elbows",
},
]

const SPECS = [
  { label: "Pressure Range", value: "10,000 – 15,000 psi" },
  { label: "Material", value: "SS 316" },
  { label: "Thread Types", value: "NPT · ISO Parallel · 37° JIC · Swivel" },
  { label: "Products", value: "Hex Nipples · Reducing Hex Nipples · Couplings · Adapters" },
  { label: "Sizes", value: "1/8\" – 2\"" },
]

type ProductItem = (typeof PRODUCTS)[0]

const ProductCard: React.FC<ProductItem> = ({ title, description, image, pressure, link }) => (
  <Card variant="outlined" sx={{
    borderRadius: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #e8e8e8",
    transition: "box-shadow 0.2s",
    "&:hover": { boxShadow: "0 4px 24px rgba(1,176,240,0.10)" },
  }}>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#ffffff", p: 3, borderBottom: "1px solid #f0f0f0", minHeight: 220 }}>
      <CardMedia component="img" image={image} alt={title}
        sx={{ width: "100%", maxWidth: 200, height: 180, objectFit: "contain" }} />
    </Box>
    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2, fontSize: 10, fontFamily: PRIMARY_FONT }}>
        PANAM® HP Pipe Fittings
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 1, fontSize: "1.05rem" }}>
        {title}
      </Typography>
      <Box sx={{ display: "inline-flex", alignItems: "center", bgcolor: "#e8f7fd", border: "1px solid #b3e5f7", borderRadius: 0.5, px: 1.2, py: 0.3, mb: 2 }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: 0.5 }}>
          {pressure}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.88rem", fontFamily: PRIMARY_FONT }}>
        {description}
      </Typography>
    </CardContent>
    <Box sx={{ p: 2, pt: 0, display: "flex", flexDirection: "column", gap: 1 }}>
      <Button variant="contained" fullWidth size="small" href={link}
        sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, fontWeight: 700, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#0090c8" } }}>
        VIEW RANGE
      </Button>
      <Button variant="outlined" fullWidth size="small" href="mailto:sales@panamvalves.com"
        sx={{ borderColor: "#ddd", color: "#444", borderRadius: 0, fontWeight: 600, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#f5f5f5", borderColor: "#bbb" } }}>
        REQUEST QUOTE
      </Button>
    </Box>
  </Card>
)

export default function HPPipeFittingsIndexPage() {
  return (
    <>
      <title>PANAM® HP Pipe Fittings | 10,000 – 15,000 psi | SS 316</title>
      <meta name="description" content="Panam high pressure pipe fittings in SS 316 — hex nipples, reducing hex nipples, couplings, and adapters. NPT, ISO Parallel, and 37° JIC. 10,000 to 15,000 psi." />
      <meta name="keywords" content="high pressure pipe fittings, hex nipples, reducing hex nipples, hex couplings, adapters, NPT fittings, ISO parallel fittings, JIC fittings, SS316 pipe fittings" />
      <meta property="og:title" content="PANAM® HP Pipe Fittings | 10,000 – 15,000 psi" />
      <meta property="og:description" content="High pressure pipe fittings in SS 316. Hex nipples, couplings and adapters in NPT, ISO Parallel and 37° JIC. 10,000 to 15,000 psi." />
      <meta property="og:type" content="website" />

      <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <Box sx={{
          position: "relative", width: "100%",
          minHeight: { xs: "60vh", md: "75vh" },
          display: "flex", alignItems: "center", overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80")`,
          backgroundSize: "cover", backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}>
          <Container maxWidth="lg">
            <Typography variant="overline" sx={{ color: BRAND_BLUE, letterSpacing: 3, fontSize: 11, fontWeight: 700, fontFamily: PRIMARY_FONT }}>
              PANAM® High Pressure Pipe Fittings
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: 38, md: 68 }, fontWeight: 900, color: "#fff", mt: 1, mb: 3, lineHeight: 1.08, maxWidth: 750, fontFamily: PRIMARY_FONT, letterSpacing: "-0.03em" }}>
              HP Pipe Fittings
              <br />
              <span style={{ color: BRAND_BLUE }}>Precision. Pressure. Performance.</span>
            </Typography>
            <Typography sx={{ fontSize: { xs: 16, md: 19 }, color: "rgba(255,255,255,0.88)", maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>
              High pressure pipe fittings in SS 316 — hex nipples, reducing hex nipples, couplings, and adapters — rated from 10,000 to 15,000 psi across NPT, ISO Parallel, and 37° JIC connections.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button variant="contained" size="large" href="#range"
                sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
                Explore Range
              </Button>
              <Button variant="outlined" size="large" href="mailto:sales@panamvalves.com"
                sx={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "rgba(255,255,255,0.08)", borderColor: "#fff" } }}>
                Request Quote
              </Button>
            </Box>
          </Container>
        </Box>

        {/* ── MARQUEE ── */}
        <Box sx={{ borderBottom: "1px solid #eee", py: 1.5, bgcolor: "#fff", overflow: "hidden", whiteSpace: "nowrap" }}>
          <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
          <Box sx={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
            {[1, 2].map(i => (
              <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
                {[
                  "10,000 – 15,000 psi",
                  "SS 316 construction",
                  "NPT · ISO Parallel · 37° JIC",
                  "Hex Nipples · Reducing Hex Nipples",
                  "Hex Couplings · Adapters",
                  "1/8\" to 2\" sizes",
                ].map(item => (
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
                Every HP pipe fitting.
              </Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
                Panam High Pressure Pipe Fittings in SS 316 cover hex nipples, reducing hex nipples, couplings, and adapters across NPT, ISO Parallel, and 37° JIC thread standards. All fittings are marked with size, material, and heat code for full traceability.
              </Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>
                Smooth flow path elbows with radius junction, straight fittings from bar stock, forged fittings from forgings. All pipe threads meet ANSI/ASME B1.20.1 for tapered pipe threads. Working pressure meets ANSI/ASME B31.3 at ambient temperature.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ bgcolor: "#f5fbfe", border: "1px solid #d0eef9", p: 4, height: "100%" }}>
                <Typography sx={{ fontWeight: 700, mb: 2.5, fontSize: 14, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: 0.5, textTransform: "uppercase" }}>
                  Technical Specifications
                </Typography>
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
              HP Pipe Fittings Range
            </Typography>
            <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8 }}>
              Select by fitting type, thread standard, or pressure rating.
            </Typography>
            <Grid container spacing={3}>
              {PRODUCTS.map(p => (
                <Grid key={p.title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <ProductCard {...p} />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mb: 10 }} />

          {/* ── KEY FEATURES ── */}
          <Box sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
              Why specify PANAM® HP Pipe Fittings
            </Typography>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT }}>
              Built to the same engineering standard across every category — consistent materials, thread standards, and pressure ratings throughout the range.
            </Typography>
            <Grid container spacing={2}>
              {[
                "SS 316 construction across all fittings",
                "10,000 to 15,000 psi working pressure",
                "NPT, ISO Parallel, and 37° JIC thread types",
                "Standard and Swivel variants available",
                "Sizes from 1/8\" to 2\"",
                "Full heat-code material traceability",
                "ANSI/ASME B1.20.1 compliant pipe threads",
                "ANSI/ASME B31.3 working pressure rating",
                "Forged and bar stock construction",
                "Smooth flow path radius junction elbows",
                "Size, material and heat code marked",
                "All threads capped for protection",
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

          {/* ── CTA ── */}
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
              Specify your HP pipe fitting
            </Typography>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>
              Need a specific thread type, size, or pressure rating? Our technical team responds to pipe fitting enquiries within 24 hours.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="contained" size="large" href="mailto:sales@panamvalves.com"
                sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
                Email Technical Sales
              </Button>
              <Button variant="outlined" size="large" href="/enquiry"
                sx={{ borderColor: "#ddd", color: "#333", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#f5fbfe", borderColor: BRAND_BLUE } }}>
                Request Quote
              </Button>
            </Box>
          </Box>

        </Container>
      </Box>
    </>
  )
}