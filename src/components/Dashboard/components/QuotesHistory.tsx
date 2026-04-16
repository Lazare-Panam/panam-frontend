import { useQuery } from "@tanstack/react-query"
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, CircularProgress, Accordion, AccordionSummary, AccordionDetails, Stack } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"
import { getRFQHistory, type RFQItem } from "../../../api/orderApi"
import EmptyState from "./EmptyState"

const BRAND_BLUE = "#01B0F0"

const getPriceStatus = (items: RFQItem[]) => {
  const allPriced = items.every(i => i.unitPrice != null)
  const somePriced = items.some(i => i.unitPrice != null)
  const total = items.reduce((sum, i) => sum + (i.lineTotalPrice ?? 0), 0)
  return { allPriced, somePriced, total }
}

const QuoteSummaryChip = ({ items }: { items: RFQItem[] }) => {
  const { allPriced, somePriced, total } = getPriceStatus(items)

  if (allPriced) return (
    <Typography variant="body2" sx={{ fontWeight: 800, color: "#1E293B" }}>
      Total: <span style={{ color: BRAND_BLUE }}>£{total.toFixed(2)}</span>
    </Typography>
  )

  if (somePriced) return (
    <Chip label="PARTIAL QUOTE" size="small" sx={{ fontWeight: 900, fontSize: "0.65rem", borderRadius: 0, bgcolor: "#EFF6FF", color: "#1D4ED8", border: "1px solid #BFDBFE" }} />
  )

  return (
    <Chip label="PENDING QUOTE" size="small" sx={{ fontWeight: 900, fontSize: "0.65rem", borderRadius: 0, bgcolor: "#FFFBEB", color: "#B45309", border: "1px solid #FDE68A" }} />
  )
}

const QuotesHistory = () => {
  const { data: quotes, isLoading, error } = useQuery({
    queryKey: ["quoteHistory"],
    queryFn: getRFQHistory,
  })

  if (isLoading) return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }}>
      <CircularProgress sx={{ color: BRAND_BLUE }} />
    </Box>
  )

  if (error) return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography color="error">We couldn't load your quote history. Please try again later.</Typography>
    </Box>
  )

  if (!quotes || quotes.length === 0) {
    return (
      <Box sx={{ p: { xs: 3, md: 8 }, maxWidth: "1200px", margin: "0 auto" }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: "#1a1a1a" }}>
          Quote History
        </Typography>
        <EmptyState icon={ReceiptLongIcon} title="No quotes logged." description="You haven't requested any pricing yet." buttonText="REQUEST YOUR FIRST QUOTE" onActionClick="/products" />
      </Box>
    )
  }

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "1400px", mx: "auto" }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: "#1a1a1a" }}>
        Quote History
      </Typography>

      {quotes.map(quote => (
        <Accordion key={quote.referenceNumber} sx={{ mb: 2, boxShadow: "none", border: "1px solid #eef0f2", "&:before": { display: "none" } }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%", pr: 2 }}>
              <Stack direction="row" spacing={3} alignItems="center">
                <Typography fontWeight={700} sx={{ color: BRAND_BLUE, fontSize: "1rem" }}>
                  {quote.referenceNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Submitted: {new Date(quote.createdAt).toLocaleDateString("en-GB")}
                </Typography>
              </Stack>
              <QuoteSummaryChip items={quote.items} />
            </Stack>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 0 }}>
            <TableContainer>
              <Table size="small">
                <TableHead sx={{ bgcolor: "#f8f9fa" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, py: 2 }}>Part Number</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700 }}>Qty</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Notes</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>Unit Price</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 700 }}>Line Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {quote.items.map((item, idx) => (
                    <TableRow key={idx} hover>
                      <TableCell sx={{ fontWeight: 600, color: "#333" }}>{item.productCode}</TableCell>
                      <TableCell>{item.productDescription}</TableCell>
                      <TableCell align="center">{item.quantity}</TableCell>
                      <TableCell sx={{ fontSize: "0.8rem", color: "text.secondary", maxWidth: "200px" }}>{item.notes || "-"}</TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600, color: "#333" }}>
                        {item.unitPrice != null
                          ? `£${item.unitPrice.toFixed(2)}`
                          : <Chip label="PENDING" size="small" sx={{ fontSize: "0.65rem", bgcolor: "#FFFBEB", color: "#B45309", border: "1px solid #FDE68A", borderRadius: 0, fontWeight: 700 }} />}
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600, color: "#333" }}>
                        {item.lineTotalPrice != null ? `£${item.lineTotalPrice.toFixed(2)}` : "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export default QuotesHistory