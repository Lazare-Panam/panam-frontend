import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, Box, Avatar, Stack, Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

// Self-hosted (blob) OG image — avoids hotlinking. TODO: swap for the dedicated mechanism diagram
// (hydrogen-embrittlement-mechanism-diagram.png) once produced.
const OG_IMAGE = "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/website-media/hero-banners/atieh-khoshraftar-l4PrMpT_DuY-unsplash.jpg"
const PAGE_URL = "https://www.panamvalve.com/blog/hydrogen-blog"

const HydrogenEmbrittlementBlog: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const cta = {
    heading: "Specifying hydrogen valves and fittings?",
    body: "PANAM supplies 316/316L stainless valves, manifolds and fittings for hydrogen service, with material certificates on request. Send us your pressure, temperature, purity and connections, and our technical team will confirm materials, ratings and documentation.",
    buttonText: "Request a hydrogen technical review",
    buttonLink: "/enquiry",
  }

  const linkSx = { color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }
  const A: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <Box component="a" href={href} sx={linkSx}>{children}</Box>
  )

  const forms = [
    { form: "Hydrogen environment embrittlement", source: "Hydrogen gas around the part during service", situation: "Valves, fittings and tubing in hydrogen systems" },
    { form: "Internal hydrogen embrittlement", source: "Hydrogen absorbed during manufacture", situation: "Welding, electroplating, acid pickling, cathodic protection" },
    { form: "Sour service cracking (sulfide stress cracking)", source: "Hydrogen released by corrosion in wet H₂S", situation: "Oil and gas, some reformer and process streams" },
  ]

  const materials = [
    { material: "316/316L stainless steel", structure: "Stable austenite", susceptibility: "Low, especially with higher nickel content", use: "Preferred for most valves, fittings and tubing" },
    { material: "304/304L stainless steel", structure: "Less stable austenite", susceptibility: "Moderate: can form martensite when strained", use: "Low-pressure service, with caution" },
    { material: "Duplex and super duplex", structure: "Austenite + ferrite", susceptibility: "Higher: the ferrite phase is susceptible", use: "Generally avoided at high pressure unless qualified" },
    { material: "Martensitic and precipitation-hardened steels (e.g. 17-4 PH)", structure: "Martensite", susceptibility: "High", use: "Avoid in hydrogen-wetted parts" },
    { material: "High-strength nickel alloys (e.g. 718, Monel K-500)", structure: "Nickel-based, age-hardened", susceptibility: "High at high strength", use: "Only after specific qualification" },
    { material: "Other nickel alloys (e.g. Monel 400, Hastelloy C-276)", structure: "Nickel-based", susceptibility: "Varies with condition and strength", use: "Case-by-case review" },
    { material: "Carbon and low-alloy steel", structure: "Ferrite/pearlite", susceptibility: "Moderate to high", use: "Low-pressure pipelines, within ASME B31.12 limits" },
    { material: "Aluminium alloys (e.g. 6061-T6)", structure: "Aluminium", susceptibility: "Low", use: "Cylinder liners and some fittings; limited strength" },
    { material: "Copper and brass", structure: "Copper-based", susceptibility: "Low", use: "Low-pressure service only" },
  ]

  const standards = [
    { std: "ASME B31.12", covers: "Hydrogen piping and pipelines, including material limits" },
    { std: "ISO 19880-3", covers: "Valves for gaseous hydrogen fuelling stations" },
    { std: "ISO 11114-4", covers: "Test methods for selecting steels resistant to hydrogen embrittlement" },
    { std: "CSA/ANSI CHMC 1", covers: "Test methods for evaluating metal compatibility in compressed hydrogen" },
    { std: "ASTM G142", covers: "Tensile testing of metals in high-pressure hydrogen" },
    { std: "NACE MR0175 / ISO 15156", covers: "Materials for sour (H₂S) service" },
  ]

  const faqData = [
    {
      question: "What is hydrogen embrittlement?",
      answer: "Hydrogen embrittlement is a loss of ductility and toughness caused by hydrogen atoms entering a metal. Affected parts can crack at stresses well below their normal strength.",
    },
    {
      question: "Does hydrogen embrittle stainless steel?",
      answer: "It can, but austenitic grades such as 316/316L are among the most resistant common metals. Less stable grades such as 304, and duplex or martensitic stainless steels, are more susceptible.",
    },
    {
      question: "Why is 316 stainless steel used for hydrogen?",
      answer: "316 has a stable austenitic structure that resists hydrogen embrittlement, especially with higher nickel content. It also has good corrosion resistance and is widely available in valve and fitting forms.",
    },
    {
      question: "Is duplex stainless steel suitable for hydrogen?",
      answer: "Not by default. Duplex contains ferrite, which is susceptible to hydrogen embrittlement. It needs specific qualification before use in high-pressure hydrogen.",
    },
    {
      question: "Does low temperature make hydrogen embrittlement worse?",
      answer: "For austenitic stainless steels, yes. They are most affected at sub-zero temperatures, which is relevant to pre-cooled 700 bar fuelling at -40 °C.",
    },
    {
      question: "How do you prevent hydrogen embrittlement in valves?",
      answer: "Choose a resistant material such as 316/316L, keep stresses and hardness low, avoid stress concentrations, control welding and plating, and qualify the design against the applicable hydrogen standard.",
    },
  ]

  const h2Sx = { mt: 7, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }
  const h3Sx = { mt: 4, mb: 1.5, fontWeight: 700, color: "#1A1A1A", fontSize: "1.2rem" }
  const bodySx = { mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }
  const headCell = { fontWeight: 700 }

  return (
    <>
      <title key="title">Hydrogen Embrittlement: Materials for H2 Valves &amp; Fittings</title>
      <meta name="description" content="What hydrogen embrittlement is, what makes it worse, and which metals and seals suit hydrogen valves and fittings. Includes a material comparison table." />
      <meta name="keywords" content="hydrogen embrittlement, hydrogen embrittlement stainless steel, 316 stainless steel hydrogen, materials for hydrogen service, hydrogen compatible materials, hydrogen valves materials" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="PANAM Valves" />
      <meta property="og:title" content="Hydrogen Embrittlement: Materials for H2 Valves & Fittings" />
      <meta property="og:description" content="What hydrogen embrittlement is, what makes it worse, and which metals and seals suit hydrogen valves and fittings." />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Diagram of hydrogen atoms diffusing into a metal and gathering at a crack tip" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={OG_IMAGE} />
      <link rel="canonical" href={PAGE_URL} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              "@id": `${PAGE_URL}#article`,
              headline: "Hydrogen Embrittlement: Choosing Materials for Hydrogen Valves and Fittings",
              description: "What hydrogen embrittlement is, what makes it worse, and which metals and seals suit hydrogen valves and fittings.",
              mainEntityOfPage: PAGE_URL,
              image: OG_IMAGE,
              author: { "@type": "Person", name: "Steven Kassi" },
              publisher: { "@type": "Organization", name: "PANAM®", logo: { "@type": "ImageObject", url: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/website-media/panam-no-bg.png" } },
              datePublished: "2026-03-31",
              dateModified: "2026-11-27",
              about: [
                { "@type": "Thing", name: "Hydrogen embrittlement" },
                { "@type": "Thing", name: "Hydrogen valves and fittings" },
              ],
              inLanguage: "en-GB",
            },
            {
              "@type": "FAQPage",
              "@id": `${PAGE_URL}#faq`,
              mainEntity: faqData.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
            },
          ],
        })}
      </script>

      <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
        {/* HEADER */}
        <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 2, md: 4 } }}>
          <Container maxWidth="md">
            <Typography component="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "2.75rem" }, color: "#1A1A1A", lineHeight: 1.15 }}>
              Hydrogen Embrittlement: Choosing Materials for Hydrogen Valves and Fittings
            </Typography>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
              <Avatar sx={{ bgcolor: "#1A1A1A", width: 48, height: 48, fontSize: "1rem", fontWeight: 700 }}>SK</Avatar>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#1A1A1A", lineHeight: 1.2, fontSize: "1rem" }}>Steven Kassi</Typography>
                <Typography variant="body2" sx={{ color: "#01B0F0", fontWeight: 600, fontSize: "0.85rem" }}>Technical Guide</Typography>
                <Typography variant="caption" sx={{ color: "#777", display: "flex", alignItems: "center" }}>March 31, 2026 · Updated Nov 27, 2026 • 9 min read</Typography>
              </Box>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="md">
          {/* INTRO / DEFINITION (featured-snippet target) */}
          <Typography variant="body1" sx={bodySx}>
            <strong>Hydrogen embrittlement</strong> is the loss of ductility and toughness that some metals suffer when hydrogen atoms enter them. An embrittled part can crack at stresses well below its normal strength, often without warning. In hydrogen valves and fittings, the main defence is choosing a resistant material, usually 316/316L stainless steel, and keeping stresses low.
          </Typography>
          <Typography variant="body1" sx={bodySx}>
            This guide explains how hydrogen embrittlement happens, what makes it worse, how common valve and fitting materials compare, and what to specify for hydrogen service.
          </Typography>

          {/* WHAT IS IT */}
          <Typography component="h2" sx={h2Sx}>What Is Hydrogen Embrittlement?</Typography>
          <Typography component="h3" sx={h3Sx}>How hydrogen gets into metal</Typography>
          <Typography variant="body1" sx={bodySx}>
            Hydrogen gas (H₂) is not the problem on its own. At a metal surface, some molecules split into single hydrogen atoms. These atoms are small enough to diffuse into the metal's crystal structure. They collect at grain boundaries, inclusions and other defects, and at regions of high stress such as crack tips and thread roots.
          </Typography>
          <Typography variant="body1" sx={bodySx}>
            There, they weaken the bonds between metal atoms and make it easier for cracks to start and grow.
          </Typography>

          <Typography component="h3" sx={h3Sx}>Three forms engineers meet</Typography>
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #ECEEF0", borderRadius: "8px", mb: 3 }}>
            <Table size="small" aria-label="Three forms of hydrogen embrittlement">
              <TableHead>
                <TableRow sx={{ bgcolor: "#F8F9FA" }}>
                  {["Form", "Where the hydrogen comes from", "Typical situation"].map(h => (
                    <TableCell key={h} sx={headCell}>{h}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {forms.map(r => (
                  <TableRow key={r.form}>
                    <TableCell sx={{ fontWeight: 600, verticalAlign: "top" }}>{r.form}</TableCell>
                    <TableCell sx={{ verticalAlign: "top" }}>{r.source}</TableCell>
                    <TableCell sx={{ verticalAlign: "top" }}>{r.situation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" sx={bodySx}>
            This guide focuses on the first: parts working in hydrogen gas. Sour service is covered by NACE MR0175 / ISO 15156.
          </Typography>

          {/* WHAT MAKES IT WORSE */}
          <Typography component="h2" sx={h2Sx}>What Makes Hydrogen Embrittlement Worse?</Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3, "& li": { mb: 1.5 } }}>
            <Box component="li"><Typography variant="body1"><strong>Higher pressure.</strong> More hydrogen enters the metal as pressure rises. A 700 bar refuelling line is far more demanding than a 30 bar electrolyser outlet.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Pressure cycling.</strong> Every fill and vent cycle loads the part. Hydrogen speeds up fatigue crack growth, so cycling matters more than steady pressure.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Higher strength and hardness.</strong> Stronger, harder steels are generally more susceptible. A material that is safe in an annealed condition may not be safe after cold work or heat treatment.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Stress concentrations.</strong> Thread roots, sharp corners, scratches and weld defects give hydrogen somewhere to gather and cracks somewhere to start.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Low temperature.</strong> Austenitic stainless steels are most affected at sub-zero temperatures, around -50 °C. This matters because 700 bar dispensing pre-cools hydrogen to as low as -40 °C.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Unstable microstructure.</strong> Some stainless grades partly transform to martensite when deformed. Martensite is much more susceptible than austenite.</Typography></Box>
          </Box>

          {/* MATERIAL SELECTION */}
          <Typography component="h2" sx={h2Sx}>Material Selection for Hydrogen Service</Typography>
          <Typography component="h3" sx={h3Sx}>Material comparison</Typography>
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #ECEEF0", borderRadius: "8px", mb: 2 }}>
            <Table size="small" aria-label="Material comparison for hydrogen service">
              <TableHead>
                <TableRow sx={{ bgcolor: "#F8F9FA" }}>
                  {["Material", "Microstructure", "Susceptibility in hydrogen gas", "Typical use in hydrogen systems"].map(h => (
                    <TableCell key={h} sx={headCell}>{h}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {materials.map(r => (
                  <TableRow key={r.material}>
                    <TableCell sx={{ fontWeight: 600, verticalAlign: "top" }}>{r.material}</TableCell>
                    <TableCell sx={{ verticalAlign: "top" }}>{r.structure}</TableCell>
                    <TableCell sx={{ verticalAlign: "top" }}>{r.susceptibility}</TableCell>
                    <TableCell sx={{ verticalAlign: "top" }}>{r.use}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body1" sx={bodySx}>
            Use this table as a starting point, not a specification. Confirm every material against the governing code, the operating conditions and test data. A widely used public reference is the Sandia National Laboratories <em>Technical Reference for Hydrogen Compatibility of Materials</em>.
          </Typography>

          <Typography component="h3" sx={h3Sx}>Why nickel content matters in 316</Typography>
          <Typography variant="body1" sx={bodySx}>
            Nickel keeps stainless steel austenitic. When a low-nickel 316 is deformed, part of it can transform to martensite, which embrittles easily. A higher-nickel 316 stays austenitic and resists hydrogen better. Many hydrogen specifications therefore set a minimum nickel content, or a minimum "nickel equivalent", for 316.
          </Typography>

          <Typography component="h3" sx={h3Sx}>Strength, hardness and cold work</Typography>
          <Typography variant="body1" sx={bodySx}>
            Keep hydrogen-wetted metals at modest strength. Avoid unnecessary cold work, or anneal after forming where the design allows. Where a hardness limit applies, as in sour service, specify and verify it on the material certificate.
          </Typography>

          {/* SEALS */}
          <Typography component="h2" sx={h2Sx}>Seals and Soft Goods: Permeation and Decompression</Typography>
          <Typography variant="body1" sx={bodySx}>
            Metals are only half the story. Hydrogen is the smallest molecule there is, and it passes through many polymers.
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3, "& li": { mb: 1.5 } }}>
            <Box component="li"><Typography variant="body1"><strong>Permeation.</strong> Hydrogen diffuses through elastomers and plastics. Thicker sections and lower-permeability materials reduce it. PEEK and PCTFE are commonly used for seats.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Rapid gas decompression.</strong> When pressure drops suddenly, hydrogen absorbed in an elastomer expands and can blister or split the seal. Specify elastomers rated for rapid gas decompression (RGD).</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Temperature.</strong> Check every soft good's rating at the lowest temperature in the cycle, including pre-cooled fuelling.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Metal-to-metal sealing.</strong> At the highest pressures, <A href="/high-pressure/cones-threaded-nipples">cone-and-thread fittings</A> seal metal to metal, which removes the polymer from the main leak path.</Typography></Box>
          </Box>

          {/* DESIGN */}
          <Typography component="h2" sx={h2Sx}>Designing Hydrogen Embrittlement Out of Valves and Fittings</Typography>
          <Box component="ol" sx={{ pl: 3, mb: 3, "& li": { mb: 1.5 } }}>
            <Box component="li"><Typography variant="body1"><strong>Choose the material first.</strong> Start from 316/316L and justify anything else.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Keep stresses low.</strong> Select pressure ratings with margin for the peak pressure, not the nominal one.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Protect thread roots.</strong> In high-pressure connections, anti-vibration collars on cone-and-thread fittings keep bending loads off the thread root.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Watch the springs.</strong> Strain-hardened springs, for example in poppet <A href="/valves/check-valves">check valves</A>, can be susceptible. Ball-check designs reduce reliance on highly stressed springs.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Control manufacturing.</strong> Welding, plating and pickling can introduce internal hydrogen. Follow the relevant procedures and bake-out requirements.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Avoid surface damage.</strong> Scratches and tool marks are crack starters. Handle and install parts carefully.</Typography></Box>
            <Box component="li"><Typography variant="body1"><strong>Test for leaks before hydrogen goes in.</strong> Use a tracer gas such as helium, or a hydrogen-nitrogen mix, at the pressure your code requires.</Typography></Box>
          </Box>
          <Typography variant="body1" sx={bodySx}>
            For isolation and fine flow control on hydrogen instrument lines, see our <A href="/valves/needle-valves">needle valves</A>.
          </Typography>

          {/* STANDARDS */}
          <Typography component="h2" sx={h2Sx}>Standards and Test Methods</Typography>
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #ECEEF0", borderRadius: "8px", mb: 3 }}>
            <Table size="small" aria-label="Hydrogen standards and test methods">
              <TableHead>
                <TableRow sx={{ bgcolor: "#F8F9FA" }}>
                  {["Standard", "What it covers"].map(h => (
                    <TableCell key={h} sx={headCell}>{h}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {standards.map(r => (
                  <TableRow key={r.std}>
                    <TableCell sx={{ fontWeight: 600, verticalAlign: "top", whiteSpace: "nowrap" }}>{r.std}</TableCell>
                    <TableCell sx={{ verticalAlign: "top" }}>{r.covers}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* CHECKLIST */}
          <Typography component="h2" sx={h2Sx}>Checklist: Specifying Hydrogen-Compatible Valves and Fittings</Typography>
          <Box component="ol" sx={{ pl: 3, mb: 3, "& li": { mb: 1 } }}>
            {[
              "Maximum and minimum operating pressure, including fill peaks",
              "Minimum and maximum temperature, including pre-cooling",
              "Number of pressure cycles expected over the design life",
              "Hydrogen purity, and whether H₂S or moisture is present",
              "Body material and grade, with any minimum nickel content",
              "Seat, seal and packing materials, with RGD rating where relevant",
              "End connections: tube fitting, cone-and-thread, or threaded",
              "Governing code (ASME B31.12, ISO 19880-3, PED) and required test methods",
              "Material certificates and heat traceability",
              "Leak test method and test gas",
            ].map(item => (
              <Box component="li" key={item}><Typography variant="body1">{item}</Typography></Box>
            ))}
          </Box>

          {/* FAQ */}
          <Typography component="h2" sx={h2Sx}>FAQ</Typography>
          <Stack spacing={3.5} sx={{ mb: 4 }}>
            {faqData.map(item => (
              <Box key={item.question}>
                <Typography component="h3" sx={{ fontWeight: 700, mb: 1, fontSize: "1.15rem", color: "#1A1A1A" }}>{item.question}</Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>{item.answer}</Typography>
              </Box>
            ))}
          </Stack>

          {/* CLOSING */}
          <Typography component="h2" sx={h2Sx}>Specify Hydrogen Valves and Fittings with Confidence</Typography>
          <Typography variant="body1" sx={bodySx}>
            Material choice decides how a hydrogen system ages. Start with 316/316L, keep stresses low, choose seals for permeation and decompression, and document everything. For PANAM's range, see our <A href="/industries/hydrogen">hydrogen valves and fittings page</A> and the <A href="/high-pressure">high-pressure range</A>. To check a specification, <A href="/enquiry">request a hydrogen technical review</A>.
          </Typography>

          {/* CTA */}
          <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px", mt: 4, mb: 10 }}>
            <Typography component="h2" sx={{ fontWeight: 800, mb: 2, fontSize: "1.5rem" }}>{cta.heading}</Typography>
            <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>{cta.body}</Typography>
            <Button variant="contained" onClick={() => navigate(cta.buttonLink)} endIcon={<ArrowForwardIcon />} sx={{ bgcolor: "#01B0F0", color: "white", px: 4, py: 1.5, borderRadius: "4px", fontWeight: 700, "&:hover": { bgcolor: "#0190c0" } }}>
              {cta.buttonText}
            </Button>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default HydrogenEmbrittlementBlog
