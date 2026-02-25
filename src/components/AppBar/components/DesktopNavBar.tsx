import  { useState } from "react";
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

// Project Components & API
import SearchBar from "./SearchBar";
import ConfigModal from "../../Custom_Configuration/ConfigureModal";
import StaticProductModal from "../../Product_Gallery/components/StaticProductModal";
import { convertCode } from "../../../api/authApi";
import { getProductSpecification } from "../../../api/productApi";
import { STATIC_PRODUCTS } from "../../Product_Gallery/components/Static-data";

const BRAND_BLUE = "#01B0F0";
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
  navigate?: (link: string) => void; // Optional prop from parent
}

export default function DesktopNavbar({
  isSearchOpen,
  setIsSearchOpen,
  megaMenuOpen,
  handleMouseEnter,
  cartCount,
  setOpenDrawer,
  navigate: navigateProp, // Renamed to avoid collision with hook
}: DesktopNavbarProps) {
  const navigateHook = useNavigate();
  
  // Use the prop if provided, otherwise fallback to the hook
  const handleNavigation = (path: string) => {
    if (navigateProp) {
      navigateProp(path);
    } else {
      navigateHook(path);
    }
  };

  // --- AI Search Result State ---
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  // --- Product Interaction State ---
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isStaticModalOpen, setIsStaticModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const getMappedIdFromRawCode = (code: string) => {
    if (!code || !code.startsWith("P") || !code.includes("-")) return null;
    try {
      const extracted = code.split("P")[1].split("-")[0].toUpperCase();
      return CODE_MAP[extracted] || null;
    } catch {
      return null;
    }
  };

  const aiMappedId = searchResult ? getMappedIdFromRawCode(searchResult) : null;

  const handleSearchSubmit = async (query: string) => {
    const cleanQuery = query.trim();
    if (cleanQuery.toUpperCase().startsWith("P")) {
      const directId = getMappedIdFromRawCode(cleanQuery);
      if (directId) {
        setSelectedProductId(directId);
        if (STATIC_PRODUCTS[directId]) {
          setIsStaticModalOpen(true);
        } else {
          setIsConfigOpen(true);
        }
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
      console.error("AI Search Error:", error);
      setSearchResult(null);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleOpenConfigureFromAI = () => {
    if (!aiMappedId) return;
    setIsResultModalOpen(false);
    setSelectedProductId(aiMappedId);

    if (STATIC_PRODUCTS[aiMappedId]) {
      setIsStaticModalOpen(true);
    } else {
      setIsConfigOpen(true);
    }
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

        {/* Navigation & Search Overlay */}
        <Box sx={{ flexGrow: 1, display: "flex", height: "100%", alignItems: "center", position: "relative", overflow: "hidden" }}>
          <Fade in={!isSearchOpen} timeout={400}>
            <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: isSearchOpen ? "none" : "flex" }, ml: 6 }}>
              {[
                { label: "Products", id: "products" },
                { label: "Industries", id: "industries" },
                { label: "News & Blog", id: "news" },
                { label: "About Us", id: "about" },
                { label: "Account", id: "account" },

              ].map((item) => (
                <Button
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onClick={() => handleNavigation(`/${item.id}`)}
                  endIcon={<KeyboardArrowDownIcon sx={{ transition: "0.2s", transform: megaMenuOpen === item.id ? "rotate(180deg)" : "none" }} />}
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

          <IconButton onClick={() => handleNavigation("/account")} sx={{ color: BRAND_BLUE, p: 1.5 }}>
            <PersonOutlineIcon sx={{ fontSize: 34 }} />
          </IconButton>

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

      {/* AI Modal */}
      <Modal open={isResultModalOpen} onClose={() => setIsResultModalOpen(false)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Fade in={isResultModalOpen}>
          <Paper sx={{ p: 4, width: '90%', maxWidth: 450, textAlign: 'center', borderRadius: 0, border: '1px solid #eee', outline: 'none' }}>
            {searchLoading ? (
              <Box sx={{ py: 4 }}>
                <CircularProgress size={50} sx={{ color: BRAND_BLUE }} />
                <Typography sx={{ mt: 2, fontWeight: 600 }}>CONSULTING DATABASE...</Typography>
              </Box>
            ) : (
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, color: BRAND_BLUE }}>AI CONVERSION</Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>MATCH FOUND IN TECHNICAL CATALOG</Typography>
                <Box sx={{ p: 3, bgcolor: '#f9f9f9', border: `1px solid ${BRAND_BLUE}`, mb: 3 }}>
                  <Typography variant="h4" sx={{ fontWeight: 900, letterSpacing: 1 }}>{searchResult || "NO MATCH"}</Typography>
                </Box>
                {aiMappedId ? (
                  <Button 
                    fullWidth variant="contained" 
                    onClick={handleOpenConfigureFromAI}
                    sx={{ mb: 1, py: 1.5, bgcolor: BRAND_BLUE, borderRadius: 0, fontWeight: 700 }}
                  >
                    CONFIGURE {aiMappedId.toUpperCase()}
                  </Button>
                ) : (
                  <Typography color="error" variant="caption" display="block" sx={{ mb: 2 }}>
                    This specific component cannot be configured online.
                  </Typography>
                )}
                <Button fullWidth onClick={() => setIsResultModalOpen(false)} sx={{ color: '#666', fontWeight: 600 }}>CLOSE</Button>
              </Box>
            )}
          </Paper>
        </Fade>
      </Modal>

      {/* Config & Static Modals */}
      {isConfigOpen && specification && (
        <ConfigModal 
          open={isConfigOpen} 
          onClose={() => { setIsConfigOpen(false); setSelectedProductId(null); }} 
          product={{
            id: specification.id || selectedProductId!,
            title: specification.title,
            description: specification.description,
            imageUrl: specification.imageUrl,
            capabilities: specification.capabilities,
            configurations: specification.configurations,
          }} 
          key={selectedProductId} 
        />
      )}

      <StaticProductModal 
        open={isStaticModalOpen} 
        onClose={() => { setIsStaticModalOpen(false); setSelectedProductId(null); }} 
        productId={selectedProductId} 
        key={`static-${selectedProductId}`}
      />
    </Container>
  );
}