import React from "react"
import { AppBar, Toolbar, Typography, Button, Stack, Container, useScrollTrigger, Box } from "@mui/material"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "Products", href: "#features" },
  { label: "Services", href: "#infra" },
  { label: "Industries", href: "#pricing" },
  { label: "News & Blog", href: "#pricing" },
  { label: "About Us", href: "#docs" },
  { label: "Contact Us", href: "#docs" },
]

const Navbar: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
  })

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 1 : 0}
      sx={{
        backgroundColor: trigger ? "rgba(255, 255, 255, 0.95)" : "white",
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease-in-out",
        // Now using black text explicitly so it's visible on white backgrounds
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
          <Typography
            variant="h5"
            sx={{
              fontFamily: PRIMARY_FONT,
              fontWeight: 800,
              letterSpacing: "-1px",
              cursor: "pointer",
              color: BRAND_BLUE, // Deep black for the logo
            }}>
            Panam
            <Box component="span" sx={{ color: BRAND_BLUE }}>
              {" "}
              Valves
            </Box>
          </Typography>

          {/* DESKTOP NAVIGATION */}
          <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {navLinks.map(link => (
              <Button
                key={link.label}
                href={link.href}
                sx={{
                  color: "#4A4A4A", // Soft black/grey for nav items
                  textTransform: "none",
                  fontFamily: PRIMARY_FONT,
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  px: 2,
                  "&:hover": {
                    color: BRAND_BLUE, // Highlight text on hover
                    backgroundColor: "transparent",
                  },
                }}>
                {link.label}
              </Button>
            ))}
          </Stack>

          {/* ACTION BUTTONS */}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* <Button
              variant="text"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                textTransform: "none",
                fontFamily: PRIMARY_FONT,
                fontWeight: 600,
                color: "#1A1A1A",
              }}>
              Log in
            </Button> */}
            <ShoppingCartOutlinedIcon sx={{ fontSize: 28, color: "#999" }} />
            <Box>
              <Typography variant="caption" display="block" sx={{ fontWeight: 700, color: BRAND_BLUE, lineHeight: 1.2 }}>
                Get Connected
              </Typography>
              <Typography variant="caption" display="block" sx={{ fontWeight: 700, color: BRAND_BLUE, lineHeight: 1.2 }}>
                Quick Order?
              </Typography>
              {/* <Typography variant="caption" sx={{ color: "#666" }}>
                  Log in or{" "}
                  <MuiLink 
                    href="/register" 
                    underline="always" 
                    sx={{ color: BRAND_BLUE, fontWeight: 600, cursor: 'pointer' }}
                  >
                    register now.
                  </MuiLink>
                </Typography> */}
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
