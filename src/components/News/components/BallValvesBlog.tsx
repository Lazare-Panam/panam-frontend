import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const BallValvesBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cta = {
    heading: "Ready to specify a stainless steel ball valve for your next project?",
    body: "Send your datasheet or bill of materials to the Panam technical team. We'll review your pressure class, media, end connections, and flow configuration — and respond with a matched quotation and datasheets. Material certificates are available on request.",
    buttonText: "Request a Quote",
    buttonLink: "/enquiry",
  }

  const specMatrix = [
    { param: "Pressure Rating",    detail: "Up to 10,000 psig (floating); HP 10,000 / HP1 15,000 / HP2 15,000–20,000 psi",  why: "Match system pressure including transients and safety margins" },
    { param: "Size Range",         detail: "1/8\" to 2\" — including 1/4\", 3/8\", 1/2\" and 2\"",                      why: "Covers most instrumentation and process line sizes" },
    { param: "Materials",          detail: "SS316 standard; Duplex, Monel, Hastelloy on request",                       why: "Required for corrosive, chloride, or hydrogen service" },
    { param: "Flow Paths",         detail: "2-way, 3-way T-port, 3-way L-port, high-bore full-port",                   why: "Select for isolation, diversion, mixing or max-flow duty" },
    { param: "End Connections",    detail: "NPT, BSPP, BSPT, PANAM® tube-fitting",                                      why: "Verify thread form before ordering — NPT and BSP are not interchangeable" },
    { param: "Seat Materials",     detail: "Delrin, PTFE, PEEK, KEL-F",                                                 why: "Match to media, temperature and pressure requirements" },
    { param: "Certification",      detail: "Material certificates available on request",         why: "Confirm sour service and documentation requirements at enquiry" },
  ]

  const hpMatrix = [
    { series: "HP",  rating: "10,000 psi", configs: "3-way 180°, 3-way 90° diverter", connections: "MP Cone & Thread Female" },
    { series: "HP1", rating: "15,000 psi", configs: "2-way, 3-way 180°, 3-way 90° diverter", connections: "NPT Female, MP Cone & Thread Female" },
    { series: "HP2", rating: "15,000–20,000 psi", configs: "2-way, 3-way 180°, 3-way 90° diverter", connections: "MP Cone & Thread Female" },
  ]

  const processSteps = [
    { num: "1", title: "Specification Review", body: "Send your datasheet, isometric, or bill of materials. Our technical team reviews pressure class, media compatibility, end connection standards, and flow configuration." },
    { num: "2", title: "Product Selection and Optimisation", body: "We match your requirements to the right ball valve family — standardising sizes and connection types where possible, and aligning with manifolds, check valves, and filters across the system." },
    { num: "3", title: "Quotation and Documentation", body: "A detailed quotation covering ball valves and associated fittings, manifolds and accessories, plus datasheets. Documentation requirements, including any sour service needs, are confirmed at this stage." },
    { num: "4", title: "Manufacturing, Stock Allocation and Dispatch", body: "Stock availability and lead times are confirmed at quotation and vary by product. Orders are produced under an ISO 9001:2015 certified quality management system, with global dispatch." },
  ]

  const faqs = [
    { q: "Do you supply stainless steel ball valves from stock in the UK?", a: "Stock availability varies by product and size, so please confirm availability and lead time at enquiry stage." },
    { q: "What pressure ratings are available?", a: "Standard floating ball valves are rated up to 10,000 psig. High pressure variants are available in HP (10,000 psi), HP1 (15,000 psi), and HP2 (15,000–20,000 psi) series — all in SS316 construction." },
    { q: "Can I get a 1/2\" ball valve for high pressure service?", a: "Yes. Panam manufactures from 1/8\" to 2\", including 1/2\" sizes, with high pressure families rated up to 20,000 psi. Our technical team can help you select the correct series, seat material, and end connections." },
    { q: "Do you supply 3-way ball valves in stainless steel?", a: "Yes. The portfolio includes 3-way ball valves with T-port and L-port options, including high pressure 3-way 180° and 90° turn diverter designs in SS316 — widely used for sampling, diversion, and multi-line isolation." },
    { q: "Can ball valves be integrated into automated or motorised systems?", a: "Yes. Panam ball valves are used in instrumentation and control environments and can be incorporated into automated systems alongside suitable actuation hardware. Our technical team can review your specification and advise on valve selection and interface details." },
    { q: "What options are available for hydrogen and offshore projects?", a: "Panam supports hydrogen, offshore energy, subsea production, and deep-water applications with SS316 ball valves, optional Duplex, Monel, and Hastelloy materials, with material certificates available on request." },
    { q: "Can Panam supply complete packages including ball valves, manifolds, and fittings?", a: "Yes. Panam can source and supply instrumentation valves, fittings, manifolds, filters, stainless steel fittings, and high pressure tubing from a single supplier based on your bill of materials." },
  ]

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <title>Stainless Steel Ball Valve Guide: SS316 2-Way, 3-Way & HP</title>
      <meta name="description" content="How to choose a stainless steel ball valve: SS316 2-way, 3-way and high pressure up to 20,000 psi, seat materials, end connections and specs." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/stainless-steel-ball-valve-guide" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Stainless Steel Ball Valves | SS316 2-Way, 3-Way & High Pressure",
          description: "How to choose a stainless steel ball valve: SS316 2-way, 3-way and high pressure up to 20,000 psi, seat materials, end connections and specs.",
          image: "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-3-S-O4-OD-A.png",
          author: { "@type": "Organization", name: "PANAM®" },
          publisher: { "@type": "Organization", name: "PANAM®" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.panamvalve.com/blog/stainless-steel-ball-valve-guide" },
          datePublished: "2026-06-22",
        })}
      </script>

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            Stainless Steel Ball Valves: 2-Way, 3-Way and High Pressure Guide
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            SS316 Configurations, Pressure Ratings, Seat Materials and How to Specify Correctly
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
                June 22, 2026 • 8 min read
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          component="img"
          src="https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-3-S-O4-OD-A.png"
          alt="PANAM Stainless Steel Ball Valve"
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
              Looking for a stainless steel ball valve for demanding instrumentation or process service? Panam Valves designs and manufactures precision-engineered ball valves in SS316, including 2-way, 3-way, high-bore, and high pressure configurations for critical global infrastructure. With global dispatch capability, our technical team reviews specification and bill-of-material enquiries and confirms lead times at quotation.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              Panam stainless steel ball valves are designed for hydrogen, oil & gas, power, petrochemical, offshore, and wider process applications where reliability, traceability, and pressure performance are non-negotiable.
            </Typography>

            {/* SECTION 1 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              What Is a Stainless Steel Ball Valve?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              A stainless steel ball valve is a quarter-turn isolation and flow-control valve that uses a rotating ball with a machined bore to open, close, or divert flow. In SS316 construction, it delivers high corrosion resistance and mechanical strength for aggressive media, elevated pressure, and demanding environments.
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Panam floating ball valves are engineered as instrumentation-grade components, suitable for:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "Precise isolation in measurement and control loops",
                "High integrity shut-off in process and utility lines",
                "Flow diversion and mixing using 3-way T-port and L-port designs",
                "High-bore, full-port applications needing minimal pressure drop",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1 }}>• {item}</Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Every stainless steel ball valve in the Panam range features an internally loaded anti-blow-out stem as a key safety feature. Material certificates are available on request.
            </Typography>

            {/* SECTION 2 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Range and Specifications
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Panam's stainless steel ball valve portfolio covers a broad operating envelope to support procurement and design teams specifying across multiple projects.
            </Typography>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Full Specification Checklist</Typography>
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
              3-Way Ball Valve Configurations
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Panam manufactures 3-way ball valves in both 180° and 90° turn diverter configurations across its high pressure families and instrumentation series. These designs support:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "T-port and L-port flow patterns for mixing or A-or-B selection",
                "Directional changeover between two outlets from a single inlet",
                "Mixing or splitting flows within manifolds and distribution systems",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1 }}>• {item}</Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              3-way ball valves are particularly suited to sampling skids, analytical systems, and multi-line isolation where compact, multi-port solutions reduce the number of individual valves and potential leak paths.
            </Typography>

            {/* SECTION 4 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              High Pressure Ball Valve Solutions
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              For extreme service where pressure integrity is paramount, Panam offers dedicated high pressure ball valves manufactured in SS316 across three pressure series.
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Series</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Pressure Rating</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Configurations</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>End Connections</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {hpMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell><strong>{row.series}</strong></TableCell>
                      <TableCell sx={{ color: "#01B0F0", fontWeight: 700 }}>{row.rating}</TableCell>
                      <TableCell>{row.configs}</TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.connections}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              These high pressure ball valves form part of Panam's wider high pressure family (10,000 to 60,000 psi), which also includes needle valves, double block & bleed valves, and cone & thread fittings — allowing procurement and engineering teams to build complete, coherent high pressure systems from a single, traceable source.
            </Typography>

            {/* SECTION 5 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Integration with Wider Valve and Fitting Solutions
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Stainless steel ball valves are designed to integrate cleanly with the full Panam product range, including:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "Needle valves, check valves, relief valves, gauge root valves, purge and toggle valves",
                "2-valve, 3-valve, and 5-valve manifolds for DP transmitter isolation and venting",
                "High pressure pipe fittings and adapters for 10,000–15,000 psi service",
                "MP and HP cone & thread fittings up to 60,000 psi",
                "Stainless steel tube and pipe fittings for complete line-build solutions",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1 }}>• {item}</Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Where your specification includes motorised or automated isolation points, the Panam team can work with you to align ball valve selections with suitable actuation and control hardware, maintaining consistency of materials and pressure classes across the installation. Browse our{" "}
              <Box component="a" href="https://www.panamvalve.com/valves/ball-valves" target="_blank" rel="noopener noreferrer"
                sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                full ball valves range
              </Box>
              {" "}for detailed product listings and configurations.
            </Typography>

            {/* SECTION 6 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              UK Supply from Bicester
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Panam supports UK and European projects from its Bicester location, with lead times confirmed at quotation.
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "Stainless steel ball valve supply with lead times confirmed at quotation",
                "High pressure ball valve solutions for critical infrastructure",
                "Material certificates available on request",
                "Technical support for specification and bill-of-material alignment",
                "Global dispatch capability to meet project timelines worldwide",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1 }}>• {item}</Typography>
              ))}
            </Box>

            {/* SECTION 7 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              What to Expect When You Send a Specification
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
              Select by pressure class and flow path first, then lock in material, seat, and end connections to your media and temperature. For high pressure service, confirm whether floating ball valves (up to 10,000 psig) or the HP/HP1/HP2 series is required. Specify sour service (NACE MR0175) and documentation requirements upfront to avoid delays later.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Browse the full{" "}
              <Box component="a" href="https://www.panamvalve.com/valves/ball-valves" target="_blank" rel="noopener noreferrer"
                sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                Panam ball valves range
              </Box>
              , or send your bill of materials directly for a response within 24 hours. Contact us at Ground Floor, St Edburgs Hall, Priory Road, Bicester OX26 6BL, United Kingdom.
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
                  "What Is a Stainless Steel Ball Valve?",
                  "Full Specification Checklist",
                  "3-Way Configurations",
                  "High Pressure Series (HP / HP1 / HP2)",
                  "Integration with Valves and Fittings",
                  "UK Supply from Bicester",
                  "Specification Process",
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
                href="https://www.panamvalve.com/valves/ball-valves"
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
                    src="https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-3-S-O4-OD-A.png"
                    alt="PANAM Stainless Steel Ball Valves"
                    sx={{ width: "100%", height: 160, objectFit: "contain", bgcolor: "#F4F4F4", p: 2 }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", color: "#1A1A1A", mb: 0.5 }}>
                      PANAM Ball Valves
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#666", mb: 1.5 }}>
                      SS316 · Up to 20,000 PSI · 2-Way / 3-Way / High-Bore
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

export default BallValvesBlog