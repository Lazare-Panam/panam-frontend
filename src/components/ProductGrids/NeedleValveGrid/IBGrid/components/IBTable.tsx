"use client"
import { useState } from "react"
import { Box, Collapse, Chip, Typography, Stack, IconButton, Button, TableRow, TableCell } from "@mui/material"
import { alpha } from "@mui/material/styles"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import { useCartStore } from "../../../../store/useCartStore"
import { BODY_MATERIAL_LABELS, END_CONNECTION_LABELS } from "../../hooks/types"
import { type NeedleValveIBDTO } from "../../../../../api/needleValveApi"
import { ProductTable } from "../../../Common/ProductTable"

const BRAND_BLUE = "#01B0F0"

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Box>
      <Typography variant="caption" color="text.disabled" fontWeight={700}
        sx={{ display: "block", textTransform: "uppercase", mb: 0.25 }}>{label}</Typography>
      <Typography variant="body2" fontWeight={600}>{value}</Typography>
    </Box>
  )
}

function Row({ model }: { model: NeedleValveIBDTO }) {
  const [open, setOpen] = useState(false)
  const addItem = useCartStore(s => s.addItem)
  const detailHref = `/valves/needle-valves/needle-valves-ib/${model.partNumber}`

  const specs: Record<string, string> = {
    "Part Number":     model.partNumber,
    "Body Material":   BODY_MATERIAL_LABELS[model.bodyMaterial] ?? model.bodyMaterial,
    "Thread Type":     model.threadType,
    "End Connection":  END_CONNECTION_LABELS[model.endConnection] ?? model.endConnection,
    "Connection Size": model.connectionSize,
    "Configuration":   model.configuration,
    "Stem Seal":       model.stemSeal,
    "Step Tip":        model.stepTip,
    "Handle":          model.handle,
    "Options":         model.options,
  }

  const cartItem = {
    cartItemId: model.partNumber,
    id: String(model.id),
    name: `IB Needle Valve — ${model.partNumber}`,
    image: model.imageUrl,
    quantity: 1,
    partNumber: model.partNumber,
    specs,
  }

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
          <a href={detailHref} onClick={e => e.stopPropagation()}
            style={{ color: BRAND_BLUE, textDecoration: "none", fontSize: "0.8rem", fontWeight: 700 }}>
            {model.partNumber}
          </a>
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{BODY_MATERIAL_LABELS[model.bodyMaterial] ?? model.bodyMaterial}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{model.threadType}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{END_CONNECTION_LABELS[model.endConnection] ?? model.endConnection}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{model.connectionSize}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Chip label={model.configuration} size="small"
            sx={{ fontSize: "0.65rem", fontWeight: 700, bgcolor: alpha(BRAND_BLUE, 0.12), color: "#0277BD" }} />
        </TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{model.stemSeal}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{model.stepTip}</TableCell>
        <TableCell sx={{ py: 1, fontSize: "0.82rem" }}>{model.handle}</TableCell>
        <TableCell sx={{ py: 1 }}>
          <Button size="small" variant="contained"
            onClick={e => { e.stopPropagation(); addItem(cartItem) }}
            sx={{ fontSize: "0.7rem", fontWeight: 700, py: 0.5, px: 1.5, borderRadius: "4px", textTransform: "none", whiteSpace: "nowrap", bgcolor: BRAND_BLUE, boxShadow: "none", "&:hover": { bgcolor: "#0199d4", boxShadow: "none" } }}>
            Add to Quote
          </Button>
        </TableCell>
      </TableRow>

      {open && (
        <TableRow>
          <TableCell colSpan={11} sx={{ p: 0, borderBottom: "none" }}>
            <Collapse in unmountOnExit>
              <Box sx={{ p: 3, bgcolor: alpha(BRAND_BLUE, 0.02), borderLeft: `4px solid ${BRAND_BLUE}`, borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="flex-start">
                  {model.imageUrl && (
                    <Box sx={{ width: 120, height: 120, flexShrink: 0, border: "1px solid rgba(0,0,0,0.08)", borderRadius: "8px", bgcolor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", p: 1 }}>
                      <img src={model.imageUrl} alt={model.partNumber} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </Box>
                  )}
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" fontWeight={900} sx={{ letterSpacing: 1, display: "block", mb: 2, color: BRAND_BLUE }}>SPECIFICATIONS</Typography>
                    <Stack direction="row" flexWrap="wrap" gap={3} mb={3}>
                      {Object.entries(specs).filter(([, v]) => v).map(([k, v]) => <Spec key={k} label={k} value={v} />)}
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Button variant="contained" onClick={() => addItem(cartItem)}
                        sx={{ textTransform: "none", fontWeight: 700, borderRadius: "6px", bgcolor: BRAND_BLUE, "&:hover": { bgcolor: "#0199d4" } }}>
                        Add to Quote
                      </Button>
                      <Button variant="outlined" component="a" href={detailHref}
                        sx={{ textTransform: "none", fontWeight: 700, borderRadius: "6px", borderColor: BRAND_BLUE, color: BRAND_BLUE, "&:hover": { bgcolor: alpha(BRAND_BLUE, 0.05) } }}>
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

export default function IBTable({ models }: { models: NeedleValveIBDTO[] }) {
  return (
    <ProductTable
      models={models}
      defaultSortKey="partNumber"
      columns={[
        { key: "partNumber",    label: "Part Number" },
        { key: "bodyMaterial",  label: "Material" },
        { key: "threadType",    label: "Thread" },
        { key: "endConnection", label: "End Connection" },
        { key: "connectionSize", label: "Size" },
        { key: "configuration", label: "Config" },
        { key: "stemSeal",      label: "Stem Seal" },
        { label: "Step Tip" },
        { label: "Handle" },
        { label: "Quote" },
      ]}
      renderRow={model => <Row key={model.id} model={model} />}
    />
  )
}