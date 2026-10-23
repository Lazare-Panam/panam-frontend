import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import CableRoundedIcon from "@mui/icons-material/CableRounded"
import StraightenRoundedIcon from "@mui/icons-material/StraightenRounded"
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined"
import AppsRoundedIcon from "@mui/icons-material/AppsRounded"
import { CategoryHero, CategoryIntro, CategoryPage, CtaBand, FeatureTiles, HeroBadge, RangeCard } from "../../Common/CategoryIndexKit"
import { SectionHeader } from "../../Landing2/homeStyles"
import { C, sectionSx } from "../../Landing2/homeTokens"

const HERO_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/qc-hero.jpg"

const SERIES = ["ISO-A", "ISO 16028", "ISO 7241A", "ISO 7241B", "ISO 5675", "Screw Type"]

// ── EDIT RANGES HERE ──────────────────────────────────────────────────────
const RANGES = [
  {
    key: "quick-coupling",
    eyebrow: "PANAM® Quick Couplings",
    title: "Quick Couplings — Full Range",
    description: 'All six ISO series in a single filterable range. Carbon Steel, BSPP & NPT, 1/4" to 1". Socket, Plug and Set configurations across 100+ combinations.',
    image: "https://pblol2.blob.core.windows.net/panam-images/products/quick-coupling/iso-a",
    to: "/quick-coupling-and-tubing/quick-coupling",
    configurations: "100+",
    chips: SERIES,
    footnote: "Carbon Steel · BSPP & NPT · Socket · Plug · Set",
  },
  {
    key: "tubing",
    eyebrow: "PANAM® Tubing",
    title: "Seamless Tubing — Full Range",
    description: 'Seamless tubing in SS 316, Monel, Duplex, Inconel, 6Mo and Hastelloy. Imperial 1/16" to 2" and metric 3mm to 12mm. Standard and high-pressure ratings across 900+ configurations.',
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/tubing/tubing-1.jpg",
    to: "/quick-coupling-and-tubing/tubing",
    configurations: "900+",
    chips: ["Standard", "High Pressure", "Imperial", "Metric"],
    footnote: "SS 316 · Monel · Duplex · Inconel · 6Mo · Hastelloy",
  },
]
// ─────────────────────────────────────────────────────────────────────────

const SPECS = [
  { icon: <LayersOutlinedIcon />, label: "Series", value: "ISO-A · ISO 16028 · ISO 7241A · ISO 7241B · ISO 5675 · Screw Type" },
  { icon: <ScienceOutlinedIcon />, label: "Body Material", value: "Carbon Steel" },
  { icon: <CableRoundedIcon />, label: "Thread Standards", value: "BSPP · NPT" },
  { icon: <StraightenRoundedIcon />, label: "Connection Sizes", value: '1/4" · 3/8" · 1/2" · 3/4" · 1"' },
  { icon: <ExtensionOutlinedIcon />, label: "Configurations", value: "Socket · Plug · Set" },
  { icon: <AppsRoundedIcon />, label: "Total Configurations", value: "100+" },
]

const FEATURES = [
  "Six ISO coupling series from a single manufacturer",
  "Carbon Steel couplings across all series",
  "BSPP and NPT thread standards throughout",
  '1/4" to 1" coupling sizes across all series',
  "Socket and Plug on ISO-A, ISO 16028 and Screw Type",
  "Matched Sets on ISO 7241A, 7241B and 5675",
  "Seamless tubing in 12 materials",
  'Imperial 1/16" to 2" and metric 3mm to 12mm',
  "Standard and High Pressure tubing ratings",
  "Fully compatible with Panam twin-ferrule fittings",
  "ISO 5675 for agricultural tractor hydraulics",
  "Screw Type for vibration-resistant high-pressure lines",
]

const DESCRIPTION = "Six coupling series and seamless tubing in 12 materials — everything you need for hydraulic connections and instrumentation tubing from a single source."

