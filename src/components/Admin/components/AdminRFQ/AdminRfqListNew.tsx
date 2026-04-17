import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import {
  Box, Typography, Accordion, AccordionSummary, AccordionDetails,
  Stack, Chip, CircularProgress, Dialog, DialogTitle,
  DialogContent, DialogContentText, DialogActions, Button
} from "@mui/material"
import { ExpandMore as ExpandMoreIcon, Business as BusinessIcon } from "@mui/icons-material"
import { getAllAdminRFQs, notifyQuotationReady } from "../../../../api/adminClient"
import { RFQLineItems } from "./components/RFQLineItems"
import { useUpdateStatusMutation } from "./components/hooks"
import type { ConfirmDialogState } from "./components/types"

const BRAND_BLUE = "#01B0F0"

const getStatusChip = (status: number) => {
  switch (status) {
    case 1: return <Chip label="SUBMITTED" size="small" sx={{ borderRadius: 0, fontWeight: 900, fontSize: "0.65rem", bgcolor: "#FFFBEB", color: "#B45309", border: "1px solid #FDE68A" }} />
    case 2: return <Chip label="UNDER REVIEW" size="small" sx={{ borderRadius: 0, fontWeight: 900, fontSize: "0.65rem", bgcolor: "#EFF6FF", color: "#1D4ED8", border: "1px solid #BFDBFE" }} />
    case 3: return <Chip label="QUOTED BACK" size="small" sx={{ borderRadius: 0, fontWeight: 900, fontSize: "0.65rem", bgcolor: "#F0FDF4", color: "#166534", border: "1px solid #BBF7D0" }} />
    case 4: return <Chip label="ACCEPTED" size="small" sx={{ borderRadius: 0, fontWeight: 900, fontSize: "0.65rem", bgcolor: "#F0FDF4", color: "#166534", border: "1px solid #BBF7D0" }} />
    case 5: return <Chip label="REJECTED" size="small" sx={{ borderRadius: 0, fontWeight: 900, fontSize: "0.65rem", bgcolor: "#FEF2F2", color: "#991B1B", border: "1px solid #FECACA" }} />
    default: return null
  }
}

const AdminRFQListNew = () => {
  const [confirmDialog, setConfirmDialog] = useState<ConfirmDialogState>({
    open: false, rfqId: "", action: "update-status"
  })

  const { data: rfqs, isLoading, isError } = useQuery({
    queryKey: ["admin", "rfqs"],
    queryFn: getAllAdminRFQs,
  })

  const updateStatusMutation = useUpdateStatusMutation()

  const handleConfirm = () => {
    const { action, rfqId, status } = confirmDialog
    if (action === "update-status" && status !== undefined) {
      updateStatusMutation.mutate({ rfqId, status })
    } else if (action === "notify") {
      notifyQuotationReady(rfqId)
    }
    setConfirmDialog({ open: false, rfqId: "", action: "update-status" })
  }

  const handleDialogClose = () => setConfirmDialog({ open: false, rfqId: "", action: "update-status" })

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
              {getStatusChip(rfq.status)}
            </Stack>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 0, borderTop: "1px solid #E2E8F0" }}>
            <RFQLineItems
              rfqId={rfq.id}
              rfqEmail={rfq.userEmail}
              rfqStatus={rfq.status}
              lineItems={rfq.lineItems}
              onConfirm={(state) => setConfirmDialog({ ...state, open: true })}
              onNotify={() => setConfirmDialog({ open: true, rfqId: rfq.id, action: "notify" })}
            />
          </AccordionDetails>
        </Accordion>
      ))}

      <Dialog open={confirmDialog.open} onClose={handleDialogClose}>
        <DialogTitle sx={{ fontWeight: 800 }}>
          {confirmDialog.action === "update-status" && "Update Status"}
          {confirmDialog.action === "notify" && "Send Quotation Email"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {confirmDialog.action === "update-status" && "Update the status of this RFQ? The customer will see this change."}
            {confirmDialog.action === "notify" && "This will send an email to the customer notifying them their quote is ready. Are you sure?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} sx={{ color: "text.secondary" }}>Cancel</Button>
          <Button onClick={handleConfirm} variant="contained"
            sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 700, "&:hover": { bgcolor: "#0099d4" } }}>
            {confirmDialog.action === "update-status" ? "Update" : "Send"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default AdminRFQListNew