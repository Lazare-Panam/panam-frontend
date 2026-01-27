import React, { useState } from "react"
import { AppBar, Toolbar, Typography, Button, Stack, Container, useScrollTrigger, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MenuIcon from "@mui/icons-material/Menu"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Services", href: "#infra" },
  { label: "Industries", href: "#pricing" },
  { label: "News & Blog", href: "#pricing" },
  { label: "About Us", href: "#docs" },
  { label: "Contact Us", href: "#docs" },
]

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
  })

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 1 : 0}
        sx={{
          backgroundColor: trigger ? "rgba(255, 255, 255, 0.95)" : "white",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease-in-out",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: trigger ? "divider" : "#E0E0E0",
        }}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              height: { xs: 70, md: 80 },
              justifyContent: "space-between",
            }}>
            {/* BRAND LOGO */}
            <Box
              component="a"
              href="/"
              sx={{
                display: "block",
                width: "fit-content",
                textDecoration: "none",
              }}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769097040/1_jdvwbk.png"
                alt="Panam Valves Logo"
                sx={{
                  height: 75,
                  width: "auto",
                  mt: 0.5,
                  mb: 1,
                  display: "block",
                  objectFit: "contain",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
              />
            </Box>

            {/* DESKTOP NAVIGATION */}
            <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
              {navLinks.map(link => (
                <Button
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: "#4A4A4A",
                    textTransform: "none",
                    fontFamily: PRIMARY_FONT,
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    px: 2,
                    "&:hover": {
                      color: BRAND_BLUE,
                      backgroundColor: "transparent",
                    },
                  }}>
                  {link.label}
                </Button>
              ))}
            </Stack>

            {/* ACTION BUTTONS */}
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

              {/* Burger only shows on mobile */}
              <IconButton onClick={() => setOpen(true)} sx={{ display: { md: "none" }, color: "inherit" }}>
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Basic Mobile Menu */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} onClick={() => setOpen(false)}>
          <List>
            {navLinks.map(link => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton href={link.href}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
