import { useState, useMemo } from "react"
import { Box, Typography, Divider, useMediaQuery, Drawer, IconButton, Collapse, Chip, Stack, Button, TableRow, TableCell } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { WELD_GAUGE_DATA, type WeldGaugeItem } from "./weldGaugeData"
import { useCartStore } from "../../../store/useCartStore"
import { ActiveFilters } from "../../Common/ActiveFilters"
import { ProductSidebar } from "../../Common/ProductSidebar"
import { FilterGroup } from "../../Common/FilterGroup"
import { SmartCheckList } from "../../Common/SmartCheckList"
import { UnitToggle } from "../../Common/UnitToggle"
import { ProductTable } from "../../Common/ProductTable"
import { countBy } from "../../Common/filterUtils"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const FITTING_TYPE_LABELS: Record<string, string> = {
  "Male Pipe Weld Connector": "Male Pipe Weld Connector (PMWC)",
  "Male Pipe Weld Elbow": "Male Pipe Weld Elbow (PMWE)",
  "Tube Socket Weld Connector": "Tube Socket Weld Connector (PSWC)",
  "Tube Socket Weld Elbow": "Tube Socket Weld Elbow (PSWE)",
  "Gauge Connector": "Gauge Connector (PGC)",
}

const THREAD_TYPE_LABELS: Record<string, string> = { BSPP: "BSPP", Metric: "Metric" }

const IMPERIAL_ODS = ["1/8", "3/16", "1/4", "5/16", "3/8", "1/2", "5/8", "3/4", "1", "1-1/4", "1-1/2", "2"]
const METRIC_ODS = ["3", "4", "6", "8", "10", "12", "14", "15", "16", "18", "20", "22", "25", "32", "38"]

interface Filters {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
  threadTypes: string[]
}
const EMPTY_FILTERS: Filters = { fittingTypes: [], tubeODs: [], tubeODUnits: [], threadTypes: [] }

function filterData(data: WeldGaugeItem[], filters: Filters, skip?: string) {
  return data.filter(r => {
    if (skip !== "fittingTypes" && filters.fittingTypes.length && !filters.fittingTypes.includes(r.fittingType)) return false
    if (skip !== "tubeODUnits" && filters.tubeODUnits.length && !filters.tubeODUnits.includes(r.tubeODUnit)) return false
    if (skip !== "tubeODs" && filters.tubeODs.length && !filters.tubeODs.includes(r.tubeOD)) return false
    if (skip !== "threadTypes" && filters.threadTypes.length && (!r.threadType || !filters.threadTypes.includes(r.threadType))) return false
    return true
  })
}

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ display: "block", textTransform: "uppercase", mb: 0.25, fontFamily: PRIMARY_FONT }}>
        {label}
      </Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>
        {value}
      </Typography>
    </Box>
  )
}

