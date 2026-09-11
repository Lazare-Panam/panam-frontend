import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { ManifoldSidebar, type AvailableCounts } from "./components/ManifoldSidebar"
import ManifoldTable from "./components/ManifoldTable"
import { ManifoldActiveFilters } from "./components/ManifoldActiveFilters"
import { MANIFOLDS_DATA } from "./hooks/manifoldData"
import {
  type ManifoldFilters, EMPTY_MANIFOLD_FILTERS, MANIFOLD_DESCRIPTION, CONNECTION_SIZE_SORT_ORDER,
} from "./hooks/types"
import { type ManifoldDTO } from "./hooks/types"

const BRAND_BLUE = "#01B0F0"
const MATERIAL_ORDER = ['SS', 'CS', 'MO', 'HC', 'DSS', 'SDSS', '6MO', 'INC625', 'INC825']

// Helper: filter the dataset using a subset of filter groups.
// Used to compute "what's still available" per group, ignoring that group's own selections.
function applyFilters(data: ManifoldDTO[], filters: ManifoldFilters, exclude: keyof ManifoldFilters): ManifoldDTO[] {
  return data.filter(c => {
    if (exclude !== 'materials' && filters.materials.length && !filters.materials.includes(c.material)) return false
    if (exclude !== 'connectionSizes' && filters.connectionSizes.length && !filters.connectionSizes.includes(c.connectionSize)) return false
    if (exclude !== 'connectionTypes' && filters.connectionTypes.length && !filters.connectionTypes.includes(c.connectionType)) return false
    if (exclude !== 'mountings' && filters.mountings.length && !filters.mountings.includes(c.mounting)) return false
    if (exclude !== 'configurations' && filters.configurations.length && !filters.configurations.includes(c.configuration)) return false
    if (exclude !== 'maxPressures' && filters.maxPressures.length && !filters.maxPressures.includes(c.maxPressure)) return false
    if (exclude !== 'specialServices' && filters.specialServices.length && !filters.specialServices.some(s => c.specialService.includes(s))) return false
    return true
  })
}

function countBy<T>(items: T[], keyFn: (item: T) => string | string[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const keys = keyFn(item)
    const arr = Array.isArray(keys) ? keys : [keys]
    for (const k of arr) {
      counts[k] = (counts[k] ?? 0) + 1
    }
  }
  return counts
}

export default function TwoVMManifoldsPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<ManifoldFilters>(EMPTY_MANIFOLD_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Static option lists (all options that exist in the catalog, in display order)
  const materialOptions = useMemo(() => {
    const present = new Set(MANIFOLDS_DATA.map(c => c.material))
    return MATERIAL_ORDER.filter(m => present.has(m as any))
  }, [])

  const connectionSizeOptions = useMemo(() => {
    const present = new Set(MANIFOLDS_DATA.map(c => c.connectionSize))
    return CONNECTION_SIZE_SORT_ORDER.filter(s => present.has(s))
  }, [])

  const connectionTypeOptions = useMemo(
    () => Array.from(new Set(MANIFOLDS_DATA.map(c => c.connectionType))).sort(),
    []
  )
  const mountingOptions = useMemo(
    () => Array.from(new Set(MANIFOLDS_DATA.map(c => c.mounting))).sort(),
    []
  )
  const configurationOptions = useMemo(
    () => Array.from(new Set(MANIFOLDS_DATA.map(c => c.configuration))).sort(),
    []
  )
  const maxPressureOptions = useMemo(
    () => Array.from(new Set(MANIFOLDS_DATA.map(c => c.maxPressure))).sort(),
    []
  )
  const specialServiceOptions = useMemo(
    () => Array.from(new Set(MANIFOLDS_DATA.flatMap(c => c.specialService))).sort(),
    []
  )

  // The actual filtered result (all filters applied)
  const models = useMemo(() => applyFilters(MANIFOLDS_DATA, filters, '' as any), [filters])

  // Smart filter counts — for each group, count using all OTHER groups' filters
  const availableCounts = useMemo<AvailableCounts>(() => {
    const materialsData = applyFilters(MANIFOLDS_DATA, filters, 'materials')
    const connectionSizesData = applyFilters(MANIFOLDS_DATA, filters, 'connectionSizes')
    const connectionTypesData = applyFilters(MANIFOLDS_DATA, filters, 'connectionTypes')
    const mountingsData = applyFilters(MANIFOLDS_DATA, filters, 'mountings')
    const configurationsData = applyFilters(MANIFOLDS_DATA, filters, 'configurations')
    const maxPressuresData = applyFilters(MANIFOLDS_DATA, filters, 'maxPressures')
    const specialServicesData = applyFilters(MANIFOLDS_DATA, filters, 'specialServices')

    return {
      materials: countBy(materialsData, c => c.material),
      connectionSizes: countBy(connectionSizesData, c => c.connectionSize),
      connectionTypes: countBy(connectionTypesData, c => c.connectionType),
      mountings: countBy(mountingsData, c => c.mounting),
      configurations: countBy(configurationsData, c => c.configuration),
      maxPressures: countBy(maxPressuresData, c => c.maxPressure),
      specialServices: countBy(specialServicesData, c => c.specialService.length ? c.specialService : ['__none__']),
    }
  }, [filters])

  const activeCount =
    filters.materials.length +
    filters.connectionSizes.length +
    filters.connectionTypes.length +
    filters.mountings.length +
    filters.configurations.length +
    filters.maxPressures.length +
    filters.specialServices.length

  const sidebar = (
    <ManifoldSidebar
      filters={filters}
      setFilters={setFilters}
      materialOptions={materialOptions}
      connectionSizeOptions={connectionSizeOptions}
      connectionTypeOptions={connectionTypeOptions}
      mountingOptions={mountingOptions}
      configurationOptions={configurationOptions}
      maxPressureOptions={maxPressureOptions}
      specialServiceOptions={specialServiceOptions}
      availableCounts={availableCounts}
      activeCount={activeCount}
    />
  )

  return (
    <>
          <title>2-Valve Manifolds | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® 2-Valve Manifolds — SS316, CS, Monel, Hastelloy, Duplex and Super Duplex. Multiple connection types, mountings, and configurations. NACE MR-0175 and fire-safe options. Request a quote." />
      <meta name="keywords" content="2 valve manifold, two valve manifold, instrument manifold, SS316 manifold, NACE manifold, DP transmitter manifold" />
      <meta property="og:title" content="2-Valve Manifolds | PANAM® Instrumentation" />
      <meta property="og:description" content="Configure PANAM® 2-Valve Manifolds by material, connection type, mounting, and special service." />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.panamvalve.com/manifolds/2VM" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: MANIFOLD_DESCRIPTION.title,
          description: MANIFOLD_DESCRIPTION.description,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: MANIFOLDS_DATA.map((m, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `Panam 2-Valve Manifold — ${m.partNumber}`,
              url: `https://www.panamvalve.com/manifolds/2VM/${m.partNumber}`,
            })),
          },
        })}
      </script>
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
          {MANIFOLD_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 750 }}>
          {MANIFOLD_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {MANIFOLD_DESCRIPTION.specs.map(s => (
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

        <ManifoldActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "flex-start",
          border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px",
          overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          <ManifoldTable models={models} />
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box></>

  )
}