import { useState } from "react"
import { Stack, IconButton, Badge, Avatar, Menu, MenuItem, Button, Tooltip } from "@mui/material"
import { useNavigate } from "react-router-dom"

import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LogoutIcon from "@mui/icons-material/Logout"
import CreditCardIcon from "@mui/icons-material/CreditCardOutlined"

import { useUserStore } from "../../store/useUserStore"

const BRAND_BLUE = "#01B0F0"

const iconBtnSx = {
  width: 42,
  height: 42,
  color: "#22364A",
  border: "1px solid #E8EEF3",
  borderRadius: "12px",
  transition: "all 0.2s ease",
  "&:hover": { color: BRAND_BLUE, borderColor: "rgba(1,176,240,0.4)", bgcolor: "rgba(1,176,240,0.06)" },
}

export const ActionStack = ({ cartCount, setOpenDrawer }: any) => {
  const navigate = useNavigate()
  const { firstName, lastName, isAuthenticated, clearUser } = useUserStore()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const userInitials = `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase()

  const handleLogout = () => {
    clearUser()
    setAnchorEl(null)
    navigate("/login")
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ zIndex: 10 }}>
      {/* Apply for Credit — always visible, stands out. Full label from lg; between md and lg (iPad landscape)
          the nav links leave no room for it, so it collapses to an icon button instead of pushing the cart off-screen. */}
      <Tooltip title="Apply for Credit">
        <IconButton
          aria-label="Apply for Credit"
          onClick={() => navigate("/credit-application")}
          sx={{ ...iconBtnSx, display: { xs: "none", md: "inline-flex", lg: "none" }, color: "#fff", bgcolor: BRAND_BLUE, borderColor: BRAND_BLUE, "&:hover": { bgcolor: "#0088BA", borderColor: "#0088BA", color: "#fff" } }}>
          <CreditCardIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Tooltip>
      <Button
        onClick={() => navigate("/credit-application")}
        startIcon={<CreditCardIcon sx={{ fontSize: 18 }} />}
        sx={{
          display: { xs: "none", lg: "inline-flex" },
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.88rem",
          color: "#fff",
          bgcolor: BRAND_BLUE,
          borderRadius: "10px",
          px: 2.25,
          py: 1,
          mr: 1.5,
          boxShadow: "none",
          whiteSpace: "nowrap",
          "&:hover": {
            bgcolor: "#0088BA",
            boxShadow: "0 8px 20px rgba(1,176,240,0.32)",
            transform: "translateY(-1px)",
          },
          transition: "all 0.2s ease-in-out",
        }}>
        Apply for Credit
      </Button>

      {/* Profile / Login */}
      <IconButton onClick={e => (isAuthenticated ? setAnchorEl(e.currentTarget) : navigate("/login"))} sx={{ ...iconBtnSx, ...(isAuthenticated ? { p: 0, border: "none" } : {}) }}>
        {isAuthenticated ? <Avatar sx={{ width: 42, height: 42, bgcolor: BRAND_BLUE, fontSize: "0.9rem", fontWeight: 700 }}>{userInitials}</Avatar> : <PersonOutlineIcon sx={{ fontSize: 22 }} />}
      </IconButton>

      {/* Cart */}
      <IconButton onClick={() => navigate("/cart")} sx={iconBtnSx}>
        <Badge badgeContent={cartCount} color="primary" sx={{ "& .MuiBadge-badge": { bgcolor: BRAND_BLUE } }}>
          <ShoppingCartOutlinedIcon sx={{ fontSize: 21 }} />
        </Badge>
      </IconButton>

      {/* Mobile Trigger */}
      <IconButton onClick={() => setOpenDrawer(true)} sx={{ ...iconBtnSx, display: { md: "none" } }}>
        <MenuIcon />
      </IconButton>

      {/* Account Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)} PaperProps={{ sx: { mt: 1, minWidth: 200, borderRadius: "12px", border: "1px solid #E8EEF3", boxShadow: "0 12px 32px rgba(15,34,54,0.12)" } }}>
        <MenuItem
          onClick={() => {
            setAnchorEl(null)
            navigate("/dashboard")
          }}>
          <AccountCircleIcon sx={{ mr: 2, fontSize: 20, color: BRAND_BLUE }} /> My Account
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ color: "error.main" }}>
          <LogoutIcon sx={{ mr: 2, fontSize: 20 }} /> Logout
        </MenuItem>
      </Menu>
    </Stack>
  )
}
