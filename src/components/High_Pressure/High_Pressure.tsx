import { Box, Container } from "@mui/material"
import Grid from "@mui/material/Grid"
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import CableRoundedIcon from "@mui/icons-material/CableRounded"
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined"
import CallSplitRoundedIcon from "@mui/icons-material/CallSplitRounded"
import HighPressureFAQ from "./HighPressureFAQ"
import HighPressureSeries from "./HighPressureSeries"
import HighPressureCompliance from "./HighPressureCompliance"
import { CategoryHero, CategoryIntro, CategoryPage, CtaBand, FeatureTiles, GaugeBadge, PressureCoverage, RangeCard } from "../Common/CategoryIndexKit"
import { SectionHeader } from "../Landing2/homeStyles"
import { sectionSx } from "../Landing2/homeTokens"

const PRODUCTS = [
  {
    title: "High Pressure Cone & Thread Fittings",
    description: 'Six categories of high pressure fittings in SS 316 — connectors, unions, adapters, elbows, tees, crosses, hex nipples, caps, plugs, glands and collars. Medium Pressure at 20,000 psi and High Pressure at 60,000 psi across tube ODs from 1/4" to 1".',
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/high-pressure-fittings/PMC-4MF-4N-SS.jpg",
    pressure: "10,000 – 60,000 psi",
    link: "/high-pressure/fittings",
  },
  {
    title: "High Pressure Pipe Fittings",
    description: 'High pressure pipe fittings in SS 316 — hex nipples, reducing hex nipples, couplings, and adapters across NPT, ISO Parallel, and 37° JIC. 10,000 to 15,000 psi. Sizes from 1/8" to 2".',
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/high-pressure-pipe-fittings/hex-nipples.jpg",
    pressure: "10,000 – 15,000 psi",
    link: "/high-pressure/pipe-fittings",
  },
  {
    title: "High Pressure Needle Valves",
    subtitle: "10,000 – 60,000 psi",
    description: "Panam HP Needle Valves in SS 316 across five pressure series — HP (10,000 psi), HP1 (15,000 psi), HP2 (20,000 psi), HP3 (30,000 psi), and HP6 (60,000 psi). NPT, MP Cone, and HP Cone thread connections. Straight, Angle, 3-Way, and 2-Stem Manifold configurations.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/high-pressure/hp-nv.jpg",
    pressure: "10,000 – 60,000 psi",
    link: "/high-pressure/needle-valves",
  },
  {
    title: "High Pressure Double Block & Bleed Valves",
    subtitle: "15,000 – 20,000 psi",
    description: "Panam HP Double Block & Bleed Valves in SS 316 for pressures up to 20,000 psi. Ball-Needle-Ball at 15,000 psi and Needle-Needle at 20,000 psi. NPT Female and MP Cone & Thread Female connections.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/high-pressure/hp-dbb.jpg",
    pressure: "15,000 – 20,000 psi",
    link: "/high-pressure/double-block-and-valves",
  },
  {
    title: "High Pressure Ball Valves",
    subtitle: "10,000 – 20,000 psi",
    description: "Panam HP Ball Valves in SS 316 across three pressure series — HP (10,000 psi), HP1 (15,000 psi), and HP2 (15,000–20,000 psi). 2-Way, 3-Way 180° Turn, and 3-Way 90° Turn Diverter configurations.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/high-pressure/hp-bv.jpg",
    pressure: "10,000 – 20,000 psi",
    link: "/high-pressure/ball-valves",
  },
  {
    title: "High Pressure Cone & Threaded Nipples",
    subtitle: "20,000 – 60,000 psi",
    description: 'Panam HP Cone & Threaded Nipples in SS 316. MP Cone & Thread at 20,000 psi and HP Cone & Thread at 60,000 psi. Available in 1/4", 3/8", 9/16", 3/4" and 1" OD across multiple lengths.',
    image: "https://pblol2.blob.core.windows.net/panam-images/products/high-pressure/hp-cone.png",
    pressure: "20,000 – 60,000 psi",
    link: "/high-pressure/cones-threaded-nipples",
  },
  {
    title: "High Pressure 2-Valve Manifolds",
    subtitle: "15,000 – 20,000 psi",
    description: "Panam 2-Valve Manifolds in SS 316 for high pressure gauge and absolute pressure transmitter applications. 15,000 psi with NPT Female and 20,000 psi with MP Cone & Thread Female connections.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/needle-valves/cover-needle.jpg",
    pressure: "15,000 – 20,000 psi",
    link: "/high-pressure/2-valve-manifolds",
  },
]

const SPECS = [
  { icon: <SpeedRoundedIcon />, label: "Pressure Range", value: "10,000 – 60,000 psi" },
  { icon: <ScienceOutlinedIcon />, label: "Material", value: "SS 316" },
  { icon: <CableRoundedIcon />, label: "Connection Types", value: "NPT · MP Cone & Thread · HP Cone & Thread" },
  { icon: <Inventory2OutlinedIcon />, label: "Products", value: "Needle Valves · DBB · Ball Valves · Nipples · Manifolds" },
  { icon: <CallSplitRoundedIcon />, label: "Configurations", value: "Straight · Angle · 3-Way · 2-Stem Manifold" },
]

const FEATURES = [
  "SS 316 construction across all products",
  "10,000 to 60,000 psi pressure coverage",
  "NPT, MP Cone & Thread, HP Cone & Thread connections",
  "Needle, Ball, DBB, and Manifold configurations",
  "HP Needle Valves in 5 pressure series (HP – HP6)",
  "Ball Valves in 2-Way, 3-Way 180° and 90° Diverter",
  "DBB in Ball-Needle-Ball and Needle-Needle configurations",
  'Cone & Thread Nipples from 2.75" to 12" length',
  "2-Valve Manifolds for gauge and DP transmitters",
  '1/4" to 1" connection sizes across the range',
  "Technical documentation and material certificates on request",
]

