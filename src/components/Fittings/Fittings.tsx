import React from "react"
import { Box, Container, Typography, Grid, Divider, Button, Card, CardMedia, CardContent } from "@mui/material"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

// ── EDIT FITTING ROUTES HERE ──────────────────────────────────────────────
const FITTING_ROUTES: Record<string, string> = {
  "tube-fittings": "/tube-fittings",
  "37-jic-fittings": "/jic-fittings",
  "pipe-fittings": "/pipe-fittings",
  "weld-fittings": "/products/instrumentation-fittings/weld-fittings",
  "swivel-gauge-adaptors": "/products/instrumentation-fittings/swivel-gague-adaptors",
}
// ─────────────────────────────────────────────────────────────────────────

const FITTINGS = [
  {
    type: "tube-fittings",
    title: "Tube Fittings",
    description: "Single and double ferrule designs for secure, leak-tight performance in demanding instrumentation and process applications.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-connector",
    pressure: "High Pressure",
    size: '1/16" to 2" OD · 3–50 mm OD',
    materials: "SS316 · Duplex · Monel · Hastelloy · Brass",
  },
  {
    type: "37-jic-fittings",
    title: "37° JIC Fittings",
    description: "High-performance flare fittings for critical hydrogen, chemical, and industrial gas systems with leak-tight 37° flare sealing.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/jic/flare/male-connector-jic.jpg",
    pressure: "10,000 psig",
    size: '1/16" to 2"',
    materials: "SS316 · Duplex · Monel · Hastelloy",
  },
  {
    type: "pipe-fittings",
    title: "Pipe Fittings",
    description: "Engineered for extreme operating conditions including hydrogen storage, fuel cell technology, aerospace, and cryogenic applications.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/swivel-run-tee.png",
    pressure: "15,000 psig",
    size: '1/16" to 2"',
    materials: "SS316 · Duplex · Monel · Hastelloy",
  },
  {
    type: "weld-fittings",
    title: "Weld Fittings",
    description: "Socket and butt weld configurations for permanent, high-integrity connections in hydrogen systems, chemical processing, and industrial gas networks.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/connector-weld.jpg",
    pressure: "10,000 psig",
    size: '1/16" to 2"',
    materials: "SS316 · Duplex · Monel · Hastelloy",
  },
  {
    type: "swivel-gauge-adaptors",
    title: "Swivel Gauge Adaptors",
    description: "360° adjustable gauge positioning with silver-plated anti-gall threads. Compatible with NPT, BSPP, BSPT, metric, and global thread standards.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/swivel-gauge/PSGA-8N-SS - JPG.jpg",
    pressure: "High Pressure",
    size: "Multiple thread sizes",
    materials: "SS316 · Duplex · Monel · NACE alloys",
  },
]

const SPECS = [
  { label: "Max Working Pressure", value: "Up to 15,000 psig (1,034 bar)" },
  { label: "Size Range", value: '1/16" to 2" OD · 3 mm to 50 mm OD' },
  { label: "Materials", value: "SS316, Duplex, Monel, Hastelloy, Brass" },
  { label: "End Connections", value: "NPT, BSPP, BSPT, 37° Flare, JIC Swivel, Socket Weld" },
  { label: "Test Standard", value: "ASTM F1387 type tested" },
  { label: "Certification", value: "NACE MR0175 / ISO 15156 available on request" },
  { label: "Traceability", value: "Full heat-code traceability · EN 10204 Type 3.1B" },
]

type FittingItem = (typeof FITTINGS)[0]

const FittingCard: React.FC<FittingItem> = ({ type, title, description, image, pressure, size, materials }) => {
  const href = FITTING_ROUTES[type] ?? `/fittings/${type}`

  return (
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#ffffff",
          p: 3,
          borderBottom: "1px solid #f0f0f0",
          minHeight: 220,
        }}>
        <CardMedia component="img" image={image} alt={title} sx={{ width: "100%", maxWidth: 200, height: 180, objectFit: "contain" }} />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2, fontSize: 10, fontFamily: PRIMARY_FONT }}>
          PANAM® Fittings
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 1, fontSize: "1.05rem" }}>
          {title}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
          <Box sx={{ display: "inline-flex", alignItems: "center", bgcolor: "#e8f7fd", border: "1px solid #b3e5f7", borderRadius: 0.5, px: 1.2, py: 0.3 }}>
            <Typography sx={{ fontSize: 11, fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: 0.5 }}>{pressure} MAX</Typography>
          </Box>
          <Box sx={{ display: "inline-flex", alignItems: "center", bgcolor: "#f5f5f5", border: "1px solid #e0e0e0", borderRadius: 0.5, px: 1.2, py: 0.3 }}>
            <Typography sx={{ fontSize: 11, fontWeight: 600, color: "#555", fontFamily: PRIMARY_FONT }}>{size}</Typography>
          </Box>
        </Box>

        <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.88rem", fontFamily: PRIMARY_FONT, mb: 1.5 }}>
          {description}
        </Typography>

        <Typography sx={{ fontSize: 11, color: "#999", fontFamily: PRIMARY_FONT, letterSpacing: 0.3 }}>{materials}</Typography>
      </CardContent>

      <Box sx={{ p: 2, pt: 0, display: "flex", flexDirection: "column", gap: 1 }}>
        <Button
          variant="contained"
          fullWidth
          size="small"
          href={href}
          sx={{
            bgcolor: BRAND_BLUE,
            color: "#fff",
            borderRadius: 0,
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: 1,
            py: 1,
            "&:hover": { bgcolor: "#0090c8" },
          }}>
          VIEW RANGE
        </Button>
        <Button
          variant="outlined"
          fullWidth
          size="small"
          href="mailto:sales@panamvalves.com"
          sx={{
            borderColor: "#ddd",
            color: "#444",
            borderRadius: 0,
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: 1,
            py: 1,
            "&:hover": { bgcolor: "#f5f5f5", borderColor: "#bbb" },
          }}>
          REQUEST QUOTE
        </Button>
      </Box>
    </Card>
  )
}

