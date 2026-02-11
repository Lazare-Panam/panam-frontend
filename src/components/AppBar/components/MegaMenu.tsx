import React from "react"
import { Box, Fade, Container, Grid, Stack, Typography } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

// Pro Tip: Keep these synced with your main file or a theme constants file
const BRAND_BLUE = "#01B0F0"
const PRIMARY_FONT = '"Inter", "Roboto", "Helvetica", Arial, sans-serif'

interface MegaMenuProps {
  isOpen: boolean
  menuData: any[] // We use the array based on the current megaMenuOpen key
  activeTab: any
  setActiveTab: (tab: any) => void
  handleNavigate: (link: string) => void
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, menuData, activeTab, setActiveTab, handleNavigate }) => {
  return (
    <Fade in={isOpen}>
      <Box
        sx={{
          position: "absolute",
          top: { xs: 70, md: 90 },
          left: 0,
          right: 0,
          backgroundColor: "white",
          borderBottom: "1px solid #E0E0E0",
          boxShadow: "0px 15px 30px rgba(0,0,0,0.08)",
          zIndex: 4, // Just below the search bar but above content
        }}>
        <Container maxWidth="lg" sx={{ p: 0 }}>
          <Grid container>
            {/* Left Sidebar: Categories */}
            <Grid size={{ md: 3 }} sx={{ backgroundColor: "white", py: 4, borderRight: "1px solid #F0F0F0" }}>
              <Stack spacing={0}>
                {menuData.map((cat: any) => (
                  <Box
                    key={cat.id}
                    onMouseEnter={() => setActiveTab(cat)}
                    onClick={() => handleNavigate(cat.link)}
                    sx={{
                      px: 4,
                      py: 1.8,
                      cursor: "pointer",
                      fontFamily: PRIMARY_FONT,
                      fontWeight: activeTab?.id === cat.id ? 700 : 500,
                      color: activeTab?.id === cat.id ? BRAND_BLUE : "#4A4A4A",
                      backgroundColor: activeTab?.id === cat.id ? "#F9FAFB" : "transparent",
                      transition: "0.2s",
                      borderLeft: activeTab?.id === cat.id ? `4px solid ${BRAND_BLUE}` : "4px solid transparent",
                    }}>
                    {cat.label}
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Right Side: Specific Items */}
            <Grid size={{ md: 9 }} sx={{ backgroundColor: "#F9FAFB", py: 4, px: 6 }}>
              <Typography variant="overline" sx={{ color: "#999", fontWeight: 700, mb: 3, display: "block", letterSpacing: 1.5 }}>
                Explore {activeTab?.label}
              </Typography>
              <Grid container spacing={2}>
                {activeTab?.items?.map((item: any) => (
                  <Grid size={{ xs: 6, md: 4 }} key={item.name}>
                    <Box
                      onClick={() => handleNavigate(item.link)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        py: 1,
                        textDecoration: "none",
                        color: "#4A4A4A",
                        fontFamily: PRIMARY_FONT,
                        fontSize: "0.9rem",
                        transition: "0.2s",
                        cursor: "pointer",
                        "&:hover": { color: BRAND_BLUE, transform: "translateX(5px)" },
                      }}>
                      {item.name}
                      <ArrowForwardIcon sx={{ fontSize: 14, ml: 1, opacity: 0.5 }} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fade>
  )
}

export default MegaMenu
