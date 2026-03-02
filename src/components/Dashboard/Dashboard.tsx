import { Box, Stack } from "@mui/material";
import ScrollReveal from "../Common/ScrollReveal";
import OrdersTable from "./components/OrdersTable";
import QuerySelector from "./components/QuerySelector";
import Sidebar from "./components/Sidebar";

const DashBoard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Stack direction="row" sx={{ flexGrow: 1, backgroundColor: "#f4f7f9" }}>
        <Box 
          component="aside" 
          sx={{ 
            width: { xs: 0, md: 280 }, 
            flexShrink: 0, 
            display: { xs: "none", md: "block" },
            position: "sticky",
            top: 0,
            height: "100vh"
          }}
        >
          <Sidebar />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, overflow: "hidden" }}>
          <ScrollReveal>
            <QuerySelector />
          </ScrollReveal>
          <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "1400px", mx: "auto" }}>
            <ScrollReveal>
              <OrdersTable />
            </ScrollReveal>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default DashBoard;