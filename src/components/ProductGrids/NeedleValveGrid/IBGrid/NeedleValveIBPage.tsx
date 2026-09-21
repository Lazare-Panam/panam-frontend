"use client"
import { useState, useEffect, useMemo } from "react"
import { Box, Typography, CircularProgress, useMediaQuery, Drawer, IconButton } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import { getNeedleValvesIB } from "../../../../api/needleValveApi"
import type { NeedleValveIBDTO } from "../../../../api/needleValveApi"
import { IBSidebar } from "./components/IBSideBar"
import { ActiveFilters } from "../../Common/ActiveFilters"
import IBTable from "./components/IBTable"
import { type NeedleValveIBFilters, EMPTY_IB_FILTERS, SERIES_DESCRIPTIONS, BODY_MATERIAL_LABELS, END_CONNECTION_LABELS } from "../hooks/types"
import { countBy } from "../../Common/filterUtils"

const BRAND_BLUE = "#01B0F0"

function filterData(data: NeedleValveIBDTO[], filters: NeedleValveIBFilters, skip?: string) {
  return data.filter(r => {
    if (skip !== "bodyMaterials"   && filters.bodyMaterials.length   && !filters.bodyMaterials.includes(r.bodyMaterial))     return false
    if (skip !== "threadTypes"     && filters.threadTypes.length     && !filters.threadTypes.includes(r.threadType))         return false
    if (skip !== "endConnections"  && filters.endConnections.length  && !filters.endConnections.includes(r.endConnection))   return false
    if (skip !== "connectionSizes" && filters.connectionSizes.length && !filters.connectionSizes.includes(r.connectionSize)) return false
    if (skip !== "configurations"  && filters.configurations.length  && !filters.configurations.includes(r.configuration))  return false
    if (skip !== "stemSeals"       && filters.stemSeals.length       && !filters.stemSeals.includes(r.stemSeal))             return false
    if (skip !== "stepTips"        && filters.stepTips.length        && !filters.stepTips.includes(r.stepTip))               return false
    if (skip !== "handles"         && filters.handles.length         && !filters.handles.includes(r.handle))                 return false
    if (skip !== "options"         && filters.options.length         && !filters.options.includes(r.options))                return false
    return true
  })
}

