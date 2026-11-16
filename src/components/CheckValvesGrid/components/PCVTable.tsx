import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack, IconButton, Button
} from "@mui/material"
import { alpha } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { type PCVDto } from "../../../api/checkValveApi"
import { INLET_OUTLET_LABELS, MATERIAL_LABELS, formatPressure } from "../hooks/types"
import { useCartStore } from "../../store/useCartStore"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ display: "block", textTransform: "uppercase", mb: 0.25, fontFamily: PRIMARY_FONT }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600} sx={{ fontFamily: PRIMARY_FONT }}>{value}</Typography>
    </Box>
  )
}

function PCVRow({ row }: { row: PCVDto }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)
  const navigate = useNavigate()

  const specs = {
    "Part Number": row.partNumber,
    "Material": MATERIAL_LABELS[row.material] ?? row.material,
    "Working Pressure": row.pressureRating ? formatPressure(row.pressureRating) : "—",
    "Inlet Type": INLET_OUTLET_LABELS[row.inlet] ?? row.inlet,
    "Inlet Size": row.inletTubeOD,
    "Outlet Type": row.outlet ? (INLET_OUTLET_LABELS[row.outlet] ?? row.outlet) : "—",
    "Outlet Size": row.outletTubeOD ?? "—",
  }

  return (
    <>
      <TableRow
        hover
        onClick={() => navigate(`/valves/check-valves/${row.partNumber}`)}
        sx={{
          cursor: "pointer",
          bgcolor: open ? alpha(BRAND_BLUE, 0.04) : "inherit",
          "&:hover": { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` },
        }}
      >
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: "monospace", fontWeight: 700, color: BRAND_BLUE, fontSize: "0.8rem", py: 1 }}>
          {row.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={MATERIAL_LABELS[row.material] ?? row.material} size="small"
            sx={{ fontSize: "0.65rem", fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: "#0277BD" }}
          />
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          {row.pressureRating ? (
            <Chip label={formatPressure(row.pressureRating)} size="small"
              sx={{ fontSize: "0.68rem", fontWeight: 800, bgcolor: BRAND_BLUE, color: "#fff" }}
            />
          ) : "—"}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {INLET_OUTLET_LABELS[row.inlet] ?? row.inlet}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.inletTubeOD}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.outlet ? (INLET_OUTLET_LABELS[row.outlet] ?? row.outlet) : "—"}
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.outletTubeOD ?? "—"}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button
            size="small"
            variant="contained"
            onClick={e => {
              e.stopPropagation()
              addItem({
                cartItemId: row.partNumber,
                id: String(row.id),
                name: `PCV Check Valve — ${row.partNumber}`,
                image: row.imageUrl,
                quantity: 1,
                partNumber: row.partNumber,
                specs,
              })
            }}
            sx={{ fontSize: "0.7rem", fontWeight: 700, py: 0.5, px: 1.5, borderRadius: "4px", textTransform: "none", whiteSpace: "nowrap", bgcolor: BRAND_BLUE, boxShadow: "none", "&:hover": { bgcolor: "#0199d4", boxShadow: "none" } }}
          >
            Add to Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={9} sx={{ p: 0, borderBottom: "none" }}>
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
                      <Spec label="Material" value={MATERIAL_LABELS[row.material] ?? row.material} />
                      <Spec label="Working Pressure" value={row.pressureRating ? formatPressure(row.pressureRating) : undefined} />
                      <Spec label="Inlet Type" value={INLET_OUTLET_LABELS[row.inlet] ?? row.inlet} />
                      <Spec label="Inlet Size" value={row.inletTubeOD} />
                      <Spec label="Outlet Type" value={row.outlet ? (INLET_OUTLET_LABELS[row.outlet] ?? row.outlet) : undefined} />
                      <Spec label="Outlet Size" value={row.outletTubeOD ?? undefined} />
                    </Stack>
                    <Stack direction="row" gap={2}>
                      <Button
                        variant="contained"
                        onClick={e => {
                          e.stopPropagation()
                          addItem({
                            cartItemId: row.partNumber,
                            id: String(row.id),
                            name: `PCV Check Valve — ${row.partNumber}`,
                            image: row.imageUrl,
                            quantity: 1,
                            partNumber: row.partNumber,
                            specs,
                          })
                        }}
                        sx={{ textTransform: "none", fontWeight: 700, borderRadius: "6px", bgcolor: BRAND_BLUE, "&:hover": { bgcolor: "#0199d4" }, fontFamily: PRIMARY_FONT }}
                      >
                        Add to Quote
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={e => { e.stopPropagation(); navigate(`/valves/check-valves/${row.partNumber}`) }}
                        sx={{ textTransform: "none", fontWeight: 700, borderRadius: "6px", borderColor: BRAND_BLUE, color: BRAND_BLUE, fontFamily: PRIMARY_FONT, "&:hover": { borderColor: "#0199d4", color: "#0199d4", bgcolor: "transparent" } }}
                      >
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

type SortKey = "partNumber" | "pressureRating" | "inlet" | "inletTubeOD" | "outlet" | "outletTubeOD"

export default function PCVTable({ models, isFetching }: { models: PCVDto[]; isFetching?: boolean }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)
  const [sortKey, setSortKey] = useState<SortKey>("partNumber")
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc")

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc")
    else { setSortKey(key); setSortDir("asc") }
  }

  const sorted = [...models].sort((a, b) => {
    const av = a[sortKey] ?? "", bv = b[sortKey] ?? ""
    if (av < bv) return sortDir === "asc" ? -1 : 1
    if (av > bv) return sortDir === "asc" ? 1 : -1
    return 0
  })

  const paginated = sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const headerSx = {
    bgcolor: alpha(BRAND_BLUE, 0.04),
    borderBottom: `2px solid ${BRAND_BLUE}`,
    fontWeight: 700, fontSize: "0.72rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
    fontFamily: PRIMARY_FONT,
  }

  return (
    <Box sx={{ position: "relative", flex: 1, minWidth: 0 }}>
      {isFetching && (
        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backdropFilter: "blur(2px)", bgcolor: "rgba(255,255,255,0.4)", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ bgcolor: "background.paper", px: 3, py: 1.5, borderRadius: "20px", boxShadow: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: BRAND_BLUE, animation: "pulse 1s ease-in-out infinite", "@keyframes pulse": { "0%, 100%": { opacity: 1 }, "50%": { opacity: 0.3 } } }} />
            <Typography variant="caption" fontWeight={700} sx={{ color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>UPDATING</Typography>
          </Box>
        </Box>
      )}
      <TableContainer sx={{ opacity: isFetching ? 0.6 : 1, transition: "opacity 0.2s ease" }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headerSx, width: 40 }} />
              {([
                { key: "partNumber" as SortKey, label: "Part Number" },
                { key: null, label: "Material" },
                { key: "pressureRating" as SortKey, label: "Working Pressure" },
                { key: "inlet" as SortKey, label: "Inlet Type" },
                { key: "inletTubeOD" as SortKey, label: "Inlet Size" },
                { key: "outlet" as SortKey, label: "Outlet Type" },
                { key: "outletTubeOD" as SortKey, label: "Outlet Size" },
                { key: null, label: "Quote" },
              ]).map((h, i) => (
                <TableCell key={i} sx={headerSx}>
                  {h.key ? (
                    <TableSortLabel active={sortKey === h.key} direction={sortKey === h.key ? sortDir : "asc"} onClick={() => handleSort(h.key!)}>
                      {h.label}
                    </TableSortLabel>
                  ) : h.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No check valves found.</Typography>
                </TableCell>
              </TableRow>
            ) : (
              paginated.map(row => <PCVRow key={row.id} row={row} />)
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={sorted.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(_, p) => setPage(p)}
        onRowsPerPageChange={e => { setRowsPerPage(parseInt(e.target.value)); setPage(0) }}
        rowsPerPageOptions={[25, 50, 100]}
        sx={{ borderTop: "1px solid rgba(0,0,0,0.06)", fontSize: "0.8rem" }}
      />
    </Box>
  )
}