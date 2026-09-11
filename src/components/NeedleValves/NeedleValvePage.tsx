import React from "react"
import { Box, Container, Typography, Grid, Divider, Button, Card, CardMedia, CardContent } from "@mui/material"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const LINKS = {
  heroExplore: "#series",
  heroQuote: "/enquiry",
  ctaEmail: "mailto:sales@panamvalves.co.uk",
  ctaQuote: "/enquiry",
}

const NEEDLE_VALVE_SERIES = [
  {
    id: "needle-valve-nv-series-ib",
    title: "IB Series",
    subtitle: "Integral Bonnet",
    description: "Integral Bonnet Needle Valves with working pressures up to 6,000 psig. Available in SS316, Duplex, and Monel with a broad range of end-connection options.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/ib.jpg",
    pressure: "6,000 psig",
    tag: "IB Series",
    link: "/valves/needle-valves/needle-valves-ib",
  },
  {
    id: "sb-series-needle-valves",
    title: "SB Series",
    subtitle: "Heavy-Duty Bar Stock",
    description: "Heavy-duty bar stock construction supporting up to 10,000 psig. Available in Metal and Soft seat options for a wide range of process conditions.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/sb.jpg",
    pressure: "10,000 psig",
    tag: "SB Series",
    link: "/valves/needle-valves/needle-valves-sb",
  },
  {
    id: "hb-series-needle-valves",
    title: "HB Series",
    subtitle: "Block & Bleed",
    description: "High-pressure block and bleed capable valves rated for 10,000 psig. Non-rotating Vee-tip design ensures reliable, repeatable shut-off under severe cycling.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/hb.jpg",
    pressure: "10,000 psig",
    tag: "HB Series",
    link: "/valves/needle-valves/needle-valves-hb",
  },
  {
    id: "hp-series-needle-valves",
    title: "HP Series",
    subtitle: "High Pressure Forged",
    description: "One-piece forged design for extreme-duty applications up to 10,000 psig and temperatures up to 538°C (1000°F) with optional Graphoil packing.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/hp.jpg",
    pressure: "10,000 psig",
    tag: "HP Series",
    link: "/valves/needle-valves/needle-valves-hp",
  },
  {
    id: "mini-series-needle-valves",
    title: "Mini Series",
    subtitle: "Compact Instrumentation",
    description: "Compact needle valves engineered for space-restricted instrumentation applications, rated for 3,000 psig working pressure with full leak-tight performance.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/needle-valves/mini.jpg",
    pressure: "3,000 psig",
    tag: "Mini Series",
    link: "/valves/needle-valves/needle-valves-mini",
  },
]

type SeriesItem = (typeof NEEDLE_VALVE_SERIES)[0]

