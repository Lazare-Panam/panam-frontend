import React from "react"
import { Box, Container, Grid } from "@mui/material"
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import CallSplitRoundedIcon from "@mui/icons-material/CallSplitRounded"
import CableRoundedIcon from "@mui/icons-material/CableRounded"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined"
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined"
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded"
import TuneRoundedIcon from "@mui/icons-material/TuneRounded"
import AirRoundedIcon from "@mui/icons-material/AirRounded"
import ManifoldSelector from "./ManifoldSelector"
import ManifoldCompliance from "./ManifoldCompliance"
import { CategoryHero, CategoryIntro, CategoryPage, CtaBand, FeatureTiles, GaugeBadge, PressureCoverage, RangeCard } from "../Common/CategoryIndexKit"
import { SectionHeader } from "../Landing2/homeStyles"
import { sectionSx } from "../Landing2/homeTokens"

// ── EDIT MANIFOLD ROUTES HERE ─────────────────────────────────────────────
const MANIFOLD_ROUTES: Record<string, string> = {
  "2vm": "/manifolds/2VM",
  "3vm": "/manifolds/3VM",
  "5vm": "/manifolds/5VM",
  "air-header": "/system-integration/air-header",
}
// ─────────────────────────────────────────────────────────────────────────

const HERO_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/valve-manifolds/vm-cover.jpg"

const MANIFOLDS = [
  {
    type: "2vm",
    title: "2-Valve Manifolds",
    description: 'Two-valve isolation manifolds for gauge and absolute pressure transmitters. Type A (Angular) configuration in stainless steel 316. Covers 1/4" to 1/2" NPT, BSPT, BSPP, M20x1.5, and tube fittings. Standard 6000 psi and high-pressure 10000 psi ratings, with a NACE MR-01-75 sour gas option.',
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/valve-manifolds/2VM/2VM_Cover.jpg",
    pressure: "6000 – 10000 psi",
    size: '1/4" – 1/2"',
    chips: ['1/4" – 1/2"', "NPT · BSPT · BSPP · M20 · Tube"],
    material: "SS316 · NACE / Bleed Valve Options",
  },
  {
    type: "3vm",
    title: "3-Valve Manifolds",
    description: "Three-valve manifolds for differential pressure transmitters in process measurement, equalization, and isolation applications. Type A (Angular) configuration in stainless steel 316. Standard 6000 psi and 10000 psi high-pressure ratings with NACE MR-01-75 sour gas, bleed valve, large bore, and temperature service options.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/valve-manifolds/3VM/3VM_Cover.jpg",
    pressure: "6000 – 10000 psi",
    size: '1/4" – 1/2"',
    chips: ['1/4" – 1/2"', "NPT · BSPT · BSPP · M20 · Tube"],
    material: "SS316 · NACE / Large Bore / Bleed Valve",
  },
  {
    type: "5vm",
    title: "5-Valve Manifolds",
    description: "Five-valve manifolds for differential pressure transmitters with independent vent and equalizer valves. Type A (Angular) configuration in stainless steel 316. Standard 6000 psi and 10000 psi high-pressure ratings. Power Configuration (2 Vent – 1 Equalizer – 2 Isolation), NACE MR-01-75, large bore (soft seat), and temperature service options.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/valve-manifolds/5VM/5VM_Cover.jpg",
    pressure: "6000 – 10000 psi",
    size: '1/4" – 1/2"',
    chips: ['1/4" – 1/2"', "NPT · BSPT · BSPP · M20 · Tube"],
    material: "SS316 · NACE / Power Config / LB Options",
  },
  {
    type: "air-header",
    title: "Air Header",
    description:
      "Stainless steel 316 air distribution header carrying 4 to 20 side outlets from a single inlet, with an end drain for line clearing. Ball or needle valves on the inlet, outlets, and drain, with threaded, weld, or compression connections. Rated up to 6000 psi (414 bar) and 648 °C (1200 °F), with radiographic and liquid-penetrant weld testing and nitrogen leak testing on every valve.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/system-integratino/air-h.jpg",
    pressure: "6000 psi",
    size: "4 – 20 outlets",
    chips: ["Air Distribution", "4 – 20 outlets"],
    material: "SS316 · Threaded / Weld / Compression",
  },
]

const SPECS = [
  { icon: <SpeedRoundedIcon />, label: "Max Working Pressure", value: "10000 psi (689 bar)" },
  { icon: <VerifiedOutlinedIcon />, label: "Standard Pressure Rating", value: "6000 psi (414 bar)" },
  { icon: <ScienceOutlinedIcon />, label: "Material", value: "Stainless Steel 316" },
  { icon: <CallSplitRoundedIcon />, label: "Configuration", value: "Type A (Angular)" },
  { icon: <CableRoundedIcon />, label: "Connection Standards", value: "NPT · BSPT · BSPP · M20x1.5 · Tube" },
  { icon: <ShieldOutlinedIcon />, label: "Special Service", value: "NACE MR-01-75 Sour Gas option" },
  { icon: <Inventory2OutlinedIcon />, label: "Valve Families", value: "2VM · 3VM · 5VM" },
]

// What each family is for, used by the selection guide
const MANIFOLD_NEEDS: Record<string, { need: string; icon: React.ReactNode }> = {
  "2vm": { need: "Isolate a gauge or absolute pressure transmitter", icon: <SpeedRoundedIcon /> },
  "3vm": { need: "Isolate and equalize a differential pressure transmitter", icon: <CompareArrowsRoundedIcon /> },
  "5vm": { need: "Isolate, equalize and vent a DP transmitter independently", icon: <TuneRoundedIcon /> },
  "air-header": { need: "Distribute air from one inlet to 4–20 outlets", icon: <AirRoundedIcon /> },
}

