import { Box, Container, Grid, Typography } from "@mui/material"
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined"
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined"
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined"
import ScrollReveal from "../../Common/ScrollReveal"
import { SectionHeader } from "../../Landing2/homeStyles"
import { C, cardHoverSx, cardSx, sectionSx } from "../../Landing2/homeTokens"

const pillarData = [
  {
    title: "Sustainability",
    icon: <EnergySavingsLeafOutlinedIcon />,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    description: "Learn how we keep business practices sustainable for ourselves and our customers.",
  },
  {
    title: "Our Leadership",
    icon: <GroupsOutlinedIcon />,
    image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/about/leadership-image.jpeg",
    description: "Our team of strong and diverse leaders guides Panam Valves in our world's dynamic environment.",
  },
  {
    title: "Global Mission",
    icon: <PublicOutlinedIcon />,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800",
    description: "Join a team of passionate innovators dedicated to making the world a better place.",
  },
]

const CorporatePillars = () => (
  <Box component="section" sx={sectionSx("surface")}>
    <Container maxWidth="lg">
      <ScrollReveal>
        <SectionHeader align="center" eyebrow="Our Foundation" title="The Pillars of Our Excellence" subtitle="At Panam Valves, our growth is rooted in a steadfast commitment to environmental responsibility, visionary leadership, and a shared global mission to deliver engineering solutions that withstand the test of time." />
      </ScrollReveal>

      <Grid container spacing={3}>
        {pillarData.map((item, i) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
            <ScrollReveal delay={i * 0.1}>
              <Box sx={{ ...cardSx, ...cardHoverSx, height: "100%", overflow: "hidden", "&:hover img": { transform: "scale(1.06)" } }}>
                <Box sx={{ position: "relative", aspectRatio: "16 / 11", overflow: "hidden" }}>
                  <Box component="img" src={item.image} alt={item.title} loading="lazy" sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }} />
                  <Box aria-hidden sx={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,34,54,0) 50%, rgba(15,34,54,0.35) 100%)" }} />
                </Box>
                <Box sx={{ position: "relative", p: { xs: 3, md: 3.5 }, pt: { xs: 4.5, md: 5 } }}>
                  <Box sx={{ position: "absolute", top: -26, left: { xs: 24, md: 28 }, width: 52, height: 52, borderRadius: "14px", bgcolor: C.white, color: C.brand, display: "grid", placeItems: "center", boxShadow: "0 8px 20px rgba(15,34,54,0.12)", border: `1px solid ${C.border}` }}>{item.icon}</Box>
                  <Typography component="h3" sx={{ fontWeight: 800, color: C.ink, fontSize: "1.35rem", letterSpacing: "-0.015em", mb: 1.25 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: C.muted, fontSize: "0.98rem", lineHeight: 1.7 }}>{item.description}</Typography>
                </Box>
              </Box>
            </ScrollReveal>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
)

export default CorporatePillars
