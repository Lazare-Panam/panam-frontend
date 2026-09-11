"use client"
import { useState, useMemo } from "react"
import { Box, Typography, Divider, Collapse, Chip, Stack, IconButton, Button, TableRow, TableCell, Tabs, Tab, useMediaQuery, Drawer } from "@mui/material"
import { alpha } from "@mui/material/styles"
import FilterListIcon from "@mui/icons-material/FilterList"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { DIELECTRIC_DATA, GASKET_DATA, type DielectricItem, type GasketItem } from "./dielectricGasketData"
import { useCartStore } from "../../../store/useCartStore"
import { ActiveFilters } from "../../Common/ActiveFilters"
import { ProductSidebar } from "../../Common/ProductSidebar"
import { FilterGroup } from "../../Common/FilterGroup"
import { SmartCheckList } from "../../Common/SmartCheckList"
import { ProductTable } from "../../Common/ProductTable"
import { countBy } from "../../Common/filterUtils"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const GASKET_TYPES = ["PRS — ISO Parallel (G)", "PRS — Metric Parallel", "PRP — ISO Parallel (RP)", "PRP — Metric Parallel", "PRG — ISO Internal (G)", "PRG — Metric Internal"]

// ── DIELECTRIC ────────────────────────────────────────────────

interface DielectricFilters {
  fittingTypes: string[]
  tubeODUnits: string[]
}
const EMPTY_DFILTERS: DielectricFilters = { fittingTypes: [], tubeODUnits: [] }

function filterDielectric(data: DielectricItem[], filters: DielectricFilters, skip?: string) {
  return data.filter(r => {
    if (skip !== "fittingTypes" && filters.fittingTypes.length && !filters.fittingTypes.includes(r.fittingType)) return false
    if (skip !== "tubeODUnits" && filters.tubeODUnits.length && !filters.tubeODUnits.includes(r.tubeODUnit)) return false
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

function DielectricRow({ row }: { row: DielectricItem }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)
  const unitFull = row.tubeODUnit === "Imperial" ? "inch" : "mm"
  const unitShort = row.tubeODUnit === "Imperial" ? "in" : "mm"
  const detailHref = `/instrumentation-fittings/tube-fittings/die-electric/${row.partNumber}`

  const specs: Record<string, string> = {
    "Part Number": row.partNumber,
    "Fitting Type": row.fittingType,
    "Tube OD": `${row.tubeOD} ${unitFull}`,
    ...(row.pipeNPT ? { "NPT Thread": row.pipeNPT } : {}),
  }

  const cartItem = { cartItemId: row.partNumber, id: String(row.id), name: `${row.fittingType} Dielectric — ${row.partNumber}`, image: row.imageUrl, quantity: 1, partNumber: row.partNumber, specs }

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
          <Chip label={row.fittingType} size="small" sx={{ fontSize: "0.65rem", fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: "#0277BD" }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.tubeOD}
          <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
            ({unitShort})
          </Typography>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>{row.pipeNPT ?? "—"}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.tubeODUnit} size="small" sx={{ fontSize: "0.65rem", fontWeight: 600, bgcolor: alpha("#4CAF50", 0.1), color: "#2E7D32" }} />
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
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: "none" }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_BLUE, 0.02), borderLeft: `4px solid ${BRAND_BLUE}`, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 140, height: 140, flexShrink: 0, border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px", bgcolor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", p: 1 }}>
                    <img src={row.imageUrl} alt={row.partNumber} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: "block", mb: 2, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Fitting Type" value={row.fittingType} />
                      <Spec label="Tube OD" value={`${row.tubeOD} ${unitFull}`} />
                      {row.pipeNPT && <Spec label="NPT Thread" value={row.pipeNPT} />}
                      <Spec label="Unit System" value={row.tubeODUnit === "Imperial" ? "Imperial (inch)" : "Metric (mm)"} />
                      <Spec label="Material" value="SS316 + Polyamideimide Insulator" />
                      <Spec label="Pressure Rating" value="34.47 MPa (5000 PSI)" />
                      <Spec label="Temp Rating" value="-40°C to 93°C" />
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

// ── GASKET ────────────────────────────────────────────────────

interface GasketFilters {
  gasketTypes: string[]
  threadUnits: string[]
}
const EMPTY_GFILTERS: GasketFilters = { gasketTypes: [], threadUnits: [] }