const SeriesCard: React.FC<SeriesItem> = ({ title, subtitle, description, image, pressure, tag, link }) => (
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
        {tag}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 0.5, fontSize: "1.05rem" }}>
        {title} — {subtitle}
      </Typography>
      <Box sx={{ display: "inline-flex", alignItems: "center", bgcolor: "#e8f7fd", border: "1px solid #b3e5f7", borderRadius: 0.5, px: 1.2, py: 0.3, mb: 2 }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: 0.5 }}>{pressure} MAX</Typography>
      </Box>
      <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.88rem", fontFamily: PRIMARY_FONT }}>
        {description}
      </Typography>
    </CardContent>

    <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
      <Button variant="contained" fullWidth size="small" href={link} sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, fontWeight: 700, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#0090c8" } }}>
        VIEW SERIES
      </Button>
      <Button variant="outlined" fullWidth size="small" href={LINKS.ctaQuote} sx={{ borderColor: "#ddd", color: "#444", borderRadius: 0, fontWeight: 600, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#f5f5f5", borderColor: "#bbb" } }}>
        REQUEST QUOTE
      </Button>
    </Box>
  </Card>
)

export default function NeedleValvesPage() {
  return (
    <>
      <title>PANAM Needle Valves | IB, HB, HP, SB & Mini Series | PANAM®</title>
      <meta name="description" content="PANAM® needle valves in five series — IB, HB, HP, SB and Mini — rated 3,000 to 20,000 psig. SS316, Duplex, Monel, Hastelloy. NACE MR0175 certified. NPT, BSPP, BSPT and tube fitting ends." />
      <meta name="keywords" content="instrumentation needle valves, high pressure needle valves, 20000 psi needle valve, NACE MR0175 needle valve, SS316 needle valve, Duplex needle valve, Hastelloy needle valve, integral bonnet needle valve, block and bleed needle valve, forged needle valve, NPT needle valve" />
      <meta property="og:title" content="Instrumentation Needle Valves | PANAM® IB · HB · HP · SB · Mini Series" />
      <meta property="og:description" content="Five needle valve series rated 3,000–20,000 psig. Non-rotating Vee-tip stem, full heat-code traceability, NACE MR0175 available. SS316, Duplex, Monel and Hastelloy." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.panamvalve.com/valves/needle-valves" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PANAM® Needle Valves",
          description: "PANAM® needle valves in five series — IB, HB, HP, SB and Mini — rated 3,000 to 20,000 psig. SS316, Duplex, Monel, Hastelloy. NACE MR0175 certified.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: NEEDLE_VALVE_SERIES.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${s.title} — ${s.subtitle}`,
              url: `https://www.panamvalve.com${s.link}`,
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/website-media/hero-banners/needle-valves-banner.jpeg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            py: { xs: 8, md: 12 },
          }}>
          <Container maxWidth="lg">
            <Typography variant="overline" sx={{ color: BRAND_BLUE, letterSpacing: 3, fontSize: 11, fontWeight: 700, fontFamily: PRIMARY_FONT }}>
              PANAM® Instrumentation
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: 38, md: 68 }, fontWeight: 900, color: "#fff", mt: 1, mb: 3, lineHeight: 1.08, maxWidth: 750, fontFamily: PRIMARY_FONT, letterSpacing: "-0.03em" }}>
              Needle Valves
              <br />
              <span style={{ color: BRAND_BLUE }}>Built to Hold.</span>
            </Typography>
            <Typography sx={{ fontSize: { xs: 16, md: 19 }, color: "rgba(255,255,255,0.88)", maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>Five proven series — IB, HB, HP, SB, and Mini — delivering leak-tight shut-off from 3,000 to 20,000 psig across the world's most demanding fluid systems.</Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button variant="contained" size="large" href={LINKS.heroExplore} sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
                Explore Series
              </Button>
              <Button variant="outlined" size="large" href={LINKS.heroQuote} sx={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "rgba(255,255,255,0.08)", borderColor: "#fff" } }}>
                Request Quote
              </Button>
            </Box>
          </Container>
        </Box>

        {/* ── MARQUEE ── */}
        <Box sx={{ borderBottom: "1px solid #eee", py: 1.5, bgcolor: "#fff", overflow: "hidden", whiteSpace: "nowrap" }}>
          <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
          <Box sx={{ display: "flex", width: "max-content", animation: "marquee 28s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
            {[1, 2].map(i => (
              <Box key={i} sx={{ display: "flex", gap: 6, pr: 6 }}>
                {["Up to 20,000 psig working pressure", "SS316 · Duplex · Monel · Hastelloy", "NACE MR0175 available on request", "Non-rotating Vee-tip stem — zero leak-by", "Full heat-code material traceability", "NPT · BSPP · BSPT · PANAM® Tube Fitting"].map(item => (
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
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 34 }, fontWeight: 800, mb: 3, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
              Precision metering.
              <br />
              Repeatable shut-off.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              PANAM® Needle Valves are available across multiple series—including IB, HB, HP (20K), HP (60K), SB, and Mini Series—to meet a wide range of pressure and flow‑control requirements. Manufactured in SS316, Duplex, Monel, and Hastelloy using both forged and bar‑stock construction, these valves deliver exceptional corrosion resistance and durability in demanding industrial environments.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              A broad selection of end‑connection options is offered, including male and female NPT, BSPP, BSPT, ISO tapered pipe ends, and PANAM® tube‑fitting connections. The valves support maximum working pressures up to 20,000 psig (1,379 bar) and are available in sizes from 1/8" to 1". Standard PTFE gland packing ensures smooth operation, with optional Graphoil packing for high‑temperature
              service up to 538°C (1000°F).
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>The non‑rotating vee‑tip or ball‑tip stem design provides reliable, repetitive, leak‑tight shut‑off, even under high‑pressure cycling. NACE certification is available upon request, and full heat‑code traceability ensures complete material verification and quality assurance.</Typography>
          </Grid>

          <Divider sx={{ mt: 5, mb: 5 }} />

          {/* ── SERIES GRID ── */}
          <Box id="series" sx={{ mb: 10 }}>
            <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
              Product Series
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
              Five Series. One Standard.
            </Typography>
            <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8 }}>Each series is purpose-built for a specific pressure class and installation requirement — select by working pressure, construction type, or application.</Typography>
            <Grid container spacing={3}>
              {NEEDLE_VALVE_SERIES.map(s => (
                <Grid key={s.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <SeriesCard {...s} />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mb: 10 }} />

          {/* ── KEY FEATURES ── */}
          <Box sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
              Why specify PANAM® Needle Valves
            </Typography>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT }}>Every series is built around the same core engineering principles — non-rotating stem, full traceability, and broad material availability.</Typography>
            <Grid container spacing={2}>
              {[
                "Non-rotating Vee-tip stem eliminates seat scoring",
                "PTFE gland packing standard — Graphoil to 538°C optional",
                "Full heat-code traceability on all components",
                "NACE MR0175 / ISO 15156 certification available",
                "Forged and bar stock construction options",
                "SS316, Duplex, Monel, and Hastelloy materials",
                "NPT, BSPP, BSPT, ISO tapered, and PANAM® tube-fitting ends",
                "Rated from 3,000 to 20,000 psig across series",
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
              Specify your needle valve
            </Typography>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>Send us your pressure rating, material requirement, and end connections. Our technical team responds to instrumentation enquiries within 24 hours.</Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="contained" size="large" href={LINKS.ctaEmail} sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
                Email Technical Sales
              </Button>
              <Button variant="outlined" size="large" href={LINKS.ctaQuote} sx={{ borderColor: "#ddd", color: "#333", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#f5fbfe", borderColor: BRAND_BLUE } }}>
                Request Quote
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
