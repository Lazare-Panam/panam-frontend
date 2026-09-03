import React from "react"
import { Box, Container, Typography, Divider, Button, Card, CardMedia, CardContent } from "@mui/material"
import Grid from "@mui/material/Grid"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const PRODUCTS = [
  {
    title: "Connectors",
    description: 'Male and Female Connectors in SS 316. MP and HP Cone & Thread female to Male NPT, Female NPT, MP Cone Male, and HP Cone Male. Pressures from 10,000 to 60,000 psi across tube ODs from 1/4" to 1".',
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/PMC-4MF-4N-SS.jpg",
    pressure: "10,000 – 60,000 psi",
    link: "/high-pressure/fittings/connectors",
  },
  {
    title: "Unions",
    description: 'Unions, Reducing Unions and Bulkhead Unions in SS 316. Medium Pressure Female at 20,000 psi and High Pressure Female at 60,000 psi. Sizes from 1/4" to 1".',
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-union.png",
    pressure: "20,000 – 60,000 psi",
    link: "/high-pressure/fittings/unions",
  },
  {
    title: "Adapters & Reducers",
    description: "Reducers, Female Adapters, Male Adapters and Adapters in SS 316. Medium and High Pressure tube and cone thread connections to NPT. Pressures from 10,000 to 60,000 psi.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-adaptor.jpg",
    pressure: "10,000 – 60,000 psi",
    link: "/high-pressure/fittings/adaptors",
  },
  {
    title: "Elbows, Tees, Crosses & Hex Nipples",
    description: "Elbows, Tees, Crosses and Hex Nipples in SS 316. Medium Pressure Female at 20,000 psi and High Pressure Female at 60,000 psi. Hex Nipples in MP and HP Male combinations from 10,000 to 60,000 psi.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-elbow.png",
    pressure: "10,000 – 60,000 psi",
    link: "/high-pressure/fittings/elbows-tees-cross",
  },
  {
    title: "Caps & Plugs",
    description: "Caps and Plugs in SS 316. Caps in Medium Pressure Female at 20,000 psi and High Pressure Female at 60,000 psi. Plugs in Medium Pressure Male at 20,000 psi and High Pressure Male at 60,000 psi.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-cap.png",
    pressure: "20,000 – 60,000 psi",
    link: "/high-pressure/fittings/end-connections",
  },
  {
    title: "Seals & Glands",
    description: 'Anti-Vibration Glands, Glands and Collars in SS 316. Medium Pressure at 20,000 psi and High Pressure at 60,000 psi. Sizes from 1/4" to 1".',
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-glands.png",
    pressure: "20,000 – 60,000 psi",
    link: "/high-pressure/fittings/seals-glads",
  },
]

