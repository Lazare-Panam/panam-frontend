import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const CheckValveGuideBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cta = {
    heading: "Need a check valve for a critical high-pressure application?",
    body: "Send your specification, datasheet, or bill of materials to Panam Valves. The engineering team will review your pressure class, media, cracking pressure, and end connections — and respond within 24 hours with a matched quotation and full documentation.",
    buttonText: "Request a Quote",
    buttonLink: "/enquiry",
  }

  const specMatrix = [
    { param: "Pressure Rating",      detail: "Up to 6,000 psig (414 bar)",                                              why: "Confirm against system design pressure including transients" },
    { param: "Size Range",           detail: "1/8\" to 1\"",                                                             why: "Match to line size and instrumentation take-off" },
    { param: "Materials",            detail: "SS316 standard; Duplex, Monel, Hastelloy on request",                      why: "Required for corrosive, chloride, sour or hydrogen service" },
    { param: "Cracking Pressure",    detail: "1/3, 1, 5, 10, 25, 50, 75, 100 psig",                                     why: "Must balance seal integrity with pump NPSH and start-up transients" },
    { param: "End Connections",      detail: "NPT, BSPP, BSPT, PANAM® tube-fitting",                                    why: "Verify thread form — NPT and BSP are not interchangeable" },
    { param: "Certification",        detail: "NACE MR0175 / MR-01-75 available; full heat-code traceability standard",   why: "Required for sour service and high-integrity documentation packs" },
    { param: "Hydrogen Service",     detail: "Hydrogen-rated PCV Series options available",                               why: "Material compatibility and documentation required for H₂ infrastructure" },
  ]

  const processSteps = [
    {
      num: "1",
      title: "Specification or Enquiry",
      body: "Send a brief, datasheet, or bill of materials covering size, pressure rating, media, cracking pressure, and connection type. Panam responds within 24 hours.",
    },
    {
      num: "2",
      title: "Engineering Review",
      body: "Applications engineers verify pressure class, material compatibility (SS316, Duplex, Monel, Hastelloy), and cracking pressure requirements. Hydrogen service, sour service (NACE), and high-temperature conditions are evaluated where required.",
    },
    {
      num: "3",
      title: "Product Selection and Matching",
      body: "A suitable PCV Series instrumentation check valve is selected with the correct end connections. If wafer check valves or process-side non-return valves are also required, Panam can align these with associated fittings, manifolds, and valve types.",
    },
    {
      num: "4",
      title: "Documentation and Compliance",
      body: "Full technical documentation and heat-code material traceability are provided. NACE MR0175 / MR-01-75 certification is available on request for applicable materials and configurations.",
    },
    {
      num: "5",
      title: "Stock Check and Dispatch",
      body: "UK stock is available for immediate shipment on core product ranges. Global dispatch from manufacturing facilities in India supports large projects and framework agreements.",
    },
    {
      num: "6",
      title: "Ongoing Project and Lifecycle Support",
      body: "Panam supports repeat orders, project expansions, and replacement requirements — ensuring long-term alignment of check valves, ball valve packages, manifolds, and control valve solutions.",
    },
  ]

  const faqs = [
    { q: "What types of check valve does Panam supply?", a: "The core family is the PCV Series — uni-directional non-return valves for backflow prevention in high-pressure systems, offering multiple cracking pressures, SS316 and exotic alloys, and a wide choice of threaded and tube-fitting ends. Where process-line non-return or wafer check valves are required, Panam can support sourcing and integration as part of a wider package." },
    { q: "Can I get a stainless steel check valve for hydrogen service in the UK?", a: "Yes. Panam PCV Series check valves are available in SS316 and other alloys with hydrogen service-rated options, dispatched from Bicester for electrolyser, refuelling, and wider hydrogen infrastructure projects." },
    { q: "What pressure ratings are available?", a: "Panam check valves are rated up to 6,000 psig (414 bar). Exact ratings depend on size, connection type, and material — the engineering team will confirm suitability against your design conditions." },
    { q: "Which end connections can I specify?", a: "Male and female NPT, BSPP, BSPT, and PANAM® tube-fitting ends are available, allowing straightforward integration with existing tube fittings, manifolds, and instrument take-off assemblies." },
    { q: "Can Panam match check valves to manifolds and other industrial valves?", a: "Yes. Panam specialises in complete instrumentation assemblies — combining check valves with manifolds, needle valves, ball valves, filters, air headers, and pipe fittings. This ensures consistent pressure class, material grade, and documentation across the entire package." },
    { q: "How quickly can a check valve be shipped to a UK site?", a: "With UK stock held for immediate shipment and global dispatch capabilities, the technical team aims to respond to all enquiries within 24 hours with availability and delivery information." },
    { q: "Do you provide documentation and material traceability?", a: "Yes. Every Panam instrumentation check valve is supported by full technical documentation and heat-code material traceability. NACE MR0175 / MR-01-75 certification is available on request." },
    { q: "Can Panam support large projects that include wafer check valves?", a: "Yes. Panam regularly works from detailed project specifications and bills of materials for large-scale oil & gas, power, hydrogen, and process projects — sourcing and supplying instrumentation valves, fittings, manifolds, and related components including wafer check valves." },
  ]

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <title>Check Valves for High-Pressure Instrumentation | SS316 PCV Series | Panam Valve</title>
      <meta name="description" content="High-performance check valves in SS316 and exotic alloys, rated to 6,000 psig, with UK stock, global dispatch and full documentation for critical projects." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/check-valve-guide" />

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            Check Valves for High-Pressure Instrumentation: PCV Series Guide
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            SS316, Cracking Pressures, End Connections and How to Specify for Critical Service
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Avatar sx={{ bgcolor: "#1A1A1A", width: 48, height: 48, fontSize: "1rem", fontWeight: 700 }}>
              SR
            </Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, fontSize: "1rem" }}>
                Steven Kassi
              </Typography>
              <Typography variant="body2" sx={{ color: "#01B0F0", fontWeight: 600, fontSize: "0.85rem" }}>
                SEO Expert
              </Typography>
              <Typography variant="caption" sx={{ color: "#777" }}>
                June 22, 2026 • 7 min read
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          component="img"
          src="https://pblol2.blob.core.windows.net/panam-images/products/check-valves/c1.png"
          alt="PANAM PCV Series Check Valve"
          sx={{
            width: "100%",
            height: { xs: 200, md: 500 },
            objectFit: "contain",
            bgcolor: "#F4F4F4",
            borderRadius: "4px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid #EEE",
          }}
        />
      </Container>

      {/* BODY */}
      <Container maxWidth="lg">
        <Grid container spacing={8}>

          {/* ── Main Article ── */}
          <Grid size={{ xs: 12, md: 8 }}>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              Panam Valves designs and supplies precision-engineered check valves in SS316 and exotic alloys, built for reliable backflow prevention up to 6,000 psig. With UK stock available and global dispatch, procurement and engineering teams can specify, document, and receive critical components quickly.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              Panam check valves are uni-directional valves engineered to prevent backflow and protect equipment, pipework, and instrumentation in high-pressure, high-integrity systems across hydrogen, oil & gas, power, petrochemical, offshore, and wider process industries.
            </Typography>

            {/* SECTION 1 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Stainless Steel Check Valve Capabilities
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Panam's core check valve range is built around SS316 construction, with Duplex, Monel, and Hastelloy options for demanding corrosive and hydrogen environments. A stainless steel check valve from Panam is engineered to support:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "High-pressure instrumentation loops up to 6,000 psig",
                "Oil & Gas, Petrochemical, Power, Hydrogen, and wider process industries",
                "Offshore and subsea-adjacent applications where corrosion resistance and traceability are critical",
                "Integration with NPT, BSPP, BSPT, and PANAM® tube-fitting connection standards",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1 }}>• {item}</Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Hydrogen projects benefit from hydrogen service-rated PCV check valves, supported by Panam's dedicated hydrogen product engineering and H₂ supply chain — ensuring material compatibility and documentation for electrolyser and refuelling infrastructure.
            </Typography>

            {/* SECTION 2 — SPEC TABLE */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Specification Checklist
            </Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 6 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Parameter</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Panam Options</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Why It Matters</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {specMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell><strong>{row.param}</strong></TableCell>
                      <TableCell>{row.detail}</TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.why}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* SECTION 3 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Wafer Check Valves and System Integration
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Where clients require wafer check valves for process or utility lines, Panam can work from a specification or bill of materials to source and integrate the required non-return check valve solution within a complete instrumentation and industrial valve package.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              By combining inline instrumentation check valves with process-side wafer check valves, design teams can maintain directional control, standardise material grades across wetted parts, and align crack pressure, flow coefficients, and end connections with wider system requirements.
            </Typography>

            {/* SECTION 4 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              What to Expect When You Specify with Panam
            </Typography>
            <Stack spacing={4} sx={{ mb: 6 }}>
              {processSteps.map(item => (
                <Box key={item.num} sx={{ display: "flex", gap: 3 }}>
                  <Typography sx={{ fontWeight: 900, fontSize: "1.8rem", color: "#01B0F0", minWidth: 36, lineHeight: 1 }}>
                    {item.num}
                  </Typography>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>{item.title}</Typography>
                    <Typography variant="body1">{item.body}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* SECTION 5 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Integrated Solutions: Check Valves Within Complete Valve Packages
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Many clients specify check valves as part of a broader instrumentation and piping package. Panam structures supply around complete packages that can include:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "Instrumentation check valves and non-return valves",
                "Ball valves and high-pressure stainless steel ball valve configurations",
                "Needle and block-and-bleed valves",
                "2-, 3-, and 5-valve manifolds for DP transmitter isolation",
                "Filters, grab sampling systems, and air headers",
                "Stainless steel pipe fittings, tube fittings, and adaptors",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1 }}>• {item}</Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              This integrated approach simplifies procurement, ensures material and pressure-class consistency, and supports rapid drawing and documentation approvals. Browse the full{" "}
              <Box component="a" href="https://www.panamvalve.com/valves/check-valves" target="_blank" rel="noopener noreferrer"
                sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                Panam check valves range
              </Box>
              {" "}for detailed product listings.
            </Typography>

            {/* SECTION 6 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              UK Stock and Supply from Bicester
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Panam Valves supports UK projects from its base at Ground Floor, St Edburgs Hall, Priory Road, Bicester OX26 6BL. From Bicester, Panam coordinates UK stock for immediate shipment, as well as technical support for instrumentation check valves, non-return valves, pipe fittings, manifolds, filters, and complementary industrial valves across:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "Hydrogen — electrolyser, refuelling, and pipeline infrastructure",
                "Oil & Gas — upstream, midstream, and downstream process",
                "Power — utilities, steam, and condensate systems",
                "Petrochemical and process industries",
                "Offshore energy and subsea-adjacent applications",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1 }}>• {item}</Typography>
              ))}
            </Box>

            {/* FAQ */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Frequently Asked Questions
            </Typography>
            <Stack spacing={4} sx={{ mb: 6 }}>
              {faqs.map(item => (
                <Box key={item.q}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.q}</Typography>
                  <Typography variant="body1">{item.a}</Typography>
                </Box>
              ))}
            </Stack>

            {/* SUMMARY */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Summary and Next Steps
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Select cracking pressure and material first, then lock in end connections to your existing tube fitting or pipe standard. Confirm pressure rating against system design conditions including transients, and specify NACE MR0175 and heat-code traceability upfront. For hydrogen service, confirm H₂-rated material and documentation requirements at enquiry stage.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Browse the full{" "}
              <Box component="a" href="https://www.panamvalve.com/valves/check-valves" target="_blank" rel="noopener noreferrer"
                sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                Panam check valves range
              </Box>
              {" "}or send your bill of materials directly for a 24-hour engineering response.
            </Typography>

            {/* CTA */}
            <Paper elevation={0} sx={{ mt: 10, p: { xs: 4, md: 6 }, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px" }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: "1.5rem" }}>
                {cta.heading}
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
                {cta.body}
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate(cta.buttonLink)}
                endIcon={<ArrowForwardIcon />}
                sx={{ bgcolor: "#01B0F0", color: "white", px: 4, py: 1.5, borderRadius: "4px", fontWeight: 700 }}
              >
                {cta.buttonText}
              </Button>
            </Paper>
          </Grid>

          {/* ── Sidebar ── */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: "sticky", top: 40 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 800 }}>
                At a Glance
              </Typography>
              <Stack spacing={2}>
                {[
                  "SS316 and Exotic Alloy Options",
                  "Full Specification Checklist",
                  "Cracking Pressures: 1/3 to 100 psig",
                  "Wafer Check Valve Integration",
                  "6-Step Specification Process",
                  "UK Stock from Bicester",
                  "Hydrogen & NACE Certified Options",
                ].map(text => (
                  <Box key={text} sx={{ pb: 2, borderBottom: "1px solid #EEE" }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#555" }}>
                      • {text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* Sidebar product card */}
              <Box
                component="a"
                href="https://www.panamvalve.com/valves/check-valves"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: "none", display: "block", mt: 6 }}
              >
                <Paper elevation={0} sx={{
                  border: "1px solid #EEE",
                  borderRadius: "4px",
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                  "&:hover": { borderColor: "#01B0F0" },
                }}>
                  <Box
                    component="img"
                    src="https://pblol2.blob.core.windows.net/panam-images/products/check-valves/c1.png"
                    alt="PANAM PCV Series Check Valve"
                    sx={{ width: "100%", height: 160, objectFit: "contain", bgcolor: "#F4F4F4", p: 2 }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", color: "#1A1A1A", mb: 0.5 }}>
                      PANAM PCV Series Check Valves
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#666", mb: 1.5 }}>
                      SS316 · Up to 6,000 PSI · NPT / BSPP / BSPT · UK Stock
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#01B0F0" }}>
                      Browse the range →
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
      <Box sx={{ py: 10 }} />
    </Box>
  )
}

export default CheckValveGuideBlog