import { useState, useMemo } from "react"
import { Box, Typography, Divider, useMediaQuery, Drawer, IconButton, Collapse, Chip, Stack, Button, TableRow, TableCell } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { ACCESSORY_DATA, type AccessoryItem } from "./accessoryData"
import { useCartStore } from "../../../store/useCartStore"
import { ActiveFilters } from "../Common/ActiveFilters"
import { ProductSidebar } from "../Common/ProductSidebar"
import { FilterGroup } from "../Common/FilterGroup"
import { SmartCheckList } from "../Common/SmartCheckList"
import { UnitToggle } from "../Common/UnitToggle"
import { ProductTable } from "../Common/ProductTable"
import { countBy } from "../Common/filterUtils"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const FITTING_TYPE_LABELS: Record<string, string> = {
  "Tube Plug":     "Tube Plug (PTP)",
  "Tube Cap":      "Tube Cap (PTC)",
  "Nut":           "Nut (PN)",
  "Front Ferrule": "Front Ferrule (PFF)",
  "Back Ferrule":  "Back Ferrule (PBF)",
  "Pipe Insert":   "Pipe Insert (PIN)",
}

const IMPERIAL_ODS = ["1/16", "1/8", "3/16", "1/4", "5/16", "3/8", "1/2", "5/8", "3/4", "7/8", "1", "1-1/4", "1-1/2", "2"]
const METRIC_ODS = ["2", "3", "4", "6", "8", "10", "12", "14", "15", "16", "18", "19", "20", "22", "25", "28", "30", "32", "38", "42", "50"]

interface Filters { fittingTypes: string[]; tubeODs: string[]; tubeODUnits: string[] }
const EMPTY_FILTERS: Filters = { fittingTypes: [], tubeODs: [], tubeODUnits: [] }

function filterData(data: AccessoryItem[], filters: Filters, skip?: string) {
  return data.filter(r => {
    if (skip !== "fittingTypes" && filters.fittingTypes.length && !filters.fittingTypes.includes(r.fittingType)) return false
    if (skip !== "tubeODUnits" && filters.tubeODUnits.length && !filters.tubeODUnits.includes(r.tubeODUnit)) return false
    if (skip !== "tubeODs" && filters.tubeODs.length && !filters.tubeODs.includes(r.tubeOD)) return false
    return true
  })
}

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ display: "block", textTransform: "uppercase", mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

