import { Link as RouterLink } from "react-router-dom"
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const BRAND_BLUE = "#01B0F0"

// Always-visible strip directly below the hero (outside the rotating carousel) so the searchable
// Product Index is reachable in one click from the homepage — a persistent, prerendered entry point
// to every product page (strong internal link + easy part-number lookup for visitors).
const PartNumberFinder = () => (
  <Box component="section" sx={{ bgcolor: "#0b1622", color: "white", py: { xs: 2.5, md: 3 } }}>
    <Container maxWidth="lg">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="center"
        useFlexGap
        flexWrap="wrap"
        sx={{ textAlign: "center" }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: { xs: "1rem", md: "1.1rem" } }}>
          Know the part number? Search our full product index.
        </Typography>
        <Button
          component={RouterLink}
          to="/product-index"
          variant="contained"
          disableElevation
          startIcon={<SearchIcon />}
          sx={{
            backgroundColor: BRAND_BLUE,
            px: { xs: 3, md: 4 },
            py: 1,
            fontWeight: 700,
            textTransform: "none",
            whiteSpace: "nowrap",
            "&:hover": { backgroundColor: "#0090C5" },
          }}
        >
          Find a Part Number
        </Button>
        {/* Direct entry point to the full high-pressure directory so every HP product page has an
            internal link from the homepage (fixes the orphaned HP SKUs flagged in the crawl). */}
        <Button
          component={RouterLink}
          to="/high-pressure-index"
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "rgba(255,255,255,0.5)",
            px: { xs: 3, md: 4 },
            py: 1,
            fontWeight: 700,
            textTransform: "none",
            whiteSpace: "nowrap",
            "&:hover": { borderColor: "white", backgroundColor: "rgba(255,255,255,0.08)" },
          }}
        >
          High-Pressure Index
        </Button>
        {/* Small, low-emphasis entry point to the full HTML sitemap (also linked sitewide in the
            footer) — gives every structural page an extra internal link from the homepage. */}
        <Button
          component={RouterLink}
          to="/sitemap"
          variant="text"
          size="small"
          sx={{
            color: "rgba(255,255,255,0.7)",
            fontWeight: 600,
            textTransform: "none",
            whiteSpace: "nowrap",
            "&:hover": { color: "white", backgroundColor: "transparent", textDecoration: "underline" },
          }}
        >
          Site Map
        </Button>
      </Stack>
    </Container>
  </Box>
)

export default PartNumberFinder
