import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const UKBuyersGuideBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cta = {
    heading: "Need valves with the right documentation for your project?",
    body: "Send your specification or bill of materials to Panam Valves. Our technical team will respond with a matched quote, with material certificates available on request.",
    buttonText: "Request a Quote",
    buttonLink: "/enquiry",
  }

  const valveTypes = [
    { type: "Ball Valves", duty: "On-off isolation, utilities, fuel gas, manifolds, high-pressure instrumentation", note: "2-way and 3-way (L or T-port); full-port for low pressure drop" },
    { type: "Gate Valves", duty: "Line isolation on larger bores, infrequent operation", note: "API 600 (large bore) or API 602 (small bore)" },
    { type: "Globe Valves", duty: "Throttling, steam, condensate, control valve bodies", note: "Higher pressure drop; better modulating capability than ball or gate" },
    { type: "Check Valves", duty: "Reverse flow prevention, pump protection", note: "Inline spring, swing, tilting-disc, dual-plate wafer" },
    { type: "Butterfly Valves", duty: "Large-bore isolation, hydrocarbon and hydrogen service", note: "Double-offset or triple-offset for tight shut-off" },
    { type: "Control Valves", duty: "Automated modulating for flow, pressure, level or temperature", note: "Trim, Cv sizing, rangeability and actuator spec define performance" },
  ]

  const materialsMatrix = [
    { material: "Carbon Steel", application: "Hydrocarbons, general utilities at moderate temperature", note: "Check corrosion allowance and low-temp toughness" },
    { material: "316 / 316L Stainless", application: "Water, chemicals, hydrogen, instrumentation, cryogenic stems", note: "316L mitigates sensitisation" },
    { material: "Duplex / Super Duplex", application: "Seawater, produced water, offshore and subsea", note: "High chloride resistance and strength" },
    { material: "Monel / Hastelloy", application: "Sour gas, acids, aggressive chemical duty", note: "Specify NACE MR0175/ISO 15156 for sour service" },
  ]

  const standardsMatrix = [
    { standard: "API 598", scope: "Shop pressure test for isolation and check valves — shell and seat leak tests prior to shipment" },
    { standard: "API 6D", scope: "Pipeline valves — design, testing and documentation for transmission lines and stations" },
    { standard: "API 600", scope: "Bolted-bonnet steel gate valves, NPS 2 and above, heavy wall, process and pipeline" },
    { standard: "API 602", scope: "Compact forged steel gate, globe and check valves, NPS 2 and below, refinery and power" },
    { standard: "API 603", scope: "Corrosion-resistant thin-walled austenitic stainless gate valves" },
    { standard: "EN 10204 3.1", scope: "Material certificates with traceability — standard documentation requirement" },
  ]

  const faqs = [
    { q: "What are the four types of ball valves?", a: "Full-port, reduced-port, V-port control and multi-port (typically 3-way). By construction: floating and trunnion define how the ball is supported." },
    { q: "How does a 3-way ball valve work?", a: "An L- or T-drilled ball connects or diverts between three ports. L-port selects between two outlets from one inlet; T-port can mix or divert two streams depending on handle or actuator position." },
    { q: "What is API 598 used for?", a: "It defines shop pressure testing for valve shell and seat leakage on isolation and check valves prior to shipment." },
    { q: "What is the difference between API 600 and API 602?", a: "API 600 covers bolted-bonnet cast or forged steel gate valves, generally larger sizes with heavier sections. API 602 covers compact forged steel gate, globe and check valves, usually NPS 2 and below for high-integrity small-bore service." },
    { q: "Does higher Cv mean more flow?", a: "Yes. For the same pressure drop, a higher Cv indicates a higher potential flow rate, subject to limits from noise, cavitation and velocity." },
    { q: "What are the 4 types of check valves?", a: "Inline spring check, swing check, tilting-disc check and dual-plate wafer check are the four most used designs in process service." },
    { q: "What is a cryogenic valve?", a: "A valve designed for very low temperatures — typically with an extended bonnet and materials and seats that maintain sealing performance below -150°C, tested for cryogenic leakage." },
    { q: "What is the difference between double offset and triple offset butterfly valves?", a: "Double offset moves the shaft and disc off-centre to reduce seat wear and improve sealing. Triple offset adds a conical sealing geometry for bubble-tight metal-to-metal shut-off at higher temperatures through more cycles." },
    { q: "What is a control valve used for?", a: "It modulates flow to control a process variable such as pressure, level, temperature or flow rate when driven by a positioner and actuator." },
  ]

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <title>UK Industrial Valves Buyer's Guide: Types, Standards, Materials</title>
      <meta name="description" content="Learn how to specify industrial valves in the UK, from types and standards to materials, sizing and planning supply." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/uk-industrial-valves-buyers-guide" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "UK Industrial Valves Buyer's Guide: Types, Standards, Materials",
          description: "Learn how to specify industrial valves in the UK, from types and standards to materials, sizing and planning supply.",
          image: "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-3-S-O4-OD-A.png",
          author: { "@type": "Organization", name: "PANAM®" },
          publisher: { "@type": "Organization", name: "PANAM®" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.panamvalve.com/blog/uk-industrial-valves-buyers-guide" },
          datePublished: "2026-06-22",
        })}
      </script>

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            UK Buyer's Guide to Industrial Valves: Types, Standards, Materials and Supply
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            How to Specify with Confidence
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
                June 22, 2026 • 9 min read
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
          alt="PANAM Industrial Valves"
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
              Procurement and project schedules move on valves. Choose correctly and you compress design, approvals and installation. Choose poorly and you add weeks of rework. This guide distils the choices UK engineers make every day across energy, process, hydrogen and utilities, so you can specify with confidence.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              Panam Valves supplies precision-engineered industrial and instrumentation valves Material certificates are available on request. Send your specification or bill of materials and our technical team will respond with a quotation, including lead times, which vary by product.
            </Typography>

            {/* SECTION 1 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Valve Fundamentals and Where Each Fits
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 6 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Valve Type</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Primary Duty</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Key Notes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {valveTypes.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell><strong>{row.type}</strong></TableCell>
                      <TableCell>{row.duty}</TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Across types, selection trade-offs include Cv versus allowable pressure drop, pressure class (Class 150 to 2500 typical), temperature range, fugitive emission performance, cycle life, maintainability and actuator interface — ISO 5211 for quarter-turn, NAMUR for pneumatic accessories. Higher Cv generally indicates more potential flow for the same pressure drop, but noise, cavitation and erosion constraints still apply.
            </Typography>

            {/* SECTION 2 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Standards and Testing You Will Be Asked For
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Standard</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Scope</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {standardsMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell><strong>{row.standard}</strong></TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.scope}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Class ratings commonly run Class 150, 300, 600, 900, 1500 and 2500. Documentation packages typically include EN 10204 3.1 material certs, ITP, hydro and seat test reports (API 598), PMI, NACE MR0175 statements where specified, and ATEX or PED declarations as required. Factory Acceptance Test scope and witness levels should be agreed at order.
            </Typography>

            {/* SECTION 3 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Materials and Media Compatibility
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Material</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Application</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Note</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {materialsMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell><strong>{row.material}</strong></TableCell>
                      <TableCell>{row.application}</TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              For sour service, specify NACE MR0175/ISO 15156 compliance. For hydrogen, consider hydrogen embrittlement risk and diffusion at pressure — select forged materials, documented heat treatment and appropriate seal polymers. Seat and packing materials matter: PTFE, PEEK and KEL-F each have distinct temperature and chemical windows.
            </Typography>

            {/* SECTION 4 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              High-Pressure and Specialty Applications
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              {[
                { title: "High-pressure ball valves", body: "Up to 20,000 psi, typical for instrumentation isolation, sampling and block-and-bleed." },
                { title: "Cryogenic valves", body: "Extended bonnets move packing out of the cold zone, avoid icing around the gland and maintain stem seal integrity below -150°C. Usually tested for cryogenic leakage per relevant ISO standards." },
                { title: "Triple-offset butterfly valves", body: "Conical seat geometry achieves bubble-tight shut-off at higher temperatures in cycle-intensive service." },
                { title: "Control valve failure modes", body: "Cavitation, flashing, wire-draw and vibration are the common risks. Correct trim and equal percentage characteristics mitigate most of these." },
                { title: "Quarter-turn automation", body: "Align actuator torque and safety factors to the valve's breakaway and running torque across the full temperature and pressure envelope. ISO 5211 drilling simplifies actuator swaps." },
              ].map(item => (
                <Box key={item.title}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography variant="body1">{item.body}</Typography>
                </Box>
              ))}
            </Stack>

            {/* SECTION 5 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Sizing, Conversion and Cv
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Always lock the unit system before you order. DN refers to metric nominal size; NB or NPS typically maps to inches. Beware common traps — for example, 22 mm copper is not the same as ¾ inch. Flange standards also mix systems, so check EN 1092-1 PN versus ASME B16.5 Class ratings.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Cv is the flow coefficient in US units; higher Cv means more flow for the same pressure drop. When converting to metric, Kv is approximately 0.865 of Cv. For control duty, calculate expected pressure drop at normal, minimum and maximum flows to avoid valve oversizing that leads to hunting and poor control.
            </Typography>

            {/* SECTION 6 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Installation, Testing and Lifecycle Planning
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              {[
                "Specify actuator interfaces early — ISO 5211, NAMUR, solenoid and positioner air specs, wiring classes and any SIL reliability demands.",
                "Plan leak testing per API 598 or client spec and agree FAT scope with witnessed holds if needed.",
                "Ensure spares kits for seats, seals, stem packings and trim are on the BOM, aligned to expected cycle counts and media cleanliness.",
                "Where backflow risks exist, select a check valve cracking pressure that balances seal integrity with pump NPSH and start-up transients.",
              ].map((tip, i) => (
                <Typography key={i} variant="body1" sx={{ lineHeight: 1.8 }}>
                  <strong>{i + 1}.</strong> {tip}
                </Typography>
              ))}
            </Stack>

            {/* SECTION 7 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Planning Procurement
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Panam Valves supplies core industrial valves and fittings with technical support; lead times vary by product and are confirmed at quotation. For isolation or instrumentation skids, you can source:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "On-off and 3-way ball valves for process and instrumentation, including high-bore and high-pressure variants",
                "Inline and wafer check valves matched to footprint and cracking pressure",
                "Butterfly valves with manual or automated actuation for large-bore duties",
                "Control valve bodies, positioners and accessories specified to your service data",
                "Compatible piping and connection hardware including stainless steel pipe fittings, BSP fittings and union fitting options",
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
              Select by function first, then confirm standards and documentation, then lock materials and seats to the medium and temperature. Validate Cv and pressure drop, convert sizes carefully between DN and NPS, and specify actuator interfaces and testing up front.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Panam Valves can help you assemble a compliant BOM, with lead times confirmed at quotation. Contact us at Ground Floor, St Edburgs Hall, Priory Road, Bicester OX26 6BL, United Kingdom.
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
                  "Valve Types and Where Each Fits",
                  "Standards and Testing Requirements",
                  "Materials and Media Compatibility",
                  "High-Pressure and Specialty Duties",
                  "Sizing, Cv and Unit Conversion",
                  "Installation and Lifecycle Planning",
                  "Procurement Planning",
                ].map(text => (
                  <Box key={text} sx={{ pb: 2, borderBottom: "1px solid #EEE" }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#555" }}>
                      • {text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* Sidebar product link card */}
              <Box
                component="a"
                href="https://www.panamvalve.com/"
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
                    alt="PANAM Industrial Valves"
                    sx={{ width: "100%", height: 160, objectFit: "contain", bgcolor: "#F4F4F4", p: 2 }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", color: "#1A1A1A", mb: 0.5 }}>
                      PANAM Industrial Valves
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#666", mb: 1.5 }}>
                      Technical Support · Lead Times on Request
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

export default UKBuyersGuideBlog