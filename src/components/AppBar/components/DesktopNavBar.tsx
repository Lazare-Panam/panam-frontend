import { Box, Container, Toolbar, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar"
import { NavLink } from "./NavLink"
import { ActionStack } from "./ActionStack"
import { NAV_LINKS } from "../components/config"
import AccreditationStack from "./AccredationStack"

const DesktopNavbar = (props: any) => {
  const navigate = useNavigate()
  const { megaMenuOpen, handleMouseEnter, cartCount, setOpenDrawer } = props

  // Transparent, tightly trimmed logo (the old JPG had an off-white box behind it)
  const LOGO_URL = "/brands/panam-logo-nav.png"

  return (
    <Box sx={{ position: 'relative' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: { xs: 72, md: 80 }, justifyContent: "space-between" }}>
          
          <Box onClick={() => navigate("/")} sx={{ cursor: "pointer", zIndex: 10, display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Box component="img" src={LOGO_URL} alt="Panam logo" sx={{ height: { xs: 36, md: 42 }, width: "auto", objectFit: "contain" }} />
          </Box>

          <Box sx={{ flexGrow: { xs: 1, xl: 0 }, flexShrink: 0, display: "flex", alignItems: "center", mx: { md: 1, xl: 0.5 } }}>
            <Stack direction="row" spacing={0} sx={{ display: { xs: "none", md: "flex" }, ml: { md: 1, lg: 2.5, xl: 2 } }}>
              {NAV_LINKS.map(item => (
                <NavLink
                  key={item.id}
                  item={item}
                  isOpen={megaMenuOpen === item.id}
                  onHover={() => item.hasMenu && handleMouseEnter(item.id)}
                  onClick={() => navigate(item.path)}
                />
              ))}
            </Stack>
          </Box>

          {/* Inline search on wide screens (one-row header) */}
          <Box sx={{ display: { xs: "none", xl: "block" }, flex: "1 1 auto", maxWidth: 560, minWidth: 260, ml: { xl: 3 }, mr: 4 }}>
            <SearchBar inline />
          </Box>

          <AccreditationStack />

          <ActionStack
            cartCount={cartCount}
            setOpenDrawer={setOpenDrawer}
          />
        </Toolbar>
      </Container>

      {/* Always-visible search row on smaller screens */}
      <Box sx={{ display: { xs: "block", xl: "none" } }}>
        <SearchBar />
      </Box>
    </Box>
  )
}

export default DesktopNavbar