function Row({ row }: { row: WeldGaugeItem }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)
  const unitShort = row.tubeODUnit === "Imperial" ? "in" : "mm"
  const unitFull = row.tubeODUnit === "Imperial" ? "inch" : "mm"
  const isGauge = row.fittingType === "Gauge Connector"
  const detailHref = `/instrumentation-fittings/tube-fittings/weld-gauge/${row.partNumber}`

  const specs = {
    "Part Number": row.partNumber,
    "Fitting Type": FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType,
    "Tube OD": `${row.tubeOD} ${unitFull}`,
    ...(row.pipeSize ? { "Pipe Size": row.pipeSize } : {}),
    ...(row.threadSize ? { "Thread Size": row.threadSize } : {}),
    ...(row.threadType ? { "Thread Type": THREAD_TYPE_LABELS[row.threadType] ?? row.threadType } : {}),
  }

  const cartItem = { cartItemId: row.partNumber, id: String(row.id), name: `${row.fittingType} — ${row.partNumber}`, image: row.imageUrl, quantity: 1, partNumber: row.partNumber, specs }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: "pointer", bgcolor: open ? alpha(BRAND_BLUE, 0.04) : "inherit", "&:hover": { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton
            size="small"
            onClick={e => {
              e.stopPropagation()
              setOpen(o => !o)
            }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: "monospace", fontWeight: 700, py: 1 }}>
          <a href={detailHref} onClick={e => e.stopPropagation()} style={{ color: BRAND_BLUE, textDecoration: "none", fontSize: "0.8rem", fontWeight: 700 }}>
            {row.partNumber}
          </a>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType} size="small" sx={{ fontSize: "0.65rem", fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: "#0277BD" }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.tubeOD}
          <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
            ({unitShort})
          </Typography>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {isGauge ? row.threadSize : row.pipeSize}
          {isGauge && row.threadType && <Chip label={THREAD_TYPE_LABELS[row.threadType] ?? row.threadType} size="small" sx={{ ml: 1, fontSize: "0.6rem", fontWeight: 600, bgcolor: alpha("#4CAF50", 0.1), color: "#2E7D32" }} />}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button
            size="small"
            variant="contained"
            onClick={e => {
              e.stopPropagation()
              addItem(cartItem)
            }}
            sx={{ fontSize: "0.7rem", fontWeight: 700, py: 0.5, px: 1.5, borderRadius: "4px", textTransform: "none", whiteSpace: "nowrap", bgcolor: BRAND_BLUE, boxShadow: "none", fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0199d4", boxShadow: "none" } }}>
            Add to Quote
          </Button>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={6} sx={{ p: 0, borderBottom: "none" }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_BLUE, 0.02), borderLeft: `4px solid ${BRAND_BLUE}`, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="flex-start">
                  {row.imageUrl && (
                    <Box sx={{ width: 140, height: 140, flexShrink: 0, border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px", overflow: "hidden", bgcolor: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={row.imageUrl} alt={row.partNumber} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: "block", mb: 2, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Fitting Type" value={FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType} />
                      <Spec label="Tube OD" value={`${row.tubeOD} ${unitFull}`} />
                      {row.pipeSize && <Spec label="Pipe Size" value={row.pipeSize} />}
                      {row.threadSize && <Spec label="Thread Size" value={row.threadSize} />}
                      {row.threadType && <Spec label="Thread Type" value={THREAD_TYPE_LABELS[row.threadType] ?? row.threadType} />}
                      <Spec label="Material" value="SS 316" />
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Button variant="contained" onClick={() => addItem(cartItem)} sx={{ textTransform: "none", fontWeight: 700, borderRadius: "6px", bgcolor: BRAND_BLUE, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0199d4" } }}>
                        Add to Quote
                      </Button>
                      <Button variant="outlined" component="a" href={detailHref} sx={{ textTransform: "none", fontWeight: 700, borderRadius: "6px", borderColor: BRAND_BLUE, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: alpha(BRAND_BLUE, 0.05) } }}>
                        View Full Page
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}
    </>
  )
}

export default function WeldGaugeConnectorPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const models = useMemo(() => filterData(WELD_GAUGE_DATA, filters), [filters])

  const counts = useMemo(
    () => ({
      fittingTypes: countBy(filterData(WELD_GAUGE_DATA, filters, "fittingTypes"), r => r.fittingType),
      tubeODs: countBy(filterData(WELD_GAUGE_DATA, filters, "tubeODs"), r => r.tubeOD),
      tubeODUnits: countBy(filterData(WELD_GAUGE_DATA, filters, "tubeODUnits"), r => r.tubeODUnit),
      threadTypes: countBy(
        filterData(WELD_GAUGE_DATA, filters, "threadTypes").filter(r => r.threadType),
        r => r.threadType!
      ),
    }),
    [filters]
  )

  const allOptions = {
    fittingTypes: [...new Set(WELD_GAUGE_DATA.map(r => r.fittingType))],
    tubeODUnits: [...new Set(WELD_GAUGE_DATA.map(r => r.tubeODUnit))],
    threadTypes: [...new Set(WELD_GAUGE_DATA.map(r => r.threadType).filter(Boolean) as string[])],
  }

  const activeCount = filters.fittingTypes.length + filters.tubeODs.length + filters.tubeODUnits.length + filters.threadTypes.length
  const selectedUnit = filters.tubeODUnits[0] ?? "all"
  const visibleODs = selectedUnit === "Imperial" ? IMPERIAL_ODS : selectedUnit === "Metric" ? METRIC_ODS : [...IMPERIAL_ODS, ...METRIC_ODS]

  const toggle = (key: keyof Filters, val: string) => setFilters(p => ({ ...p, [key]: p[key].includes(val) ? p[key].filter(x => x !== val) : [...p[key], val] }))

  const chips = [
    ...filters.fittingTypes.map(v => ({ label: FITTING_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(p => ({ ...p, fittingTypes: p.fittingTypes.filter(x => x !== v) })) })),
    ...filters.tubeODUnits.map(v => ({ label: v, onDelete: () => setFilters(p => ({ ...p, tubeODUnits: p.tubeODUnits.filter(x => x !== v), tubeODs: [] })) })),
    ...filters.tubeODs.map(v => ({ label: `OD: ${v}`, onDelete: () => setFilters(p => ({ ...p, tubeODs: p.tubeODs.filter(x => x !== v) })) })),
    ...filters.threadTypes.map(v => ({ label: THREAD_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(p => ({ ...p, threadTypes: p.threadTypes.filter(x => x !== v) })) })),
  ]

  const sidebar = (
    <ProductSidebar activeCount={activeCount} onClearAll={() => setFilters(EMPTY_FILTERS)}>
      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        <SmartCheckList options={allOptions.fittingTypes} selected={filters.fittingTypes} onChange={v => toggle("fittingTypes", v)} counts={counts.fittingTypes} labelMap={FITTING_TYPE_LABELS} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="TUBE OD" count={filters.tubeODs.length || undefined}>
        <UnitToggle value={selectedUnit} onChange={val => setFilters(p => ({ ...p, tubeODUnits: val === "all" ? [] : [val], tubeODs: [] }))} />
        <SmartCheckList options={visibleODs} selected={filters.tubeODs} onChange={v => toggle("tubeODs", v)} counts={counts.tubeODs} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="THREAD TYPE (Gauge)" count={filters.threadTypes.length || undefined}>
        <SmartCheckList options={allOptions.threadTypes} selected={filters.threadTypes} onChange={v => toggle("threadTypes", v)} counts={counts.threadTypes} labelMap={THREAD_TYPE_LABELS} />
      </FilterGroup>
    </ProductSidebar>
  )

  return (
    <>
      <title>Weld & Gauge Connectors | Socket & Pipe Weld | PANAM®</title>
      <meta name="description" content="PANAM® male pipe weld connectors & elbows, tube socket weld connectors & elbows and gauge connectors. Butt weld, socket weld & BSPP/Metric gauge connections." />
      <link rel="canonical" href="https://www.panamvalve.com/instrumentation-fittings/tube-fittings/weld-gauge" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Weld & Gauge Connectors | Socket & Pipe Weld | PANAM®" />
      <meta property="og:description" content="PANAM® pipe weld & socket weld connectors, elbows and gauge connectors. Butt weld, socket weld & BSPP/Metric gauge connections." />
      <meta property="og:url" content="https://www.panamvalve.com/instrumentation-fittings/tube-fittings/weld-gauge" />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-pipe-weld-connector.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Weld & Gauge Connectors | Socket & Pipe Weld | PANAM®" />
      <meta name="twitter:description" content="PANAM® pipe weld & socket weld connectors, elbows and gauge connectors. Butt weld, socket weld & BSPP/Metric gauge connections." />
      <meta name="twitter:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-pipe-weld-connector.jpg" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Weld & Gauge Connectors | Socket & Pipe Weld | PANAM®",
          description: "PANAM® male pipe weld connectors & elbows, tube socket weld connectors & elbows and gauge connectors. Butt weld, socket weld & BSPP/Metric gauge connections.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: WELD_GAUGE_DATA.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${FITTING_TYPE_LABELS[item.fittingType] ?? item.fittingType} — ${item.partNumber}`,
              url: `https://www.panamvalve.com/instrumentation-fittings/tube-fittings/weld-gauge/${item.partNumber}`,
            })),
          },
        })}
      </script>

      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
        <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
          <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
            Tube Fittings — Weld & Gauge Connectors
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
            Stainless steel weld and gauge connector fittings including male pipe weld connectors, male pipe weld elbows, tube socket weld connectors, tube socket weld elbows and gauge connectors.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {["SS 316", "Imperial & Metric", "Pipe Butt Weld", "Socket Weld", "Gauge"].map(s => (
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
            {models.length} CONFIGURATIONS
          </Typography>
          <Box sx={{ display: "flex", alignItems: "stretch", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper" }}>
            {!isMobile && sidebar}
            <ProductTable models={models} defaultSortKey="partNumber" columns={[{ key: "partNumber", label: "Part Number" }, { key: "fittingType", label: "Fitting Type" }, { key: "tubeOD", label: "Tube OD" }, { label: "Pipe / Thread" }, { label: "Quote" }]} renderRow={row => <Row key={row.id} row={row} />} />
          </Box>
          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
            {sidebar}
          </Drawer>
        </Box>
      </Box>
    </>
  )
}