// No pressure rating is published for this range, so the hero badge shows the six coupling series instead of a gauge
const SeriesBadge = () => (
  <HeroBadge width={{ xs: 200, md: 236 }}>
    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted }}>Coupling series</Typography>
    <Stack direction="row" sx={{ mt: 1.25, flexWrap: "wrap", gap: 0.75 }}>
      {SERIES.map((s, i) => (
        <Box key={s} component="span" sx={{ px: 1.1, py: 0.4, borderRadius: "8px", fontSize: "0.78rem", fontWeight: 700, bgcolor: i === 0 ? C.brand : C.tintBg, color: i === 0 ? C.white : C.brandDark }}>
          {s}
        </Box>
      ))}
    </Stack>
    <Stack direction="row" alignItems="baseline" spacing={0.75} sx={{ mt: 1.75, pt: 1.5, borderTop: `1px solid ${C.border}` }}>
      <Typography sx={{ fontWeight: 800, fontSize: "1.3rem", color: C.ink, letterSpacing: "-0.02em", lineHeight: 1 }}>100+</Typography>
      <Typography sx={{ fontSize: "0.78rem", color: C.muted }}>configurations</Typography>
    </Stack>
  </HeroBadge>
)

export default function QuickCouplingIndexPage() {
  return (
    <>
      <title>Quick Couplings &amp; Tubing | PANAM®</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="canonical" href="https://www.panamvalve.com/quick-coupling-and-tubing" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Quick Couplings & Tubing | PANAM®" />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content="https://www.panamvalve.com/quick-coupling-and-tubing" />
      <meta property="og:image" content={HERO_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Quick Couplings & Tubing | PANAM®" />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={HERO_IMAGE} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PANAM® Quick Couplings & Tubing",
          description: DESCRIPTION,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: RANGES.map((r, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: r.title,
              url: `https://www.panamvalve.com${r.to}`,
            })),
          },
        })}
      </script>

      <CategoryPage>
        <CategoryHero
          eyebrow="PANAM® Hydraulics"
          titleMain="Quick Couplings & Tubing"
          titleAccent="Built to Perform."
          description={DESCRIPTION}
          image={HERO_IMAGE}
          imageAlt="Panam quick couplings and seamless tubing"
          primary={{ label: "Explore range", href: "#range" }}
          secondary={{ label: "Request quote", to: "/enquiry" }}
          stats={[
            { value: String(SERIES.length), label: "Coupling series" },
            { value: "12", label: "Tubing materials" },
            { value: "900+", label: "Tubing configurations" },
          ]}
          badge={<SeriesBadge />}
        />

        <CategoryIntro
          eyebrow="Complete range"
          titleMain="One source."
          titleAccent="Couplings and tubing."
          paragraphs={[
            "PANAM® Quick Couplings and Seamless Tubing cover the full hydraulic connection and instrumentation tubing spectrum. Six coupling series — ISO-A, ISO 16028, ISO 7241A, ISO 7241B, ISO 5675, and Screw Type — plus seamless tubing in 12 materials across imperial and metric sizes.",
            'Socket and Plug configurations on ISO-A, ISO 16028, and Screw Type. ISO 7241A, ISO 7241B, and ISO 5675 as matched Sets. Tubing available in Standard and High Pressure ratings from 1/16" to 2" imperial and 3mm to 12mm metric.',
          ]}
          specs={SPECS}
        />

        <Box component="section" id="range" sx={{ ...sectionSx("surface"), scrollMarginTop: "100px" }}>
          <Container maxWidth="lg">
            <SectionHeader eyebrow="Product Range" title="Two Ranges. One Source." subtitle="Quick couplings filterable by ISO standard, thread type, connection size, and configuration. Tubing filterable by material, OD, wall thickness, and pressure rating." />
            {/* No pressure chart: the range publishes no psi ratings */}
            <Grid container spacing={3} justifyContent="center">
              {RANGES.map(r => (
                <Grid key={r.key} size={{ xs: 12, sm: 6, md: 4 }}>
                  <RangeCard
                    eyebrow={r.eyebrow}
                    title={r.title}
                    description={r.description}
                    image={r.image}
                    to={r.to}
                    pill={
                      <>
                        <AppsRoundedIcon />
                        {r.configurations} configurations
                      </>
                    }
                    chips={r.chips}
                    footnote={r.footnote}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <FeatureTiles eyebrow="Why Panam" title="Why specify PANAM® Quick Couplings & Tubing" subtitle="Consistent quality and construction across the range — confirm the standards your specification requires at enquiry." items={FEATURES} />

        <CtaBand title="Specify your product" text="Need a specific ISO series, thread standard, material, or pressure rating? Our technical team responds within 24 hours." primary={{ label: "Email Technical Sales", href: "mailto:sales@panamvalves.co.uk" }} secondary={{ label: "Request Quote", to: "/enquiry" }} />
      </CategoryPage>
    </>
  )
}
