import { useQuery } from "@tanstack/react-query";
import {
  Box, Typography, CircularProgress, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, IconButton,  Stack, 
} from "@mui/material";
import {
  Description as FileIcon,
  Business as BusinessIcon
} from "@mui/icons-material";
import { getAllAdminEnquiries } from "../../../api/adminClient";

const BRAND_BLUE = "#01B0F0";
const SOFT_BG = "#F8FAFC";
const BORDER_COLOR = "#E2E8F0";
const TEXT_MAIN = "#1a1a1a";

const AdminEnquiriesList = () => {
  // TanStack Query replaces useEffect
  const { data: enquiries = [], isLoading, isError } = useQuery({
    queryKey: ["admin", "enquiries"],
    queryFn: getAllAdminEnquiries,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <CircularProgress sx={{ color: BRAND_BLUE }} />
      </Box>
    );
  }

  if (isError) {
    return <Typography color="error">Failed to load enquiries from Panam Cloud.</Typography>;
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Box sx={{ mb: 4, borderLeft: `6px solid ${BRAND_BLUE}`, pl: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 900, color: "#1E293B", letterSpacing: -1 }}>
          Centralized Enquiries
        </Typography>
        <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 700, textTransform: 'uppercase' }}>
          Global Admin Overview
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ borderRadius: 0, border: `1px solid ${BORDER_COLOR}`, boxShadow: 'none' }}>
        <Table>
          <TableHead sx={{ bgcolor: SOFT_BG }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 900 }}>REF / DATE</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>CUSTOMER / COMPANY</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>SPECIFICATION</TableCell>
              <TableCell sx={{ fontWeight: 900, textAlign: 'center' }}>FILE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enquiries.map((item) => (
              <TableRow key={item.id} sx={{ '&:hover': { bgcolor: '#f1f5f9' } }}>
                {/* ID & DATE */}
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 800, color: BRAND_BLUE }}>
                    #ENQ-{item.id.toString().padStart(4, '0')}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </Typography>
                </TableCell>

                {/* USER & COMPANY */}
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {item.userFirstName} {item.userLastName}
                  </Typography>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <BusinessIcon sx={{ fontSize: 14, color: 'text.disabled' }} />
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {item.userCompany}
                    </Typography>
                  </Stack>
                </TableCell>

                {/* MESSAGE */}
                <TableCell sx={{ whiteSpace: 'pre-line', fontSize: '0.85rem', color: TEXT_MAIN }}>
                  {item.message.length > 150 ? `${item.message.substring(0, 150)}...` : item.message}
                </TableCell>

                {/* ATTACHMENT */}
                <TableCell sx={{ textAlign: 'center' }}>
                  {item.attachmentPath ? (
                    <IconButton href={item.attachmentPath} target="_blank" sx={{ color: BRAND_BLUE }}>
                      <FileIcon />
                    </IconButton>
                  ) : (
                    <Typography variant="caption" sx={{ color: 'text.disabled' }}>—</Typography>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 4, opacity: 0.6 }}>
        <Box sx={{ width: 8, height: 8, bgcolor: BRAND_BLUE, borderRadius: '50%' }} />
        <Typography variant="caption" sx={{ color: TEXT_MAIN, fontWeight: 700 }}>
          TOTAL LOGS: {enquiries.length} | DATA SYNCED WITH CLOUD
        </Typography>
      </Stack>
    </Box>
  );
};

export default AdminEnquiriesList;