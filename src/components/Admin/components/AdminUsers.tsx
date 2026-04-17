import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import {
  Box, Typography, CircularProgress, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow , Chip, Stack,
  Accordion, AccordionSummary, AccordionDetails, Button,
  Dialog, DialogTitle, DialogContent, DialogActions, IconButton
} from "@mui/material"
import {
  VerifiedUser as VerifiedIcon, ExpandMore as ExpandMoreIcon,
  Download as DownloadIcon, Visibility as PreviewIcon, Close as CloseIcon
} from "@mui/icons-material"
import { getAllAdminUsers, getDealsByEmail, adminPreviewDealPdf, adminDownloadDealPdf } from "../../../api/adminClient"

const BRAND_BLUE = "#01B0F0"
const BORDER_COLOR = "#E2E8F0"

const UserDeals = ({ email }: { email: string }) => {
  const [downloading, setDownloading] = useState<string | null>(null)
  const [previewing, setPreviewing] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [previewDealName, setPreviewDealName] = useState<string>("")

  const { data: deals = [], isLoading, isError } = useQuery({
    queryKey: ["hubspot-deals", email],
    queryFn: () => getDealsByEmail(email),
  })

  const handlePreview = async (dealName: string) => {
    setPreviewing(dealName)
    try {
      const url = await adminPreviewDealPdf(dealName, email)
      setPreviewUrl(url)
      setPreviewDealName(dealName)
    } finally {
      setPreviewing(null)
    }
  }

  const handleClosePreview = () => {
    if (previewUrl) window.URL.revokeObjectURL(previewUrl)
    setPreviewUrl(null)
    setPreviewDealName("")
  }

  const handleDownload = async (dealName: string) => {
    setDownloading(dealName)
    try {
      await adminDownloadDealPdf(dealName, email)
    } finally {
      setDownloading(null)
    }
  }

  if (isLoading) return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
      <CircularProgress size={20} sx={{ color: BRAND_BLUE }} />
    </Box>
  )

  if (isError) return (
    <Typography variant="caption" color="error" sx={{ p: 2, display: "block" }}>
      Failed to load HubSpot deals.
    </Typography>
  )

  if (deals.length === 0) return (
    <Box sx={{ p: 2 }}>
      <Typography variant="caption" sx={{ color: "text.disabled" }}>No HubSpot deals found for this customer.</Typography>
    </Box>
  )

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="caption" sx={{ fontWeight: 700, color: BRAND_BLUE, textTransform: "uppercase", display: "block", mb: 2 }}>
        HubSpot Deals ({deals.length})
      </Typography>

      {deals.map(deal => (
        <Accordion key={deal.id} sx={{ mb: 1, borderRadius: 0, border: `1px solid ${BORDER_COLOR}`, boxShadow: "none", "&:before": { display: "none" } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%", pr: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 800, color: BRAND_BLUE }}>
                {deal.properties.dealName}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                {deal.properties.amount && (
                  <Typography variant="body2" sx={{ fontWeight: 800, color: "#1E293B" }}>
                    £{parseFloat(deal.properties.amount).toFixed(2)}
                  </Typography>
                )}
                <Chip
                  label={deal.properties.dealStage}
                  size="small"
                  sx={{ borderRadius: 0, fontWeight: 700, fontSize: "0.65rem", bgcolor: "#EFF6FF", color: "#1D4ED8", border: "1px solid #BFDBFE" }}
                />
              </Stack>
            </Stack>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 0, borderTop: `1px solid ${BORDER_COLOR}` }}>
            {deal.lineItems.length > 0 ? (
              <TableContainer component={Box}>
                <Table size="small">
                  <TableHead sx={{ bgcolor: "#F8FAFC" }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 800, py: 1.5 }}>PART NUMBER</TableCell>
                      <TableCell sx={{ fontWeight: 800 }}>DESCRIPTION</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 800 }}>QTY</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 800 }}>UNIT PRICE</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 800 }}>LINE TOTAL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {deal.lineItems.map((item, idx) => (
                      <TableRow key={idx} hover>
                        <TableCell sx={{ fontWeight: 700, color: BRAND_BLUE }}>{item.name}</TableCell>
                        <TableCell sx={{ fontSize: "0.85rem" }}>{item.description || "—"}</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>{item.quantity}</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 600 }}>
                          {item.unitPrice != null ? `£${item.unitPrice.toFixed(2)}` : "—"}
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 600 }}>
                          {item.unitPrice != null ? `£${(item.unitPrice * item.quantity).toFixed(2)}` : "—"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Box sx={{ p: 2 }}>
                <Typography variant="caption" sx={{ color: "text.disabled" }}>No line items.</Typography>
              </Box>
            )}

            {(deal.properties.trackingNumber || deal.properties.shippingDate || deal.properties.deliveryDate) && (
              <Box sx={{ p: 2, bgcolor: "#F1F5F9", borderTop: `1px solid ${BORDER_COLOR}` }}>
                <Stack direction="row" spacing={4}>
                  {deal.properties.trackingNumber && <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>TRACKING: {deal.properties.trackingNumber}</Typography>}
                  {deal.properties.shippingDate && <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>SHIPPED: {deal.properties.shippingDate}</Typography>}
                  {deal.properties.deliveryDate && <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>DELIVERY: {deal.properties.deliveryDate}</Typography>}
                </Stack>
              </Box>
            )}

            <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end", gap: 1, borderTop: `1px solid ${BORDER_COLOR}` }}>
              <Button size="small"
                startIcon={previewing === deal.properties.dealName ? <CircularProgress size={14} sx={{ color: BRAND_BLUE }} /> : <PreviewIcon />}
                disabled={previewing === deal.properties.dealName}
                onClick={() => handlePreview(deal.properties.dealName)}
                sx={{ color: BRAND_BLUE, fontWeight: 700, borderRadius: 0 }}
              >
                PREVIEW
              </Button>
              <Button size="small" variant="contained"
                startIcon={downloading === deal.properties.dealName ? <CircularProgress size={14} sx={{ color: "#fff" }} /> : <DownloadIcon />}
                disabled={downloading === deal.properties.dealName}
                onClick={() => handleDownload(deal.properties.dealName)}
                sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 700, boxShadow: "none" }}
              >
                DOWNLOAD
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}

      <Dialog open={!!previewUrl} onClose={handleClosePreview} maxWidth="lg" fullWidth PaperProps={{ sx: { borderRadius: 0, height: "90vh" } }}>
        <DialogTitle sx={{ fontWeight: 800, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography fontWeight={800}>{previewDealName} — Estimate</Typography>
          <IconButton onClick={handleClosePreview} size="small"><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, overflow: "hidden" }}>
          {previewUrl && <iframe src={previewUrl} width="100%" height="100%" style={{ border: "none", minHeight: "70vh" }} title="PDF Preview" />}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClosePreview} sx={{ color: "#666", fontWeight: 700, borderRadius: 0 }}>CLOSE</Button>
          <Button variant="contained" startIcon={<DownloadIcon />}
            onClick={() => { handleDownload(previewDealName); handleClosePreview() }}
            sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 700, boxShadow: "none" }}>
            DOWNLOAD
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

