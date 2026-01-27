import React, { useState } from "react"
import { AppBar, Toolbar, Typography, Button, Stack, Container, useScrollTrigger, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Fade, Grid } from "@mui/material"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import MenuIcon from "@mui/icons-material/Menu"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

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
    { id: "marine", label: "Marine", items: ["Shipbuilding", "Propulsion Systems", "Ballast Water Treatment", "Marine Engine Components", "Deck Machinery"] },
    { id: "oil-gas", label: "Oil & Gas", items: ["Upstream Exploration", "Midstream Pipelines", "Downstream Refining", "Petrochemical Plants", "Gas Processing"] },
    { id: "renewables", label: "Renewables", items: ["Hydrogen Electrolysers", "Wind Turbine Hydraulics", "Solar Thermal Systems", "Biofuel Processing", "Geothermal Energy"] },
    { id: "automotive", label: "Automotive", items: ["Testing Rigs", "Fuel Injection Systems", "Brake Line Fittings", "Cooling Systems", "Assembly Line Automation"] },
    { id: "agriculture", label: "Agriculture", items: ["Irrigation Systems", "Fertilizer Spraying", "Tractor Hydraulics", "Grain Processing", "Pesticide Handling"] },
    { id: "manufacturing", label: "Manufacturing", items: ["Hydraulic Presses", "Pneumatic Controls", "Factory Automation", "Machine Tooling", "Coolant Circulation"] },
    { id: "ship-repair", label: "Ship Management & Repair", items: ["Dry Dock Services", "Retrofitting Valves", "Hull Maintenance Systems", "Emergency Repairs", "Spare Parts Logistics"] },
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
    if (menuId === "products") setActiveTab(navConfig.products[0])
    if (menuId === "industries") setActiveTab(navConfig.industries[0])
    if (menuId === "about") setActiveTab(navConfig.about[0])
    if (menuId === "news") setActiveTab(navConfig.news[0])
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 2 : 0}
        onMouseLeave={() => setMegaMenuOpen(null)}
        sx={{
          backgroundColor: trigger ? "rgba(255, 255, 255, 0.98)" : "white",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease-in-out",
          color: "text.primary",
          borderBottom: trigger ? "none" : "1px solid #E0E0E0",
        }}>
        <Container maxWidth="xl">
          {" "}
          {/* Wider container spreads the elements */}
          <Toolbar disableGutters sx={{ height: { xs: 70, md: 90 }, justifyContent: "space-between" }}>
            {/* Logo */}
            <Box component="a" href="/" sx={{ display: "block", textDecoration: "none" }}>
              <Box component="img" src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769097040/1_jdvwbk.png" alt="Panam Valves Logo" sx={{ height: { xs: 60, md: 70 }, width: "auto", objectFit: "contain" }} />
            </Box>

            {/* Main Links - Spread out with spacing and padding */}
            <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" }, height: "100%", ml: 4 }}>
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
                    color: megaMenuOpen === item.id ? BRAND_BLUE : "#1A1A1A",
                    textTransform: "none",
                    fontFamily: PRIMARY_FONT,
                    fontSize: "0.95rem",
                    fontWeight: megaMenuOpen === item.id ? 700 : 500,
                    px: 2, // Extra padding spreads the menu
                  }}>
                  {item.label}
                </Button>
              ))}
              <Button sx={{ color: "#1A1A1A", textTransform: "none", fontFamily: PRIMARY_FONT, fontWeight: 500, fontSize: "0.95rem", px: 2, "&:hover": { color: BRAND_BLUE } }}>Contact Us</Button>
            </Stack>

            {/* Actions: Search, Account, Cart */}
            <Stack direction="row" spacing={{ xs: 1, md: 3 }} alignItems="center">
              <IconButton sx={{ color: BRAND_BLUE, p: 1.5 }}>
                <SearchIcon sx={{ fontSize: 30 }} /> {/* Increased from 24 */}
              </IconButton>

              <IconButton sx={{ color: BRAND_BLUE, p: 1.5 }}>
                <PersonOutlineIcon sx={{ fontSize: 32 }} /> {/* Increased from 26 */}
              </IconButton>

              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ cursor: "pointer" }}>
                <ShoppingCartOutlinedIcon sx={{ fontSize: 26, color: "#4A4A4A" }} />
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <Typography variant="caption" display="block" sx={{ fontWeight: 700, color: BRAND_BLUE, lineHeight: 1.2 }}>
                    Quick Order?
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ fontWeight: 500, color: "#666", lineHeight: 1.2 }}>
                    0 items
                  </Typography>
                </Box>
              </Stack>

              <IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { md: "none" }, color: "inherit" }}>
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>

        {/* Mega Menu Overlay - FIXED with conditional rendering to prevent white bars */}
        {megaMenuOpen && (
          <Fade in={Boolean(megaMenuOpen)}>
            <Box
              sx={{
                position: "absolute",
                top: { xs: 70, md: 90 },
                left: 0,
                right: 0,
                backgroundColor: "white",
                borderBottom: "1px solid #E0E0E0",
                boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
              }}>
              <Container maxWidth="lg" sx={{ p: 0 }}>
                <Grid container>
                  {/* Left Sidebar */}
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
                            borderLeft: activeTab.id === cat.id ? `4px solid ${BRAND_BLUE}` : "4px solid transparent",
                          }}>
                          {cat.label}
                        </Box>
                      ))}
                    </Stack>
                  </Grid>

                  {/* Content Area */}
                  <Grid size={{ md: 9 }} sx={{ backgroundColor: "#F9FAFB", py: 4, px: 6 }}>
                    <Typography variant="overline" sx={{ color: "#999", fontWeight: 700, mb: 3, display: "block", letterSpacing: 1.5 }}>
                      Explore {activeTab?.label}
                    </Typography>
                    <Grid container spacing={2}>
                      {activeTab?.items.map((item: string) => (
                        <Grid size={{ xs: 6, md: 4 }} key={item}>
                          <Box
                            component="a"
                            href="#"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              py: 1,
                              textDecoration: "none",
                              color: "#4A4A4A",
                              fontFamily: PRIMARY_FONT,
                              fontSize: "0.9rem",
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
        )}
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)} PaperProps={{ sx: { width: "100%", maxWidth: 350 } }}>
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #eee" }}>
          <Typography sx={{ fontWeight: 800, color: BRAND_BLUE, letterSpacing: 1 }}>MENU</Typography>
          <IconButton onClick={() => setOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {["Products", "Industries", "News & Blog", "About Us", "Contact Us"].map(text => (
            <ListItem key={text} disablePadding sx={{ borderBottom: "1px solid #f5f5f5" }}>
              <ListItemButton sx={{ py: 2 }}>
                <ListItemText primary={text} primaryTypographyProps={{ fontFamily: PRIMARY_FONT, fontWeight: 600, fontSize: "1rem" }} />
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
