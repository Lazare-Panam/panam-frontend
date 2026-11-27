import React from "react"
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Button,
  Card,
  CardMedia,
  CardContent,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import RelatedGuide from "../Common/RelatedGuide"

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
const BRAND_BLUE = "#01B0F0"

const LINKS = {
  heroExplore: "#series",
  heroQuote: "/enquiry",
  ctaEmail: "mailto:sales@panamvalves.co.uk",
  ctaQuote: "/enquiry",
  highPressure: "/high-pressure",
  ballValves: "/valves/ball-valves",
  checkValves: "/valves/check-valves",
  tubeFittings: "/instrumentation-fittings/tube-fittings",
  manifolds: "/manifolds",
  dbb: "/double-block-and-bleed-valves",
  catalogPDFs: "/catalogPDFs",
  cadFiles: "/cad-step-files",
  certificates: "/certificates",
  oilGas: "/industries/oil-gas",
  hydrogen: "/industries/hydrogen",
}

// Inline-prose link styled to the brand. Internal links use href so they stay crawlable.
const InlineLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} sx={{ color: BRAND_BLUE, fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
    {children}
  </Link>
)

const NEEDLE_VALVE_SERIES = [
  {
    id: "needle-valve-nv-series-ib",
    title: "IB Series",
    subtitle: "Integral Bonnet",
    description:
      "Compact integral bonnet needle valves rated to 6,000 psig, in straight and angular patterns with tube fitting and threaded ends. Available in SS316, Duplex and Monel.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/needle-valves/ib.jpg",
    alt: "IB Series 316 stainless steel integral bonnet needle valve",
    pressure: "6,000 psig",
    tag: "IB Series",
    link: "/valves/needle-valves/needle-valves-ib",
  },
  {
    id: "sb-series-needle-valves",
    title: "SB Series",
    subtitle: "Heavy-Duty Bar Stock",
    description:
      "Square-body bar stock needle valves rated to 10,000 psig, with hard or soft seats. Also available as a block and bleed valve. SS316, Duplex, Monel and Hastelloy.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/needle-valves/sb.jpg",
    alt: "SB Series 316 stainless steel bar stock needle valve",
    pressure: "10,000 psig",
    tag: "SB Series",
    link: "/valves/needle-valves/needle-valves-sb",
  },
  {
    id: "hb-series-needle-valves",
    title: "HB Series",
    subtitle: "Block & Bleed",
    description:
      "Heavy-duty hex-body needle valves rated to 10,000 psig, with hard or soft seats and exotic material options. Also available as a block and bleed valve.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/needle-valves/hb.jpg",
    alt: "HB Series 316 stainless steel block and bleed needle valve",
    pressure: "10,000 psig",
    tag: "HB Series",
    link: "/valves/needle-valves/needle-valves-hb",
  },
  {
    id: "hp-series-needle-valves",
    title: "HP Series",
    subtitle: "High Pressure Forged",
    description:
      "One-piece forged needle valves rated to 10,000 and 20,000 psig, in straight, angular, 3-way and manifold configurations with PANAM® HP tube fittings. Panel mounting available.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/needle-valves/hp.jpg",
    alt: "HP Series 316 stainless steel forged high pressure needle valve",
    pressure: "20,000 psig",
    tag: "HP Series",
    link: "/valves/needle-valves/needle-valves-hp",
    extraLink: { label: "Explore the high-pressure range", href: LINKS.highPressure },
  },
  {
    id: "mini-series-needle-valves",
    title: "Mini Series",
    subtitle: "Compact Instrumentation",
    description:
      "Compact PMV needle valves for tight spaces, rated to 3,000 psig. Hard seat, 1/4\" and 6mm sizes, with NPT, BSPT or BSPP ends. SS316, Duplex and Monel.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/needle-valves/mini.jpg",
    alt: "Mini Series 316 stainless steel compact instrumentation needle valve",
    pressure: "3,000 psig",
    tag: "Mini Series",
    link: "/valves/needle-valves/needle-valves-mini",
  },
]

type SeriesItem = (typeof NEEDLE_VALVE_SERIES)[number]

// Rows for the at-a-glance series comparison table.
const SERIES_COMPARISON = [
  { series: "IB Series", body: "Integral bonnet", pressure: "6,000 psig", seat: "—", config: "Straight, angular", materials: "SS316, Duplex, Monel" },
  { series: "SB Series", body: "Square body, bar stock", pressure: "10,000 psig", seat: "Hard or soft", config: "Needle valve or block & bleed", materials: "SS316, Duplex, Monel, Hastelloy" },
  { series: "HB Series", body: "Hex body", pressure: "10,000 psig", seat: "Hard or soft", config: "Needle valve or block & bleed", materials: "SS, carbon steel, Monel, Hastelloy" },
  { series: "HP Series", body: "High pressure, forged", pressure: "10,000 or 20,000 psig", seat: "—", config: "Straight, angular, 3-way, manifold; panel mount", materials: "SS316, Duplex, Monel, Hastelloy" },
  { series: "Mini Series", body: "Compact (PMV)", pressure: "3,000 psig", seat: "Hard only", config: "Compact", materials: "SS316, Duplex, Monel" },
]

// Rows for the full specifications table.
const SPEC_ROWS: { label: string; value: React.ReactNode }[] = [
  { label: "Working pressure", value: "3,000 to 20,000 psig (1,379 bar), depending on series" },
  { label: "Sizes", value: '1/8" to 1"' },
  { label: "Body materials", value: "SS316, Duplex, Monel, Hastelloy; carbon steel in HB Series" },
  { label: "Construction", value: "Forged and bar stock" },
  { label: "Stem", value: "Non-rotating, Vee-tip or ball-tip" },
  { label: "Seat", value: "Hard (metal) or soft, depending on series" },
  { label: "Gland packing", value: "PTFE standard; Graphoil optional for service to 538°C (1000°F); FKM on Mini Series" },
  { label: "End connections", value: "Male and female NPT, BSPP, BSPT, ISO tapered, ISO parallel, metric OD, PANAM® tube fitting" },
  {
    label: "Documentation",
    value: (
      <>
        Material certificates on request via <InlineLink href={LINKS.certificates}>our certificates page</InlineLink>
      </>
    ),
  },
]

const FAQS = [
  {
    q: "What is a needle valve used for?",
    a: "A needle valve gives precise control of small flows and tight shut-off. Typical uses are isolating gauges and transmitters, sampling, metering and venting in instrumentation lines.",
  },
  {
    q: "What pressure are PANAM needle valves rated to?",
    a: "From 3,000 psig for the Mini Series to 20,000 psig for the HP Series. The IB Series is rated to 6,000 psig and the SB and HB Series to 10,000 psig.",
  },
  {
    q: "What is the difference between a needle valve and a ball valve?",
    a: "A needle valve is multi-turn and sets flow precisely. A ball valve is quarter-turn and opens or closes fully and quickly. Use a needle valve for control and fine isolation, a ball valve for fast on/off.",
  },
  {
    q: "Should I choose a hard seat or a soft seat?",
    a: "Hard (metal) seats handle higher temperatures and dirty media. Soft seats give tighter shut-off on clean gases at moderate temperatures. The SB and HB Series offer both; the Mini Series is hard seat only.",
  },
  {
    q: "What does a non-rotating stem do?",
    a: "The stem tip moves straight down into the seat without turning against it. This reduces wear on the seat and gives repeatable shut-off over many cycles.",
  },
  {
    q: "Which packing should I use for high temperatures?",
    a: "PTFE packing is standard. Specify Graphoil packing for service up to 538°C (1000°F).",
  },
  {
    q: "Can a needle valve be used for block and bleed?",
    a: "Yes. The SB and HB Series are available as block and bleed valves. For double block and bleed isolation, see our DBB valve range.",
  },
]

const MARQUEE_ITEMS = [
  "Up to 20,000 psig working pressure",
  "SS316 · Duplex · Monel · Hastelloy",
  "Non-rotating Vee-tip stem",
  "Material certificates on request",
  "NPT · BSPP · BSPT · PANAM® Tube Fitting",
]

const SeriesCard: React.FC<SeriesItem> = ({ title, subtitle, description, image, alt, pressure, tag, link, extraLink }) => (
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
      <CardMedia component="img" image={image} alt={alt} sx={{ width: "100%", maxWidth: 200, height: 180, objectFit: "contain" }} />
    </Box>

    <CardContent sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 2, fontSize: 10, fontFamily: PRIMARY_FONT }}>
        {tag}
      </Typography>
      <Typography component="h3" variant="h6" sx={{ fontWeight: 800, fontFamily: PRIMARY_FONT, color: "#1a1a1a", mt: 0.5, mb: 0.5, fontSize: "1.05rem" }}>
        {title} — {subtitle}
      </Typography>
      <Box sx={{ display: "inline-flex", alignItems: "center", bgcolor: "#e8f7fd", border: "1px solid #b3e5f7", borderRadius: 0.5, px: 1.2, py: 0.3, mb: 2 }}>
        <Typography sx={{ fontSize: 11, fontWeight: 700, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, letterSpacing: 0.5 }}>{pressure} MAX</Typography>
      </Box>
      <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.75, fontSize: "0.88rem", fontFamily: PRIMARY_FONT }}>
        {description}
      </Typography>
      {extraLink && (
        <Box sx={{ mt: 1.5 }}>
          <InlineLink href={extraLink.href}>{extraLink.label} →</InlineLink>
        </Box>
      )}
    </CardContent>

    <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
      <Button
        variant="contained"
        fullWidth
        size="small"
        href={link}
        aria-label={`View ${title} needle valves`}
        sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, fontWeight: 700, fontSize: 12, letterSpacing: 0.5, py: 1, "&:hover": { bgcolor: "#0090c8" } }}>
        View {title} needle valves
      </Button>
      <Button
        variant="outlined"
        fullWidth
        size="small"
        href={LINKS.ctaQuote}
        aria-label={`Request a quote for ${title} needle valves`}
        sx={{ borderColor: "#ddd", color: "#444", borderRadius: 0, fontWeight: 600, fontSize: 12, letterSpacing: 1, py: 1, "&:hover": { bgcolor: "#f5f5f5", borderColor: "#bbb" } }}>
        REQUEST QUOTE
      </Button>
    </Box>
  </Card>
)

