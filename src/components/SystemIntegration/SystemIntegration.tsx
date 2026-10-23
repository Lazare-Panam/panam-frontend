import React from "react"
import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded"
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined"
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined"
import FactoryOutlinedIcon from "@mui/icons-material/FactoryOutlined"
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined"
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined"
import LinkRoundedIcon from "@mui/icons-material/LinkRounded"
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined"
import ColorizeOutlinedIcon from "@mui/icons-material/ColorizeOutlined"
import SensorsRoundedIcon from "@mui/icons-material/SensorsRounded"
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded"
import { CategoryHero, CategoryIntro, CategoryPage, CtaBand, FeatureTiles, HeroBadge, RangeCard } from "../Common/CategoryIndexKit"
import { SectionHeader } from "../Landing2/homeStyles"
import { C, sectionSx } from "../Landing2/homeTokens"

const HERO_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/website-media/transmitter-thumbnail.jpg"

// None of these products has its own page yet, so every card goes to the enquiry form
const ENQUIRY_ROUTE = "/enquiry"

interface ProductItem {
  title: string
  description: string
  image: string
  tag: string // short label for the pill over the image
  icon: React.ReactNode
}

interface ProductGroup {
  category: string
  overline: string
  items: ProductItem[]
}

const PRODUCTS: ProductGroup[] = [
  {
    category: "System Integration",
    overline: "PANAM® System Integration",
    items: [
      {
        title: "Stabilized Connector",
        description: "Precision-engineered connectors designed for stable, secure connections in instrumentation and process control systems.",
        image: "https://pblol2.blob.core.windows.net/panam-images/products/system-integratino/stablized-connector.png",
        tag: "Instrument connections",
        icon: <LinkRoundedIcon />,
      },
      {
        title: "Condensate Pots",
        description: "Used to collect and trap condensate in steam or gas lines to protect instruments and ensure accurate measurement.",
        image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/system-integratino/condensate-pots.jpg",
        tag: "Steam & gas lines",
        icon: <WaterDropOutlinedIcon />,
      },
      {
        title: "Grab Sampling System",
        description: "System designed to safely extract representative fluid samples from process lines for laboratory analysis.",
        image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/system-integratino/grab-sampling.jpg",
        tag: "Lab sampling",
        icon: <ColorizeOutlinedIcon />,
      },
      {
        title: "Flange Adapter",
        description: "2 and 3-way configurations with floating ball design. Rated up to 10,000 psig with anti-blowout stem safety.",
        image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/system-integratino/flange-adaptors.jpg",
        tag: "10,000 psig max",
        icon: <SpeedRoundedIcon />,
      },
    ],
  },
  {
    category: "Pressure Transmitters",
    overline: "PANAM® Pressure Instrumentation",
    items: [
      {
        title: "Pressure Transmitter",
        description: "High-accuracy pressure transmitters for process measurement and monitoring across oil & gas, petrochemical, and utility applications.",
        image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/pressure-transmitter/pt-1.jpg",
        tag: "Process measurement",
        icon: <SensorsRoundedIcon />,
      },
      {
        title: "Differential Pressure Transmitter",
        description: "Smart differential pressure transmitters for flow, level, and pressure measurement in demanding process environments.",
        image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/pressure-transmitter/dpt-1.jpg",
        tag: "Flow · level · pressure",
        icon: <CompareArrowsRoundedIcon />,
      },
      {
        title: "Diaphragm Seal",
        description: "Diaphragm seals for isolating pressure instruments from aggressive, viscous, or crystallising process media.",
        image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/pressure-transmitter/pt-2.jpg",
        tag: "Media isolation",
        icon: <ShieldOutlinedIcon />,
      },
    ],
  },
]

const PRODUCT_COUNT = PRODUCTS.reduce((n, g) => n + g.items.length, 0)

const SPECS = [
  { icon: <AccountTreeOutlinedIcon />, label: "Product Groups", value: "System integration & pressure instrumentation" },
  { icon: <MonitorHeartOutlinedIcon />, label: "Measurement", value: "Pressure, differential pressure, flow and level" },
  { icon: <ShieldOutlinedIcon />, label: "Instrument Protection", value: "Diaphragm seals and condensate pots" },
  { icon: <ScienceOutlinedIcon />, label: "Sampling", value: "Grab sampling systems for laboratory analysis" },
  { icon: <SpeedRoundedIcon />, label: "Flange Adapters", value: "2 and 3-way, rated up to 10,000 psig" },
  { icon: <FactoryOutlinedIcon />, label: "Applications", value: "Oil & gas, petrochemical, offshore and utility" },
]

const FEATURES = [
  "System integration components and pressure instrumentation in one range",
  "Complete instrumentation systems designed and supplied to your specification",
  "Pressure, differential pressure, flow and level measurement",
  "Diaphragm seals for aggressive, viscous or crystallising media",
  "Condensate pots to protect instruments in steam and gas lines",
  "Engineering team responds to enquiries within 24 hours",
]