export default function NeedleValveIBPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [allData, setAllData] = useState<NeedleValveIBDTO[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<NeedleValveIBFilters>(EMPTY_IB_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    getNeedleValvesIB({}).then(data => {
      setAllData(data)
      setLoading(false)
    })
  }, [])

  const allOptions = useMemo(() => ({
    bodyMaterials:   [...new Set(allData.map(r => r.bodyMaterial))].sort(),
    threadTypes:     [...new Set(allData.map(r => r.threadType))].sort(),
    endConnections:  [...new Set(allData.map(r => r.endConnection))].sort(),
    connectionSizes: [...new Set(allData.map(r => r.connectionSize))].sort(),
    configurations:  [...new Set(allData.map(r => r.configuration))].sort(),
    stemSeals:       [...new Set(allData.map(r => r.stemSeal))].sort(),
    stepTips:        [...new Set(allData.map(r => r.stepTip))].sort(),
    handles:         [...new Set(allData.map(r => r.handle))].sort(),
    options:         [...new Set(allData.map(r => r.options).filter(Boolean))].sort(),
  }), [allData])

  const models = useMemo(() => filterData(allData, filters), [allData, filters])

  const counts = useMemo(() => ({
    bodyMaterials:   countBy(filterData(allData, filters, "bodyMaterials"),   r => r.bodyMaterial),
    threadTypes:     countBy(filterData(allData, filters, "threadTypes"),     r => r.threadType),
    endConnections:  countBy(filterData(allData, filters, "endConnections"),  r => r.endConnection),
    connectionSizes: countBy(filterData(allData, filters, "connectionSizes"), r => r.connectionSize),
    configurations:  countBy(filterData(allData, filters, "configurations"),  r => r.configuration),
    stemSeals:       countBy(filterData(allData, filters, "stemSeals"),       r => r.stemSeal),
    stepTips:        countBy(filterData(allData, filters, "stepTips"),        r => r.stepTip),
    handles:         countBy(filterData(allData, filters, "handles"),         r => r.handle),
    options:         countBy(filterData(allData, filters, "options").filter(r => r.options), r => r.options),
  }), [allData, filters])

  const activeCount = Object.values(filters).reduce((acc, v) => acc + v.length, 0)

  const chips = [
    ...filters.bodyMaterials.map(v => ({ label: BODY_MATERIAL_LABELS[v] ?? v, onDelete: () => setFilters(p => ({ ...p, bodyMaterials: p.bodyMaterials.filter(x => x !== v) })) })),
    ...filters.threadTypes.map(v => ({ label: v, onDelete: () => setFilters(p => ({ ...p, threadTypes: p.threadTypes.filter(x => x !== v) })) })),
    ...filters.endConnections.map(v => ({ label: END_CONNECTION_LABELS[v] ?? v, onDelete: () => setFilters(p => ({ ...p, endConnections: p.endConnections.filter(x => x !== v) })) })),
    ...filters.connectionSizes.map(v => ({ label: v, onDelete: () => setFilters(p => ({ ...p, connectionSizes: p.connectionSizes.filter(x => x !== v) })) })),
    ...filters.configurations.map(v => ({ label: v, onDelete: () => setFilters(p => ({ ...p, configurations: p.configurations.filter(x => x !== v) })) })),
    ...filters.stemSeals.map(v => ({ label: `Seal: ${v}`, onDelete: () => setFilters(p => ({ ...p, stemSeals: p.stemSeals.filter(x => x !== v) })) })),
    ...filters.stepTips.map(v => ({ label: `Tip: ${v}`, onDelete: () => setFilters(p => ({ ...p, stepTips: p.stepTips.filter(x => x !== v) })) })),
    ...filters.handles.map(v => ({ label: `Handle: ${v}`, onDelete: () => setFilters(p => ({ ...p, handles: p.handles.filter(x => x !== v) })) })),
    ...filters.options.map(v => ({ label: v, onDelete: () => setFilters(p => ({ ...p, options: p.options.filter(x => x !== v) })) })),
  ]

  const { title, description, specs } = SERIES_DESCRIPTIONS.IB

  const sidebar = (
    <IBSidebar
      filters={filters}
      setFilters={setFilters}
      filterOptions={allOptions}
      counts={counts}
      activeCount={activeCount}
    />
  )

  return (
    <>
      <title>PANAM IB Series Integral Bonnet Needle Valves | 6,000 psig | PANAM®</title>
      <meta name="description" content="PANAM® IB Series integral bonnet needle valves rated to 6,000 psig. SS316, Duplex and Monel. NPT, BSPP, BSPT and PANAM® tube fitting ends. NACE MR0175 available on request." />
      <meta property="og:title" content="IB Series Integral Bonnet Needle Valves | 6,000 psig | PANAM®" />
      <meta property="og:description" content="Integral bonnet needle valves to 6,000 psig. SS316, Duplex and Monel. Multiple end connections. NACE MR0175 available." />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.panamvalve.com/valves/needle-valves/needle-valves-ib" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "IB Series Integral Bonnet Needle Valves",
          description: "PANAM® IB Series integral bonnet needle valves rated to 6,000 psig. SS316, Duplex and Monel. NPT, BSPP, BSPT and PANAM® tube fitting ends. NACE MR0175 available on request.",
        })}
      </script>

      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
        <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
          <Typography variant="h4" component="h1" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE }}>{title}</Typography>
          <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700 }}>{description}</Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {specs.map(s => (
              <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, bgcolor: alpha(BRAND_BLUE, 0.08), color: "#0277BD", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}` }}>{s}</Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          {isMobile && <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}><FilterListIcon /></IconButton>}
          <ActiveFilters chips={chips} />
          <Typography variant="caption" fontWeight={700} color="text.disabled" sx={{ display: "block", mb: 1 }}>
            {loading ? "LOADING..." : `${models.length} CONFIGURATIONS`}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-start", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper" }}>
            {!isMobile && sidebar}
            {loading ? (
              <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", minHeight: 300 }}>
                <CircularProgress sx={{ color: BRAND_BLUE }} />
              </Box>
            ) : (
              <IBTable models={models} />
            )}
          </Box>
          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
        </Box>
      </Box>
    </>
  )
}