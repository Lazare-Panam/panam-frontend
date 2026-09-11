import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { PXPSidebar, type AvailableCountsPXP } from "./components/PXPSidebar"
import PXPTable from "./components/PXPTable"
import { PXPActiveFilters } from "./components/PXPActiveFilters"
import { PXP_DBB_VALVES_DATA } from "./hooks/pxpDbbValveData"
import {
  type PXPValveFilters, type PXPValveDTO,
  EMPTY_PXP_FILTERS, PXP_DESCRIPTION,
  PXP_BORE_SIZE_SORT_ORDER, PXP_INLET_SIZE_SORT_ORDER,
  PXP_INLET_TYPE_SORT_ORDER, PXP_OUTLET_SORT_ORDER, PXP_VENT_SORT_ORDER,
} from "./hooks/pxpTypes"

const BRAND_BLUE = "#01B0F0"

function applyFilters(data: PXPValveDTO[], filters: PXPValveFilters, exclude: keyof PXPValveFilters | ''): PXPValveDTO[] {
  return data.filter(c => {
    if (exclude !== 'configurations' && filters.configurations.length && !filters.configurations.includes(c.configuration)) return false
    if (exclude !== 'sealMaterials' && filters.sealMaterials.length && !filters.sealMaterials.includes(c.sealMaterial)) return false
    if (exclude !== 'seatMaterials' && filters.seatMaterials.length && !filters.seatMaterials.includes(c.seatMaterial)) return false
    if (exclude !== 'boreSizes' && filters.boreSizes.length && !filters.boreSizes.includes(c.boreSize)) return false
    if (exclude !== 'inletSizes' && filters.inletSizes.length && !filters.inletSizes.includes(c.inletSize)) return false
    if (exclude !== 'inletTypes' && filters.inletTypes.length && !filters.inletTypes.includes(c.inletType)) return false
    if (exclude !== 'outlets' && filters.outlets.length && !filters.outlets.includes(c.outlet)) return false
    if (exclude !== 'vents' && filters.vents.length && !filters.vents.includes(c.vent)) return false
    if (exclude !== 'options' && filters.options.length && !filters.options.some(s => c.options.includes(s))) return false
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

export default function PipexPipeDBB() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<PXPValveFilters>(EMPTY_PXP_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const configurationOptions = useMemo(
    () => Array.from(new Set(PXP_DBB_VALVES_DATA.map(c => c.configuration))).sort(),
    []
  )
  const sealMaterialOptions = useMemo(
    () => Array.from(new Set(PXP_DBB_VALVES_DATA.map(c => c.sealMaterial))).sort(),
    []
  )
  const seatMaterialOptions = useMemo(
    () => Array.from(new Set(PXP_DBB_VALVES_DATA.map(c => c.seatMaterial))).sort(),
    []
  )
  const boreSizeOptions = useMemo(() => {
    const present = new Set(PXP_DBB_VALVES_DATA.map(c => c.boreSize))
    return PXP_BORE_SIZE_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const inletSizeOptions = useMemo(() => {
    const present = new Set(PXP_DBB_VALVES_DATA.map(c => c.inletSize))
    return PXP_INLET_SIZE_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const inletTypeOptions = useMemo(() => {
    const present = new Set(PXP_DBB_VALVES_DATA.map(c => c.inletType))
    return PXP_INLET_TYPE_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const outletOptions = useMemo(() => {
    const present = new Set(PXP_DBB_VALVES_DATA.map(c => c.outlet))
    return PXP_OUTLET_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const ventOptions = useMemo(() => {
    const present = new Set(PXP_DBB_VALVES_DATA.map(c => c.vent))
    return PXP_VENT_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const optionOptions = useMemo(
    () => Array.from(new Set(PXP_DBB_VALVES_DATA.flatMap(c => c.options))).sort(),
    []
  )

  const models = useMemo(() => applyFilters(PXP_DBB_VALVES_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsPXP>(() => ({
    configurations: countBy(applyFilters(PXP_DBB_VALVES_DATA, filters, 'configurations'), c => c.configuration),
    sealMaterials: countBy(applyFilters(PXP_DBB_VALVES_DATA, filters, 'sealMaterials'), c => c.sealMaterial),
    seatMaterials: countBy(applyFilters(PXP_DBB_VALVES_DATA, filters, 'seatMaterials'), c => c.seatMaterial),
    boreSizes: countBy(applyFilters(PXP_DBB_VALVES_DATA, filters, 'boreSizes'), c => c.boreSize),
    inletSizes: countBy(applyFilters(PXP_DBB_VALVES_DATA, filters, 'inletSizes'), c => c.inletSize),
    inletTypes: countBy(applyFilters(PXP_DBB_VALVES_DATA, filters, 'inletTypes'), c => c.inletType),
    outlets: countBy(applyFilters(PXP_DBB_VALVES_DATA, filters, 'outlets'), c => c.outlet),
    vents: countBy(applyFilters(PXP_DBB_VALVES_DATA, filters, 'vents'), c => c.vent),
    options: countBy(applyFilters(PXP_DBB_VALVES_DATA, filters, 'options'), c => c.options.length ? c.options : []),
  }), [filters])

  const activeCount =
    filters.configurations.length + filters.sealMaterials.length +
    filters.seatMaterials.length + filters.boreSizes.length +
    filters.inletSizes.length + filters.inletTypes.length +
    filters.outlets.length + filters.vents.length + filters.options.length

  const sidebar = (
    <PXPSidebar
      filters={filters}
      setFilters={setFilters}
      configurationOptions={configurationOptions}
      sealMaterialOptions={sealMaterialOptions}
      seatMaterialOptions={seatMaterialOptions}
      boreSizeOptions={boreSizeOptions}
      inletSizeOptions={inletSizeOptions}
      inletTypeOptions={inletTypeOptions}
      outletOptions={outletOptions}
      ventOptions={ventOptions}
      optionOptions={optionOptions}
      availableCounts={availableCounts}
      activeCount={activeCount}
    />
  )

  return (
    <>
      <title>DBB Pipe-to-Pipe Valves | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® DBB Pipe-to-Pipe valves — NPT, BSPP, and BSPT thread forms, SS316, NACE MR-0175 certified. Compact instrument isolation and process bleed. Configure and request a quote." />
      <meta name="keywords" content="DBB pipe to pipe valve, double block bleed valve, threaded instrument isolation valve, NPT BSPP BSPT valve, NACE SS316 valve" />
      <meta property="og:title" content="DBB Pipe-to-Pipe Valves | PANAM® Instrumentation" />
      <meta property="og:description" content="Configure PANAM® DBB Pipe-to-Pipe valves by thread type, bore size, configuration, and special service." />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB-pxp.jpg" />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.panamvalve.com/double-block-and-bleed-valves/pipe-to-pipe" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: PXP_DESCRIPTION.title,
          description: PXP_DESCRIPTION.description,
          brand: { "@type": "Brand", name: "PANAM®" },
          image: "https://pblol2.blob.core.windows.net/panam-images/products/DBB/DBB-pxp.jpg",
          additionalProperty: PXP_DESCRIPTION.specs.map(s => ({
            "@type": "PropertyValue",
            name: "Specification",
            value: s,
          })),
        })}
      </script>
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
          {PXP_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800 }}>
          {PXP_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {PXP_DESCRIPTION.specs.map(s => (
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

        <PXPActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "flex-start",
          border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px",
          overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          <PXPTable models={models} />
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box></>

  )
}