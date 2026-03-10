import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, CircularProgress, Typography } from "@mui/material";
import { useUserStore } from "../store/useUserStore";
import Sidebar from "./components/Sidebar";
import PersonalInformation from "./components/PersonalInformation";
import OrdersTable from "./components/OrdersTable";
import QuerySelector from "./components/QuerySelector";
import ScrollReveal from "../Common/ScrollReveal";
import CommunicationPreferences from "./components/CommunicationPreferences";
import Enquiries from "./components/Enquiries";
import SavedCarts from "./components/SavedCarts";

const DashBoard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUserStore();
  
  // 1. Create the state to track the active screen
  const [activeView, setActiveView] = useState("Personal Information");

  // Auth Guard
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return (
      <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  // 2. Logic to switch screens
  const renderContent = () => {
    switch (activeView) {
      case "Personal Information":
        return <PersonalInformation />;
      
      case "Orders":
        return (
          <Box>
            <ScrollReveal>
              <QuerySelector />
            </ScrollReveal>
            <Box sx={{ p: { xs: 2, md: 6 }, maxWidth: "1400px", mx: "auto" }}>
              <ScrollReveal>
                <OrdersTable />
              </ScrollReveal>
            </Box>
          </Box>
        );
        case "Communication Preferences":
        return (
          <ScrollReveal>
            <CommunicationPreferences />
          </ScrollReveal>
        );
        case "Enquiries":
        return (
          <ScrollReveal>
            <Enquiries />
          </ScrollReveal>
        );
        case "Carts":
      return (
        <ScrollReveal>
          <SavedCarts />
        </ScrollReveal>
      );

      default:
        return (
          <Box sx={{ p: 6 }}>
            <Typography variant="h5">{activeView} Content Placeholder</Typography>
          </Box>
        );
    }
  };

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
          {/* 3. Pass the state and the setter function to the Sidebar */}
          <Sidebar activeView={activeView} onSelect={setActiveView} />
        </Box>

        <Box component="main" sx={{ flexGrow: 1, overflowY: "auto" }}>
          {/* 4. Render the active component */}
          {renderContent()}
        </Box>
      </Stack>
    </Box>
  );
};

export default DashBoard;