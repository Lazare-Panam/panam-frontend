import { useState, useMemo } from "react"
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, TablePagination, TableSortLabel, Collapse, Chip, Stack,
  IconButton, Button, Accordion, AccordionSummary, AccordionDetails,
  FormGroup, FormControlLabel, Checkbox, Divider, ToggleButtonGroup, ToggleButton
} from "@mui/material"
import { alpha } from "@mui/material/styles"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import FilterListIcon from "@mui/icons-material/FilterList"
import { useMediaQuery, Drawer } from "@mui/material"
import { PORT_CONNECTOR_DATA, type PortConnectorItem } from "./portConnectorData"
import { useCartStore } from "../store/useCartStore"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const FITTING_TYPE_LABELS: Record<string, string> = {
  "Port Connector": "Port Connector (PPC)",
  "Reducing Port Connector": "Reducing Port Connector (PRPC)",
}

const IMPERIAL_ODS = ['1/8', '3/16', '1/4', '5/16', '3/8', '1/2', '5/8', '3/4', '7/8', '1']
const METRIC_ODS = ['3', '6', '8', '10', '12', '16', '18', '20', '22', '25', '28', '32', '38']

interface Filters {
  fittingTypes: string[]
  tubeODs: string[]
  tubeODUnits: string[]
}

const EMPTY_FILTERS: Filters = { fittingTypes: [], tubeODs: [], tubeODUnits: [] }

const toggleSx = {
  "& .MuiToggleButton-root": { fontSize: "0.7rem", py: 0.5, px: 1, textTransform: "none" },
  "& .Mui-selected": { bgcolor: `${BRAND_BLUE} !important`, color: "#fff !important" },
}

function FilterGroup({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <Accordion defaultExpanded disableGutters elevation={0} sx={{ bgcolor: "transparent", "&:before": { display: "none" }, mb: 0.5 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ px: 0, minHeight: 36, "& .MuiAccordionSummary-content": { my: 0.5 } }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" fontWeight={700} color="text.primary" fontFamily={PRIMARY_FONT}>{title}</Typography>
          {count ? <Chip label={count} size="small" sx={{ height: 16, fontSize: "0.65rem", bgcolor: BRAND_BLUE, color: "#fff" }} /> : null}
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0 }}>
        <FormGroup>{children}</FormGroup>
      </AccordionDetails>
    </Accordion>
  )
}

function Sidebar({ filters, setFilters, activeCount }: { filters: Filters; setFilters: React.Dispatch<React.SetStateAction<Filters>>; activeCount: number }) {
  const toggle = (key: keyof Filters, val: string) =>
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(val) ? prev[key].filter(v => v !== val) : [...prev[key], val],
    }))

  const selectedUnit = filters.tubeODUnits[0] ?? "all"
  const visibleODs = selectedUnit === "Imperial" ? IMPERIAL_ODS : selectedUnit === "Metric" ? METRIC_ODS : [...IMPERIAL_ODS, ...METRIC_ODS]

  return (
    <Box sx={{ width: 260, flexShrink: 0, p: 2, borderRight: "1px solid", borderColor: "divider", bgcolor: "background.paper", overflowY: "auto", boxSizing: "border-box" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="caption" fontWeight={900} letterSpacing={1} color="text.secondary" fontFamily={PRIMARY_FONT}>FILTER</Typography>
        {activeCount > 0 && (
          <Typography variant="caption" fontWeight={700} sx={{ cursor: "pointer", color: BRAND_BLUE, fontFamily: PRIMARY_FONT }} onClick={() => setFilters(EMPTY_FILTERS)}>Clear all</Typography>
        )}
      </Stack>

      <FilterGroup title="FITTING TYPE" count={filters.fittingTypes.length || undefined}>
        {Object.keys(FITTING_TYPE_LABELS).map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.fittingTypes.includes(opt)} onChange={() => toggle("fittingTypes", opt)} sx={{ py: 0.25, "&.Mui-checked": { color: BRAND_BLUE } }} />}
            label={<Typography variant="body2" fontSize="0.78rem" fontFamily={PRIMARY_FONT}>{FITTING_TYPE_LABELS[opt]}</Typography>}
          />
        ))}
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />

      <FilterGroup title="TUBE OD" count={filters.tubeODs.length || undefined}>
        <ToggleButtonGroup exclusive size="small" sx={{ mt: 0.5, mb: 1.5, ...toggleSx }}
          value={selectedUnit}
          onChange={(_, val) => { if (!val) return; setFilters(prev => ({ ...prev, tubeODUnits: val === "all" ? [] : [val], tubeODs: [] })) }}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="Imperial">Imperial</ToggleButton>
          <ToggleButton value="Metric">Metric</ToggleButton>
        </ToggleButtonGroup>
        {visibleODs.map(opt => (
          <FormControlLabel key={opt}
            control={<Checkbox size="small" checked={filters.tubeODs.includes(opt)} onChange={() => toggle("tubeODs", opt)} sx={{ py: 0.25, "&.Mui-checked": { color: BRAND_BLUE } }} />}
            label={<Typography variant="body2" fontSize="0.78rem" fontFamily={PRIMARY_FONT}>{opt}</Typography>}
          />
        ))}
      </FilterGroup>
    </Box>
  )
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

