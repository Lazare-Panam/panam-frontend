import { useRef, useEffect, useState } from "react"
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TextField, IconButton, Tooltip, Stack, Typography, CircularProgress,
  Box, Button, Paper, List, ListItemButton, ListItemText
} from "@mui/material"
import {
  CheckCircle as CheckCircleIcon, Delete as DeleteIcon,
  ErrorOutline as ErrorIcon, Save as SaveIcon, Close as CloseIcon, 
  Edit as EditIcon, MoneyOff as MoneyOffIcon, Email as EmailIcon
} from "@mui/icons-material"
import { useQuery } from "@tanstack/react-query"
import { searchProductsRFQ, type RFQLineItem, type HubSpotProduct } from "../../../../../api/adminClient"
import type { EditableItem, ConfirmDialogState } from "./types"

const BRAND_BLUE = "#01B0F0"
const BORDER_COLOR = "#E2E8F0"

const highlight = (text: string, query: string) => {
  if (!query) return <>{text}</>
  const parts = text.split(new RegExp(`(${query})`, "gi"))
  return <>{parts.map((part, i) => part.toLowerCase() === query.toLowerCase() ? <span key={i} style={{ backgroundColor: "#FEF08A", fontWeight: 900, borderRadius: 2 }}>{part}</span> : part)}</>
}

