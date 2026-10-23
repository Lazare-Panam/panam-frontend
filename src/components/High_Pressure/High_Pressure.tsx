import { Box, Container, Typography, Stack, GlobalStyles } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Link as RouterLink } from "react-router-dom"
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import CableRoundedIcon from "@mui/icons-material/CableRounded"
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined"
import CallSplitRoundedIcon from "@mui/icons-material/CallSplitRounded"
import HighPressureFAQ from "./HighPressureFAQ"
import HighPressureSeries from "./HighPressureSeries"
import HighPressureCompliance from "./HighPressureCompliance"
import { CategoryHero, CategoryIntro, CategoryPage, CtaBand, FeatureTiles, RangeCard } from "../Common/CategoryIndexKit"
import { SectionHeader } from "../Landing2/homeStyles"
import { C, GRADIENT, SHADOW, cardSx, sectionSx } from "../Landing2/homeTokens"

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

const MAX_PSI = 60000

// "10,000 – 60,000 psi" -> [10000, 60000]
const parseRange = (s: string) => {
  const nums = s.match(/[\d,]+/g)?.map(n => Number(n.replace(/,/g, ""))) ?? [0, 0]
  return [nums[0], nums[nums.length - 1]] as const
}
const shortName = (title: string) => title.replace(/^High Pressure /, "")

// Gauge badge on the hero photo: needle sweeps to full scale on load
const PressureGauge = () => (
  <Box sx={{ position: "absolute", right: { xs: 16, md: -24 }, bottom: { xs: 16, md: 32 }, width: { xs: 170, md: 210 }, p: 2, borderRadius: "20px", bgcolor: "rgba(255,255,255,0.96)", backdropFilter: "blur(8px)", boxShadow: SHADOW.hover, border: `1px solid ${C.border}`, textAlign: "center" }}>
    <svg viewBox="0 0 200 116" width="100%" aria-hidden>
      <defs>
        <linearGradient id="hpGauge" x1="0" x2="1">
          <stop offset="0%" stopColor="#3CC6F5" />
          <stop offset="70%" stopColor={C.brand} />
          <stop offset="100%" stopColor={C.brandDeep} />
        </linearGradient>
      </defs>
      <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#E9EEF3" strokeWidth="14" strokeLinecap="round" />
      <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#hpGauge)" strokeWidth="14" strokeLinecap="round" strokeDasharray="252" strokeDashoffset="252" className="hp-arc" />
      {[0, 1, 2, 3, 4, 5, 6].map(i => {
        const a = Math.PI - (i / 6) * Math.PI
        return <line key={i} x1={100 + 62 * Math.cos(a)} y1={100 - 62 * Math.sin(a)} x2={100 + 54 * Math.cos(a)} y2={100 - 54 * Math.sin(a)} stroke="#B6C3D1" strokeWidth="2" strokeLinecap="round" />
      })}
      <g className="hp-needle">
        <line x1="100" y1="100" x2="100" y2="38" stroke={C.ink} strokeWidth="4" strokeLinecap="round" />
      </g>
      <circle cx="100" cy="100" r="8" fill={C.ink} />
      <circle cx="100" cy="100" r="3" fill={C.white} />
    </svg>
    <Typography sx={{ mt: 0.5, fontWeight: 800, fontSize: { xs: "1.2rem", md: "1.4rem" }, color: C.ink, letterSpacing: "-0.02em", lineHeight: 1 }}>60,000 psi</Typography>
    <Typography sx={{ mt: 0.5, fontSize: "0.75rem", color: C.muted }}>Maximum rated pressure</Typography>
    <GlobalStyles
      styles={{
        "@keyframes hpNeedle": { from: { transform: "rotate(-90deg)" }, to: { transform: "rotate(90deg)" } },
        "@keyframes hpArc": { to: { strokeDashoffset: 0 } },
        ".hp-needle": { transformOrigin: "100px 100px", transform: "rotate(-90deg)", animation: "hpNeedle 1.6s cubic-bezier(.2,.8,.2,1) 0.3s forwards" },
        ".hp-arc": { animation: "hpArc 1.6s cubic-bezier(.2,.8,.2,1) 0.3s forwards" },
        "@media (prefers-reduced-motion: reduce)": { ".hp-needle": { animation: "none", transform: "rotate(90deg)" }, ".hp-arc": { animation: "none", strokeDashoffset: 0 } },
      }}
    />
  </Box>
)

// Each family drawn as a bar on a 0–60,000 psi axis
const PressureCoverage = () => (
  <Box sx={{ ...cardSx, p: { xs: 2.5, md: 4 }, borderRadius: "24px" }}>
    <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "baseline" }} spacing={1} sx={{ mb: 3 }}>
      <Typography sx={{ fontWeight: 800, color: C.ink, fontSize: "1.15rem", letterSpacing: "-0.01em" }}>Pressure coverage by product family</Typography>
      <Typography sx={{ fontSize: "0.82rem", color: C.muted }}>Rated working pressure, psi</Typography>
    </Stack>
    <Stack spacing={1.75}>
      {PRODUCTS.map(p => {
        const [min, max] = parseRange(p.pressure)
        return (
          <Box key={p.link} component={RouterLink} to={p.link} viewTransition sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "260px 1fr" }, gap: { xs: 0.75, md: 3 }, alignItems: "center", textDecoration: "none", "&:hover .bar": { filter: "brightness(1.08)", boxShadow: SHADOW.brand }, "&:hover .label": { color: C.brandDark } }}>
            <Typography className="label" sx={{ fontWeight: 600, fontSize: "0.9rem", color: C.ink, transition: "color 0.2s ease" }}>
              {shortName(p.title)}
            </Typography>
            <Box sx={{ position: "relative", height: 30, borderRadius: "999px", bgcolor: C.surface }}>
              <Box className="bar" sx={{ position: "absolute", top: 3, bottom: 3, left: `${(min / MAX_PSI) * 100}%`, width: `${((max - min) / MAX_PSI) * 100}%`, minWidth: 64, borderRadius: "999px", background: GRADIENT.brand, color: C.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, whiteSpace: "nowrap", transition: "all 0.2s ease" }}>
                {min === max ? `${min / 1000}k` : `${min / 1000}k – ${max / 1000}k`}
              </Box>
            </Box>
          </Box>
        )
      })}
      {/* Axis */}
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "260px 1fr" }, gap: { md: 3 } }}>
        <Box sx={{ display: { xs: "none", md: "block" } }} />
        <Stack direction="row" justifyContent="space-between" sx={{ pt: 0.5, borderTop: `1px dashed ${C.border}` }}>
          {[0, 10, 20, 30, 40, 50, 60].map(k => (
            <Typography key={k} sx={{ fontSize: "0.72rem", color: C.muted, fontWeight: 600 }}>
              {k}k
            </Typography>
          ))}
        </Stack>
      </Box>
    </Stack>
  </Box>
)

export default function HighPressureIndexPage() {
  return (
    <>
      <title>PANAM® High Pressure Valves & Fittings | 10,000 – 60,000 psi | Hydrogen Ready</title>
      <meta name="description" content="Panam high pressure valves and fittings rated 10,000 to 60,000 psi — needle valves, double block & bleed, ball valves, cone & threaded nipples, and 2-valve manifolds. SS 316." />
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
          badge={<PressureGauge />}
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
              <PressureCoverage />
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