function filterGasket(data: GasketItem[], filters: GasketFilters, skip?: string) {
  return data.filter(r => {
    if (skip !== "gasketTypes" && filters.gasketTypes.length && !filters.gasketTypes.includes(r.gasketType)) return false
    if (skip !== "threadUnits" && filters.threadUnits.length && !filters.threadUnits.includes(r.threadUnit)) return false
    return true
  })
}

function GasketRow({ row }: { row: GasketItem }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)
  const detailHref = `/instrumentation-fittings/tube-fittings/die-electric/gasket/${row.partNumber}`

  const specs: Record<string, string> = {
    "Part Number (SS316)": row.partNumber,
    ...(row.carbonSteelPN ? { "Part Number (Carbon Steel)": row.carbonSteelPN } : {}),
    "Gasket Type": row.gasketType,
    "Thread Size": row.threadSize,
  }

  const cartItem = { cartItemId: row.partNumber, id: String(row.id), name: `Gasket ${row.gasketType} — ${row.partNumber}`, image: row.imageUrl, quantity: 1, partNumber: row.partNumber, specs }

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
        <TableCell sx={{ fontFamily: "monospace", fontSize: "0.78rem", py: 1, color: "text.secondary" }}>{row.carbonSteelPN ?? "—"}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.gasketType} size="small" sx={{ fontSize: "0.62rem", fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: "#0277BD" }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: "monospace", fontWeight: 600 }}>{row.threadSize}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.threadUnit} size="small" sx={{ fontSize: "0.65rem", fontWeight: 600, bgcolor: alpha("#4CAF50", 0.1), color: "#2E7D32" }} />
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
          <TableCell colSpan={7} sx={{ p: 0, borderBottom: "none" }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_BLUE, 0.02), borderLeft: `4px solid ${BRAND_BLUE}`, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="flex-start">
                  <Box sx={{ width: 140, height: 140, flexShrink: 0, border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px", bgcolor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", p: 1 }}>
                    <img src={row.imageUrl} alt={row.partNumber} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: "block", mb: 2, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
                      SPECIFICATIONS
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number (SS316)" value={row.partNumber} />
                      {row.carbonSteelPN && <Spec label="Part Number (Carbon Steel)" value={row.carbonSteelPN} />}
                      <Spec label="Gasket Type" value={row.gasketType} />
                      <Spec label="Thread Size" value={row.threadSize} />
                      <Spec label="Thread Unit" value={row.threadUnit} />
                      <Spec label="Material" value="SS316 / Carbon Steel / Copper" />
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

// ── MAIN PAGE ─────────────────────────────────────────────────

