import React from "react"
import { Box, Container, Toolbar, Stack, Fade, Button, IconButton, Badge, Typography } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"
import SearchBar from "./SearchBar" // Assuming it's in the same folder

// These should ideally come from a theme file, but keeping them here for consistency
const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface DesktopNavbarProps {
  isSearchOpen: boolean
  setIsSearchOpen: (isOpen: boolean) => void
  megaMenuOpen: string | null
  handleMouseEnter: (id: string) => void
  cartCount: number
  navigate: (path: string) => void
  setOpenDrawer: (isOpen: boolean) => void
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ isSearchOpen, setIsSearchOpen, megaMenuOpen, handleMouseEnter, cartCount, navigate, setOpenDrawer }) => {
  return (
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
                { label: "My Account", id: "account"}
              ].map(item => (
                <Button
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onClick={() => navigate(`/${item.id}`)}
                  endIcon={
                    <KeyboardArrowDownIcon
                      sx={{
                        transition: "0.2s",
                        transform: megaMenuOpen === item.id ? "rotate(180deg)" : "none",
                        fontSize: 18,
                      }}
                    />
                  }
                  sx={{ color: "#1A1A1A", textTransform: "none", fontFamily: PRIMARY_FONT, fontSize: "0.95rem", fontWeight: 600, px: 2 }}>
                  {item.label}
                </Button>
              ))}
             
            </Stack>
          </Fade>

          {/* Search Bar Component */}
          <SearchBar isSearchOpen={isSearchOpen} />
        </Box>

        {/* Action Icons Section */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ zIndex: 10 }}>
          {/* Search Toggle */}
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
            {isSearchOpen ? <CloseIcon sx={{ fontSize: 40 }} /> : <SearchIcon sx={{ fontSize: 32 }} />}
          </IconButton>

          {/* Account Icon */}
          <IconButton onClick={() => navigate("/account")} sx={{ color: BRAND_BLUE, p: 1.5 }}>
            <PersonOutlineIcon sx={{ fontSize: 34 }} />
          </IconButton>

          {/* Cart Section */}
          <Stack direction="row" spacing={1.5} alignItems="center" onClick={() => navigate("/cart")} sx={{ cursor: "pointer", pl: 1 }}>
            <Badge
              badgeContent={cartCount}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: BRAND_BLUE,
                  color: "white",
                  fontWeight: 800,
                  fontFamily: PRIMARY_FONT,
                  fontSize: "0.75rem",
                },
              }}>
              <ShoppingCartOutlinedIcon sx={{ fontSize: 28, color: "#4A4A4A" }} />
            </Badge>

            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Typography variant="caption" display="block" sx={{ fontWeight: 700, color: BRAND_BLUE, lineHeight: 1.2 }}>
                Quick Order?
              </Typography>
            </Box>
          </Stack>

          {/* Mobile Menu Toggle */}
          <IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { md: "none" }, color: "inherit" }}>
            <MenuIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </Container>
  )
}

export default DesktopNavbar
