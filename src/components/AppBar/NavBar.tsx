import React, { useState } from "react"
import { AppBar, Toolbar, Typography, Button, Stack, Container, useScrollTrigger, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Fade, Grid } from "@mui/material"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

// Fully Expanded Navigation Data
const navConfig = {
  products: [
    { id: "hydrogen", label: "Hydrogen", items: ["Hydrogen Valves", "Hydrogen Manifolds", "Hydrogen Block & Bleed", "Hydrogen Filters", "Hydrogen HP Fittings"] },
    { id: "instrumentation", label: "Instrumentation Fittings", items: ["Tube Fittings", "37° JIC Fittings", "Pipe Fittings", "Weld Fittings", "Swivel Gauge Adaptors"] },
    { id: "valves", label: "Valves", items: ["Needle Valves", "Ball Valves", "Check Valves", "Relief Valves", "Gauge Root Valves"] },
    { id: "manifolds", label: "Manifolds", items: ["2-Valve Manifolds", "3-Valve Manifolds", "5-Valve Manifolds", "Monoflanges"] },
    { id: "dbb", label: "Double Block and Bleed", items: ["Flange to Flange", "Flange to Pipe", "Pipe to Pipe", "Injection Quills"] },
    { id: "filter", label: "Filter", items: ["T-Type Filter", "In-Line Filter", "Bypass Filters"] },
    { id: "couplings", label: "Quick Coupling", items: ["ISO-A & ISO-B", "ISO 16028 Flat Face", "Screw Type Couplers", "High Pressure Hoses"] },
    { id: "regulators", label: "Regulators", items: ["Pressure Regulators", "Air Headers", "Condensate Pots", "Flange Adaptors"] },
  ],
  industries: [
    { id: "energy", label: "Energy & Power", items: ["Oil & Gas", "Hydrogen Energy", "Nuclear Power", "Renewables"] },
    { id: "process", label: "Process & Chemical", items: ["Petrochemical", "Chemical Processing", "Fertilizer Plants"] },
    { id: "marine", label: "Marine & Offshore", items: ["Shipbuilding", "Offshore Platforms", "Subsea Systems"] },
    { id: "pharma", label: "Pharma & Biotech", items: ["Hygienic Valves", "Sanitary Fittings", "Laboratory Gas"] },
  ],
  about: [
    { id: "company", label: "Our Company", items: ["Mission & Vision", "Manufacturing Excellence", "Quality Policy", "Global Presence"] },
    { id: "compliance", label: "Compliance", items: ["ISO Certifications", "API Standards", "Health & Safety", "Environment Policy"] },
  ],
  news: [
    { id: "updates", label: "Latest News", items: ["Product Launches", "Exhibitions 2024", "Corporate Events"] },
    { id: "resources", label: "Resources", items: ["Technical Blogs", "White Papers", "Case Studies"] },
  ],
}

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState(navConfig.products[0])

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 })

  const handleMouseEnter = (menuId: string) => {
    setMegaMenuOpen(menuId)
    // Reset active tab to the first item of the relevant category
    if (menuId === "products") setActiveTab(navConfig.products[0])
    if (menuId === "industries") setActiveTab(navConfig.industries[0])
    if (menuId === "about") setActiveTab(navConfig.about[0])
    if (menuId === "news") setActiveTab(navConfig.news[0])
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 1 : 0}
        onMouseLeave={() => setMegaMenuOpen(null)}
        sx={{
          backgroundColor: trigger ? "rgba(255, 255, 255, 0.98)" : "white",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease-in-out",
          color: "text.primary",
          borderBottom: "1px solid #E0E0E0",
        }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: { xs: 70, md: 80 }, justifyContent: "space-between" }}>
            <Box component="a" href="/" sx={{ display: "block", textDecoration: "none" }}>
              <Box component="img" src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769097040/1_jdvwbk.png" alt="Panam Valves Logo" sx={{ height: { xs: 65, md: 75 }, width: "auto", mt: 0.5, mb: 1, objectFit: "contain" }} />
            </Box>

            <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" }, height: "100%" }}>
              {[
                { label: "Products", id: "products" },
                { label: "Industries", id: "industries" },
                { label: "News & Blog", id: "news" },
                { label: "About Us", id: "about" },
              ].map(item => (
                <Button
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  endIcon={
                    <KeyboardArrowDownIcon
                      sx={{
                        transition: "0.2s",
                        transform: megaMenuOpen === item.id ? "rotate(180deg)" : "none",
                        fontSize: 18,
                      }}
                    />
                  }
                  sx={{
                    color: megaMenuOpen === item.id ? BRAND_BLUE : "#4A4A4A",
                    textTransform: "none",
                    fontFamily: PRIMARY_FONT,
                    fontWeight: megaMenuOpen === item.id ? 700 : 600,
                    px: 2,
                  }}>
                  {item.label}
                </Button>
              ))}

              <Button sx={{ color: "#4A4A4A", textTransform: "none", fontFamily: PRIMARY_FONT, fontWeight: 600, px: 2, "&:hover": { color: BRAND_BLUE } }}>Contact Us</Button>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <ShoppingCartOutlinedIcon sx={{ fontSize: 28, color: "#999" }} />
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Typography variant="caption" display="block" sx={{ fontWeight: 700, color: BRAND_BLUE, lineHeight: 1.2 }}>
                  Get Connected
                </Typography>
                <Typography variant="caption" display="block" sx={{ fontWeight: 700, color: BRAND_BLUE, lineHeight: 1.2 }}>
                  Quick Order?
                </Typography>
              </Box>
              <IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { md: "none" }, color: "inherit" }}>
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>

        {/* Mega Menu Overlay */}
        <Fade in={Boolean(megaMenuOpen)}>
          <Box
            sx={{
              position: "absolute",
              top: { xs: 70, md: 80 },
              left: 0,
              right: 0,
              backgroundColor: "white",
              borderBottom: "1px solid #E0E0E0",
              boxShadow: "0px 10px 20px rgba(0,0,0,0.05)",
              zIndex: -1,
            }}>
            <Container maxWidth="lg" sx={{ p: 0 }}>
              <Grid container>
                {/* 1. Left Sidebar Navigation */}
                <Grid size={{ md: 3 }} sx={{ backgroundColor: "white", py: 4, borderRight: "1px solid #F0F0F0" }}>
                  <Stack spacing={0}>
                    {(megaMenuOpen ? (navConfig as any)[megaMenuOpen] : []).map((cat: any) => (
                      <Box
                        key={cat.id}
                        onMouseEnter={() => setActiveTab(cat)}
                        sx={{
                          px: 4,
                          py: 1.8,
                          cursor: "pointer",
                          fontFamily: PRIMARY_FONT,
                          fontWeight: activeTab.id === cat.id ? 700 : 500,
                          color: activeTab.id === cat.id ? BRAND_BLUE : "#4A4A4A",
                          backgroundColor: activeTab.id === cat.id ? "#F9FAFB" : "transparent",
                          transition: "0.2s",
                        }}>
                        {cat.label}
                      </Box>
                    ))}
                  </Stack>
                </Grid>

                {/* 2. Content Area */}
                <Grid size={{ md: 9 }} sx={{ backgroundColor: "#F9FAFB", py: 4, px: 5 }}>
                  <Typography variant="overline" sx={{ color: "#999", fontWeight: 700, mb: 2, display: "block" }}>
                    Available {megaMenuOpen}
                  </Typography>
                  <Grid container spacing={1}>
                    {activeTab?.items.map((item: string) => (
                      <Grid size={{ xs: 6, md: 4 }} key={item}>
                        <Box
                          component="a"
                          href="#"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            py: 1.5,
                            textDecoration: "none",
                            color: "#4A4A4A",
                            fontFamily: PRIMARY_FONT,
                            fontSize: "0.92rem",
                            transition: "0.2s",
                            "& .item-arrow": { opacity: 0, ml: -1, transition: "0.2s" },
                            "&:hover": {
                              color: BRAND_BLUE,
                              transform: "translateX(5px)",
                              "& .item-arrow": { opacity: 1, ml: 1 },
                            },
                          }}>
                          {item}
                          <ArrowForwardIcon className="item-arrow" sx={{ fontSize: 14 }} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Fade>
      </AppBar>

      {/* Mobile Menu */}
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)} PaperProps={{ sx: { width: "100%", maxWidth: 350 } }}>
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee" }}>
          <Typography sx={{ fontWeight: 800, color: BRAND_BLUE }}>MENU</Typography>
          <IconButton onClick={() => setOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {["Products", "Industries", "News & Blog", "About Us", "Contact Us"].map(text => (
            <ListItem key={text} disablePadding sx={{ borderBottom: "1px solid #f5f5f5" }}>
              <ListItemButton sx={{ py: 2.5 }}>
                <ListItemText primary={text} primaryTypographyProps={{ fontFamily: PRIMARY_FONT, fontWeight: 600, fontSize: "1.1rem" }} />
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
