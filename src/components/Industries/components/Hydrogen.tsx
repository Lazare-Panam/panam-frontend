import React from "react"
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import IndustryTemplate from "./IndustriesTemplate"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

// Self-hosted (blob) hero/OG image — replaces the previous images.unsplash.com hotlink.
// TODO: swap for the dedicated 1200x630 photo of PANAM 316 hydrogen components once produced
// (hydrogen-high-pressure-valves-fittings-316ss.jpg).
const HERO_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/website-media/hero-banners/atieh-khoshraftar-l4PrMpT_DuY-unsplash.jpg"

const A: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link component={RouterLink} to={to} sx={{ color: BRAND_BLUE, fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
    {children}
  </Link>
)

// Hydrogen value chain: pressure band and typical components per application stage.
const VALUE_CHAIN = [
  { app: "Electrolysers and production", pressure: "Usually below 40 bar", components: "Tube fittings, needle valves, check valves, filters" },
  { app: "Gas network blending and injection", pressure: "Usually below 100 bar", components: "Ball valves, double block and bleed valves, instrument manifolds" },
  { app: "Tube trailers and bulk storage", pressure: "200 to 500 bar", components: "Medium-pressure valves and fittings, relief valves" },
  { app: "Refuelling stations, heavy-duty vehicles", pressure: "350 bar nominal", components: "High-pressure valves, check valves, filters" },
  { app: "Refuelling stations, cars, and station buffers", pressure: "700 bar nominal; storage up to about 1,000 bar", components: "High-pressure cone-and-thread fittings, needle valves" },
  { app: "Fuel cell test rigs and R&D labs", pressure: "Varies widely", components: "Mixed ranges, often reconfigured" },
]

// Component → role → PANAM range (with links). Nodes so the range cell can hold links.
const COMPONENTS: { component: string; role: string; range: React.ReactNode }[] = [
  { component: "Needle valves", role: "Isolation and fine flow control at instruments and sample points", range: <><A to="/valves/needle-valves">Needle valves</A> · <A to="/high-pressure/needle-valves">High-pressure needle valves</A></> },
  { component: "Ball valves", role: "Fast quarter-turn shut-off", range: <><A to="/valves/ball-valves">Ball valves</A> · <A to="/high-pressure/ball-valves">High-pressure ball valves</A></> },
  { component: "Check valves", role: "Stop backflow, e.g. between compressor stages", range: <A to="/valves/check-valves">Check valves</A> },
  { component: "Relief valves", role: "Protect equipment from overpressure", range: <A to="/valves/relief-valves">Relief valves</A> },
  { component: "Double block and bleed valves", role: "Provable isolation for maintenance", range: <A to="/double-block-and-bleed-valves">DBB valves</A> },
  { component: "Filters", role: "Keep particles off valve seats", range: <A to="/filters">Inline filters</A> },
  { component: "Tube fittings", role: "Low and medium-pressure tubing connections", range: <A to="/instrumentation-fittings/tube-fittings">Tube fittings</A> },
  { component: "Cone-and-thread fittings", role: "Metal-to-metal high-pressure connections", range: <><A to="/high-pressure/cones-threaded-nipples">Cones and threaded nipples</A> · <A to="/high-pressure/fittings">High-pressure fittings</A></> },
  { component: "Instrument manifolds", role: "Transmitter isolation and equalising", range: <A to="/manifolds">Manifolds</A> },
]

const FAQS = [
  {
    q: "Which material is best for hydrogen valves and fittings?",
    a: "316/316L stainless steel is the usual choice for hydrogen-wetted parts. Its austenitic structure resists hydrogen embrittlement well, especially with higher nickel content. Other alloys need engineering review first.",
  },
  {
    q: "What pressure do hydrogen refuelling stations use?",
    a: "Heavy-duty vehicles refuel at 350 bar nominal and cars at 700 bar nominal. A 700 bar system can reach about 875 bar during a fill, and station storage can run up to about 1,000 bar.",
  },
  {
    q: "Can standard compression tube fittings be used for hydrogen?",
    a: "Yes, within their rated pressure and when made from a suitable material such as 316 stainless steel. High-pressure refuelling service normally uses cone-and-thread fittings instead.",
  },
  {
    q: "Do you supply hydrogen-rated valves?",
    a: "Suitability for hydrogen depends on pressure, temperature, purity and the applicable code. Send us your duty and we will confirm materials, ratings and documentation for each item.",
  },
  {
    q: "What documentation do you provide for hydrogen projects?",
    a: "Material certificates are available on request, and PANAM's management systems are certified to ISO 9001, ISO 14001 and ISO 45001. Tell us your project's documentation requirements at enquiry.",
  },
]

const cellSx = { fontFamily: PRIMARY_FONT, fontSize: "0.88rem", color: "#444", lineHeight: 1.6, verticalAlign: "top" as const }
const headCellSx = { fontFamily: PRIMARY_FONT, fontSize: "0.82rem", fontWeight: 800, color: "#1a1a1a", bgcolor: "#f3fafd", textTransform: "uppercase" as const, letterSpacing: 0.4 }

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography component="h2" sx={{ fontSize: { xs: 24, md: 30 }, fontWeight: 800, color: "#1a1a1a", fontFamily: PRIMARY_FONT, letterSpacing: "-0.02em", mb: 2.5, mt: { xs: 7, md: 9 } }}>
    {children}
  </Typography>
)

