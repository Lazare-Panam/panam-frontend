import React from "react"
import { AppBar, Toolbar, Typography, Button, Stack, Container, useScrollTrigger, Box } from "@mui/material"

const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Infrastructure", href: "#infra" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
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
        borderColor: trigger ? "divider" : "transparent",
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
              color: "#1A1A1A", // Deep black for the logo
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
            <Button
              variant="text"
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                textTransform: "none",
                fontFamily: PRIMARY_FONT,
                fontWeight: 600,
                color: "#1A1A1A",
              }}>
              Log in
            </Button>
            <Button
              variant="contained"
              disableElevation
              sx={{
                borderRadius: "6px", // Slightly sharper for industrial look
                px: 3,
                py: 1,
                textTransform: "none",
                fontFamily: PRIMARY_FONT,
                fontWeight: 700,
                fontSize: "0.9rem",
                backgroundColor: BRAND_BLUE,
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#0090C5",
                  boxShadow: `0 4px 14px 0 rgba(1, 176, 240, 0.39)`, // Professional glow
                },
              }}>
              Get Started
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
