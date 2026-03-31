import React from "react";
import { useQuery } from "@tanstack/react-query";
import { 
  Box, Typography, Accordion, AccordionSummary, AccordionDetails, 
  Stack, Chip, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, CircularProgress 
} from "@mui/material";
import { 
  ExpandMore as ExpandMoreIcon, 
  Business as BusinessIcon, 
  Email as EmailIcon 
} from "@mui/icons-material";
import { getAllAdminRFQs } from "../../../api/adminClient";

const BRAND_BLUE = "#01B0F0";

const AdminRFQList = () => {
  const { data: rfqs, isLoading, isError } = useQuery({
    queryKey: ["admin", "rfqs"],
    queryFn: getAllAdminRFQs,
  });

  if (isLoading) return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
      <CircularProgress sx={{ color: BRAND_BLUE }} />
    </Box>
  );

  if (isError) return <Typography color="error">Error loading RFQs.</Typography>;

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 4, borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: "#1E293B" }}>
          Quote Requests (RFQs)
        </Typography>
        <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 700 }}>
          PRICING & SPECIFICATION OVERVIEW
        </Typography>
      </Box>

      {rfqs?.map((rfq) => (
        <Accordion 
          key={rfq.id} 
          sx={{ 
            mb: 2, 
            borderRadius: 0, 
            border: "1px solid #E2E8F0", 
            boxShadow: "none",
            "&:before": { display: "none" } 
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%", pr: 2 }}>
              <Stack spacing={0.5}>
                <Typography variant="subtitle2" sx={{ color: BRAND_BLUE, fontWeight: 800 }}>
                  {rfq.referenceNumber}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {new Date(rfq.submittedAt).toLocaleDateString()} at {new Date(rfq.submittedAt).toLocaleTimeString()}
                </Typography>
              </Stack>

              <Box sx={{ textAlign: "left", flex: 1, px: 4 }}>
                <Typography variant="body2" sx={{ fontWeight: 700, color: "#1E293B" }}>
                  {rfq.userFirstName} {rfq.userLastName}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <BusinessIcon sx={{ fontSize: 14, color: "text.disabled" }} />
                  <Typography variant="caption" sx={{ color: "text.secondary", fontWeight: 600 }}>
                    {rfq.userCompany}
                  </Typography>
                </Stack>
              </Box>

              <Stack direction="row" spacing={2} alignItems="center">
                <Chip 
                  label={rfq.status === 1 ? "PENDING REVIEW" : "PRICED"} 
                  size="small" 
                  sx={{ 
                    borderRadius: 0, 
                    fontWeight: 900, 
                    fontSize: "0.65rem",
                    bgcolor: rfq.status === 1 ? "#FFFBEB" : "#F0FDF4",
                    color: rfq.status === 1 ? "#B45309" : "#166534",
                    border: rfq.status === 1 ? "1px solid #FDE68A" : "1px solid #BBF7D0"
                  }} 
                />
              </Stack>
            </Stack>
          </AccordionSummary>

          <AccordionDetails sx={{ p: 0, borderTop: "1px solid #E2E8F0" }}>
            <TableContainer component={Box}>
              <Table size="small">
                <TableHead sx={{ bgcolor: "#F8FAFC" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 800, py: 1.5 }}>PART NUMBER</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>DESCRIPTION</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 800 }}>QTY</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>NOTES</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rfq.lineItems.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell sx={{ fontWeight: 700, color: BRAND_BLUE }}>{item.productCode}</TableCell>
                      <TableCell sx={{ fontSize: "0.85rem" }}>{item.productDescription}</TableCell>
                      <TableCell align="center" sx={{ fontWeight: 700 }}>{item.quantity}</TableCell>
                      <TableCell sx={{ fontSize: "0.8rem", fontStyle: "italic", color: "text.secondary" }}>
                        {item.notes || "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
            <Box sx={{ p: 2, bgcolor: "#F1F5F9", display: "flex", justifyContent: "flex-end" }}>
               <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>
                 CONTACT: {rfq.userEmail}
               </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default AdminRFQList;