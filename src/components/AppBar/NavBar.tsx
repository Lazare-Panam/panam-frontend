import React, { useEffect, useState } from "react"
import { AppBar, Toolbar, Typography, Button, Stack, Container, useScrollTrigger, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Fade, Grid, InputBase } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"
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
    {
      id: "hydrogen",
      label: "Hydrogen",
      link: "/products/hydrogen",
      items: [
        { name: "Hydrogen Valves", link: "/products/hydrogen/valves" },
        { name: "Hydrogen Manifolds", link: "/products/hydrogen/manifolds" },
        { name: "Hydrogen Block & Bleed", link: "/products/hydrogen/block-bleed" },
        { name: "Hydrogen Filters", link: "/products/hydrogen/filters" },
        { name: "Hydrogen HP Fittings", link: "/products/hydrogen/hp-fittings" },
      ],
    },
    {
      id: "instrumentation",
      label: "Instrumentation Fittings",
      link: "/products/instrumentation",
      items: [
        { name: "Tube Fittings", link: "/products/instrumentation/tube-fittings" },
        { name: "37° JIC Fittings", link: "/products/instrumentation/jic-fittings" },
        { name: "Pipe Fittings", link: "/products/instrumentation/pipe-fittings" },
        { name: "Weld Fittings", link: "/products/instrumentation/weld-fittings" },
        { name: "Swivel Gauge Adaptors", link: "/products/instrumentation/gauge-adaptors" },
      ],
    },
    {
      id: "valves",
      label: "Valves",
      link: "/products/valves",
      items: [
        { name: "Needle Valves", link: "/products/valves/needle" },
        { name: "Ball Valves", link: "/products/valves/ball" },
        { name: "Check Valves", link: "/products/valves/check" },
        { name: "Relief Valves", link: "/products/valves/relief" },
        { name: "Gauge Root Valves", link: "/products/valves/gauge-root" },
      ],
    },
    {
      id: "manifolds",
      label: "Manifolds",
      link: "/products/manifolds",
      items: [
        { name: "2-Valve Manifolds", link: "/products/manifolds/2-valve" },
        { name: "3-Valve Manifolds", link: "/products/manifolds/3-valve" },
        { name: "5-Valve Manifolds", link: "/products/manifolds/5-valve" },
        { name: "Monoflanges", link: "/products/manifolds/monoflanges" },
      ],
    },
    {
      id: "dbb",
      label: "Double Block and Bleed",
      link: "/products/dbb",
      items: [
        { name: "Flange to Flange", link: "/products/dbb/flange-to-flange" },
        { name: "Flange to Pipe", link: "/products/dbb/flange-to-pipe" },
        { name: "Pipe to Pipe", link: "/products/dbb/pipe-to-pipe" },
        { name: "Injection Quills", link: "/products/dbb/injection-quills" },
      ],
    },
    {
      id: "filter",
      label: "Filter",
      link: "/products/filter",
      items: [
        { name: "T-Type Filter", link: "/products/filter/t-type" },
        { name: "In-Line Filter", link: "/products/filter/inline" },
        { name: "Bypass Filters", link: "/products/filter/bypass" },
      ],
    },
    {
      id: "couplings",
      label: "Quick Coupling",
      link: "/products/couplings",
      items: [
        { name: "ISO-A & ISO-B", link: "/products/couplings/iso" },
        { name: "ISO 16028 Flat Face", link: "/products/couplings/flat-face" },
        { name: "Screw Type Couplers", link: "/products/couplings/screw-type" },
        { name: "High Pressure Hoses", link: "/products/couplings/hoses" },
      ],
    },
    {
      id: "regulators",
      label: "Regulators",
      link: "/products/regulators",
      items: [
        { name: "Pressure Regulators", link: "/products/regulators/pressure" },
        { name: "Air Headers", link: "/products/regulators/air-headers" },
        { name: "Condensate Pots", link: "/products/regulators/condensate-pots" },
        { name: "Flange Adaptors", link: "/products/regulators/flange-adaptors" },
      ],
    },
  ],
  industries: [
    {
      id: "marine",
      label: "Marine",
      link: "/industries/marine",
      items: [
        { name: "Shipbuilding", link: "/industries/marine/shipbuilding" },
        { name: "Propulsion Systems", link: "/industries/marine/propulsion" },
        { name: "Ballast Water Treatment", link: "/industries/marine/ballast" },
        { name: "Marine Engine Components", link: "/industries/marine/engine" },
        { name: "Deck Machinery", link: "/industries/marine/deck" },
      ],
    },
    {
      id: "oil-gas",
      label: "Oil & Gas",
      link: "/industries/oil-gas",
      items: [
        { name: "Upstream Exploration", link: "/industries/oil-gas/upstream" },
        { name: "Midstream Pipelines", link: "/industries/oil-gas/midstream" },
        { name: "Downstream Refining", link: "/industries/oil-gas/downstream" },
        { name: "Petrochemical Plants", link: "/industries/oil-gas/petrochemical" },
        { name: "Gas Processing", link: "/industries/oil-gas/gas-processing" },
      ],
    },
    {
      id: "renewables",
      label: "Renewables",
      link: "/industries/renewables",
      items: [
        { name: "Hydrogen Electrolysers", link: "/industries/renewables/hydrogen" },
        { name: "Wind Turbine Hydraulics", link: "/industries/renewables/wind" },
        { name: "Solar Thermal Systems", link: "/industries/renewables/solar" },
        { name: "Biofuel Processing", link: "/industries/renewables/biofuel" },
        { name: "Geothermal Energy", link: "/industries/renewables/geothermal" },
      ],
    },
    {
      id: "automotive",
      label: "Automotive",
      link: "/industries/automotive",
      items: [
        { name: "Testing Rigs", link: "/industries/automotive/testing" },
        { name: "Fuel Injection Systems", link: "/industries/automotive/fuel-injection" },
        { name: "Brake Line Fittings", link: "/industries/automotive/brake" },
        { name: "Cooling Systems", link: "/industries/automotive/cooling" },
        { name: "Assembly Line Automation", link: "/industries/automotive/assembly" },
      ],
    },
    {
      id: "agriculture",
      label: "Agriculture",
      link: "/industries/agriculture",
      items: [
        { name: "Irrigation Systems", link: "/industries/agriculture/irrigation" },
        { name: "Fertilizer Spraying", link: "/industries/agriculture/fertilizer" },
        { name: "Tractor Hydraulics", link: "/industries/agriculture/tractor" },
        { name: "Grain Processing", link: "/industries/agriculture/grain" },
        { name: "Pesticide Handling", link: "/industries/agriculture/pesticide" },
      ],
    },
    {
      id: "manufacturing",
      label: "Manufacturing",
      link: "/industries/manufacturing",
      items: [
        { name: "Hydraulic Presses", link: "/industries/manufacturing/hydraulic" },
        { name: "Pneumatic Controls", link: "/industries/manufacturing/pneumatic" },
        { name: "Factory Automation", link: "/industries/manufacturing/automation" },
        { name: "Machine Tooling", link: "/industries/manufacturing/tooling" },
        { name: "Coolant Circulation", link: "/industries/manufacturing/coolant" },
      ],
    },
  ],
  about: [
    {
      id: "company",
      label: "Our Company",
      link: "/about/company",
      items: [
        { name: "Mission & Vision", link: "/about/mission" },
        { name: "Manufacturing Excellence", link: "/about/manufacturing" },
        { name: "Quality Policy", link: "/about/quality" },
        { name: "Global Presence", link: "/about/global" },
      ],
    },
    {
      id: "compliance",
      label: "Compliance",
      link: "/about/compliance",
      items: [
        { name: "ISO Certifications", link: "/about/compliance/iso" },
        { name: "API Standards", link: "/about/compliance/api" },
        { name: "Health & Safety", link: "/about/compliance/safety" },
        { name: "Environment Policy", link: "/about/compliance/environment" },
      ],
    },
  ],
  news: [
    {
      id: "updates",
      label: "Latest News",
      link: "/news/updates",
      items: [
        { name: "Product Launches", link: "/news/product-launches" },
        { name: "Exhibitions 2024", link: "/news/exhibitions" },
        { name: "Corporate Events", link: "/news/events" },
      ],
    },
    {
      id: "resources",
      label: "Resources",
      link: "/news/resources",
      items: [
        { name: "Technical Blogs", link: "/news/blogs" },
        { name: "White Papers", link: "/news/white-papers" },
        { name: "Case Studies", link: "/news/case-studies" },
      ],
    },
  ],
}

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState(navConfig.products[0])
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    setMegaMenuOpen(null) // Closes the hover menu
    setOpenDrawer(false) // Closes the mobile drawer
    setIsSearchOpen(false) // Closes search if you navigated
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
        elevation={trigger ? 2 : 0}
        onMouseLeave={() => setMegaMenuOpen(null)}
        sx={{
          backgroundColor: trigger ? "rgba(255, 255, 255, 0.98)" : "white",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease-in-out",
          color: "text.primary",
          borderBottom: trigger ? "none" : "1px solid #E0E0E0",
        }}>
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Toolbar disableGutters sx={{ height: { xs: 70, md: 90 }, justifyContent: "space-between" }}>
            {/* Logo Section */}
            <Box component="a" href="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none", zIndex: 10 }}>
              <Box component="img" src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769097040/1_jdvwbk.png" alt="Panam Valves Logo" sx={{ height: { xs: 60, md: 70 }, width: "auto", objectFit: "contain" }} />
            </Box>

            {/* Navigation / Search Overlay Section */}
            <Box sx={{ flexGrow: 1, display: "flex", height: "100%", alignItems: "center", position: "relative", overflow: "hidden" }}>
              {/* Regular Navigation Links */}
              <Fade in={!isSearchOpen} timeout={400}>
                <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: isSearchOpen ? "none" : "flex" }, ml: 6 }}>
                  {[
                    { label: "Products", id: "products" },
                    { label: "Industries", id: "industries" },
                    { label: "News & Blog", id: "news" },
                    { label: "About Us", id: "about" },
                  ].map(item => (
                    <Button key={item.id} onMouseEnter={() => handleMouseEnter(item.id)} onClick={() => navigate(`/${item.id}`)} endIcon={<KeyboardArrowDownIcon sx={{ transition: "0.2s", transform: megaMenuOpen === item.id ? "rotate(180deg)" : "none", fontSize: 18 }} />} sx={{ color: "#1A1A1A", textTransform: "none", fontFamily: PRIMARY_FONT, fontSize: "0.95rem", fontWeight: 600, px: 2 }}>
                      {item.label}
                    </Button>
                  ))}
                  <Button onClick={() => navigate("/contact")} sx={{ color: "#1A1A1A", textTransform: "none", fontFamily: PRIMARY_FONT, fontWeight: 600, fontSize: "0.95rem", px: 2 }}>
                    Contact Us
                  </Button>
                </Stack>
              </Fade>

              {/* SLOW APPEARING Blue Search Bar Container */}
              <Fade in={isSearchOpen} timeout={600}>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: BRAND_BLUE,
                    display: isSearchOpen ? "flex" : "none",
                    alignItems: "center",
                    px: 4,
                    zIndex: 5,
                    transition: "transform 0.5s ease-in-out",
                    transform: isSearchOpen ? "translateX(0)" : "translateX(20px)",
                  }}>
                  <InputBase
                    autoFocus
                    placeholder="Search by model, part number or keyword"
                    sx={{
                      flex: 1,
                      color: "white",
                      fontFamily: PRIMARY_FONT,
                      fontSize: "1.2rem",
                      fontStyle: "italic",
                      borderBottom: "1px solid white",
                      "& input::placeholder": { color: "rgba(255,255,255,0.8)", opacity: 1 },
                    }}
                  />
                  <SearchIcon sx={{ color: "white", fontSize: 35, ml: 2 }} />
                </Box>
              </Fade>
            </Box>

            {/* Action Icons Section */}
            <Stack direction="row" spacing={1} alignItems="center" sx={{ zIndex: 10 }}>
              <IconButton
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                sx={{
                  color: isSearchOpen ? "white" : BRAND_BLUE,
                  backgroundColor: isSearchOpen ? "#003366" : "transparent",
                  borderRadius: 0,
                  height: "90px",
                  width: "70px",
                  transition: "background-color 0.4s ease",
                  "&:hover": { backgroundColor: isSearchOpen ? "#002244" : "rgba(0,0,0,0.04)" },
                }}>
                <Fade in={true} key={isSearchOpen ? "close" : "search"} timeout={300}>
                  {isSearchOpen ? <CloseIcon sx={{ fontSize: 40 }} /> : <SearchIcon sx={{ fontSize: 32 }} />}
                </Fade>
              </IconButton>

              <IconButton onClick={() => navigate("/account")} sx={{ color: BRAND_BLUE, p: 1.5 }}>
                <PersonOutlineIcon sx={{ fontSize: 34 }} />
              </IconButton>

              <Stack direction="row" spacing={1.5} alignItems="center" onClick={() => navigate("/cart")} sx={{ cursor: "pointer", pl: 1 }}>
                <ShoppingCartOutlinedIcon sx={{ fontSize: 28, color: "#4A4A4A" }} />
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <Typography variant="caption" display="block" sx={{ fontWeight: 700, color: BRAND_BLUE, lineHeight: 1.2 }}>
                    Quick Order?
                  </Typography>
                </Box>
              </Stack>

              <IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { md: "none" }, color: "inherit" }}>
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>

        {/* Mega Menu Overlay */}
        {megaMenuOpen && !isSearchOpen && (
          <Fade in={Boolean(megaMenuOpen)}>
            <Box sx={{ position: "absolute", top: { xs: 70, md: 90 }, left: 0, right: 0, backgroundColor: "white", borderBottom: "1px solid #E0E0E0", boxShadow: "0px 15px 30px rgba(0,0,0,0.08)" }}>
              <Container maxWidth="lg" sx={{ p: 0 }}>
                <Grid container>
                  <Grid size={{ md: 3 }} sx={{ backgroundColor: "white", py: 4, borderRight: "1px solid #F0F0F0" }}>
                    <Stack spacing={0}>
                      {(megaMenuOpen ? (navConfig as any)[megaMenuOpen] : []).map((cat: any) => (
                        <Box
                          key={cat.id}
                          onMouseEnter={() => setActiveTab(cat)}
                          onClick={() => handleNavigate(cat.link)}
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
                  <Grid size={{ md: 9 }} sx={{ backgroundColor: "#F9FAFB", py: 4, px: 6 }}>
                    <Typography variant="overline" sx={{ color: "#999", fontWeight: 700, mb: 3, display: "block", letterSpacing: 1.5 }}>
                      Explore {activeTab?.label}
                    </Typography>
                    <Grid container spacing={2}>
                      {activeTab?.items.map((item: any) => (
                        <Grid size={{ xs: 6, md: 4 }} key={item.name}>
                          <Box
                            onClick={() => handleNavigate(item.link)}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              py: 1,
                              textDecoration: "none",
                              color: "#4A4A4A",
                              fontFamily: PRIMARY_FONT,
                              fontSize: "0.9rem",
                              transition: "0.2s",
                              cursor: "pointer",
                              "&:hover": { color: BRAND_BLUE, transform: "translateX(5px)" },
                            }}>
                            {item.name}
                            <ArrowForwardIcon sx={{ fontSize: 14, ml: 1, opacity: 0.5 }} />
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
