import React, { useState } from "react";
import {
  Box,
  Container,
  Toolbar,
  Stack,
  Fade,
  Button,
  IconButton,
  Badge,
  Typography,
  Modal,
  Paper,
  CircularProgress,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

// Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Project Components & API
import SearchBar from "./SearchBar";
import ConfigModal from "../../Custom_Configuration/ConfigureModal";
import StaticProductModal from "../../Product_Gallery/components/StaticProductModal";
import { convertCode, logoutUser } from "../../../api/authApi"; // Added logoutUser
import { getProductSpecification } from "../../../api/productApi";
import { STATIC_PRODUCTS } from "../../Product_Gallery/components/Static-data";

// Store Import
import { useUserStore } from "../../store/useUserStore";
import { useNotificationStore } from "../../store/useNotficationStore";

const BRAND_BLUE = "#01B0F0";
const BRAND_BLUE_DARK = "#0088BA";
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif';

const CODE_MAP: Record<string, string> = {
  BU: "union",
  NV: "hp-series-needle-valves",
  TC: "adaptor-cap-others",
};

interface DesktopNavbarProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
  megaMenuOpen: string | null;
  handleMouseEnter: (id: string) => void;
  cartCount: number;
  setOpenDrawer: (isOpen: boolean) => void;
  navigate?: (link: string) => void;
}

