import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HydrogenValvesBlog: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // CTA Data
  const cta = {
    heading: "Building the next generation of Hydrogen Infrastructure?",
    body: "Ensuring zero-leakage in high-pressure hydrogen service requires precise metallurgy and specialized valve architecture. Request a technical consultation with PANAM's hydrogen experts to review your system's pressure ratings, material compatibility, and safety compliance.",
    buttonText: "Request Technical Support",
    buttonLink: "/enquiry",
  };

  const matrixData = [
    { feature: "Max Pressure Rating", spec: "Up to 60,000 psi (4,136 bar)", why: "Covers storage to ultra-high pressure testing" },
    { feature: "Metallurgy", spec: "SS316, Inconel, Hastelloy, Monel", why: "Stabilizes austenitic phase to prevent Embrittlement" },
    { feature: "Compliance", spec: "ISO 19880-3, ASME B31.12", why: "Meets global hydrogen piping & component standards" },
    { feature: "Primary Applications", spec: "Fuel Cells, Storage, Chemical Processing", why: "Engineered for net-zero energy vectors" },
  ];

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      {/* SEO TAGS */}
      <title>High-Pressure Hydrogen Valves | Net-Zero Infrastructure</title>
      <meta name="description" content="Explore technical requirements for high-pressure hydrogen valves. Learn about Hydrogen Embrittlement (HE), material science, and valve typologies for net-zero infrastructure." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/hydrogen-valves-high-pressure" />

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            Hydrogen Valves: Engineering for High-Pressure Net-Zero Infrastructure
          </Typography>

          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            Mitigating Leakage and Degradation in Hydrogen Service
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Avatar 
              sx={{ 
                bgcolor: "#1A1A1A", 
                width: 48, 
                height: 48, 
                fontSize: "1rem", 
                fontWeight: 700 
              }}
            >
              SR
            </Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, fontSize: "1rem" }}>
                Sejal Raina
              </Typography>
              <Typography variant="body2" sx={{ color: "#01B0F0", fontWeight: 600, fontSize: "0.85rem" }}>
                Digital Marketing
              </Typography>
              <Typography variant="caption" sx={{ color: "#777", display: "flex", alignItems: "center" }}>
                March 31, 2026 • 5 min read
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          component="img"
          src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1774964492/1fae1e27-f370-4bec-b33e-1184eb87a0d7.png" // Placeholder for Hydrogen Infrastructure
          alt="High-pressure hydrogen infrastructure and valve systems"
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

      {/* BODY CONTENT */}
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              As the global energy sector pivots toward a decarbonized economy, hydrogen (H₂) has solidified its position as a primary energy vector for power generation, heavy transport, and industrial feedstock. However, the unique physical properties of H₂ necessitate highly specialized flow-control components.
            </Typography>

            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Critical Engineering Challenges
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}>
              Standard industrial valves are often insufficient for hydrogen service due to three specific phenomena:
            </Typography>

            <Box component="ul" sx={{ mb: 6, pl: 2, listStyle: "none" }}>
              <Box component="li" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, display: "inline" }}>Atomic Permeation: </Typography>
                <Typography sx={{ display: "inline" }}>Due to its small molecular radius, H₂ permeates crystalline defects, leading to significant fugitive emissions.</Typography>
              </Box>
              <Box component="li" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, display: "inline" }}>Hydrogen Embrittlement (HE): </Typography>
                <Typography sx={{ display: "inline" }}>Atomic hydrogen diffuses into metal lattices, causing loss of ductility. High-nickel alloys like 316/316L are essential for stability.</Typography>
              </Box>
              <Box component="li" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, display: "inline" }}>High-Pressure Dynamics: </Typography>
                <Typography sx={{ display: "inline" }}>Operational environments up to 700 bar (and 60,000 psi in testing) require robust mechanical integrity and high safety factors.</Typography>
              </Box>
            </Box>

            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Specialized Valve Typologies
            </Typography>

            <Stack spacing={4} sx={{ mb: 6 }}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Hydrogen Ball Valves (Isolation)
                </Typography>
                <Typography variant="body1">Trunnion-mounted designs distribute fluid load to bearings rather than seats, ensuring consistent torque even under high differential pressures.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Hydrogen Check Valves (Non-Return)
                </Typography>
                <Typography variant="body1">Utilizing ball-check architecture instead of spring-loaded poppets reduces mechanical complexity and reliance on high-stress springs susceptible to HE.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Hydrogen Needle Valves (Precision Metering)
                </Typography>
                <Typography variant="body1">Engineered from ASTM A182 316 SS to maintain seat integrity at pressures exceeding 700 bar, eliminating potential leak paths in compression fittings.</Typography>
              </Box>
            </Stack>

            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Technical Specifications Matrix
            </Typography>

            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#F8F9FA" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700 }}>Feature</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Requirement</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Significance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {matrixData.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell sx={{ fontWeight: 600 }}>{row.feature}</TableCell>
                      <TableCell>{row.spec}</TableCell>
                      <TableCell>{row.why}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Manufacturing Excellence & QA
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              PANAM utilizes precision CNC machining to achieve stringent tolerances and superior surface finishes essential for gas service. Every valve undergoes:
            </Typography>
            
            <Box component="ul" sx={{ mb: 6, pl: 4 }}>
              <li><strong>Rigorous Testing:</strong> Validated at 1.5x MAWP via hydrostatic and pneumatic methods.</li>
              <li><strong>Material Traceability:</strong> Alloys meet specific nickel/chromium equivalents to resist cracking.</li>
              <li><strong>Global Expertise:</strong> Supporting hydrogen infrastructure in over 52 countries.</li>
            </Box>

            {/* CTA SECTION */}
            <Paper elevation={0} sx={{ mt: 10, p: { xs: 4, md: 6 }, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px" }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: "1.5rem" }}>
                {cta.heading}
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
                {cta.body}
              </Typography>
              <Button variant="contained" onClick={() => navigate(cta.buttonLink)} endIcon={<ArrowForwardIcon />} sx={{ bgcolor: "#01B0F0", color: "white", px: 4, py: 1.5, borderRadius: "4px", fontWeight: 700 }}>
                Request Technical Review
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
                {["Hydrogen Embrittlement (HE)", "Atomic Permeation Risks", "60,000 PSI Pressure Ratings", "ISO 19880-3 Compliance", "Ball, Check & Needle Types"].map(text => (
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
  );
};

export default HydrogenValvesBlog;