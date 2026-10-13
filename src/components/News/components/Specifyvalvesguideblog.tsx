import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const SpecifyValvesGuideBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cta = {
    heading: "Ready to turn your spec into a purchase order?",
    body: "Send your BOM or specification to Panam Valves. Our engineering team will respond with a matched quote, with material certificates available on request and lead times confirmed at quotation.",
    buttonText: "Request a Quote",
    buttonLink: "/enquiry",
  }

  const functionMatrix = [
    { fn: "On/off isolation", need: "Fast shut-off with minimal pressure drop", fit: "High-bore ball valve; needle or gauge root valves for positive instrument isolation" },
    { fn: "Throttling or modulating control", need: "Stable Cv across stroke, predictable pressure drop", fit: "Needle or globe-type control valve; pneumatic control valves for air service" },
    { fn: "Non-return", need: "Protect equipment and meters", fit: "Check valve sized for cracking pressure and flow regime" },
    { fn: "Overpressure protection", need: "Safe vent or recirculation", fit: "Adjustable pressure relief valve, set and tagged for relief pressure" },
    { fn: "Double isolation and bleed", need: "Prove zero energy before intervention", fit: "DBB (ball-needle-ball or needle-needle) or DBB manifold tied to transmitter/process" },
  ]

  const pressureMatrix = [
    { series: "6K / 10K / 15K / 20K psig", scope: "SS316 across ball, needle, manifolds and DBB — standard instrumentation classes" },
    { series: "MP Cone & Thread — 20,000 psi", scope: "Compact, weld-free sealing for very high pressure or tight envelopes" },
    { series: "HP Cone & Thread — 60,000 psi", scope: "Proven for hydrogen and offshore service; HP needle valves extend to this class" },
  ]

  const seatMatrix = [
    { material: "PTFE", note: "Broad chemical resistance, typical to ~200°C. Standard for many ball seats and needle packing." },
    { material: "PEEK", note: "Higher temperature and deformation resistance; suited to higher delta-P and compressible gas service." },
    { material: "KEL-F (PCTFE)", note: "Cryogenic and low-temperature service with good permeation resistance." },
    { material: "Graphoil", note: "High-temperature packing to 538°C in needle and manifold bonnets." },
  ]

  const metallurgyMatrix = [
    { material: "SS316", application: "Standard choice for most utilities and clean process streams" },
    { material: "Duplex", application: "Higher strength and chloride stress corrosion resistance; common offshore" },
    { material: "Monel", application: "Excellent seawater and hydrofluoric acid resistance" },
    { material: "Hastelloy", application: "Aggressive chemical resistance in refining and chemical plants" },
  ]

  const rangeMatrix = [
    { duty: "Isolation with low loss", range: "Stainless steel ball valve, incl. high-bore and 3-way, in SS316, Duplex, Monel or Hastelloy on request" },
    { duty: "Precise throttling", range: "Needle valves, incl. IB compact and HP forged series up to 60,000 psi" },
    { duty: "Double block and bleed", range: "DBB assemblies, ball-needle-ball or needle-needle, up to 20,000 psi" },
    { duty: "Backflow protection", range: "Stainless steel check valve families with multiple cracking pressures" },
    { duty: "Overpressure", range: "Adjustable pressure relief valve ranges with factory-set cracking pressure" },
    { duty: "Transmitters", range: "2-, 3- and 5-valve manifolds in 6K and 10K, with high-pressure options" },
  ]

  const faqs = [
    { q: "What is a ball valve used for?", a: "Fast on/off isolation with low pressure drop, suitable for clean liquids and gases. Also used for diversion or mixing in 3-way configurations." },
    { q: "Is a ball valve better than a gate valve?", a: "For quick shut-off and compact footprints, ball valves are typically better. Gate valves may suit large-bore pipeline isolation where throttling isn't required but space allows a rising stem. Choose based on duty, size and maintenance philosophy." },
    { q: "Does higher Cv mean more flow?", a: "Yes. Higher Cv indicates greater capacity at a given pressure drop, and lower pressure loss at a given flow." },
    { q: "What are the four types of ball valves?", a: "Common categories are 2-way, 3-way L-port, 3-way T-port, and high-bore full-port. Other distinctions include floating vs trunnion in larger pipeline valves." },
    { q: "What are industrial valves?", a: "Mechanical devices that start, stop or regulate flow and pressure in piping systems, including ball, needle, globe, gate, check, relief and manifold assemblies." },
    { q: "What are the types of valves used in industries?", a: "Typical plant line-ups use ball, needle, globe, gate, check, pressure relief, butterfly and manifold valves, selected by service and code class." },
    { q: "What are the three types of control valves?", a: "Common control formats are globe-style, rotary ball control, and butterfly control, actuated pneumatically or electrically." },
    { q: "What is the difference between a valve and a control valve?", a: "A valve performs isolation or non-return functions; a control valve modulates position to maintain a process variable, usually via an actuator and controller." },
    { q: "How do you install a control valve?", a: "Follow the flow arrow, support the body, align gaskets or fittings, torque to spec, ensure actuator calibration and travel limits, then leak and stroke test before handover. Observe orientation requirements for positioners." },
    { q: "What is the lifespan of a control valve?", a: "It varies with media, pressure drop, cycle count and maintenance. With suitable materials and planned overhauls, service life often extends many years in industrial duty." },
  ]

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <title>How to Specify Industrial and Control Valves: Cv, Pressure Class and Materials | Panam Valve</title>
      <meta name="description" content="A fast, defensible route from application to purchase order for industrial and control valves — function, Cv and pressure drop, MP/HP ratings, end connections, seats and materials, mapped to Panam ranges." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/how-to-specify-industrial-and-control-valves" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "How to Specify Industrial and Control Valves: Cv, Pressure Class and Materials",
          description: "A fast, defensible route from application to purchase order for industrial and control valves — function, Cv and pressure drop, MP/HP ratings, end connections, seats and materials, mapped to Panam ranges.",
          image: "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-3-S-O4-OD-A.png",
          author: { "@type": "Organization", name: "PANAM®" },
          publisher: { "@type": "Organization", name: "PANAM®" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.panamvalve.com/blog/how-to-specify-industrial-and-control-valves" },
          datePublished: "2026-07-21",
        })}
      </script>

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            How to Specify Industrial and Control Valves: From Cv and Pressure Class to Materials
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            A Fast, Defensible Route from Application to Purchase Order
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Avatar sx={{ bgcolor: "#1A1A1A", width: 48, height: 48, fontSize: "1rem", fontWeight: 700 }}>SR</Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, fontSize: "1rem" }}>
                Steven Kassi
              </Typography>
              <Typography variant="body2" sx={{ color: "#01B0F0", fontWeight: 600, fontSize: "0.85rem" }}>
                SEO Expert
              </Typography>
              <Typography variant="caption" sx={{ color: "#777" }}>
                July 21, 2026 • 8 min read
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
          alt="PANAM Industrial and Control Valves"
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
              Selecting the right valve for a new build or a brownfield upgrade starts with the process, not the catalogue. If you define the duty, media, envelope and compliance up front, the specification almost writes itself. This guide gives plant engineers and project specifiers a fast, defensible route from application to purchase order, mapped to Panam ranges with clear material and seat
              options.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              Material certificates are available on request, and lead times are confirmed at quotation. Send your BOM or spec to Panam for an engineering response.
            </Typography>

            {/* SECTION 1 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Start with the Process and Define the Function
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Begin with what the valve must do, then choose the construction that does it most reliably in your conditions.
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Function</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>What's Needed</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Typical Fit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {functionMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <strong>{row.fn}</strong>
                      </TableCell>
                      <TableCell>{row.need}</TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.fit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Panam covers these with needle valves, floating ball valves, relief valves, check valves, manifolds, DBB assemblies and high-pressure series.
            </Typography>

            {/* SECTION 2 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Decode Cv, Flow and Pressure Drop
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Flow coefficient (Cv) relates valve capacity to pressure drop. For a given fluid and temperature, a higher Cv generally means more flow for the same differential pressure, or lower pressure drop for the same flow. Full-port and high-bore ball valves offer high Cv and low losses for on/off service. Needle valves and globe-style control geometries trade Cv for control resolution and
              linearity.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8, fontWeight: 700 }}>
              Rules of thumb:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {["Choose high-bore ball for clean liquids and gases where low pressure loss and fast shut-off matter.", "Choose needle or globe-type control when you need stable positioning, fine metering, or cavitation control at modest Cv.", "For three-way diversion or mixing, use 3-way ball with L-port or T-port flow paths to match the process schematic."].map(item => (
                <Typography key={item} sx={{ mb: 1 }}>
                  • {item}
                </Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Panam high-bore ball valves maximise Cv from 1/4 inch to 2 inches; needle valves cover fine control up to 20,000 psig. For actuated control, see Panam control valve options including pneumatic control valves.
            </Typography>

            {/* SECTION 3 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Pressure Ratings and When to Move to MP/HP
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Match the rating to the most severe credible pressure and temperature, with code allowances.
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Series</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Scope</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pressureMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <strong>{row.series}</strong>
                      </TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.scope}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Cone &amp; thread joints provide reliable sealing without welded connections and are proven for hydrogen and offshore service. Panam HP ball valves are available in 10,000, 15,000 and 20,000 psi classes with NPT or MP cone &amp; thread ends; HP needle valves extend to 60,000 psi. MP and HP cone &amp; thread nipples and unions cover 1/4 inch to 1 inch OD.
            </Typography>

            {/* SECTION 4 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              End Connections and Integration
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.8 }}>
              Select ends that match plant standards and leak integrity needs:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {["Threaded: NPT, BSPP, BSPT for legacy or mixed plants.", "Tube fittings: PANAM tube-fitting ends for clean, maintainable instrumentation.", "Flanged: ASME B16.5 and EN 1092 where piping class requires it.", "MP/HP cone & thread for compact, ultra-high-pressure service."].map(item => (
                <Typography key={item} sx={{ mb: 1 }}>
                  • {item}
                </Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Complement valves with compatible stainless steel pipe fittings, tube fittings, unions and BSP fittings to maintain system integrity and traceability across joints.
            </Typography>

            {/* SECTION 5 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Seats, Packing and Temperature
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Seat and packing materials must suit media, temperature and required shut-off class.
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Material</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Note</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {seatMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <strong>{row.material}</strong>
                      </TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Specify soft-seat ball valves for bubble-tight shut-off in clean service. Consider hard-seat or metal-to-metal designs for erosive or high-temperature duties where a soft seat would degrade.
            </Typography>

            {/* SECTION 6 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Materials and Corrosion Resistance
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Select the wetted metallurgy for corrosion, sour service and hydrogen effects:
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Material</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Application</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {metallurgyMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <strong>{row.material}</strong>
                      </TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.application}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              For H2S and sour environments, specify NACE MR0175 / ISO 15156 requirements at enquiry and we will confirm what can be supplied. Request material certificates to align with site QA.
            </Typography>

            {/* SECTION 7 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Shut-Off Class and Control Performance
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              For isolation, define the leakage class expected at maximum differential pressure. Soft-seat ball valves typically achieve bubble-tight shut-off in gas service when correctly sized and actuated. For control valves, specify trim characteristic and positioning accuracy rather than only end shut-off. Panam floating ball valves include an internally loaded anti-blow-out stem and offer
              L-port and T-port flow options. Needle valve stems are available with non-rotating vee-tips or ball-tips for reduced seat scoring.
            </Typography>

            {/* SECTION 8 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Documentation and UK Compliance
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Agree material certificates and test documentation at order. For UK projects, align with Pressure Equipment regulations, welding qualifications where applicable, and site-specific documentation packs. Panam provides technical documentation and material certificates on request. Lead times vary by product and are confirmed at quotation.
            </Typography>

            {/* SECTION 9 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Map Your Decision to Panam Ranges
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Duty</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Panam Range</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rangeMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <strong>{row.duty}</strong>
                      </TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.range}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Seat choices include PTFE, Delrin, PEEK and KEL-F; packing options include PTFE and Graphoil.
            </Typography>

            {/* FAQ */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Quick FAQ for Specifiers
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
                {["Define the Function First", "Cv, Flow and Pressure Drop", "Pressure Ratings: 6K to HP 60,000 psi", "End Connections and Integration", "Seats, Packing and Temperature", "Materials and Corrosion Resistance", "Shut-Off Class and Control Performance", "Documentation and UK Compliance", "Mapping to Panam Ranges"].map(text => (
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
                  <Box component="img" src="https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-3-S-O4-OD-A.png" alt="PANAM Industrial Valves" sx={{ width: "100%", height: 160, objectFit: "contain", bgcolor: "#F4F4F4", p: 2 }} />
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", color: "#1A1A1A", mb: 0.5 }}>PANAM Industrial Valves</Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#666", mb: 1.5 }}>Engineering Support · Lead Times on Request</Typography>
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

export default SpecifyValvesGuideBlog