const SPECS = [
  { label: "Pressure Range", value: "10,000 – 60,000 psi" },
  { label: "Material", value: "SS 316" },
  { label: "Connection Types", value: "NPT · MP Cone & Thread · HP Cone & Thread" },
  { label: "Products", value: "Connectors · Unions · Adapters · Elbows · Tees · Crosses · Hex Nipples · Caps · Plugs · Glands" },
  { label: "Sizes", value: '1/4" · 3/8" · 9/16" · 3/4" · 1"' },
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
      <CardMedia component="img" image={image} alt={title} sx={{ width: "100%", maxWidth: 200, height: 180, objectFit: "contain" }} />
    </Box>
    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2, fontSize: 10, fontFamily: PRIMARY_FONT }}>
        PANAM® HP Fittings
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 1, fontSize: "1.05rem" }}>
        {title}
      </Typography>
      <Box sx={{ display: "inline-flex", alignItems: "center", bgcolor: "#e8f7fd", border: "1px solid #b3e5f7", borderRadius: 0.5, px: 1.2, py: 0.3, mb: 2 }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: 0.5 }}>{pressure}</Typography>
      </Box>
      <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.88rem", fontFamily: PRIMARY_FONT }}>
        {description}
      </Typography>
    </CardContent>
    <Box sx={{ p: 2, pt: 0, display: "flex", flexDirection: "column", gap: 1 }}>
      <Button variant="contained" fullWidth size="small" href={link} sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, fontWeight: 700, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#0090c8" } }}>
        VIEW RANGE
      </Button>
      <Button variant="outlined" fullWidth size="small" href="mailto:sales@panamvalves.co.uk" sx={{ borderColor: "#ddd", color: "#444", borderRadius: 0, fontWeight: 600, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#f5f5f5", borderColor: "#bbb" } }}>
        REQUEST QUOTE
      </Button>
    </Box>
  </Card>
)

export default function HPFittingsIndexPage() {
  return (
    <>
      <title>PANAM® HP Cone & Thread Fittings | 10,000 – 60,000 psi | SS 316</title>
      <meta name="description" content="Panam high pressure cone and thread fittings in SS 316 — connectors, unions, adapters, elbows, tees, crosses, hex nipples, caps, plugs, glands and collars. 10,000 to 60,000 psi." />
      <meta name="keywords" content="high pressure fittings, cone and thread fittings, HP connectors, HP unions, HP adapters, HP elbows, HP tees, HP crosses, hex nipples, SS316 fittings, 60000 psi fittings" />
      <meta property="og:title" content="PANAM® HP Cone & Thread Fittings | 10,000 – 60,000 psi" />
      <meta property="og:description" content="Six categories of high pressure cone and thread fittings in SS 316. Connectors, unions, adapters, elbows, tees, crosses, hex nipples, caps, plugs, glands and collars from 10,000 to 60,000 psi." />
      <meta property="og:type" content="website" />

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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/products/high-pressure-fittings/hp-fitting-hero.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            py: { xs: 8, md: 12 },
          }}>
          <Container maxWidth="lg">
            <Typography variant="overline" sx={{ color: BRAND_BLUE, letterSpacing: 3, fontSize: 11, fontWeight: 700, fontFamily: PRIMARY_FONT }}>
              PANAM® HP Cone & Thread Fittings
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: 38, md: 68 }, fontWeight: 900, color: "#fff", mt: 1, mb: 3, lineHeight: 1.08, maxWidth: 750, fontFamily: PRIMARY_FONT, letterSpacing: "-0.03em" }}>
              HP Cone & Thread Fittings
              <br />
              <span style={{ color: BRAND_BLUE }}>Engineered to Hold.</span>
            </Typography>
            <Typography sx={{ fontSize: { xs: 16, md: 19 }, color: "rgba(255,255,255,0.88)", maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>Six categories of high pressure fittings — connectors, unions, adapters, elbows, tees, crosses, hex nipples, caps, plugs, glands and collars — all in SS 316 from 10,000 to 60,000 psi.</Typography>
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
          <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
          <Box sx={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
            {[1, 2].map(i => (
              <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
                {["10,000 – 60,000 psi", "SS 316 construction", "MP Cone & Thread · HP Cone & Thread", "Connectors · Unions · Adapters · Elbows · Tees", "Crosses · Hex Nipples · Caps · Plugs · Glands", '1/4" to 1" tube OD'].map(item => (
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
                One system.
                <br />
                Every HP fitting you need.
              </Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>Panam HP Cone & Thread Fittings cover six categories — connectors, unions, adapters, elbows, tees, crosses, hex nipples, caps, plugs, glands and collars. All manufactured in SS 316 with Medium Pressure and High Pressure Cone & Thread connections.</Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>Pressures from 10,000 to 60,000 psi across tube ODs from 1/4" to 1". Medium Pressure Female connections at 20,000 psi and High Pressure Female at 60,000 psi — the same engineering standard applied consistently across every category.</Typography>
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
              Product Categories
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
              Six Categories. One Standard.
            </Typography>
            <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8 }}>Each category is purpose-built for its connection type and pressure class. Select by fitting function, pressure rating, or tube OD.</Typography>
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
              Why specify PANAM® HP Cone & Thread Fittings
            </Typography>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT }}>All six categories are built to the same engineering standard — consistent materials, connection geometry, and pressure ratings across every fitting type.</Typography>
            <Grid container spacing={2}>
              {[
                "SS 316 construction across all categories",
                "10,000 to 60,000 psi pressure coverage",
                "Medium Pressure Female at 20,000 psi",
                "High Pressure Female at 60,000 psi",
                '1/4" to 1" tube OD across the range',
                "Connectors in Male and Female NPT, MP and HP Male",
                "Unions in straight, reducing, and bulkhead styles",
                "Adapters for tube-to-NPT and tube-to-cone connections",
                "Elbows, Tees and Crosses for directional routing",
                "Hex Nipples in MP/HP Male to NPT combinations",
                "Caps and Plugs for line termination",
                "Glands, Collars and Anti-Vibration Glands for sealing",
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
              Specify your HP fitting
            </Typography>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>Need a specific pressure rating, connection type, or tube OD? Our technical team responds to HP fitting enquiries within 24 hours.</Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="contained" size="large" href="mailto:sales@panamvalves.co.uk" sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
                Email Technical Sales
              </Button>
              <Button variant="outlined" size="large" href="/enquiry" sx={{ borderColor: "#ddd", color: "#333", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#f5fbfe", borderColor: BRAND_BLUE } }}>
                Request Quote
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
