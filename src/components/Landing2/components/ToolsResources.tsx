import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import TuneIcon from "@mui/icons-material/Tune"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import VerifiedIcon from "@mui/icons-material/Verified"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const BRAND_BLUE = "#01B0F0"

const tools = [
  {
    icon: <TuneIcon fontSize="large" />,
    title: "Product Configurator",
    desc: "Build your exact valve, manifold or fitting spec online.",
    path: "/products",
  },
  {
    icon: <MenuBookIcon fontSize="large" />,
    title: "Catalog & CAD Files",
    desc: "Full product catalogue plus 2D/3D drawings for your design workflow.",
    path: "/catalogPDFs",
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: "Certifications",
    desc: "ISO 9001, 14001 and 45001, plus ATEX and CE PED for tube fittings — view our certificates.",
    path: "/certificates",
  },
]

const ToolsResources = () => {
  return (
    <Box component="section" sx={{ py: 12, bgcolor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: "center", maxWidth: 700, mx: "auto" }}>
          <Typography variant="overline" sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1.5 }}>
            Tools & Resources
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1E293B", fontSize: { xs: "2rem", md: "2.5rem" }, mt: 1 }}>
            Everything You Need, One Click Away
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {tools.map((tool, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <Stack
                component={RouterLink}
                viewTransition
                to={tool.path}
                spacing={2}
                sx={{
                  height: "100%",
                  p: 4,
                  textAlign: "center",
                  alignItems: "center",
                  textDecoration: "none",
                  bgcolor: "#F8FAFC",
                  border: "1px solid #F1F5F9",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    bgcolor: "#FFFFFF",
                    borderColor: BRAND_BLUE,
                    boxShadow: "0 15px 30px rgba(1,176,240,0.1)",
                    transform: "translateY(-6px)",
                    "& .tool-icon": { transform: "scale(1.1)", color: BRAND_BLUE },
                    "& .tool-arrow": { transform: "translateX(4px)", opacity: 1 },
                  },
                }}>
                <Box className="tool-icon" sx={{ color: "#64748B", transition: "transform 0.25s ease, color 0.25s ease" }}>
                  {tool.icon}
                </Box>
                <Typography sx={{ fontWeight: 800, color: "#1E293B", fontSize: "1.05rem" }}>{tool.title}</Typography>
                <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.6, flexGrow: 1 }}>
                  {tool.desc}
                </Typography>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Typography variant="caption" sx={{ fontWeight: 700, color: BRAND_BLUE }}>
                    Open
                  </Typography>
                  <ArrowForwardIcon
                    className="tool-arrow"
                    sx={{ fontSize: 14, color: BRAND_BLUE, opacity: 0.7, transition: "transform 0.25s ease, opacity 0.25s ease" }}
                  />
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default ToolsResources
