import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid" // Updated to Grid2
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const DoubleBlockBleedBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // CTA Data matching SEO expert text
  const cta = {
    heading: "Planning a summer outage or a brownfield tie-in where isolation integrity is non-negotiable?",
    body: "Request a PANAM DB&B application review and valve sizing support. Our technical team will help align seat design, test method, and vent routing to your pressure class, media, and temperature so you can lock out, prove zero, and proceed with confidence.",
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
      <title>DBB Valve Solutions | Panam Valve</title>
      <meta name="description" content="Master Double Block and Bleed (DB&B) vs. DIB valves." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/double-block-and-bleed" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "DBB Valve Solutions",
          description: "Master Double Block and Bleed (DB&B) vs. DIB valves.",
          image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/double-block-and-bleeed/dbb_flange_x_flange.png",
          author: { "@type": "Organization", name: "PANAM®" },
          publisher: { "@type": "Organization", name: "PANAM®", logo: { "@type": "ImageObject", url: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/website-media/panam-no-bg.png" } },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.panamvalve.com/blog/double-block-and-bleed" },
          datePublished: "2026-03-25",
          dateModified: "2026-03-25",
        })}
      </script>

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            Double Block and Bleed Valves for Positive Isolation in Critical Service
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            Double Block & Bleed Done Right: Achieving Positive Isolation
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Avatar sx={{ bgcolor: "#1A1A1A", width: 48, height: 48, fontSize: "1rem", fontWeight: 700 }}>SR</Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, fontSize: "1rem" }}>
                Sejal Raina
              </Typography>
              <Typography variant="body2" sx={{ color: "#01B0F0", fontWeight: 600, fontSize: "0.85rem" }}>
                Digital Marketing
              </Typography>
              <Typography variant="caption" sx={{ color: "#777" }}>
                March 25, 2026 • 6 min read
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          component="img"
          src="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/double-block-and-bleeed/dbb_flange_x_flange.png"
          alt="Double Block and Bleed Valve"
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
          {/* Main Article Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              Summer shutdowns compress risk into tight windows. When time is short, plant conditions shift, and multiple trades converge, isolation mistakes multiply. This guide provides a safety-led foundation for specifying and executing Double Block and Bleed (DB&B) correctly ensuring you can prove zero energy, protect your team, and return to service with confidence.
            </Typography>

            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              DB&B vs. DIB: Defining the Core Distinction
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Understanding the mechanical differences between these arrangements is vital for site safety and P&ID accuracy:
            </Typography>

            <Box sx={{ mb: 6 }}>
              <Typography sx={{ mb: 2 }}>
                <strong>Double Block and Bleed (DB&B):</strong> Two seating elements in series that isolate a single pressure source with a bleed in between. It is primarily used to isolate the downstream side from upstream pressure.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                <strong>Double Isolation and Bleed (DIB):</strong> Two seating elements capable of bidirectional isolation.
              </Typography>
              <Box sx={{ pl: 3 }}>
                <Typography sx={{ mb: 1 }}>
                  • <strong>DIB-1:</strong> One seat seals in both directions; the other is unidirectional.
                </Typography>
                <Typography sx={{ mb: 1 }}>
                  • <strong>DIB-2:</strong> Both seats are bidirectional, offering the highest integrity against pressure from either side.
                </Typography>
              </Box>
            </Box>

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
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              A DB&B arrangement is only as good as its vent path. Bleed ports must lead to a safe location, such as flare headers for hydrogen skids or closed containment for liquids.
            </Typography>

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Selection & Testing Matrix
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

            {/* CTA Section using provided text */}
            <Paper elevation={0} sx={{ mt: 10, p: { xs: 4, md: 6 }, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px" }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: "1.5rem" }}>
                {cta.heading}
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
                {cta.body}
              </Typography>
              <Button variant="contained" onClick={() => navigate(cta.buttonLink)} endIcon={<ArrowForwardIcon />} sx={{ bgcolor: "#01B0F0", color: "white", px: 4, py: 1.5, borderRadius: "4px", fontWeight: 700 }}>
                Request Technical Support
              </Button>
            </Paper>
          </Grid>

          {/* Sidebar */}
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
