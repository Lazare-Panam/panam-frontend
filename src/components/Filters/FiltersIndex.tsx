import React from "react"
import { Box, Container, Grid } from "@mui/material"
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded"
import GrainRoundedIcon from "@mui/icons-material/GrainRounded"
import StraightenRoundedIcon from "@mui/icons-material/StraightenRounded"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined"
import TuneRoundedIcon from "@mui/icons-material/TuneRounded"
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded"
import CallSplitRoundedIcon from "@mui/icons-material/CallSplitRounded"
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined"
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded"
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined"
import FilterSelector from "./FilterSelector"
import { CategoryHero, CategoryIntro, CategoryPage, CtaBand, FeatureTiles, GaugeBadge, RangeCard } from "../Common/CategoryIndexKit"
import { SectionHeader } from "../Landing2/homeStyles"
import { sectionSx } from "../Landing2/homeTokens"

// ── EDIT FILTER ROUTES HERE ───────────────────────────────────────────────
const FILTER_ROUTES: Record<string, string> = {
  ptf: "/filters/t-type",
  pif: "/filters/i-type",
  pse: "/filters/elements",
}
// ─────────────────────────────────────────────────────────────────────────

const HERO_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/filters/filters-hero.jpg"

const FILTERS = [
  {
    type: "ptf",
    title: "T-Type In-Line Filters",
    description: 'T-type configuration for instrumentation, process, and analytical applications. Stainless steel 316 construction with sintered or mesh elements across the full pore size range. Series TA, TB, TC, and TD covering 3mm to 12mm tube and 1/8" to 1/2" thread sizes.',
    image: "https://pblol2.blob.core.windows.net/panam-images/products/filters/PTF-TB-04-15-SS_JPG-removebg-preview.png",
    pressure: "1000 psi leak test",
    size: '3mm – 12mm tube · 1/8" – 1/2" thread',
    materials: "SS316 · Sintered & Mesh Elements",
  },
  {
    type: "pif",
    title: "In-Line Filters",
    description: 'In-line configuration for instrumentation, process, and analytical applications. Stainless steel 316 construction with sintered or mesh elements across the full pore size range. Series IA, IB, IC, and ID covering 3mm to 12mm tube and 1/8" to 1/2" thread sizes.',
    image: "https://pblol2.blob.core.windows.net/panam-images/products/filters/PIF-IA-02-2-SS_-_JPG-removebg-preview.png",
    pressure: "1000 psi leak test",
    size: '3mm – 12mm tube · 1/8" – 1/2" thread',
    materials: "SS316 · Sintered & Mesh Elements",
  },
  {
    type: "pse",
    title: "Replacement Filter Elements",
    description: "Replacement filter elements (cartridges) for PIF In-Line and PTF T-Type filter housings. Stainless steel 316 sintered or mesh construction across 0.5μm to 440μm pore sizes. Small-bore elements fit IA/IB/TA/TB housings; large-bore elements fit IC/ID/TC/TD housings.",
    image: "https://pblol2.blob.core.windows.net/panam-images/products/filters/PIF-IA-02-2-SS_-_JPG-removebg-preview.png",
    pressure: "Spare kit",
    size: "Fits PIF & PTF Housings",
    materials: "SS316 · Sintered & Mesh Elements",
  },
]

const SPECS = [
  { icon: <SpeedRoundedIcon />, label: "Testing", value: "Nitrogen leak test at 1000 psi" },
  { icon: <GrainRoundedIcon />, label: "Pore Size Range", value: "0.5 μm to 440 μm" },
  { icon: <StraightenRoundedIcon />, label: "Size Range", value: '3mm – 12mm tube · 1/8" – 1/2" thread' },
  { icon: <ScienceOutlinedIcon />, label: "Material", value: "Stainless Steel 316" },
  { icon: <LayersOutlinedIcon />, label: "Element Types", value: "Sintered & Mesh" },
  { icon: <TuneRoundedIcon />, label: "Configurations", value: "624+ configurations across 2 series" },
  { icon: <ViewListRoundedIcon />, label: "Series", value: "PTF (T-Type) · PIF (In-Line)" },
]

// What each family is for, used by the selection guide
const FILTER_NEEDS: Record<string, { need: string; icon: React.ReactNode }> = {
  ptf: { need: "T-type filtration on instrumentation, process or analytical lines", icon: <CallSplitRoundedIcon /> },
  pif: { need: "In-line filtration on instrumentation, process or analytical lines", icon: <FilterAltOutlinedIcon /> },
  pse: { need: "Replace the element in a PIF or PTF filter housing", icon: <AutorenewRoundedIcon /> },
}

const FEATURES = [
  "Two filter families from a single trusted manufacturer",
  "Stainless Steel 316 construction across all series",
  "Sintered and mesh elements from 0.5μm to 440μm",
  "Nitrogen leak tested at 1000 psi",
  "T-Type and In-Line configurations available",
  '3mm to 12mm tube and 1/8" to 1/2" thread sizes',
  "624+ configurations across PTF and PIF series",
  "Suitable for instrumentation, process, and analytical applications",
  "Oxygen-service cleaning available (OXY option)",
  "Series TA, TB, TC, TD, IB, IA, IC, and ID covered",
  "Pore size code in part numbers: 05 = 0.5μm, 2 = 2μm, 7 = 7μm",
  "Replacement elements for PIF In-Line and PTF T-Type housings",
]