const shortName = (title: string) => title.replace(/^High Pressure /, "")

// "10,000 – 60,000 psi" -> { min: 10000, max: 60000 }
const parseRange = (s: string) => {
  const nums = s.match(/[\d,]+/g)?.map(n => Number(n.replace(/,/g, ""))) ?? [0, 0]
  return { min: nums[0], max: nums[nums.length - 1] }
}

const COVERAGE = PRODUCTS.map(p => ({ name: shortName(p.title), to: p.link, ...parseRange(p.pressure) }))

export default function HighPressureIndexPage() {
  return (
    <>
      <title>PANAM® High Pressure Valves & Fittings | 10,000–60,000 psi</title>
      <meta name="description" content="Panam high pressure valves and fittings, 10,000–60,000 psi: needle, double block & bleed and ball valves, cone & thread nipples, 2-valve manifolds. SS 316." />
      <meta name="keywords" content="high pressure needle valves, high pressure ball valves, double block and bleed valves, cone threaded nipples, 2-valve manifolds, hydrogen valves, 60000 psi valves, SS316 high pressure fittings" />
      <meta property="og:title" content="PANAM® High Pressure Valves & Fittings | Hydrogen Ready | 10,000 – 60,000 psi" />
      <meta property="og:description" content="Five high pressure product families — needle valves, DBB, ball valves, nipples, and manifolds — rated from 10,000 to 60,000 psi in SS 316." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.panamvalve.com/high-pressure" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PANAM® High Pressure Valves & Fittings",
          description: "Five high pressure product families — needle valves, double block & bleed, ball valves, cone & threaded nipples, and 2-valve manifolds — rated 10,000 to 60,000 psi in SS 316.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: PRODUCTS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: `https://www.panamvalve.com${p.link}`,
            })),
          },
        })}
      </script>
      <CategoryPage>
        <CategoryHero
          eyebrow="PANAM® High Pressure"
          titleMain="High Pressure Valves"
          titleAccent="Built to Withstand."
          description="Needle valves, double block & bleed valves, ball valves, cone & threaded nipples, and 2-valve manifolds — all rated from 10,000 to 60,000 psi in SS 316."
          image="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/high-pressure/hp-hero.jpg"
          imageAlt="Panam high pressure valves"
          primary={{ label: "Explore range", href: "#range" }}
          secondary={{ label: "Request quote", href: "mailto:sales@panamvalves.co.uk" }}
          stats={[
            { value: "60k", label: "psi max rating" },
            { value: String(PRODUCTS.length), label: "Product families" },
            { value: "SS 316", label: "Construction" },
          ]}
          badge={<GaugeBadge value="60,000 psi" />}
        />

        <CategoryIntro
          eyebrow="Complete range"
          titleMain="One source."
          titleAccent="Every high pressure product."
          paragraphs={[
            "Panam High Pressure products cover the full spectrum from 10,000 to 60,000 psi — needle valves, double block & bleed valves, ball valves, cone & threaded nipples, and 2-valve manifolds. All manufactured in SS 316 with NPT, MP Cone & Thread, and HP Cone & Thread connections.",
            'Five needle valve pressure series (HP through HP6), three ball valve series, Ball-Needle-Ball and Needle-Needle DBB configurations, and cone & thread nipples available in lengths from 2.75" to 12".',
          ]}
          specs={SPECS}
        />

        <Box component="section" id="range" sx={{ ...sectionSx("surface"), scrollMarginTop: "100px" }}>
          <Container maxWidth="lg">
            <SectionHeader eyebrow="Product Range" title="Five Products. One Standard." subtitle="Each product is purpose-built for its pressure class and application. Select by valve type, pressure rating, or connection standard." />
            <Box sx={{ mb: { xs: 4, md: 5 } }}>
              <PressureCoverage items={COVERAGE} maxPsi={60000} ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000]} />
            </Box>
            <Grid container spacing={3}>
              {PRODUCTS.map(p => (
                <Grid key={p.title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <RangeCard
                    eyebrow="PANAM® High Pressure"
                    title={p.title}
                    description={p.description}
                    image={p.image}
                    to={p.link}
                    pill={
                      <>
                        <SpeedRoundedIcon />
                        {p.pressure}
                      </>
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={sectionSx("white")}>
          <Container maxWidth="lg">
            <HighPressureSeries />
          </Container>
        </Box>

        <Box component="section" sx={sectionSx("tint")}>
          <Container maxWidth="lg">
            <HighPressureCompliance />
          </Container>
        </Box>

        <FeatureTiles eyebrow="Why Panam" title="Why specify PANAM® High Pressure products" subtitle="All five product families are built to the same engineering standard — consistent materials, construction, and test procedures across the entire range." items={FEATURES} />

        <Box component="section" sx={sectionSx("surface")}>
          <Container maxWidth="lg">
            <HighPressureFAQ />
          </Container>
        </Box>

        <CtaBand title="Specify your high pressure product" text="Need a specific pressure series, connection type, or configuration? Our technical team responds to high pressure enquiries within 24 hours." primary={{ label: "Email Technical Sales", href: "mailto:sales@panamvalves.co.uk" }} secondary={{ label: "Request Quote", to: "/enquiry" }} />
      </CategoryPage>
    </>
  )
}
