import { Link as RouterLink } from "react-router-dom"
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import ScrollReveal from "../../Common/ScrollReveal"
import { SectionHeader } from "../../Landing2/homeStyles"
import { C, SHADOW, btn, sectionSx } from "../../Landing2/homeTokens"

const FEATURES = [
  {
    eyebrow: "01",
    title: "Mission & Vision",
    body: "Industry leaders are looking to Panam as a trusted partner that continuously innovates to help them meet the next big challenge. We leverage our global presence, domain expertise and industrial software to help industries achieve key sustainability and operational goals.",
    cta: "Find Information About Panam",
    to: "/resources",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/about/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
    alt: "Panam Headquarters",
  },
  {
    eyebrow: "02",
    title: "Manufacturing Excellence",
    body: "At the heart of Panam lies a commitment to precision. Our manufacturing facilities utilize state-of-the-art automation and rigorous quality control to ensure every solution meets the highest international standards.",
    cta: "Explore Our Facilities",
    to: "/industries",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/about/FACTORY-PHOTO-OPTION-1-JPEG.jpg",
    alt: "Manufacturing Excellence",
  },
  {
    eyebrow: "03",
    title: "Quality Control",
    body: "Our approach to quality, under an ISO 9001 certified management system, is built around valves that perform reliably in demanding environments and support safety and efficiency in your critical operations.",
    cta: "Our Certifications",
    to: "/certificates",
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/about/battlecreek-coffee-roasters-JUPPTsfCuiQ-unsplash.jpg",
    alt: "Quality Control",
  },
]

// Alternating image/text rows; the image side flips each row on desktop, text always comes first on phones.
const BusinessOverview = () => (
  <Box component="section" sx={sectionSx("white")}>
    <Container maxWidth="lg">
      <ScrollReveal>
        <SectionHeader align="center" eyebrow="Who we are" title="Our Business" subtitle="Panam Valves' industry-leading portfolio enables us to identify and confront the challenges of an increasingly complex and unpredictable marketplace from a position of strength." />
      </ScrollReveal>

      <Stack spacing={{ xs: 8, md: 12 }}>
        {FEATURES.map((f, i) => {
          const imageFirst = i % 2 === 1
          return (
            <ScrollReveal key={f.title}>
              <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: imageFirst ? 2 : 1 }}>
                  <Stack spacing={2.5}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Typography sx={{ fontWeight: 800, fontSize: "0.85rem", color: C.brand, letterSpacing: "0.08em" }}>{f.eyebrow}</Typography>
                      <Box sx={{ width: 40, height: 2, borderRadius: 1, bgcolor: C.brand, opacity: 0.4 }} />
                    </Stack>
                    <Typography component="h3" sx={{ fontWeight: 800, color: C.ink, letterSpacing: "-0.025em", lineHeight: 1.15, fontSize: { xs: "1.8rem", md: "2.3rem" } }}>
                      {f.title}
                    </Typography>
                    <Typography sx={{ color: C.muted, fontSize: { xs: "1rem", md: "1.08rem" }, lineHeight: 1.8 }}>{f.body}</Typography>
                    <Box sx={{ pt: 1 }}>
                      <Button component={RouterLink} viewTransition to={f.to} endIcon={<ArrowForwardRoundedIcon />} sx={{ ...btn.secondary, "& .MuiButton-endIcon": { transition: "transform 0.2s ease" }, "&:hover .MuiButton-endIcon": { transform: "translateX(3px)" } }}>
                        {f.cta}
                      </Button>
                    </Box>
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: imageFirst ? 1 : 2 }}>
                  <Box sx={{ position: "relative" }}>
                    <Box sx={{ position: "relative", borderRadius: "24px", overflow: "hidden", boxShadow: SHADOW.hover, aspectRatio: "4 / 3", "&:hover img": { transform: "scale(1.04)" } }}>
                      <Box component="img" src={f.image} alt={f.alt} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }} />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </ScrollReveal>
          )
        })}
      </Stack>
    </Container>
  </Box>
)

export default BusinessOverview
