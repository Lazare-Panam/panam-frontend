import React from "react"
import { Box, Container, Grid } from "@mui/material"
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded"
import StraightenRoundedIcon from "@mui/icons-material/StraightenRounded"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import CableRoundedIcon from "@mui/icons-material/CableRounded"
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"
import TuneRoundedIcon from "@mui/icons-material/TuneRounded"
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined"
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded"
import AirRoundedIcon from "@mui/icons-material/AirRounded"
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined"
import ValveFAQ from "./ValveFAQ"
import ValveSelector from "./ValveSelector"
import ValveCompliance from "./ValveCompliance"
import { CategoryHero, CategoryIntro, CategoryPage, CtaBand, FeatureTiles, GaugeBadge, PressureCoverage, RangeCard } from "../Common/CategoryIndexKit"
import { SectionHeader } from "../Landing2/homeStyles"
import { sectionSx } from "../Landing2/homeTokens"

// ── EDIT VALVE ROUTES HERE ────────────────────────────────────────────────
const VALVE_ROUTES: Record<string, string> = {
  "needle-valves": "/valves/needle-valves",
  "ball-valves": "/valves/ball-valves",
  "relief-valves": "/valves/relief-valves",
  "check-valves": "/valves/check-valves",
  "gauge-root-valves": "/products/valves/gauge-root-valves",
  "purge-valves": "/products/valves/purge-valves",
  "toggle-valves": "/products/valves/toggle-valves",
}
// ─────────────────────────────────────────────────────────────────────────

const HERO_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/website-media/hero-banners/atieh-khoshraftar-l4PrMpT_DuY-unsplash.jpg"

const VALVES = [
  {
    type: "needle-valves",
    title: "Needle Valves",
    description: "Precision needle valves designed for accurate flow control in high-pressure applications.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/high-pressure/hp-nv.jpg",
    pressure: "20,000 psig",
    size: '1/8" to 1"',
    materials: "SS316 · Duplex · Monel · Hastelloy",
  },
  {
    type: "ball-valves",
    title: "Ball Valves",
    description: "2 and 3-way configurations with floating ball design. Rated up to 10,000 psig with anti-blowout stem safety.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/ball-valves/PBV-2-S-04-FF-1.png",
    pressure: "10,000 psig",
    size: '1/8" to 2"',
    materials: "SS316 · Duplex · Monel · Hastelloy",
  },
  {
    type: "relief-valves",
    title: "Relief Valves",
    description: "Proportional and safety valves used to protect systems from over-pressurization.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/reflief-valves/relief-cover.jpg",
    pressure: "15,000 psig",
    size: '1/8" to 1/2"',
    materials: "SS316 · Duplex · Monel · Hastelloy",
  },
  {
    type: "check-valves",
    title: "Check Valves",
    description: "Uni-directional valves designed to prevent backflow and ensure system safety.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/check-valves/c-cover.png",
    pressure: "6,000 psig",
    size: '1/8" to 1"',
    materials: "SS316 · Duplex · Monel · Hastelloy",
  },
  {
    type: "gauge-root-valves",
    title: "Gauge Root Valves",
    description: "Isolation valves specifically designed for mounting and calibrating pressure gauges.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/gauge-root/gauge-root-1.jpg",
    pressure: "10,000 psig",
    size: '1/2" to 3/4"',
    materials: "SS316 · Duplex · Monel · Hastelloy",
  },
  {
    type: "purge-valves",
    title: "Purge Valves",
    description: "Compact purge valves for accurate flow control with crimped cap design for safety.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/purge-valves/purge-valves.jpg",
    pressure: "4,000 psig",
    size: '1/4" to 1/2"',
    materials: "SS316",
  },
  {
    type: "toggle-valves",
    title: "Toggle Valves",
    description: "Compact high-pressure toggle valves for reliable shut-off and precise flow control in instrumentation.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/toggle-valves/t-valves.png",
    pressure: "4,000 psig",
    size: '1/4" to 1/2"',
    materials: "SS316",
  },
]