function Row({ row }: { row: AccessoryItem }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)
  const unitShort = row.tubeODUnit === "Imperial" ? "in" : "mm"
  const unitFull = row.tubeODUnit === "Imperial" ? "inch" : "mm"
  const detailHref = `/instrumentation-fittings/tube-fittings/accessories/${row.partNumber}`

  const specs: Record<string, string> = {
    "Part Number":  row.partNumber,
    "Fitting Type": FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType,
    "Tube OD":      `${row.tubeOD} ${unitFull}`,
    ...(row.tubeID ? { "Tube ID": `${row.tubeID} ${unitFull}` } : {}),
  }

  const cartItem = { cartItemId: row.partNumber, id: String(row.id), name: `${row.fittingType} — ${row.partNumber}`, image: row.imageUrl, quantity: 1, partNumber: row.partNumber, specs }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)}
        sx={{ cursor: "pointer", bgcolor: open ? alpha(BRAND_BLUE, 0.04) : "inherit", "&:hover": { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: "monospace", fontWeight: 700, py: 1 }}>
          <a href={detailHref} onClick={e => e.stopPropagation()} style={{ color: BRAND_BLUE, textDecoration: "none", fontSize: "0.8rem", fontWeight: 700 }}>{row.partNumber}</a>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType} size="small" sx={{ fontSize: "0.65rem", fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: "#0277BD" }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.tubeOD}<Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>({unitShort})</Typography>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.tubeID ? `${row.tubeID} (${unitShort})` : "—"}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.tubeODUnit} size="small" sx={{ fontSize: "0.65rem", fontWeight: 600, bgcolor: alpha("#4CAF50", 0.1), color: "#2E7D32" }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained" onClick={e => { e.stopPropagation(); addItem(cartItem) }}
            sx={{ fontSize: "0.7rem", fontWeight: 700, py: 0.5, px: 1.5, borderRadius: "4px", textTransform: "none", whiteSpace: "nowrap", bgcolor: BRAND_BLUE, boxShadow: "none", fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0199d4", boxShadow: "none" } }}>
            Add to Quote
          </Button>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: "none" }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_BLUE, 0.02), borderLeft: `4px solid ${BRAND_BLUE}`, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 140, height: 140, flexShrink: 0, border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px", overflow: "hidden", bgcolor: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={row.imageUrl} alt={row.partNumber} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: "block", mb: 2, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number"  value={row.partNumber} />
                      <Spec label="Fitting Type" value={FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType} />
                      <Spec label="Tube OD"      value={`${row.tubeOD} ${unitFull}`} />
                      {row.tubeID && <Spec label="Tube ID" value={`${row.tubeID} ${unitFull}`} />}
                      <Spec label="Unit System"  value={row.tubeODUnit === "Imperial" ? "Imperial (inch)" : "Metric (mm)"} />
                      <Spec label="Material"     value="SS 316" />
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Button variant="contained" onClick={() => addItem(cartItem)}
                        sx={{ textTransform: "none", fontWeight: 700, borderRadius: "6px", bgcolor: BRAND_BLUE, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0199d4" } }}>
                        Add to Quote
                      </Button>
                      <Button variant="outlined" component="a" href={detailHref}
                        sx={{ textTransform: "none", fontWeight: 700, borderRadius: "6px", borderColor: BRAND_BLUE, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: alpha(BRAND_BLUE, 0.05) } }}>
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

export default function AccessoryPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)

  const models = useMemo(() => filterData(ACCESSORY_DATA, filters), [filters])

  const counts = useMemo(() => ({
    fittingTypes: countBy(filterData(ACCESSORY_DATA, filters, "fittingTypes"), r => r.fittingType),
    tubeODs:      countBy(filterData(ACCESSORY_DATA, filters, "tubeODs"),      r => r.tubeOD),
    tubeODUnits:  countBy(filterData(ACCESSORY_DATA, filters, "tubeODUnits"),  r => r.tubeODUnit),
  }), [filters])

  const allOptions = {
    fittingTypes: [...new Set(ACCESSORY_DATA.map(r => r.fittingType))],
    tubeODUnits:  [...new Set(ACCESSORY_DATA.map(r => r.tubeODUnit))],
  }

  const activeCount = filters.fittingTypes.length + filters.tubeODs.length + filters.tubeODUnits.length
  const selectedUnit = filters.tubeODUnits[0] ?? "all"
  const visibleODs = selectedUnit === "Imperial" ? IMPERIAL_ODS : selectedUnit === "Metric" ? METRIC_ODS : [...IMPERIAL_ODS, ...METRIC_ODS]

  const toggle = (key: keyof Filters, val: string) =>
    setFilters(p => ({ ...p, [key]: p[key].includes(val) ? p[key].filter(x => x !== val) : [...p[key], val] }))

  const chips = [
    ...filters.fittingTypes.map(v => ({ label: FITTING_TYPE_LABELS[v] ?? v, onDelete: () => setFilters(p => ({ ...p, fittingTypes: p.fittingTypes.filter(x => x !== v) })) })),
    ...filters.tubeODUnits.map(v => ({ label: v, onDelete: () => setFilters(p => ({ ...p, tubeODUnits: p.tubeODUnits.filter(x => x !== v), tubeODs: [] })) })),
    ...filters.tubeODs.map(v => ({ label: `OD: ${v}`, onDelete: () => setFilters(p => ({ ...p, tubeODs: p.tubeODs.filter(x => x !== v) })) })),
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
    </ProductSidebar>
  )

  return (
    <>
      <title>Tube Fitting Accessories | Ferrules, Plugs & Nuts | PANAM®</title>
      <meta name="description" content="PANAM® stainless steel tube fitting accessories — tube plugs, tube caps, nuts, front ferrules, back ferrules and pipe inserts. Imperial & Metric." />
      <link rel="canonical" href="https://www.panamvalves.com/instrumentation-fittings/tube-fittings/accessories" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Tube Fitting Accessories | Ferrules, Plugs & Nuts | PANAM®" />
      <meta property="og:description" content="PANAM® stainless steel tube fitting accessories — tube plugs, tube caps, nuts, front ferrules, back ferrules and pipe inserts." />
      <meta property="og:url" content="https://www.panamvalves.com/instrumentation-fittings/tube-fittings/accessories" />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-pipe-weld-connector.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tube Fitting Accessories | Ferrules, Plugs & Nuts | PANAM®" />
      <meta name="twitter:description" content="PANAM® stainless steel tube fitting accessories — tube plugs, tube caps, nuts, front ferrules, back ferrules and pipe inserts." />
      <meta name="twitter:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/male-pipe-weld-connector.jpg" />

      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
        <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
          <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
            Tube Fittings — Accessories
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
            Stainless steel tube fitting accessories including tube plugs, tube caps, nuts, front ferrules, back ferrules and pipe inserts. Available in Imperial and Metric tube OD.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {["SS 316", "Imperial & Metric", "Ferrules", "Plugs & Caps", "Nuts"].map(s => (
              <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, bgcolor: alpha(BRAND_BLUE, 0.08), color: "#0277BD", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, fontFamily: PRIMARY_FONT }}>{s}</Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          {isMobile && <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}><FilterListIcon /></IconButton>}
          <ActiveFilters chips={chips} />
          <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: "block", mb: 1, fontFamily: PRIMARY_FONT }}>
            {models.length} CONFIGURATIONS
          </Typography>
          <Box sx={{ display: "flex", alignItems: "stretch", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper" }}>
            {!isMobile && sidebar}
            <ProductTable
              models={models}
              defaultSortKey="partNumber"
              columns={[
                { key: "partNumber", label: "Part Number" },
                { key: "fittingType", label: "Fitting Type" },
                { key: "tubeOD", label: "Tube OD" },
                { label: "Tube ID" },
                { key: "tubeODUnit", label: "Unit" },
                { label: "Quote" },
              ]}
              renderRow={row => <Row key={row.id} row={row} />}
            />
          </Box>
          <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
        </Box>
      </Box>
    </>
  )
}