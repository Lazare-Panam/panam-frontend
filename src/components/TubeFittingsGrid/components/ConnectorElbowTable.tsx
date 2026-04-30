import { useState } from "react"
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination, TableSortLabel, Collapse, Chip, Typography, Stack, IconButton, Button
} from "@mui/material"
import { alpha } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { type ConnectorElbowDto } from "../../../api/connectorElbowApi"
import { FITTING_TYPE_LABELS, THREAD_TYPE_LABELS, TUBE_OD_UNIT_LABELS } from "../hooks/types"
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

function ConnectorElbowRow({ row }: { row: ConnectorElbowDto }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)

  const specs = {
    "Part Number": row.partNumber,
    "Fitting Type": FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType,
    "Tube OD": `${row.tubeOD} (${TUBE_OD_UNIT_LABELS[row.tubeODUnit] ?? row.tubeODUnit})`,
    "Thread Dimension": row.threadDimension,
    "Thread Type": THREAD_TYPE_LABELS[row.threadType] ?? row.threadType,
    ...(row.isPositionable ? { "Positionable": "Yes" } : {}),
    ...(row.hasORingSeal ? { "O-Ring Seal": "Yes" } : {}),
  }

  return (
    <>
      <TableRow hover onClick={() => setOpen(o => !o)} sx={{
        cursor: "pointer",
        bgcolor: open ? alpha(BRAND_BLUE, 0.04) : "inherit",
        "&:hover": { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` },
      }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: "monospace", fontWeight: 700, color: BRAND_BLUE, fontSize: "0.8rem", py: 1 }}>
          {row.partNumber}
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.fittingType} size="small"
            sx={{ fontSize: "0.65rem", fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: "#0277BD" }}
          />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.tubeOD}
          <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5, fontFamily: PRIMARY_FONT }}>
            ({row.tubeODUnit === 'Imperial' ? 'in' : 'mm'})
          </Typography>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>{row.threadDimension}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>{THREAD_TYPE_LABELS[row.threadType] ?? row.threadType}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Stack direction="row" spacing={0.5}>
            {row.isPositionable && <Chip label="POS" size="small" sx={{ fontSize: "0.6rem", fontWeight: 700, bgcolor: alpha("#9C27B0", 0.1), color: "#7B1FA2" }} />}
            {row.hasORingSeal && <Chip label="O-Ring" size="small" sx={{ fontSize: "0.6rem", fontWeight: 700, bgcolor: alpha("#FF9800", 0.1), color: "#E65100" }} />}
          </Stack>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => {
              e.stopPropagation()
              addItem({
                cartItemId: row.partNumber,
                id: String(row.id),
                name: `${row.fittingType} — ${row.partNumber}`,
                image: row.imageUrl,
                quantity: 1,
                partNumber: row.partNumber,
                specs,
              })
            }}
            sx={{ fontSize: "0.7rem", fontWeight: 700, py: 0.5, px: 1.5, borderRadius: "4px", textTransform: "none", whiteSpace: "nowrap", bgcolor: BRAND_BLUE, boxShadow: "none", fontFamily: PRIMARY_FONT, "&:hover": { bgcolor: "#0199d4", boxShadow: "none" } }}>
            Add to Quote
          </Button>
        </TableCell>
      </TableRow>
      {open && (
        <TableRow>
          <TableCell colSpan={8} sx={{ p: 0, borderBottom: "none" }}>
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
                      <Spec label="Tube OD" value={`${row.tubeOD} ${row.tubeODUnit === 'Imperial' ? 'inch' : 'mm'}`} />
                      <Spec label="Thread Dimension" value={row.threadDimension} />
                      <Spec label="Thread Type" value={THREAD_TYPE_LABELS[row.threadType] ?? row.threadType} />
                      {row.isPositionable && <Spec label="Positionable" value="Yes" />}
                      {row.hasORingSeal && <Spec label="O-Ring Seal" value="Yes" />}
                    </Stack>
                    <Button variant="contained"
                      onClick={() => addItem({
                        cartItemId: row.partNumber,
                        id: String(row.id),
                        name: `${row.fittingType} — ${row.partNumber}`,
                        image: row.imageUrl,
                        quantity: 1,
                        partNumber: row.partNumber,
                        specs,
                      })}
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

type SortKey = "partNumber" | "fittingType" | "tubeOD" | "threadDimension" | "threadType"

export default function ConnectorElbowTable({ models, isFetching }: { models: ConnectorElbowDto[]; isFetching?: boolean }) {
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
                { key: "fittingType" as SortKey, label: "Fitting Type" },
                { key: "tubeOD" as SortKey, label: "Tube OD" },
                { key: "threadDimension" as SortKey, label: "Thread Dim." },
                { key: "threadType" as SortKey, label: "Thread Type" },
                { key: null, label: "Options" },
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
                <TableCell colSpan={8} align="center" sx={{ py: 6 }}>
                  <Typography variant="body2" color="text.secondary" fontFamily={PRIMARY_FONT}>No fittings found.</Typography>
                </TableCell>
              </TableRow>
            ) : (
              paginated.map(row => <ConnectorElbowRow key={row.id} row={row} />)
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