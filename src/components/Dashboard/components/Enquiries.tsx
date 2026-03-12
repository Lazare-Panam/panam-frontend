import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Stack
} from "@mui/material";
import {
  Add as AddIcon,
  Description as FileIcon,
  HistoryEdu as EnquiryIcon,
} from "@mui/icons-material";
import { getMyEnquiries, type Enquiry } from "../../../api/authApi";
import EmptyState from "./EmptyState";

const BRAND_BLUE = "#01B0F0";
const SOFT_BG = "#F8FAFC";
const BORDER_COLOR = "#E2E8F0";
const TEXT_MAIN = "#1a1a1a";

const Enquiries = () => {
  const navigate = useNavigate();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const data = await getMyEnquiries();
        setEnquiries(data);
      } catch (error) {
        console.error("Failed to fetch enquiries:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiries();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <CircularProgress sx={{ color: BRAND_BLUE }} />
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 3, md: 8 }, maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header Section */}
      <Box sx={{ 
        mb: 6, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end', 
        borderLeft: `6px solid ${BRAND_BLUE}`, 
        pl: 3 
      }}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 900, color: BRAND_BLUE, fontSize: '2.25rem', letterSpacing: -1 }}>
            Technical Enquiries
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
            Engineering Request Logs
          </Typography>
        </Box>
        
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={() => navigate('/enquiry')} 
          sx={{ 
            bgcolor: BRAND_BLUE, 
            borderRadius: 0, 
            fontWeight: 800,
            px: 4, py: 1.5,
            boxShadow: `4px 4px 0px ${BORDER_COLOR}`,
            '&:hover': { 
              bgcolor: BRAND_BLUE, 
              transform: 'translate(2px, 2px)', 
              boxShadow: 'none' 
            },
            transition: '0.2s all'
          }}
        >
          NEW REQUEST
        </Button>
      </Box>

      {enquiries.length === 0 ? (
        <EmptyState 
    icon={EnquiryIcon}
    title="No enquiries logged."
    buttonText="CREATE FIRST ENTRY"
    onActionClick="/enquiry"
  />
      ) : (
        <TableContainer 
          component={Paper} 
          sx={{ 
            borderRadius: 0, 
            elevation: 0, 
            border: `1px solid ${BORDER_COLOR}`, 
            boxShadow: 'none',
            overflowX: 'auto'
          }}
        >
          <Table sx={{ minWidth: 800 }}>
            <TableHead sx={{ bgcolor: SOFT_BG }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 900, color: TEXT_MAIN, width: '15%' }}>REF ID</TableCell>
                <TableCell sx={{ fontWeight: 900, color: TEXT_MAIN, width: '15%' }}>DATE</TableCell>
                <TableCell sx={{ fontWeight: 900, color: TEXT_MAIN, width: '40%' }}>MESSAGE / SPECIFICATION</TableCell>
             
                <TableCell sx={{ fontWeight: 900, color: TEXT_MAIN, width: '15%', textAlign: 'center' }}>FILES</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {enquiries.map((item) => (
                <TableRow 
                  key={item.id} 
                  sx={{ 
                    '&:hover': { bgcolor: '#f1f5f9' }, 
                    transition: '0.2s',
                    '& td': { borderBottom: `1px solid ${BORDER_COLOR}` }
                  }}
                >
                  <TableCell sx={{ fontWeight: 800, color: BRAND_BLUE }}>
                    #ENQ-{item.id.toString().padStart(4, '0')}
                  </TableCell>
                  
                  <TableCell sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </TableCell>
                  
                  <TableCell sx={{ fontWeight: 500, color: TEXT_MAIN, lineHeight: 1.5 }}>
                    {item.message.length > 120 
                      ? `${item.message.substring(0, 120)}...` 
                      : item.message}
                  </TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>
                    {item.attachmentPath ? (
                      <Tooltip title="View Technical Attachment">
                        <IconButton 
                          href={item.attachmentPath} 
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ 
                            color: BRAND_BLUE, 
                            '&:hover': { bgcolor: BRAND_BLUE, color: '#fff' } 
                          }}
                        >
                          <FileIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <Typography variant="caption" sx={{ color: 'text.disabled' }}>—</Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 4, opacity: 0.8 }}>
        <Box sx={{ width: 8, height: 8, bgcolor: BRAND_BLUE, borderRadius: '50%' }} />
        <Typography variant="caption" sx={{ color: BRAND_BLUE, fontWeight: 900, letterSpacing: 1 }}>
          CONNECTED TO PANAM CLOUD CENTRAL / DATA ENCRYPTED
        </Typography>
      </Stack>
    </Box>
  );
};

export default Enquiries;