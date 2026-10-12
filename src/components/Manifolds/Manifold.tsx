import React from "react"
import { Box, Container, Typography, Divider, Button, Card, CardMedia, CardContent } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Link as RouterLink } from "react-router-dom"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const MANIFOLD_ROUTES: Record<string, string> = {
  "2vm": "/manifolds/2VM",
  "3vm": "/manifolds/3VM",
  "5vm": "/manifolds/5VM",
}

const MANIFOLDS = [
  {
    type: "2vm",
    title: "2-Valve Manifolds",
    description: 'Two-valve isolation manifolds for gauge and absolute pressure transmitters. Type A (Angular) configuration in stainless steel 316. Covers 1/4" to 1/2" NPT, BSPT, BSPP, M20x1.5, and tube fittings. Standard 6000 psi and high-pressure 10000 psi ratings, with a NACE MR-01-75 sour gas option.',
    image: "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/2VM/2VM_Cover.jpg",
    pressure: "6000 – 10000 psi",
    size: '1/4" – 1/2" · NPT, BSPT, BSPP, M20, Tube',
    material: "SS316 · NACE / Bleed Valve Options",
    valves: "2-Valve",
  },
  {
    type: "3vm",
    title: "3-Valve Manifolds",
    description: "Three-valve manifolds for differential pressure transmitters in process measurement, equalization, and isolation applications. Type A (Angular) configuration in stainless steel 316. Standard 6000 psi and 10000 psi high-pressure ratings with NACE MR-01-75 sour gas, bleed valve, large bore, and temperature service options.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/3VM/3VM_Cover.jpg",
    pressure: "6000 – 10000 psi",
    size: '1/4" – 1/2" · NPT, BSPT, BSPP, M20, Tube',
    material: "SS316 · NACE / Large Bore / Bleed Valve",
    valves: "3-Valve",
  },
  {
    type: "5vm",
    title: "5-Valve Manifolds",
    description: "Five-valve manifolds for differential pressure transmitters with independent vent and equalizer valves. Type A (Angular) configuration in stainless steel 316. Standard 6000 psi and 10000 psi high-pressure ratings. Power Configuration (2 Vent – 1 Equalizer – 2 Isolation), NACE MR-01-75, large bore (soft seat), and temperature service options.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/5VM/5VM_Cover.jpg",
    pressure: "6000 – 10000 psi",
    size: '1/4" – 1/2" · NPT, BSPT, BSPP, M20, Tube',
    material: "SS316 · NACE / Power Config / LB Options",
    valves: "5-Valve",
  },
  {
    title: "Air Header",
    description: "Stainless steel 316 air distribution header carrying 4 to 20 side outlets from a single inlet, with an end drain for line clearing. Ball or needle valves on the inlet, outlets, and drain, with threaded, weld, or compression connections. Rated up to 6000 psi (414 bar) and 648 °C (1200 °F), with radiographic and liquid-penetrant weld testing and nitrogen leak testing on every valve.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/system-integratino/air-h.jpg",
    badge: "Air Distribution",
    href: "/system-integration/air-header",
  },
]

const SPECS = [
  { label: "Max Working Pressure", value: "10000 psi (689 bar)" },
  { label: "Standard Pressure Rating", value: "6000 psi (414 bar)" },
  { label: "Material", value: "Stainless Steel 316" },
  { label: "Configuration", value: "Type A (Angular)" },
  { label: "Connection Standards", value: "NPT · BSPT · BSPP · M20x1.5 · Tube" },
  { label: "Special Service", value: "NACE MR-01-75 Sour Gas option" },
  { label: "Valve Families", value: "2VM · 3VM · 5VM" },
]

interface ManifoldItem {
  type?: string
  title: string
  description: string
  image: string
  pressure?: string
  size?: string
  material?: string
  valves?: string
  badge?: string
  href?: string
}

