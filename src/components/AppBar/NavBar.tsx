import React, { useEffect, useState } from "react"
import { AppBar, Typography, useScrollTrigger, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"
import { useCartStore } from "../store/useCartStore"
import { navConfig } from "./components/config"
const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'
import DesktopNavbar from "./components/DesktopNavBar"
import MegaMenu from "./components/MegaMenu"

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState(navConfig.products[0])
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const cart = useCartStore(state => state.cart)

  // Calculate total items (sum of quantities)
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  useEffect(() => {
    setMegaMenuOpen(null)
    setOpenDrawer(false)
    setIsSearchOpen(false)
  }, [location])

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 })

  const handleMouseEnter = (menuId: string) => {
    if (isSearchOpen) return
    setMegaMenuOpen(menuId)
    if (menuId === "products") setActiveTab(navConfig.products[0])
    if (menuId === "industries") setActiveTab(navConfig.industries[0])
    if (menuId === "about") setActiveTab(navConfig.about[0])
    if (menuId === "news") setActiveTab(navConfig.news[0])
  }

  const handleNavigate = (link: string) => {
    setMegaMenuOpen(null)
    navigate(link)
  }

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 1 : 0}
        onMouseLeave={() => setMegaMenuOpen(null)}
        sx={{
          backgroundColor: trigger ? "rgba(255, 255, 255, 0.98)" : "white",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease-in-out",
          color: "text.primary",
          borderBottom: trigger ? "none" : "1px solid #E0E0E0",
        }}>
        <DesktopNavbar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} megaMenuOpen={megaMenuOpen} handleMouseEnter={handleMouseEnter} cartCount={cartCount} navigate={navigate} setOpenDrawer={setOpenDrawer} />
        {/* Mega Menu Overlay */}
        {megaMenuOpen && !isSearchOpen && <MegaMenu isOpen={Boolean(megaMenuOpen)} menuData={(navConfig as any)[megaMenuOpen] || []} activeTab={activeTab} setActiveTab={setActiveTab} handleNavigate={handleNavigate} />}
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)} PaperProps={{ sx: { width: "100%", maxWidth: 350 } }}>
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee" }}>
          <Typography sx={{ fontWeight: 800, color: BRAND_BLUE }}>MENU</Typography>
          <IconButton onClick={() => setOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {[
            { text: "Products", link: "/products" },
            { text: "Industries", link: "/industries" },
            { text: "News & Blog", link: "/news" },
            { text: "About Us", link: "/about" },
            { text: "Contact Us", link: "/contact" },
          ].map(item => (
            <ListItem key={item.text} disablePadding sx={{ borderBottom: "1px solid #f5f5f5" }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.link)
                  setOpenDrawer(false)
                }}
                sx={{ py: 2 }}>
                <ListItemText primary={item.text} primaryTypographyProps={{ fontFamily: PRIMARY_FONT, fontWeight: 600, fontSize: "1rem" }} />
                <ArrowForwardIcon sx={{ fontSize: 16, color: "#ccc" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default Navbar
