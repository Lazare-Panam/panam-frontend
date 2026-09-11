import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const ThreeWayValveBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cta = {
    heading: "Building a hydraulic circuit or instrumentation manifold where flow direction matters?",
    body: "Request a PANAM 3-way valve application review and port-map verification. Our engineering team will confirm L-port vs T-port selection, pressure class, thread form and actuation torque so your circuit performs exactly as designed from day one.",
    buttonText: "Request Technical Support",
    buttonLink: "/enquiry",
  }

  const portingMatrix = [
    { application: "Divert one pump to Line A or Line B",       port: "L-Port",  position: "Position 1 or 2",          note: "Never connects all three ports" },
    { application: "Mix two tanks into one dosing line",        port: "T-Port",  position: "All-ports position",       note: "Confirm shut-off position exists" },
    { application: "Instrument test loop / calibration",        port: "L-Port",  position: "Process ↔ test source",    note: "Isolates process during cal" },
    { application: "Heat exchanger bypass",                     port: "T-Port",  position: "Pass through all-ports",   note: "Minimises pressure shock" },
    { application: "Grab sampling with isolation",              port: "L-Port",  position: "Dead-leg sample bottle",   note: "Isolates return during sample" },
  ]

  const specMatrix = [
    { param: "Pressure Rating",    detail: "6,000 PSI standard; 10,000 PSI select variants",             why: "Match system pressure including transients" },
    { param: "End Connections",    detail: "NPT, BSPP, BSPT, JIC",                                        why: "Verify thread form before installation" },
    { param: "Material",           detail: "316 Stainless Steel standard; Duplex on request",              why: "Required for corrosive / chloride service" },
    { param: "Seat Material",      detail: "PTFE standard",                                                why: "Check compatibility with media and temperature" },
    { param: "Actuation Mounting", detail: "ISO mounting, actuator-ready stem",                            why: "Verify break torque at operating temperature" },
  ]

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <title>Three-Way Valves: L-Port vs T-Port Guide | Panam Valve</title>
      <meta name="description" content="Understand three-way valves, L-port vs T-port flow paths, specs and uses in hydraulic and instrumentation circuits. Learn how to choose and commission." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/three-way-valve-l-port-t-port-guide" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Three-Way Valves: L-Port vs T-Port Guide",
          description: "Understand three-way valves, L-port vs T-port flow paths, specs and uses in hydraulic and instrumentation circuits. Learn how to choose and commission.",
          image: "https://pblol2.blob.core.windows.net/panam-images/products/ball-valves/PBV-3-S-O4-OD-A.png",
          author: { "@type": "Organization", name: "PANAM®" },
          publisher: { "@type": "Organization", name: "PANAM®" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.panamvalve.com/blog/three-way-valve-l-port-t-port-guide" },
          datePublished: "2026-04-24",
        })}
      </script>

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            Three-Way Valves Made Simple: Functions, Flow Paths and Real-World Uses
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            L-Port vs T-Port — How to Choose, Specify and Commission Without Getting It Wrong
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
                April 24, 2026 • 7 min read
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
          alt="PANAM Three-Way Ball Valve"
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
              Three-way valves solve a common problem in hydraulic and instrumentation circuits — how to divert, mix or isolate flow between multiple lines without building a maze of tees and separate valves. Get the porting right and you reduce leak paths, speed up maintenance and cut panel space. Get it wrong and you spend an afternoon working out why your circuit is doing the opposite of what the P&ID says.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              This guide explains how L-port and T-port internals work, where to use each, and how to specify threads, materials and actuation correctly. It also covers quick on-site checks and the most common commissioning mistakes.
            </Typography>

            {/* SECTION 1 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              What Is a Three-Way Valve and What Is It Used For?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              A three-way valve is a quarter-turn valve body with three ports connected by an internal ball or plug containing a flow cavity. Depending on the cavity geometry and handle position, the valve can:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "Divert one inlet to one of two outlets",
                "Mix two inlets into a single outlet",
                "Bypass or recirculate a line during maintenance",
                "Create test loops and sampling points without breaking into pipework",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1 }}>• {item}</Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              In practice you will find three-way valves across hydraulic power units, instrumentation manifolds, chemical dosing skids and utility lines. Engineers commonly call them 3-port ball valves, 3-way cocks or diverter valves.
            </Typography>

            {/* SECTION 2 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              L-Port vs T-Port — The Core Distinction
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              The flow cavity inside the ball dictates what connections are possible at each handle position.
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography sx={{ mb: 2 }}>
                <strong>L-Port (diverter):</strong> The cavity resembles an L. It connects a common port to one of the two side ports at a time. Use L-port for diverting or A-or-B selection where you never need all three ports connected simultaneously.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                <strong>T-Port (selector or mixer):</strong> The cavity resembles a T. In one position it connects all three ports together; in other positions it connects the common to either side port. T-port suits mixing two sources to one outlet, recirculation bypasses and purge paths.
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              A common convention treats the centre-side port as the common leg, but this varies by manufacturer. Always check the port map on the data sheet and the handle-position diagram etched on the valve body.
            </Typography>

            {/* PORT MAP TABLE */}
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Application and Port Selection Matrix</Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 6 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Application</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Port Type</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Key Position</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Note</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {portingMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.application}</TableCell>
                      <TableCell><strong>{row.port}</strong></TableCell>
                      <TableCell>{row.position}</TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* SECTION 3 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              How the Ball Routes Flow
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Inside a 3-way ball valve, seat rings provide bubble-tight shut-off when a leg of the cavity turns away from a port. With a 90-degree quarter-turn:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              <Typography sx={{ mb: 2 }}>
                <strong>L-port:</strong> Position 1 connects Common to Port A; Position 2 connects Common to Port B. Intermediate 45-degree positions must not be used unless the design is characterised for throttling.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                <strong>T-port:</strong> Position 1 can connect A, B and Common together. Positions 2 and 3 typically isolate one leg while connecting the other two. Some T-port designs include a full shut-off position — confirm on the specific drawing as not all do.
              </Typography>
            </Box>

            {/* SECTION 4 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Specifying a Three-Way Valve — Quick Checklist
            </Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Parameter</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>PANAM Options</TableCell>
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
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              PANAM 3-way ball valves are available in 316 Stainless Steel with 6,000 PSI ratings, actuator-ready mounting and PTFE seats as standard. Browse the full range on our{" "}
              <Box
                component="a"
                href="https://www.panamvalve.com/valves/ball-valves"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                ball valves product page
              </Box>
              , including 3-way configurations with NPT, BSPP, BSPT and JIC end connections.
            </Typography>

            {/* SECTION 5 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Quick On-Site Checks to Identify Open and Closed Paths
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              {[
                { title: "Handle pointer", body: "The handle or a metal tab usually aligns with the ball cavity. If the handle points to two ports, those ports are likely connected. Confirm against the etched diagram on the valve body." },
                { title: "Port blow-through", body: "With the system depressurised and drained, crack the plug on a spare leg and apply low-pressure air or nitrogen on the suspected inlet. Feel for flow at the outlet. Never perform this live on a pressurised system." },
                { title: "Continuity test with a gauge", body: "Fit a small pressure gauge to a side port. Gently apply air on the common. If the needle rises, that path is open." },
                { title: "Stem flats", body: "Some designs machine the stem flats parallel to the open bore. Check the manufacturer's manual if the handle indicator is unclear." },
              ].map(item => (
                <Box key={item.title}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography variant="body1">{item.body}</Typography>
                </Box>
              ))}
            </Stack>

            {/* SECTION 6 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Operating and Commissioning Tips
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              {[
                "Move in clean quarter-turn steps. Do not throttle unless the valve is specifically characterised for control. Standard ball seats are not designed for prolonged partial-open service.",
                "When switching service on a T-port, aim to pass through the all-ports-connected position to minimise pressure shocks in the circuit.",
                "If the valve is actuator-driven, set end-stop adjustment to match the required flow map and confirm the fail-safe position. Validate torque margin across the full operating temperature range.",
                "Pressure test each path individually. On a 3-way valve you have multiple shut-off interfaces — test every combination shown on the P&ID.",
                "Tag the handle with a simple port map and label the common leg clearly. It reduces operator error significantly during shift handovers.",
              ].map((tip, i) => (
                <Typography key={i} variant="body1" sx={{ lineHeight: 1.8 }}>
                  <strong>{i + 1}.</strong> {tip}
                </Typography>
              ))}
            </Stack>

            {/* SECTION 7 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Common Mistakes and How to Avoid Them
            </Typography>
            <Stack spacing={4} sx={{ mb: 6 }}>
              {[
                { title: "Ordering the wrong internal porting", body: "Always sketch the required path states and compare to the manufacturer's L or T cavity diagrams before ordering. A wrong porting on a 3-way can be impossible to fix on site." },
                { title: "Mismatched threads", body: "Mixing NPT, BSPP and BSPT leads to leaks and thread damage on first pressurisation. Verify thread form before installation using thread gauges or by checking build documentation." },
                { title: "Assuming T-port has a full shut-off", body: "Many T-port designs do not offer a position that closes all three ports. If full isolation is needed, specify it explicitly in your enquiry." },
                { title: "Throttling on soft seats", body: "Throttling a standard ball valve damages PTFE seats quickly, leading to leakage drift. Use a needle valve or a characterised ball for any control duty." },
                { title: "Ignoring trapped cavity pressure", body: "On blocked-in services with temperature swing, cavity pressure can build. Consider a cavity-relief feature or add a relief path with an appropriate non-return valve." },
              ].map(item => (
                <Box key={item.title}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography variant="body1">{item.body}</Typography>
                </Box>
              ))}
            </Stack>

            {/* FAQ */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Frequently Asked Questions
            </Typography>
            <Stack spacing={4} sx={{ mb: 6 }}>
              {[
                { q: "What is a 3-way valve used for?", a: "Diversion, mixing, bypass, sampling and test loops in hydraulic and instrumentation systems." },
                { q: "How does a 3-way valve work?", a: "A ball with an L or T cavity rotates a quarter turn to connect specific ports while isolating others, using soft seats for tight shut-off." },
                { q: "How can you tell if it is open or closed?", a: "Read the handle orientation against the port map on the valve, or perform a safe low-pressure blow-through or gauge check when the system is fully depressurised." },
                { q: "What is another name for a 3-way valve?", a: "3-port ball valve, diverter valve or selector valve." },
                { q: "What are the most common problems?", a: "Wrong porting specified, thread mismatch, throttling damage to seats, inadequate torque margin on actuators and trapped cavity overpressure during temperature swing." },
              ].map(item => (
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
              Three-way valves simplify circuits by combining diverting, mixing and bypass functions into one compact body. Choose L-port for A-or-B selection and T-port for mixing or all-ports-connected positions. Specify the correct port map, pressure class, threads and materials, and plan your actuation and commissioning carefully to avoid the errors above.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              For help selecting a 3-way ball valve or building a matched package of valves and fittings, browse our{" "}
              <Box
                component="a"
                href="https://www.panamvalve.com/valves/ball-valves"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                full ball valves range
              </Box>
              {" "}or speak to our team for actuator sizing and port-map verification.
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
                  "L-Port vs T-Port Distinction",
                  "Application & Port Selection Matrix",
                  "Specification Checklist",
                  "On-Site Path Verification",
                  "Commissioning Tips",
                  "Common Mistakes to Avoid",
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
                    alt="PANAM 3-Way Ball Valve"
                    sx={{ width: "100%", height: 160, objectFit: "contain", bgcolor: "#F4F4F4", p: 2 }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", color: "#1A1A1A", mb: 0.5 }}>
                      PANAM 3-Way Ball Valves
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#666", mb: 1.5 }}>
                      316 SS · 6,000 PSI · NPT / BSPP / BSPT / JIC · Actuator-Ready
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

export default ThreeWayValveBlog