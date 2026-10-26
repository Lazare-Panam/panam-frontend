import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const ManifoldValvesBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cta = {
    heading: "Planning mid-year maintenance or a metering upgrade where measurement accuracy matters?",
    body: "Book a manifold standardisation workshop with PANAM. Our technical team will align specifications, simplify your spares, and confirm the right manifold architecture — 2-, 3-, or 5-valve, monoflange or DB&B — so your instrumentation performs reliably from day one.",
    buttonText: "Book a Manifold Workshop",
    buttonLink: "/enquiry",
  }

  const manifoldMatrix = [
    { type: "2-Valve Manifold", isolation: "1", equalising: "—", bleed: "1", bestFor: "Simple gauge / absolute pressure", note: "Isolation plus controlled bleed for service" },
    { type: "3-Valve Manifold", isolation: "2 (H + L)", equalising: "1", bleed: "—", bestFor: "DP flow and level (workhorse)", note: "Safe zero checks; protects sensor during commissioning" },
    { type: "5-Valve Manifold", isolation: "2 (H + L)", equalising: "1", bleed: "2 (independent)", bestFor: "Frequent purging, calibration, gas service", note: "Independent vents each side without disturbing the other" },
  ]

  const installSteps = [
    { title: "Verify ratings and compatibility", body: "Check pressure class, materials, and seal compatibility against the process medium and site standard before installation begins." },
    { title: "Inspect and protect sealing faces", body: "Inspect sealing faces and threads; clean and cap until the moment of installation to prevent contamination." },
    { title: "Mount to the process take-off", body: "Install the monoflange or root valve with the correct gasket and torque. Orient the vent toward a safe direction before tightening." },
    { title: "Install the manifold to the transmitter", body: "Secure the manifold to the transmitter or bracket, confirming correct high/low port orientation against the P&ID." },
    { title: "Run and slope impulse lines", body: "Keep lines as short as practical. Tighten tube fittings to specification and slope lines to encourage self-draining or self-venting." },
    { title: "Pressure and leak test", body: "Pressure test to the approved test pressure; check all joints. Perform a functional leak check with the appropriate test medium." },
    { title: "Commission in sequence", body: "Isolate, open equalising (for DP), slowly crack process isolation to fill lines, close equalising, then fully open isolations. Bleed trapped gas or liquid and verify zero." },
  ]

  const faqItems = [
    { q: "What is a manifold valve?", a: "A multi-valve block that provides isolation, equalisation, and vent functions between a process connection and an instrument in a single compact body." },
    { q: "What are the benefits of a manifold?", a: "Fewer leak paths, faster maintenance, safer isolation and venting, and improved measurement stability through compact, well-controlled flow paths." },
    { q: "How does a manifold work?", a: "Internal passages connect the process to the instrument through isolation valves, an equalising valve for DP service, and a bleed valve for safe depressurisation and purging." },
    { q: "What is the purpose of a manifold in piping?", a: "To centralise control of the measurement take-off, enabling accurate, safe, and maintainable instrumentation connections with fewer fittings and joints." },
    { q: "How do you install a manifold valve?", a: "Verify ratings and materials, mount to the process, connect to the transmitter, run and slope impulse lines, leak and pressure test, then commission using a controlled isolation and equalisation sequence." },
  ]

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <title>Manifold Valves for Accurate, Safe Instrumentation Measurement | Panam Valve</title>
      <meta name="description" content="Compare manifold valve types, monoflanges, and DB&B setups to improve DP, level, and pressure measurement accuracy and safety." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/manifold-valves-for-accurate-safe-instrumentation" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Manifold Valves for Accurate, Safe Instrumentation Measurement",
          description: "Compare manifold valve types, monoflanges, and DB&B setups to improve DP, level, and pressure measurement accuracy and safety.",
          image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/valve-manifolds/5VM/5VM-1.jpg",
          author: { "@type": "Organization", name: "PANAM®" },
          publisher: { "@type": "Organization", name: "PANAM®" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.panamvalve.com/blog/manifold-valves-for-accurate-safe-instrumentation" },
          datePublished: "2026-05-25",
        })}
      </script>

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            Smarter Instrumentation: Choosing the Right Manifolds for Accurate, Safe Measurement
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            Comparing 2-, 3-, and 5-Valve Configurations, Monoflanges, and Integral DB&B — What to Choose and Why
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Avatar sx={{ bgcolor: "#1A1A1A", width: 48, height: 48, fontSize: "1rem", fontWeight: 700 }}>
              SK
            </Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, fontSize: "1rem" }}>
                Steven Kassi
              </Typography>
              <Typography variant="body2" sx={{ color: "#01B0F0", fontWeight: 600, fontSize: "0.85rem" }}>
                SEO Expert
              </Typography>
              <Typography variant="caption" sx={{ color: "#777" }}>
                May 25, 2026 • 8 min read
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          component="img"
          src="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/valve-manifolds/5VM/5VM-1.jpg"
          alt="PANAM Manifold Valve"
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
              Measurement reliability lives or dies in the last few inches before the transmitter. Choose the wrong manifold architecture and even the best sensor will drift, plug, or read the process instead of the impulse line. Choose well and you improve accuracy, reduce leak paths, and cut maintenance hours across the year.
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              This guide compares common manifold configurations and installation practices that improve differential pressure (DP) flow, level, and pressure measurements. It also highlights hydrogen and gas-specific nuances, and where integrated solutions can reduce your bill of materials and time on site.
            </Typography>

            {/* SECTION 1 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              What Is a Manifold Valve and Why Does It Matter?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              A manifold valve is a compact assembly that combines multiple valve functions into one block to connect a process to an instrument. Instead of separate root valves, isolation valves, equalising paths, and vents, a manifold centralises these functions with machined internal passages and integrated needle valves.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, fontWeight: 600 }}>
              How it works in practice:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "Isolation valves open or close the paths from the process to the transmitter.",
                "An equalising valve balances high and low sides on DP transmitters to protect the sensor and enable zeroing.",
                "A bleed or vent provides a safe point to depressurise or remove trapped gas or liquid before maintenance or calibration.",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1.5 }}>• {item}</Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              The purpose in piping is simple but critical: provide controlled, leak-tight isolation and conditioning of the medium right where the measurement is taken, while reducing fittings, joints, and potential leak points.
            </Typography>

            {/* SECTION 2 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Comparing 2-, 3-, and 5-Valve Manifolds
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              The right manifold type depends on your measurement duty, how frequently you calibrate or purge, and how much isolation assurance the service demands.
            </Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Type</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Isolation Valves</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Equalising</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Bleed Valves</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Best For</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Note</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {manifoldMatrix.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell><strong>{row.type}</strong></TableCell>
                      <TableCell>{row.isolation}</TableCell>
                      <TableCell>{row.equalising}</TableCell>
                      <TableCell>{row.bleed}</TableCell>
                      <TableCell>{row.bestFor}</TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.note}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Choose the fewest valves that still cover commissioning, proof testing, and routine maintenance. Every unnecessary port adds potential leak paths and operator complexity.
            </Typography>

            {/* SECTION 3 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Monoflange vs Traditional Manifold Assemblies
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Traditional builds use a separate root valve at the process take-off, then impulse lines, then a remote manifold. A monoflange integrates the root isolation and manifold functions into a single compact body that bolts directly to the process nozzle or instrument connection.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, fontWeight: 600 }}>
              Monoflange advantages:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "Fewer threaded joints and gaskets, which lowers leak probability.",
                "Shorter swept volume between process and transmitter, improving dynamic response and reducing temperature or density stratification errors.",
                "Faster isolation and venting during maintenance.",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1.5 }}>• {item}</Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Traditional assemblies remain useful where space is ample, retrofits must align with existing spool pieces, or where specific valve types are mandated. For greenfield projects or brownfield upgrades targeting reliability, monoflanges typically deliver better measurement integrity and reduced installation time.
            </Typography>

            {/* SECTION 4 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Root Valves and Integral Double Block and Bleed
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              The root valve is the primary isolation at the process. Integrating root isolation with a double block and bleed (DB&B) function at the manifold provides positive isolation and a local vent for safe proving.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, fontWeight: 600 }}>
              Benefits of integral DB&B manifolds:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {[
                "Positive isolation during maintenance or transmitter swap-out.",
                "A defined bleed path that supports pressure verification and gas-free work.",
                "Reduced parts count compared to separate ball valves, check valves, and tees.",
              ].map(item => (
                <Typography key={item} sx={{ mb: 1.5 }}>• {item}</Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Use integral DB&B on critical services, high-pressure gas, hydrogen applications, and any loop requiring a formal isolation and verification step. Explore PANAM's range of{" "}
              <Box
                component="a"
                href="https://www.panamvalve.com/manifolds"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                manifold valves and DB&B configurations
              </Box>
              {" "}for safe isolation, equalisation, and venting in compact, precision-machined bodies.
            </Typography>

            {/* SECTION 5 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Hydrogen and Gas Measurement Nuances
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Hydrogen and light gases raise specific concerns that standard manifold selections do not automatically address.
            </Typography>
            <Stack spacing={3} sx={{ mb: 4 }}>
              {[
                { title: "Diffusivity and measurement lag", body: "Low density and high diffusivity increase the risk of measurement lag from trapped pockets and amplify the impact of even small leaks." },
                { title: "Pulsation bias", body: "Pulsation from compressors or control valves can bias DP and gauge measurements. Consider pulsation dampening where relevant." },
                { title: "Material and seal selection", body: "Permeation and embrittlement risks steer material and seal choices. Use hydrogen-qualified materials and seals throughout the manifold assembly." },
              ].map(item => (
                <Box key={item.title}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography variant="body1">{item.body}</Typography>
                </Box>
              ))}
            </Stack>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Minimise impulse line length with close-coupled mounting. Compact monoflanges and transmitter-direct manifolds cut volume and thermal gradients. For hydrogen service, PANAM provides{" "}
              <Box
                component="a"
                href="https://www.panamvalve.com/high-pressure"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                hydrogen-qualified valves and components
              </Box>
              {" "}designed for these demands.
            </Typography>

            {/* SECTION 6 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Installation Best Practices That Protect Accuracy
            </Typography>
            <Stack spacing={4} sx={{ mb: 6 }}>
              {[
                { title: "Orientation and impulse lines", body: "Keep the transmitter as close as practical to the take-off to shorten lag and reduce stratification. For gas service, mount taps above the line to avoid liquid pooling; for liquid service, mount below to prevent gas entrapment. Maintain consistent elevation between high and low sides on DP services and slope lines to encourage self-draining or self-venting." },
                { title: "Vent and bleed routing", body: "Provide a safe, directed vent path. For hydrogen and flammable gases, route bleeds to a safe location — not to atmosphere at the instrument. Use dedicated bleed valves on 5-valve designs when frequent purging or calibration is expected." },
                { title: "Cold and hot service", body: "Hot service can introduce density shifts and thermal expansion. Insulate impulse lines when required and avoid dead legs. Cold service can increase viscosity or cause condensation — use heat tracing or compact runs to maintain stable conditions." },
                { title: "Pressure class, materials, and seals", body: "Select pressure ratings aligned with the highest credible pressure, including over-pressure scenarios. Favour stainless steel for general corrosion resistance. For hydrogen, use proven alloys and seal materials compatible with permeation and embrittlement. Keep one material family where possible to limit galvanic effects and simplify spares." },
                { title: "Connections", body: "Use high-quality tube fittings and weld fittings on small-bore instrumentation. Minimise adapters and unions to reduce leak paths. For direct process connections, match the flange or threaded standard specified for the nozzle or tapping point." },
              ].map(item => (
                <Box key={item.title}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography variant="body1">{item.body}</Typography>
                </Box>
              ))}
            </Stack>

            {/* SECTION 7 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Close-Coupled Mounting for DP Flow, Level, and Pressure
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              {[
                { title: "DP flow", body: "A 3- or 5-valve manifold mounted directly to the transmitter shortens the impulse volume between high and low sides. Combine with a monoflange at the take-off to compress the entire assembly and improve response to flow changes." },
                { title: "DP level", body: "Maintain equal elevation and short impulse runs. The equalising valve on a 3-valve manifold simplifies zeroing after shutdowns when legs may partially drain or gas up." },
                { title: "Gauge and absolute pressure", body: "A 2-valve block with bleed is often sufficient. In gas service, consider pulsation dampening and a short path to prevent dynamic measurement errors." },
              ].map(item => (
                <Box key={item.title}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography variant="body1">{item.body}</Typography>
                </Box>
              ))}
            </Stack>

            {/* SECTION 8 — Install Steps */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              How to Install a Manifold Valve — Step by Step
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              {installSteps.map((step, i) => (
                <Box key={step.title}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{i + 1}. {step.title}</Typography>
                  <Typography variant="body1">{step.body}</Typography>
                </Box>
              ))}
            </Stack>

            {/* FAQ */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Frequently Asked Questions
            </Typography>
            <Stack spacing={4} sx={{ mb: 6 }}>
              {faqItems.map(item => (
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
              Measurement reliability depends on the architecture directly upstream of the transmitter. Match the manifold type to the duty — 2-valve for simple pressure, 3-valve for DP, 5-valve where frequent purging or calibration is expected. Use monoflanges to cut joints and improve response. Specify DB&B where positive isolation is required, and apply hydrogen-qualified materials and seals on any gas or hydrogen service.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              For help selecting the right manifold configuration or building a standardised package for your site, browse PANAM's{" "}
              <Box
                component="a"
                href="https://www.panamvalve.com/manifolds"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                full manifold valves range
              </Box>
              {" "}or speak to our team for application-specific guidance.
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
                  "What Is a Manifold Valve",
                  "2-, 3-, and 5-Valve Comparison",
                  "Monoflange vs Traditional",
                  "Integral DB&B",
                  "Hydrogen & Gas Nuances",
                  "Installation Best Practices",
                  "Close-Coupled Mounting",
                  "Step-by-Step Installation",
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
                href="https://www.panamvalve.com/manifolds"
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
                    src="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/valve-manifolds/3VM/3VM-1.jpg"
                    alt="PANAM Manifold Valve"
                    sx={{ width: "100%", height: 160, objectFit: "contain", bgcolor: "#F4F4F4", p: 2 }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", color: "#1A1A1A", mb: 0.5 }}>
                      PANAM Manifold Valves
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#666", mb: 1.5 }}>
                      2-, 3- & 5-Valve · DB&B · Monoflange · Hydrogen-Ready
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

export default ManifoldValvesBlog