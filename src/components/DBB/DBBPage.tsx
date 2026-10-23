import React from "react"
import { Box, Container, Grid } from "@mui/material"
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded"
import CableRoundedIcon from "@mui/icons-material/CableRounded"
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined"
import BorderOuterRoundedIcon from "@mui/icons-material/BorderOuterRounded"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined"
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined"
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined"
import PlumbingRoundedIcon from "@mui/icons-material/PlumbingRounded"
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded"
import LinearScaleRoundedIcon from "@mui/icons-material/LinearScaleRounded"
import DBBSelector from "./DBBSelector"
import DBBCompliance from "./DBBCompliance"
import { CategoryHero, CategoryIntro, CategoryPage, CtaBand, FeatureTiles, GaugeBadge, RangeCard } from "../Common/CategoryIndexKit"
import { SectionHeader } from "../Landing2/homeStyles"
import { sectionSx } from "../Landing2/homeTokens"

const HERO_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/DBB/dbb-cover.jpg"

const DBB_PRODUCTS = [
  {
    type: "fxp",
    title: "DBB — Flange to Pipe",
    description: "Double Block & Bleed valves with Flange-to-Pipe construction for primary instrument isolation, pressure transmitter mounting, and process bleed applications. Available in Integral (one-piece body) and Three Piece (serviceable) configurations. Class 150 to 2500, Ball-Needle-Ball, Ball-Ball-Ball, Needle-Needle-Needle, and Ball-Needle internals. NACE MR-0175 and Fire Safe options.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/DBB/DBB_fxp.jpg",
    pressure: "Class 150 – 2500 · PN6 – PN250",
    connection: "Flange to Pipe · Integral & Three Piece",
    material: "SS316 · NACE / Fire Safe Options",
    tag: "Connection Types 1 & 3",
    href: "/double-block-and-bleed-valves/flange-to-pipe",
  },
  {
    type: "fxf",
    title: "DBB — Flange to Flange",
    description: "Double Block & Bleed valves with Flange-to-Flange construction for inline isolation and DP transmitter applications. Available in Integral and Three Piece configurations. Class 150 to 2500 plus PN series, covering RF, RTJ, and BS flange faces. Full range of ball, needle, and combination internals with NACE MR-0175, fire-safe, and gear-operated options.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/DBB/DBB_fxf.jpg",
    pressure: "Class 150 – 2500 · PN6 – PN250",
    connection: "Flange to Flange · Integral & Three Piece",
    material: "SS316 · RF / RTJ / BS · NACE Options",
    tag: "Connection Types 2 & 4",
    href: "/double-block-and-bleed-valves/flange-to-flange",
  },
  {
    type: "pxp",
    title: "DBB — Pipe to Pipe",
    description: "Double Block & Bleed valves with threaded Pipe-to-Pipe construction for compact instrument isolation and process bleed. Available in NPT, BSPP, and BSPT thread forms across a full range of bore sizes. Ball-Needle-Ball, Ball-Ball-Ball, Needle-Needle-Needle, and Ball-Needle configurations. NACE MR-0175 and Fire Safe options available.",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/DBB/DBB-pxp.jpg",
    pressure: "Threaded · NPT / BSPP / BSPT",
    connection: "Pipe to Pipe · Compact Body",
    material: "SS316 · NACE / Fire Safe Options",
    tag: "Connection Type 6",
    href: "/double-block-and-bleed-valves/pipe-to-pipe",
  },
]

