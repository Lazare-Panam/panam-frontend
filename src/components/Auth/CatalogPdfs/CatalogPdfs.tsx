import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Box, Typography, CircularProgress, Stack, TextField, InputAdornment, ButtonBase, Button } from "@mui/material"

import Grid from "@mui/material/Grid"
import { PictureAsPdf as PdfIcon, OpenInNew as OpenIcon, Search as SearchIcon } from "@mui/icons-material"
import { getallCatalogPdfs } from "../../../api/productApi"

const BRAND_BLUE = "#01B0F0"
const TEXT_MAIN = "#1a1a1a"
const BORDER_COLOR = "#E2E8F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const CATEGORIES = ["All", "Fittings", "Valves", "Manifolds", "Others"] as const
type Category = (typeof CATEGORIES)[number]

// Bucket a catalog by its backend `category` if present, otherwise by keywords in its title.
const classifyCatalog = (catalog: any): Exclude<Category, "All"> => {
  const text = `${catalog.category ?? ""} ${catalog.title ?? ""}`.toLowerCase()
  if (text.includes("manifold")) return "Manifolds"
  if (text.includes("fitting")) return "Fittings"
  if (text.includes("valve")) return "Valves"
  return "Others"
}

const CatalogPdfs = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const {
    data: catalogs,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["catalogs"],
    queryFn: getallCatalogPdfs,
    staleTime: 1000 * 60 * 10,
  })

  const filteredCatalogs = catalogs?.filter(
    (catalog: any) =>
      catalog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeCategory === "All" || classifyCatalog(catalog) === activeCategory),
  )

  const header = (
    <Box
      sx={{
        mb: 6,
        display: "flex",
        flexDirection: "column",
        borderLeft: `6px solid ${BRAND_BLUE}`,
        pl: 3,
      }}>
      <Typography component="h1" variant="h3" sx={{ fontWeight: 900, color: BRAND_BLUE, fontSize: "2.25rem", letterSpacing: -1, fontFamily: PRIMARY_FONT }}>
        PRODUCT CATALOGS
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, fontFamily: PRIMARY_FONT }}>
        CENTRALIZED TECHNICAL DOCUMENTATION
      </Typography>
    </Box>
  )

  // The prerendered HTML is captured in this loading state (the catalog list comes from the API),
  // so it must still carry the page's <h1> — otherwise crawlers report "H1 tag missing".
  if (isLoading) {
    return (
      <Box sx={{ px: { xs: 2, sm: 3 }, py: { xs: 3, md: 8 }, maxWidth: { xs: 1200, xl: 1536 }, boxSizing: "border-box", margin: "0 auto" }}>
        <title>Product Catalogs & Technical PDFs | Panam Valves</title>
        <meta name="description" content="Download Panam Valves product catalogs and technical datasheets for high pressure valves, fittings, manifolds and filters." />
        <meta name="robots" content="index, follow" />
        {header}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh" }}>
          <CircularProgress sx={{ color: BRAND_BLUE }} />
        </Box>
      </Box>
    )
  }

  if (isError) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography color="error">Failed to load technical catalogs. Please contact support.</Typography>
      </Box>
    )
  }

  return (
    <>
    <title>Product Catalogs | Panam Valve</title>
      <meta name="description" content="Access Panam Valve's full range of technical product catalogs and engineering documentation. Registered partners get full access to high-resolution PDFs." />
      <link rel="canonical" href="https://www.panamvalve.com/catalogPdfs" />
      <meta property="og:title" content="Product Catalogs | Panam Valve" />
      <meta property="og:description" content="Technical catalogs and engineering specs for Panam Valve's full product range." />
      <meta property="og:url" content="https://www.panamvalve.com/catalogPdfs" />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Product Catalogs | Panam Valve",
          description: "Access Panam Valve's full range of technical product catalogs and engineering documentation. Registered partners get full access to high-resolution PDFs.",
          ...(catalogs && catalogs.length > 0
            ? {
                mainEntity: {
                  "@type": "ItemList",
                  itemListElement: catalogs.map((catalog: any, i: number) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: catalog.title,
                    url: catalog.blobUrl,
                  })),
                },
              }
            : {}),
        })}
      </script>
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", pb: 10, position: "relative" }}>
      <Box sx={{ px: { xs: 2, sm: 3 }, py: { xs: 3, md: 8 }, maxWidth: { xs: 1200, xl: 1536 }, boxSizing: "border-box", margin: "0 auto" }}>
        {/* Header Section */}
        {header}

        {/* Search Input */}
        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            placeholder="FILTER BY CATALOG TITLE..."
            variant="outlined"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: BRAND_BLUE }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 0,
                  fontFamily: PRIMARY_FONT,
                  fontWeight: 700,
                  "& fieldset": { borderColor: BORDER_COLOR, borderWidth: "2px" },
                  "&:hover fieldset": { borderColor: BRAND_BLUE },
                  "&.Mui-focused fieldset": { borderColor: BRAND_BLUE },
                },
              },
            }}
          />
        </Box>

        {/* Category Filter Buttons */}
        <Stack direction="row" spacing={1.5} sx={{ mb: 6, flexWrap: "wrap", gap: 1.5 }}>
          {CATEGORIES.map(category => {
            const isActive = activeCategory === category
            return (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={isActive ? "contained" : "outlined"}
                sx={{
                  borderRadius: 0,
                  fontWeight: 800,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  boxShadow: "none",
                  borderWidth: "2px",
                  px: 3,
                  bgcolor: isActive ? BRAND_BLUE : "transparent",
                  color: isActive ? "#fff" : BRAND_BLUE,
                  borderColor: BRAND_BLUE,
                  "&:hover": {
                    borderWidth: "2px",
                    bgcolor: isActive ? "#0088BA" : "rgba(1,176,240,0.08)",
                    borderColor: BRAND_BLUE,
                    boxShadow: "none",
                  },
                }}>
                {category}
              </Button>
            )
          })}
        </Stack>

        {/* Main Content Area */}
        <Box sx={{ position: "relative" }}>
          {/* Blurred Catalog Grid */}
          <Grid
            container
            spacing={4}
            sx={{
              filter: "none",
              pointerEvents: "auto",
              transition: "filter 0.4s ease",
            }}>
            {filteredCatalogs?.length > 0 ? (
              filteredCatalogs.map((catalog: any) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={catalog.id}>
                  <ButtonBase
                    component="a"
                    href={catalog.blobUrl}
                    target="_blank"
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      textAlign: "left",
                      gap: 2,
                      p: 3,
                      borderRadius: 0,
                      border: `1px solid ${BORDER_COLOR}`,
                      bgcolor: "#fff",
                      transition: "0.2s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: `8px 8px 0px ${BORDER_COLOR}`,
                        borderColor: BRAND_BLUE,
                      },
                    }}>
                    <Box sx={{ flexShrink: 0, bgcolor: BRAND_BLUE, color: "#fff", width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <PdfIcon />
                    </Box>
                    <Typography variant="subtitle1" sx={{ flexGrow: 1, fontWeight: 800, color: TEXT_MAIN, textTransform: "uppercase", lineHeight: 1.3 }}>
                      {catalog.title}
                    </Typography>
                    <OpenIcon sx={{ flexShrink: 0, color: BRAND_BLUE }} />
                  </ButtonBase>
                </Grid>
              ))
            ) : (
              <Box sx={{ width: "100%", py: 10, textAlign: "center" }}>
                <Typography sx={{ fontWeight: 700, color: "text.disabled" }}>NO CATALOGS FOUND</Typography>
              </Box>
            )}
          </Grid>
        </Box>

        {/* Brand Footer Info */}
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 10, opacity: 0.7 }}>
          <Box sx={{ width: 8, height: 8, bgcolor: BRAND_BLUE, borderRadius: "50%" }} />
          <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 900, letterSpacing: 1.5, textTransform: "uppercase" }}>
            Panam Cloud System / Secure Technical Distribution / 2026.03
          </Typography>
        </Stack>
      </Box>
    </Box>
    </>
    
  )
}

export default CatalogPdfs
