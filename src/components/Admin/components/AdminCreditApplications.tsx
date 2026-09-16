import React, { useEffect, useState } from "react"
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, CircularProgress, IconButton, Menu, MenuItem, Alert, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import EditIcon from "@mui/icons-material/Edit"
import { getAllCreditApplications, updateCreditApplicationStatus, type CreditLineApplication } from "../../../api/creditApi"

const BRAND_BLUE = "#01B0F0"

const STATUS_LABELS: Record<number, string> = {
  0: "Pending",
  1: "Approved",
  2: "Declined",
}

const STATUS_COLORS: Record<number, "warning" | "success" | "error"> = {
  0: "warning",
  1: "success",
  2: "error",
}

// Render an amount in its own application's currency (e.g. £, €, $) rather than a
// fixed pound sign, so a EUR/USD application isn't mislabelled. Falls back to GBP
// for any legacy row that predates the currency column.
const formatMoney = (amount: number, currency?: string) =>
  amount.toLocaleString("en-GB", { style: "currency", currency: currency || "GBP" })

// A pending change waiting on admin confirmation before it's sent to the API.
// kind distinguishes the two flows so the dialog can word itself correctly.
type PendingChange = { kind: "status"; applicationId: number; newStatus: number } | { kind: "creditLimit"; applicationId: number; newCreditLimit: number }

