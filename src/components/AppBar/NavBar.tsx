import React, { useState } from "react"
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Stack, 
  Container, 
  useScrollTrigger, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Fade, 
  Grid 
} from "@mui/material"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

const productData = {
  categories: [
    { id: "valves", label: "Valves", items: ["Ball Valves", "Needle Valves", "Check Valves", "Gate Valves", "Plug Valves", "Globe Valves"] },
    { id: "fittings", label: "Fittings", items: ["Tube Fittings", "Pipe Fittings", "Adapter Fittings", "Weld Fittings"] },
    { id: "manifolds", label: "Manifolds", items: ["2-Way Manifolds", "3-Way Manifolds", "5-Way Manifolds", "Gauge Root Valves"] },
    { id: "instrumentation", label: "Instrumentation", items: ["Double Block & Bleed", "Monoflanges", "Air Headers", "Condensate Pots"] },
  ]
}

const Navbar: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(productData.categories[0])

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 30 })

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 1 : 0}
        onMouseLeave={() => setMegaMenuOpen(false)}
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
              <Button
                onMouseEnter={() => setMegaMenuOpen(true)}
                endIcon={<KeyboardArrowDownIcon sx={{ transition: '0.2s', transform: megaMenuOpen ? 'rotate(180deg)' : 'none' }} />}
                sx={{ color: megaMenuOpen ? BRAND_BLUE : "#4A4A4A", textTransform: "none", fontFamily: PRIMARY_FONT, fontWeight: 600, px: 2 }}
              >
                Products
              </Button>
              {["Services", "Industries", "News & Blog", "About Us", "Contact Us"].map((label) => (
                <Button key={label} sx={{ color: "#4A4A4A", textTransform: "none", fontFamily: PRIMARY_FONT, fontWeight: 500, px: 2, "&:hover": { color: BRAND_BLUE } }}>
                  {label}
                </Button>
              ))}
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <ShoppingCartOutlinedIcon sx={{ fontSize: 28, color: "#999" }} />
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Typography variant="caption" display="block" sx={{ fontWeight: 700, color: BRAND_BLUE, lineHeight: 1.2 }}>Get Connected</Typography>
                <Typography variant="caption" display="block" sx={{ fontWeight: 700, color: BRAND_BLUE, lineHeight: 1.2 }}>Quick Order?</Typography>
              </Box>
              <IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { md: "none" }, color: "inherit" }}><MenuIcon /></IconButton>
            </Stack>
          </Toolbar>
        </Container>

        <Fade in={megaMenuOpen}>
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
            }}
          >
            <Container maxWidth="lg" sx={{ p: 0 }}>
              <Grid container>
                {/* 1. Left Selection (White) */}
                <Grid size={{ md: 3 }} sx={{ backgroundColor: "white", py: 4 }}>
                  <Stack spacing={0}>
                    {productData.categories.map((cat) => (
                      <Box
                        key={cat.id}
                        onMouseEnter={() => setActiveTab(cat)}
                        sx={{
                          px: 4,
                          py: 2,
                          cursor: "pointer",
                          fontFamily: PRIMARY_FONT,
                          fontWeight: activeTab.id === cat.id ? 700 : 500,
                          color: activeTab.id === cat.id ? BRAND_BLUE : "#4A4A4A",
                          backgroundColor: activeTab.id === cat.id ? "#F9FAFB" : "transparent",
                          transition: "0.2s",
                        }}
                      >
                        {cat.label}
                      </Box>
                    ))}
                  </Stack>
                </Grid>

                {/* 2. Right Content (Grey) */}
                <Grid size={{ md: 9 }} sx={{ backgroundColor: "#F9FAFB", borderLeft: "1px solid #E0E0E0", py: 4, px: 2 }}>
                  <Grid container>
                    {activeTab.items.map((item) => (
                      <Grid size={{ xs: 4 }} key={item}>
                        <Box
                          component="a"
                          href="#"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            p: 2,
                            textDecoration: "none",
                            color: "#4A4A4A",
                            fontFamily: PRIMARY_FONT,
                            fontSize: "0.95rem",
                            transition: "0.2s",
                            "& .item-arrow": { opacity: 0, ml: -2, transition: "0.2s" },
                            "&:hover": {
                              color: BRAND_BLUE,
                              "& .item-arrow": { opacity: 1, ml: 1 }
                            }
                          }}
                        >
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

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { width: "100%", maxWidth: 350 } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setOpenDrawer(false)}><CloseIcon /></IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {["Products", "Services", "Industries", "News & Blog", "About Us", "Contact Us"].map((text) => (
            <ListItem key={text} disablePadding sx={{ borderBottom: '1px solid #eee' }}>
              <ListItemButton sx={{ py: 2 }}>
                <ListItemText primary={text} primaryTypographyProps={{ fontFamily: PRIMARY_FONT, fontWeight: 600 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default Navbar