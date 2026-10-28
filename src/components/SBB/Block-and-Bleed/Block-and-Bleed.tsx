import { useState, useMemo } from "react"
import { Box, Typography, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { SBBSidebar, type AvailableCountsSBB } from "../components/SBBSidebar"
import SBBTable from "../components/SBBTable"
import { SBBActiveFilters } from "../components/SBBActiveFilters"
import { SBB_VALVES_DATA, SBB_OPTION_LEGEND } from "../hooks/sbbValveData"
import {
  type SBBValveFilters, type SBBValveDTO,
  EMPTY_SBB_FILTERS, BB_SBB_DESCRIPTION,
  BORE_SIZE_SORT_ORDER, INLET_SIZE_SORT_ORDER, PRESSURE_CLASS_SORT_ORDER,
  END_CONNECTION_SORT_ORDER, OUTLET_SORT_ORDER, VENT_SORT_ORDER,
} from "../hooks/types"

const BRAND_BLUE = "#01B0F0"
const IMAGE = "https://pblol2.blob.core.windows.net/panam-images/products/valve-manifolds/SBB.png"
const CANONICAL = "https://www.panamvalve.com/single-block-and-bleed-valves/block-and-bleed"

// This family's rows, sliced from the shared SBB dataset.
const BB_DATA = SBB_VALVES_DATA.filter(v => v.family === "Block & Bleed")

// Present values in a preferred order; anything present but unlisted is appended alphabetically.
function ordered(present: Set<string>, order: string[]): string[] {
  const known = order.filter(v => present.has(v))
  const extra = [...present].filter(v => !order.includes(v)).sort()
  return [...known, ...extra]
}

function applyFilters(data: SBBValveDTO[], filters: SBBValveFilters, exclude: keyof SBBValveFilters | ""): SBBValveDTO[] {
  return data.filter(c => {
    if (exclude !== "constructions" && filters.constructions.length && !filters.constructions.includes(c.construction)) return false
    if (exclude !== "configurations" && filters.configurations.length && !filters.configurations.includes(c.configuration)) return false
    if (exclude !== "boreSizes" && filters.boreSizes.length && !filters.boreSizes.includes(c.boreSize)) return false
    if (exclude !== "inletSizes" && filters.inletSizes.length && !filters.inletSizes.includes(c.inletSize)) return false
    if (exclude !== "pressureClasses" && filters.pressureClasses.length && !filters.pressureClasses.includes(c.pressureClass)) return false
    if (exclude !== "endConnections" && filters.endConnections.length && !filters.endConnections.includes(c.endConnection)) return false
    if (exclude !== "outlets" && filters.outlets.length && !filters.outlets.includes(c.outlet)) return false
    if (exclude !== "vents" && filters.vents.length && !filters.vents.includes(c.vent)) return false
    if (exclude !== "sealMaterials" && filters.sealMaterials.length && !filters.sealMaterials.includes(c.sealMaterial)) return false
    if (exclude !== "seatMaterials" && filters.seatMaterials.length && !filters.seatMaterials.includes(c.seatMaterial)) return false
    if (exclude !== "options" && filters.options.length && !filters.options.some(s => c.options.includes(s))) return false
    return true
  })
}

function countBy<T>(items: T[], keyFn: (item: T) => string | string[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const item of items) {
    const keys = keyFn(item)
    const arr = Array.isArray(keys) ? keys : [keys]
    for (const k of arr) counts[k] = (counts[k] ?? 0) + 1
  }
  return counts
}

export default function BlockAndBleedSBB() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<SBBValveFilters>(EMPTY_SBB_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const constructionOptions = useMemo(() => Array.from(new Set(BB_DATA.map(c => c.construction))).sort(), [])
  const configurationOptions = useMemo(() => Array.from(new Set(BB_DATA.map(c => c.configuration))).sort(), [])
  const boreSizeOptions = useMemo(() => ordered(new Set(BB_DATA.map(c => c.boreSize)), BORE_SIZE_SORT_ORDER), [])
  const inletSizeOptions = useMemo(() => ordered(new Set(BB_DATA.map(c => c.inletSize)), INLET_SIZE_SORT_ORDER), [])
  const pressureClassOptions = useMemo(() => ordered(new Set(BB_DATA.map(c => c.pressureClass)), PRESSURE_CLASS_SORT_ORDER), [])
  const endConnectionOptions = useMemo(() => ordered(new Set(BB_DATA.map(c => c.endConnection)), END_CONNECTION_SORT_ORDER), [])
  const outletOptions = useMemo(() => ordered(new Set(BB_DATA.map(c => c.outlet)), OUTLET_SORT_ORDER), [])
  const ventOptions = useMemo(() => ordered(new Set(BB_DATA.map(c => c.vent)), VENT_SORT_ORDER), [])
  const sealMaterialOptions = useMemo(() => Array.from(new Set(BB_DATA.map(c => c.sealMaterial))).sort(), [])
  const seatMaterialOptions = useMemo(() => Array.from(new Set(BB_DATA.map(c => c.seatMaterial))).sort(), [])
  const optionOptions = useMemo(() => Array.from(new Set(BB_DATA.flatMap(c => c.options))).sort(), [])

  const models = useMemo(() => applyFilters(BB_DATA, filters, ""), [filters])

  const availableCounts = useMemo<AvailableCountsSBB>(() => ({
    constructions: countBy(applyFilters(BB_DATA, filters, "constructions"), c => c.construction),
    configurations: countBy(applyFilters(BB_DATA, filters, "configurations"), c => c.configuration),
    boreSizes: countBy(applyFilters(BB_DATA, filters, "boreSizes"), c => c.boreSize),
    inletSizes: countBy(applyFilters(BB_DATA, filters, "inletSizes"), c => c.inletSize),
    pressureClasses: countBy(applyFilters(BB_DATA, filters, "pressureClasses"), c => c.pressureClass),
    endConnections: countBy(applyFilters(BB_DATA, filters, "endConnections"), c => c.endConnection),
    outlets: countBy(applyFilters(BB_DATA, filters, "outlets"), c => c.outlet),
    vents: countBy(applyFilters(BB_DATA, filters, "vents"), c => c.vent),
    sealMaterials: countBy(applyFilters(BB_DATA, filters, "sealMaterials"), c => c.sealMaterial),
    seatMaterials: countBy(applyFilters(BB_DATA, filters, "seatMaterials"), c => c.seatMaterial),
    options: countBy(applyFilters(BB_DATA, filters, "options"), c => c.options),
  }), [filters])

  const activeCount =
    filters.constructions.length + filters.configurations.length +
    filters.boreSizes.length + filters.inletSizes.length + filters.pressureClasses.length +
    filters.endConnections.length + filters.outlets.length + filters.vents.length +
    filters.sealMaterials.length + filters.seatMaterials.length + filters.options.length

  const sidebar = (
    <SBBSidebar
      filters={filters}
      setFilters={setFilters}
      constructionOptions={constructionOptions}
      configurationOptions={configurationOptions}
      boreSizeOptions={boreSizeOptions}
      inletSizeOptions={inletSizeOptions}
      pressureClassOptions={pressureClassOptions}
      endConnectionOptions={endConnectionOptions}
      outletOptions={outletOptions}
      ventOptions={ventOptions}
      sealMaterialOptions={sealMaterialOptions}
      seatMaterialOptions={seatMaterialOptions}
      optionOptions={optionOptions}
      availableCounts={availableCounts}
      activeCount={activeCount}
    />
  )

  return (
    <>
      <title>SBB Block & Bleed (Threaded) Valves | PANAM® Instrumentation</title>
      <meta name="description" content="PANAM® Single Block & Bleed threaded valves — compact SS316 body & trim, PEEK seat, Grafoil seal, BSPP female connections. Fire Safe and Locking Handle options." />
      <meta name="keywords" content="single block bleed valve, block and bleed valve, BSPP SBB valve, instrument isolation valve, SS316 instrumentation valve" />
      <meta property="og:title" content="SBB Block & Bleed (Threaded) Valves | PANAM® Instrumentation" />
      <meta property="og:description" content="Configure PANAM® SBB threaded Block & Bleed valves by bore, connection, and special service." />
      <meta property="og:image" content={IMAGE} />
      <meta property="og:type" content="product" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={CANONICAL} />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: BB_SBB_DESCRIPTION.title,
          description: BB_SBB_DESCRIPTION.description,
          brand: { "@type": "Brand", name: "PANAM®" },
          image: IMAGE,
          additionalProperty: BB_SBB_DESCRIPTION.specs.map(s => ({
            "@type": "PropertyValue", name: "Specification", value: s,
          })),
        })}
      </script>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
        <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
          <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>
            {BB_SBB_DESCRIPTION.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 800 }}>
            {BB_SBB_DESCRIPTION.description}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {BB_SBB_DESCRIPTION.specs.map(s => (
              <Box key={s} sx={{
                px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600,
                bgcolor: alpha(BRAND_BLUE, 0.08), color: "#0277BD",
                border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`,
              }}>
                {s}
              </Box>
            ))}
          </Box>
          {SBB_OPTION_LEGEND.length > 0 && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, maxWidth: 800 }}>
              <Box component="span" sx={{ fontWeight: 700, color: "text.primary" }}>Part number option suffixes: </Box>
              {SBB_OPTION_LEGEND.map(o => `${o.code} = ${o.label}`).join(" · ")}
            </Typography>
          )}
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}

          <SBBActiveFilters filters={filters} setFilters={setFilters} />

          <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
            {`${models.length} CONFIGURATIONS`}
          </Typography>

          <Box sx={{
            display: "flex", alignItems: "flex-start",
            border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px",
            overflow: "hidden", bgcolor: "background.paper",
          }}>
            {!isMobile && sidebar}
            <SBBTable models={models} />
          </Box>

          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
        </Box>
      </Box>
    </>
  )
}