const routeFor = (type: string) => FILTER_ROUTES[type] ?? `/products/filters/${type}`

const SELECTOR = FILTERS.map(f => ({ ...FILTER_NEEDS[f.type], valve: f.title, to: routeFor(f.type), pressure: f.pressure, size: f.size }))

export default function FiltersIndexPage() {
  return (
    <>
      <title>Instrumentation Filters | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® Instrumentation Filters — T-Type and In-Line configurations, SS316, sintered and mesh elements 0.5 to 440 micron, nitrogen leak tested at 1000 psi. 3mm to 12mm tube, 1/8 to 1/2 inch thread. 624+ configurations. Request a quote." />
      <meta name="keywords" content="instrumentation filters, inline filters, T-type filters, SS316 filters, sintered filter elements, PTF PIF filters" />
      <link rel="canonical" href="https://www.panamvalve.com/filters" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="product" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Instrumentation Filters | PANAM® Instrumentation" />
      <meta property="og:description" content="Two filter families, one standard. PANAM® T-Type and In-Line Filters in SS316, 0.5 to 440 micron, nitrogen leak tested at 1000 psi." />
      <meta property="og:url" content="https://www.panamvalve.com/filters" />
      <meta property="og:image" content={HERO_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Instrumentation Filters | PANAM® Instrumentation" />
      <meta name="twitter:description" content="Two filter families, one standard. PANAM® T-Type and In-Line Filters in SS316, 0.5 to 440 micron, nitrogen leak tested at 1000 psi." />
      <meta name="twitter:image" content={HERO_IMAGE} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PANAM® Instrumentation Filters",
          description: "PANAM® Instrumentation Filters — T-Type and In-Line configurations, SS316, sintered and mesh elements 0.5 to 440 micron, nitrogen leak tested at 1000 psi.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: FILTERS.map((f, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: f.title,
              url: `https://www.panamvalve.com${routeFor(f.type)}`,
            })),
          },
        })}
      </script>

      <CategoryPage>
        <CategoryHero
          eyebrow="PANAM® Instrumentation"
          titleMain="Filters"
          titleAccent="Built to Last."
          description="Two filter families — T-Type and In-Line — covering the full instrumentation tube and pipe range. Sintered and mesh elements from 0.5μm to 440μm. SS316 construction, nitrogen leak tested at 1000 psi."
          image={HERO_IMAGE}
          imageAlt="PANAM® instrumentation filters"
          primary={{ label: "Explore range", href: "#range" }}
          secondary={{ label: "Request quote", to: "/enquiry" }}
          stats={[
            { value: "1000", label: "psi leak tested" },
            { value: "0.5–440", label: "μm pore size" },
            { value: "624+", label: "Configurations" },
          ]}
          // Filters carry a leak-test figure, not a rated working pressure, so the label says so
          badge={<GaugeBadge value="1000 psi" label="Nitrogen leak tested" />}
        />

        <CategoryIntro
          eyebrow="Complete range"
          titleMain="One source."
          titleAccent="Every filter you need."
          paragraphs={[
            "PANAM® Filters cover the full instrumentation and process spectrum — T-Type and In-Line configurations engineered for clean, regulated filtration. Both series share the same SS316 construction, sintered and mesh element options, and test procedure: a 1000 psi nitrogen leak test.",
            'All filter series are available with sintered or mesh elements from 0.5μm to 440μm, covering 3mm to 12mm tube and 1/8" to 1/2" thread sizes with 624+ configurations across the range.',
          ]}
          specs={SPECS}
        />

        <Box component="section" id="range" sx={{ ...sectionSx("surface"), scrollMarginTop: "100px" }}>
          <Container maxWidth="lg">
            <SectionHeader eyebrow="Product Range" title="Two Families. One Standard." subtitle="Each filter series is purpose-built for a specific configuration and application. Select by connection type, pore size, or tube range." />
            {/* No PressureCoverage: both families share one leak-test figure, not a rated working pressure */}
            <Grid container spacing={3} justifyContent="center">
              {FILTERS.map(f => (
                <Grid key={f.type} size={{ xs: 12, sm: 6, md: 4 }}>
                  <RangeCard
                    eyebrow="PANAM® Filters"
                    title={f.title}
                    description={f.description}
                    image={f.image}
                    to={routeFor(f.type)}
                    pill={
                      f.type === "pse" ? (
                        <>
                          <BuildOutlinedIcon />
                          {f.pressure}
                        </>
                      ) : (
                        <>
                          <SpeedRoundedIcon />
                          Leak tested to 1000 psi
                        </>
                      )
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
            <FilterSelector rows={SELECTOR} />
          </Container>
        </Box>

        <FeatureTiles eyebrow="Why Panam" title="Why specify PANAM® Filters" subtitle="Both filter families are built to the same engineering standard — consistent materials, construction, and test procedures across the entire range." items={FEATURES} />

        <CtaBand title="Specify your filter" text="Send us your pore size requirement, tube size, and connection type. Our technical team responds to instrumentation enquiries within 24 hours." primary={{ label: "Email Technical Sales", href: "mailto:sales@panamvalves.co.uk" }} secondary={{ label: "Request Quote", to: "/enquiry" }} />
      </CategoryPage>
    </>
  )
}
