import React, { useEffect, useState } from "react"
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, CircularProgress, IconButton, Menu, MenuItem, Alert } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
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

const AdminCreditApplicationsList: React.FC = () => {
  const [applications, setApplications] = useState<CreditLineApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)
  const [selectedId, setSelectedId] = useState<number | null>(null)

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

  const handleStatusChange = async (status: number) => {
    if (selectedId == null) return
    try {
      await updateCreditApplicationStatus(selectedId, status)
      setApplications(prev => prev.map(app => (app.applicationId === selectedId ? { ...app, status } : app)))
    } catch (err) {
      setError("Failed to update status.")
    } finally {
      handleMenuClose()
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
        <Alert severity="error" sx={{ mb: 3 }}>
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
                <TableCell>£{app.creditLimitRequested.toLocaleString()}</TableCell>
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
        <MenuItem onClick={() => handleStatusChange(1)}>Approve</MenuItem>
        <MenuItem onClick={() => handleStatusChange(2)}>Decline</MenuItem>
        <MenuItem onClick={() => handleStatusChange(0)}>Mark Pending</MenuItem>
      </Menu>
    </Box>
  )
}

export default AdminCreditApplicationsList