const ProductSearchDropdown = ({ onSelect }: { onSelect: (p: HubSpotProduct) => void }) => {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const { data: results = [], isFetching } = useQuery({
    queryKey: ["productSearch", query],
    queryFn: () => searchProductsRFQ(query),
    enabled: query.length >= 2,
  })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <Box ref={ref} sx={{ position: "relative", width: "100%" }}>
      <TextField
        size="small" fullWidth
        placeholder="Search HubSpot to add a product..."
        value={query}
        onChange={e => { setQuery(e.target.value); setOpen(true) }}
        onFocus={() => query.length >= 2 && setOpen(true)}
        InputProps={{ endAdornment: isFetching ? <CircularProgress size={14} sx={{ color: BRAND_BLUE }} /> : null }}
        sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }}
      />
      {open && results.length > 0 && (
        <Paper sx={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 999, borderRadius: 0, border: `1px solid ${BORDER_COLOR}`, maxHeight: 240, overflow: "auto", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <List dense disablePadding>
            {results.map(p => (
              <ListItemButton key={p.id} onClick={() => { onSelect(p); setQuery(""); setOpen(false) }} sx={{ borderBottom: `1px solid ${BORDER_COLOR}`, "&:hover": { bgcolor: "#F0F9FF" } }}>
                <ListItemText
                  primary={<Stack direction="row" justifyContent="space-between"><Typography variant="body2" sx={{ fontWeight: 800, color: BRAND_BLUE }}>{highlight(p.name, query)}</Typography>{p.price != null && <Typography variant="caption" sx={{ fontWeight: 700, color: "#166534" }}>£{p.price.toFixed(2)}</Typography>}</Stack>}
                  secondary={<Typography variant="caption" sx={{ color: "text.secondary" }}>{highlight(p.description, query)}</Typography>}
                />
              </ListItemButton>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  )
}

interface Props {
  rfqId: string
  rfqEmail: string
  lineItems: RFQLineItem[]
  isEditing: boolean
  editableItems: EditableItem[]
  priceInputs: Record<string, string>
  savedItems: Record<string, boolean>
  failedItems: Record<string, boolean>
  isPriceSaving: boolean
  priceSavingId: string | undefined
  isSaveEditsPending: boolean
  onStartEdit: () => void
  onCancelEdit: () => void
  onEditField: (index: number, field: keyof EditableItem, value: string | number) => void
  onAddProduct: (p: HubSpotProduct) => void
  onRemoveEditItem: (index: number, item: EditableItem) => void
  onPriceChange: (lineItemId: string, value: string) => void
  onConfirm: (state: Omit<ConfirmDialogState, "open">) => void
  onNotify: () => void
}

export const RFQLineItems = ({
  rfqId, rfqEmail, lineItems, isEditing, editableItems,
  priceInputs, savedItems, failedItems, isPriceSaving, priceSavingId,
  isSaveEditsPending, onStartEdit, onCancelEdit, onEditField,
  onAddProduct, onRemoveEditItem, onPriceChange, onConfirm, onNotify
}: Props) => {
  return (
    <>
      <TableContainer component={Box}>
        <Table size="small">
          <TableHead sx={{ bgcolor: "#F8FAFC" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 800, py: 1.5 }}>PART NUMBER</TableCell>
              <TableCell sx={{ fontWeight: 800 }}>DESCRIPTION</TableCell>
              <TableCell align="center" sx={{ fontWeight: 800 }}>QTY</TableCell>
              <TableCell sx={{ fontWeight: 800 }}>NOTES</TableCell>
              <TableCell sx={{ fontWeight: 800 }}>UNIT PRICE</TableCell>
              <TableCell sx={{ fontWeight: 800 }}>LINE TOTAL</TableCell>
              <TableCell sx={{ fontWeight: 800 }}>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isEditing ? (
              editableItems.map((item, index) => (
                <TableRow key={item.id} sx={{ bgcolor: item.isNew ? "#F0FFF4" : "inherit" }}>
                  <TableCell>
                    <TextField size="small" fullWidth value={item.productCode}
                      onChange={e => onEditField(index, "productCode", e.target.value)}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" fullWidth value={item.productDescription}
                      onChange={e => onEditField(index, "productDescription", e.target.value)}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" type="number" value={item.quantity}
                      onChange={e => onEditField(index, "quantity", Number(e.target.value))}
                      sx={{ width: 70, "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" fullWidth value={item.notes}
                      onChange={e => onEditField(index, "notes", e.target.value)}
                      placeholder="Optional"
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" type="number" value={item.unitPrice}
                      onChange={e => onEditField(index, "unitPrice", e.target.value)}
                      placeholder="0.00"
                      inputProps={{ min: 0, step: "0.01" }}
                      InputProps={{ startAdornment: <Typography variant="caption" sx={{ mr: 0.5, color: "text.secondary" }}>£</Typography> }}
                      sx={{ width: 110, "& .MuiOutlinedInput-root": { borderRadius: 0 } }} />
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#333" }}>
                    {item.unitPrice !== "" ? `£${(parseFloat(item.unitPrice) * item.quantity).toFixed(2)}` : "—"}
                  </TableCell>
                  <TableCell>
                    <IconButton size="small" onClick={() => onRemoveEditItem(index, item)} sx={{ color: "#EF4444" }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              lineItems.map(item => {
                const isSaving = isPriceSaving && priceSavingId === item.id
                const isSaved = savedItems[item.id]
                const isFailed = failedItems[item.id]
                const inputValue = priceInputs[item.id] ?? (item.unitPrice != null ? String(item.unitPrice) : "")

                return (
                  <TableRow key={item.id} hover>
                    <TableCell sx={{ fontWeight: 700, color: BRAND_BLUE }}>{item.productCode}</TableCell>
                    <TableCell sx={{ fontSize: "0.85rem" }}>{item.productDescription}</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700 }}>{item.quantity}</TableCell>
                    <TableCell sx={{ fontSize: "0.8rem", fontStyle: "italic", color: "text.secondary" }}>{item.notes || "—"}</TableCell>
                    <TableCell>
                      <Stack spacing={0.5}>
                        <TextField
                          size="small" type="number" placeholder="0.00"
                          value={inputValue}
                          onChange={e => onPriceChange(item.id, e.target.value)}
                          onKeyDown={e => e.key === "Enter" && onConfirm({ lineItemId: item.id, action: "save-price", price: parseFloat(inputValue) })}
                          inputProps={{ min: 0, step: "0.01" }}
                          sx={{ width: 110, "& .MuiOutlinedInput-root": { borderRadius: 0, "&.Mui-focused fieldset": { borderColor: BRAND_BLUE }, ...(isFailed && { "& fieldset": { borderColor: "#EF4444" } }) } }}
                        />
                        {isFailed && (
                          <Stack direction="row" spacing={0.5} alignItems="center">
                            <ErrorIcon sx={{ fontSize: 12, color: "#EF4444" }} />
                            <Typography variant="caption" sx={{ color: "#EF4444", fontSize: "0.65rem", fontWeight: 700 }}>Saving failed</Typography>
                          </Stack>
                        )}
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, color: "#333" }}>
                      {item.unitPrice != null ? `£${(item.unitPrice * item.quantity).toFixed(2)}` : "—"}
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={0.5}>
                        <Tooltip title={isSaved ? "Saved!" : "Save price"}>
                          <span>
                            <IconButton size="small"
                              onClick={() => onConfirm({ lineItemId: item.id, action: "save-price", price: parseFloat(inputValue) })}
                              disabled={isSaving || !inputValue}
                              sx={{ color: isSaved ? "#166534" : BRAND_BLUE }}>
                              {isSaving ? <CircularProgress size={16} sx={{ color: BRAND_BLUE }} /> : <CheckCircleIcon fontSize="small" />}
                            </IconButton>
                          </span>
                        </Tooltip>
                        <Tooltip title="Remove price">
                          <span>
                            <IconButton size="small"
                              onClick={() => onConfirm({ lineItemId: item.id, action: "delete-price" })}
                              disabled={isSaving || item.unitPrice == null}
                              sx={{ color: "#EF4444" }}>
                              <MoneyOffIcon fontSize="small" />
                            </IconButton>
                          </span>
                        </Tooltip>
                      </Stack>
                    </TableCell>
                  </TableRow>
                )
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {isEditing && (
        <Box sx={{ p: 2, borderTop: `1px solid ${BORDER_COLOR}` }}>
          <ProductSearchDropdown onSelect={onAddProduct} />
        </Box>
      )}

      <Box sx={{ p: 2, bgcolor: "#F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>
          CONTACT: {rfqEmail}
        </Typography>
        {isEditing ? (
          <Stack direction="row" spacing={1}>
            <Button size="small" onClick={onCancelEdit} startIcon={<CloseIcon />} sx={{ color: "#666", fontWeight: 700, borderRadius: 0 }}>CANCEL</Button>
            <Button size="small" variant="contained" startIcon={<SaveIcon />}
              onClick={() => onConfirm({ lineItemId: "", action: "save-edits", rfqId })}
              disabled={isSaveEditsPending}
              sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 700, boxShadow: "none" }}>
              {isSaveEditsPending ? "SAVING..." : "SAVE CHANGES"}
            </Button>
          </Stack>
        ) : (
          <Stack direction="row" spacing={1}>
            <Button size="small" startIcon={<EmailIcon />} onClick={onNotify}
              sx={{ color: "#166534", fontWeight: 700, borderRadius: 0 }}>
              NOTIFY CUSTOMER
            </Button>
            <Button size="small" startIcon={<EditIcon />} onClick={onStartEdit}
              sx={{ color: BRAND_BLUE, fontWeight: 700, borderRadius: 0 }}>
              EDIT RFQ
            </Button>
          </Stack>
        )}
      </Box>
    </>
  )
}