export default function DielectricGasketPage() {
  const isMobile = useMediaQuery("(max-width:1200px)")
  const [tab, setTab] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dFilters, setDFilters] = useState<DielectricFilters>(EMPTY_DFILTERS)
  const [gFilters, setGFilters] = useState<GasketFilters>(EMPTY_GFILTERS)

  const filteredD = useMemo(() => filterDielectric(DIELECTRIC_DATA, dFilters), [dFilters])
  const filteredG = useMemo(() => filterGasket(GASKET_DATA, gFilters), [gFilters])

  const dCounts = useMemo(
    () => ({
      fittingTypes: countBy(filterDielectric(DIELECTRIC_DATA, dFilters, "fittingTypes"), r => r.fittingType),
      tubeODUnits: countBy(filterDielectric(DIELECTRIC_DATA, dFilters, "tubeODUnits"), r => r.tubeODUnit),
    }),
    [dFilters]
  )

  const gCounts = useMemo(
    () => ({
      gasketTypes: countBy(filterGasket(GASKET_DATA, gFilters, "gasketTypes"), r => r.gasketType),
      threadUnits: countBy(filterGasket(GASKET_DATA, gFilters, "threadUnits"), r => r.threadUnit),
    }),
    [gFilters]
  )

  const dAllOptions = {
    fittingTypes: [...new Set(DIELECTRIC_DATA.map(r => r.fittingType))],
    tubeODUnits: [...new Set(DIELECTRIC_DATA.map(r => r.tubeODUnit))],
  }

  const dActiveCount = dFilters.fittingTypes.length + dFilters.tubeODUnits.length
  const gActiveCount = gFilters.gasketTypes.length + gFilters.threadUnits.length

  const dChips = [...dFilters.fittingTypes.map(v => ({ label: v, onDelete: () => setDFilters(p => ({ ...p, fittingTypes: p.fittingTypes.filter(x => x !== v) })) })), ...dFilters.tubeODUnits.map(v => ({ label: v, onDelete: () => setDFilters(p => ({ ...p, tubeODUnits: p.tubeODUnits.filter(x => x !== v) })) }))]

  const gChips = [...gFilters.gasketTypes.map(v => ({ label: v, onDelete: () => setGFilters(p => ({ ...p, gasketTypes: p.gasketTypes.filter(x => x !== v) })) })), ...gFilters.threadUnits.map(v => ({ label: v, onDelete: () => setGFilters(p => ({ ...p, threadUnits: p.threadUnits.filter(x => x !== v) })) }))]

  const dSidebar = (
    <ProductSidebar activeCount={dActiveCount} onClearAll={() => setDFilters(EMPTY_DFILTERS)}>
      <FilterGroup title="FITTING TYPE" count={dFilters.fittingTypes.length || undefined}>
        <SmartCheckList options={dAllOptions.fittingTypes} selected={dFilters.fittingTypes} onChange={v => setDFilters(p => ({ ...p, fittingTypes: p.fittingTypes.includes(v) ? p.fittingTypes.filter(x => x !== v) : [...p.fittingTypes, v] }))} counts={dCounts.fittingTypes} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="UNIT SYSTEM" count={dFilters.tubeODUnits.length || undefined}>
        <SmartCheckList options={dAllOptions.tubeODUnits} selected={dFilters.tubeODUnits} onChange={v => setDFilters(p => ({ ...p, tubeODUnits: p.tubeODUnits.includes(v) ? p.tubeODUnits.filter(x => x !== v) : [...p.tubeODUnits, v] }))} counts={dCounts.tubeODUnits} />
      </FilterGroup>
    </ProductSidebar>
  )

  const gSidebar = (
    <ProductSidebar activeCount={gActiveCount} onClearAll={() => setGFilters(EMPTY_GFILTERS)}>
      <FilterGroup title="GASKET TYPE" count={gFilters.gasketTypes.length || undefined}>
        <SmartCheckList options={GASKET_TYPES} selected={gFilters.gasketTypes} onChange={v => setGFilters(p => ({ ...p, gasketTypes: p.gasketTypes.includes(v) ? p.gasketTypes.filter(x => x !== v) : [...p.gasketTypes, v] }))} counts={gCounts.gasketTypes} />
      </FilterGroup>
      <Divider sx={{ my: 0.5 }} />
      <FilterGroup title="THREAD UNIT" count={gFilters.threadUnits.length || undefined}>
        <SmartCheckList options={["Imperial", "Metric"]} selected={gFilters.threadUnits} onChange={v => setGFilters(p => ({ ...p, threadUnits: p.threadUnits.includes(v) ? p.threadUnits.filter(x => x !== v) : [...p.threadUnits, v] }))} counts={gCounts.threadUnits} />
      </FilterGroup>
    </ProductSidebar>
  )

  return (
    <>
      <title>Dielectric Tube Fittings & Gaskets | PANAM®</title>
      <meta name="description" content="PANAM® stainless steel dielectric tube fittings isolate instruments from electric currents, voltage & static. Polyamideimide insulation, rated to 5000 PSI, -40°C to 93°C." />
      <link rel="canonical" href="https://www.panamvalve.com/instrumentation-fittings/tube-fittings/die-electric" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Panam Valves" />
      <meta property="og:title" content="Dielectric Tube Fittings & Gaskets | PANAM®" />
      <meta property="og:description" content="PANAM® dielectric tube fittings isolate instruments from electric currents, voltage & static. Polyamideimide insulation, rated to 5000 PSI." />
      <meta property="og:url" content="https://www.panamvalve.com/instrumentation-fittings/tube-fittings/die-electric" />
      <meta property="og:image" content="https://pblol2.blob.core.windows.net/panam-images/products/tube-fittings/dielectric-fittings.jpg" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Dielectric Tube Fittings & Gaskets | PANAM®",
          description: "PANAM® stainless steel dielectric tube fittings isolate instruments from electric currents, voltage & static. Polyamideimide insulation, rated to 5000 PSI, -40°C to 93°C.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              ...DIELECTRIC_DATA.map((item, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: `${item.fittingType} Dielectric — ${item.partNumber}`,
                url: `https://www.panamvalve.com/instrumentation-fittings/tube-fittings/die-electric/${item.partNumber}`,
              })),
              ...GASKET_DATA.map((item, i) => ({
                "@type": "ListItem",
                position: DIELECTRIC_DATA.length + i + 1,
                name: `Gasket ${item.gasketType} — ${item.partNumber}`,
                url: `https://www.panamvalve.com/instrumentation-fittings/tube-fittings/die-electric/gasket/${item.partNumber}`,
              })),
            ],
          },
        })}
      </script>

      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#f8f9fa" }}>
        <Box sx={{ p: 4, borderBottom: "1px solid rgba(0,0,0,0.08)", bgcolor: "background.paper" }}>
          <Typography variant="h4" fontWeight={800} mb={1} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>
            Dielectric Fittings & Gaskets
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2} sx={{ maxWidth: 700, fontFamily: PRIMARY_FONT }}>
            Stainless steel dielectric tube fittings for electrical isolation, and precision thread sealing gaskets for parallel and internal threads.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {["SS316", "5000 PSI", "Polyamideimide Insulator", "ISO Parallel", "Metric Thread", "Copper Gaskets"].map(s => (
              <Box key={s} sx={{ px: 1.5, py: 0.5, borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600, bgcolor: alpha(BRAND_BLUE, 0.08), color: "#0277BD", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, fontFamily: PRIMARY_FONT }}>
                {s}
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ bgcolor: "background.paper", borderBottom: "1px solid rgba(0,0,0,0.08)", px: 4 }}>
          <Tabs
            value={tab}
            onChange={(_, v) => {
              setTab(v)
              setMobileOpen(false)
            }}
            sx={{ "& .MuiTab-root": { fontFamily: PRIMARY_FONT, fontWeight: 700, textTransform: "none", fontSize: "0.9rem" }, "& .Mui-selected": { color: `${BRAND_BLUE} !important` }, "& .MuiTabs-indicator": { bgcolor: BRAND_BLUE } }}>
            <Tab label={`Dielectric Fittings (${filteredD.length})`} />
            <Tab label={`Gaskets (${filteredG.length})`} />
          </Tabs>
        </Box>

        <Box sx={{ p: { xs: 2, md: 3 }, flex: 1 }}>
          {isMobile && (
            <IconButton onClick={() => setMobileOpen(true)} sx={{ mb: 2 }}>
              <FilterListIcon />
            </IconButton>
          )}

          {tab === 0 && (
            <>
              <ActiveFilters chips={dChips} />
              <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: "block", mb: 1, fontFamily: PRIMARY_FONT }}>
                {filteredD.length} CONFIGURATIONS
              </Typography>
              <Box sx={{ display: "flex", alignItems: "stretch", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper" }}>
                {!isMobile && dSidebar}
                <ProductTable models={filteredD} defaultSortKey="partNumber" columns={[{ key: "partNumber", label: "Part Number" }, { key: "fittingType", label: "Type" }, { key: "tubeOD", label: "Tube OD" }, { label: "NPT Thread" }, { key: "tubeODUnit", label: "Unit" }, { label: "Quote" }]} renderRow={row => <DielectricRow key={row.id} row={row} />} />
              </Box>
              <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
                {dSidebar}
              </Drawer>
            </>
          )}

          {tab === 1 && (
            <>
              <ActiveFilters chips={gChips} />
              <Typography variant="caption" fontWeight={700} color="text.secondary" sx={{ display: "block", mb: 1, fontFamily: PRIMARY_FONT }}>
                {filteredG.length} CONFIGURATIONS
              </Typography>
              <Box sx={{ display: "flex", alignItems: "stretch", border: `1px solid ${alpha(BRAND_BLUE, 0.2)}`, borderRadius: "8px", overflow: "hidden", bgcolor: "background.paper" }}>
                {!isMobile && gSidebar}
                <ProductTable
                  models={filteredG}
                  defaultSortKey="partNumber"
                  columns={[{ key: "partNumber", label: "Part No. (SS316)" }, { key: "carbonSteelPN", label: "Part No. (Carbon Steel)" }, { key: "gasketType", label: "Gasket Type" }, { key: "threadSize", label: "Thread Size" }, { key: "threadUnit", label: "Unit" }, { label: "Quote" }]}
                  renderRow={row => <GasketRow key={row.id} row={row} />}
                />
              </Box>
              <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
                {gSidebar}
              </Drawer>
            </>
          )}
        </Box>
      </Box>
    </>
  )
}
