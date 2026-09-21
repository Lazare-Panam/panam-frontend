import { Link as RouterLink, useLocation } from "react-router-dom"
import { Box, Button, Container, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { sectionForPath } from "../../productRoutes"

// Small "can't find what you need?" prompt shown on product & category pages. It deep-links to the
// section's crawlable product index (/product-index/<slug>), giving users a browsable directory and
// crawlers an extra internal path to every SKU in the section — without cluttering the page itself.
const BrowseSectionButton = () => {
  const { pathname } = useLocation()
  const section = sectionForPath(pathname)
  if (!section) return null

  return (
    <Box component="section" sx={{ bgcolor: "#fafafa", borderTop: "1px solid #ececec", py: { xs: 3, md: 4 } }}>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 1.5, textAlign: "center" }}
      >
        <Typography sx={{ color: "text.secondary", fontSize: "0.95rem" }}>
          Can't find what you're looking for?
        </Typography>
        <Button
          component={RouterLink}
          to={section.base}
          variant="outlined"
          size="small"
          startIcon={<SearchIcon />}
          sx={{ textTransform: "none", fontWeight: 700 }}
        >
          Browse all {section.label}
        </Button>
      </Container>
    </Box>
  )
}

export default BrowseSectionButton