function Row({ row }: { row: PortConnectorItem }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)
  const unitShort = row.tubeODUnit === "Imperial" ? "in" : "mm"
  const unitFull = row.tubeODUnit === "Imperial" ? "inch" : "mm"

  const odLabel = row.tubeOD2 ? `${row.tubeOD} × ${row.tubeOD2}` : row.tubeOD

  const specs = {
    "Part Number": row.partNumber,
    "Fitting Type": FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType,
    "Tube OD": `${row.tubeOD} ${unitFull}`,
    ...(row.tubeOD2 ? { "Tube OD 2": `${row.tubeOD2} ${unitFull}` } : {}),
  }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{ cursor: "pointer", bgcolor: open ? alpha(BRAND_BLUE, 0.04) : "inherit", "&:hover": { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` } }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: "monospace", fontWeight: 700, color: BRAND_BLUE, fontSize: "0.8rem", py: 1 }}>{row.partNumber}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType} size="small" sx={{ fontSize: "0.65rem", fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: "#0277BD" }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {odLabel}
          <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>({unitShort})</Typography>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.tubeODUnit} size="small" sx={{ fontSize: "0.65rem", fontWeight: 600, bgcolor: alpha("#4CAF50", 0.1), color: "#2E7D32" }} />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); addItem({ cartItemId: row.partNumber, id: String(row.id), name: `${row.fittingType} — ${row.partNumber}`, image: row.imageUrl, quantity: 1, partNumber: row.partNumber, specs }) }}
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
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: "block", mb: 2, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Fitting Type" value={FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType} />
                      <Spec label="Tube OD" value={`${row.tubeOD} ${unitFull}`} />
                      {row.tubeOD2 && <Spec label="Tube OD 2" value={`${row.tubeOD2} ${unitFull}`} />}
                    </Stack>
                    <Button variant="contained"
                      onClick={() => addItem({ cartItemId: row.partNumber, id: String(row.id), name: `${row.fittingType} — ${row.partNumber}`, image: row.imageUrl, quantity: 1, partNumber: row.partNumber, specs })}
                      sx={{ textTransform: "none", fontWeight: 700, borderRadius: "6px", bgcolor: BRAND_BLUE, fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0199d4" } }}>
                      Add to Quote
                    </Button>
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

export default function PortConnectorPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState("partNumber")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")

  const filtered = useMemo(() => {
    return PORT_CONNECTOR_DATA.filter(r => {
      if (filters.fittingTypes.length && !filters.fittingTypes.includes(r.fittingType)) return false
      if (filters.tubeODUnits.length && !filters.tubeODUnits.includes(r.tubeODUnit)) return false
      if (filters.tubeODs.length && !filters.tubeODs.includes(r.tubeOD)) return false
      return true
    })
  }, [filters])

  const sorted = [...filtered].sort((a, b) => {
    const av = (a as any)[sortKey] ?? "", bv = (b as any)[sortKey] ?? ""
    if (av < bv) return sortDir === "asc" ? -1 : 1
    if (av > bv) return sortDir === "asc" ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  const activeCount = filters.fittingTypes.length + filters.tubeODs.length + filters.tubeODUnits.length

  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc")
    else { setSortKey(key); setSortDir("asc") }
  }

  const headerSx = {
    bgcolor: alpha(BRAND_BLUE, 0.04), borderBottom: `2px solid ${BRAND_BLUE}`,
    fontWeight: 700, fontSize: "0.72rem", textTransform: "uppercase" as const,
    letterSpacing: "0.05em", fontFamily: PRIMARY_FONT,
  }

  const sidebar = <Sidebar filters={filters} setFilters={setFilters} activeCount={activeCount} />

  return (
    <>      <title>Tube Fitting Port Connectors | Imperial & Metric | PANAM®</title>
      <meta name="description" content={'PANAM® tube fitting port connectors & reducing port connectors for direct tube-to-port connections. Imperial & Metric tube OD. Secure, leak-tight SS316.'} />
      <link rel="canonical" href="https://www.panamvalves.com/instrumentation-fittings/tube-fittings/port-connector" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Tube Fitting Port Connectors | Imperial & Metric | PANAM®" />
      <meta property="og:description" content={'PANAM® tube fitting port connectors & reducing port connectors for tube-to-port connections. Imperial & Metric tube OD.'} />
      <meta property="og:url" content="https://www.panamvalves.com/instrumentation-fittings/tube-fittings/port-connector" />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/port-connector.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tube Fitting Port Connectors | Imperial & Metric | PANAM®" />
      <meta name="twitter:description" content={'PANAM® tube fitting port connectors & reducing port connectors for tube-to-port connections. Imperial & Metric tube OD.'} />
      <meta name="twitter:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/port-connector.jpg" />
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
      <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
        <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
          Tube Fittings — Port Connectors
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
          Stainless steel port connectors and reducing port connectors for direct tube-to-port connections. Available in Imperial and Metric tube OD.
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {["SS 316", "Imperial & Metric", "Port Connector", "Reducing"].map(s => (
            <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, bgcolor: alpha(BRAND_BLUE, 0.08), color: "#0277BD", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, fontFamily: PRIMARY_FONT }}>{s}</Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
        {isMobile && <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}><FilterListIcon /></IconButton>}

        {activeCount > 0 && (
          <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap" mb={2}>
            <Typography variant="caption" color="text.secondary" fontWeight={700} fontFamily={PRIMARY_FONT}>ACTIVE FILTERS:</Typography>
            {filters.fittingTypes.map(v => <Chip key={v} label={FITTING_TYPE_LABELS[v] ?? v} size="small" variant="outlined" sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }} onDelete={() => setFilters(p => ({ ...p, fittingTypes: p.fittingTypes.filter(x => x !== v) }))} />)}
            {filters.tubeODUnits.map(v => <Chip key={v} label={v} size="small" variant="outlined" sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }} onDelete={() => setFilters(p => ({ ...p, tubeODUnits: p.tubeODUnits.filter(x => x !== v), tubeODs: [] }))} />)}
            {filters.tubeODs.map(v => <Chip key={v} label={`OD: ${v}`} size="small" variant="outlined" sx={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }} onDelete={() => setFilters(p => ({ ...p, tubeODs: p.tubeODs.filter(x => x !== v) }))} />)}
          </Stack>
        )}

        <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: "block", mb: 1, fontFamily: PRIMARY_FONT }}>
          {filtered.length} CONFIGURATIONS
        </Typography>

        <Box sx={{ display: "flex", alignItems: "stretch", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper" }}>
          {!isMobile && sidebar}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <TableContainer>
              <Table size="small" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ ...headerSx, width: 40 }} />
                    {[
                      { key: "partNumber", label: "Part Number" },
                      { key: "fittingType", label: "Fitting Type" },
                      { key: "tubeOD", label: "Tube OD" },
                      { key: "tubeODUnit", label: "Unit" },
                      { key: null, label: "Quote" },
                    ].map((h, i) => (
                      <TableCell key={i} sx={headerSx}>
                        {h.key ? <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : "asc"} onClick={() => handleSort(h.key!)}>{h.label}</TableSortLabel> : h.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginated.length === 0 ? (
                    <TableRow><TableCell colSpan={6} align="center" sx={{ py: 6 }}><Typography variant="body2" color="text.secondary">No fittings found.</Typography></TableCell></TableRow>
                  ) : paginated.map(row => <Row key={row.id} row={row} />)}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination component="div" count={sorted.length} page={page} rowsPerPage={rowsPerPage}
              onPageChange={(_, p) => setPage(p)} onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
              rowsPerPageOptions={[25, 50, 100]} sx={{ borderTop: "1px solid rgba(0,0,0,0.06)" }} />
          </Box>
        </Box>

        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>{sidebar}</Drawer>
      </Box>
    </Box>
    </>

  )
}