import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const NPTBSPPBSPTBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cta = {
    heading: "Need Expert Support?",
    body: "PANAM Valve supplies a wide range of industrial valves and SS316 instrumentation fittings designed for reliability and performance across global industries. If you need help selecting the right thread standard or fitting for your application, our team is ready to assist.",
    buttonText: "Request Technical Support",
    buttonLink: "/enquiry",
  }

  const faqData = [
    {
      question: "Is British pipe thread the same as NPT?",
      answer: "No. BSP uses a 55 degree Whitworth form, while NPT uses a 60 degree form. Pitch tables also differ. They are not the same.",
    },
    {
      question: "Is BSP and NPT thread compatible?",
      answer: "No. Do not mate them directly. Use a purpose-made adapter.",
    },
    {
      question: "How do you tell if a thread is NPT or BSP?",
      answer: "Check taper with a straightedge, measure pitch with a gauge, and confirm flank angle. Tapered plus 60 degree is typically NPT; 55 degree is BSP. Port markings help: NPT vs G or R/Rc.",
    },
    {
      question: "Are BSPP and BSPT threads compatible?",
      answer: "They are different. BSPP is parallel and seals on a washer or cone; BSPT is tapered and seals on the flanks with sealant. Use the correct partner or an adapter.",
    },
    {
      question: "Does NPT thread need sealant?",
      answer: "Yes. NPT is a tapered flank-seal. Use PTFE tape or a suitable anaerobic sealant unless a manufacturer specifies an alternative.",
    },
    {
      question: "Do BSP threads need sealant?",
      answer: "BSPT needs sealant like NPT. BSPP does not seal on the threads; it seals on a washer or cone seat. Do not tape BSPP threads intended for face sealing.",
    },
  ]

  return (
    <>
      <title key="title">NPT vs BSPP vs BSPT Threads for Instrumentation Fittings | Panam Valves Blog</title>
      <meta name="description" content="Learn to identify NPT, BSPP and BSPT threads, pick the right seal method, and use adapters to convert safely on instrumentation fittings." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="NPT vs BSPP vs BSPT Threads for Instrumentation Fittings | Panam Valves" />
      <meta property="og:description" content="Learn to identify NPT, BSPP and BSPT threads, pick the right seal method, and use adapters to convert safely on instrumentation fittings." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.panamvalve.com/blog/npt-vs-bspp-vs-bspt-thread-standards" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/npt-vs-bspp-vs-bspt-thread-standards" />

      <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>

        {/* HEADER */}
        <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
          <Container maxWidth="md">
            <Typography component="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
              Thread Standards Decoded: NPT vs BSPP vs BSPT for Instrumentation Fittings
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
                <Typography variant="caption" sx={{ color: "#777", display: "flex", alignItems: "center" }}>
                  May 27, 2026 • 8 min read
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Box>

        {/* BODY CONTENT */}
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid size={{ xs: 12, md: 8 }}>

              {/* INTRO */}
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Field technicians know this pain. A panel will not pressure up, the leak detector sings, and everyone swears the threads are "standard." In reality, the male is NPT and the port is BSPP. The fix is simple if you spot it early; costly if you do not.
              </Typography>

              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                This guide shows how to identify NPT, BSPP (ISO Parallel) and BSPT (ISO Tapered) in minutes, choose the right seal method, avoid cross-threading myths, and convert safely with adapters. It also maps selections to Valvenok's SS316 PANAM PMC series and pipe fittings with 3.1 material certificates, plus NACE notes for sour service.
              </Typography>

              {/* SECTION 1 */}
              <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                What Changes Between NPT, BSPP and BSPT
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                All three are common on valves, gauges, manifolds and small-bore instrument lines, but they differ in geometry and how they seal.
              </Typography>

              <Stack spacing={4} sx={{ mb: 6 }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Thread Form and Flank Angle</Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body1">NPT uses a 60 degree thread form to ASME B1.20.1.</Typography>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body1">BSPP and BSPT use a 55 degree Whitworth form to ISO 228-1 (parallel) and ISO 7-1 (tapered) respectively.</Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Taper</Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body1">NPT and BSPT are tapered male threads. The nominal taper rate is 1 in 16 on diameter (about 1.789 degrees per side).</Typography>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body1">BSPP is parallel. The male and female major diameter remains constant through engagement.</Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Pitch and Sizes</Typography>
                  <Typography variant="body1">Both families use inch-based nominal sizes, but threads-per-inch and pitch tables differ at several sizes. A pitch gauge is essential.</Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Primary Seal Method</Typography>
                  <Box component="ul" sx={{ pl: 2, m: 0 }}>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body1">NPT and BSPT seal on the flanks, typically with PTFE tape or anaerobic sealant.</Typography>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body1">BSPP does not seal on the threads. It seals on a bonded washer, gasket or a 60 degree cone seat, depending on the fitting design.</Typography>
                    </Box>
                  </Box>
                </Box>
              </Stack>

              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                These differences mean the standards are not directly interchangeable. Correct identification prevents galling, leaks and damaged ports.
              </Typography>

              {/* SECTION 2 */}
              <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Fast Identification in the Field
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Use a 4-step routine. It works at the bench or on a scaffold.
              </Typography>

              <Box component="ol" sx={{ pl: 3, mb: 4 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>Check for taper.</strong> Hold the male thread against a straightedge or caliper beam. A visible gap toward the hex indicates taper. No gap indicates parallel.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>Measure pitch.</strong> Use a thread gauge. If you do not have one, lay a steel rule and count crest peaks over 25 mm, then calculate threads-per-inch. Compare with a chart.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>Confirm flank angle.</strong> A magnifier helps. NPT crests and roots are sharper visually than Whitworth's rounded profile, but pitch and taper are more reliable indicators.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>Decide the family.</strong></Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body1">Tapered + 60 degree + NPT pitch table matches: NPT.</Typography>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body1">Tapered + 55 degree + ISO 7-1 pitch table: BSPT.</Typography>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <Typography variant="body1">Parallel + 55 degree + needs washer or cone: BSPP.</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Paper elevation={0} sx={{ p: 3, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px", mb: 6 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  <strong>Tip:</strong> Ports stamped <strong>G</strong> are BSPP. Ports stamped <strong>R</strong> (male) or <strong>Rc</strong> (female) are BSPT. NPT ports are often marked <strong>NPT</strong> or <strong>NPS</strong> (parallel NPT form used for mechanical joints, not pressure sealing).
                </Typography>
              </Paper>

              {/* SECTION 3 */}
              <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Seal Methods That Actually Work
              </Typography>

              <Stack spacing={4} sx={{ mb: 6 }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>NPT and BSPT</Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    Use PTFE tape or an anaerobic thread sealant compatible with the media and temperature. Two to three wraps of high-density PTFE tape are typical for 1/4 inch to 1/2 inch. Do not start the tape over the first thread crest; keep it one crest back to prevent debris ingress. Wrench engagement usually runs 2 to 3 turns past finger-tight for small sizes. Do not bottom out the male shoulder on the port face; sealing is on the flanks.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>BSPP</Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    Use a bonded washer, copper or PTFE gasket under the male hex, or a dedicated male cone to female cone seat, depending on design. Do not apply PTFE tape to BSPP threads intended to face-seal. The tape prevents the face from sitting flat and can create leak paths.
                  </Typography>
                </Box>
              </Stack>

              <Paper elevation={0} sx={{ p: 3, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px", mb: 6 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  Hydrogen and oxygen service require stricter cleanliness. Avoid over-application of sealant. Follow project procedures.
                </Typography>
              </Paper>

              {/* SECTION 4 */}
              <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Compatibility Myths, Cleared Up
              </Typography>

              <Box component="ul" sx={{ mb: 6, pl: 2 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1">NPT and BSP threads are not the same, and they are not compatible. Pitch and flank angle differ; any partial engagement is false security and can crack a boss.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1">BSPP and BSPT are not interchangeable without the right interface. A BSPT male can sometimes bite into a BSPP female, but it will not seal correctly and can deform the parallel port.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1">Never force a mixed pair to torque. If you meet resistance early, stop and identify.</Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                When you must join unlike standards, use an adapter designed for that conversion.
              </Typography>

              {/* SECTION 5 */}
              <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Safe Conversion with Adapters
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Adapters preserve geometry, provide the right seat, and save the port. Typical conversions in instrumentation skids include:
              </Typography>

              <Box component="ul" sx={{ mb: 4, pl: 2 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">NPT male to BSPP male or female with washer seat</Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">BSPT male to NPT female</Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">BSPP male with bonded washer to NPT female</Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Valvenok supplies SS316 adapters, nipples and reducers in the PANAM range with 3.1 material certificates on request. For sour service, select items indicated as NACE MR0175 compliant. Browse the SS316 instrumentation and pipe fittings range to filter by thread standard, size and type.
              </Typography>

              <Box component="ul" sx={{ mb: 6, pl: 2 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">
                    Explore instrumentation tube and pipe fittings in SS316:{" "}
                    <Box component="a" href="https://www.panamvalve.com/fittings/pipe-fittings" target="_blank" rel="noopener noreferrer" sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                      pipe fittings
                    </Box>
                    {" "}and{" "}
                    <Box component="a" href="https://www.panamvalve.com/fittings/tube-fittings" target="_blank" rel="noopener noreferrer" sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                      tube fittings
                    </Box>
                    {" "}categories.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">
                    For associated isolation and measurement hardware, see{" "}
                    <Box component="a" href="https://www.panamvalve.com/valves" target="_blank" rel="noopener noreferrer" sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                      stainless steel valves
                    </Box>
                    {" "}and{" "}
                    <Box component="a" href="https://www.panamvalve.com/instrumentation/pressure-gauges" target="_blank" rel="noopener noreferrer" sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                      pressure gauge
                    </Box>
                    {" "}options to match end connections.
                  </Typography>
                </Box>
              </Box>

              {/* SECTION 6 */}
              <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Selection Checklist
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Use this quick checklist before you order or assemble:
              </Typography>

              <Box component="ul" sx={{ mb: 6, pl: 2 }}>
                {[
                  "Identify port standard first. Check stampings: G (BSPP), R/Rc (BSPT), NPT/NPS.",
                  "Confirm male fitting standard with taper check and pitch gauge.",
                  "Choose the correct seal method: sealant for tapered, washer or cone for BSPP.",
                  "Verify material, pressure class and media compatibility. SS316 is the default for corrosive and offshore environments.",
                  "For sour service, request NACE MR0175 documentation where available.",
                  "For traceability, request 3.1 certificates on PANAM PMC series and SS316 pipe fittings where applicable.",
                ].map((item, i) => (
                  <Box component="li" sx={{ mb: 2 }} key={i}>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Box>

              {/* SECTION 7 */}
              <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Inspection Steps Before Start-Up
              </Typography>

              <Box component="ul" sx={{ mb: 6, pl: 2 }}>
                {[
                  { title: "Visual thread check.", body: "Look for dings, flats and rolled crests." },
                  { title: "Cleanliness.", body: "Degrease as specified. Keep tape shards out of the bore." },
                  { title: "Dry fit.", body: "Confirm smooth initial thread engagement by hand for at least two turns." },
                  { title: "Seal application.", body: "Correct tape orientation or liquid sealant amount, then assemble to the maker's guidance." },
                  { title: "Alignment.", body: "Support tubing and valves to avoid side-load on threaded joints." },
                  { title: "Pressure test.", body: "Build up in stages and leak test at the specified hold pressure." },
                ].map((item, i) => (
                  <Box component="li" sx={{ mb: 2 }} key={i}>
                    <Typography variant="body1"><strong>{item.title}</strong> {item.body}</Typography>
                  </Box>
                ))}
              </Box>

              {/* SECTION 8 */}
              <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Printable Thread ID Chart
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Keep a one-page chart in the toolbox that lists:
              </Typography>

              <Box component="ul" sx={{ mb: 4, pl: 2 }}>
                {[
                  "Common NPT and BSP sizes with major diameter, threads-per-inch, and whether tapered or parallel",
                  "Marking conventions: G, R/Rc, NPT/NPS",
                  "Flank angle reminder: 60 degree for NPT, 55 degree for BSP",
                  "Seal method reference per standard",
                ].map((item, i) => (
                  <Box component="li" sx={{ mb: 1 }} key={i}>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Box>

              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Ask Valvenok for a printable PDF chart to accompany site orders. It mirrors the steps above and fits on A4.
              </Typography>

              {/* SECTION 9 */}
              <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Mapping to Valvenok Parts
              </Typography>

              <Box component="ul" sx={{ mb: 6, pl: 2 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>PANAM PMC series instrumentation fittings in SS316:</strong> male and female connectors, adapters, reducers, unions and port connectors in NPT, BSPP and BSPT. 3.1 material certs on request. Selected parts with NACE MR0175 notes.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>SS316 pipe fittings:</strong> nipples, couplings, hex plugs, caps, elbows, tees and crosses across NPT, BSPP and BSPT. Use dedicated adapters for cross-standard conversions.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>Needle and isolation valves:</strong> specify end connections to match your thread family. For example, choose BSPP female with bonded washer face for panel instruments or NPT tapered ends for pipe runs.</Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                If you need a fast route to compatible valves and gauges with matching ends, browse{" "}
                <Box component="a" href="https://www.panamvalve.com/valves" target="_blank" rel="noopener noreferrer" sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                  stainless steel valves
                </Box>
                {" "}and our{" "}
                <Box component="a" href="https://www.panamvalve.com/instrumentation/pressure-gauges" target="_blank" rel="noopener noreferrer" sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                  pressure gauge
                </Box>
                {" "}category.
              </Typography>

              {/* FAQ */}
              <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                FAQ
              </Typography>

              <Stack spacing={4} sx={{ mb: 6 }}>
                {faqData.map((item, i) => (
                  <Box key={i}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>{item.question}</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>{item.answer}</Typography>
                  </Box>
                ))}
              </Stack>

              {/* SUMMARY */}
              <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Summary
              </Typography>

              <Typography variant="body1" sx={{ mb: 10, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Correctly identifying NPT, BSPP and BSPT saves ports, prevents leaks and keeps commissioning on schedule. Check taper, pitch and markings, then choose the right seal method. Never force mixed standards; convert with SS316 adapters and nipples. For traceability and sour service assurance, specify 3.1-certed PANAM parts and NACE MR0175 compliant items where indicated. If you want help matching threads to valves, gauges and fittings, contact Valvenok technical support or browse our{" "}
                <Box component="a" href="https://www.panamvalve.com/fittings" target="_blank" rel="noopener noreferrer" sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                  SS316 instrumentation and pipe fittings
                </Box>
                {" "}to build a leak-tight bill of materials.
              </Typography>

              {/* CTA */}
              <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px" }}>
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
                  sx={{ bgcolor: "#01B0F0", color: "white", px: 4, py: 1.5, borderRadius: "4px", fontWeight: 700, "&:hover": { bgcolor: "#0190c0" } }}
                >
                  {cta.buttonText}
                </Button>
              </Paper>

            </Grid>

            {/* SIDEBAR */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: "sticky", top: 40 }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 800 }}>
                  At a Glance
                </Typography>
                <Stack spacing={2}>
                  {[
                    "NPT vs BSPP vs BSPT Differences",
                    "Fast Field Identification",
                    "Seal Methods by Standard",
                    "Compatibility Myths",
                    "Safe Adapter Conversions",
                    "Selection Checklist",
                    "Inspection Before Start-Up",
                    "Mapping to Valvenok Parts",
                  ].map(text => (
                    <Box key={text} sx={{ pb: 2, borderBottom: "1px solid #EEE" }}>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: "#555" }}>
                        • {text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ py: 10 }} />
      </Box>
    </>
  )
}

export default NPTBSPPBSPTBlog