import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const DoubleBlockBleedBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // CTA Data
  const cta = {
    heading: "Planning a summer outage or a brownfield tie-in where isolation integrity is non-negotiable?",
    body: "Request a PANAM DB&B application review and valve sizing support. Our engineering team will help align seat design, test method, and vent routing to your pressure class, media, and temperature so you can lock out, prove zero, and proceed with confidence.",
    buttonText: "Request Technical Support",
    buttonLink: "/enquiry",
  }

  const matrixData = [
    { service: "Liquid / General", test: "Hydrostatic Pressure Test", why: "Proves body and seat integrity under load" },
    { service: "Hydrogen / High-Purity", test: "Helium Leak Test", why: "Reveals micro-leaks missed by air or water" },
    { service: "High Temperature", test: "Metal-to-Metal Seats", why: "Maintains seal when soft seats would fail" },
    { service: "Dirty / Abrasive Media", test: "Upstream Filtration", why: "Protects seats from scoring and leakage" },
  ]

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      {/* SEO TAGS */}
      <title>Double Block and Bleed</title>
      <meta name="description" content="Master Double Block and Bleed (DB&B) vs. DIB valves. Learn to achieve positive isolation, prove zero energy, and select the right testing for critical service." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/double-blog-and-bleed" />
      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            Double Block and Bleed Valves for Positive Isolation in Critical Service
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            Double Block & Bleed Done Right: Achieving Positive Isolation
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <Avatar sx={{ bgcolor: "#1A1A1A", width: 40, height: 40 }}>P</Avatar>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#1A1A1A" }}>
                Panam Valves
              </Typography>
              <Typography variant="caption" sx={{ color: "#777", display: "block" }}>
                March 23, 2026 • 5 min read
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE SPACE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
  <Box
    component="img"
    src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1774281930/1a7621c7-a20d-419d-a0e5-a52262f06ff0_lid0um.jpg"
    alt="Double Block and Bleed Valve for critical service isolation"
    sx={{
      width: "100%",
      height: { xs: 200, md: 500 },
      objectFit: "contain", // Ensures the image fills the area without stretching
      bgcolor: "#F4F4F4",
      borderRadius: "4px",
      display: "flex",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)", 
      border: "1px solid #EEE",
    }}
  />
</Container>

      {/* BODY CONTENT */}
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              Summer shutdowns compress risk into tight windows. When time is short, plant conditions shift, and multiple trades converge, isolation mistakes multiply. This guide provides a safety-led foundation for specifying and executing Double Block and Bleed (DB&B) correctly ensuring you can prove zero energy, protect your team, and return to service with confidence.
            </Typography>

            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              DB&B vs. DIB: Defining the Core Distinction
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}>
              Understanding the mechanical differences between these arrangements is vital for site safety and P&ID accuracy:
            </Typography>

            <Box component="ul" sx={{ mb: 6, pl: 2, listStyle: "none" }}>
              <Box component="li" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, display: "inline" }}>Double Block and Bleed (DB&B): </Typography>
                <Typography sx={{ display: "inline" }}>Two seating elements in series that isolate a single pressure source with a bleed in between. It is primarily used to isolate the downstream side from upstream pressure.</Typography>
              </Box>
              <Box component="li" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, display: "inline" }}>Double Isolation and Bleed (DIB): </Typography>
                <Typography sx={{ display: "inline" }}>Two seating elements capable of bidirectional isolation.</Typography>
              </Box>
              <Box component="li" sx={{ pl: 4, mb: 1 }}>
                <Typography sx={{ fontWeight: 700 }}>DIB-1: One seat seals in both directions; the other is unidirectional.</Typography>
              </Box>
              <Box component="li" sx={{ pl: 4, mb: 1 }}>
                <Typography sx={{ fontWeight: 700 }}>DIB-2: Both seats are bidirectional, offering the highest integrity against pressure from either side.</Typography>
              </Box>
            </Box>

            {/* SECOND IMAGE SPACE */}
            <Box
  component="img"
  src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1774282154/f4d43105-d977-44e6-8cdd-08164a6ce3f6_hw7qz1.jpg"
  alt="Technical diagram illustrating the difference between Double Block and Bleed (DB&B) and Double Isolation and Bleed (DIB) seating configurations"
  sx={{
    width: "100%",
    height: 300,
    objectFit: "contain", // "contain" is usually better for technical diagrams to ensure no labels are cut off
    bgcolor: "#F4F4F4",
    mb: 6,
    borderRadius: "4px",
    display: "flex",
    border: "1px solid #EEE",
  }}
