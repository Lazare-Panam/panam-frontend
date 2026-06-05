import { useState } from "react"
import { Box, Collapse, Chip, Typography, Stack, IconButton, Button, TableRow, TableCell } from "@mui/material"
import { alpha } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { type ConnectorElbowDto } from "../../../../../api/tubefittingApi"
import { FITTING_TYPE_LABELS, THREAD_TYPE_LABELS, TUBE_OD_UNIT_LABELS } from "../hooks/types"
import { useCartStore } from "../../../../store/useCartStore"
import { ProductTable } from "../../Common/ProductTable"

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
    ...(row.isPositionable ? { Positionable: "Yes" } : {}),
    ...(row.hasORingSeal ? { "O-Ring Seal": "Yes" } : {}),
  }

  const cartItem = {
    cartItemId: row.partNumber,
    id: String(row.id),
    name: `${row.fittingType} — ${row.partNumber}`,
    image: row.imageUrl,
    quantity: 1,
    partNumber: row.partNumber,
    specs,
  }

  const detailHref = `/instrumentation-fittings/tube-fittings/connectors/${row.partNumber}`

  return (
    <>
      <TableRow
        hover
        component="a"
        href={detailHref}
        onClick={e => {
          // if clicking expand button, don't navigate
          e.preventDefault()
          setOpen(o => !o)
        }}
        sx={{ cursor: "pointer", bgcolor: open ? alpha(BRAND_BLUE, 0.04) : "inherit", "&:hover": { bgcolor: `${alpha(BRAND_BLUE, 0.03)} !important` }, textDecoration: "none", display: "table-row" }}>
        <TableCell sx={{ width: 40, py: 1 }}>
          <IconButton size="small" onClick={e => { e.preventDefault(); e.stopPropagation(); setOpen(o => !o) }}>
            {open ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
          </IconButton>
        </TableCell>
        <TableCell sx={{ fontFamily: "monospace", fontWeight: 700, py: 1 }}>
          <a href={detailHref} onClick={e => e.stopPropagation()}
            style={{ color: BRAND_BLUE, textDecoration: "none", fontSize: "0.8rem", fontWeight: 700 }}>
            {row.partNumber}
          </a>
        </TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={row.fittingType} size="small" sx={{ fontSize: "0.65rem", fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.1), color: "#0277BD" }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem", fontFamily: PRIMARY_FONT }}>
          {row.tubeOD}
          <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
            ({row.tubeODUnit === "Imperial" ? "in" : "mm"})
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
            onClick={e => { e.preventDefault(); e.stopPropagation(); addItem(cartItem) }}
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
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: "block", mb: 2, color: BRAND_BLUE, fontFamily: PRIMARY_FONT }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      <Spec label="Part Number" value={row.partNumber} />
                      <Spec label="Fitting Type" value={FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType} />
                      <Spec label="Tube OD" value={`${row.tubeOD} ${row.tubeODUnit === "Imperial" ? "inch" : "mm"}`} />
                      <Spec label="Thread Dimension" value={row.threadDimension} />
                      <Spec label="Thread Type" value={THREAD_TYPE_LABELS[row.threadType] ?? row.threadType} />
                      {row.isPositionable && <Spec label="Positionable" value="Yes" />}
                      {row.hasORingSeal && <Spec label="O-Ring Seal" value="Yes" />}
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

export default function ConnectorElbowTable({ models, isFetching }: { models: ConnectorElbowDto[]; isFetching?: boolean }) {
  return (
    <ProductTable
      models={models}
      isFetching={isFetching}
      defaultSortKey="partNumber"
      columns={[
        { key: "partNumber", label: "Part Number" },
        { key: "fittingType", label: "Fitting Type" },
        { key: "tubeOD", label: "Tube OD" },
        { key: "threadDimension", label: "Thread Dim." },
        { key: "threadType", label: "Thread Type" },
        { label: "Options" },
        { label: "Quote" },
      ]}
      renderRow={row => <ConnectorElbowRow key={row.id} row={row} />}
    />
  )
}