import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import {
  Box, Typography, Accordion, AccordionSummary, AccordionDetails,
  Stack, Chip, CircularProgress, Dialog, DialogTitle,
  DialogContent, DialogContentText, DialogActions, Button
} from "@mui/material"
import { ExpandMore as ExpandMoreIcon, Business as BusinessIcon } from "@mui/icons-material"
import { getAllAdminRFQs, notifyQuotationReady, type RFQLineItem, type HubSpotProduct } from "../../../../api/adminClient"
import { RFQLineItems } from "./components/RFQLineItems"
import { usePriceMutation, useSaveEditsMutation, useDeleteLineItemMutation } from "./components/hooks"
import type { EditableItem, ConfirmDialogState } from "./components/types"

const BRAND_BLUE = "#01B0F0"

const getRFQPriceStatus = (items: RFQLineItem[]) => {
  const allPriced = items.every(i => i.unitPrice != null)
  const somePriced = items.some(i => i.unitPrice != null)
  if (allPriced) return "full"
  if (somePriced) return "partial"
  return "pending"
}

const RFQStatusChip = ({ items }: { items: RFQLineItem[] }) => {
  const status = getRFQPriceStatus(items)
  if (status === "full") return <Chip label="FULLY QUOTED" size="small" sx={{ borderRadius: 0, fontWeight: 900, fontSize: "0.65rem", bgcolor: "#F0FDF4", color: "#166534", border: "1px solid #BBF7D0" }} />
  if (status === "partial") return <Chip label="PARTIALLY QUOTED" size="small" sx={{ borderRadius: 0, fontWeight: 900, fontSize: "0.65rem", bgcolor: "#EFF6FF", color: "#1D4ED8", border: "1px solid #BFDBFE" }} />
  return <Chip label="PENDING QUOTE" size="small" sx={{ borderRadius: 0, fontWeight: 900, fontSize: "0.65rem", bgcolor: "#FFFBEB", color: "#B45309", border: "1px solid #FDE68A" }} />
}

