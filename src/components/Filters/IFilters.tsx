import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { PIFSidebar } from "./components/PIFSidebar"
import PIFTable from "./components/PIFTable"
import { PIFActiveFilters } from "./components/PIFActiveFilters"
import { PIF_FILTERS_DATA } from "./hooks/pifData"
import {
  type PIFFilters, EMPTY_PIF_FILTERS, PIF_SERIES_DESCRIPTION, THREAD_SIZE_SORT_ORDER,
} from "./hooks/types2"

const BRAND_BLUE = "#01B0F0"

export default function PIFFiltersPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<PIFFilters>(EMPTY_PIF_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const seriesOptions = useMemo(
    () => Array.from(new Set(PIF_FILTERS_DATA.map(c => c.series))).sort(),
    []
  )
  const threadStandardOptions = useMemo(
    () => Array.from(new Set(PIF_FILTERS_DATA.map(c => c.threadStandard))).sort(),
    []
  )
  const threadSizeOptions = useMemo(() => {
    const present = new Set(PIF_FILTERS_DATA.map(c => c.threadSize))
    return THREAD_SIZE_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const endConnectionOptions = useMemo(
    () => Array.from(new Set(PIF_FILTERS_DATA.map(c => c.endConnection))).sort(),
    []
  )
  const filterElementOptions = useMemo(
    () => Array.from(new Set(PIF_FILTERS_DATA.map(c => c.filterElement))).sort(),
    []
  )
  const poreSizeOptions = useMemo(
    () => Array.from(new Set(PIF_FILTERS_DATA.map(c => c.poreSize))).sort((a, b) => a - b),
    []
  )

  const models = useMemo(() => {
    return PIF_FILTERS_DATA.filter(c => {
      if (filters.series.length && !filters.series.includes(c.series)) return false
      if (filters.threadStandards.length && !filters.threadStandards.includes(c.threadStandard)) return false
      if (filters.threadSizes.length && !filters.threadSizes.includes(c.threadSize)) return false
      if (filters.endConnections.length && !filters.endConnections.includes(c.endConnection)) return false
      if (filters.filterElements.length && !filters.filterElements.includes(c.filterElement)) return false
      if (filters.poreSizes.length && !filters.poreSizes.includes(c.poreSize)) return false
      return true
    })
  }, [filters])

  const activeCount =
    filters.series.length +
    filters.threadStandards.length +
    filters.threadSizes.length +
    filters.endConnections.length +
    filters.filterElements.length +
    filters.poreSizes.length

  const sidebar = (
    <PIFSidebar
      filters={filters}
      setFilters={setFilters}
      seriesOptions={seriesOptions}
      threadStandardOptions={threadStandardOptions}
      threadSizeOptions={threadSizeOptions}
      endConnectionOptions={endConnectionOptions}
      filterElementOptions={filterElementOptions}
      poreSizeOptions={poreSizeOptions}
      activeCount={activeCount}
    />
  )

  return (
    <>
          <title>In-Line Filters (PIF) | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® PIF In-Line Filters — SS316, sintered and mesh elements 0.5 to 440 micron, tested to 1000 psi. Series IA, IB, IC, ID. 3mm to 12mm tube, 1/8 to 1/2 inch thread. Request a quote." />
      <meta name="keywords" content="inline filters, PIF filters, instrumentation filters, SS316 filters, sintered filter elements, high pressure filters" />
      <meta property="og:title" content="In-Line Filters (PIF) | PANAM® Instrumentation" />
      <meta property="og:description" content="Configure PANAM® PIF In-Line Filters by series, thread standard, pore size, and end connection. SS316, tested to 1000 psi." />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.panamvalve.com/filters/i-type" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: PIF_SERIES_DESCRIPTION.title,
          description: PIF_SERIES_DESCRIPTION.description,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: PIF_FILTERS_DATA.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.partNumber,
              url: `https://www.panamvalve.com/filters/i-type/${c.partNumber}`,
            })),
          },
        })}
      </script>
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
          {PIF_SERIES_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>
          {PIF_SERIES_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {PIF_SERIES_DESCRIPTION.specs.map(s => (
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

        <PIFActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "flex-start",
          border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px",
          overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          <PIFTable models={models} />
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box></>

  )
}