/>

            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Common DB&B Frequently Asked Questions
            </Typography>

            <Stack spacing={4} sx={{ mb: 6 }}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  What is the purpose of a block and bleed valve?
                </Typography>
                <Typography variant="body1">To isolate process pressure and provide a controlled bleed so you can vent, drain, and verify zero energy before maintenance.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  When should you use a double block and bleed?
                </Typography>
                <Typography variant="body1">Use it when you need testable isolation with a measurable cavity, especially in gas service, custody transfer, hydrogen systems, and high-pressure headers during short shutdowns.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  What are the advantages of a double block and bleed valve?
                </Typography>
                <Typography variant="body1">It offers verifiable isolation, faster maintenance, fewer potential leak paths with compact bodies, and safer handling of minor seat leakage via the bleed to a safe vent.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  What is positive isolation versus double block and bleed?
                </Typography>
                <Typography variant="body1">Positive isolation removes any credible leakage path, typically with a blind or spool removal. DB&B is valve-based, testable isolation; it is strong but still relies on seat integrity. Use risk assessment or standards to choose.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  How do double block and bleed valves work?
                </Typography>
                <Typography variant="body1">Two isolation elements close in series, creating a cavity. Opening the bleed relieves and exposes any leakage, letting you confirm pressure is at zero before work.</Typography>
              </Box>
            </Stack>

            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Proving Zero Energy & Critical Testing
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              A DB&B arrangement is only as good as its vent path. Bleed ports must lead to a safe location, such as flare headers for hydrogen skids or closed containment for liquids.
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Service Requirement</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Recommended Test / Feature</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Why it Matters</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {matrixData.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.service}</TableCell>
                      <TableCell>{row.test}</TableCell>
                      <TableCell>{row.why}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              To verify isolation in the field, close both block valves, open the bleed, and record the pressure decay to zero on a calibrated gauge. Ensure individually lockable handles for all three points to meet site safety and LOTO standards.
            </Typography>

            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Summary and Next Step
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              DB&B done right is a disciplined practice, not a symbol on a P&ID. Select the correct seat technology, define sealing direction, route bleeds to safe locations, and prove zero every time. Reserve positive isolation for high-hazard work and follow company standards backed by a clear risk assessment. For hydrogen skids, refinery measurement manifolds, high-pressure gas headers, and
              custody transfer systems, the right DB&B choice protects people, equipment, and schedules.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                lineHeight: 1.4,
                color: "#1A1A1A",
                mb: 3,
                fontSize: { xs: "1.25rem", md: "1.75rem" },
              }}>
              Planning a summer outage or a brownfield tie-in where isolation integrity is non-negotiable?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                fontSize: "1.15rem",
                color: "#444",
                mb: 4,
              }}>
              Request a <strong>PANAM DB&B application review</strong> and valve sizing support. Our engineering team will help align seat design, test method, and vent routing to your pressure class, media, and temperature so you can
              <strong> lock out, prove zero, and proceed with confidence.</strong>
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
                Request a Review
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
                {["DB&B vs DIB Distinction", "Verifying Zero Energy", "Testing Matrix for Critical Media", "LOTO Requirements"].map(text => (
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
  )
}

export default DoubleBlockBleedBlog