const AdminUsersList = () => {
  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ["admin", "users"],
    queryFn: getAllAdminUsers,
  })

  if (isLoading) return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
      <CircularProgress sx={{ color: BRAND_BLUE }} />
    </Box>
  )

  if (isError) return <Typography color="error">Failed to load users.</Typography>

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 4, borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: "#1E293B", letterSpacing: -1 }}>
          Registered Customers
        </Typography>
        <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 700, textTransform: "uppercase" }}>
          User Management & Verification
        </Typography>
      </Box>

      <Box>
        {users.map(user => (
          <Accordion key={user.id} sx={{ mb: 1, borderRadius: 0, border: `1px solid ${BORDER_COLOR}`, boxShadow: "none", "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%", pr: 2 }}>
                <Stack spacing={0.5}>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>{user.firstName} {user.lastName}</Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>{user.email}</Typography>
                </Stack>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{user.companyName}</Typography>
                    <Typography variant="caption" sx={{ color: BRAND_BLUE }}>{user.jobTitle}</Typography>
                  </Box>
                  <Typography variant="body2">{user.country}</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Chip
                      label={user.isApproved ? "Approved" : "Pending"}
                      size="small"
                      sx={{ bgcolor: user.isApproved ? "#DCFCE7" : "#FEF3C7", color: user.isApproved ? "#166534" : "#92400E", fontWeight: 700, borderRadius: 1 }}
                    />
                    {user.emailConfirmed && <VerifiedIcon sx={{ color: BRAND_BLUE, fontSize: 20 }} />}
                  </Stack>
                </Stack>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0, borderTop: `1px solid ${BORDER_COLOR}` }}>
              <UserDeals email={user.email} />
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}

export default AdminUsersList