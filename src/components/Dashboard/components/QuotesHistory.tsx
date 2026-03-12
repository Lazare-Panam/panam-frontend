import { useQuery } from "@tanstack/react-query";
import { 
  Box, Typography,  Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Chip, CircularProgress, 
  Accordion, AccordionSummary, AccordionDetails,  Stack 
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { getRFQHistory } from "../../../api/orderApi";
import EmptyState from "./EmptyState";

const BRAND_BLUE = "#01B0F0";

const QuotesHistory = () => {
  
  const { data: quotes, isLoading, error } = useQuery({
    queryKey: ["quoteHistory"],
    queryFn: getRFQHistory,
  });

  if (isLoading) return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: 'center', height: '400px' }}>
      <CircularProgress sx={{ color: BRAND_BLUE }} />
    </Box>
  );

  if (error) return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography color="error">We couldn't load your quote history. Please try again later.</Typography>
    </Box>
  );

  // --- EMPTY STATE ---
  if (!quotes || quotes.length === 0) {
    return (
     <Box sx={{ p: { xs: 3, md: 8 }, maxWidth: "1200px", margin: "0 auto" }}>
       <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: "#1a1a1a" }}>
        Quote History
      </Typography>
      <EmptyState 
        icon={ReceiptLongIcon}
        title="No quotes logged."
        description="You haven't requested any pricing yet."
        buttonText="REQUEST YOUR FIRST QUOTE"
        onActionClick="/products" 
      />
    </Box>
    );
  }

  // --- DATA STATE ---
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "1400px", mx: "auto" }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: "#1a1a1a" }}>
        Quote History
      </Typography>

      {quotes.map((quote) => (
        <Accordion 
          key={quote.referenceNumber} 
          sx={{ 
            mb: 2, 
            boxShadow: "none", 
            border: "1px solid #eef0f2",
            '&:before': { display: 'none' } 
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%", pr: 2 }}>
              <Stack direction="row" spacing={3} alignItems="center">
                <Typography fontWeight={700} sx={{ color: BRAND_BLUE, fontSize: '1rem' }}>
                  {quote.referenceNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Submitted: {new Date(quote.createdAt).toLocaleDateString('en-GB')}
                </Typography>
              </Stack>
              <Chip 
                label={quote.status} 
                size="small" 
                sx={{ 
                  bgcolor: quote.status === 'Submitted' ? "#e3f2fd" : "#f0fdf4", 
                  color: quote.status === 'Submitted' ? BRAND_BLUE : "#166534", 
                  fontWeight: 700,
                  fontSize: '0.7rem'
                }} 
              />
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {quote.items.map((item, idx) => (
                    <TableRow key={idx} hover>
                      <TableCell sx={{ fontWeight: 600, color: '#333' }}>{item.productCode}</TableCell>
                      <TableCell>{item.productDescription}</TableCell>
                      <TableCell align="center">{item.quantity}</TableCell>
                      <TableCell sx={{ fontSize: "0.8rem", color: "text.secondary", maxWidth: '200px' }}>
                        {item.notes || "-"}
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
  );
};

export default QuotesHistory;