// Hero badge: there is only one pressure rating in the range, so show the two product groups instead
const GroupsBadge = () => (
  <HeroBadge width={{ xs: 200, md: 236 }}>
    <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.muted }}>Product groups</Typography>
    <Stack direction="row" sx={{ mt: 1.25, flexWrap: "wrap", gap: 0.75 }}>
      {PRODUCTS.map((g, i) => (
        <Box key={g.category} component="span" sx={{ px: 1.1, py: 0.4, borderRadius: "8px", fontSize: "0.78rem", fontWeight: 700, bgcolor: i === 0 ? C.brand : C.tintBg, color: i === 0 ? C.white : C.brandDark }}>
          {g.category}
        </Box>
      ))}
    </Stack>
    <Stack direction="row" alignItems="baseline" spacing={0.75} sx={{ mt: 1.75, pt: 1.5, borderTop: `1px solid ${C.border}` }}>
      <Typography sx={{ fontWeight: 800, fontSize: "1.3rem", color: C.ink, letterSpacing: "-0.02em", lineHeight: 1 }}>{PRODUCT_COUNT}</Typography>
      <Typography sx={{ fontSize: "0.78rem", color: C.muted }}>products to enquire</Typography>
    </Stack>
  </HeroBadge>
)

export default function SystemIntegrationIndexPage() {
  return (
    <>
      <title>System Integration & Pressure Instrumentation | PANAM®</title>
      <meta name="description" content="PANAM® system integration: air headers, condensate pots, grab sampling systems, pressure transmitters, diaphragm seals and flange adapters for instrumentation lines." />
      <link rel="canonical" href="https://www.panamvalve.com/system-integration" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="System Integration & Pressure Instrumentation | PANAM®" />
      <meta property="og:description" content="PANAM® system integration: air headers, condensate pots, grab sampling systems, pressure transmitters, diaphragm seals and flange adapters for instrumentation lines." />
      <meta property="og:url" content="https://www.panamvalve.com/system-integration" />
      <meta property="og:image" content={HERO_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="System Integration & Pressure Instrumentation | PANAM®" />
      <meta name="twitter:description" content="PANAM® system integration: air headers, condensate pots, grab sampling systems, pressure transmitters, diaphragm seals and flange adapters for instrumentation lines." />
      <meta name="twitter:image" content={HERO_IMAGE} />

      <CategoryPage>
        <CategoryHero
          eyebrow="PANAM® Instrumentation"
          titleMain="System Integration &"
          titleAccent="Pressure Instrumentation."
          description="Air headers, condensate pots, grab sampling systems, flange adapters, pressure transmitters, differential pressure transmitters, and diaphragm seals — all available to enquire directly."
          image={HERO_IMAGE}
          imageAlt="Panam pressure transmitter installed on an instrumentation line"
          primary={{ label: "Explore range", href: "#range" }}
          secondary={{ label: "Request quote", to: "/enquiry" }}
          stats={[
            { value: String(PRODUCT_COUNT), label: "Products" },
            { value: String(PRODUCTS.length), label: "Product groups" },
            { value: "24h", label: "Enquiry response" },
          ]}
          badge={<GroupsBadge />}
        />

        <CategoryIntro
          eyebrow="Complete range"
          titleMain="Connect, protect"
          titleAccent="and measure."
          paragraphs={["PANAM® system integration components — stabilized connectors, condensate pots, grab sampling systems and flange adapters — sit alongside our pressure instrumentation range of pressure transmitters, differential pressure transmitters and diaphragm seals.", "Our engineering team can design and supply complete instrumentation systems to your specification."]}
          specs={SPECS}
        />

        {/* No pressure-coverage chart: only the flange adapter carries a pressure rating */}
        <Box component="section" id="range" sx={{ ...sectionSx("surface"), scrollMarginTop: "100px" }}>
          <Container maxWidth="lg">
            <SectionHeader eyebrow="Product Range" title="Two Groups. One Instrumentation Line." subtitle="System integration components for connecting, sampling and protecting instruments, and pressure instrumentation for measurement. Every product is available to enquire directly." />
            <Stack spacing={{ xs: 6, md: 8 }}>
              {PRODUCTS.map(group => (
                <Box key={group.category}>
                  <Typography component="h3" sx={{ mb: 3, fontWeight: 800, color: C.ink, fontSize: { xs: "1.3rem", md: "1.5rem" }, letterSpacing: "-0.02em" }}>
                    {group.category}
                  </Typography>
                  {/* Centred so the three-card group sits in the middle of the row */}
                  <Grid container spacing={3} justifyContent="center">
                    {group.items.map(product => (
                      <Grid key={product.title} size={{ xs: 12, sm: 6, md: 3 }}>
                        <RangeCard
                          ctaLabel="Enquire now"
                          eyebrow={group.overline}
                          title={product.title}
                          description={product.description}
                          image={product.image}
                          to={ENQUIRY_ROUTE}
                          pill={
                            <>
                              {product.icon}
                              {product.tag}
                            </>
                          }
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>

        <FeatureTiles eyebrow="Why Panam" title="Why specify PANAM® System Integration" subtitle="Components to connect, sample and protect your instruments, alongside the transmitters that measure." items={FEATURES} />

        <CtaBand title="Need a custom solution?" text="Our engineering team can design and supply complete instrumentation systems to your specification. Get in touch and we'll respond within 24 hours." primary={{ label: "Email Technical Sales", href: "mailto:sales@panamvalves.co.uk" }} secondary={{ label: "Make an Enquiry", to: "/enquiry" }} />
      </CategoryPage>
    </>
  )
}