const SPECS = [
  { icon: <SpeedRoundedIcon />, label: "Max Working Pressure", value: "Up to 20,000 psig (1,379 bar)" },
  { icon: <StraightenRoundedIcon />, label: "Size Range", value: '1/8" to 2"' },
  { icon: <ScienceOutlinedIcon />, label: "Materials", value: "SS316, Duplex, Monel, Hastelloy" },
  { icon: <CableRoundedIcon />, label: "End Connections", value: "NPT, BSPP, BSPT, PANAM® Tube Fitting" },
  { icon: <LayersOutlinedIcon />, label: "Seat Options", value: "PTFE, Delrin, PEEK, KEL-F" },
  { icon: <DescriptionOutlinedIcon />, label: "Documentation", value: "Material certificates available on request" },
]

// What each family is for, used by the selection guide
const VALVE_NEEDS: Record<string, { need: string; icon: React.ReactNode }> = {
  "needle-valves": { need: "Meter or throttle flow precisely", icon: <TuneRoundedIcon /> },
  "ball-valves": { need: "Quick quarter-turn shut-off or 3-way diverting", icon: <RadioButtonCheckedRoundedIcon /> },
  "relief-valves": { need: "Protect a system from overpressure", icon: <ShieldOutlinedIcon /> },
  "check-valves": { need: "Stop backflow — flow in one direction only", icon: <TrendingFlatRoundedIcon /> },
  "gauge-root-valves": { need: "Isolate and calibrate a pressure gauge", icon: <SpeedRoundedIcon /> },
  "purge-valves": { need: "Vent or purge an instrument line", icon: <AirRoundedIcon /> },
  "toggle-valves": { need: "Fast-acting shut-off on instrument lines", icon: <ToggleOnOutlinedIcon /> },
}

const FEATURES = [
  "Seven valve families from a single trusted manufacturer",
  "SS316, Duplex, Monel, and Hastelloy across all families",
  "Material certificates available on request",
  "NPT, BSPP, BSPT, ISO tapered, and PANAM® tube-fitting ends",
  "Pressures from 4,000 to 20,000 psig across the range",
  "Anti-blowout stem on ball valves for safety",
  "PTFE standard packing — Graphoil to 538°C optional",
  "PTFE, Delrin, PEEK, and KEL-F seat options",
  "Technical team responds to enquiries within 24 hours",
]

const routeFor = (type: string) => VALVE_ROUTES[type] ?? `/products/valves/${type}`

const psi = (s: string) => Number(s.replace(/[^\d]/g, ""))

const COVERAGE = VALVES.map(v => ({ name: v.title, to: routeFor(v.type), min: 0, max: psi(v.pressure) }))

const SELECTOR = VALVES.map(v => ({ ...VALVE_NEEDS[v.type], valve: v.title, to: routeFor(v.type), pressure: v.pressure, size: v.size }))

