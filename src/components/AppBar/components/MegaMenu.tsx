import React from "react";
import { Box, Container, Typography, Fade } from "@mui/material";
import Grid from "@mui/material/Grid"; // Ensure you are using Grid2
import { type NavCategory , PRIMARY_FONT} from "./config";

const BRAND_BLUE = "#01B0F0";

interface MegaMenuProps {
  isOpen: boolean;
  menuData: NavCategory[];
  activeTab: NavCategory | null;
  setActiveTab: (tab: NavCategory) => void;
  handleNavigate: (link: string) => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ 
  isOpen, 
  menuData, 
  activeTab, 
  setActiveTab, 
  handleNavigate 
}) => {
  if (!menuData || menuData.length === 0) return null;

  return (
    <Fade in={isOpen}>
      <Box
        sx={{
          position: "absolute",
          top: 90, 
          left: 0,
          right: 0,
          bgcolor: "white",
          boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
          zIndex: 5,
          borderTop: "1px solid #F0F0F0",
          fontFamily: PRIMARY_FONT
        }}
      >
        <Container maxWidth="xl" sx={{ p: 0 }}>
          <Grid container sx={{ minHeight: 500 }}>
            
            {/* LEFT SIDEBAR */}
            <Grid size={{ md: 3 }} sx={{ borderRight: "1px solid #F0F0F0", py: 4, bgcolor: "#FAFAFA" }}>
              {menuData.map((cat) => (
                <Box
                  key={cat.id}
                  onMouseEnter={() => setActiveTab(cat)}
                  onClick={() => handleNavigate(cat.link)}
                  sx={{
                    px: 4,
                    py: 1.5,
                    cursor: "pointer",
                    transition: "0.2s",
                    fontWeight: activeTab?.id === cat.id ? 700 : 500,
                    color: activeTab?.id === cat.id ? BRAND_BLUE : "#4A4A4A",
                    bgcolor: activeTab?.id === cat.id ? "#F4FBFF" : "transparent",
                    borderLeft: `4px solid ${activeTab?.id === cat.id ? BRAND_BLUE : "transparent"}`,
                    "&:hover": { color: BRAND_BLUE, bgcolor: "#F4FBFF" }
                  }}
                >
                  {cat.label}
                </Box>
              ))}
            </Grid>

            {/* RIGHT CONTENT AREA */}
            <Grid size={{ md: 9 }} sx={{ p: 6 }}>
              {/* Active Category Header */}
              <Typography 
                variant="overline" 
                sx={{ 
                  color: BRAND_BLUE, 
                  fontWeight: 800, 
                  mb: 4, 
                  display: 'block', 
                  letterSpacing: 1.5,
                  fontSize: "0.75rem"
                }}
              >
                {activeTab?.label}
              </Typography>
              
              {/* Nested Grid for Items */}
              <Grid container spacing={3}>
                {activeTab?.items?.map((item) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.name}>
                    <Box
                      onClick={() => item.link && handleNavigate(item.link)}
                      sx={{
                        fontSize: "0.9rem",
                        color: "#555",
                        cursor: item.link ? "pointer" : "default",
                        transition: "0.2s",
                        "&:hover": item.link ? {
                          color: BRAND_BLUE,
                          transform: "translateX(8px)",
                        } : {},
                      }}
                    >
                      {item.name}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </Fade>
  );
};

export default MegaMenu;