const ManifoldCard: React.FC<ManifoldItem> = ({ type, title, description, image, pressure, material, valves, badge, href: itemHref }) => {
  const href = itemHref ?? (type ? MANIFOLD_ROUTES[type] ?? `/manifolds/${type}` : "/enquiry")

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
          PANAM® Manifolds
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 1, fontSize: "1.05rem" }}>
          {title}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
          {pressure && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                bgcolor: "#e8f7fd",
                border: "1px solid #b3e5f7",
                borderRadius: 0.5,
                px: 1.2,
                py: 0.3,
              }}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: 0.5 }}>{pressure} MAX</Typography>
            </Box>
          )}
          {valves && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                bgcolor: "#f5f5f5",
                border: "1px solid #e0e0e0",
                borderRadius: 0.5,
                px: 1.2,
                py: 0.3,
              }}>
              <Typography sx={{ fontSize: 11, fontWeight: 600, color: "#555", fontFamily: PRIMARY_FONT }}>{valves}</Typography>
            </Box>
          )}
          {badge && (
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                bgcolor: "#e8f7fd",
                border: "1px solid #b3e5f7",
                borderRadius: 0.5,
                px: 1.2,
                py: 0.3,
              }}>
              <Typography sx={{ fontSize: 11, fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: 0.5 }}>{badge}</Typography>
            </Box>
          )}
        </Box>

        <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.88rem", fontFamily: PRIMARY_FONT, mb: 1.5 }}>
          {description}
        </Typography>

        {material && <Typography sx={{ fontSize: 11, color: "#999", fontFamily: PRIMARY_FONT, letterSpacing: 0.3 }}>{material}</Typography>}
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
          {type ? "VIEW RANGE" : "VIEW PRODUCT"}
        </Button>
        <Button
          variant="outlined"
          fullWidth
          size="small"
          href="mailto:sales@panamvalves.co.uk"
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

