import React, { useEffect } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// NOTE FOR TECHNICAL SIGN-OFF: this article keeps the established engineering content (embrittlement
// and permeation mechanisms, austenitic material rationale, applicable standards, industry pressure
// ranges — all citable facts) but does NOT assert specific PANAM product ratings that the Nov-2026
// SEO audit flagged as unverified (e.g. exact max pressures, NACE compliance, country/experience
// counts). Where a product-specific value belongs, it is framed as "confirmed at enquiry". Once the
// technical team verifies a figure, it can be stated here as a hard spec.

const inlineLink = { color: "#0089BD", fontWeight: 600, textDecoration: "none", "&:hover": { textDecoration: "underline" } };
const L = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link component={RouterLink} to={to} sx={inlineLink}>{children}</Link>
);

const HydrogenValvesBlog: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cta = {
    heading: "Specifying valves for a hydrogen system?",
    body: "Hydrogen service depends on getting metallurgy, sealing and pressure rating right for the specific duty. Share your media, pressure, temperature and connection requirements, and our team will help you confirm material compatibility and the right valve configuration.",
    buttonLink: "/enquiry",
  };

  // Selection reference — application- and standards-driven, not a claim of PANAM product maxima.
  const matrixData = [
    { feature: "Typical system pressures", spec: "Refuelling cycles to ~700 bar (10,150 psi); cascade storage to ~900 bar (13,050 psi)" },
    { feature: "Valve typologies", spec: "Needle, Ball (2-way / 3-way), Check (non-return)" },
    { feature: "Connection types", spec: "NPT, BSPT, BSPP, cone-and-thread, tube fittings" },
    { feature: "Wetted material options", spec: "316 / 316L, Monel, Hastelloy, Duplex SS" },
    { feature: "Seal material options", spec: "PTFE, PEEK and graphite-based packing, selected for low H₂ permeability and service temperature" },
    { feature: "Sour / H₂S service", spec: "NACE MR0175 / ISO 15156 material options where the duty requires" },
    { feature: "Applicable standards", spec: "ISO 19880-3, ASME B31.12, ASTM A182" },
    { feature: "Pressure rating & certification", spec: "Confirmed per application at enquiry" },
    { feature: "Documentation", spec: "Material certificates available on request" },
  ];

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      <title>Hydrogen Valves: Embrittlement, Sealing & Material Selection | PANAM®</title>
      <meta name="description" content="A guide to specifying valves for hydrogen service — hydrogen embrittlement, permeation, austenitic material selection and the standards that apply." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/hydrogen-blog" />

      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="PANAM®" />
      <meta property="og:title" content="Hydrogen Valves: Embrittlement, Sealing & Material Selection | PANAM®" />
      <meta property="og:description" content="How hydrogen embrittlement, permeation and material selection drive valve specification for H₂ service, and the standards that apply." />
      <meta property="og:url" content="https://www.panamvalve.com/blog/hydrogen-blog" />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/blog/karsten-wurth-ZKWgoRUYuMk-unsplash (1).jpg" />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Hydrogen Valves: Embrittlement, Sealing & Material Selection",
          description: "A guide to specifying valves for hydrogen service — hydrogen embrittlement, permeation, austenitic material selection and the standards that apply.",
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
            Hydrogen Valves: Embrittlement, Sealing and Material Selection
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: "#555", fontSize: "1.5rem" }}>
            What makes hydrogen service different, and how it drives valve specification
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 4 }}>
            <Avatar sx={{ bgcolor: "#1A1A1A", width: 48, height: 48, fontSize: "1rem", fontWeight: 700 }}>SR</Avatar>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, fontSize: "1rem" }}>Sejal Raina</Typography>
              <Typography variant="body2" sx={{ color: "#01B0F0", fontWeight: 600, fontSize: "0.85rem" }}>Digital Marketing</Typography>
              <Typography variant="caption" sx={{ color: "#777", display: "flex", alignItems: "center" }}>March 31, 2026 • 6 min read</Typography>
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

            {/* Intro */}
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
              As the energy sector decarbonises, hydrogen (H₂) is being adopted as an energy vector for power, heavy transport and industrial feedstock. But hydrogen&apos;s physical and chemical properties — an extremely low molecular weight (2.016 g/mol), a wide flammability range (4–75% in air), and a tendency to embrittle certain metals — make it a demanding medium for flow-control components. This guide explains the mechanisms that matter when specifying valves for hydrogen service, and the material and standards choices they drive. For our range, see the{" "}
              <L to="/industries/hydrogen">hydrogen industry page</L> and the <L to="/high-pressure">high-pressure range</L>.
            </Typography>

            {/* Critical Engineering Challenges */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Why hydrogen service is different
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem" }}>
              Three phenomena separate hydrogen duty from conventional gas service:
            </Typography>

            <Box component="ul" sx={{ mb: 6, pl: 2, listStyle: "none" }}>
              <Box component="li" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, display: "inline" }}>Atomic permeation: </Typography>
                <Typography sx={{ display: "inline" }}>With a very small kinetic diameter (≈ 2.89 Å), hydrogen can permeate through microscopic crystalline defects and seal interfaces at rates far exceeding conventional industrial gases, leading to fugitive emissions. Sealing should achieve metal-to-metal contact wherever possible, with any polymer seals selected for low H₂ permeability, such as PTFE and PEEK.</Typography>
              </Box>
              <Box component="li" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, display: "inline" }}>Hydrogen embrittlement (HE): </Typography>
                <Typography sx={{ display: "inline" }}>The diffusion of atomic hydrogen into metal lattices can cause a progressive loss of ductility and fracture toughness, leading to sub-critical crack growth and, in the worst case, brittle fracture at stresses below the nominal yield strength. A common mitigation is to use austenitic alloys for hydrogen-wetted parts:</Typography>
                <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography sx={{ fontWeight: 700, display: "inline" }}>316 / 316L stainless steel — </Typography>
                    <Typography sx={{ display: "inline" }}>its nickel content stabilises the face-centred cubic (FCC) austenitic lattice, reducing hydrogen diffusivity relative to ferritic grades while providing good corrosion resistance across the hydrogen pressure range.</Typography>
                  </Box>
                  <Box component="li">
                    <Typography sx={{ fontWeight: 700, display: "inline" }}>Monel, Hastelloy and Duplex SS — </Typography>
                    <Typography sx={{ display: "inline" }}>options for aggressive or sour-gas hydrogen environments, including H₂S-containing streams encountered in steam methane reforming and other production processes.</Typography>
                  </Box>
                </Box>
              </Box>
              <Box component="li" sx={{ mb: 3 }}>
                <Typography sx={{ fontWeight: 700, display: "inline" }}>High-pressure dynamics: </Typography>
                <Typography sx={{ display: "inline" }}>Hydrogen systems span a wide pressure range — fuel-cell vehicle refuelling cycles up to around 700 bar (10,150 psi), and stationary cascade storage can operate to roughly 900 bar (13,050 psi). Each pressure cycle imposes fatigue loading on valve bodies, stem seals and seat interfaces, so components should be designed with appropriate safety factors and validated by cyclic pressure testing.</Typography>
              </Box>
            </Box>

            {/* Ball Valves */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Ball valves — isolation &amp; directional control
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              <L to="/valves/ball-valves">Ball valves</L> are used for high-cycle isolation; in service, the stem seal assembly is the primary wear point.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}><strong>Trunnion-mounted design:</strong> distributes fluid load to the bearings rather than the seats, helping maintain consistent torque and seat integrity under high differential pressure.</Typography>
            <Typography variant="body1" sx={{ mb: 6 }}><strong>Configurations:</strong> available in 2-way and 3-way (diverter) geometries for more complex flow paths.</Typography>

            {/* Check Valves */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Check valves — non-return protection
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              In compression trains, refuelling stations and electrolyser buffer systems, <L to="/valves/check-valves">check valves</L> prevent backflow and protect upstream instrumentation from reverse pressure transients. The pressure fluctuations of piston and diaphragm compressors impose cyclic loading on check-valve internals, so fatigue-resistant design matters.
            </Typography>
            <Stack spacing={3} sx={{ mb: 6 }}>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Material fatigue considerations</Typography>
                <Typography variant="body1">Strain-hardened spring materials in conventional poppet designs can be susceptible to hydrogen embrittlement under cyclic loading; progressive loss of spring preload reduces cracking pressure and can lead to unseated leakage. Material selection and sealing for sour or H₂S-containing hydrogen service (e.g. NACE MR0175 / ISO 15156 options) is confirmed against your conditions at enquiry.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Ball-check architecture</Typography>
                <Typography variant="body1">A ball-check design can be preferred over spring-loaded poppets in hydrogen service: by reducing reliance on high-stress spring components, it lowers mechanical complexity and the exposure of HE-susceptible parts. Selectable cracking pressures allow the opening threshold to be tuned to the upstream equipment, helping prevent chatter and maintain a reliable seal under dynamic pressure.</Typography>
              </Box>
            </Stack>

            {/* Needle Valves */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Needle valves — precision metering
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              <L to="/valves/needle-valves">Needle valves</L> provide fine flow adjustment but must resist seat deformation under the high seating forces required for gas-tight shut-off.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}><strong>Material:</strong> austenitic grades such as ASTM A182 316 SS are commonly specified for corrosion resistance and structural stability in hydrogen service.</Typography>
            <Typography variant="body1" sx={{ mb: 6 }}><strong>Pressure rating:</strong> matched to the application and confirmed at enquiry, with compatibility to hydrogen-rated compression fittings to limit leak paths. For higher duties, see the <L to="/high-pressure/needle-valves">high-pressure needle valve range</L>.</Typography>

            {/* Selection reference */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Hydrogen service selection reference
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
              A starting point for scoping a hydrogen valve requirement. Exact ratings, materials and certification are confirmed for your duty at enquiry.
            </Typography>
            <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #EEE", mb: 4 }}>
              <Table>
                <TableHead sx={{ bgcolor: "#1A3A5C" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, color: "#fff" }}>Parameter</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "#fff" }}>Typical selection</TableCell>
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

            {/* Standards & QA */}
            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Standards, testing and documentation
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
              Hydrogen valve specification is framed by standards including ISO 19880-3 (gaseous hydrogen fuelling station valves), ASME B31.12 (hydrogen piping and pipelines) and ASTM A182 (forged stainless components). Good practice for gas-tight service includes:
            </Typography>
            <Box component="ul" sx={{ mb: 6, pl: 4 }}>
              <li><strong>Pressure testing</strong> to validate seal integrity above the maximum allowable working pressure.</li>
              <li><strong>Material traceability,</strong> so alloy composition can be matched to the resistance required for hydrogen service.</li>
              <li><strong>Documentation,</strong> with material certificates available on request.</li>
            </Box>

            <Paper elevation={0} sx={{ mt: 10, p: { xs: 4, md: 6 }, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px" }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, fontSize: "1.5rem" }}>{cta.heading}</Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>{cta.body}</Typography>
              <Button variant="contained" onClick={() => navigate(cta.buttonLink)} endIcon={<ArrowForwardIcon />} sx={{ bgcolor: "#01B0F0", color: "white", px: 4, py: 1.5, borderRadius: "4px", fontWeight: 700 }}>
                Request a technical review
              </Button>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: "sticky", top: 40 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 800 }}>At a Glance</Typography>
              <Stack spacing={2}>
                {["Hydrogen embrittlement (HE)", "Atomic permeation & sealing", "Austenitic material selection (316/316L)", "ISO 19880-3 & ASME B31.12", "Ball, check & needle types"].map(text => (
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
