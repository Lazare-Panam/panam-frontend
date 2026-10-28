import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { PSESidebar } from "./components/PSESidebar"
import PSETable from "./components/PSETable"
import { PSEActiveFilters } from "./components/PSEActiveFilters"
import { FILTER_ELEMENT_DATA } from "./hooks/filterElementData"
import {
  type FilterElementFilters, EMPTY_FILTER_ELEMENT_FILTERS, FILTER_ELEMENT_DESCRIPTION,
} from "./hooks/typesElement"

const BRAND_BLUE = "#01B0F0"

export default function PSEFiltersPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<FilterElementFilters>(EMPTY_FILTER_ELEMENT_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const sizeGroupOptions = useMemo(
    () => Array.from(new Set(FILTER_ELEMENT_DATA.map(c => c.sizeGroup))).sort(),
    []
  )
  const filterElementOptions = useMemo(
    () => Array.from(new Set(FILTER_ELEMENT_DATA.map(c => c.filterElement))).sort(),
    []
  )
  const poreSizeOptions = useMemo(
    () => Array.from(new Set(FILTER_ELEMENT_DATA.map(c => c.poreSize))).sort((a, b) => a - b),
    []
  )

  const models = useMemo(() => {
    return FILTER_ELEMENT_DATA.filter(c => {
      if (filters.sizeGroups.length && !filters.sizeGroups.includes(c.sizeGroup)) return false
      if (filters.filterElements.length && !filters.filterElements.includes(c.filterElement)) return false
      if (filters.poreSizes.length && !filters.poreSizes.includes(c.poreSize)) return false
      return true
    })
  }, [filters])

  const activeCount =
    filters.sizeGroups.length +
    filters.filterElements.length +
    filters.poreSizes.length

  const sidebar = (
    <PSESidebar
      filters={filters}
      setFilters={setFilters}
      sizeGroupOptions={sizeGroupOptions}
      filterElementOptions={filterElementOptions}
      poreSizeOptions={poreSizeOptions}
      activeCount={activeCount}
    />
  )

  return (
    <>
      <title>Replacement Filter Elements (PSE) | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® PSE replacement filter elements: SS316 sintered and mesh cartridges, 0.5 to 440 micron, for PIF In-Line and PTF T-Type housings. Request a quote." />
      <meta name="keywords" content="filter elements, replacement filter cartridge, PSE filters, sintered filter element, mesh filter element, SS316 filter cartridge" />
      <meta property="og:title" content="Replacement Filter Elements (PSE) | PANAM® Instrumentation" />
      <meta property="og:description" content="Configure PANAM® PSE Replacement Filter Elements by size group, element type, and pore size. SS316, fits PIF & PTF housings." />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.panamvalve.com/filters/elements" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: FILTER_ELEMENT_DESCRIPTION.title,
          description: FILTER_ELEMENT_DESCRIPTION.description,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: FILTER_ELEMENT_DATA.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.partNumber,
              url: `https://www.panamvalve.com/filters/elements/${c.partNumber}`,
            })),
          },
        })}
      </script>
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
          {FILTER_ELEMENT_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          {FILTER_ELEMENT_DESCRIPTION.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          {FILTER_ELEMENT_DESCRIPTION.poreCodeNote}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          {FILTER_ELEMENT_DESCRIPTION.elementCodeNote}
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          {FILTER_ELEMENT_DESCRIPTION.performanceNote}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {FILTER_ELEMENT_DESCRIPTION.specs.map(s => (
            <Box key={s} sx={{
              px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600,
              bgcolor: alpha(BRAND_BLUE, 0.08), color: "#0277BD",
              border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
            }}>
              {s}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && (
          <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
            <FilterListIcon />
          </IconButton>
        )}

        <PSEActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "flex-start",
          border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px",
          overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          <PSETable models={models} />
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box></>

  )
}
