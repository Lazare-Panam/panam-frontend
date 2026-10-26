import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const ApiValveStandardsBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cta = {
    heading: "Need a compliance review of your valve list?",
    body: "Send your valve list and data sheets to Panam Valves. We cross-check against API, EN, ASME and NACE, propose materials, and return an ITP and document register for client review. Lead times are confirmed at quotation, with global dispatch.",
    buttonText: "Request a Compliance Review",
    buttonLink: "/enquiry",
  }

  // Concise scopes and when each applies in practice. Always read client specs for
  // overrides on materials, NDE and additional tests.
  const standardsMatrix = [
    {
      standard: "API 598 — Valve inspection and testing",
      covers: "Universal pressure and leakage test requirements for industrial valves. Covers hydrostatic shell and seat tests, and low-pressure air seat tests. Invoked alongside a product standard such as API 600 or API 6D to define how the valve is tested and the acceptance criteria.",
      use: "All manual isolation valves on skids, plants and pipelines.",
    },
    {
      standard: "API 600 — Steel gate valves (bolted bonnet)",
      covers: "Wrought or cast steel gate valves, generally Class 150 to Class 2500, DN50 and above. Focuses on wall thickness, materials, design features and testing by reference to API 598. Rising-stem OS&Y patterns with solid or flexible wedge.",
      use: "Refinery, petrochemical and power-plant isolation on process lines.",
    },
    {
      standard: "API 602 — Compact forged steel valves",
      covers: "Forged steel gate, globe and check valves in smaller sizes, typically DN15 to DN50, threaded or socket-weld ends, with Class 800 and above common.",
      use: "Utility, steam tracing and small-bore process take-offs where compact bodies and forged integrity are preferred.",
    },
    {
      standard: "API 603 — Corrosion-resistant gate valves",
      covers: "Thin-wall, corrosion-resistant austenitic stainless steel gate valves, generally Class 150 and Class 300. Designed to optimise corrosion resistance over pressure wall thickness.",
      use: "Low- to moderate-pressure corrosive services where stainless cost is justified, such as chlorides and clean services.",
    },
    {
      standard: "API 6D — Pipeline valves",
      covers: "Pipeline gate, plug, ball and check valves for transmission pipelines and associated facilities. Adds through-conduit designs, piggability (where relevant), double block and bleed capability for certain configurations, end-to-end testing and documentation.",
      use: "Midstream pipeline isolation, launcher/receiver stations and block valves.",
    },
    {
      standard: "API 609 — Butterfly valves",
      covers: "Centric and double-offset (concentric Type A, double-offset Type B) butterfly valves. Covers design, materials, face-to-face, pressure-temperature ratings and testing.",
      use: "Large-diameter, weight-sensitive isolation and throttling in water, HVAC and process duties where torque and footprint matter.",
    },
    {
      standard: "API 526 & API 527 — Pressure relief valves",
      covers: "API 526 standardises PRV orifice areas and dimensional envelopes. API 527 defines seat-tightness testing for metal- and soft-seated PRVs.",
      use: "Specifying orifice letter, inlet/outlet sizes, and verifying leakage acceptance on spring-loaded and pilot-operated relief valves.",
    },
  ]

  const dataSheetPoints = [
    "Identify the product standard and the test standard separately, for example: Product: API 600, Testing: API 598.",
    "State pressure class and design temperature range per ASME B16.34 and B31.3 context where applicable.",
    "Specify body, bonnet, trim and bolting materials with ASTM references. Call out NACE MR0175 if sour service is possible.",
    "Define end connections: ASME B16.5 flanged, ASME B16.25 BW, NPT or socket weld for small-bore per API 602.",
    "Include operator requirements: lever, gearbox, actuator torque, fail position, and ISO 5211 interface if automated.",
    "Add documentation deliverables: material certificates (EN 10204 3.1), hydro test reports per API 598, PMI if required, NDE reports, coating data sheets and marking.",
  ]

  const itpPoints = [
    "Incoming material verification: MTC review, heat-number traceability, PMI on alloy grades if specified.",
    "In-process checks: NDE on castings or welds to project extent, dimensional inspection to product standard, torque testing if actuated.",
    "Pressure tests: shell and seat tests per API 598, air seat test where required. For API 6D pipeline valves, include end-to-end testing and DBB verification where applicable.",
    "Final inspection: marking per standard, nameplate, coating DFT readings, cleanliness and preservation, document-pack compilation.",
  ]

  const pitfalls = [
    "Mixing standards in one line item — e.g. calling API 6D on a plant gate that should be API 600. Panam cross-checks service and line class, then flags mismatches before build.",
    "Omitting NACE MR0175 in materials for sour service. Panam confirms media and temperature and proposes suitable materials, with material certificates available on request.",
    "Not stating test fluid or test pressures. Panam defaults to API 598 criteria and documents actual pressures and hold times on reports.",
    "Missing material documentation across subcomponents. Request material certificates at enquiry so they can be supplied with the order.",
    "Ambiguous trim descriptions. Panam itemises trim components by ASTM grade, hardness and seat material.",
  ]

  const selectionMatrix = [
    { service: "Pipeline block valve, transmission gas", spec: "API 6D ball or gate, DBB as specified, testing per API 6D and API 598." },
    { service: "Plant process isolation, DN200, Class 300", spec: "API 600 gate, RF flanged, testing per API 598." },
    { service: "Small-bore steam line, Class 800, DN20", spec: "API 602 forged globe, SW ends, API 598 tests." },
    { service: "Corrosive service brine, DN150, Class 150", spec: "API 603 stainless gate, API 598 tests." },
    { service: "Large-diameter water line, DN900", spec: "API 609 double-offset butterfly, face-to-face per API 609, tests per API 598 or ISO 5208 as specified." },
  ]

  const faqs = [
    { q: "What is API in valves?", a: "API is the American Petroleum Institute. In valves it refers to product and test standards that define design, materials and inspection." },
    { q: "What does API stand for in engineering?", a: "American Petroleum Institute." },
    { q: "What is API 598 used for?", a: "Valve inspection and pressure-leak testing across valve types, defining shell and seat test methods and acceptance." },
    { q: "What is the difference between API 600 and 602?", a: "API 600 covers larger steel gate valves for plant service. API 602 covers compact forged gate, globe and check valves in small sizes and higher classes." },
    { q: "API 600 vs 602 vs 603?", a: "API 600: mainstream steel gate for plant lines. API 602: compact forged small-bore gate, globe, check. API 603: corrosion-resistant stainless gate in lower classes." },
    { q: "What is the difference between API 6D and API 600?", a: "API 6D is for pipeline valves with additional pipeline-specific features and testing. API 600 is a plant gate-valve standard." },
    { q: "What is the difference between API 598 and API 609?", a: "API 598 sets test procedures and leakage acceptance. API 609 is the butterfly-valve product standard that references testing." },
    { q: "What is the API standard for valves?", a: "There is no single standard. Use the relevant product standard (API 600, 602, 603, 6D, 609, 526) plus API 598 for testing." },
  ]

  const heroImage = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/ball-valves/PBV-2-S-04-FF-1.png"

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <title>API Valve Standards Explained: 600, 602, 603, 598 & 6D</title>
      <meta name="description" content="API 600, 602, 603, 598 and 6D explained: which standard applies to which valve, how they differ, and how to write them into data sheets and ITPs." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/api-valve-standards-600-602-603-598-6d" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "API Valve Standards 600, 602, 603, 598, 6D Explained",
          description: "API 600, 602, 603, 598 and 6D explained: which standard applies to which valve, how they differ, and how to write them into data sheets and ITPs.",
          image: heroImage,
          author: { "@type": "Organization", name: "PANAM®" },
          publisher: { "@type": "Organization", name: "PANAM®" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.panamvalve.com/blog/api-valve-standards-600-602-603-598-6d" },
          datePublished: "2026-09-23",
        })}
      </script>

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            API Valve Standards Made Simple: API 600, 602, 603, 598, 6D and When They Apply
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            Specify With Confidence and Pass Review First Time
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Avatar sx={{ bgcolor: "#1A1A1A", width: 48, height: 48, fontSize: "1rem", fontWeight: 700 }}>SK</Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, fontSize: "1rem" }}>
                Steven Kassi
              </Typography>
              <Typography variant="body2" sx={{ color: "#01B0F0", fontWeight: 600, fontSize: "0.85rem" }}>
                SEO Expert
              </Typography>
              <Typography variant="caption" sx={{ color: "#777" }}>
                September 23, 2026 • 9 min read
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          component="img"
          src={heroImage}
          alt="PANAM industrial valves specified to API standards"
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

      {/* BODY CONTENT */}
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* ── Main Article ── */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              Getting API standards right in your submittals saves time, prevents rework at FAT or SAT, and builds trust with your client. This guide maps the core API valve standards to valve types, sizes, tests and documents so you can specify with confidence and pass review first time.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              If you are consolidating across EN, ASME, NACE and API, use this as a quick reference for what each standard covers, how they interact, and what your data sheet and ITP should call up. Where useful, we note how Panam typically packages documentation to avoid the common red flags that hold up approvals.
            </Typography>

            {/* SECTION 1 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Quick Glossary: What API Means in Valves and Why It Matters
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              API stands for the American Petroleum Institute. In valves, API publishes product and test standards widely adopted in oil and gas, power and process projects. This is not software application programming interfaces — it is a family of manufacturing, design and testing requirements for mechanical valves and pipelines.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Why procurement cares: API calls affect material grades, pressure classes, end connections, testing scope, inspection points, marking, documentation and warranty positions. Mislabel a valve against the wrong API and you risk NCRs, delays and change orders.
            </Typography>

            {/* SECTION 2 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Standard Snapshots and Typical Use
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Below are concise scopes and when each applies in practice. Always read client specs for overrides on materials, NDE and additional tests.
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Standard</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>What It Covers</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Typical Use</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {standardsMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell sx={{ verticalAlign: "top" }}>
                        <strong>{row.standard}</strong>
                      </TableCell>
                      <TableCell sx={{ verticalAlign: "top" }}>{row.covers}</TableCell>
                      <TableCell sx={{ verticalAlign: "top", color: "#666" }}>{row.use}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* SECTION 3 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Choosing Between Closely Related Standards
            </Typography>

            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>
              API 600 vs API 602 vs API 603
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "API 600: cast or forged steel gate valves, larger sizes, higher classes, mainstream process isolation.",
                "API 602: compact forged gate, globe and check in small sizes where threaded or socket ends are common.",
                "API 603: stainless corrosion-resistant gate valves where corrosion performance and light section are priorities at lower pressure classes.",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1 }}>
                  • {item}
                </Typography>
              ))}
            </Box>

            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>
              API 6D vs API 600
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              API 6D is pipeline-focused, including ball, plug, gate and check with additional features like DBB capability, end-to-end pressure testing and piggability considerations. API 600 is a plant gate-valve product standard with no pipeline-specific provisions. If the service is pipeline transmission or station isolation, default to API 6D. If it is plant process isolation on fixed equipment or unit piping, API 600 gate is typical.
            </Typography>

            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>
              API 598 vs API 609
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              API 598 defines pressure and leakage tests applicable to many valve types. API 609 is the butterfly product standard that refers to testing requirements. For a butterfly valve, you call API 609 for design and dimensional control, then confirm testing per API 598 (or ISO 5208 if the client requests it).
            </Typography>

            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>
              What is the API standard for valves?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              There is no single API standard that covers all valves. You pair a product standard (API 600, 602, 603, 6D, 609, 526) with API 598 for inspection and testing, plus any client-specified overlays.
            </Typography>

            {/* SECTION 4 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              How to Write a Compliant Data Sheet
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
              Keep it unambiguous so the manufacturer and inspector read the same requirement.
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {dataSheetPoints.map(item => (
                <Typography key={item} sx={{ mb: 1 }}>
                  • {item}
                </Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              If you are preparing small-bore instrumentation isolation, consider complementary items like a suitable check valve or a stainless steel ball valve for quick shut-off. Panam supplies both and can align materials and test documents across the package.
            </Typography>

            {/* SECTION 5 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Building an ITP That Passes First Review
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
              Your ITP should mirror the client's hold and witness points, and clearly reference standards.
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {itpPoints.map(item => (
                <Typography key={item} sx={{ mb: 1 }}>
                  • {item}
                </Typography>
              ))}
            </Box>

            {/* SECTION 6 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Common Pitfalls That Delay FAT or SAT — and How Panam Avoids Them
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {pitfalls.map(item => (
                <Typography key={item} sx={{ mb: 1.5 }}>
                  • {item}
                </Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Panam supports projects from Bicester, with global dispatch. Lead times vary by product and are confirmed at quotation; documentation requirements should be agreed against your ITP at order.
            </Typography>

            {/* SECTION 7 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Example Mapping for Quick Selection
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Service</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Specification</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectionMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell sx={{ verticalAlign: "top" }}>
                        <strong>{row.service}</strong>
                      </TableCell>
                      <TableCell sx={{ verticalAlign: "top", color: "#666" }}>{row.spec}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              For complementary hardware, Panam supplies matched materials on instrumentation valve packages. Explore options for a ball valve in stainless, or select a backflow solution with a check valve that meets your pressure class and test criteria.
            </Typography>

            {/* FAQ */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Short FAQ
            </Typography>
            <Stack spacing={4} sx={{ mb: 6 }}>
              {faqs.map(item => (
                <Box key={item.q}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {item.q}
                  </Typography>
                  <Typography variant="body1">{item.a}</Typography>
                </Box>
              ))}
            </Stack>

            {/* HOW PANAM CAN HELP */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              How Panam Can Help
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Send your valve list and data sheets and we will cross-check against API, EN, ASME and NACE requirements, propose materials, and return an ITP and document register for client review. Lead times are confirmed at quotation, with global dispatch.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8, fontWeight: 700 }}>
              Helpful resources on related components:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              <Typography sx={{ mb: 1 }}>
                • See options for a{" "}
                <Box component="a" href="https://www.panamvalve.com/valves/ball-valves" sx={{ color: "#01B0F0", fontWeight: 600 }}>
                  stainless steel ball valve
                </Box>{" "}
                that aligns with your material and pressure class.
              </Typography>
              <Typography sx={{ mb: 1 }}>
                • Select a matched{" "}
                <Box component="a" href="https://www.panamvalve.com/valves/check-valves" sx={{ color: "#01B0F0", fontWeight: 600 }}>
                  check valve
                </Box>{" "}
                for backflow protection.
              </Typography>
              <Typography sx={{ mb: 1 }}>
                • Consolidate fittings and flanges with{" "}
                <Box component="a" href="https://www.panamvalve.com/instrumentation-fittings/pipe-fittings" sx={{ color: "#01B0F0", fontWeight: 600 }}>
                  stainless steel fittings
                </Box>{" "}
                and flange supply.
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontStyle: "italic", color: "#555" }}>
              Summary: choose the correct product standard for the duty, pair it with API 598 for testing, lock materials and ends to the line class, and specify documents and inspection points clearly. Share your specification with Panam for a compliance review and to agree the documentation pack for FAT and SAT.
            </Typography>

            {/* CTA */}
            <Paper elevation={0} sx={{ mt: 10, p: { xs: 4, md: 6 }, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px" }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: "1.5rem" }}>
                {cta.heading}
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
                {cta.body}
              </Typography>
              <Button variant="contained" onClick={() => navigate(cta.buttonLink)} endIcon={<ArrowForwardIcon />} sx={{ bgcolor: "#01B0F0", color: "white", px: 4, py: 1.5, borderRadius: "4px", fontWeight: 700 }}>
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
                {["What API Means in Valves", "Standard Snapshots & Typical Use", "API 600 vs 602 vs 603", "API 6D vs API 600", "API 598 vs API 609", "Writing a Compliant Data Sheet", "Building an ITP That Passes", "Common FAT/SAT Pitfalls", "Example Mapping for Selection"].map(text => (
                  <Box key={text} sx={{ pb: 2, borderBottom: "1px solid #EEE" }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#555" }}>
                      • {text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* Sidebar product link card */}
              <Box component="a" href="https://www.panamvalve.com/" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: "none", display: "block", mt: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    border: "1px solid #EEE",
                    borderRadius: "4px",
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                    "&:hover": { borderColor: "#01B0F0" },
                  }}>
                  <Box component="img" src={heroImage} alt="PANAM Industrial Valves" sx={{ width: "100%", height: 160, objectFit: "contain", bgcolor: "#F4F4F4", p: 2 }} />
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", color: "#1A1A1A", mb: 0.5 }}>PANAM Industrial Valves</Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#666", mb: 1.5 }}>Technical Support · Lead Times on Request</Typography>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#01B0F0" }}>Browse the range →</Typography>
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

export default ApiValveStandardsBlog
