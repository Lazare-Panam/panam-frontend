import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer,  TableRow } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const SwagelokAlternativeBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cta = {
    heading: "Specifying a tube fitting alternative? Send us the detail.",
    body: "Send us your tube sizes, materials and pressure requirements and we'll confirm the right Panam fitting, with the test data behind it. Request Panam's DNV interchangeability reports with your quote.",
    buttonText: "Request a Quote",
    buttonLink: "/enquiry",
  }

  // DNV Interchangeability Compliance Report — key facts as recorded in the report summary.
  const reportRows = [
    { label: "Report", value: "DNV Interchangeability Compliance Report, ref. PUN/14/JJ/225" },
    { label: "Date", value: "8 December 2014, Pune" },
    { label: "Compared with", value: "Swagelok (components identified by Swagelok marking)" },
    { label: "Fitting type", value: "Grip-type mechanically attached tubing fittings: body, nut, and front and rear ferrules compressed on the tube" },
    { label: "Material", value: "Stainless steel 316. Test certificates reviewed and material confirmed by PMI" },
    { label: "Sizes and types tested", value: '1/4", 3/8", 1/2", 3/4" and 1" OD: male connectors (NPT), unions and tube caps. Five of each' },
    { label: "Method", value: "Panam and Swagelok components assembled in different configurations on suitably rated tube. Each fitting hydrostatically tested for 5 minutes" },
    { label: "Result", value: "Compatible in tube gripping and thread fit. Pressure testing satisfactory, with no visible leakage or pressure drop" },
  ]

  const notCovered = [
    'sizes below 1/4" or above 1" OD, or metric sizes;',
    "fitting types other than male connectors, unions and tube caps;",
    "materials other than 316 stainless steel;",
    "performance under vibration, thermal cycling or gas service. The report summary describes a five-minute hydrostatic test only;",
    "re-using tube already swaged with Swagelok ferrules.",
  ]

  const stayWithSwagelok = [
    { title: "Existing swaged joints", body: "Unless Panam's full test report says otherwise, don't move tube swaged with Swagelok ferrules into a Panam body. Cut back to fresh, square tube and fit a complete new Panam set, or keep Swagelok for that joint." },
    { title: "Outside the tested range", body: 'Treat metric sizes, other alloys, other fitting types and sizes beyond 1/4" to 1" OD as untested for interchangeability.' },
    { title: "Mixed stores", body: "The real intermix risk is loose parts in a stores drawer. Keep brands segregated and labelled, and use one brand per system section." },
    { title: "Installer method", body: "Panam fittings have their own pull-up procedure. Ask us for the specified turns, torque and gauge method, and train installers on it rather than assuming another brand's routine." },
  ]

  const evaluateChecklist = [
    "Traceable material certification, such as EN 10204 3.1, linked to heat numbers.",
    "Rated working pressure by tube OD and wall thickness. Ask for the published ratings for the sizes you intend to use.",
    "Documented test evidence, and who ran it. Ask where each test was carried out, to which standard, and on which sizes and materials. Panam's published evidence includes the DNV reports above, alongside further type and burst testing — ask for current certificates covering the sizes and materials you buy.",
    "Tube requirements: OD tolerance and hardness limits.",
    "Written warranty terms. Swagelok's lifetime warranty covers Swagelok products used as designed. Ask us for Panam's written warranty terms in writing before you specify.",
    "Supply continuity: stock held in the UK, not a lead time from overseas.",
  ]

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <title>Swagelok Alternative Tube Fittings: What "Compatible" Really Means | Panam Valve</title>
      <meta name="description" content="Swagelok warns against mixing tube fitting brands. Here's what Panam's DNV interchangeability report does and doesn't cover." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/swagelok-alternative-tube-fittings" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: 'Swagelok Alternative Tube Fittings: What "Compatible" Really Means',
          description: "Swagelok warns against mixing tube fitting brands. Here's what Panam's DNV interchangeability report does and doesn't cover.",
          image: "https://pblol2.blob.core.windows.net/panam-images/blog/blog-cover.png",
          author: { "@type": "Organization", name: "PANAM®" },
          publisher: { "@type": "Organization", name: "PANAM®" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.panamvalve.com/blog/swagelok-alternative-tube-fittings" },
          datePublished: "2026-10-13",
        })}
      </script>

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            Swagelok Alternative Tube Fittings: What "Compatible" Really Means
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            What the intermix warning covers, what Panam's DNV report shows, and where the evidence stops
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
                Oct 13, 2026 • 8 min read
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          component="img"
          src="https://pblol2.blob.core.windows.net/panam-images/blog/blog-cover.png"
          alt="PANAM stainless steel instrumentation tube fittings"
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
              If you've read Swagelok's guidance on tube fitting intermix, you'll know the headline advice: don't mix components from different manufacturers. It's sound engineering advice, and it's fair for any engineer to hold us to it. This post explains what the warning covers and what it doesn't, what test evidence exists for Panam tube fittings, and where that evidence stops.
            </Typography>

            {/* SECTION 1 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              What Swagelok is actually warning about
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Swagelok separates two practices:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              <Typography sx={{ mb: 1.5 }}><strong>Intermix:</strong> building one fitting from parts made by different manufacturers, such as a nut or ferrules from one brand on a body from another.</Typography>
              <Typography sx={{ mb: 1.5 }}><strong>Interchange:</strong> taking tube already swaged with one brand's nut and ferrules and reassembling it into a different brand's body.</Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Their reasoning is that no industry-wide commercial design standard covers these fittings. Each manufacturer's geometry, tolerances, materials and surface treatments differ, so a hybrid is effectively an untested design. Swagelok also says hybrid assemblies void its own warranty, and cites oil and gas guidance that treats intermix as bad practice.
            </Typography>

            {/* SECTION 2 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Where we stand
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Our default recommendation matches Swagelok's: use complete, single-manufacturer fittings wherever you can. For new installations and complete replacements on freshly cut tube, that removes any doubt.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Real plants aren't always that tidy. Where you need to work alongside existing Swagelok tube fittings, Panam has had interchangeability with Swagelok tested, with the results reported by a DNV inspection surveyor. The details, and the limits, are below.
            </Typography>

            {/* SECTION 3 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              What the warning doesn't say
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Swagelok's warning is about mixing parts inside a fitting. It isn't a finding that another maker's complete fitting performs worse. Swagelok says no other manufacturer's product is proven compatible with theirs. That describes what Swagelok has validated, and it's a good reason never to mix parts casually. A complete fitting is judged on its own evidence.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              A system where every tube end is terminated with one manufacturer's full fitting isn't intermix or interchange under Swagelok's own definitions. Some ends might carry Swagelok and others Panam. Choosing Panam for a new run, an expansion, a skid build or a like-for-like replacement on freshly cut tube is a supplier decision, not a hybrid design.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Threaded connections to existing equipment are a separate matter. NPT, BSPP and BSPT threads are governed by published standards (ASME B1.20.1, ISO 228 and ISO 7-1), independent of any tube-sealing design.
            </Typography>

            {/* SECTION 4 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              What Panam's DNV interchangeability report covers
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Panam holds an Interchangeability Compliance Report from Det Norske Veritas (DNV) covering Swagelok. The tests were conducted at Panam's facility in Gujarat, India, and the report was signed by a DNV inspection surveyor in Pune. It records test results. It isn't a DNV product approval.
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableBody>
                  {reportRows.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell sx={{ fontWeight: 700, width: "28%", bgcolor: "#EAF0F7", verticalAlign: "top" }}>{row.label}</TableCell>
                      <TableCell sx={{ color: "#333" }}>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              A separate DNV report covers Parker (ref. PUN/16/JJ/542 R1, 30 December 2016), on the same scope and method.
            </Typography>

            {/* SECTION 5 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              What the report doesn't cover
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              The report establishes fit and pressure-holding. It doesn't cover:
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {notCovered.map(item => (
                <Typography key={item} sx={{ mb: 1 }}>• {item}</Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              It is also dated December 2014. If your application falls outside this scope, talk to us before you specify.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Nor does it change Swagelok's position: its warranty applies only to Swagelok-only assemblies, and some project specifications prohibit intermix regardless of test evidence. Check yours before you decide.
            </Typography>

            {/* SECTION 6 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              When to stay with Swagelok
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              We'd rather you make the right call than the cheapest one.
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              {stayWithSwagelok.map(item => (
                <Box key={item.title}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography variant="body1">{item.body}</Typography>
                </Box>
              ))}
            </Stack>

            {/* SECTION 7 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              How to evaluate any tube fitting alternative
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Don't take anyone's word for it, Swagelok's or ours. Ask for:
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              {evaluateChecklist.map((item, i) => (
                <Typography key={i} variant="body1" sx={{ lineHeight: 1.8 }}>
                  <strong>{i + 1}.</strong> {item}
                </Typography>
              ))}
            </Stack>

            {/* SECTION 8 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Buying Panam through Valvenok
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Valvenok is an authorised distributor of Panam, with UK stock, 2–3 day dispatch on stocked items and free UK delivery on orders over £150. ISO 9001 quality management, material certification and JOSCAR registration support the documentation your procurement team needs. Trade credit accounts are available, and our technical team can review your specification before you order.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Send us your tube sizes, materials and pressure requirements and we'll confirm the right Panam fitting, with the test data behind it. Request Panam's DNV interchangeability reports with your quote.
            </Typography>

            <Typography variant="caption" sx={{ display: "block", fontStyle: "italic", color: "#595959", mb: 2, lineHeight: 1.6 }}>
              Swagelok, Parker and DNV are trademarks of their respective owners. Valvenok and Panam are not affiliated with or endorsed by Swagelok Company, Parker Hannifin or DNV. Brand names are used for identification and comparison only.
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
                  "What Swagelok Warns Against",
                  "Where Panam Stands",
                  "What the Warning Doesn't Say",
                  "What the DNV Report Covers",
                  "What the Report Doesn't Cover",
                  "When to Stay with Swagelok",
                  "How to Evaluate an Alternative",
                ].map(text => (
                  <Box key={text} sx={{ pb: 2, borderBottom: "1px solid #EEE" }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#555" }}>
                      • {text}
                    </Typography>
                  </Box>
                ))}
              </Stack>

              {/* Related guides */}
              <Typography variant="h6" sx={{ mt: 6, mb: 2, fontWeight: 800 }}>
                Related Guides
              </Typography>
              <Stack spacing={1.5}>
                <Box component="a" href="/blog/npt-vs-bspp-vs-bspt-thread-standards" sx={{ textDecoration: "none" }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "#01B0F0" }}>
                    NPT vs BSPP vs BSPT Thread Standards →
                  </Typography>
                </Box>
                <Box component="a" href="/instrumentation-fittings/tube-fittings" sx={{ textDecoration: "none" }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "#01B0F0" }}>
                    Browse Panam Tube Fittings →
                  </Typography>
                </Box>
                <Box component="a" href="/certificates" sx={{ textDecoration: "none" }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: "#01B0F0" }}>
                    Certificates & Approvals →
                  </Typography>
                </Box>
              </Stack>

              {/* Sidebar product link card */}
              <Box
                component="a"
                href="/instrumentation-fittings/tube-fittings"
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
                    src="https://pblol2.blob.core.windows.net/panam-images/website-media/thread-thumbnail.jpg"
                    alt="PANAM stainless steel tube fittings"
                    sx={{ width: "100%", height: 160, objectFit: "contain", bgcolor: "#F4F4F4", p: 2 }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", color: "#1A1A1A", mb: 0.5 }}>
                      PANAM Tube Fittings
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#666", mb: 1.5 }}>
                      316 Stainless · UK Stock · Material Certs on Request
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

export default SwagelokAlternativeBlog
