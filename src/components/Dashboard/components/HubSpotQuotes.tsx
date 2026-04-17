import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Accordion, AccordionSummary, AccordionDetails,
  Stack, Button, CircularProgress, Dialog, DialogTitle, DialogContent,
  DialogActions, IconButton
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import DownloadIcon from "@mui/icons-material/Download"
import PreviewIcon from "@mui/icons-material/Visibility"
import CloseIcon from "@mui/icons-material/Close"
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"
import { getMyDeals, downloadDealPdf, previewDealPdf } from "../../../api/orderApi"
import EmptyState from "./shared/EmptyState"
import LoadingState from "./shared/LoadingState"
import ErrorState from "./shared/ErrorState"
import PageHeader from "./shared/PageHeader"
import StatusChip from "./shared/StatusChip"

const BRAND_BLUE = "#01B0F0"

const HubSpotQuotes = () => {
  const [downloading, setDownloading] = useState<string | null>(null)
  const [previewing, setPreviewing] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [previewDealName, setPreviewDealName] = useState<string>("")

  const { data: deals, isLoading, error } = useQuery({
    queryKey: ["myDeals"],
    queryFn: getMyDeals,
  })

  const handlePreview = async (dealName: string) => {
    setPreviewing(dealName)
    try {
      const url = await previewDealPdf(dealName)
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
      await downloadDealPdf(dealName)
    } finally {
      setDownloading(null)
    }
  }

  if (isLoading) return <LoadingState />
  if (error) return <ErrorState message="We couldn't load your quotes. Please try again later." />

  if (!deals || deals.length === 0) return (
    <Box sx={{ p: { xs: 3, md: 8 }, maxWidth: "1200px", margin: "0 auto" }}>
      <PageHeader title="Received Quotes" />
      <EmptyState
        icon={ReceiptLongIcon}
        title="No quotes yet."
        description="You don't have any active quotes from Panam."
        buttonText="EXPLORE PRODUCTS"
        onActionClick="/products"
      />
    </Box>
  )

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "1400px", mx: "auto" }}>
      <PageHeader title="Received Quotes" />

      {deals.map(deal => (
        <Accordion key={deal.id} sx={{ mb: 2, boxShadow: "none", border: "1px solid #eef0f2", "&:before": { display: "none" } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%", pr: 2 }}>
              <Stack direction="row" spacing={3} alignItems="center">
                <Typography fontWeight={700} sx={{ color: BRAND_BLUE, fontSize: "1rem" }}>
                  {deal.properties.dealName}
                </Typography>
                {deal.properties.amount && (
                  <Typography variant="body2" sx={{ fontWeight: 800, color: "#1E293B" }}>
                    £{parseFloat(deal.properties.amount).toFixed(2)}
                  </Typography>
                )}
              </Stack>
              <StatusChip status={deal.properties.dealStage} type="deal" />
            </Stack>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 0 }}>
            {deal.lineItems.length > 0 ? (
              <TableContainer>
                <Table size="small">
                  <TableHead sx={{ bgcolor: "#f8f9fa" }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 700, py: 2 }}>Part Number</TableCell>
                      <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 700 }}>Qty</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>Unit Price</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 700 }}>Line Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {deal.lineItems.map((item, idx) => (
                      <TableRow key={idx} hover>
                        <TableCell sx={{ fontWeight: 600, color: BRAND_BLUE }}>{item.name}</TableCell>
                        <TableCell>{item.description || "—"}</TableCell>
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
                <Typography variant="caption" sx={{ color: "text.disabled" }}>No line items on this quote.</Typography>
              </Box>
            )}

            {(deal.properties.trackingNumber || deal.properties.shippingDate || deal.properties.deliveryDate) && (
              <Box sx={{ p: 2, bgcolor: "#f8f9fa", borderTop: "1px solid #eef0f2" }}>
                <Stack direction="row" spacing={4}>
                  {deal.properties.trackingNumber && <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>TRACKING: {deal.properties.trackingNumber}</Typography>}
                  {deal.properties.shippingDate && <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>SHIPPED: {deal.properties.shippingDate}</Typography>}
                  {deal.properties.deliveryDate && <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>DELIVERY: {deal.properties.deliveryDate}</Typography>}
                </Stack>
              </Box>
            )}

            <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end", gap: 1, borderTop: "1px solid #eef0f2" }}>
              <Button
                size="small"
                startIcon={previewing === deal.properties.dealName
                  ? <CircularProgress size={14} sx={{ color: BRAND_BLUE }} />
                  : <PreviewIcon />
                }
                disabled={previewing === deal.properties.dealName}
                onClick={() => handlePreview(deal.properties.dealName)}
                sx={{ color: BRAND_BLUE, fontWeight: 700, borderRadius: 0 }}
              >
                PREVIEW
              </Button>
              <Button
                size="small"
                startIcon={downloading === deal.properties.dealName
                  ? <CircularProgress size={14} sx={{ color: "#fff" }} />
                  : <DownloadIcon />
                }
                disabled={downloading === deal.properties.dealName}
                onClick={() => handleDownload(deal.properties.dealName)}
                variant="contained"
                sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 700, boxShadow: "none" }}
              >
                DOWNLOAD
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* Preview Dialog */}
      <Dialog
        open={!!previewUrl}
        onClose={handleClosePreview}
        maxWidth="lg"
        fullWidth
        PaperProps={{ sx: { borderRadius: 0, height: "90vh" } }}
      >
        <DialogTitle sx={{ fontWeight: 800, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography fontWeight={800}>{previewDealName} — Estimate</Typography>
          <IconButton onClick={handleClosePreview} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, overflow: "hidden" }}>
          {previewUrl && (
            <iframe
              src={previewUrl}
              width="100%"
              height="100%"
              style={{ border: "none", minHeight: "70vh" }}
              title="PDF Preview"
            />
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClosePreview} sx={{ color: "#666", fontWeight: 700, borderRadius: 0 }}>
            CLOSE
          </Button>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={() => { handleDownload(previewDealName); handleClosePreview() }}
            sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 700, boxShadow: "none" }}
          >
            DOWNLOAD
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default HubSpotQuotes