const SPECS = [
  { icon: <CableRoundedIcon />, label: "Connection Types", value: "Flange-to-Pipe · Flange-to-Flange · Pipe-to-Pipe" },
  { icon: <ViewInArOutlinedIcon />, label: "Construction", value: "Integral (One-Piece) · Three Piece (Serviceable)" },
  { icon: <SpeedRoundedIcon />, label: "Pressure Classes", value: "Class 150 – 2500 · PN6 – PN250 (flanged) · rating depends on configuration" },
  { icon: <BorderOuterRoundedIcon />, label: "Flange Faces", value: "RF · RTJ · BS" },
  { icon: <ScienceOutlinedIcon />, label: "Material", value: "Stainless Steel 316" },
  { icon: <AccountTreeOutlinedIcon />, label: "Configurations", value: "Ball-Needle-Ball · Ball-Ball-Ball · Needle-Needle-Needle · Ball-Needle" },
  { icon: <LayersOutlinedIcon />, label: "Seat Materials", value: "Carbon Filled PTFE · PCTFE · Delrin · PEEK" },
  { icon: <WaterDropOutlinedIcon />, label: "Seal Materials", value: "PTFE · Grafoil · PCTFE · FKM" },
  { icon: <ShieldOutlinedIcon />, label: "Special Service", value: "NACE MR-0175 option · Fire Safe option · Gear Operated" },
]

// The connection each family is for, used by the selection guide.
// Pipe-to-Pipe has no published class on this page (rating depends on configuration), so it reads "On request".
const DBB_NEEDS: Record<string, { need: string; icon: React.ReactNode; pressure: string; size: string }> = {
  fxp: { need: "Flange to pipe — primary isolation, transmitter mounting & bleed", icon: <PlumbingRoundedIcon />, pressure: "Class 150 – 2500", size: "Integral & Three Piece" },
  fxf: { need: "Flange to flange — inline isolation & DP transmitters", icon: <CompareArrowsRoundedIcon />, pressure: "Class 150 – 2500", size: "RF / RTJ / BS" },
  pxp: { need: "Threaded pipe to pipe — compact isolation & bleed", icon: <LinearScaleRoundedIcon />, pressure: "On request", size: "NPT / BSPP / BSPT" },
}

const FEATURES = [
  "Three connection families from a single trusted manufacturer",
  "Stainless Steel 316 construction across all series",
  "Class 150 to 2500 and PN6 to PN250 pressure classes",
  "RF, RTJ, and BS flange face options",
  "NACE MR-0175 option available",
  "Ball-Needle-Ball, Ball-Ball-Ball, Needle-Needle-Needle, Ball-Needle configurations",
  "Integral (one-piece) and Three Piece (serviceable) body options",
  "Carbon Filled PTFE, PCTFE, Delrin, and PEEK seat materials",
  "PTFE, Grafoil, PCTFE, and FKM seal materials",
  "Fire Safe option available",
  "Gear Operated option for large bore sizes",
  "Lock Handle, Anti-Static, OS&Y Bonnet, and Anti-Tamper Key options",
]

const SELECTOR = DBB_PRODUCTS.map(p => ({ ...DBB_NEEDS[p.type], valve: p.title.replace("DBB — ", ""), to: p.href }))

