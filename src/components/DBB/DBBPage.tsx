import React from "react"
import { Box, Container, Typography, Divider, Button, Card, CardMedia, CardContent } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Link as RouterLink } from "react-router-dom"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const DBB_PRODUCTS = [
  {
    type: "fxp",
    title: "DBB — Flange to Pipe",
    description:
      "Double Block & Bleed valves with Flange-to-Pipe construction for primary instrument isolation, pressure transmitter mounting, and process bleed applications. Available in Integral (one-piece body) and Three Piece (serviceable) configurations. ANSI 150 to 2500 Class, Ball-Needle-Ball, Ball-Ball-Ball, Needle-Needle-Needle, and Ball-Needle internals. Full NACE MR-0175 and fire-safe options.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB_fxp.jpg",
    pressure: "ANSI 150 – 2500 Class",
    connection: "Flange to Pipe · Integral & Three Piece",
    material: "SS316 · NACE / Fire Safe Options",
    tag: "Connection Types 1 & 3",
    href: "/double-block-and-bleed-valves/flange-to-pipe",
  },
  {
    type: "fxf",
    title: "DBB — Flange to Flange",
    description: "Double Block & Bleed valves with Flange-to-Flange construction for inline isolation and DP transmitter applications. Available in Integral and Three Piece configurations. ANSI 150 to 2500 Class plus PN series, covering RF, RTJ, and BS flange faces. Full range of ball, needle, and combination internals with NACE MR-0175, fire-safe, and gear-operated options.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB_fxf.jpg",
    pressure: "ANSI 150 – 2500 · PN6 – PN250",
    connection: "Flange to Flange · Integral & Three Piece",
    material: "SS316 · RF / RTJ / BS · NACE Options",
    tag: "Connection Types 2 & 4",
    href: "/double-block-and-bleed-valves/flange-to-flange",
  }, //aded
  {
    type: "pxp",
    title: "DBB — Pipe to Pipe",
    description: "Double Block & Bleed valves with threaded Pipe-to-Pipe construction for compact instrument isolation and process bleed. Available in NPT, BSPP, and BSPT thread forms across a full range of bore sizes. Ball-Needle-Ball, Ball-Ball-Ball, Needle-Needle-Needle, and Ball-Needle configurations. NACE MR-0175 sour gas and fire-safe options available.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB-pxp.jpg",
    pressure: "Up to 15,000 psig · NPT / BSPP / BSPT",
    connection: "Pipe to Pipe · Compact Body",
    material: "SS316 · NACE / Fire Safe Options",
    tag: "Connection Type 6",
    href: "/double-block-and-bleed-valves/pipe-to-pipe",
  },
]

const SPECS = [
  { label: "Connection Types", value: "Flange-to-Pipe · Flange-to-Flange · Pipe-to-Pipe" },
  { label: "Construction", value: "Integral (One-Piece) · Three Piece (Serviceable)" },
  { label: "Pressure Ratings", value: "ANSI 150 – 2500 · PN6 – PN250 · Threaded" },
  { label: "Flange Faces", value: "RF · RTJ · BS" },
  { label: "Material", value: "Stainless Steel 316" },
  { label: "Configurations", value: "Ball-Needle-Ball · Ball-Ball-Ball · Needle-Needle-Needle · Ball-Needle" },
  { label: "Seat Materials", value: "Carbon Filled PTFE · PCTFE · Delrin · PEEK" },
  { label: "Seal Materials", value: "PTFE · Grafoil · PCTFE · FKM" },
  { label: "Special Service", value: "NACE MR0175 · Fire Safe (API 607 / API 6FA) · Gear Operated" },
]

type DBBItem = (typeof DBB_PRODUCTS)[0]

const DBBCard: React.FC<DBBItem> = ({ title, description, image, pressure, material, tag, href }) => (
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
        PANAM® DBB Valves
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 1, fontSize: "1.05rem" }}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
        <Box sx={{ display: "inline-flex", alignItems: "center", bgcolor: "#e8f7fd", border: "1px solid #b3e5f7", borderRadius: 0.5, px: 1.2, py: 0.3 }}>
          <Typography sx={{ fontSize: 11, fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: 0.5 }}>{pressure}</Typography>
        </Box>
        <Box sx={{ display: "inline-flex", alignItems: "center", bgcolor: "#f5f5f5", border: "1px solid #e0e0e0", borderRadius: 0.5, px: 1.2, py: 0.3 }}>
          <Typography sx={{ fontSize: 11, fontWeight: 600, color: "#555", fontFamily: PRIMARY_FONT }}>{tag}</Typography>
        </Box>
      </Box>

      <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.88rem", fontFamily: PRIMARY_FONT, mb: 1.5 }}>
        {description}
      </Typography>

      <Typography sx={{ fontSize: 11, color: "#999", fontFamily: PRIMARY_FONT, letterSpacing: 0.3 }}>{material}</Typography>
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

