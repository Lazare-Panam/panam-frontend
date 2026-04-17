import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Stack, CircularProgress } from "@mui/material";
import { useUserStore } from "../store/useUserStore";
import Sidebar from "./components/Sidebar";
import PersonalInformation from "./components/PersonalInformation";
import ScrollReveal from "../Common/ScrollReveal";
import CommunicationPreferences from "./components/CommunicationPreferences";
import Enquiries from "./components/Enquiries";
import SavedCarts from "./components/SavedCarts";
import QuotesHistory from "./components/QuotesHistory";
import HubSpotQuotes from "./components/HubSpotQuotes";

const VIEWS: Record<string, string> = {
  "personal-information": "Personal Information",
  "communication-preferences": "Communication Preferences",
  "carts": "Carts",
  "requested-quotes": "Requested Quotes",
  "received-quotes": "Received Quotes",
  "orders": "Orders",
  "enquiries": "Enquiries",
}

const DashBoard = () => {
  const navigate = useNavigate();
  const { section } = useParams<{ section: string }>();
  const { isAuthenticated } = useUserStore();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (!section) navigate("/dashboard/personal-information", { replace: true });
  }, [section, navigate]);

  if (!isAuthenticated) return (
    <Box sx={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );

  const activeView = VIEWS[section ?? "personal-information"] ?? "Personal Information";

  const renderContent = () => {
    switch (section) {
      case "personal-information": return <PersonalInformation />
      case "communication-preferences": return <ScrollReveal><CommunicationPreferences /></ScrollReveal>
      case "carts": return <ScrollReveal><SavedCarts /></ScrollReveal>
      case "requested-quotes": return <ScrollReveal><QuotesHistory /></ScrollReveal>
      case "received-quotes": return <ScrollReveal><HubSpotQuotes /></ScrollReveal>
      case "enquiries": return <ScrollReveal><Enquiries /></ScrollReveal>
      default: return <PersonalInformation />
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Stack direction="row" sx={{ flexGrow: 1, backgroundColor: "#f4f7f9" }}>
        <Box component="aside" sx={{ width: { xs: 0, md: 280 }, flexShrink: 0, display: { xs: "none", md: "block" }, position: "sticky", top: 0, height: "100vh" }}>
          <Sidebar activeView={activeView} onSelect={(view) => {
            const slug = Object.entries(VIEWS).find(([, v]) => v === view)?.[0]
            if (slug) navigate(`/dashboard/${slug}`)
          }} />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, overflowY: "auto" }}>
          {renderContent()}
        </Box>
      </Stack>
    </Box>
  )
}

export default DashBoard