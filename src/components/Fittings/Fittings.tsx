import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { Box, Container, Grid, Stack, Typography } from "@mui/material"
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
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded"
import FittingsFAQ from "./FittingsFAQ"
import { CategoryHero, CategoryIntro, CategoryPage, CtaBand, FeatureTiles, HeroBadge, RangeCard } from "../Common/CategoryIndexKit"
import { SectionHeader } from "../Landing2/homeStyles"
import { C, sectionSx } from "../Landing2/homeTokens"

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

// Connection-type shortcuts under the hero: one per family
const CONNECTION_TYPES: Record<string, { label: string; icon: React.ReactNode }> = {
  "tube-fittings": { label: "Compression", icon: <RadioButtonCheckedRoundedIcon /> },
  "37-jic-fittings": { label: "37° flare", icon: <ChangeHistoryRoundedIcon /> },
  "pipe-fittings": { label: "Threaded", icon: <PlumbingRoundedIcon /> },
  "weld-fittings": { label: "Welded", icon: <LocalFireDepartmentOutlinedIcon /> },
  "swivel-gauge-adaptors": { label: "Gauge mounting", icon: <SpeedRoundedIcon /> },
  "tube-clamps": { label: "Tube support", icon: <ViewWeekOutlinedIcon /> },
}

const MATERIALS = ["SS316", "Duplex", "Monel", "Hastelloy", "Brass"]

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

// Materials card floating over the hero photo
const MaterialsBadge = () => (
  <HeroBadge width={{ xs: 200, md: 236 }}>
    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted }}>Available in</Typography>
    <Stack direction="row" sx={{ mt: 1.25, flexWrap: "wrap", gap: 0.75 }}>
      {MATERIALS.map((m, i) => (
        <Box key={m} component="span" sx={{ px: 1.1, py: 0.4, borderRadius: "8px", fontSize: "0.78rem", fontWeight: 700, bgcolor: i === 0 ? C.brand : C.tintBg, color: i === 0 ? C.white : C.brandDark }}>
          {m}
        </Box>
      ))}
    </Stack>
    <Stack direction="row" alignItems="baseline" spacing={0.75} sx={{ mt: 1.75, pt: 1.5, borderTop: `1px solid ${C.border}` }}>
      <Typography sx={{ fontWeight: 800, fontSize: "1.3rem", color: C.ink, letterSpacing: "-0.02em", lineHeight: 1 }}>15,000</Typography>
      <Typography sx={{ fontSize: "0.78rem", color: C.muted }}>psig max</Typography>
    </Stack>
  </HeroBadge>
)

export default function FittingsPage() {
  return (
    <>
      <title>Instrumentation Fittings and Instrumentation Valve Range - Panam Valves Ltd.</title>
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
          badge={<MaterialsBadge />}
        />

        {/* Connection-type shortcuts, overlapping the hero edge */}
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, mt: { xs: -4, md: -6 } }}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)", md: "repeat(6, 1fr)" }, bgcolor: C.white, borderRadius: "22px", border: `1px solid ${C.border}`, boxShadow: "0 1px 2px rgba(15,23,42,0.04), 0 20px 50px rgba(15,34,54,0.10)", overflow: "hidden" }}>
            {FITTINGS.map((f, i) => {
              const conn = CONNECTION_TYPES[f.type]
              return (
                <Box
                  key={f.type}
                  component={RouterLink}
                  to={routeFor(f.type)}
                  viewTransition
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.25,
                    p: { xs: 2, md: 2.5 },
                    textDecoration: "none",
                    borderLeft: { xs: i % 2 === 1 ? `1px solid ${C.border}` : "none", sm: i % 3 !== 0 ? `1px solid ${C.border}` : "none", md: i > 0 ? `1px solid ${C.border}` : "none" },
                    borderTop: { xs: i > 1 ? `1px solid ${C.border}` : "none", sm: i > 2 ? `1px solid ${C.border}` : "none", md: "none" },
                    transition: "background-color 0.2s ease",
                    "&:hover": { bgcolor: C.tintBg },
                    "&:hover .icon": { bgcolor: C.brand, color: C.white },
                    "&:hover .go": { opacity: 1, transform: "translate(0,0)" },
                  }}>
                  <Box className="icon" sx={{ width: 40, height: 40, borderRadius: "12px", bgcolor: C.tintBg, color: C.brand, display: "grid", placeItems: "center", transition: "all 0.2s ease", "& svg": { fontSize: 21 } }}>
                    {conn?.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "0.72rem", fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em" }}>{conn?.label}</Typography>
                    <Typography sx={{ mt: 0.25, fontWeight: 700, fontSize: "0.92rem", color: C.ink, lineHeight: 1.3 }}>{f.title}</Typography>
                  </Box>
                  <NorthEastRoundedIcon className="go" sx={{ position: "absolute", top: 14, right: 14, fontSize: 18, color: C.brand, opacity: 0, transform: "translate(-4px,4px)", transition: "all 0.2s ease" }} />
                </Box>
              )
            })}
          </Box>
        </Container>

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
            <Grid container spacing={3}>
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
