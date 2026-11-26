import { Link as RouterLink, useLocation } from "react-router-dom"
import { Box, Button, Container, Divider, Typography } from "@mui/material"
import { PRODUCT_GROUPS } from "../../productRoutes"

// Path-aware product directory. On a category page — where a product group's `base` equals the
// current path (e.g. /high-pressure/needle-valves, /filters/t-type) — it renders server-side links
// to every part number in that category, giving the page the crawlable SKU links its client-rendered
// grid otherwise lacks. It no longer dumps all ~2,400 links onto unrelated content pages (/about,
// /blog, industries), which bloated them; SKUs stay discoverable via /product-index, the XML sitemap
// and these contextual category links. Renders nothing when the path isn't a product category.
const UsefulLinks = () => {
  const { pathname } = useLocation()
  const cleanPath = pathname.replace(/\/+$/, "") || "/"
  const group = PRODUCT_GROUPS.find(g => g.base === cleanPath)
  if (!group) return null

  return (
    <Box component="section" aria-label={`${group.label} part numbers`} sx={{ bgcolor: "#fafafa", borderTop: "1px solid #ececec", py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Typography component="h2" variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
          Browse all {group.label} part numbers
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 3, fontSize: "0.9rem" }}>
          Jump straight to the specification page for any part number in this range.
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {group.partNumbers.map(partNumber => (
            <Button
              key={partNumber}
              component={RouterLink}
              to={`${group.base}/${partNumber}`}
              variant="outlined"
              size="small"
              sx={{ textTransform: "none" }}
            >
              {partNumber}
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default UsefulLinks
