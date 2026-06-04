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

  const LOGO_URL = "https://pblol2.blob.core.windows.net/panam-images/panam-resize_smallest.jpg"

  return (
    <Box sx={{ position: 'relative' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: 90, justifyContent: "space-between" }}>
          
          <Box onClick={() => navigate("/")} sx={{ cursor: "pointer", zIndex: 10, display: "flex", alignItems: "center", flexShrink: 0 }}>
            <Box component="img" src={LOGO_URL} alt="Panam logo" sx={{ height: 70, width: "auto", objectFit: "contain" }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", mx: 2 }}>
            <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
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

          <AccreditationStack />

          <ActionStack
            cartCount={cartCount}
            setOpenDrawer={setOpenDrawer}
          />
        </Toolbar>
      </Container>

      {/* Always visible search bar */}
      <SearchBar />
    </Box>
  )
}

export default DesktopNavbar