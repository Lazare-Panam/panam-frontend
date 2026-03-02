import { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Box, Container, Button, TextField, InputAdornment, CircularProgress
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getMyOrders } from "../../../api/authApi";

const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';
const BRAND_BLUE = "#01B0F0";
const TEXT_MAIN = "#1a1a1a";
const TEXT_SECONDARY = "#555555";

const OrdersTable = () => {
  const [activeTab, setActiveTab] = useState("ALL LINES");
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const data = await getMyOrders();
        setDeals(data);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDeals();
  }, []);

  const filteredDeals = deals.filter(d => {
    const matchesSearch = d.properties.dealName.toLowerCase().includes(search.toLowerCase()) ||
      d.properties.customer?.toLowerCase().includes(search.toLowerCase());
    if (activeTab === "IN PROCESS") return matchesSearch && d.properties.dealStage !== "Rejected";
    if (activeTab === "SHIPPED") return matchesSearch && d.properties.trackingNumber !== null;
    return matchesSearch;
  });

  const tabs = [
    { label: "ALL LINES", count: deals.length },
    { label: "IN PROCESS", count: deals.filter(d => d.properties.dealStage !== "Rejected").length },
    { label: "SHIPPED", count: deals.filter(d => d.properties.trackingNumber !== null).length },
  ];

  const getStageStyle = (stage: string) => {
    if (stage === "Rejected") return { color: "#cc0000", bg: "#fff0f0" };
    if (stage === "Estimate Shared") return { color: "#b07d00", bg: "#fff8e1" };
    if (stage === "Order Received") return { color: "#1a7a4a", bg: "#e6f4ed" };
    return { color: BRAND_BLUE, bg: "#e6f7fe" };
  };

  return (
    <Box sx={{ width: "100%", py: { xs: 4, md: 6 }, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ mb: 4, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            {tabs.map((tab) => (
              <Button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                variant="outlined"
                sx={{
                  borderRadius: 0, px: 3, py: 1,
                  borderColor: activeTab === tab.label ? BRAND_BLUE : "#eef0f2",
                  backgroundColor: activeTab === tab.label ? BRAND_BLUE : "transparent",
                  color: activeTab === tab.label ? "#fff" : TEXT_SECONDARY,
                  fontFamily: PRIMARY_FONT, fontWeight: 700, fontSize: "0.75rem", letterSpacing: 1,
                  "&:hover": { borderColor: BRAND_BLUE, backgroundColor: activeTab === tab.label ? BRAND_BLUE : "rgba(1, 176, 240, 0.04)" },
                  display: "flex", gap: 1.5,
                }}
              >
                {tab.label}
                <Box component="span" sx={{ backgroundColor: activeTab === tab.label ? "rgba(255,255,255,0.2)" : "#f0f0f0", px: 1, borderRadius: 0, color: activeTab === tab.label ? "#fff" : BRAND_BLUE }}>
                  {tab.count}
                </Box>
              </Button>
            ))}
          </Box>

          <TextField
            placeholder="Search orders..."
            variant="standard"
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{
              width: { xs: "100%", md: "280px" },
              "& .MuiInput-underline:before": { borderBottomColor: "#eef0f2" },
              "& .MuiInput-underline:after": { borderBottomColor: BRAND_BLUE },
              "& input": { fontFamily: PRIMARY_FONT, fontSize: "0.9rem" }
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon sx={{ color: BRAND_BLUE, fontSize: "1.2rem" }} /></InputAdornment>,
            }}
          />
        </Box>

        {/* Table */}
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
            <CircularProgress sx={{ color: BRAND_BLUE }} />
          </Box>
        ) : (
          <TableContainer component={Paper} sx={{ borderRadius: 0, boxShadow: "0px 20px 50px rgba(0,0,0,0.04)", border: "1px solid #eef0f2" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: BRAND_BLUE }}>
                  {["Order Number", "Customer", "Amount", "Status", "Details"].map(header => (
                    <TableCell key={header} sx={{ color: "#ffffff", fontFamily: PRIMARY_FONT, fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 1, py: 2.5 }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredDeals.map((deal, i) => {
                  const p = deal.properties;
                  const stageStyle = getStageStyle(p.dealStage);
                  return (
                    <TableRow key={i} sx={{ "&:hover": { backgroundColor: "rgba(1, 176, 240, 0.02)" }, borderBottom: "1px solid #f9f9f9" }}>
                      <TableCell sx={{ fontFamily: PRIMARY_FONT, color: TEXT_MAIN, fontWeight: 600 }}>{p.dealName}</TableCell>
                      <TableCell sx={{ fontFamily: PRIMARY_FONT, color: TEXT_SECONDARY }}>{p.customer ?? "-"}</TableCell>
                      <TableCell sx={{ fontFamily: PRIMARY_FONT, color: TEXT_MAIN, fontWeight: 500 }}>{p.amount ? `£${p.amount}` : "-"}</TableCell>
                      <TableCell>
                        <Box component="span" sx={{ color: stageStyle.color, fontSize: "0.7rem", fontWeight: 800, backgroundColor: stageStyle.bg, px: 1.2, py: 0.5, textTransform: "uppercase" }}>
                          {p.dealStage}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Button variant="outlined" size="small" sx={{ borderRadius: 0, color: BRAND_BLUE, borderColor: BRAND_BLUE, fontWeight: 800, fontSize: "0.7rem", px: 2, "&:hover": { borderColor: BRAND_BLUE, bgcolor: "rgba(1, 176, 240, 0.05)" } }}>
                          MORE
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {!filteredDeals.length && (
                  <TableRow>
                    <TableCell colSpan={5} sx={{ textAlign: "center", py: 6, color: TEXT_SECONDARY, fontFamily: PRIMARY_FONT }}>
                      No orders found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </Box>
  );
};

export default OrdersTable;