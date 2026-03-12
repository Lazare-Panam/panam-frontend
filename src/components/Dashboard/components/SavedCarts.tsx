import { useState } from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { 
  Box, Typography, Paper, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, IconButton, CircularProgress, 
  TextField, Tooltip, Stack, Button, Dialog, DialogTitle, 
  DialogContent, DialogActions, DialogContentText 
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import SaveIcon from "@mui/icons-material/Save"
import EditIcon from "@mui/icons-material/Edit"
import CloseIcon from "@mui/icons-material/Close"
import { getCartApi, removeFromCartApi, updateCartItemApi, type CartItemResponseDTO } from "../../../api/cartApi"
import { useNotificationStore } from "../../store/useNotficationStore"
import EmptyCartView from "../../Cart/components/EmptyCart"
import { requestQuotation } from "../../../api/orderApi"

const BRAND_BLUE = "#01B0F0"

export interface RFQLineItem {
  productCode: string
  productDescription: string
  quantity: number
  notes: string
}

export interface RFQSubmissionPayload {
  rfqLineItemDTOs: RFQLineItem[]
}

const SavedCarts = () => {
  const queryClient = useQueryClient()
  const showNotification = useNotificationStore(state => state.showNotification)

  // State for row editing
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState({ quantity: 0, notes: "" })
  
  // State for Confirmation Dialog
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
    onError: () => {
      showNotification({ message: "Failed to save changes.", severity: "error" })
    },
  })

  const { mutate: submitRFQ, isPending: isSubmitting } = useMutation({
    mutationFn: (payload: RFQSubmissionPayload) => requestQuotation(payload),
    onSuccess: () => {
      showNotification({
        message: `Quotation request submitted successfully!`,
        severity: "success",
      })
      queryClient.invalidateQueries({ queryKey: ["savedCart"] }) // Clear the UI
      setConfirmOpen(false)
    },
    onError: () => {
      showNotification({ message: "Failed to submit quotation request.", severity: "error" })
      setConfirmOpen(false)
    },
  })

  // Open the confirmation dialog
  const handleRequestQuote = () => {
    if (!savedItems || savedItems.length === 0) return
    setConfirmOpen(true)
  }

  // Actual submission logic
  const handleFinalSubmit = () => {
    const payload: RFQSubmissionPayload = {
      rfqLineItemDTOs: savedItems!.map(item => ({
        productCode: item.productCode,
        productDescription: item.productDescription,
        quantity: item.quantity,
        notes: item.notes || "",
      })),
    }
    submitRFQ(payload)
  }

  const startEditing = (item: CartItemResponseDTO) => {
    setEditingId(item.id)
    setEditForm({ quantity: item.quantity, notes: item.notes || "" })
  }

  const cancelEditing = () => {
    setEditingId(null)
  }

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 8 }}>
        <CircularProgress sx={{ color: BRAND_BLUE }} />
      </Box>
    )

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "1400px", mx: "auto" }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: "#2D3E50", letterSpacing: "-0.02em" }}>
        Saved Workspace Items
      </Typography>

      {savedItems?.length === 0 ? (
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
                {savedItems?.map(item => {
                  const isEditing = editingId === item.id

                  return (
                    <TableRow key={item.id} sx={{ "&:hover": { bgcolor: isEditing ? "#fff" : "#fafafa" } }}>
                      <TableCell sx={{ fontWeight: 600, color: BRAND_BLUE }}>{item.productCode}</TableCell>
                      <TableCell sx={{ fontSize: "0.85rem" }}>{item.productDescription}</TableCell>

                      <TableCell align="center">
                        {isEditing ? (
                          <TextField 
                            type="number" 
                            size="small" 
                            value={editForm.quantity} 
                            onChange={e => setEditForm({ ...editForm, quantity: Number(e.target.value) })} 
                            sx={{ width: "75px", "& .MuiOutlinedInput-root": { borderRadius: 0 } }} 
                          />
                        ) : item.quantity}
                      </TableCell>

                      <TableCell>
                        {isEditing ? (
                          <TextField 
                            fullWidth 
                            size="small" 
                            multiline 
                            rows={2} 
                            value={editForm.notes} 
                            onChange={e => setEditForm({ ...editForm, notes: e.target.value })} 
                            sx={{ "& .MuiOutlinedInput-root": { borderRadius: 0 } }} 
                          />
                        ) : (
                          <Typography variant="body2" color="textSecondary" sx={{ fontStyle: item.notes ? "normal" : "italic" }}>
                            {item.notes || "No extra requirements listed."}
                          </Typography>
                        )}
                      </TableCell>

                      <TableCell align="right">
                        <Stack direction="row" spacing={1} justifyContent="flex-end">
                          {isEditing ? (
                            <>
                              <Tooltip title="Save Changes">
                                <IconButton onClick={() => updateItem({ id: item.id, quantity: editForm.quantity, notes: editForm.notes })} disabled={isUpdating} sx={{ color: BRAND_BLUE }}>
                                  <SaveIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Cancel">
                                <IconButton onClick={cancelEditing} sx={{ color: "#666" }}>
                                  <CloseIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </>
                          ) : (
                            <>
                              <Tooltip title="Edit Item">
                                <IconButton onClick={() => startEditing(item)} sx={{ color: "#666" }}>
                                  <EditIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Delete">
                                <IconButton onClick={() => removeItem(item.id)} sx={{ color: "#ff4d4f", "&:hover": { bgcolor: "#fff1f0" } }}>
                                  <DeleteIcon fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </>
                          )}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handleRequestQuote}
              disabled={isSubmitting || editingId !== null}
              sx={{
                bgcolor: BRAND_BLUE,
                borderRadius: "50px",
                px: 4,
                py: 1.2,
                fontWeight: 700,
                textTransform: "uppercase",
                boxShadow: "none",
                "&:hover": { bgcolor: "#0099cc", boxShadow: "none" },
              }}>
              {isSubmitting ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Submit Quotation Request"}
            </Button>
          </Box>
        </>
      )}

      {/* Confirmation Dialog */}
      <Dialog 
        open={confirmOpen} 
        onClose={() => setConfirmOpen(false)}
        PaperProps={{ sx: { borderRadius: 0, p: 1 } }}
      >
        <DialogTitle sx={{ fontWeight: 800, color: "#1a1a1a" }}>
          Confirm Quotation Request
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "#555", mt: 1 }}>
            You are about to submit a formal request for <strong>{savedItems?.length} item(s)</strong>. 
            Once submitted, our engineering team will generate a formal quote based on these specifications.
            <br /><br />
            Do you wish to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button 
            onClick={() => setConfirmOpen(false)} 
            sx={{ color: "#666", fontWeight: 700 }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleFinalSubmit} 
            variant="contained"
            disabled={isSubmitting}
            sx={{ 
              bgcolor: BRAND_BLUE, 
              fontWeight: 800, 
              borderRadius: 0,
              boxShadow: "none",
              px: 3,
              "&:hover": { bgcolor: "#0099cc", boxShadow: "none" }
            }}
          >
            {isSubmitting ? "Submitting..." : "Yes, Submit Request"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default SavedCarts