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
import SBBSelector from "./SBBSelector"
import SBBCompliance from "./SBBCompliance"
import { CategoryHero, CategoryIntro, CategoryPage, CtaBand, FeatureTiles, GaugeBadge, RangeCard } from "../Common/CategoryIndexKit"
import { SectionHeader } from "../Landing2/homeStyles"
import { sectionSx } from "../Landing2/homeTokens"

const HERO_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/SBB.png"

const SBB_PRODUCTS = [
  {
    type: "mono",
    title: "SBB — Monoflange (Screwed Bonnet)",
    description: "Single Block & Bleed monoflange valves with all-screwed-bonnet construction for primary instrument isolation and drain. Flange-mounted directly to the process with a threaded outlet to the instrument and an integral bleed/vent. SS316 with PTFE packing, Class 150 to 1500 and PN16, RF flange faces. NACE MR-0175 option available.",
    image: HERO_IMAGE,
    pressure: "Class 150 – 1500 · PN16",
    connection: "Monoflange · Screwed Bonnet",
    material: "SS316 · PTFE Packing · NACE Option",
    tag: "Primary Isolate & Drain",
    href: "/single-block-and-bleed-valves/monoflange",
  },
  {
    type: "fxp",
    title: "SBB — Flange to Pipe",
    description: "Single Block & Bleed valves with Flange-to-Pipe integral construction in a Ball-Needle arrangement for primary isolation and bleed. SS316 body with PEEK seats and Grafoil seals, Class 150 RF flanged inlet with a threaded NPT outlet and vent. Fire Safe, Anti-Static, and Locking Handle options.",
    image: HERO_IMAGE,
    pressure: "Class 150 · RF",
    connection: "Flange to Pipe · Integral",
    material: "SS316 · PEEK Seat · Grafoil Seal",
    tag: "Ball-Needle",
    href: "/single-block-and-bleed-valves/flange-to-pipe",
  },
  {
    type: "bb",
    title: "SBB — Block & Bleed (Threaded)",
    description: "Compact threaded Block & Bleed valves for isolation and bleed on instrument lines. SS316 body and trim with PEEK seats and Grafoil seals, BSPP female inlet, outlet, and vent (vent supplied with plug). Fire Safe and Locking Handle options available.",
    image: HERO_IMAGE,
    pressure: "Threaded · BSPP",
    connection: "Block & Bleed · Bar Stock",
    material: "SS316 Body & Trim · PEEK / Grafoil",
    tag: "Compact Body",
    href: "/single-block-and-bleed-valves/block-and-bleed",
  },
]

const SPECS = [
  { icon: <CableRoundedIcon />, label: "Connection Types", value: "Monoflange · Flange-to-Pipe · Block & Bleed" },
  { icon: <ViewInArOutlinedIcon />, label: "Construction", value: "Screwed Bonnet · Integral · Bar Stock" },
  { icon: <SpeedRoundedIcon />, label: "Pressure Classes", value: "Class 150 – 1500 · PN16 · rating depends on configuration" },
  { icon: <BorderOuterRoundedIcon />, label: "Flange Faces", value: "RF (flanged families)" },
  { icon: <ScienceOutlinedIcon />, label: "Material", value: "Stainless Steel 316" },
  { icon: <AccountTreeOutlinedIcon />, label: "Configurations", value: "Block & Bleed · Isolate & Drain · Ball-Needle" },
  { icon: <LayersOutlinedIcon />, label: "Seat Materials", value: "PTFE · PEEK" },
  { icon: <WaterDropOutlinedIcon />, label: "Seal / Packing", value: "PTFE · Grafoil" },
  { icon: <ShieldOutlinedIcon />, label: "Special Service", value: "NACE MR-0175 option · Fire Safe option · Locking Handle" },
]

// The connection each family is for, used by the selection guide.
const SBB_NEEDS: Record<string, { need: string; icon: React.ReactNode; pressure: string; size: string }> = {
  mono: { need: "Flange-mounted primary isolation & drain", icon: <CompareArrowsRoundedIcon />, pressure: "Class 150 – 1500 · PN16", size: "RF Flange" },
  fxp: { need: "Flange to pipe — isolation & bleed with ball-needle", icon: <PlumbingRoundedIcon />, pressure: "Class 150", size: "RF / 10mm bore" },
  bb: { need: "Threaded block & bleed on instrument lines", icon: <LinearScaleRoundedIcon />, pressure: "On request", size: "BSPP / 12mm bore" },
}

const FEATURES = [
  "Three SBB families from a single trusted manufacturer",
  "Stainless Steel 316 construction across all series",
  "Monoflange, Flange-to-Pipe, and threaded Block & Bleed connection styles",
  "Class 150 to 1500 and PN16 pressure classes on the flanged families",
  "NACE MR-0175 option available",
  "Block & Bleed, Isolate & Drain, and Ball-Needle configurations",
  "All-screwed-bonnet monoflange for serviceable primary isolation",
  "PTFE and PEEK seat materials",
  "PTFE and Grafoil seal / packing materials",
  "Fire Safe option on the ported families",
  "Locking Handle and Anti-Static options",
  "RF flanged and BSPP / NPT threaded end connections",
]