export default function DBBIndexPage() {
  return (
    <>
      <title>Double Block & Bleed Valves | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® DBB Valves — Flange-to-Pipe, Flange-to-Flange, and Pipe-to-Pipe. SS316, Class 150–2500, NACE MR-0175 and fire-safe options." />
      <meta name="keywords" content="double block bleed valve, DBB valve, instrument isolation valve, NACE valve, SS316 valve" />
      <link rel="canonical" href="https://www.panamvalve.com/double-block-and-bleed-valves" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Double Block & Bleed Valves | PANAM® Instrumentation" />
      <meta property="og:description" content="Three connection families. One standard. PANAM® DBB Valves for primary isolation, transmitter mounting, and process bleed." />
      <meta property="og:url" content="https://www.panamvalve.com/double-block-and-bleed-valves" />
      <meta property="og:image" content={HERO_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Double Block & Bleed Valves | PANAM® Instrumentation" />
      <meta name="twitter:description" content="Three connection families. One standard. PANAM® DBB Valves for primary isolation, transmitter mounting, and process bleed." />
      <meta name="twitter:image" content={HERO_IMAGE} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PANAM® Double Block & Bleed Valves",
          description: "Double Block & Bleed valves in Flange-to-Pipe, Flange-to-Flange, and Pipe-to-Pipe connection types. SS316, Class 150–2500, NACE MR-0175 and fire-safe options.",
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

      <CategoryPage>
        <CategoryHero
          eyebrow="PANAM® Instrumentation"
          titleMain="Double Block & Bleed"
          titleAccent="Built to Isolate."
          description="Three connection families — Flange-to-Pipe, Flange-to-Flange, and Pipe-to-Pipe — covering every instrument isolation application. SS316 construction, Class 150 to 2500, with NACE MR-0175 and Fire Safe options. Pressure rating depends on configuration — contact us to confirm."
          image={HERO_IMAGE}
          imageAlt="Panam double block and bleed valve"
          primary={{ label: "Explore range", href: "#range" }}
          secondary={{ label: "Request quote", to: "/enquiry" }}
          stats={[
            { value: "2500", label: "Max pressure class" },
            { value: String(DBB_PRODUCTS.length), label: "Connection families" },
            { value: "SS316", label: "Construction" },
          ]}
          badge={<GaugeBadge value="Class 2500" label="Maximum pressure class" />}
        />

        <CategoryIntro
          eyebrow="Complete range"
          titleMain="One body."
          titleAccent="Three connection types."
          paragraphs={[
            "PANAM® Double Block & Bleed valves cover the full instrument isolation spectrum — Flange-to-Pipe, Flange-to-Flange, and Pipe-to-Pipe configurations engineered for primary isolation, pressure transmitter mounting, and process bleed applications. All three families share the same SS316 construction with ball, needle, and combination internal configurations.",
            "DBB options include NACE MR-0175, Fire Safe, lock handle, anti-static, gear-operated, and OS&Y bonnet options. Seat and seal materials cover Carbon Filled PTFE, PCTFE, Delrin, PEEK, PTFE, Grafoil, and FKM.",
          ]}
          specs={SPECS}
        />

        <Box component="section" id="range" sx={{ ...sectionSx("surface"), scrollMarginTop: "100px" }}>
          <Container maxWidth="lg">
            <SectionHeader eyebrow="Product Range" title="Three Families. One Standard." subtitle="Each DBB family is purpose-built for a specific connection type and application. Select by connection style, pressure class, or special service requirement." />
            {/* No PressureCoverage here: DBB is rated by ANSI/PN class, not a single psi figure */}
            <Grid container spacing={3} justifyContent="center">
              {DBB_PRODUCTS.map(p => (
                <Grid key={p.type} size={{ xs: 12, sm: 6, md: 4 }}>
                  <RangeCard
                    eyebrow="PANAM® DBB Valves"
                    title={p.title}
                    description={p.description}
                    image={p.image}
                    to={p.href}
                    pill={
                      <>
                        <SpeedRoundedIcon />
                        {p.pressure}
                      </>
                    }
                    chips={[p.tag, p.connection]}
                    footnote={p.material}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box component="section" sx={sectionSx("white")}>
          <Container maxWidth="lg">
            <DBBSelector rows={SELECTOR} />
          </Container>
        </Box>

        <Box component="section" sx={sectionSx("tint")}>
          <Container maxWidth="lg">
            <DBBCompliance />
          </Container>
        </Box>

        <FeatureTiles eyebrow="Why Panam" title="Why specify PANAM® DBB Valves" subtitle="All three DBB families are built to the same engineering standard — consistent materials, construction, and test procedures across the entire range." items={FEATURES} />

        <CtaBand title="Specify your DBB valve" text="Send us your connection type, pressure class, bore size, and any special service requirements. Our technical team responds to instrumentation enquiries within 24 hours." primary={{ label: "Email Technical Sales", href: "mailto:sales@panamvalves.co.uk" }} secondary={{ label: "Request Quote", to: "/enquiry" }} />
      </CategoryPage>
    </>
  )
}
