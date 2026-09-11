import React, { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Container, Typography, Box, Breadcrumbs, Avatar, Stack, Paper, Button } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const PartnershipAnnouncementPage: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // CTA Data
  const cta = {
    heading: "Ready to optimize your systems?",
    body: "Speak with our engineering team today to discuss your specific high-pressure requirements.",
    buttonText: "Contact Our Experts",
    buttonLink: "/enquiry",
  }

  return (
    <Box sx={{ bgcolor: "#ffffff", minHeight: "100vh" }}>
      {/* SEO TAGS - HARDCODED FOR PRERENDER */}
      <title>Strategic Partnership: Panam Valves & R&G Fluid Power Group</title>
      <meta name="description" content="Panam Valves and R&G Fluid Power Group announce a new strategic partnership." />
      <link rel="canonical" href="https://www.panamvalve.com/blog/panam-valves-rg-fluid-power-partnership" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Announcing a Strategic Partnership between Panam Valves and R&G Fluid Power Group",
          description: "Panam Valves and R&G Fluid Power Group announce a new strategic partnership.",
          datePublished: "2026-03-05",
          author: {
            "@type": "Organization",
            name: "PANAM®",
          },
          publisher: {
            "@type": "Organization",
            name: "PANAM®",
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.panamvalve.com/blog/panam-valves-rg-fluid-power-partnership",
          },
        })}
      </script>

      {/* HEADER */}
      <Box sx={{ pt: { xs: 4, md: 8 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="md">
          <Breadcrumbs sx={{ mb: 4 }}>
            <Link to="/" style={{ textDecoration: "none", color: "#999", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600 }}>
              HOME
            </Link>
            <Link to="/blog" style={{ textDecoration: "none", color: "#999", fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 600 }}>
              RESOURCES
            </Link>
            <Typography sx={{ fontSize: "0.75rem", letterSpacing: "0.1em", fontWeight: 700, color: "#01B0F0" }}>NEWS</Typography>
          </Breadcrumbs>

          <Typography variant="h1" sx={{ fontWeight: 800, mb: 4, fontSize: { xs: "2.5rem", md: "4rem" }, lineHeight: 1, color: "#1A1A1A", letterSpacing: "-0.03em" }}>
            Announcing a Strategic Partnership between Panam Valves and R&G Fluid Power Group
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
            <Avatar sx={{ bgcolor: "#1A1A1A", width: 40, height: 40, fontSize: "1rem" }}>P</Avatar>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#1A1A1A" }}>
                Panam Valves
              </Typography>
              <Typography variant="caption" sx={{ color: "#777", display: "block" }}>
                March 5, 2026 • 4 min read
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* HERO IMAGE */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box component="img" src="https://pblol2.blob.core.windows.net/panam-images/about/leadership-image.jpeg" alt="Stratergic Partnership Image" sx={{ width: "100%", height: { xs: 300, md: 550 }, objectFit: "cover", borderRadius: "4px", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }} />
      </Container>

      {/* BODY CONTENT */}
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.15rem", color: "#333" }}>
              We are pleased to announce a new strategic partnership between Panam Valves and R&G Fluid Power Group. Through this collaboration, Panam Valves will supply its Instrumentation Fittings Product to R&G Fluid Power Group, enhancing their portfolio with proven, high-performance solutions engineered for demanding industrial applications.
            </Typography>

            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              R&G Fluid Power Group – Company Background
            </Typography>

            <Box sx={{ mb: 6, display: "flow-root" }}>
              
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: "1.15rem", color: "#333" }}>
                R&G Fluid Power Group is a group of UK based businesses with four divisions of expertise: Industrial, Hydraulics, Gaskets and Sealing, and Engineering. The hydraulics Division is made up of 8 hydraulic companies. Established for more than 50 years, R&G are now one of the largest specialists in the UK.
              </Typography>
            </Box>

            <Typography variant="h4" sx={{ mt: 6, mb: 3, fontWeight: 700, color: "#000", fontSize: "1.8rem" }}>
              Why R&G Has Chosen Panam Valves
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: "1.15rem", color: "#333" }}>
              Through this collaboration, R&G gains access to a high-quality, trusted range of precision-engineered valves from a well-established and reputable manufacturer. Key benefits include:
            </Typography>

            <Box component="ul" sx={{ mb: 6, pl: 2, listStyle: "none" }}>
              {["High-performance hose products proven in demanding industrial applications", "A dependable supply partner committed to consistent, long-term delivery", "Enhanced system capability through integrated solutions", "Strengthened technical credibility for complex systems"].map((item, i) => (
                <Box component="li" key={i} sx={{ display: "flex", mb: 2 }}>
                  <Box sx={{ color: "#01B0F0", mr: 2, fontWeight: "bold" }}>—</Box>
                  <Typography sx={{ fontSize: "1.1rem", color: "#444" }}>{item}</Typography>
                </Box>
              ))}
            </Box>

            {/* QUOTE */}
            <Box sx={{ my: 8, pl: 4, borderLeft: "4px solid #01B0F0" }}>
              <Typography variant="h4" sx={{ fontStyle: "italic", color: "#01B0F0", fontSize: "1.8rem" }}>
                "We are excited for the future of this collaboration and what it will bring!"
              </Typography>
            </Box>

            {/* CTA */}
            <Paper elevation={0} sx={{ mt: 10, p: { xs: 4, md: 6 }, bgcolor: "#F8F9FA", border: "1px solid #ECEEF0", borderRadius: "8px" }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                {cta.heading}
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
                {cta.body}
              </Typography>
              <Button variant="contained" onClick={() => navigate(cta.buttonLink)} endIcon={<ArrowForwardIcon />} sx={{ bgcolor: "#01B0F0", color: "white", px: 4, py: 1.5, borderRadius: "4px", fontWeight: 700 }}>
                {cta.buttonText}
              </Button>
            </Paper>
          </Grid>

          {/* SIDEBAR */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: "sticky", top: 40 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 800 }}>
                Key Takeaways
              </Typography>
              <Stack spacing={2}>
                {["Panam Valves joins R&G's trusted distribution network", "50+ years of hydraulic expertise behind the partnership", "Integrated solutions for high-pressure applications"].map(text => (
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

export default PartnershipAnnouncementPage