export default function DBBIndexPage() {
  return (
    <>
      <title>Double Block & Bleed Valves | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® DBB Valves — Flange-to-Pipe, Flange-to-Flange, and Pipe-to-Pipe. SS316, ASME Class 150–2500 to 6,000 psi, pipe-to-pipe to 15,000 psig, NACE MR0175 and API 607 fire-safe options." />
      <meta name="keywords" content="double block bleed valve, DBB valve, instrument isolation valve, NACE valve, SS316 valve" />
      <meta property="og:title" content="Double Block & Bleed Valves | PANAM® Instrumentation" />
      <meta property="og:description" content="Three connection families. One standard. PANAM® DBB Valves for primary isolation, transmitter mounting, and process bleed." />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/DBB/dbb-cover.jpg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.panamvalve.com/double-block-and-bleed-valves" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PANAM® Double Block & Bleed Valves",
          description: "Double Block & Bleed valves in Flange-to-Pipe, Flange-to-Flange, and Pipe-to-Pipe connection types. SS316, ASME Class 150–2500 to 6,000 psi, pipe-to-pipe to 15,000 psig, NACE MR0175 and API 607 fire-safe options.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: DBB_PRODUCTS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: `https://www.panamvalve.com${p.href}`,
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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)), url("https://pblol2.blob.core.windows.net/panam-images/products/DBB/dbb-cover.jpg")`,
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
              Double Block & Bleed
              <br />
              <span style={{ color: BRAND_BLUE }}>Built to Isolate.</span>
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
              Three connection families — Flange-to-Pipe, Flange-to-Flange, and Pipe-to-Pipe — covering every instrument isolation application. SS316 construction, ANSI 150 to 2500 Class, with full NACE MR-0175 sour gas certification.
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
                variant="outlined"
                size="large"
                href="mailto:sales@panamvalves.co.uk"
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
                {["Flange-to-Pipe · Flange-to-Flange · Pipe-to-Pipe", "Stainless Steel 316 construction", "NACE MR0175 sour service option", "ASME B16.5 Class 150 – 2500 · PN6 – PN250", "RF · RTJ · BS Flange Faces", "Ball · Needle · Combination internals", "Integral & Three Piece construction", "Fire Safe · Gear Operated · Lock Handle options"].map(item => (
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
                One body.
                <br />
                Three connection types.
              </Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
                PANAM® Double Block & Bleed valves cover the full instrument isolation spectrum — Flange-to-Pipe, Flange-to-Flange, and Pipe-to-Pipe configurations engineered for primary isolation, pressure transmitter mounting, and process bleed applications. All three families share the same SS316 construction with ball, needle, and combination internal configurations.
              </Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>Every DBB family is available with NACE MR-0175 sour gas certification, fire-safe construction, lock handle, anti-static, gear-operated, and OS&Y bonnet options. Seat and seal materials cover Carbon Filled PTFE, PCTFE, Delrin, PEEK, PTFE, Grafoil, and FKM.</Typography>
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

          {/* ── PRODUCT GRID ── */}
          <Box id="range" sx={{ mb: 10 }}>
            <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
              Product Range
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 1.5, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
              Three Families. One Standard.
            </Typography>
            <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 6, maxWidth: 560, lineHeight: 1.8 }}>Each DBB family is purpose-built for a specific connection type and application. Select by connection style, pressure class, or special service requirement.</Typography>
            <Grid container spacing={3}>
              {DBB_PRODUCTS.map(p => (
                <Grid key={p.type} size={{ xs: 12, sm: 6, md: 4 }}>
                  <DBBCard {...p} />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mb: 10 }} />

          {/* ── KEY FEATURES ── */}
          <Box sx={{ mb: 10 }}>
            <Typography variant="h3" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
              Why specify PANAM® DBB Valves
            </Typography>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT }}>All three DBB families are built to the same engineering standard — consistent materials, construction, and test procedures across the entire range.</Typography>
            <Grid container spacing={2}>
              {[
                "Three connection families from a single trusted manufacturer",
                "Stainless Steel 316 construction across all series",
                "ANSI 150 to 2500 Class and PN6 to PN250 pressure ratings",
                "RF, RTJ, and BS flange face options",
                "NACE MR-0175 sour gas certification available",
                "Ball-Needle-Ball, Ball-Ball-Ball, Needle-Needle-Needle, Ball-Needle configurations",
                "Integral (one-piece) and Three Piece (serviceable) body options",
                "Carbon Filled PTFE, PCTFE, Delrin, and PEEK seat materials",
                "PTFE, Grafoil, PCTFE, and FKM seal materials",
                "Fire Safe to API 607 / API 6FA available",
                "Gear Operated option for large bore sizes",
                "Lock Handle, Anti-Static, OS&Y Bonnet, and Anti-Tamper Key options",
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
              Specify your DBB valve
            </Typography>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>Send us your connection type, pressure class, bore size, and any special service requirements. Our technical team responds to instrumentation enquiries within 24 hours.</Typography>
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
    </>
  )
}
