import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {
  Container, Typography, Box, Avatar, Stack, Paper, Button,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const NeedleValveBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cta = {
    heading: "Working with high-pressure instrumentation, hydraulics or hydrogen service?",
    body: "Request an HP Series application review from the PANAM engineering team. We'll confirm the right pressure tier, stem tip, packing, and material grade for your specific media, temperature, and cycling profile — so you spec it right the first time.",
    buttonText: "Request Technical Support",
    buttonLink: "/enquiry",
  }

  const pressureTiers = [
    { series: "MP Series",  rating: "Up to 6,000 PSI (414 bar)",    typical: "Instrumentation, general process" },
    { series: "HP-10K",     rating: "Up to 10,000 PSI (690 bar)",   typical: "Hydraulic test stands, HPUs" },
    { series: "HP-20K",     rating: "Up to 20,000 PSI (1,379 bar)", typical: "Wellhead, chemical injection" },
    { series: "HP-40K",     rating: "Up to 40,000 PSI (2,758 bar)", typical: "Waterjet, high-pressure research" },
    { series: "HP-60K",     rating: "Up to 60,000 PSI (4,134 bar)", typical: "Ultra-high-pressure, hydrogen" },
  ]

  const materials = [
    { material: "316 Stainless Steel", service: "General process, instrumentation, corrosive fluids" },
    { material: "316L SS",             service: "Low-carbon for weld heat-affected zone sensitivity" },
    { material: "Duplex (2205)",       service: "Chloride-rich brines, offshore, high strength" },
    { material: "Hastelloy C-276",     service: "Highly aggressive chemistries, sour gas" },
    { material: "Monel 400",           service: "Hydrofluoric acid, seawater, reducing environments" },
    { material: "Titanium",            service: "Seawater, offshore, oxygen-compatible service" },
  ]

  const packingTemp = [
    { packing: "PTFE",    range: "-65°F to +450°F (-54°C to +232°C)", notes: "Standard; low friction, easy cycling" },
    { packing: "Grafoil", range: "-65°F to +1200°F (-54°C to +649°C)", notes: "High-temp; breaks in differently under frequent actuation" },
    { packing: "PEEK",    range: "-65°F to +550°F (-54°C to +288°C)", notes: "Chemical resistance, low creep" },
  ]

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <title>HP Series Needle Valves: High-Pressure Flow Control Up to 60,000 PSI | Panam Valves</title>
      <meta name="description" content="A detailed guide to PANAM HP Series needle valves — pressure tiers from 6,000 to 60,000 PSI, materials, packing, stem tips, and applications in oil and gas, hydraulics, and instrumentation." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/hp-series-needle-valves-high-pressure-flow-control" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "HP Series Needle Valves: High-Pressure Flow Control Up to 60,000 PSI",
          description: "A detailed guide to PANAM HP Series needle valves — pressure tiers from 6,000 to 60,000 PSI, materials, packing, stem tips, and applications in oil and gas, hydraulics, and instrumentation.",
          image: "https://pblol2.blob.core.windows.net/panam-images/blog/needle-valve-blog.jpeg",
          author: { "@type": "Organization", name: "PANAM®" },
          publisher: { "@type": "Organization", name: "PANAM®" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.panamvalve.com/blog/hp-series-needle-valves-high-pressure-flow-control" },
          datePublished: "2026-05-05",
        })}
      </script>

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography component="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            Built for Extreme Pressure: A Closer Look at the PANAM HP Series Needle Valves
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            Inside the PANAM HP Series — Precision Flow Control Rated Up to 60,000 PSI
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Avatar sx={{ bgcolor: "#1A1A1A", width: 48, height: 48, fontSize: "1rem", fontWeight: 700 }}>
              SR
            </Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, fontSize: "1rem" }}>
                Sejal Raina
              </Typography>
              <Typography variant="body2" sx={{ color: "#01B0F0", fontWeight: 600, fontSize: "0.85rem" }}>
                Sales & Marketing
              </Typography>
              <Typography variant="caption" sx={{ color: "#777" }}>
                May 5, 2026 • 8 min read
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          component="img"
          src="https://pblol2.blob.core.windows.net/panam-images/blog/needle-valve-blog.jpeg"
          alt="PANAM HP Series High-Pressure Needle Valve"
          sx={{
            width: "100%",
            height: { xs: 200, md: 500 },
            objectFit: "cover",
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
              When pressure climbs past 30,000 PSI, ordinary flow control hardware stops being an option. Tolerances tighten, sealing systems get fussy, and the cost of getting it wrong climbs along with the gauge. The PANAM HP Series is engineered for exactly that environment — rugged, corrosive, and hazardous service from instrumentation duty all the way to 60,000 PSI (4,134 bar).
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              This is where a needle valve stops being a commodity and starts being a precision component. Browse the full{" "}
              <Box
                component="a"
                href="https://www.panamvalve.com/valves/needle-valves"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                PANAM needle valve range
              </Box>
              {" "}to see all series, connection types and pressure ratings.
            </Typography>

            {/* SECTION 1 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              First — What Does a Needle Valve Actually Do?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              The mechanism is simple and elegant. A finely threaded stem drives a tapered, needle-shaped tip into a matching seat. As the stem turns, the gap between needle and seat shrinks — gradually, predictably, in proportion to stem rotation. That geometry is what gives needle valves their signature trait: smooth, near-linear flow modulation across many turns of the handle.
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              It is why they end up in instrumentation manifolds, sample loops, hydraulic test stands, and gauge isolation circuits. A needle valve is not built for speed — it is built for exactness.
            </Typography>

            {/* SECTION 2 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              The HP Series at a Glance — Five Pressure Tiers
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Connection sizes run from ¼″ through 1″ across the line. End connections include NPT, BSPT, and BSPP threads, plus PANAM's medium-pressure and high-pressure cone-and-thread fittings — the standard for ultra-high-pressure tubing systems.
            </Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 6 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Series</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Pressure Rating</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Typical Service</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pressureTiers.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell><strong>{row.series}</strong></TableCell>
                      <TableCell>{row.rating}</TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.typical}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* SECTION 3 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              What's Engineered Underneath
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              A few details separate a workhorse high-pressure needle valve from a glorified shut-off:
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              {[
                { title: "Non-rotating stem tip", body: "The stem rotates on actuation but the tip does not — it translates straight into the seat. This protects the seating surface from galling and gives the operator a consistent feel turn after turn. Critical on proof-test rigs where the valve cycles many times per shift." },
                { title: "Fine-pitch thread", body: "More turns per inch means smaller incremental flow changes per degree of rotation. For throttling, metering, and calibration bleed applications, this is what gives operators the resolution to set a flow and trust it stays set." },
                { title: "Live-loaded packing", body: "Spring-energised packing maintains a consistent sealing load as the packing wears and as temperature cycles. It substantially extends the interval between repacking and reduces the leak events that come from packing that has relaxed over time." },
                { title: "Stem tip options", body: "Standard needle tip suits most shut-off and throttling duties. Vee-notch tip gives a more linear Cv curve at low openings — suited to precise flow setting. Regulating tip extends the usable throttling range by slowing the rate of area increase at low lift." },
              ].map(item => (
                <Box key={item.title}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography variant="body1">{item.body}</Typography>
                </Box>
              ))}
            </Stack>

            {/* SECTION 4 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Where the HP Series Earns Its Keep
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, mb: 1.5, fontWeight: 700 }}>Oil & Gas</Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              On wellhead instrumentation, chemical injection skids, and high-pressure sampling systems, sour service material requirements such as NACE MR0175 / ISO 15156 matter when H₂S is on the line — tell us your requirement at enquiry and we will confirm what can be supplied.
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {["Wellhead and Christmas tree instrumentation", "Chemical injection systems and umbilicals", "High-pressure gas sampling and analyser feeds", "Subsea and offshore control panels"].map(item => (
                <Typography key={item} sx={{ mb: 0.5 }}>• {item}</Typography>
              ))}
            </Box>

            <Typography variant="h6" sx={{ mt: 4, mb: 1.5, fontWeight: 700 }}>Hydraulic Systems</Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              On hydraulic test rigs and proof-test stands, repeatability and seat life dominate the spec. The non-rotating stem and fine-pitch thread design give operators the smooth, predictable handle feel that test work demands.
            </Typography>
            <Box sx={{ pl: 3, mb: 4 }}>
              {["Hydraulic test stands and proof-pressure rigs", "Hydraulic power units (HPUs)", "Actuator and cylinder control circuits", "High-pressure bleed and pressure regulation lines"].map(item => (
                <Typography key={item} sx={{ mb: 0.5 }}>• {item}</Typography>
              ))}
            </Box>

            <Typography variant="h6" sx={{ mt: 4, mb: 1.5, fontWeight: 700 }}>Instrumentation</Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              In analyser and metering circuits, the HP Series isolates instruments and modulates low flows without disturbing the upstream process. Vee or Regulating stem tips let you tune the valve to the measurement.
            </Typography>
            <Box sx={{ pl: 3, mb: 6 }}>
              {["Pressure gauge and transmitter isolation", "Calibration bleed and zero lines", "Analyser feed throttling", "Root isolation on instrument tappings"].map(item => (
                <Typography key={item} sx={{ mb: 0.5 }}>• {item}</Typography>
              ))}
            </Box>

            {/* SECTION 5 — Materials */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Materials & Temperature
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Body and trim materials are matched to service — chloride-rich brines, sour gas, oxygen, hydrogen, and aggressive process chemistries are all in scope.
            </Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Material</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Suited Service</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {materials.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell><strong>{row.material}</strong></TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.service}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Packing & Temperature Range</Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 6 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Packing</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Temperature Range</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Notes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {packingTemp.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell><strong>{row.packing}</strong></TableCell>
                      <TableCell>{row.range}</TableCell>
                      <TableCell sx={{ color: "#666" }}>{row.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* SECTION 6 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Specifying with Confidence
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              {[
                { title: "Match the body material to the worst-case fluid, not the typical fluid.", body: "A line that runs sweet service 95% of the time but sees an upset condition once a quarter is the line that fails on the 96th day. Specify for the excursion." },
                { title: "Pick the packing for the temperature and the cycling profile.", body: "Grafoil handles heat better but breaks in differently than PTFE under frequent actuation. Confirm your expected cycle count and temperature range before selecting." },
                { title: "Don't oversize the orifice.", body: "A bigger orifice gives you more flow but less resolution. If you're metering, the smallest orifice that meets your maximum-flow requirement is almost always the right answer. PANAM publishes Cv versus turns-open curves for every series — use them." },
              ].map((item, i) => (
                <Box key={i}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{item.title}</Typography>
                  <Typography variant="body1">{item.body}</Typography>
                </Box>
              ))}
            </Stack>

            {/* SECTION 7 */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Quality, Testing and Documentation
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              Every PANAM HP Series valve is 100% factory tested to its maximum pressure rating with a no-detectable-leakage acceptance criterion. Material certificates are available on request. Cleaning and packaging follow the PANAM PWI/5.7/21 standard.
            </Typography>
            <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8 }}>
              For the full range of configurations, pressure tiers and connection options, visit the{" "}
              <Box
                component="a"
                href="https://www.panamvalve.com/valves/needle-valves"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                PANAM needle valve product page
              </Box>
              {" "}or speak to our team for application-specific sizing support.
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
                sx={{ bgcolor: "#01B0F0", color: "white", px: 4, py: 1.5, borderRadius: "4px", fontWeight: 700, "&:hover": { bgcolor: "#0190c0" } }}
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
                  "What a Needle Valve Does",
                  "Five HP Pressure Tiers",
                  "Non-Rotating Stem & Fine-Pitch Thread",
                  "Oil & Gas / Hydraulics / Instrumentation",
                  "Materials: SS316, Duplex, Hastelloy",
                  "Packing & Temperature Selection",
                  "100% Factory Pressure Tested",
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
                href="https://www.panamvalve.com/valves/needle-valves"
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
                    src="https://pblol2.blob.core.windows.net/panam-images/blog/needle-valve-blog.jpeg"
                    alt="PANAM HP Series Needle Valve"
                    sx={{ width: "100%", height: 160, objectFit: "cover", bgcolor: "#F4F4F4" }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 800, fontSize: "0.9rem", color: "#1A1A1A", mb: 0.5 }}>
                      PANAM HP Series Needle Valves
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "#666", mb: 1.5 }}>
                      316 SS · Up to 60,000 PSI · NPT / BSPP / BSPT
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

export default NeedleValveBlog