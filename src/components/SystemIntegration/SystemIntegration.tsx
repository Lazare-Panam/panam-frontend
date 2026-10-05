import { Box, Container, Typography, Divider, Button, Card, CardMedia, CardContent } from "@mui/material"
import Grid from "@mui/material/Grid"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

interface ProductItem {
  title: string
  description: string
  image: string
  href?: string
}

interface ProductGroup {
  category: string
  overline: string
  items: ProductItem[]
}

const PRODUCTS: ProductGroup[] = [
  {
    category: "System Integration",
    overline: "PANAM® System Integration",
    items: [
      {
        title: "Stabilized Connector",
        description: "Precision-engineered connectors designed for stable, secure connections in instrumentation and process control systems.",
        image: "https://pblol2.blob.core.windows.net/panam-images/products/system-integratino/stablized-connector.png",
      },
      {
        title: "Condensate Pots",
        description: "Used to collect and trap condensate in steam or gas lines to protect instruments and ensure accurate measurement.",
        image: "https://pblol2.blob.core.windows.net/panam-images/products/system-integratino/condensate-pots.jpg",
      },
      {
        title: "Grab Sampling System",
        description: "System designed to safely extract representative fluid samples from process lines for laboratory analysis.",
        image: "https://pblol2.blob.core.windows.net/panam-images/products/system-integratino/grab-sampling.jpg",
      },
      {
        title: "Flange Adapter",
        description: "2 and 3-way configurations with floating ball design. Rated up to 10,000 psig with anti-blowout stem safety.",
        image: "https://pblol2.blob.core.windows.net/panam-images/products/system-integratino/flange-adaptors.jpg",
      },
    ],
  },
  {
    category: "Pressure Transmitters",
    overline: "PANAM® Pressure Instrumentation",
    items: [
      {
        title: "Pressure Transmitter",
        description: "High-accuracy pressure transmitters for process measurement and monitoring across oil & gas, petrochemical, and utility applications.",
        image: "https://pblol2.blob.core.windows.net/panam-images/products/pressure-transmitter/pt-1.jpg",
      },
      {
        title: "Differential Pressure Transmitter",
        description: "Smart differential pressure transmitters for flow, level, and pressure measurement in demanding process environments.",
        image: "https://pblol2.blob.core.windows.net/panam-images/products/pressure-transmitter/dpt-1.jpg",
      },
      {
        title: "Diaphragm Seal",
        description: "Diaphragm seals for isolating pressure instruments from aggressive, viscous, or crystallising process media.",
        image: "https://pblol2.blob.core.windows.net/panam-images/products/pressure-transmitter/pt-2.jpg",
      },
    ],
  },
]

export default function SystemIntegrationIndexPage() {
  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "50vh", md: "60vh" },
          display: "flex",
          alignItems: "center",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url("https://pblol2.blob.core.windows.net/panam-images/website-media/transmitter-thumbnail.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: BRAND_BLUE, letterSpacing: 3, fontSize: 11, fontWeight: 700, fontFamily: PRIMARY_FONT }}>
            PANAM® Instrumentation
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 38, md: 64 }, fontWeight: 900, color: "#fff", mt: 1, mb: 3, lineHeight: 1.08, maxWidth: 750, fontFamily: PRIMARY_FONT, letterSpacing: "-0.03em" }}>
            System Integration &amp;
            <br />
            <span style={{ color: BRAND_BLUE }}>Pressure Instrumentation.</span>
          </Typography>
          <Typography sx={{ fontSize: { xs: 16, md: 19 }, color: "rgba(255,255,255,0.85)", maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>Air headers, condensate pots, grab sampling systems, flange adapters, pressure transmitters, differential pressure transmitters, and diaphragm seals — all available to enquire directly.</Typography>
          <Button variant="contained" size="large" href="/enquiry" sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
            Make an Enquiry
          </Button>
        </Container>
      </Box>

      {/* ── MARQUEE ── */}
      <Box sx={{ borderBottom: "1px solid #eee", py: 1.5, bgcolor: "#fff", overflow: "hidden", whiteSpace: "nowrap" }}>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        <Box sx={{ display: "flex", width: "max-content", animation: "marquee 30s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
          {[1, 2].map(i => (
            <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
              {["Air Headers", "Condensate Pots", "Grab Sampling Systems", "Flange Adapters", "Pressure Transmitters", "Differential Pressure Transmitters", "Diaphragm Seals", "Oil & Gas · Petrochemical · Offshore"].map(item => (
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
        {PRODUCTS.map((group, gi) => (
          <Box key={group.category} sx={{ mb: 10 }}>
            <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
              {group.overline}
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 6, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
              {group.category}
            </Typography>

            <Grid container spacing={3}>
              {group.items.map(product => (
                <Grid key={product.title} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Card
                    variant="outlined"
                    {...(product.href ? { component: "a", href: product.href } : {})}
                    sx={{
                      borderRadius: 0,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: "1px solid #e8e8e8",
                      transition: "box-shadow 0.2s",
                      textDecoration: "none",
                      cursor: product.href ? "pointer" : "default",
                      "&:hover": { boxShadow: product.href ? "0 4px 24px rgba(1,176,240,0.18)" : "0 4px 24px rgba(1,176,240,0.10)" },
                    }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#ffffff", p: 3, borderBottom: "1px solid #f0f0f0", minHeight: 200 }}>
                      <CardMedia component="img" image={product.image} alt={product.title} sx={{ width: "100%", maxWidth: 180, height: 160, objectFit: "contain" }} />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2, fontSize: 10, fontFamily: PRIMARY_FONT }}>
                        {group.overline}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 1.5, fontSize: "1rem", lineHeight: 1.3 }}>
                        {product.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.85rem", fontFamily: PRIMARY_FONT }}>
                        {product.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2, pt: 0, display: "flex", flexDirection: "column", gap: 1 }}>
                      <Button variant="contained" fullWidth size="small" href={product.href ?? "/enquiry"} onClick={e => e.stopPropagation()} sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, fontWeight: 700, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#0090c8" } }}>
                        {product.href ? "VIEW PRODUCT" : "ENQUIRE NOW"}
                      </Button>
                      <Button variant="outlined" fullWidth size="small" href="mailto:sales@panamvalves.co.uk" onClick={e => e.stopPropagation()} sx={{ borderColor: "#ddd", color: "#444", borderRadius: 0, fontWeight: 600, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#f5f5f5", borderColor: "#bbb" } }}>
                        EMAIL SALES
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {gi < PRODUCTS.length - 1 && <Divider sx={{ mt: 10 }} />}
          </Box>
        ))}

        {/* ── CTA ── */}
        <Divider sx={{ mb: 10 }} />
        <Box sx={{ textAlign: "center", py: 6 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
            Need a custom solution?
          </Typography>
          <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>Our engineering team can design and supply complete instrumentation systems to your specification. Get in touch and we'll respond within 24 hours.</Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="contained" size="large" href="/enquiry" sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
              Make an Enquiry
            </Button>
            <Button variant="outlined" size="large" href="mailto:sales@panamvalves.co.uk" sx={{ borderColor: "#ddd", color: "#333", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#f5fbfe", borderColor: BRAND_BLUE } }}>
              Email Technical Sales
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
