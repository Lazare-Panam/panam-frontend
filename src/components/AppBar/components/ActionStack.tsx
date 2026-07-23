import { useState } from "react"
import { Stack, IconButton, Badge, Avatar, Menu, MenuItem, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LogoutIcon from "@mui/icons-material/Logout"
import CreditCardIcon from "@mui/icons-material/CreditCardOutlined"

import { useUserStore } from "../../store/useUserStore"

const BRAND_BLUE = "#01B0F0"

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
    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ zIndex: 10 }}>
      {/* Apply for Credit — always visible, stands out */}
      <Button
        onClick={() => navigate("/credit-application")}
        startIcon={<CreditCardIcon sx={{ fontSize: 18 }} />}
        sx={{
          display: { xs: "none", md: "inline-flex" },
          textTransform: "none",
          fontWeight: 700,
          fontSize: "0.85rem",
          color: "#fff",
          bgcolor: BRAND_BLUE,
          borderRadius: 999,
          px: 2.25,
          py: 0.75,
          mr: 1,
          boxShadow: "0 2px 8px rgba(1,176,240,0.35)",
          whiteSpace: "nowrap",
          "&:hover": {
            bgcolor: "#0088BA",
            boxShadow: "0 4px 12px rgba(1,176,240,0.45)",
            transform: "translateY(-1px)",
          },
          transition: "all 0.2s ease-in-out",
        }}>
        Apply for Credit
      </Button>

      {/* Profile / Login */}
      <IconButton onClick={e => (isAuthenticated ? setAnchorEl(e.currentTarget) : navigate("/login"))} sx={{ color: BRAND_BLUE }}>
        {isAuthenticated ? <Avatar sx={{ width: 36, height: 36, bgcolor: BRAND_BLUE, fontSize: "0.9rem", fontWeight: 700 }}>{userInitials}</Avatar> : <PersonOutlineIcon sx={{ fontSize: 32 }} />}
      </IconButton>

      {/* Cart */}
      <IconButton onClick={() => navigate("/cart")} sx={{ color: "#4A4A4A" }}>
        <Badge badgeContent={cartCount} color="primary" sx={{ "& .MuiBadge-badge": { bgcolor: BRAND_BLUE } }}>
          <ShoppingCartOutlinedIcon sx={{ fontSize: 28 }} />
        </Badge>
      </IconButton>

      {/* Mobile Trigger */}
      <IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { md: "none" }, color: "#4A4A4A" }}>
        <MenuIcon />
      </IconButton>

      {/* Account Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)} PaperProps={{ sx: { mt: 1, minWidth: 200, borderRadius: 0, boxShadow: "0px 10px 25px rgba(0,0,0,0.1)" } }}>
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
