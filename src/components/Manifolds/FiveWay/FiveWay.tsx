import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { Manifold5VMSidebar, type AvailableCounts5VM } from "./components/Manifold5vmsidebar"
import { MANIFOLDS_5VM_DATA } from "./hooks/Manifold5vmdata"
import { Manifold5VMActiveFilters } from "./components/Manifold5VMactivefilters"
import Manifold5VMTable from "./components/Manifold5vmtable"
import {
  type Manifold5VMFilters, type Manifold5VMDTO,
  EMPTY_5VM_FILTERS, MANIFOLD_5VM_DESCRIPTION,
  CONNECTION_SIZE_SORT_ORDER_5VM, DRAIN_HOLE_SORT_ORDER_5VM,
} from "./hooks/types"

const BRAND_BLUE = "#01B0F0"

function applyFilters(data: Manifold5VMDTO[], filters: Manifold5VMFilters, exclude: keyof Manifold5VMFilters | ''): Manifold5VMDTO[] {
  return data.filter(c => {
    if (exclude !== 'materials' && filters.materials.length && !filters.materials.includes(c.material)) return false
    if (exclude !== 'connectionSizes' && filters.connectionSizes.length && !filters.connectionSizes.includes(c.connectionSize)) return false
    if (exclude !== 'connectionTypes' && filters.connectionTypes.length && !filters.connectionTypes.includes(c.connectionType)) return false
    if (exclude !== 'mountings' && filters.mountings.length && !filters.mountings.includes(c.mounting)) return false
    if (exclude !== 'drainHoleSizes' && filters.drainHoleSizes.length && !filters.drainHoleSizes.includes(c.drainHoleSize)) return false
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

export default function Manifolds5VMPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<Manifold5VMFilters>(EMPTY_5VM_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const materialOptions = useMemo(
    () => Array.from(new Set(MANIFOLDS_5VM_DATA.map(c => c.material))).sort(),
    []
  )
  const connectionSizeOptions = useMemo(() => {
    const present = new Set(MANIFOLDS_5VM_DATA.map(c => c.connectionSize))
    return CONNECTION_SIZE_SORT_ORDER_5VM.filter(s => present.has(s))
  }, [])

  const connectionTypeOptions = useMemo(
    () => Array.from(new Set(MANIFOLDS_5VM_DATA.map(c => c.connectionType))).sort(),
    []
  )
  const mountingOptions = useMemo(
    () => Array.from(new Set(MANIFOLDS_5VM_DATA.map(c => c.mounting))).sort(),
    []
  )
  const drainHoleSizeOptions = useMemo(() => {
    const present = new Set(MANIFOLDS_5VM_DATA.map(c => c.drainHoleSize))
    return DRAIN_HOLE_SORT_ORDER_5VM.filter(s => present.has(s))
  }, [])
  const maxPressureOptions = useMemo(
    () => Array.from(new Set(MANIFOLDS_5VM_DATA.map(c => c.maxPressure))).sort(),
    []
  )
  const specialServiceOptions = useMemo(
    () => Array.from(new Set(MANIFOLDS_5VM_DATA.flatMap(c => c.specialService))).sort(),
    []
  )

  const models = useMemo(() => applyFilters(MANIFOLDS_5VM_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCounts5VM>(() => ({
    materials: countBy(applyFilters(MANIFOLDS_5VM_DATA, filters, 'materials'), c => c.material),
    connectionSizes: countBy(applyFilters(MANIFOLDS_5VM_DATA, filters, 'connectionSizes'), c => c.connectionSize),
    connectionTypes: countBy(applyFilters(MANIFOLDS_5VM_DATA, filters, 'connectionTypes'), c => c.connectionType),
    mountings: countBy(applyFilters(MANIFOLDS_5VM_DATA, filters, 'mountings'), c => c.mounting),
    drainHoleSizes: countBy(applyFilters(MANIFOLDS_5VM_DATA, filters, 'drainHoleSizes'), c => c.drainHoleSize),
    maxPressures: countBy(applyFilters(MANIFOLDS_5VM_DATA, filters, 'maxPressures'), c => c.maxPressure),
    specialServices: countBy(applyFilters(MANIFOLDS_5VM_DATA, filters, 'specialServices'), c => c.specialService.length ? c.specialService : []),
  }), [filters])

  const activeCount =
    filters.materials.length +
    filters.connectionSizes.length +
    filters.connectionTypes.length +
    filters.mountings.length +
    filters.drainHoleSizes.length +
    filters.maxPressures.length +
    filters.specialServices.length

  const sidebar = (
    <Manifold5VMSidebar
      filters={filters}
      setFilters={setFilters}
      materialOptions={materialOptions}
      connectionSizeOptions={connectionSizeOptions}
      connectionTypeOptions={connectionTypeOptions}
      mountingOptions={mountingOptions}
      drainHoleSizeOptions={drainHoleSizeOptions}
      maxPressureOptions={maxPressureOptions}
      specialServiceOptions={specialServiceOptions}
      availableCounts={availableCounts}
      activeCount={activeCount}
    />
  )

  return (
    <>
          <title>5-Valve Manifolds | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® 5-Valve Manifolds — multiple connection types, mountings, and drain hole sizes. NACE MR-0175 and fire-safe options available. Configure and request a quote within 24 hours." />
      <meta name="keywords" content="5 valve manifold, five valve manifold, instrument manifold, DP transmitter manifold, NACE manifold, SS316 manifold" />
      <meta property="og:title" content="5-Valve Manifolds | PANAM® Instrumentation" />
      <meta property="og:description" content="Configure PANAM® 5-Valve Manifolds by connection type, mounting, drain hole size, and special service." />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.panamvalve.com/manifolds/5VM" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: MANIFOLD_5VM_DESCRIPTION.title,
          description: MANIFOLD_5VM_DESCRIPTION.description,
          brand: { "@type": "Brand", name: "PANAM" },
          category: "Instrumentation Valve Manifolds",
          additionalProperty: MANIFOLD_5VM_DESCRIPTION.specs.map(s => ({
            "@type": "PropertyValue",
            name: "Specification",
            value: s,
          })),
        })}
      </script>
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
          {MANIFOLD_5VM_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 750 }}>
          {MANIFOLD_5VM_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {MANIFOLD_5VM_DESCRIPTION.specs.map(s => (
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

        <Manifold5VMActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "flex-start",
          border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px",
          overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          <Manifold5VMTable models={models} />
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box>
    </>

  )
}