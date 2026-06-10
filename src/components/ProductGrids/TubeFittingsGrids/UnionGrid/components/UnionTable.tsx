import { useState } from "react"
import { Box, Collapse, Chip, Typography, Stack, IconButton, Button, TableRow, TableCell } from "@mui/material"
import { alpha } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { type UnionDto } from "../../../../../api/tubefittingApi"
import { FITTING_TYPE_LABELS, TUBE_OD_UNIT_LABELS } from "../hooks/types"
import { useCartStore } from "../../../../store/useCartStore"
import { ProductTable } from "../../../Common/ProductTable"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

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

function UnionRow({ row }: { row: UnionDto }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)

  const unit = row.tubeODUnit === "Imperial" ? "inch" : "mm"
  const unitShort = row.tubeODUnit === "Imperial" ? "in" : "mm"
  const odLabel = row.tubeOD2 ? `${row.tubeOD} × ${row.tubeOD2}${row.tubeOD3 ? ` × ${row.tubeOD3}` : ""}` : row.tubeOD
  const detailHref = `/instrumentation-fittings/tube-fittings/union/${row.partNumber}`

  const specs = {
    "Part Number": row.partNumber,
    "Fitting Type": FITTING_TYPE_LABELS[row.fittingType] ?? row.fittingType,
    "Tube OD": `${row.tubeOD} ${unit}`,
    ...(row.tubeOD2 ? { "Tube OD 2": `${row.tubeOD2} ${unit}` } : {}),
    ...(row.tubeOD3 ? { "Tube OD 3": `${row.tubeOD3} ${unit}` } : {}),
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
          {odLabel}
          <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
            ({unitShort})
          </Typography>
        </TableCell>
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
                      <Spec label="Tube OD" value={`${row.tubeOD} ${unit}`} />
                      {row.tubeOD2 && <Spec label="Tube OD 2" value={`${row.tubeOD2} ${unit}`} />}
                      {row.tubeOD3 && <Spec label="Tube OD 3" value={`${row.tubeOD3} ${unit}`} />}
                      <Spec label="Unit System" value={TUBE_OD_UNIT_LABELS[row.tubeODUnit]} />
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

export default function UnionTable({ models }: { models: UnionDto[] }) {
  return <ProductTable models={models} defaultSortKey="partNumber" columns={[{ key: "partNumber", label: "Part Number" }, { key: "fittingType", label: "Fitting Type" }, { key: "tubeOD", label: "Tube OD" }, { key: "tubeODUnit", label: "Unit" }, { label: "Quote" }]} renderRow={row => <UnionRow key={row.id} row={row} />} />
}
