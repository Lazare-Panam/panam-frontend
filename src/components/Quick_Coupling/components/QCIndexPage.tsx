import { Box, Container, Typography, Divider, Button, Card, CardMedia, CardContent } from "@mui/material"
import Grid from "@mui/material/Grid"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const SPECS = [
  { label: "Series", value: "ISO-A · ISO 16028 · ISO 7241A · ISO 7241B · ISO 5675 · Screw Type" },
  { label: "Body Material", value: "Carbon Steel" },
  { label: "Thread Standards", value: "BSPP · NPT" },
  { label: "Connection Sizes", value: '1/4" · 3/8" · 1/2" · 3/4" · 1"' },
  { label: "Configurations", value: "Socket · Plug · Set" },
  { label: "Total Configurations", value: "100+" },
]

export default function QuickCouplingIndexPage() {
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/qc-hero.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          py: { xs: 8, md: 12 },
        }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: BRAND_BLUE, letterSpacing: 3, fontSize: 11, fontWeight: 700, fontFamily: PRIMARY_FONT }}>
            PANAM® Hydraulics
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: 38, md: 68 }, fontWeight: 900, color: "#fff", mt: 1, mb: 3, lineHeight: 1.08, maxWidth: 750, fontFamily: PRIMARY_FONT, letterSpacing: "-0.03em" }}>
            Quick Couplings &amp; Tubing
            <br />
            <span style={{ color: BRAND_BLUE }}>Built to Perform.</span>
          </Typography>
          <Typography sx={{ fontSize: { xs: 16, md: 19 }, color: "rgba(255,255,255,0.88)", maxWidth: 580, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>
            Six coupling series and seamless tubing in 12 materials — everything you need for hydraulic connections and instrumentation tubing from a single source.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button variant="contained" size="large" href="#range"
              sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
              Browse Range
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
                "ISO-A · ISO 16028 · ISO 7241A · ISO 7241B · ISO 5675 · Screw Type",
                "Carbon Steel construction",
                "BSPP & NPT thread standards",
                '1/4" to 1" connection sizes',
                "Socket · Plug · Set configurations",
                "Seamless Tubing — Imperial & Metric",
                "SS 316 · Monel · Duplex · Inconel · 6Mo · Hastelloy",
                "900+ tubing configurations",
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
              Couplings and tubing.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              PANAM® Quick Couplings and Seamless Tubing cover the full hydraulic connection and instrumentation tubing spectrum. Six coupling series — ISO-A, ISO 16028, ISO 7241A, ISO 7241B, ISO 5675, and Screw Type — plus seamless tubing in 12 materials across imperial and metric sizes.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>
              Socket and Plug configurations on ISO-A, ISO 16028, and Screw Type. ISO 7241A, ISO 7241B, and ISO 5675 as matched Sets. Tubing available in Standard and High Pressure ratings from 1/16" to 2" imperial and 3mm to 12mm metric.
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

        {/* ── PRODUCT RANGE ── */}
        <Box id="range" sx={{ mb: 10 }}>
          <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
            Product Range
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
            Two Ranges. One Source.
          </Typography>
          <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8 }}>
            Quick couplings filterable by ISO standard, thread type, connection size, and configuration. Tubing filterable by material, OD, wall thickness, and pressure rating.
          </Typography>

          {/* ── CARDS ── */}
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>

            {/* QC Card */}
            <Box sx={{ maxWidth: 360, flex: "1 1 300px" }}>
              <Card variant="outlined" sx={{ borderRadius: 0, height: "100%", display: "flex", flexDirection: "column", border: "1px solid #e8e8e8", transition: "box-shadow 0.2s", "&:hover": { boxShadow: "0 4px 24px rgba(1,176,240,0.10)" } }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#ffffff", p: 3, borderBottom: "1px solid #f0f0f0", minHeight: 220 }}>
                  <CardMedia component="img"
                    image="https://pblol2.blob.core.windows.net/panam-images/products/quick-coupling/iso-a"
                    alt="Quick Couplings"
                    sx={{ width: "100%", maxWidth: 200, height: 180, objectFit: "contain" }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2, fontSize: 10, fontFamily: PRIMARY_FONT }}>
                    PANAM® Quick Couplings
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 1, fontSize: "1.05rem" }}>
                    Quick Couplings — Full Range
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                    {["ISO-A", "ISO 16028", "ISO 7241A", "ISO 7241B", "ISO 5675", "Screw Type"].map(s => (
                      <Box key={s} sx={{ display: "inline-flex", alignItems: "center", bgcolor: "#e8f7fd", border: "1px solid #b3e5f7", borderRadius: 0.5, px: 1.2, py: 0.3 }}>
                        <Typography sx={{ fontSize: 10, fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>{s}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.88rem", fontFamily: PRIMARY_FONT, mb: 1.5 }}>
                    All six ISO series in a single filterable range. Carbon Steel, BSPP & NPT, 1/4" to 1". Socket, Plug and Set configurations across 100+ combinations.
                  </Typography>
                  <Typography sx={{ fontSize: 11, color: "#999", fontFamily: PRIMARY_FONT }}>Carbon Steel · BSPP & NPT · Socket · Plug · Set</Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0, display: "flex", flexDirection: "column", gap: 1 }}>
                  <Button variant="contained" fullWidth size="small" href="/quick-coupling-and-tubing/quick-coupling"
                    sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, fontWeight: 700, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#0090c8" } }}>
                    VIEW RANGE
                  </Button>
                  <Button variant="outlined" fullWidth size="small" href="mailto:sales@panamvalves.com"
                    sx={{ borderColor: "#ddd", color: "#444", borderRadius: 0, fontWeight: 600, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#f5f5f5", borderColor: "#bbb" } }}>
                    REQUEST QUOTE
                  </Button>
                </Box>
              </Card>
            </Box>

            {/* Tubing Card */}
            <Box sx={{ maxWidth: 360, flex: "1 1 300px" }}>
              <Card variant="outlined" sx={{ borderRadius: 0, height: "100%", display: "flex", flexDirection: "column", border: "1px solid #e8e8e8", transition: "box-shadow 0.2s", "&:hover": { boxShadow: "0 4px 24px rgba(1,176,240,0.10)" } }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "#ffffff", p: 3, borderBottom: "1px solid #f0f0f0", minHeight: 220 }}>
                  <CardMedia component="img"
                    image="https://pblol2.blob.core.windows.net/panam-images/products/tubing/tubing-1.jpg"
                    alt="Seamless Tubing"
                    sx={{ width: "100%", maxWidth: 200, height: 180, objectFit: "contain" }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2, fontSize: 10, fontFamily: PRIMARY_FONT }}>
                    PANAM® Tubing
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 1, fontSize: "1.05rem" }}>
                    Seamless Tubing — Full Range
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                    {["Standard", "High Pressure", "Imperial", "Metric"].map(s => (
                      <Box key={s} sx={{ display: "inline-flex", alignItems: "center", bgcolor: "#e8f7fd", border: "1px solid #b3e5f7", borderRadius: 0.5, px: 1.2, py: 0.3 }}>
                        <Typography sx={{ fontSize: 10, fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>{s}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.88rem", fontFamily: PRIMARY_FONT, mb: 1.5 }}>
                    Seamless tubing in SS 316, Monel, Duplex, Inconel, 6Mo and Hastelloy. Imperial 1/16" to 2" and metric 3mm to 12mm. Standard and high-pressure ratings across 900+ configurations.
                  </Typography>
                  <Typography sx={{ fontSize: 11, color: "#999", fontFamily: PRIMARY_FONT }}>SS 316 · Monel · Duplex · Inconel · 6Mo · Hastelloy</Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0, display: "flex", flexDirection: "column", gap: 1 }}>
                  <Button variant="contained" fullWidth size="small" href="/quick-coupling-and-tubing/tubing"
                    sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, fontWeight: 700, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#0090c8" } }}>
                    VIEW RANGE
                  </Button>
                  <Button variant="outlined" fullWidth size="small" href="mailto:sales@panamvalves.com"
                    sx={{ borderColor: "#ddd", color: "#444", borderRadius: 0, fontWeight: 600, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#f5f5f5", borderColor: "#bbb" } }}>
                    REQUEST QUOTE
                  </Button>
                </Box>
              </Card>
            </Box>

          </Box>
        </Box>

        <Divider sx={{ mb: 10 }} />

        {/* ── KEY FEATURES ── */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
            Why specify PANAM® Quick Couplings &amp; Tubing
          </Typography>
          <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT }}>
            All products are built to international standards — consistent quality and construction across the entire range.
          </Typography>
          <Grid container spacing={2}>
            {[
              "Six ISO coupling series from a single manufacturer",
              "Carbon Steel couplings across all series",
              "BSPP and NPT thread standards throughout",
              '1/4" to 1" coupling sizes across all series',
              "Socket and Plug on ISO-A, ISO 16028 and Screw Type",
              "Matched Sets on ISO 7241A, 7241B and 5675",
              "Seamless tubing in 12 materials",
              "Imperial 1/16\" to 2\" and metric 3mm to 12mm",
              "Standard and High Pressure tubing ratings",
              "Fully compatible with Panam twin-ferrule fittings",
              "ISO 5675 for agricultural tractor hydraulics",
              "Screw Type for vibration-resistant high-pressure lines",
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
            Specify your product
          </Typography>
          <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>
            Need a specific ISO series, thread standard, material, or pressure rating? Our technical team responds within 24 hours.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="contained" size="large" href="mailto:sales@panamvalves.com"
              sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
              Email Technical Sales
            </Button>
            <Button variant="outlined" size="large" href="/contact"
              sx={{ borderColor: "#ddd", color: "#333", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#f5fbfe", borderColor: BRAND_BLUE } }}>
              Request Quote
            </Button>
          </Box>
        </Box>

      </Container>
    </Box>
  )
}