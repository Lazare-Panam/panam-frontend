import { useQuery } from "@tanstack/react-query"
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Accordion, AccordionSummary, AccordionDetails, Stack } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"
import { getRFQHistory } from "../../../api/orderApi"
import EmptyState from "./shared/EmptyState"
import LoadingState from "./shared/LoadingState"
import ErrorState from "./shared/ErrorState"
import PageHeader from "./shared/PageHeader"
import StatusChip from "./shared/StatusChip"

const BRAND_BLUE = "#01B0F0"

const QuotesHistory = () => {
  const {
    data: quotes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["quoteHistory"],
    queryFn: getRFQHistory,
  })

  if (isLoading) return <LoadingState />
  if (error) return <ErrorState message="We couldn't load your quote history. Please try again later." />

  if (!quotes || quotes.length === 0)
    return (
      <Box sx={{ p: { xs: 3, md: 8 }, maxWidth: "1200px", margin: "0 auto" }}>
        <PageHeader title="Requested Quotes" />
        <EmptyState icon={ReceiptLongIcon} title="No quotes yet." description="You haven't requested any quotes yet." buttonText="REQUEST A QUOTE" onActionClick="/products" />
      </Box>
    )

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "1400px", mx: "auto" }}>
      <PageHeader title="Requested Quotes" />
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
              <StatusChip status={quote.status} type="rfq" />
            </Stack>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <TableContainer>
              <Table size="small">
                <TableHead sx={{ bgcolor: "#f8f9fa" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, py: 2 }}>Part Number</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Description</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 700 }}>
                      Qty
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Notes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {quote.items.map((item, idx) => (
                    <TableRow key={idx} hover>
                      <TableCell sx={{ fontWeight: 600, color: BRAND_BLUE }}>{item.productCode}</TableCell>
                      <TableCell>{item.productDescription}</TableCell>
                      <TableCell align="center">{item.quantity}</TableCell>
                      <TableCell sx={{ fontSize: "0.8rem", color: "text.secondary" }}>{item.notes || "—"}</TableCell>
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