export default function ManifoldsIndexPage() {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      <title>Instrumentation Valve Manifolds — 2, 3 & 5 Valve | Panam Valves</title>
      <meta
        name="description"
        content="2-valve, 3-valve and 5-valve instrumentation manifolds in SS316, rated 6000–10000 psi with NACE MR-01-75 options for gauge and differential pressure transmitters."
      />
      <meta name="robots" content="index, follow" />
      {/* ── HERO ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "60vh", md: "75vh" },
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/vm-cover.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: BRAND_BLUE, letterSpacing: 3, fontSize: 11, fontWeight: 700, fontFamily: PRIMARY_FONT }}>
            PANAM® Instrumentation
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 38, md: 68 },
              fontWeight: 900,
              color: "#fff",
              mt: 1,
              mb: 3,
              lineHeight: 1.08,
              maxWidth: 750,
              fontFamily: PRIMARY_FONT,
              letterSpacing: "-0.03em",
            }}>
            Valve Manifolds
            <br />
            <span style={{ color: BRAND_BLUE }}>Built to Perform.</span>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 19 },
              color: "rgba(255,255,255,0.88)",
              maxWidth: 580,
              mb: 5,
              lineHeight: 1.75,
              fontFamily: PRIMARY_FONT,
            }}>
            Three manifold families — 2-Valve, 3-Valve, and 5-Valve — covering the full DP transmitter and gauge pressure range. SS316 construction, tested to 10000 psi (689 bar), with a NACE MR-01-75 sour gas option.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              href="#range"
              sx={{
                bgcolor: BRAND_BLUE,
                color: "#fff",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontFamily: PRIMARY_FONT,
                "&:hover": { bgcolor: "#0090c8" },
              }}>
              Explore Range
            </Button>
            <Button
              component={RouterLink}
              viewTransition
              to="/enquiry"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "rgba(255,255,255,0.5)",
                color: "#fff",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontFamily: PRIMARY_FONT,
                "&:hover": { bgcolor: "rgba(255,255,255,0.08)", borderColor: "#fff" },
              }}>
              Request Quote
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── MARQUEE ── */}
      <Box sx={{ borderBottom: "1px solid #eee", py: 1.5, bgcolor: "#fff", overflow: "hidden", whiteSpace: "nowrap" }}>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "marquee 30s linear infinite",
            "&:hover": { animationPlayState: "paused" },
          }}>
          {[1, 2].map(i => (
            <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {["Tested to 10000 psi (689 bar)", "Stainless Steel 316 construction", "NACE MR-01-75 Sour Gas option", "2-Valve · 3-Valve · 5-Valve families", "NPT · BSPT · BSPP · M20 · Tube connections", "Type A (Angular) configuration", "Power Configuration available on 5VM", "Large Bore · Bleed Valve · Temperature Service options"].map(item => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: "text.secondary",
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    fontFamily: PRIMARY_FONT,
                  }}>
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
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 26, md: 34 },
                fontWeight: 800,
                mb: 3,
                fontFamily: PRIMARY_FONT,
                color: "#1a1a1a",
                letterSpacing: "-0.02em",
              }}>
              One source.
              <br />
              Every manifold you need.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              PANAM® Valve Manifolds cover the full instrumentation and process spectrum — 2-valve, 3-valve, and 5-valve configurations engineered for DP transmitter isolation, equalization, and venting. All three families share the same SS316 construction and 6000 psi standard test rating, with high-pressure 10000 psi variants across the range.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>Every manifold family offers a NACE MR-01-75 sour gas option, multiple drain hole sizes, and a full connection size matrix covering NPT, BSPT, BSPP, M20x1.5, and PANAM® tube fittings.</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ bgcolor: "#f5fbfe", border: "1px solid #d0eef9", p: 4, height: "100%" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2.5,
                  fontSize: 14,
                  fontFamily: PRIMARY_FONT,
                  color: "#1a1a1a",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}>
                Technical Specifications
              </Typography>
              {SPECS.map(spec => (
                <Box
                  key={spec.label}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    py: 1.2,
                    borderBottom: "1px solid #e4f2fa",
                    gap: 2,
                  }}>
                  <Typography sx={{ fontSize: 13, fontWeight: 600, color: "#444", fontFamily: PRIMARY_FONT, flexShrink: 0 }}>{spec.label}</Typography>
                  <Typography sx={{ fontSize: 13, color: "#666", fontFamily: PRIMARY_FONT, textAlign: "right" }}>{spec.value}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 10 }} />

        {/* ── MANIFOLD GRID ── */}
        <Box id="range" sx={{ mb: 10 }}>
          <Typography
            variant="overline"
            sx={{
              color: BRAND_BLUE,
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: 11,
              fontFamily: PRIMARY_FONT,
              display: "block",
              mb: 1,
            }}>
            Product Range
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 26, md: 32 },
              fontWeight: 800,
              mb: 1.5,
              fontFamily: PRIMARY_FONT,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
            }}>
            Three Families. One Standard.
          </Typography>
          <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8 }}>Each manifold family is purpose-built for a specific transmitter type and application. Select by valve count, connection size, or special service requirement.</Typography>
          <Grid container spacing={3}>
            {MANIFOLDS.map(m => (
              <Grid key={m.type ?? m.title} size={{ xs: 12, sm: 6, md: 3 }}>
                <ManifoldCard {...m} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── KEY FEATURES ── */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
            Why specify PANAM® Manifolds
          </Typography>
          <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT }}>All three manifold families are built to the same engineering standard — consistent materials, construction, and test procedures across the entire range.</Typography>
          <Grid container spacing={2}>
            {[
              "Three manifold families from a single trusted manufacturer",
              "Stainless Steel 316 construction across all series",
              "Standard 6000 psi and high-pressure 10000 psi ratings",
              "NACE MR-01-75 sour gas option available",
              "Type A (Angular) configuration throughout",
              "NPT, BSPT, BSPP, M20x1.5, and tube fitting connections",
              "Power Configuration available on 5-Valve (2V–1E–2I)",
              "Large bore (soft seat) option on 3VM and 5VM",
              "Bleed valve and vent with plug options",
              "High and low temperature service available",
              "Multiple drain hole size options per family",
              "Mounting bracket accessories available",
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
            Specify your manifold
          </Typography>
          <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>Send us your valve count, connection size, pressure rating, and any special service requirements. Our technical team responds to instrumentation enquiries within 24 hours.</Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              href="mailto:sales@panamvalves.co.uk"
              sx={{
                bgcolor: BRAND_BLUE,
                color: "#fff",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontFamily: PRIMARY_FONT,
                "&:hover": { bgcolor: "#0090c8" },
              }}>
              Email Technical Sales
            </Button>
            <Button
              component={RouterLink}
              viewTransition
              to="/enquiry"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "#ddd",
                color: "#333",
                borderRadius: 0,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontFamily: PRIMARY_FONT,
                "&:hover": { bgcolor: "#f5fbfe", borderColor: BRAND_BLUE },
              }}>
              Request Quote
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