const HydrogenPage = () => {
  const pageTitle = "Hydrogen Valves & Fittings for H2 Service | PANAM® UK"
  const pageDescription = "Hydrogen valves and fittings in 316/316L stainless for refuelling stations, electrolysers and test rigs. Traceable, documented, pressure-rated. Get a quote."
  const pageUrl = "https://www.panamvalve.com/industries/hydrogen"

  const hero = {
    overline: "SECTORS WE SERVE",
    titleMain: "Hydrogen Valves & Fittings",
    titleAccent: "for H2",
    titleEnd: "Service.",
    description:
      "From electrolysis and production to compression, storage and refuelling, hydrogen puts demanding requirements on valves, fittings and seals. PANAM supplies stainless steel instrumentation valves, manifolds and fittings, and our technical team helps engineers specify components suited to each hydrogen duty.",
    backgroundImage: HERO_IMAGE,
  }

  const content = {
    subHeading: "THE HYDROGEN ECONOMY",
    heading: "Specifying for the smallest molecule.",
    bodyText:
      "Hydrogen systems cover a very wide pressure range, and a fitting that suits an electrolyser outlet may be entirely wrong for a 700 bar dispenser. Material selection, sealing and component rating are the decisions that keep a hydrogen system leak-tight over its life.\n\n" +
      "PANAM supplies instrumentation valves, manifolds, filters, and tube and high-pressure fittings in 316/316L stainless steel, with material certificates on request. Tell us your pressure, temperature, purity and connection requirements and we will help you specify the right configuration and documentation.",
  }

  const cta = {
    heading: "Looking for high-pressure components?",
    text: "The part numbers for high-pressure needle valves, double block & bleed valves, manifolds, cones, adaptors, connectors, unions and fittings live in our High Pressure range.",
    buttonLabel: "Explore the High Pressure range",
    buttonTo: "/high-pressure",
  }

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="hydrogen valves and fittings, hydrogen valves, hydrogen fittings, high pressure hydrogen valves, hydrogen refuelling station valves" />
      <link rel="canonical" href={pageUrl} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="PANAM Valves" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={HERO_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="PANAM 316 stainless steel high-pressure valves and fittings for hydrogen service" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={HERO_IMAGE} />

      {/* WebPage + FAQPage. BreadcrumbList is emitted globally by AppBreadcrumbs for this route. */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
              name: pageTitle,
              description: pageDescription,
              inLanguage: "en-GB",
              isPartOf: { "@id": "https://www.panamvalve.com/#website" },
              publisher: { "@id": "https://www.panamvalve.com/#organization" },
              about: { "@type": "Thing", name: "Hydrogen valves and fittings" },
            },
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ],
        })}
      </script>

      <IndustryTemplate hero={hero} content={content} cta={cta} currentIndustryId="hydrogen">
        <Box sx={{ bgcolor: "#fff" }}>
          <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
            {/* VALUE CHAIN */}
            <H2>Hydrogen Across the Value Chain</H2>
            <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 3, maxWidth: 760, fontFamily: PRIMARY_FONT }}>
              Hydrogen systems cover a very wide pressure range. A fitting that suits an electrolyser outlet may be entirely wrong for a 700 bar dispenser.
            </Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #ECEEF0", borderRadius: "8px", mb: 2.5 }}>
              <Table size="small" aria-label="Hydrogen value chain">
                <TableHead>
                  <TableRow>
                    {["Application", "Typical pressure", "Typical components"].map(h => (
                      <TableCell key={h} sx={headCellSx}>{h}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {VALUE_CHAIN.map(r => (
                    <TableRow key={r.app}>
                      <TableCell sx={{ ...cellSx, fontWeight: 700, color: "#1a1a1a" }}>{r.app}</TableCell>
                      <TableCell sx={cellSx}>{r.pressure}</TableCell>
                      <TableCell sx={cellSx}>{r.components}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography sx={{ color: "#555", lineHeight: 1.8, maxWidth: 760, fontFamily: PRIMARY_FONT }}>
              A 700 bar fuelling system can reach about 875 bar during a fill, and pre-cooling takes the gas down to -40 °C. Rate components for the peak pressure and the lowest temperature, not the nominal figures.
            </Typography>

            {/* COMPONENTS */}
            <H2>Valves and Fittings for Hydrogen Systems</H2>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #ECEEF0", borderRadius: "8px", mb: 2.5 }}>
              <Table size="small" aria-label="Valves and fittings for hydrogen">
                <TableHead>
                  <TableRow>
                    {["Component", "Role in a hydrogen system", "PANAM range"].map(h => (
                      <TableCell key={h} sx={headCellSx}>{h}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {COMPONENTS.map(r => (
                    <TableRow key={r.component}>
                      <TableCell sx={{ ...cellSx, fontWeight: 700, color: "#1a1a1a" }}>{r.component}</TableCell>
                      <TableCell sx={cellSx}>{r.role}</TableCell>
                      <TableCell sx={cellSx}>{r.range}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 1.5, maxWidth: 760, fontFamily: PRIMARY_FONT }}>
              Suitability for hydrogen is confirmed per application against the governing code — send us your duty at <A to="/enquiry">enquiry</A> and we will confirm the series and maximum pressure for each item.
            </Typography>
            <Typography sx={{ color: "#555", lineHeight: 1.8, maxWidth: 760, fontFamily: PRIMARY_FONT }}>
              Looking for part numbers? Browse the <A to="/high-pressure-index">high-pressure part number index</A>.
            </Typography>

            {/* MATERIALS */}
            <H2>Materials and Sealing for Hydrogen</H2>
            <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 2.5, maxWidth: 760, fontFamily: PRIMARY_FONT }}>
              Hydrogen can make some metals brittle, especially at high pressure, under pressure cycling and at low temperatures. Material choice is the first line of defence.
            </Typography>
            <Box component="ul" sx={{ pl: 2.5, mb: 2.5, maxWidth: 760, "& li": { color: "#555", lineHeight: 1.8, mb: 1.5, fontFamily: PRIMARY_FONT } }}>
              <li><strong>316/316L stainless steel</strong> is the usual choice for hydrogen-wetted parts. Its austenitic structure resists embrittlement well, particularly with higher nickel content.</li>
              <li><strong>Duplex, high-strength nickel alloys and martensitic steels</strong> are more susceptible. They need engineering review before use in high-pressure hydrogen.</li>
              <li><strong>Seals and seats</strong> must resist permeation and rapid gas decompression. Metal-to-metal sealing is used for the highest pressures.</li>
            </Box>
            <Typography sx={{ color: "#555", lineHeight: 1.8, maxWidth: 760, fontFamily: PRIMARY_FONT }}>
              Read our <A to="/blog/hydrogen-blog">hydrogen embrittlement guide</A> for the full material comparison.
            </Typography>

            {/* STANDARDS */}
            <H2>Standards and Documentation</H2>
            <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 2.5, maxWidth: 760, fontFamily: PRIMARY_FONT }}>
              Hydrogen projects are audited closely, so agree documentation at enquiry.
            </Typography>
            <Box component="ul" sx={{ pl: 2.5, mb: 2.5, maxWidth: 760, "& li": { color: "#555", lineHeight: 1.8, mb: 1.5, fontFamily: PRIMARY_FONT } }}>
              <li><strong>ASME B31.12:</strong> hydrogen piping and pipelines</li>
              <li><strong>ISO 19880-3:</strong> valves for gaseous hydrogen fuelling stations</li>
              <li><strong>Pressure Equipment Directive 2014/68/EU,</strong> and ATEX where relevant</li>
              <li><strong>Material certificates</strong> with heat traceability, available on request</li>
              <li><strong>Leak testing</strong> to your project's method and test gas</li>
            </Box>
            <Typography sx={{ color: "#555", lineHeight: 1.8, maxWidth: 760, fontFamily: PRIMARY_FONT }}>
              PANAM's management systems are certified to ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018. <A to="/certificates">View our certifications</A>.
            </Typography>

            {/* WHY PANAM */}
            <H2>Why Engineers Specify PANAM for Hydrogen</H2>
            <Box component="ul" sx={{ pl: 2.5, mb: 0, maxWidth: 760, "& li": { color: "#555", lineHeight: 1.8, mb: 1.5, fontFamily: PRIMARY_FONT } }}>
              <li>One supplier for valves, manifolds, filters, and tube and high-pressure fittings</li>
              <li>Stainless steel construction, with material certificates on request</li>
              <li>Online configurator, catalogues and 2D/3D CAD files for design work — see <A to="/products">products</A>, <A to="/catalogPDFs">catalogues</A> and <A to="/cad-step-files">CAD files</A></li>
              <li>Technical team that responds to instrumentation enquiries within 24 hours</li>
            </Box>

            {/* FAQ */}
            <H2>Hydrogen Valves and Fittings FAQs</H2>
            <Box sx={{ maxWidth: 820 }}>
              {FAQS.map(f => (
                <Box key={f.q} sx={{ mb: 3 }}>
                  <Typography component="h3" sx={{ fontSize: "1.05rem", fontWeight: 800, color: "#1a1a1a", fontFamily: PRIMARY_FONT, mb: 1 }}>
                    {f.q}
                  </Typography>
                  <Typography sx={{ color: "#555", lineHeight: 1.8, fontFamily: PRIMARY_FONT }}>{f.a}</Typography>
                </Box>
              ))}
            </Box>

            {/* CLOSING */}
            <H2>Discuss Your Hydrogen Application</H2>
            <Typography sx={{ color: "#555", lineHeight: 1.8, mb: 3, maxWidth: 760, fontFamily: PRIMARY_FONT }}>
              Send us your pressure, temperature, purity and connection requirements, or a bill of materials. We will confirm suitable materials, ratings and documentation before you order.
            </Typography>
            <Button component={RouterLink} to="/enquiry" variant="contained" sx={{ bgcolor: BRAND_BLUE, color: "#fff", textTransform: "none", fontWeight: 700, fontSize: "1rem", px: 4, py: 1.5, borderRadius: "10px", boxShadow: "none", "&:hover": { bgcolor: "#0089BD" } }}>
              Request a hydrogen technical review
            </Button>
          </Container>
        </Box>
      </IndustryTemplate>
    </>
  )
}

export default HydrogenPage