export default function DesktopNavbar({
  isSearchOpen,
  setIsSearchOpen,
  megaMenuOpen,
  handleMouseEnter,
  cartCount,
  setOpenDrawer,
  navigate: navigateProp,
}: DesktopNavbarProps) {
  const navigateHook = useNavigate();
  const showNotification = useNotificationStore((state) => state.showNotification);

  // --- User Store & Auth Logic ---
  const { firstName, lastName, isAuthenticated, clearUser } = useUserStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const userInitials = `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`.toUpperCase();

  const handleNavigation = (path: string) => {
    if (navigateProp) navigateProp(path);
    else navigateHook(path);
  };

  const handleAccountClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isAuthenticated) setAnchorEl(event.currentTarget);
    else handleNavigation("/login");
  };

  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = async () => {
    try {
      // 1. Tell the server we are logging out
      await logoutUser();
    } catch (error) {
      console.error("Server-side logout failed", error);
    } finally {
      // 2. Always clear local state regardless of server response
      clearUser();
      handleMenuClose();
      showNotification({ message: "Logged out successfully", severity: "info" });
      handleNavigation("/login");
    }
  };

  // --- AI Search Logic ---
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  // --- Product State ---
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isStaticModalOpen, setIsStaticModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const getMappedIdFromRawCode = (code: string) => {
    if (!code || !code.startsWith("P") || !code.includes("-")) return null;
    try {
      const extracted = code.split("P")[1].split("-")[0].toUpperCase();
      return CODE_MAP[extracted] || null;
    } catch { return null; }
  };

  const aiMappedId = searchResult ? getMappedIdFromRawCode(searchResult) : null;

  const handleSearchSubmit = async (query: string) => {
    const cleanQuery = query.trim();
    if (cleanQuery.toUpperCase().startsWith("P")) {
      const directId = getMappedIdFromRawCode(cleanQuery);
      if (directId) {
        setSelectedProductId(directId);
        if (STATIC_PRODUCTS[directId]) setIsStaticModalOpen(true);
        else setIsConfigOpen(true);
        setIsSearchOpen(false);
        return;
      }
    }

    setSearchLoading(true);
    setIsResultModalOpen(true);
    try {
      const data = await convertCode(cleanQuery);
      setSearchResult(data.panamCode);
    } catch (error) {
      setSearchResult(null);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleOpenConfigureFromAI = () => {
    if (!aiMappedId) return;
    setIsResultModalOpen(false);
    setSelectedProductId(aiMappedId);
    if (STATIC_PRODUCTS[aiMappedId]) setIsStaticModalOpen(true);
    else setIsConfigOpen(true);
  };

  const { data: specification } = useQuery({
    queryKey: ["productSpecification", selectedProductId],
    queryFn: () => getProductSpecification(selectedProductId!),
    enabled: isConfigOpen && !!selectedProductId && !STATIC_PRODUCTS[selectedProductId],
  });

  return (
    <Container maxWidth="xl" sx={{ position: "relative" }}>
      <Toolbar disableGutters sx={{ height: { xs: 70, md: 90 }, justifyContent: "space-between" }}>
        
        {/* Logo */}
        <Box component="a" onClick={() => handleNavigation("/")} sx={{ cursor: "pointer", display: "flex", alignItems: "center", zIndex: 10 }}>
          <Box component="img" src="https://res.cloudinary.com/dm9rmmemx/image/upload/v1769097040/1_jdvwbk.png" sx={{ height: { xs: 50, md: 70 } }} />
        </Box>

        {/* Navigation */}
        {/* Navigation */}
<Box sx={{ flexGrow: 1, display: "flex", height: "100%", alignItems: "center", position: "relative", overflow: "hidden" }}>
  <Fade in={!isSearchOpen} timeout={400}>
    <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: isSearchOpen ? "none" : "flex" }, ml: 6 }}>
      {[
        { label: "Products", id: "products" },
        { label: "News & Blog", id: "blog" },
        { label: "About Us", id: "about" },
        { label: "My Account", id: "dashboard", isStatic: true },
        { label: "Contact Us", id: "enquiry" },
      ].map((item) => (
        <Button
          key={item.id}
          // Only trigger the Mega Menu if it's NOT the enquiry/contact button
          onMouseEnter={() => item.id !== "enquiry" ? handleMouseEnter(item.id) : null}
          onClick={() => handleNavigation(`/${item.id}`)}
          
          // Only show the Down Arrow if it's NOT the enquiry/contact button
          endIcon={item.id !== "enquiry" && (
            <KeyboardArrowDownIcon sx={{ 
              transition: "0.2s", 
              transform: megaMenuOpen === item.id ? "rotate(180deg)" : "none" 
            }} />
          )}
          
          sx={{ color: "#1A1A1A", textTransform: "none", fontFamily: PRIMARY_FONT, fontWeight: 600 }}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  </Fade>
  <SearchBar isSearchOpen={isSearchOpen} onSearch={handleSearchSubmit} />
</Box>

        {/* Actions */}
        <Stack direction="row" spacing={1} alignItems="center" sx={{ zIndex: 10 }}>
          <IconButton
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            sx={{
              color: isSearchOpen ? "white" : BRAND_BLUE,
              backgroundColor: isSearchOpen ? "#003366" : "transparent",
              borderRadius: 0, height: "90px", width: "70px", transition: "0.4s",
              "&:hover": { backgroundColor: isSearchOpen ? "#002244" : "rgba(0,0,0,0.04)" },
            }}
          >
            {isSearchOpen ? <CloseIcon sx={{ fontSize: 40 }} /> : <SearchIcon sx={{ fontSize: 32 }} />}
          </IconButton>

          {/* Account Icon */}
          <IconButton onClick={handleAccountClick} sx={{ color: BRAND_BLUE, p: 1.5 }}>
            {isAuthenticated ? (
              <Avatar sx={{ width: 38, height: 38, bgcolor: BRAND_BLUE, fontSize: "1rem", fontWeight: 700, fontFamily: PRIMARY_FONT }}>
                {userInitials}
              </Avatar>
            ) : (
              <PersonOutlineIcon sx={{ fontSize: 34 }} />
            )}
          </IconButton>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
              sx: {
                mt: 1.5, borderRadius: 0, minWidth: 200, boxShadow: '0px 10px 25px rgba(0,0,0,0.1)', border: '1px solid #eee',
                '& .MuiMenuItem-root': { fontFamily: PRIMARY_FONT, py: 1.5, px: 2, fontSize: '0.9rem' }
              }
            }}
          >
            <MenuItem onClick={() => { handleMenuClose(); handleNavigation("/dashboard"); }}>
              <AccountCircleIcon sx={{ mr: 2, fontSize: 20, color: BRAND_BLUE }} />
              My Account
            </MenuItem>
            <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
              <LogoutIcon sx={{ mr: 2, fontSize: 20 }} />
              Logout
            </MenuItem>
          </Menu>

          <Stack direction="row" spacing={1.5} alignItems="center" onClick={() => handleNavigation("/cart")} sx={{ cursor: "pointer", pl: 1 }}>
            <Badge badgeContent={cartCount} sx={{ "& .MuiBadge-badge": { backgroundColor: BRAND_BLUE, color: "white" } }}>
              <ShoppingCartOutlinedIcon sx={{ fontSize: 28, color: "#4A4A4A" }} />
            </Badge>
          </Stack>

          <IconButton onClick={() => setOpenDrawer(true)} sx={{ display: { md: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Stack>
      </Toolbar>

      {/* AI and Product Modals (Keep as they were) */}
      <Modal open={isResultModalOpen} onClose={() => setIsResultModalOpen(false)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Fade in={isResultModalOpen}>
          <Paper sx={{ p: 4, width: '90%', maxWidth: 450, textAlign: 'center', borderRadius: 0, border: '1px solid #eee', outline: 'none' }}>
            {searchLoading ? (
              <Box sx={{ py: 4 }}><CircularProgress size={50} sx={{ color: BRAND_BLUE }} /><Typography sx={{ mt: 2, fontWeight: 600 }}>CONSULTING DATABASE...</Typography></Box>
            ) : (
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: BRAND_BLUE }}>AI CONVERSION</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>MATCH FOUND IN TECHNICAL CATALOG</Typography>
                <Box sx={{ p: 3, bgcolor: '#f9f9f9', border: `1px solid ${BRAND_BLUE}`, mb: 3 }}><Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: 1 }}>{searchResult || "NO MATCH"}</Typography></Box>
                {aiMappedId ? (
                  <Button fullWidth variant="contained" onClick={handleOpenConfigureFromAI} sx={{ mb: 1, py: 1.5, bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 700, "&:hover": { bgcolor: BRAND_BLUE_DARK } }}>CONFIGURE {aiMappedId.toUpperCase()}</Button>
                ) : (
                  <Typography color="error" variant="caption" display="block" sx={{ mb: 2 }}>This specific component cannot be configured online.</Typography>
                )}
                <Button fullWidth onClick={() => setIsResultModalOpen(false)} sx={{ color: '#666', fontWeight: 600 }}>CLOSE</Button>
              </Box>
            )}
          </Paper>
        </Fade>
      </Modal>

      {isConfigOpen && specification && (
        <ConfigModal open={isConfigOpen} onClose={() => { setIsConfigOpen(false); setSelectedProductId(null); }} product={{ id: specification.id || selectedProductId!, title: specification.title, description: specification.description, imageUrl: specification.imageUrl, capabilities: specification.capabilities, configurations: specification.configurations }} key={selectedProductId} />
      )}

      <StaticProductModal open={isStaticModalOpen} onClose={() => { setIsStaticModalOpen(false); setSelectedProductId(null); }} productId={selectedProductId} key={`static-${selectedProductId}`} />
    </Container>
  );
}