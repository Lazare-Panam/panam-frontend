import React from "react"
import { Box, Container, Grid } from "@mui/material"
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded"
import StraightenRoundedIcon from "@mui/icons-material/StraightenRounded"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import CableRoundedIcon from "@mui/icons-material/CableRounded"
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"
import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded"
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded"
import PlumbingRoundedIcon from "@mui/icons-material/PlumbingRounded"
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined"
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined"
import FittingsFAQ from "./FittingsFAQ"
import FittingsSelector from "./FittingsSelector"
import FittingsCompliance from "./FittingsCompliance"
import { CategoryHero, CategoryIntro, CategoryPage, CtaBand, FeatureTiles, GaugeBadge, RangeCard } from "../Common/CategoryIndexKit"
import { SectionHeader } from "../Landing2/homeStyles"
import { sectionSx } from "../Landing2/homeTokens"

// ── EDIT FITTING ROUTES HERE ──────────────────────────────────────────────
const FITTING_ROUTES: Record<string, string> = {
  "tube-fittings": "/instrumentation-fittings/tube-fittings",
  "37-jic-fittings": "/instrumentation-fittings/jic-fittings",
  "pipe-fittings": "/instrumentation-fittings/pipe-fittings",
  "weld-fittings": "/instrumentation-fittings/weld-fittings",
  "swivel-gauge-adaptors": "/instrumentation-fittings/swivel-gauge-adaptors",
  "tube-clamps": "/instrumentation-fittings/tube-clamps",
}
// ─────────────────────────────────────────────────────────────────────────

const FITTINGS = [
  {
    type: "tube-fittings",
    title: "Tube Fittings",
    description: "Single and double ferrule designs for secure, leak-tight performance in demanding instrumentation and process applications.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-connector",
    pressure: "High Pressure",
    size: '1/16" to 2" OD · 3–50 mm OD',
    materials: "SS316 · Duplex · Monel · Hastelloy · Brass",
  },
  {
    type: "37-jic-fittings",
    title: "37° JIC Fittings",
    description: "High-performance flare fittings for critical hydrogen, chemical, and industrial gas systems with leak-tight 37° flare sealing.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/jic/flare/male-connector-jic.jpg",
    pressure: "10,000 psig",
    size: '1/16" to 2"',
    materials: "SS316 · Duplex · Monel · Hastelloy",
  },
  {
    type: "pipe-fittings",
    title: "Pipe Fittings",
    description: "Engineered for extreme operating conditions including hydrogen storage, fuel cell technology, aerospace, and cryogenic applications.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/pipe-fittings/swivel-run-tee.png",
    pressure: "15,000 psig",
    size: '1/16" to 2"',
    materials: "SS316 · Duplex · Monel · Hastelloy",
  },
  {
    type: "weld-fittings",
    title: "Weld Fittings",
    description: "Socket and butt weld configurations for permanent, high-integrity connections in hydrogen systems, chemical processing, and industrial gas networks.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/weld-fittings/connector-weld.jpg",
    pressure: "10,000 psig",
    size: '1/16" to 2"',
    materials: "SS316 · Duplex · Monel · Hastelloy",
  },
  {
    type: "swivel-gauge-adaptors",
    title: "Swivel Gauge Adaptors",
    description: "360° adjustable gauge positioning with silver-plated anti-gall threads. Compatible with NPT, BSPP, BSPT, metric, and global thread standards.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/swivel-gauge/PSGA-8N-SS - JPG.jpg",
    pressure: "High Pressure",
    size: "Multiple thread sizes",
    materials: "SS316 · Duplex · Monel",
  },
  {
    type: "tube-clamps",
    title: "Tube Clamps",
    description: "Twin, single layer, double layer and heavy series tube clamps in DIN Groups 1–10. Covers pipe OD from 4mm to 219mm with M6 through M30 bolt sizes. PP jaws included in every set.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/tube-clamps/Twin-Series-Tube-Clamp.jpeg",
    pressure: "DIN Groups 1–10",
    size: "4mm – 219mm OD",
    materials: "SS · PP Jaws · M6 – M30 Bolts",
  },
]

