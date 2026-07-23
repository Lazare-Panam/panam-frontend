import React, { useState } from "react"
import { Box, Typography, Button, Container, AppBar, Toolbar, Tabs, Tab } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { LogoutOutlined, DashboardOutlined, HistoryEdu as EnquiryIcon, Assignment as RFSIcon } from "@mui/icons-material"
import AdminEnquiriesList from "./AdminEnquiries" // The component we just built
import AdminUsersList from "./AdminUsers"
import PeopleIcon from "@mui/icons-material/PeopleAltOutlined"
import CreditCardIcon from "@mui/icons-material/CreditCardOutlined"
import AdminRFQListNew from "./AdminRFQ/AdminRfqListNew"
import AdminCreditApplicationsList from "./AdminCreditApplications"

const BRAND_BLUE = "#01B0F0"

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
  }

  const handleLogout = () => {
    // Usually hits /api/admin/logout to clear the cookie
    navigate("/adminLogin")
  }

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
      {/* HEADER / NAVIGATION */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          color: "#1E293B",
          boxShadow: "none",
          borderBottom: "1px solid #E2E8F0",
        }}>
        <Toolbar>
          <DashboardOutlined sx={{ color: BRAND_BLUE, mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 900, letterSpacing: -0.5 }}>
            PANAM <span style={{ color: BRAND_BLUE }}>ADMIN</span>
          </Typography>
          <Button
            variant="outlined"
            onClick={handleLogout}
            startIcon={<LogoutOutlined />}
            sx={{
              textTransform: "none",
              fontWeight: 700,
              color: "#64748B",
              borderColor: "#E2E8F0",
              "&:hover": { borderColor: BRAND_BLUE, color: BRAND_BLUE },
            }}>
            Logout
          </Button>
        </Toolbar>

        {/* TAB SWITCHER */}
        <Container maxWidth="xl">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              "& .MuiTab-root": { fontWeight: 700, textTransform: "none", fontSize: "0.95rem" },
              "& .Mui-selected": { color: BRAND_BLUE },
              "& .MuiTabs-indicator": { backgroundColor: BRAND_BLUE, height: 3 },
            }}>
            <Tab icon={<EnquiryIcon fontSize="small" />} iconPosition="start" label="Enquiries" />
            <Tab icon={<RFSIcon fontSize="small" />} iconPosition="start" label="RFQ Logs" />
            <Tab icon={<PeopleIcon fontSize="small" />} iconPosition="start" label="Users" />
            <Tab icon={<CreditCardIcon fontSize="small" />} iconPosition="start" label="Credit Applications" />
          </Tabs>
        </Container>
      </AppBar>

      {/* DYNAMIC CONTENT AREA */}
      <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
        {activeTab === 0 && (
          <Box>
            <AdminEnquiriesList />
          </Box>
        )}

        {activeTab === 1 && (
          <Box>
            <AdminRFQListNew />
          </Box>
        )}
        {activeTab === 2 && (
          <Box>
            <AdminUsersList />
          </Box>
        )}
        {activeTab === 3 && (
          <Box>
            <AdminCreditApplicationsList />
          </Box>
        )}
      </Container>
    </Box>
  )
}

export default AdminDashboard
