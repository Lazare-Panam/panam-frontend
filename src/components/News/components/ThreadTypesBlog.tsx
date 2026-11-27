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
    body: "PANAM supplies a wide range of industrial valves and SS316 instrumentation fittings designed for reliability and performance across global industries. If you need help selecting the right thread standard or fitting for your application, our team is ready to assist.",
    buttonText: "Request Technical Support",
    buttonLink: "/enquiry",
  }

  // Threads per inch by nominal size (ASME B1.20.1 for NPT, ISO 7-1 / ISO 228-1 for BSP).
  // Panam size codes count sixteenths of an inch, as used in part numbers such as PHN-8N-8G-SS-10K.
  const pitchTable = [
    { size: '1/8"', code: "2", npt: "27", bsp: "28" },
    { size: '1/4"', code: "4", npt: "18", bsp: "19" },
    { size: '3/8"', code: "6", npt: "18", bsp: "19" },
    { size: '1/2"', code: "8", npt: "14", bsp: "14" },
    { size: '3/4"', code: "12", npt: "14", bsp: "14" },
    { size: '1"', code: "16", npt: "11.5", bsp: "11" },
  ]

  const linkSx = { color: "#01B0F0", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }

  // Internal link helper — plain crawlable anchors, consistent brand-blue styling.
  const A: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <Box component="a" href={href} sx={linkSx}>
      {children}
    </Box>
  )

  // Side-by-side comparison of the three standards. Values may be plain strings or linked nodes.
  const comparisonRows: { feature: string; npt: React.ReactNode; bspt: React.ReactNode; bspp: React.ReactNode }[] = [
    { feature: "Full name", npt: "National Pipe Taper", bspt: "British Standard Pipe Taper", bspp: "British Standard Pipe Parallel" },
    { feature: "Standard", npt: "ASME B1.20.1", bspt: "ISO 7-1", bspp: "ISO 228-1" },
    { feature: "Thread angle", npt: "60°", bspt: "55°", bspp: "55°" },
    { feature: "Crests and roots", npt: "Flat", bspt: "Rounded", bspp: "Rounded" },
    { feature: "Taper", npt: "1 in 16 on diameter", bspt: "1 in 16 on diameter", bspp: "None (parallel)" },
    { feature: "Seals on", npt: "Thread flanks, with tape or sealant", bspt: "Thread flanks, with tape or sealant", bspp: "Bonded washer, gasket, O-ring or cone seat" },
    { feature: "Sealant on threads?", npt: "Yes", bspt: "Yes", bspp: "No" },
    { feature: "Port marking", npt: "NPT", bspt: "R (male), Rc (female), Rp (parallel female for R males)", bspp: "G" },
    { feature: "Mainly used in", npt: "North America", bspt: "UK, Europe, Asia, Middle East", bspp: "UK, Europe, Asia, Middle East" },
    { feature: "Letter in PANAM part codes", npt: "N", bspt: "R", bspp: "G" },
    {
      feature: "PANAM fittings",
      npt: (
        <>
          <A href="/instrumentation-fittings/pipe-fittings/all">pipe fittings</A>, <A href="/instrumentation-fittings/tube-fittings/connectors">tube fitting connectors</A>
        </>
      ),
      bspt: (
        <>
          <A href="/instrumentation-fittings/pipe-fittings/all">pipe fittings</A>, <A href="/high-pressure/pipe-fittings/hex-nipples">hex nipples</A>
        </>
      ),
      bspp: (
        <>
          <A href="/instrumentation-fittings/pipe-fittings/adapters-plugs">pipe adapters</A>, <A href="/instrumentation-fittings/swivel-gauge-adaptors">swivel gauge adaptors</A>
        </>
      ),
    },
  ]

  const faqData = [
    {
      question: "What is the difference between BSP and NPT?",
      answer: "NPT has a 60° thread angle with flat crests and is always tapered. BSP has a 55° thread angle with rounded crests and is either tapered (BSPT) or parallel (BSPP). Pitch also differs at most sizes, so the two do not mate.",
    },
    {
      question: "Which is better, BSP or NPT?",
      answer: "Neither is better in general. Use the standard your equipment and region already use: NPT is common in North America, BSP in the UK, Europe and Asia. Where the two meet, use a purpose-made adapter.",
    },
    {
      question: "What does BSP stand for?",
      answer: "BSP stands for British Standard Pipe. It is a family of thread standards rather than a single thread. BSPP (parallel, designated G) is covered by ISO 228-1 and BSPT (tapered, designated R) by ISO 7-1.",
    },
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
    {
      question: "What should I include when I ask for a quote?",
      answer: "State the thread type (NPT, BSPT or BSPP), the nominal size, whether it is male or female, and the Panam part code if you have it. \"BSP\" on its own is not enough.",
    },
  ]

  return (
    <>
      <title key="title">BSP vs NPT: NPT, BSPP and BSPT Threads Compared (Chart)</title>
      <meta name="description" content="BSP vs NPT explained: thread angle, taper, threads per inch and sealing for NPT, BSPP and BSPT, plus safe conversion with adapters. Comparison table inside." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="BSP vs NPT: NPT, BSPP and BSPT Threads Compared (Chart)" />
      <meta property="og:description" content="BSP vs NPT explained: thread angle, taper, threads per inch and sealing for NPT, BSPP and BSPT, plus safe conversion with adapters. Comparison table inside." />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://www.panamvalve.com/blog/npt-vs-bspp-vs-bspt-thread-standards" />
      {/* TODO: produce and upload the 1200x630 comparison graphic at this path (section 7 of the brief). Until then OG/Twitter previews have no image. */}
      <meta property="og:image" content="https://www.panamvalve.com/og/bsp-vs-npt-thread-profile-1200x630.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="BSP vs NPT thread profile: 55° rounded vs 60° flat crests" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://www.panamvalve.com/og/bsp-vs-npt-thread-profile-1200x630.png" />
      <link rel="canonical" href="https://www.panamvalve.com/blog/npt-vs-bspp-vs-bspt-thread-standards" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "BSP vs NPT: Thread Standards Decoded (NPT, BSPP and BSPT)",
          description: "BSP vs NPT explained: thread angle, taper, threads per inch and sealing for NPT, BSPP and BSPT, plus safe conversion with adapters. Comparison table inside.",
          image: "https://www.panamvalve.com/og/bsp-vs-npt-thread-profile-1200x630.png",
          author: { "@type": "Person", name: "Steven Kassi" },
          publisher: { "@type": "Organization", name: "PANAM®", logo: { "@type": "ImageObject", url: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/website-media/panam-no-bg.png" } },
          mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.panamvalve.com/blog/npt-vs-bspp-vs-bspt-thread-standards" },
          datePublished: "2026-05-27",
          dateModified: "2026-11-27",
          inLanguage: "en-GB",
        })}
      </script>
      {/* Built from faqData so the structured data always matches the visible FAQ text. */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqData.map(item => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        })}
      </script>

      <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>

        {/* HEADER */}
        <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
          <Container maxWidth="md">
            <Typography component="h1" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" }, color: "#1A1A1A" }}>
              BSP vs NPT: Thread Standards Decoded (NPT, BSPP and BSPT)
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
                  May 27, 2026 · Updated Nov 27, 2026 • 8 min read
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
                This guide shows how to identify NPT, BSPP (ISO Parallel) and BSPT (ISO Tapered) in minutes, choose the right seal method, avoid cross-threading myths, and convert safely with adapters. It also maps selections to PANAM's SS316 PMC series and pipe fittings, plus notes for sour service.
              </Typography>

              {/* SHORT ANSWER + COMPARISON TABLE (featured-snippet block) */}
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                BSP vs NPT: The Short Answer
              </Typography>

              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                BSP and NPT are not interchangeable. NPT (American) uses a 60° thread angle with flat crests and is always tapered. BSP (British) uses a 55° Whitworth thread with rounded crests and comes in two types: BSPT (tapered) and BSPP (parallel). Tapered threads seal on the threads with tape or sealant; BSPP seals on a washer, O-ring or cone.
              </Typography>

              <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #ECEEF0", borderRadius: "8px", mb: 6 }}>
                <Table size="small" aria-label="NPT vs BSPT vs BSPP comparison">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#F8F9FA" }}>
                      {["Feature", "NPT", "BSPT", "BSPP"].map(h => (
                        <TableCell key={h} sx={{ fontWeight: 700 }}>{h}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {comparisonRows.map(row => (
                      <TableRow key={row.feature}>
                        <TableCell sx={{ fontWeight: 700, color: "#1A1A1A", verticalAlign: "top" }}>{row.feature}</TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>{row.npt}</TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>{row.bspt}</TableCell>
                        <TableCell sx={{ verticalAlign: "top" }}>{row.bspp}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {/* SECTION 1 */}
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                BSP vs NPT: What Is the Difference?
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                All three are common on valves, gauges, manifolds and small-bore instrument lines, but they differ in geometry and how they seal.
              </Typography>

              <Stack spacing={4} sx={{ mb: 4 }}>
                <Box>
                  <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Thread Form and Flank Angle</Typography>
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
                  <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Taper</Typography>
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
                  <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Pitch and Sizes</Typography>
                  <Typography variant="body1">Both families use inch-based nominal sizes, but threads-per-inch and pitch tables differ at several sizes. A pitch gauge is essential.</Typography>
                </Box>

                <Box>
                  <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Primary Seal Method</Typography>
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

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                These differences mean the standards are not directly interchangeable. Correct identification prevents galling, leaks and damaged ports.
              </Typography>

              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Hydraulic lines often use a third standard, 37° JIC flare, which is neither BSP nor NPT. See our <A href="/instrumentation-fittings/jic-fittings">37° JIC fittings</A>.
              </Typography>

              {/* BSP AMBIGUITY */}
              <Typography id="bsp-ambiguity" component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Why "BSP" on Its Own Is Not Enough
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                "BSP" names a family of threads. A BSP fitting can be parallel (BSPP) or tapered (BSPT), and the two seal in completely different ways. If an enquiry says only "1/2 BSP", we cannot tell which one you need without asking, and a guess can mean the wrong part is quoted, made or shipped.
              </Typography>

              <Paper elevation={0} sx={{ p: 3, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px", mb: 6 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  <strong>Always state BSPP or BSPT.</strong> If you do not know which you have, use the identification steps below, or send us a photo and your measurements.
                </Typography>
              </Paper>

              {/* PITCH TABLE */}
              <Typography id="npt-vs-bsp" component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                BSP vs NPT Threads per Inch by Size
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                NPT and BSP use the same nominal size names, but the thread angle is different (60 degree vs 55 degree) and the pitch differs in some sizes. Where the pitch is the same, a wrong-thread fitting can start to engage and feel as though it fits, then leak or damage the thread when tightened.
              </Typography>

              <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #ECEEF0", borderRadius: "8px", mb: 2 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#F8F9FA" }}>
                      {["Nominal size", "Panam size code", "NPT (threads per inch)", "BSP (threads per inch)"].map(h => (
                        <TableCell key={h} sx={{ fontWeight: 700 }}>{h}</TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pitchTable.map(row => (
                      <TableRow key={row.size}>
                        <TableCell>{row.size}</TableCell>
                        <TableCell>{row.code}</TableCell>
                        <TableCell>{row.npt}</TableCell>
                        <TableCell>{row.bsp}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                1/2" and 3/4" have the same pitch in both standards, which is exactly why mismatches at those sizes go unnoticed until the joint leaks. Check the thread angle as well as the pitch.
              </Typography>

              {/* SECTION 2 */}
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                How to Tell BSP from NPT in the Field
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
                  <strong>Tip:</strong> Ports stamped <strong>G</strong> are BSPP. Ports stamped <strong>R</strong> (male) or <strong>Rc</strong> (female) are BSPT. <strong>Rp</strong> is a parallel female thread made to mate with an R male. NPT ports are often marked <strong>NPT</strong> or <strong>NPS</strong> (parallel NPT form used for mechanical joints, not pressure sealing).
                </Typography>
              </Paper>

              {/* SECTION 3 */}
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Seal Methods That Actually Work
              </Typography>

              <Stack spacing={4} sx={{ mb: 6 }}>
                <Box>
                  <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>NPT and BSPT</Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    Use PTFE tape or an anaerobic thread sealant compatible with the media and temperature. Two to three wraps of high-density PTFE tape are typical for 1/4 inch to 1/2 inch. Do not start the tape over the first thread crest; keep it one crest back to prevent debris ingress. Wrench engagement usually runs 2 to 3 turns past finger-tight for small sizes. Do not bottom out the male shoulder on the port face; sealing is on the flanks.
                  </Typography>
                </Box>
                <Box>
                  <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>BSPP</Typography>
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
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Are BSP and NPT Compatible?
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
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Converting BSP to NPT with Adapters
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Adapters preserve geometry, provide the right seat, and save the port. Typical conversions in instrumentation skids include:
              </Typography>

              <Box component="ul" sx={{ mb: 4, pl: 2 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">NPT male to BSPP male or female with washer seat — see our <A href="/instrumentation-fittings/pipe-fittings/adapters-plugs">NPT to BSPP pipe adapters</A></Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">BSPT male to NPT female</Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">BSPP male with bonded washer to NPT female</Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Panam high pressure hex nipples cover NPT to BSPP and NPT to BSPT in SS 316, for example:
              </Typography>

              <Box component="ul" sx={{ mb: 4, pl: 2 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">
                    <Box component="a" href="/high-pressure/pipe-fittings/hex-nipples/PHN-8N-8G-SS-10K" sx={linkSx}>PHN-8N-8G-SS-10K</Box>: 1/2" NPT to 1/2" BSPP (ISO parallel), 10,000 psi
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">
                    <Box component="a" href="/high-pressure/pipe-fittings/hex-nipples/PHN-8N-8R-SS-10K" sx={linkSx}>PHN-8N-8R-SS-10K</Box>: 1/2" NPT to 1/2" BSPT, 10,000 psi
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">
                    The full range, including reducing sizes, is on the{" "}
                    <Box component="a" href="/high-pressure/pipe-fittings/hex-nipples" sx={linkSx}>hex nipples</Box>
                    {" "}page. For other conversions, see our{" "}
                    <A href="/high-pressure/pipe-fittings/adapters">high-pressure pipe adapters</A>.
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Do not force a part that does not thread in smoothly by hand.
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                PANAM supplies SS316 adapters, nipples and reducers in the PANAM range with material certificates on request. For sour service, tell us your requirement at enquiry. Browse the SS316 instrumentation and pipe fittings range to filter by thread standard, size and type.
              </Typography>

              <Box component="ul" sx={{ mb: 6, pl: 2 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">
                    Explore instrumentation tube and pipe fittings in SS316:{" "}
                    <A href="/instrumentation-fittings/pipe-fittings">pipe fittings</A>
                    {" "}and{" "}
                    <A href="/instrumentation-fittings/tube-fittings">tube fittings</A>
                    {" "}categories.
                  </Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1">
                    For associated isolation and measurement hardware, see{" "}
                    <A href="/valves">stainless steel valves</A>
                    {" "}and{" "}
                    <A href="/instrumentation-fittings/swivel-gauge-adaptors">swivel gauge adaptors</A>
                    {" "}to match end connections.
                  </Typography>
                </Box>
              </Box>

              {/* SECTION 6 */}
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Selection Checklist
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Use this quick checklist before you order or assemble:
              </Typography>

              <Box component="ul" sx={{ mb: 6, pl: 2 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1">Identify port standard first. Check stampings: G (BSPP), R/Rc (BSPT), NPT/NPS.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1">Confirm male fitting standard with taper check and pitch gauge.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1">Choose the correct seal method: sealant for tapered, washer or cone for BSPP.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1">Verify material, pressure class and media compatibility. SS316 is the default for corrosive and offshore environments.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1">For sour service, state your NACE MR0175 requirement at enquiry.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1">Request <A href="/certificates">material certificates</A> with your order where required.</Typography>
                </Box>
              </Box>

              {/* SECTION 7 */}
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
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
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Request a Printable Thread Chart
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
                Ask PANAM for a printable A4 PDF chart to accompany site orders. It mirrors the comparison and threads-per-inch tables above.
              </Typography>

              {/* SECTION 9 */}
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Mapping to PANAM Parts
              </Typography>

              <Box component="ul" sx={{ mb: 6, pl: 2 }}>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>PANAM PMC series instrumentation fittings in SS316:</strong> male and female connectors, adapters, reducers, unions and port connectors in NPT, BSPP and BSPT. See the <A href="/high-pressure/fittings/connectors">PMC series male connectors</A>. Material certificates on request.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>SS316 pipe fittings:</strong> <A href="/instrumentation-fittings/pipe-fittings/nipples-couplings">pipe nipples and couplings</A>, hex plugs, caps, elbows, tees and crosses across NPT, BSPP and BSPT. Use dedicated adapters for cross-standard conversions.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>Tube fittings:</strong> <A href="/instrumentation-fittings/tube-fittings/connectors">tube fitting male connectors (tube to NPT or BSP)</A> for compression-to-thread transitions.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>Needle and isolation valves:</strong> specify end connections to match your thread family — <A href="/valves/needle-valves">needle valves with NPT, BSPP or BSPT ends</A>. For example, choose BSPP female with bonded washer face for panel instruments or NPT tapered ends for pipe runs.</Typography>
                </Box>
                <Box component="li" sx={{ mb: 2 }}>
                  <Typography variant="body1"><strong>Gauges:</strong> connect pressure gauges to any port with <A href="/instrumentation-fittings/swivel-gauge-adaptors">swivel gauge adaptors</A>.</Typography>
                </Box>
              </Box>

              {/* PART CODES */}
              <Typography id="part-codes" component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                How Panam Part Codes Show the Thread
              </Typography>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Panam part codes carry the thread type as a letter: <strong>G</strong> for BSPP, <strong>R</strong> for BSPT and <strong>N</strong> for NPT. The number in front is the size in sixteenths of an inch (2 = 1/8", 4 = 1/4", 6 = 3/8", 8 = 1/2", 12 = 3/4", 16 = 1"). Reading the code tells you the thread before you order. Not sure what you have? Use it to <A href="/product-index">find a part number</A> in our index.
              </Typography>

              <Paper elevation={0} sx={{ p: 3, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px", mb: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, fontFamily: "monospace" }}>PHN-8N-8R-SS-10K</Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {[
                    "PHN: hex nipple",
                    '8N: 1/2" NPT on the first end',
                    '8R: 1/2" BSPT on the second end',
                    "SS: SS 316",
                    "10K: rated to 10,000 psi",
                  ].map(item => (
                    <Box component="li" key={item} sx={{ mb: 0.5 }}>
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>

              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Swap the R for a G and you have{" "}
                <Box component="a" href="/high-pressure/pipe-fittings/hex-nipples/PHN-8N-8G-SS-10K" sx={linkSx}>PHN-8N-8G-SS-10K</Box>
                , the same nipple with a 1/2" BSPP end instead. One letter is the difference between a tapered and a parallel thread, so quote the full code when you enquire.
              </Typography>

              {/* QUOTE CHECKLIST */}
              <Typography id="specify" component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                What to Tell Us When You Ask for a Quote
              </Typography>

              <Box component="ul" sx={{ mb: 6, pl: 2 }}>
                {[
                  'Thread type: NPT, BSPT or BSPP (not just "BSP")',
                  "Nominal size",
                  "Male or female",
                  "The Panam part code, if you have one",
                  "Medium, pressure and temperature, if known",
                ].map(item => (
                  <Box component="li" sx={{ mb: 2 }} key={item}>
                    <Typography variant="body1">{item}</Typography>
                  </Box>
                ))}
              </Box>

              {/* FAQ */}
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                FAQ
              </Typography>

              <Stack spacing={4} sx={{ mb: 6 }}>
                {faqData.map((item, i) => (
                  <Box key={i}>
                    <Typography component="h3" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>{item.question}</Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>{item.answer}</Typography>
                  </Box>
                ))}
              </Stack>

              {/* SUMMARY */}
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Summary
              </Typography>

              <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8, fontSize: "1.1rem", color: "#333" }}>
                Correctly identifying NPT, BSPP and BSPT saves ports, prevents leaks and keeps commissioning on schedule. Check taper, pitch and markings, then choose the right seal method. Never force mixed standards; convert with SS316 adapters and nipples. Request material certificates and state any sour service requirement at enquiry. If you want help matching threads to valves, gauges and fittings, contact PANAM technical support or browse our{" "}
                <A href="/instrumentation-fittings">SS316 instrumentation and pipe fittings</A>
                {" "}to build a leak-tight bill of materials.
              </Typography>

              {/* RELATED READING */}
              <Typography component="h2" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
                Related Reading
              </Typography>

              <Box component="ul" sx={{ mb: 10, pl: 2 }}>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1"><A href="/blog/swivel-gauge-blog">How to use swivel gauge adaptors</A></Typography>
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                  <Typography variant="body1"><A href="/blog/swagelok-alternative-tube-fittings">What "compatible" tube fittings really means</A></Typography>
                </Box>
              </Box>

              {/* CTA */}
              <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px" }}>
                <Typography component="h2" sx={{ fontWeight: 800, mb: 2, fontSize: "1.5rem" }}>
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
                    "BSP vs NPT: The Short Answer",
                    "What Is the Difference?",
                    "Why \"BSP\" Alone Is Not Enough",
                    "Threads per Inch by Size",
                    "How to Tell BSP from NPT",
                    "Seal Methods by Standard",
                    "Are BSP and NPT Compatible?",
                    "Converting BSP to NPT",
                    "Selection Checklist",
                    "Inspection Before Start-Up",
                    "Mapping to PANAM Parts",
                    "How Panam Part Codes Show the Thread",
                    "What to Tell Us for a Quote",
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