const SPECS = [
  { icon: <SpeedRoundedIcon />, label: "Max Working Pressure", value: "Up to 15,000 psig (1,034 bar)" },
  { icon: <StraightenRoundedIcon />, label: "Size Range", value: '1/16" to 2" OD · 3 mm to 50 mm OD' },
  { icon: <ScienceOutlinedIcon />, label: "Materials", value: "SS316, Duplex, Monel, Hastelloy, Brass" },
  { icon: <CableRoundedIcon />, label: "End Connections", value: "NPT, BSPP, BSPT, 37° Flare, JIC Swivel, Socket Weld" },
  { icon: <FactCheckOutlinedIcon />, label: "Test Standard", value: "ASTM F1387 type tested" },
  { icon: <DescriptionOutlinedIcon />, label: "Documentation", value: "Material certificates available on request" },
]

// What each family is for, used by the selection guide
const FITTING_NEEDS: Record<string, { need: string; icon: React.ReactNode }> = {
  "tube-fittings": { need: "Leak-tight compression joints on instrument tubing", icon: <RadioButtonCheckedRoundedIcon /> },
  "37-jic-fittings": { need: "37° flare connections on hydrogen, chemical or gas lines", icon: <ChangeHistoryRoundedIcon /> },
  "pipe-fittings": { need: "Threaded pipe connections up to 15,000 psig", icon: <PlumbingRoundedIcon /> },
  "weld-fittings": { need: "Permanent, high-integrity welded joints", icon: <LocalFireDepartmentOutlinedIcon /> },
  "swivel-gauge-adaptors": { need: "Mount a pressure gauge and turn it to face you", icon: <SpeedRoundedIcon /> },
  "tube-clamps": { need: "Support and secure tube and pipe runs", icon: <ViewWeekOutlinedIcon /> },
}

const FEATURES = [
  "Six fitting families from a single trusted manufacturer",
  "SS316, Duplex, Monel, Hastelloy, and Brass across all families",
  "ASTM F1387 type tested for leak-tight performance",
  "Material certificates available on request",
  'Fractional 1/16" to 2" and metric 3–50 mm OD',
  "NPT, BSPP, BSPT, 37° flare, JIC swivel, and socket weld ends",
  "Silver-plated anti-gall threads on swivel gauge adaptors",
  "Pressures from standard to 15,000 psig across the range",
]

const routeFor = (type: string) => FITTING_ROUTES[type] ?? `/fittings/${type}`

const SELECTOR = FITTINGS.map(f => ({ ...FITTING_NEEDS[f.type], valve: f.title, to: routeFor(f.type), pressure: f.pressure, size: f.size }))