const AdminRFQListNew = () => {
  const [priceInputs, setPriceInputs] = useState<Record<string, string>>({})
  const [savedItems, setSavedItems] = useState<Record<string, boolean>>({})
  const [failedItems, setFailedItems] = useState<Record<string, boolean>>({})
  const [editingRfqId, setEditingRfqId] = useState<string | null>(null)
  const [editableItems, setEditableItems] = useState<EditableItem[]>([])
  const [confirmDialog, setConfirmDialog] = useState<ConfirmDialogState>({
    open: false, lineItemId: "", action: "save-price"
  })

  const { data: rfqs, isLoading, isError } = useQuery({
    queryKey: ["admin", "rfqs"],
    queryFn: getAllAdminRFQs,
  })

  const priceMutation = usePriceMutation(setSavedItems, setFailedItems)
  const saveEditsMutation = useSaveEditsMutation(setEditingRfqId, setEditableItems)
  const deleteItemMutation = useDeleteLineItemMutation()

  const handleStartEdit = (rfq: NonNullable<typeof rfqs>[0]) => {
    setEditingRfqId(rfq.id)
    setEditableItems(rfq.lineItems.map(item => ({
      id: item.id,
      productCode: item.productCode,
      productDescription: item.productDescription,
      quantity: item.quantity,
      notes: item.notes || "",
      unitPrice: item.unitPrice != null ? String(item.unitPrice) : "",
    })))
  }

  const handleEditField = (index: number, field: keyof EditableItem, value: string | number) => {
    setEditableItems(prev => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const handleAddProduct = (product: HubSpotProduct) => {
    setEditableItems(prev => [...prev, {
      id: `new-${Date.now()}`,
      productCode: product.name,
      productDescription: product.description,
      quantity: 1,
      notes: "",
      unitPrice: product.price != null ? String(product.price) : "",
      isNew: true,
    }])
  }

  const handleRemoveEditItem = (index: number, item: EditableItem) => {
    if (item.isNew) {
      setEditableItems(prev => prev.filter((_, i) => i !== index))
    } else {
      setConfirmDialog({ open: true, lineItemId: item.id, action: "delete-item" })
    }
  }

  const handleConfirm = () => {
    const { action, lineItemId, price, rfqId } = confirmDialog
    if (action === "save-price") {
      priceMutation.mutate({ lineItemId, price: price! })
    } else if (action === "delete-price") {
      priceMutation.mutate({ lineItemId, price: null })
      setPriceInputs(prev => ({ ...prev, [lineItemId]: "" }))
    } else if (action === "save-edits" && rfqId) {
      saveEditsMutation.mutate({ rfqId, items: editableItems })
    } else if (action === "delete-item") {
      deleteItemMutation.mutate(lineItemId)
      setEditableItems(prev => prev.filter(i => i.id !== lineItemId))
    } else if (action === "notify" && rfqId) {
      notifyQuotationReady(rfqId)
    }
    setConfirmDialog({ open: false, lineItemId: "", action: "save-price" })
  }

  const handleDialogClose = () => setConfirmDialog({ open: false, lineItemId: "", action: "save-price" })

  if (isLoading) return <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}><CircularProgress sx={{ color: BRAND_BLUE }} /></Box>
  if (isError) return <Typography color="error">Error loading RFQs.</Typography>

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 4, borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: "#1E293B" }}>Quote Requests (RFQs)</Typography>
        <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 700 }}>PRICING & SPECIFICATION OVERVIEW</Typography>
      </Box>

      {rfqs?.map(rfq => (
        <Accordion key={rfq.id} sx={{ mb: 2, borderRadius: 0, border: "1px solid #E2E8F0", boxShadow: "none", "&:before": { display: "none" } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%", pr: 2 }}>
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" sx={{ color: BRAND_BLUE, fontWeight: 800 }}>{rfq.referenceNumber}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(rfq.submittedAt).toLocaleDateString()} at {new Date(rfq.submittedAt).toLocaleTimeString()}
                </Typography>
              </Stack>
              <Box sx={{ textAlign: "left", flex: 1, px: 4 }}>
                <Typography variant="body2" sx={{ fontWeight: 700, color: "#1E293B" }}>{rfq.userFirstName} {rfq.userLastName}</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <BusinessIcon sx={{ fontSize: 14, color: "text.disabled" }} />
                  <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>{rfq.userCompany}</Typography>
                </Stack>
              </Box>
              <RFQStatusChip items={rfq.lineItems} />
            </Stack>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 0, borderTop: "1px solid #E2E8F0" }}>
            <RFQLineItems
              rfqId={rfq.id}
              rfqEmail={rfq.userEmail}
              lineItems={rfq.lineItems}
              isEditing={editingRfqId === rfq.id}
              editableItems={editableItems}
              priceInputs={priceInputs}
              savedItems={savedItems}
              failedItems={failedItems}
              isPriceSaving={priceMutation.isPending}
              priceSavingId={priceMutation.variables?.lineItemId}
              isSaveEditsPending={saveEditsMutation.isPending}
              onStartEdit={() => handleStartEdit(rfq)}
              onCancelEdit={() => { setEditingRfqId(null); setEditableItems([]) }}
              onEditField={handleEditField}
              onAddProduct={handleAddProduct}
              onRemoveEditItem={handleRemoveEditItem}
              onPriceChange={(id, val) => {
                setPriceInputs(prev => ({ ...prev, [id]: val }))
                setSavedItems(prev => ({ ...prev, [id]: false }))
                setFailedItems(prev => ({ ...prev, [id]: false }))
              }}
              onConfirm={(state) => setConfirmDialog({ ...state, open: true })}
              onNotify={() => setConfirmDialog({ open: true, lineItemId: "", action: "notify", rfqId: rfq.id })}
            />
          </AccordionDetails>
        </Accordion>
      ))}

      <Dialog open={confirmDialog.open} onClose={handleDialogClose}>
        <DialogTitle sx={{ fontWeight: 800 }}>
          {confirmDialog.action === "save-price" && "Confirm Price"}
          {confirmDialog.action === "delete-price" && "Remove Price"}
          {confirmDialog.action === "save-edits" && "Save Changes"}
          {confirmDialog.action === "delete-item" && "Remove Line Item"}
          {confirmDialog.action === "notify" && "Send Quotation Email"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {confirmDialog.action === "save-price" && `Set unit price to £${confirmDialog.price?.toFixed(2)}? This will be visible to the customer.`}
            {confirmDialog.action === "delete-price" && "Remove this price? It will show as pending on the customer's end."}
            {confirmDialog.action === "save-edits" && "Save all changes to this RFQ? The customer will see the updated information."}
            {confirmDialog.action === "delete-item" && "Permanently remove this line item from the RFQ?"}
            {confirmDialog.action === "notify" && "This will send an email to the customer notifying them their quote is ready. Are you sure?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} sx={{ color: "text.secondary" }}>Cancel</Button>
          <Button onClick={handleConfirm} variant="contained"
            sx={{
              bgcolor: ["delete-price", "delete-item"].includes(confirmDialog.action) ? "#EF4444" : BRAND_BLUE,
              borderRadius: 0, fontWeight: 700,
              "&:hover": { bgcolor: ["delete-price", "delete-item"].includes(confirmDialog.action) ? "#DC2626" : "#0099d4" }
            }}>
            {confirmDialog.action === "save-price" && "Confirm"}
            {confirmDialog.action === "delete-price" && "Remove"}
            {confirmDialog.action === "save-edits" && "Save"}
            {confirmDialog.action === "delete-item" && "Remove"}
            {confirmDialog.action === "notify" && "Send"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default AdminRFQListNew