const FEATURES = [
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
]

const routeFor = (type: string) => MANIFOLD_ROUTES[type] ?? `/manifolds/${type}`

// "6000 – 10000 psi" -> { min: 6000, max: 10000 }; a single rating draws from 0 ("up to")
const parseRange = (s: string) => {
  const nums = s.match(/[\d,]+/g)?.map(n => Number(n.replace(/,/g, ""))) ?? [0]
  return nums.length > 1 ? { min: nums[0], max: nums[nums.length - 1] } : { min: 0, max: nums[0] }
}

const COVERAGE = MANIFOLDS.map(m => ({ name: m.title, to: routeFor(m.type), ...parseRange(m.pressure) }))

const SELECTOR = MANIFOLDS.map(m => ({ ...MANIFOLD_NEEDS[m.type], valve: m.title, to: routeFor(m.type), pressure: m.pressure, size: m.size }))

const DESCRIPTION = "2-, 3- and 5-valve instrumentation manifolds in SS316, rated 6000–10000 psi, with NACE MR-01-75 options for gauge and DP pressure transmitters."

export default function ManifoldsIndexPage() {
  return (
    <>
      <title>Instrumentation Valve Manifolds — 2, 3 & 5 Valve | Panam Valves</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href="https://www.panamvalve.com/manifolds" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Instrumentation Valve Manifolds — 2, 3 & 5 Valve | Panam Valves" />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content="https://www.panamvalve.com/manifolds" />
      <meta property="og:image" content={HERO_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Instrumentation Valve Manifolds — 2, 3 & 5 Valve | Panam Valves" />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={HERO_IMAGE} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PANAM® Instrumentation Valve Manifolds",
          description: DESCRIPTION,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: MANIFOLDS.map((m, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: m.title,
              url: `https://www.panamvalve.com${routeFor(m.type)}`,
            })),
          },
        })}
      </script>

      <CategoryPage>
        <CategoryHero
          eyebrow="PANAM® Instrumentation"
          titleMain="Valve Manifolds"
          titleAccent="Built to Perform."
          description="Three manifold families — 2-Valve, 3-Valve, and 5-Valve — covering the full DP transmitter and gauge pressure range. SS316 construction, tested to 10000 psi (689 bar), with a NACE MR-01-75 sour gas option."
          image={HERO_IMAGE}
          imageAlt="Panam instrumentation valve manifolds"
          primary={{ label: "Explore range", href: "#range" }}
          secondary={{ label: "Request quote", to: "/enquiry" }}
          stats={[
            { value: "10k", label: "psi max rating" },
            { value: "3", label: "Manifold families" },
            { value: '1/4"–1/2"', label: "Size range" },
          ]}
          badge={<GaugeBadge value="10,000 psi" />}
        />

        <CategoryIntro
          eyebrow="Complete range"
          titleMain="One source."
          titleAccent="Every manifold you need."
          paragraphs={[
            "PANAM® Valve Manifolds cover the full instrumentation and process spectrum — 2-valve, 3-valve, and 5-valve configurations engineered for DP transmitter isolation, equalization, and venting. All three families share the same SS316 construction and 6000 psi standard test rating, with high-pressure 10000 psi variants across the range.",
            "Every manifold family offers a NACE MR-01-75 sour gas option, multiple drain hole sizes, and a full connection size matrix covering NPT, BSPT, BSPP, M20x1.5, and PANAM® tube fittings.",
          ]}
          specs={SPECS}
        />

        <Box component="section" id="range" sx={{ ...sectionSx("surface"), scrollMarginTop: "100px" }}>
          <Container maxWidth="lg">
            <SectionHeader eyebrow="Product Range" title="Three Families. One Standard." subtitle="Each manifold family is purpose-built for a specific transmitter type and application. Select by valve count, connection size, or special service requirement." />
            <Box sx={{ mb: { xs: 4, md: 5 } }}>
              <PressureCoverage items={COVERAGE} maxPsi={10000} ticks={[0, 2500, 5000, 7500, 10000]} />
            </Box>
            {/* Four cards: 2×2 on tablets, one row on wide screens */}
            <Grid container spacing={3} justifyContent="center">
              {MANIFOLDS.map(m => (
                <Grid key={m.type} size={{ xs: 12, sm: 6, lg: 3 }}>
                  <RangeCard
                    eyebrow={m.type === "air-header" ? "PANAM® System Integration" : "PANAM® Manifolds"}
                    title={m.title}
                    description={m.description}
                    image={m.image}
                    to={routeFor(m.type)}
                    pill={
                      <>
                        <SpeedRoundedIcon />
                        {m.pressure} max
                      </>
                    }
                    chips={m.chips}
                    footnote={m.material}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={sectionSx("white")}>
          <Container maxWidth="lg">
            <ManifoldSelector rows={SELECTOR} />
          </Container>
        </Box>

        <Box component="section" sx={sectionSx("tint")}>
          <Container maxWidth="lg">
            <ManifoldCompliance />
          </Container>
        </Box>

        <FeatureTiles eyebrow="Why Panam" title="Why specify PANAM® Manifolds" subtitle="All three manifold families are built to the same engineering standard — consistent materials, construction, and test procedures across the entire range." items={FEATURES} />

        <CtaBand title="Specify your manifold" text="Send us your valve count, connection size, pressure rating, and any special service requirements. Our technical team responds to instrumentation enquiries within 24 hours." primary={{ label: "Email Technical Sales", href: "mailto:sales@panamvalves.co.uk" }} secondary={{ label: "Request Quote", to: "/enquiry" }} />
      </CategoryPage>
    </>
  )
}