export default function FittingsPage() {
  return (
    <>
      <title>Instrumentation Fittings and Valve Range | Panam Valves Ltd.</title>
      <meta name="description" content="PANAM® instrumentation fittings: tube, 37° JIC, pipe, weld & swivel gauge adaptors in SS316, Duplex, Monel & Hastelloy. Rated to 15,000 psig. Request a quote." />
      <link rel="canonical" href="https://www.panamvalve.com/instrumentation-fittings" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Instrumentation Fittings | Tube, JIC, Pipe & Weld | PANAM®" />
      <meta property="og:description" content="PANAM® instrumentation fittings: tube, 37° JIC, pipe, weld & swivel gauge adaptors in SS316, Duplex, Monel & Hastelloy. Rated to 15,000 psig." />
      <meta property="og:url" content="https://www.panamvalve.com/instrumentation-fittings" />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/blog/vladyslav-cherkasenko-2jftyBtoqzQ-unsplash.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Instrumentation Fittings | Tube, JIC, Pipe & Weld | PANAM®" />
      <meta name="twitter:description" content="PANAM® instrumentation fittings: tube, 37° JIC, pipe, weld & swivel gauge adaptors in SS316, Duplex, Monel & Hastelloy. Rated to 15,000 psig." />
      <meta name="twitter:image" content="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/blog/vladyslav-cherkasenko-2jftyBtoqzQ-unsplash.jpg" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PANAM® Instrumentation Fittings",
          description: "Six instrumentation fitting families — Tube, 37° JIC, Pipe, Weld, Swivel Gauge Adaptors, and Tube Clamps — rated to 15,000 psig.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: FITTINGS.map((f, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: f.title,
              url: `https://www.panamvalve.com${FITTING_ROUTES[f.type] ?? `/fittings/${f.type}`}`,
            })),
          },
        })}
      </script>

      <CategoryPage>
        <CategoryHero
          eyebrow="PANAM® Instrumentation"
          titleMain="Fittings"
          titleAccent="Built to Hold."
          description="Six fitting families — Tube, 37° JIC, Pipe, Weld, Swivel Gauge Adaptors, and Tube Clamps — covering fractional and metric sizes up to 15,000 psig across the world's most demanding fluid systems."
          image="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/blog/vladyslav-cherkasenko-2jftyBtoqzQ-unsplash.jpg"
          imageAlt="Panam instrumentation fittings"
          primary={{ label: "Explore range", href: "#range" }}
          secondary={{ label: "Request quote", to: "/enquiry" }}
          stats={[
            { value: "15k", label: "psig max rating" },
            { value: String(FITTINGS.length), label: "Fitting families" },
            { value: '1/16"–2"', label: "Fractional OD" },
          ]}
          badge={<GaugeBadge value="15,000 psig" />}
        />

        <CategoryIntro
          eyebrow="Complete range"
          titleMain="One source."
          titleAccent="Every fitting you need."
          paragraphs={[
            "PANAM® Fittings cover the full instrumentation and process spectrum — from precision tube fittings for leak-tight connections, to 37° JIC flare, high-pressure pipe fittings, permanent weld configurations, and 360° swivel gauge adaptors. Every family shares the same material standards, certification options, and quality controls.",
            "All fitting families are available in SS316, Duplex, Monel, and Hastelloy with material certificates available on request.",
          ]}
          specs={SPECS}
        />

        <Box component="section" id="range" sx={{ ...sectionSx("surface"), scrollMarginTop: "100px" }}>
          <Container maxWidth="lg">
            <SectionHeader eyebrow="Product Range" title="Six Families. One Standard." subtitle="Each fitting family is purpose-built for a specific connection type and pressure class. Select by application, working pressure, or end connection." />
            <Grid container spacing={3} justifyContent="center">
              {FITTINGS.map(f => (
                <Grid key={f.type} size={{ xs: 12, sm: 6, md: 4 }}>
                  <RangeCard
                    eyebrow="PANAM® Fittings"
                    title={f.title}
                    description={f.description}
                    image={f.image}
                    to={routeFor(f.type)}
                    pill={
                      <>
                        <SpeedRoundedIcon />
                        {f.pressure}
                      </>
                    }
                    chips={[f.size]}
                    footnote={f.materials}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={sectionSx("white")}>
          <Container maxWidth="lg">
            <FittingsSelector rows={SELECTOR} />
          </Container>
        </Box>

        <Box component="section" sx={sectionSx("tint")}>
          <Container maxWidth="lg">
            <FittingsCompliance />
          </Container>
        </Box>

        <FeatureTiles eyebrow="Why Panam" title="Why specify PANAM® Fittings" subtitle="Every fitting family is built to the same engineering standard — consistent materials and documentation across the range." items={FEATURES} />

        <Box component="section" sx={sectionSx("surface")}>
          <Container maxWidth="lg">
            <FittingsFAQ />
          </Container>
        </Box>

        <CtaBand title="Specify your fitting" text="Send us your pressure rating, material requirement, and end connections. Our technical team responds to instrumentation enquiries within 24 hours." primary={{ label: "Email Technical Sales", href: "mailto:sales@panamvalves.co.uk" }} secondary={{ label: "Request Quote", to: "/enquiry" }} />
      </CategoryPage>
    </>
  )
}