export default function FittingsPage() {
  return (
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/blog/vladyslav-cherkasenko-2jftyBtoqzQ-unsplash.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: BRAND_BLUE, letterSpacing: 3, fontSize: 11, fontWeight: 700, fontFamily: PRIMARY_FONT }}>
            PANAM® Instrumentation
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 38, md: 68 }, fontWeight: 900, color: "#fff", mt: 1, mb: 3, lineHeight: 1.08, maxWidth: 750, fontFamily: PRIMARY_FONT, letterSpacing: "-0.03em" }}>
            Fittings
            <br />
            <span style={{ color: BRAND_BLUE }}>Built to Hold.</span>
          </Typography>
          <Typography sx={{ fontSize: { xs: 16, md: 19 }, color: "rgba(255,255,255,0.88)", maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>Five fitting families — Tube, 37° JIC, Pipe, Weld, and Swivel Gauge Adaptors — covering fractional and metric sizes up to 15,000 psig across the world's most demanding fluid systems.</Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button variant="contained" size="large" href="#range" sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
              Explore Range
            </Button>
            <Button variant="outlined" size="large" href="/contact" sx={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "rgba(255,255,255,0.08)", borderColor: "#fff" } }}>
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
              {["Up to 15,000 psig working pressure", "SS316 · Duplex · Monel · Hastelloy · Brass", "ASTM F1387 type tested", "NACE MR0175 available on request", "Full heat-code material traceability", 'Fractional 1/16" to 2" · Metric 3–50 mm OD', "EN 10204 Type 3.1B test certificates", "Five fitting families in one catalog"].map(item => (
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
              Every fitting you need.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              PANAM® Fittings cover the full instrumentation and process spectrum — from precision tube fittings for leak-tight connections, to 37° JIC flare, high-pressure pipe fittings, permanent weld configurations, and 360° swivel gauge adaptors. Every family shares the same material standards, certification options, and quality controls.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>All fitting families are available in SS316, Duplex, Monel, and Hastelloy with full heat-code traceability, EN 10204 Type 3.1B test certificates, and NACE MR0175 certification available on request.</Typography>
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

        {/* ── FITTING GRID ── */}
        <Box id="range" sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
            Product Range
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Five Families. One Standard.
          </Typography>
          <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8 }}>Each fitting family is purpose-built for a specific connection type and pressure class. Select by application, working pressure, or end connection.</Typography>
          <Grid container spacing={3}>
            {FITTINGS.map(f => (
              <Grid key={f.type} size={{ xs: 12, sm: 6, md: 4 }}>
                <FittingCard {...f} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── KEY FEATURES ── */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
            Why specify PANAM® Fittings
          </Typography>
          <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT }}>Every fitting family is built to the same engineering standard — consistent materials, certifications, and traceability across the entire range.</Typography>
          <Grid container spacing={2}>
            {[
              "Five fitting families from a single trusted manufacturer",
              "SS316, Duplex, Monel, Hastelloy, and Brass across all families",
              "ASTM F1387 type tested for leak-tight performance",
              "NACE MR0175 / ISO 15156 certification available",
              "Full heat-code traceability on all components",
              "EN 10204 Type 3.1B test certificates supplied",
              'Fractional 1/16" to 2" and metric 3–50 mm OD',
              "NPT, BSPP, BSPT, 37° flare, JIC swivel, and socket weld ends",
              "Silver-plated anti-gall threads on swivel gauge adaptors",
              "Pressures from standard to 15,000 psig across the range",
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
            Specify your fitting
          </Typography>
          <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>Send us your pressure rating, material requirement, and end connections. Our technical team responds to instrumentation enquiries within 24 hours.</Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="contained" size="large" href="mailto:sales@panamvalves.com" sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
              Email Technical Sales
            </Button>
            <Button variant="outlined" size="large" href="/contact" sx={{ borderColor: "#ddd", color: "#333", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#f5fbfe", borderColor: BRAND_BLUE } }}>
              Request Quote
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
