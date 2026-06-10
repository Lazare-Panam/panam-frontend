import { useState, useEffect, useMemo } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { getUnions, type UnionDto } from "../../../../api/tubefittingApi"
import { UnionSidebar } from "./components/UnionSidebar"
import { ActiveFilters } from "../../Common/ActiveFilters"
import UnionTable from "./components/UnionTable"
import { type UnionFilters, EMPTY_UNION_FILTERS, FITTING_TYPE_LABELS, TUBE_OD_UNIT_LABELS } from "./hooks/types"
import { countBy } from "../../Common/filterUtils"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

function filterData(data: UnionDto[], filters: UnionFilters, skip?: string) {
  return data.filter(r => {
    if (skip !== "fittingTypes" && filters.fittingTypes.length && !filters.fittingTypes.includes(r.fittingType)) return false
    if (skip !== "tubeODUnits" && filters.tubeODUnits.length && !filters.tubeODUnits.includes(r.tubeODUnit)) return false
    if (skip !== "tubeODs" && filters.tubeODs.length && !filters.tubeODs.includes(r.tubeOD)) return false
    if (skip !== "tubeOD2s" && filters.tubeOD2s.length && !(r.tubeOD2 && filters.tubeOD2s.includes(r.tubeOD2))) return false
    if (skip !== "tubeOD3s" && filters.tubeOD3s.length && !(r.tubeOD3 && filters.tubeOD3s.includes(r.tubeOD3))) return false
    return true
  })
}

export default function UnionPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [allData, setAllData] = useState<UnionDto[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<UnionFilters>(EMPTY_UNION_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    getUnions({}).then(data => {
      setAllData(data)
      setLoading(false)
    })
  }, [])

  const allOptions = useMemo(
    () => ({
      fittingTypes: [...new Set(allData.map(r => r.fittingType))].sort(),
      tubeODs: [...new Set(allData.map(r => r.tubeOD))].sort(),
      tubeODUnits: [...new Set(allData.map(r => r.tubeODUnit))].sort(),
      tubeOD2s: [...new Set(allData.map(r => r.tubeOD2).filter(Boolean) as string[])].sort(),
      tubeOD3s: [...new Set(allData.map(r => r.tubeOD3).filter(Boolean) as string[])].sort(),
    }),
    [allData]
  )

  const models = useMemo(() => filterData(allData, filters), [allData, filters])

  const counts = useMemo(
    () => ({
      fittingTypes: countBy(filterData(allData, filters, "fittingTypes"), r => r.fittingType),
      tubeODs: countBy(filterData(allData, filters, "tubeODs"), r => r.tubeOD),
      tubeODUnits: countBy(filterData(allData, filters, "tubeODUnits"), r => r.tubeODUnit),
      tubeOD2s: countBy(
        filterData(allData, filters, "tubeOD2s").filter(r => r.tubeOD2),
        r => r.tubeOD2!
      ),
      tubeOD3s: countBy(
        filterData(allData, filters, "tubeOD3s").filter(r => r.tubeOD3),
        r => r.tubeOD3!
      ),
    }),
    [allData, filters]
  )

  const activeCount = filters.fittingTypes.length + filters.tubeODs.length + filters.tubeODUnits.length + filters.tubeOD2s.length + filters.tubeOD3s.length

  const chips = [
    ...filters.fittingTypes.map(v => ({ label: FITTING_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(p => ({ ...p, fittingTypes: p.fittingTypes.filter(x => x !== v) })) })),
    ...filters.tubeODUnits.map(v => ({ label: TUBE_OD_UNIT_LABELS[v] ?? v, onDelete: () => setFilters(p => ({ ...p, tubeODUnits: p.tubeODUnits.filter(x => x !== v), tubeODs: [] })) })),
    ...filters.tubeODs.map(v => ({ label: `OD: ${v}`, onDelete: () => setFilters(p => ({ ...p, tubeODs: p.tubeODs.filter(x => x !== v) })) })),
    ...filters.tubeOD2s.map(v => ({ label: `OD2: ${v}`, onDelete: () => setFilters(p => ({ ...p, tubeOD2s: p.tubeOD2s.filter(x => x !== v) })) })),
    ...filters.tubeOD3s.map(v => ({ label: `OD3: ${v}`, onDelete: () => setFilters(p => ({ ...p, tubeOD3s: p.tubeOD3s.filter(x => x !== v) })) })),
  ]

  const sidebar = <UnionSidebar filters={filters} setFilters={setFilters} filterOptions={allOptions} counts={counts} activeCount={activeCount} />

  return (
    <>
      <title>Tube Fitting Unions | Reducing & Bulkhead | PANAM®</title>
      <meta name="description" content="Stainless steel tube-to-tube union fittings from PANAM® — standard unions, reducing unions, bulkhead unions, union elbows, tees & crosses. Imperial & Metric tube OD." />
      <link rel="canonical" href="https://www.panamvalves.com/instrumentation-fittings/tube-fittings/union" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Tube Fitting Unions | Reducing & Bulkhead | PANAM®" />
      <meta property="og:description" content="Stainless steel tube-to-tube union fittings — standard, reducing, bulkhead, elbows, tees & crosses. Imperial & Metric tube OD." />
      <meta property="og:url" content="https://www.panamvalves.com/instrumentation-fittings/tube-fittings/union" />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-cross.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tube Fitting Unions | Reducing & Bulkhead | PANAM®" />
      <meta name="twitter:description" content="Stainless steel tube-to-tube union fittings — standard, reducing, bulkhead, elbows, tees & crosses. Imperial & Metric tube OD." />
      <meta name="twitter:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/union-cross.png" />

      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
        <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
          <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
            Tube Fittings — Unions
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
            Stainless steel tube-to-tube union fittings including standard unions, reducing unions, bulkhead unions, union elbows, union tees, reducing union tees and union crosses. Available in Imperial and Metric tube OD.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {["SS 316", "Imperial & Metric", "Tube-to-Tube", "Reducing", "Bulkhead"].map(s => (
              <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, bgcolor: alpha(BRAND_BLUE, 0.08), color: "#0277BD", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, fontFamily: PRIMARY_FONT }}>
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
          <ActiveFilters chips={chips} />
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: "block", mb: 1, fontFamily: PRIMARY_FONT }}>
            {loading ? "LOADING..." : `${models.length} CONFIGURATIONS`}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "stretch", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper" }}>
            {!isMobile && sidebar}
            {loading ? (
              <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300 }}>
                <CircularProgress sx={{ color: BRAND_BLUE }} />
              </Box>
            ) : (
              <UnionTable models={models} />
            )}
          </Box>
          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
            {sidebar}
          </Drawer>
        </Box>
      </Box>
    </>
  )
}
