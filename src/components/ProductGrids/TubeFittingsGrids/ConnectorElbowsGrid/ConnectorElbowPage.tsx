import { useState, useEffect, useMemo } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { getConnectorElbows, type ConnectorElbowDto } from "../../../../api/tubefittingApi"
import { ConnectorElbowSidebar } from "./components/ConnectorElbowSidebar"
import { ActiveFilters } from "../../Common/ActiveFilters"
import ConnectorElbowTable from "./components/ConnectorElbowTable"
import { type ConnectorElbowFilters, EMPTY_CONNECTOR_ELBOW_FILTERS, FITTING_TYPE_LABELS, THREAD_TYPE_LABELS, TUBE_OD_UNIT_LABELS } from "./hooks/types"
import { countBy } from "../../Common/filterUtils"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

function filterData(data: ConnectorElbowDto[], filters: ConnectorElbowFilters, skip?: string) {
  return data.filter(r => {
    if (skip !== "fittingTypes" && filters.fittingTypes.length && !filters.fittingTypes.includes(r.fittingType)) return false
    if (skip !== "tubeODUnits" && filters.tubeODUnits.length && !filters.tubeODUnits.includes(r.tubeODUnit)) return false
    if (skip !== "tubeODs" && filters.tubeODs.length && !filters.tubeODs.includes(r.tubeOD)) return false
    if (skip !== "threadDimensions" && filters.threadDimensions.length && !filters.threadDimensions.includes(r.threadDimension)) return false
    if (skip !== "threadTypes" && filters.threadTypes.length && !filters.threadTypes.includes(r.threadType)) return false
    if (filters.isPositionable !== null && r.isPositionable !== filters.isPositionable) return false
    if (filters.hasORingSeal !== null && r.hasORingSeal !== filters.hasORingSeal) return false
    return true
  })
}

export default function ConnectorElbowPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [allData, setAllData] = useState<ConnectorElbowDto[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<ConnectorElbowFilters>(EMPTY_CONNECTOR_ELBOW_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    getConnectorElbows({}).then(data => {
      setAllData(data)
      setLoading(false)
    })
  }, [])

  const allOptions = useMemo(
    () => ({
      fittingTypes: [...new Set(allData.map(r => r.fittingType))].sort(),
      tubeODs: [...new Set(allData.map(r => r.tubeOD))].sort(),
      tubeODUnits: [...new Set(allData.map(r => r.tubeODUnit))].sort(),
      threadDimensions: [...new Set(allData.map(r => r.threadDimension))].sort(),
      threadTypes: [...new Set(allData.map(r => r.threadType))].sort(),
    }),
    [allData]
  )

  const models = useMemo(() => filterData(allData, filters), [allData, filters])

  const counts = useMemo(
    () => ({
      fittingTypes: countBy(filterData(allData, filters, "fittingTypes"), r => r.fittingType),
      tubeODs: countBy(filterData(allData, filters, "tubeODs"), r => r.tubeOD),
      tubeODUnits: countBy(filterData(allData, filters, "tubeODUnits"), r => r.tubeODUnit),
      threadDimensions: countBy(filterData(allData, filters, "threadDimensions"), r => r.threadDimension),
      threadTypes: countBy(filterData(allData, filters, "threadTypes"), r => r.threadType),
    }),
    [allData, filters]
  )

  const activeCount = filters.fittingTypes.length + filters.tubeODs.length + filters.tubeODUnits.length + filters.threadDimensions.length + filters.threadTypes.length + (filters.isPositionable !== null ? 1 : 0) + (filters.hasORingSeal !== null ? 1 : 0)

  const chips = [
    ...filters.fittingTypes.map(v => ({ label: FITTING_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(p => ({ ...p, fittingTypes: p.fittingTypes.filter(x => x !== v) })) })),
    ...filters.tubeODUnits.map(v => ({ label: TUBE_OD_UNIT_LABELS[v] ?? v, onDelete: () => setFilters(p => ({ ...p, tubeODUnits: p.tubeODUnits.filter(x => x !== v) })) })),
    ...filters.tubeODs.map(v => ({ label: `OD: ${v}`, onDelete: () => setFilters(p => ({ ...p, tubeODs: p.tubeODs.filter(x => x !== v) })) })),
    ...filters.threadTypes.map(v => ({ label: THREAD_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(p => ({ ...p, threadTypes: p.threadTypes.filter(x => x !== v) })) })),
    ...filters.threadDimensions.map(v => ({ label: `Thread: ${v}`, onDelete: () => setFilters(p => ({ ...p, threadDimensions: p.threadDimensions.filter(x => x !== v) })) })),
    ...(filters.isPositionable !== null ? [{ label: filters.isPositionable ? "Positionable" : "Standard Rod", onDelete: () => setFilters(p => ({ ...p, isPositionable: null })) }] : []),
    ...(filters.hasORingSeal !== null ? [{ label: filters.hasORingSeal ? "With O-Ring" : "No O-Ring", onDelete: () => setFilters(p => ({ ...p, hasORingSeal: null })) }] : []),
  ]

  const sidebar = <ConnectorElbowSidebar filters={filters} setFilters={setFilters} filterOptions={allOptions} counts={counts} activeCount={activeCount} />

  return (
    <>
      <title>Tube Fitting Connectors & Elbows | PANAM®</title>
      <meta name="description" content="Stainless steel tube fitting connectors, elbows, tees & bulkhead fittings from PANAM®. Imperial & Metric tube OD in NPT, BSPT, BSPP, RP, SAE/MS & 37° Flare threads." />
      <link rel="canonical" href="https://www.panamvalve.com/instrumentation-fittings/tube-fittings/connectors" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Tube Fitting Connectors & Elbows | PANAM®" />
      <meta property="og:description" content="Stainless steel tube fitting connectors, elbows, tees & bulkhead fittings. Imperial & Metric tube OD in NPT, BSPT, BSPP and more." />
      <meta property="og:url" content="https://www.panamvalve.com/instrumentation-fittings/tube-fittings/connectors" />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/tube-fittings/Bulkhead-Connector.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tube Fitting Connectors & Elbows | PANAM®" />
      <meta name="twitter:description" content="Stainless steel tube fitting connectors, elbows, tees & bulkhead fittings. Imperial & Metric tube OD in NPT, BSPT, BSPP and more." />
      <meta name="twitter:image" content="https://pblol2.blob.core.windows.net/panam-images/panam-image-compressed/products/tube-fittings/Bulkhead-Connector.jpg" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Tube Fitting Connectors & Elbows | PANAM®",
          description: "Stainless steel tube fitting connectors, elbows, tees & bulkhead fittings from PANAM®. Imperial & Metric tube OD in NPT, BSPT, BSPP, RP, SAE/MS & 37° Flare threads.",
        })}
      </script>

      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
        <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
          <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
            Tube Fittings — Connectors & Elbows
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
            Stainless steel tube fittings including male connectors, female connectors, elbows, tees and bulkhead fittings. Available in Imperial and Metric tube OD with NPT, BSPT, BSPP, RP, Metric, SAE/MS and Flare 37° thread types.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {["SS 316", "Imperial & Metric", "NPT / BSPT / BSPP", "Positionable", "O-Ring Seal"].map(s => (
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
              <ConnectorElbowTable models={models} />
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