// Shared header for the stacked content sections below the series grid.
const SectionHeading: React.FC<{ eyebrow?: string; children: React.ReactNode }> = ({ eyebrow, children }) => (
  <>
    {eyebrow && (
      <Typography variant="overline" sx={{ color: BRAND_BLUE, fontWeight: 700, letterSpacing: 3, fontSize: 11, fontFamily: PRIMARY_FONT, display: "block", mb: 1 }}>
        {eyebrow}
      </Typography>
    )}
    <Typography component="h2" sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 800, mb: 2.5, fontFamily: PRIMARY_FONT, color: "#1a1a1a", letterSpacing: "-0.02em" }}>
      {children}
    </Typography>
  </>
)

const cellSx = { fontFamily: PRIMARY_FONT, fontSize: "0.86rem", color: "#555", lineHeight: 1.6 }
const headCellSx = { fontFamily: PRIMARY_FONT, fontSize: "0.8rem", fontWeight: 800, color: "#1a1a1a", bgcolor: "#f7fbfd", textTransform: "uppercase", letterSpacing: 0.4 }

export default function NeedleValvesPage() {
  return (
    <>
      <title>Needle Valves to 20,000 psig | SS316 &amp; Duplex | PANAM® UK</title>
      <meta
        name="description"
        content="Instrumentation needle valves in SS316, Duplex, Monel and Hastelloy. Five series from 3,000 to 20,000 psig with NPT, BSPP and tube ends. Request a quote."
      />
      <meta
        name="keywords"
        content="needle valves, instrumentation needle valves, stainless steel needle valve, high pressure needle valve, 316 needle valve, needle valve supplier UK, 20000 psi needle valve, Duplex needle valve, integral bonnet needle valve, block and bleed needle valve"
      />
      <meta property="og:title" content="Needle Valves to 20,000 psig | SS316 & Duplex | PANAM® UK" />
      <meta
        property="og:description"
        content="Instrumentation needle valves in SS316, Duplex, Monel and Hastelloy. Five series from 3,000 to 20,000 psig with NPT, BSPP and tube ends. Request a quote."
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PANAM Valves" />
      <meta property="og:url" content="https://www.panamvalve.com/valves/needle-valves" />
      {/* TODO: replace with dedicated 1200x630 composite (panam-needle-valves-series-1200x630.jpg) once the asset is produced. Using the working hero banner meanwhile so OG previews don't 404. */}
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/website-media/hero-banners/needle-valves-banner.jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="PANAM® needle valve series — IB, SB, HB, HP and Mini" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://pblol2.blob.core.windows.net/panam-images/website-media/hero-banners/needle-valves-banner.jpeg" />
      <link rel="canonical" href="https://www.panamvalve.com/valves/needle-valves" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://www.panamvalve.com/valves/needle-valves#webpage",
              url: "https://www.panamvalve.com/valves/needle-valves",
              name: "Needle Valves to 20,000 psig | SS316 & Duplex | PANAM® UK",
              description:
                "Instrumentation needle valves in SS316, Duplex, Monel and Hastelloy. Five series from 3,000 to 20,000 psig with NPT, BSPP and tube ends. Request a quote.",
              inLanguage: "en-GB",
              mainEntity: {
                "@type": "ItemList",
                itemListElement: NEEDLE_VALVE_SERIES.map((s, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: `${s.title} Needle Valves`,
                  url: `https://www.panamvalve.com${s.link}`,
                })),
              },
            },
            {
              "@type": "FAQPage",
              "@id": "https://www.panamvalve.com/valves/needle-valves#faq",
              mainEntity: FAQS.map(f => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
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
            <Typography component="h1" sx={{ fontSize: { xs: 34, md: 60 }, fontWeight: 900, color: "#fff", mt: 1, mb: 3, lineHeight: 1.08, maxWidth: 820, fontFamily: PRIMARY_FONT, letterSpacing: "-0.03em" }}>
              Instrumentation Needle Valves,
              <br />
              <span style={{ color: BRAND_BLUE }}>Built to Hold.</span>
            </Typography>
            <Typography sx={{ fontSize: { xs: 16, md: 19 }, color: "rgba(255,255,255,0.88)", maxWidth: 640, mb: 5, lineHeight: 1.75, fontFamily: PRIMARY_FONT }}>
              PANAM® needle valves give precise flow control and leak-tight shut-off in five series — IB, SB, HB, HP and Mini — rated from 3,000 to 20,000 psig. Choose SS316, Duplex, Monel or Hastelloy bodies with NPT, BSPP, BSPT, ISO or PANAM® tube fitting ends, in sizes from 1/8" to 1".
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button variant="contained" size="large" href={LINKS.heroExplore} sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
                Explore the series
              </Button>
              <Button variant="outlined" size="large" href={LINKS.heroQuote} sx={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "rgba(255,255,255,0.08)", borderColor: "#fff" } }}>
                Request a quote
              </Button>
            </Box>
          </Container>
        </Box>

        {/* ── MARQUEE ── */}
        <Box sx={{ borderBottom: "1px solid #eee", py: 1.5, bgcolor: "#fff", overflow: "hidden", whiteSpace: "nowrap" }}>
          <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
          <Box sx={{ display: "flex", width: "max-content", animation: "marquee 28s linear infinite", "&:hover": { animationPlayState: "paused" } }}>
            {/* Second copy is aria-hidden: it only exists so the -50% translate loops seamlessly. */}
            {[0, 1].map(copy => (
              <Box key={copy} aria-hidden={copy === 1} sx={{ display: "flex", gap: 6, pr: 6 }}>
                {MARQUEE_ITEMS.map(item => (
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
          {/* ── WHAT IS A NEEDLE VALVE ── */}
          <Box sx={{ mb: 10, maxWidth: 820 }}>
            <SectionHeading eyebrow="The basics">What Is a Needle Valve?</SectionHeading>
            <Typography sx={{ color: "#555", lineHeight: 1.85, mb: 2.5, fontFamily: PRIMARY_FONT }}>
              A needle valve controls flow with a slender, tapered stem that screws down into a small seat. Because the stem moves a short distance for each turn of the handle, operators can set flow very precisely and close the valve tightly. Needle valves are used to isolate gauges and transmitters, meter small flows, and take samples in instrumentation and process lines.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.85, fontFamily: PRIMARY_FONT }}>
              PANAM® needle valves use a non-rotating Vee-tip or ball-tip stem that moves straight into the seat without scoring it, giving reliable, repeatable, leak-tight shut-off even under high-pressure cycling. Standard PTFE gland packing suits most duties, with optional Graphoil packing for service up to 538°C (1000°F).
            </Typography>
          </Box>

          <Divider sx={{ mb: 10 }} />

          {/* ── SERIES COMPARISON + GRID ── */}
          <Box id="series" sx={{ mb: 10 }}>
            <SectionHeading eyebrow="Product series">Needle Valve Series Compared</SectionHeading>
            <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, mb: 4, maxWidth: 620, lineHeight: 1.8 }}>
              Five series, each purpose-built for a pressure class and installation. Select by working pressure, body construction, seat type or material.
            </Typography>

            <TableContainer sx={{ mb: 6, border: "1px solid #eee" }}>
              <Table size="small" aria-label="Needle valve series comparison">
                <TableHead>
                  <TableRow>
                    {["Series", "Body", "Max working pressure", "Seat", "Configurations", "Body materials"].map(h => (
                      <TableCell key={h} sx={headCellSx}>{h}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {SERIES_COMPARISON.map(r => (
                    <TableRow key={r.series}>
                      <TableCell sx={{ ...cellSx, fontWeight: 700, color: "#1a1a1a" }}>{r.series}</TableCell>
                      <TableCell sx={cellSx}>{r.body}</TableCell>
                      <TableCell sx={cellSx}>{r.pressure}</TableCell>
                      <TableCell sx={cellSx}>{r.seat}</TableCell>
                      <TableCell sx={cellSx}>{r.config}</TableCell>
                      <TableCell sx={cellSx}>{r.materials}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Grid container spacing={3}>
              {NEEDLE_VALVE_SERIES.map(s => (
                <Grid key={s.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <SeriesCard {...s} />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mb: 10 }} />

          {/* ── SPECIFICATIONS ── */}
          <Box sx={{ mb: 10 }}>
            <SectionHeading eyebrow="Specifications">Needle Valve Specifications</SectionHeading>
            <TableContainer sx={{ mb: 3, border: "1px solid #eee", maxWidth: 860 }}>
              <Table size="small" aria-label="Needle valve specifications">
                <TableBody>
                  {SPEC_ROWS.map(row => (
                    <TableRow key={row.label}>
                      <TableCell sx={{ ...headCellSx, width: { xs: "40%", md: "30%" }, verticalAlign: "top" }}>{row.label}</TableCell>
                      <TableCell sx={cellSx}>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, lineHeight: 1.8 }}>
              Download datasheets from the <InlineLink href={LINKS.catalogPDFs}>catalogue library</InlineLink> or get{" "}
              <InlineLink href={LINKS.cadFiles}>2D and 3D CAD files</InlineLink>.
            </Typography>
          </Box>

          <Divider sx={{ mb: 10 }} />

          {/* ── HOW TO CHOOSE ── */}
          <Box sx={{ mb: 10, maxWidth: 820 }}>
            <SectionHeading eyebrow="Selection guide">How to Choose a Needle Valve</SectionHeading>
            <Box component="ol" sx={{ pl: 2.5, m: 0, "& li": { color: "#555", lineHeight: 1.85, mb: 2, fontFamily: PRIMARY_FONT }, "& li::marker": { color: BRAND_BLUE, fontWeight: 700 } }}>
              <li>
                <strong>Pressure.</strong> Pick a series rated above your maximum operating pressure at your design temperature.
              </li>
              <li>
                <strong>Temperature.</strong> PTFE packing is standard. For high-temperature service, specify Graphoil packing, rated to 538°C (1000°F).
              </li>
              <li>
                <strong>Body material.</strong> SS316 suits most process and instrument duties. Consider Duplex, Monel or Hastelloy for chlorides, seawater or aggressive chemicals.
              </li>
              <li>
                <strong>Seat.</strong> A hard (metal) seat suits high temperatures and dirty media. A soft seat gives tighter shut-off on clean gases at moderate temperatures.
              </li>
              <li>
                <strong>End connections.</strong> Match the thread form (NPT, BSPP, BSPT, ISO) or tube size of your system with <InlineLink href={LINKS.tubeFittings}>PANAM® tube fittings</InlineLink>.
              </li>
              <li>
                <strong>Configuration.</strong> Straight, angular, 3-way, manifold or block and bleed, depending on the installation.
              </li>
              <li>
                <strong>Function.</strong> Need fast on/off rather than fine control? A <InlineLink href={LINKS.ballValves}>ball valve</InlineLink> may suit better. To stop reverse flow, use a <InlineLink href={LINKS.checkValves}>check valve</InlineLink>.
              </li>
            </Box>
          </Box>

          <Divider sx={{ mb: 10 }} />

          {/* ── WHERE USED ── */}
          <Box sx={{ mb: 10, maxWidth: 820 }}>
            <SectionHeading eyebrow="Applications">Where Needle Valves Are Used</SectionHeading>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {[
                <>
                  <strong>Gauge and transmitter isolation</strong>, on their own or as part of a <InlineLink href={LINKS.manifolds}>2, 3 or 5-valve manifold</InlineLink>
                </>,
                <>
                  <strong>Sampling and bleed points</strong>, where small, controlled flow matters
                </>,
                <>
                  <strong>Chemical injection and metering</strong>
                </>,
                <>
                  <strong>High-pressure test rigs and hydraulic systems</strong>, using the HP Series
                </>,
                <>
                  <strong>Oil and gas and hydrogen instrumentation</strong> — see <InlineLink href={LINKS.oilGas}>oil &amp; gas</InlineLink> and <InlineLink href={LINKS.hydrogen}>hydrogen</InlineLink> applications
                </>,
              ].map((item, i) => (
                <Box key={i} component="li" sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, mb: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: BRAND_BLUE, flexShrink: 0, mt: "8px" }} />
                  <Typography sx={{ fontSize: 15, color: "#555", fontFamily: PRIMARY_FONT, lineHeight: 1.7 }}>{item}</Typography>
                </Box>
              ))}
            </Box>
            <Typography sx={{ color: "#666", fontFamily: PRIMARY_FONT, lineHeight: 1.8, mt: 2.5 }}>
              For process isolation with a provable bleed, see our <InlineLink href={LINKS.dbb}>double block and bleed valves</InlineLink>.
            </Typography>
          </Box>

          <Divider sx={{ mb: 10 }} />

          {/* ── WHY PANAM ── */}
          <Box sx={{ mb: 10 }}>
            <SectionHeading>Why Specify PANAM® Needle Valves</SectionHeading>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 5, maxWidth: 620, fontFamily: PRIMARY_FONT }}>
              Every series is built around the same core engineering principles — a non-rotating stem and broad material availability.
            </Typography>
            <Grid container spacing={2}>
              {[
                "Non-rotating Vee-tip stem eliminates seat scoring",
                "PTFE gland packing standard — Graphoil to 538°C optional",
                "Material certificates available on request",
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

          {/* ── FAQ ── */}
          <Box sx={{ mb: 10, maxWidth: 860 }}>
            <SectionHeading eyebrow="FAQs">Needle Valve FAQs</SectionHeading>
            {FAQS.map(f => (
              <Box key={f.q} sx={{ mb: 3.5 }}>
                <Typography component="h3" sx={{ fontSize: "1.05rem", fontWeight: 800, color: "#1a1a1a", fontFamily: PRIMARY_FONT, mb: 1 }}>
                  {f.q}
                </Typography>
                <Typography sx={{ color: "#555", lineHeight: 1.8, fontFamily: PRIMARY_FONT }}>{f.a}</Typography>
              </Box>
            ))}
          </Box>

          <Divider sx={{ mb: 10 }} />

          {/* ── RELATED GUIDE ── */}
          <Box sx={{ mb: 10 }}>
            <RelatedGuide
              title="HP Series needle valves for high-pressure flow control"
              text="How the one-piece forged HP Series handles 10,000 and 20,000 psig service, and the pressure, material and connection details to confirm before you specify."
              to="/blog/hp-series-needle-valves-high-pressure-flow-control"
              linkLabel="Read the HP Series guide"
            />
          </Box>

          {/* ── CTA ── */}
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography component="h2" sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 800, mb: 2, fontFamily: PRIMARY_FONT, color: "#1a1a1a" }}>
              Specify Your Needle Valve
            </Typography>
            <Typography sx={{ color: "#666", lineHeight: 1.8, mb: 4, maxWidth: 520, mx: "auto", fontFamily: PRIMARY_FONT }}>
              Send us your pressure rating, temperature, material and end connections. Our technical team responds to instrumentation enquiries within 24 hours.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Button variant="contained" size="large" href={LINKS.ctaEmail} sx={{ bgcolor: BRAND_BLUE, color: "#fff", borderRadius: 0, px: 4, py: 1.5, fontWeight: 700, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0090c8" } }}>
                Email Technical Sales
              </Button>
              <Button variant="outlined" size="large" href={LINKS.ctaQuote} sx={{ borderColor: "#ddd", color: "#333", borderRadius: 0, px: 4, py: 1.5, fontWeight: 600, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#f5fbfe", borderColor: BRAND_BLUE } }}>
                Request a quote
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
