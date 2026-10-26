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

  const cta = {
    heading: "Building the next generation of Hydrogen Infrastructure?",
    body: "Ensuring zero-leakage in high-pressure hydrogen service requires precise metallurgy and specialized valve architecture. Request a technical consultation with PANAM's hydrogen experts to review your system's pressure ratings, material compatibility, and safety compliance.",
    buttonLink: "/enquiry",
  };

  const matrixData = [
    { feature: "Max Pressure Rating — Needle Valve", spec: "60,000 psi (4,134 bar)" },
    { feature: "Max Pressure Rating — Ball Valve", spec: "20,000 psi (1,378 bar)" },
    { feature: "Max Pressure Rating — Check Valve", spec: "10,000 psi (689 bar)" },
    { feature: "Valve Typologies", spec: "Needle, Ball (2-way / 3-way), Check (Non-Return)" },
    { feature: "Connection Size Range", spec: '1/4" to 1" (valve range); 1/16" to 2" (fittings)' },
    { feature: "Connection Types", spec: "NPT, BSPT, BSPP, Medium/High-Pressure Cone-and-Thread" },
    { feature: "Metallurgy (Wetted Parts)", spec: "SS 316/316L, Monel, Hastelloy, Duplex SS" },
    { feature: "Bonnet Material (Needle Valve)", spec: "C63000 Aluminium Bronze" },
    { feature: "Packing / Sealing Materials", spec: "Glass-filled PTFE (to 121°C), Grafoil (to 648°C)" },
    { feature: "Check Valve Cracking Pressures", spec: "1/3, 1, 5, 10, 25, 50, 75, 100 psi (selectable)" },
    { feature: "Ball Valve Actuation", spec: "Quarter-turn (90°) with positive mechanical stop" },
    { feature: "Documentation", spec: "Material certificates available on request" },
    { feature: "Primary Standards / Codes", spec: "ISO 19880-3, ASME B31.12, ASTM A182" },
    { feature: "Primary Applications", spec: "Storage, Fuel Cell Infrastructure, Compression, Chemical Processing" },
  ];

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <title>Hydrogen Valve Systems</title>
      <meta name="description" content="Technical analysis of high-pressure hydrogen valves. Material science, embrittlement mitigation, and valve typologies for net-zero infrastructure." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/hydrogen-blog" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Hydrogen Valve Systems",
          description: "Technical analysis of high-pressure hydrogen valves. Material science, embrittlement mitigation, and valve typologies for net-zero infrastructure.",
          image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/blog/karsten-wurth-ZKWgoRUYuMk-unsplash (1).jpg",
          author: { "@type": "Organization", name: "PANAM®" },
          publisher: { "@type": "Organization", name: "PANAM®" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.panamvalve.com/blog/hydrogen-blog" },
          datePublished: "2026-03-31",
        })}
      </script>

      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
            Hydrogen Valves – High-Pressure Hydrogen Valving Systems for Net-Zero Infrastructure
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            Mitigating Leakage and Degradation in Hydrogen Service
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Avatar sx={{ bgcolor: "#1A1A1A", width: 48, height: 48, fontSize: "1rem", fontWeight: 700 }}>SR</Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, fontSize: "1rem" }}>Sejal Raina</Typography>
              <Typography variant="body2" sx={{ color: "#01B0F0", fontWeight: 600, fontSize: "0.85rem" }}>Digital Marketing</Typography>
              <Typography variant="caption" sx={{ color: "#777", display: "flex", alignItems: "center" }}>March 31, 2026 • 5 min read</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box
          component="img"
          src="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/blog/karsten-wurth-ZKWgoRUYuMk-unsplash (1).jpg"
          alt="High-pressure hydrogen infrastructure and valve systems"
          sx={{ width: "100%", height: { xs: 200, md: 500 }, objectFit: "cover", bgcolor: "#F4F4F4", borderRadius: "4px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #EEE" }}
        />
      </Container>

      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 8 }}>

            {/* Abstract */}
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              As the global energy sector pivots toward a decarbonised economy, hydrogen (H₂) has solidified its position as a primary energy vector for power generation, heavy transport, and industrial feedstock. However, the physical and chemical properties of H₂ — including its extremely low molecular weight (2.016 g/mol), wide flammability range (4–75% in air), and propensity to induce metallic embrittlement — necessitate highly specialised flow-control components. This article analyses the technical requirements and material science behind the latest generation of high-pressure hydrogen valves designed to mitigate leakage and structural degradation, with specific reference to the Panam Valves product range.
            </Typography>

            {/* Critical Engineering Challenges */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Critical Engineering Challenges in H₂ Service
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}>
              Standard industrial valves are insufficient for hydrogen service due to the following specific phenomena:
            </Typography>

            <Box component="ul" sx={{ mb: 6, pl: 2, listStyle: "none" }}>
              <Box component="li" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, display: "inline" }}>Atomic Permeation: </Typography>
                <Typography sx={{ display: "inline" }}>Due to its extremely small molecular radius (kinetic diameter ≈ 2.89 Å), hydrogen can permeate through microscopic crystalline defects and seal interfaces at rates far exceeding those of conventional industrial gases, leading to significant fugitive emissions. Sealing geometries must achieve metal-to-metal contact wherever possible, with polymer seal materials — where used — selected for low H₂ permeability, such as PTFE and PEEK.</Typography>
              </Box>
              <Box component="li" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, display: "inline" }}>Hydrogen Embrittlement (HE): </Typography>
                <Typography sx={{ display: "inline" }}>The diffusion of atomic hydrogen into metal lattices causes a progressive loss of ductility and fracture toughness — a phenomenon that can result in sub-critical crack growth and catastrophic brittle fracture at stresses well below the nominal yield strength. To counteract this, Panam specifies austenitic alloys as standard for all hydrogen-wetted parts:</Typography>
                <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography sx={{ fontWeight: 700, display: "inline" }}>316/316L Stainless Steel — </Typography>
                    <Typography sx={{ display: "inline" }}>elevated nickel content (10–14%) stabilises the face-centred cubic (FCC) austenitic lattice, reducing hydrogen diffusivity by approximately an order of magnitude versus ferritic grades and providing superior corrosion resistance across the full hydrogen pressure range.</Typography>
                  </Box>
                  <Box component="li">
                    <Typography sx={{ fontWeight: 700, display: "inline" }}>Monel, Hastelloy, and Duplex SS — </Typography>
                    <Typography sx={{ display: "inline" }}>specified for aggressive or sour-gas hydrogen environments, including H₂S-containing streams encountered in Steam Methane Reforming and other industrial hydrogen production processes.</Typography>
                  </Box>
                </Box>
              </Box>
              <Box component="li" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, display: "inline" }}>High-Pressure Dynamics: </Typography>
                <Typography sx={{ display: "inline" }}>Operational hydrogen environments span an extreme pressure range. Fuel cell vehicle refuelling cycles between near-vacuum and 700 bar (10,150 psi), while stationary cascade storage systems can operate up to 900 bar (13,050 psi). Panam's needle valve range extends to 60,000 psi (4,134 bar) for specialised compression and R&D applications. Each pressure cycle imposes fatigue loading on valve bodies, stem seals, and seat interfaces — demanding components that are designed with generous safety factors and validated through rigorous cyclic pressure testing.</Typography>
              </Box>
            </Box>

            {/* Ball Valves */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Hydrogen Ball Valves — Isolation & Directional Control
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              Ball valves are utilized for high-cycle isolation. In service, the stem seal assembly is the primary failure point.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}><strong>Trunnion-Mounted Design:</strong> Distributes fluid load to the bearings rather than the seats, ensuring consistent torque and seat integrity under high differential pressures.</Typography>
            <Typography variant="body1" sx={{ mb: 6 }}><strong>Configurations:</strong> Available in 2-way and 3-way (diverter) geometries to facilitate complex process flow paths.</Typography>

            {/* Check Valves */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Hydrogen Check Valves — Non-Return Systems
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              In compression trains, refuelling stations, and electrolyser buffer systems, check valves prevent backflow and protect upstream instrumentation from reverse pressure transients. The dynamic pressure fluctuations inherent to piston and diaphragm compressors impose cyclic mechanical loading on check valve internals, demanding robust fatigue-resistant design.
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Material Fatigue Considerations</Typography>
                <Typography variant="body1">Standard spring-loaded poppet designs utilise strain-hardened spring materials that are highly susceptible to Hydrogen Embrittlement under cyclic loading. Progressive loss of spring preload leads to reduced cracking pressure and, ultimately, to unseated leakage. Panam check valves are rated to 10,000 psi (689 bar) with connection sizes up to 1″, available in Male and Female NPT, BSPT, BSPP, Metric, and PANAM tube fitting connections, with full NACE MR0175 and MR0103 compliance for sour-service hydrogen environments.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Ball-Check Architecture</Typography>
                <Typography variant="body1">A ball-check design is preferred over spring-loaded poppets in hydrogen service. By eliminating high-stress spring components, the ball-check architecture significantly reduces mechanical complexity and minimises reliance on components susceptible to HE. Cracking pressures are selectable across eight discrete set-points — 1/3, 1, 5, 10, 25, 50, 75, and 100 psi — allowing precise tuning of the valve's opening threshold to match the differential pressure characteristics of the upstream compression equipment, preventing valve chatter and ensuring a reliable seal under dynamic pressure fluctuations.</Typography>
              </Box>
            </Stack>

            {/* Needle Valves */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Hydrogen Needle Valves — Precision Metering
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              Needle valves provide fine flow adjustment but face risks of seat deformation under the high seating forces required for gas-tight shut-off.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}><strong>Material Specification:</strong> Constructed from high-grade ASTM A182 316 SS to provide superior corrosion resistance and structural stability.</Typography>
            <Typography variant="body1" sx={{ mb: 6 }}><strong>Pressure Rating:</strong> Engineered to maintain seat integrity at pressures exceeding 700 bar, ensuring full compatibility with hydrogen-rated compression fittings to eliminate potential leak paths.</Typography>

            {/* Matrix */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Technical Specifications Matrix
            </Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#1A3A5C" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, color: "#fff" }}>Feature</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "#fff" }}>Specification / Requirement</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {matrixData.map((row, i) => (
                    <TableRow key={i} sx={{ bgcolor: i % 2 === 0 ? "#fff" : "#F4F8FB" }}>
                      <TableCell sx={{ fontWeight: 600 }}>{row.feature}</TableCell>
                      <TableCell>{row.spec}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Manufacturing */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Manufacturing Excellence and Quality Assurance
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Panam utilizes precision CNC machining to achieve stringent tolerances and superior surface finishes, which are essential for minimizing interfacial leakage in gas service. With over 25 years of metallurgical expertise, the manufacturing process incorporates:
            </Typography>
            <Box component="ul" sx={{ mb: 6, pl: 4 }}>
              <li><strong>Rigorous Hydrostatic and Pneumatic Testing:</strong> To validate seal integrity at 1.5x maximum allowable working pressure (MAWP).</li>
              <li><strong>Material Traceability:</strong> Ensuring all alloys meet the specific nickel and chromium equivalents required to resist hydrogen-induced cracking.</li>
              <li><strong>Global Distribution:</strong> Supporting infrastructure across 52 countries, providing bespoke solutions for the evolving hydrogen economy.</li>
            </Box>

            <Paper elevation={0} sx={{ mt: 10, p: { xs: 4, md: 6 }, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px" }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: "1.5rem" }}>{cta.heading}</Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>{cta.body}</Typography>
              <Button variant="contained" onClick={() => navigate(cta.buttonLink)} endIcon={<ArrowForwardIcon />} sx={{ bgcolor: "#01B0F0", color: "white", px: 4, py: 1.5, borderRadius: "4px", fontWeight: 700 }}>
                Request Technical Review
              </Button>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: "sticky", top: 40 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 800 }}>At a Glance</Typography>
              <Stack spacing={2}>
                {["Hydrogen Embrittlement (HE)", "Atomic Permeation Risks", "60,000 PSI Pressure Ratings", "ISO 19880-3 Compliance", "Ball, Check & Needle Types"].map(text => (
                  <Box key={text} sx={{ pb: 2, borderBottom: "1px solid #EEE" }}>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: "#555" }}>• {text}</Typography>
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