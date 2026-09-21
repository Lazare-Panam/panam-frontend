import { Link as RouterLink } from "react-router-dom"
import { Box, Button, Container, Divider, Typography } from "@mui/material"
import { PRODUCT_GROUPS } from "../../productRoutes"

// A visible directory of every product, grouped by category. Rendered just above the footer on
// low-traffic pages (About, Industries, selected blog posts) so the many product pages pick up
// internal links from several places — not only /product-index. Server-rendered, so crawlers see
// the <a> links; genuinely visible (not hidden) to stay within search-engine guidelines.
const UsefulLinks = () => (
  <Box component="section" aria-label="Useful links" sx={{ bgcolor: "#fafafa", borderTop: "1px solid #ececec", py: { xs: 4, md: 6 } }}>
    <Container maxWidth="lg">
      <Typography component="h2" variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
        Useful Links
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 3, fontSize: "0.9rem" }}>
        Browse the full range of Panam Valves products by category.
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {PRODUCT_GROUPS.map(group => (
        <Box component="section" key={group.base} sx={{ mb: 3 }}>
          <Typography component="h3" variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
            {group.label}
          </Typography>
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
        </Box>
      ))}
    </Container>
  </Box>
)

export default UsefulLinks