const SELECTOR = SBB_PRODUCTS.map(p => ({ ...SBB_NEEDS[p.type], valve: p.title.replace("SBB — ", ""), to: p.href }))

export default function SBBIndexPage() {
  return (
    <>
      <title>Single Block & Bleed Valves | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® SBB Valves — Monoflange (Screwed Bonnet), Flange-to-Pipe, and threaded Block & Bleed. SS316, Class 150–1500 and PN16, NACE MR-0175 and fire-safe options." />
      <meta name="keywords" content="single block bleed valve, SBB valve, monoflange valve, instrument isolation valve, NACE valve, SS316 valve" />
      <link rel="canonical" href="https://www.panamvalve.com/single-block-and-bleed-valves" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Single Block & Bleed Valves | PANAM® Instrumentation" />
      <meta property="og:description" content="Three connection families. One standard. PANAM® SBB Valves for primary isolation, instrument mounting, and process bleed." />
      <meta property="og:url" content="https://www.panamvalve.com/single-block-and-bleed-valves" />
      <meta property="og:image" content={HERO_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Single Block & Bleed Valves | PANAM® Instrumentation" />
      <meta name="twitter:description" content="Three connection families. One standard. PANAM® SBB Valves for primary isolation, instrument mounting, and process bleed." />
      <meta name="twitter:image" content={HERO_IMAGE} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PANAM® Single Block & Bleed Valves",
          description: "Single Block & Bleed valves in Monoflange, Flange-to-Pipe, and threaded Block & Bleed connection types. SS316, Class 150–1500 and PN16, NACE MR-0175 and fire-safe options.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: SBB_PRODUCTS.map((p, i) => ({
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
          titleMain="Single Block & Bleed"
          titleAccent="Built to Isolate."
          description="Three connection families — Monoflange, Flange-to-Pipe, and threaded Block & Bleed — covering primary instrument isolation and bleed. SS316 construction, Class 150 to 1500 and PN16, with NACE MR-0175 and Fire Safe options. Pressure rating depends on configuration — contact us to confirm."
          image={HERO_IMAGE}
          imageAlt="Panam single block and bleed valve"
          primary={{ label: "Explore range", href: "#range" }}
          secondary={{ label: "Request quote", to: "/enquiry" }}
          stats={[
            { value: "1500", label: "Max pressure class" },
            { value: String(SBB_PRODUCTS.length), label: "Connection families" },
            { value: "SS316", label: "Construction" },
          ]}
          badge={<GaugeBadge value="Class 1500" label="Maximum pressure class" />}
        />

        <CategoryIntro
          eyebrow="Complete range"
          titleMain="One block."
          titleAccent="One bleed."
          paragraphs={[
            "PANAM® Single Block & Bleed valves cover primary instrument isolation and bleed — Monoflange (all-screwed-bonnet), Flange-to-Pipe, and compact threaded Block & Bleed configurations. All three families share SS316 construction with isolation plus an integral bleed/vent for safe venting before instrument removal.",
            "SBB options include NACE MR-0175, Fire Safe, and Locking Handle. Seat and seal/packing materials cover PTFE, PEEK, and Grafoil.",
          ]}
          specs={SPECS}
        />

        <Box component="section" id="range" sx={{ ...sectionSx("surface"), scrollMarginTop: "100px" }}>
          <Container maxWidth="lg">
            <SectionHeader eyebrow="Product Range" title="Three Families. One Standard." subtitle="Each SBB family is purpose-built for a specific connection type and application. Select by connection style, pressure class, or special service requirement." />
            <Grid container spacing={3} justifyContent="center">
              {SBB_PRODUCTS.map(p => (
                <Grid key={p.type} size={{ xs: 12, sm: 6, md: 4 }}>
                  <RangeCard
                    eyebrow="PANAM® SBB Valves"
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
            <SBBSelector rows={SELECTOR} />
          </Container>
        </Box>

        <Box component="section" sx={sectionSx("tint")}>
          <Container maxWidth="lg">
            <SBBCompliance />
          </Container>
        </Box>

        <FeatureTiles eyebrow="Why Panam" title="Why specify PANAM® SBB Valves" subtitle="All three SBB families are built to the same engineering standard — consistent materials, construction, and test procedures across the entire range." items={FEATURES} />

        <CtaBand title="Specify your SBB valve" text="Send us your connection type, pressure class, inlet size, and any special service requirements. Our technical team responds to instrumentation enquiries within 24 hours." primary={{ label: "Email Technical Sales", href: "mailto:sales@panamvalves.co.uk" }} secondary={{ label: "Request Quote", to: "/enquiry" }} />
      </CategoryPage>
    </>
  )
}
