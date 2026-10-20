import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { DBBSidebar, type AvailableCountsDBB } from "../Flange-to-Pipe/components/DBBSidebar"
import DBBTable from "../Flange-to-Pipe/components/DBBTable"
import { DBBActiveFilters } from "../Flange-to-Pipe/components/DBBActiveFilters"
import { FXF_DBB_VALVES_DATA } from "./hooks/fxfDbbValveData"
import {
  type DBBValveFilters, type DBBValveDTO,
  EMPTY_DBB_FILTERS, FXF_DBB_DESCRIPTION,
  BORE_SIZE_SORT_ORDER, INLET_SIZE_SORT_ORDER, PRESSURE_CLASS_SORT_ORDER,
  OUTLET_SORT_ORDER, VENT_SORT_ORDER,
} from "../Flange-to-Pipe/hooks/types"

const BRAND_BLUE = "#01B0F0"
//
function applyFilters(data: DBBValveDTO[], filters: DBBValveFilters, exclude: keyof DBBValveFilters | ''): DBBValveDTO[] {
  return data.filter(c => {
    if (exclude !== 'constructionTypes' && filters.constructionTypes.length && !filters.constructionTypes.includes(c.constructionType)) return false
    if (exclude !== 'configurations' && filters.configurations.length && !filters.configurations.includes(c.configuration)) return false
    if (exclude !== 'sealMaterials' && filters.sealMaterials.length && !filters.sealMaterials.includes(c.sealMaterial)) return false
    if (exclude !== 'seatMaterials' && filters.seatMaterials.length && !filters.seatMaterials.includes(c.seatMaterial)) return false
    if (exclude !== 'boreSizes' && filters.boreSizes.length && !filters.boreSizes.includes(c.boreSize)) return false
    if (exclude !== 'inletSizes' && filters.inletSizes.length && !filters.inletSizes.includes(c.inletSize)) return false
    if (exclude !== 'pressureClasses' && filters.pressureClasses.length && !filters.pressureClasses.includes(c.pressureClass)) return false
    if (exclude !== 'flangeTypes' && filters.flangeTypes.length && !filters.flangeTypes.includes(c.flangeType)) return false
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

const CONSTRUCTION_ORDER = ['Integral', 'Three Piece']

export default function FlangexFlangeDBB() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<DBBValveFilters>(EMPTY_DBB_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const constructionTypeOptions = useMemo(() => {
    const present = new Set(FXF_DBB_VALVES_DATA.map(c => c.constructionType))
    return CONSTRUCTION_ORDER.filter(s => present.has(s as any))
  }, [])
  const configurationOptions = useMemo(
    () => Array.from(new Set(FXF_DBB_VALVES_DATA.map(c => c.configuration))).sort(),
    []
  )
  const sealMaterialOptions = useMemo(
    () => Array.from(new Set(FXF_DBB_VALVES_DATA.map(c => c.sealMaterial))).sort(),
    []
  )
  const seatMaterialOptions = useMemo(
    () => Array.from(new Set(FXF_DBB_VALVES_DATA.map(c => c.seatMaterial))).sort(),
    []
  )
  const boreSizeOptions = useMemo(() => {
    const present = new Set(FXF_DBB_VALVES_DATA.map(c => c.boreSize))
    return BORE_SIZE_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const inletSizeOptions = useMemo(() => {
    const present = new Set(FXF_DBB_VALVES_DATA.map(c => c.inletSize))
    return INLET_SIZE_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const pressureClassOptions = useMemo(() => {
    const present = new Set(FXF_DBB_VALVES_DATA.map(c => c.pressureClass))
    return PRESSURE_CLASS_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const flangeTypeOptions = useMemo(
    () => Array.from(new Set(FXF_DBB_VALVES_DATA.map(c => c.flangeType))).sort(),
    []
  )
  const outletOptions = useMemo(() => {
    const present = new Set(FXF_DBB_VALVES_DATA.map(c => c.outlet))
    return OUTLET_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const ventOptions = useMemo(() => {
    const present = new Set(FXF_DBB_VALVES_DATA.map(c => c.vent))
    return VENT_SORT_ORDER.filter(s => present.has(s))
  }, [])
  const optionOptions = useMemo(
    () => Array.from(new Set(FXF_DBB_VALVES_DATA.flatMap(c => c.options))).sort(),
    []
  )

  const models = useMemo(() => applyFilters(FXF_DBB_VALVES_DATA, filters, ''), [filters])

  const availableCounts = useMemo<AvailableCountsDBB>(() => ({
    constructionTypes: countBy(applyFilters(FXF_DBB_VALVES_DATA, filters, 'constructionTypes'), c => c.constructionType),
    configurations: countBy(applyFilters(FXF_DBB_VALVES_DATA, filters, 'configurations'), c => c.configuration),
    sealMaterials: countBy(applyFilters(FXF_DBB_VALVES_DATA, filters, 'sealMaterials'), c => c.sealMaterial),
    seatMaterials: countBy(applyFilters(FXF_DBB_VALVES_DATA, filters, 'seatMaterials'), c => c.seatMaterial),
    boreSizes: countBy(applyFilters(FXF_DBB_VALVES_DATA, filters, 'boreSizes'), c => c.boreSize),
    inletSizes: countBy(applyFilters(FXF_DBB_VALVES_DATA, filters, 'inletSizes'), c => c.inletSize),
    pressureClasses: countBy(applyFilters(FXF_DBB_VALVES_DATA, filters, 'pressureClasses'), c => c.pressureClass),
    flangeTypes: countBy(applyFilters(FXF_DBB_VALVES_DATA, filters, 'flangeTypes'), c => c.flangeType),
    outlets: countBy(applyFilters(FXF_DBB_VALVES_DATA, filters, 'outlets'), c => c.outlet),
    vents: countBy(applyFilters(FXF_DBB_VALVES_DATA, filters, 'vents'), c => c.vent),
    options: countBy(applyFilters(FXF_DBB_VALVES_DATA, filters, 'options'), c => c.options.length ? c.options : []),
  }), [filters])

  const activeCount =
    filters.constructionTypes.length + filters.configurations.length +
    filters.sealMaterials.length + filters.seatMaterials.length +
    filters.boreSizes.length + filters.inletSizes.length + filters.pressureClasses.length +
    filters.flangeTypes.length + filters.outlets.length + filters.vents.length + filters.options.length

  const sidebar = (
    <DBBSidebar
      filters={filters}
      setFilters={setFilters}
      constructionTypeOptions={constructionTypeOptions}
      configurationOptions={configurationOptions}
      sealMaterialOptions={sealMaterialOptions}
      seatMaterialOptions={seatMaterialOptions}
      boreSizeOptions={boreSizeOptions}
      inletSizeOptions={inletSizeOptions}
      pressureClassOptions={pressureClassOptions}
      flangeTypeOptions={flangeTypeOptions}
      outletOptions={outletOptions}
      ventOptions={ventOptions}
      optionOptions={optionOptions}
      availableCounts={availableCounts}
      activeCount={activeCount}
    />
  )

  return (
    <>
      <title>DBB Flange-to-Flange Valves | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® DBB Flange-to-Flange valves — Integral and Three Piece construction, Class 150–2500, PN6–PN250, RF/RTJ/BS, SS316, NACE MR-0175 and fire-safe options. Configure and request a quote." />
      <meta name="keywords" content="DBB flange to flange valve, double block bleed valve, DP transmitter isolation, NACE valve, SS316 instrumentation valve" />
      <meta property="og:title" content="DBB Flange-to-Flange Valves | PANAM® Instrumentation" />
      <meta property="og:description" content="Configure PANAM® DBB Flange-to-Flange valves by construction, pressure class, flange face, and special service." />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/DBB/DBB_fxf.jpg" />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://www.panamvalve.com/double-block-and-bleed-valves/flange-to-flange" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: FXF_DBB_DESCRIPTION.title,
          description: FXF_DBB_DESCRIPTION.description,
          brand: { "@type": "Brand", name: "PANAM®" },
          image: "https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/DBB/DBB_fxf.jpg",
          additionalProperty: FXF_DBB_DESCRIPTION.specs.map(s => ({
            "@type": "PropertyValue",
            name: "Specification",
            value: s,
          })),
        })}
      </script>
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
          {FXF_DBB_DESCRIPTION.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800 }}>
          {FXF_DBB_DESCRIPTION.description}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {FXF_DBB_DESCRIPTION.specs.map(s => (
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

        <DBBActiveFilters filters={filters} setFilters={setFilters} />

        <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
          {`${models.length} CONFIGURATIONS`}
        </Typography>

        <Box sx={{
          display: "flex", alignItems: "flex-start",
          border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px",
          overflow: "hidden", bgcolor: "background.paper",
        }}>
          {!isMobile && sidebar}
          <DBBTable models={models} />
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box>
    </>

  )
}