import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material"
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined"
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined"
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined"
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined"
import { Link as RouterLink } from "react-router-dom"
import { C, RADIUS, btn, cardSx, cardHoverSx, sectionSx } from "../homeTokens"
import { Eyebrow } from "../homeStyles"

const docs = [
  { icon: <LibraryBooksOutlinedIcon />, title: "Catalog Library", desc: "Full product catalogue with specifications" },
  { icon: <DesignServicesOutlinedIcon />, title: "2D/3D Drawings", desc: "CAD files for all standard products" },
  { icon: <ViewInArOutlinedIcon />, title: "CAD Files", desc: "Ready for direct import into your design workflow" },
  { icon: <VerifiedOutlinedIcon />, title: "QMS Certifications", desc: "Quality management system documentation" },
]

const TechnicalSupport = () => {
  return (
    <Box component="section" id="technical" sx={sectionSx("white")}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Eyebrow>Technical Support</Eyebrow>
            <Typography
              variant="h2"
              sx={{ mt: 2, mb: 2.5, fontWeight: 800, color: C.ink, fontSize: { xs: "2.2rem", md: "2.9rem" }, lineHeight: 1.08, letterSpacing: "-0.03em" }}>
              Technical Docs
              <br />
              <Box component="span" sx={{ color: C.brand }}>
                You Need
              </Box>
            </Typography>
            <Typography sx={{ color: C.muted, mb: 4, lineHeight: 1.75, fontSize: "1.03rem" }}>
              Full technical documentation available on every order. We provide the technical support your procurement and design teams need to move fast.
            </Typography>
            <Button component={RouterLink} viewTransition to="/catalogPDFs" sx={{ ...btn.primary, py: 1.5, px: 3.5 }}>
              Request Technical Documents
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2}>
              {docs.map(doc => (
                <Grid size={{ xs: 12, sm: 6 }} key={doc.title}>
                  <Stack spacing={1.75} sx={{ ...cardSx, ...cardHoverSx, p: 3, height: "100%", "&:hover .doc-icon": { bgcolor: C.brand, color: C.white } }}>
                    <Box className="doc-icon" sx={{ width: 46, height: 46, borderRadius: RADIUS.button, bgcolor: C.brandTint, color: C.brandDark, display: "grid", placeItems: "center", transition: "all 0.25s ease", "& svg": { fontSize: 24 } }}>
                      {doc.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: C.ink, fontSize: "1.02rem" }}>{doc.title}</Typography>
                      <Typography sx={{ color: C.muted, fontSize: "0.9rem", lineHeight: 1.55, mt: 0.5 }}>{doc.desc}</Typography>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default TechnicalSupport
