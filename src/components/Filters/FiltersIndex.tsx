
import React from "react"
import { Box, Container, Typography, Divider, Button, Card, CardMedia, CardContent } from "@mui/material"
import Grid from "@mui/material/Grid"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const FILTER_ROUTES: Record<string, string> = {
  "ptf": "/filters/t-type",
  "pif": "/filters/i-type",
}

const FILTERS = [
  {
    type: "ptf",
    title: "T-Type In-Line Filters",
    description: "T-type configuration for high-pressure instrumentation, process, and analytical applications. Stainless steel 316 construction with sintered or mesh elements across the full pore size range. Series TA, TB, TC, TD, and IB covering 3mm to 12mm tube and 1/8\" to 1/2\" thread sizes.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/filters/PTF-TB-04-15-SS_JPG-removebg-preview.png",
    pressure: "1000 psi",
    size: "3mm – 12mm tube · 1/8\" – 1/2\" thread",
    materials: "SS316 · Sintered & Mesh Elements",
  },
  {
    type: "pif",
    title: "In-Line Filters",
    description: "In-line configuration for high-pressure instrumentation, process, and analytical applications. Stainless steel 316 construction with sintered or mesh elements across the full pore size range. Series IA, IB, IC, and ID covering 3mm to 12mm tube and 1/8\" to 1/2\" thread sizes.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/filters/PIF-IA-02-2-SS_-_JPG-removebg-preview.png",
    pressure: "1000 psi",
    size: "3mm – 12mm tube · 1/8\" – 1/2\" thread",
    materials: "SS316 · Sintered & Mesh Elements",
  },
]

const SPECS = [
  { label: "Max Working Pressure", value: "1000 psi (69 bar)" },
  { label: "Pore Size Range", value: "0.5 μm to 440 μm" },
  { label: "Size Range", value: "3mm – 12mm tube · 1/8\" – 1/2\" thread" },
  { label: "Material", value: "Stainless Steel 316" },
  { label: "Element Types", value: "Sintered & Mesh" },
  { label: "Configurations", value: "624+ configurations across 2 series" },
  { label: "Series", value: "PTF (T-Type) · PIF (In-Line)" },
]

type FilterItem = (typeof FILTERS)[0]

const FilterCard: React.FC<FilterItem> = ({ type, title, description, image, pressure, size, materials }) => {
  const href = FILTER_ROUTES[type] ?? `/products/filters/${type}`

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
          PANAM® Filters
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

export default function FiltersIndexPage() {
  return (
    <>
          <title>Instrumentation Filters | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® Instrumentation Filters — T-Type and In-Line configurations, SS316, sintered and mesh elements 0.5 to 440 micron, tested to 1000 psi. 3mm to 12mm tube, 1/8 to 1/2 inch thread. 624+ configurations. Request a quote." />
      <meta name="keywords" content="instrumentation filters, inline filters, T-type filters, SS316 filters, sintered filter elements, high pressure filters, PTF PIF filters" />
      <meta property="og:title" content="Instrumentation Filters | PANAM® Instrumentation" />
      <meta property="og:description" content="Two filter families, one standard. PANAM® T-Type and In-Line Filters in SS316, 0.5 to 440 micron, tested to 1000 psi." />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/filters/filters-hero.jpg" />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/products/filters/filters-hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: BRAND_BLUE, letterSpacing: 3, fontSize: 11, fontWeight: 700, fontFamily: PRIMARY_FONT }}>
            PANAM® Instrumentation
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 38, md: 68 }, fontWeight: 900, color: "#fff", mt: 1, mb: 3, lineHeight: 1.08, maxWidth: 750, fontFamily: PRIMARY_FONT, letterSpacing: "-0.03em" }}>
            Filters
            <br />
            <span style={{ color: BRAND_BLUE }}>Built to Last.</span>
          </Typography>
          <Typography sx={{ fontSize: { xs: 16, md: 19 }, color: "rgba(255,255,255,0.88)", maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>
            Two filter families — T-Type and In-Line — covering the full instrumentation tube and pipe range. Sintered and mesh elements from 0.5μm to 440μm. SS316 construction, tested to 1000 psi (69 bar).
          </Typography>
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
              {["Tested to 1000 psi (69 bar)", "Stainless Steel 316 construction", "Sintered & mesh filter elements", "0.5 μm to 440 μm pore size", "T-Type and In-Line configurations", "3mm to 12mm tube · 1/8\" to 1/2\" thread", "624+ configurations across 2 series", "High-pressure instrumentation & process filtration"].map(item => (
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
              Every filter you need.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              PANAM® Filters cover the full instrumentation and process spectrum — T-Type and In-Line configurations engineered for clean, regulated filtration. Both series share the same SS316 construction, sintered and mesh element options, and 1000 psi test standard.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>
              All filter series are available with sintered or mesh elements from 0.5μm to 440μm, covering 3mm to 12mm tube and 1/8\" to 1/2\" thread sizes with 624+ configurations across the range.
            </Typography>
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

        {/* ── FILTER GRID ── */}
        <Box id="range" sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
            Product Range
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Two Families. One Standard.
          </Typography>
          <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8 }}>
            Each filter series is purpose-built for a specific configuration and application. Select by connection type, pore size, or tube range.
          </Typography>
          <Grid container spacing={3}>
            {FILTERS.map(f => (
              <Grid key={f.type} size={{ xs: 12, sm: 6, md: 4 }}>
                <FilterCard {...f} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── KEY FEATURES ── */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
            Why specify PANAM® Filters
          </Typography>
          <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT }}>
            Both filter families are built to the same engineering standard — consistent materials, construction, and test procedures across the entire range.
          </Typography>
          <Grid container spacing={2}>
            {[
              "Two filter families from a single trusted manufacturer",
              "Stainless Steel 316 construction across all series",
              "Sintered and mesh elements from 0.5μm to 440μm",
              "Tested to 1000 psi (69 bar)",
              "T-Type and In-Line configurations available",
              "3mm to 12mm tube and 1/8\" to 1/2\" thread sizes",
              "624+ configurations across PTF and PIF series",
              "Suitable for instrumentation, process, and analytical applications",
              "Series TA, TB, TC, TD, IB, IA, IC, and ID covered",
              "High-pressure performance for demanding fluid systems",
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
            Specify your filter
          </Typography>
          <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>
            Send us your pore size requirement, tube size, and connection type. Our technical team responds to instrumentation enquiries within 24 hours.
          </Typography>
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
    </Box></>

  )
}
