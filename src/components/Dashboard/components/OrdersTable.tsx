import { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Box, Container, Button, TextField, InputAdornment, CircularProgress,
  Drawer, Typography, IconButton, Divider, Stack
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { useQuery } from "@tanstack/react-query";
import { getMyOrders } from "../../../api/authApi";

const BRAND_BLUE = "#01B0F0";
const BRAND_BLUE_LIGHT = "#E6F7FE";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const OrdersTable = () => {
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  // --- TANSTACK QUERY ---
  const { data: deals = [], isLoading, isError } = useQuery({
    queryKey: ["myOrders"],
    queryFn: getMyOrders,
    refetchOnWindowFocus: false,
  });

  // --- STAGE MAPPING ---
  const mapStageName = (stage: string) => {
    const mapping: Record<string, string> = {
      "Order Received": "ORDERED",
      "Shipped on Credit": "SHIPPED ON CREDIT",
      "Part Paid": "PART PAID",
      "Fully paid": "FULLY PAID",
      "Estimate Shared": "QUOTE SENT",
      "Supplier Quote Awaited": "IN REVIEW",
      "Rejected": "REJECTED"
    };
    return mapping[stage] || stage.toUpperCase();
  };

  const getStageStyle = (stage: string) => {
    const label = mapStageName(stage);
    switch (label) {
      case "REJECTED": return { color: "#cc0000", bg: "#fff0f0" };
      case "FULLY PAID":
      case "SHIPPED ON CREDIT": return { color: "#1a7a4a", bg: "#e6f4ed" };
      case "PART PAID": return { color: "#b07d00", bg: "#fff8e1" };
      case "ORDERED": return { color: BRAND_BLUE, bg: BRAND_BLUE_LIGHT };
      default: return { color: "#555", bg: "#f5f5f5" };
    }
  };

  // --- FILTERING LOGIC ---
  const filteredDeals = deals.filter((d: any) => {
    const p = d.properties;
    return p.dealName.toLowerCase().includes(search.toLowerCase());
  });

  if (isError) return <Typography sx={{ p: 4, textAlign: 'center' }}>Error loading orders. Please try again later.</Typography>;

  return (
    <Box sx={{ width: "100%", py: 6, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        
        {/* Search Bar - Positioned to the right */}
        <Box sx={{ mb: 4, display: "flex", justifyContent: "flex-end" }}>
          <TextField
            placeholder="Search by Order #..."
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: BRAND_BLUE }} /></InputAdornment>,
            }}
            sx={{ 
              width: { xs: "100%", sm: 300 },
              "& .MuiOutlinedInput-root": { borderRadius: 0 } 
            }}
          />
        </Box>

        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}><CircularProgress sx={{ color: BRAND_BLUE }} /></Box>
        ) : (
          <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eef0f2", borderRadius: 0 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "#fbfbfb" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem', py: 2 }}>ORDER NUMBER</TableCell>
                  <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem' }}>STATUS</TableCell>
                  <TableCell sx={{ fontWeight: 800, fontSize: '0.75rem' }}>TOTAL</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 800, fontSize: '0.75rem' }}>DETAILS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredDeals.length > 0 ? (
                  filteredDeals.map((deal: any, i: number) => {
                    const p = deal.properties;
                    const style = getStageStyle(p.dealStage);
                    return (
                      <TableRow key={i} hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                        <TableCell sx={{ fontWeight: 600, fontFamily: PRIMARY_FONT }}>{p.dealName}</TableCell>
                        <TableCell>
                          <Box component="span" sx={{ 
                            color: style.color, bgcolor: style.bg, px: 1.2, py: 0.4, 
                            fontSize: "0.65rem", fontWeight: 900, letterSpacing: 0.5 
                          }}>
                            {mapStageName(p.dealStage)}
                          </Box>
                        </TableCell>
                        <TableCell sx={{ fontWeight: 500 }}>£{p.amount || "0.00"}</TableCell>
                        <TableCell align="right">
                          <Button 
                            size="small" 
                            onClick={() => setSelectedOrder(deal)}
                            sx={{ color: BRAND_BLUE, fontWeight: 800, fontSize: '0.7rem' }}
                          >
                            VIEW MORE
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center" sx={{ py: 8, color: "text.secondary" }}>
                      No orders found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>

      {/* --- MORE DETAILS DRAWER --- */}
      <Drawer
        anchor="right"
        open={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        PaperProps={{ sx: { width: { xs: "100%", sm: 400 }, p: 4, borderRadius: 0 } }}
      >
        {selectedOrder && (
          <Box sx={{ fontFamily: PRIMARY_FONT }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 900, color: BRAND_BLUE, letterSpacing: -0.5 }}>ORDER SUMMARY</Typography>
              <IconButton onClick={() => setSelectedOrder(null)} size="small"><CloseIcon /></IconButton>
            </Box>

            <Stack spacing={4}>
              <Box>
                <Typography variant="caption" sx={{ fontWeight: 800, color: "text.secondary", textTransform: 'uppercase' }}>Current Progress</Typography>
                <Box sx={{ mt: 1 }}>
                    <Box component="span" sx={{ 
                        color: getStageStyle(selectedOrder.properties.dealStage).color, 
                        bgcolor: getStageStyle(selectedOrder.properties.dealStage).bg, 
                        px: 1.5, py: 0.5, fontWeight: 900, fontSize: '0.8rem' 
                    }}>
                        {mapStageName(selectedOrder.properties.dealStage)}
                    </Box>
                </Box>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 800, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocalShippingIcon sx={{ fontSize: 20 }} /> Logistics & Shipping
                </Typography>
                <Stack spacing={2}>
                   <DetailItem label="Tracking Number" value={selectedOrder.properties.tracking_number_waybill || "Awaiting tracking..."} isBold={!!selectedOrder.properties.tracking_number_waybill} />
                   <DetailItem label="Estimated Dispatch" value={selectedOrder.properties.migrated_shipping_date || "To be confirmed"} />
                   <DetailItem label="Delivery Date" value={selectedOrder.properties.delivery_date || "Pending shipping"} />
                </Stack>
              </Box>

              <Divider />

              <Box>
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 800, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ReceiptLongIcon sx={{ fontSize: 20 }} /> Financials
                </Typography>
                <DetailItem label="Order Total" value={`£${selectedOrder.properties.amount}`} isBold />
              </Box>

              <Button 
                fullWidth 
                variant="contained" 
                sx={{ bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 800, py: 1.5, boxShadow: 'none', "&:hover": { bgcolor: BRAND_BLUE, opacity: 0.9 } }}
                onClick={() => window.print()}
              >
                DOWNLOAD ORDER SUMMARY
              </Button>
            </Stack>
          </Box>
        )}
      </Drawer>
    </Box>
  );
};

const DetailItem = ({ label, value, isBold = false }: { label: string, value: string, isBold?: boolean }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography variant="body2" color="text.secondary">{label}</Typography>
    <Typography variant="body2" sx={{ fontWeight: isBold ? 800 : 500, color: isBold ? BRAND_BLUE : 'inherit' }}>{value}</Typography>
  </Box>
);

export default OrdersTable;