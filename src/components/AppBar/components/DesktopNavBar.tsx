import { Box, Container, Toolbar, Stack, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { NavLink } from "./NavLink";
import { ActionStack } from "./ActionStack";
import { NAV_LINKS } from "../components/config"; 
import AccreditationStack from "./AccredationStack";

const DesktopNavbar = (props: any) => {
  const navigate = useNavigate();
  const { 
    isSearchOpen, 
    megaMenuOpen, 
    handleMouseEnter, 
    cartCount, 
    setOpenDrawer, 
    setIsSearchOpen 
  } = props;

  const LOGO_URL = "https://cdn.jsdelivr.net/gh/Lazare-Panam/panam-images@main/websitemedia/PANAM%20LOGO%20-%20PNG%20(1).png";

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ height: 90, justifyContent: "space-between" }}>
        
        <Box 
          onClick={() => navigate("/")} 
          sx={{ cursor: "pointer", zIndex: 10, display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          <Box 
            component="img" 
            src={LOGO_URL} 
            alt="Logo"
            sx={{ height: 70, width: "auto", objectFit: "contain" }} 
          />
        </Box>

        <Box sx={{ 
          flexGrow: 1, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "flex-start",
          position: "relative",
          height: "100%",
          mx: 2
        }}>
          <Fade in={!isSearchOpen} timeout={400} unmountOnExit>
            <Stack 
              direction="row" 
              spacing={1} 
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {NAV_LINKS.map((item) => (
                <NavLink 
                  key={item.id} 
                  item={item} 
                  isOpen={megaMenuOpen === item.id}
                  onHover={() => item.hasMenu && handleMouseEnter(item.id)}
                  onClick={() => navigate(item.path)}
                />
              ))}
            </Stack>
          </Fade>
          <SearchBar
            isSearchOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        </Box>

        {!isSearchOpen && <AccreditationStack />}
        
        <ActionStack 
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          cartCount={cartCount}
          setOpenDrawer={setOpenDrawer}
        />
      </Toolbar>
    </Container>
  );
};

export default DesktopNavbar;