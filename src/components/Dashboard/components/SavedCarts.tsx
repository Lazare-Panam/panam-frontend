import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, CircularProgress } from "@mui/material"

import { getCartApi, removeFromCartApi, updateCartItemApi } from "../../../api/cartApi"
import { useNotificationStore } from "../../store/useNotficationStore"
import EmptyCartView from "../../Cart/components/EmptyCart"
import { requestQuotation } from "../../../api/orderApi"
import LoadingState from "./shared/LoadingState"
import PageHeader from "./shared/PageHeader"
import { CartRow } from "./CartRow"

const BRAND_BLUE = "#01B0F0"



const SavedCarts = () => {
  const queryClient = useQueryClient()
  const showNotification = useNotificationStore(state => state.showNotification)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({ quantity: 0, notes: "" })
  const [confirmOpen, setConfirmOpen] = useState(false)

  const { data: savedItems, isLoading } = useQuery({
    queryKey: ["savedCart"],
    queryFn: getCartApi,
  })

  const { mutate: removeItem } = useMutation({
    mutationFn: (id: string) => removeFromCartApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedCart"] })
      showNotification({ message: "Item removed", severity: "success" })
    },
  })

  const { mutate: updateItem, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, quantity, notes }: { id: string; quantity: number; notes: string }) =>
      updateCartItemApi(id, quantity, notes),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["savedCart"] })
      setEditingId(null)
      showNotification({ message: "Changes saved successfully!", severity: "success" })
    },
    onError: () => showNotification({ message: "Failed to save changes.", severity: "error" }),
  })

  const { mutate: submitRFQ, isPending: isSubmitting } = useMutation({
    mutationFn: () => requestQuotation({
      rfqLineItemDTOs: savedItems!.map(item => ({
        productCode: item.productCode,
        productDescription: item.productDescription,
        quantity: item.quantity,
        notes: item.notes || "",
      }))
    }),
    onSuccess: () => {
      showNotification({ message: "Quotation request submitted successfully!", severity: "success" })
      queryClient.invalidateQueries({ queryKey: ["savedCart"] })
      setConfirmOpen(false)
    },
    onError: () => {
      showNotification({ message: "Failed to submit quotation request.", severity: "error" })
      setConfirmOpen(false)
    },
  })

  if (isLoading) return <LoadingState />

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "1400px", mx: "auto" }}>
      <PageHeader title="Saved Workspace Items" />

      {!savedItems || savedItems.length === 0 ? (
        <EmptyCartView />
      ) : (
        <>
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eef0f2", borderRadius: 0 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#f8f9fa" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Product Code</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
                  <TableCell sx={{ fontWeight: 700 }} align="center">Qty</TableCell>
                  <TableCell sx={{ fontWeight: 700, width: "35%" }}>Notes & Requirements</TableCell>
                  <TableCell sx={{ fontWeight: 700 }} align="right">Manage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {savedItems.map(item => (
                  <CartRow
                    key={item.id}
                    item={item}
                    isEditing={editingId === item.id}
                    isUpdating={isUpdating}
                    editForm={editForm}
                    onEdit={() => { setEditingId(item.id); setEditForm({ quantity: item.quantity, notes: item.notes || "" }) }}
                    onCancel={() => setEditingId(null)}
                    onSave={() => updateItem({ id: item.id, quantity: editForm.quantity, notes: editForm.notes })}
                    onRemove={() => removeItem(item.id)}
                    onEditFormChange={(field, value) => setEditForm(prev => ({ ...prev, [field]: value }))}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={() => setConfirmOpen(true)}
              disabled={isSubmitting || editingId !== null}
              sx={{ bgcolor: BRAND_BLUE, borderRadius: "50px", px: 4, py: 1.2, fontWeight: 700, textTransform: "uppercase", boxShadow: "none", "&:hover": { bgcolor: "#0099cc", boxShadow: "none" } }}>
              {isSubmitting ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Submit Quotation Request"}
            </Button>
          </Box>
        </>
      )}

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)} PaperProps={{ sx: { borderRadius: 0, p: 1 } }}>
        <DialogTitle sx={{ fontWeight: 800, color: "#1a1a1a" }}>Confirm Quotation Request</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "#555", mt: 1 }}>
            You are about to submit a formal request for <strong>{savedItems?.length} item(s)</strong>. Our engineering team will generate a formal quote based on these specifications.
            <br /><br />Do you wish to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setConfirmOpen(false)} sx={{ color: "#666", fontWeight: 700 }}>Cancel</Button>
          <Button onClick={() => submitRFQ()} variant="contained" disabled={isSubmitting}
            sx={{ bgcolor: BRAND_BLUE, fontWeight: 800, borderRadius: 0, boxShadow: "none", px: 3, "&:hover": { bgcolor: "#0099cc", boxShadow: "none" } }}>
            {isSubmitting ? "Submitting..." : "Yes, Submit Request"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default SavedCarts