const AdminCreditApplicationsList: React.FC = () => {
  const [applications, setApplications] = useState<CreditLineApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  // Inline credit-limit editing state: which row is being edited, and its draft value.
  const [editingId, setEditingId] = useState<number | null>(null)
  const [draftLimit, setDraftLimit] = useState<string>("")

  // Confirmation dialog state — shared by both the status menu and the credit limit edit.
  const [pendingChange, setPendingChange] = useState<PendingChange | null>(null)
  const [saving, setSaving] = useState(false)

  const loadApplications = async () => {
    setLoading(true)
    try {
      const data = await getAllCreditApplications()
      setApplications(data)
    } catch (err) {
      setError("Failed to load credit applications.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadApplications()
  }, [])

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>, applicationId: number) => {
    setMenuAnchor(e.currentTarget)
    setSelectedId(applicationId)
  }

  const handleMenuClose = () => {
    setMenuAnchor(null)
    setSelectedId(null)
  }

  // Menu item click just stages the change and opens the confirmation dialog —
  // the actual API call happens in handleConfirmChange.
  const handleRequestStatusChange = (status: number) => {
    if (selectedId == null) return
    setPendingChange({ kind: "status", applicationId: selectedId, newStatus: status })
    handleMenuClose()
  }

  const startEditingLimit = (app: CreditLineApplication) => {
    setEditingId(app.applicationId)
    setDraftLimit(String(app.creditLimitRequested))
  }

  const cancelEditingLimit = () => {
    setEditingId(null)
    setDraftLimit("")
  }

  // Validate the draft, then stage it for confirmation rather than saving immediately.
  const handleRequestLimitChange = (applicationId: number) => {
    const parsed = Number(draftLimit)
    if (draftLimit.trim() === "" || Number.isNaN(parsed) || parsed < 0) {
      setError("Enter a valid, non-negative credit limit.")
      return
    }
    setError("")
    setPendingChange({ kind: "creditLimit", applicationId, newCreditLimit: parsed })
  }

  const handleDialogClose = () => {
    if (saving) return
    setPendingChange(null)
  }

  const handleConfirmChange = async () => {
    if (!pendingChange) return
    setSaving(true)
    try {
      const app = applications.find(a => a.applicationId === pendingChange.applicationId)
      if (!app) throw new Error("Application not found in current list.")

      if (pendingChange.kind === "status") {
        await updateCreditApplicationStatus(pendingChange.applicationId, pendingChange.newStatus, app.creditLimitRequested)
        setApplications(prev => prev.map(a => (a.applicationId === pendingChange.applicationId ? { ...a, status: pendingChange.newStatus } : a)))
      } else {
        await updateCreditApplicationStatus(pendingChange.applicationId, app.status, pendingChange.newCreditLimit)
        setApplications(prev => prev.map(a => (a.applicationId === pendingChange.applicationId ? { ...a, creditLimitRequested: pendingChange.newCreditLimit } : a)))
        setEditingId(null)
        setDraftLimit("")
      }
    } catch (err) {
      setError(pendingChange.kind === "status" ? "Failed to update status." : "Failed to update credit limit.")
    } finally {
      setSaving(false)
      setPendingChange(null)
    }
  }

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress sx={{ color: BRAND_BLUE }} />
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#1E293B" }}>
        Credit Applications
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError("")}>
          {error}
        </Alert>
      )}

      <TableContainer component={Paper} sx={{ boxShadow: "none", border: "1px solid #E2E8F0" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F8FAFC" }}>
              <TableCell sx={{ fontWeight: 700 }}>Company</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Contact</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Credit Limit Requested</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Submitted</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
              <TableCell align="right" sx={{ fontWeight: 700 }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center" sx={{ py: 6, color: "#94A3B8" }}>
                  No credit applications yet.
                </TableCell>
              </TableRow>
            )}
            {applications.map(app => (
              <TableRow key={app.applicationId} hover>
                <TableCell sx={{ fontWeight: 600 }}>{app.companyName}</TableCell>
                <TableCell>{app.contactName}</TableCell>
                <TableCell>{app.email}</TableCell>
                <TableCell>
                  {editingId === app.applicationId ? (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <TextField
                        size="small"
                        type="number"
                        value={draftLimit}
                        autoFocus
                        onChange={e => setDraftLimit(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === "Enter") handleRequestLimitChange(app.applicationId)
                          if (e.key === "Escape") cancelEditingLimit()
                        }}
                        InputProps={{ startAdornment: <Box sx={{ mr: 0.5, color: "#64748B" }}>{app.currency || "GBP"}</Box> }}
                        sx={{ width: 140 }}
                      />
                      <Button size="small" variant="contained" sx={{ backgroundColor: BRAND_BLUE, boxShadow: "none" }} onClick={() => handleRequestLimitChange(app.applicationId)}>
                        Save
                      </Button>
                      <Button size="small" onClick={cancelEditingLimit}>
                        Cancel
                      </Button>
                    </Box>
                  ) : (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                      {formatMoney(app.creditLimitRequested, app.currency)}
                      <IconButton size="small" onClick={() => startEditingLimit(app)} aria-label="Edit credit limit">
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                    </Box>
                  )}
                </TableCell>
                <TableCell>{new Date(app.submittedAtUtc).toLocaleDateString("en-GB")}</TableCell>
                <TableCell>
                  <Chip label={STATUS_LABELS[app.status]} color={STATUS_COLORS[app.status]} size="small" sx={{ fontWeight: 700 }} />
                </TableCell>
                <TableCell align="right">
                  <IconButton size="small" onClick={e => handleMenuOpen(e, app.applicationId)}>
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
        <MenuItem onClick={() => handleRequestStatusChange(1)}>Approve</MenuItem>
        <MenuItem onClick={() => handleRequestStatusChange(2)}>Decline</MenuItem>
        <MenuItem onClick={() => handleRequestStatusChange(0)}>Mark Pending</MenuItem>
      </Menu>

      <Dialog open={Boolean(pendingChange)} onClose={handleDialogClose}>
        <DialogTitle sx={{ fontWeight: 700 }}>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {pendingChange?.kind === "status" && `This will change the application status to "${STATUS_LABELS[pendingChange.newStatus]}".`}
            {pendingChange?.kind === "creditLimit" && `This will update the credit limit to ${formatMoney(pendingChange.newCreditLimit, applications.find(a => a.applicationId === pendingChange.applicationId)?.currency)}.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} disabled={saving}>
            Cancel
          </Button>
          <Button onClick={handleConfirmChange} variant="contained" disabled={saving} sx={{ backgroundColor: BRAND_BLUE, boxShadow: "none" }}>
            {saving ? "Saving..." : "Confirm"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default AdminCreditApplicationsList