export default function ValvesPage() {
  return (
    <>
      <title>Instrumentation Valves | Needle, Ball & Relief | PANAM®</title>
      <meta name="description" content="PANAM® instrumentation valves — needle, ball, relief, check, gauge root, purge & toggle. Rated to 20,000 psig. SS316, Duplex, Monel & Hastelloy." />
      <link rel="canonical" href="https://www.panamvalve.com/valves" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Instrumentation Valves | Needle, Ball & Relief | PANAM®" />
      <meta property="og:description" content="Seven instrumentation valve families rated 4,000–20,000 psig. NPT, BSPP, BSPT and tube fitting ends." />
      <meta property="og:url" content="https://www.panamvalve.com/valves" />
      <meta property="og:image" content={HERO_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Instrumentation Valves | Needle, Ball & Relief | PANAM®" />
      <meta name="twitter:description" content="Seven instrumentation valve families rated 4,000–20,000 psig. NPT, BSPP, BSPT and tube fitting ends." />
      <meta name="twitter:image" content={HERO_IMAGE} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PANAM® Instrumentation Valves",
          description: "Seven instrumentation valve families — Needle, Ball, Relief, Check, Gauge Root, Purge, and Toggle — rated 4,000 to 20,000 psig.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: VALVES.map((v, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: v.title,
              url: `https://www.panamvalve.com${routeFor(v.type)}`,
            })),
          },
        })}
      </script>

      <CategoryPage>
        <CategoryHero
          eyebrow="PANAM® Instrumentation"
          titleMain="Valves"
          titleAccent="Engineered to Perform."
          description="Seven valve families — Needle, Ball, Relief, Check, Gauge Root, Purge, and Toggle — covering 4,000 to 20,000 psig across the world's most demanding fluid systems."
          image={HERO_IMAGE}
          imageAlt="Panam instrumentation valves in an industrial process plant"
          primary={{ label: "Explore range", href: "#range" }}
          secondary={{ label: "Request quote", to: "/enquiry" }}
          stats={[
            { value: "20k", label: "psig max rating" },
            { value: String(VALVES.length), label: "Valve families" },
            { value: '1/8"–2"', label: "Size range" },
          ]}
          badge={<GaugeBadge value="20,000 psig" />}
        />

        <CategoryIntro
          eyebrow="Complete range"
          titleMain="One source."
          titleAccent="Every valve you need."
          paragraphs={[
            "PANAM® Valves cover the full instrumentation spectrum — from precision needle valves for fine metering, to floating-ball isolation, over-pressure relief, backflow prevention, and gauge isolation. Every family shares the same material standards, certification options, and quality controls.",
            "All valve families are available in SS316, Duplex, Monel, and Hastelloy with material certificates available on request.",
          ]}
          specs={SPECS}
        />

        <Box component="section" id="range" sx={{ ...sectionSx("surface"), scrollMarginTop: "100px" }}>
          <Container maxWidth="lg">
            <SectionHeader eyebrow="Product Range" title="Seven Families. One Standard." subtitle="Each valve family is purpose-built for a specific function and pressure class. Select by application, working pressure, or end connection." />
            <Box sx={{ mb: { xs: 4, md: 5 } }}>
              <PressureCoverage items={COVERAGE} maxPsi={20000} ticks={[0, 5000, 10000, 15000, 20000]} />
            </Box>
            {/* Centred so the seventh card sits in the middle of the last row */}
            <Grid container spacing={3} justifyContent="center">
              {VALVES.map(v => (
                <Grid key={v.type} size={{ xs: 12, sm: 6, md: 4 }}>
                  <RangeCard
                    eyebrow="PANAM® Valves"
                    title={v.title}
                    description={v.description}
                    image={v.image}
                    to={routeFor(v.type)}
                    pill={
                      <>
                        <SpeedRoundedIcon />
                        {v.pressure} max
                      </>
                    }
                    chips={[v.size]}
                    footnote={v.materials}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={sectionSx("white")}>
          <Container maxWidth="lg">
            <ValveSelector rows={SELECTOR} />
          </Container>
        </Box>

        <Box component="section" sx={sectionSx("tint")}>
          <Container maxWidth="lg">
            <ValveCompliance />
          </Container>
        </Box>

        <FeatureTiles eyebrow="Why Panam" title="Why specify PANAM® Valves" subtitle="Every valve family is built to the same engineering standard — consistent materials and documentation across the range." items={FEATURES} />

        <Box component="section" sx={sectionSx("surface")}>
          <Container maxWidth="lg">
            <ValveFAQ />
          </Container>
        </Box>

        <CtaBand title="Specify your valve" text="Send us your pressure rating, material requirement, and end connections. Our technical team responds to instrumentation enquiries within 24 hours." primary={{ label: "Email Technical Sales", href: "mailto:sales@panamvalves.co.uk" }} secondary={{ label: "Request Quote", to: "/enquiry" }} />
      </CategoryPage>
    </>
  )
}
